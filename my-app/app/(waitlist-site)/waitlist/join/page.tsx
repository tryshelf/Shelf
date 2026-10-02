"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/app/utils/supabase";
import shelf from '@/public/Assets/shelf_icon.png'

interface Formdata {
  name: string;
  email: string;
  location: string;
  role: "" | "publish" | "read" | "both";
}

export default function JoinWaitlist() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<Formdata>({
    name: "",
    email: "",
    location: "",
    role: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const totalSteps = 5;

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleNext = () => {
    setErrorMessage("");

    if (step === 2) {
      if (!formData.name.trim() || !formData.location.trim()) {
        setErrorMessage("Please complete all fields before continuing.");
        return;
      }
    }

    if (step === 3) {
      if (!formData.email.trim()) {
        setErrorMessage("Please enter your email address.");
        return;
      }

      if (!/\S+@\S+\.\S+/.test(formData.email)) {
        setErrorMessage("Please enter a valid email address.");
        return;
      }
    }

    if (step < totalSteps - 1) {
      setStep(step + 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setErrorMessage("");

    if (!formData.role) {
      setErrorMessage("Please choose an option before continuing.");
      return;
    }

    setLoading(true);

    try {
      // Save signup to Supabase
      const { error } = await supabase.from("waitlist").insert({
        name: formData.name,
        email: formData.email.trim().toLowerCase(),
        location: formData.location,
        role: formData.role,
      });

      if (error) {
        console.error("Supabase error:", error);

        if (error.code === "23505") {
          setErrorMessage(
            "You're already on the list. This email has already been registered.",
          );
        } else {
          setErrorMessage("Something went wrong. Please try again.");
        }

        setLoading(false);
        return;
      }

      // Send confirmation email (non-blocking if email service fails in dev/unverified domain)
      try {
        const emailResponse = await fetch("/api/waitlist-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            location: formData.location,
            role: formData.role,
          }),
        });

        if (!emailResponse.ok) {
          const resData = await emailResponse.json().catch(() => ({}));
          console.warn(
            "Confirmation email warning:",
            resData.error || emailResponse.statusText,
          );
        }
      } catch (emailErr) {
        console.warn("Email API call failed:", emailErr);
      }

      setLoading(false);
      setStep(5);
    } catch (error) {
      console.error("Submission error:", error);
      setLoading(false);
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  // Progress percentage (e.g. Step 1 = 25%, Step 2 = 50%, etc.)
  const progressPercent = (step / totalSteps) * 100;

  const options: {
    id: "publish" | "read" | "both";
    title: string;
    desc: string;
    icon: string;
    bgColor: string;
    iconColor: string;
  }[] = [
    {
      id: "publish",
      title: "I am here to publish",
      desc: "Share my stories, essays, or novels with readers",
      icon: "lucide:feather",
      bgColor: "bg-[#FDF3E7]",
      iconColor: "text-[#C85231]",
    },
    {
      id: "read",
      title: "I am here to read",
      desc: "Discover authentic African stories and build my digital shelf",
      icon: "lucide:bookmark",
      bgColor: "bg-[#FAF0D7]",
      iconColor: "text-[#8A5A00]",
    },
    {
      id: "both",
      title: "Both (Read & Publish)",
      desc: "Explore both sides of the literary ecosystem",
      icon: "lucide:layers",
      bgColor: "bg-[#E1F5E8]",
      iconColor: "text-[#1E824C]",
    },
  ];

  return (
    <main className="flex justify-center p-4">
      {/* card */}
      <div className="relative mt-15 w-full max-w-xl overflow-hidden rounded-3xl border border-[#E6DEC9] bg-white shadow-xl">
        {/* Card Header with Back button, Title, and Step Counter */}
        <div className="flex items-center justify-between px-6 py-6">
          <h1 className="font-serif text-[20px] leading-7 text-[#1C1917]">
            <Link href="/waitlist">
              {" "}
              <span className="inline-flex items-center gap-1 font-sans text-[12px] leading-4 font-semibold text-[#1C1917]/60">
                <Icon icon="akar-icons:arrow-left" />
                Home
              </span>{" "}
            </Link>
            <span className="mx-1 text-[16px] leading-6 text-[#E6DEC9]">
              /
            </span>{" "}
            Official Launch Waitlist
          </h1>

          <h3 className="font-mono text-xs leading-4 tracking-[1.2px] text-[#1C1917]/50 uppercase">
            step {step} of {totalSteps}
          </h3>
        </div>

        {/* Dynamic Progress Bar */}
        <div className="mb-8 h-1 w-full overflow-hidden rounded-full bg-[#E6DEC9]/30">
          <div
            className="h-full bg-[#C85231] transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Step 1 Content */}
        {step === 1 && (
          <div className="space-y-3 px-6 pb-10 md:p-12">
            <h1 className="mt-3 font-serif text-[48px] leading-12 text-[#1C1917]">
              There is always room for a story.
            </h1>
            <p className="font-sans text-[16px] leading-6 text-[#1C1917]/80">
              Shelf is preparing for its official launch. Reserve your spot
              today to secure early access when we open our doors across African
              literature communities.
            </p>

            <div className="mt-6 rounded-3xl border border-[#E6DEC9]/80 bg-[#F4EFE6] p-4">
              <ul className="space-y-2 font-sans text-[14px] leading-5 font-medium text-[#1C1917]">
                <li className="flex items-center gap-2">
                  <Icon
                    icon="akar-icons:circle-check-fill"
                    className="text-[#C85231]"
                  />
                  Reserve your priority spot for official launch
                </li>
                <li className="flex items-center gap-2">
                  <Icon
                    icon="akar-icons:circle-check-fill"
                    className="text-[#C85231]"
                  />
                  Be the first to know when publishing opens
                </li>
              </ul>
            </div>

            <button
              onClick={handleNext}
              className="mt-10 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#C85231] py-3 font-bold text-white transition hover:opacity-90"
            >
              Next <Icon icon="lucide:arrow-right" />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-3 px-6 pb-10 md:p-12">
            <h1 className="mt-3 font-serif text-[36px] leading-10 text-[#1C1917]">
              What should we call you?
            </h1>
            <p className="font-sans text-[14px] leading-6 text-[#1C1917]/80">
              Let us know your name and where you’re joining from as we build
              across Africa.
            </p>

            <form className="mt-10 space-y-5">
              <div>
                <label className="mb-2.25 block font-mono text-xs text-[#6B625B] uppercase">
                  Your Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Chinua Achebe"
                  className="w-full rounded-xl border border-[#E6DEC9] bg-[#FBF9F5] p-3 outline-none focus:border-[#C85231]"
                />
              </div>
              <div>
                <label className="mb-2.25 block font-mono text-xs text-[#6B625B] uppercase">
                  Location (City, Country)
                </label>
                <input
                  type="text"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Lagos, Nigeria"
                  className="w-full rounded-xl border border-[#E6DEC9] bg-[#FBF9F5] p-3 outline-none focus:border-[#C85231]"
                />
              </div>
            </form>

            <div className="mt-10 flex gap-2">
              <button
                onClick={handleBack}
                className="cursor-pointer rounded-full border border-[#E6DEC9] px-6 py-3 font-sans text-[14px] leading-5 font-medium text-[#1C1917]"
              >
                Back
              </button>

              <button
                onClick={handleNext}
                className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full bg-[#C85231] py-3 font-bold text-white transition hover:opacity-90"
              >
                Next <Icon icon="lucide:arrow-right" />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-3 px-6 pb-10 md:p-12">
            <h1 className="font-serif text-[36px] leading-10 text-[#1C1917]">
              Where can we reach you?
            </h1>
            <p className="font-sans text-[14px] leading-6 whitespace-nowrap text-[#1C1917]/80">
              We’ll send your launch invitation here. No profile or password
              required yet.
            </p>

            <form className="mt-5 space-y-5">
              <div>
                <label className="mb-2.25 block font-mono text-xs text-[#6B625B] uppercase">
                  Email Address
                </label>

                <input
                  type="text"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full rounded-xl border border-[#E6DEC9] bg-[#FBF9F5] p-3 outline-none focus:border-[#C85231]"
                />
              </div>
            </form>

            <div className="mt-10 flex gap-2">
              <button
                onClick={handleBack}
                className="cursor-pointer rounded-full border border-[#E6DEC9] px-6 py-3 font-sans text-[14px] leading-5 font-medium text-[#1C1917]"
              >
                Back
              </button>

              <button
                onClick={handleNext}
                className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full bg-[#C85231] py-3 font-bold text-white transition hover:opacity-90"
              >
                Next <Icon icon="lucide:arrow-right" />
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6 px-6 pb-10 md:p-12">
            <div>
              <h1 className="font-serif text-[32px] leading-10 text-[#1C1917] md:text-[36px]">
                What are you on Shelf for?
              </h1>
              <p className="mt-1 font-sans text-[14px] leading-6 text-[#1C1917]/80">
                Select what you are looking forward to exploring on our
                platform.
              </p>
            </div>

            {/* Selection Cards */}
            <div className="space-y-3">
              {options.map((option) => {
                const isSelected = formData.role === option.id;
                return (
                  <div
                    key={option.id}
                    onClick={() =>
                      setFormData({ ...formData, role: option.id })
                    }
                    className={`flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition-all ${
                      isSelected
                        ? "border-[#C85231] bg-[#FBF8F3]"
                        : "border-[#E6DEC9] bg-[#FDFBF7]/50 hover:border-[#D1BA85]"
                    }`}
                  >
                    {/* Custom Radio Circle */}
                    <div
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                        isSelected ? "border-[#007AFF]" : "border-[#1C1917]/30"
                      }`}
                    >
                      {isSelected && (
                        <div className="h-2.5 w-2.5 rounded-full bg-[#007AFF]" />
                      )}
                    </div>

                    {/* Square Icon Container */}
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${option.bgColor}`}
                    >
                      <Icon
                        icon={option.icon}
                        className={`h-5 w-5 ${option.iconColor}`}
                      />
                    </div>

                    {/* Label Text */}
                    <div>
                      <h4 className="text-[15px] font-bold text-[#1C1917]">
                        {option.title}
                      </h4>
                      <p className="mt-0.5 text-[12px] leading-4 text-[#1C1917]/60">
                        {option.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Buttons */}
            {errorMessage && (
              <p className="rounded-xl bg-[#FDF3E7] px-4 py-3 text-center text-[13px] font-medium text-[#C85231]">
                {errorMessage}
              </p>
            )}
            <div className="mt-8 flex items-center gap-3">
              <button
                onClick={handleBack}
                className="cursor-pointer rounded-full border border-[#E6DEC9] px-6 py-3 font-sans text-[14px] font-medium text-[#1C1917] transition hover:bg-[#F5EFE6]"
              >
                Back
              </button>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full bg-[#C85231] py-3 text-[14px] font-medium text-white transition hover:opacity-90"
              >
                {loading ? (
                  <span className="flex items-center">
                    Joining <Icon icon="codex:loader" className="text-2xl" />
                  </span>
                ) : (
                  <>
                    Complete & Join <Icon icon="lucide:arrow-right" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-6 px-6 pb-10 md:p-12">
            {/* Header & Graphic */}
            <div className="space-y-3 text-center">
              <div className="flex justify-center">
                <Image
                  src={shelf}
                  alt="shelf"
                  width={80}
                  height={80}
                  priority
                />
              </div>

              <h1 className="font-serif text-[32px] leading-10 text-[#1C1917] md:text-[36px]">
                You are now on the waitlist!
              </h1>

              <p className="mx-auto max-w-md font-sans text-[14px] leading-6 text-[#1C1917]/80">
                Thank you,{" "}
                <span className="font-bold text-[#1C1917]">
                  {formData.name}
                </span>
                . Your spot is reserved for our official launch. Feel free to
                connect with our community or explore below:
              </p>
            </div>

            {/* Top 2 Cards Grid */}
            <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2">
              {/* WhatsApp Card */}
              <Link
                href="https://chat.whatsapp.com/your-group-link"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 rounded-2xl border border-[#E6DEC9] bg-[#FBF9F5] p-5 text-left transition hover:bg-[#F5EFE6]/60"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DCF8C6]">
                  <Icon
                    icon="ic:baseline-whatsapp"
                    className="h-5 w-5 text-[#075E54]"
                  />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-[#1C1917] transition group-hover:text-[#C85231]">
                    Join WhatsApp Community
                  </h4>
                  <p className="mt-0.5 text-[12px] leading-4 text-[#1C1917]/60">
                    Optional closed testing & chat
                  </p>
                </div>
              </Link>

              {/* Explore Homepage Card */}
              <Link
                href="/"
                className="group flex items-start gap-3 rounded-2xl border border-[#E6DEC9] bg-[#FBF9F5] p-5 text-left transition hover:bg-[#F5EFE6]/60"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FDF3E7]">
                  <Icon icon="lucide:home" className="h-5 w-5 text-[#C85231]" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-[#1C1917] transition group-hover:text-[#C85231]">
                    Explore Homepage
                  </h4>
                  <p className="mt-0.5 text-[12px] leading-4 text-[#1C1917]/60">
                    Return and discover features
                  </p>
                </div>
              </Link>
            </div>

            {/* Bottom Centered Card */}
            <div className="flex justify-center">
              <Link
                href="/journal"
                className="group flex w-full items-start gap-3 rounded-2xl border border-[#E6DEC9] bg-[#FBF9F5] p-5 text-left transition hover:bg-[#F5EFE6]/60 md:w-1/2"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FAF0D7]">
                  <Icon
                    icon="lucide:book-open"
                    className="h-5 w-5 text-[#8A5A00]"
                  />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-[#1C1917] transition group-hover:text-[#C85231]">
                    Read Our Journal
                  </h4>
                  <p className="mt-0.5 text-[12px] leading-4 text-[#1C1917]/60">
                    Stories on building in public
                  </p>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

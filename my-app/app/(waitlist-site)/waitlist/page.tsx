
import WHome from "./wcomponent/Whome";
import What from "./wcomponent/What";
import How from "./wcomponent/How";
import Experience from "./wcomponent/Experience";
import Community from "./wcomponent/Community";
import Public from "./wcomponent/Public";
import FAQ from "./wcomponent/FAQ";
import Banner from "./wcomponent/Banner";

export const metadata = {
  title: "Waitlist | Shelf",
  description:
    "Join the waitlist for Shelf, the publishing and reading platform built from Africa.",
};

export default function Waitlist() {
  return (
    <div className="min-h-screen w-full bg-[#FAF6EF] text-[#1C1917]">
      <WHome />
      <What />
      <How />
      <Experience />
      <Community />
      <Public />
      <FAQ />
      <Banner />
    </div>
  );
}

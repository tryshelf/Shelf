import WNavbar from "./waitlist/wcomponent/Wnavbar";
import WFooter from "./waitlist/wcomponent/Wfooter";

export default function WaitlistSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WNavbar />
      {children}
      <WFooter />
    </>
  );
}

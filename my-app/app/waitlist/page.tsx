import WNavbar from './wcomponent/Wnavbar';
import WHome from './wcomponent/Whome';
// import Banner from './wcomponent/Banner';
// import What from './wcomponent/What';
// import How from './wcomponent/How';
// import Public from './wcomponent/Public';
// import Experience from './wcomponent/Experience';
// import Community from './wcomponent/Community';
// import FAQ from './wcomponent/FAQ';
// import WFooter from './wcomponent/Wfooter';

export const metadata = {
  title: 'Waitlist | Shelf',
  description:
    'Join the waitlist for Shelf, the publishing and reading platform built from Africa.',
};

export default function Waitlist() {
  return (
    <div className="min-h-screen w-full bg-[#FAF6EF] text-[#1C1917]">
      <WNavbar />
      <WHome />
      {/* <Banner />
      <What />
      <How />
      <Public />
      <Experience />
      <Community />
      <FAQ />
      <WFooter /> */}
    </div>
  );
}

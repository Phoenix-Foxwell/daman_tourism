import About from "~/components/home/about";
import { Contactus } from "~/components/home/contactus";
import EventSection from "~/components/home/events";
import FAQs from "~/components/home/faq";
import Food from "~/components/home/food";
import Footer from "~/components/home/footer";
import Gallery from "~/components/home/gallery";
import HomePage from "~/components/home/homepage";
import SideShereMedia from "~/components/home/sidemedia";

export default function Index() {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 h-screen w-full">
        <img src="/images/background/background.png" alt="backgroud" className="w-full h-full object-cover object-center" />
      </div>
      {/* <div className="bg-gradient-to-l from-[#e64980] to-[#ff8787] w-full relative"> */}
      <div className="bg-gradient-to-r from-[#8e2de2] to-[#4a00e0]  w-full relative">
        {/* <div className="w-full relative"> */}
        {/* <div className="bg-gradient-to-l from-[#4C131A] to-[#B2505C] w-full"> */}
        <HomePage></HomePage>
        <EventSection></EventSection>
        <About></About>
        <Food></Food>
        <Gallery></Gallery>
        <Contactus></Contactus>
        <FAQs></FAQs>
        <SideShereMedia></SideShereMedia>
        <Footer></Footer>
      </div>
    </div>
  );
}

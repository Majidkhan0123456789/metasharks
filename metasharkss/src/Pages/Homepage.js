import Header from "../Components/Header"
import BannerSection from "../Components/BannerSection";
import ServiceSlider from "../Components/ServiceSlider";
import Bookfreeland from "../Components/Bookfreeland";
import Growthbusiness from "../Components/growthbusiness";
import Why_chose from "../Components/Why_chose";
import Featured_topics from '../Components/Featured_topics'
import Footer  from "../Components/Footer";
function Homepage() {
  return (
    <>
    <Header/>
    <BannerSection/>
    <ServiceSlider/>
    <Bookfreeland/>
    <Growthbusiness/>
    <Why_chose/>
    <Featured_topics/>
    <Footer/>
    </>
  )
}
export default Homepage
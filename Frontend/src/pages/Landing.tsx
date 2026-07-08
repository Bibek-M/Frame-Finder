import Footer from "../components/Footer";
import LandingNav from "../components/LandingNav";
import LandingPageBody from "../components/LandingPageBody";
import Recent from "../components/Recent";

const Landing = () => {
  return (
    <div>
      <LandingNav/>
      <LandingPageBody/>
      <Recent/>
      <Footer/>
    </div>
  )
}

export default Landing
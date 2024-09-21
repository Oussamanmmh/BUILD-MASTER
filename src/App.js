import UpArrow from "./components/arrowup";
import Footer from "./components/footer/footer";
import NavBar from "./components/navBar/navBar";
import OurEngineers from "./pages/engineer/ourenginner";
import HomePage from "./pages/homepage";
import Message from "./pages/message";
import OfferDEmploi from "./pages/offerdemploi";
import WhyUs from "./pages/whyus";

function App() {
  return (
    <div className="">
         <NavBar />
         <HomePage />
         <WhyUs/>
         <OurEngineers/>
         <OfferDEmploi/>
         <Message/>
         <Footer/>
         <UpArrow/>
         
        
        
    </div>
  );
}

export default App;

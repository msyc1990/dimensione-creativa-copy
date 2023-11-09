 import Header from "./components/Header/Header";
 import Introduction from "./pages/Introduction/Introduction";
 import ClientFeedback from "./pages/ClientFeedback/ClientFeedback";
 import FeaturedVideo from "./pages/FeaturedVideo/FeaturedVideo";
 import Partners from "./pages/Partners/Partners";
 import Publications from "./pages/Publications/Publications";
 import Statistis from "./pages/Statistics/Statistis";
 import QuoteSection from "./pages/QuoteSection/QuoteSection";
 import MeetTheDuo from "./pages/MeetTheDuo/MeetTheDuo";
 import OurStories from "./pages/OurStories/OurStories";



function App() {
  return (
    <>
      <Header />
      <Introduction />
      <FeaturedVideo />
      <ClientFeedback />
      <Partners />
      <Publications />
      <Statistis />
      <QuoteSection />
      <MeetTheDuo />
      <OurStories />
    </>
  );
}

export default App;

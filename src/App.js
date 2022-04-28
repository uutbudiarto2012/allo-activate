import AppHeader from "./components/appheader/AppHeader";
import Banner from "./components/banner/Banner";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";

function App() {

  const closeModal=()=>{
    console.log('OK')
  }

  return (
    <div className="app-container">
      {/* HEADER */}
      <AppHeader />
      {/* BANNER */}
      <Banner />
      {/* BODY */}
      <Body />
      {/* FOOTERs */}
      <Footer onClick={closeModal} />
    </div>
  );
}

export default App;

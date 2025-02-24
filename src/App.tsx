import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import KontaktaOss from "./component/KontaktaOss";

function App() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <KontaktaOss />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;

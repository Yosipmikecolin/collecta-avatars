import Cards from "./components/cards/Cards";
import FrontPage from "./components/front-page/FrontPage";
import Header from "./components/header/header";

function App() {
  return (
    <>
      <main className="container-main">
        <Header />
        <FrontPage />
        <p className="title">TOPS NFTS</p>
        <Cards />
      </main>
    </>
  );
}

export default App;

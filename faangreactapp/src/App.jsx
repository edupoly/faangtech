import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import { Navbar } from "./Navbar";
import ThumbnailContainer from "./ThumbnailContainer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <ThumbnailContainer></ThumbnailContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;

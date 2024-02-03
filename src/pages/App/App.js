import './App.css';
import Spinner from '../../sections/spinner';
import Topnav from '../../sections/topnav';
import Navbar from '../../sections/navbar';
import Carousel from '../../sections/carousel';
import About from '../../sections/about';
import Fact from '../../sections/fact';
import Service from '../../sections/service';
import Feature from '../../sections/feature';
import Quote from '../../sections/quote';
import License from '../../sections/license';
import Footer from '../../sections/footer';

function App() {
  return (
    <div>
      <Spinner></Spinner>
      <Topnav></Topnav>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <About></About>
      <Fact></Fact>
      <Service></Service>
      <Feature></Feature>
      <Quote></Quote>
      <License></License>
      <Footer></Footer>
    </div>
  );
}

export default App;

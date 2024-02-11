import './Home.css';
import Carousel from '../../sections/carousel';
import About from '../../sections/about';
import Fact from '../../sections/fact';
import Service from '../../sections/service';
import Feature from '../../sections/feature';
import Quote from '../../sections/quote';
import License from '../../sections/license';

function Home() {
  return (
    <>
      <Carousel></Carousel>
      <About></About>
      <Fact></Fact>
      <Service></Service>
      <Feature></Feature>
      <Quote></Quote>
      <License></License>
    </>
  );
}

export default Home;

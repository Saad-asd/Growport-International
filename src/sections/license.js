import Carousel from 'react-bootstrap/Carousel';
import "./license.css"

function License() {
  let licenses = [];
  const slidesData = [
    './img/licenses/dgft.jpg',
    './img/licenses/fda.png',
    './img/licenses/ficci.jpg',
    './img/licenses/fieo.jpg',
    './img/licenses/gmp.png',
    './img/licenses/halal.png',
    './img/licenses/logo3.jpg',
    './img/licenses/logo5.png',
    './img/licenses/msme.png',
    './img/licenses/spice.png',
    './img/licenses/udyogaadhaar.png'
  ];
  slidesData.forEach((item, index) => {
    licenses.push(
      <Carousel.Item interval={3000} key={index}>
        <img src={item} style={{ width: "100%" }} alt={item.split('.')[1].split('/')[-1]} />
      </Carousel.Item>);
  })

  return (
    <div style={{display:"flex", justifyContent:"center", margin:"0 10px"}}>
      <Carousel style={{ width: "320px" }}>
        {licenses}
        {/* <Carousel.Item interval={3000}>
          <ExampleCarouselImage text="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <ExampleCarouselImage text="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <ExampleCarouselImage text="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
}

export default License;

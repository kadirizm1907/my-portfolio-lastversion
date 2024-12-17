// import MyProjects from './MyProjects';
import Carousel from "react-bootstrap/Carousel";
import data from "../data.js"
const Home = () => {
  return (
    <div className=" mt-5 pt-5 mb-5">
      <Carousel className="text-center mb-5 mt-5 d-flex align-items-center justify-content-center">
      {data.map((item) => (
        <Carousel.Item interval={2000} key={item.id} className="pb-4">
          <img id="images" src={item.url} alt="logo" className=" rounded-4 text-center "/>
          <Carousel.Caption className=" bg-body-secondary text-black m-auto p-0 rounded-4 ">
            <h3>I got this certificate in <span className="font-monospace fw-bolder text-warning-emphasis bg-warning ps-2 pe-2 rounded-2">{item.year}</span> .</h3>
            <p>This certificate has been beneficial to me in the field of <span className="font-monospace fw-bolder text-warning-emphasis bg-warning p-2 rounded-2">{item.type}</span> .</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel> 
    </div>
   
  );
};

export default Home;

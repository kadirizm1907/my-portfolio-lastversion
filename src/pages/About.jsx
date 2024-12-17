import Image from "react-bootstrap/Image";
import me from "../img/me.jpeg";
import { Container } from "react-bootstrap";


const About = () => {
  return (
    <Container fluid className="text-center mb-5 mt-5 pt-5 d-flex align-items-center justify-content-center display-6   ">

       <div className="text-center mt-5 mb-5 ">
        
     
        <legend><Image src={me} thumbnail width={250}></Image></legend>
        <p className=" about-text mb-5">
          Hello, I am Kadir. I was born in 1990 in Erzurum, one of the beautiful
          cities of Turkey. In the past, I had 8 years of teaching experience as a teacher. After moving to the Netherlands, I
          started working in the IT sector to add a new color to my life. This
          sector was an area that I wanted to do passionately during my teaching
          years.
     
          <br />I completed the Front end course after a challenging and
          knowledge-filled period. This was my first official step in the IT
          field. I had previously taken web-design and simple Photoshop courses
          on my own. With the approximately 6-month exchange rate I received
          from Clarusway, I started to take more confident steps in this field.
          I did many projects during this course. You can find these on the
          Projects page.
          <br />I am a diligent student and always strive to improve my skills.
          <br />
          Other than these, I can describe myself as a social individual. Since
          my childhood, I participated in sports activities in all the schools that I
          attended and served as team captain in most of these periods. I played
          actively in football, table tennis and volleyball teams in middle
          school and high school. I was a captain in football and volleyball. I
          played in the volleyball team of the faculty of education at the
          university. Now I play in a volleyball club in the Netherlands. These
          are my passions in sports. I can say that my hobbies include camping,
          fishing, reading books, solving puzzles and playing playstation games.
          <br />I know my native language, Turkish, at the highest level. In
          addition, I speak English at B1 level and Dutch at A2+ level.
          <br />I can say that
          <a
            href="https://en.wikipedia.org/wiki/Chinghiz_Aitmatov"
            target="blank"
          >
            Cengiz Aytmatov
          </a>
          's book "
          <a
            href="https://en.wikipedia.org/wiki/The_Day_Lasts_More_Than_a_Hundred_Years"
            target="blank"
          >
            A day is worth a century
          </a>
          " is my favorite book.
          . I can say that the message of social life he gave in his works
          impressed me greatly.
        </p>
        
      </div>
    </Container>
  );
 
};

export default About;

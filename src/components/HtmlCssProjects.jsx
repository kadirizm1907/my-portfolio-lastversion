import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { GrView } from "react-icons/gr";
import { VscRepo } from "react-icons/vsc";
import projects from "../ProjectsData";
import img from "../img/cat-working.avif"

const HtmlCssProjects = () => {

  const filteredItems = projects.filter(project =>
    !project.type.toLowerCase().split(',').map(t => t.trim()).includes("react") &&
    !project.type.toLowerCase().split(',').map(t => t.trim()).includes("javascript")
  );
  console.log(filteredItems);
  return (
    <div className="text-center mb-5 mt-5 pt-5 d-flex align-items-center justify-content-center ">
      <Row xs={1} sm={2} lg={3} xxl={4} className="g-3 m-1 bg-dark-subtle p-1 rounded-2 ">
        {filteredItems?.map(item => (
          <Col key={item.id}>
            <Card className="pb-5 bg-body-tertiary">
              <Card.Img src={item.photo && img} height={"350vh"} />
              <Card.Body>
                <Card.Title>
                  <span>{item.name}</span> <br />
                  <span > {item.type}</span>
                </Card.Title>
                <Card.Text >
                  <div className="gitUrl display-4 bg-dark-subtle rounded-2 p-1">
                    <a href={item.url} target="_blank" rel="noreferrer">
                      <GrView />
                    </a>
                    <a href={item.git} target="_blank" rel="noreferrer">
                      <VscRepo />
                    </a>
                  </div>

                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default HtmlCssProjects
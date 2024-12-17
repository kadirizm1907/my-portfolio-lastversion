import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { GrView } from "react-icons/gr";
import { VscRepo } from "react-icons/vsc";
import projects from "../ProjectsData";
import img from "../img/cat-working.avif"

const JsProjects = () => {
  const filteredItems = projects.filter(project => project.type.toLocaleLowerCase().split(',').map(t => t.trim()).includes("javascript")
  );
  return (
    <div className="text-center mb-5 mt-5 pt-5 d-flex align-items-center justify-content-center ">
      <Row xs={1} sm={2} lg={3} xxl={4} className="g-3 m-1 bg-danger-subtle p-1 rounded-2">
        {filteredItems?.map(({ id, url, name, git, photo, type }) => (
          <Col key={id}>
            <Card className="pb-5 bg-dark bg-opacity-10">
              <Card.Img src={photo && img} height={"350vh"} />
              <Card.Body>
                <Card.Title>
                  <span>{name}</span> <br />
                  <span> {type}</span>
                </Card.Title>
                <Card.Text >
                  <div className="gitUrl display-4 bg-body-tertiary rounded-2 p-1">
                    <a href={url} target="_blank" rel="noreferrer">
                      <GrView />
                    </a>
                    <a href={git} target="_blank" rel="noreferrer">
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
  );
};

export default JsProjects;

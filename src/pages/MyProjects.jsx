import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate, Outlet } from "react-router-dom";

const MyProjects = () => {
    const navigate = useNavigate();
    const [projectType, setProjectType] = useState("MY");

    const handleNavigation = (type, path) => {
        setProjectType(type);
        navigate(path);
    };

    return (
        <div style={{ marginTop: "8rem"}} >
            <div className="container text-center  mt-2">
                <Row className="justify-content-around cursor text-center align-items-center">
                    <Col lg={4} md={4} sm={12}>
                        <div
                            id="splash"
                            className="pointer-event pe-auto mt-2"
                            onClick={() => handleNavigation("JS", "js")}
                        >
                            JS
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={12}>
                        <div
                            id="splash2"
                            className="mt-2"
                            onClick={() => handleNavigation("REACT", "react")}
                        >
                            REACT
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <div
                            id="splash3"
                            className="mt-2"
                            onClick={() => handleNavigation("HTML-CSS", "html")}
                        >
                            HTML-CSS
                        </div>
                    </Col>
                </Row>
                <div className="mt-4">
                    <h1>SOME OF {projectType} PROJECTS</h1>
                </div>
               < Outlet /> 
            </div>

            
        </div>
    );
};

export default MyProjects;

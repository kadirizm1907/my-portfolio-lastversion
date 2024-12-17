/* eslint-disable jsx-a11y/anchor-has-content */
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaGithub, FaDiscord } from "react-icons/fa";
import { Container } from "react-bootstrap";


function Footer() {
  return (
    <Container className="fixed-bottom p-0"  >
      <nav className="justify-content-around flex-wrap container-fluid bg-opacity-50 bg-primary rounded-2 d-flex align-items-center kadir">
        <div className="text-light text-center">
          Created by Kadir Y. <br/>
          <span className="text-light opacity-50 ms-3">
            All rights reserved {new Date().getFullYear()}
          </span>
        </div>
        <div id="footer-items" className="d-flex text-white display-6 align-items-centerm-2 p-3 justify-content-between">
          <a
            href="https://discord.com/channels/@me"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="m-2 text-white" />
          </a>
          <a
            href="https://discord.com/channels/@me"
            target="_blank"
            rel="noreferrer"
          >
            <FaSquareXTwitter className="m-2 text-white" />
          </a>
          <a
            href="https://discord.com/channels/@me"
            target="_blank"
            rel="noreferrer"
          >
            <FaDiscord className="m-2 text-white" />
          </a>
          <a
            href="https://discord.com/channels/@me"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="m-2 text-white" />
          </a>
        </div>
      </nav>
    </Container>
  
  );
}  

export default Footer;

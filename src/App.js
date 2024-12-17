import MyProjects from "./pages/MyProjects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import JsProjects from "./components/JsProjects";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./app.css"
import RaectProjects from "./components/RaectProjects";
import HtmlCssProjects from "./components/HtmlCssProjects";
import Login from "./pages/Login";
import PrivateRouter from "./components/PrivateRouter";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
          <Route path="/dashboard/myprojects" element={<MyProjects />}>
            <Route path="js" element={<JsProjects />} />
            <Route path="react" element={<RaectProjects />} />
            <Route path="html" element={<HtmlCssProjects />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;

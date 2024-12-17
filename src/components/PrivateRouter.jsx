
import { Navigate, Outlet } from "react-router-dom"
import Nav from './Nav';
import Footer from "./Footer";

const PrivateRouter = () => {
  const user = sessionStorage.getItem("user")
  return user ? (
    <>
      <Nav />
      <Footer />
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRouter;
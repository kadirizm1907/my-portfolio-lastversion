import { useNavigate } from "react-router-dom";
import errorImg from "../img/404.png";

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="container text-center mt-5">
      <img className="Error w-100 mt-5 rounded-4 mb-2" src={errorImg} alt="" />
      <div>
        <button className="btn btn-success me-2 w-25 font-monospace fs-3" onClick={()=>navigate('/')}>Home</button>
        <button className="btn btn-warning w-25 font-monospace fs-3" onClick={()=>navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default NotFound;

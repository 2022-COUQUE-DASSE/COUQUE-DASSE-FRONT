import "../css/Header.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="headercenter">
      <div className="header">
        <Link to="/Picture" style={{ textDecoration: "none" }}>
          <span className="headertext">
            나의
            <br /> 식물보기
          </span>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            className="cloud"
            src="https://o.remove.bg/downloads/b3510341-5c20-4ac8-bf42-f26c4f4e65d4/image-removebg-preview.png"
          ></img>
        </Link>
        <Link to="/Led" style={{ textDecoration: "none" }}>
          <span className="headertext">
            인공 햇빛 <br />
            조절하기
          </span>
        </Link>
      </div>
    </div>
  );
}

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
          <img className="cloud" src="/img/plantt.png"></img>
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

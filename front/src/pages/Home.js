import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import "../css/Home.css";

export function Home() {
  return (
    <div>
      <Header />
      <img
        className="grass"
        src="https://static.vecteezy.com/system/resources/previews/000/517/088/original/vector-landscape-illustration.png"
      ></img>
      <div className="Hometop">
        <Link to="/Picture" style={{ textDecoration: "none" }} className="link">
          <div className="picture">나의 식물보기</div>
        </Link>
        <Link to="/Led" style={{ textDecoration: "none" }} className="link">
          <div className="picture">인공 햇빛 조절하기</div>
        </Link>
      </div>
    </div>
  );
}

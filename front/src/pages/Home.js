import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import "../css/Home.css";

export function Home() {
  return (
    <div>
      <Header />
      <div className="Hometop">
        {/* <Link to="/Picture" style={{ textDecoration: "none" }}>
          <div>사진페이지</div>
        </Link>
        <Link to="/Led" style={{ textDecoration: "none" }}>
          <div>빛 조절 페이지</div>
        </Link> */}
        <img
          className="grass"
          src="https://static.vecteezy.com/system/resources/previews/000/517/088/original/vector-landscape-illustration.png"
        ></img>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      홈페이지
      <Link to="/Picture" style={{ textDecoration: "none" }}>
        <div>사진페이지</div>
      </Link>
      <Link to="/Led" style={{ textDecoration: "none" }}>
        <div>빛 조절 페이지</div>
      </Link>
    </div>
  );
}

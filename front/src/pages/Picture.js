import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../components/Header";
import "../css/Picture.css";

export function Picture() {
  const [status, setStatus] = useState(false);
  const [data, setData] = useState("");

  const url = "http://10.150.150.72:5000/plant/path";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        console.log("성공");
        console.log(response.data);
      })
      .catch((error) => {
        console.log("실패");
      });
  }, [status]);

  return (
    <div>
      <Header />
      <img
        className="grass"
        src="https://static.vecteezy.com/system/resources/previews/000/517/088/original/vector-landscape-illustration.png"
      ></img>
      <div className="picenter">
        <div className="picturediv">
          <div className="imgandtext">
            <div className="divpicenter">
              <img
                src="https://cdn.kqnews.kr/news/photo/202203/3174_6257_25.jpg"
                className="pictureimg"
                alt="plant-pic"
              ></img>
            </div>
            <div
              className="loadingbox"
              onClick={() => setStatus((prev) => !prev)}
            >
              <img className="loading" src="/img/loading.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

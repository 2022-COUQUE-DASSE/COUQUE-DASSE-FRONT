import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../components/Header";
import "../css/Picture.css";
import { Helmet } from "react-helmet";

export function Picture() {
  const [status, setStatus] = useState(false);
  const [data, setData] = useState("");

  const url = "http://10.150.150.72:5000/plant/path";
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(url);
        setData(data);
        console.log("성공");
      } catch (e) {
        console.log("실패");
        console.log(e);
      }
    })();
  }, [status]);

  return (
    <div>
      <Helmet>
        <title>나의 식물보기</title>
      </Helmet>
      <Header />
      <img
        className="grass"
        src="https://static.vecteezy.com/system/resources/previews/000/517/088/original/vector-landscape-illustration.png"
      ></img>
      <div className="picenter">
        <div className="picturediv">
          <div className="imgandtext">
            <div className="divpicenter">
              <img src={data} className="pictureimg" alt="plant-pic"></img>
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

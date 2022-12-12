import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../components/Header";
import "../css/Picture.css";

export function Picture() {
  const [data, setData] = useState("");
  const url = "http://10.150.150.72:5000/plant/path";
  useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        setData(response.data);
        console.log("성공");
        console.log(response.data);
      })
      .catch(function (error) {
        console.log("실패");
      });
  }, []);

  return (
    <div>
      <Header />
      <img
        className="grass"
        src="https://static.vecteezy.com/system/resources/previews/000/517/088/original/vector-landscape-illustration.png"
      ></img>
      <div className="picenter">
        <div className="picturediv">
          <img src={data} alt="plant-pic"></img>
        </div>
      </div>
    </div>
  );
}

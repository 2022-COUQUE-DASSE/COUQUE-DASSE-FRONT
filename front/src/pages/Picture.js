import { useEffect, useState } from "react";
import axios from "axios";

export function Picture() {
  const [data, setData] = useState([]);
  const url = "http://10.150.150.72:5000/plant/path";
  useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        setData(response.data);
        console.log("성공");
      })
      .catch(function (error) {
        console.log("실패");
      });
  }, []);
  console.log(data);
  return (
    <div>
      <img src={data}></img>
    </div>
  );
}

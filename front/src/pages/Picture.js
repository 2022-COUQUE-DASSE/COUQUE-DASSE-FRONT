import { useState } from "react";
import axios from "axios";

export function Picture() {
  const [data, setData] = useState([]);
  const url = "http://10.150.150.72:5000/";
  axios
    .get(url)
    .then(function (response) {
      setData(response.data);
      console.log("성공");
    })
    .catch(function (error) {
      console.log("실패");
    });
  return (
  <div>사진페이지</div>
  );
}

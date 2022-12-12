import { Header } from "../components/Header";
import { useState } from "react";
import "../css/Led.css";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import axios from "axios";

export function Led() {
  const [modal, setModal] = useState(false);

  function ledValueSubmit() {
    axios
      .get(`http://10.150.150.72:5000/plant/led?val=${modal}`, 1)
      .then((res) => console.log(res));
  }
  return (
    <div className="Ledcenter">
      <Header />
      <Helmet>
        <title>인공 햇빛 조절하기</title>
      </Helmet>
      <img
        className="grass"
        src="https://static.vecteezy.com/system/resources/previews/000/517/088/original/vector-landscape-illustration.png"
      ></img>
      <div className="buttonbox">
        <div className="buttoncenter">
          <div
            className="button"
            onClick={() => {
              setModal(!modal);
            }}
          >
            {/* ?val=${modal} */}
            <form
              action="http://10.150.150.72:5000/plant/led?val=2"
              method="get"
            >
              <button
                type="submit"
                value={modal}
                onClick={axios
                  .get(`http://10.150.150.72:5000/plant/led?val=${modal}`, 1)
                  .then((res) => console.log(res))}
              ></button>
            </form>
            {modal ? <ON /> : null}
            {modal ? null : <OFF />}
          </div>
          {modal ? <Modal /> : null}
          {modal ? null : <Modal2 />}
        </div>
      </div>
    </div>
  );
}

function Modal() {
  return (
    <>
      <div className="modal">
        <img className="bulbonimg" src="/img/ON.png"></img>
        <span className="bulbontext">LED ON</span>
      </div>
    </>
  );
}

function Modal2() {
  return (
    <>
      <div className="modal">
        <img className="bulboffimg" src="/img/OFF.png"></img>
        <span className="bulbofftext">LED OFF</span>
      </div>
    </>
  );
}

export function ON() {
  return (
    <>
      <div className="on">
        <span>ON</span>
      </div>
    </>
  );
}

export function OFF() {
  return (
    <>
      <div className="off">
        <span>OFF</span>
      </div>
    </>
  );
}

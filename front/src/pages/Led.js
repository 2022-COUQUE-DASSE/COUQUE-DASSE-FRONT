import { Header } from "../components/Header";
import { useState } from "react";
import "../css/Led.css";
import styled from "styled-components";

export function Led() {
  const [modal, setModal] = useState(false);
  return (
    <div className="Ledcenter">
      <Header />
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
      </div>
    </>
  );
}

function Modal2() {
  return (
    <>
      <div className="modal">
        <img className="bulboffimg" src="/img/OFF.png"></img>
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

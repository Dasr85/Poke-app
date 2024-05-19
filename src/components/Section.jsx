//imports
import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { MyButton } from "./MyButton.jsx";
import { Card } from "./Card.jsx";
//importo estilos
//import './Section.css';

//importo utils
import { arrayIds } from "../utils/randomld.js";

export const Section = () => {
  const [count, setCount] = useState(0);
  const [ids, setIds] = useState([]);

  function handleClick() {
    setCount(count + 1);
  }

  // function arrayIds() {
  // function getRandomArbitrary(min, max) {
  //   return Math.round(Math.random() * (max - min) + min);
  // }

  // let array1 = [];
  // for (var i = 0; i < 5; i++) {
  //     array1[i] = getRandomArbitrary(1, 151);
  //   //console.log(array1);
  // }

  // setIds(array1);

  // //return array1;
  // }

  function arrayIdsRojo() {
    function getRandomArbitrary(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }

    let array1 = [];
    for (var i = 0; i < 5; i++) {
      array1[i] = getRandomArbitrary(1, 350);
      console.log(array1);
    }

    setIds(array1);

    //return array1;
  }

  function arrayIdsAzul() {
    function getRandomArbitrary(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }

    let array1 = [];
    for (var i = 0; i < 5; i++) {
      array1[i] = getRandomArbitrary(351, 700);
      console.log(array1);
    }

    setIds(array1);

    //return array1;
  }

  function arrayIdsAllo() {
    function getRandomArbitrary(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }

    let array1 = [];
    for (var i = 0; i < 5; i++) {
      array1[i] = getRandomArbitrary(701, 1050);
      console.log(array1);
    }

    setIds(array1);

    //return array1;
  }
  console.log(ids);
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex justify-center">
          <h2 className="teamTitle">
            Elegi tu
            <span className="font-bold  text-purple-600 opacity-85"> Team</span>
          </h2>
        </div>
        <section className="flex justify-center gap-4">
          <MyButton color={"rojo"} onClick={arrayIdsRojo} />
          <MyButton color={"azul"} onClick={arrayIdsAzul} />
          <MyButton color={"amarillo"} onClick={arrayIdsAllo} />
        </section>
        <section className="flex justify-center gap-4 p-4 ">
          <Card id={ids[0]} />
          <Card id={ids[1]} />
          <Card id={ids[2]} />
          <Card id={ids[3]} />
          <Card id={ids[4]} />
        </section>
      </div>
    </>
  );
};

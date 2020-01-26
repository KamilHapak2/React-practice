import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const MediaCard = ({ title }) => {
  const [isLit, setLit] = useState(true);

  const url = !isLit
    ? "https://i1.jbzd.com.pl/contents/2019/07/cdd6332d1695200b50c0d0ae54ff9d06.jpg"
    : "https://i.pinimg.com/474x/f6/51/39/f65139a0a743968b8118d5e70abce729--when-you-leave.jpg";

  return (
    <div className={`room ${isLit ? "lit" : "dark"}`}>
      <h2>{title}</h2>
      <h3>
        <button onClick={() => setLit(!isLit)}>
          Switch {isLit ? "OFF" : "ON"}
        </button>
      </h3>
      <img alt="Light off please" src={url} />
    </div>
  );
};

ReactDOM.render(
  <MediaCard title="Hello" isOn={true} />,
  document.querySelector("#root")
);

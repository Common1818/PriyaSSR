import React, { useEffect } from "react";
import $ from "jquery";

const Jcomp = () => {
  useEffect(() => {
    console.log($(window).scroll);
  });

  const handleClick = (e) => {
    $(".jquery").css("color", "red");
    $("body").css("background-color", "#f1f1f1");
  };

  return (
    <div>
      <div className="jquery">This is a bloody div</div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Jcomp;

import React from "react";
import "./btn_color.css";

function ButtonColorList(props) {
  const colors = props.colors;
  console.log(props);
  const listItems = colors.map((color, index) => (
    <button
      style={{ backgroundColor: `${color}`, marginLeft: index * 5 + "rem" }}
      name={color}
      onClick={(e) => props.onClick(e.target.name)}
      className="btn"
    ></button>
    //باجي لل التشايلد وبمرر فيه القيمة داخل اقواس الفنكشن متل الي بدق ع الباب بدو حاجة بسرعة وهو ع الباب بعطيه اياها وبمشي
  ));
  return <div className="group-color">{listItems}</div>;
}
export default ButtonColorList;

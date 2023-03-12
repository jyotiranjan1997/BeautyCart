import React from "react";
import style from "./Category.module.css";
function Category({ setCategory }) {
  return (
    <div id={style.main_div}>
      <div
        className={style.single_div}
        onClick={() => setCategory("foundation")}
      >
        <img
          src="https://www.beautybebo.com/pub/media/catalog/category/makeup_1.png"
          alt=""
        />
        <p>Makeup</p>
      </div>

      <div
        className={style.single_div}
        onClick={() => setCategory("face wash")}
      >
        <img
          src="https://www.beautybebo.com/pub/media/catalog/category/skin.png"
          alt=""
        />
        <p>Skin Care</p>
      </div>

      <div
        className={style.single_div}
        onClick={() => setCategory("hair brush")}
      >
        <img
          src="https://www.beautybebo.com/pub/media/catalog/category/hair.png"
          alt=""
        />
        <p>Hair Care </p>
      </div>

      <div className={style.single_div} onClick={() => setCategory("shampoo")}>
        <img
          src="https://www.beautybebo.com/pub/media/catalog/category/personal-care.png"
          alt=""
        />
        <p>Personal Care</p>
      </div>

      <div className={style.single_div}>
        <img
          src="https://www.beautybebo.com/pub/media/catalog/category/mom-baby-care.png"
          alt=""
        />
        <p>Mom & Body Care</p>
      </div>
      <div
        className={style.single_div}
        onClick={() => setCategory("ayurvedic")}
      >
        <img
          src="https://www.beautybebo.com/pub/media/catalog/category/fragrance_3.png"
          alt=""
        />
        <p>Ayurvedic</p>
      </div>
    </div>
  );
}
export default React.memo(Category);

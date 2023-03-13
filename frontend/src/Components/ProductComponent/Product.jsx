import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { HiHeart } from "react-icons/hi";
import { GoStar } from "react-icons/go";
import styles from "./Products.module.css";
import { useDispatch } from "react-redux";
import { ADD_CARD_DATA } from "../../Redux/CartReducer/CartAction";
import swal from "sweetalert";
import { GetLocal } from "../../Utils/localstorage";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import { Flex } from "@chakra-ui/react";
import Aos from "aos";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}
export default function Products({ product_category }) {
  const [makeup, setmakeup] = useState([]);
  const [Load, setLoad] = useState(false);
  const Token = GetLocal("auth") || false;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const makeupData = () => {
    setLoad(true);
    axios
      .get(
        `https://magnificent-jade-girdle.cyclic.app/products?category=` +
          product_category
      )
      .then((res) => {
        setmakeup(res.data);
        setLoad(false);
      })
      .catch((e) => {
        console.log(e);
        setLoad(false);
      });
  };


  const handleCartClick = (image, price, name) => {
    setLoad(true);
    if (Token) {
      const data = {
        image,
        price,
        name,
      };

      dispatch(ADD_CARD_DATA(data, Token)).then((res) => {
        swal({
          title: "Product added Successfully !",
          text: "",
          icon: "success",
          button: "ok",
        });
        setLoad(false);
      });
    } else {
      setLoad(false);
      swal({
        title: "You are Not Login  !",
        text: "Please Login Click ok",
        icon: "error",
        button: "ok",
      }).then(() => navigate("/login"));
    }
  };

  useEffect(() => {
    Aos.init();
    // Get_update();
    makeupData();
  }, [product_category]);
  return (
    <div styles={{ display: "flex", width: "80%", margin: "auto" }}>
      {Load ? (
        <Flex alignItems="center" justifyContent="center" p="30px">
          <Loading />
        </Flex>
      ) : (
        <>
          <div id={styles.makeup_main_container}>
            {makeup.length > 0 &&
              makeup.map((item) => {
                return (
                  <div
                    id={styles.makeup_main_div}
                    key={item._id}
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1200"
                  >
                    <div id={styles.makeup_img_div}>
                      <img src={item.image} alt="" />
                    </div>
                    <div id={styles.makeup_name_div}>
                      <p>{item.name}</p>
                    </div>
                    <div id={styles.go_star_div}>
                      <GoStar />
                      <GoStar />
                      <GoStar />
                      <GoStar />
                      <GoStar />
                    </div>
                    <div id={styles.price_pink_div}>
                      <h4>{"₹ " + item.price}</h4>
                    </div>
                    <div id={styles.main_add_cart_div}>
                      <div
                        id={styles.add_to_cart_div}
                        onClick={() =>
                          handleCartClick(item.image, item.price, item.name)
                        }
                      >
                        <FaShoppingBasket />
                        <p>Add To Cart</p>
                      </div>
                      <div id={styles.hrt_div}>
                        <HiHeart color="white" />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </>
      )}
    </div>
  );
}

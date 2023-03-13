import { Flex, Heading } from "@chakra-ui/react";
import Aos from "aos";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_users } from "../../Redux/AdminReducer/AdminAction";
import styles from "./Admin.module.css";
import Dashboard from "./Dashboard";
import Products from "./Products";
import User from "./User";

export default function Admin() {
  const [page, setPage] = useState("dashboard");
  // const { users, user_auth } = useSelector((store) => store.AdminUserReducer);
  const handleClick = (data) => {
    setPage(data);
  };

  // const handleClick2 = (e) => {
  //   e.preventDefault()
  //   setPage("user")
  // }

  useEffect(() => {
    Aos.init();
  }, []);

  //  const handleClick3 = (e) => {
  //    e.preventDefault();
  //    setPage("user");
  //  };

  return (
    <div>
      <Flex>
        <div className={styles.AdminSidebar} data-aos="zoom-in">
          <Heading fontSize={["14px", "15px", "18px", "28px"]} mb="35%">
            Admin{" "}
          </Heading>
          <div
            className={
              page === "dashboard"
                ? (styles.handlePoint, styles.active_hover)
                : styles.handlePoint
            }
            onClick={() => handleClick("dashboard")}
          >
            <Heading
              fontSize={["10px", "10px", "14px", "24px"]}
             
              mb="15px"
            >
              Dashboard
            </Heading>
            <hr className={styles.line} />
          </div>
          <div
            onClick={() => handleClick("user")}
            className={
              page === "user"
                ? (styles.handlePoint, styles.active_hover)
                : styles.handlePoint
            }
          >
            <Heading mb="18px" fontSize={["10px", "10px", "14px", "24px"]}>
              Users
            </Heading>
            <hr className={styles.line} />
          </div>
          <div
            className={
              page === "product"
                ? (styles.handlePoint, styles.active_hover)
                : styles.handlePoint
            }
            onClick={() => handleClick("product")}
          >
            <Heading mb="18px" fontSize={["10px", "10px", "14px", "24px"]}>
              Products
            </Heading>
            <hr className={styles.line} />
          </div>
        </div>
        <div className={styles.AdminRightebar} data-aos="fade-up">
          {page === "dashboard" ? (
            <Dashboard />
          ) : (
            <div>
              {page === "product" ? (
                <Products />
              ) : (
                <div> {page === "user" ? <User /> : <Dashboard />} </div>
              )}{" "}
            </div>
          )}
        </div>
      </Flex>
    </div>
  );
}

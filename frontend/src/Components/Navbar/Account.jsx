
import React from "react";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { GetLocal, SetRemove } from "../../Utils/localstorage";
import { useEffect } from "react";
import { useState } from "react";
import swal from "sweetalert";

const Account = () => {
  const isAdmin = JSON.parse(localStorage.getItem("isAdmin")) || false;
  const Token = GetLocal("auth") || false;
  const [Load, setLoad] = useState(Token);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("isAdmin");
    SetRemove("auth");
    swal({
      title: "Logout Successfully !",
      text: "Go to Main Page",
      icon: "success",
      button: "ok",
    }).then(() => {
      setLoad(Token);
      navigate("/");
    });
  };

  useEffect(() => {}, [Load]);
  const handleAdmin = () => {
    if (isAdmin) {
      navigate("/admin");
    } else {
      swal({
        title: "Admin!",
        text: "You are not Authrized",
        icon: "error",
        button: "ok",
      });
    }
  };
  return (
    <div>
      <Menu isLazy>
        <MenuButton  >My Account</MenuButton>
        <MenuList>
          {/* MenuItems are not rendered unless Menu is open */}
          <Link to="/login">
            {Token ? (
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            ) : (
              <MenuItem>Login</MenuItem>
            )}
          </Link>
          {Token ? (
            <Link to="/profile">
              <MenuItem>Profile</MenuItem>
            </Link>
          ) : (
            <Link to="/signup">
              <MenuItem>Register</MenuItem>
            </Link>
          )}

          <MenuItem onClick={handleAdmin}>Admin</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Account;

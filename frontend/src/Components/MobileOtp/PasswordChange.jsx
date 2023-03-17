import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import axios from "axios";
import swal from "sweetalert";
import Styles from "./Password.module.css";

const update_password = async (data) => {
  return await axios.patch(
    "https://magnificent-jade-girdle.cyclic.app/password",
    data
  );
};

const initialState = {
  password: "",
  password2: "",
};

export default function PasswordChange({ handleClose2, show2, user_id }) {
  const [Load, setLoad] = useState(false);
  const [password, setPassword] = useState(initialState);

  const handlePassword = (e) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoad(true);
    if (password.password === password.password2) {
      let data = {
        _id: user_id,
        password: password.password,
      };
      console.log(data);
      try {
        let res = await update_password(data);
        setLoad(false);
        handleClose2();
        swal({
          title: "Password Changed Successfully!",
          text: " Please Login",
          icon: "success",
          button: "ok",
        });
      } catch (err) {
        setLoad(false);
        handleClose2();
        swal({
          title: "Mobile Change failed!",
          text: "Please Try again",
          icon: "error",
          button: "ok",
        });
        console.log(err);
      }
    } else {
      swal({
        title: "Password doesn't match",
      });
    }
  };

  return (
    <>
      <Modal show={show2} onHide={handleClose2} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Update your new Password</Modal.Title>
        </Modal.Header>
        {Load ? (
          <Loading />
        ) : (
          <>
            {" "}
            <Modal.Body>
              <div className={Styles.Password_input}>
                <div>
                  <input
                    type="password"
                    placeholder="Enter your New Password"
                    name="password"
                    value={password.password}
                    onChange={handlePassword}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    value={password.password2}
                    onChange={handlePassword}
                  />
                  <div
                    className={
                      password.password === password.password2
                        ? Styles.match
                        : Styles.match2
                    }
                  >
                    <p>Password doesn't Match</p>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose2}>
                Close
              </Button>
              <Button
                variant="success"
                disabled={
                  password.password === "" ||
                  password.password2 === "" ||
                  password.password === null ||
                  password.password2 === null
                }
                onClick={handleUpdate}
              >
                Change Password
              </Button>
            </Modal.Footer>{" "}
          </>
        )}
      </Modal>
    </>
  );
}

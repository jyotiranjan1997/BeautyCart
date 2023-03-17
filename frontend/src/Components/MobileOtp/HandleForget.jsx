import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  PinInput,
  PinInputField,
  HStack,
  Center,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import Styles from "./Password.module.css";
import axios from "axios";
import swal from "sweetalert";

const OTP = {
  otp1: "",
  otp2: "",
  otp3: "",
  otp4: "",
  otp5: "",
  otp6: "",
};

const get_data = async (name, value) => {
  return await axios.get(
    `https://magnificent-jade-girdle.cyclic.app/password?${name}=${value}`
  );
};

export default function HandleForget({
  handleClose,
  show,
  setData,
  data,
  Load,
  HandleOtp,
  Load2,
  setload2,
  verifyOtp,
  setUser,
}) {
  const [Input, setInput] = useState(OTP);
  const [password, setPassword] = useState(false);
  const [Mobile, setMobile] = useState("");
  //   const mobile = mbl.slice(7, 11);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...Input, [name]: value });
  };

  const handleOtp = (e) => {
    e.preventDefault();
    let new_otp = "";
    for (let key in Input) {
      new_otp += Input[key];
    }
    verifyOtp(+new_otp);
  };

  // Get user details and Send Otp //

  const handleUser = async () => {
    let name = "";
    if (data.includes("@")) {
      name = "email";
    } else {
      if (data.length === 10) {
        name = "phone";
      }
    }
    console.log(name, data);
    try {
      let res = await get_data(name, data);
      console.log(res.data);
      if (res.data.phone) {
        setUser(res.data);
        setPassword(true);
        setload2(true);
        HandleOtp(res.data.phone);
      } else {
        swal({
          title: "User Not Register!",
          text: "Plaese Register or try with register email !",
          icon: "error",
          button: "ok",
        }).then(() => handleClose());
      }
    } catch (err) {}
  };
  const handleOtp2 = (e) => {
    e.preventDefault();
    handleUser();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            {password ? ` Enter your OTP send your Mobile` : "Forgot Password"}
          </Modal.Title>
        </Modal.Header>
        {Load || Load2 ? (
          <Loading />
        ) : (
          <>
            {" "}
            <Modal.Body>
              {password ? (
                <Center>
                  <PinInput>
                    <PinInputField
                      mr="5px"
                      name="otp1"
                      value={Input.otp1}
                      onChange={handleChange}
                    />
                    <PinInputField
                      mr="5px"
                      name="otp2"
                      value={Input.otp2}
                      onChange={handleChange}
                    />
                    <PinInputField
                      mr="5px"
                      name="otp3"
                      value={Input.otp3}
                      onChange={handleChange}
                    />
                    <PinInputField
                      mr="5px"
                      name="otp4"
                      value={Input.otp4}
                      onChange={handleChange}
                    />
                    <PinInputField
                      mr="5px"
                      name="otp5"
                      value={Input.otp5}
                      onChange={handleChange}
                    />
                    <PinInputField
                      mr="5px"
                      name="otp6"
                      value={Input.otp6}
                      onChange={handleChange}
                    />
                  </PinInput>
                </Center>
              ) : (
                <Center w="100%">
                  {" "}
                  <input
                    className={Styles.forgot_password}
                    placeholder="Enter your Rgister Mobile or email"
                    onChange={(e) => setData(e.target.value)}
                    autofocus="true"
                    required
                  />
                </Center>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="success"
                disabled={!password && (data === "" || data === null)}
                onClick={password ? handleOtp : handleOtp2}
              >
                {password ? "Verify" : "Send OTP"}
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </>
  );
}

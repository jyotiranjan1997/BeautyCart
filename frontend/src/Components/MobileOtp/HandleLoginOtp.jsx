import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { PinInput, PinInputField, HStack, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

const OTP = {
  otp1: "",
  otp2: "",
  otp3: "",
  otp4: "",
  otp5: "",
  otp6: "",
};

export default function HandleLoginOtp({
  handleClose,
  show,
  mbl,
  verifyOtp,
  Load,
}) {
  const [Input, setInput] = useState(OTP);
  const mobile = mbl.slice(7, 11);

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

  useEffect(() => {}, [Load]);

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            Enter your OTP send your Mobile{"*******" + mobile}
          </Modal.Title>
        </Modal.Header>
        {Load ? (
          <Loading />
        ) : (
          <>
            {" "}
            <Modal.Body>
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
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="success" onClick={handleOtp}>
                Verify
              </Button>
            </Modal.Footer>{" "}
          </>
        )}
      </Modal>
    </>
  );
}

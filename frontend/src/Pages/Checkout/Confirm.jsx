import { Flex, Text } from "@chakra-ui/react";
import React, { memo, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Success from "../../Components/Success";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { POST_ORDER } from "../../Redux/OrderReducer/OrderAction";
import { GetLocal } from "../../Utils/localstorage";
import ButtonComponent from "../../Components/ButtonComponent";
import Loading from "../../Components/Loading/Loading";

const IntialState = {
  box1: false,
  box2: false,
};

function ConfirmModal({ amount, handleDeleteMany, data, products }) {
  const [show, setShow] = useState(false);
  const [payment, setPayment] = useState(IntialState);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Token = GetLocal("auth");
  const handlePaymentChange = (e) => {
    const { name, checked } = e.target;
    setPayment({ ...payment, [name]: checked });
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);
    if (payment.box1 === true && payment.box2 === true) {
      swal({
        title: "Please Choose any one option !",
        text: "Choose one",
        icon: "error",
        button: "ok",
      });
      setLoad(false);
    } else if (payment.box1 || payment.box2) {
      let order_details = {
        amount,
        address: data,
        products,
      };
      await handleDeleteMany();
      await dispatch(POST_ORDER(order_details, Token));
      setLoad(false);
      handleClose();
      swal({
        title: "Product order Successfully !",
        text: "Go home page",
        icon: "success",
        button: "ok",
      }).then(() => navigate("/profile"));
    } else {
      let order_details = {
        amount,
        address: data,
        products,
      };
      await handleDeleteMany();
      await dispatch(POST_ORDER(order_details, Token));
      setLoad(false);
      handleClose();
      swal({
        title: "Product order Successfully !",
        text: "Go home page",
        icon: "success",
        button: "ok",
      }).then(() => navigate("/profile"));
    }
    setPayment(IntialState);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => {
    let x = true;
    for (let key in data) {
      if (data[key] == "" || data[key] === null) {
        x = false;
        break;
      }
    }

    if (x) {
      setShow(true);
    } else {
      swal({
        title: "Please Fill all Details",
      });
    }
  };

  return (
    <>
      <ButtonComponent
        Title="Next"
        buttonColor="green"
        handleClick={handleShow}
      />
      {/* <Button backgroundColor="pink" variant="primary" onClick={handleShow}>
        Next
      </Button> */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Payment</Modal.Title>
        </Modal.Header>
        {load ? (
          <Loading />
        ) : (
          <>
            {" "}
            <Modal.Body>
              Amount Need to Pay Rs.{amount}.00
              <Flex gap="15px" mt="15px">
                <input
                  name="box1"
                  type="checkbox"
                  value={payment.box1}
                  onChange={handlePaymentChange}
                />
                <Text>Cash on Delivery</Text>
              </Flex>
              <Flex mt="15px" gap="15px">
                <input
                  name="box2"
                  type="checkbox"
                  value={payment.box2}
                  onChange={handlePaymentChange}
                />
                <Text>Card Payment</Text>
              </Flex>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button onClick={handlePaymentSubmit} variant="primary">
                Confirm order
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </>
  );
}

export default memo(ConfirmModal);

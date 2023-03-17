import "./ValidationForm.css";
import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";
import swal from "sweetalert";
import { auth } from "../../Firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import HandleLoginOtp from "../../Components/MobileOtp/HandleLoginOtp";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
};

const ValidationForm = () => {
  const [fields, setFields] = useState(initialState);
  const [Load, setload] = useState(false);
  const [show, setShow] = useState(false);
  //*  Modal Open & Close Function //
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //*  Modal Open & Close Function //
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  // Captha verifier //
  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    );
  };
  // Captha verifier End //

  // Send Otp handle //

  const HandleOtp = (Number) => {
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    const phoneNumber = "+91" + Number;
    console.log(phoneNumber);
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        handleShow();
         setload(false);
      })
      .catch((error) => {
        console.log(error);
        swal({
          title: "Something Went wrong !",
          text: "Please Enter correct Number",
          icon: "error",
          button: "ok",
        });
      });
  };

  //  Post data to Database and Create Account Start

  const Register = () => {
    axios
      .post("https://magnificent-jade-girdle.cyclic.app/users/signup", fields)
      .then((res) => {
        console.log(res);
        swal({
          title: "Register successful !",
          text: "Go to Login",
          icon: "success",
          button: "ok",
        }).then(() => {
         
          navigate("/login");
        });
      })
      .catch((err) => {
        console.log(err);
        swal({
          title: "Register Failed !",
          text: "Please Try again",
          icon: "error",
          button: "ok",
        }).then(() => {
        });
      });
  };

  //  Post data to Database and Create Account End

  // Verify Otp start

  const verifyOtp = (Otp) => {
     setload(true);
    let confirmationResult = window.confirmationResult;
    confirmationResult
      .confirm(Otp)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
       
        Register();
         setload(false);
        // if (token && authOtp) {

        // } else {

        // }
      })
      .catch((error) => {
         setload(false);
        swal({
          title: "Mobile OTP not verified!",
          text: "Please Try again",
          icon: "error",
          button: "ok",
        });
      });
  };

  // Verify Otp End

  // Send Otp handle //

  const onSubmit = async (event) => {
    event.preventDefault();

    if (
      fields.firstName === "" ||
      fields.firstName === null ||
      fields.lastName === "" ||
      fields.lastName === null ||
      fields.email === "" ||
      fields.email === null ||
      fields.phone === "" ||
      fields.phone === null ||
      fields.password === "" ||
      fields.password === null
    ) {
      swal({
        title: "Register Failed !",
        text: "Please add required fields !",
        icon: "error",
        button: "ok",
      }).then(() => {
        setload(false);
      });
    } else if (!fields.email.includes("@") || !fields.email.includes(".")) {
      swal({
        title: "Incooect Email Id Entered!",
        text: "Add a Valid Email Id",
        icon: "error",
        button: "ok",
      });
    } else if (fields.phone.length != 10 || fields.phone[0] == 0) {
      swal({
        title: "Register Failed !",
        text: "Mobile must be 10 digits",
        icon: "error",
        button: "ok",
      });
    } else if (fields.password.length < 6) {
      swal({
        title: "Register Failed !",
        text: "Password must be more than 6 letters",
        icon: "error",
        button: "ok",
      });
    } else {
      setload(true);
      HandleOtp(fields.phone);
    }
  };


  useEffect(() => {
    
  },[Load])

  return (
    <div className="validation_form">
      {Load ? (
        <Loading />
      ) : (
        <form
          className="myForm"
          noValidate
          autoComplete="off"
          onSubmit={onSubmit}
        >
          {/* First Name */}
          <p className="title_validation">
            <label>
              * First Name
              <br />
              <input
                className="validation_input"
                type="text"
                name="firstName"
                value={fields.firstName}
                onChange={handleChange}
                required
              />
            </label>
          </p>

          {/* Last Name */}
          <p className="title_validation">
            <label>
              * Last Name
              <br />
              <input
                className="validation_input"
                type="text"
                name="lastName"
                value={fields.lastName}
                onChange={handleChange}
              />
            </label>
          </p>

          {/* Email Address */}
          <p className="title_validation">
            <label>
              * Email address
              <br />
              <input
                className="validation_input"
                type="email"
                name="email"
                value={fields.email}
                onChange={handleChange}
                required
              />
            </label>
          </p>

          {/* Phone Number */}
          <p className="title_validation">
            <label>
              * Cell Phone Number
              <br />
              <input
                className="validation_input"
                type="tel"
                name="phone"
                maxLength={10}
                value={fields.phone}
                onChange={handleChange}
                required
              />
            </label>
          </p>

          {/* Password */}
          <p className="title_validation">
            <label>
              * Password
              <br />
              <input
                className="validation_input"
                type="password"
                name="password"
                value={fields.password}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <Text
              mt="5px"
              color="red"
              display={fields.password.length >= 6 ? "none" : "flex"}
            >
              {" "}
              Password must be 6 Letters
            </Text>
          </p>

          {/* Confirm password */}
          {/* <p className="title_validation">
          <label>
            * Confirm Password
            <br />
            <input
              className="validation_input"
              type="password"
              name="confirm_password"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.confirm_password}
            />
          </label>
          <br />
          <label className="error">
            {errors.confirm_password ? errors.confirm_password : ""}
          </label>
        </p> */}

          <p>
            <button className="signup_continue" type="submit">
              CREATE AN ACCOUNT
            </button>
          </p>
        </form>
      )}
      <div className="visible">
        <HandleLoginOtp
          handleClose={handleClose}
          mbl={fields.phone}
          show={show}
          verifyOtp={verifyOtp}
          Load={Load}
        />
      </div>
      <Box id="recaptcha-container" mb="10px" />
    </div>
  );
};

export default ValidationForm;

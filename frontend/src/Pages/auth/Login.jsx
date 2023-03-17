import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { SetLocal } from "../../Utils/localstorage";
import Loading from "../../Components/Loading/Loading";
import swal from "sweetalert";
import { Box } from "@chakra-ui/react";
import HandleForget from "../../Components/MobileOtp/HandleForget";
import { auth } from "../../Firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import PasswordChange from "../../Components/MobileOtp/PasswordChange";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Load, setload] = useState(false);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [user, setUser] = useState(null);
  const [data, setData] = useState("");
  const [Load2, setload2] = useState(false);
  //*  Modal Open & Close Function //
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    if (email !== "" && password !== "") {
      setload(true);
      axios
        .post("https://magnificent-jade-girdle.cyclic.app/users/login", {
          email,
          password,
        })
        .then((res) => {
          swal({
            title: "Good job!",
            text: "Login Successfully",
            icon: "success",
            button: "ok",
          }).then(() => {
            setload(false);
            SetLocal("auth", res.data.loginUser.accessToken);
            if (res.data.loginUser.isAdmin) {
              localStorage.setItem("isAdmin", JSON.stringify(true));
              navigate("/admin");
            } else {
              navigate("/");
            }
          });
        })
        .catch((err) => {
          swal({
            title: "Login Failed!",
            text: "Try again",
            icon: "error",
            button: "ok",
          }).then((res) => setload(false));
        });
    } else {
      swal({
        title: "Try again!",
        text: "Plaese Fill All details!",
        icon: "error",
        button: "ok",
      });
    }
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

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setload2(false);
      })
      .catch((error) => {
        setload2(false);
        swal({
          title: "Something Went wrong !",
          text: "Please Enter correct Number",
          icon: "error",
          button: "ok",
        });
      });
  };

  // Verify Otp start

  const verifyOtp = (Otp) => {
    setload(true);
    let confirmationResult = window.confirmationResult;
    confirmationResult
      .confirm(Otp)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        setload(false);
        handleClose();
        handleShow2();
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

  //  Forgot Password logics start //

  const handleForgetPassword = (e) => {
    e.preventDefault();
    handleShow();
  };

  //  Forgot Password logics End //

  return (
    <div className={styles.login_parent}>
      {Load ? (
        <Loading />
      ) : (
        <div className={styles.existing_and_new_users}>
          <div className={styles.existing_customer}>
            <p className={styles.existing_user_tag}>Existing Customers</p>

            <div className={styles.login_form}>
              <form onSubmit={handleLogin}>
                {/* For email */}
                <div>
                  <label>
                    * Email address
                    <br />
                    <input
                      className={styles.input_login}
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      type="email"
                    />
                  </label>
                </div>
                <div className="visible">
                 {user && <PasswordChange show2={show2} user_id={user._id} handleClose2={handleClose2} />}
                  <HandleForget
                    handleClose={handleClose}
                    show={show}
                    verifyOtp={verifyOtp}
                    Load={Load}
                    setData={setData}
                    data={data}
                    HandleOtp={HandleOtp}
                    Load2={Load2}
                      setload2={setload2}
                      setUser={setUser}
                    // setload={setload}
                  />
                </div>
                {/* Form password */}
                <div>
                  <label>
                    * Password
                    <br />
                    <input
                      className={styles.input_login}
                      type="password"
                      required
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </label>
                </div>

                <p
                  className={styles.forgot_password}
                  onClick={handleForgetPassword}
                >
                  FORGOTTEN YOUR PASSWORD?
                </p>

                <div>
                  <button className={styles.login_button}>
                    LOGIN TO YOUR ACCOUNT
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className={styles.new_customers}>
            <p className={styles.new_customes_tag}>New Customers</p>
            <Link to="/signup">
              <button className={styles.continue_to_register}>CONTINUE</button>
            </Link>
          </div>
        </div>
      )}
      <Box id="recaptcha-container" mb="10px" />
    </div>
  );
}

export default Login;

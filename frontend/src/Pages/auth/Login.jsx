import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { SetLocal } from "../../Utils/localstorage";
import Loading from "../../Components/Loading/Loading";
import swal from "sweetalert"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Load, setload] = useState(false);
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
                <p>
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
                </p>

                {/* Form password */}
                <p>
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
                </p>

                <p className={styles.forgot_password}>FORGOTTEN YOUR PASSWORD?</p>

                <p>
                  <button className={styles.login_button}>
                    LOGIN TO YOUR ACCOUNT
                  </button>
                </p>
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
    </div>
  );
}

export default Login;

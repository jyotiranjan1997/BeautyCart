import styles from "./TopNav.module.css";
import logo from "./Beauty_Cart.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { RiAccountPinCircleFill } from "react-icons/ri";
import Account from "./Account";

const getData = async (data) => {
  try {
    console.log(data)
    let res = await axios.get(
      `https://magnificent-jade-girdle.cyclic.app/navbars?q=${data}`
    );
    console.log(res)
    return res.data;
  } catch (err) {
    return err;
  }
};

export default function Navbar2() {
  const [q, setQ] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const Navigate = useNavigate();
  const handleText = (data) => {
    setQ(data);
  };
  useEffect(() => {
    let timeout = setTimeout(() => {
      if (q === "") {
        setSuggestion([]);
      } else {
        setSuggestion(getData(q));
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [q]);

  const handlenavigate = (e) => {
    Navigate(e.target.value);
  };

  return (
    <div>
      <ul className={styles.Container}>
        <li className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </li>
        <li>
          <select onChange={handlenavigate}>
            <option value="/">All Category</option>
            <option value={"/foundation"}>Makeup</option>
            <option value={"/hair_oil"}>Hair Care</option>
            <option value={"/wallet"}>Wallet</option>
            <option value={"/faceWash"}>Skin Products</option>
            <option value={"/ayurvedic"}>Ayurvedic Products</option>
          </select>
        </li>
        <li>
          <input
            placeholder="Enter your Search Products"
            onChange={(e) => handleText(e.target.value)}
            value={q}
          />
          <div className={suggestion.length > 0 ? styles.suggestion : null}>
            {suggestion.length > 0
              ? suggestion.map((item, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        padding: "15px",
                      }}
                    >
                      <div
                        onClick={() => {
                          Navigate(`/products/${item._id}`, {
                            state: { data: item },
                          });
                          setSuggestion([]);
                          setQ("");
                        }}
                      >
                        <img src={item.image} style={{ height: "40px" }} />
                        <h3>{item.description}</h3>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </li>
        <li>
          <Flex gap={["5px", "10px", "15px", "15px"]} alignItems="center">
            <RiAccountPinCircleFill size={25} />
            <Account />
          </Flex>
        </li>
      </ul>
    </div>
  );
}

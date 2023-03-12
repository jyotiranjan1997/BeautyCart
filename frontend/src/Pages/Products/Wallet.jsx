import { Link } from "react-router-dom";
import Products from "../../Components/ProductComponent/Product";

export default function Wallet() {
  return (
    <Link to="/wallet">
      <Products product_category={"wallet"} />
    </Link>
  );
}

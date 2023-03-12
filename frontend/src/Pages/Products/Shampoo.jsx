import { Link } from "react-router-dom";
import Products from "../../Components/ProductComponent/Product";

export default function Shampoo() {
  return (
   <Link to="/shampoo">
      <Products product_category={"shampoo"} />
    </Link>
  );
}

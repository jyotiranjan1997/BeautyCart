import { Link } from "react-router-dom";
import Products from "../../Components/ProductComponent/Product";

export default function Foundation() {
    return (
      <Link to="/foundation">
        <Products
          product_category={"foundation"}
          product_name="Foundation Products"
        />
      </Link>
    );
}

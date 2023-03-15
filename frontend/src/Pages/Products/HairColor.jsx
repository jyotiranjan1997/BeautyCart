import { Link } from "react-router-dom";
import Products from "../../Components/ProductComponent/Product";

export default function HairColor() {
  return (
    <Link to="/hair_color">
      <Products
        product_category={"hair oil"}
        product_name="Hair Oil"
      />
    </Link>
  );
}

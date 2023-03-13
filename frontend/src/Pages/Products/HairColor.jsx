import { Link } from "react-router-dom";
import Products from "../../Components/ProductComponent/Product";

export default function HairColor() {
  return (
    <Link to="/hair_color">
      <Products
        product_category={"hair color"}
        product_name="Hair Colour"
      />
    </Link>
  );
}

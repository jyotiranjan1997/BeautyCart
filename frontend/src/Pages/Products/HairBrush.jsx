import { Link } from "react-router-dom";
import Products from "../../Components/ProductComponent/Product";

export default function HairBrush() {
  return (
    <Link to="/hair_brush" >
      <Products product_category={"hair brush"} />
    </Link>
  );
}

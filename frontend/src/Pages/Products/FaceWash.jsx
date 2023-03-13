import { Link } from "react-router-dom";
import Products from "../../Components/ProductComponent/Product";

export default function FaceWash() {
  return (
    <Link to="/faceWash">
      <Products
        product_category={"face wash"}
        product_name="Face Wash"
      />
    </Link>
  );
}

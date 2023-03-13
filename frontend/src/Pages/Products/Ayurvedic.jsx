import { Link } from "react-router-dom";
import Products from "../../Components/ProductComponent/Product";

export default function Ayurvedic() {
  return (
    <Link to="/Ayurvedic">
      <Products product_category={"ayurvedic"} product_name="Ayurvedic Products" />
    </Link>
  );
}

import React, { useEffect } from "react";
import Products from "../../../Components/ProductComponent/Product";
 function MakeupCategory({ category }) {

    useEffect(() => {
    
},[category])


  return (
    <div >
      <Products product_category={category} />
    </div>
  );
}
export default React.memo(MakeupCategory);
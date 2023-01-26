import { Link } from "react-router-dom";
import{Restaurant_cart} from "./product.styles";

const Product = props => {
  return (
    <Restaurant_cart>
      <div>
          <h2>{props.id}</h2>
          <h2>{props.name}</h2>
    </div>
    </Restaurant_cart>
  );
};
export default Product;


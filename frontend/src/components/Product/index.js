import { Link } from "react-router-dom";
import{productContainer} from "./product.styles";

const index = props => {
  return (
    <productContainer>
      <h2>{props.id}</h2>
      <p>{props.image}</p>
      <Link to={`/Search/${props.id}`}>See Details</Link>
    </productContainer>
  );
};
export default index;


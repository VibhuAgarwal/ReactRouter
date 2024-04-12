import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <h1>Homepage</h1>
      <p>
        <Link to="/products">Products</Link>
      </p>
    </>
  );
}

export default Homepage;

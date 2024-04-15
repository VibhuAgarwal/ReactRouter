import { Link, useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }
  return (
    <>
      <h1>Homepage</h1>
      <p>
        <Link to="/products">Products</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}

export default Homepage;

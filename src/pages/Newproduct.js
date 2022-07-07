import { useNavigate } from "react-router-dom";
import Productform from "../components/Productform";

const Newproduct = () => {
  const navigate = useNavigate();
  const addProductHandler = (productData) => {
    fetch("http://localhost/scandiweb-backend/add.php", {
      method: "POST",
      body: JSON.stringify(productData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        console.log("added to the db");
        navigate("/");
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <div>
      <div className="productHead">
        <h2>Product Add</h2>
        <div className="d-flex">
          <button
            type="submit"
            className="btn btn-info me-3"
            form="product_form"
          >
            Save
          </button>

          <a href="/" className="btn btn-danger">
            Cancel
          </a>
        </div>
      </div>
      <hr />
      <div>
        <Productform onAddProduct={addProductHandler} />
      </div>
    </div>
  );
};
export default Newproduct;

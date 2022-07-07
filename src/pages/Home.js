import { useEffect, useState } from "react";
import axios from "axios";
import Products from "../components/Products";
import "../styles/main.css";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedProducts, setLoadedProducts] = useState([]);
  const productsToDelete = []; //captures ids of selected products t

  async function getProducts() {
    setIsLoading(true);
    const response = await axios.get("http://localhost/scandiweb-backend/");
    const products = response.data;
    const dataList = [];

    for (let product of products) {
      dataList.push(product);
    }

    setLoadedProducts(dataList);
    setIsLoading(false);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const handleToggleProduct = (e) => {
    const productId = e.target.value;

    const productIndex = productsToDelete.indexOf(productId);
    if (productIndex === -1) {
      productsToDelete.push(productId);
    } else {
      productsToDelete.splice(productIndex, 1);
    }
    console.log(productsToDelete);
  };

  const deleteProductHandler = () => {
    if (productsToDelete.length > 0) {
      fetch("http://localhost/scandiweb-backend/delete.php", {
        method: "POST",
        body: JSON.stringify(productsToDelete),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          getProducts();
          console.log("deleted from the db");
        })
        .catch((e) => {
          console.log(e.message);
        });
    } else {
      alert("Select Product(s) to delete");
    }
  };

  return (
    <div>
      <div className="productHead">
        <h2>Product List</h2>
        <div className="d-flex">
          <a href="/addproduct" className="btn btn-info me-3">
            ADD
          </a>
          <button
            id="delete-product-btn"
            className="btn btn-danger"
            onClick={deleteProductHandler}
          >
            MASS DELETE
          </button>
        </div>
      </div>
      <hr />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="d-flex justify-content-center" id="deleteProducts">
          <Products
            products={loadedProducts}
            toggleProducts={handleToggleProduct}
          />
        </div>
      )}
    </div>
  );
};
export default Home;

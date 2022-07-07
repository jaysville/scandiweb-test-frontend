import Attribute from "./Attribute";
const Products = (props) => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {props.products.map((product) => {
        return (
          <div key={product.sku} className="products m-3">
            <div>
              <input
                type="checkbox"
                className="delete-checkbox"
                value={product.id}
                onChange={props.toggleProducts}
              />
            </div>
            <div>
              <p className="text-center">{product.sku}</p>
              <p className="text-center">{product.name}</p>
              <p className="text-center">${product.price} </p>
              <Attribute data={product} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

import { useState } from "react";
import DVDForm from "./DvdForm";
import BookForm from "./BookForm";
import FurnitureForm from "./FurnitureForm";
import Form from "react-bootstrap/Form";

const Productform = (props) => {
  const [dvdForm, SetDvdForm] = useState(false);
  const [bookForm, SetBookForm] = useState(false);
  const [furnitureForm, SetFurnitureForm] = useState(false);
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState("");
  const [size, setSize] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const skuChangeHandler = (e) => {
    setSku(e.target.value);
  };
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const priceChangeHandler = (e) => {
    setPrice(e.target.value);
  };
  const weightChangeHandler = (e) => {
    setWeight(e.target.value);
  };
  const sizeChangehandler = (e) => {
    setSize(e.target.value);
  };
  const lengthChangeHandler = (e) => {
    setLength(e.target.value);
  };
  const widthChangeHandler = (e) => {
    setWidth(e.target.value);
  };
  const heightChangeHandler = (e) => {
    setHeight(e.target.value);
  };

  const renderForm = (e) => {
    let choice = e.target.value;
    if (choice === "DVD") {
      SetDvdForm(true);
      SetBookForm(false);
      SetFurnitureForm(false);
    } else if (choice === "Book") {
      SetBookForm(true);
      SetDvdForm(false);
      SetFurnitureForm(false);
    } else if (choice === "Furniture") {
      SetDvdForm(false);
      SetBookForm(false);
      SetFurnitureForm(true);
    } else {
      SetDvdForm(false);
      SetBookForm(false);
      SetFurnitureForm(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const productData = {
      sku: sku,
      name: name,
      price: price,
      weight: weight,
      size: size,
      length: length,
      width: width,
      height: height,
    };
    props.onAddProduct(productData);
    console.log(productData);
  };

  return (
    <form
      id="product_form"
      className="needs-validation"
      onSubmit={submitHandler}
    >
      <div className="input">
        <label htmlFor="sku">SKU</label>
        <input type="text" name="sku" id="sku" onChange={skuChangeHandler} />
        <div className="valid-feedback">Looks good!</div>
        <div className="invalid-feedback">Please choose a username.</div>
      </div>
      <div className="input">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={nameChangeHandler} />
      </div>
      <div className="input">
        <label htmlFor="price">Price ($)</label>
        <input
          type="number"
          name="price"
          id="price"
          onChange={priceChangeHandler}
        />
      </div>
      <div className="input">
        <label htmlFor="productType">Type Switcher</label>
        <select id="productType" onChange={renderForm}>
          <option value="">Select Type</option>
          <option value="DVD">DVD</option>
          <option value="Book">Book</option>
          <option value="Furniture">Furniture</option>
        </select>
      </div>
      {dvdForm && <DVDForm handleSize={sizeChangehandler} />}
      {bookForm && <BookForm handleWeight={weightChangeHandler} />}
      {furnitureForm && (
        <FurnitureForm
          handleLength={lengthChangeHandler}
          handleWidth={widthChangeHandler}
          handleHeight={heightChangeHandler}
        />
      )}
    </form>
  );
};
export default Productform;

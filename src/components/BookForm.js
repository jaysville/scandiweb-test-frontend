const BookForm = (props) => {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="book">Weight (KG)</label>
        <input
          type="number"
          id="book"
          name="attribute[weight]"
          onChange={props.handleWeight}
        />
      </div>
      <div className="input">
        <p>Please provide weight in Kilograms.</p>
      </div>
    </div>
  );
};
export default BookForm;

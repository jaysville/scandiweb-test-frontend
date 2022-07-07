const DVDForm = (props) => {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="DVD">SIZE (MB)</label>
        <input
          type="number"
          id="DVD"
          name="attribute[size]"
          onChange={props.handleSize}
        />
      </div>
      <div className="input">
        <p>Please provide size in Megabytes.</p>
      </div>
    </div>
  );
};
export default DVDForm;

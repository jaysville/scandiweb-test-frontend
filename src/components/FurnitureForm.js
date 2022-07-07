const FurnitureForm = (props) => {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="height">Height (CM)</label>
        <input
          type="number"
          id="height"
          name="attribute[height]"
          onChange={props.handleHeight}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="width">Width (CM)</label>
        <input
          type="number"
          id="width"
          name="attribute[width]"
          onChange={props.handleWidth}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="length">Length (CM)</label>
        <input
          type="number"
          id="length"
          name="attribute[length]"
          onChange={props.handleLength}
        />
      </div>
      <div className="input">
        <p>Please provide dimensions in HxWxL format.</p>
      </div>
    </div>
  );
};

export default FurnitureForm;

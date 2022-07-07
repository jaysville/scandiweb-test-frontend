const Attribute = (props) => {
  return (
    <div className="text-center">
      {props.data.size && <p>Size: {props.data.size} MB</p>}
      {props.data.weight && <p>Weight: {props.data.weight} KG</p>}
      {props.data.dimension && <p>Dimension: {props.data.dimension}</p>}
    </div>
  );
};
export default Attribute;

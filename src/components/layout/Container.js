const Container = (props) => {
  return (
    <div className=" d-flex flex-column vh-100 container-fluid mt-5 ">
      {props.children}
    </div>
  );
};
export default Container;

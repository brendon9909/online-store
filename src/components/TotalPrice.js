export default function TotalPrice(props) {
    return (
      <>
        {props.show && <h2 className="myPrice">Total price: R{props.price}</h2>}{" "}
        {/*will only display if the props.show is true*/}
      </>
    );
  }
  
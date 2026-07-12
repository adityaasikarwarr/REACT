import react, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("cash");
  const [shipping, setShipping] = useState("standard");

  function changeName(event) {
    setName(event.target.value);
  }

  function changeQuantity(event) {
    setQuantity(event.target.value);
  }

  function changeComment(event) {
    setComment(event.target.value);
  }

  function changePayment(event) {
    setPayment(event.target.value);
  }

  function changeShipping(event) {
    setShipping(event.target.value);
  }

  return (
    <div>

      <input value={name} onChange={changeName}></input>
      <p>Name : {name}</p>
      <input value={quantity} onChange={changeQuantity} type="number"></input>
      <p>Quantity : {quantity}</p>

      <textarea
        value={comment}
        onChange={changeComment}
        placeholder="Delivery instructions"
      ></textarea>
      <p>Comment : {comment}</p>

      <select value={payment} onChange={changePayment}>
        <option value="cash">Cash</option>
        <option value="card">Card</option>
        <option value="UPI">UPI</option>
        <option value="VISA">VISA</option>
        <option value="Mastercard">Mastercard</option>
        <option value="GiftCard">Gift Card</option>
      </select>
      <p>Payment : {payment}</p>

      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={changeShipping}
        ></input>
        Pickup
      </label>{" "}
      <br></br>
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={changeShipping}
        ></input>
        Delivery
      </label>
      <p>Shipping : {shipping}</p>
      
    </div>
  );
}
export default MyComponent;

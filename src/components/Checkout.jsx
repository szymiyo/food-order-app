import { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../utils/formatting";
import Input from "./Input";
import Button from "./Button";
import UserProgressContext from "../store/UserProgressContext";

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price , 0);

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  console.log(userProgressCtx.progress)

  return(
    <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
      <form>
        <h2>Ckeckout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

        <Input label="Full Name" type="Text" id="full-name"/>
        <Input label="Email Address" type="email" id="email"/>
        <Input label="Street" type="Text" id="street"/>
        <div className="control-row">
          <Input label="Postal Code" type="Text" id="postal-code"/>
          <Input label="City" type="Text" id="city"/>
        </div>
        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleClose}>Close</Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
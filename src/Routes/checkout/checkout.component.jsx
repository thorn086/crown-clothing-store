import "./checkout.style.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  const navigateHome = useNavigate();
  const goToHomeHandler = () => {
    navigateHome("/");
  };
  return (
    <div className="checkout-container">
      {cartItems.length === 0 ? (
        <div className="empty-checkout">
          Your Cart is empty, continue{" "}
          <span className="continue-shopping" onClick={goToHomeHandler}>
            <u>Shopping</u>
          </span>
        </div>
      ) : (
        <>
          <div className="checkout-header">
            <div className="header-block">Product</div>
            <div className="header-block">Description</div>
            <div className="header-block">Quantity</div>
            <div className="header-block">Price</div>
            <div className="header-block">Remove</div>
          </div>
          {cartItems.map((item) => {
            return <CheckoutItem key={item.id} cartItem={item} />;
          })}
          <span className="total">Total : ${cartTotal}</span>
        </>
      )}
    </div>
  );
};
export default CheckOut;

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItems from "../../components/cart-items/cart-items.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
    setIsCartOpen(!isCartOpen);
  };
  console.log(cartItems);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <b className="empty-message">Your Cart is Empty</b>
        ) : (
          cartItems.map((item) => <CartItems key={item.id} cartItem={item} />)
        )}
      </div>
      <Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
    </div>
  );
};
export default CartDropdown;

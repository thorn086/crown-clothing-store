import "./checkout-item.style.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { deleteItemFromCart, addItemToCart, removeItemInCart } =
    useContext(CartContext);
  const handleAddCartItem = () => addItemToCart(cartItem);
  const handleDeletedItem = () => deleteItemFromCart(cartItem);
  const handleRemoveCartItem = () => removeItemInCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleRemoveCartItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleAddCartItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleDeletedItem}>
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItem;

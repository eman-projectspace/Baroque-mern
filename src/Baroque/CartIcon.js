import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

const CartIcon = () => {
  const { cart, cartNotification } = useCart();
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/cart")} className="relative">
      <img
        className="h-5 w-5 md:mr-10 hidden sm:block md:block"
        src="https://cdn-icons-png.flaticon.com/128/1828/1828415.png"
        alt="Cart"
      />
      <img
        className="h-5 w-5 mr-3 ml-5 -mt-14 block sm:hidden md:hidden"
        src="https://cdn-icons-png.flaticon.com/128/1828/1828415.png"
        alt="Cart"
      />

      {/* Notification Indicator */}
      {cartNotification && (
        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          !
        </div>
      )}

      {/* Cart Item Count */}
      {cart.length > 0 && (
        <div className="absolute top-0 right-0 bg-black text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
          {cart.length}
        </div>
      )}
    </button>
  );
};

export default CartIcon;
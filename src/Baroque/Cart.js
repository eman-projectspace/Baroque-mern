// import { useCart } from "../Context/CartContext";
// import { Link } from "react-router-dom";

// const Cart = () => {
//   const { cart, dispatch } = useCart();

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty. <Link to="/">Go shopping</Link></p>
//       ) : (
//         cart.map((item) => (
//           <div key={item.id}>
//             <img src={item.image} alt={item.name} width="100" />
//             <p>{item.name}</p>
//             <p>Price: ${item.price}</p>
//             <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}>
//               Remove
//             </button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Cart;

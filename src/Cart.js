import { useReducer } from "react";

const initialState = { items: [], total: 0 };

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        items: [...state.items, action.payload],
        total: state.total + action.payload.price
      };
    case 'REMOVE_ITEM':
      const itemToRemove = state.items.find(item => item.id === action.payload.id);
      return {
        items: state.items.filter(item => item.id !== action.payload.id),
        total: state.total - itemToRemove.price
      };
    case 'CHECKOUT':
      return {
        items: [],
        total: 0
      };
    default:
      return state;
  }
}

function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  function handleAddItem(item) {
    dispatch({ type: 'ADD_ITEM', payload: item });
  }

  function handleRemoveItem(item) {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  }

  function handleCheckout() {
    dispatch({ type: 'CHECKOUT' });
  }

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.items.map(item => (
          <li key={item.id}>
            {item.name} - {item.price} <button onClick={() => handleRemoveItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: {cart.total}</p>
      <button onClick={handleCheckout}>Checkout</button>
      <button onClick={() => handleAddItem({ id: 3, name: 'Product 3', price: 30 })}>Add Product 3</button>
    </div>
  );
}

export default ShoppingCart;

const calc = (a,b,p) => {
  if(a || b || p ) {
      return "Please provide all parameters";
  }
  switch(p) {
      case '+': {
          return a+b;
          break;
      }
      case '-': {
          return a-b;
          break;
      }
      case '*': {
          return a*b;
          break;
      }
      case '/': {
          return a/b;
          break;
      }
      default:{return;}
  }
}
exports.calc=calc; //very important line
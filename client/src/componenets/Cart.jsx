import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "../store/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.items.reduce((acc, item) => acc + item.totalPrice, 0));

  const removeItemsHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  const incrementHandler = (item) => {
    dispatch(addToCart(item));
  };

  const decrementHandler = (item) => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="min-h-screen  p-6 bg-white dark:bg-black text-black dark:text-white">
      {totalQuantity === 0 ? (
        <div className="flex text-2xl font-bold  justify-center flex-col items-center">
          No Items Found In Cart
          <p className="mt-44 text-lg font-semibold">Your cart is empty</p>
        </div>
      ) : (
        <div>
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            <p className="text-xl"> Total Items: {totalQuantity}</p>
          </div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="mb-4 border-b pb-4">
                <div className="flex justify-between">
                  <div className="flex">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover"
                    />
                    <div className="ml-4">
                      <h2 className="font-semibold">{item.name}</h2>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: {item.price}</p>
                      <p>TotalPrice: ${item.totalPrice.toFixed(2)}</p>
                      <form>
                        <div className="relative flex items-center max-w-[8rem]">
                          <button
                            onClick={() => decrementHandler(item)}
                            type="button"
                            className="bg-gray-100 dark:bg-black dark:hover:bg-gray-600 dark:border-black hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-2 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                          >
                            <svg
                              className="w-3 h-2 text-gray-900 dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 2"
                            >
                              <path stroke="currentColor" d="M1 1h16" />
                            </svg>
                          </button>
                          <input
                            type="text"
                            placeholder={item.quantity}
                            className="bg-gray-50 border-x-0 border-gray-300 h-7 text-center text-sm focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                          />
                          <button
                            onClick={() => incrementHandler(item)}
                            type="button"
                            className="bg-gray-100 dark:bg-black dark:hover:bg-gray-600 dark:border-black hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-2 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                          >
                            <svg
                              className="w-3 h-3 text-center text-gray-900 dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 18 "
                            >
                              <path stroke="currentColor" d="M9 1v16M1 9h16" />
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItemsHandler(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between">
            <button
              onClick={clearCartHandler}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Clear Cart
            </button>
            <p className="text-xl">Total Amount: ${totalAmount.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
}

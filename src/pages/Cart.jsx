 import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div >
      {cart.length > 0 ? (
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
          <div className="w-[100%] md:w-[60%] flex flex-col p-2">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="w-[100%] md:w-[40%] mt-5  flex flex-col">
            <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between">
            <div className="flex flex-col gap-5 ">
            <div className="text-xl font-semibold text-green-800 ">Your Cart</div>
              <div className="-mt-5 text-5xl font-semibold text-green-700">Summary</div>
              <p className="text-xl">
                <span className="text-xl font-semibold text-gray-700">Total Items: {cart.length}</span>
              </p>
            </div>
            </div>

            <div className="flex flex-col">
              <p className="text-xl font-bold"><span className="font-semibold text-gray-700">Total Amount:</span> ${totalAmount}</p>
              <button className="p-3 mt-5 text-xl font-bold text-white transition duration-300 ease-linear bg-green-700 border-2 border-green-600 rounded-lg hover:bg-purple-50 hover:text-green-700">CheckOut Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="mb-2 text-xl font-semibold text-gray-700">
            Your cart is empty!
          </h1>
          <Link to={"/"}>
            <button className="p-3 px-10 mt-5 font-semibold tracking-wider text-white uppercase transition duration-300 ease-linear bg-green-600 border-2 border-green-600 rounded-lg hover:bg-purple-50 hover:text-green-700">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;

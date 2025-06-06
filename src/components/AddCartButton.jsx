import addCart from "../assets/images/icon-cart.svg";

export function AddCartButton({ children }) {
  return (
    <>
      <button className="font-mon font-medium text-white text-lg bg-half-green flex items-center justify-center w-full p-4 md:p-2 rounded-xl hover:bg-full-green active:bg-full-green">
        <img src={addCart} className="w-5 h-5 mr-4" alt="" />

        {children}
      </button>
    </>
  );
}

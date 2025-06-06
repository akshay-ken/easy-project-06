import mainImage from "../assets/images/image-product-mobile.jpg";
import desktopMainImage from "../assets/images/image-product-desktop.jpg";
import { AddCartButton } from "./AddCartButton";

export function MainCard() {
  return (
    <>
      <main className="flex flex-col rounded-2xl w-full max-w-sm md:max-w-xl bg-white mx-auto my-18 md:flex-row md:my-32">
        <div className="md:hidden">
          <img
            src={mainImage}
            alt="Product for mobile"
            className="rounded-t-xl md:rounded-l-2xl md:h-full"
          />
        </div>
        <div className="hidden md:block md:max-w-1/2">
          <img
            src={desktopMainImage}
            alt="Product for desktop"
            className="xs:rounded-t-2xl md:rounded-l-2xl md:h-full"
          />
        </div>

        {/* other half of card */}
        <div className="p-4 xs:p-8 md:w-1/2">
          <p className=" font-mon  font-medium text-cgrey">P E R F U M E</p>
          <p className="my-4 font-far font-extrabold text-cblack text-3xl">
            Gabrielle Essence Eau De Parfum
          </p>
          <p className="font-mon font-semibold text-cgrey text">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <p className="my-6 font-far font-extrabold text-3xl text-half-green items-center flex">
            $149.99{" "}
            <s className="font-mon font-medium text-xl text-cgrey ml-4 md:text-sm">
              $169.99
            </s>
          </p>
          <AddCartButton> Add to Cart </AddCartButton>
        </div>
      </main>
    </>
  );
}

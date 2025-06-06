import { MainCard } from "./components/MainCard";
import { ProductCard } from "./components/ProductCard";
import mainImage from "../src/assets/images/image-product-mobile.jpg";
import desktopMainImage from "../src/assets/images/image-product-desktop.jpg";

function App() {
  const ProductData = {
    name: "P E R F U M E",

    title: "Gabrielle Essence Eau De Parfum",

    description:
      "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",

    offerPrice: "$149.99",
    MRP: "$169.99",

    avilableOption: "Add to Cart",
    mobileImage: mainImage,
    desktopImage: desktopMainImage,
  };
  return (
    <>
      {/* <MainCard /> */}
      <ProductCard {...ProductData} />
    </>
  );
}

export default App;

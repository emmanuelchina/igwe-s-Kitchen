
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "BitterLeaf Soup",
    price: "2500",
    imageSrc: "/img/biterleaf1.jpeg",
    imageAlt:
      "BitterLeaf soup.",
  },
  {
    id: 2,
    name: "Oha Soup",
    price: "3000",
    imageSrc: "/img/òha2.jpeg",
    imageAlt:
      "Oha Soup.",
  },
  {
    id: 3,
    name: "Smoky jollof Rice",
    price: "4000",
    imageSrc: "/img/smoky-Nigerian-jollof.webp",
    imageAlt:
      "Smoky jollof Rice.",
  },
  {
    id: 4,
    name: "Vegetable Soup",
    price: "3500",
    imageSrc: "/img/vegetable-soup.jpeg",
    imageAlt:
      "Vegetable Soup.",
  },
  {
    id: 5,
    name: "African Salad (Abacha)",
    price: "3000",
    imageSrc: "/img/african salad.jpeg",
    imageAlt: "African Salad (Abacha).",
  },
  {
    id: 6,
    name: "BitterLeaf Soup",
    price: "5000",
    imageSrc: "/img/bitterleaf.jpeg",
    imageAlt:
      "Stack of 3 small drab green cardboard paper card refill boxes with white text.",
  },
  {
    id: 7,
    name: "Egusi Soup",
    price: "4000",
    imageSrc: "/img/egusi-soup1.jpeg",
    imageAlt:
      "Egusi Soup.",
  },
  {
    id: 8,
    name: "Igwe kitchen special rice",
    price: "10000",
    imageSrc: "/hero.jpg",
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
];



export default function Gallery() {
 const navigate = useNavigate()

const handleClick = () => {
 navigate(  "/viewmore")
};

  return (
    <div className="bg-gray-100 text-gray-800  ">
      <h1 className=" font-semibold text-gray-800  text-2xl text-center ">
        MEALS AVAILABLE
      </h1>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 sm:grid-cols-2 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-gray-800 ">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900 ">
                &#8358;{product.price}
              </p>
            </a>
          ))}
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleClick}
            className="bg-gray-300 text-gray-900 px-2 py-1 rounded hover:bg-orange-900  "
          >
             View More &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

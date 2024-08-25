import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ShoppingCart } from "lucide-react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Store() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "All",
    gender: "All",
    priceRange: [0, Infinity],
  });

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("https://stylehive.onrender.com/api/product", {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 5000,
        });
        if (Array.isArray(response.data)) {
          setProducts(response.data);
          setfilteredProducts(response.data);
        } else {
          console.error("Expected an array but received:", response.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, []);
  useEffect(() => {
    if (Array.isArray(products)) {
      const updateProducts = products.filter((product) => {
        const productPrice = parseFloat(product.price.replace("$", ""));
        return (
          (filters.category === "All" ||
            product.category === filters.category) &&
          (filters.gender === "All" || product.gender === filters.gender) &&
          productPrice >= filters.priceRange[0] &&
          productPrice <= filters.priceRange[1]
        );
      });
      setfilteredProducts(updateProducts);
    } else {
      console.error("Products is not an array:", products);
    }
  }, [filters, products]);

  const handleCategoryChange = (category) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      category,
    }));
  };

  const handleGenderChange = (gender) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      gender,
    }));
  };

  const handlePriceChange = (value) => {
    let priceRange;
    switch (value) {
      case "low":
        priceRange = [0, 5];
        break;
      case "medium":
        priceRange = [6, 10];
        break;
      case "high":
        priceRange = [11, Infinity];
        break;
      case "all":
        priceRange = [0, Infinity];
    }
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange,
    }));
  };

  const handleaddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <div>
        <p className="flex pb-10 justify-center text-2xl pt-7 font-semibold">
          All Products
        </p>
        <div className="flex justify-evenly">
          <div className="pr-20">
            <Select onValueChange={handleCategoryChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="Shirts">Shirts</SelectItem>
                <SelectItem value="Pants">Pants</SelectItem>
                <SelectItem value="Sweatshirts">Sweatshirts</SelectItem>
                <SelectItem value="Jacket">Jacket</SelectItem>
                <SelectItem value="Glasses">Glasses</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="pr-20">
            <Select onValueChange={handleGenderChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="Men">Men</SelectItem>
                <SelectItem value="Women">Women</SelectItem>
                <SelectItem value="Unisex">Unisex</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Select onValueChange={handlePriceChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="low">Low ($0-$5)</SelectItem>
              <SelectItem value="medium">Medium ($6-$10)</SelectItem>
              <SelectItem value="high">High ($10+)</SelectItem>
            </SelectContent>
          </Select>
          <ShoppingCart
            onClick={() => navigate("/cart")}
            className="cursor-pointer group-hover:opacity-75"
          ></ShoppingCart>
        </div>
      </div>
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {Array.isArray(filteredProducts) &&
            filteredProducts.map((product) => (
              <div key={product.id} className="group relative">
                <div className="bg-gray-200 lg:h-80">
                  <img
                    src={product.image}
                    className="object-cover group-hover:opacity-75 lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <button
                      onClick={() => handleaddToCart(product)}
                      className=" absolute z-10 bg-slate-700 text-white px-2 cursor-pointer hover:opacity-90 rounded"
                    >
                      Add to Cart
                    </button>
                    <h3 className="text-sm dark:text-white">
                      <a href={product.href}>
                        <span
                          aria-hidden="true"
                          className="dark:text-white pl-28"
                        />
                        {product.name}
                      </a>
                    </h3>
                  </div>
                  <p className="text-sm font-medium dark:text-white">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

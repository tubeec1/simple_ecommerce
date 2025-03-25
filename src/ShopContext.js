import { createContext, useContext, useReducer } from "react";
import shopReducer, { initialState } from "./shopReducer";
import toast from "react-hot-toast";

export let ShopContext = createContext(initialState);

let ShopProvider = ({ children }) => {
  let [state, dispatch] = useReducer(shopReducer, initialState);
  let addToCart = (product) => {
    let updatedProducts = [...state.products, product];
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedProducts,
        price: updatedProducts.reduce((acc, product) => acc + product.price, 0),
      },
    });
    toast.success(`successfully added ${product.name} to cart`);
  };

  let deleteProduct = (productId) => {
    let deleteProduct = {};
    let updatedProducts = state.products.filter((p) => {
      if (p.id !== productId) {
        return;
      } else {
        deleteProduct = p;
      }
    });
    console.log(deleteProduct);

    dispatch({
      type: "DELETE_PRODUCT",
      payload: {
        products: updatedProducts,
        price: updatedProducts.reduce(
          (acc, p) => acc + p.price * p.quantity,
          0
        ),
      },
    });
    toast.error(`removed ${deleteProduct.name} from cart`, {
      style: {
        border: "1px solid #713200",
        padding: "16px",
        color: "#713200",
      },
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
    });
  };

  let increaseQuantity = (product) => {
    let updateProducts = state.products.map((p) => {
      if (p.id === product.id) {
        return {
          ...p,
          quantity: p.quantity + 1,
          stock: p.stock - 1,
        };
      } else {
        return p;
      }
    });

    let newPrice = updateProducts.reduce(
      (acc, p) => acc + p.price * p.quantity,
      0
    );

    dispatch({
      type: "INCREESE_QUANTITY",
      payload: {
        ...state,
        products: updateProducts,
        price: newPrice,
      },
    });
  };

  let decreeseQuantity = (product) => {
    if (product.quantity <= 1) {
      alert("Quantity must be greater than zero");
    } else {
      let updatedProducts = state.products.map((p) => {
        if (p.id === product.id) {
          return {
            ...p,
            quantity: p.quantity - 1,

            stock: p.stock + 1,
          };
        } else {
          return p;
        }
      });
      let newPrice = updatedProducts.reduce(
        (acc, p) => acc + p.price * p.quantity,
        0
      );

      dispatch({
        type: "DECREESE_QUANTITY",
        payload: {
          products: updatedProducts,
          price: newPrice,
        },
      });
    }
  };

  let values = {
    products: state.products,
    total: state.total,
    addToCart,
    deleteProduct,
    increaseQuantity,
    decreeseQuantity,
  };

  return <ShopContext.Provider value={values}>{children}</ShopContext.Provider>;
};

export default ShopProvider;

export const useShop = () => {
  let context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error(" shop is undefined or not defined in the context object");
  }
  return context;
};

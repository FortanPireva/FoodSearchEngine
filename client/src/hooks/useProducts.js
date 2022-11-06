import React, { useState, useEffect, useContext, createContext } from "react";

import Firebase from "../firebase/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import ProductModel from "../models/ProductModel";
import {
  addDoc,
  collection,
  getDocs,
  query,
  limit,
  orderBy,
} from "firebase/firestore";
const firebase = Firebase.instance;

const productContext = createContext();
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideProducts({ children }) {
  const products = useProvideProduct();
  return (
    <productContext.Provider value={products}>
      {children}
    </productContext.Provider>
  );
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useProducts = () => {
  return useContext(productContext);
};
// Provider hook that creates auth object and handles state
function useProvideProduct() {
  const [products, setProducts] = useState([]);
  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.

  async function getLatestProducts(settings) {
    let limitSize = 10;
    if (settings) {
      limitSize = settings.limitSize;
    }
    const q = query(
      collection(firebase.firestore(), "products"),
      limit(limitSize),
      orderBy("expDate", "asc")
    );
    const snapshot = await getDocs(q);
    const products = [];
    snapshot.forEach((doc) => {
      products.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return products;
  }
  useEffect(() => {}, []);
  // Return the user object and auth methods
  return {
    getLatestProducts,
  };
}

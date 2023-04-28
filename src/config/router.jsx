import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../modules/common/components/RootLayout";
import Home from "../modules/common/pages/Home";
import ProductDetail from "../modules/products/pages/ProductDetail";
import ProductListing from "../modules/products/pages/ProductListing";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ":category",
        element: <ProductListing />,
      },
      {
        path: "products/:productId",
        element: <ProductDetail />
      },
    ],
  },
]);

export default router;

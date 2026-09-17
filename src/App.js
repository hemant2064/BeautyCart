import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Head from "./components/Head";
import Body from "./components/Body";
import Cart from "./components/Cart";
import About from "./components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Head />,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
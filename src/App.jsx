import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import Blog from "./Components/blog/Blog";
import ContactUs from "./Components/contactUsPage/ContactUs";
import AboutUs from "./Components/aboutUsPage/AboutUs";
import AllPages from "./Components/AllPages/AllPages";
import Checkout from "./Components/Checkout/Checkout";

const route = createBrowserRouter([
  {
    path: "/",
    element: <AllPages />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;

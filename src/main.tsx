import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyled.ts";
import { NavermapsProvider } from "react-naver-maps";

const router = createBrowserRouter([{ path: "/", element: <App /> }]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <NavermapsProvider ncpClientId={import.meta.env.VITE_NAVER_MAP_ID}>
    <GlobalStyles />
    <RouterProvider router={router} />
  </NavermapsProvider>
);

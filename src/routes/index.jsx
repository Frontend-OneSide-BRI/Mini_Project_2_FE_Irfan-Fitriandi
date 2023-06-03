import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const HomePage = lazy(() => import("../pages/Home"));
const GalleryPage = lazy(() => import("../pages/Gallery"));
const Layout = lazy(() => import("../components/Layout"));
const NotFound = lazy(() => import("../components/NotFound"));
const Loading = lazy(() => import("../components/Loading"));

const router = createBrowserRouter([
  {
    path: "*",
    element: (
      <Layout>
        <NotFound />
      </Layout>
    ),
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/gallery/:id",
    element: <GalleryPage />,
  },
]);

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  );
};

export default App;

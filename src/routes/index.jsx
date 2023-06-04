import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "../components/Loading";

const HomePage = lazy(() => import("../pages/Home"));
const GalleryPage = lazy(() => import("../pages/Gallery"));
const DetailPage = lazy(() => import("../pages/Detail"));
const Layout = lazy(() => import("../components/Layout"));
const NotFound = lazy(() => import("../components/NotFound"));

const router = createBrowserRouter([
  {
    path: "*",
    element: (
      <Layout>
        <div className="min-h-[85vh]">
          <NotFound />
        </div>
      </Layout>
    ),
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/gallery/:categories",
    element: <GalleryPage />,
  },
  {
    path: "/photo/:id",
    element: <DetailPage />,
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

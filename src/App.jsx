import { Header, Footer, Layout } from "./components";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const LazyHome = lazy(() => import("./components/home"));
const LazySports = lazy(() => import("./components/sports"));
const LazyEntertainment = lazy(() => import("./components/entertainment"));
const LazyLife = lazy(() => import("./components/life"));
const LazyMoney = lazy(() => import("./components/money"));
const LazyTech = lazy(() => import("./components/tech"));
const LazyTravel = lazy(() => import("./components/travel"));

export default function App() {
  return (
    <main className="max-w-[1920px] min-h-screen bg-gray-100">
      <Header />
      <Suspense fallback={<h1>Loading..</h1>}>
        <Layout>
          <Routes>
            <Route path="/" element={<LazyHome />} />
            <Route path="/home" element={<LazyHome />} />
            <Route path="/sports" element={<LazySports />} />
            <Route path="/entertainment" element={<LazyEntertainment />} />
            <Route path="/life" element={<LazyLife />} />
            <Route path="/money" element={<LazyMoney />} />
            <Route path="/tech" element={<LazyTech />} />
            <Route path="/travel" element={<LazyTravel />} />
          </Routes>
        </Layout>
        <Footer />
      </Suspense>
    </main>
  );
}

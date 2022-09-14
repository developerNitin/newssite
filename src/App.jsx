import { Header } from "./components";
import { Suspense, lazy } from "react";

const LazyLayout = lazy(() => import("./components/layout"));

export default function App() {
	return (
		<main className='max-w-[1920px] min-h-screen'>
			<Header />
			<Suspense fallback={<h1>Loading..</h1>}>
				<LazyLayout>Body</LazyLayout>
			</Suspense>
		</main>
	);
}

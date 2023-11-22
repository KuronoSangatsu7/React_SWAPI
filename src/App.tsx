import { Movies } from "./pages/movies.page";
import { MainLayout } from "./layouts/main-layout.component";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Visits } from "./pages/visits.page";

const router = createBrowserRouter([
    { path: "/", element: <Movies /> },
    { path: "/visits", element: <Visits /> },
]);

function App() {
    return (
        <MainLayout>
            <RouterProvider router={router} />
        </MainLayout>
    );
}

export default App;

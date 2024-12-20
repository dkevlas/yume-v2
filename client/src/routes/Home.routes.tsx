import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import { ProductsRandomsProvider } from "../context/productsRandomsProvider";

export default function HomeRoutes(){
    return (
        <ProductsRandomsProvider>
            <Routes>
                <Route path="" element={<HomePage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </ProductsRandomsProvider>
    )
}
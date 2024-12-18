import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import { ProductFilterRandomProvider } from "../context/api.ProductsRandomContext";

export default function HomeRoutes(){
    return (
        <ProductFilterRandomProvider>
            <Routes>
                <Route path="" element={<HomePage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </ProductFilterRandomProvider>
    )
}
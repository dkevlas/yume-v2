import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import ProductProvider from "../context/api.ProductsContext";

export default function HomeRoutes(){
    return (
        <ProductProvider>
            <Routes>
                <Route path="" element={<HomePage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </ProductProvider>
    )
}
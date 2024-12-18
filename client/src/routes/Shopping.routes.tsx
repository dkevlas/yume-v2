import { Route, Routes } from "react-router-dom";
import ShoppingPage from "../pages/ShoppingPage";
import NotFound from "../pages/NotFound";
import { ProductFilterProvider } from "../context/api.ProductFilterContext";

export default function ShoopingRoutes(){
    return (
        <ProductFilterProvider>
            <Routes>
                <Route path="" element={<ShoppingPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </ProductFilterProvider>
    )
}
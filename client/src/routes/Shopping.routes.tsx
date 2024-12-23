import { Route, Routes } from "react-router-dom";
import ShoppingPage from "../pages/ShoppingPage";
import NotFound from "../pages/NotFound";
import { ProductsByCategoryProvider } from "../context/productsByCategoryProvider";

export default function ShoopingRoutes(){
    return (
        <ProductsByCategoryProvider>
            <Routes>
                <Route path="" element={<ShoppingPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </ProductsByCategoryProvider>
    )
}
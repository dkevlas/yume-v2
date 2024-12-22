import { Route, Routes } from "react-router-dom";
import ShoppingPage from "../pages/ShoppingPage";
import NotFound from "../pages/NotFound";
import { ProductsByCategoryProvider } from "../context/productsByCategoryProvider";
import { CartProvider } from "../context/cartProvider";

export default function ShoopingRoutes(){
    return (
        <ProductsByCategoryProvider>
            <CartProvider>
                <Routes>
                    <Route path="" element={<ShoppingPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </CartProvider>
        </ProductsByCategoryProvider>
    )
}
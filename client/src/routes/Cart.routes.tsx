import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import CartPage from "../pages/CartPage";
import { ProductsRandomsProvider } from "../context/productsRandomsProvider";

export default function CartRoutes(){
    return (
        <ProductsRandomsProvider>
            <Routes>
                <Route path="" element={<CartPage/>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </ProductsRandomsProvider>
    )
}
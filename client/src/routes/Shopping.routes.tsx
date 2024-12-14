import { Route, Routes } from "react-router-dom";
import ShoppingPage from "../pages/ShoppingPage";
import NotFound from "../pages/NotFound";

export default function ShoopingRoutes(){
    return (
        <Routes>
            <Route path="" element={<ShoppingPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
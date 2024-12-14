import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
export default function HomeRoutes(){
    return (
        <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
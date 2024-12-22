import { Route, Routes } from "react-router-dom";
import PrivatePage from "../private/PrivatePage";
import NotFound from "../pages/NotFound";

export default function PrivateRoutes(){
    return (
        <Routes>
            <Route path="" element={<PrivatePage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
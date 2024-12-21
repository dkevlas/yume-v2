import { Navigate, Route, Routes } from "react-router-dom";
import ProductDetailsTemplate from "../templates/product/ProductDetailsTemplate";

export default function ProductRoutes(){
    return (
        <Routes>
            <Route path="" element={<Navigate to={'/productos?categoria=todo&pagina=1'} />} />
            <Route path=":productID" element={<ProductDetailsTemplate />}/>
        </Routes>
    )
}
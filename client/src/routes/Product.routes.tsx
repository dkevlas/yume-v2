import { Navigate, Route, Routes } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import { ProductsRandomsProvider } from "../context/productsRandomsProvider";

export default function ProductRoutes(){
    return (
        <ProductsRandomsProvider>
            <Routes>
                <Route path="" element={<Navigate to={'/productos?categoria=todo&pagina=1'} />} />
                <Route path=":productID" element={<ProductPage />}/>
            </Routes>
        </ProductsRandomsProvider>
    )
}
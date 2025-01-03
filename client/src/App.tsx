import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Suspense } from "react"
import { CartPage, HomePage, PrivatePage, ProductPage, ShoppingPage } from "./routes/Routes"
import MenuTemplate from "./templates/MenuTemplate"
import FooterTempalte from "./templates/FooterTemplate"
import { CartProvider } from "./context/cartProvider"
import LoadingComp from "./components/others/LoadingComp"

function App() {
  return (
    <BrowserRouter> 
      <CartProvider>
        <Suspense fallback={<LoadingComp />}>
            <MenuTemplate />
              <Routes>
                <Route path="/*" element={<HomePage />} />
                <Route path="/productos/*" element={<ShoppingPage />} />
                <Route path="/producto/*" element={<ProductPage />} />
                <Route path="/carrito/*" element={<CartPage />} />
                <Route path="/yume/private/*" element={<PrivatePage />} />
              </Routes>
            <FooterTempalte />
          </Suspense>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App

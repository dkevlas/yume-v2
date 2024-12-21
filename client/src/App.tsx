import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Suspense } from "react"
import { HomePage, ProductPage, ShoppingPage } from "./routes/Routes"
import MenuTemplate from "./templates/MenuTemplate"
import FooterTempalte from "./templates/FooterTemplate"
import { ProbandoSlider } from "./test/probandoSlider"

function App() {

  return (
    <BrowserRouter> 
      <Suspense fallback={<h1 className="text-4xl text-green-500">LISA BAILANDO</h1>}>
        <MenuTemplate />
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/productos/*" element={<ShoppingPage />} />
          <Route path="/producto/*" element={<ProductPage />} />
          <Route path="/contacto" element={<ProbandoSlider />} />
        </Routes>
        <FooterTempalte />
      </Suspense>
    </BrowserRouter>
  )
}

export default App

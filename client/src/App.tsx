import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Suspense } from "react"
import { HomePage, ShoppingPage } from "./routes/Routes"
import NotFound from "./pages/NotFound"
import MenuTemplate from "./Templates/MenuTemplate"

function App() {

  return (
    <BrowserRouter> 
      <Suspense fallback={<h1 className="text-4xl text-green-500">LISA BAILANDO</h1>}>
        <MenuTemplate />
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/productos/*" element={<ShoppingPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App

import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Home from "../pages/Home"

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Outlet />
    </div>
  )
}

export default RootLayout

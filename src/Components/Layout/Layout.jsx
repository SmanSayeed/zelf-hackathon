import { Outlet } from "react-router-dom";
import Header from '../molecules/Header'
import Footer from '../molecules/Footer/Footer'

export default function Layout() {
  return (
    <div>
    <Header/>
        <Outlet />
    <Footer/>
    </div>
  )
}

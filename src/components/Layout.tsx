import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Navbar } from "./Navbar";

export function Layout() {
    return (
        <div className="layout">
            <div className="header"><Header></Header></div>
            <div className="nav"><Navbar></Navbar></div>
            <div className="main"><Outlet/></div>
            <div className="footer"><Footer></Footer></div>
        </div>
    )
};
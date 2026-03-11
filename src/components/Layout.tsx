import { Navbar } from "../components/Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-purple-500/30 flex flex-col">
      <Navbar />
      <main className="grow">
         <Outlet />
      </main>
      <Footer />
    </div>
  );
}

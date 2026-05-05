import { FloatingDock } from "../components/FloatingDock";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 flex flex-col font-sans overflow-x-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black pointer-events-none z-[-1]"></div>
      
      <main className="grow pb-24"> {/* Added padding bottom for dock */}
         <Outlet />
      </main>
      
      <FloatingDock />
      {/* We can keep Footer or hide it, let's keep it for now but adjust its visual weight if needed */}
      <Footer />
    </div>
  );
}

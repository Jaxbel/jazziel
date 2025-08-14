import { Outlet } from "react-router-dom";
import Cursor from "@/components/cursor"; // o '../components/Cursor'

export default function Layout() {
  return (
    <div className="min-h-screen bg-white text-black relative">
      <Cursor />
      <Outlet />
    </div>
  );
}

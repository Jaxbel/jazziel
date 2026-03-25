import { Outlet } from "react-router-dom";
import Cursor from "@/components/cursor"; 

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Cursor />
      <Outlet />
    </div>
  );
}

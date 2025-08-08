import { Routes, Route } from "react-router-dom"
import Layout from "@/components/Layout"
import Home from "@/pages/Home"
import NotFound from "@/pages/NotFound"
import { ThemeProvider } from "@/components/theme-provider"; 

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
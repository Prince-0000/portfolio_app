import Dashboard from "@/components/dashboard/dashboard"
import About from "@/components/about/about"
import { ToastContainer } from "react-toastify";
export default function Home() {
  return (
    <main>
      <ToastContainer position="top-left"/>
      <Dashboard />
      <About />
    </main>
  );
}

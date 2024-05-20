import Navbar from "@/components/navbar/navbar";
import { ToastContainer } from "react-toastify";
export default function Home() {
  return (
    <main>
      <Navbar />
  
      <ToastContainer position="top-left"/>
    </main>
  );
}

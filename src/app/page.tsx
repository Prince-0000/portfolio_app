import Dashboard from "@/components/dashboard/dashboard";
import About from "@/components/about/about";
import { ToastContainer } from "react-toastify";
import Projects from "@/components/projects/projects";
import Contact from "@/components/contact/contact";
import Experience from "@/components/experience/experience";
export default function Home() {
  return (
    <main>
      <ToastContainer position="top-left"/>
      <Dashboard />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}

import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

interface socialLinks {
    link:string;
    icon:React.ElementType;
}
export const socialLinks: socialLinks[] = [
  {
    link: "https://leetcode.com/Prince_0001",
    icon: SiLeetcode,
  },
  {
    link: "https://www.instagram.com/princemehta._",
    icon: FaInstagram,
  },
  {
    link: "https://www.linkedin.com/in/prince0000",
    icon: FaLinkedinIn,
  },
  {
    link: "https://github.com/Prince-0000",
    icon: FaGithub,
  },
];

"use client";
import { CgMail } from "react-icons/cg";
import { socialLinks } from "@/utils/socialLinks";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:princemehta516@gmail.com";
  };
  return (
    <div
      id="contact"
      className="max-w-[1240px] mx-auto py-16 px-4 grid grid-cols-2 lg:grid-cols-3 gap-8 text-gray-300"
    >
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          PRINCE MEHTA
        </h1>
        <p className="py-4 text-lg">Follow me on social media handle</p>
        <div className="flex justify-between md:w-[75%] my-6">
          {socialLinks.map((item, index) => (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              style={{ margin: "0 10px" }}
            >
              <item.icon size={30} />
            </a>
          ))}
        </div>
      </div>
      <div className="lg:col-span-2 flex flex-row justify-evenly">
        <div>
          <h2 className="flex items-center pb-[44px] md:text-2xl text-l align-middle">
            Always ready to help,
            <br />
            Feel free to message me
          </h2>
        </div>
        <div className="md:pl-[120px] pl-[45px] pb-[-50px]">
          <h5 className="pb-4">Contact Info</h5>
          <button type="button" onClick={handleEmailClick} className="text-3xl">
            <CgMail />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

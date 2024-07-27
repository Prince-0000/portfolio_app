import Link from "next/link"; 
import Image, { StaticImageData } from "next/image";

interface CardProps {
  image: StaticImageData;
  title: string;
  liveUrl: string;
  codeUrl: string;
}

const Card: React.FC<CardProps> = ({ image, title, liveUrl, codeUrl }):JSX.Element => {
  return (
    <div className="w-full shadow-xl flex flex-col p-12 my-5 rounded-lg hover:scale-105 duration-300">
      <Image
        className="w-[200px] mt-[-3rem] mx-auto bg-white rounded-md"
        src={image}
        alt={title} // Using title as alt for accessibility
      />
      <h2 className="text-2xl font-bold text-center py-8">{title}</h2>
      <button className="bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 text-black">
        <a href={liveUrl} target="_blank" rel="noreferrer">
          Live Demo
        </a>
      </button>
      <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium mx-auto px-6 py-3">
        <Link href={codeUrl} target="_blank" rel="noreferrer">
          Source Code
        </Link>
      </button>
    </div>
  );
};

export default Card;

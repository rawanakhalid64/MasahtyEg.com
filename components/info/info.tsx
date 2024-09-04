import Image from "next/image";
import Link from "next/link";

interface InfoItem {
  image: string;
  title: string;
  description: string;
  link: string;
}

// Define the props type for the Info component
interface InfoProps {
  infoData: InfoItem[];
}

const Info: React.FC<InfoProps> = ({ infoData }) => {
  return (
    <div className="container mx-auto">
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="border-b-2 py-3 border-[#198754]">
        معلومات تهمك
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-6 not-prose pl-3">
        {infoData.map((info) => (
          <Link
            key={`${info.title}-${Date.now()}`}
            className="group border bg-white rounded-lg flex flex-col justify-between hover:shadow-lg transition-all transform hover:scale-[1.02] overflow-hidden"
            href={info.link}
          >
            <div className="w-full flex flex-col items-center justify-center pt-4">
            <h3 className=" pr-3 text-lg font-semibold text-gray-800 group-hover:text-[#198754] transition-colors duration-300">
                {info.title}
              </h3>
              </div>
            <div className="w-full flex flex-col items-center justify-center p-1">
               
            <Image
              src={info.image}
              alt={info.title}
              width={150}
              height={150}
              className="rounded-full h-[150px] w-[150px] object-cover  group-hover:opacity-90 transition-opacity duration-300 pb-4"
            />
            
              <p className="text-sm text-gray-600 pr-3">{info.description}</p>
              <Link href={info.link}>
                <button className="text-[#198754] font-semibold mt-2 hover:underline  transition-opacity duration-300">
                  اقرأ المزيد..
                </button>
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Info;

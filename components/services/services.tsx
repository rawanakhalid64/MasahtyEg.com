
import Image from 'next/image';
import Link from 'next/link';


// Define the type for a single service item
interface Service {
  image: string;
  title: string;
  link: string;
}

// Define the props type for the Services component
interface ServicesProps {
  servicesData: any[];
  desc?: boolean,
  slug?: string
}

const Services: React.FC<ServicesProps> = ({ servicesData, slug = "programs", desc = true }) => {
  return (
      <div className="container mx-auto">
            <div className=" w-full flex flex-col items-center justify-center">
              <h2 className=" border-b-2  py-3 border-[#198754]">
                {slug === "programs" ? "برامج الأدمان" : "برامج الأمراض النفسية "}
              </h2>
            </div>
      <div className="grid md:grid-cols-3 gap-6 mt-6 not-prose  dark:bg-black">

      {servicesData.map((service: any) => (
            <Link
              key={service.id}
              className="group border rounded-lg flex flex-col justify-between hover:shadow-lg transition-all transform hover:scale-[1.02] overflow-hidden"
              href={`${slug}/${service.slug}`}
            >
              <Image
                src={service.imageUrl}
                alt={service.title.rendered}
                width={300}
                height={200}
                className="rounded-t-lg object-cover h-48 w-full group-hover:opacity-90 transition-opacity duration-300"
              />
              <span className="p-4 text-lg font-semibold dark:text-white  text-gray-800 group-hover:text-[#198754] transition-colors duration-300">
                {service.title.rendered}
              </span>
              {desc ? <p className="p-4 dark:text-white  text-gray-600">
                {service.acf.describtion}
              </p> : <></>}
              
            </Link>
          ))} 
      </div>
      </div>
    );
  };
  
  export default Services;
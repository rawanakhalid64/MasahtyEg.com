
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
  desc?: boolean
}

const Services: React.FC<ServicesProps> = ({ servicesData, desc = true }) => {
  return (
      <div className="container mx-auto">
            <div className=" w-full flex flex-col items-center justify-center">
              <h2 className=" border-b-2  py-3 border-[#198754]">
              اهم البرامج العلاجية
              </h2>
            </div>
      <div className="grid md:grid-cols-3 gap-6 mt-6 not-prose">

      {servicesData.map((service: any) => (
            <Link
              key={service.id}
              className="group border bg-white rounded-lg flex flex-col justify-between hover:shadow-lg transition-all transform hover:scale-[1.02] overflow-hidden"
              href={`programs/${service.slug}`}
            >
              <Image
                src={service.imageUrl}
                alt={service.title.rendered}
                width={300}
                height={200}
                className="rounded-t-lg object-cover h-48 w-full group-hover:opacity-90 transition-opacity duration-300"
              />
              <span className="p-4 text-lg font-semibold text-gray-800 group-hover:text-[#198754] transition-colors duration-300">
                {service.title.rendered}
              </span>
              {desc ? <p className="p-4 text-gray-600">
                {service.acf.describtion}
              </p> : <></>}
              
            </Link>
          ))} 
      </div>
      </div>
    );
  };
  
  export default Services;
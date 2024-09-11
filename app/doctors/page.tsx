import Image from "next/image";
import Link from "next/link";
import { getAllDoctors } from "@/lib/wordpress";

const page = async () => {
  const doctors = await getAllDoctors();
  return (
    <>
      <div className="container mx-auto mt-10">
        {/* Section Title */}
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="border-b-2 py-3 border-[#198754]">
            الأطباء والأخصائيين النفسيين | دار الإستشارات النفسية
          </h2>
        </div>

        {/* Grid of Doctors */}
        <div className="grid md:grid-cols-3 gap-6 mt-6 not-prose">
          {doctors.map((doctor: any) => (
            <Link
              key={doctor.id}
              className="group border bg-white rounded-lg flex flex-col justify-between hover:shadow-lg transition-all transform hover:scale-[1.02] overflow-hidden"
              href={`doctors/${doctor.slug}`}
            >
              <div
                key={doctor.id}
                className="group border bg-white rounded-lg flex flex-col justify-between hover:shadow-lg transition-all transform hover:scale-[1.02] overflow-hidden"
              >
                {/* Doctor's Image */}
                <Image
                  src={doctor.imageUrl}
                  alt={doctor.name}
                  width={300}
                  height={300}
                  className="rounded-t-lg object-cover h-auto w-full group-hover:opacity-90 transition-opacity duration-300"
                />

                {/* Doctor's Information */}
                <div className="p-4">
                  {/* Name and Title */}
                  <span className="block text-lg font-semibold text-gray-800 group-hover:text-[#198754] transition-colors duration-300">
                    {doctor.name}
                  </span>
                  <span className="block text-md text-gray-500 mb-2">
                    {doctor.title.rendered}
                  </span>

                  {/* Phone Number */}
                  <p className="text-gray-600 mb-2">
                    <strong>رقم الهاتف:</strong> {doctor.acf.phone}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600">{doctor.acf.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;

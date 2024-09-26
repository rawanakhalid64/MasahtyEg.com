
// Craft Imports
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import BookConsultationForm from "../app/BookConsultation/page"
// Components
import Link from "next/link";

// Icons
import { File, Pen, Tag, Boxes, User, Folder } from "lucide-react";
import Services from "@/components/services/services";
import Info from "@/components/info/info";
import Image from "next/image";
import { getAllDoctors, getAllPrograms } from "@/lib/wordpress";

// This page is using the craft.tsx component and design system

// This is just some example JS to demonstrate automatic styling from brijr/craft
const ExampleJsx = async () => {

  const infoData = [
    {
      image:
        "https://res.cloudinary.com/dhyszr79r/image/upload/v1725395835/%D9%85%D8%B5%D8%AD%D8%AA%D9%8A_i1tqvy.webp",
      title: "التنمر وأخطاره الصحية",
      link: "/posts/bullying-and-its-health-risks",
      description:
        "لا تقطع صلتك بالسماء! علاج الروح والتدين علاج للإدمان.. ونعني بالروحانية العلاقة...",
    },
    {
      image:
        "https://res.cloudinary.com/dhyszr79r/image/upload/v1725399367/%D9%82%D9%84%D9%82_wrxe6b.webp",
      title: "طرق فعّالة للتغلب على القلق",
      link: "/posts/effective-ways-to-overcome-anxiety",
      description:
        "المقدمة: القلق هو أحد أكثر الاضطرابات النفسية شيوعًا، ويعاني منه ملايين الأشخاص...",
    },
    {
      image:
        "https://res.cloudinary.com/dhyszr79r/image/upload/v1725399870/%D8%A7%D9%84%D8%A5%D8%AF%D9%85%D8%A7%D9%86_svuuzf.webp",
      title: "دور العلاج النفسي في مكافحة الإدمان",
      link: "/posts/the-role-of-psychotherapy-in-combating-addiction",
      description:
        "المقدمة: الإدمان هو اضطراب معقد يتطلب علاجًا متعدد الأوجه. العلاج النفسي يلعب...",
    },
  ];
  const programs = await getAllPrograms();
  const doctors = await getAllDoctors();

  return (
    <>
      <section className="hero h-auto xl:h-[calc(100vh-72px)] bg-gray-50 xl:pb-0 overflow-hidden dark:bg-black">
        <div className="container mx-auto h-auto xl:h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between h-auto xl:h-full ">
            {/* text */}
            <div className="hero__text xl:w-[48%] ">
              <div
                className="flex items-center justify-center bg-white py-[10px] px-[20px] w-max  gap-x-2 mb-[26px]
        rounded-full mx-auto xl:mx-0
        "
              >
                <div className="uppercase text-base font-medium text-[#627577] ">
                  تعافٍ آمن، حياة أفضل{" "}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#198754"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#198754"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </div>
              <h1 className="h1 mb-6 !leading-[63px] ">
                مصحتي للطب النفسي وعلاج الإدمان
              </h1>
              <h3 className="h3 mb-6 !leading-[33px] text-[#198754]">
                {" "}
                شريكك الفعّال في رحلة التعافي…
              </h3>
              <p className="mb-[42-px] md:max-w-xl">
                مصحتي، مؤسسة متخصصة في الطب النفسي وعلاج الإدمان، تعتمد على منهج
                شامل لتحسين حياة الأفراد المتأثرين بالمشاكل النفسية والسلوكية
                والإدمان، من خلال تقديم خطط علاجية وبرامج إعادة تأهيل فعّالة.
              </p>
              <Link className="btn btn-lg rounded-full inline-block !my-4 px-3 py-1 !no-underline font-semibold !text-white bg-[#198754] !mx-auto xl:!mx-0  hover:bg-green-600 transition-colors duration-300"
               href={'/contactus'}>اتصل بنا</Link>
            </div>

            {/* image */}
            <div className="hero__img h-full hidden xl:flex xl:w-[50%] self-start relative">
              <Image
                src="https://res.cloudinary.com/dvgqyejfc/image/upload/v1725279792/close-up-man-discussing-with-therapist_xqz3mb.webp"
                alt="img-banner"
                fill
                className="object-cover !m-0" // Add object-cover to control the image fill behavior
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 xl:pt-12 xl:pb-0 overflow-hidden dark:bg-black">
        <Services servicesData={programs.slice(0,3)} desc={false} />
        <div className="flex items-center justify-center">
        <Link className="btn btn-lg rounded-full inline-block !my-4 px-3 py-1 !no-underline font-semibold !text-white bg-[#198754] !mx-auto xl:!mx-0  hover:bg-green-600 transition-colors duration-300"
               href={'/programs'}> البرامج العلاجية </Link>
        </div>
      </section>

      {/* <section className="container bg-gray-50 mx-auto pb-4 dark:bg-black">
        {/* Section Title */}
        {/* <div className="w-full flex flex-col items-center justify-center">
          <h2 className="border-b-2 py-3 border-[#198754]">
            الأطباء والأخصائيين النفسيين | دار الإستشارات النفسية
          </h2>
        </div> */}

        {/* Grid of Doctors */}
        {/* <div className="grid md:grid-cols-3 gap-6 mt-6 not-prose">
          {doctors.map((doctor: any) => (
            <Link
              key={doctor.id}
              className="group border bg-white rounded-lg flex flex-col justify-between hover:shadow-lg transition-all transform hover:scale-[1.02] overflow-hidden"
              href={`doctors/${doctor.slug}`}
            > */}
              {/* <div
                key={doctor.id}
                className="group border bg-white rounded-lg flex flex-col justify-between hover:shadow-lg transition-all transform hover:scale-[1.02] overflow-hidden"
              > */}
                {/* Doctor's Image */}
                {/* <Image
                  src={doctor.imageUrl}
                  alt={doctor.name}
                  width={300}
                  height={300}
                  className="rounded-t-lg object-cover h-auto w-full group-hover:opacity-90 transition-opacity duration-300"
                /> */}

                {/* Doctor's Information */}
                {/* <div className="p-4 dark:bg-black"> */}
                  {/* Name and Title */}
                  {/* <span className="block text-lg font-semibold  !text-[#198754] group-hover:text-[#198754] transition-colors duration-300">
                    {doctor.name}
                  </span>
                  <span className="block text-md text-gray-500 dark:!text-[#198754] mb-2">
                    {doctor.title.rendered}
                  </span> */}

                  {/* Phone Number */}
                  {/* <p className="text-gray-600 dark:text-white mb-2">
                    <strong className="!text-[#198754]">رقم الهاتف:</strong> {doctor.acf.phone}
                  </p> */}

                  {/* Description */}
                  {/* <p className="text-gray-600 dark:text-white">{doctor.acf.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center">
        <Link className="btn btn-lg rounded-full inline-block !my-4 px-3 py-1 !no-underline font-semibold !text-white bg-[#198754] !mx-auto xl:!mx-0  hover:bg-green-600 transition-colors duration-300"
               href={'/doctors'}>  كل الدكاترة </Link>
        </div>
      </section> */} 

      <section className="bg-gray-50 py-12 xl:pt-0 xl:pb-4 overflow-hidden dark:bg-black">
        <Info infoData={infoData} />
        <div className="flex items-center justify-center">
        <Link className="btn btn-lg rounded-full inline-block !my-4 px-3 py-1 !no-underline font-semibold !text-white bg-[#198754] !mx-auto xl:!mx-0  hover:bg-green-600 transition-colors duration-300"
               href={'/posts'}>  عالم التعافي </Link>
        </div>
      </section>

      {/* احجز استشارة */}

      <section className="bg-gray-50 py-12 xl:pt-0 xl:pb-4 overflow-hidden dark:bg-black">
      <div className="w-full flex flex-col items-center justify-center">
      <h2 className="border-b-2 py-3 border-[#198754]">
          احجز استشارة

      </h2>
      </div>
      <div className="flex items-center justify-center gap-4 w-full">
     

      {/* Maximized clickable link */}
      <Link
        href="/BookConsultation"
        className="btn btn-lg rounded-full inline-block text-center !my-4 px-3 py-2 !no-underline font-semibold !text-white bg-[#198754] !mx-auto xl:!mx-0  hover:bg-green-600 transition-colors duration-300"
      >
        احجز استشارتك
      </Link>
      
      <div className="w-[300px] h-[300px] relative">
        <Image
          src="https://res.cloudinary.com/dvgqyejfc/image/upload/v1726817677/19913525_6164418-removebg-preview_s9yjmq.webp"
          alt="Consultation Image"
          layout="fill" // Makes the image fill the container
          objectFit="cover" // Ensures the image maintains its aspect ratio
          className="rounded-full" // Makes the image circular if needed
        />
      </div>
    </div>
      </section>
    </>
  );
};
export default ExampleJsx
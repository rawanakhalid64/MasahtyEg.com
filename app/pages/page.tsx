import { getAllPages, getAllPrograms } from "@/lib/wordpress";
import { Section, Container } from "@/components/craft";
import Link from "next/link";
import Image from "next/image";
import page from "../about/page";

// async function getAllPrograms() {
//   const response = await fetch('https://admin.toggle-eg.com/wp-json/wp/v2/program', { cache: 'no-store' });
//   const data = await response.json();

  // Fetch media for each program (images)
  

export default async function Page() {
  const pages = await getAllPrograms();

  return (
    <section>
      <div className="container mx-auto">
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="border-b-2 py-3 border-[#198754]">
            اهم البرامج العلاجية
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-6 not-prose">
          {pages.map((page: any) => (
            <Link
              key={page.id}
              className="group border bg-white rounded-lg flex flex-col justify-between hover:shadow-lg transition-all transform hover:scale-[1.02] overflow-hidden"
              href={`pages/${page.slug}`}
            >
              <Image
                src={page.imageUrl}
                alt={page.title.rendered}
                width={300}
                height={200}
                className="rounded-t-lg object-cover h-48 w-full group-hover:opacity-90 transition-opacity duration-300"
              />
              <span className="p-4 text-lg font-semibold text-gray-800 group-hover:text-[#198754] transition-colors duration-300">
                {page.title.rendered}
              </span>
              <p className="p-4 text-gray-600">
                {page.acf.describtion}
              </p>
            </Link>
          ))} 
        </div>
      </div>
    </section>
  );
}

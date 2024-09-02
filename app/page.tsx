// Craft Imports
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Components
import Link from "next/link";

// Icons
import { File, Pen, Tag, Boxes, User, Folder } from "lucide-react";
// import { Image } from 'next/image';

// This page is using the craft.tsx component and design system
export default function Home() {
  return <ExampleJsx />;
}

// This is just some example JS to demonstrate automatic styling from brijr/craft
const ExampleJsx = () => {
  return (
    <>
      <section className="hero h-[calc(100vh-72px)] bg-gray-50 py-12 xl:pt-12 xl:pb-0 overflow-hidden">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between h-full ">
            {/* text */}
            <div className="hero__text xl:w-[48%] ">
              <div
                className="flex items-center justify-center bg-white py-[10px] px-[20px] w-max  gap-x-2 mb-[26px]
        rounded-full mx-auto xl:mx-0
        "
              >
                <div className=" text-base font-medium text-[#627577] ">
                  عيش حياة سعيدة معانا.
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
              <h1 className="h1 mb-6 !leading-[63px]">
                مصحتي للطب النفسي وعلاج الإدمان
              </h1>
              <p className="mb-[42-px] md:max-w-xl">
                مصحتي هي شريك كل فرد في رحلته للتعافي ، مؤسسة متخصصة في الطب
                النفسي وعلاج الإدمان ,نقدم مجموعة شاملة ومتخصصة من خدمات علاج
                الإدمان وبرامج إعادة التأهيل النفسي
              </p>
              <button className="btn btn-lg rounded-full my-4 px-3 py-1 text-white bg-[#198754] !mx-auto xl:!mx-0">
                اتصل بنا
              </button>
            </div>

            {/* image */}
            <div className="hero__img h-full hidden xl:flex max-w-[814px] self-end">
              <img
                src="https://res.cloudinary.com/dvgqyejfc/image/upload/v1725279792/close-up-man-discussing-with-therapist_xqz3mb.webp"
                alt="img-banner"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="h-[100vh] bg-gray-50  xl:pb-0 overflow-hidden">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-col items-start justify-center h-auto ">
            <div className=" w-full flex flex-col items-center justify-center">
              <h2 className=" border-b-2  py-3 border-[#198754]">
                تعرف علي مصحتي؟
              </h2>
            </div>
            <div className="flex flex-col xl:flex-row ">
              <h5 className=" ">
                تعد مصحتي من أفضل مراكزعلاج الإدمان في الشرق الأوسط بشهادة
                متعافيها، حيث حققت نجاحًا كبيرًا في معالجة مرضى الإدمان بنسبة
                نجاح تجاوزت الـ %94 علي مدار الـ 7 أعوام الماضية، وتوافد على
                المركز الكثير من الحالات من أنحاء الجمهورية نظراً لي..
              </h5>
            </div>
            <div  className=" flex flex-row gap-2">
              <div className="pl-2 pt-10 font-medium text-[#627577]">
                <ul>
                  <li>
                    وجود فريق متخصص من الأطباء النفسيين والمعالجين المدربين
                    تدريبًا عاليًا لعلاج الأمراض النفسية والإدمان.
                  </li>
                  <li>
                    تطبيق ثلاث مراحل علاجية أثبتت نجاحها على مستوى العالم.
                  </li>
                  <li>متابعة العميل بصفة دورية بعد التخرج من المرك.</li>
                  <li>برنامج مكثف للمنتكسين بعد توفرالشروط المناسبة.</li>
                  <li>
                    نقاهة وإقامة فندقية وسرية تامة في العلاج للمحافظة على خصوصية
                    العميل.
                  </li>
                  <li>تخضع للرقابة والجودة العلاجية.</li>
                  <li>يوجد فروع إقتصادية وتسهيلات لبعض الأُسر.</li>
                  <li>سمعة طيبة على مدار السنوات الماضية.</li>
                </ul>
              </div>
              <div className="max-w-[30%] mb-4 hero__img h-full hidden xl:flex">
                <img src="https://res.cloudinary.com/dvgqyejfc/image/upload/v1725301105/2150161940_wlixns.webp"  alt="img2"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    // <article className="prose-m-none">
    //   <h1>
    //     <Balancer>
    //       Hello hdhdhfh, welcome to the Next.js and WordPress Starter by{" "}
    //       <a href="https://9d8.dev">9d8</a>.
    //     </Balancer>
    //   </h1>
    //   {/* Vercel Clone Starter */}
    //   <a
    //     className="h-16 block"
    //     href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F9d8dev%2Fnext-wp&env=WORDPRESS_URL,WORDPRESS_HOSTNAME&envDescription=Add%20WordPress%20URL%20with%20Rest%20API%20enabled%20(ie.%20https%3A%2F%2Fwp.example.com)%20abd%20the%20hostname%20for%20Image%20rendering%20in%20Next%20JS%20(ie.%20wp.example.com)&project-name=next-wp&repository-name=next-wp&demo-title=Next%20JS%20and%20WordPress%20Starter&demo-url=https%3A%2F%2Fwp.9d8.dev"
    //   >
    //     {/* eslint-disable-next-line */}
    //     <img
    //       className="not-prose my-4"
    //       src="https://vercel.com/button"
    //       alt="Deploy with Vercel"
    //     />
    //   </a>
    //   <p>
    //     This is <a href="https://github.com/9d8dev/next-wp">next-wp</a>, created
    //     as a way to build WordPress sites with Next.js at rapid speed. This
    //     starter is designed with <a href="https://ui.shadcn.com">shadcn/ui</a>,{" "}
    //     <a href="https://github.com/brijr/craft">brijr/craft</a>, and Tailwind
    //     CSS. Use <a href="https://components.bridger.to">brijr/components</a> to
    //     build your site with prebuilt components. The data fetching and
    //     typesafety is handled in <code>lib/WordPress.ts</code> and{" "}
    //     <code>lib/WordPress.d.ts</code>. Questions? Email 9d8dev@gmail.com
    //   </p>
    //   <div className="grid md:grid-cols-3 gap-4 mt-6 not-prose">
    //     <Link
    //       className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
    //       href="/posts"
    //     >
    //       <Pen size={32} />
    //       <span>
    //         Posts{" "}
    //         <span className="block text-sm text-muted-foreground">
    //           All posts from your WordPress
    //         </span>
    //       </span>
    //     </Link>
    //     <Link
    //       className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
    //       href="/pages"
    //     >
    //       <File size={32} />
    //       <span>
    //         Pages{" "}
    //         <span className="block text-sm text-muted-foreground">
    //           Custom pages from your WordPress
    //         </span>
    //       </span>
    //     </Link>
    //     <Link
    //       className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
    //       href="/posts/authors"
    //     >
    //       <User size={32} />
    //       <span>
    //         Authors{" "}
    //         <span className="block text-sm text-muted-foreground">
    //           List of the authors from your WordPress
    //         </span>
    //       </span>
    //     </Link>
    //     <Link
    //       className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
    //       href="/posts/tags"
    //     >
    //       <Tag size={32} />
    //       <span>
    //         Tags{" "}
    //         <span className="block text-sm text-muted-foreground">
    //           Content by tags from your WordPress
    //         </span>
    //       </span>
    //     </Link>
    //     <Link
    //       className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
    //       href="/posts/categories"
    //     >
    //       <Boxes size={32} />
    //       <span>
    //         Categories{" "}
    //         <span className="block text-sm text-muted-foreground">
    //           Categories from your WordPress
    //         </span>
    //       </span>
    //     </Link>
    //     <a
    //       className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
    //       href="https://github.com/9d8dev/next-wp"
    //     >
    //       <Folder size={32} />
    //       <span>
    //         Documentation{" "}
    //         <span className="block text-sm text-muted-foreground">
    //           How to use `next-wp`
    //         </span>
    //       </span>
    //     </a>
    //   </div>
    // </article>
  );
};

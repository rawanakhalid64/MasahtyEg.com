// Craft Imports
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Components
import Link from "next/link";

// Icons
import { File, Pen, Tag, Boxes, User, Folder } from "lucide-react";
import Services from "@/components/services/services";
import Info from "@/components/info/info";
import Image from "next/image";
// import { Image } from 'next/image';

// This page is using the craft.tsx component and design system
export default function Home() {
  return <ExampleJsx />;
}

// This is just some example JS to demonstrate automatic styling from brijr/craft
const ExampleJsx = () => {
  const servicesData = [
    {
      image:
        "https://res.cloudinary.com/dvgqyejfc/image/upload/v1725367791/psychoanalyst-giving-consultation-young-man-about-his-relationship-problems_qhcrjn.webp",
      title: "برنامج الإقامة الكاملة",
      link: "/posts/service-one",
    },
    {
      image:
        "https://res.cloudinary.com/dvgqyejfc/image/upload/v1725367784/young-person-suffering-from-anxiety_s8jmlv.webp",
      title: "برنامج الإقامة الكاملة",
      link: "/posts/service-one",
    },
    {
      image:
        "https://res.cloudinary.com/dvgqyejfc/image/upload/v1725367784/young-person-suffering-from-anxiety_s8jmlv.webp",
      title: "برنامج الإقامة الكاملة",
      link: "/posts/service-one",
    },
  ];

  const infoData = [
    {
      image:
        "https://res.cloudinary.com/dvgqyejfc/image/upload/v1725367791/psychoanalyst-giving-consultation-young-man-about-his-relationship-problems_qhcrjn.webp",
      title: "9نصائح تحمي بها نفسك من الاعتداء الجنسي تحت تأثير المخدرة",
      link: "/posts/service-one",
      description:
        "لا يتوقف العلاج لدينا بمجرد انتهاء البرنامج التأهيلي أو الخروج من المستشفى، بل المتابعة البعدية جزء أصيل من العلاج لدينا للحفاظ على متعافينا من عدم الانتكاس والوصول بهم إلى بر الأمان",
    },
    {
      image:
        "https://res.cloudinary.com/dvgqyejfc/image/upload/v1725367784/young-person-suffering-from-anxiety_s8jmlv.webp",
      title: "  ما هي أقراص الكبتاجون؟",
      link: "/posts/service-one",
      description:
        "لا يتوقف العلاج لدينا بمجرد انتهاء البرنامج التأهيلي أو الخروج من المستشفى، بل المتابعة البعدية جزء أصيل من العلاج لدينا للحفاظ على متعافينا من عدم الانتكاس والوصول بهم إلى بر الأمان",
    },
    {
      image:
        "https://res.cloudinary.com/dvgqyejfc/image/upload/v1725367784/young-person-suffering-from-anxiety_s8jmlv.webp",
      title: "إدمان المنشطات الرياضية",
      link: "/posts/service-one",
      description:
        "لا يتوقف العلاج لدينا بمجرد انتهاء البرنامج التأهيلي أو الخروج من المستشفى، بل المتابعة البعدية جزء أصيل من العلاج لدينا للحفاظ على متعافينا من عدم الانتكاس والوصول بهم إلى بر الأمان",
    },
  ];

  return (
    <>
      <section className="hero h-[calc(100vh-72px)] bg-gray-50 xl:pb-0 overflow-hidden">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between h-full ">
            {/* text */}
            <div className="hero__text xl:w-[48%] ">
              <div
                className="flex items-center justify-center bg-white py-[10px] px-[20px] w-max  gap-x-2 mb-[26px]
        rounded-full mx-auto xl:mx-0
        "
              >
                <div className="uppercase text-base font-medium text-[#627577] ">
                  عيش حياة سعيدة معنا{" "}
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
      <section className="h-auto pb-3 bg-gray-50 xl:pb-0">
  <div className="container mx-auto h-full">
  <div className=" w-full flex flex-col items-center justify-center">
              <h2 className=" border-b-2  py-3 border-[#198754]">
                من نحن؟
              </h2>
            </div>
    {/* Non-responsive container for text and image side by side */}
    <div className="flex flex-row items-center justify-center gap-8 w-full">
      {/* Text content */}
      <div className="">
        <h5 className="leading-relaxed">
          <Link href="/" className="font-bold">
            مصحتي
          </Link>
          <span className="font-bold text-black mr-2">
            للطب النفسي وعلاج الإدمان
          </span>
          {" "}هي المؤسسة الرائدة في مجال علاج الإدمان والطب النفسي، ولها تاريخ
          يمتد لأكثر من سبع سنوات من النجاح والتفوق. خلال هذه الفترة،
          ساهمت في شفاء العديد من الأفراد من الإدمان، وأثبتت مكانتها كأفضل
          وجهة في هذا المجال. تقدم
          <Link href="/" className="font-bold">
            {" "}
            مصحتي{" "}
          </Link>
          خدماتها معتمدة على أحدث الوسائل والتقنيات المصرح بها من
          <a
            href="https://www.fda.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="!text-[#198754] underline mr-2 hover:text-[#103628]  transition-colors duration-300"
          >
            هيئة الغذاء والأدوية المصرية
          </a>
          ، و
          <a
            href="https://www.mohp.gov.eg/"
            target="_blank"
            rel="noopener noreferrer"
            className="!text-[#198754] underline  mr-2"
          >
            وزارة الصحة المصرية
          </a>
          . نحن ملتزمون بتوفير الرعاية الشاملة والفعّالة، وتقديم الدعم
          الكامل لعملائنا من خلال برامج علاجية متميزة.
        </h5>
      </div>

      {/* Image content */}
      <div className=" hidden lg:block">
      {/* <Image
          src="https://res.cloudinary.com/dvgqyejfc/image/upload/v1725301105/2150161940_wlixns.webp"
          alt="Image description"
          width={400}
          height={150}
          className="rounded-lg shadow-lg"
        /> */}
      </div>
    </div>

    {/* Additional content below the text and image */}
    <div className="pt-3 font-medium text-[#627577]">
      <h3 className="text-xl font-bold mb-4">رؤيتنا:</h3>
      <p className="mb-3">
        أن نكون الشريك الأول في رحلة التعافي، وأن نقدم نموذجاً عالمياً
        للرعاية المتكاملة في مجال الصحة النفسية.
      </p>

      <h3 className="text-xl font-bold mb-4">أهدافنا:</h3>
      <ul className="list-disc list-inside space-y-4">
        <li>
          الشفاء التام: تحقيق أقصى درجة من التعافي والعودة إلى حياة
          طبيعية ومثمرة.
        </li>
        <li>جودة الحياة: تعزيز الصحة النفسية والعافية الشاملة.</li>
        <li>التميز: تقديم أحدث العلاجات وأكثرها فعالية.</li>
        <li>
          الدعم المستمر: توفير رعاية ما بعد العلاج لضمان استدامة
          النتائج.
        </li>
      </ul>

      <h3 className="text-xl font-bold mb-4 mt-8">رسالتنا:</h3>
      <p className="mb-6">
        نؤمن بأن كل فرد يستحق حياة سعيدة وصحية. لذلك، نلتزم بتقديم
        رعاية طبية ونفسية مخصصة لكل حالة على حدة. نستخدم أحدث التقنيات
        والعلاجات، ونوفر بيئة آمنة وداعمة تساعد مرضانا على التغلب على
        التحديات التي يواجهونها.
      </p>

      <h3 className="text-xl font-bold mb-4">لماذا تختار مصحتي؟</h3>
      <ul className="list-disc list-inside space-y-4">
        <li>
          نتائج مثبتة: أكثر من 94% من مرضانا حققوا شفاءً مستداماً.
        </li>
        <li>
          فريق متخصص: نخبة من الأطباء والمعالجين ذوي الخبرة الواسعة.
        </li>
        <li>
          برامج علاجية شاملة: تغطي جميع جوانب الصحة النفسية والجسدية.
        </li>
        <li>رعاية شخصية: خطط علاجية مخصصة لكل مريض.</li>
        <li>متابعة مستمرة: دعم طويل الأمد بعد انتهاء البرنامج.</li>
        <li>
          بيئة آمنة وداعمة: نساعدك على الشعور بالراحة والأمان طوال
          فترة العلاج.
        </li>
      </ul>
    </div>
  </div>
</section>



      <section className="bg-gray-50 py-12 xl:pt-12 xl:pb-0 overflow-hidden">
        <Services servicesData={servicesData} />
      </section>

      <section className="bg-gray-50 py-12 xl:pt-12 xl:pb-0 overflow-hidden">
        <Info infoData={infoData} />
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

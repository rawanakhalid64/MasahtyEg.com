import Image from "next/image";
import Link from "next/link";
import LazyYouTube from "@/components/video/LazyYouTube";

import async from './../../components/posts/post-card';

const  Page = async () => {
  
  //lazy loading video

  return (
    <>
      <section className="h-auto pb-3 bg-gray-50 xl:pb-0">
        <div className="container mx-auto h-full">
          <div className=" w-full flex flex-col items-center justify-center">
            <h2 className=" border-b-2  py-3 border-[#198754]">من نحن؟</h2>
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
                </span>{" "}
                هي المؤسسة الرائدة في مجال علاج الإدمان والطب النفسي، ولها تاريخ
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
                الشفاء التام: تحقيق أقصى درجة من التعافي والعودة إلى حياة طبيعية
                ومثمرة.
              </li>
              <li>جودة الحياة: تعزيز الصحة النفسية والعافية الشاملة.</li>
              <li>التميز: تقديم أحدث العلاجات وأكثرها فعالية.</li>
              <li>
                الدعم المستمر: توفير رعاية ما بعد العلاج لضمان استدامة النتائج.
              </li>
            </ul>

            <h3 className="text-xl font-bold mb-4 mt-8">رسالتنا:</h3>
            <p className="mb-6">
              نؤمن بأن كل فرد يستحق حياة سعيدة وصحية. لذلك، نلتزم بتقديم رعاية
              طبية ونفسية مخصصة لكل حالة على حدة. نستخدم أحدث التقنيات
              والعلاجات، ونوفر بيئة آمنة وداعمة تساعد مرضانا على التغلب على
              التحديات التي يواجهونها.
            </p>

            <h3 className="text-xl font-bold mb-4">لماذا تختار مصحتي؟</h3>
            <ul className="list-disc list-inside space-y-4">
              <li>نتائج مثبتة: أكثر من 94% من مرضانا حققوا شفاءً مستداماً.</li>
              <li>
                فريق متخصص: نخبة من الأطباء والمعالجين ذوي الخبرة الواسعة.
              </li>
              <li>
                برامج علاجية شاملة: تغطي جميع جوانب الصحة النفسية والجسدية.
              </li>
              <li>رعاية شخصية: خطط علاجية مخصصة لكل مريض.</li>
              <li>متابعة مستمرة: دعم طويل الأمد بعد انتهاء البرنامج.</li>
              <li>
                بيئة آمنة وداعمة: نساعدك على الشعور بالراحة والأمان طوال فترة
                العلاج.
              </li>
            </ul>
          </div>
          <div>
            <div className="flex  justify-center gap-9">
              {/* First Video */}
              <LazyYouTube videoId="T3mgD-mJZVI"   />

              {/* Second Video */}
              <LazyYouTube videoId="T3mgD-mJZVI"   />
            </div>
          </div>
        </div>
       
      </section>
    </>
  );
};

export default Page ;
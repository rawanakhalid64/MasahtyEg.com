import Image from "next/image";
import Link from "next/link";
import LazyYouTube from "@/components/video/LazyYouTube";
import async from './../../components/posts/post-card';

const Page = async () => {
  return (
    <>
      <section className="h-auto pb-3 bg-gray-50 xl:pb-0 dark:bg-black">
        <div className="container mx-auto h-full">
          {/* First Content Block */}
          <div className="flex flex-col items-center justify-center mb-8">
            <h2 className="border-b-2 py-3  border-[#198754]">من نحن؟</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
              {/* Image for the first block */}
              <div className="w-full md:w-1/2">
                <Image
                  src="https://res.cloudinary.com/dvgqyejfc/image/upload/v1726566535/20824856_6330601_b71bpg.webp"
                  alt="Description of Image 1"
                  layout="responsive"
                  width={1200}
                  height={800}
                />
              </div>
              {/* Text content for the first block */}
              <div className="w-full md:w-1/2">
                <h5 className="leading-relaxed">
                  <Link href="/" className="font-bold !no-underline">مصحتي</Link>
                  &nbsp;
                  <span className="font-bold dark:text-white text-black mr-2">للطب النفسي وعلاج الإدمان</span> 
                  &nbsp;
                  هي المؤسسة الرائدة في مجال علاج الإدمان والطب النفسي، ولها تاريخ
                  يمتد لأكثر من سبع سنوات من النجاح والتفوق. خلال هذه الفترة،
                  ساهمت في شفاء العديد من الأفراد من الإدمان، وأثبتت مكانتها كأفضل
                  وجهة في هذا المجال. تقدم
                  <Link href="/" className="font-bold !no-underline"> مصحتي </Link>
                  خدماتها معتمدة على أحدث الوسائل والتقنيات المصرح بها من
                  &nbsp;
                  <Link href="https://www.fda.gov/" target="_blank" rel="noopener noreferrer" className="!text-[#198754] !no-underline mr-2">
                    هيئة الغذاء والأدوية المصرية
                  </Link>
                  ، و
                  <Link href="https://www.mohp.gov.eg/" target="_blank" rel="noopener noreferrer" className="!text-[#198754] !no-underline  mr-2">
                    وزارة الصحة المصرية
                  </Link>
                  . نحن ملتزمون بتوفير الرعاية الشاملة والفعّالة، وتقديم الدعم
                  الكامل لعملائنا من خلال برامج علاجية متميزة.
                </h5>
              </div>
            </div>
          </div>

     {/* Second Content Block */}
<div className="flex flex-col items-center justify-center mb-8">
  {/* Grid for "رؤيتنا", "أهدافنا", "رسالتنا" */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
    
    {/* Block for "رؤيتنا" */}
    <div className="pt-3 px-9 font-medium text-[#627577] border rounded-lg transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg">
      <h3 className="flex items-center justify-center !text-3xl !font-bold  text-[#198754] mb-4">رؤيتنا</h3>
      <p className="mb-3">
        أن نكون الشريك الأول في رحلة التعافي، وأن نقدم نموذجاً عالمياً
        للرعاية المتكاملة في مجال الصحة النفسية.
      </p>
    </div>

    {/* Block for "أهدافنا" */}
    <div className="pt-3  px-9 font-medium text-[#627577] border rounded-lg transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg">
      <h3 className=" flex items-center justify-center !text-3xl !font-bold mb-4 text-[#198754]">أهدافنا</h3>
      <ul className="">
        <li>الشفاء التام:  تحقيق أقصى درجة من التعافي والعودة إلى حياة طبيعية ومثمرة.</li>
        <li>جودة الحياة: تعزيز الصحة النفسية والعافية الشاملة.</li>
        <li>التميز: تقديم أحدث العلاجات وأكثرها فعالية.</li>
        <li>الدعم المستمر: توفير رعاية ما بعد العلاج لضمان استدامة النتائج.</li>
      </ul>
    </div>

    {/* Block for "رسالتنا" */}
    <div className="pt-3 px-9 font-medium text-[#627577] border rounded-lg transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg">
      <h3 className=" flex items-center justify-center  !text-3xl !font-bold mb-4 text-[#198754]">رسالتنا</h3>
      <p className="mb-6">
        نؤمن بأن كل فرد يستحق حياة سعيدة وصحية. لذلك، نلتزم بتقديم رعاية طبية ونفسية مخصصة لكل حالة على حدة. نستخدم أحدث التقنيات والعلاجات، ونوفر بيئة آمنة وداعمة تساعد مرضانا على التغلب على التحديات التي يواجهونها.
      </p>
    </div>
  </div>

  
  <div className="pt-3  flex items-center justify-center flex-col font-medium text-[#627577] w-full mt-8">
    <h3 className=" !text-3xl !font-bold mb-4 text-[#198754]">لماذا تختار مصحتي؟</h3>
    <ul className="">
      <li>نتائج مثبتة: أكثر من 94% من مرضانا حققوا شفاءً مستداماً.</li>
      <li>فريق متخصص: نخبة من الأطباء والمعالجين ذوي الخبرة الواسعة.</li>
      <li>برامج علاجية شاملة: تغطي جميع جوانب الصحة النفسية والجسدية.</li>
      <li>رعاية شخصية: خطط علاجية مخصصة لكل مريض.</li>
      <li>متابعة مستمرة: دعم طويل الأمد بعد انتهاء البرنامج.</li>
      <li>بيئة آمنة وداعمة: نساعدك على الشعور بالراحة والأمان طوال فترة العلاج.</li>
    </ul>
  </div>
</div>


</div>
      </section>
    </>
  );
};

export default Page;

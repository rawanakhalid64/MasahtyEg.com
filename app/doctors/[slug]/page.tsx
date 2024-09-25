import { getDynamicSlug } from "@/lib/wordpress";
import { Metadata } from "next";
import Image from 'next/image';
import Link from "next/link";
import MobileDropdown from "@/components/mobileDropDownContact/mobileDropDown"; // Import the client component

// Define the Acf and Page types here...
// Define the Acf type
interface Acf {
  description?: string;
  phone?: number;
  volunteer?: string;
  image_url?: string; // Ensure this matches the actual data structure
  bio?: string;
  academic_experience?: string;
  professional_experience?: string;
  personal_skills?: string;
  computer_skills?: string;
  scientific_conferences?: string;
  languages?: string;
}

// Define the Page type including acf
interface Page {
  title: {
    rendered: string;
  };
  acf?: Acf;
  imageUrl?: string;
  excerpt?: {
    rendered: string;
  };
}

const TABS = [
  { id: "bio", label: "السيرة الذاتيه" },
  { id: "academic-experience", label: "الخبره الاكاديميه" },
  { id: "professional-experience", label: "الخبره المهنيه" },
  { id: "personal-skills", label: "المهرات الشخصيه" },
  { id: "computer-skills", label: "مهارات الحاسوب" },
  { id: "volunteer", label: "الاعمال التطوعيه" },
  { id: "scientific-conferences", label: "المؤتمرات العلميه" },
  { id: "languages", label: "اللغات" },
];

export async function generateMetadata({
  params,
  searchParams
}: {
  params: { slug: string };
  searchParams: { tab?: string }
}): Promise<Metadata> {
  const page: Page  = await getDynamicSlug(params.slug, 'doctor');
  const activeTab = searchParams.tab || "bio";
  
  return {
    title: `${page?.title?.rendered} - ${TABS.find(t => t.id === activeTab)?.label}`,
    description: page?.excerpt?.rendered,
  };
}

export default async function PageComponent({ params, searchParams }: { params: { slug: string }, searchParams: { tab?: string } }) {
  const page: Page = await getDynamicSlug(params.slug, 'doctor');
  const activeTab = (searchParams.tab as keyof Acf) || 'bio';

  return (
    <>
      <div className="flex flex-col lg:max-w-7xl max-w-5xl mx-auto px-4 md:px-0 justify-between dark:bg-black">

        {/* Mobile Dropdown for Tabs */}
        <div className="block md:hidden w-full mt-4 mb-6 dark:bg-black">
          <MobileDropdown activeTab={activeTab} tabs={TABS} />
        </div>

        {/* Mobile View - Image First */}
        <div className="block md:hidden">
          {page?.imageUrl && (
            <Image 
              src={page.imageUrl || '/default-image.jpg'}
              alt={page.title?.rendered || "Image description"} 
              width={300} 
              height={300} 
              className="rounded-lg shadow-lg object-cover mx-auto"
            />
          )}

          {/* Description under the image */}
          <p className="mt-4 text-gray-700 text-center dark:text-white">
            {page.acf?.description || 'No description available.'}
          </p>
        </div>

        {/* Desktop Sidebar and Image Section */}
        <div className="hidden md:flex w-full md:flex-row lg:max-w-7xl max-w-5xl mx-auto px-4 justify-between dark:bg-black">
          <aside className="w-full md:w-1/4 bg-[#198754]">
            <ul className="tabs flex flex-col list-none py-0 !pr-[3px] pl-[10px]">
              {TABS.map((tab) => (
                <li key={tab.id}>
                  <Link
                    href={`?tab=${tab.id}`}
                    className={`tab-button block p-3 rounded-lg transition-colors duration-300 
                    !no-underline font-semibold dark:bg-black  ${activeTab === tab.id ? 'bg-primary !text-white' : 'bg-white hover:bg-green-100'}`}
                  >
                    {tab.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          {/* Tab Content and Image */}
          <div className="tab-content flex w-full md:w-3/4 bg-white ml-4 rounded-lg">
            <div className="w-2/3 pr-4 dark:bg-black">
              <h1 className="pt-12 dark:text-white">{page.title?.rendered}</h1>
              <div className="mt-6">
                <div dangerouslySetInnerHTML={{ __html: page.acf?.[activeTab] || 'No content available.' }} />
              </div>
            </div>

            <div className="w-1/3 dark:bg-black">
              {page?.imageUrl && (
                <Image 
                  src={page.imageUrl || '/default-image.jpg'}
                  alt={page.title?.rendered || "Image description"} 
                  width={300} 
                  height={300} 
                  className="rounded-lg shadow-lg object-cover"
                />
              )}

              <p className="mt-4 text-gray-700 dark:text-white">
                {page.acf?.description || 'No description available.'}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile View Content Below Image and Dropdown */}
        <div className="block md:hidden w-full">
          <div className="mt-6">
            <h1 className="text-2xl font-bold text-center">{page.title?.rendered}</h1>
            <div className="mt-6">
              <div dangerouslySetInnerHTML={{ __html: page.acf?.[activeTab] || 'No content available.' }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

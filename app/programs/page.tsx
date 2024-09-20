import { getAllPages, getAllPrograms } from "@/lib/wordpress";
import { Section, Container } from "@/components/craft";
import Link from "next/link";
import Image from "next/image";
import page from "../about/page";
import Services from "@/components/services/services";
import { Metadata } from "next";

// async function getAllPrograms() {
//   const response = await fetch('https://admin.toggle-eg.com/wp-json/wp/v2/program', { cache: 'no-store' });
//   const data = await response.json();

  // Fetch media for each program (images)

  export async function generateMetadata(): Promise<Metadata> {
    return {
      title: "البرامج",
      description: "الخدمات العلاجية المتخصصة التي يقدمها مصحتي",
    };
  }

export default async function Page() {
  const programs = await getAllPrograms();

  return (
    <section>
      <Services servicesData={programs} />
      <Services servicesData={programs} />
  
    </section>
  );
}

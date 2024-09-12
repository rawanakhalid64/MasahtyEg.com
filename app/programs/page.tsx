import { getAllPages, getAllPrograms } from "@/lib/wordpress";
import { Section, Container } from "@/components/craft";
import Link from "next/link";
import Image from "next/image";
import page from "../about/page";
import Services from "@/components/services/services";

// async function getAllPrograms() {
//   const response = await fetch('https://admin.toggle-eg.com/wp-json/wp/v2/program', { cache: 'no-store' });
//   const data = await response.json();

  // Fetch media for each program (images)


export default async function Page() {
  const programs = await getAllPrograms();

  return (
    <section>
      <Services servicesData={programs} />
      <Services servicesData={programs} />
  
    </section>
  );
}

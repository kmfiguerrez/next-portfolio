import Footer from "@/components/footer/footer";
import Nav from "@/components/header/nav";
import AboutMeSection from "@/components/sections/aboutme/aboutme";
import ContactSection from "@/components/sections/contacts/contacts";
import HomeSection from "@/components/sections/home/home";
import ProjectSection from "@/components/sections/projects/projects";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <Nav />
      <div className={`container px-1`}>
        <HomeSection />
        <AboutMeSection />
        <ProjectSection />
        <ContactSection />        
        <Footer />
      </div>
    </>    
  )
}
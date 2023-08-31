import Nav from "@/components/nav";
import AboutMeSection from "@/components/sections/aboutme/aboutme";
import ContactSection from "@/components/sections/contacts/contacts";
import HomeSection from "@/components/sections/home/home";
import ProjectSection from "@/components/sections/projects/projects";

const borderColor = 'border border-red-500'

export default function Home() {
  return (
    <>
      <Nav />
      <div className={`container px-1 ${borderColor}`}>                
        <HomeSection />
        <AboutMeSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </>    
  )
}
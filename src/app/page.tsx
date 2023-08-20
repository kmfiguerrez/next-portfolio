import Nav from "@/components/nav";
import AboutMeSection from "@/components/sections/aboutme/aboutme";
import HomeSection from "@/components/sections/home/home";
import ProjectSection from "@/components/sections/projects/projects";

export default function Home() {
  return (
    <>            
      <Nav />
      <HomeSection />
      <AboutMeSection />
      <ProjectSection />             
    </>    
  )
}
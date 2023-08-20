import Nav from "@/components/nav";
import AboutMeSection from "@/components/sections/aboutme/aboutme";
import HomeSection from "@/components/sections/home/home";

export default function Home() {
  return (
    <>            
      <Nav />
      <HomeSection />
      <AboutMeSection />                    
    </>    
  )
}
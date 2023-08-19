import Nav from "@/components/nav";
import HomeSection from "@/components/sections/home-section/home";

const borderColor = 'border border-red-500'

export default function Home() {
  return (
    <>      
      <div className={`container ${borderColor}`}>
        <Nav />
        <HomeSection />
      </div>
    </>    
  )
}
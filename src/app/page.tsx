import Nav from "@/components/nav";

const borderColor = 'border border-red-500'

export default function Home() {
  return (
    <>      
      <div className={`container ${borderColor}`}>
        <Nav />  
      </div>
    </>    
  )
}
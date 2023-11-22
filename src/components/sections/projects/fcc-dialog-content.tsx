

const FCCDialogContent = () => {
  return (
    <div className="py-4 px-1 text-black h-[350px] max-h-[400px] overflow-y-scroll">
      <h5 className="font-semibold mb-2">ABOUT</h5>
      <p>
        A <span className="font-semibold">microservice</span> is a small, independent, and modular component within a software architecture 
        that is designed to perform a specific function.
        <br />
        <br />
        I developed this project as one of my personal project to help me check my work or whenever I'm
        practicing ipv4 subnetting.
        <br />
        <br />
        This also useful to anyone who's going for the CCNA exam or any other equivalent certifications.
        <br />
        <br />
        <strong>Note:</strong> This app is on a free hosting plan so access to this app is limited.
      </p>
      <br />
      <h5 className="font-semibold mb-2">TECH USED</h5>
      <ul className="list-inside list-disc ps-4">
        <li>HTML</li>
        <li>SASS</li>
        <li>Bootstrap 5</li>
        <li>Vanilla Javascript</li>
      </ul>
      <br />
      <h5 className="font-semibold mb-2">FEATURES</h5>
      <ul className="list-inside list-disc ps-4">
        <li>Conversions</li>
        <li>Validations</li>
      </ul>
    </div>
  )
}

export default FCCDialogContent


const FCCDialogContent = () => {
  return (
    <div className="py-4 px-1 text-black h-[350px] max-h-[400px] overflow-y-scroll">
      <section>
        <h5 className="font-semibold mb-2">ABOUT</h5>
        <p>
          A <span className="font-semibold">microservice</span> is a small, independent, and modular component within a software architecture 
          that is designed to perform a specific function.
          <br />
          <br />
          This project is part of the Freecodecamp Back End Developement & APIs certification curriculum,
          where the students are the ones who will build the backend app.
        </p>      
          <br />
        <p>This project is composed of 5 microservices APIs:</p>
          
        <ul className="list-inside list-disc ps-4">
          <li className="font-semibold">Timestamp Microservice</li>
          <li className="font-semibold">Request Header Parser Microservice</li>
          <li className="font-semibold">URL Shortener Microservice</li>
          <li className="font-semibold">Exercise Tracker</li>
          <li className="font-semibold">File Metadata Microservice</li>
        </ul>
        <br />
        <p>Each of the services returns data in a JSON format.</p>
          
        <br />
        <strong>Note:</strong> This app is on a free hosting plan so access to this app is limited.
      </section>

      <br />

      <section>
        <h5 className="font-semibold mb-2">TECH USED</h5>
        <ul className="list-inside list-disc ps-4">
          <li>HTML</li>
          <li>CSS</li>
          <li>Node.js</li>
          <li>REST API</li>
          <li>Mongoose.js</li>
          <li>MongoDB Atlas</li>
        </ul>
      </section>

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
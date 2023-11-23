import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


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
          <li className="font-semibold">Exercise Tracker Microservice</li>
          <li className="font-semibold">File Metadata Microservice</li>
        </ul>
        <br />
        <p>Each of the services returns data in a JSON format.</p>          
        <br />
        <p>
          <strong>Note:</strong> The codes are hosted on Replit and I am using the free tier.
          Each microservice is hosted on its own repl virtual machines.          
          <strong>Replit might stop each virtual machines if requests to each APIs exceeded
          the data limit. </strong>
        </p>
        <br />
        <p>
          Right now I'm using the default UIs provided by Freecodecamp while
          I'm modifying them.
          But you can already send an HTTP request to each API endpoints.
        </p>
      </section>

      {/* <br />
      <section>
        <h5 className="font-semibold mb-2">USAGE:</h5>
        <UsageAccordion />
      </section> */}

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

    </div>
  )
}

function UsageAccordion() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Timestamp Microservice</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Request Header Parser Microservice</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>URL Shortener Microservice</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>Exercise Tracker Microservice</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger>File Metadata Microservice</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>

  )
}

export default FCCDialogContent
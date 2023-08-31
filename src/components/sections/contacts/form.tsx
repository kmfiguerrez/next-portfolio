import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"


const ContactForm = () => {
  return (
    <div>
      Your Name
      <Input className="rounded-sm mb-4" />
      Your Email
      <Input className="rounded-sm mb-4" />
      Your Message
      <Textarea className="rounded-sm mb-4" />
      <Button className="bg-blue-600 hover:bg-blue-800 font-normal tracking-wide text-base">
        Submit
      </Button>
    </div>
  )
}

export default ContactForm
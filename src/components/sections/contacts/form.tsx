'use client'

import { type formDataType, formSchema } from "@/schema/form-schema" 
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useEffect } from "react"
import MessageIcon from "@/components/svg/message-icon"



const ContactForm = () => {
  const { toast } = useToast()

  const form = useForm<formDataType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    }
  })

  const onSubmit: SubmitHandler<formDataType>  = async (data) => {
    
    // Pass our data to getform.io
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value)
    })

    const response = await fetch("https://getform.io/f/0de5399d-e61c-4f60-ab57-97c3c22109b5", {
      method: "POST",
      body: formData, 
      headers: {
        "Accept": "application/json",
        // "content-type": "formdata"
      }
    })
    
    const resData = await response.json()

    if (!response.ok) {
      alert('Submitting form failed!')
      return
    }
    
    // Confirmation message if success.
    // Not available on mobile devices.
    toast({
      description: "Your message has been sent.",
      className: "max-sm:hidden bg-transparent text-white"
    })

    console.log(resData)
  }

  // const onSubmit: SubmitHandler<formDataType>  = async (data) => {
  //   await new Promise(resolve => setTimeout(resolve, 4000))
  //   toast({
  //     description: "Your message has been sent.",
  //     className: "max-sm:hidden bg-transparent text-white"

  //   })
  //   console.log('bout to reset')
    
    
  // }

  const isSuccess = form.formState.isSubmitSuccessful
  const isSubmited = form.formState.isSubmitted

  useEffect(() => {
    // Reset form if success.
    if (isSuccess) {          
      form.resetField("name")
      form.resetField("email")
      form.resetField("message")
      
      // For mobile message confirmation to dissapear in 4s.
      setTimeout(() => {      
        form.reset()
      }, 4000)
    }

  }, [isSubmited, isSuccess])

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your name" 
                    className="rounded-sm text-black focus-visible:ring-blue-500"
                    {...field}
                  />
                </FormControl>
                <FormDescription>                  
                  {/* Form Status: {isSuccess.toString()} */}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your email"
                    className="rounded-sm text-black focus-visible:ring-blue-500"
                    {...field} 
                  />
                </FormControl>              
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}          
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>                
                  <Textarea 
                    placeholder="Your message"
                    className="rounded-sm text-black focus-visible:ring-blue-500"
                    {...field}
                  />
                </FormControl>              
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirmation message for mobile devices */}
          <p className={`${!isSuccess ? 'hidden' : ''} text-green-400 sm:hidden`}>
            Your message has been sent.
          </p>

          <Button 
            type="submit"
            className="max-md:w-full bg-blue-600 hover:bg-blue-800"
            disabled={form.formState.isSubmitting}
          >
            {/* <Loader2 className={`mr-2 h-4 w-4 animate-spin ${!form.formState.isSubmitting ? 'hidden' : ''}`} />
            {form.formState.isSubmitting ? 'Loading' : 'Send'} */}

            
            {form.formState.isSubmitting ? (
              <div className="flex">
                <Loader2 className={`mr-2 h-4 w-4 animate-spin ${!form.formState.isSubmitting ? 'hidden' : ''}`} />
                <p>Loading</p>
              </div>
              
              ) : (
              <div className="flex space-x-1">
                <p>Send Message</p>
                <MessageIcon />
              </div>
            )}
          </Button>

        </form>
      </Form>

      {/* Toaster will appear on submit success */}
      <Toaster />
    </>
  )
}

export default ContactForm
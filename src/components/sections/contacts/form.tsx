'use client'

import { type formDataType, formSchema } from "@/schema/form-schema" 
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"



const ContactForm = () => {
  
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
    console.log(formData)
    const resData = await response.json()
    if (!response.ok) {
      alert('Submitting form failed!')
    }
    
    console.log(resData)
  }

  return (
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
                This is your public display name.
                {form.formState.isSubmitSuccessful.toString()}
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
        <Button 
          type="submit"
          className="bg-blue-600 hover:bg-blue-800"
        >
          Submit
        </Button>
      </form>
    </Form>
  )
}

export default ContactForm
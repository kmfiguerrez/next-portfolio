'use client'

import { type formData, formSchema } from "@/schema/form-schema" 
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useRef } from "react"
import { Textarea } from "@/components/ui/textarea"


const ContactForm = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors, isSubmitting },
  //   reset,    
  // } = useForm<formData>({
  //   resolver: zodResolver(formSchema)
  // })
  const dataRef = useRef('')
  const form = useForm<formData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    }
  })

  const onSubmit: SubmitHandler<formData>  = (data) => {
    alert(data.name)
    console.log(data.name)
    dataRef.current = data.name
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
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
                <Input placeholder="shadcn" {...field} />
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
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>                
                <Textarea {...field}/>
              </FormControl>
              <FormDescription>
                This is your public display name.
                {form.formState.isSubmitSuccessful.toString()}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default ContactForm
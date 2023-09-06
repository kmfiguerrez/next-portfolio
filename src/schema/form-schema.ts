import { z } from "zod";

export const formSchema = z.object({
  name: z
        .string()
        .min(2, 'Name must be at least 2 characters'),
  email: z.string().email(),
  message: z
            .string()
            .min(2)
})



// Form Inputs Data
export type formDataType = z.infer<typeof formSchema>
"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createserver } from "@/actions/createserver"
 
 export const formSchema = z.object({
  task: z.string().min(2, {
    message: "Task must be at least 2 characters.",
  }),
 iscompeleted:z.boolean(),
})

const Formwrapper = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          task: "",
          iscompeleted: false,
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        createserver(values)
      }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-row space-x-7">
      <FormField
        control={form.control}
        name="task"
        render={({ field }) => (
          <FormItem>
            
            <FormControl>
              <Input placeholder="Enter Task Here" {...field} className="w-[1400px]"/>
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit" className="text-white">Add Task ➕</Button>
    </form>
  </Form>
  )
}

export default Formwrapper
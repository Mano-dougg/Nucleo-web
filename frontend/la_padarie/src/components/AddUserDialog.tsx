"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import UserCreateInputSchema from "../types/users/UserCreateInputSchema"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { useToast } from "./ui/use-toast"
import { useEffect, useState } from "react"

export function AddUserDialog() {
  const { toast } = useToast();
  const userCreateInputSchema = UserCreateInputSchema;
  const form = useForm<z.infer<typeof userCreateInputSchema>>({
    resolver: zodResolver(userCreateInputSchema),
    defaultValues: {
      name: "Customer",
      breads: 1
    },
  })

  const onSubmit = (values: z.infer<typeof userCreateInputSchema>) => {
    toast({
      title: "New order!",
      description: `${values.name} ordered ${values.breads} bread${values.breads > 1 ? "s" : ""}`,
    })
    setOpen(false)
  }

  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      form.reset()
    }
  })

  const [ open, setOpen ] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="text-[hsl(31,90%,20%)] font-bold">+ Add person to queue</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center font-bold text-[hsl(31,90%,20%)]">Add person to queue</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-right font-bold  text-[hsl(31,90%,20%)]">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Customer name"
                      type="text"
                      minLength={3}
                      maxLength={100}
                      {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="breads"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-right font-bold text-[hsl(31,90%,20%)]">Breads</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={1}
                      max={100}
                      placeholder="Total breads"
                      {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end gap-4">
              <Button onClick={() => form.reset()} variant="outline" className="w-full" type="reset">Reset</Button>
              <Button className="w-full" type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

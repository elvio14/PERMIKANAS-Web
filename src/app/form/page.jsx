"use client"
import Header from "@/components/header"
import SubButton from "@/components/subButton"
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
  

const provinces = [
    "AB", // Alberta
    "BC", // British Columbia
    "MB", // Manitoba
    "NB", // New Brunswick
    "NL", // Newfoundland and Labrador
    "NS", // Nova Scotia
    "NT", // Northwest Territories
    "NU", // Nunavut
    "ON", // Ontario
    "PE", // Prince Edward Island
    "QC", // Quebec
    "SK", // Saskatchewan
    "YT"  // Yukon
]

const occupations = [
    ["Undergraduate Student", "undergrad"],
    ["Postgraduate Student", "postgrad"],
    ["Working Professional", "working"],
    ["Other", "other"]
]
 
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  occupation: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  institution: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  city: z.string().min(2, {
    message: "City must be at least 2 characters.",
  }),
  province: z.string(),
})


export default function PermikaForm() {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
        },
      })
     
    const onSubmit = (values) => {
        console.log(values)
    }

    return (
        <>
        <Header/>
        <div className="bg-gradient-to-br from-[var(--main-1)] flex flex-col items-center gap-8 py-16">
            <SubButton text="Form"/>
            <h1 className="manrope-h2 md:text-3xl">Fill in this short questionnaire!</h1>
            <div className="rounded-xl shadow-xl bg-white md:w-[50vw] flex flex-col items-center gap-8 md:py-8 md:mb-16">
                <img src="/permikanas_logo_black.svg" alt="permikanas logo" className="h-16"/>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-[1fr_3fr] gap-8 w-[40vw]">
                        <div className="flex justify-end text-right">Name :</div>
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder="Full Name..." {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="flex justify-end text-right">Email :</div>
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder="Your e-mail..." {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
            
                        <div className="flex justify-end text-right">Occupation :</div>
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Select>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Occupation" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {occupations.map((item, index) => (
                                        <SelectItem value={item[1]} key={index}>{item[0]}</SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="flex justify-end text-right">Institution :</div>
                        <FormField
                          control={form.control}
                          name="institution"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder="Affiliated institution..." {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="flex justify-end text-right">City :</div>
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder="City of residence..." {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="flex justify-end text-right">Province :</div>
                        <FormField
                          control={form.control}
                          name="province"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                              <Select>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Province" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {provinces.map((item, index) => (
                                        <SelectItem value={item} key={index}>{item}</SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                    </div>
                  </form>
                </Form>
                <button type="submit" className="text-[var(--main-5)] px-8 py-1 rounded-full border-solid border-2 border-[var(--main-5)] hover:bg-[var(--main-5)] hover:text-white">Submit</button>
            </div>
        </div>
        </>
    )
}
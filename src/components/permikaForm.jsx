"use client"
import SubButton from "@/components/subButton"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
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
import { createMember } from "../app/actions"
import { useRouter } from "next/navigation"
import { useState } from "react"

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

const institutions = [
  "Acadia University",
  "Algonquin College",
  "Brock University",
  "Brandon University",
  "British Columbia Institute of Technology (BCIT)",
  "Capilano University",
  "Carleton University",
  "Centennial College",
  "Cégep de Saint-Laurent",
  "Cégep du Vieux Montréal",
  "Concordia University",
  "Conestoga College",
  "Dalhousie University",
  "Dawson College",
  "Douglas College",
  "École Polytechnique de Montréal",
  "Fanshawe College",
  "George Brown College",
  "HEC Montréal",
  "Humber Polytechnic",
  "Lakehead University",
  "Langara College",
  "Laurentian University",
  "MacEwan University",
  "McGill University",
  "McMaster University",
  "Memorial University of Newfoundland",
  "Mohawk College",
  "Mount Allison University",
  "Mount Royal University",
  "Mount Saint Vincent University",
  "Northern Alberta Institute of Technology (NAIT)",
  "Queen’s University",
  "Ryerson University (Toronto Metropolitan University)",
  "Saint Mary’s University",
  "Seneca College",
  "Sheridan College",
  "Simon Fraser University (SFU)",
  "Southern Alberta Institute of Technology (SAIT)",
  "St. Thomas University",
  "Thompson Rivers University",
  "Toronto Metropolitan University (Ryerson)",
  "Trent University",
  "Université de Montréal",
  "Université de Sherbrooke",
  "Université Laval",
  "University of Alberta",
  "University of British Columbia (UBC)",
  "University of Calgary",
  "University of Guelph",
  "University of Lethbridge",
  "University of Manitoba",
  "University of New Brunswick (Fredericton)",
  "University of New Brunswick (Saint John)",
  "University of Ottawa",
  "University of Prince Edward Island",
  "University of Regina",
  "University of Saskatchewan",
  "University of Toronto Mississauga",
  "University of Toronto Scarborough",
  "University of Toronto (St. George)",
  "University of Victoria (UVic)",
  "University of Waterloo",
  "University of Windsor",
  "University of Winnipeg",
  "Vanier College",
  "Vancouver Island University",
  "Western University",
  "Wilfrid Laurier University",
  "York University",
  "Yukon University",
  "Other"
]

const occupations = [
  "Undergraduate Student",
  "Graduate Student",
  "Working Professional",
  "Other"
]
 
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  occupation: z.string(),
  institution: z.string().min(2, {
    message: "Occupation must be at least 2 characters.",
  }),
  institutionOther: z.string().optional(),
  city: z.string().min(2, {
    message: "City must be at least 2 characters.",
  }),
  province: z.string(),
})


export default function PermikaForm() {
    const [submitting,setSubmitting] = useState(false)
    const [submitError,setSubmitError] = useState(false)

    const router = useRouter()
    const goToPage = (path) => {
      console.log("Running goToPage " + path)
      router.push(path)
    }


    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          occupation: "Undergraduate Student",
          institutionOther: ""
        },
      })
     
    const onSubmit = async (values) => {
      console.log("submitting")
      console.log(values)
      setSubmitting(true)
      try{
        await createMember(values).then(() => goToPage("/form/submitted"))
      }catch(err){
        console.log(err)
        setSubmitError(true)
        setSubmitting(false)
      }finally{
        setSubmitting(false)
      }
    }

    return (
        <>
        <div className="bg-gradient-to-br from-[var(--main-1)] flex flex-col items-center gap-8 md:pt-16 pt-32 pb-[12rem]">
            <SubButton text="Form"/>
            <h1 className="manrope-h2 md:text-3xl">Fill in this short questionnaire!</h1>
            <div className="rounded-xl shadow-xl bg-white md:w-[50vw] w-[87vw] flex flex-col items-center md:gap-8 gap-4 md:py-8 py-4 md:mb-16">
                <img src="/permikanas_logo_black.svg" alt="permikanas logo" className="h-16"/>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-[1fr_3fr] items-center md:gap-8 gap-4 md:w-[40vw] p-4">
                        <div className="flex justify-end text-right">Full Name :</div>
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
                          name="occupation"
                          render={({field}) => (
                            <FormItem>
                              <FormControl>
                                <Select onValueChange={field.onChange} value={field.value}>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Occupation" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {occupations.map((item, index) => (
                                        <SelectItem value={item} key={index}>{item}</SelectItem>
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
                          render={({field}) => (
                            <FormItem>
                              <FormControl>
                                <Select onValueChange={field.onChange} value={field.value}>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Institution" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {institutions.map((item, index) => (
                                        <SelectItem value={item} key={index}>{item}</SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        
                        <div className="flex justify-end text-right">Other Institution :</div>
                        <FormField
                          control={form.control}
                          name="institutionOther"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder="If not in the list above" {...field} />
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
                          render={({field}) => (
                            <FormItem>
                              <FormControl>
                              <Select onValueChange={field.onChange} value={field.value}>
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
                      <div className="col-span-2 flex flex-col w-full items-center justify-center">
                        <button type="submit" className="text-[var(--main-5)] px-8 py-1 rounded-full border-solid border-2 border-[var(--main-5)] hover:bg-[var(--main-5)] hover:text-white">Submit</button>
                        {submitting && <p className="p-2">Submitting form...</p>}
                        {submitError && <p className="p-2 text-[var(--main-5)]">Submission error, please try again later.</p>}
                      </div>
                    </div>
                  </form>
                </Form>
            </div>
        </div>
        </>
    )
}
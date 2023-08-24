"use client"
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema } from "validation"
import { postLead } from "@/services/api";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

interface ContactFormProps {
    id:number;
}

interface FormValues {
  name: string;
  email: string;
  phone: string;
  carId: number;
}
export default function ContactForm({ id }: ContactFormProps){
    const [disabled , setDisabled] = useState(false);
    const router = useRouter()
    const { register, control, handleSubmit, formState: { errors }  } = useForm<FormValues>({
        defaultValues:{
          name: "",
          email: "",
          phone: "",
          carId: id
        },
        resolver: zodResolver(leadSchema)
    });

    async function onSubmit(data:FormValues) {
      
      setDisabled(true)
      try {
        const result = await postLead(data)
        console.log(result)
        router.push("confirmation")
      } catch (e) {
        console.error(e)

      }
      setDisabled(false)
    }

    function onError(error: SubmitErrorHandler<FormValues>){
      console.log(error)
    }
    function handleOnChangePhone(event:ChangeEvent<HTMLInputElement>){
      event.target.value = event.target.value.replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, `$1-$2`)
        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
        .replace(/(-\d{4})\d+?$/, '$1') 
    }
    return (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Nome
                </label>
                <div className="mt-2">
                  <input
                    {...register("name")}
                    autoComplete="name"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-3">
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                  Telefone
                </label>
                <div className="mt-2">
                  <input
                    {...register("phone", {
                      setValueAs:(value) =>  value.replace(/[^0-9]+/g, "")  
                    })}
                    onChange={handleOnChangePhone}
                    type="tel"
                    placeholder="(12) 999887788"
                    inputMode="numeric"
                    autoComplete="phone"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.phone && (
                    "Erro"
                  )}
                </div>
              </div>
  
              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    {...register("email")}
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              
            </div>
          
            <div className="mt-6 flex items-center justify-end gap-x-6">
            
            <button
                disabled={disabled}
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Enviar
            </button>
         </div>
      </form>)
}
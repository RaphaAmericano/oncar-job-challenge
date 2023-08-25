"use client"
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema } from "validation"
import { postLead } from "@/services/api";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import FeedbackMessage from "@/components/FeedbackMessage";
import Label from "@/components/Label";
import Input from "@/components/Input";
import { phoneMask } from "@/utils/masks";

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
    useEffect(() => {
      console.log(errors);
    },[errors]);

    function onError(error: SubmitErrorHandler<FormValues>){
      console.log(error)
    }

    function handleOnChangePhone(event:ChangeEvent<HTMLInputElement>){
      event.target.value = phoneMask(event.target.value)
    }
    return (
          <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
              <Label htmlFor="name">Nome</Label>
              <div className="mt-2.5">
                <Input
                {...register("name")}
                  type="text"
                  autoComplete="name"
                />
              </div>
              {(errors?.name && errors?.name?.message) && <FeedbackMessage type="danger" text={errors.name.message} />}
            </div>
            <div>
              <Label htmlFor="phone">Telefone</Label>
              <div className="mt-2.5">
              <Input {...register("phone", {
                    setValueAs:(value) =>  value.replace(/[^0-9]+/g, "")  
                  }) }
                  onChange={handleOnChangePhone}
                  type="tel"
                  inputMode="numeric"
                  autoComplete="phone"
                  />
                </div>  
                {(errors?.phone && errors?.phone?.message) && <FeedbackMessage type="danger" text={errors.phone.message} />}  
              </div>
              <div className="sm:col-span-2">
              <Label htmlFor="email">Email</Label>
                  <div className="mt-2.5">
                    <Input
                      {...register("email")}
                      type="email"
                      autoComplete="email"
                    />
                  </div>
                  {(errors?.email && errors?.email?.message) && <FeedbackMessage type="danger" text={errors.email.message} />}  
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
            {(errors?.root && errors?.root?.message) && <FeedbackMessage type="danger" text={errors.root.message} />}  
         </div>
      </form>
  )
}
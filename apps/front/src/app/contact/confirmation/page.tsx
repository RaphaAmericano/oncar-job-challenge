"use client"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation";
export default function Confirmation(){
    const router = useRouter()
    const [count, setCount] = useState(5000);
    const intervalRev = useRef<any>(null);
    
    useEffect(() => {
      intervalRev.current = setInterval(() => {
        setCount((prev) => prev - 1000)
      }, 1000)
      return () => clearInterval(intervalRev.current)
    },[])

    useEffect(() => {
      if(count <= 0){
        clearInterval(intervalRev.current)
        router.push("/")
      }
    },[count])

    return (
        <div className="text-center">
          
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Obrigado!</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Seu formulário foi enviado com sucesso</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <p className="text-sm font-semibold text-gray-900">Você será redirecionando em instantes para a página principal. </p>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              {count / 1000}
            </span>
          </div>
        </div>
    )
}
"use client"
import useCars from "@/context/cars.context"
import ContactForm from "./components/ContactForm";
import { useRouter } from "next/navigation";
interface ContactParams {
  params: {
    id: string;
  }
}
export default function Contact({ params  } : ContactParams ) {
    const router = useRouter();
    
    function toHome(){
      router.push("/")
    }
    const { id } = params;
    const { car } = useCars()
    const selectedCar = car(parseInt(id));
    console.log(selectedCar);
    return (
      <>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none ">
          { selectedCar === undefined ? ( <div>Carregando</div>) : (
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Preencha o formulário abaixo. Entraremos em contato em breve
              </p>
              <h2 className="text-base font-semibold leading-7 text-gray-900">{selectedCar.model} Ano {selectedCar.year}</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600"></p>
            </div>
            <ContactForm id={parseInt(id)}/>
          </div>
          )}
        </div>
        <div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <button 
                onClick={toHome}
                type="button" 
                className="text-sm font-semibold leading-6 text-gray-900 border-black border-1 p-4">
                    Voltar
              </button>
            </div>
        </div>
      </>
    )
  }
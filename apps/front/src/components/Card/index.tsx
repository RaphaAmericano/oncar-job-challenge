import { Car } from "types"
import { useRouter } from "next/navigation"
interface CardProps {
    car: Car 
}

function Card({ car } :CardProps ){
    const router = useRouter()
    function pushLink(){
        router.push(`/contact/${car.id}`)        
    }
return (
     <article key={car.id} className="flex max-w-xl flex-col items-start justify-between">                
        <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href={"www.google.com"}>
                <span className="absolute inset-0" />
                {car.model}
            </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{car.year}</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
            <img src={"https://s3.ecompletocarros.dev/images/lojas/285/veiculos/151963/veiculoInfoVeiculoImagesMobile/vehicle_image_1689004048_d41d8cd98f00b204e9800998ecf8427e.jpeg"} 
                alt={`Image of ${car.model}`} className="h-10 w-10 rounded-full bg-gray-50" />
            <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
                <a href={"www.google.com"}>
                <span className="absolute inset-0" />
                {car.model}
                </a>
            </p>
            <p className="text-gray-600">{car.year}</p>
            </div>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
            <button className="bg-black text-white rounded-md p-2" onClick={pushLink}>Entre em contato</button>
        </div>
    </article>
)
}

export default Card
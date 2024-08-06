import { CarType } from "../../types"
import generateImage from "../../utils/generateImage"

type Props = {
    car: CarType;
    
}

const Photo = ({car} : Props) => {
  return (
    <div className="flex-1 flex-col gap-3">
        {/**büyük resim */}
        <div className="w-full h-50 bg-pattern bg-center rounded-lg">
            <img src={generateImage(car)} className="h-full mx-auto object-contain" alt="car"/>
        </div>

        {/**küçük resimler */}
        <div className="flex gap-3 my-3">
            <div className="flex-1 flex relative h-24 bg-primary-blue-100">
                <img src={generateImage(car, "29")} className="h-full mx-auto object-contain min-w-[146px]"/>
            </div>
            <div className="flex-1 flex relative h-24 bg-primary-blue-100">
                <img src={generateImage(car, "33")} className="h-full mx-auto object-contain min-w-[146px]"/>
            </div>
            <div className="flex-1 flex relative h-24 bg-primary-blue-100">
                <img src={generateImage(car, "13")} className="h-full mx-auto object-contain min-w-[146px]"/>
            </div>
        </div>
        
    </div>
  )
}

export default Photo
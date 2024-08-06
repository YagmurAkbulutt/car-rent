import { useSearchParams } from "react-router-dom"
import Button from "./Button"


const ShowMore = () => {
    const [params, setParams] = useSearchParams()

    /** 
     * 1-urlde limit parametresi yoksa
   - kullanıcı projeye yeni girmiştir varayılan olarak ekranda 5 araç vardır
    -butona tıklanınca urlye param eklenmeli ve değeri 10 olmalı
    
    2- urlde limit parametresi varsa
    -kullanıcı en az bir kere butona basmıştır
    -mavcut limitin üzerine 5 eklemek gerekir
    */ 

    //urldeki limit parametresini al yoksa 5 yap
    const limit = Number(params.get("limit")) || 5;

    const increaseLimit = () => {
        // yeni limit belirle
        const newLimit = limit + 5;

        // pramterelei güncelle
        params.set("limit", String(newLimit))

        //urli güncelle
        setParams(params)

    }
  return (
    <div className="w-full flex-center gap-5 my-10">
      {limit < 30 && <Button title="Daha Fazla" handleClick={increaseLimit}/>}
    </div>
  )
}

export default ShowMore

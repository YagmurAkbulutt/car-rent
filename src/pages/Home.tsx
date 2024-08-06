import { useEffect, useRef, useState } from "react";
import Filter from "../components/Filter";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import { fetchCars } from "../utils/fetchCars";
import { CarType } from "../types";
import Warning from "../components/Warning";
import Card from "../components/Card";
import ShowMore from "../components/ShowMore";
import { useSearchParams } from "react-router-dom";
import { years, fuels} from "../utils/constants";

const Home = () => {
  //bu state sadece cartype[] veya null olabilir
  const [cars, setCars] = useState<CarType[] | null>(null);

  // sadece boolean değer alabilir
  const [isError, setIsError] = useState<boolean>(false);

  //katalog divinin referansı
  const catalogRef = useRef<HTMLDivElement>(null)

  //urldeki parametrelere eriş
  const [params] = useSearchParams()

  useEffect(() => {
    //urldeki bütün arama parametrelerinden bir nesne oluştur
    const paramObj = Object.fromEntries(params.entries())

    //verileri çeken fonksiyona parametreleri gönder

    fetchCars(paramObj)
      .then((data) => setCars(data))
      .catch(() => setIsError(true));
  }, [params]);

  return (
    <div className="mb-40">
      <Hero catalogRef={catalogRef}/>

      <div ref={catalogRef} className="mt-12 padding-x padding-y max-width">
        <div  className="home__text-container">
          <h1 className="text-3xl font-extrabold">Araba Kataloğu</h1>

          <p>Beğenebileceğin arabaları keşfet!</p>

          <div className="home__filters">
            <SearchBar />

            <div className="home__filter-container">
              <Filter options={fuels} name="fuel_type"/>
              <Filter options={years} name="year"/>
            </div>
          </div>
        </div>

        {/* ARABA LİSTESİ
         * veri nullsa apiden ccevap gelmemiştir
         * iserror true ise apiden veri alırken hata olmuştur
         * veri boş dizi ise aranan kriterlere uygun veri bulunamaıştır
         * veri dolu dizi ise apidan veriler gelmiştir
         */}
        {!cars ? (
          <Warning> Yükleniyor...</Warning>
        ) : isError ? (
          <Warning> Üzgünüz, verileri alırken bir sorun oluştu.</Warning>
        ) : cars.length < 1 ? (
          <Warning>Aranan kriterlere uygun araç bulunamadı.</Warning>
        ) : ( cars.length > 1 && 
          (
            <section>
            <div className="home__cars-wrapper">
              {cars.map((car, i) => (
                <Card car={car} key={i} />
              ))}
            </div>

            <ShowMore/>
          </section>
          )
        )}
      </div>
    </div>
  );
};

export default Home;

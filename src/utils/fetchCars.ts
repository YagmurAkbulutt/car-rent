import { CarType } from "../types";

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'dffbb20932mshaca6757e3ecd48dp1d4946jsnb8f0184d720d',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};

// normalde bu fonk bir cartype dizisi return ediyor. ama bu dizi apidan gecikme sonrasında geldiğinden dolayı return satırına sadece cartype[] yazamıyoruz. bu return edilen değeri promise ismindeki interface e generic tip olarak göndermemiz gerekiyor.

type FilterType = {
	make?: string;
	model?: string;
	limit?: string;
	fuel_type?: string;
	year?: string;
}
export const fetchCars = async (paramObj : FilterType): Promise<CarType[]> => {
    //parametreler gelmediğinde varsayılan değerleri belirle
	const {
		limit= "5",
		make = "honda",
		model = "",
		fuel_type= "",
		year= "",
	} = paramObj;

	//parametler varken url 
	const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&fuel_type=${fuel_type}&year=${year}&limit=${limit}`;

    const res = await fetch(url, options);

    return await res.json()

}
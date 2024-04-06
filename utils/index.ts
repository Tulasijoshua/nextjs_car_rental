export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '2ba537d23emsh6d413a813545a6bp184981jsn3b1f1187f840',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {headers: headers});

    const result = await response.json();
    return result;

}
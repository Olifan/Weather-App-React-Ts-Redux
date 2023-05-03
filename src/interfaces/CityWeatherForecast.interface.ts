interface CityListPage {
    name: string;
    country: string;
    temp: number;
    icon: string;
    description: string;
}

interface CityViewPage{
    name: string;
    country: string;
    temp: number;
    feels_like: number;
    description: string;
    temp_max: number;
    temp_min: number;
}
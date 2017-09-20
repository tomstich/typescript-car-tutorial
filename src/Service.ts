import Car from './Car'
import AuthorizedDealer from './AuthorizedDealer';


export default class Service implements AuthorizedDealer
{
    private keychain = new Array()

    public newCar(brand: string): Car
    {
        let maxSpeed: number
        let maxMileage: number
        switch (brand) {
            case 'BMW':
                maxSpeed = 250
                maxMileage = 5000.0
                break;
            case 'Mercedes':
                maxSpeed = 230
                maxMileage = 6000.0
                break;
            case 'Audi':
                maxSpeed = 260
                maxMileage = 5000.0
                break;
            default:
                maxSpeed = 180
                maxMileage = 4000.0
                break;
        }

        return new Car(brand, maxSpeed, maxMileage)
    }

    public resetMileage(car: Car): any
    {
        car.resetMileage(this.keychain[car.id])
    }

    public secretKey(car: Car, secretKey: string): any
    {
        this.keychain[car.id] = secretKey
    }
}


import Car from './Car'

export default interface AuthorizedDealer
{
    secretKey(car: Car, secretKey: string): any

    resetMileage(car: Car): any
}


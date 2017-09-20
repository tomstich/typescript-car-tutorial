import Service from '../Service'

describe('Service', () => {
  let service: Service

  beforeEach (() => {
    service = new Service()
  })

  it('should return car', () => {
    const brand = 'BMW'
    const car = service.newCar(brand)
    expect(car.brand).toEqual(brand)
  })

  it('should reset mileage', () => {
    const brand = 'BMW'
    const car = service.newCar(brand)

    car.drive(50, 500)

    service.resetMileage(car)
    expect(car.mileage).toEqual(0)
  })
})

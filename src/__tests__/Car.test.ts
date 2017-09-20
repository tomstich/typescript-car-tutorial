import Car from '../Car'

describe('Car', () => {
    let car: Car
    let brand: string
    let maxSpeed: number
    let maxMileage: number

    beforeEach(() => {
        brand = 'BMW'
        maxSpeed = 200
        maxMileage = 1000.0
        car = new Car(brand, maxSpeed, maxMileage)
    })

    it('has status parking after creation', () => {
        expect(car.status).toEqual('parking')
    })

    it('has status running after start', () => {
        car.start()
        expect(car.status).toEqual('running')
    })

    it('has status parking after stop', () => {
        car.stop()
        expect(car.status).toEqual('parking')
    })

    it('has more mileage after driving', () => {
        const distance = 100.5
        const speed = 50
        car.start()

        car.drive(speed, distance)

        expect(car.mileage).toEqual(distance)
    })

    it('has more mileage after driving', () => {
        const distance = 100.5
        const speed = -50
        car.start()

        car.drive(speed, distance)

        expect(car.speed).toEqual(0)
    })

    it('should not drive faster than max speed', () => {
        const distance = 100.5
        const speed = 2500

        car.start()
        car.drive(speed, distance)

        expect(car.speed).toEqual(maxSpeed)
    })

    it('should not drive while status is parking', () => {
        const distance = 100.5
        const speed = 100

        car.drive(speed, distance)

        expect(car.speed).toEqual(0)
        expect(car.status).toEqual(car.STATUS_PARKING)
    })

    it('should increase and decrease speed', () => {
        const distance = 100.5

        car.start()

        car.drive(50, distance)
        expect(car.speed).toEqual(50)

        car.drive(50, distance)
        expect(car.speed).toEqual(100)

        car.drive(-50, distance)
        expect(car.speed).toEqual(50)
    })

    it('should return the mileage', () => {
        const distance = 100.5

        car.start()

        car.drive(50, distance)
        expect(car.mileage).toEqual(distance)
    })

    it('should ignore negative distances', () => {
        const distance = -50.0
        const speed = 50

        car.start()

        car.drive(speed, distance)
        expect(car.mileage).toEqual(0)
    })

    it('should not drive further than planned obsolesence', () => {
        const distance = 2000.0
        const speed = 50

        car.start()

        car.drive(speed, distance)
        expect(car.mileage).toEqual(maxMileage)
    })

    it('should stop if planned obsolesence is reached', () => {
        const distance = 2000.0
        const speed = 50

        car.start()

        car.drive(speed, distance)
        expect(car.mileage).toEqual(maxMileage)
        expect(car.status).toEqual(car.STATUS_BROKEN)
        expect(car.speed).toEqual(0)
    })

    it('should not start if broken', () => {
        const distance = 2000.00
        const speed = 50

        car.start()
        car.drive(speed, distance)
        car.stop()

        car.start()

        expect(car.status).toEqual(car.STATUS_BROKEN)
    })
    it('should not start while driving', () => {
        const distance = 500.00
        const speed = 50

        car.start()
        car.drive(speed, distance)

        car.start()

        expect(car.status).toEqual(car.STATUS_DRIVING)
    })

    it('should stop if driving', () => {
        const distance = 500.00
        const speed = 50

        car.start()
        car.drive(speed, distance)

        car.stop()

        expect(car.status).toEqual(car.STATUS_DRIVING)
    })

    it('should not set speed if car is broken', () => {
        const distance = 10000.00
        const speed = 50

        car.start()
        car.drive(speed, distance)

        expect(car.status).toEqual(car.STATUS_BROKEN)
        expect(car.speed).toEqual(0)
    })

    it('should have a brand', () => {
        const distance = 10000.00
        const speed = 50

        expect(car.brand).toEqual(brand)
    })

    it('should give secret key to service', () => {
        const distance = 10000.00
        const speed = 50

        expect(car.brand).toEqual(brand)
    })
})

import AuthorizedDealer from './AuthorizedDealer'

export default class Car
{
    readonly STATUS_PARKING: string = 'parking'
    readonly STATUS_RUNNING: string = 'running'
    readonly STATUS_DRIVING: string = 'driving'
    readonly STATUS_BROKEN: string = 'broken'

    private _status: string
    private _mileage: number
    private _speed: number
    private _secretKey: string
    private _id: number

    constructor(private _brand: string, private _maxSpeed: number, private _maxMileage: number, dealer?: AuthorizedDealer)
    {
        this._status = this.STATUS_PARKING
        this._mileage = 0.0
        this._speed = 0

        this._id = Math.random()

        if (dealer !== undefined) {
            let id = Math.random().toString(36).substring(7);
            this._secretKey = id
            dealer.secretKey(this, this._secretKey)
        }
    }

    public start()
    {
        if (this._status !== this.STATUS_BROKEN &&
            this._status !== this.STATUS_DRIVING) {

            this._status = this.STATUS_RUNNING
        }
    }

    public stop()
    {
        if (this._status !== this.STATUS_BROKEN &&
            this._status !== this.STATUS_DRIVING) {

            this._status = this.STATUS_PARKING
            this._speed = 0
        }
    }

    public drive(speed: number, distance: number)
    {
        if (this._status === this.STATUS_RUNNING ||
            this._status === this.STATUS_DRIVING) {

            if (distance > 0) {

                this._status = this.STATUS_DRIVING
                this._speed += speed
                this._mileage += distance

                if (this._speed > this._maxSpeed) {
                    this._speed = this._maxSpeed
                }

                if (this._speed < 0) {
                    this._speed = 0
                    this._status = this.STATUS_RUNNING
                }

                if (this.mileage >= this._maxMileage) {
                    this._mileage = this._maxMileage
                    this._speed = 0
                    this._status = this.STATUS_BROKEN
                }
            }
        }
    }

    public resetMileage(secretKey: string)
    {
        if (this._secretKey === secretKey) {
            this._mileage = 0
        }
    }

    public get id(): number
    {
        return this._id
    }

    public get status(): string
    {
        return this._status
    }

    public get speed(): number
    {
        return this._speed
    }

    public get mileage(): number
    {
        return this._mileage
    }

    public get maxMileage(): number
    {
        return this._maxMileage
    }

    public get brand(): string
    {
        return this._brand
    }
}


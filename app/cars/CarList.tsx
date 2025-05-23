import { Car } from '@/lib/types/types'
import Card from '../components/ui/cars/Card'

type Props = { cars: Car[] }

export default function CarList({ cars }: Props) {
    return (
        <div>
            <h1></h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {cars.map((car: Car) =>
                    <Card key={car.name} car={car} />)}</div>
        </div>
    )
}

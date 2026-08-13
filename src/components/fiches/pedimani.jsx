import FicheLayout from './FicheLayout'
import { formationsData } from '../../data/formations'

const data = formationsData['pedicure-manicure']

function Pedimani() {
  return (
    <FicheLayout
      title={data.title}
      duration={data.duration}
      price={data.price}
      image="/MANU-PEDI.jpg"
      objective={data.objective}
      days={data.days}
    />
  )
}

export default Pedimani

import FicheLayout from './FicheLayout'
import { formationsData } from '../../data/formations'

const data = formationsData.epilation

function Epilation() {
  return (
    <FicheLayout
      title={data.title}
      duration={data.duration}
      price={data.price}
      image="/EPILATION.jpg"
      objective={data.objective}
      days={data.days}
    />
  )
}

export default Epilation

import FicheLayout from './FicheLayout'
import { formationsData } from '../../data/formations'

const data = formationsData.onglerie

function Onglerie() {
  return (
    <FicheLayout
      title={data.title}
      duration={data.duration}
      price={data.price}
      image="/onglerie.jpg"
      objective={data.objective}
      days={data.days}
    />
  )
}

export default Onglerie

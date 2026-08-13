import FicheLayout from './FicheLayout'
import { formationsData } from '../../data/formations'

const data = formationsData['soin-corps']

function SoinCorps() {
  return (
    <FicheLayout
      title={data.title}
      duration={data.duration}
      price={data.price}
      image="/massage.jpg"
      objective={data.objective}
      days={data.days}
    />
  )
}

export default SoinCorps

import FicheLayout from './FicheLayout'
import { formationsData } from '../../data/formations'

const data = formationsData['soin-visage']

function SoinVisage() {
  return (
    <FicheLayout
      title={data.title}
      duration={data.duration}
      price={data.price}
      image="/SV.jpg"
      objective={data.objective}
      days={data.days}
    />
  )
}

export default SoinVisage

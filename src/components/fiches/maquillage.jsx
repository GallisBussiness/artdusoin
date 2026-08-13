import FicheLayout from './FicheLayout'
import { formationsData } from '../../data/formations'

const data = formationsData.maquillage

function Maquillage() {
  return (
    <FicheLayout
      title={data.title}
      duration={data.duration}
      price={data.price}
      image="/makup.jpg"
      objective={data.objective}
      days={data.days}
    />
  )
}

export default Maquillage

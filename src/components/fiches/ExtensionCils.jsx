import FicheLayout from './FicheLayout'
import { formationsData } from '../../data/formations'

const data = formationsData["extension-cils"]

function ExtensionCils() {
  return (
    <FicheLayout
      title={data.title}
      duration={data.duration}
      price={data.price}
      image="/CILS.jpg"
      objective={data.objective}
      days={data.days}
    />
  )
}

export default ExtensionCils

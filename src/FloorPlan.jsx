import Bath from "./Bath"
import Bedroom from "./Bedroom"
import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"

const FloorPlan = (props) => {
  return (  
    <div>
      <Bedroom bedNum={1}/>
      <Kitchen />
      <LivingRoom />
      <Bath size={'Full'}/>
      <Bedroom bedNum={2}/>
      <Bath size={'Half'}/>
      <Bedroom bedNum={3}/>
    </div>
  )
}

export default FloorPlan
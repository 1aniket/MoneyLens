'use client'
import CountUp from "react-countup"

const AnimatedCounter = ({ammount}:{ammount:number}) => {
  return (

    <div className="w-full" >
        <CountUp 
        decimal=","
        prefix="₹"
        delay={0.2}
        duration={2}
        end={ammount}
        />
    </div>

    
  )
}

export default AnimatedCounter
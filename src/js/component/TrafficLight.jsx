import React, {useEffect, useState} from "react";



const TrafficLight = () =>{

    const [encendido, setEncendido] = useState ("red")
    const [active, setActive] = useState(false)

    const changeColor = (color) => {
        setEncendido (color)
    }


    useEffect(()=>{
       if (active) {
            const interval = setInterval(() => {
                if(encendido == "red"){
                    setEncendido("yellow")
                }else if(encendido == "yellow"){
                    setEncendido("green")
                }else if (encendido =="green"){
                    setEncendido("red")
                }
            }, 1000)
            return ()=>clearInterval(interval)
        }
    }, [active, encendido])

    return (
        <main>
            <div className="p-box "></div>
            <div className="box-light ">
                <div className={`red  ${encendido == "red" ? "light-on" : ""} `}
                    onClick={()=>changeColor("red")}>
                    
                </div>
                <div className= {`yellow  ${encendido == "yellow" ? "light-on" : ""} `}
                    onClick={()=>changeColor("yellow")}>
                    
                </div>
                <div className={`green  ${encendido == "green" ? "light-on" : ""} `}
                    onClick={()=>changeColor("green")}>
                    
                </div>
              
                
                
            </div>
            <button onClick={()=>setActive(!active)} className="boton mt-4 btn btn-success">Activar</button>
            
        </main>
    )}
export default TrafficLight;
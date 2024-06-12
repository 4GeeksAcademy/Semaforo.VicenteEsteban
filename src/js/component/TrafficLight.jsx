import React, {useEffect, useState} from "react";



const TrafficLight = () =>{

    const [encendido, setEncendido] = useState ("red")
    const [active, setActive] = useState(false)
    const [purpleActive, setPurpleActive] = useState(false)
    const handleShowPurple = () => {
        setPurpleActive(!purpleActive);
    };

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
                    setEncendido(purpleActive ? "purple" : "red")
                }else if (encendido == "purple"){
                    setEncendido("red");
                }
                    
            }, 1000)
            return ()=>clearInterval(interval)
        }
    }, [active, encendido])

    return (
        <main>
            <div className="p-box ">
                <div className="boton-container">
                    <button onClick={()=>setActive(!active)} className="boton mt-4">Activar</button>
                    <button onClick={handleShowPurple}
                    className="purpleBoton mt-4">Añade boton morado</button>
                </div>
            </div>
           
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

                {purpleActive && <div className={`purple ${encendido=="purple" ? "light-on" : ""}`}
                onClick={()=>changeColor("purple")}>
                </div>
                } 
               
               
            </div>
            
        </main>
        
    )}
    <div
    
    ></div>

export default TrafficLight;





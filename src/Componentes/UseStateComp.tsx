import React, {useState} from "react";

const Contador: React.FC = ()=>{


    
    const [Contador, setContador] = useState<number>(0);

    const incrementar=()=>{

        setContador(Contador+1);

    }

    const decrementar =()=>{

        setContador(Contador-1);

    }

    



    return (

        <div>
            <h1>Hook UseState</h1>
            <p>Contador {Contador}</p>
            <button onClick={incrementar}>Sumar</button>
            <button onClick={decrementar}>Restar</button>
        
        
        </div>
    );

}

export default Contador;
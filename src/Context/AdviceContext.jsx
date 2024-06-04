import { useEffect } from "react";
import { Children, createContext, useState } from "react";

export const ApiContext = createContext(null)


const ApiProvider = (props) =>{
    const [apiData, setApiData] = useState(null);
    const [apiId, setApiId] = useState(117)
    useEffect(()=>{
        fetch(`https://api.adviceslip.com/advice/${apiId}`)
        .then(response => response.json())
        .then(data => {
            setApiData(data);
        })
        .catch(error => {
            console.error('Une erreur est survenu', error)
        })
    },[apiId])

    const increment = ()=>{
        setApiId(Math.floor(Math.random() * 150) + 1)
    }

    const contextValues = {
        apiData,
        increment
    }
    return(
        <ApiContext.Provider value={contextValues}>
          {props.children}
        </ApiContext.Provider>
    )
};
export default ApiProvider;
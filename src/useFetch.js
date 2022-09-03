//MAKING A CUSTOM HOOK!

import { useState, useEffect } from "react";

const useFetch = (url) =>{
    const [data, setData] = useState(null);     //Setting state for our blog!
    const [isPending, setisPending] = useState(true);       //Setting state for our blog while Loading!
    const [error, setError] = useState(null);           //Setting state for our Error Handling!

    useEffect(()=>{
        const abortCont = new AbortController();
        
        setTimeout(()=>{
            fetch(url, {signal:abortCont.signal})
        .then (res =>{
                if(!res.ok){
                    throw Error('Unable to fetch...😭 Internal server error.....');
                }
            return res.json();
        })
        .then(data=>{
            setData(data);
            setisPending(false);
            setError(null);         //If got data successfully don't try to set the error!
        })
            .catch(err=>{
                if(err.name==='AbortError'){
                    console.log('Fetch Aborted');
                }else{
                setisPending(false);    //If got an error make the loading state to be false
               setError(err.message);      //Else change the state of the error with error message!
                }
            })
        }, 1000);   
        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error }
}


export default useFetch;
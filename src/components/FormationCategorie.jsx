import React, { useMemo,useState,useEffect } from 'react'
import json from '../data.json'
import Formation from './Formation'

function FormationCategorie({categorie}) {
    const dataJson  = useMemo(() =>  json.data.formations,[])
    const [data, setData] = useState([])

    useEffect(() => {
        const res = dataJson.filter((o) => o.categorie === categorie);

        setData(res);
        return () => null;
    }, [categorie,dataJson])
    return (
        <>
             <div className="grid grid-cols-12 gap-6">
                
                {data?.map((data,index) => (
               <div key={index} className="col-span-12 md:col-span-3">
                <Formation  formation={data} />
                   </div>
                   ))}
       </div>
        </>
    )
}

export default FormationCategorie

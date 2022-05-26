import { useEffect, useState } from "react"
import { Top } from "../../controllers/rank/top"

interface rankRequest{
    name: string,
    points: number
}

export default function Rank(){

    const [position, setPosition] = useState<rankRequest[]>([])

    useEffect(() =>{
        const getRank = async () =>{
            const res = await Top()
            setPosition([...res.data])
        }
        getRank()
    },[])

    const listPosition=position.map(
        (c, i) =>
        <div key={i}>
            <h2>{c.name}</h2>
            <p>{c.points}</p>
        </div>
    )

    return(
        <>
            {position.length == 0 && (
                <div>
                    <p>0</p>
                </div>
            )}

            {position.length > 0 && (
                <div>
                    {listPosition}
                </div>
            )}
        </>
    )
    
}
import React, { useContext } from "react";
import {Star} from "react-bootstrap-icons"
import {MealsContext} from "App"

interface IStars{
    rank:number
}
function Stars(props:IStars){

    const [state,setState]=useContext(MealsContext)   


   const makeStars = props.rank !==null ? Math.round(props.rank) : 1
    const StarsArray = []
    for (let i =0 ; i< makeStars;i++){
        StarsArray.push(<Star style={{color:state.starColor}}/>)
    }

    return <div>{StarsArray}</div>

}

export default Stars
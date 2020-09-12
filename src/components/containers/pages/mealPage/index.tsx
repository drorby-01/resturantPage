import React,{useState,useContext} from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import {MealsContext} from "App"
import Meal from "components/ui-components/meal"
interface Meal{

    name:string,
    description:string,
    image:string,
    rank:number
}



function MealPage(){
    const [getData,setData] = useContext(MealsContext)
    const meal:Meal= {name:"",description:"",image:"",rank:1}
    const [state, setstate] = useState(meal)
    

    function addMeal(){
        if(state.name === "" &&
           state.description === "" &&
            state.image === ""
          )
          return 
        setData({...getData,meals:[...getData.meals,state]})
    }

    return <>
    <Form>
    <Form.Group controlId="formBasicEmail">
    <Form.Label>name</Form.Label>
    <Form.Control type="text" placeholder="Enter Meal Name" 
    onChange={(e)=>setstate({...state,name:e.target.value})}
    />
    <Form.Label>description</Form.Label>
    <Form.Control as="textarea" 
    onChange={(e)=>{
        setstate({...state,description:e.target.value})
    }}/>
    <Form.Label>image</Form.Label>
    <Form.Control type="url" onChange={(e)=>setstate({...state,image:e.target.value})}/>
    <Form.Label>rank</Form.Label>
    <Form.Control type="number" onChange={(e)=>setstate({...state,rank:Number(e.target.value)})} />
  </Form.Group>
     <Button variant="primary" onClick={addMeal} >
       Add Meal 
    </Button>
  </Form>
    </>
}

export default MealPage
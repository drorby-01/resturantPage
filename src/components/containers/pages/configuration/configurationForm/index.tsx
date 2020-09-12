import React,{useContext, useState} from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/esm/Button"

import {MealsContext} from "App"


interface IConfiguration{
    heigth:number,
    width:number,
    starColor:string
}



function ConfigurationForm(){

    const configuration:IConfiguration ={heigth:300,width:350,starColor:"black"} 
    const [getConfiguration,setConfiguration] =useState(configuration)
    const [state,setState] = useContext(MealsContext)

    
    return <>
    <Form>
    <Form.Group controlId="formBasicEmail">
    <Form.Label>Image Heighet</Form.Label>
    <Form.Control type="number" placeholder={"Enter image heigth"} onChange={(e)=>{setConfiguration({...getConfiguration,heigth:Number(e.target.value)})}}
     />
    <Form.Label>Image Width</Form.Label>
    <Form.Control type="number" placeholder={"Enter image width"} onChange={(e)=>{setConfiguration({...getConfiguration,width:Number(e.target.value)})}}/>
    <Form.Label>StarColor</Form.Label>
    <Form.Control type="text" placeholder="Enter a color" onChange={(e)=>{setConfiguration({...getConfiguration,starColor:e.target.value})}}/>
  </Form.Group>
  <Button variant="success" onClick={(e)=>{setState({...state,...getConfiguration})}}>save</Button>
  </Form>
    </>
}

export default ConfigurationForm
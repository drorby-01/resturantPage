import React, { useContext } from "react"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { MealsContext } from "App"
import Stars from "./stars"
interface IMeal {
    name: string;
    description: string;
    image: string;
    action: Function;
    actionTitle: string,
    cls: string,
    rating:number
}

export default function Meal(props: IMeal) {
    const [state, setState] = useContext(MealsContext)
    
    // we will change it next lesson
    function addMeal() {
        setState({ ...state, orders: [...state.orders, props] })
    }

    return (
        <Card className="col-lg-4">
            <Card.Img variant="top" src={props.image} style={{height:state.height,width:state.width}}  />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Button variant={props.cls || "primary"} onClick={addMeal}>{props.actionTitle}</Button>
            </Card.Body>
            <Stars rank={props.rating} ></Stars>
        </Card>
    )
}
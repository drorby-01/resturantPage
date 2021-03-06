import React, { useContext } from "react"
import { MealsContext } from "App"
import Meal from "components/ui-components/meal"
import Badge from "react-bootstrap/Badge"


export default function OrdersPage() {
    const [state, setState] = useContext(MealsContext)
    const { orders } = state;
    function getTotalCal() {
        const total = orders.reduce((total: number, order: any) => {
            console.log(parseInt(order.calories));
            if (isNaN(parseInt(order.calories))) return total;
            return total + parseInt(order.calories)
        }, 0)
        return total
    }
    return <div>
        <h1 className="jumbotron" > Orders </h1>
        <h2> Total Price:  <Badge variant="secondary">{getTotalCal()} Cal</Badge></h2>

        <div>
            {
                orders.map((meal: any) => { return <Meal  {...meal} cls="danger" actionTitle="Remove" /> })
            }
        </div>
    </div>
}
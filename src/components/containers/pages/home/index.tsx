import React, { useContext, useEffect } from "react"
import { MealsContext } from "App"
import axios from "axios"
import Meal from "components/ui-components/meal";

export default function HomePage() {
    const [state, setState] = useContext(MealsContext)


    async function getRecipesApi() {
        try {
            const result = await axios.get("http://localhost:5200/meals");
            setState({ ...state, meals: [...state.meals, ...result.data] })
        }
        catch (ex) { }
    }

    useEffect(() => {
        getRecipesApi()
    }, [])
    return <div className="row">
        {
            state.meals.map((meal: any) => { return <Meal actionTitle="Order Now" {...meal} /> })
        }
    </div>
}
import { Fragment } from "react/cjs/react.production.min"
import AvailableMeals from "./AvailableMeals"
import MealsSummary from "./MealsSummary"

const Meals = () =>{
    return(
        <Fragment>
            <MealsSummary />
            <AvailableMeals />
        </Fragment>
    )
}

export default Meals;
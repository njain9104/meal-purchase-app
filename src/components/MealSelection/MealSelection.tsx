import { Meals } from "../../apiMocks/getMeals";
import { useMealContext } from "../../context/MealContext";
import {
  PassengerIds,
  PassengerSelections,
  useOrderContext,
} from "../../context/OrderContext";
import PlusIcon from "../../icons/PlusIcon";
import { getDrinkKey } from "../MealMenu/sections/menu_items/ItemFooter";
import Accordion from "../core/accordion/Accordion";
import RadioGroup from "../core/radio/RadioGroup";
import classes from "./MealSelection.module.css";

const getTotalPrice = (
  passengerSelections: PassengerSelections,
  meals: Meals
) => {
  let price = 0;

  Object.values(passengerSelections).forEach((ps) => {
    if (ps.meals.size > 0) {
      meals.forEach((meal) => {
        if (ps.meals.has(meal.id)) {
          price += meal.price;
          meal.drinks.forEach((drink) => {
            if (ps.drinks.has(getDrinkKey(meal.id, drink.id)))
              price += drink.price;
          });
        }
      });
    }
  });

  return price.toFixed(2);
};

const MealSelection = () => {
  const { updateCurrentPassenger, currentPassenger, passengerSelections } =
    useOrderContext();
  const { mealItemsResponse } = useMealContext();

  const totalPrice = getTotalPrice(
    passengerSelections,
    mealItemsResponse.meals
  );

  return (
    <div>
      <div>
        <span>
          <PlusIcon />
        </span>
        <span>Select Meal</span>
      </div>
      <Accordion>
        <Accordion.Header>
          <span className={classes.flightDetailsHeader}>
            <div>Riga - St PetersBurgh</div>
            <div>Flight Duration 3hr 40min</div>
          </span>
        </Accordion.Header>
        <Accordion.Body>
          <RadioGroup
            name="passengers"
            options={[
              {
                name: PassengerIds.psg1,
                label: "Adult Passenger 1",
                checked: currentPassenger === PassengerIds.psg1,
              },
              {
                name: PassengerIds.psg2,
                label: "Adult Passenger 2",
                checked: currentPassenger === PassengerIds.psg2,
              },
            ]}
            onChange={(name) => {
              updateCurrentPassenger(name as PassengerIds);
            }}
            className={classes.passengersSelection}
          />
        </Accordion.Body>
      </Accordion>
      <div>Total Price for all passengers: {totalPrice}</div>
    </div>
  );
};

export default MealSelection;

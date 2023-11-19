import { Meals } from "../../apiMocks/getMeals";
import { useMealContext } from "../../context/MealContext";
import {
  PassengerIds,
  PassengerSelections,
  useOrderContext,
} from "../../context/OrderContext";
import PlusIcon from "../../icons/PlusIcon";
import { getDrinkKey } from "../../utils";
import Accordion from "../core/accordion/Accordion";
import RadioGroup from "../core/radio/RadioGroup";
import classes from "./MealSelection.module.css";

const FLIGHT_DETAILS = {
  name: "Riga - St PetersBurgh",
  duration: "Flight Duration 3hr 40min",
};

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
      <div className={classes.header}>
        <span>
          <PlusIcon />
        </span>
        <span>Select Meal</span>
      </div>
      <Accordion className={classes.passengerDetailsContainer}>
        <Accordion.Header>
          <span className={classes.flightDetailsHeader}>
            <div className={classes.flightName}>{FLIGHT_DETAILS.name}</div>
            <div className={classes.flightDuration}>
              {FLIGHT_DETAILS.duration}
            </div>
          </span>
        </Accordion.Header>
        <Accordion.Body>
          <RadioGroup
            name="passengers"
            options={[
              {
                name: PassengerIds.psg1,
                label:
                  passengerSelections[PassengerIds.psg1].meals.size > 0
                    ? "Adult Passenger 1 (Selected)"
                    : "Adult Passenger 1",
                checked: currentPassenger === PassengerIds.psg1,
              },
              {
                name: PassengerIds.psg2,
                label:
                  passengerSelections[PassengerIds.psg2].meals.size > 0
                    ? "Adult Passenger 2 (Selected)"
                    : "Adult Passenger 2",

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
      <div>
        Total Price for all passengers: <strong>{totalPrice}</strong>
      </div>
    </div>
  );
};

export default MealSelection;

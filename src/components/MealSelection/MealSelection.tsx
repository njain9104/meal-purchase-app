import { PassengerIds, useOrderContext } from "../../context/OrderContext";
import PlusIcon from "../../icons/PlusIcon";
import Accordion from "../core/accordion/Accordion";
import RadioGroup from "../core/radio/RadioGroup";
import classes from "./MealSelection.module.css";

const MealSelection = () => {
  const { updateCurrentPassenger, currentPassenger } = useOrderContext();

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
      <div>Total Price for all passengers</div>
    </div>
  );
};

export default MealSelection;

import PlusIcon from "../../icons/PlusIcon";
import Accordion from "../core/accordion/Accordion";
import classes from "./MealSelection.module.css";

const MealSelection = () => {
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
          <div>Adult Passenger 1</div>
          <div>Adult Passender 2</div>
        </Accordion.Body>
      </Accordion>
    </div>
  );
};

export default MealSelection;

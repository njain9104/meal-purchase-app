import { FC } from "react";
import { useOrderContext } from "../../../../context/OrderContext";
import { getDrinkKey } from "../../../../utils";
import { MenuItemProps } from "./MenuItems";
import classes from "./MenuItems.module.css";

const KeyValuePair: FC<{ name: string; value: string }> = ({ name, value }) => {
  return (
    <div>
      <span>
        <strong>{name}:</strong>{" "}
      </span>
      <span>{value}</span>
    </div>
  );
};

const ItemDetails: FC<MenuItemProps> = ({ meal }) => {
  const {
    currentPassengerSelection: { drinks },
  } = useOrderContext();

  const selectedDrink = meal.drinks.find((drink) =>
    drinks.has(getDrinkKey(meal.id, drink.id))
  );

  return (
    <div className={classes.menuDetailsContainer}>
      <div className={classes.mealTitle}>{meal.title}</div>
      <div className={classes.mealDetails}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quod
        saepe
      </div>
      {meal.starter ? (
        <KeyValuePair name="Starter" value={meal.starter} />
      ) : null}
      {meal.desert ? <KeyValuePair name="Dessert" value={meal.desert} /> : null}
      {selectedDrink ? (
        <KeyValuePair name="Selected Drink" value={selectedDrink.title} />
      ) : null}
    </div>
  );
};

export default ItemDetails;

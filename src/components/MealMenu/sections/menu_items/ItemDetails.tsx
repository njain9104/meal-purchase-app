import { FC } from "react";
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
      <KeyValuePair name="Selected Drink" value={meal.drinks[0].title} />
    </div>
  );
};

export default ItemDetails;

import { FC } from "react";
import CheckboxGroup from "../../../core/checkbox/CheckboxGroup";
import RadioGroup from "../../../core/radio/RadioGroup";
import { MenuItemProps } from "./MenuItems";
import classes from "./MenuItems.module.css";

const Drinks: FC<MenuItemProps> = ({ meal }) => {
  return (
    <RadioGroup
      options={meal.drinks.map((drink) => {
        return { name: `${meal.id}-${drink.id}`, label: drink.title };
      })}
      name="drink"
    />
  );
};

const Price: FC<MenuItemProps> = ({ meal }) => {
  return (
    <div className={classes.mealPriceContainer}>
      <div className={classes.mealPrice}>{meal.price}</div>
      <CheckboxGroup
        options={[
          {
            name: `select-${meal.id}`,
            label: "Select",
            checkedLabel: "Selected",
          },
        ]}
        onChange={() => {
          //   const v = values[0];
        }}
      />
    </div>
  );
};

const ItemFooter: FC<MenuItemProps> = ({ meal }) => {
  return (
    <div className={classes.mealFooterContainer}>
      <Drinks meal={meal} />
      <Price meal={meal} />
    </div>
  );
};

export default ItemFooter;

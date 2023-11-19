import { FC } from "react";
import { useOrderContext } from "../../../../context/OrderContext";
import CheckboxGroup from "../../../core/checkbox/CheckboxGroup";
import RadioGroup from "../../../core/radio/RadioGroup";
import { MenuItemProps } from "./MenuItems";
import classes from "./MenuItems.module.css";

export const getDrinkKey = (mealId: string, drinkId: string) => {
  return `${mealId}-${drinkId}`;
};

const Drinks: FC<MenuItemProps> = ({ meal }) => {
  const { currentPassengerSelection, onSelectDrink } = useOrderContext();

  return (
    <RadioGroup
      options={meal.drinks.map((drink) => {
        const key = getDrinkKey(meal.id, drink.id);
        return {
          name: key,
          label: drink.title,
          checked: currentPassengerSelection.drinks.has(key),
        };
      })}
      onChange={(name) => {
        onSelectDrink(
          [name],
          meal.drinks
            .filter((drink) => getDrinkKey(meal.id, drink.id) !== name)
            .map((drink) => getDrinkKey(meal.id, drink.id))
        );
      }}
      name="drink"
    />
  );
};

const getPrice = (meal: MenuItemProps["meal"], drinks: Set<string>) => {
  let price = meal.price;
  meal.drinks.forEach((drink) => {
    if (drinks.has(getDrinkKey(meal.id, drink.id))) {
      price += drink.price;
    }
  });
  return price.toFixed(2);
};

const Price: FC<MenuItemProps> = ({ meal }) => {
  const { currentPassengerSelection, onSelectMeal } = useOrderContext();
  const price = getPrice(meal, currentPassengerSelection.drinks);

  return (
    <div className={classes.mealPriceContainer}>
      <div className={classes.mealPrice}>{price}</div>
      <CheckboxGroup
        options={[
          {
            name: `select-${meal.id}`,
            label: "Select",
            checkedLabel: "Selected",
            checked: currentPassengerSelection.meals.has(meal.id),
          },
        ]}
        onChange={(selectedValues, unselectedValues) => {
          const selVal = selectedValues.map((v) => v.split("-")[1]);
          const unSelVal = unselectedValues.map((v) => v.split("-")[1]);
          onSelectMeal(selVal, unSelVal);
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

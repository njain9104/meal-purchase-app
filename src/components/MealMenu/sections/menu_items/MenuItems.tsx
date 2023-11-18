import { FC } from "react";
import { Meals } from "../../../../apiMocks/getMeals";
import { useMealContext } from "../../../../context/MealContext";
import Section from "../../../core/section/Section";
import ItemDetails from "./ItemDetails";
import ItemFooter from "./ItemFooter";
import classes from "./MenuItems.module.css";

export type MenuItemProps = {
  meal: Meals[0];
};

const MenuItem: FC<MenuItemProps> = ({ meal }) => {
  return (
    <Section className={classes.menuItemContainer}>
      <img src={meal.img} className={classes.mealImg} />
      <div>
        <ItemDetails meal={meal} />
        <ItemFooter meal={meal} />
      </div>
    </Section>
  );
};

const MenuItems = () => {
  const {
    mealItemsResponse: { meals },
  } = useMealContext();

  return (
    <Section className={classes.menuItemsContainer}>
      {meals.map((meal) => (
        <MenuItem key={meal.id} meal={meal} />
      ))}
    </Section>
  );
};

export default MenuItems;

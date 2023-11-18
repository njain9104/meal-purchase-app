import { FC } from "react";
import { Meals } from "../../../apiMocks/getMeals";
import { useMealContext } from "../../../context/MealContext";
import CheckboxGroup from "../../core/checkbox/CheckboxGroup";
import RadioGroup from "../../core/radio/RadioGroup";
import Section from "../../core/section/Section";
import classes from "./MenuItems.module.css";

type MenuItemProps = {
  meal: Meals[0];
};

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

const Details: FC<MenuItemProps> = ({ meal }) => {
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

const Footer: FC<MenuItemProps> = ({ meal }) => {
  return (
    <div className={classes.mealFooterContainer}>
      <RadioGroup
        options={meal.drinks.map((drink) => {
          return { name: `${meal.id}-${drink.id}`, label: drink.title };
        })}
        name="drink"
      />
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
        />
      </div>
    </div>
  );
};

const MenuItem: FC<MenuItemProps> = ({ meal }) => {
  return (
    <Section className={classes.menuItemContainer}>
      <img src={meal.img} className={classes.mealImg} />
      <div>
        <Details meal={meal} />
        <Footer meal={meal} />
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

import { FC } from "react";
import CheckboxGroup from "../../core/checkbox/CheckboxGroup";
import RadioGroup from "../../core/radio/RadioGroup";
import Section from "../../core/section/Section";
import classes from "./MenuItems.module.css";

const meals = [
  {
    id: "meal1",
    title: "3 course chicken",
    starter: "Lorem Ipsum",
    desert: "Cake",
    price: 9.99,
    labels: ["chicken", "breakfast"],
    img: "https://source.unsplash.com/XaDsH-O2QXs",
    drinks: [
      {
        id: "drink-1",
        title: "Vine",
        price: 4.99,
      },
      {
        id: "drink-2",
        title: "Juice",
        price: 5.99,
      },
      {
        id: "drink-3",
        title: "Beer",
        price: 6.99,
      },
    ],
  },
  {
    id: "meal2",
    title: "3 course Beef",
    starter: "Lorem Ipsum",
    desert: "Cake",
    price: 19.99,
    labels: ["beef"],
    img: "https://source.unsplash.com/auIbTAcSH6E",
    drinks: [
      {
        id: "drink-1",
        title: "Vine",
        price: 4.99,
      },
      {
        id: "drink-2",
        title: "Juice",
        price: 5.99,
      },
      {
        id: "drink-3",
        title: "Beer",
        price: 6.99,
      },
    ],
  },
  {
    id: "meal3",
    title: "3 course Vegetarian",
    starter: "Lorem Ipsum",
    desert: "Cake",
    price: 79.99,
    labels: ["vegetarian"],
    img: "https://source.unsplash.com/EvoIiaIVRzU",
    drinks: [
      {
        id: "drink-1",
        title: "Vine",
        price: 4.99,
      },
      {
        id: "drink-2",
        title: "Juice",
        price: 5.99,
      },
      {
        id: "drink-3",
        title: "Beer",
        price: 6.99,
      },
    ],
  },
  {
    id: "meal4",
    title: "3 course Seafood",
    starter: "Lorem Ipsum",
    desert: "Cake",
    price: 49.99,
    labels: ["seafood"],
    img: "https://source.unsplash.com/awj7sRviVXo",
    drinks: [
      {
        id: "drink-1",
        title: "Vine",
        price: 4.99,
      },
      {
        id: "drink-2",
        title: "Juice",
        price: 5.99,
      },
      {
        id: "drink-3",
        title: "Beer",
        price: 6.99,
      },
    ],
  },
  {
    id: "meal5",
    title: "3 course Pork",
    starter: "Lorem Ipsum",
    desert: "Cake",
    price: 39.99,
    labels: ["pork"],
    img: "https://source.unsplash.com/XPvhzVIeETM",
    drinks: [
      {
        id: "drink-1",
        title: "Vine",
        price: 4.99,
      },
      {
        id: "drink-2",
        title: "Juice",
        price: 5.99,
      },
      {
        id: "drink-3",
        title: "Beer",
        price: 6.99,
      },
    ],
  },
  {
    id: "meal6",
    title: "3 course Kids",
    starter: "Lorem Ipsum",
    desert: "Cake",
    price: 29.99,
    labels: ["kids", "breakfast"],
    img: "https://source.unsplash.com/PLyJqEJVre0",
    drinks: [
      {
        id: "drink-1",
        title: "Vine",
        price: 4.99,
      },
      {
        id: "drink-2",
        title: "Juice",
        price: 5.99,
      },
      {
        id: "drink-3",
        title: "Beer",
        price: 6.99,
      },
    ],
  },
  {
    id: "meal7",
    title: "3 course Chicken 2",
    starter: "Lorem Ipsum",
    desert: "Cake",
    price: 19.99,
    labels: ["chicken"],
    img: "https://source.unsplash.com/N0u8bLrB_-g",
    drinks: [
      {
        id: "drink-1",
        title: "Vine",
        price: 4.99,
      },
      {
        id: "drink-2",
        title: "Juice",
        price: 5.99,
      },
      {
        id: "drink-3",
        title: "Beer",
        price: 6.99,
      },
    ],
  },
];

type MenuItemProps = {
  meal: (typeof meals)[0];
};

const KeyValuePair: FC<{ name: string; value: string }> = ({ name, value }) => {
  return (
    <div>
      <span>{name}: </span>
      <span>{value}</span>
    </div>
  );
};

const Details: FC<MenuItemProps> = ({ meal }) => {
  return (
    <div>
      <div>{meal.title}</div>
      <div>
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
          return { name: drink.id, label: drink.title };
        })}
        name="drink"
      />
      <div className={classes.mealPriceContainer}>
        <div className={classes.mealPrice}>{meal.price}</div>
        <CheckboxGroup
          options={[
            { name: "select", label: "Select", checkedLabel: "Selected" },
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
  return (
    <Section className={classes.menuItemsContainer}>
      {meals.map((meal) => (
        <MenuItem key={meal.id} meal={meal} />
      ))}
    </Section>
  );
};

export default MenuItems;

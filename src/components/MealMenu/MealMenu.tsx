import { useEffect } from "react";
import { useMealContext } from "../../context/MealContext";
import Panel from "../core/panel/Panel";
import classes from "./MealMenu.module.css";
import MealFilters from "./sections/MealFilters";
import MealPagination from "./sections/MealPagination";
import MenuItems from "./sections/MenuItems";

const MealMenu = () => {
  const { fetchMealItems } = useMealContext();

  useEffect(() => {
    fetchMealItems();
  }, []);

  return (
    <Panel className={classes.mealMenuContainer}>
      <MealFilters />
      <MenuItems />
      <MealPagination />
    </Panel>
  );
};

export default MealMenu;

import { useEffect } from "react";
import { useMealContext } from "../../context/MealContext";
import Loader from "../core/loader/Loader";
import Panel from "../core/panel/Panel";
import classes from "./MealMenu.module.css";
import MealFilters from "./sections/MealFilters";
import MealPagination from "./sections/MealPagination";
import MenuItems from "./sections/menu_items/MenuItems";

const MealMenu = () => {
  const { fetchMealItems, mealItemsResponse } = useMealContext();

  useEffect(() => {
    fetchMealItems({});
  }, []);

  return (
    <Panel className={classes.mealMenuContainer}>
      {mealItemsResponse.status === "LOADING" ? <Loader /> : null}
      <MealFilters />
      <MenuItems />
      <MealPagination />
    </Panel>
  );
};

export default MealMenu;

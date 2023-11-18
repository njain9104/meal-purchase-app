import Panel from "../core/panel/Panel";
import classes from "./MealMenu.module.css";
import MealFilters from "./sections/MealFilters";
import MenuItems from "./sections/MenuItems";
import Pagination from "./sections/Pagination";

const MealMenu = () => {
  return (
    <Panel className={classes.mealMenuContainer}>
      <MealFilters />
      <MenuItems />
      <Pagination />
    </Panel>
  );
};

export default MealMenu;

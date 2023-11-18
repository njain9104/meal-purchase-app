import Panel from "../core/panel/Panel";
import MealFilters from "./sections/MealFilters";
import MenuItems from "./sections/MenuItems";
import Pagination from "./sections/Pagination";

const MealMenu = () => {
  return (
    <Panel>
      <MealFilters />
      <MenuItems />
      <Pagination />
    </Panel>
  );
};

export default MealMenu;

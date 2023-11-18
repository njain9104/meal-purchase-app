import MealFilters from "./sections/MealFilters";
import MenuItems from "./sections/MenuItems";
import Pagination from "./sections/Pagination";

const MealMenu = () => {
  return (
    <div>
      <MealFilters />
      <MenuItems />
      <Pagination />
    </div>
  );
};

export default MealMenu;

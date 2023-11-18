import classes from "./App.module.css";
import MealMenu from "./components/MealMenu/MealMenu";
import MealSelection from "./components/MealSelection/MealSelection";

const App = () => {
  return (
    <main>
      <div className={classes.mealsContainer}>
        <MealMenu />
        <MealSelection />
      </div>
    </main>
  );
};

export default App;

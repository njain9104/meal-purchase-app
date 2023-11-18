import "./App.module.css";
import MealMenu from "./components/MealMenu/MealMenu";
import MealSelection from "./components/MealSelection/MealSelection";

const App = () => {
  return (
    <main>
      <div>
        <MealMenu />
        <MealSelection />
      </div>
    </main>
  );
};

export default App;

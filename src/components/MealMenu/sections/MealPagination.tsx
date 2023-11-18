import { useMealContext } from "../../../context/MealContext";
import RadioGroup from "../../core/radio/RadioGroup";
import Section from "../../core/section/Section";
import classes from "./MealPagination.module.css";

const MealPagination = () => {
  const { fetchMealItems } = useMealContext();

  const onChange = (name: string) => {
    fetchMealItems(Number(name));
  };

  return (
    <Section className={classes.paginationContainer}>
      <RadioGroup
        options={[
          { name: "1", label: "1", checked: true },
          { name: "2", label: "2" },
          { name: "3", label: "3" },
        ]}
        name="pagination"
        onChange={onChange}
      />
    </Section>
  );
};

export default MealPagination;

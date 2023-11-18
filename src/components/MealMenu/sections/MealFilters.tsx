import { useMealContext } from "../../../context/MealContext";
import CheckboxGroup from "../../core/checkbox/CheckboxGroup";
import Section from "../../core/section/Section";
import classes from "./MenuFilters.module.css";

const MealFilters = () => {
  const { labels, fetchMealItems } = useMealContext();

  const onChange = (filters: string[]) => {
    fetchMealItems({ filters });
  };

  return (
    <Section>
      <CheckboxGroup
        options={labels.map((label) => {
          return { name: label.id, label: label.label };
        })}
        className={classes.menuFilter}
        showAllOption
        onChange={onChange}
      />
    </Section>
  );
};

export default MealFilters;

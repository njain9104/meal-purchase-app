import CheckboxGroup from "../../core/checkbox/CheckboxGroup";
import Section from "../../core/section/Section";
import classes from "./MenuFilters.module.css";

const labels = [
  {
    id: "pork",
    label: "Pork",
  },
  {
    id: "seafood",
    label: "Seafood",
  },
  {
    id: "kids",
    label: "Kids",
  },
  {
    id: "chicken",
    label: "Chicken",
  },
  {
    id: "beef",
    label: "Beef",
  },
  {
    id: "vegetarian",
    label: "Vegetarian",
  },
  {
    id: "breakfast",
    label: "Breakfast",
  },
];

const MealFilters = () => {
  return (
    <Section>
      <CheckboxGroup
        options={[
          ...labels.map((label) => {
            return { name: label.id, label: label.label };
          }),
        ]}
        className={classes.menuFilter}
        showAllOption
      />
    </Section>
  );
};

export default MealFilters;

import ChipGroup from "../../core/chip/ChipGroup";
import Section from "../../core/section/Section";

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
      <ChipGroup
        options={labels.map((label) => {
          return { name: label.id, label: label.label };
        })}
      />
    </Section>
  );
};

export default MealFilters;

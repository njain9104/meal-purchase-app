import { useMemo } from "react";
import { PAGE_SIZE } from "../../../apiMocks/getMeals";
import { useMealContext } from "../../../context/MealContext";
import RadioGroup from "../../core/radio/RadioGroup";
import Section from "../../core/section/Section";
import classes from "./MealPagination.module.css";

const MealPagination = () => {
  const {
    fetchMealItems,
    mealItemsResponse: { totalCount },
  } = useMealContext();

  const onChange = (name: string) => {
    const [, pageNo] = name.split("-");
    fetchMealItems({ pageNo: Number(pageNo) });
  };

  const noOfPages = Math.ceil(totalCount / PAGE_SIZE);

  const options = useMemo(() => {
    return Array(noOfPages)
      .fill("")
      .map((_, index) => {
        return {
          name: `name-${String(index + 1)}`,
          label: String(index + 1),
          checked: index === 0,
        };
      });
  }, [noOfPages]);

  return (
    <Section className={classes.paginationContainer}>
      <RadioGroup options={options} name="pagination" onChange={onChange} />
    </Section>
  );
};

export default MealPagination;

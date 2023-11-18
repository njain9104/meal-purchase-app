import RadioGroup from "../../core/radio/RadioGroup";
import Section from "../../core/section/Section";
import classes from "./Pagination.module.css";

const Pagination = () => {
  return (
    <Section className={classes.paginationContainer}>
      <RadioGroup
        options={[
          { name: "one", label: "1", checked: true },
          { name: "two", label: "2" },
          { name: "three", label: "3" },
        ]}
        name="pagination"
      />
    </Section>
  );
};

export default Pagination;

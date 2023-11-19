export type Meals = (typeof data)["meals"];
export type Labels = (typeof data)["labels"];

const data = {
  labels: [
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
  ],
  meals: [
    {
      id: "meal1",
      title: "3 course chicken",
      starter: "Lorem Ipsum",
      desert: "Cake",
      price: 9.99,
      labels: ["chicken", "breakfast"],
      img: "https://source.unsplash.com/XaDsH-O2QXs",
      drinks: [
        {
          id: "drink-1",
          title: "Vine",
          price: 4.99,
        },
        {
          id: "drink-2",
          title: "Juice",
          price: 5.99,
        },
        {
          id: "drink-3",
          title: "Beer",
          price: 6.99,
        },
      ],
    },
    {
      id: "meal2",
      title: "3 course Beef",
      starter: "Lorem Ipsum",
      desert: "Cake",
      price: 19.99,
      labels: ["beef"],
      img: "https://source.unsplash.com/auIbTAcSH6E",
      drinks: [
        {
          id: "drink-1",
          title: "Vine",
          price: 4.99,
        },
        {
          id: "drink-2",
          title: "Juice",
          price: 5.99,
        },
        {
          id: "drink-3",
          title: "Beer",
          price: 6.99,
        },
      ],
    },
    {
      id: "meal3",
      title: "3 course Vegetarian",
      starter: "Lorem Ipsum",
      desert: "Cake",
      price: 79.99,
      labels: ["vegetarian"],
      img: "https://source.unsplash.com/EvoIiaIVRzU",
      drinks: [
        {
          id: "drink-1",
          title: "Vine",
          price: 4.99,
        },
        {
          id: "drink-2",
          title: "Juice",
          price: 5.99,
        },
        {
          id: "drink-3",
          title: "Beer",
          price: 6.99,
        },
      ],
    },
    {
      id: "meal4",
      title: "3 course Seafood",
      starter: "Lorem Ipsum",
      desert: "Cake",
      price: 49.99,
      labels: ["seafood"],
      img: "https://source.unsplash.com/awj7sRviVXo",
      drinks: [
        {
          id: "drink-1",
          title: "Vine",
          price: 4.99,
        },
        {
          id: "drink-2",
          title: "Juice",
          price: 5.99,
        },
        {
          id: "drink-3",
          title: "Beer",
          price: 6.99,
        },
      ],
    },
    {
      id: "meal5",
      title: "3 course Pork",
      starter: "Lorem Ipsum",
      desert: "Cake",
      price: 39.99,
      labels: ["pork"],
      img: "https://source.unsplash.com/XPvhzVIeETM",
      drinks: [
        {
          id: "drink-1",
          title: "Vine",
          price: 4.99,
        },
        {
          id: "drink-2",
          title: "Juice",
          price: 5.99,
        },
        {
          id: "drink-3",
          title: "Beer",
          price: 6.99,
        },
      ],
    },
    {
      id: "meal6",
      title: "3 course Kids",
      starter: "Lorem Ipsum",
      desert: "Cake",
      price: 29.99,
      labels: ["kids", "breakfast"],
      img: "https://source.unsplash.com/PLyJqEJVre0",
      drinks: [
        {
          id: "drink-1",
          title: "Vine",
          price: 4.99,
        },
        {
          id: "drink-2",
          title: "Juice",
          price: 5.99,
        },
        {
          id: "drink-3",
          title: "Beer",
          price: 6.99,
        },
      ],
    },
    {
      id: "meal7",
      title: "3 course Chicken 2",
      starter: "Lorem Ipsum",
      desert: "Cake",
      price: 19.99,
      labels: ["chicken"],
      img: "https://source.unsplash.com/N0u8bLrB_-g",
      drinks: [
        {
          id: "drink-1",
          title: "Vine",
          price: 4.99,
        },
        {
          id: "drink-2",
          title: "Juice",
          price: 5.99,
        },
        {
          id: "drink-3",
          title: "Beer",
          price: 6.99,
        },
      ],
    },
  ],
};

export const PAGE_SIZE = 3;

const getMeals = async ({
  pageNo,
  filters = [],
}: {
  pageNo: number;
  filters?: string[];
}): Promise<{
  pageNo: number;
  totalCount: number;
  data: Meals;
  labels: Labels;
}> => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, 1500);
  });

  let meals = [...data.meals];
  if (filters.length > 0) {
    const filterSet = new Set(filters);
    if (!filterSet.has("all")) {
      meals = meals.filter((meal) => {
        return meal.labels.some((label) => filterSet.has(label));
      });
    }
  }

  return new Promise((resolve) => {
    const response = {
      pageNo,
      totalCount: meals.length,
      data: meals.slice(
        (pageNo - 1) * PAGE_SIZE,
        (pageNo - 1) * PAGE_SIZE + PAGE_SIZE
      ),
      labels: data.labels,
    };
    resolve(response);
  });
};

export default getMeals;

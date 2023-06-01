import Pagination from "./Pagination";

export default {
  title: "Base/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  args: {
    hasPrevious: true,
    minPageIndex: 6,
    currentPageIndex: 8,
    maxPageIndex: 10,
    hasNext: true,
    totalPageNumber: 15,
    onClickPage: (pageIndex) => {
      console.log(pageIndex);
    },
  },
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Base = {};

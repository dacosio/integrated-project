import React from "react";
import ListingDetailView from "./ListingDetail.view";

const ListingDetail = () => {
  const item = {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur quam et urna tincidunt, aliquet sagittis odio tempor. Curabitur pellentesque interdum mauris pretium tincidunt.",
    images: [
      "https://picsum.photos/id/10/200/300",
      "https://picsum.photos/id/20/200/300",
      "https://picsum.photos/id/30/200/300",
      "https://picsum.photos/id/40/200/300",
      "https://picsum.photos/id/50/200/300",
    ],
    seller: {
      name: "aishasells",
      location: "Vancouver, British Columbia",
    },
  };

  const generatedProps = {
    // generated props here
    item,
  };
  return <ListingDetailView {...generatedProps} />;
};

export default ListingDetail;

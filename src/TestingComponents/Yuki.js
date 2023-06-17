import React from "react";
import Typography from "../components/base/Typography/Typography";
import SellingItemCard from "../components/base/SellingItemCard/SellingItemCard";
import DescriptionCard from "../components/base/DescriptionCard/DescriptionCard";

const Yuki = () => {
  return (
    <div>
      <section>
        <h1 style={{ textDecoration: "underline" }}>Yuki</h1>
        <h3>Typography</h3>
        <Typography variant="h1-graphik-bold" color="black">
          h1-graphik-bold
        </Typography>
        <Typography variant="h2-graphik-bold" color="light-blue">
          h2-graphik-bold
        </Typography>
        <Typography variant="h3-graphik-bold" color="gray">
          h3-graphik-bold
        </Typography>
        <Typography variant="h4-graphik-bold" color="yellow">
          h4-graphik-bold
        </Typography>
        <Typography variant="body-1-regular" color="blue">
          body-1-regular
        </Typography>
        <Typography variant="body-2-regular" color="dark-blue">
          body-2-regular
        </Typography>
        <Typography variant="body-3-regular" color="light-gray">
          body-3-regular
        </Typography>
        <Typography variant="body-4-regular" color="light-blue">
          body-4-regular
        </Typography>

        <h3>Selling Detail Card</h3>
        <div>
          <SellingItemCard
            source="https://picsum.photos/200"
            itemName="Item Name"
            dateApproved="June 10, 2023"
            quantity="1"
            price="11"
          />
        </div>

        <hr />
      </section>
    </div>
  );
};

export default Yuki;

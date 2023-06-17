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
        <Typography className="h1-graphik-bold">h1-graphik-bold</Typography>
        <Typography className="h2-graphik-bold">h2-graphik-bold</Typography>
        <Typography className="h3-graphik-bold">h3-graphik-bold</Typography>
        <Typography className="h4-graphik-bold">h4-graphik-bold</Typography>
        <Typography className="body-1-regular">body-1-regular</Typography>
        <Typography className="body-2-regular">body-2-regular</Typography>
        <Typography className="body-3-regular">body-3-regular</Typography>
        <Typography className="body-4-regular">body-4-regular</Typography>

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

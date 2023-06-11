import React from "react";
import Typography from "../components/base/Typography/Typography";
import SellingItemCard from "../components/base/SellingItemCard/SellingItemCard";

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
        <Typography className="button-regular">button-regular</Typography>
        <Typography className="color-heading-body-grey">Color: Grey</Typography>
        <Typography className="color-heading-body-black">Color: Black</Typography>
        <Typography className="color-primary-1">Color: primary-1</Typography>
        <Typography className="color-primary-2">Color: primary-2</Typography>
        <Typography className="color-primary-3">Color: primary-3</Typography>
        <Typography className="color-primary-4">Color: primary-4</Typography>
        <Typography className="color-accent-1">Color: accent-1</Typography>
        <Typography className="color-accent-2">Color: accent-2</Typography>
        <Typography className="color-accent-3">Color: accent-3</Typography>
        <Typography className="color-accent-4">Color: accent-4</Typography>
        <div style={{ "background-color": "black" }}>
          <Typography className="color-heading-body-white">
            Color: white
          </Typography>
        </div>
        <Typography className="color-placeholder">placeholder: grey</Typography>

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

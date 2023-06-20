import React from "react";
import Typography from "../components/base/Typography/Typography";
import BuyerContactCard from "../components/base/BuyerContactCard/BuyerContactCard";
import DescriptionCard from "../components/base/DescriptionCard/DescriptionCard"
import MeetUpInfoCard from "../components/base/MeetUpInfoCard/MeetUpInfoCard";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Yuki = () => {
  return (
    <div>
      <section>
        <h1 style={{ textDecoration: "underline" }}>Yuki</h1>
        <h3>Typography</h3>
        <Typography varient="h1-graphik-bold" color="blue">h1-graphik-bold</Typography>
        <Typography varient="h2-graphik-bold" color="black">h2-graphik-bold</Typography>
        <Typography varient="h3-graphik-bold" color="white">h3-graphik-bold</Typography>
        <Typography varient="h4-graphik-bold" color="gray">h4-graphik-bold</Typography>
        <Typography varient="body-1-regular" color="light-gray">body-1-regular</Typography>
        <Typography varient="body-2-regular" color="dark-blue">body-2-regular</Typography>
        <Typography varient="body-3-regular" color="light-blue">body-3-regular</Typography>
        <Typography varient="body-4-regular" color="yellow">body-4-regular</Typography>
        <Typography varient="button-regular"> button-regular </Typography>

        <div>
          <BuyerContactCard
            source="https://picsum.photos/200"
            nameOfBuyer="aishaells"
            contactTel="(+1)000-0000"
            email="aisha@email.com"
          />
        </div>

        <div>
          <DescriptionCard
            onClick={() => console.log("test")}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis no" />
        </div>

        <div>
          <MeetUpInfoCard 
            date="Jun 23, 2023"
            time="14:00"
            location="100 W 49th Ave, Vancouver,
            BC V5Y 2Z6"
          />
        </div>

        <hr />
      </section>
    </div>
  );
};

export default Yuki;

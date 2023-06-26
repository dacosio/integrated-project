import React from "react";
import Typography from "../components/base/Typography/Typography";
import BuyerContactCard from "../components/base/BuyerContactCard/BuyerContactCard";
// import MeetUpInfoCard from "../components/base/MeetUpInfoCard/MeetUpInfoCard";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import SellingItemCard from "../components/base/SellingItemCard/SellingItemCard";
import DescriptionCard from "../components/base/DescriptionCard/DescriptionCard";
import SellerInfoCard from "../components/base/SellerInfoCard/SellerInfoCard";

const Yuki = () => {
  return (
    <div>
      <section>
        <h1 style={{ textDecoration: "underline" }}>Yuki</h1>
        <h3>Typography</h3>

        <Typography variant="h1-graphik-bold" color="blue">h1-graphik-bold</Typography>
        <Typography variant="h2-graphik-bold" color="black">h2-graphik-bold</Typography>
        <Typography variant="h3-graphik-bold" color="white" style={{"backgroundColor": "black"}}>h3-graphik-bold</Typography>
        <Typography variant="h4-graphik-bold" color="gray">h4-graphik-bold</Typography>
        <Typography variant="body-1-medium" color="light-gray">body-1-regular</Typography>
        <Typography variant="body-2-regular" color="dark-blue">body-2-regular</Typography>
        <Typography variant="body-3-regular" color="light-blue">body-3-regular</Typography>
        <Typography variant="body-4-regular" color="yellow">body-4-regular</Typography>
        <Typography variant="button-regular"> button-regular </Typography>
    
        <div>
          <SellingItemCard
            source="https://picsum.photos/200"
            itemName="Item Name"
            dateApproved="June 10, 2023"
            quantity="1"
            price="11"
            nameOfBuyer="aishaells"
            contactTel="(+1)000-0000"
            email="aisha@email.com"
          />
        </div>

        <div>
        <BuyerContactCard 
          source="https://picsum.photos/200"
          nameOfBuyer= "aishasells"
          contactTel="(+1)000=0000"
          email="aisha@email.com"
        />

        </div>

        <div>
          <DescriptionCard
            onClick={() => console.log("test")}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis no" />
        </div>
          
        {/* <div>
          <MeetUpInfoCard 
            date="Jun 23, 2023"
            time="14:00"
            location="100 W 49th Ave, Vancouver,
            BC V5Y 2Z6"
          />
        </div> */}

        <div>
          <SellingItemCard 
            source="https://picsum.photos/200"
            itemName="Banana"
            dateApproved="June 15, 2023"
            price="11"
            quantity="1"
          />
        </div>

        <div>
          <SellerInfoCard 
            source="https://picsum.photos/200"
            username="aishasells"
            location="Vancouver, BC"
          />
        </div>

        <hr />
      </section>
      </div>
  );}

  export default Yuki;
import React from "react";
// import React, { useState } from "react";
import Grid from "../../../components/layout/Grid/Grid";
import SellingItemCard from "../../../components/base/SellingItemCard/SellingItemCard";
import BuyerContactCard from "../../../components/base/BuyerContactCard/BuyerContactCard";
import MeetUpInfoCard from "../../../components/base/MeetUpInfoCard/MeetUpInfoCard";
import Button from "../../../components/base/Button/Button";
import useMediaQuery from "../../../utils/useMediaQuery";

const TransactionDetail = (props) => {
  const isDesktop = useMediaQuery("(min-width: 1440px)");

  return (
    <div style={{ backgroundColor: "var(--bg-gray)", height: "100vh" }}>
      {isDesktop ? (
        <Grid
          rows={1}
          columns={1}
          gap="24px"
          style={{
            padding: "157px",
            justifyContent: "center",
          }}
        >
          <Grid
            rows={1}
            columns={7}
            style={{
              justifyContent: "center",
              gap: "24px",
            }}
          >
            <Grid columns={1} gap="0">
              <SellingItemCard
                source="https://picsum.photos/200"
                itemName="Banana"
                dateApproved="June 15, 2023"
                price="11"
                quantity="1"
              />

              <BuyerContactCard
                source="https://picsum.photos/200"
                nameOfBuyer="aishasells"
                contactTel="(+1)000=0000"
                email="aisha@email.com"
              />
            </Grid>
            <Grid style={{ "grid-column": "-7/-1" }}>
              <MeetUpInfoCard
                date="Jun 23, 2023"
                time="14:00"
                location="100 W 49th Ave, Vancouver,
      BC V5Y 2Z6"
              />
            </Grid>
          </Grid>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="white"
              label="Cancel"
              size="sm"
              style={{ marginRight: ".5rem" }}
            />
            <Button
              variant="yellow"
              label="Complete"
              size="sm"
              style={{ marginRight: ".5rem" }}
            />
          </div>
        </Grid>
      ) : (
        <div style={{ height: "100vh", backgroundColor: "var(--bg-gray)" }}>
          <Grid
            rows={1}
            columns={1}
            gap="20px"
            style={{
              padding: "20px 20px 130px",
              justifyContent: "center",
              backgroundColor: "var(--bg-gray)",
            }}
          >
            <div style={{ paddingTop: "50px" }}>
              <SellingItemCard
                source="https://picsum.photos/200"
                itemName="Banana"
                dateApproved="June 15, 2023"
                price="11"
                quantity="1"
              />
            </div>
            <div>
              <BuyerContactCard
                source="https://picsum.photos/200"
                nameOfBuyer="aishasells"
                contactTel="(+1)000=0000"
                email="aisha@email.com"
              />
            </div>
            <div>
              <MeetUpInfoCard
                date="Jun 23, 2023"
                time="14:00"
                location="100 W 49th Ave, Vancouver,
        BC V5Y 2Z6"
              />
            </div>
            <div style={{ display: "flex", paddingBottom: "20px" }}>
              <Button
                variant="white"
                label="Cancel"
                size="sm"
                style={{ marginRight: ".5rem", width: "100%" }}
              />
              <Button
                variant="yellow"
                label="Complete"
                size="sm"
                style={{ marginLeft: ".5rem", width: "100%" }}
              />
            </div>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default TransactionDetail;

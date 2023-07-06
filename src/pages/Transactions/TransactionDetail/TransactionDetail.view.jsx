import React from "react";
import Grid from "../../../components/layout/Grid/Grid";
import SellingItemCard from "../../../components/base/SellingItemCard/SellingItemCard";
import BuyerContactCard from "../../../components/base/BuyerContactCard/BuyerContactCard";
import MeetUpInfoCard from "../../../components/base/MeetUpInfoCard/MeetUpInfoCard";
import Button from "../../../components/base/Button/Button";
import useMediaQuery from "../../../utils/useMediaQuery";
import BackButton from "../../../components/base/BackButton/BackButton";
import styles from "./transactionDetail.module.css";
import MapLeaflet from "../../../components/module/MapLeaflet/MapLeaflet";
import { orderBy } from "lodash";

const TransactionDetail = (props) => {
  const { orders, navigate } = props;

  const isDesktop = useMediaQuery("(min-width: 1440px)");

  let order = null;
  let dateApproved = null;

  if (orders && orders.length > 0) {
    order = orders[0];
    dateApproved = order.dateApproved ? order.dateApproved.toDate() : null;
  }

  const dateApprovedFormatted = dateApproved
    ? dateApproved.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

  let meetUpDate = "";
  let meetUpTime = "";

  if (order && order.meetUpInfo) {
    const meetUpInfo = new Date(order.meetUpInfo.seconds * 1000);
    meetUpDate = meetUpInfo.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    meetUpTime = meetUpInfo.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  }

  return (
    <div style={{ backgroundColor: "var(--bg-gray)", minHeight: "100vh" }}>
      <div className={styles.backButtonWrapper}>
        <BackButton onClick={() => navigate(-1)} />
      </div>

      {isDesktop ? (
        <Grid
          rows={1}
          columns={1}
          gap="24px"
          style={{
            padding: "3rem 157px 157px",
            justifyContent: "center",
            boxSizing: "border-box",
          }}
        >
          {order && (
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
                  source={order.coverImage}
                  itemName={order.name}
                  dateApproved={dateApprovedFormatted}
                  price={order.price}
                  quantity={order.qtyOrdered}
                />

                <BuyerContactCard
                  source={order.coverImage}
                  nameOfBuyer={order.splitteeName}
                  contactTel={order.splitteeContactNumber}
                  email={order.splitteeEmail}
                />
              </Grid>

              <Grid style={{ gridColumn: "-7/-1" }}>
                <MeetUpInfoCard
                  date={meetUpDate}
                  time={meetUpTime}
                  location={order.meetUpAddress}
                  latitude={order.lat}
                  longitude={order.long}
                />
              </Grid>
            </Grid>
          )}

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="white"
              label="Cancel"
              size="sm"
              style={{ marginRight: ".5rem" }}
              onClick={() => console.log("test")}
            />
            <Button
              variant="yellow"
              label="Complete"
              size="sm"
              style={{ marginRight: ".5rem" }}
              onClick={() => console.log("test")}
            />
          </div>
        </Grid>
      ) : (
        <div style={{ minHeight: "100vh", backgroundColor: "var(--bg-gray)" }}>
          {order && (
            <div style={{ padding: "3rem 20px 130px" }}>
              <div style={{ marginBottom: "20px" }}>
                <SellingItemCard
                  source={order.coverImage}
                  itemName={order.name}
                  dateApproved={dateApprovedFormatted}
                  price={order.price}
                  quantity={order.qtyOrdered}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <BuyerContactCard
                  source={order.coverImage}
                  nameOfBuyer={order.splitteeName}
                  contactTel={order.splitteeContactNumber}
                  email={order.splitteeEmail}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <MeetUpInfoCard
                  date={meetUpDate}
                  time={meetUpTime}
                  location={order.meetUpAddress}
                  latitude={order.lat}
                  longitude={order.long}
                />
              </div>

              <div style={{ display: "flex", paddingBottom: "20px" }}>
                <Button
                  variant="white"
                  label="Cancel"
                  size="sm"
                  style={{ marginRight: ".5rem", width: "100%" }}
                  onClick={() => console.log("test")}
                />
                <Button
                  variant="yellow"
                  label="Complete"
                  size="sm"
                  style={{ marginLeft: ".5rem", width: "100%" }}
                  onClick={() => console.log("test")}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TransactionDetail;

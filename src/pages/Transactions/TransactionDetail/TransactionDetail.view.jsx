import React from "react";
import Grid from "../../../components/layout/Grid/Grid";
import SellingItemCard from "../../../components/base/SellingItemCard/SellingItemCard";
import BuyerContactCard from "../../../components/base/BuyerContactCard/BuyerContactCard";
import MeetUpInfoCard from "../../../components/base/MeetUpInfoCard/MeetUpInfoCard";
import Button from "../../../components/base/Button/Button";
import useMediaQuery from "../../../utils/useMediaQuery";
import BackButton from "../../../components/base/BackButton/BackButton";
import styles from "./transactionDetail.module.css";

const TransactionDetail = (props) => {
  const { order, navigate, handleOnDecline, handleOnAccept, handleOnComplete } =
    props;

  const isDesktop = useMediaQuery("(min-width: 1440px)");

  const dateApprovedFormatted =
    order && order.updatedAt
      ? order.updatedAt.toDate().toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "";

  let meetUpDate = "";
  let meetUpTime = "";

  if (order && order.meetupSchedule) {
    meetUpDate = order.meetupSchedule.toDate().toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    meetUpTime = order.meetupSchedule.toDate().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  }

  return (
    <div style={{ backgroundColor: "var(--bg-gray)", minHeight: "100vh" }}>
      <div className={styles.backButtonWrapper}>
        <BackButton
          onClick={() => navigate("/transaction", { replace: true })}
        />
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
                  source={order.imageUrl}
                  itemName={order.name}
                  dateApproved={dateApprovedFormatted}
                  price={order.price}
                  quantity={order.qtyOrdered}
                />

                <BuyerContactCard
                  label={
                    order.orderStatus === "completed" ? "Sold to" : "Selling to"
                  }
                  source={order.imageUrl}
                  nameOfBuyer={order.splitteeName}
                  contactTel={order.splitteeContactNumber}
                  email={order.splitteeEmail}
                />
              </Grid>

              <Grid style={{ gridColumn: "-7/-1" }}>
                <MeetUpInfoCard
                  date={meetUpDate}
                  time={meetUpTime}
                  location={order.meetupAddress}
                  latitude={order.latitude}
                  longitude={order.longitude}
                />
              </Grid>
            </Grid>
          )}

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {order &&
            (order.orderStatus === "completed" ||
              order.orderStatus === "cancelled") ? (
              <></>
            ) : order && order.orderStatus === "pending" ? (
              <>
                <Button
                  variant="white"
                  label="Decline"
                  size="sm"
                  style={{ marginRight: ".5rem" }}
                  onClick={handleOnDecline}
                />
                <Button
                  variant="yellow"
                  label="Accept"
                  size="sm"
                  style={{ marginRight: ".5rem" }}
                  onClick={handleOnAccept}
                />
              </>
            ) : (
              <>
                <Button
                  variant="white"
                  label="Cancel"
                  size="sm"
                  style={{ marginRight: ".5rem" }}
                  onClick={handleOnDecline}
                />
                <Button
                  variant="yellow"
                  label="Complete"
                  size="sm"
                  style={{ marginRight: ".5rem" }}
                  onClick={handleOnComplete}
                />
              </>
            )}
          </div>
        </Grid>
      ) : (
        <div style={{ minHeight: "100vh", backgroundColor: "var(--bg-gray)" }}>
          {order && (
            <div style={{ padding: "3rem 20px 130px" }}>
              <div style={{ marginBottom: "20px" }}>
                <SellingItemCard
                  source={order.imageUrl}
                  itemName={order.name}
                  dateApproved={dateApprovedFormatted}
                  price={order.price}
                  quantity={order.qtyOrdered}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <BuyerContactCard
                  label={
                    order.orderStatus === "completed" ? "Sold to" : "Selling to"
                  }
                  source={order.imageUrl}
                  nameOfBuyer={order.splitteeName}
                  contactTel={order.splitteeContactNumber}
                  email={order.splitteeEmail}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <MeetUpInfoCard
                  date={meetUpDate}
                  time={meetUpTime}
                  location={order.meetupAddress}
                  latitude={order.latitude}
                  longitude={order.longitude}
                />
              </div>

              <div style={{ display: "flex", paddingBottom: "20px" }}>
                {order &&
                (order.orderStatus === "completed" ||
                  order.orderStatus === "cancelled") ? (
                  <></>
                ) : order && order.orderStatus === "pending" ? (
                  <>
                    <Button
                      variant="white"
                      label="Decline"
                      size="lg"
                      style={{ marginRight: ".5rem" }}
                      onClick={handleOnDecline}
                    />
                    <Button
                      variant="yellow"
                      label="Accept"
                      size="lg"
                      style={{ marginRight: ".5rem" }}
                      onClick={handleOnAccept}
                    />
                  </>
                ) : (
                  <>
                    <Button
                      variant="white"
                      label="Cancel"
                      size="lg"
                      style={{ marginRight: ".5rem" }}
                      onClick={handleOnDecline}
                    />
                    <Button
                      variant="yellow"
                      label="Complete"
                      size="lg"
                      style={{ marginRight: ".5rem" }}
                      onClick={handleOnComplete}
                    />
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TransactionDetail;

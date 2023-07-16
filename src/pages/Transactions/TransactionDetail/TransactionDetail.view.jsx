import React, { useState, useEffect } from "react";
import Grid from "../../../components/layout/Grid/Grid";
import SellingItemCard from "../../../components/base/SellingItemCard/SellingItemCard";
import BuyerContactCard from "../../../components/base/BuyerContactCard/BuyerContactCard";
import MeetUpInfoCard from "../../../components/base/MeetUpInfoCard/MeetUpInfoCard";
import Button from "../../../components/base/Button/Button";
import Card from "../../../components/base/Card/Card";
import useMediaQuery from "../../../utils/useMediaQuery";
import BackButton from "../../../components/base/BackButton/BackButton";
import styles from "./transactionDetail.module.css";
import { userEvent } from "@storybook/testing-library";
import Typography from "../../../components/base/Typography/Typography";

const TransactionDetail = (props) => {
  const {
    user,
    order,
    navigate,
    handleOnDecline,
    handleOnAccept,
    handleOnComplete,
    handleOnCancel,
  } = props;

  const [meetUpDate, setMeetUpDate] = useState();
  const [meetUpTime, setMeetUpTime] = useState();
  const isDesktop = useMediaQuery("(min-width: 1440px)");

  const dateApprovedFormatted =
    order && order.updatedAt
      ? order.updatedAt.toDate().toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "";

  useEffect(() => {
    if (order && order.meetUpInfo) {
      setMeetUpDate(
        new Date(order.meetUpInfo.seconds * 1000).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      );

      setMeetUpTime(
        new Date(order.meetUpInfo.seconds * 1000).toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })
      );
    }
  }, [order]);

  // return { meetUpDate, meetUpTime };

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
            padding: "30px 157px 157px",
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
                  label={
                    order.splitterId === user.uid
                      ? "Selling Details"
                      : "Buying Details"
                  }
                  source={order.imageUrl}
                  alt={order.name}
                  itemName={order.name}
                  dateApproved={dateApprovedFormatted}
                  price={order.price}
                  quantity={order.qty}
                />

                <BuyerContactCard
                  source={
                    order.splitterId === user.uid
                      ? order.splitteeImageUrl
                      : order.splitterImageUrl
                  }
                  alt="profile image"
                  label={
                    order.splitterId === user.uid
                      ? order.orderStatus === "completed"
                        ? "Sold to"
                        : "Selling to"
                      : order.orderStatus === "completed"
                      ? "Bought from"
                      : "Buying from"
                  }
                  nameOfBuyer={
                    order.splitterId === user.uid
                      ? order.splitteeName
                      : order.splitterName
                  }
                  contactTel={
                    order.orderStatus === "pending" ? (
                      <Typography color="error">
                        not available until confirmed
                      </Typography>
                    ) : order.orderStatus === "completed" ? (
                      <Typography>order is completed</Typography>
                    ) : order.orderStatus === "cancelled" ? (
                      <Typography color="error">order is cancelled</Typography>
                    ) : order.splitterId === user.uid ? (
                      order.orderStatus === "confirmed" ? (
                        order.splitteeContactNumber
                      ) : (
                        order.splitterContactNumber
                      )
                    ) : null
                  }
                  email={
                    order.orderStatus === "pending" ? (
                      <Typography color="error">
                        not available until confirmed
                      </Typography>
                    ) : order.orderStatus === "completed" ? (
                      <Typography>order is completed</Typography>
                    ) : order.orderStatus === "cancelled" ? (
                      <Typography color="error">order is cancelled</Typography>
                    ) : order.splitterId === user.uid ? (
                      order.orderStatus === "confirmed" ? (
                        order.splitteeEmail
                      ) : (
                        order.splitterEmail
                      )
                    ) : null
                  }
                />
              </Grid>

              <Grid style={{ gridColumn: "-7/-1" }}>
                <Card noborder nopadding>
                  <MeetUpInfoCard
                    date={meetUpDate}
                    time={meetUpTime}
                    location={order.meetUpAddress}
                    latitude={order.latitude}
                    longitude={order.longitude}
                  />
                </Card>
              </Grid>
            </Grid>
          )}

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {order && order.splitterId === user.uid ? (
              <>
                {order.orderStatus === "completed" ||
                order.orderStatus === "cancelled" ? (
                  <></>
                ) : order.orderStatus === "pending" ? (
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
                  <div>
                    <Button
                      variant="white"
                      label="Cancel"
                      size="sm"
                      style={{ marginRight: ".5rem" }}
                      onClick={handleOnCancel}
                    />
                    <Button
                      variant="yellow"
                      label="Complete"
                      size="sm"
                      style={{ marginRight: ".5rem" }}
                      onClick={handleOnComplete}
                    />
                  </div>
                )}
              </>
            ) : order.orderStatus === "completed" ||
              order.orderStatus === "cancelled" ? (
              <></>
            ) : order.orderStatus === "pending" ? (
              <div>
                <Button
                  variant="white"
                  label="Cancel"
                  size="sm"
                  style={{ marginRight: ".5rem" }}
                  onClick={handleOnDecline}
                />
              </div>
            ) : (
              <div>
                <Button
                  variant="white"
                  label="Cancel"
                  size="sm"
                  style={{ marginRight: ".5rem" }}
                  onClick={handleOnCancel}
                />
                <Button
                  variant="yellow"
                  label="Complete"
                  size="sm"
                  style={{ marginRight: ".5rem" }}
                  onClick={handleOnComplete}
                />
              </div>
            )}
          </div>
        </Grid>
      ) : (
        <div style={{ minHeight: "100vh", backgroundColor: "var(--bg-gray)" }}>
          {order && (
            <div style={{ padding: "3rem 20px 130px" }}>
              <div style={{ marginBottom: "20px" }}>
                <SellingItemCard
                  label={
                    order.splitterId === user.uid
                      ? "Selling Details"
                      : "Buying Details"
                  }
                  source={order.imageUrl}
                  alt={order.name}
                  itemName={order.name}
                  dateApproved={dateApprovedFormatted}
                  price={order.price}
                  quantity={order.qty}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <BuyerContactCard
                  source={
                    order.splitterId === user.uid
                      ? order.splitteeImageUrl
                      : order.splitterImageUrl
                  }
                  alt="profile image"
                  label={
                    order.splitterId === user.uid
                      ? order.orderStatus === "completed"
                        ? "Sold to"
                        : "Selling to"
                      : order.orderStatus === "completed"
                      ? "Bought from"
                      : "Buying from"
                  }
                  nameOfBuyer={
                    order.splitterId === user.uid
                      ? order.splitteeName
                      : order.splitterName
                  }
                  contactTel={
                    order.orderStatus === "pending" ? (
                      <Typography color="error">
                        not available until confirmed
                      </Typography>
                    ) : order.orderStatus === "completed" ? (
                      <Typography>order is completed</Typography>
                    ) : order.orderStatus === "cancelled" ? (
                      <Typography color="error">order is cancelled</Typography>
                    ) : order.splitterId === user.uid ? (
                      order.orderStatus === "confirmed" ? (
                        order.splitteeContactNumber
                      ) : (
                        order.splitterContactNumber
                      )
                    ) : null
                  }
                  email={
                    order.orderStatus === "pending" ? (
                      <Typography color="error">
                        not available until confirmed
                      </Typography>
                    ) : order.orderStatus === "completed" ? (
                      <Typography>order is completed</Typography>
                    ) : order.orderStatus === "cancelled" ? (
                      <Typography color="error">order is cancelled</Typography>
                    ) : order.splitterId === user.uid ? (
                      order.orderStatus === "confirmed" ? (
                        order.splitteeEmail
                      ) : (
                        order.splitterEmail
                      )
                    ) : null
                  }
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <Card noborder nopadding>
                  <MeetUpInfoCard
                    date={meetUpDate}
                    time={meetUpTime}
                    location={order.meetUpAddress}
                    latitude={order.latitude}
                    longitude={order.longitude}
                  />
                </Card>
              </div>

              <div style={{ paddingBottom: "20px" }}>
                {order && order.splitterId === user.uid ? (
                  <>
                    {order.orderStatus === "completed" ||
                    order.orderStatus === "cancelled" ? (
                      <></>
                    ) : order.orderStatus === "pending" ? (
                      <div style={{ display: "flex" }}>
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
                      </div>
                    ) : (
                      <div style={{ display: "flex" }}>
                        <Button
                          variant="white"
                          label="Cancel"
                          size="lg"
                          style={{ marginRight: ".5rem" }}
                          onClick={handleOnCancel}
                        />
                        <Button
                          variant="yellow"
                          label="Complete"
                          size="lg"
                          style={{ marginRight: ".5rem" }}
                          onClick={handleOnComplete}
                        />
                      </div>
                    )}
                  </>
                ) : order.orderStatus === "completed" ||
                  order.orderStatus === "cancelled" ? (
                  <></>
                ) : order.orderStatus === "pending" ? (
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button
                      variant="white"
                      label="Cancel"
                      size="sm"
                      style={{ marginRight: ".5rem" }}
                      onClick={handleOnDecline}
                    />
                  </div>
                ) : (
                  <div style={{ display: "flex" }}>
                    <Button
                      variant="white"
                      label="Cancel"
                      size="lg"
                      style={{ marginRight: ".5rem" }}
                      onClick={handleOnCancel}
                    />
                    <Button
                      variant="yellow"
                      label="Complete"
                      size="lg"
                      style={{ marginRight: ".5rem" }}
                      onClick={handleOnComplete}
                    />
                  </div>
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

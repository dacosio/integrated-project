import React, { useState, useEffect } from "react";
import Grid from "../../../components/layout/Grid/Grid";
import Button from "../../../components/base/Button/Button";
import useMediaQuery from "../../../utils/useMediaQuery";
import ImageInput from "../../../components/base/ImageInput/ImageInput";
import NumberInput from "../../../components/base/NumberInput/NumberInput";
import Dropdown from "../../../components/base/Dropdown/Dropdown";
import DatePicker from "../../../components/base/DatePicker/DatePicker";
import TimePicker from "../../../components/base/TimePicker/TimePicker";
import styles from "./AddListing.module.css";
import Typography from "../../../components/base/Typography/Typography";
import { RiInformationFill } from "react-icons/ri";
import { Formik, Form } from "formik";
import FormikControl from "../../../components/base/FormikControl/FormikControl";
import BackButton from "../../../components/base/BackButton/BackButton";
import MapLeaflet from "../../../components/module/MapLeaflet/MapLeaflet";

const AddListing = (props) => {
  const { initialValues, validationSchema, onSubmit } = props;

  const isDesktop = useMediaQuery("(min-width: 1440px)");
  const [selectedOption, setSelectedOption] = useState("");
  const [multipleImages, setMultipleImages] = useState([]);
  const options = [
    { value: "value1", label: "Fresh Food" },
    { value: "value2", label: "Packaged Food" },
    { value: "value3", label: "Household" },
    { value: "value3", label: "Beauty & Wellness" },
  ];
  const [date, setDate] = useState();
  const [time, setTime] = useState("");
  const [number, setNumber] = useState(0);

  return (
    <div className={styles.contentWrapper}>
      {isDesktop ? (
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              return (
                <Form>
                  <div className={styles.backButtonWrap}>
                    <BackButton />
                  </div>
                  <Grid
                    columns={2}
                    style={{
                      border: "1px solid var(--black)",
                      padding: "40px 40px 80px",
                      rowGap: "26px",
                      columnGap: "18px",
                      backgroundColor: "var(--white)",
                      borderRadius: "20px",
                      boxShadow: "2px 2px var(--black)",
                      position: "relative",
                      height: "auto",
                    }}
                  >
                    <Typography
                      variant="h3-graphik-bold"
                      style={{ gridColumn: "1/-1" }}
                    >
                      Create Listing
                    </Typography>
                    <div className={styles.imageWrapper}>
                      <Typography
                        variant="h4-graphik-bold"
                        style={{ marginBottom: "8px" }}
                      >
                        Item Photos
                      </Typography>
                      <div
                        style={{
                          width: "100%",
                          maxWidth: "500px",
                          boxSizing: "border-box",
                        }}
                      >
                        <ImageInput
                          images={multipleImages}
                          setImages={setMultipleImages}
                        />
                      </div>
                    </div>

                    <div className={styles.itemNameWrapper}>
                      <FormikControl
                        control="input"
                        type="text"
                        label="Item Name"
                        name="itemName"
                        placeholder="What are you splitting?"
                        style={{
                          borderRadius: "8px",
                          padding: "6px 16px",
                          width: "100%",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>

                    <div className={styles.itemDescriptionWrapper}>
                      <FormikControl
                        control="textarea"
                        type="text"
                        rows="6"
                        label={
                          <Typography
                            variant="h4-graphik-bold"
                            color="black"
                            style={{ marginBottom: "8px" }}
                          >
                            Description
                          </Typography>
                        }
                        name="description"
                        placeholder="Describe your item? (ex. 400g of rice)"
                        style={{
                          borderRadius: "8px",
                          padding: "6px 16px",
                          width: "100%",
                          boxSizing: "border-box",
                          border: "2px solid var(--black)",
                          fontFamily: "Graphik",
                        }}
                      />
                    </div>

                    <div>
                      <Dropdown
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                        options={options}
                        label="Select"
                      />
                    </div>

                    <div className={styles.lineBreak}></div>

                    <div>
                      <Typography
                        variant="h4-graphik-bold"
                        style={{ marginBottom: "8px" }}
                      >
                        Original Item Price
                      </Typography>
                      <Typography
                        variant="body-4-regular"
                        color="light-gray"
                        style={{ marginBottom: "8px" }}
                      >
                        The price of your bulk item at purchase
                      </Typography>

                      <FormikControl
                        control="input"
                        type="text"
                        name="originalItemPrice"
                        placeholder="$CAD"
                        style={{
                          borderRadius: "8px",
                          padding: "6px 16px",
                          width: "100%",
                          boxSizing: "border-box",
                          border: "2px solid var(--black)",
                        }}
                      />
                    </div>

                    <div>
                      <div className={styles.divideWrapper}>
                        <Typography
                          variant="h4-graphik-bold"
                          style={{ marginBottom: "8px" }}
                        >
                          Divide by
                        </Typography>
                        <Typography
                          variant="body-4-regular"
                          color="light-gray"
                          style={{ marginBottom: "8px" }}
                        >
                          The number of portions to divide your items into
                        </Typography>
                      </div>

                      <NumberInput
                        inputNumber={number}
                        setInputNumber={setNumber}
                        maxValue={10}
                      />
                    </div>

                    <div>
                      <div className={styles.divideWrapper}>
                        <Typography
                          variant="h4-graphik-bold"
                          style={{ marginBottom: "8px" }}
                        >
                          Portions for sale
                        </Typography>
                        <Typography
                          variant="body-4-regular"
                          color="light-gray"
                          style={{ marginBottom: "8px" }}
                        >
                          The number of portions you wish to sell
                        </Typography>
                      </div>
                      <NumberInput
                        inputNumber={number}
                        setInputNumber={setNumber}
                        maxValue={10}
                        style={{ width: "100%" }}
                      />
                    </div>

                    <div className={styles.priceDisplayWrapper}>
                      <Grid columns={2}>
                        <div>
                          <Typography
                            variant="h4-graphik-bold"
                            style={{ marginBottom: "8px" }}
                          >
                            Price per portion
                          </Typography>
                          <div className={styles.portionPriceWrapper}>
                            <Typography
                              variant="body-1-medium"
                              style={{ marginBottom: "8px" }}
                            >
                              $
                            </Typography>
                            <Typography variant="h3-graphik-bold">0</Typography>
                            <Typography
                              variant="body-1-medium"
                              style={{ marginTop: "8px" }}
                            >
                              CAD
                            </Typography>
                          </div>
                        </div>

                        <div>
                          <Typography
                            variant="h4-graphik-bold"
                            style={{ marginBottom: "8px" }}
                          >
                            Total expected sales
                          </Typography>
                          <div className={styles.salesWrapper}>
                            <Typography
                              variant="body-1-medium"
                              style={{ marginBottom: "8px" }}
                            >
                              $
                            </Typography>
                            <Typography variant="h3-graphik-bold">0</Typography>
                            <Typography
                              variant="body-1-medium"
                              style={{ marginTop: "8px" }}
                            >
                              CAD
                            </Typography>
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            gridColumn: "1/-1",
                            alignItems: "flex-end",
                          }}
                        >
                          <RiInformationFill
                            size={32}
                            style={{
                              marginRight: "8px",
                              color: "var(--light-gray)",
                            }}
                          />
                          <Typography
                            variant="body-4-regular"
                            color="light-gray"
                            style={{ marginBottom: "8px" }}
                          >
                            Price per portion will be displayed in the listing
                          </Typography>
                        </div>
                      </Grid>
                    </div>

                    <div className={styles.lineBreak}></div>

                    <div className={styles.meetUpWrapper}>
                      <Typography
                        variant="h4-graphik-bold"
                        style={{ marginBottom: "8px" }}
                      >
                        Meet-up Location
                      </Typography>

                      <FormikControl
                        control="input"
                        type="text"
                        name="meet-up-location"
                        placeholder="Type to search"
                        style={{
                          borderRadius: "8px",
                          padding: "6px 16px",
                          width: "80%",
                          marginBottom: "26px",
                          boxSizing: "border-box",
                        }}
                      />
                      <div className={styles.meetUpMap}>
                        <MapLeaflet
                          // zoom={zoom}
                          // markerData={/}
                          direction="top"
                          height="100%"
                          borderRadius="20px"
                          zIndex={2}
                          // bounds="[49.225693],[-123.107326]"
                          showActiveListing={false}
                        />
                      </div>
                    </div>
                    <div>
                      <Typography
                        variant="h4-graphik-bold"
                        style={{ marginBottom: "8px" }}
                      >
                        Meet-up Date
                      </Typography>
                      <DatePicker date={date} setDate={setDate} />
                    </div>

                    <div>
                      <Typography
                        variant="h4-graphik-bold"
                        style={{ marginBottom: "8px" }}
                      >
                        Meet-up Time
                      </Typography>
                      <TimePicker time={time} setTime={setTime} />
                    </div>

                    <div>
                      <Button
                        variant="yellow"
                        label="Post Listing"
                        size="lg"
                        style={{
                          width: "326px",
                          display: "block",
                          margin: "60px auto auto",
                        }}
                        disable={!formik.isValid}
                        type="submit"
                      />
                    </div>
                  </Grid>
                </Form>
              );
            }}
          </Formik>
        </div>
      ) : (
        <div>
          {/* Mobile view */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              return (
                <Form>
                  <div className={styles.backButtonWrap}>
                    <BackButton />
                  </div>
                  <div className={styles.mobileWrapper}>
                    {/* <Grid columns={1}
                      style={{
                        border: "1px solid var(--black)",
                        padding: "24px 16px",
                        rowGap: "24px",
                        backgroundColor: "var(--white)",
                        height: "auto",
                        borderRadius: "20px"
                      }} */}
                    <Typography variant="h3-graphik-bold">
                      Create Listing
                    </Typography>
                    <div className={styles.sectionGap}>
                      <Typography
                        variant="h4-graphik-bold"
                        style={{ margin: "24px auto 8px" }}
                      >
                        Item Photos
                      </Typography>
                      <div
                        style={{
                          width: "100%",
                          boxSizing: "border-box",
                        }}
                      >
                        <ImageInput
                          images={multipleImages}
                          setImages={setMultipleImages}
                        />
                      </div>
                    </div>
                    <div className={styles.sectionGap}>
                      <FormikControl
                        control="input"
                        type="text"
                        label="Item Name"
                        name="item-name"
                        placeholder="What are you splitting?"
                        style={{
                          borderRadius: "8px",
                          padding: "6px 16px",
                          width: "100%",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>
                    <div className={styles.sectionGap}>
                      <div className={styles.itemDescriptionWrapper}>
                        <FormikControl
                          control="textarea"
                          type="text"
                          rows="6"
                          label={
                            <Typography
                              variant="h4-graphik-bold"
                              color="black"
                              style={{ marginBottom: "8px" }}
                            >
                              Description
                            </Typography>
                          }
                          name="description"
                          placeholder="Describe your item? (ex. 400g of rice)"
                          style={{
                            borderRadius: "8px",
                            padding: "6px 16px",
                            width: "100%",
                            boxSizing: "border-box",
                            border: "2px solid var(--black)",
                            fontFamily: "Graphik",
                          }}
                        />
                      </div>
                    </div>
                    <div className={styles.sectionGap}>
                      <Dropdown
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                        options={options}
                        label="Select"
                      />
                    </div>
                    <div className={styles.lineBreak}></div>
                    <div className={styles.sectionGap}>
                      <Typography
                        variant="h4-graphik-bold"
                        style={{ marginBottom: "8px" }}
                      >
                        Original Item Price
                      </Typography>
                      <Typography
                        variant="body-4-regular"
                        color="light-gray"
                        style={{ marginBottom: "8px" }}
                      >
                        The price of your bulk item at purchase
                      </Typography>
                      <FormikControl
                        control="input"
                        type="text"
                        name="originalItemPrice"
                        placeholder="$CAD"
                        style={{
                          borderRadius: "8px",
                          padding: "6px 16px",
                          width: "100%",
                          boxSizing: "border-box",
                          border: "2px solid var(--black)",
                        }}
                      />
                    </div>
                    <div className={styles.sectionGap}>
                      <div className={styles.divideWrapper}>
                        <Typography
                          variant="h4-graphik-bold"
                          style={{ marginBottom: "8px" }}
                        >
                          Divide by
                        </Typography>
                        <Typography
                          variant="body-4-regular"
                          color="light-gray"
                          style={{ marginBottom: "8px" }}
                        >
                          The number of portions to divide your items into
                        </Typography>
                      </div>
                      <NumberInput
                        inputNumber={number}
                        setInputNumber={setNumber}
                        maxValue={10}
                        style={{ width: "100%", marginBottom: "24px" }}
                      />
                    </div>
                    <div className={styles.sectionGap}>
                      <div className={styles.divideWrapper}>
                        <Typography
                          variant="h4-graphik-bold"
                          style={{ marginBottom: "8px" }}
                        >
                          Portions for sale
                        </Typography>
                        <Typography
                          variant="body-4-regular"
                          color="light-gray"
                          style={{ marginBottom: "8px" }}
                        >
                          The number of portions you wish to sell
                        </Typography>
                      </div>
                      <NumberInput
                        inputNumber={number}
                        setInputNumber={setNumber}
                        maxValue={10}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className={styles.priceDisplayWrapper}>
                      <Grid columns={2} style={{ marginBottom: "24px" }}>
                        <div>
                          <Typography
                            variant="h4-graphik-bold"
                            style={{ marginBottom: "8px" }}
                          >
                            Price per portion
                          </Typography>
                        </div>
                        <div
                          className={styles.portionPriceWrapper}
                          style={{ gridRow: 2 }}
                        >
                          <Typography
                            variant="body-1-medium"
                            style={{ marginBottom: "8px" }}
                          >
                            $
                          </Typography>
                          <Typography variant="h3-graphik-bold">0</Typography>
                          <Typography
                            variant="body-1-medium"
                            style={{ marginTop: "8px" }}
                          >
                            CAD
                          </Typography>
                        </div>
                        <div>
                          <Typography
                            variant="h4-graphik-bold"
                            style={{ marginBottom: "8px" }}
                          >
                            Total expected sales
                          </Typography>
                        </div>
                        <div className={styles.salesWrapper}>
                          <Typography
                            variant="body-1-medium"
                            style={{ marginBottom: "8px" }}
                          >
                            $
                          </Typography>
                          <Typography variant="h3-graphik-bold">0</Typography>
                          <Typography
                            variant="body-1-medium"
                            style={{ marginTop: "8px" }}
                          >
                            CAD
                          </Typography>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            gridColumn: "1/-1",
                            alignItems: "flex-end",
                          }}
                        >
                          <RiInformationFill
                            size={32}
                            style={{
                              marginRight: "8px",
                              color: "var(--light-gray)",
                            }}
                          />
                          <Typography
                            variant="body-4-regular"
                            color="light-gray"
                            style={{ marginBottom: "8px" }}
                          >
                            Price per portion will be displayed in the listing
                          </Typography>
                        </div>
                      </Grid>
                    </div>
                    <div className={styles.lineBreak}></div>
                    <div className={styles.meetUpWrapper}>
                      <Typography
                        variant="h4-graphik-bold"
                        style={{ marginBottom: "8px" }}
                      >
                        Meet-up Location
                      </Typography>
                      <FormikControl
                        control="input"
                        type="text"
                        name="meet-up-location"
                        placeholder="Type to search"
                        style={{
                          borderRadius: "8px",
                          padding: "6px 16px",
                          width: "100%",
                          marginBottom: "26px",
                          boxSizing: "border-box",
                        }}
                      />
                      <div className={styles.meetUpMap}>
                        <MapLeaflet
                          // zoom={zoom}
                          // markerData={/}
                          direction="top"
                          height="100%"
                          borderRadius="20px"
                          zIndex={2}
                          // bounds="[49.225693],[-123.107326]"
                          showActiveListing={false}
                        />
                      </div>
                    </div>
                    <div className={styles.sectionGap}>
                      <Typography
                        variant="h4-graphik-bold"
                        style={{ marginBottom: "8px" }}
                      >
                        Meet-up Date
                      </Typography>
                      <DatePicker date={date} setDate={setDate} />
                    </div>
                    <div className={styles.sectionGap}>
                      <Typography
                        variant="h4-graphik-bold"
                        style={{ marginBottom: "8px" }}
                      >
                        Meet-up Time
                      </Typography>
                      <TimePicker time={time} setTime={setTime} />
                    </div>
                    <div>
                      <Button
                        variant="yellow"
                        label="Post Listing"
                        size="lg"
                        style={{
                          display: "block",
                          margin: "60px auto",
                        }}
                        disable={!formik.isValid}
                        type="submit"
                      />
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      )}
    </div>
  );
};

export default AddListing;

import React, { useState, useEffect } from "react";
import Grid from "../../../components/layout/Grid/Grid";
import Button from "../../../components/base/Button/Button";
import useMediaQuery from "../../../utils/useMediaQuery";
import ImageInput from "../../../components/base/ImageInput/ImageInput";
import TextArea from "../../../components/base/TextArea/TextArea";
import NumberInput from "../../../components/base/NumberInput/NumberInput";
import Dropdown from "../../../components/base/Dropdown/Dropdown";
import DatePicker from "../../../components/base/DatePicker/DatePicker";
import TimePicker from "../../../components/base/TimePicker/TimePicker";
import style from "./AddListing.module.css";
import Typography from "../../../components/base/Typography/Typography";
import { RiInformationFill } from "react-icons/ri";
import InputField from "../../../components/base/InputField/InputField";
import { Formik, Form } from "formik";
import FormikControl from "../../../components/base/FormikControl/FormikControl";

const AddListing = (initialValues, validationSchema, onSubmit, props) => {
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
    <div className={style.contentWrapper}>
      {isDesktop ? (
        <div style={{ backgroundColor: "var(--bg-gray)" }}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              return (
                <Form>
                  <Grid
                    columns={2}
                    style={{
                      margin: "4rem",
                      border: "1px solid var(--black)",
                      padding: "40px 40px 80px",
                      rowGap: "26px",
                      columnGap: "18px",
                      backgroundColor: "var(--white)",
                      boxSizing: "border-boz",
                    }}
                  >
                    <Typography
                      variant="h3-graphik-bold"
                      style={{ gridColumn: "1/-1" }}
                    >
                      Create Listing
                    </Typography>
                    <div className={style.imageWrapper}>
                      <Typography
                        variant="h4-graphik-bold"
                        style={{ marginBottom: "8px" }}
                      >
                        Item Photos
                      </Typography>
                      <div style={{ width: "100%", maxWidth: "500px" }}>
                        <ImageInput
                          images={multipleImages}
                          setImages={setMultipleImages}
                        />
                      </div>
                    </div>

                    <div className={style.itemNameWrapper}>
                      <FormikControl
                        control="input"
                        type="text"
                        label="ItemName"
                        name="item-name"
                        placeholder="What are you splitting?"
                        style={{
                          borderRadius: "12px",
                          padding: "6px 16px",
                          width: "100%",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>

                    <div className={style.itemDescriptionWrapper}>
                      <FormikControl
                        control="textarea"
                        type="text"
                        rows="6"
                        label="Description"
                        name="description"
                        placeholder="Describe your item? (ex. 400g of rice)"
                        style={{
                          borderRadius: "12px",
                          padding: "6px 16px",
                          width: "100%",
                          boxSizing: "border-box",
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

                    <div className={style.lineBreak}></div>

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
                        name="original-item-price"
                        placeholder="$CAD"
                        style={{
                          borderRadius: "12px",
                          padding: "6px 16px",
                          width: "100%",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>

                    <div>
                      <div className={style.divideWrapper}>
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
                      <div className={style.divideWrapper}>
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

                    <div className={style.priceDisplayWrapper}>
                      <Grid columns={2}>
                        <div>
                          <Typography
                            variant="h4-graphik-bold"
                            style={{ marginBottom: "8px" }}
                          >
                            Price per portion
                          </Typography>
                          <div className={style.portionPriceWrapper}>
                            <Typography
                              variant="body-1-medium"
                              style={{ marginBottom: "8px" }}
                            >
                              $
                            </Typography>
                            <Typography
                              variant="h3-graphik-bold"
                            >
                              0
                            </Typography>
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
                          <div className={style.salesWrapper}>
                            <Typography
                              variant="body-1-medium"
                              style={{ marginBottom: "8px" }}
                            >
                              $
                            </Typography>
                            <Typography
                              variant="h3-graphik-bold"
                            >
                              0
                            </Typography>
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

                    <div className={style.lineBreak}></div>

                    <div className={style.meetUpWrapper}>
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
                          borderRadius: "12px",
                          padding: "6px 16px",
                          width: "80%",
                          marginBottom: "26px",
                          boxSizing: "border-box",
                        }}
                      />
                      <div className={style.meetUpMap}></div>
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
                          marginRight: ".5rem",
                          width: "326px",
                          margin: "auto",
                          display: "block",
                        }}
                      />
                    </div>
                  </Grid>
                </Form>
              );
            }}
          </Formik>
        </div>
      ) : (
        <div>{/* Content for non-desktop */}</div>
      )}
    </div>
  );
};

export default AddListing;

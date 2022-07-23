import React from "react";
import style from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { setUserRequest } from "../Redux/Dashboard/action";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const cities = [
  {
    value: "Delhi-NCR",
    label: "Delhi-NCR",
  },
  {
    value: "Mumbai",
    label: "Mumbai",
  },
  {
    value: "Bangalore",
    label: "Bangalore",
  },
  {
    value: "Chennai",
    label: "Chennai",
  },
  {
    value: "Hydrabad",
    label: "Hydrabad",
  },
  {
    value: "Pune",
    label: "Pune",
  },
  {
    value: "Kolkata",
    label: "Kolkata",
  },
  {
    value: "Ahmedabad",
    label: "Ahmedabad",
  },
  {
    value: "Chandigarh",
    label: "Chandigarh",
  },
  {
    value: "Jaipur",
    label: "Jaipur",
  },
  {
    value: "Bhubaneshwar",
    label: "Bhubaneshwar",
  },
  {
    value: "Nagpur",
    label: "Nagpur",
  },
];

function SearchBox() {
  const [city, setCity] = React.useState("Banglore");
  const [start_date, setStartDate] = React.useState("");
  const [duration, setDuration] = React.useState(0);
  console.log("duration:", duration);
  const [end_date, setEndDate] = React.useState("");
  const userSearch = useSelector((state) => state.dashboard);

  const currentDate = new Date();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (start_date !== "" && end_date !== "") {
      let start = start_date.split("T")[0];
      let end = end_date.split("T")[0];

      start = start.split("-").map(Number);
      start = new Date(start[0], start[1] - 1, start[2]);

      end = end.split("-").map(Number);
      end = new Date(end[0], end[1] - 1, end[2]);
      setDuration((end.getTime() - start.getTime()) / (1000 * 3600 * 24));
    }
  }, [start_date, end_date]);

  React.useEffect(() => {
    handleSubmit();
  }, [city, start_date, end_date]);

  const handleSubmit = () => {
    const payload = {
      city,
      start_date,
      end_date,
      duration,
    };
    if (duration >= 0) dispatch(setUserRequest(payload));
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCarPage = () => {
    navigate("/cars");
  };

  localStorage.setItem("duration", duration);

  return (
    <div className={style.SearchBox}>
      <div className={style.SearchBox__TopRow}>
        <button
          style={{
            width: 180,
            margin: "1%",
            fontSize: "18px",
            fontWeight: "bold",
            height: "50px",
            borderRadius: "15px",
            border: "none",
            backgroundColor: "transparent",
            boxShadow: "0 0 2px",
            color: "white",
            backgroundImage: "linear-gradient(270deg, #1caba2 25%, #1c7fab)",
          }}
        >
          Rentals
        </button>
        <Button
          style={{
            width: 180,
            margin: "1%",
            fontSize: "18px",
            fontWeight: "bold",
            height: "50px",
            borderRadius: "15px",
            border: "none",
            backgroundColor: "transparent",
            boxShadow: "0 0 2px",
          }}
          onClick={() => {
            navigate("/open");
          }}
        >
          Subscriptions
        </Button>
      </div>

      <div className={style.SearchBox__MidRow}>
        <img
          style={{ marginLeft: "170px" }}
          src="https://www.revv.co.in/imgs/logo-rentals.svg"
          alt="Banner"
        />
        <h5>Self drive car rentals in India</h5>
      </div>

      <div
        style={{ border: "1.5px solid gray", borderRadius: "10px" }}
        className={style.SearchBox__Dropdowns}
      >
        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Select Your City</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {cities.map((option) => (
                <ul
                  style={{
                    listStyle: "none",
                    cursor: "pointer",
                    marginTop: "20px",
                    paddingLeft:"10px",
                    width: "420px",
                    height: "35px",
                    borderRadius:"10px",
                    backgroundColor: "rgba(231, 231, 231, 0.906)",
                  }}
                  key={option.value}
                  value={option.value}
                  onClick={() => {
                    setCity(option.value);
                    onClose();
                  }}
                >
                  <li className={style.cityName} style={{ fontWeight: "bold" }}>
                    {option.label}
                  </li>
                </ul>
              ))}
            </ModalBody>
          </ModalContent>
        </Modal>

        <div
          style={{
            display: "flex",
            backgroundColor: "rgba(231, 231, 231, 0.79)",
            borderBottom: "1px solid black",
      
          }}
        >
          <span
            style={{ paddingTop: "12px"}}
            class="material-symbols-outlined"
          >
            fmd_bad
          </span>
          <Button
            onClick={onOpen}
            style={{
              width: "100%",
              height: "50px",
              justifyContent: "flex-start",
              borderRadius: "12px",
            }}
          >
            {city}
          </Button>
        </div>

        <div className={style.SearchBox__Dropdowns__Date}>
          <div>
            <label htmlFor="">
              <h5
                style={{
                  color: "grey",
                  fontWeight: "bold",
                  fontSize: "20px",
                  fontStyle: "italic",
                }}
              >
                Start time
              </h5>
            </label>
            <input
              type="datetime-local"
              className={style.DateTime1}
              step={1800}
              onChange={(e) => setStartDate(e.target.value)}
              min={
                currentDate.getMonth() < 10
                  ? `${
                      currentDate.getFullYear() +
                      "-0" +
                      (currentDate.getMonth() + 1) +
                      "-" +
                      currentDate.getDate()
                    }T00:00:00`
                  : `${
                      currentDate.getFullYear() +
                      "-" +
                      (currentDate.getMonth() + 1) +
                      "-" +
                      currentDate.getDate()
                    }T00:00:00`
              }
            />
          </div>
          <div>
            <label htmlFor="">
              <h5
                style={{
                  color: "grey",
                  fontWeight: "bold",
                  fontSize: "20px",
                  fontStyle: "italic",
                }}
              >
                End time
              </h5>
            </label>
            <br />
            <input
              type="datetime-local"
              className={style.DateTime2}
              onChange={(e) => setEndDate(e.target.value)}
              min={start_date}
            />
          </div>
        </div>
      </div>

      <div className={style.SearchBox__Submit}>
        {duration >= 0 && start_date !== "" && end_date !== "" && (
          <p>
            Duration :
            {duration === 1
              ? ` ${duration} Day`
              : duration === 0
              ? " Today"
              : ` ${duration} Days`}
          </p>
        )}
        <button onClick={handleCarPage}>Search</button>
      </div>
    </div>
  );
}

export default SearchBox;

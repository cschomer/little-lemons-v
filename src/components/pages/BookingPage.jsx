import { useReducer, useEffect } from "react";
import Heading from "../sections/reservePages/Heading";
import ReservationForm from "../sections/reservePages/BookingForm";
import { fetchAPI } from "../../bookingsAPI";

const BookingPage = () => {
  const updateTimes = (date) => fetchAPI(date);

  const [availableTimes, dispatch] = useReducer(updateTimes, []);

  useEffect(() => {
    const initialTimes = fetchAPI(new Date());
    dispatch({ type: "init", payload: initialTimes });
  }, []);

  return (
    <>
      <Heading />
      <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
};

export default BookingPage;

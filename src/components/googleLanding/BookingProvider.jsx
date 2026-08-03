import React, { useState, useMemo, useCallback } from "react";
import { BookingContext } from "./bookingContext";
import BookingModal from "./BookingModal";

// Any CTA on the campaign page can call openBooking() from useBooking(),
// while the modal itself is mounted once here.
const BookingProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openBooking = useCallback(() => setIsOpen(true), []);
  const closeBooking = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ openBooking }), [openBooking]);

  return (
    <BookingContext.Provider value={value}>
      {children}
      <BookingModal isOpen={isOpen} onClose={closeBooking} />
    </BookingContext.Provider>
  );
};

export default BookingProvider;

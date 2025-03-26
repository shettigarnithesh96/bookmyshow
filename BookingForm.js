import React, { useState } from 'react';

const BookingForm = ({ showTime, seats }) => {
    const [selectedShowTime, setSelectedShowTime] = useState(showTime);
    const [selectedSeats, setSelectedSeats] = useState(seats);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const handleShowTimeChange = (event) => {
        setSelectedShowTime(event.target.value);
    };

    const handleSeatsChange = (event) => {
        setSelectedSeats(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // You can add additional logic here for form submission, such as API calls.
        alert(`Booking Confirmed! \nName: ${userName}\nEmail: ${userEmail}\nShow Time: ${selectedShowTime}\nSeats: ${selectedSeats}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="userName" className="form-label">Name</label>
                <input
                    type="text"
                    id="userName"
                    className="form-control"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="userEmail" className="form-label">Email</label>
                <input
                    type="email"
                    id="userEmail"
                    className="form-control"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="showTime" className="form-label">Select Showtime</label>
                <select
                    id="showTime"
                    className="form-select"
                    value={selectedShowTime}
                    onChange={handleShowTimeChange}
                    required
                >
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                    <option value="Night">Night</option>
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="seats" className="form-label">Number of Seats</label>
                <input
                    type="number"
                    id="seats"
                    className="form-control"
                    value={selectedSeats}
                    onChange={handleSeatsChange}
                    min="1"
                    max="10"
                    required
                />
            </div>

            <button type="submit" className="btn btn-primary">Book Tickets</button>
        </form>
    );
};

export default BookingForm;

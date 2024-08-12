import React, { useState } from 'react';
import '../src/bookings.css';
import { bookTable, bookRoom, updateTableBooking, updateRoomBooking, cancelBooking } from './Utils/api';

const Restaurant = () => {
    const [tableBooking, setTableBooking] = useState({
        diningOption: '',
        seatingPreference: '',
        date: '',
        time: '',
        guests: 1,
        specialRequests: '',
        name: '',
        contact: '',
        email: '',
    });

    const [roomBooking, setRoomBooking] = useState({
        roomType: '',
        checkInDate: '',
        checkOutDate: '',
        guests: 1,
        rooms: 1,
        specialRequests: '',
        name: '',
        contact: '',
        email: '',
    });

    const [bookingId, setBookingId] = useState(null);
    const [editing, setEditing] = useState(false);
    const [message, setMessage] = useState('');

    const handleTableBookingChange = (e) => {
        setTableBooking({ ...tableBooking, [e.target.name]: e.target.value });
    };

    const handleRoomBookingChange = (e) => {
        setRoomBooking({ ...roomBooking, [e.target.name]: e.target.value });
    };

    const handleTableBookingSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editing) {
                const response = await updateTableBooking(bookingId, tableBooking);
                console.log('Table booking update response:', response);
                if (response.success) {
                    setMessage('Table booking updated successfully!');
                    setTableBooking({
                        diningOption: '',
                        seatingPreference: '',
                        date: '',
                        time: '',
                        guests: 1,
                        specialRequests: '',
                        name: '',
                        contact: '',
                        email: '',
                    });
                    setEditing(false);
                } else {
                    setMessage('Failed to update table booking.');
                }
            } else {
                const response = await bookTable(tableBooking);
                console.log('Table booking response:', response);
                if (response.success) {
                    setMessage('Table booked successfully!');
                    setTableBooking({
                        diningOption: '',
                        seatingPreference: '',
                        date: '',
                        time: '',
                        guests: 1,
                        specialRequests: '',
                        name: '',
                        contact: '',
                        email: '',
                    });
                } else {
                    setMessage('Failed to book table.');
                }
            }
        } catch (error) {
            console.error('Error booking table:', error);
            setMessage('Failed to book table.');
        }
    };

    const handleRoomBookingSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editing) {
                const response = await updateRoomBooking(bookingId, roomBooking);
                console.log('Room booking update response:', response);
                if (response.success) {
                    setMessage('Room booking updated successfully!');
                    setRoomBooking({
                        roomType: '',
                        checkInDate: '',
                        checkOutDate: '',
                        guests: 1,
                        rooms: 1,
                        specialRequests: '',
                        name: '',
                        contact: '',
                        email: '',
                    });
                    setEditing(false);
                } else {
                    setMessage('Failed to update room booking.');
                }
            } else {
                const response = await bookRoom(roomBooking);
                console.log('Room booking response:', response);
                if (response.success) {
                    setMessage('Room booked successfully!');
                    setRoomBooking({
                        roomType: '',
                        checkInDate: '',
                        checkOutDate: '',
                        guests: 1,
                        rooms: 1,
                        specialRequests: '',
                        name: '',
                        contact: '',
                        email: '',
                    });
                } else {
                    setMessage('Failed to book room.');
                }
            }
        } catch (error) {
            console.error('Error booking room:', error);
            setMessage('Failed to book room.');
        }
    };

    const handleEditBooking = (booking) => {
        if (booking.type === 'table') {
            setTableBooking(booking.details);
        } else {
            setRoomBooking(booking.details);
        }
        setBookingId(booking.id);
        setEditing(true);
    };

    const handleCancelBooking = async (bookingId, bookingType) => {
        try {
            const response = await cancelBooking(bookingId, bookingType);
            console.log(`${bookingType} booking cancellation response:`, response);
            if (response.success) {
                setMessage(`${bookingType.charAt(0).toUpperCase() + bookingType.slice(1)} booking cancelled successfully!`);

            } else {
                setMessage(`Failed to cancel ${bookingType} booking.`);
            }
        } catch (error) {
            console.error(`Error cancelling ${bookingType} booking:`, error);
            setMessage(`Failed to cancel ${bookingType} booking.`);
        }
    };

    return (
        <section className='book' id='book'>
            <div className="restaurant-container">
                <div className="booking-section table-booking">
                    <h2>{editing ? 'Edit Table Booking' : 'Book a Table'}</h2>
                    <form onSubmit={handleTableBookingSubmit}>
                        <label>
                            Dining Option:
                            <select name="diningOption" value={tableBooking.diningOption} onChange={handleTableBookingChange} required>
                                <option value="">Select an option</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="dinner">Dinner</option>
                                <option value="brunch">Brunch</option>
                            </select>
                        </label>
                        <label>
                            Seating Preference:
                            <select name="seatingPreference" value={tableBooking.seatingPreference} onChange={handleTableBookingChange} required>
                                <option value="">Select a preference</option>
                                <option value="indoor">Indoor Seating</option>
                                <option value="outdoor">Outdoor Seating</option>
                                <option value="window">Window Seating</option>
                                <option value="private">Private Dining Room</option>
                            </select>
                        </label>
                        <label>
                            Date:
                            <input type="date" name="date" value={tableBooking.date} onChange={handleTableBookingChange} required />
                        </label>
                        <label>
                            Time:
                            <input type="time" name="time" value={tableBooking.time} onChange={handleTableBookingChange} required />
                        </label>
                        <label>
                            Number of Guests:
                            <input type="number" name="guests" value={tableBooking.guests} onChange={handleTableBookingChange} min="1" required />
                        </label>
                        <label>
                            Special Requests:
                            <textarea name="specialRequests" value={tableBooking.specialRequests} onChange={handleTableBookingChange}></textarea>
                        </label>
                        {/* <label>
                        Name:
                        <input type="text" name="name" value={tableBooking.name} onChange={handleTableBookingChange} required />
                    </label>
                    <label>
                       Contact Number:
                        <input type="text" name="contact" value={tableBooking.contact} onChange={handleTableBookingChange} required />
                    </label>*/}
                        <label>
                            Email Address:
                            <input type="email" name="email" value={tableBooking.email} onChange={handleTableBookingChange} required />
                        </label>
                        <button type="submit">{editing ? 'Update Booking' : 'Book Table'}</button>
                    </form>
                </div>
                <div className="booking-section room-booking">
                    <h2>{editing ? 'Edit Room Booking' : 'Book a Room'}</h2>
                    <form onSubmit={handleRoomBookingSubmit}>
                        <label>
                            Room Type:
                            <select name="roomType" value={roomBooking.roomType} onChange={handleRoomBookingChange} required>
                                <option value="">Select a room type</option>
                                <option value="single">Single Room</option>
                                <option value="double">Double Room</option>
                                <option value="suite">Suite</option>
                                <option value="family">Family Room</option>
                                <option value="deluxe">Deluxe Room</option>
                            </select>
                        </label>
                        <label>
                            Check-in Date:
                            <input type="date" name="checkInDate" value={roomBooking.checkInDate} onChange={handleRoomBookingChange} required />
                        </label>
                        <label>
                            Check-out Date:
                            <input type="date" name="checkOutDate" value={roomBooking.checkOutDate} onChange={handleRoomBookingChange} required />
                        </label>
                        <label>
                            Number of Guests:
                            <input type="number" name="guests" value={roomBooking.guests} onChange={handleRoomBookingChange} min="1" required />
                        </label>
                        <label>
                            Number of Rooms:
                            <input type="number" name="rooms" value={roomBooking.rooms} onChange={handleRoomBookingChange} min="1" required />
                        </label>
                        <label>
                            Special Requests:
                            <textarea name="specialRequests" value={roomBooking.specialRequests} onChange={handleRoomBookingChange}></textarea>
                        </label>
                        {/*}  <label>
                        Name:
                        <input type="text" name="name" value={roomBooking.name} onChange={handleRoomBookingChange} required />
                    </label>
                    <label>
                        Contact Number:
                        <input type="text" name="contact" value={roomBooking.contact} onChange={handleRoomBookingChange} required />
                    </label>*/}
                        <label>
                            Email Address:
                            <input type="email" name="email" value={roomBooking.email} onChange={handleRoomBookingChange} required />
                        </label>
                        <button type="submit">{editing ? 'Update Booking' : 'Book Room'}</button>
                    </form>
                </div>
                {/* Displaying the message */}
                {message && <p className="message">{message}</p>}
                {/* Assuming there is a list of bookings available to edit or cancel */}
                <div className="existing-bookings">
                    <h2>Your Bookings</h2>
                    {/* This should be dynamically rendered based on actual booking data */}
                    <div className="booking">
                        <p>Booking ID: 1</p>
                        <p>Type: Table</p>
                        <button onClick={() => handleEditBooking({ id: 1, type: 'table', details: tableBooking })}>Edit</button>
                        <button onClick={() => handleCancelBooking(1, 'table')}>Cancel</button>
                    </div>
                    <div className="booking">
                        <p>Booking ID: 2</p>
                        <p>Type: Room</p>
                        <button onClick={() => handleEditBooking({ id: 2, type: 'room', details: roomBooking })}>Edit</button>
                        <button onClick={() => handleCancelBooking(2, 'room')}>Cancel</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Restaurant;

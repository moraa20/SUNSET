// src/Utils/api.js

const BASE_URL = 'http://localhost:8082/api';

export const bookTable = async (tableBookingData) => {
    try {
        const response = await fetch(`${BASE_URL}/bookings/table`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tableBookingData),
        });
        return await response.json();
    } catch (error) {
        console.error('Error booking table:', error);
        throw error;
    }
};

export const bookRoom = async (roomBookingData) => {
    try {
        const response = await fetch(`${BASE_URL}/bookings/room`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(roomBookingData),
        });
        return await response.json();
    } catch (error) {
        console.error('Error booking room:', error);
        throw error;
    }
};

export const updateTableBooking = async (bookingId, tableBookingData) => {
    try {
        const response = await fetch(`${BASE_URL}/bookings/table/${bookingId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tableBookingData),
        });
        return await response.json();
    } catch (error) {
        console.error('Error updating table booking:', error);
        throw error;
    }
};

export const updateRoomBooking = async (bookingId, roomBookingData) => {
    try {
        const response = await fetch(`${BASE_URL}/bookings/room/${bookingId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(roomBookingData),
        });
        return await response.json();
    } catch (error) {
        console.error('Error updating room booking:', error);
        throw error;
    }
};

export const cancelBooking = async (bookingId, bookingType) => {
    try {
        const response = await fetch(`${BASE_URL}/bookings/${bookingType}/${bookingId}`, {
            method: 'DELETE',
        });
        return await response.json();
    } catch (error) {
        console.error(`Error cancelling ${bookingType} booking:`, error);
        throw error;
    }
};
export const getRoomBookings = async () => {
    try {
        const response = await fetch(`${BASE_URL}/bookings/room`);
        if (!response.ok) {
            throw new Error('Failed to fetch room bookings');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching room bookings:', error);
        throw error;
    }
};



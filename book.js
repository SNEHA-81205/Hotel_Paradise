document.addEventListener("DOMContentLoaded", function() {
    const bookingForm = document.getElementById("bookingForm");
    const cancelBooking = document.getElementById("cancelBooking");

    // Define room availability
    const totalRooms = {
        luxury: 15,
        deluxe: 20,
        premier: 12,
        executive: 8,
        business: 10,
        king: 5,
        daily: 30,
    };

    const bookedRooms = {
        luxury: 0,
        deluxe: 0,
        premier: 0,
        executive: 0,
        business: 0,
        king: 0,
        daily: 0,
    };

    if (bookingForm) {
        bookingForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission

            const roomType = document.getElementById("rooms").value; // Get room type
            const numberOfRooms = parseInt(document.getElementById("number1").value, 10); // Get number of rooms

            // Check if values are valid
            if (!roomType || isNaN(numberOfRooms) || numberOfRooms <= 0) {
                alert("Please select a valid room type and number of rooms.");
                return;
            }

            if (bookedRooms[roomType] + numberOfRooms <= totalRooms[roomType]) {
                // Update booked rooms count
                bookedRooms[roomType] += numberOfRooms;
                alert("Room booked successfully");
            } else {
                alert("Sorry, no room available.");
            }
        });
    } else {
        console.error("Booking form element not found.");
    }

    if (cancelBooking) {
        cancelBooking.addEventListener("click", function() {
            alert("Booking canceled successfully");
        });
    } else {
        console.error("Cancel booking button not found.");
    }
});


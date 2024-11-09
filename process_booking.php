<?php
// Include the database connection file
include 'db_connect.php';

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $guest_name = $_POST['guest_name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $room_type = $_POST['room_type'];
    $number_of_rooms = $_POST['number_of_rooms'];
    $number_of_guests = $_POST['number_of_guests'];
    $arrival_date = $_POST['arrival_date'];
    $departure_date = $_POST['departure_date'];
    $total_amount = $_POST['total_amount']; // Assuming this is calculated in your form

    // Insert the booking information into the database
    $sql = "INSERT INTO bookings (guest_name, email, phone, room_type, number_of_rooms, number_of_guests, arrival_date, departure_date, total_amount)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    
    // Prepare and bind
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssiiiss", $guest_name, $email, $phone, $room_type, $number_of_rooms, $number_of_guests, $arrival_date, $departure_date, $total_amount);

    // Execute the statement
    if ($stmt->execute()) {
        echo "Booking successful!";
    } else {
        echo "Error occurred while processing the booking: " . $stmt->error;
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
} else {
    echo "Invalid request.";
}
?>


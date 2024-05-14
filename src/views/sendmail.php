<?php
// Only allow POST requests
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect POST data from the form
    $firstName = strip_tags(trim($_POST["first-name"]));  // Adjusted to match the HTML form
    $lastName = strip_tags(trim($_POST["last-name"]));    // Adjusted to match the HTML form
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = trim($_POST["phone"]);
    $subject = strip_tags(trim($_POST["subject"]));
    $message = trim($_POST["message"]);

    // Verify that data was submitted
    if (empty($firstName) || empty($lastName) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($message)) {
        // Not all fields were filled out properly
        echo "Please complete the form and try again.";
        exit;
    }

    // Recipient email
    $to = "justingetty55@gmail.com"; // Change this to your own email address
    // Create email subject
    $email_subject = "New Contact from $firstName $lastName: $subject";
    // Build the email content.
    $email_content = "Name: $firstName $lastName\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n\n";
    $email_content .= "Message:\n$message\n";

    // Build the email headers
    $email_headers = "From: $firstName <$email>";

    // Send the email
    if (mail($to, $email_subject, $email_content, $email_headers)) {
        echo "Thank You! Your message has been sent.";
    } else {
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    // Not a POST request, deny access
    echo "There was a problem with your submission, please try again.";
}
?>

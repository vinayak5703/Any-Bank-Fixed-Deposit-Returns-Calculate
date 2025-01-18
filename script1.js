// Array of deposit schemes with their respective interest rates for different durations
const depositSchemes = [
    { scheme: 'Scheme A', minDuration: 1, maxDuration: 2, rate: 5.5 },
    { scheme: 'Scheme B', minDuration: 2, maxDuration: 5, rate: 6.0 },
    { scheme: 'Scheme C', minDuration: 5, maxDuration: 10, rate: 6.5 },
    { scheme: 'Scheme D', minDuration: 10, maxDuration: 20, rate: 7.0 }
];

// Function to calculate FD returns
function calculateReturns(amount, duration) {
    let result = "";
    let applicableScheme = null;

    // Find the applicable scheme based on duration
    depositSchemes.forEach(scheme => {
        if (duration >= scheme.minDuration && duration <= scheme.maxDuration) {
            applicableScheme = scheme;
        }
    });

    if (applicableScheme) {
        const interest = (amount * applicableScheme.rate * duration) / 100;
        const totalAmount = amount + interest;
        result = `<strong>${applicableScheme.scheme}</strong>:<br>
                  Interest Rate: ${applicableScheme.rate}%<br>
                  Total Returns: ₹${totalAmount.toFixed(2)}<br>
                  Interest Earned: ₹${interest.toFixed(2)}`;
    } else {
        result = "No scheme found for the given duration.";
    }

    return result;
}

// Form submission handler
$("#fdForm").on("submit", function(event) {
    event.preventDefault();

    // Get form values
    const amount = parseFloat($("#amount").val());
    const duration = parseInt($("#duration").val());

    if (!isNaN(amount) && !isNaN(duration) && amount > 0 && duration > 0) {
        const result = calculateReturns(amount, duration);
        $("#result").html(result);
    } else {
        alert("Please enter valid values for amount and duration.");
    }
});

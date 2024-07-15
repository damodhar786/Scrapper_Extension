// Function to extract outlet details from a single entry
function extractOutletDetails(outletElement) {
  // Get the outlet name
  let outletNameElement = outletElement.querySelector('.outlet-name .info-text a');
  let outletName = outletNameElement ? outletNameElement.textContent.trim() : '';

  // Get the outlet address
  let outletAddressElement = outletElement.querySelector('.outlet-address .info-text');
  let addressParts = outletAddressElement ? outletAddressElement.querySelectorAll('span') : [];
  let outletAddress = Array.from(addressParts).map(span => span.textContent.trim()).join(', ');

  return {
    outletName,
    outletAddress
  };
}

// Get all outlet-detail elements
let outletElements = document.querySelectorAll('.outlet-detail');

// Extract details for each outlet
let outlets = Array.from(outletElements).map(extractOutletDetails);

// Output the details
console.log(outlets);

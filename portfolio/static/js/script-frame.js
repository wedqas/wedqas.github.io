// script-frame.js
const linkedInProfileURL = "https://www.linkedin.com/in/viraj-singh-524a93215?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2FzBjhRj5RMWmHhJ%2FSqVB9A%3D%3D";
document.getElementById("loadLinkedInBtn").onclick = function() {
    var iframeContainer = document.getElementById("iframeContainer");

    // Check if iframe already exists
    if (!document.getElementById("linkedinIframe")) {
        // Create the iframe element
        var iframe = document.createElement("iframe");

        // Set iframe properties (LinkedIn profile URL, width, height, etc.)
        iframe.id = "linkedinIframe";
        iframe.src = "https://www.linkedin.com/in/your-profile-url/";  // Replace with your LinkedIn URL
        iframe.width = "500";
        iframe.height = "700";
        iframe.frameBorder = "0";
        iframe.scrolling = "yes";

        // Append the iframe to the iframe container
        iframeContainer.appendChild(iframe);
    }
};

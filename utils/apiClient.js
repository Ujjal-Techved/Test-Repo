/**
 * API Client Function to Fetch Data from Server
 * 
 * @param {string} endpoint - The API endpoint (e.g., "/api/branch-lists")
 * @param {object} options - Additional options for the fetch request (e.g., method, headers)
 * @returns {Promise<object>} - Returns JSON response from the API
 */

export const apiClient = async (endpoint, options = {}) => {
    // ✅ Get the Base URL from Environment Variables (Must start with NEXT_PUBLIC_ for client-side use)
    const baseUrl = process.env.NEXT_PUBLIC_APP_API;

    try {
        // 🔹 Send an HTTP Request to the API
        const response = await fetch(`${baseUrl}${endpoint}`, {
            method: 'GET', // Default method is GET, can be overridden via `options`
            headers: {
                // ✅ Authorization Token from Environment Variables
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_APP_TOKEN}`,
                ...options.headers // Merge additional headers if provided
            },
            ...options // Merge additional fetch options if provided
        });

        // ❌ If Response is Not OK, Throw an Error
        if (!response.ok) throw new Error(`API error: ${response.statusText}`);

        // ✅ Convert Response to JSON and Return It
        return await response.json();
    } catch (error) {
        console.error("API Fetch Error:", error);
        throw error; // Re-throw the error to be handled where the function is called
    }
};


 /**
 * Lead Form Submission API Call
 * 
 * @param {string} endpoint - The API endpoint (e.g., "/submit-lead")
 * @param {object} payload - The body data to send
 * @returns {Promise<void>}
 */
export const leadFormAPICall = async (payload) => {
    const baseUrl = process.env.NEXT_PUBLIC_LEAD_FORM_API_URL;

    try {
        const response = await fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "partnertoken": process.env.NEXT_PUBLIC_LEAD_FORM_API_TOKEN,
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`Lead Form API Error: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("API Success:", data);
        alert("Lead submitted successfully!");
    } catch (error) {
        console.error("Submission error:", error);
        alert("Something went wrong. Please try again.");
    }
};
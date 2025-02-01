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

import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../utils/apiClient';

/**
 * Fetch data using React Query.
 * @param {string} endpoint - API endpoint
 * @param {Array} queryKey - Unique key for caching the query
 */
export const useFetchData = (endpoint, queryKey, enabled = true) => {
    return useQuery({
        queryKey, 
        queryFn: async () => {
            const response = await apiClient(endpoint);
            return response.data;  // Ensure the API response has `data`
        },
        enabled, // Prevents the query from running if not enabled
        staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
    });
};

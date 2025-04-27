import axios from 'axios'

export const fetchAllRecommendations=async()=>{
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/recommendations/`);
        return response.data
    } catch (error) {
        console.error('Error fetching recommendations',error);
        throw error;
    }

}



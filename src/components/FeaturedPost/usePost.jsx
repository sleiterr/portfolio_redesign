import { useState, useEffect } from "react";
import { fetchFeaturedPostData } from "../../utils/api";

// Custom hook to fetch blog data
export function useFeaturedPost() {
  // State to hold post data, loading status, and error message
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch post data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchFeaturedPostData();
        setPostData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // return post data, loading status, and error message
  return { postData, loading, error };
}

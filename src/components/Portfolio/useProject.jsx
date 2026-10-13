import { useState, useEffect } from "react";
import { fetchProjectData } from "../../utils/api";

// Custom hook to fetch project data
export function useFeaturedProject() {
  // State to hold project data, loading status, and error message
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch project data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchProjectData();
        setProjectData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // return project data, loading status, and error message
  return { projectData, loading, error };
}

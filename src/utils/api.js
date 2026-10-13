//! API utility functions for fetching data
const fetchExperienceData = async () => {
  const res = await fetch("/data/experienceData.json");
  if (!res.ok) throw new Error("Error fetching Experience Data");
  const data = await res.json();
  return data.experienceData || [];
};

export { fetchExperienceData };

//! API utility functions for fetching data
const fetchEducationData = async () => {
  const res = await fetch("/data/educationData.json");
  if (!res.ok) throw new Error("Error fetching Education Data");
  const data = await res.json();
  return data.educationData || [];
};

export { fetchEducationData };

//! API utility functions for fetching data
const fetchFeaturedPostData = async () => {
  const res = await fetch("/data/featuredPost.json");
  if (!res.ok) throw new Error("Error fetching Post Data");
  const data = await res.json();
  return data.dataPost || [];
};

export { fetchFeaturedPostData };

const fetchProjectData = async () => {
  const res = await fetch("/data/projectsData.json");
  if (!res.ok) throw new Error("Error fetching Project Data");
  const data = await res.json();
  return data.projectsData || [];
};

export { fetchProjectData };

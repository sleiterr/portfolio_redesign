const fetchExperienceData = async () => {
  const res = await fetch("/data/experienceData.json");
  if (!res.ok) throw new Error("Error fetching Experience Data");
  const data = await res.json();
  return data.experienceData || [];
};

export { fetchExperienceData };

const fetchEducationData = async () => {
  const res = await fetch("/data/educationData.json");
  if (!res.ok) throw new Error("Error fetching Education Data");
  const data = await res.json();
  return data.educationData || [];
};

export { fetchEducationData };

// Fetch Featured Post Data
const fetchFeaturedPostData = async () => {
  const res = await fetch("/data/featuredPost.json");
  if (!res.ok) throw new Error("Error fetching Post Data");
  const data = await res.json();
  return data.dataPost || [];
};

export { fetchFeaturedPostData };

const fetchBlogData = async () => {
  const res = await fetch("/data/blogData.json");
  if (!res.ok) throw new Error("Error fetching Blog Data");
  const data = await res.json();
  return data.dataBlog || [];
};

export { fetchBlogData };

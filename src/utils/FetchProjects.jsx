import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: import.meta.env.VITE_CMS_SPACE_ID,
  accessToken: import.meta.env.VITE_CMS_ACCESS_TOKEN,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [challenges, setChallenges] = useState([]);

  const getData = async () => {
    try {
      const { items } = await client.getEntries({ content_type: "projects" });
      const allProjects = items.map((item) => {
        const { title, siteUrl, githubUrl, image, description, isChallenge } =
          item?.fields;
        const imageUrl = image?.fields?.file?.url;
        return {
          id: item?.sys?.id,
          title,
          siteUrl,
          githubUrl,
          imageUrl,
          description,
          isChallenge,
        };
      });
      setProjects(allProjects.filter((project) => !project?.isChallenge));
      setChallenges(allProjects.filter((project) => project?.isChallenge));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects, challenges };
};

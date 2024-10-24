import { useEffect, useState } from "react";

const baseUrl = "https://test.uzloyal.uz/api";

const useGetData = () => {
  const [services, setServices] = useState([]);
  const [news, setNews] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [sources, setSources] = useState([]);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch(`${baseUrl}/services`),
      fetch(`${baseUrl}/news`),
      fetch(`${baseUrl}/blogs`),
      fetch(`${baseUrl}/sources`),
      fetch(`${baseUrl}/faqs`), 
    ])
      .then(([resServices, resNews, resBlogs, resSources, resFaqs]) => {
        return Promise.all([
          resServices.json(),
          resNews.json(),
          resBlogs.json(),
          resSources.json(),
          resFaqs.json(),
        ]);
      })
      .then(([dataServices, dataNews, dataBlogs, dataSources, dataFaqs]) => {
        setServices(dataServices.data);
        setNews(dataNews.data);
        setBlogs(dataBlogs.data);
        setSources(dataSources.data);
        setFaqs(dataFaqs.data);
      });
  }, []);

  return { services, news, blogs, sources, faqs };
};

export default useGetData;

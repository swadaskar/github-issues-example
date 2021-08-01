import { useEffect, useState } from "react";
import axios from "axios";

export default function useIssues(pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [issues, setIssues] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      method: "GET",
      url: "https://api.github.com/repos/facebook/create-react-app/issues",
      params: { page: pageNumber },
    })
      .then((res) => {
        setIssues((prevIssues) => {
          return [...prevIssues, ...res.data];
        });
        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
      });
  }, [pageNumber]);

  return { loading, error, issues, hasMore };
}

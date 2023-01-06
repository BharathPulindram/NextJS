import { useState, useEffect } from "react";

function dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState([]);

  useEffect(() => {
    async function fetchDashboardData() {
      const response = await fetch("http://localhost:3000/api/articles");
      const data = await response.json();
      setDashboardData(data);
      setIsLoading(false);
    }
    fetchDashboardData();
  }, []);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        dashboardData.map((article) => (
          <div key={article.id}>
            <h2>{article.title}</h2>
          </div>
        ))
      )}
    </>
  );
}

export default dashboard;

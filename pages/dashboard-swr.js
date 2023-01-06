import React from "react";
import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:3000/api/articles");
  const data = await response.json();
  return data;
};
function DashboardSWR() {
  const { data, error } = useSWR("dashboard", fetcher);
  if (error) {
    return "An error has occured";
  } else if (!data) return "Loading...";
  return (
    <div>
      {data.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default DashboardSWR;

function NewsList({ articles }) {
  return (
    <>
      <h1>News List</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
        </div>
      ))}
    </>
  );
}

export default NewsList;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/news");
  const data = await response.json();
  console.log(data);
  return {
    props: {
      articles: data,
    },
  };
}

/* function NewsList({ articles }) {
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
 */

function News({ data }) {
  return (
    <h1>
      {data} - {process.env.NEXT_PUBLIC_ANALYTICS_ID}
    </h1>
  );
}

export default News;

export async function getStaticProps(context) {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  console.log("username:", user + " password:", password);
  console.log(context.previewData);
  return {
    props: {
      data: context.preview
        ? "List of draft articles!!"
        : "List of published articles!!",
    },
  };
}

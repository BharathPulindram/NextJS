function ArticleListByCategory({ articles, category }) {
  return (
    <>
      <h1>Showing news for category : {category}</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            {article.id} {article.title}
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default ArticleListByCategory;

export async function getServerSideProps(context) {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  const { params, req, res, query } = context;
  console.log(req.headers.cookie);
  console.log(query);
  res.setHeader("Set-Cookie", ["name=Bharath"]);
  const { category } = params;
  const response = await fetch(
    `http://localhost:3000/api/articles?category=${category}`
  );
  const data = await response.json();
  const filter = data.filter((article) => article.category === category);

  return {
    props: {
      articles: filter,
      category,
    },
  };
}

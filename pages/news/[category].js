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
  const { params } = context;
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

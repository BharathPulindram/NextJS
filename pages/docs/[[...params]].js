import { useRouter } from "next/router";
function Doc() {
  const { params = [] } = useRouter().query;
  console.log(params);
  return (
    <>
      <h1>Docs Page contains list of these items</h1>
      {params.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}
    </>
  );
}

export default Doc;

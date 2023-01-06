import { Comments } from "../../../data/comments";

/*export default function handler(req, res) {
  const { commentId } = req.query;
  const comment = Comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  res.status(200).json(comment);
}

 */

function Comment({ comment }) {
  return (
    <>
      <h2>
        {comment.id} -- {comment.title}
      </h2>
    </>
  );
}

export default Comment;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { commentId: "1" } },
      { params: { commentId: "2" } },
      { params: { commentId: "3" } },
      { params: { commentId: "4" } },
      { params: { commentId: "5" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { commentId } = params;

  let comment = Comments.find((comment) => comment.id === parseInt(commentId));
  console.log(comment);

  /* //Do not do this !!! own api route is not recommended
    //additional round trip which is not necessary which makes delay
    const response = await fetch("http://localhost:3000/api/comments");
    const data = await response.json(); */
  return {
    props: {
      comment,
    },
  };
}

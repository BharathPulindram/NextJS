import { useState } from "react";

function CommentsPage() {
  const [comments, setComments] = useState([]);
  const fecthComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  return (
    <>
      <button onClick={fecthComments}>Load Comments</button>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h2>{comment.name}</h2>
        </div>
      ))}
    </>
  );
}

export default CommentsPage;

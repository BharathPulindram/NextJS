import { useState } from "react";

function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const fecthComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  const submitComments = async () => {
    const response = await fetch("api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      />
      <button onClick={submitComments}>Submit New Comment</button>
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

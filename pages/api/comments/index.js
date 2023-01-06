import { Comments } from "../../../data/comments";
export default function handler(req, res) {
  if (req.method === "GET") res.status(200).json(Comments);
  else if (req.method === "POST") {
    const comment = req.body.comment;
    const newComment = {
      postId: Date.now(),
      id: Date.now(),
      name: comment,
      email: comment,
      body: comment,
    };
    Comments.push(newComment);
    res.status(201).json(newComment);
  } else if (req.method === "DELETE") {
    const { commentId } = req.query;
    const deletedComment = Comments.find(
      (comment) => comment.id === parseInt(commentId)
    );
    const index = Comments.findIndex(
      (comment) => comment.id === parseInt(commentId)
    );
    Comments.splice(index, 1);
    res.status(200).json(deletedComment);
  }
}

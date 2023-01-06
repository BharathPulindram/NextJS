import { Comments } from "../../../data/comments";

export default function handler(req, res) {
  const { commentId } = req.query;
  const comment = Comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  res.status(200).json(comment);
}

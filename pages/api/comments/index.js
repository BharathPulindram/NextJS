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
  }
}

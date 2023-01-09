export default function handler(req, res) {
  res.setPreviewData({ user: "Bharath" });
  res.redirect(req.query.redirect); //place any cms redirect path
}

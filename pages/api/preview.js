export default function handler(req, res) {
  res.setPreviewData({});
  res.redirect(req.query.redirect); //place any cms redirect path
}

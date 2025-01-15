exports.getPost = (req, res) => {
  res
    .status(200)
    .json({ post: [{ title: "first post", content: "this is the content" }] });
};

exports.crestePost = (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  res.status(201).json({
    message: "Post created successfully",
    post: {id: new Date().toISOString, title: title, content: content},
  });
};


const Story = ({ match }) => {
  const { id } = match.params;
  const article = { title: 'Article ' + id, content: 'Full content of article ' + id };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default Story;

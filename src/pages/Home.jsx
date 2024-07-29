import NewsList from '../components/NewsList';

const Home = () => {
  const articles = [
    { title: 'Article 1', summary: 'Summary of article 1', image: 'path/to/image1.jpg' },
    { title: 'Article 2', summary: 'Summary of article 2', image: 'path/to/image2.jpg' },
    { title: 'Article 3', summary: 'Summary of article 3', image: 'path/to/image3.jpg' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <NewsList articles={articles} />
    </div>
  );
};

export default Home;

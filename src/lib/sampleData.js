import Img from '../assets/testing.jpg'

const sampleData = [
   

  { id: 1, title: 'Global Political Shift', urlToImage: Img, category: 'World' },
  { id: 2, title: 'Climate Change Impact', urlToImage: Img, category: 'World' },
  { id: 3, title: 'World Economy Trends', urlToImage: Img, category: 'World' },
  { id: 4, title: 'International Relations', urlToImage: Img, category: 'World' },
  { id: 5, title: 'Global Health Issues', urlToImage: Img, category: 'World' },
  { id: 6, title: 'World News Highlights', urlToImage: Img, category: 'World' },
  { id: 7, title: 'Global Technology Advances', urlToImage: Img, category: 'World' },
  { id: 8, title: 'World Travel Updates', urlToImage: Img, category: 'World' },
  { id: 9, title: 'International Sports Events', urlToImage: Img, category: 'World' },
  { id: 10, title: 'Global Cultural Events', urlToImage: Img, category: 'World' },

  // Politics
  { id: 11, title: 'Political Scandals', urlToImage: Img, category: 'Politics' },
  { id: 12, title: 'Election Updates', urlToImage: Img, category: 'Politics' },
  { id: 13, title: 'Government Policies', urlToImage: Img, category: 'Politics' },
  { id: 14, title: 'Political Debates', urlToImage: Img, category: 'Politics' },
  { id: 15, title: 'Legislative Changes', urlToImage: Img, category: 'Politics' },
  { id: 16, title: 'Political Campaigns', urlToImage: Img, category: 'Politics' },
  { id: 17, title: 'International Political News', urlToImage: Img, category: 'Politics' },
  { id: 19, title: 'Public Protests', urlToImage: Img, category: 'Politics' },
  { id: 20, title: 'Political Analysis', urlToImage: Img, category: 'Politics' },

  // Business
  { id: 21, title: 'Market Trends', urlToImage: Img, category: 'Business' },
  { id: 22, title: 'Startup News', urlToImage: Img, category: 'Business' },
  { id: 23, title: 'Business Innovations', urlToImage: Img, category: 'Business' },
  { id: 24, title: 'Economic Policies', urlToImage: Img, category: 'Business' },
  { id: 25, title: 'Corporate News', urlToImage: Img, category: 'Business' },
  { id: 26, title: 'Investment Opportunities', urlToImage: Img, category: 'Business' },
  { id: 27, title: 'Business Conferences', urlToImage: Img, category: 'Business' },
  { id: 28, title: 'Business Leadership', urlToImage: Img, category: 'Business' },
  { id: 29, title: 'Retail Updates', urlToImage: Img, category: 'Business' },
  { id: 30, title: 'Tech Startups', urlToImage: Img, category: 'Business' },

  // Technology
  { id: 31, title: 'Latest Gadgets', urlToImage: Img, category: 'Technology' },
  { id: 32, title: 'Tech Innovations', urlToImage: Img, category: 'Technology' },
  { id: 33, title: 'AI Developments', urlToImage: Img, category: 'Technology' },
  { id: 34, title: 'Cybersecurity Updates', urlToImage: Img, category: 'Technology' },
  { id: 35, title: 'Software Releases', urlToImage: Img, category: 'Technology' },
  { id: 36, title: 'Tech Conferences', urlToImage: Img, category: 'Technology' },
  { id: 37, title: 'Gadget Reviews', urlToImage: Img, category: 'Technology' },
  { id: 38, title: 'Tech Industry Trends', urlToImage: Img, category: 'Technology' },
  { id: 39, title: 'Tech Company News', urlToImage: Img, category: 'Technology' },
  { id: 40, title: 'Innovative Startups', urlToImage: Img, category: 'Technology' },

  // Sports
  { id: 41, title: 'Football Scores', urlToImage: Img, category: 'Sports' },
  { id: 42, title: 'Olympic Games Updates', urlToImage: Img, category: 'Sports' },
  { id: 43, title: 'Tennis Tournaments', urlToImage: Img, category: 'Sports' },
  { id: 44, title: 'Basketball Highlights', urlToImage: Img, category: 'Sports' },
  { id: 45, title: 'Sports Injuries', urlToImage: Img, category: 'Sports' },
  { id: 46, title: 'Athlete Profiles', urlToImage: Img, category: 'Sports' },
  { id: 47, title: 'Sports Events Schedule', urlToImage: Img, category: 'Sports' },
  { id: 48, title: 'Esports News', urlToImage: Img, category: 'Sports' },
  { id: 49, title: 'Sports Betting Tips', urlToImage: Img, category: 'Sports' },
  { id: 50, title: 'Sports Achievements', urlToImage: Img, category: 'Sports' },

  // Health
  { id: 51, title: 'Health Tips', urlToImage: Img, category: 'Health' },
  { id: 52, title: 'Medical Breakthroughs', urlToImage: Img, category: 'Health' },
  { id: 53, title: 'Fitness Trends', urlToImage: Img, category: 'Health' },
  { id: 54, title: 'Diet and Nutrition', urlToImage: Img, category: 'Health' },
  { id: 55, title: 'Mental Health Awareness', urlToImage: Img, category: 'Health' },
  { id: 56, title: 'Health Research', urlToImage: Img, category: 'Health' },
  { id: 57, title: 'Healthcare Policies', urlToImage: Img, category: 'Health' },
  { id: 58, title: 'Health and Wellness', urlToImage: Img, category: 'Health' },
  { id: 59, title: 'Medical Events', urlToImage: Img, category: 'Health' },
  { id: 60, title: 'Health Gadgets', urlToImage: Img, category: 'Health' },

  // Education
  { id: 61, title: 'Educational Trends', urlToImage: Img, category: 'Education' },
  { id: 62, title: 'Student Life', urlToImage: Img, category: 'Education' },
  { id: 63, title: 'Online Learning', urlToImage: Img, category: 'Education' },
  { id: 64, title: 'School Events', urlToImage: Img, category: 'Education' },
  { id: 65, title: 'Educational Innovations', urlToImage: Img, category: 'Education' },
  { id: 66, title: 'Scholarships and Grants', urlToImage: Img, category: 'Education' },
  { id: 67, title: 'University News', urlToImage: Img, category: 'Education' },
  { id: 68, title: 'Academic Research', urlToImage: Img, category: 'Education' },
  { id: 69, title: 'Student Success Stories', urlToImage: Img, category: 'Education' },
  { id: 70, title: 'Educational Technology', urlToImage: Img, category: 'Education' },

  // Environment
  { id: 71, title: 'Climate Change Effects', urlToImage: Img, category: 'Environment' },
  { id: 72, title: 'Conservation Efforts', urlToImage: Img, category: 'Environment' },
  { id: 73, title: 'Sustainable Living', urlToImage: Img, category: 'Environment' },
  { id: 74, title: 'Environmental Policies', urlToImage: Img, category: 'Environment' },
  { id: 75, title: 'Green Technology', urlToImage: Img, category: 'Environment' },
  { id: 76, title: 'Wildlife Protection', urlToImage: Img, category: 'Environment' },
  { id: 77, title: 'Renewable Energy', urlToImage: Img, category: 'Environment' },
  { id: 78, title: 'Pollution Control', urlToImage: Img, category: 'Environment' },
  { id: 79, title: 'Environmental Studies', urlToImage: Img, category: 'Environment' },
  { id: 80, title: 'Sustainable Development Goals', urlToImage: Img, category: 'Environment' },

  // Sustainability
  { id: 81, title: 'Sustainable Practices', urlToImage: Img, category: 'Sustainability' },
  { id: 82, title: 'Green Initiatives', urlToImage: Img, category: 'Sustainability' },
  { id: 83, title: 'Eco-friendly Products', urlToImage: Img, category: 'Sustainability' },
  { id: 84, title: 'Corporate Sustainability', urlToImage: Img, category: 'Sustainability' },
  { id: 85, title: 'Sustainable Agriculture', urlToImage: Img, category: 'Sustainability' },
  { id: 86, title: 'Sustainable Fashion', urlToImage: Img, category: 'Sustainability' },
  { id: 87, title: 'Sustainable Energy Solutions', urlToImage: Img, category: 'Sustainability' },
  { id: 88, title: 'Zero Waste Lifestyle', urlToImage: Img, category: 'Sustainability' },
  { id: 89, title: 'Green Building Practices', urlToImage: Img, category: 'Sustainability' },
  { id: 90, title: 'Sustainability Reports', urlToImage: Img, category: 'Sustainability' },

  // Religion
  { id: 91, title: 'Religious Festivals', urlToImage: Img, category: 'Religion' },
  { id: 92, title: 'Faith Leaders', urlToImage: Img, category: 'Religion' },
  { id: 93, title: 'Religious Teachings', urlToImage: Img, category: 'Religion' },
  { id: 94, title: 'Interfaith Dialogues', urlToImage: Img, category: 'Religion' },
  { id: 95, title: 'Religious Art and Culture', urlToImage: Img, category: 'Religion' },
  { id: 96, title: 'Religious Ceremonies', urlToImage: Img, category: 'Religion' },
  { id: 97, title: 'Faith-based Organizations', urlToImage: Img, category: 'Religion' },
  { id: 98, title: 'Religious History', urlToImage: Img, category: 'Religion' },
  { id: 99, title: 'Spiritual Practices', urlToImage: Img, category: 'Religion' },
  { id: 100, title: 'Religious News', urlToImage: Img, category: 'Religion' },

  // Entertainment
  { id: 101, title: 'Movie Releases', urlToImage: Img, category: 'Entertainment' },
  { id: 102, title: 'Celebrity News', urlToImage: Img, category: 'Entertainment' },
  { id: 103, title: 'Music Releases', urlToImage: Img, category: 'Entertainment' },
  { id: 104, title: 'TV Shows', urlToImage: Img, category: 'Entertainment' },
  { id: 105, title: 'Theater Productions', urlToImage: Img, category: 'Entertainment' },
  { id: 106, title: 'Entertainment Awards', urlToImage: Img, category: 'Entertainment' },
  { id: 107, title: 'Streaming Content', urlToImage: Img, category: 'Entertainment' },
  { id: 108, title: 'Pop Culture Trends', urlToImage: Img, category: 'Entertainment' },
  { id: 109, title: 'Celebrity Interviews', urlToImage: Img, category: 'Entertainment' },
  { id: 110, title: 'Entertainment Reviews', urlToImage: Img, category: 'Entertainment' },
  { id: 111, title: 'Celebrity Entertainment Awards', urlToImage: Img, category: 'Entertainment' },
  { id: 112, title: 'Streaming Celebrity Content', urlToImage: Img, category: 'Entertainment' },
  { id: 113, title: 'Celebrity Pop Culture Trends', urlToImage: Img, category: 'Entertainment' },
  { id: 114, title: 'Pop Celebrity Interviews', urlToImage: Img, category: 'Entertainment' },
  { id: 115, title: 'Entertainment Reviews', urlToImage: Img, category: 'Entertainment' },
];
  
  export default sampleData;
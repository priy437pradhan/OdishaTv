import Img from '../assets/testing.jpg';
import watch1 from '../assets/watch.jpg';
import watch2 from '../assets/watch2.jpg';
import watch3 from '../assets/watch3.jpg';
import TopTrending from '../assets/TopTrending.jpg';
import TopTrending2 from '../assets/TopTrending2.jpg';
import TopTrending3 from '../assets/TopTrending3.jpg';
import TopTrending4 from '../assets/TopTrending4.jpg';
import TopTrending5 from '../assets/TopTrending5.jpg';
import TopTrending6 from '../assets/TopTrending6.jpg';
import TopTrending7 from '../assets/TopTrending7.jpg';
import TopTrending8 from '../assets/TopTrending8.jpg';
import TopTrending10 from '../assets/TopTrending10.jpg';
import TopTrending11 from '../assets/TopTrending11.jpg';

import Web1 from '../assets/web1.jpg';
import Web2 from '../assets/web2.jpg';
import Web3 from '../assets/web3.jpg';
import Web4 from '../assets/web4.jpg';
import Web5 from '../assets/web5.jpg';
import LiveNewsCard from '../assets/LiveNewsCard.jpg';
import liveNewsItem1 from '../assets/liveNewsItem1.jpg';
import liveNewsItem2 from '../assets/liveNewsItem2.jpg';
import singleCardItemOne from '../assets/singleCardItemOne.jpg';
import singleCardItemOne2 from '../assets/singleCardItemOne2.jpg';
import singleCardItemOne3 from '../assets/singleCardItemOne3.jpg';
import singleCardItemTwo from '../assets/singleCardItemTwo.jpg';
import singleCardItemTwo2 from '../assets/singleCardItemTwo2.jpg';
import singleCardItemTwo3 from '../assets/singleCardItemTwo3.jpg';

import cardThreeData from  '../assets/cardThreeData.jpg';
import cardTwoData from '../assets/cardTwoData.jpg';
import cardTwoData2 from '../assets/cardTwoData2.jpg';
import cardTwoData3 from '../assets/cardTwoData3.jpg';
import cardTwoData4 from '../assets/cardTwoData4.jpg';
import cardTwoData5 from '../assets/cardTwoData5.jpg';
import cardTwoData6 from '../assets/cardTwoData6.jpg';
import cardTwoData7 from '../assets/cardTwoData7.jpg';

import opinion from '../assets/opinion.jpg';
import opinion2 from '../assets/opinion2.jpg';
import opinion3 from '../assets/opinion3.jpg';
import opinion4 from '../assets/opinion4.jpg';

import viral from '../assets/viral.jpg';
import viral2 from '../assets/viral2.jpg';
import viral3 from '../assets/viral3.jpg';
import viral4 from '../assets/viral4.jpg';
import viral5 from '../assets/viral5.jpg';
import viral6 from '../assets/viral6.jpg';

import dailyShow from '../assets/dailyShow.jpg';
import dailyShow2 from '../assets/dailyShow2.jpg';
import dailyShow3 from '../assets/dailyShow3.jpg';

export const sampleData = [
  { id: 1, title: 'Rising sea levels threaten coastal cities worldwide.', urlToImage: watch1, category: 'World', section: 'watch_card' },
  { id: 2, title: 'Government announces new infrastructure investment plan.', urlToImage: watch2, category: 'World', section: 'watch_card' },
  { id: 3, title: 'New study links diet to improved mental health.', urlToImage: watch3, category: 'World', section: 'watch_card' },
  // { id: 4, title: 'International Relations', urlToImage: Img, category: 'World', section: 'watch_card' },
  // { id: 5, title: 'Global Health Issues', urlToImage: Img, category: 'World', section: 'watch_card' },
  
  { id: 7, title: 'Global Technology AdvancesBreakthrough in genetic research.', urlToImage: TopTrending, category: 'World', section: 'TopTrending_card' },
  { id: 8, title: 'Breakthrough in genetic research could extend human lifespan.', urlToImage: TopTrending2, category: 'World', section: 'TopTrending_card' },
  { id: 9, title: 'Government enacts sweeping reforms to healthcare system.', urlToImage: TopTrending3, category: 'World', section: 'TopTrending_card' },
  { id: 10, title: 'Major sports event postponed due to health concerns.', urlToImage: TopTrending4, category: 'World', section: 'TopTrending_card' },
  { id: 111, title: 'Global Cultural Events  enacts sweeping reforms to healthcare system', urlToImage: Img, category: 'World', section: 'TopTrending_card' },
  // { id: 112, title: 'Global Cultural Events', urlToImage: Img, category: 'World', section: 'TopTrending_card' },
  // { id: 113, title: 'Global Cultural Events', urlToImage: Img, category: 'World', section: 'TopTrending_card' },

  { id: 11, title: 'Major sports event postponed due to health concerns.', urlToImage: TopTrending5, category: 'Politics', section: 'TopTrending_card' },
  { id: 12, title: 'Scientists develop promising vaccine for infectious disease.', urlToImage: TopTrending6, category: 'Politics', section: 'TopTrending_card'},
  { id: 13, title: 'Major oil spill devastates marine ecosystem.', urlToImage: TopTrending7, category: 'Politics', section: 'TopTrending_card' },
  { id: 14, title: 'Tech company faces backlash over privacy concerns.', urlToImage: TopTrending8, category: 'Politics', section: 'TopTrending_card' },
  { id: 15, title: 'Major oil spill devastates marine ecosystem.', urlToImage: TopTrending6, category: 'Politics', section: 'TopTrending_card' },
  { id: 16, title: 'Scientists develop promising vaccine for infectious disease.', urlToImage: TopTrending10, category: 'Politics', section: 'TopTrending_card' },
  { id: 17, title: 'Major oil spill devastates marine ecosystem.', urlToImage: TopTrending11, category: 'Politics', section: 'TopTrending_card' },
  { id: 19, title: 'World leaders convene for climate change summit in Paris', urlToImage: LiveNewsCard, category: 'Politics', section: 'LiveNewsCard_card' },
  { id: 18, title: 'New technology promises to revolutionize renewable energy', urlToImage: liveNewsItem2, category: 'Politics', section: 'liveNewsItem_card' },
  { id: 6, title: 'Stock markets rally after positive earnings reports', urlToImage: liveNewsItem1, category: 'World', section: 'liveNewsItem_card' },
 

  { id: 20, title: 'Historic peace agreement signed in the Middle East', urlToImage: Web1, category: 'Business', section: 'Topstories_card' },
  { id: 21, title: 'Major cyberattack targets global financial institutions.', urlToImage: Web2, category: 'Business', section: 'Topstories_card' },
  { id: 22, title: 'Breakthrough in cancer research offers new hope for patients.', urlToImage: Web3, category: 'Business', section: 'Topstories_card' },
  { id: 23, title: 'Economic PoliciesGlobal protests demand action on climate change.', urlToImage: Web4, category: 'Business', section: 'FirstStories_card' },
  { id: 24, title: 'Global protests demand action on climate change.', urlToImage: Web5, category: 'Business', section: 'SecondStories_card' },
  { id: 25, title: 'Record-breaking temperatures recorded across Europe.Record-breaking temperatures recorded across Europe', urlToImage: singleCardItemOne, category: 'Business', section: 'singleCardItemOne_card' },
  { id: 26, title: 'Historic court ruling advances LGBTQ+ rights.', urlToImage: singleCardItemOne2, category: 'Business', section: 'singleCardItemOne_card' },
  { id: 27, title: 'Economic sanctions imposed on rogue nation.', urlToImage: singleCardItemOne3, category: 'Business', section: 'singleCardItemOne_card' },
  { id: 28, title: 'Wildfires rage across California, prompting evacuations.', urlToImage: singleCardItemTwo, category: 'Business', section: 'singleCardItemTwo_card' },
  { id: 29, title:'Global protests demand action on climate change.', urlToImage: singleCardItemTwo3, category: 'Technology', urlToImage: singleCardItemTwo2, category: 'Business', section: 'singleCardItemTwo_card' },

  { id: 30, title: 'Tech giant announces groundbreaking new product.', urlToImage: singleCardItemTwo3, category: 'Technology', section: 'singleCardItemTwo_card' },
  // { id: 31, title: 'Tech Innovations', urlToImage: Img, category: 'Technology', section: 'rightbarTrending' },
  { id: 32, title: 'Major tech company invests in space exploration invests in space exploration invests in space exploration .', urlToImage: cardThreeData, category: 'Technology', section: 'cardThreeData_card' },
  { id: 33, title: 'Cybersecurity UpdatesMajor tech company invests in space exploration.', urlToImage: cardTwoData, category: 'Technology', section: 'cardTwoData_card' },
  { id: 34, title: 'Software Rising healthcare costs create financial strain for individuals.', urlToImage: cardTwoData2, category: 'Technology', section: 'cardTwoData_card' },
  { id: 35, title: 'Government unveils plan to modernize public transportation.', urlToImage: cardTwoData3, category: 'Technology', section: 'cardTwoData_card' },
  { id: 36, title: 'Rising cyber threats prompt calls for increased cybersecurity.', urlToImage: cardTwoData4, category: 'Technology', section: 'cardTwoData_card' },
  { id: 37, title: 'Major tech company invests in space exploration.', urlToImage:cardTwoData5, category: 'Technology', section: 'cardTwoData_card' },
  { id: 38, title: 'Rising cyber threats prompt calls for increased cybersecurity.', urlToImage: cardTwoData6, category: 'Technology', section: 'cardTwoData_card' },
  { id: 39, title: 'Rising cyber threats prompt calls for increased cybersecurity.', urlToImage: cardTwoData7, category: 'Technology', section: 'cardTwoData_card' },
  // { id: 139, title: 'Innovative Startups', urlToImage: Img, category: 'Technology', section: 'cardTwoData_card' },
  { id:140, title: 'Innovative Startups  enacts sweeping reforms to healthcare system', urlToImage: Img, category: 'Technology', section: 'cardTwoData_card' },

  { id: 40, title: 'Olympic Games Government announces new infrastructure.', urlToImage: opinion, category: 'Sports', section: 'opiniondata_card' },
  { id: 41, title: 'Rising healthcare costs create financial strain for individuals.', urlToImage: opinion2, category: 'Sports', section: 'opiniondata_card'  },
  { id: 42, title: 'Rising cyber threats prompt calls for increased cybersecurity.', urlToImage: opinion3, category: 'Sports', section: 'opiniondata_card' },
  { id: 43, title: 'Basketball New study links diet to improved mental health.', urlToImage: opinion4, category: 'Sports', section: 'opiniondata_card' },
  { id: 44, title: 'Sports New study links diet to improved mental health.', urlToImage: Web1, category: 'Sports', section: 'Mainstories_card' },
  { id: 45, title: 'Athlete Major airline files for bankruptcy amid financial struggles.', urlToImage: Web2, category: 'Sports', section: 'Mainstories_card' },
  { id: 46, title: 'Tech giant announces groundbreaking new product.', urlToImage: Web3, category: 'Sports', section: 'Mainstories_card' },
  { id: 47, title: 'Scientists discover new species in the Amazon rainforest.', urlToImage: Web4, category: 'Sports', section: 'Mainstories_card' },
  { id: 48, title: 'Government unveils ambitious plan to reduce carbon emissions.', urlToImage: Web5, category: 'Sports', section: 'Mainstories_card' },
  // { id: 49, title: 'Sports Achievements', urlToImage: Img, category: 'Sports', section: 'Mainstories_card' },

  { id: 50, title: 'Government enacts new laws to protect worker', urlToImage: viral, category: 'Health', section: 'ViralCardData_card' },
  { id: 51, title: 'Major breakthrough in stem cell research.', urlToImage: viral2, category: 'Health', section: 'ViralCardData_card' },
  { id: 52, title: 'Rising cyber threats prompt calls for increased security measures.', urlToImage: viral3, category: 'Health', section: 'ViralCardData_card' },
  { id: 53, title: 'Diet and NutritionGovernment announces plan to improve public education.', urlToImage: viral4, category: 'Health', section: 'ViralCardData_card' },
  { id: 54, title: 'Mental Health Government introduces new policies to support affordable housing', urlToImage: viral5, category: 'Health', section: 'ViralCardData_card' },
  { id: 55, title: 'Health Rising tensions lead to international conflict.', urlToImage: viral6, category: 'Health', section: 'ViralCardData_card' },
  // { id: 56, title: 'Healthcare Policies', urlToImage: Img, category: 'Health', section: 'DailyShowCard_card' },
  { id: 57, title: 'Health and Wellness', urlToImage: dailyShow, category: 'Health', section: 'DailyShowCard_card', description: 'a picture in words of somebody/something or of something that happened' },
  { id: 58, title: 'Medical Events a picture in words of somebody/something or of something that happened ', urlToImage: dailyShow2, category: 'Health', section: 'DailyShowCard_card', description: 'a picture in words of somebody/something or of something that happened' },
  { id: 59, title: 'Health Gadgets', urlToImage: dailyShow3, category: 'Health', section: 'DailyShowCard_card',description: 'a picture in words of somebody/something or of something that happened ,' },

  // { id: 60, title: 'Educational Trends', urlToImage: Img, category: 'Education', section: 'DailyShowCard_card' },
  // { id: 61, title: 'Student Life', urlToImage: Img, category: 'Education', section: 'DailyShowCard_card' },
  { id: 62, title: 'Online Learning', urlToImage: Img, category: 'Education', section: 'Video_card' },
  { id: 63, title: 'School Events', urlToImage: Img, category: 'Education', section: 'Photo_card' },
  // { id: 64, title: 'Educational Innovations', urlToImage: Img, category: 'Education', section: 'VideoPhoto_card' },
  { id: 65, title: 'Scholarships', urlToImage: Img, category: 'Education', section: 'PhotoSub_card' },
  { id: 66, title: 'Teaching Methods', urlToImage: Img, category: 'Education', section: 'PhotoSub_card' },
  { id: 67, title: 'Higher Education', urlToImage: Img, category: 'Education', section: 'VideoSub_card' },
  { id: 68, title: 'Education Policy', urlToImage: Img, category: 'Education', section: 'VideoSub_card' },
  { id: 69, title: 'Student Success Stories', urlToImage: Img, category: 'Education', section: 'Success Stories' },

  { id: 70, title: 'Environmental Issues', urlToImage: Img, category: 'Environment', section: 'Issues' },
  { id: 71, title: 'Climate Action', urlToImage: Img, category: 'Environment', section: 'Climate Action' },
  { id: 72, title: 'Wildlife Conservation', urlToImage: Img, category: 'Environment', section: 'Wildlife' },
  { id: 73, title: 'Green Technologies', urlToImage: Img, category: 'Environment', section: 'Technologies' },
  { id: 74, title: 'Sustainability Practices', urlToImage: Img, category: 'Environment', section: 'Sustainability' },
  { id: 75, title: 'Renewable Energy', urlToImage: Img, category: 'Environment', section: 'Renewable Energy' },
  { id: 76, title: 'Environmental Policies', urlToImage: Img, category: 'Environment', section: 'Policies' },
  { id: 77, title: 'Environmental Activism', urlToImage: Img, category: 'Environment', section: 'Activism' },
  { id: 78, title: 'Climate Change Effects', urlToImage: Img, category: 'Environment', section: 'Climate Change' },
  { id: 79, title: 'Green Living', urlToImage: Img, category: 'Environment', section: 'Living' },

  { id: 80, title: 'Religious Events', urlToImage: Img, category: 'Religion', section: 'Events' },
  { id: 81, title: 'Faith-based Initiatives', urlToImage: Img, category: 'Religion', section: 'Initiatives' },
  { id: 82, title: 'Interfaith Dialogues', urlToImage: Img, category: 'Religion', section: 'Dialogues' },
  { id: 83, title: 'Religious News', urlToImage: Img, category: 'Religion', section: 'News' },
  { id: 84, title: 'Spiritual Practices', urlToImage: Img, category: 'Religion', section: 'Practices' },
  { id: 85, title: 'Religious Figures', urlToImage: Img, category: 'Religion', section: 'Figures' },
  { id: 86, title: 'Religious Festivals', urlToImage: Img, category: 'Religion', section: 'Festivals' },
  { id: 87, title: 'Religious Education', urlToImage: Img, category: 'Religion', section: 'Education' },
  { id: 88, title: 'Faith and Society', urlToImage: Img, category: 'Religion', section: 'Society' },
  { id: 89, title: 'Religious Literature', urlToImage: Img, category: 'Religion', section: 'Literature' },

  { id: 90, title: 'Entertainment News', urlToImage: Img, category: 'Entertainment', section: 'News' },
  { id: 91, title: 'Celebrity Gossip', urlToImage: Img, category: 'Entertainment', section: 'Gossip' },
  { id: 92, title: 'Movie Reviews', urlToImage: Img, category: 'Entertainment', section: 'Movies' },
  { id: 93, title: 'TV Shows Updates', urlToImage: Img, category: 'Entertainment', section: 'TV Shows' },
  { id: 94, title: 'Music Releases', urlToImage: Img, category: 'Entertainment', section: 'Music' },
  { id: 95, title: 'Entertainment Events', urlToImage: Img, category: 'Entertainment', section: 'Events' },
  { id: 96, title: 'Celebrity Interviews', urlToImage: Img, category: 'Entertainment', section: 'Interviews' },
  { id: 97, title: 'Entertainment Industry Trends', urlToImage: Img, category: 'Entertainment', section: 'Trends' },
  { id: 98, title: 'Gossip Columns', urlToImage: Img, category: 'Entertainment', section: 'Columns' },
  { id: 99, title: 'Entertainment Awards', urlToImage: Img, category: 'Entertainment', section: 'Awards' },
];


export const newsArticles = [
  {
    id: 1,
    title: 'Go First Insolvency: What Should The Airline Do Next to The Highway?',
    urlToImage: Img
  },
  {
    id: 2,
    title: 'Go First Insolvency: What Should The Airline Do Next to The Highway?',
    urlToImage: Img
  },
  {
    id: 3,
    title: 'Go First Insolvency: What Should The Airline Do Next to The Highway?',
    urlToImage: Img
  }
];

export const photos = [
  {
    id: 1,
    title: 'Go First Insolvency: What Should The Airline Do Next to The Highway?',
    urlToImage: "https://via.placeholder.com/300"
  },
  {
    id: 2,
    title: 'Go First Insolvency: What Should The Airline Do Next to The Highway?',
    urlToImage: "https://via.placeholder.com/300"
  },
  {
    id: 3,
    title: 'Go First Insolvency: What Should The Airline Do Next to The Highway?',
    urlToImage: "https://via.placeholder.com/300"
  }
];

export const videos = [
  {
    id: 1,
    title: 'Go First Insolvency: What Should The Airline Do Next to The Highway?',
    urlToImage: "https://via.placeholder.com/300"
  },
  {
    id: 2,
    title: 'Go First Insolvency: What Should The Airline Do Next to The Highway?',
    urlToImage: "https://via.placeholder.com/300"
  },
  {
    id: 3,
    title: 'Go First Insolvency: What Should The Airline Do Next to The Highway?',
    urlToImage: "https://via.placeholder.com/300"
  }

  
];
export const Forhome = [
  {
    imgSrc: Img,
    imgAlt: 'Vashu Bhagnani',
    imgTitle: 'Vashu Bhagnani',
    title: 'Go First Insolvency: What Should The Airline Do Next to The Highway?',
  },
  {
    imgSrc: Img,
    imgAlt: 'Vashu Bhagnani',
    imgTitle: 'Vashu Bhagnani',
    title: 'Go First Insolvency: What Should The Airline Do Next to The Highway?',
  },
  {
    imgSrc: Img,
    imgAlt: 'Vashu Bhagnani',
    imgTitle: 'Vashu Bhagnani',
    title: 'Go First Insolvency: What Should The Airline Do Next to The Highway?',
  },
  
  
];
export const ForProfile = [
  {
    id: 1,
    title: "Video 1",
    title: 'Go First Insolvency: What Should The Airline Do Next to The Highway?',
    urlToImage: Img
  },
  {
    id: 2,
    title: "Video 2",
    title: 'Go First Insolvency: What Should The Airline Do Next to The Highway?',
    urlToImage: Img
  },
  {
    id: 3,
    title: "Video 3",
    title: 'Go First Insolvency: What Should The Airline Do Next to The Highway?',
    urlToImage: Img

  }
  
];
export const ForcontactData = [
  {
    imgSrc: Img,
    imgAlt: 'Vashu Bhagnani',
    imgTitle: 'Vashu Bhagnani',
    title: 'Go First Insolvency: What Should The Airline Do Next to The Highway?',
  },
  {
    imgSrc: Img,
    imgAlt: 'Vashu Bhagnani',
    imgTitle: 'Vashu Bhagnani',
    title: 'Go First Insolvency: What Should The Airline Do Next to The Highway?',
  },
  {
    imgSrc: Img,
    imgAlt: 'Vashu Bhagnani',
    imgTitle: 'Vashu Bhagnani',
    title: 'Go First Insolvency: What Should The Airline Do Next to The Highway?',
  },
  
];


export default { sampleData, newsArticles, photos, videos,Forhome, ForProfile, ForcontactData};
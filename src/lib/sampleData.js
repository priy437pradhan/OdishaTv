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

import cardThreeData from  '../assets/cardThreeData_card.jpg';
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

import videoSec from '../assets/videoSec.jpg';
import videoSubSec1 from '../assets/videoSubSec1.jpg';
import videoSubSec2 from '../assets/videoSubSec2.jpg';
import photoSec from '../assets/PhotoSec.jpg';
import photoSubSec1 from '../assets/PhotoSubSec1.jpg';
import photoSubSec2 from '../assets/photoSubSec2.jpg';


export const sampleData = [
  { id: 1,
     title: 'Rising sea levels threaten.',
      urlToImage: watch1, category: 'World', 
      section: 'watch_card', 
      storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
    primaryTag: 'Politics',
    secondaryTag: 'Climate Change' 
  },
  { id: 2, 
    title: 
    'Government announces new infrastructure investment plan.',
     urlToImage: watch2, 
     category: 'World', 
     section: 'watch_card',  
      storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
    primaryTag: 'Technology',
    secondaryTag: 'Renewable Energy'
   },
  { id: 3,
     title: 'New study links diet to improved mental health.', 
     urlToImage: watch3, 
     category: 'Entertainment',
      section: 'watch_card',  
      storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
    primaryTag: 'Politics',
    secondaryTag: 'Peace' 
  },
  // { id: 4, title: 'International Relations', urlToImage: Img, category: 'World', section: 'watch_card' },
  // { id: 5, title: 'Global Health Issues', urlToImage: Img, category: 'World', section: 'watch_card' },
  
  { id: 7, 
    title: 'Global Technology AdvancesBreakthrough in genetic research.',
     urlToImage: TopTrending,
     category: 'Entertainment',
     section: 'TopTrending_card', 
     storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan..',
    primaryTag: 'Health',
    secondaryTag: 'Research' 
  },
  { id: 8,
     title: 'Breakthrough in genetic research could extend human lifespan.', 
     urlToImage: TopTrending2, 
     category: 'Entertainment', 
     section: 'TopTrending_card', 
     storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
    primaryTag: 'Health',
    secondaryTag: 'Research' 
  },
  { id: 9,
     title: 'Government enacts sweeping reforms to healthcare system.',
      urlToImage: TopTrending3, 
      category: 'Entertainment',
       section: 'TopTrending_card',
        storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
    primaryTag: 'Environment',
    secondaryTag: 'Protest' 
  },
  { id: 10, 
    title: 'Major sports event postponed due to health concerns.', 
    urlToImage: TopTrending4, category: 'World', 
    section: 'TopTrending_card', 
    storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
    primaryTag: 'Environment',
    secondaryTag: 'Wildfires' 
  },
  { id: 111, 
    title: 'Global Cultural Events  enacts sweeping reforms to healthcare system',
     urlToImage: Img, 
     category: 'World',
      section: 'TopTrending_card',
      storyIntro: 'A major tech company has revealed an innovative new product.Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
    primaryTag: 'Technology',
    secondaryTag: 'Innovation' 
  },
  // { id: 112, title: 'Global Cultural Events', urlToImage: Img, category: 'World', section: 'TopTrending_card' },
  // { id: 113, title: 'Global Cultural Events', urlToImage: Img, category: 'World', section: 'TopTrending_card' },

  { id: 11, 
    title: 'Major sports event postponed due to health concerns.',
     urlToImage: TopTrending5,
      category: 'Politics',
      section: 'TopTrending_card',
      storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
    primaryTag: 'Technology',
    secondaryTag: 'Cybersecurity'
   },
  { id: 12, 
    title: 'Scientists develop promising vaccine for infectious disease.', 
    urlToImage: TopTrending6,
     category: 'Religion', 
    section: 'TopTrending_card',
    storyIntro: 'Sea levels are rising at an unprecedented rate, threatening coastal cities globally.Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
    primaryTag: 'Environment',
    secondaryTag: 'Climate Change'
  },
  { id: 13,
     title: 'Major oil spill devastates marine ecosystem.', 
     urlToImage: TopTrending7, 
     category: 'Religion',
      section: 'TopTrending_card',
    storyIntro: 'The government has unveiled a new plan to invest heavily in infrastructure.Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
    primaryTag: 'Politics',
    secondaryTag: 'Religion'
   },
  { id: 14, 
    title: 'Tech company faces backlash over privacy concerns.', 
    urlToImage: TopTrending8,
     category: 'Politics',
     section: 'TopTrending_card',
     storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
    primaryTag: 'Technology',
    secondaryTag: 'Cybersecurity' 
  },
  { id: 15, 
    title: 'Major oil spill devastates marine ecosystem.',
     urlToImage: TopTrending6,
      category: 'Religion', 
      section: 'TopTrending_card',
      storyIntro: 'A major tech company has revealed an innovative new product.Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
      primaryTag: 'Technology',
      secondaryTag: 'Innovation' 
  },
  { id: 16,
     title: 'Scientists develop promising vaccine for infectious disease.', 
     urlToImage: TopTrending10, 
     category: 'Politics', 
     section: 'TopTrending_card',
     storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
     primaryTag: 'Environment',
     secondaryTag: 'Wildfires' 
   },
  { id: 17,
     title: 'Major oil spill devastates marine ecosystem.', 
     urlToImage: TopTrending11, 
     category: 'Politics', 
     section: 'TopTrending_card',
     storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
    primaryTag: 'Environment',
    secondaryTag: 'Protest'  
  },
  { id: 19, title: 'World leaders convene for climate change summit in Paris ',
     urlToImage: LiveNewsCard, 
     category: 'Politics',
      section: 'LiveNewsCard_card' , 
      storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
      primaryTag: 'Health',
      secondaryTag: 'Research' 
  },
  { id: 18, 
    title: 'New technology promises to revolutionize renewable energy',
     urlToImage: liveNewsItem2,
      category: 'Politics',
       section: 'liveNewsItem_card',
       storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan..',
       primaryTag: 'Health',
       secondaryTag: 'Research' 
   },
  { id: 6, 
    title: 'Stock markets rally after positive earnings reports',
     urlToImage: liveNewsItem1, 
     category: 'World', 
     section: 'liveNewsItem_card',
    storyIntro: 'Major healthcare reforms have been enacted by the government.A recent study has found a strong connection between diet and mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.',
    primaryTag: 'Health',
    secondaryTag: 'Reform'
   },
 

  { id: 20, 
    title: 'Historic peace agreement signed in the Middle East',
     urlToImage: Web1,
      category: 'Sustainability',
       section: 'Topstories_card' , 
       storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
       primaryTag: 'Politics',
       secondaryTag: 'Peace' 
  },
  { id: 21, 
    title: 'Major cyberattack targets global financial institutions.',
     urlToImage: Web2,
      category: 'Sustainability', 
     section: 'Topstories_card', 
     storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
    primaryTag: 'Politics',
    secondaryTag: 'Peace' 
  },
  { id: 22,
     title: 'Breakthrough in cancer research offers new hope for patients.', 
     urlToImage: Web3, 
     category: 'Sustainability',
      section: 'Topstories_card',
      storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
      primaryTag: 'Politics',
      secondaryTag: 'Peace' 
   },
  { id: 23,
     title: 'Economic PoliciesGlobal protests demand action on climate change.', 
     urlToImage: Web4, category: 'Business', 
     section: 'FirstStories_card' ,
     storyIntro: 'A major tech company has revealed an innovative new product.Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
     primaryTag: 'Technology',
     secondaryTag: 'Innovation' 
  },
  { id: 24, 
    title: 'Global protests demand action on climate change.',
     urlToImage: Web5,
      category: 'Business',
       section: 'SecondStories_card',
       storyIntro: 'A major tech company has revealed an innovative new product.Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
       primaryTag: 'Technology',
       secondaryTag: 'Innovation' 
  },
  { id: 25,
     title: 'Record-breaking temperatures recorded across Europe.Record-breaking temperatures recorded across Europe',
      urlToImage: singleCardItemOne,
       category: 'Business', 
       section: 'singleCardItemOne_card',
       storyIntro: 'A major tech company has revealed an innovative new product.Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
       primaryTag: 'Technology',
       secondaryTag: 'Innovation' 
       },
  { id: 26, title: 'Historic court ruling advances LGBTQ+ rights.',
     urlToImage: singleCardItemOne2, 
     category: 'Business',
      section: 'singleCardItemOne_card',
      storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
    primaryTag: 'Environment',
    secondaryTag: 'Wildfires' 
   },
  { id: 27, 
    title: 'Economic sanctions imposed on rogue nation.',
     urlToImage: singleCardItemOne3,
      category: 'Business', 
      section: 'singleCardItemOne_card',
      storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
      primaryTag: 'Health',
      secondaryTag: 'Research'  
  },
  { id: 28,
     title: 'Wildfires rage across California, prompting evacuations.', 
     urlToImage: singleCardItemTwo,
      category: 'Business',
       section: 'singleCardItemTwo_card' , 
       storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan..',
    primaryTag: 'Health',
    secondaryTag: 'Research' 
  },
  { id: 29,
     title:'Global protests demand action on climate change.',
      urlToImage: singleCardItemTwo3, 
      category: 'Technology',
       urlToImage: singleCardItemTwo2,
        category: 'Environment', 
        section: 'singleCardItemTwo_card' , 
        storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
    primaryTag: 'Technology',
    secondaryTag: 'Cybersecurity'
  },

  { id: 30, 
    title: 'Tech giant announces groundbreaking new product.', 
    urlToImage: singleCardItemTwo3, 
    category: 'Technology',
     section: 'singleCardItemTwo_card',
     storyIntro: 'A major tech company has revealed an innovative new product.Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
     primaryTag: 'Technology',
     secondaryTag: 'Innovation' 
   },
  // { id: 31, title: 'Tech Innovations', urlToImage: Img, category: 'Technology', section: 'rightbarTrending' },
  { id: 32,
     title: 'Major tech company invests in space exploration invests in space exploration invests in space exploration .', 
     urlToImage: cardThreeData,
      category: 'Technology',
       section: 'cardThreeData_card',
       storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
    primaryTag: 'Environment',
    secondaryTag: 'Wildfires' 
  },
  { id: 33, 
    title: 'Cybersecurity UpdatesMajor tech company invests in space exploration.',
     urlToImage: cardTwoData, 
     category: 'Technology', 
     section: 'cardTwoData_card', 
     storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
    primaryTag: 'Health',
    secondaryTag: 'Research' 
  },
  { id: 34,
     title: 'Software Rising healthcare costs create financial strain for individuals.', 
    urlToImage: cardTwoData2, 
    category: 'Technology', 
    section: 'cardTwoData_card', 
    storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan..',
    primaryTag: 'Health',
    secondaryTag: 'Research' 
   },
  { id: 35,
     title: 'Government unveils plan to modernize public transportation.',
      urlToImage: cardTwoData3,
       category: 'Technology',
        section: 'cardTwoData_card', 
        storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
        primaryTag: 'Health',
        secondaryTag: 'Research' 
  },
  { id: 36, 
    title: 'Rising cyber threats prompt calls for increased cybersecurity.',
     urlToImage: cardTwoData4, 
     category: 'Technology',
      section: 'cardTwoData_card', 
      storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan..',
    primaryTag: 'Health',
    secondaryTag: 'Research' 
  },
  { id: 37, 
    title: 'Major tech company invests in space exploration.',
     urlToImage:cardTwoData5, 
     category: 'Technology', 
     section: 'cardTwoData_card',
     storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
     primaryTag: 'Politics',
     secondaryTag: 'Peace'  
  },
  { id: 38,
     title: 'Rising cyber threats prompt calls for increased cybersecurity.',
      urlToImage: cardTwoData6,
       category: 'Technology',
        section: 'cardTwoData_card',
        storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
        primaryTag: 'Politics',
        secondaryTag: 'Peace' 
   },
  { id: 39,
     title: 'Rising cyber threats prompt calls for increased cybersecurity.',
      urlToImage: cardTwoData7, 
      category: 'Technology', 
      section: 'cardTwoData_card',
      storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
      primaryTag: 'Politics',
      secondaryTag: 'Peace' 
  },
  // { id: 139, title: 'Innovative Startups', urlToImage: Img, category: 'Technology', section: 'cardTwoData_card' },
  { id:140, 
    title: 'Innovative Startups  enacts sweeping reforms to healthcare system',
     urlToImage: Img,
      category: 'Technology', 
      section: 'cardTwoData_card',
      storyIntro: 'A major tech company has revealed an innovative new product.Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
    primaryTag: 'Technology',
    secondaryTag: 'Innovation' 
   },

  { id: 40,
     title: 'Olympic Games Government announces new infrastructure.', urlToImage: opinion, 
     category: 'Sports',
      section: 'opiniondata_card',
      storyIntro: 'A major tech company has revealed an innovative new product.Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
      primaryTag: 'Technology',
      secondaryTag: 'Innovation' 
  },
  { id: 41, 
    title: 'Rising healthcare costs create financial strain for individuals.', 
    urlToImage: opinion2,
     category: 'Sports',
      section: 'opiniondata_card',
      storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
      primaryTag: 'Environment',
      secondaryTag: 'Wildfires' 
      },
  { id: 42, 
    title: 'Rising cyber threats prompt calls for increased cybersecurity.',
     urlToImage: opinion3,
      category: 'Sports', 
      section: 'opiniondata_card',
      storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan..',
      primaryTag: 'Health',
      secondaryTag: 'Research' 
     },
  { id: 43, 
    title: 'Basketball New study links diet to improved mental health.', 
    urlToImage: opinion4,
     category: 'Sports',
      section: 'opiniondata_card',
      storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
      primaryTag: 'Environment',
      secondaryTag: 'Wildfires' 
     },
  { id: 44,
     title: 'Sports New study links diet to improved mental health.',
      urlToImage: Web1,
       category: 'Sports', 
       section: 'Mainstories_card',
       storyIntro: 'A major tech company has revealed an innovative new product.Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
       primaryTag: 'Technology',
       secondaryTag: 'Innovation' 
       },
  { id: 45,
     title: 'Athlete Major airline files for bankruptcy amid financial struggles.', 
     urlToImage: Web2,
      category: 'Sports',
       section: 'Mainstories_card',
       storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
       primaryTag: 'Health',
       secondaryTag: 'Research'  
      },
  { id: 46, 
    title: 'Tech giant announces groundbreaking new product.',
     urlToImage: Web3,
      category: 'Sports',
       section: 'Mainstories_card',
       storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
       primaryTag: 'Politics',
       secondaryTag: 'Peace' 
       },
  { id: 47, 
    title: 'Scientists discover new species in the Amazon rainforest.',
     urlToImage: Web4,
      category: 'Sports',
       section: 'Mainstories_card',
       storyIntro: 'A major tech company has revealed an innovative new product.Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
       primaryTag: 'Technology',
       secondaryTag: 'Innovation'  
      },
  { id: 48,
     title: 'Government unveils ambitious plan to reduce carbon emissions.', 
     urlToImage: Web5, 
     category: 'Sports',
      section: 'Mainstories_card',
      storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
      primaryTag: 'Environment',
      secondaryTag: 'Wildfires' 
     },
  // { id: 49, title: 'Sports Achievements', urlToImage: Img, category: 'Sports', section: 'Mainstories_card' },

  { id: 50,
     title: 'Government enacts new laws to protect worker',
      urlToImage: viral, 
      category: 'Health',
       section: 'ViralCardData_card',
       storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
       primaryTag: 'Technology',
       secondaryTag: 'Cybersecurity' 
      },
  { id: 51,
     title: 'Major breakthrough in stem cell research.',
      urlToImage: viral2,
       category: 'Health', 
       section: 'ViralCardData_card',
       storyIntro: 'Global leaders are meeting in Paris Angul to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
       primaryTag: 'Environment',
       secondaryTag: 'Wildfires' 
       },
  { id: 52,
     title: 'Rising cyber threats prompt calls for increased security measures.', 
     urlToImage: viral3,
      category: 'Health', 
      section: 'ViralCardData_card',
      storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan..',
      primaryTag: 'Health',
      secondaryTag: 'Research' 
     },
  { id: 53, 
    title: 'Diet and NutritionGovernment announces plan to improve public education.',
     urlToImage: viral4,
      category: 'Health', 
      section: 'ViralCardData_card' ,
      storyIntro: 'A major tech company has revealed an innovative new product.Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
      primaryTag: 'Technology',
      secondaryTag: 'Innovation' 
    },
  { id: 54, 
    title: 'Mental Health Government introduces new policies to support affordable housing', 
    urlToImage: viral5, 
    category: 'Health', 
    section: 'ViralCardData_card',
     storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
    primaryTag: 'Technology',
    secondaryTag: 'Cybersecurity'
   },
  { id: 55,
     title: 'Health Rising tensions lead to international conflict.',
      urlToImage: viral6,
       category: 'Health', 
       section: 'ViralCardData_card',
       storyIntro: 'Global leaders are meeting in Paris Cuttack to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
       primaryTag: 'Technology',
       secondaryTag: 'Cybersecurity'
       
       },
  // { id: 56, title: 'Healthcare Policies', urlToImage: Img, category: 'Health', section: 'DailyShowCard_card' },
  { id: 57, 
    title: 'Health and Wellness',
     urlToImage: dailyShow, 
     category: 'Health', 
     section: 'DailyShowCard_card',
      description: 'a picture in words of somebody/something or of something that happened',
      storyIntro: 'Global leaders are meeting in Cuttack  Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
      primaryTag: 'Environment',
      secondaryTag: 'Wildfires' 
     },
  { id: 58,
     title: 'Medical Events a picture in words Cuttack of somebody/something or of something that happened ', 
     urlToImage: dailyShow2, 
     category: 'Health', 
     section: 'DailyShowCard_card',
      description: 'a picture in words of Cuttack somebody/something or of something that happened' ,
      storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
      primaryTag: 'Environment',
      secondaryTag: 'Wildfires' 
    },
  { id: 59,
     title: 'Health Gadgets',
      urlToImage: dailyShow3, 
      category: 'Health', 
      section: 'DailyShowCard_card',
      description: 'a picture in words of somebody/something or of something that happened ,',
      storyIntro: 'Global leaders are meeting in Paris to Balasore discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
      primaryTag: 'Environment',
      secondaryTag: 'Protest' 
     },

  // { id: 60, title: 'Educational Trends', urlToImage: Img, category: 'Education', section: 'DailyShowCard_card' },
  // { id: 61, title: 'Student Life', urlToImage: Img, category: 'Education', section: 'DailyShowCard_card' },
  { id: 62,
     title: 'Government unveils plan to improve national Balasore healthcare system Rising unemployment rates spark concerns about economic stability.',
      urlToImage: videoSec,
       category: 'Environment',
        section: 'Video_card' ,
        storyIntro: 'Global leaders are meeting in Paris to Balasore discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
        primaryTag: 'Environment',
        secondaryTag: 'Wildfires' 
      },
  { id: 63, 
    title: 'Rising unemployment rates spark concerns Balasore about economic stability .', 
    urlToImage: photoSec, 
    category: 'Environment', 
    section: 'Photo_card' ,
    storyIntro: 'Global leaders are meeting Balangir in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
    primaryTag: 'Environment',
    secondaryTag: 'Wildfires' 
  },
  // { id: 64, title: 'Educational Innovations', urlToImage: Img, category: 'Education', section: 'VideoPhoto_card' },
  { id: 65, 
    title: 'Major breakthrough in brain-computer interface technology.',
     urlToImage: photoSubSec1, 
     category: 'Environment', 
     section: 'PhotoSub_card',
     storyIntro: 'Global leaders are meeting  Balangir in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
     primaryTag: 'Health',
     secondaryTag: 'Research' 
     },
  { id: 66,
     title: 'Government introduces new Balangir measures to combat cybercrime.',
      urlToImage: photoSubSec2, 
      category: 'Education', 
      section: 'PhotoSub_card' ,
      storyIntro: 'Global leaders are meeting in Paris Balangir to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan..',
      primaryTag: 'Health',
      secondaryTag: 'Research' 
    },
  { id: 67,
     title: 'Major discovery advances understanding of climate change.', 
     urlToImage: videoSubSec1, 
     category: 'Education', 
     section: 'VideoSub_card' ,
     storyIntro: 'A major tech company has revealed an Balangir innovative new product.Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
     primaryTag: 'Technology',
     secondaryTag: 'Innovation' 
    },
  { id: 68,
     title: 'Education PolicyMajor discovery Balangir advances understanding of climate change.',
      urlToImage: videoSubSec2, 
      category: 'Education',
       section: 'VideoSub_card',
       storyIntro: 'Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health. Global leaders are meeting in Paris to discuss urgent climate change issues.Rising sea levels threaten coastal cities worldwide.New study links diet to improved mental health.Government announces new infrastructure investment plan.',
       primaryTag: 'Health',
       secondaryTag: 'Research' 
       },
 
];


export const newsStories = [
  {id: 1, title: 'Go First Insolvency: What Should The Balangir Airline Do Next to The Highway?',urlToImage: Img },
  { id: 2, title: 'Go First Insolvency: What Should The Airline Do Next to The Highway?',  urlToImage: Img},
  { id: 3, title: 'Go First Insolvency: What Should The Airline Do Next to The Highway?', urlToImage: Img}
];

export const photos = [
  {id: 1,title: 'Go First Insolvency: What Angul Should The Airline Do Next to The Highway?',urlToImage: "https://via.placeholder.com/300"},
  {id: 2, title: 'Go First Insolvency: What Should The Airline Do Next to The Highway?', urlToImage: "https://via.placeholder.com/300" },
  { id: 3, title: 'Go First Insolvency: What Should The Airline Do Next to The Highway?', urlToImage: "https://via.placeholder.com/300" }
];

export const videos = [
  { id: 1, title: 'Go First Insolvency: What Angul Should The Airline Do Next to The Highway?', urlToImage: "https://via.placeholder.com/300"},
  { id: 2, title: 'Go First Insolvency: What Should The Airline Do Next to The Highway?', urlToImage: "https://via.placeholder.com/300"},
  {id: 3, title: 'Go First Insolvency: What Should The Airline Do Next to The Highway?', urlToImage: "https://via.placeholder.com/300"}
];
export const Forhome = [
  { imgSrc: Img, imgAlt: 'Vashu Bhagnani', imgTitle: 'Vashu Bhagnani', title: 'Go Angul First Insolvency: What Should The Airline Do Next to The Highway?',},
  {  imgSrc: Img, imgAlt: 'Vashu Bhagnani', imgTitle: 'Vashu Bhagnani', title: 'Go First Insolvency: What Should The Airline Do Next to The Highway?',},
  { imgSrc: Img, imgAlt: 'Vashu Bhagnani', imgTitle: 'Vashu Bhagnani', title: 'Go First Insolvency: What Should The Airline Do Next to The Highway?',},
  ];
export const ForProfile = [
  { id: 1, title: "Video 1", title: 'Go Angul First Insolvency: What Should The Airline Do Next to The Highway?', urlToImage: Img},
  {id: 2, title: "Video 2", title: 'Go First Insolvency: What Should The Airline Do Next to The Highway?', urlToImage: Img},
  {id: 3,title: "Video 3",title: 'Go First Insolvency: What Should The Airline Do Next to The Highway?',
  urlToImage: Img}
];
export const ForcontactData = [
  {imgSrc: Img,imgAlt: 'Vashu Bhagnani',imgTitle: 'Vashu Bhagnani',title: 'Go First Insolvency: What Should The Airline Do Next to The Highway?',},
  { imgSrc: Img, imgAlt: 'Vashu Bhagnani', imgTitle: 'Vashu Bhagnani', title: 'Go First Insolvency: What Should The Airline Do Next to The Highway?', },
  {imgSrc: Img,imgAlt: 'Vashu Bhagnani',imgTitle: 'Vashu Bhagnani',title: 'Go First Insolvency: What Should The Airline Do Next to The Highway?',},
];

const filterByPrimaryTag = (stories, tag) => {
  return stories.filter(story => story.primaryTag === tag);
};

const filterBySecondaryTag = (stories, tag) => {
  return stories.filter(story => story.secondaryTag === tag);
};
export default { sampleData, newsStories, photos, videos,Forhome, ForProfile, ForcontactData};



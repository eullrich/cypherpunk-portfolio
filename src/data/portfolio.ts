export interface Achievement {
  title: string;
  description: string;
  status: string;
  link: string | null;
  icon: string;
}

export interface PeriodSection {
  id: string;
  period: string;
  company: string;
  achievements: Achievement[];
}

export const portfolioData: PeriodSection[] = [
  {
    id: '2023-2024',
    period: '2023-2024',
    company: 'BlockJoy',
    achievements: [
      {
        title: 'Optimism Retro Funding',
        description: 'Secured Optimism Retro Funding for developer contributions in Ethereum ecosystem',
        status: '[SECURED]',
        link: 'https://round5.retrolist.app',
        icon: 'zap'
      },
      {
        title: 'Goldsky Customer Case Study',
        description: 'Featured Goldsky in customer case study on blockchain data infrastructure',
        status: '[PUBLISHED]',
        link: 'https://youtube.com',
        icon: 'eye'
      },
      {
        title: 'SQD Case Study',
        description: 'Featured SQD in customer case study on data processing solutions',
        status: '[FEATURED]',
        link: 'https://www.blockjoy.com/',
        icon: 'terminal'
      },
      {
        title: '$11M Funding Round',
        description: 'Joined as first business hire, built GTM strategy and supported $11M Series A fundraising for decentralized blockchain operations',
        status: '[COMPLETED]',
        link: 'https://chainwire.org/2023/02/02/blockjoy-secures-nearly-11-million-from-gradient-ventures-draper-dragon-active-capital-and-more-to-launch-decentralized-blockchain-operations/',
        icon: 'key'
      }
    ]
  },
  {
    id: '2021-2022',
    period: '2021-2022',
    company: 'Pocket Network',
    achievements: [
      {
        title: 'Polygon Partnership',
        description: 'Led GTM strategy and closed strategic partnership deal with Polygon for decentralized infrastructure adoption',
        status: '[DEPLOYED]',
        link: 'https://polygon.technology/blog/pocket-network-is-bringing-decentralized-infrastructure-to-the-polygon-ecosystem',
        icon: 'shield'
      },
      {
        title: 'Triforce Community Initiative',
        description: 'Launched Triforce community initiative to boost network engagement',
        status: '[LAUNCHED]',
        link: 'https://www.financialexpress.com/business/blockchain-pocket-network-launches-triforce-community-initiative-2589966/',
        icon: 'zap'
      },
      {
        title: 'Evmos Integration',
        description: 'Closed technical partnership with Evmos to provide RPC node infrastructure, expanding developer ecosystem reach',
        status: '[INTEGRATED]',
        link: 'https://medium.com/evmos/pocket-network-joins-evmos-to-provide-builders-with-crucial-rpc-node-infrastructure-66616ea7c3ea',
        icon: 'terminal'
      }
    ]
  },
  {
    id: '2013-2020',
    period: '2013-2020',
    company: 'Hacker Lab',
    achievements: [
      {
        title: 'COVID-19 SBA Consulting',
        description: 'Provided SBA consulting services during COVID-19 pandemic',
        status: '[DELIVERED]',
        link: 'https://reddit.com',
        icon: 'shield'
      },
      {
        title: 'R Street Makerspace',
        description: 'Established R Street location as a makerspace and coworking hub',
        status: '[OPERATIONAL]',
        link: 'https://yelp.com',
        icon: 'terminal'
      },
      {
        title: 'I Street Location',
        description: 'Established I Street location for collaborative tech workspace',
        status: '[ESTABLISHED]',
        link: 'https://mapquest.com',
        icon: 'terminal'
      },
      {
        title: 'Rancho Cordova Partnership',
        description: 'Partnered with City of Rancho Cordova to support innovation and entrepreneurship',
        status: '[ACTIVE]',
        link: 'https://cityofranchocordova.org',
        icon: 'key'
      },
      {
        title: 'California Community Colleges',
        description: 'Collaborated with California Community Colleges, including Sierra College partnership',
        status: '[PARTNERED]',
        link: 'https://reddit.com',
        icon: 'key'
      },
      {
        title: 'Startup Hustle Program',
        description: 'Launched Startup Hustle as a pre-accelerator program for budding entrepreneurs',
        status: '[LAUNCHED]',
        link: 'https://startupsac.com',
        icon: 'zap'
      },
      {
        title: 'Success Stories',
        description: 'Fostered success stories including Tcheck, Grin Apps, and Requested (acquired by X, later public)',
        status: '[ACQUIRED]',
        link: 'https://hackerlab.org',
        icon: 'eye'
      },
      {
        title: 'Sac Made Initiative',
        description: 'Contributed to City of Sacramento\'s Sac Made initiative through MADE Studio',
        status: '[CONTRIBUTED]',
        link: 'https://sacmade.com',
        icon: 'eye'
      },
      {
        title: 'Sierra Energy Partnership',
        description: 'Partnered with Sierra Energy on makerspace and tech ecosystem development',
        status: '[PARTNERED]',
        link: 'https://rosevilletoday.com',
        icon: 'key'
      },
      {
        title: 'Vision Service Plan - The Shop',
        description: 'Collaborated with Vision Service Plan on The Shop makerspace',
        status: '[COLLABORATED]',
        link: 'https://www.vsp.com/',
        icon: 'shield'
      },
      {
        title: 'Intel IoT Incubator',
        description: 'Established Intel IoT Incubator for hardware and tech innovation',
        status: '[ESTABLISHED]',
        link: 'https://hackerlab.org/',
        icon: 'terminal'
      },
      {
        title: 'Northrop Grumman Partnership',
        description: 'Partnered with Northrop Grumman on makerspace initiatives',
        status: '[PARTNERED]',
        link: null,
        icon: 'shield'
      },
      {
        title: 'Cereal Hack',
        description: 'Organized Cereal Hack as one of the region\'s first major hackathons',
        status: '[ORGANIZED]',
        link: 'https://cerealhack.devpost.com',
        icon: 'zap'
      }
    ]
  },
  {
    id: '2010-2013',
    period: '2010-2013',
    company: 'SARTA & Sierra Energy',
    achievements: [
      {
        title: 'VentureStart Incubator',
        description: 'Led VentureStart as a startup incubator for regional tech companies',
        status: '[LED]',
        link: 'https://massinvestordatabase.com',
        icon: 'key'
      },
      {
        title: 'FastOx Gasifier Prototype',
        description: 'Developed FastOx gasifier prototype for waste-to-energy conversion',
        status: '[DEVELOPED]',
        link: 'https://sierraenergy.com',
        icon: 'terminal'
      },
      {
        title: 'DoD Grant',
        description: 'Secured Technikon DoD grant for gasification technology advancement',
        status: '[SECURED]',
        link: 'https://wastetodaymagazine.com',
        icon: 'shield'
      },
      {
        title: 'Cleantech Showcase',
        description: 'Organized Cleantech Showcase to highlight sustainable innovations',
        status: '[ORGANIZED]',
        link: 'https://startupsac.com',
        icon: 'eye'
      }
    ]
  },
  {
    id: '2007-2010',
    period: '2007-2010',
    company: 'AG Edwards / Wells Fargo',
    achievements: [
      {
        title: 'Client Development',
        description: 'Conducted 50+ cold calls per day to build client relationships',
        status: '[DELIVERED]',
        link: null,
        icon: 'terminal'
      },
      {
        title: 'Team Leadership',
        description: 'Led team of 3 interns in sales and operations support',
        status: '[MANAGED]',
        link: null,
        icon: 'key'
      },
      {
        title: 'Enterprise Logos',
        description: 'Brought in key logos including HP and Fujitsu',
        status: '[SECURED]',
        link: null,
        icon: 'shield'
      }
    ]
  },
  {
    id: '2005-2007',
    period: '2005-2007',
    company: 'College Activities',
    achievements: [
      {
        title: 'Sustainable Career Fair',
        description: 'Founded Enviro Business Society\'s first annual sustainable career fair, bringing together 50+ companies in Southern California',
        status: '[FOUNDED]',
        link: 'https://facebook.com',
        icon: 'eye'
      }
    ]
  }
];

// Metadata configuration
export const siteConfig = {
  title: 'Eric Ullrich - Portfolio',
  description: 'Tech sales & GTM, DeFi and maker space community builder',
  author: 'Eric Ullrich',
  email: 'eullrich@gmail.com',
  twitter: '@eullrichX',
  github: 'eullrich',
  telegram: 'erxc_uco',
  quote: 'Identifying market opportunities and building revenue engines for emerging tech',
  quoteAuthor: 'Eric Ullrich'
};

// Keyboard shortcuts configuration
export const keyboardShortcuts = [
  {
    key: 'E',
    description: 'expand/collapse all',
    action: 'toggleAll'
  },
  {
    key: 'D', 
    description: 'decrypt sequence',
    action: 'decrypt'
  },
  {
    key: '1-4',
    description: 'toggle sections',
    action: 'toggleSection'
  }
];
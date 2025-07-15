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
        title: 'Goldsky Customer Case Study',
        description: 'Featured Goldsky in customer case study on blockchain data infrastructure',
        status: '[PUBLISHED]',
        link: 'https://x.com/BlockJoyWeb3/status/1861801924342726856',
        icon: 'eye'
      },
      {
        title: 'SQD Case Study',
        description: 'Featured SQD in customer case study on data processing solutions',
        status: '[FEATURED]',
        link: 'https://x.com/BlockJoyWeb3/status/1859669579506872804',
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
        title: 'Rocklin Makerspace Expansion',
        description: 'Opened new Rocklin location with four times the space for co-working and makerspace operations',
        status: '[EXPANDED]',
        link: 'https://www.bizjournals.com/sacramento/news/2016/12/01/hacker-labs-new-rocklin-digs-mean-four-times-the.html',
        icon: 'terminal'
      },
      {
        title: 'R Street Industrial Coworking',
        description: 'Brought industrial coworking space to R Street corridor with makerspace and collaborative workspace',
        status: '[OPERATIONAL]',
        link: 'https://www.bizjournals.com/sacramento/news/2018/08/21/photos-hacker-lab-brings-industrial-coworking-to.html',
        icon: 'terminal'
      },
      {
        title: 'Midtown I Street Location',
        description: 'Secured larger space in Midtown Sacramento to expand collaborative tech workspace operations',
        status: '[ESTABLISHED]',
        link: 'https://www.bizjournals.com/sacramento/news/2019/01/17/hacker-lab-lands-larger-space-in-midtown.html',
        icon: 'terminal'
      },
      {
        title: 'Sierra College Partnership',
        description: 'Welcomed by Sierra College to establish Rocklin campus makerspace and manage $1.7M in maker space funding',
        status: '[PARTNERED]',
        link: 'https://www.comstocksmag.com/web-only/sierra-college-welcomes-hacker-lab-rocklin',
        icon: 'key'
      },
      {
        title: 'Startup Hustle Demo Night',
        description: 'Launched Startup Hustle as pre-accelerator program with demo nights for budding entrepreneurs',
        status: '[LAUNCHED]',
        link: 'https://www.comstocksmag.com/featured-event/hacker-labs-startup-hustle-demo-night',
        icon: 'zap'
      },
      {
        title: 'Maker Space Network Development',
        description: 'Developed network to help maker spaces collaborate and grow across the Sacramento region',
        status: '[DEVELOPED]',
        link: 'https://www.bizjournals.com/sacramento/news/2017/05/16/hacker-lab-developing-network-to-help-maker-spaces.html',
        icon: 'key'
      },
      {
        title: 'Sacramento Bitcoin Meetup',
        description: 'Hosted Sacramento Bitcoin meetup bringing crypto community together for education and lobbying',
        status: '[HOSTED]',
        link: 'https://www.bizjournals.com/sacramento/news/2018/04/05/sacramento-bitcoin-meetup-brings-rally-lobbying.html',
        icon: 'zap'
      },
      {
        title: 'Rocklin Co-working Launch',
        description: 'Launched first Rocklin co-working makerspace location to expand regional presence',
        status: '[LAUNCHED]',
        link: 'https://www.bizjournals.com/sacramento/news/2014/12/03/hacker-lab-will-run-rocklin-co-working-makerspace.html',
        icon: 'terminal'
      },
      {
        title: 'Northrop Grumman Defense Partnership',
        description: 'Partnered with Northrop Grumman on defense industry makerspace initiatives and innovation programs',
        status: '[PARTNERED]',
        link: 'https://www.bizjournals.com/sacramento/news/2013/12/23/hacker-lab-defense-northrop-grumman.html',
        icon: 'shield'
      },
      {
        title: 'Sierra College Maker Space Management',
        description: 'Selected by Sierra College to manage $1.7 million in maker space funding and operations',
        status: '[MANAGED]',
        link: 'https://www.bizjournals.com/sacramento/news/2016/07/06/sierra-college-to-manage-17-million-in-maker-space.html',
        icon: 'key'
      },
      {
        title: 'Regional Hackathon Program',
        description: 'Organized hackathons bringing ideas, developers, and market opportunities together in Sacramento',
        status: '[ORGANIZED]',
        link: 'https://www.bizjournals.com/sacramento/news/2013/07/15/hackathon-brings-ideas-developers-market.html',
        icon: 'zap'
      },
      {
        title: 'Intel Perceptual Computing Hack',
        description: 'Secured Intel sponsorship for perceptual computing hackathon and interactive technology innovation',
        status: '[SPONSORED]',
        link: 'https://www.bizjournals.com/sacramento/blog/mark-anderson/2013/02/intel-sponsoring-perceptual-hack-interac.html',
        icon: 'terminal'
      },
      {
        title: 'VSP Think Tank Partnership',
        description: 'Collaborated with Vision Service Plan to set up think tank and innovation space in Old Sacramento',
        status: '[COLLABORATED]',
        link: 'https://www.bizjournals.com/sacramento/news/2013/08/26/vsp-think-tank-setting-up-shop-in-old.html',
        icon: 'shield'
      },
      {
        title: 'Mini Maker Faire at Sierra College',
        description: 'Helped Rocklin\'s Sierra College land Mini Maker Faire, bringing maker community together',
        status: '[FACILITATED]',
        link: 'https://www.bizjournals.com/sacramento/news/2015/08/25/rocklins-sierra-college-lands-mini-maker-faire.html',
        icon: 'eye'
      },
      {
        title: 'Cereal Hack - Sacramento Apps',
        description: 'Organized Cereal Hackathon, one of Sacramento\'s first major hackathons for app development',
        status: '[ORGANIZED]',
        link: 'https://www.bizjournals.com/sacramento/news/2012/06/04/cereal-hackathon-sacramento-apps.html',
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
        description: 'Led VentureStart as a startup incubator for regional tech companies and entrepreneurs',
        status: '[LED]',
        link: null,
        icon: 'key'
      },
      {
        title: 'SARTA CleanStart Showcase',
        description: 'Organized CleanStart Showcase highlighting cleantech innovations and sustainable technology startups',
        status: '[ORGANIZED]',
        link: 'https://www.bizjournals.com/sacramento/blog/morning-roundup/2012/10/sartas-cleanstart-showcase-highlights.html',
        icon: 'eye'
      },
      {
        title: 'Sierra Energy Federal Defense Grant',
        description: 'Helped Sierra Energy secure federal grant from Defense Department for waste-to-energy gasification technology',
        status: '[SECURED]',
        link: 'https://www.bizjournals.com/sacramento/news/2015/10/08/sierra-energy-lands-federal-grant-from-defense.html',
        icon: 'shield'
      },
      {
        title: 'FastOx Gasifier Development',
        description: 'Supported development of FastOx gasifier prototype for waste-to-energy conversion technology',
        status: '[DEVELOPED]',
        link: null,
        icon: 'terminal'
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
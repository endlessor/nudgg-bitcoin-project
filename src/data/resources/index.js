import sharesPage from './pages/investments/shares'
import roboPage from './pages/investments/robo-advisor.js'
import fundsPage from './pages/investments/funds.js'
import CurrentAccountPage from './pages/cashSavings/current-account.js'
import SavingsAccountPage from './pages/cashSavings/savings-account.js'
import CashISAsLISAs from './pages/cashSavings/cash-isas-lisas.js'
import CashISAs from './pages/isa-lisas/cash-isas'
import StockShareISAs from './pages/isa-lisas/stocks-shares-isas'
import LifetimeISAs from './pages/isa-lisas/lifetime-isas(lisa)'

export const carouselOptions = {
  slideWidth: 0.95,
  frameOverflow: 'visible',
  cellSpacing: 15,
  breakPoints: {
    768: {
      slideWidth: 0.45
    },
    480: {
      cellAlign: 'center',
      slideWidth: 0.85
    }
  }
}

export const faqCarouselOptions = {
  slideWidth: 0.25,
  frameOverflow: 'visible',
  cellSpacing: 15,
  breakPoints: {
    1024: {
      slideWidth: 0.35
    },
    768: {
      slideWidth: 0.45
    },
    480: {
      cellAlign: 'center',
      slideWidth: 0.85
    }
  }
}

export const resources = [
  {
    slug: 'investments',
    title: 'Investments',
    image: 'assets/images/resources/investments-card-1.jpg',
    description: 'Guidance on all the necessary considerations when investing. Helping you decide whether and when it is right for you. Might surprise you how simple it is!',
  },
  {
    slug: 'cash-savings',
    title: 'Cash Savings',
    image: 'assets/images/resources/cash-card-1.jpg',
    description: 'Outlining cash saving and helping find the best type of account for you. Fixed savings, easy access & Cash ISAs... yum.'
  },
  {
    slug: 'isa-lisa',
    title: 'ISAs & LISAs',
    image: 'assets/images/resources/ISA-card-1.jpg',
    description: 'Individual savings account. ISAs are tax-efficient ‘wrappers’. You can ‘wrap’ both the above – investments & Cash savings. You can wrap up to £20,000 a year.'
  }
]

export const resourcesByType = {
  'investments': {
    image: 'assets/images/resources/investments1.jpg',
    sections: [
      {
        title: 'Investments',
        content: 'If your savings goal is more than five years away, putting some of your cash into investments could allow you to earn more from your money and keep up with rising prices. 3 main ways to expose your money to the markets - Robo adviser, Shares and Funds - and they are not all super risky, so at least take a look.'
      },
      {
        title: 'Investments can be risky',
        content: 'You can decide how much influence and control you have based on the type of service you select; the more control you want over investment decisions – the more time you need to be willing to put in.'
      }
    ],
    options: [
      {
        slug: 'robo-advisor',
        title: 'Robo Advisor',
        image: 'assets/images/resources/investments2-card1.jpg',
        description: 'Simplest of the lot and you are handing over the reins. You select your risk profile and the robo has a pre-determined recipe made up of funds from around the world.'
      },
      {
        slug: 'shares',
        title: 'Shares',
        image: 'assets/images/resources/investments2-card2.jpg',
        description: 'You buy a slice of a fund. Expert fund manager invests into 35-50 different companies. If some drop sharply –not all your eggs are in one basket.'
      },
      {
        slug: 'funds',
        title: 'Funds',
        image: 'assets/images/resources/investments2-card3.jpg',
        description: 'Buy a slice of a company. Most risky method, time consuming but can provide lucrative benefits. Difficult to spread your risk unless you have a decent amount of cash available.'
      }
    ]
  },
  'cash-savings': {
    image: 'assets/images/resources/cash-1.jpg',
    sections: [
      {
        title: 'Cash Savings',
        content: 'Money – we all need it, like to spend it and work hard to earn it. nudgg resources simplifies cash savings and identifies your priorities. We have nothing to sell – just facts. Explanation and easy comparison in one place to help you find what it is you need.You can always do better.'
      },
      {
        title: '',
        content: 'Choosing between savings options is easier than it looks. There are hundreds of accounts, but only a few types of account – some for easy access to emergency funds, some for saving regularly and some for growing your money.'
      },
      {
        title: 'You can always do better',
        content: 'There are different types of current accounts & savings accounts and they each have different rules. Most importantly, you can always do better.'
      }
    ],
    options: [
      {
        slug: 'current-accounts',
        title: 'Current accounts',
        image: 'assets/images/resources/cash2-card1.jpg',
        description: 'A current account is the bank account you use day-to- day – you probably have one. It’s where the money goes in and the money goes out. It is where you feel the pinch on Monday morning.'
      },
      {
        slug: 'savings-accounts',
        title: 'Savings Accounts',
        image: 'assets/images/resources/cash2-card2.jpg',
        description: 'Time to take your money seriously. You’re thinking of stashing some away for a bigger plan or ambition?'
      },
      {
        slug: 'cash-isas-lisas',
        title: 'Cash ISAs & LISAs',
        image: 'assets/images/resources/cash2-card3.jpg',
        description: 'Cash ISAs (sometimes called NISAs) are savings accounts that pay interest that is free of income tax.'
      }
    ]
  },
  'isa-lisa': {
    image: 'assets/images/resources/ISA-1.jpg',
    sections: [
      {
        title: 'ISA & LISAs',
        content: 'You can save tax-free with Individual Savings Accounts (ISAs). In the 2017 to 2018 tax year, the maximum you can save in ISAs is £20,000'
      },
      {
        title: '',
        content: `There are 4 types of ISA:
<ol>
    <li>cash ISAs</li>
    <li>stocks and shares ISAs</li>
    <li>innovative finance ISAs</li>
    <li>Lifetime ISAs</li>
</ol>You can put money into one of each kind of ISA each tax year.`
      }
    ],
    options: [
      {
        slug: 'cash-isas',
        title: 'Cash ISAs',
        image: 'assets/images/resources/ISA2-card1.jpg',
        description: 'Cash ISAs are savings accounts that pay interest that is free of income tax.'
      },
      {
        slug: 'stocks-shares-isas',
        title: 'Stocks & Shares ISAs',
        image: 'assets/images/resources/ISA2-card2.jpg',
        description: 'ISAs can also be used to hold stocks and shares, up to the current annual limit'
      },
      {
        slug: 'lifetime-isas(lisa)',
        title: 'Lifetime ISAs (LISA)',
        image: 'assets/images/resources/ISA2-card3.jpg',
        description: 'Lifetime ISAs (also known as LISAs) are a new type of ISA created to help people save for their first home or retirement.'
      }
    ]
  }
}

const prosCons = [
  {
    title: 'Mostly hands off',
    isPro: true
  },
  {
    title: 'Professionally Managed',
    isPro: true
  },
  {
    title: 'Diversified Market',
    isPro: true
  },
  {
    title: 'Exposure',
    isPro: true
  },
  {
    title: 'Limited control',
    isPro: false
  },
  {
    title: 'Incurs hidden charges',
    isPro: false
  },
  {
    title: 'Carries risk',
    isPro: false
  }
]

const investmentProviders = [
  {
    image: 'assets/images/partners/selftrade.png',
    name: 'Self Trade',
    rating: 2.1,
    firstYearFee: {
      amount: 10
    },
    minimumInitialInvestment: 50,
    pension: true,
    ISA: true,
    app: true,
    FSCS: true,
    link: 'https://selftrade.co.uk/transactional/anonymous/preregistration'
  },
  {
    image: 'assets/images/partners/hargreaveslansdown.png',
    name: 'Hargreaves Lansdown',
    rating: 4.3,
    firstYearFee: {
      amount: 8
    },
    minimumInitialInvestment: 100,
    pension: true,
    ISA: true,
    app: true,
    FSCS: true,
    link: 'http://www.hl.co.uk/shares/share-dealing'
  },
  {
    image: 'assets/images/partners/halifax.png',
    name: 'Halifax',
    rating: 1.5,
    firstYearFee: {
      amount: 7
    },
    minimumInitialInvestment: 2000,
    pension: true,
    ISA: true,
    app: true,
    FSCS: true,
    link: 'https://www.halifax-online.co.uk/personal/a/registration/onlinepersonalregistration.jsp#ts:1510914716132'
  },
  {
    image: 'assets/images/partners/tddirectinvesting.png',
    name: 'TD Direct',
    rating: 3.3,
    firstYearFee: {
      amount: 5.99
    },
    minimumInitialInvestment: 0,
    pension: true,
    ISA: true,
    app: true,
    FSCS: true,
    link: 'https://www.tddirectinvesting.co.uk/share-dealing'
  },
  {
    image: 'assets/images/partners/fidelity.png',
    name: 'Fidelity',
    rating: 2.4,
    firstYearFee: {
      amount: 15
    },
    minimumInitialInvestment: 1000,
    pension: true,
    ISA: true,
    app: true,
    FSCS: true,
    link: 'https://www.fidelity.co.uk/accounts/open'
  },
  {
    image: 'assets/images/partners/barclays.png',
    name: 'Barclays',
    rating: 1.1,
    firstYearFee: {
      amount: 4.99
    },
    minimumInitialInvestment: 0,
    pension: true,
    ISA: true,
    app: true,
    FSCS: true,
    link: 'https://www.smartinvestor.barclays.co.uk/invest/accounts/investment-account/features.html'
  }
]

export const resourcesByProvider = {
  'investments': {
    'robo-advisor': {
      title: 'Robo Advisor',
      description: roboPage(),
      image: 'assets/images/resources/investments2.jpg',
      prosCons,
      faqs: [
        {
          title: 'When is a Robo adviser right for me?',
          description: 'You are putting your money in the hands of a ‘robotic fund manager’ who builds a portfolio of funds for you – in general you will pay a management fee of 0.65-1% from your lump sum.'

        },
        {
          title: 'How does a Robo adviser work?',
          description: 'You complete a form with your details & objectives for your money. After selecting your risk appetite, timeframe etc. you are provided with a well-spread & suitable portfolio according to that Robo.'
        },
        {
          title: 'How do I pick the right one?',
          description: 'nudgg provides all the info for making your choice. We have the key information & reviews stored up in one place to allow you to compare the main players.'
        },
        {
          title: 'Where do Robo’s invest?',
          description: 'Robo advisors invest mainly into various Funds – most commonly; ETFs & Trackers (which tend to be cheaper). Robo advisers will invest into different areas according to your risk appetite. Each investment can be further categorised into an INVESTMENT REGION ASSET CLASS INDUSTRY SECTOR. By investing in a range of different categories - fund managers can spread where your money is held to try and reduce risk.'
        },
        {
          title: 'What are the fees?',
          description: `There is a cost to investing in a Robo Advisor- although they are getting cheaper.
<ul>
<li>Annual management charge (AMC): This can be between 0.5 – 1.2%.</li>
<li>Indirect Fund fees: While they are small & you don’t pay them directly – each ETF & tracker fund comes out of your profits.</li>
<li>Performance fees: Occasionally, some Robo’s levy performance fees when they beat a benchmark.</li>
</ul>`
        },
        {
          title: 'What are the risks?',
          description: `You’re investing into the stock market. That always carries a risk.<br/>
If the whole market goes pear-shaped you are going to lose. BUT! Robo’s do a great job in providing diversity across a range of markets & countries which limits the risk. If one investment has a dodgy period – one of your others could be going great.<br/>
All Robo-advisers will take you through a simple risk-assessment before you decide what is right for you.`
        },
        {
          title: 'How do you monitor your Robo’s performance?',
          description: `In your <a href="/hub">nudgg hub</a>. Whichever Robo adviser you choose to invest with – you can link it to nudgg and monitor the performance along with everything else in your hub as you build towards your goal.`
        }
      ],
      comparisonTable: [
        {
          image: 'assets/images/partners/moneybox.svg',
          name: 'MoneyBox',
          rating: 7.3,
          firstYearFee: {
            interest: 1.8
          },
          minimumInitialInvestment: 5,
          pension: false,
          ISA: true,
          app: true,
          FSCS: true,
          link: 'https://itunes.apple.com/GB/app/id1049797239'
        },
        {
          image: 'assets/images/partners/moneyfarm.svg',
          name: 'MoneyFarm',
          rating: 8.3,
          firstYearFee: {
            interest: 0.3
          },
          minimumInitialInvestment: 0,
          pension: true,
          ISA: true,
          app: true,
          FSCS: true,
          link: 'https://app.moneyfarm.com/uk/signup'
        },
        {
          image: 'assets/images/partners/nutmeg.svg',
          name: 'Nutmeg',
          rating: 8.9,
          firstYearFee: {
            interest: 0.75
          },
          minimumInitialInvestment: 500,
          pension: true,
          ISA: true,
          app: true,
          FSCS: true,
          link: 'https://app.nutmeg.com/client/sign-up/try-it-out'
        },
        {
          image: 'assets/images/partners/wealthify.png',
          name: 'Wealthify',
          rating: 7.4,
          firstYearFee: {
            interest: 0.87
          },
          minimumInitialInvestment: 1,
          pension: true,
          ISA: true,
          app: true,
          FSCS: true,
          link: 'https://invest.wealthify.com/CreatePlan'
        },
        {
          image: 'assets/images/partners/scalable.png',
          name: 'Scalable',
          rating: 9.4,
          firstYearFee: {
            interest: 1
          },
          minimumInitialInvestment: 10000,
          pension: true,
          ISA: true,
          app: true,
          FSCS: true,
          link: 'https://uk.scalable.capital/invest-now'
        },
        {
          image: 'assets/images/partners/wealthsimple.png',
          name: 'Wealth Simple',
          rating: null,
          firstYearFee: {
            interest: 0.50
          },
          minimumInitialInvestment: 0,
          pension: false,
          ISA: true,
          app: true,
          FSCS: true,
          link: 'https://my.wealthsimple.com/app/public/region?locale=en-gb'
        }
      ]
    },
    'shares': {
      title: 'Shares',
      description: sharesPage(),
      image: 'assets/images/resources/example.jpg',
      prosCons,
      faqs: [
        {
          title: 'What are shares?',
          description: `before you make any decision about buying or selling shares or funds, find out as much as you can about the company or fund. Do your own research or get financial advice.
<ul>
<li>Shares (also known as equities) are like tiny fractions of a company. If you own one, you own a little bit of the company and a proportion of the company’s value.</li>
<li>You can own shares yourself, or you can pool your money with other people in a collective investment often known as a fund.</li>
<li>Funds buy a selection of shares, which are chosen and managed by a fund manager. If you put your money into funds, you don’t have to do the work of choosing the individual investments.</li>
<li>When you own shares directly you become a shareholder, which usually means you have the right to vote on some company decisions. This doesn’t happen if you invest in a fund.</li>
<li>Shares are bought and sold on the stock exchange.</li>
</ul>`
        },
        {
          title: 'How does investing in shares work?',
          description: `Investing in shares means buying and keeping them for a while in order to make money.<br />
The new tax free band means everyone is entitled to a tax-free Dividend Allowance of £5,000 per year (this tax free allowance will fall to £2,000 in April 2018). Married couples (and registered civil partners) can split their taxable dividend income between them and reduce tax liability by up to £1,625 (or 32.5%) per year.<br/>
There are two ways of getting money from shares of a company:<br />
<ul>
<li>If the company grows and becomes more valuable, the share is worth more – so your investment is worth more too.</li>
<li>Some shares pay you part of the company’s profits each year, called a dividend.</li>
</ul>If you buy shares in larger, long-established companies you’ll probably get dividends, but you might not get rapid growth.<br/>
      Shares that pay regular dividends are good for getting an income or the dividends can be reinvested to grow your capital.<br/>
      Dividend income is taxed at a different rate from savings interest.<br/>
      Smaller companies often don’t pay dividends. They might have more chance to grow rapidly, but can be more risky.<br/>`
        }
      ],
      comparisonTable: investmentProviders
    },
    'funds': {
      title: 'Funds',
      description: fundsPage(),
      image: 'assets/images/resources/example.jpg',
      prosCons,
      faqs: [
        {
          title: 'How do investment funds work?',
          description: `With an investment fund, lots of people pool their money together and a professional fund manager invests the money in assets such as shares, bonds, property, cash, or a combination.<br/><br/>
          There’s a huge range of funds that invest in different things, with different strategies – high income, capital growth, income and growth and so on.`
        },
        {
          title: 'Why invest through a fund?',
          description: `There are several reasons to invest through a fund, rather than buying assets on your own:
          <ul>
          <li><span><b>Spreading risk</b> – even if you have a small amount to invest, you can have a lot of different types of assets you’re investing in – you’re ‘diversified’. If one of the fund’s investments does badly, it might not do so much damage, since the fund has lots of others to fall back on. Read our guide on Diversifying – the smart way to save and invest.</span></li>
          <li><span><b>Reduced dealing costs</b> – by pooling your money, you might make savings because you’re sharing the costs.</span></li>
          <li><span><b>Less work for you</b> – the fund management company handles the buying, selling and collecting of dividends and income for you. But of course there are charges for this.</span></li>
          <li><span><b>Professional fund management</b> – fund managers make the decisions about when to buy and sell assets.</span></li>
</ul>`
        },
        {
          title: 'What do funds cost me?',
          description: `You can’t invest in funds for free and they’re all different.<br/>
      There are quite a few costs to be considered:<ul>
      <li>annual management fees</li>
      <li>dealing fees when investments within the fund are bought and sold.</li>
</ul>While you might be happy to pay to have everything done for you, fees eat into your returns. So it’s important to check the full fees of each fund, and choose the ones that give you the features you want at the best price.<br />
<ul>
<li>Dig deep and ask questions – the real costs might be more than the published charges.</li>
<li>If you’re investing through a bank or building society stocks and shares ISA, ask for a full breakdown of the fees charged by the bank, and the fees of the fund itself.</li>
</ul>Read our guide below to understand more about how fees can erode your investment returns.`
        },
        {
          title: 'Where do Funds invest?',
          description: `Each investment can be further categorised into an:<br />
<ul>
<li>INVESTMENT REGION</li>
<li>ASSET CLASS</li>
<li>INDUSTRY SECTOR</li>
</ul>By investing in a range of different categories - fund managers can spread where your money is held to try and reduce risk.`
        }
      ],
      comparisonTable: investmentProviders
    }
  },
  'cash-savings': {
    'current-accounts': {
      title: 'Current Accounts',
      description: CurrentAccountPage(),
      image: 'assets/images/resources/cash-2.jpg',
      prosCons,
      faqs: [
        {
          title: 'How much does a current account cost?',
          description: `As long as you have money in your account, you don’t usually have to pay for current account services but you can get some nice perks along the way.`
        },
        {
          title: 'What you can do with a current account?',
          description: `According to the FCA, people who use mobile banking apps and text alert services incur 24% fewer unarranged overdraft charges.<br />
With a current account you can:<br />
<ul>
<li>Pay for things with a debit card</li>
<li>Write cheques to pay bills and individuals</li>
<li>Receive payments directly into your account</li>
<li>Set up Direct Debits and standing orders to pay your bills</li>
<li>Transfer money via a telephone or online banking services</li>
<li>Withdraw cash over the counter or from a cashpoint machine</li>
<li>Check your balance using telephone or internet banking, at a cash machine or over the counter</li>
<li>Apply for an overdraft allowing you to spend an agreed amount more than you have in your account</li>
</ul>Let's find the best one for me.`
        }
      ],
      comparisonTable: [
        {
          image: 'assets/images/resources/monzo.png',
          description: 'monzo',
          InterestRate: 0,
          AuthorisedOverdraft: 'n/a',
          AccountExtra: `<ul><li>Fee-free travel abroad</li></ul>`,
          YearlyFee: 0,
          APP: true,
          BRANCH: false,
          link: 'https://monzo.com/download/'
        },
        {
          image: 'assets/images/resources/santander.png',
          description: 'santander',
          InterestRate: 0,
          AuthorisedOverdraft: '£1 per day',
          AccountExtra: `<ul><li>Cashback</li><li>Existing customer offers</li></ul>`,
          YearlyFee: 0,
          APP: true,
          BRANCH: true,
          link: 'https://www.santander.co.uk/info/current-accounts/everyday-current-account/terms-and-conditions'
        },
        {
          image: 'assets/images/resources/barclays.png',
          description: 'barclays',
          InterestRate: 0,
          AuthorisedOverdraft: '0.75p per day',
          AccountExtra: `<ul><li>Cash back</li><li>rewards</li></ul>`,
          YearlyFee: 0,
          APP: true,
          BRANCH: true,
          link: 'https://featuresstore.barclays.co.uk/forms/account-opening/gettingstarted/bba?execution=e1s1'
        },
        {
          image: 'assets/images/resources/starling.png',
          description: 'starling',
          InterestRate: 0,
          AuthorisedOverdraft: '15% EAR',
          AccountExtra: `<ul><li>Set goals</li><li>No travel fees</li><li>24/7 support</li></ul>`,
          YearlyFee: 0,
          APP: true,
          BRANCH: false,
          link: 'https://itunes.apple.com/gb/app/starling-bank/id956806430?mt=8'
        },
        {
          image: 'assets/images/resources/tsb.png',
          description: 'tsb',
          InterestRate: 3,
          AuthorisedOverdraft: '20% EAR',
          AccountExtra: `<ul><li>Cashback</li><li>Switching incentive</li><li>Rewards and offers</li></ul>`,
          YearlyFee: 0,
          APP: true,
          BRANCH: true,
          link: 'https://apply.tsb.co.uk/personal/a/apply_current_account/classicplusaccountVER?WT.ac=A00398'
        }
      ]
    },
    'savings-accounts': {
      title: 'Savings Accounts',
      description: SavingsAccountPage(),
      image: 'assets/images/resources/cash-2.jpg',
      prosCons,
      faqs: [
        {
          title: 'So should I ISA?',
          description: `ISAs are the most popular way to hide money from the Taxman. When the bank pays you interest – it’s ALL yours.<br />
Everyone has a personal allowance that they can put in an ISA. For 2017/2018 it’s £20,000 - the interest will depend on the ISA you choose.<br />
The Newest Type of Cash ISA is the LIFETIME ISA (LISA) - launched in April 2017.`
        },
        {
          title: 'Are instant access savings accounts for you?',
          description: `Instant access savings accounts are for you if you have spare cash and want to:<br />
<ul>
<li>earn a better return than from your current account</li>
<li>save at your own pace</li>
<li>be able to withdraw money whenever you want</li>
<li>not take risks with your money</li>
</ul>`
        },
        {
          title: 'Is a regular savings account for you?',
          description: `Also known as ‘monthly savers’ or ‘regular savers’, a regular savings account might be for you if:<br />
<ul>
<li>You don’t want to invest a lump sum</li>
<li>You want to get into the habit of regular saving</li>
<li>You’re saving for a special event like a wedding or a holiday</li>
<li>You want more interest than you can get with a current account or ordinary savings account</li>
</ul>`
        },
        {
          title: 'Index linked savings right for you?',
          description: `An index-linked savings account might be right for you if:<br />
<ul>
<li>you want the value of your savings to keep up with inflation</li>
<li>you have £500 or more that you can tie up for a fixed period of time, often three or five years</li>
<li>you don’t want to risk losing any of your capital</li>
<li>with base rates currently at 0.5% and inflation around 0.5% (April 2015) it is considered unlikely that you will find many or indeed any providers offering these Index-linked savings accounts to customers presently</li>
</ul>`
        }
      ],
      comparisonTable: [
        {
          image: 'assets/images/resources/atom.png',
          description: 'atom',
          productName: 'Atom Bank 5 Year Fixed Saver',
          InterestRate: '2.45% Fixed Paid Monthly',
          term: '5 years',
          GrossValue: '1,024.78',
          link: 'https://www.atombank.co.uk/text-me-the-app?_branch_match_id=362280064243701824'
        },
        {
          image: 'assets/images/resources/virgin.png',
          description: 'Virgin money',
          productName: 'Virgin Money Defined Access E-Saver Issue 13',
          InterestRate: '1.01% Variable Paid Anniversary',
          term: 'No term',
          GrossValue: '1,010.10',
          link: 'https://online.virginmoney.com/SSO/SSO/PersonalDetailsView.jsf'
        },
        {
          image: 'assets/images/resources/natwest.png',
          description: 'natwest',
          productName: 'NatWest Savings Builder Account',
          InterestRate: '1.5% variable',
          term: 'No term',
          GrossValue: '1,015.06',
          link: 'http://personal.natwest.com/personal/savings/savings-builder/savings-builder-apply.html'
        },
        {
          image: 'assets/images/resources/metro.png',
          description: 'Metro bank',
          productName: 'Metro Bank Fixed Term Savings 3 Years',
          InterestRate: '1.49% Fixed Paid Monthly',
          term: '3 years',
          GrossValue: '1,014.90',
          link: 'https://cp.metrobankonline.co.uk/accountopening/main/index?productConf=DA07DA38-FE61-E511-80F8-3863BB34CBA8&termLength=36#product/fixed'
        },
        {
          image: 'assets/images/resources/nationwide.png',
          description: 'nationwide',
          productName: 'Nationwide',
          InterestRate: '1% Fixed',
          term: '3 years',
          GrossValue: '1,010.00',
          link: 'https://www.nationwide.co.uk/products/savings/fixed-rate-bonds/features-and-benefits'
        }
      ]
    },
    'cash-isas-lisas': {
      title: 'Cash ISAs & LISAs',
      description: CashISAsLISAs(),
      image: 'assets/images/resources/cash-2.jpg',
      prosCons,
      faqs: [
        {
          title: 'When might a Cash ISA be for you?',
          description: `A Cash ISA is for you if:<br />
<ul>
<li>You want to earn tax-free interest on your cash savings</li>
<li>You are a UK resident for tax purposes</li>
<li>You are aged 16 or over (junior ISAs are also available)</li>
</ul>`
        },
        {
          title: 'How Cash ISAs work?',
          description: `The limit for ISA contributions in the 2017/18 tax year is £20,000.<br />
<ul>
<li>With a Cash ISA you’ll earn tax-free interest on your savings.</li>
<li>You can only open one Cash ISA per year, but it is possible to transfer to another Cash ISA or Stocks and Shares ISA or Stocks and Shares ISA with another provider.</li>
<li>If you withdraw money from your Cash ISA, you don’t reset your annual limit. For example, say in one year you saved up to the Cash ISA limit and withdrew £1,000. You can’t top up that £1,000 immediately – you’ll need to wait for the next tax year. This is not the case if you have a Flexible ISA (see below).</li>
</ul>`
        }
      ],
      comparisonTable: ''
    }
  },
  'isa-lisa': {
    'cash-isas': {
      title: 'Cash ISAs',
      description: CashISAs(),
      image: 'assets/images/resources/ISA-2.jpg',
      prosCons,
      faqs: [
        {
          title: 'When might a Cash ISA be for you?',
          description: `A Cash ISA is for you if:<br />
<ul>
<li>You want to earn tax-free interest on your cash savings</li>
<li>You are a UK resident for tax purposes</li>
<li>You are aged 16 or over (junior ISAs are also available)</li>
</ul>`
        },
        {
          title: 'How Cash ISAs work?',
          description: `The limit for ISA contributions in the 2017/18 tax year is £20,000.<br />
<ul>
<li>With a Cash ISA you’ll earn tax-free interest on your savings.</li>
<li>You can only open one Cash ISA per year, but it is possible to transfer to another Cash ISA or Stocks and Shares ISA or Stocks and Shares ISA with another provider.</li>
<li>If you withdraw money from your Cash ISA, you don’t reset your annual limit. For example, say in one year you saved up to the Cash ISA limit and withdrew £1,000. You can’t top up that £1,000 immediately – you’ll need to wait for the next tax year. This is not the case if you have a Flexible ISA (see below).</li>
</ul>`
        }
      ],
      comparisonTable: ''
    },
    'stocks-shares-isas': {
      title: 'Stock & shares ISAs',
      description: StockShareISAs(),
      image: 'assets/images/resources/ISA-2.jpg',
      prosCons,
      faqs: [
        {
          title: 'When might a Stocks and shares ISA be for you?',
          description: `If you don’t understand a financial product, get independent financial advice before you buy.<br />
A Stocks and shares ISA could be for you if:<br />
<ul>
<li>You are happy to put your money into investments but want to protect any profits, rent or interest from tax or to protect dividends from higher-rate and additional-rate tax (as dividends are taxed at 10% – however this provides no benefit to basic rate taxpayers)</li>
<li>You are looking to tie up your money for at least five years</li>
<li>You haven’t used up your total ISA allowance for the current tax year, and</li>
<li>You’re comfortable with the fact that the value of your investments can go both up and down and that you might get back less than you invested</li>
</ul>`
        },
        {
          title: 'What investments are held in Stocks and shares ISAs?',
          description: `A Stocks and shares ISA is a ‘wrapper’ that can be put around a wide range of different investment products to help save you tax.<br />
Lots of different types of investment can be held in an ISA, including:<br />
<ul>
<li>Unit trusts</li>
<li>Investment trusts</li>
<li>Exchange traded funds</li>
<li>Individual stocks and shares</li>
<li>Corporate and government bonds</li>
<li>OEICs (Open Ended Investment Companies)</li>
</ul>You’ll often find that Stocks and shares ISAs are sold and marketed as products in their own right.`
        },
        {
          title: 'How Stocks and shares ISAs work?',
          description: `Your allowance is how much you can pay in, not the total value of your investments – so if you put your whole allowance in a Stocks and shares ISA and it falls in value you can’t top it up in the same tax year.<br />
You can pay a total of £20,000 a year into an ISA in the current tax year.<br />
<ul>
<li>You can pay your whole allowance of £20,000 into a Stocks and shares ISA, a Cash ISA, or a combination of these.</li>
<li>Your yearly ISA allowance expires at the end of the tax year and any unused allowance will be lost. It can’t be rolled over to the following year.</li>
<li>You can choose between making a lump sum investment and/or making regular or ad hoc contributions throughout the tax year.</li>
<li>Any increase in value of the investments in your Stocks and shares ISA is free of Capital Gains Tax.</li>
<li>Most income is tax-free – find out more in the later section on tax.</li>
<li>You can only pay into one Stocks and shares ISA in each tax year, but you can open a new ISA with a different provider each year if you want to. You don’t have to use the same provider for your Cash ISA, if you have one.</li>
<li>It’s worth shopping around to make sure you find a ISA that suits you. Compare any charges for the ISA wrapper and the range of investments you can put inside.</li>
</ul>`
        }
      ],
      comparisonTable: ''
    },
    'lifetime-isas(lisa)': {
      title: 'Lifetime ISAs(Lisa)',
      description: LifetimeISAs(),
      image: 'assets/images/resources/ISA-2.jpg',
      prosCons,
      faqs: [
        {
          title: 'Who can get a Lifetime ISA?',
          description: `You can open a Lifetime ISA with any bank, building society or investment manager that offers the product.<br />
To open a Lifetime ISA you need to be:<br />
<ul>
<li>Between the age of 18 and 40</li>
<li>A UK resident or a Crown servant (for example, a member of the armed forces serving abroad)</li>
</ul>You can continue paying into a Lifetime ISA until you are 50.`
        },
        {
          title: 'When can you access your money?',
          description: `You can access money in your Lifetime ISA, including the government bonus and without paying any less if:<br />
<ul>
<li>You reach the age of 60</li>
<li>You are diagnosed with a terminal illness</li>
<li>You’re buying your first home and your account has been open for 12 months</li>
</ul>If you close your account during the cooling off period, you won’t get the 25% bonus.`
        }
      ],
      comparisonTable: ''
    }
  }
}

export const comparisonData = [
  {
    image: 'assets/images/partners/moneybox.svg',
    rating: 9.2,
    reviews: 252,
    firstYearFee: {
      amount: 12.5,
      interest: 0.25
    },
    minimumInitialInvestment: 1,
    pension: true,
    ISA: true,
    app: true,
    FSCS: true,
    link: 'https://google.co.uk/'
  },
  {
    image: 'assets/images/partners/moneybox.svg',
    rating: 6.9,
    reviews: 81,
    firstYearFee: {
      amount: 25,
      interest: 0.90
    },
    minimumInitialInvestment: 100,
    pension: true,
    ISA: false,
    app: false,
    FSCS: true,
    link: 'https://google.co.uk/'
  },
  {
    image: 'assets/images/partners/moneybox.svg',
    rating: 2.1,
    reviews: 16,
    firstYearFee: {
      amount: 16,
      interest: 3
    },
    minimumInitialInvestment: 55,
    pension: false,
    ISA: true,
    app: true,
    FSCS: false,
    link: 'https://google.co.uk/'
  },
  {
    image: 'assets/images/partners/moneybox.svg',
    rating: 9.2,
    reviews: 252,
    firstYearFee: {
      amount: 12.5,
      interest: 0.25
    },
    minimumInitialInvestment: 1,
    pension: true,
    ISA: true,
    app: true,
    FSCS: true,
    link: 'https://google.co.uk/'
  },
  {
    image: 'assets/images/partners/moneybox.svg',
    rating: 6.9,
    reviews: 81,
    firstYearFee: {
      amount: 25,
      interest: 0.90
    },
    minimumInitialInvestment: 100,
    pension: true,
    ISA: false,
    app: false,
    FSCS: true,
    link: 'https://google.co.uk/'
  },
  {
    image: 'assets/images/partners/moneybox.svg',
    rating: 2.1,
    reviews: 16,
    firstYearFee: {
      amount: 16,
      interest: 3
    },
    minimumInitialInvestment: 55,
    pension: false,
    ISA: true,
    app: true,
    FSCS: false,
    link: 'https://google.co.uk/'
  }
]

export interface Language {
  name: string;
  level: string;
}

export interface Interest {
  name: string;
  description: string;
}

export interface SkillItem {
  name: string;
  experience: number;
}

export interface SkillSection {
  section: string;
  items: SkillItem[];
}

export interface Education {
  name: string;
  specialization: string | null;
  qualification: string;
  startDate: number;
  endDate: number;
  additional: boolean;
  description: string[];
}

export interface Experience {
  startDate: number | string;
  endDate: number | string | null;
  companyName: string;
  country: string;
  position: string;
  description: {
    summary: string[];
    responsibilities: string[];
    goals: string[];
  };
}

export const languages: Language[] = [
  {
    name: 'Ukrainian',
    level: 'C2'
  },
  {
    name: 'English',
    level: 'B2'
  },
  {
    name: 'Russian',
    level: 'C2'
  },
];

export const interests: Interest[] = [
  {
    name: 'Running',
    description: 'I have developed a passion for running, consistently covering distances of approximately 15 kilometers over the past six months.'
  },
  {
    name: 'Technology Enthusiast',
    description: 'I enjoy delving into the world of high technology, exploring the origins and concepts behind remarkable innovations that benefit humanity.'
  },
  {
    name: 'Plant Cultivation',
    description: 'Growing plants is a cherished hobby of mine, influenced by the extensive gardens maintained by my parents and grandparents throughout generations.'
  },
  {
    name: 'Design',
    description: 'I have a keen interest in design, whether it\'s creating and constructing physical or digital creations. I\'m particularly drawn to optimizing, speeding up, simplifying, and enhancing the reliability of various phenomena and objects.'
  },
  {
    name: 'Travel',
    description: 'Although my love for travel is hindered by the unfortunate circumstances of conflict in my country, I am eager to explore new places and cultures when the opportunity arises.'
  },
  {
    name: 'Psychology',
    description: 'I find psychology fascinating, particularly in understanding human habits and behavior. I study these aspects for professional purposes, applying insights to my work.'
  },
];

export const skills: SkillSection[] = [
  {
    section: 'Frontend',
    items: [
      { name: 'HTML', experience: 9 },
      { name: 'javaScript', experience: 4 },
      { name: 'CSS', experience: 9 },
      { name: 'SASS/LESS', experience: 5 },
      { name: 'Git', experience: 4 },
      { name: 'AJAX', experience: 3 },
      { name: 'React', experience: 3 },
      { name: 'Redux/toolkit', experience: 3 },
      { name: 'Wordpress', experience: 8 },
      { name: 'Elementor', experience: 7 },
      { name: 'JSON', experience: 7 },
      { name: 'APIs', experience: 4 },
      { name: 'WPO', experience: 5 },
      { name: 'Webflow', experience: 2 },
      { name: 'Bootstrap', experience: 3 },
      { name: 'NextJS', experience: 2 },
      { name: 'Material UI', experience: 2 },
      { name: 'Ant Design', experience: 1 },
    ]
  },
  {
    section: 'Backend',
    items: [
      { name: 'PHP (basics)', experience: 2 },
      { name: 'Postman', experience: 3 },
      { name: 'mySQL', experience: 3 },
      { name: 'GraphQL', experience: 1 },
      { name: 'phpMyAdmin', experience: 4 },
      { name: 'Webmin/Virtualmin', experience: 3 },
      { name: 'HeidiSQL', experience: 2 },
      { name: 'CLI', experience: 2 },
      { name: 'Node.js', experience: 2 },
      { name: 'Deployment and Hosting Services', experience: 5 },
    ]
  },
  {
    section: 'Design',
    items: [
      { name: 'Illustrator (Ai)', experience: 7 },
      { name: 'Figma', experience: 5 },
      { name: 'Photoshop (Ps)', experience: 10 },
      { name: 'UX/UI research', experience: 7 },
      { name: 'inDesign (Id)', experience: 4 },
      { name: 'Google material', experience: 5 },
      { name: 'Tilda', experience: 4 },
      { name: 'Responsive design', experience: 7 },
      { name: 'WIX', experience: 3 },
      { name: 'Prototyping', experience: 7 },
      { name: 'Modeling', experience: 10 },
      { name: 'Adobe XD', experience: 2 },
      { name: 'Lightroom', experience: 7 },
      { name: 'Corel Draw', experience: 5 },
    ]
  },
  {
    section: 'Management',
    items: [
      { name: 'Agile', experience: 3 },
      { name: 'Team management', experience: 4 },
      { name: 'Planning', experience: 4 },
      { name: 'Risk management', experience: 8 },
      { name: 'SDLC', experience: 5 },
      { name: 'Project planing', experience: 5 },
      { name: 'Problem solving', experience: 8 },
      { name: 'Negotiation', experience: 8 },
      { name: 'Technical writing', experience: 8 },
      { name: 'Conflict management', experience: 8 },
      { name: 'Budgeting', experience: 8 },
      { name: 'SDLC', experience: 4 },
      { name: 'Google DS', experience: 3 },
      { name: 'HacknPlan', experience: 2 },
      { name: 'Monday', experience: 3 },
    ]
  },
  {
    section: 'Other',
    items: [
      { name: 'Property evaluation', experience: 10 },
      { name: 'Research skills', experience: 10 },
      { name: 'System administration', experience: 2 },
      { name: 'Hardware management', experience: 2 },
      { name: 'Miro', experience: 4 },
      { name: 'Trello', experience: 5 },
      { name: 'Asana', experience: 5 },
      { name: 'SEO', experience: 2 },
      { name: 'Competitors Analysis', experience: 10 },
      { name: 'Notion', experience: 5 },
      { name: 'AI prompts', experience: 1 },
      { name: 'Computer Troubleshooting and Repair', experience: 10 },
    ]
  },
  {
    section: 'Soft skills',
    items: [
      { name: 'Self-Study', experience: 10 },
      { name: 'Creativity', experience: 10 },
      { name: 'Adaptability', experience: 10 },
      { name: 'Teamwork', experience: 10 },
      { name: 'Leadership', experience: 10 },
      { name: 'Customer Service', experience: 8 },
      { name: 'Ability to Multitask', experience: 8 },
      { name: 'Effective Time Management', experience: 8 },
      { name: 'Mentoring', experience: 4 },
    ]
  },
];

export const education: Education[] = [
    {
		name: `Mykhailo Tuhan-Baranovskyi Donetsk National University of Economics and Trade`,
		specialization: `Accounting and Auditing`,
		qualification: `Accounting and Auditing professional`,
		startDate: 2006,
		endDate: 2009,
		additional: false,
		description: [
			'The Accounting and Auditing specialization focuses on financial reporting, accounting principles, and audit procedures within organizations. Professionals in this field play a critical role in maintaining accurate financial records, ensuring compliance with accounting standards and regulations, and conducting thorough examinations of financial statements to assess their accuracy and integrity.',
			'A specialization in Accounting and Auditing is essential for individuals pursuing careers as accountants, auditors, financial analysts, or financial managers. It is a critical function that contributes to the financial transparency and accountability of businesses and organizations.'
		]
	},
	{
		name: `Donetsk Polytechnic College`,
		specialization: `Finance and credit`,
		qualification: `Junior Specialist`,
		startDate: 2003,
		endDate: 2006,
		additional: false,
		description: [
			'The Finance and Credit specialization focuses on financial management, credit analysis, and financial operations within various organizations. Professionals in this field play a crucial role in optimizing financial resources, evaluating creditworthiness, and facilitating financial transactions.',
			'A specialization in Finance and Credit is valuable for individuals pursuing careers as financial analysts, credit analysts, investment bankers, financial planners, or finance managers. It is a dynamic field that contributes to effective financial management and responsible credit practices.'
		]
	},
	{
		name: `State Property Fund of Ukraine, Ukrainian Society of Appraisers`,
		specialization: null,
		qualification: `Accredited Property & Property rights Appraiser`,
		startDate: 2012,
		endDate: 2012,
		additional: true,
		description: [
			'The specialization in Property, Property Rights, and Business Valuation focuses on evaluating the worth of assets, property rights, and businesses in accordance with established standards and regulations. Professionals in this field play a critical role in providing accurate and unbiased valuations for various purposes, including real estate transactions, legal disputes, taxation, financial planning, mergers and acquisitions, and more.',
			'A specialization in Property, Property Rights, and Business Valuation is essential for individuals pursuing careers in asset appraisal, property rights assessment, business valuation, and related fields. These experts ensure that assets and businesses are evaluated accurately and fairly, facilitating informed decision-making across a spectrum of industries and scenarios.'
		]
	},
	{
		name: `Ministry of Justice of Ukraine`,
		specialization: null,
		qualification: `Arbitration Manager (property manager, managing of readjustment, liquidation).`,
		startDate: 2014,
		endDate: 2017,
		additional: true,
		description: [
			'The specialization in Arbitration Management encompasses roles such as Property Manager, Manager of Readjustment, and Liquidator. Professionals in this field are responsible for overseeing complex processes related to property disputes, asset reallocation, and the orderly dissolution of assets and liabilities.',
			'A specialization as an Arbitration Manager, Property Manager, Manager of Readjustment, or Liquidator is crucial for individuals entrusted with the management and resolution of complex property and asset-related matters. These professionals ensure the fair and equitable resolution of disputes and the efficient management of assets and liabilities in various contexts.'
		]
	},
	{
		name: `GoIT Ukraine`,
		specialization: 'Frontend',
		qualification: `Frontend developer`,
		startDate: 2016,
		endDate: 2016,
		additional: true,
		description: [
			'The role of a Frontend developer involves crafting the user interface of web applications and websites. Frontend developers are responsible for creating interactive and responsive user interfaces that prioritize user experience and ease of navigation. They work closely with design teams and collaborate on turning visual designs into functional web pages, ensuring cross-browser compatibility and optimal performance. Frontend developers are skilled in HTML, CSS, and JavaScript, and they often utilize frontend frameworks and libraries to streamline development and enhance the interactivity of web interfaces. This role plays a crucial part in delivering visually appealing and user-friendly digital experiences to end-users.',
		]
	},
	{
		name: `FreeCodeCamp`,
		specialization: 'Frontend',
		qualification: 'JavaScript Algorithms and Data Structures',
		startDate: 2020,
		endDate: 2020,
		additional: true,
		description: [
			'300 hours of work (the course was completed twice for fun and for update reasons)',
		]
	},
	{
		name: `FreeCodeCamp`,
		specialization: 'Frontend',
		qualification: 'Responsive Web Design',
		startDate: 2020,
		endDate: 2020,
		additional: true,
		description: [
			`300 hours of work (the course was completed twice for fun and for update reasons)`,
		]
	},
	{
		name: `GeekBrains`,
		specialization: 'Frontend',
		qualification: 'Introduction to Programming',
		startDate: 2020,
		endDate: 2020,
		additional: true,
		description: [
			`The course was completed for fun, to test knowledge and improve your own training program`,
		]
	},
	{
		name: `GeekBrains`,
		specialization: 'Frontend',
		qualification: 'Programming basics. Beginner',
		startDate: 2020,
		endDate: 2020,
		additional: true,
		description: [
			`The course was completed for fun, to test knowledge and improve your own training program`,
		]
	},
	{
		name: `GeekBrains`,
		specialization: 'Design',
		qualification: 'Introduction to Web Design',
		startDate: 2020,
		endDate: 2020,
		additional: true,
		description: [
			`The course was completed for fun, to test knowledge and improve your own training program`,
		]
	},

];

export const experience: Experience[] = [
    {
		startDate: 2003,
		endDate: 2006,
		companyName: `Commodity Exchange "Donetsk Universal Commodity Exchange"`,
		country: 'Ukraine',
		position: `computing center technician`,
		description: {
			summary: [
				'I am an adept Computing Center Technician with a comprehensive skill set encompassing the maintenance and technical support of servers, workstations, network equipment, and data systems. My responsibilities extend to digitizing, processing, and updating extensive datasets while ensuring the seamless and secure operation of critical infrastructure.',
				'My expertise includes monitoring server and network equipment performance, promptly addressing technical issues, and managing software updates to guarantee optimal functionality. I prioritize data security through regular backups and strict adherence to established data security standards.',
				'Collaboration is at the core of my approach, as I work closely with a dedicated team to maintain the uninterrupted operation of the computing center. Furthermore, I provide crucial user support and technical assistance to facilitate efficient operations.',
				'As a Computing Center Technician, I combine technical proficiency with a commitment to maintaining the reliability and security of essential computing resources, making me an asset to any organization.'
			],
			responsibilities: [
				'Maintenance and technical support of servers and workstations for data exchange',
				'Maintenance and technical support of network equipment and internal networks',
				'Digitization, processing, and updating of large datasets',
				'Monitoring and ensuring the reliable operation of servers and network equipment',
				'Troubleshooting and resolving issues on servers and workstations',
				'Managing and updating software on computers and servers',
				'Regular data backups and ensuring data security',
				'Adherence to data security standards and procedures',
				'Collaboration with team members to ensure the continuous operation of the computing center',
				'Providing user support and addressing their technical inquiries'
			],
			goals: []
		}
	},
	{
		startDate: 2008,
		endDate: 2009,
		companyName: `'Privat Bank' OJSC`,
		country: 'Ukraine',
		position: `Expert of the direction "Car on credit"`,
		description: {
			summary: [
				'I am a seasoned Expert specializing in the domain of "Car on Credit," where my primary focus is to navigate the intricate landscape of lending regulations and compliance. My role demands an unwavering commitment to maintaining up-to-date knowledge of lending laws to ensure adherence and mitigate risk effectively.',
				'In addition to compliance, I excel in the meticulous organization and management of client records, prioritizing accuracy and the utmost confidentiality of loan-related documentation. I am dedicated to facilitating a smooth and efficient loan application process, providing expert guidance to borrowers every step of the way.',
				'My proficiency extends to conducting comprehensive credit report analyses, evaluating applicants\' financial stability, and assessing eligibility criteria based on income, assets, and liabilities. Furthermore, I possess a keen eye for evaluating creditworthiness, leveraging my skills to make informed lending decisions.',
				'In challenging situations involving delinquent loans, I employ my negotiation skills to establish favorable repayment terms, all while minimizing potential losses. My commitment to evaluating credit risk and applications ensures strict compliance with established policies and procedures.',
				'As an Expert in the "Car on Credit" field, I am dedicated to upholding the highest standards of compliance and client satisfaction, ultimately contributing to the success and reliability of our lending operations.',
			],
			responsibilities: [
				'Maintained an in-depth knowledge of current lending regulations, ensuring compliance with all applicable laws',
				'Organized and maintained client records, ensuring accuracy and confidentiality of all loan-related documents',
				'Assisted borrowers in the loan application process to ensure a smooth and efficient experience',
				'Analyzed credit reports to determine the financial viability of loan applicants',
				'Assessed applicant\'s income, assets, and liabilities to determine loan eligibility',
				'Analyzed financial statements and credit reports to determine creditworthiness of borrowers',
				'Negotiated repayment terms with customers for delinquent loans to minimize losses',
				'Evaluated credit risk and loan applications to ensure compliance with established policies and procedures',
			],
			goals: []
		}
	},
	{
		startDate: 2010,
		endDate: 2011,
		companyName: `'Foxtrot' OJSC`,
		country: 'Ukraine',
		position: `Sales assistant (digital goods & computers)`,
		description: {
			summary: [
				'I am a dedicated Sales Assistant with expertise in digital goods and computers, contributing to the seamless operation of the sales process. My responsibilities encompass the acceptance and organized registration of goods within the warehouse. I excel in the meticulous unpacking, initial setup, and strategic display of products on showcases, ensuring an enticing presentation for potential customers.',
				'My role extends to being a knowledgeable product consultant, adept at explaining product features and specifications to assist customers in making informed choices. I pride myself on delivering compelling product presentations that captivate and engage prospective buyers. In addition to this, I am proficient in managing the sales registration process to streamline transactions.',
				'Furthermore, I am committed to providing top-notch post-sales customization support to ensure customer satisfaction. My combined skills in product handling, customer engagement, and sales support make me an invaluable asset in the realm of digital goods and computers sales.',
				'With a strong customer-centric approach and a passion for delivering exceptional service, I contribute to elevating the sales experience for both clients and the organization.',
			],
			responsibilities: [
				'Acceptance and warehouse registration of goods.',
				'Unpacking, initial setup, and display of products on showcases.',
				'Providing product consultations and explaining its features and specifications.',
				'Delivering effective product presentations to potential customers.',
				'Managing the sales registration process.',
				'Assisting customers with post-sales customization of products.',
			],
			goals: []
		}

	},
	{
		startDate: 2011,
		endDate: 2012,
		companyName: `'Delta Bank' OJSC`,
		country: 'Ukraine',
		position: `loan officer`,
		description: {
			summary: [
				'I am a dedicated Loan Officer with a profound commitment to delivering exceptional banking services. My role encompasses advising clients on the full range of financial offerings provided by the bank, assessing their creditworthiness, skillfully crafting loan agreements, and adeptly navigating the complexities of managing challenging debts. I am driven by the goal of empowering clients to achieve their financial dreams through tailored lending solutions.',
				'In my role as a Loan Officer, I consider myself not just a financial advisor but also a trusted partner in helping clients achieve their financial objectives. I approach each day with a commitment to excellence, a dedication to compliance, and a passion for empowering individuals and businesses through effective lending solutions.',
			],
			responsibilities: [
				'Immerse myself in the intricate world of lending regulations, diligently ensuring compliance with all relevant laws. I stay at the forefront of evolving regulations to safeguard the interests of both clients and the institution.',
				'Precision is my hallmark as I meticulously organize and safeguard client records, assuring the utmost accuracy and confidentiality of all loan-related documents. Trust and confidentiality are the cornerstones of my work',
				'I am dedicated to making the loan application process a seamless and efficient experience for borrowers. My guidance and expertise are designed to provide clients with confidence and peace of mind throughout the journey',
				'Credit reports hold the key to sound lending decisions, and I excel in analyzing them to ascertain the financial viability of loan applicants. This allows me to tailor loan solutions that align with the unique needs and aspirations of each client',
				'Evaluating an applicant\'s financial landscape is a craft I have mastered. By assessing their income, assets, and liabilities, I can determine loan eligibility and offer tailored solutions that are both responsible and beneficial',
			],
			goals: []
		}
	},
	{
		startDate: 2019,
		endDate: null,
		companyName: `'Remote Helpers'`,
		country: 'Ukraine',
		position: `Administrative Manager`,
		description: {
			summary: [
				'In this role, I am an experienced Administrative Manager with a successful track record of optimizing organizational efficiency and fostering collaborative work environments. My expertise lies in developing and implementing effective policies and procedures, nurturing relationships with external partners, enhancing communication channels, and driving successful project outcomes. I am dedicated to Agile methodology, change management, and data-driven decision-making, all of which contribute to my ability to lead and inspire teams to achieve their highest potential.',
			],
			responsibilities: [
				'Developed and managed an organizational structure that allowed for effective resource allocation and delegation of tasks',
				'Developed and implemented effective policies and procedures for HR, finance, and other administrative functions',
				'Developed and maintained good working relationships with vendors and contractors, resulting in improved customer service and satisfaction',
				'Established and maintained effective communication channels with internal and external stakeholders, resulting in improved customer service and satisfaction',
				'Created and implemented a system for tracking and monitoring project progress and milestones, resulting in timely completion of projects',
				'Coached and mentored administrative staff, resulting in improved job performance and knowledge',
				'Led daily stand-up meetings to ensure tasks were completed on time and communicated changes to stakeholders',
				'Collaborated with the development team to ensure tasks were completed on time and met quality standards',
				'Identified and resolved conflicts between team members to ensure a successful project delivery',
				'Mentored and coached project team members to ensure project success',
				'Analyzed project data and created reports to present to senior management, resulting in improved decision-making',
				'Implemented a change management process that ensured all changes were documented and communicated to stakeholders',
				'Utilized Agile methodology and tools to ensure a successful product launch',
				'Developed a team performance tracking system to improve team accountability and performance'
			],
			goals: []
		}
	},
	{
		startDate: 2017,
		endDate: null,
		companyName: `Independent Professional Activity`,
		country: 'Ukraine',
		position: `Trustee in Bankruptcy (Arbitration Administrator)`,
		description: {
			summary: [
				'In my role as a Trustee in Bankruptcy, also known as an Arbitration Administrator, I have taken on the critical responsibility of managing and overseeing the complex world of asset arbitration and financial recovery. My expertise centers around safeguarding and effectively administering the assets of entities engaged in arbitration proceedings while ensuring compliance with legal requirements. I excel in managing the sanitation process, aligning it with financial recovery objectives, and, when necessary, efficiently orchestrating asset liquidation to satisfy creditors.',
				'Adherence to stringent legal regulations and court orders is paramount throughout the arbitration process under my purview. My contribution extends to conducting comprehensive financial assessments and feasibility studies, providing valuable insights that inform strategic decision-making during arbitration and restructuring.',
				'Furthermore, I prioritize transparent and open communication with all stakeholders, including creditors, legal counsel, and the arbitration tribunal, to ensure that all parties are well-informed and aligned with the goals and progress of the arbitration proceedings. My dedication to maintaining the highest standards of ethics, compliance, and financial stewardship makes me an asset in the role of Trustee in Bankruptcy, consistently working towards equitable and successful outcomes in complex financial scenarios.',
			],
			responsibilities: [
				'Oversee and administer the assets of entities involved in arbitration, ensuring their protection and proper utilization',
				'Manage the sanitation (restructuring or reorganization) process, ensuring that it aligns with the goals of financial recovery and compliance with legal requirements',
				'In cases where liquidation is necessary, act as a liquidator, overseeing the orderly disposition of assets to satisfy creditors',
				'Ensure strict adherence to legal regulations and compliance with court orders throughout the arbitration process',
				'Conduct financial assessments and feasibility studies to inform decision-making during arbitration and restructuring',
				'Maintain transparent communication with stakeholders, including creditors, legal counsel, and the arbitration tribunal',
			],
			goals: []
		}
	},
	{
		companyName: `'Dino - tech solutions'`,
		startDate: 2020,
		endDate: 2021,
		country: 'Canada/Israel',
		position: `Frontend developer`,
		description: {
			summary: [
				`I am a highly skilled Front-end Developer with a proven track record in the development, support, and maintenance of web resources. My expertise extends to creating dynamic and user-friendly websites using CMS WordPress, whether by customizing existing templates or crafting themes from scratch. I am well-versed in optimizing and managing large client resources, conducting migrations, implementing data backup solutions, and ensuring robust data recovery processes.`,
				'My capabilities also encompass the creation of web applications utilizing popular libraries and frameworks to elevate user experiences and functionality. I excel in configuring and maintaining dedicated virtual servers, guaranteeing the reliability and performance of web applications. Additionally, I possess a keen understanding of hosting setup, domain configuration, and server maintenance.',
				'Collaboration is a cornerstone of my approach, as I work closely with cross-functional teams, including back-end developers and designers, to implement and refine website and application features. I am committed to continuously monitoring website performance and security, proactively implementing updates and improvements, and ensuring responsive and mobile-friendly design for optimal user accessibility.',
				'My commitment to staying abreast of industry trends and emerging technologies enables me to provide innovative solutions. I am proficient in troubleshooting and swiftly resolving front-end-related issues, minimizing downtime and user disruptions. Furthermore, I conduct thorough code reviews and uphold coding standards to maintain consistency and quality. My technical support skills extend to providing assistance to clients and end-users when required.',
				'With a focus on UX/UI design and optimization, I contribute to enhancing user engagement and overall experience. I actively participate in the development and execution of testing plans, identifying and addressing usability or compatibility issues to deliver exceptional web solutions.',
				'As a Front-end Developer, I combine technical proficiency with a passion for creating engaging and seamless web experiences, consistently delivering results that exceed expectations.',
			],
			responsibilities: [
				'Development, support, and maintenance of web resources',
				'Development of websites using CMS WordPress, including working with ready-made templates/constructors and creating themes from scratch',
				'Maintenance and optimization of large client resources, including conducting migrations, creating backups, and data recovery',
				'Creation of web applications using popular libraries and frameworks to enhance user experiences and functionality',
				'Configuration and management of dedicated virtual servers to ensure the reliability and performance of web applications',
				'Hosting setup and management, including domain configuration and server maintenance',
				'Collaborating with cross-functional teams, including back-end developers and designers, to implement and refine website and application features',
				'Continuous monitoring of website performance and security, implementing necessary updates and improvements',
				'Ensuring responsive and mobile-friendly design for optimal user accessibility',
				'Staying updated with industry trends and emerging technologies to provide innovative solutions',
				'Troubleshooting and resolving front-end related issues promptly to minimize downtime and user disruptions',
				'Conducting code reviews and maintaining coding standards for consistency and quality',
				'Providing technical support to clients and end-users as needed',
				'Collaborating on UX/UI design and optimization to enhance user engagement and overall experience',
				'Participating in the development and execution of testing plans to identify and address any usability or compatibility issues',
			],
			goals: []
		}
	},
	{
		companyName: `'MIS' LLC`,
		startDate: 2012,
		endDate: null,
		country: 'Ukraine',
		position: `Property Valuation and Accounting Manager`,
		description: {
			summary: [
				`I am an accomplished professional with expertise in property valuation and accounting management. My career combines hands-on experience as a proficient valuator alongside leadership in the field of property assessment and accounting. My practice encompasses conducting valuations of various asset types, including real estate, tangible assets, and financial securities, utilizing recognized valuation techniques and methodologies such as the income approach, market approach, and cost approach. I remain attuned to market trends, economic conditions, and industry-specific factors that influence asset values, ensuring informed decision-making for my clients.`,
				'As a leader in the valuation and accounting domain, I collaborate closely with clients to understand their unique needs and provide expert guidance throughout the valuation process. I am committed to maintaining the highest standards of accuracy, objectivity, and integrity, ensuring that all valuations comply with industry standards and regulations.',
				'In addition to my leadership role, I actively engage in practical valuation activities, further enhancing my proficiency and insight. My dual role as a practitioner and department head enables me to provide comprehensive solutions to clients, empowering them to make informed decisions about asset acquisition and management.',
				'My multifaceted role as a property valuation and accounting manager positions me to deliver comprehensive and informed solutions, underpinned by practical expertise and leadership in the field.'
			],
			responsibilities: [
				'Conduct valuations of real estate, tangible assets, financial securities, and other assets using recognized valuation techniques',
				'Stay updated on market trends, economic conditions, and industry-specific factors that may impact asset values',
				'Apply appropriate valuation methodologies, such as the income approach, market approach, or cost approach, depending on the asset type and purpose of the valuation',
				'Collaborate with clients to understand their valuation needs, provide expert guidance, and present valuation reports in a clear and understandable manner',
				'Ensure that all valuations comply with relevant industry standards and regulations',
				'Maintain the highest standards of accuracy, objectivity, and integrity in the valuation process',
				'Advise clients on market trends and property values, resulting in the successful purchase of a property at the optimal price'
			],
			goals: []
		}
	},
	{
		companyName: `SyncSpider`,
		startDate: '2023',
		endDate: '2023',
		country: 'Austria',
		position: `Frontend developer / designer`,
		description: {
			summary: [
				`I am a versatile Front-end Developer and Designer with a passion for creating visually stunning and high-performance websites. My work revolves around the seamless fusion of design and development, resulting in exceptional user experiences. My expertise spans optimizing WordPress sites for peak performance, crafting custom widgets for dynamic content, implementing robust backup systems, and developing intuitive shortcodes for content generation.`,
				'In addition, I excel in enhancing website performance through effective caching systems, ensuring cross-browser compatibility, and delivering responsive web design that adapts flawlessly to various devices. I also specialize in leveraging JavaScript, jQuery, and AJAX to add dynamic and interactive elements, making websites not just functional but engaging.',
				'As a Front-end Developer and Designer, I am dedicated to crafting web solutions that not only meet but exceed client expectations. My blend of design creativity and technical proficiency ensures that websites are not just aesthetically pleasing but also deliver top-notch performance and user satisfaction.',
			],
			responsibilities: [
				'Optimizing WordPress websites for optimal performance, ensuring that users experience speedy and responsive interactions.',
				'I take pride in developing and maintaining custom widgets that display dynamic content, enhancing the overall user experience by delivering relevant and engaging information.',
				'To safeguard data integrity and ensure quick recoveries in case of outages, I developed and implemented a robust backup system, providing peace of mind for clients.',
				'My expertise extends to developing custom shortcodes, empowering users to effortlessly create complex content, saving time and effort.',
				'Implementing an efficient caching system is one of my strengths, reducing server load and boosting website performance for smoother navigation.',
				'Leveraging JavaScript and jQuery, I craft cross-browser compatible web pages that are not only visually appealing but also interactive and engaging.',
				'My responsive web design skills shine through the use of Bootstrap, creating websites that adapt seamlessly to various devices, optimizing user experiences across the board.',
				'I have experience developing web pages that communicate with external APIs using AJAX requests, enhancing website functionality and real-time data retrieval.'
			],
			goals: []
		}
	},
	{
		companyName: `Logoletta GmbH`,
		startDate: '2023',
		endDate: '2023',
		country: 'UK',
		position: `Frontend developer / designer`,
		description: {
			summary: [
				'I am a skilled Front-end Developer and Designer dedicated to crafting exceptional web experiences. My work revolves around developing custom WordPress themes enriched with features like custom post types and taxonomies. I specialize in optimizing web performance through image and asset optimization while reducing page load times. My commitment to creating seamless user experiences extends to developing custom shortcodes for effortless content generation. Furthermore, I have expertise in implementing robust backup systems to safeguard data integrity and enable quick recoveries in the face of outages.',
				'In addition, I take pride in educating client personnel, particularly content managers, in effectively using the products I develop. This includes training them on data addition and updates, CMS interface navigation, and other aspects to ensure the seamless management of their digital content.',
				'In my role as a Front-end Developer and Designer, I blend creativity and technical proficiency to deliver web solutions that not only meet but exceed client expectations. My commitment to optimizing performance, enhancing user experiences, and providing valuable training makes me an asset to any team and organization.',
			],
			responsibilities: [
				'I have successfully developed custom WordPress themes for clients, incorporating advanced features such as custom post types and taxonomies to meet their specific needs.',
				'Image and web asset optimization are my forte, significantly improving page loading times and ensuring a swift and responsive user experience.',
				'I am dedicated to optimizing web page performance by meticulously reducing page load times, making websites more efficient and user-friendly.',
				'My expertise extends to developing custom shortcodes that empower users to effortlessly create complex content, streamlining content management.',
				'I have implemented robust backup systems, guaranteeing data integrity and enabling rapid recovery in the event of unexpected outages, ensuring business continuity.',
				'In addition to my technical responsibilities, I actively engage in educating client personnel, specifically content managers, in the effective utilization of the developed products. This includes training on data addition, updates, and navigating the CMS interface, ensuring that clients can confidently manage their digital content.'
			],
			goals: []
		}

	},
	{
		companyName: `Displayed Web`,
		startDate: '2022',
		endDate: '2022',
		country: 'Sweden',
		position: `Frontend developer / designer`,
		description: {
			summary: [
				'I am a skilled Front-end Developer and Designer dedicated to crafting exceptional web experiences. My work revolves around developing custom WordPress themes enriched with features like custom post types and taxonomies. I specialize in optimizing web performance through image and asset optimization while reducing page load times. My commitment to creating seamless user experiences extends to developing custom shortcodes for effortless content generation. Furthermore, I have expertise in implementing robust backup systems to safeguard data integrity and enable quick recoveries in the face of outages.',
			],
			responsibilities: [
				'Developed a full stack web application from scratch, including back-end services, front-end interface, and database',
				'Developed and maintained custom APIs to integrate WordPress with third-party systems, automating data exchange and saving hundreds of hours of manual effort',
				'Developed custom shortcodes to enable users to generate complex content with minimal effort',
				'Developed and implemented a backup system that ensures data integrity and allows for quick recoveries in the event of an outage',
				'Developed and implemented a caching system that reduces server load and improves website performance',
			],
			goals: []
		}

	},
	{
		companyName: `NEVON CARE INC`,
		startDate: '2021',
		endDate: '2021',
		country: 'Canada',
		position: `Frontend developer / designer`,
		description: {
			summary: [
				'I am a skilled Front-end Developer and Designer dedicated to crafting exceptional web experiences. My work revolves around developing custom WordPress themes enriched with features like custom post types and taxonomies. I specialize in optimizing web performance through image and asset optimization while reducing page load times. My commitment to creating seamless user experiences extends to developing custom shortcodes for effortless content generation. Furthermore, I have expertise in implementing robust backup systems to safeguard data integrity and enable quick recoveries in the face of outages.',
			],
			responsibilities: [
				'Developed a full stack web application from scratch, including back-end services, front-end interface, and database',
				'Developed and maintained custom APIs to integrate WordPress with third-party systems, automating data exchange and saving hundreds of hours of manual effort',
				'Developed custom shortcodes to enable users to generate complex content with minimal effort',
				'Developed and implemented a backup system that ensures data integrity and allows for quick recoveries in the event of an outage',
				'Developed and implemented a caching system that reduces server load and improves website performance',
			],
			goals: []
		}
	},
	{
		companyName: `Eurostandart - furniture factory`,
		startDate: '2016',
		endDate: '2017',
		country: 'Ukraine',
		position: `Graphic & technical Designer`,
		description: {
			summary: [
				'I am a versatile Graphic Designer with a rich background in the furniture manufacturing industry. My role transcends conventional design, encompassing the development and implementation of e-commerce solutions, the creation of distinctive brand identities, and the design of captivating outdoor and print advertising materials.',
				'My expertise extends to crafting design templates for sandblasting, harnessing precision through plotter cutting. I take pride in conceptualizing and designing catalogs showcasing the furniture factory\'s extensive product line.',
				'My creative journey also ventures into the world of large-scale canvas printing, where I prepare and print wide-format canvases for artistic glass surfaces and facades. Additionally, I collaborate closely with furniture designers, contributing my design insights to the development of new models of upholstered and case furniture.',
				'In this multifaceted role, I continually explore innovative avenues within the realm of graphic design, bringing fresh perspectives and creative solutions to the furniture manufacturing landscape.',
				'As a Graphic Designer in the furniture manufacturing domain, I combine creativity with technical proficiency to enhance brand presence and product presentation, contributing to the industry\'s dynamic and evolving landscape.'
			],
			responsibilities: [
				'Spearheaded the development and implementation of e-commerce, collaborating with developers to create an online store that seamlessly showcases our furniture products',
				'Cultivated a distinctive brand identity through creative design, establishing a unique visual language that resonates with our target audience',
				'Designed eye-catching outdoor advertising materials and a range of print collateral, including leaflets, business cards, flyers, stickers, pocket calendars, and more',
				'Mastered the creation of sandblasting templates, employing plotter cutting for precise pattern preparation',
				'Showcased the furniture factory\'s product range through the design of visually appealing and informative catalogs',
				'Undertook pre-print preparation and managed the printing of wide-format canvases, elevating the artistic decoration of glass surfaces and facades with large-scale photographic artwork',
				'Collaborated closely with furniture designers, lending my design expertise to the development of new models of both upholstered and case furniture',
				'Continuously explored new avenues in graphic design to bring fresh and innovative approaches to the furniture manufacturing industry'
			],
			goals: []
		}
	},
	{
		companyName: `DonShina - Online store `,
		startDate: '2008',
		endDate: '2011',
		country: 'Ukraine',
		position: `Owner`,
		description: {
			summary: [
				'I am a visionary entrepreneur and the driving force behind a successful online retail venture specializing in automotive tires and accessories. My journey began with the transformation of a free solution into a robust e-commerce platform tailored for the automotive industry. With an unwavering commitment to innovation and excellence, I cultivated a product catalog featuring over 3000 unique items.',
				'At the helm of a dedicated team of four, I led the charge in developing an integrated logistics system for data collection and processing. My multifaceted role as both owner and director encompassed marketing initiatives, order management, supplier identification, and strategic partnerships with wholesale buyers.',
				'I thrived in a dynamic environment by continuously analyzing market dynamics, evaluating competitors, and optimizing operational processes. My responsibilities extended to meticulous record-keeping and report preparation for regulatory authorities.',
				'My role as the owner and director of the online retail venture was marked by a relentless pursuit of excellence and a commitment to providing customers with top-quality products and services. I thrived in a dynamic and competitive landscape, driving the business to success through innovation, strategic partnerships, and a customer-centric approach.'
			],
			responsibilities: [
				'Spearheaded marketing efforts independently, utilizing social media advertising, outdoor campaigns, and print media promotions to enhance brand visibility and drive customer engagement',
				'Managed the entire order cycle, from order placement to fulfillment, ensuring a seamless and efficient customer experience',
				'Identified and fostered relationships with reliable suppliers, negotiating supply agreements and collaborative partnerships to secure quality products',
				'Successfully expanded the business by identifying and establishing strategic collaborations with major wholesale buyers, contributing to revenue growth',
				'Conducted comprehensive market research, analyzing competitors and sales data to make informed decisions and stay ahead of industry trends',
				'Continuously optimized operational processes to enhance efficiency and productivity, facilitating timely order processing and delivery',
				'Ensured strict compliance with regulatory requirements, overseeing the preparation of necessary reports and documentation for regulatory authorities',
				'Fostered a culture of innovation, leading the adaptation and enhancement of the e-commerce platform to meet evolving market demands',
			],
			goals: []
		}
	},
	{
		companyName: `Podkova`,
		startDate: '2018',
		endDate: '2019',
		country: 'Ukraine',
		position: `Chief Designer`,
		description: {
			summary: [
				'I am a seasoned Chief Designer specializing in the realm of souvenir craftsmanship. My journey unfolds within a company dedicated to the development and production of exquisite souvenir items. Our portfolio ranges from custom-printed mugs, pens, and apparel to meticulously crafted wooden and plywood souvenirs, including commemorative magnets, unique photo frames, Christmas ornaments, decorative boxes, children\'s toys, handcrafted lamps, wooden portraits, and much more. My expertise also encompasses the precision of laser cutting and engraving on wood and various materials.',
				'At the heart of this creative endeavor, I embarked on a multifaceted role. I relentlessly pursued innovative ideas to expand our product catalog. My responsibilities spanned the conceptualization and design of layouts and blueprints for printing, cutting, and engraving, leveraging CNC equipment. Additionally, I played a pivotal role in quality control, ensuring that our crafted pieces met the highest standards of excellence.',
				'In my capacity as the Chief Designer of the souvenir workshop, I infused every design with passion and creativity, elevating the art of souvenir craftsmanship. My commitment to innovation, quality, and precision allowed us to offer an extensive range of unique and memorable keepsakes to our customers, creating lasting impressions and cherished memories.',
			],
			responsibilities: [
				'Led the charge in exploring novel concepts to diversify and expand the range of souvenir products offered, fostering creativity and innovation within the organization',
				'Developed intricate layouts and precise blueprints, meticulously preparing designs for printing, cutting, and engraving, harnessing the capabilities of CNC equipment',
				'Assumed a critical role in quality assurance, conducting thorough checks and adaptations to guarantee the impeccable craftsmanship of each product',
				'Demonstrated versatility by adapting and optimizing designs to suit various mediums, ensuring consistent quality across all product categories',
				'Leveraged laser cutting and engraving techniques with exceptional precision, elevating the level of intricacy and detail in our wooden and material-based souvenirs',
				'Collaborated closely with skilled artisans to transform designs into tangible, handcrafted masterpieces, fostering a harmonious blend of artistry and functionality',
			],
			goals: []
		}
	},

  // ... остальные записи об опыте работы ...
]; 
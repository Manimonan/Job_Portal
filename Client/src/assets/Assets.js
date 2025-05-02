import microsoft_logo from './microsoft.png';
import samsung_logo from './samsung.png';
import accenture_logo from './accenture.png';
import walmart_logo from './walmart.png';
import google_logo from './google.png';
import amazon_logo from './amazon_logo.png';
import tataMotors_logo from './tataMotors.png';
import comon_logo  from './logo.png'
import pointing_art from './pointing_art.png';
import men_pointing from './men_pointing.png'


export const assets = {
    microsoft_logo,
    samsung_logo,
    accenture_logo,
    walmart_logo,
    google_logo,
    amazon_logo,
    tataMotors_logo,
    comon_logo,
    pointing_art,
    men_pointing


}
export const jobCategories = [
    {
        id: 1,
        name: "Software Development",
        image: microsoft_logo
    },
    {
        id: 2,
        name: "Data Science",
        image: samsung_logo
    },
    {
        id: 3,
        name: "Product Management",
        image: accenture_logo
    },
    {
        id: 4,
        name: "Marketing",
        image: walmart_logo
    },
    {
        id: 5,
        name: "Sales",
        image: google_logo
    },
    {
        id: 6,
        name: "Design",
        image: amazon_logo
    },
    {
        id: 7,
        name: "Finance",
        image: tataMotors_logo
    },
    {
        id: 8,
        name: "Human Resources",
        image: microsoft_logo
    },
    {
        id: 9,
        name: "Customer Support",
        image: samsung_logo
    },
    {
        id: 10,
        name: "Operations",
        image: accenture_logo
    },
    {
        id: 11,
        name: "Legal",
        image: walmart_logo
    },
    {
        id: 12,
        name: "Administration",
        image: google_logo
    },
    {
        id: 13,
        name: "Healthcare",
        image: amazon_logo
    },
    {
        id: 14,
        name: "Education",
        image: tataMotors_logo
    },
    {
        id: 15,
        name: "Hospitality",
        image: microsoft_logo
    },
]

export const jobLocations = [
    {
        id: 1,
        name: "Kolkata",
        
    },
    {
        id: 2,
        name: "Delhi",
        
    },
    {
        id: 3,
        name: "Mumbai",
       
    },
    {
        id: 4,
        name: " Bangalore",
        
    },
    {
        id: 5,
        name: "Chennai",
        
    },
    {
        id: 6,
        name: "Hyderabad",
       
    },
]

export const jobListings = [
    {
        _id: 1,
        title: "Software Engineer",
        location: "Kolkata",
        datePosted: "2023-10-01",
        level: "Entry Level",
        category: "Software Development",
        company: {
            name: "Microsoft",
            logo: microsoft_logo
        },
        description:`
        <p>
        We are looking for a Software Engineer to join our team. The ideal candidate will have a strong background in software development and a passion for technology.</p>
        <p>
        <h2><strong>Responsibilities:</strong></h2> 
        <ul>
            <li>Design, develop, and maintain software applications.</li>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Ensure the performance, quality, and responsiveness of applications.</li>   
        </ul>
        
        
        <h2><strong>Requirements:</strong></h2>
        
        <ul>
            <li>Bachelor's degree in Computer Science or related field.</li>
            <li>Proven experience as a Software Engineer or similar role.</li>
            <li>Strong knowledge of programming languages such as Java, C++, or Python.</li>
            <li>Experience with web development frameworks such as React, Angular, or Vue.js.</li>
            <li>Familiarity with databases such as MySQL, PostgreSQL, or MongoDB.</li>
        </ul>
        
        ` ,
        salary: "₹ 8,00,000 - ₹ 12,00,000",
        type: "Full-time",
        

        
    },
    {
        _id: 2,
        title: "Data Scientist",
        location: "Delhi",
        datePosted: "2023-10-02",
        level: "Mid Level",
        category: "Data Science",
        company: {
            name: "Samsung",
            logo: samsung_logo
        },
        description:`
        <p>
        We are looking for a Data Scientist to join our team. The ideal candidate will have a strong background in data analysis and machine learning.</p>
        <p>
        <h2><strong>Responsibilities:</strong></h2> 
        <ul>
            <li>Analyze large datasets to identify trends and patterns.</li>
            <li>Develop machine learning models to solve business problems.</li>
            <li>Collaborate with cross-functional teams to implement data-driven solutions.</li>   
        </ul>
        
        
        <h2><strong>Requirements:</strong></h2>
        
        <ul>
            <li>Bachelor's degree in Computer Science, Statistics, or related field.</li>
            <li>Proven experience as a Data Scientist or similar role.</li>
            <li>Strong knowledge of programming languages such as Python or R.</li>
            <li>Experience with data visualization tools such as Tableau or Power BI.</li>
            <li>Familiarity with machine learning frameworks such as TensorFlow or PyTorch.</li>
        </ul>
        
        ` ,
        salary: "₹ 10,00,000 - ₹ 15,00,000",
        type: "Full-time",
    },
    {
        _id: 3,
        title: "Product Manager",
        location: "Mumbai",
        datePosted: "2023-10-03",
        level: "Senior Level",
        category: "Product Management",
        company: {
            name: "Accenture",
            logo: accenture_logo
        },
        description:`
        <p>
        We are looking for a Product Manager to join our team. The ideal candidate will have a strong background in product management and a passion for technology.</p>
        <p>
        <h2><strong>Responsibilities:</strong></h2> 
        <ul>
            <li>Define the product vision and strategy.</li>
            <li>Collaborate with cross-functional teams to develop and launch new products.</li>
            <li>Analyze market trends and customer feedback to inform product decisions.</li>   
        </ul>
        
        
        <h2><strong>Requirements:</strong></h2>
        
        <ul>
            <li>Bachelor's degree in Business, Marketing, or related field.</li>
            <li>Proven experience as a Product Manager or similar role.</li>
            <li>Strong knowledge of product management methodologies such as Agile or Scrum.</li>
            <li>Experience with product analytics tools such as Google Analytics or Mixpanel.</li>
            <li>Excellent communication and leadership skills.</li>
        </ul>
        
        ` ,
        salary: "₹ 12,00,000 - ₹ 18,00,000",
        type: "Full-time",
    },
    {
        _id: 4,
        title: "Marketing Manager",
        location: "Bangalore",
        datePosted: "2023-10-04",
        level: "Mid Level",
        category: "Marketing",
        company: {
            name: "Walmart",
            logo: walmart_logo
        },
        description:`
        <p>
        We are looking for a Marketing Manager to join our team. The ideal candidate will have a strong background in marketing and a passion for technology.</p>
        <p>
        <h2><strong>Responsibilities:</strong></h2> 
        <ul>
            <li>Develop and implement marketing strategies to promote products and services.</li>
            <li>Collaborate with cross-functional teams to create marketing campaigns.</li>
            <li>Analyze market trends and customer feedback to inform marketing decisions.</li>   
        </ul>
        
        
        <h2><strong>Requirements:</strong></h2>
        
        <ul>
            <li>Bachelor's degree in Marketing, Business, or related field.</li>
            <li>Proven experience as a Marketing Manager or similar role.</li>
            <li>Strong knowledge of digital marketing tools and techniques.</li>
            <li>Experience with marketing analytics tools such as Google Analytics or HubSpot.</li>
            <li>Excellent communication and leadership skills.</li>
        </ul>
        
        ` ,
        salary: "₹ 8,00,000 - ₹ 12,00,000",
        type: "Full-time",
    },
    {
        _id: 5,
        title: "Sales Executive",
        location: "Chennai",
        datePosted: "2023-10-05",
        level: "Entry Level",
        category: "Sales",
        company: {
            name: "Google",
            logo: google_logo
        },
        description:`
        <p>
        We are looking for a Sales Executive to join our team. The ideal candidate will have a strong background in sales and a passion for technology.</p>
        <p>
        <h2><strong>Responsibilities:</strong></h2> 
        <ul>
            <li>Identify and develop new business opportunities.</li>
            <li>Collaborate with cross-functional teams to close sales deals.</li>
            <li>Analyze market trends and customer feedback to inform sales decisions.</li>   
        </ul>
        
        
        <h2><strong>Requirements:</strong></h2>
        
        <ul>
            <li>Bachelor's degree in Business, Marketing, or related field.</li>
            <li>Proven experience as a Sales Executive or similar role.</li>
            <li>Strong knowledge of sales techniques and methodologies.</li>
            <li>Experience with CRM tools such as Salesforce or HubSpot.</li>
            <li>Excellent communication and negotiation skills.</li>
        </ul>
        
        ` ,
        salary: "₹ 5,00,000 - ₹ 8,00,000",
        type: "Full-time",
    },
    {
        _id: 6,
        title: "Graphic Designer",
        location: "Hyderabad",
        datePosted: "2023-10-06",
        level: "Mid Level",
        category: "Design",
        company: {
            name: "Amazon",
            logo: amazon_logo
        },
        description:`
        <p>
        We are looking for a Graphic Designer to join our team. The ideal candidate will have a strong background in graphic design and a passion for creativity.</p>
        <p>
        <h2><strong>Responsibilities:</strong></h2> 
        <ul>
            <li>Create visually appealing designs for various marketing materials.</li>
            <li>Collaborate with cross-functional teams to develop design concepts.</li>
            <li>Analyze market trends and customer feedback to inform design decisions.</li>   
        </ul>
        
        
        <h2><strong>Requirements:</strong></h2>
        
        <ul>
            <li>Bachelor's degree in Graphic Design, Fine Arts, or related field.</li>
            <li>Proven experience as a Graphic Designer or similar role.</li>
            <li>Strong knowledge of design software such as Adobe Creative Suite.</li>
            <li>Experience with web design and user experience principles.</li>
            <li>Excellent communication and collaboration skills.</li>
        </ul>
        
        ` ,
        salary: "₹ 6,00,000 - ₹ 10,00,000",
        type: "Full-time",
    },
    {
        _id: 7,
        title: "Financial Analyst",
        location: "Kolkata",
        datePosted: "2023-10-07",
        level: "Senior Level",
        category: "Finance",
        company: {
            name: "Tata Motors",
            logo: tataMotors_logo
        },
        description:`
        <p>
        We are looking for a Financial Analyst to join our team. The ideal candidate will have a strong background in finance and a passion for numbers.</p>
        <p>
        <h2><strong>Responsibilities:</strong></h2> 
        <ul>
            <li>Analyze financial data to identify trends and patterns.</li>
            <li>Collaborate with cross-functional teams to develop financial models.</li>
            <li>Prepare financial reports and presentations for management.</li>   
        </ul>
        
        
        <h2><strong>Requirements:</strong></h2>
        
        <ul>
            <li>Bachelor's degree in Finance, Accounting, or related field.</li>
            <li>Proven experience as a Financial Analyst or similar role.</li>
            <li>Strong knowledge of financial modeling and analysis techniques.</li>
            <li>Experience with financial software such as Excel or QuickBooks.</li>
            <li>Excellent communication and analytical skills.</li>
        </ul>
        
        ` ,
        salary: "₹ 8,00,000 - ₹ 12,00,000",
        type: "Full-time",
    },
    {
        _id: 8,
        title: "HR Manager",
        location: "Delhi",
        datePosted: "2023-10-08",
        level: "Mid Level",
        category: "Human Resources",
        company: {
            name: "Samsung",
            logo: samsung_logo
        },
        description:`
        <p>
        We are looking for a HR Manager to join our team. The ideal candidate will have a strong background in human resources and a passion for people.</p>
        <p>
        <h2><strong>Responsibilities:</strong></h2> 
        <ul>
            <li>Develop and implement HR strategies to support business goals.</li>
            <li>Collaborate with cross-functional teams to manage employee relations.</li>
            <li>Analyze market trends and employee feedback to inform HR decisions.</li>   
        </ul>
        
        
        <h2><strong>Requirements:</strong></h2>
        
        <ul>
            <li>Bachelor's degree in Human Resources, Business, or related field.</li>
            <li>Proven experience as a HR Manager or similar role.</li>
            <li>Strong knowledge of HR practices and employment laws.</li>
            <li>Experience with HR software such as Workday or BambooHR.</li>
            <li>Excellent communication and leadership skills.</li>
        </ul>
        
        ` ,
        salary: "₹ 7,00,000 - ₹ 11,00,000",
        type: "Full-time",
    },
    {
        _id: 9,
        title: "Customer Support Executive",
        location: "Mumbai",
        datePosted: "2023-10-09",
        level: "Entry Level",
        category: "Customer Support",
        company: {
            name: "Accenture",
            logo: accenture_logo
        },
        description:`
        <p>
        We are looking for a Customer Support Executive to join our team. The ideal candidate will have a strong background in customer service and a passion for helping others.</p>
        <p>
        <h2><strong>Responsibilities:</strong></h2> 
        <ul>
            <li>Provide excellent customer service to clients and customers.</li>
            <li>Collaborate with cross-functional teams to resolve customer issues.</li>
            <li>Analyze customer feedback to inform support decisions.</li>   
        </ul>
        
        
        <h2><strong>Requirements:</strong></h2>
        
        <ul>
            <li>Bachelor's degree in Business, Communications, or related field.</li>
            <li>Proven experience as a Customer Support Executive or similar role.</li>
            <li>Strong knowledge of customer service principles and practices.</li>
            <li>Experience with customer support software such as Zendesk or Freshdesk.</li>
            <li>Excellent communication and problem-solving skills.</li>
        </ul>
        
        ` ,
        salary: "₹ 3,00,000 - ₹ 5,00,000",
        type: "Full-time",
    },
    {
        _id: 10,
        title: "Operations Manager",
        location: "Bangalore",
        datePosted: "2023-10-10",
        level: "Senior Level",
        category: "Operations",
        company: {
            name: "Walmart",
            logo: walmart_logo
        },
        description:`
        <p>
        We are looking for a Operations Manager to join our team. The ideal candidate will have a strong background in operations management and a passion for efficiency.</p>
        <p>
        <h2><strong>Responsibilities:</strong></h2> 
        <ul>
            <li>Develop and implement operations strategies to support business goals.</li>
            <li>Collaborate with cross-functional teams to manage operational processes.</li>
            <li>Analyze market trends and operational feedback to inform decisions.</li>   
        </ul>
        
        
        <h2><strong>Requirements:</strong></h2>
        
        <ul>
            <li>Bachelor's degree in Business, Operations Management, or related field.</li>
            <li>Proven experience as a Operations Manager or similar role.</li>
            <li>Strong knowledge of operations management principles and practices.</li>
            <li>Experience with operations software such as SAP or Oracle.</li>
            <li>Excellent communication and leadership skills.</li>
        </ul>
        
        ` ,
        salary: "₹ 10,00,000 - ₹ 15,00,000",
        type: "Full-time",
    },
    {
        _id: 11,
        title: "Legal Advisor",
        location: "Chennai",
        datePosted: "2023-10-11",
        level: "Mid Level",
        category: "Legal",
        company: {
            name: "Google",
            logo: google_logo
        },
        description:`
        <p>
        We are looking for a Legal Advisor to join our team. The ideal candidate will have a strong background in law and a passion for legal matters.</p>
        <p>
        <h2><strong>Responsibilities:</strong></h2> 
        <ul>
            <li>Provide legal advice and support to the organization.</li>
            <li>Collaborate with cross-functional teams to manage legal risks.</li>
            <li>Analyze market trends and legal feedback to inform decisions.</li>   
        </ul>
        
        
        <h2><strong>Requirements:</strong></h2>
        
        <ul>
            <li>Bachelor's degree in Law or related field.</li>
            <li>Proven experience as a Legal Advisor or similar role.</li>
            <li>Strong knowledge of legal principles and practices.</li>
            <li>Experience with legal software such as LexisNexis or Westlaw.</li>
            <li>Excellent communication and analytical skills.</li>
        </ul>
        
        ` ,
        salary: "₹ 9,00,000 - ₹ 14,00,000",
        type: "Full-time",
    },
    {
        _id: 12,
        title: "Administrative Assistant",
        location: "Hyderabad",
        datePosted: "2023-10-12",
        level: "Entry Level",
        category: "Administration",
        company: {
            name: "Amazon",
            logo: amazon_logo
        },
        description:`
        <p>
        We are looking for a Administrative Assistant to join our team. The ideal candidate will have a strong background in administration and a passion for organization.</p>
        <p>
        <h2><strong>Responsibilities:</strong></h2> 
        <ul>
            <li>Provide administrative support to the organization.</li>
            <li>Collaborate with cross-functional teams to manage administrative tasks.</li>
            <li>Analyze market trends and administrative feedback to inform decisions.</li>   
        </ul>
        
        
        <h2><strong>Requirements:</strong></h2>
        
        <ul>
            <li>Bachelor's degree in Business, Administration, or related field.</li>
            <li>Proven experience as a Administrative Assistant or similar role.</li>
            <li>Strong knowledge of administrative principles and practices.</li>
            <li>Experience with administrative software such as Microsoft Office or Google Workspace.</li>
            <li>Excellent communication and organizational skills.</li>
        </ul>
        
        ` ,
        salary: "₹ 3,00,000 - ₹ 5,00,000",
        type: "Full-time",
    },
    {
        _id: 13,
        title: "Healthcare Administrator",
        location: "Kolkata",
        datePosted: "2023-10-13",
        level: "Mid Level",
        category: "Healthcare",
        company: {
            name: "Tata Motors",
            logo: tataMotors_logo
        },
        description:`
        <p>
        We are looking for a Healthcare Administrator to join our team. The ideal candidate will have a strong background in healthcare administration and a passion for patient care.</p>
        <p>
        <h2><strong>Responsibilities:</strong></h2> 
        <ul>
            <li>Manage healthcare operations and ensure compliance with regulations.</li>
            <li>Collaborate with cross-functional teams to improve patient care.</li>
            <li>Analyze market trends and healthcare feedback to inform decisions.</li>   
        </ul>
        
        
        <h2><strong>Requirements:</strong></h2>
        
        <ul>
            <li>Bachelor's degree in Healthcare Administration or related field.</li>
            <li>Proven experience as a Healthcare Administrator or similar role.</li>
            <li>Strong knowledge of healthcare regulations and practices.</li>
            <li>Experience with healthcare software such as Epic or Cerner.</li>
            <li>Excellent communication and leadership skills.</li>
        </ul>
        
        ` ,
        salary: "₹ 7,00,000 - ₹ 11,00,000",
        type: "Full-time",
    },
    {
        _id: 14,
        title: "Education Consultant",
        location: "Delhi",
        datePosted: "2023-10-14",
        level: "Senior Level",
        category: "Education",
        company: {
            name: "Samsung",
            logo: samsung_logo
        },
        description:`
        <p>
        We are looking for a Education Consultant to join our team. The ideal candidate will have a strong background in education and a passion for teaching.</p>
        <p>
        <h2><strong>Responsibilities:</strong></h2> 
        <ul>
            <li>Provide educational consulting services to schools and organizations.</li>
            <li>Collaborate with cross-functional teams to develop educational programs.</li>
            <li>Analyze market trends and educational feedback to inform decisions.</li>
        </ul>
        <h2><strong>Requirements:</strong></h2>
        <ul>
            <li>Bachelor's degree in Education or related field.</li>
            <li>Proven experience as a Education Consultant or similar role.</li>
            <li>Strong knowledge of educational principles and practices.</li>
            <li>Experience with educational software such as Blackboard or Moodle.</li>
            <li>Excellent communication and analytical skills.</li>
        </ul>
        ` ,
        salary: "₹ 8,00,000 - ₹ 12,00,000",
        type: "Full-time",
    },
    {
        _id: 15,
        title: "Hospitality Manager",
        location: "Bangalore",
        datePosted: "2023-10-15",
        level: "Mid Level",
        category: "Hospitality",
        company: {
            name: "Accenture",
            logo: accenture_logo
        },
        description:`
        <p>
        We are looking for a Hospitality Manager to join our team. The ideal candidate will have a strong background in hospitality management and a passion for customer service.</p>
        <p>
        <h2><strong>Responsibilities:</strong></h2> 
        <ul>
            <li>Manage hospitality operations and ensure customer satisfaction.</li>
            <li>Collaborate with cross-functional teams to improve hospitality services.</li>
            <li>Analyze market trends and hospitality feedback to inform decisions.</li>   
        </ul>
        
        
        <h2><strong>Requirements:</strong></h2>
        
        <ul>
            <li>Bachelor's degree in Hospitality Management or related field.</li>
            <li>Proven experience as a Hospitality Manager or similar role.</li>
            <li>Strong knowledge of hospitality principles and practices.</li>
            <li>Experience with hospitality software such as Opera or Micros.</li>
            <li>Excellent communication and leadership skills.</li>
        </ul>
        
        ` ,
        salary: "₹ 6,00,000 - ₹ 10,00,000",
        type: "Full-time",
    },
] 
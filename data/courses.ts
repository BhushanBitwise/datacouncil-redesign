


// export type Course = {
//   title: string;
//   slug: string;
//   duration: string;
//   category: string;
//   description: string;
// };

// // Durations for newly requested courses are proposed curriculum durations.
// // Confirm the final schedule with Data Council before publishing as an official promise.
// export const courses: Course[] = [
//   { title: "Java", slug: "java", duration: "3 Months", category: "Programming Languages", description: "Build a strong foundation in Java, object-oriented programming, collections, exceptions and application development." },
//   { title: "FullStack with Java", slug: "fullstack-java", duration: "6 Months", category: "Full Stack Development", description: "Learn frontend development, Java backend APIs, databases, testing and full-stack application delivery." },
//   { title: "PHP", slug: "php", duration: "3 Months", category: "Programming Languages", description: "Learn PHP fundamentals, server-side programming, database integration and secure dynamic web applications." },
//   { title: "Angular", slug: "angularjs", duration: "3 Months", category: "Web Technologies", description: "Build component-based web applications with TypeScript, Angular, forms, routing and API integration." },
//   { title: "React JS Basic", slug: "react-js-basic", duration: "3 Months", category: "Web Technologies", description: "Learn JavaScript and React fundamentals, components, props, state, hooks and interactive interfaces." },
//   { title: "React JS Advance", slug: "react-js-advance", duration: "3 Months", category: "Web Technologies", description: "Explore advanced React patterns, performance, reusable architecture, testing and production workflows." },
//   { title: "Node JS", slug: "node-js", duration: "3 Months", category: "Web Technologies", description: "Build server-side JavaScript applications and REST APIs with Node.js, Express and databases." },
//   { title: "Next JS", slug: "next-js", duration: "3 Months", category: "Web Technologies", description: "Develop production-ready React applications with Next.js routing, rendering, data fetching and deployment." },
//   { title: "Django", slug: "django", duration: "3 Months", category: "Web Technologies", description: "Create Python web applications with Django, ORM, authentication, forms, APIs and deployment." },
//   { title: "Laravel", slug: "laravel", duration: "3 Months", category: "Web Technologies", description: "Build modern PHP applications with Laravel routing, Eloquent ORM, authentication, validation and APIs." },
//   { title: "Python", slug: "python", duration: "3 Months", category: "Programming Languages", description: "Learn Python syntax, data structures, functions, object-oriented programming, files and practical automation." },
//   { title: "Data Science", slug: "data-science", duration: "6 Months", category: "Data & Analytics", description: "Build data science skills through Python, statistics, data wrangling, exploratory analysis, machine learning and an end-to-end capstone." },
//   { title: "Data Analytics", slug: "data-analytics", duration: "3 Months", category: "Data & Analytics", description: "Learn spreadsheets, SQL, data cleaning, dashboarding, business metrics and data-driven storytelling." },
//   { title: "Salesforce", slug: "salesforce", duration: "3 Months", category: "Cloud & Enterprise", description: "Learn CRM fundamentals, Salesforce objects, automation, reports, dashboards and declarative app building." },
//   { title: "SAP MM", slug: "sap-mm", duration: "3 Months", category: "Cloud & Enterprise", description: "Understand procurement and inventory workflows in SAP Materials Management, including master data and business transactions." },
//   { title: "SAP FICO", slug: "sap-fico", duration: "3 Months", category: "Cloud & Enterprise", description: "Learn SAP Finance and Controlling fundamentals, including general ledger, payables, receivables, asset accounting and cost control." },
//   { title: "AWS", slug: "aws", duration: "3–4 Months", category: "Cloud & Enterprise", description: "Learn cloud fundamentals and practical AWS architecture, identity, networking, compute, storage, databases, monitoring and cost control." },
//   { title: "Microsoft Azure", slug: "azure", duration: "3–4 Months", category: "Cloud & Enterprise", description: "Learn Azure cloud concepts, identity and governance, compute, storage, networking, monitoring, backup and deployment fundamentals." },
//   { title: "DevOps", slug: "devops", duration: "3–4 Months", category: "Cloud & Enterprise", description: "Practice Git, Linux, CI/CD, containers, infrastructure as code, cloud deployment, monitoring and secure delivery workflows." },
//   { title: "Machine Learning", slug: "machine-learning", duration: "3 Months", category: "Data & Analytics", description: "Learn supervised and unsupervised learning, model evaluation, feature engineering and practical ML workflows with Python." },
//   { title: "Magento", slug: "magento", duration: "3 Months", category: "Web Technologies", description: "Explore e-commerce store configuration, catalog management, themes, extensions, checkout and store operations." },
//   { title: "UI/UX Designing", slug: "ui-ux-designing", duration: "3 Months", category: "Design", description: "Learn user research, information architecture, wireframing, visual design, prototyping and usability testing." },
//   { title: "WordPress", slug: "wordpress", duration: "3 Months", category: "Web Technologies", description: "Build and manage WordPress websites using themes, plugins, content workflows, performance and security basics." },
//   { title: "MERN", slug: "mern", duration: "6 Months", category: "Full Stack Development", description: "Build full-stack applications using MongoDB, Express, React and Node.js, including authentication, APIs and deployment." },
//   { title: "MEAN", slug: "mean", duration: "6 Months", category: "Full Stack Development", description: "Build full-stack applications using MongoDB, Express, Angular and Node.js, including APIs, authentication and deployment." },
//   { title: "Selenium + Python", slug: "selenium-python", duration: "3 Months", category: "Software Testing", description: "Learn software testing fundamentals and browser automation with Python, Selenium, test design and reporting." },
//   { title: "Selenium + Java", slug: "selenium-java", duration: "3 Months", category: "Software Testing", description: "Learn test automation with Java and Selenium, test frameworks, waits, Page Object Model and reporting." },
//   { title: "SEO", slug: "seo", duration: "3 Months", category: "Digital Marketing", description: "Learn keyword research, technical SEO, on-page optimization, content strategy, link earning and analytics." },
//   { title: "Google Ads", slug: "google-adwords", duration: "3 Months", category: "Digital Marketing", description: "Learn paid search campaign structure, keyword targeting, bidding, conversion tracking, optimization and reporting." },
//   { title: "Digital Marketing", slug: "digital-marketing", duration: "3 Months", category: "Digital Marketing", description: "Learn digital marketing strategy, SEO, paid media, social media, content, email marketing, analytics and campaign planning." },
//   { title: "Digital Marketing with AI", slug: "digital-marketing-with-ai", duration: "3 Months", category: "Digital Marketing", description: "Combine digital marketing foundations with responsible AI-assisted research, content workflows, campaign optimization and measurement." },
//   { title: "Social Media Marketing", slug: "social-media-marketing", duration: "3 Months", category: "Digital Marketing", description: "Plan social content, manage channel calendars, understand audiences, run campaigns and measure engagement and conversions." },
// ];









export type Course = {
  title: string;
  slug: string;
  duration: string;
  category: string;
  description: string;
};

// Durations for newly requested courses are proposed curriculum durations.
// Confirm the final schedule with Data Council before publishing as an official promise.

export const courses: Course[] = [
  {
    title: "Java",
    slug: "java",
    duration: "3 Months",
    category: "Programming Languages",
    description:
      "Java Training in Pune will help you build a strong foundation in Java programming, object-oriented concepts, collections, exception handling and application development through hands-on practice.",
  },
  {
    title: "FullStack with Java",
    slug: "fullstack-java",
    duration: "6 Months",
    category: "Full Stack Development",
    description:
      "Full Stack with Java Training in Pune will help you build complete web applications by learning frontend development, Java backend APIs, databases, testing and full-stack project development.",
  },
  {
    title: "PHP",
    slug: "php",
    duration: "3 Months",
    category: "Programming Languages",
    description:
      "PHP Training in Pune will help you learn server-side programming, database integration and the skills needed to build dynamic, secure and database-driven web applications.",
  },
  {
    title: "Angular",
    slug: "angularjs",
    duration: "3 Months",
    category: "Web Technologies",
    description:
      "Angular Training in Pune will help you build dynamic web applications using TypeScript, components, data binding, forms, routing and API integration.",
  },
  {
    title: "React JS Basic",
    slug: "react-js-basic",
    duration: "3 Months",
    category: "Web Technologies",
    description:
      "React JS Basic Training in Pune will help you learn JavaScript and React fundamentals, including components, props, state, hooks and interactive user interfaces.",
  },
  {
    title: "React JS Advance",
    slug: "react-js-advance",
    duration: "3 Months",
    category: "Web Technologies",
    description:
      "React JS Advanced Training in Pune will help you improve your React skills with reusable architecture, advanced hooks, performance optimization, testing and production-ready workflows.",
  },
  {
    title: "Node JS",
    slug: "node-js",
    duration: "3 Months",
    category: "Web Technologies",
    description:
      "Node JS Training in Pune will help you build server-side applications and REST APIs using JavaScript, Node.js, Express and database integration.",
  },
  {
    title: "Next JS",
    slug: "next-js",
    duration: "3 Months",
    category: "Web Technologies",
    description:
      "Next JS Training in Pune will help you develop production-ready React applications using routing, server-side rendering, data fetching and deployment techniques.",
  },
  {
    title: "Django",
    slug: "django",
    duration: "3 Months",
    category: "Web Technologies",
    description:
      "Django Training in Pune will help you create Python web applications using Django, ORM, authentication, forms, API development and deployment.",
  },
  {
    title: "Laravel",
    slug: "laravel",
    duration: "3 Months",
    category: "Web Technologies",
    description:
      "Laravel Training in Pune will help you build modern PHP applications using routing, Eloquent ORM, authentication, validation and REST API development.",
  },
  {
    title: "Python",
    slug: "python",
    duration: "3 Months",
    category: "Programming Languages",
    description:
      "Python Training in Pune will help you learn programming fundamentals, data structures, functions, object-oriented programming, file handling and practical automation.",
  },
  {
    title: "Data Science",
    slug: "data-science",
    duration: "6 Months",
    category: "Data & Analytics",
    description:
      "Data Science Training in Pune will help you gain practical knowledge of Python programming, statistics, data analysis, data visualization and machine learning through hands-on projects.",
  },
  {
    title: "Data Analytics",
    slug: "data-analytics",
    duration: "3 Months",
    category: "Data & Analytics",
    description:
      "Data Analytics Training in Pune will help you develop practical skills in spreadsheets, SQL, data cleaning, dashboards, business metrics and data-driven decision-making.",
  },
  {
    title: "Salesforce",
    slug: "salesforce",
    duration: "3 Months",
    category: "Cloud & Enterprise",
    description:
      "Salesforce Training in Pune will help you understand CRM fundamentals, Salesforce objects, workflow automation, reports, dashboards and custom application development.",
  },
  {
    title: "SAP MM",
    slug: "sap-mm",
    duration: "3 Months",
    category: "Cloud & Enterprise",
    description:
      "SAP MM Training in Pune will help you understand procurement and inventory management workflows, including master data, purchasing processes and business transactions.",
  },
  {
    title: "SAP FICO",
    slug: "sap-fico",
    duration: "3 Months",
    category: "Cloud & Enterprise",
    description:
      "SAP FICO Training in Pune will help you understand financial accounting and controlling, including general ledger, payables, receivables, asset accounting and cost control.",
  },
  {
    title: "AWS",
    slug: "aws",
    duration: "3–4 Months",
    category: "Cloud & Enterprise",
    description:
      "AWS Training in Pune will help you learn cloud computing and practical AWS services, including identity management, networking, compute, storage, databases, monitoring and cost management.",
  },
  {
    title: "Microsoft Azure",
    slug: "azure",
    duration: "3–4 Months",
    category: "Cloud & Enterprise",
    description:
      "Microsoft Azure Training in Pune will help you understand cloud computing, identity and governance, compute, storage, networking, monitoring, backup and deployment fundamentals.",
  },
  {
    title: "DevOps",
    slug: "devops",
    duration: "3–4 Months",
    category: "Cloud & Enterprise",
    description:
      "DevOps Training in Pune will help you practice Git, Linux, CI/CD pipelines, containers, infrastructure as code, cloud deployment, monitoring and secure software delivery.",
  },
  {
    title: "Machine Learning",
    slug: "machine-learning",
    duration: "3 Months",
    category: "Data & Analytics",
    description:
      "Machine Learning Training in Pune will help you learn supervised and unsupervised learning, feature engineering, model evaluation and practical machine learning workflows using Python.",
  },
  {
    title: "Magento",
    slug: "magento",
    duration: "3 Months",
    category: "Web Technologies",
    description:
      "Magento Training in Pune will help you understand e-commerce store development, catalog management, themes, extensions, checkout configuration and store operations.",
  },
  {
    title: "UI/UX Designing",
    slug: "ui-ux-designing",
    duration: "3 Months",
    category: "Design",
    description:
      "UI/UX Designing Training in Pune will help you learn user research, information architecture, wireframing, visual design, prototyping and usability testing to create user-friendly digital experiences.",
  },
  {
    title: "WordPress",
    slug: "wordpress",
    duration: "3 Months",
    category: "Web Technologies",
    description:
      "WordPress Training in Pune will help you build and manage websites using themes, plugins, content management, performance optimization and security best practices.",
  },
  {
    title: "MERN",
    slug: "mern",
    duration: "6 Months",
    category: "Full Stack Development",
    description:
      "MERN Stack Training in Pune will help you build full-stack web applications using MongoDB, Express.js, React and Node.js, including authentication, APIs and deployment.",
  },
  {
    title: "MEAN",
    slug: "mean",
    duration: "6 Months",
    category: "Full Stack Development",
    description:
      "MEAN Stack Training in Pune will help you build full-stack web applications using MongoDB, Express.js, Angular and Node.js, including API integration, authentication and deployment.",
  },
  {
    title: "Selenium + Python",
    slug: "selenium-python",
    duration: "3 Months",
    category: "Software Testing",
    description:
      "Selenium with Python Training in Pune will help you learn software testing fundamentals, browser automation, test design, automated test execution and reporting.",
  },
  {
    title: "Selenium + Java",
    slug: "selenium-java",
    duration: "3 Months",
    category: "Software Testing",
    description:
      "Selenium with Java Training in Pune will help you learn browser test automation, Java-based testing frameworks, waits, Page Object Model and test reporting.",
  },
  {
    title: "SEO",
    slug: "seo",
    duration: "3 Months",
    category: "Digital Marketing",
    description:
      "SEO Training in Pune will help you learn keyword research, technical SEO, on-page optimization, content strategy, link building and website performance analysis.",
  },
  {
    title: "Google Ads",
    slug: "google-adwords",
    duration: "3 Months",
    category: "Digital Marketing",
    description:
      "Google Ads Training in Pune will help you create and optimize paid search campaigns using keyword targeting, bidding strategies, conversion tracking and performance reporting.",
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    duration: "3 Months",
    category: "Digital Marketing",
    description:
      "Digital Marketing Training in Pune will help you learn SEO, paid advertising, social media marketing, content strategy, email marketing, analytics and campaign planning.",
  },
  {
    title: "Digital Marketing with AI",
    slug: "digital-marketing-with-ai",
    duration: "3 Months",
    category: "Digital Marketing",
    description:
      "Digital Marketing with AI Training in Pune will help you combine marketing fundamentals with AI-assisted research, content creation, campaign optimization and performance measurement.",
  },
  {
    title: "Social Media Marketing",
    slug: "social-media-marketing",
    duration: "3 Months",
    category: "Digital Marketing",
    description:
      "Social Media Marketing Training in Pune will help you plan content, manage social media calendars, understand audiences, run campaigns and measure engagement and conversions.",
  },
];
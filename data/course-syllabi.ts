export type SyllabusModule = {
  title: string;
  topics: string[];
  practical: string;
};

export type CourseSyllabus = {
  prerequisites: string[];
  tools: string[];
  outcomes: string[];
  modules: SyllabusModule[];
  capstone: string;
};

// Proposed learning plans based on common industry curricula and vendor learning paths.
// They are not represented as Data Council's approved internal syllabus until confirmed by the institute.
export const courseSyllabi: Record<string, CourseSyllabus> = {
  "sap-fico": {
    prerequisites: ["Basic accounting concepts are helpful", "No prior SAP experience required"],
    tools: ["SAP S/4HANA training environment", "Excel", "Process-flow documentation"],
    outcomes: ["Explain core FI and CO processes", "Configure and test basic finance scenarios in a training system", "Trace transactions through financial statements and reports"],
    modules: [
      { title: "Month 1 · ERP and Financial Accounting foundations", topics: ["ERP and SAP S/4HANA navigation; organizational structure and master data", "Company codes, fiscal year variants, posting periods and document principles", "General Ledger: chart of accounts, GL master data, journal entries and document reversal", "Accounts Payable: vendor/business-partner concepts, invoice posting, outgoing payments and open items", "Accounts Receivable: customer/business-partner concepts, incoming payments, clearing and dunning overview", "Tax basics, bank accounting, payment terms and financial statement reporting"], practical: "Configure a training-company scenario and post sample journal, vendor and customer transactions." },
      { title: "Month 2 · Asset Accounting and Controlling", topics: ["Asset Accounting: asset classes, master records, acquisitions, transfers and retirements", "Depreciation areas, depreciation keys and periodic depreciation run concepts", "Cost center accounting, cost elements and internal orders", "Profit centers, allocations, assessments and activity allocation concepts", "Product costing overview, cost estimates and variance concepts", "Integration touchpoints between FI, CO, procurement, sales and inventory"], practical: "Run an asset lifecycle example and prepare a cost-center allocation exercise." },
      { title: "Month 3 · Period close, reporting and project practice", topics: ["Month-end and year-end closing checklist", "Accruals, recurring entries, foreign-currency valuation and clearing overview", "Financial statements, trial balance, line-item reports and reconciliation", "Role-based access, audit trail, controls and common posting errors", "Business-process documentation, test scripts and defect logging", "Revision and scenario-based assessment"], practical: "Complete a record-to-report mini-project from transaction posting through reconciliation and closing reports." },
    ],
    capstone: "End-to-end finance case: master data setup, GL/AP/AR transactions, asset postings, cost-center activity and a period-end reconciliation pack.",
  },
  "data-science": {
    prerequisites: ["Basic computer skills", "School-level mathematics; statistics is introduced from fundamentals"],
    tools: ["Python", "Jupyter Notebook", "NumPy", "pandas", "Matplotlib/Seaborn", "scikit-learn", "SQL", "Git"],
    outcomes: ["Clean and explore datasets reproducibly", "Use statistics to investigate questions", "Train and evaluate baseline ML models", "Communicate findings and limitations"],
    modules: [
      { title: "Month 1 · Python and data foundations", topics: ["Python syntax, variables, control flow, functions and modules", "Lists, dictionaries, tuples, sets, exceptions and file handling", "Object-oriented programming basics and virtual environments", "NumPy arrays, vectorized operations and numerical computing", "pandas Series/DataFrames, importing CSV/Excel/JSON and data types", "SQL foundations: SELECT, filtering, joins, grouping and subqueries", "Git basics, notebooks and reproducible project structure"], practical: "Analyze and clean a messy CSV dataset; write SQL queries to answer business questions." },
      { title: "Month 2 · Statistics, cleaning and exploration", topics: ["Descriptive statistics, distributions, percentiles and outliers", "Probability, sampling, confidence intervals and hypothesis testing", "Correlation versus causation; common statistical pitfalls", "Missing values, duplicates, inconsistent categories and data validation", "Exploratory data analysis (EDA), group comparisons and visual storytelling", "Feature preparation, encoding, scaling and leakage prevention", "Communicating assumptions, caveats and data quality issues"], practical: "Create an EDA notebook with documented cleaning decisions and evidence-backed findings." },
      { title: "Month 3 · Supervised machine learning", topics: ["ML workflow, train/validation/test splits and baseline models", "Linear and logistic regression; regularization concepts", "Decision trees, random forests and gradient-boosting overview", "Classification metrics: precision, recall, F1, ROC-AUC and confusion matrix", "Regression metrics: MAE, RMSE and R²", "Cross-validation, hyperparameter tuning and imbalanced data", "Model interpretation, feature importance and error analysis"], practical: "Train and compare models for a business classification or prediction problem." },
      { title: "Month 4 · Unsupervised learning and advanced practice", topics: ["Clustering with k-means and hierarchical approaches", "Dimensionality reduction concepts and PCA", "Time-series foundations: trend, seasonality and time-aware validation", "Recommendation and text-analysis concepts", "Pipelines, preprocessing and reproducible experiments", "Responsible AI, bias, privacy and model limitations"], practical: "Segment customers or analyze a time-based dataset; document where the model may fail." },
      { title: "Month 5 · Deployment and data communication", topics: ["Packaging preprocessing and model steps", "Building a simple prediction API or interactive demo", "Model serialization, input validation and error handling", "Version control, README files and experiment tracking concepts", "Dashboard/report design and communicating actionable insights", "Monitoring concepts: drift, data changes and model refresh"], practical: "Turn a notebook into a reproducible demo with usage instructions and a results report." },
      { title: "Month 6 · Capstone and interview readiness", topics: ["Problem framing, stakeholder questions and success metrics", "Data sourcing, data dictionary and quality checks", "Baseline-to-final model comparison and error analysis", "Presentation of methodology, findings and limitations", "Portfolio documentation and technical interview practice", "Final review, peer feedback and project iteration"], practical: "Deliver an end-to-end project from raw data to model/demo, documented results and a presentation." },
    ],
    capstone: "Choose a real-world problem such as churn prediction, demand forecasting or customer segmentation; deliver cleaned data, reproducible analysis, model evaluation and a clear presentation.",
  },
  "data-analytics": {
    prerequisites: ["Basic computer skills", "No previous analytics role required"],
    tools: ["Excel or Google Sheets", "SQL", "Power BI or Tableau", "A sample business dataset"],
    outcomes: ["Clean and query data", "Build KPI dashboards", "Explain trends with appropriate context", "Present recommendations to stakeholders"],
    modules: [
      { title: "Month 1 · Spreadsheet, statistics and SQL foundations", topics: ["Analytics lifecycle, business questions and KPI definitions", "Spreadsheet formulas, logical functions, lookups and text/date functions", "Sorting, filtering, data validation, pivot tables and charts", "Data quality checks, duplicates, missing values and tidy tables", "Descriptive statistics, distributions and sampling basics", "SQL SELECT, WHERE, GROUP BY, HAVING, joins, CASE and subqueries", "Relational tables, keys and safe aggregation"], practical: "Create a cleaned sales dataset and answer business questions using spreadsheets and SQL." },
      { title: "Month 2 · BI dashboards and business analysis", topics: ["Dashboard design, hierarchy, accessibility and chart selection", "Data models, relationships and star-schema concepts", "Power BI or Tableau data connections and transformations", "Measures and calculated fields; introductory DAX where Power BI is used", "Time comparisons, segmentation, funnel and cohort concepts", "Exploratory analysis, root-cause questions and misleading-chart avoidance", "Dashboard usability and stakeholder feedback"], practical: "Build an interactive sales or operations dashboard with documented KPI definitions." },
      { title: "Month 3 · Reporting, storytelling and portfolio", topics: ["Advanced SQL patterns: CTEs and window functions", "Business metrics, targets, variance and trend analysis", "Data storytelling, executive summaries and recommendation writing", "Refresh, sharing, permissions and dashboard maintenance concepts", "Quality assurance, reconciliation and validation of reported numbers", "Portfolio case study, presentation and interview practice"], practical: "Deliver an end-to-end analytics case with SQL queries, dashboard, insights and recommended actions." },
    ],
    capstone: "Analyze a sales, marketing or operations dataset; deliver SQL analysis, an interactive dashboard and a concise evidence-based business recommendation.",
  },

// 
  "generative-ai": {
    prerequisites: [
      "Basic computer and programming knowledge",
      "Python fundamentals are recommended",
      "No previous experience with Generative AI is required",
    ],

    tools: [
      "Python",
      "Jupyter Notebook",
      "VS Code",
      "LLM provider APIs",
      "Prompt engineering tools",
      "LangChain",
      "Hugging Face",
      "Embeddings and vector databases",
      "FastAPI",
      "Git and GitHub",
    ],

    outcomes: [
      "Explain Generative AI, LLMs, tokens, context windows and model limitations",
      "Write and evaluate structured prompts for different use cases",
      "Integrate language models into Python applications using APIs",
      "Build document-based question-answering applications using RAG",
      "Work with embeddings, semantic search and vector databases",
      "Evaluate AI output quality, reduce hallucinations and apply responsible AI practices",
      "Build and document a deployable Generative AI application",
    ],

    modules: [
      {
        title: "Month 1 · AI, LLM and Prompt Engineering Foundations",
        topics: [
          "Introduction to Artificial Intelligence, Machine Learning, Deep Learning and Generative AI",
          "Generative AI use cases, capabilities and limitations",
          "Large Language Models: tokens, context windows, inference and model selection",
          "Transformer architecture and attention mechanism: conceptual introduction",
          "Python essentials for AI application development",
          "Working with LLM APIs, API keys, environment variables and structured responses",
          "Prompt engineering: instructions, context, constraints and output formats",
          "Zero-shot, few-shot, role-based and example-driven prompting",
          "Structured JSON outputs, reusable prompt templates and prompt iteration",
          "Temperature, token limits, latency, cost and model comparison",
          "Hallucinations, privacy, bias and responsible AI fundamentals",
        ],
        practical:
          "Build a Python-based AI assistant that performs summarization, text classification, content generation and structured information extraction.",
      },

      {
        title: "Month 2 · Embeddings, Vector Databases and RAG",
        topics: [
          "Text embeddings and semantic similarity",
          "Document ingestion, parsing, cleaning and preprocessing",
          "Chunking strategies, overlap and metadata design",
          "Vector databases and similarity-search fundamentals",
          "Semantic search, top-k retrieval and metadata filtering",
          "Retrieval-Augmented Generation (RAG) architecture and workflow",
          "Connecting retrieved context with LLM prompts",
          "Grounded answers, source references and insufficient-context handling",
          "Introduction to LangChain and reusable LLM application components",
          "Conversation history and context management",
          "RAG failure analysis, retrieval quality and answer evaluation",
          "Security considerations, prompt injection and sensitive-data handling",
        ],
        practical:
          "Build a document question-answering application that indexes a collection of PDFs, retrieves relevant passages and generates answers grounded in those passages.",
      },

      {
        title: "Month 3 · Application Development, Evaluation and Deployment",
        topics: [
          "Designing reusable Generative AI application architecture",
          "Building API endpoints with Python and FastAPI",
          "Connecting an AI backend to a web frontend",
          "Input validation, error handling, retries and rate-limit management",
          "Streaming responses and conversational interfaces",
          "Function calling and introductory tool integration",
          "Evaluating answer relevance, groundedness and factual consistency",
          "Test datasets, regression testing and prompt-version management",
          "Latency, token consumption and inference-cost optimization",
          "Environment configuration, secrets management and logging",
          "Deployment fundamentals and production-readiness checks",
          "Project documentation, GitHub portfolio and technical presentation",
        ],
        practical:
          "Develop and deploy a full-stack Generative AI application with a web interface, API integration, document retrieval, error handling and documented evaluation results.",
      },
    ],

    capstone:
      "Build a production-oriented knowledge assistant that accepts documents, creates embeddings, retrieves relevant context, answers user questions with source references and evaluates answer quality. Include a frontend, backend API, setup instructions and test cases.",
  },

  "agentic-ai": {
    prerequisites: [
      "Basic programming knowledge in Python or JavaScript",
      "Basic understanding of APIs, JSON and HTTP requests",
      "Familiarity with LLMs and prompt engineering is helpful",
      "Generative AI experience is recommended but not mandatory",
    ],

    tools: [
      "Python",
      "VS Code",
      "LLM provider APIs",
      "LangChain",
      "LangGraph",
      "FastAPI",
      "REST APIs",
      "Git and GitHub",
      "SQLite or PostgreSQL",
      "Vector databases",
      "Agent tracing and evaluation tools",
    ],

    outcomes: [
      "Explain the differences between chatbots, deterministic workflows and AI agents",
      "Design agent workflows with explicit state, actions and stopping conditions",
      "Implement tool calling and controlled external API integration",
      "Build agents with task planning, memory and retrieval capabilities",
      "Create stateful workflows using LangGraph or comparable orchestration tools",
      "Design multi-agent workflows for suitable tasks",
      "Implement human approval, tool permissions and failure handling",
      "Trace, test and evaluate agent decisions and tool execution",
      "Build and document an end-to-end agentic AI application",
    ],

    modules: [
      {
        title: "Month 1 · Agent Architecture and Tool Calling",
        topics: [
          "Introduction to Agentic AI and real-world use cases",
          "Chatbots versus LLM applications versus AI agents",
          "Agent architecture: model, instructions, tools, state and execution loop",
          "Task understanding, goal definition and structured outputs",
          "LLM API integration and tool/function calling",
          "Designing tools with validated inputs and structured results",
          "Executing REST APIs and application functions through tools",
          "Agent decisions, observations and iterative execution",
          "State management and conversation context",
          "Memory concepts: conversation history and persistent application state",
          "Deterministic workflows versus autonomous agent loops",
          "Tool errors, retries, timeouts, iteration limits and stopping conditions",
        ],
        practical:
          "Build a single-agent assistant that interprets a request, selects from a small set of read-only tools, executes an action, checks the result and returns a structured response.",
      },

      {
        title: "Month 2 · Workflow Orchestration, RAG and Multi-Agent Systems",
        topics: [
          "Planning multi-step tasks and decomposing goals into smaller steps",
          "Building stateful workflows using LangGraph fundamentals",
          "Nodes, edges, conditional routing and shared workflow state",
          "Checkpointing, persistence and resumable workflows",
          "Combining deterministic steps with model-driven decisions",
          "Integrating retrieval tools and RAG into agent workflows",
          "Tool selection, result interpretation and bounded retry strategies",
          "Human-in-the-loop approval before sensitive actions",
          "Multi-agent architecture and specialized agent roles",
          "Agent handoffs, coordination and shared task context",
          "Parallel task execution and result aggregation concepts",
          "Observability, execution traces and debugging agent behavior",
        ],
        practical:
          "Build a research workflow that retrieves information, invokes approved tools, routes tasks through multiple steps and produces a final response with supporting evidence. Add human approval for a sensitive or externally visible action.",
      },

      {
        title: "Month 3 · Evaluation, Security and Production Deployment",
        topics: [
          "Designing end-to-end agent execution flows",
          "Tool permissions, least privilege and input validation",
          "Prompt injection, untrusted tool output and data-access boundaries",
          "Human approval for database writes and other consequential operations",
          "Agent traces, tool-call logs and execution-state inspection",
          "Evaluating task completion, tool selection and output correctness",
          "Test cases for successful, failed and ambiguous requests",
          "Handling API failures, rate limits, retries and partial results",
          "Controlling loops, execution time, token consumption and cost",
          "FastAPI endpoints and frontend integration",
          "Persistent state, database integration and deployment fundamentals",
          "Monitoring, error reporting, documentation and portfolio presentation",
        ],
        practical:
          "Build and deploy an agentic application that accepts a user goal, plans a bounded workflow, invokes approved tools, verifies results, requests human approval when required and records execution details for debugging.",
      },
    ],

    capstone:
      "Build an end-to-end AI task assistant with a user interface, bounded planning and execution, tool calling, retrieval where appropriate, state persistence, result verification, error handling, execution tracing and human approval for sensitive actions. Demonstrate the complete flow from user input to verified final response.",
  },

// 
  aws: {
    prerequisites: ["Basic IT and networking concepts are helpful", "Comfort using a computer and command line is useful"],
    tools: ["AWS Management Console", "IAM", "VPC", "EC2", "S3", "RDS", "CloudWatch", "AWS CLI"],
    outcomes: ["Explain core cloud concepts", "Deploy a basic workload securely", "Choose suitable compute, storage and database services", "Estimate and monitor cost"],
    modules: [
      { title: "Month 1 · Cloud and AWS foundations", topics: ["Cloud service models, regions, Availability Zones and shared responsibility", "IAM users, roles, policies, MFA and least privilege", "VPC, subnets, route tables, internet/NAT gateways and security groups", "EC2 instances, AMIs, key pairs, user data and basic troubleshooting", "S3 buckets, object access, versioning, lifecycle and encryption", "EBS, EFS and storage selection fundamentals", "AWS CLI, tagging, billing alerts and cost awareness"], practical: "Deploy a small EC2-hosted application and store static assets in an appropriately secured S3 bucket." },
      { title: "Month 2 · Application architecture and operations", topics: ["RDS basics, backups, snapshots and database connectivity", "Load balancing, Auto Scaling and high-availability concepts", "Route 53, DNS and TLS certificate concepts", "Lambda, API Gateway and event-driven architecture introduction", "CloudWatch metrics, logs, alarms and operational troubleshooting", "SQS/SNS and decoupling concepts", "Well-Architected pillars: security, reliability, performance and cost"], practical: "Design and deploy a small web architecture with database connectivity, monitoring and a documented security review." },
      { title: "Month 3 · Automation, security and deployment", topics: ["IAM review, secrets handling and encryption basics", "Infrastructure-as-code concepts and CloudFormation introduction", "Backup, recovery, scaling and failure scenarios", "CI/CD concepts for application deployment", "Cost Explorer, budgets, resource cleanup and cost optimization", "Architecture diagrams, runbooks and troubleshooting", "Knowledge review and scenario-based practice"], practical: "Automate or document repeatable deployment steps and present an architecture review." },
      { title: "Optional Month 4 · Deeper hands-on and portfolio", topics: ["Multi-tier architecture and resilience exercises", "Container or serverless deployment extension", "Performance, security and cost review", "Practice scenarios aligned to a chosen AWS learning/certification path", "Portfolio documentation and final assessment"], practical: "Extend the project with a measurable reliability, automation or cost-improvement objective." },
    ],
    capstone: "Deploy a small cloud application with network boundaries, IAM roles, storage/database, monitoring, architecture documentation and a cost/security checklist.",
  },
  azure: {
    prerequisites: ["Basic networking and operating-system concepts are helpful", "No prior Azure administration experience required"],
    tools: ["Azure Portal", "Microsoft Entra ID", "Azure Resource Manager", "Virtual Machines", "Storage Accounts", "Virtual Network", "Azure Monitor", "Azure CLI or PowerShell"],
    outcomes: ["Describe core Azure services", "Configure identity, networking, compute and storage", "Monitor and protect basic workloads", "Use a structured cloud administration workflow"],
    modules: [
      { title: "Month 1 · Azure fundamentals and core services", topics: ["Cloud concepts, shared responsibility, regions and availability zones", "Subscriptions, resource groups, resource hierarchy and tags", "Microsoft Entra ID, users, groups, roles, RBAC and MFA concepts", "Virtual machines, images, sizing, availability and basic administration", "Storage accounts, Blob, Files, redundancy and access controls", "Virtual networks, subnets, NSGs, DNS and connectivity fundamentals", "Azure pricing calculator, budgets and cost-management basics"], practical: "Create a resource group, virtual network, VM and storage resource with least-privilege access." },
      { title: "Month 2 · Administration, governance and operations", topics: ["Azure Policy, locks, tags and governance controls", "Managed identities, Key Vault and secrets-handling concepts", "Backup, recovery, availability and resilience planning", "Azure Monitor, metrics, logs, alerts and Log Analytics introduction", "Compute deployment options and App Service/container overview", "Azure CLI, PowerShell and repeatable administration tasks", "Troubleshooting network, identity and resource deployment issues"], practical: "Set up monitoring and backup for a sample workload and document an operational runbook." },
      { title: "Month 3 · Secure deployment and practical project", topics: ["Infrastructure as code with ARM/Bicep concepts", "Deployment slots and release workflow overview", "Identity and network security review", "Cost review, sizing and cleanup", "Operational scenarios and assessment practice", "Portfolio documentation and architecture diagram"], practical: "Deploy a small web workload with storage, access controls, monitoring and documented recovery steps." },
      { title: "Optional Month 4 · Role-focused extension", topics: ["Administrator path: deeper identity, storage, compute, networking and monitoring", "Developer path: app hosting, managed identity, Key Vault and deployment pipeline", "DevOps path: repositories, pipelines and infrastructure automation", "Scenario labs and revision against the selected Microsoft Learn path"], practical: "Complete a role-aligned lab portfolio; certification preparation is optional and does not guarantee certification." },
    ],
    capstone: "Build and document a basic Azure environment with identity controls, networking, compute, storage, monitoring and cost governance.",
  },
  devops: {
    prerequisites: ["Basic Linux/command-line and networking knowledge is recommended", "Basic programming or scripting experience is helpful"],
    tools: ["Linux", "Git/GitHub", "Docker", "CI/CD pipelines", "Terraform", "Kubernetes", "Cloud platform", "Prometheus/Grafana concepts"],
    outcomes: ["Use version control and branching workflows", "Automate build/test/deploy steps", "Package applications in containers", "Explain infrastructure as code and monitoring"],
    modules: [
      { title: "Month 1 · Linux, Git and CI/CD foundations", topics: ["DevOps culture, delivery lifecycle and feedback loops", "Linux filesystem, permissions, processes, services and shell basics", "Networking, DNS, HTTP/HTTPS, ports and SSH fundamentals", "Git commits, branches, merges, pull requests and conflict resolution", "Build tools, environment variables, secrets and configuration", "Automated tests and CI pipeline stages", "GitHub Actions or Azure Pipelines: triggers, jobs, artifacts and approvals"], practical: "Create a repository with a test/build workflow and document the release process." },
      { title: "Month 2 · Containers and infrastructure automation", topics: ["Docker images, containers, volumes, networks and Dockerfiles", "Container registries, image tagging and security basics", "Compose and multi-service local environments", "Infrastructure as Code concepts with Terraform: providers, state, plan/apply and modules", "Cloud compute, network, identity and secrets fundamentals", "Deployment strategies: rolling, blue-green and canary concepts", "Pipeline variables, environment separation and approvals"], practical: "Containerize an application and automate deployment to a test environment using a repeatable pipeline." },
      { title: "Month 3 · Kubernetes, observability and secure delivery", topics: ["Kubernetes architecture, Pods, Deployments, Services and ConfigMaps/Secrets", "Ingress, probes, resource requests/limits and autoscaling concepts", "Helm and manifest-based deployment basics", "Logs, metrics, dashboards, alerts and incident response", "Supply-chain security, dependency scanning and least privilege", "Rollback, backups, release verification and post-incident learning", "Troubleshooting and runbook writing"], practical: "Deploy a containerized service to a local or managed Kubernetes environment and add health checks and monitoring." },
      { title: "Optional Month 4 · Production-style project", topics: ["Reusable pipeline templates and environment promotion", "Advanced infrastructure modules and drift concepts", "Secrets management and policy checks", "Resilience, scaling, deployment strategy and cost review", "Portfolio documentation and scenario-based assessment"], practical: "Demonstrate source-to-deploy automation with tests, container build, infrastructure definition, monitoring and rollback steps." },
    ],
    capstone: "Automate the build, test and deployment of a sample application using Git, CI/CD, Docker, infrastructure-as-code concepts and monitoring; Kubernetes is included where lab resources allow.",
  },
  "digital-marketing-with-ai": {
    prerequisites: ["Basic computer and internet skills", "No prior marketing or AI experience required"],
    tools: ["Google Analytics 4 concepts", "Google Ads concepts", "Search Console", "Social platforms", "Spreadsheet reporting", "AI writing/research assistants with human review"],
    outcomes: ["Plan a multi-channel campaign", "Use AI to support research and drafts responsibly", "Measure campaign outcomes", "Review claims, privacy and brand consistency before publishing"],
    modules: [
      { title: "Month 1 · Marketing foundations and audience research", topics: ["Marketing funnel, positioning, customer personas and value propositions", "Keyword and audience research; search intent and competitor review", "SEO foundations: technical, on-page, content and measurement", "Content strategy, editorial calendars and brand voice", "Social media channels, community management and creative briefs", "AI-assisted research and ideation: prompt structure, fact checking and bias awareness", "Copyright, privacy, disclosure and sensitive-data handling"], practical: "Create a documented audience persona, keyword map and one-month content calendar; fact-check AI-assisted drafts." },
      { title: "Month 2 · Campaigns, paid media and content production", topics: ["Google Ads campaign structure, keywords, ad groups and landing pages", "Budgeting, bidding, targeting and conversion-tracking concepts", "Social campaign objectives, creative formats and testing hypotheses", "Email marketing, segmentation, consent and lifecycle messaging", "AI-assisted copy variants, briefs, repurposing and image-brief workflows", "Landing-page conversion principles and A/B testing basics", "UTM tagging and campaign naming conventions"], practical: "Build a mock campaign plan with creative variants, landing-page outline, budget assumptions and tracking plan." },
      { title: "Month 3 · Analytics, optimization and capstone", topics: ["GA4 events, conversions, acquisition reports and attribution caveats", "Search Console, SEO performance and content updates", "KPI selection: reach, CTR, CPC, conversion rate, CPA and ROAS", "Dashboarding, campaign reporting and insight writing", "AI-assisted analysis with source verification and human decision-making", "Optimization experiments, reporting cadence and budget reallocation", "Portfolio presentation and ethical review"], practical: "Present a campaign performance report using sample data, recommendations and clearly stated limitations." },
    ],
    capstone: "Prepare a full-funnel campaign for a sample business: research, SEO/content plan, paid-media mockup, AI-assisted content with human review, measurement plan and final report.",
  },
  "java": { prerequisites: ["Basic computer skills"], tools: ["JDK", "IntelliJ IDEA or Eclipse", "Git", "Maven"], outcomes: ["Write structured Java programs", "Use OOP and collections", "Test and debug small applications"], modules: [
    { title: "Month 1 · Programming foundations", topics: ["JDK/JVM, variables, types and operators", "Conditionals, loops, arrays and strings", "Methods, debugging and exception handling", "Classes, objects, constructors and encapsulation"], practical: "Build console utilities and a small object-oriented application." },
    { title: "Month 2 · Core Java", topics: ["Inheritance, polymorphism, abstraction and interfaces", "Collections, generics and iterators", "File I/O, date/time and packages", "Exceptions, unit testing and clean-code basics"], practical: "Build a menu-driven record-management program with file persistence and tests." },
    { title: "Month 3 · Applied Java", topics: ["JDBC and relational database basics", "Threads and concurrency introduction", "Maven, Git and project structure", "Revision, debugging and interview practice"], practical: "Deliver a small Java + database application with README and test cases." },
  ], capstone: "A Java CRUD application with input validation, persistence, tests and documentation." },
  "fullstack-java": { prerequisites: ["Basic computer skills"], tools: ["HTML/CSS/JavaScript", "Java", "Spring Boot", "SQL", "Git", "Maven", "Postman"], outcomes: ["Build a full-stack application", "Design REST APIs and database models", "Test and deploy a project"], modules: [
    { title: "Months 1–2 · Frontend and programming foundations", topics: ["HTML semantics, CSS layout and responsive design", "JavaScript, DOM, events, async basics and browser tools", "Java syntax, OOP, collections and exceptions", "Git, debugging and project planning"], practical: "Build a responsive frontend and core Java exercises." },
    { title: "Months 3–4 · Backend and database", topics: ["Spring Boot structure, dependency injection and configuration", "REST APIs, validation, error handling and API documentation", "SQL schema design, joins, indexes and transactions", "Persistence layer, authentication concepts and testing"], practical: "Create a tested REST API connected to a relational database." },
    { title: "Months 5–6 · Integration and delivery", topics: ["Connect frontend forms to backend APIs", "Authentication/authorization basics and secure input handling", "Integration testing, logging and environment configuration", "Deployment concepts, Git workflow and portfolio preparation"], practical: "Deliver a full-stack CRUD application with tests, deployment notes and demo." },
  ], capstone: "A full-stack business application with responsive UI, Java API, database, validation, tests and deployment documentation." },
  "python": { prerequisites: ["Basic computer skills"], tools: ["Python", "VS Code", "Jupyter", "Git"], outcomes: ["Write maintainable scripts", "Work with files and APIs", "Use Python libraries to automate tasks"], modules: [
    { title: "Month 1 · Python fundamentals", topics: ["Syntax, variables, types and operators", "Conditionals, loops, functions and scope", "Strings, lists, tuples, sets and dictionaries", "Exceptions, modules and debugging"], practical: "Build command-line utilities and data validation scripts." },
    { title: "Month 2 · Practical programming", topics: ["Files, CSV/JSON and path handling", "OOP, classes and composition", "Virtual environments, packages and pip", "HTTP/API basics and structured logging"], practical: "Build a script that reads files, calls an API and produces a report." },
    { title: "Month 3 · Applied project", topics: ["Testing fundamentals and pytest introduction", "Database connectivity and SQL basics", "Automation patterns and error handling", "Git, documentation and project review"], practical: "Deliver a tested automation or data-processing application." },
  ], capstone: "A documented Python application that automates a useful workflow and includes validation and tests." },
  "machine-learning": { prerequisites: ["Python basics and introductory statistics are recommended"], tools: ["Python", "pandas", "scikit-learn", "Jupyter", "Matplotlib"], outcomes: ["Prepare data for ML", "Compare baseline models", "Evaluate model quality and limitations"], modules: [
    { title: "Month 1 · Data and statistics", topics: ["Python data stack and EDA", "Probability, distributions and sampling", "Cleaning, encoding, scaling and data splits", "Regression and classification problem framing"], practical: "Prepare a clean dataset and establish a baseline." },
    { title: "Month 2 · Models and evaluation", topics: ["Linear/logistic regression", "Decision trees, random forests and clustering overview", "Metrics, cross-validation and leakage prevention", "Feature engineering and model comparison"], practical: "Compare several models and explain metric trade-offs." },
    { title: "Month 3 · Project and deployment basics", topics: ["Pipelines and reproducible experiments", "Interpretability and error analysis", "Model serialization and simple demo/API", "Responsible ML, portfolio and interview review"], practical: "Deliver an evaluated ML project with clear limitations and a demo." },
  ], capstone: "A supervised-learning project with baseline comparison, evaluation, error analysis and reproducible documentation." },
  "salesforce": { prerequisites: ["Basic business-process familiarity is helpful"], tools: ["Salesforce Trailhead", "Salesforce Developer Edition", "Reports and dashboards"], outcomes: ["Explain CRM objects and relationships", "Configure basic automation", "Create useful reports and dashboards"], modules: [
    { title: "Month 1 · CRM and platform basics", topics: ["CRM lifecycle and Salesforce navigation", "Standard/custom objects, fields and relationships", "Record types, page layouts and validation rules", "Users, profiles, permission sets and sharing concepts"], practical: "Configure a sample CRM data model." },
    { title: "Month 2 · Automation and reporting", topics: ["Flow Builder fundamentals", "Approval and business-process automation concepts", "Reports, dashboards, filters and formulas", "Data import, deduplication and data quality"], practical: "Automate a lead follow-up process and create a dashboard." },
    { title: "Month 3 · App and project", topics: ["Lightning App Builder and page customization", "Testing, deployment/change-set concepts and sandbox workflow", "Security review and access checks", "Project documentation and revision"], practical: "Deliver a configured CRM mini-project with automation and reports." },
  ], capstone: "Configure a lead-to-opportunity CRM workflow with permissions, automation, reports and dashboard." },
  "sap-mm": { prerequisites: ["Basic procurement or inventory concepts are helpful"], tools: ["SAP training environment", "Process maps", "Excel"], outcomes: ["Explain procurement and inventory flows", "Work with master data concepts", "Trace purchasing transactions"], modules: [
    { title: "Month 1 · Enterprise structure and master data", topics: ["SAP navigation and enterprise structure", "Material and supplier/business-partner master concepts", "Purchasing info records, source lists and conditions", "Purchase requisition and purchase order lifecycle"], practical: "Create a sample procurement process map and master-data checklist." },
    { title: "Month 2 · Procurement and inventory", topics: ["Goods receipt, goods issue and stock overview", "Movement types and stock transfer concepts", "Invoice verification and three-way match", "Purchasing approvals and release strategy concepts"], practical: "Trace a purchase order through goods receipt and invoice verification." },
    { title: "Month 3 · Reporting and integration", topics: ["Physical inventory and stock reconciliation", "Procurement reporting and common exceptions", "Integration with FI and production/sales overview", "Test scenarios, documentation and revision"], practical: "Complete a procure-to-pay case with exception handling and reports." },
  ], capstone: "Procure-to-pay scenario covering requisition, purchase order, receipt, invoice and reconciliation." },
  "mern": { prerequisites: ["HTML, CSS and JavaScript fundamentals are recommended"], tools: ["MongoDB", "Express", "React", "Node.js", "Git", "Postman"], outcomes: ["Build a React UI", "Create REST APIs", "Model data in MongoDB", "Integrate and deploy a full-stack app"], modules: [
    { title: "Months 1–2 · JavaScript and React", topics: ["Modern JavaScript, async/await and modules", "React components, props, state and hooks", "Forms, routing, data fetching and UI states", "Reusable components and basic accessibility"], practical: "Build a multi-page React frontend consuming sample data." },
    { title: "Months 3–4 · Node, Express and MongoDB", topics: ["Node runtime, Express routing and middleware", "REST design, validation and error handling", "MongoDB documents, queries, indexes and schema design", "Authentication concepts, authorization and security basics"], practical: "Build and test a REST API with MongoDB persistence." },
    { title: "Months 5–6 · Integration and delivery", topics: ["Connect frontend and backend", "Testing, logging, environment variables and secrets", "Deployment, monitoring and performance basics", "Portfolio documentation and interview practice"], practical: "Deliver a complete MERN application with tests and deployment guide." },
  ], capstone: "A full-stack MERN application with authentication, CRUD workflows, validation and documented deployment." },
  "mean": { prerequisites: ["HTML, CSS, JavaScript and basic TypeScript are recommended"], tools: ["MongoDB", "Express", "Angular", "Node.js", "Git", "Postman"], outcomes: ["Build Angular components and services", "Create Express APIs", "Integrate MongoDB", "Test and deploy a full-stack app"], modules: [
    { title: "Months 1–2 · TypeScript and Angular", topics: ["TypeScript types, interfaces and classes", "Angular components, templates, directives and services", "Routing, forms, HTTP client and RxJS basics", "Responsive UI and client-side validation"], practical: "Build an Angular application with routing and API-ready services." },
    { title: "Months 3–4 · Backend and data", topics: ["Node.js and Express API architecture", "MongoDB collections, queries and indexes", "Validation, error handling and authentication concepts", "API testing and integration"], practical: "Create a REST API and verify it with Postman." },
    { title: "Months 5–6 · Integration and deployment", topics: ["Connect Angular services to APIs", "Security, configuration and environment management", "Testing, deployment and logging", "Portfolio and technical interview review"], practical: "Deliver an end-to-end MEAN application with tests and documentation." },
  ], capstone: "A full-stack MEAN application with Angular UI, Express API, MongoDB and deployment notes." },
};

const genericSyllabi: Record<string, CourseSyllabus> = {
  "web-technologies": {
    prerequisites: ["Basic computer skills", "HTML/CSS/JavaScript basics where relevant"], tools: ["VS Code", "Browser developer tools", "Git", "Package manager or CMS tooling as relevant"], outcomes: ["Build a working application or website", "Debug common issues", "Use version control and document a project"], modules: [
      { title: "Month 1 · Core concepts", topics: ["Environment setup and toolchain", "Core syntax, framework/CMS structure and project organization", "Components/templates, routing and page structure", "Styling, responsive layout and accessibility basics"], practical: "Build a small responsive multi-page application." },
      { title: "Month 2 · Data and application features", topics: ["Forms, validation and user interactions", "API/database or content-management integration", "Reusable patterns, plugins/libraries and configuration", "Security, performance and debugging basics"], practical: "Add a data-driven feature and document the setup." },
      { title: "Month 3 · Testing and delivery", topics: ["Testing and browser/device checks", "SEO/performance fundamentals where relevant", "Deployment, backups and maintenance", "Portfolio project and review"], practical: "Publish or locally demonstrate a complete project with README." },
    ], capstone: "A complete project relevant to the selected technology, with responsive UI, data/content integration and documentation." },
  "digital-marketing": {
    prerequisites: ["Basic computer and internet skills"], tools: ["Search Console", "Google Analytics 4 concepts", "Google Ads concepts", "Social platforms", "Spreadsheets"], outcomes: ["Plan a channel mix", "Set measurable KPIs", "Report campaign performance"], modules: [
      { title: "Month 1 · Strategy and organic channels", topics: ["Audience, funnel, positioning and campaign goals", "SEO, keyword research and content planning", "Social media strategy and editorial calendars", "Brand voice, creative briefs and landing-page basics"], practical: "Create a campaign brief and content calendar." },
      { title: "Month 2 · Paid media and lifecycle", topics: ["Paid search and social campaign structure", "Budget, targeting, bidding and creative testing concepts", "Email marketing, consent and segmentation", "Conversion tracking, UTM tags and landing-page optimization"], practical: "Build a mock campaign with budget assumptions and tracking plan." },
      { title: "Month 3 · Analytics and optimization", topics: ["GA4 acquisition and conversion reports", "KPI definitions and dashboarding", "A/B testing, reporting and optimization decisions", "Ethical marketing, privacy and portfolio presentation"], practical: "Prepare a performance report with recommendations using sample data." },
    ], capstone: "A multi-channel marketing plan with content calendar, paid campaign mockup, KPIs and sample-data report." },
  "software-testing": {
    prerequisites: ["Basic computer skills", "Programming basics are helpful"], tools: ["Selenium", "Python or Java", "pytest or TestNG", "Git", "Postman"], outcomes: ["Write test cases", "Automate browser flows", "Report and debug failures"], modules: [
      { title: "Month 1 · Testing and programming foundations", topics: ["SDLC/STLC, test levels and defect lifecycle", "Test scenarios, test cases, boundary and equivalence techniques", "Python/Java essentials for automation", "HTML DOM, locators and browser developer tools"], practical: "Create a test plan and automate simple browser checks." },
      { title: "Month 2 · Selenium automation", topics: ["WebDriver setup, locators and element interactions", "Waits, dropdowns, alerts, frames and windows", "Test framework, assertions, fixtures/setup and teardown", "Page Object Model and reusable utilities"], practical: "Automate a multi-page workflow with reliable waits and reusable page objects." },
      { title: "Month 3 · Framework and reporting", topics: ["Data-driven tests and configuration", "Screenshots, logs and failure debugging", "CI execution and browser/environment considerations", "Test reports, Git workflow and capstone"], practical: "Run a small regression suite and produce a clear test report." },
    ], capstone: "A maintainable UI automation suite with page objects, test data, reporting and execution instructions." },
  "design": {
    prerequisites: ["No design software experience required"], tools: ["Figma", "FigJam", "Design-system components", "Prototype and handoff tools"], outcomes: ["Conduct basic user research", "Design user flows and wireframes", "Prototype and test interfaces"], modules: [
      { title: "Month 1 · Research and structure", topics: ["UX principles, user needs and accessibility basics", "Research plans, interviews and persona limitations", "Information architecture, user journeys and flows", "Competitive review and problem statements"], practical: "Map a user journey and create low-fidelity wireframes." },
      { title: "Month 2 · Visual and interaction design", topics: ["Typography, color, spacing and visual hierarchy", "Design systems, reusable components and responsive layouts", "High-fidelity screens, interactions and prototyping", "Forms, empty/error/loading states and accessibility"], practical: "Build a clickable prototype for a mobile-first product flow." },
      { title: "Month 3 · Usability and portfolio", topics: ["Usability testing and feedback synthesis", "Iteration based on observed issues", "Developer handoff, annotations and design specs", "Case-study storytelling and portfolio presentation"], practical: "Present a complete case study from problem framing through tested prototype." },
    ], capstone: "A portfolio-ready UX/UI case study with research, flows, responsive screens, prototype and usability findings." },
};

export function getCourseSyllabus(slug: string, category: string): CourseSyllabus {
  if (courseSyllabi[slug]) return courseSyllabi[slug];
  if (category === "Digital Marketing") return genericSyllabi["digital-marketing"];
  if (category === "Software Testing") return genericSyllabi["software-testing"];
  if (category === "Design") return genericSyllabi.design;
  return genericSyllabi["web-technologies"];
}

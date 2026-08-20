const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Profile Information Endpoint
app.get('/api/profile', (req, res) => {
  res.json({
    name: "HARSHITA GOGIA",
    title: "Full Stack Developer & AI/Cloud Engineer",
    location: "Dehradun, Uttarakhand",
    contact: {
      email: "hgogia8656@gmail.com",
      phone: "+91 6398748892",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    summary: "Computer Science undergraduate with end-to-end expertise spanning Full Stack Web Development (Frontend & Backend), Generative AI/Machine Learning, and Cloud Computing. Experienced in building scalable full-stack applications using React.js, ASP.NET Core, Node.js, and Python frameworks."
  });
});

// Skills Endpoint
app.get('/api/skills', (req, res) => {
  res.json([
    { category: "Frontend", items: ["React.js", "TypeScript", "JavaScript (ES6+)", "HTML5/CSS3", "Bootstrap", "Chart.js", "WordPress"] },
    { category: "Backend", items: ["C# (.NET Core MVC)", "Node.js", "Express", "Python (FastAPI, Flask)", "Java (Spring Boot)", "PHP", "RESTful APIs"] },
    { category: "Databases & ORM", items: ["SQL Server", "MySQL", "PostgreSQL", "Entity Framework Core", "LINQ", "SQL"] },
    { category: "AI / ML & GenAI", items: ["Generative AI", "LangChain", "CrewAI", "Gemini", "YOLOv8", "OpenCV", "Keras", "PyTorch", "Scikit-Learn"] },
    { category: "Cloud & DevOps", items: ["AWS Cloud", "Docker", "Git/GitHub", "Linux", "CI/CD", "Server-side Caching", "Postman"] }
  ]);
});

// Projects Endpoint
app.get('/api/projects', (req, res) => {
  res.json([
    {
      id: 1,
    title: "Student & Faculty Analytics Portal",
    tech: ["C#", "ASP.NET Core MVC", "SQL Server", "EF Core", "LINQ", "Bootstrap"],
    type: "Enterprise Backend & Full Stack",
    description: "Developed an analytics management system using C# and EF Core. Optimized complex LINQ database queries to achieve 30% faster analytics reporting."
  },
  {
    id: 2,
    title: "GitHub Repository Explorer & Proxy App",
    tech: ["React.js", "Node.js", "Express", "TypeScript", "LocalStorage"],
    type: "Full Stack Web Application",
    description: "Engineered a full-stack proxy application featuring server-side caching, paginated and sortable repositories, interactive language distribution charts, and search history."
  },
  {
    id: 3,
    title: "EMORA: Emotion-Aware Multimodal Responsive Agent",
    tech: ["Python", "FastAPI", "Keras", "MTCNN", "VGG16"],
    type: "AI-Powered Full Stack Service",
    description: "Integrated facial recognition algorithms with text sentiment analysis into a unified FastAPI service, achieving 97% overall accuracy."
  },
  {
    id: 4,
    title: "AI Based Recruitment System",
    tech: ["Python", "Streamlit", "Pydantic", "Zoom API"],
    type: "Full Stack Automation / AI",
    description: "Automated resume screening for 300+ applications, candidate feedback generation, and automated interview scheduling via Zoom API integration, improving hiring efficiency."
  },
  {
    id: 5,
    title: "Real-Time Weather Dashboard",
    tech: ["React.js", "Node.js", "Chart.js", "OpenWeatherMap API"],
    type: "Full Stack Frontend/Backend App",
    description: "Built and optimized a React.js dashboard featuring Chart.js visualizations and a Node.js backend utilizing the OpenWeatherMap API, resulting in a 30% reduction in page load times for 200+ weekly active users."
  },
  {
    id: 6,
    title: "Toy Language Compiler",
    tech: ["Python", "Flask", "PLY", "AST"],
    type: "Compiler & Systems Programming",
    description: "Spearheaded the creation of lexical analysis and parsing components for a full-stack compiler, achieving a 98% pass rate across 110 unit tests and eliminating critical parsing errors."
  },
  {
    id: 7,
    title: "Real-Time Object Detection using YOLOv8 & OpenCV",
    tech: ["YOLOv8", "OpenCV", "Python"],
    type: "Computer Vision & AI Application",
    description: "Built a real-time object detection application that identifies people, vehicles, animals, and everyday objects from webcam or video feed with bounding boxes and confidence scores."
  },
  {
    id: 8,
    title: "Bitcoin Price Forecasting System",
    tech: ["Python", "Scikit-Learn", "Pandas", "yfinance"],
    type: "Data Science & Time-Series ML",
    description: "Developed a Bitcoin price prediction model using Scikit-Learn and yfinance with an end-to-end time-series forecasting pipeline."
  },
  {
    id: 9,
    title: "Blood Bank Management System",
    tech: ["Django", "MySQL", "HTML", "CSS"],
    type: "Full Stack Web Application",
    description: "Engineered a full-stack Blood Bank Management System, reducing critical stockouts by 30% through real-time inventory alerts and a robust donor-matching algorithm."
  }
  ]);
});

// Achievements Endpoint
app.get('/api/achievements', (req, res) => {
  res.json({
    certifications: [
      "AWS Certified Cloud Practitioner",
      "Solutions Architecture Job Simulation – AWS (Forage)",
      "Postman API Fundamentals Student Expert",
      "Programming in Java – NPTEL Elite Certification (IIT Kharagpur)",
      "Android Mobile Application Development – SWAYAM (BAOU)",
      "Software Engineering Job Simulation – JPMorgan Chase & Co. (Forage)",
      "ChatGPT Generative AI For Business Leaders – Udemy",
      "Web Development - Backend – Udemy (Angela Yu)",
      "Tayana Academy: 30+ Certifications in Full Stack & AI"
  ],
    honors: [
      "Departmental Project Showcase Award Winner",
      "TechSprint-48 Hackathon Participant (Graphic Era University)",
      "EY Techathon 6.0 Participant (Round 1: Executive Summary)",
      "Tata Imagination Challenge 2025 (Tata Quiz) Participant",
      "Tata Imagination Challenge 2024 (Student Track) Participant",
      "Hack-O-Holic 2.0 Finalist (Top 10 out of 200+ teams)",
      "Myntra HackerRamp WeForShe 2024 National Qualifier (Phase 2)",
      "AWS Cloud Infrastructure Deployment (5K+ Users, 99.99% Uptime)"
  ],
    extracurriculars: [
      "Dehradun Bhangra Club Member & India's Got Talent (IGT) Auditions Participant",
      "Treasure Hunt Event Participant (Accolade Fest, GEU)",
      "Scratch Event Contributor (GEHU ACM Student Chapter)",
      "Shikhar Club Quiz Competition Participant (GEHU)",
      "Coincent Live Industrial Webinar on Trending Technologies Participant",
      "GirlScript Summer of Code (GSSoC 2025) Open Source Contributor",
      "Multi-sport School Athlete (Multiple Medals & Certificates)"
  ]
  });
});

// Contact Form POST Endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill out all fields." });
  }
  // Console logging simulated email delivery
  console.log(`[New Message Received] From: ${name} (${email}) | Message: ${message}`);
  res.status(200).json({ success: true, message: "Thank you! Your message has been received." });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
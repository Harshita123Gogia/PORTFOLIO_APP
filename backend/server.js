const express = require('express');
const cors = require('cors');
const { body, validationResult } = require('express-validator');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-Memory Portfolio Data
const profile = {
  name: "HARSHITA GOGIA",
  title: "Full Stack Developer & AI/Cloud Engineer",
  location: "Dehradun, Uttarakhand",
  contact: {
    email: "hgogia8656@gmail.com",
    phone: "+91 6398748892",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  summary: "Computer Science undergraduate with end-to-end expertise spanning Full Stack Web Development (Frontend & Backend), Generative AI/Machine Learning, and Cloud Computing."
};

const skills = [
  { category: "Frontend", items: ["React.js", "TypeScript", "JavaScript (ES6+)", "HTML5/CSS3", "Tailwind CSS", "Bootstrap", "Chart.js", "WordPress"] },
  { category: "Backend", items: ["Python (FastAPI, Flask)", "C# (.NET Core MVC)", "Node.js", "Express", "Java (Spring Boot)", "PHP", "RESTful APIs"] },
  { category: "Databases & ORM", items: ["SQLite", "SQL Server", "MySQL", "PostgreSQL", "SQLAlchemy", "Entity Framework Core", "LINQ", "SQL"] },
  { category: "AI / ML & GenAI", items: ["Generative AI", "LangChain", "CrewAI", "Gemini", "YOLOv8", "OpenCV", "Keras", "PyTorch", "Scikit-Learn"] },
  { category: "Cloud & DevOps", items: ["AWS Cloud", "Docker", "Git/GitHub", "Linux", "CI/CD", "Server-side Caching", "Postman"] }
];

const projects = [
  {
    id: 1,
    title: "CineReserve - Movie Ticket Booking System",
    tech: ["FastAPI", "SQLAlchemy", "Pydantic", "SQLite", "Tailwind CSS", "JWT", "FastAPI-Mail"],
    type: "Full Stack Web Application",
    description: "Engineered a modern web application for browsing movies, viewing dynamic showtime schedules, and reserving seats in real-time. Features JWT authentication, interactive seat mapping, and background email dispatching for booking confirmations."
  },
  {
    id: 2,
    title: "Student & Faculty Analytics Portal",
    tech: ["C#", "ASP.NET Core MVC", "SQL Server", "EF Core", "LINQ", "Bootstrap"],
    type: "Enterprise Backend & Full Stack",
    description: "Developed an analytics management system using C# and EF Core. Optimized complex LINQ database queries to achieve 30% faster analytics reporting."
  },
  {
    id: 3,
    title: "GitHub Repository Explorer & Proxy App",
    tech: ["React.js", "Node.js", "Express", "TypeScript", "LocalStorage"],
    type: "Full Stack Web Application",
    description: "Engineered a full-stack proxy application featuring server-side caching, paginated and sortable repositories, interactive language distribution charts, and search history."
  },
  {
    id: 4,
    title: "EMORA: Emotion-Aware Multimodal Responsive Agent",
    tech: ["Python", "FastAPI", "Keras", "MTCNN", "VGG16"],
    type: "AI-Powered Full Stack Service",
    description: "Integrated facial recognition algorithms with text sentiment analysis into a unified FastAPI service, achieving 97% overall accuracy."
  },
  {
    id: 5,
    title: "AI Based Recruitment System",
    tech: ["Python", "Streamlit", "Pydantic", "Zoom API"],
    type: "Full Stack Automation / AI",
    description: "Automated resume screening for 300+ applications, candidate feedback generation, and automated interview scheduling via Zoom API integration, improving hiring efficiency."
  },
  {
    id: 6,
    title: "Real-Time Weather Dashboard",
    tech: ["React.js", "Node.js", "Chart.js", "OpenWeatherMap API"],
    type: "Full Stack Frontend/Backend App",
    description: "Built and optimized a React.js dashboard featuring Chart.js visualizations and a Node.js backend utilizing the OpenWeatherMap API, resulting in a 30% reduction in page load times for 200+ weekly active users."
  },
  {
    id: 7,
    title: "Toy Language Compiler",
    tech: ["Python", "Flask", "PLY", "AST"],
    type: "Compiler & Systems Programming",
    description: "Spearheaded the creation of lexical analysis and parsing components for a full-stack compiler, achieving a 98% pass rate across 110 unit tests and eliminating critical parsing errors."
  },
  {
    id: 8,
    title: "Real-Time Object Detection using YOLOv8 & OpenCV",
    tech: ["YOLOv8", "OpenCV", "Python"],
    type: "Computer Vision & AI Application",
    description: "Built a real-time object detection application that identifies people, vehicles, animals, and everyday objects from webcam or video feed with bounding boxes and confidence scores."
  },
  {
    id: 9,
    title: "Bitcoin Price Forecasting System",
    tech: ["Python", "Scikit-Learn", "Pandas", "yfinance"],
    type: "Data Science & Time-Series ML",
    description: "Developed a Bitcoin price prediction model using Scikit-Learn and yfinance with an end-to-end time-series forecasting pipeline."
  },
  {
    id: 10,
    title: "Blood Bank Management System",
    tech: ["Django", "MySQL", "HTML", "CSS"],
    type: "Full Stack Web Application",
    description: "Engineered a full-stack Blood Bank Management System, reducing critical stockouts by 30% through real-time inventory alerts and a robust donor-matching algorithm."
  }
];

const achievements = {
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
};

// In-Memory Storage for Submitted Messages
const messages = [];

// API Endpoints
app.get('/api/profile', (req, res) => {
  res.json(profile);
});

app.get('/api/skills', (req, res) => {
  res.json(skills);
});

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.get('/api/achievements', (req, res) => {
  res.json(achievements);
});

// GET single project by ID
app.get('/api/projects/:id', (req, res) => {
  const projectId = parseInt(req.params.id);
  const project = projects.find(p => p.id === projectId);
  if (!project) {
    return res.status(404).json({ error: "Project not found" });
  }
  res.json(project);
});

// POST Contact Form Endpoint with Input Validation
app.post(
  '/api/contact',
  [
    body('name').trim().notEmpty().withMessage('Name is required.'),
    body('email').isEmail().withMessage('Valid email address is required.'),
    body('message').trim().notEmpty().withMessage('Message content is required.')
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }

    const { name, email, message } = req.body;
    const newMessage = { id: Date.now(), name, email, message, timestamp: new Date() };
    messages.push(newMessage);

    console.log("New message received:", newMessage);
    res.status(201).json({ message: "Thank you! Your message has been received." });
  }
);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
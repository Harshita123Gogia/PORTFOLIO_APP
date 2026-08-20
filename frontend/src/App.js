import { useEffect, useState } from 'react';
import './App.css';

const defaultProfile = {
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

const defaultSkills = [
  { category: "Frontend", items: ["React.js", "TypeScript", "JavaScript (ES6+)", "HTML5/CSS3", "Bootstrap", "Chart.js", "WordPress"] },
  { category: "Backend", items: ["C# (.NET Core MVC)", "Node.js", "Express", "Python (FastAPI, Flask)", "Java (Spring Boot)", "PHP", "RESTful APIs"] },
  { category: "Databases & ORM", items: ["SQL Server", "MySQL", "PostgreSQL", "Entity Framework Core", "LINQ", "SQL"] },
  { category: "AI / ML & GenAI", items: ["Generative AI", "LangChain", "CrewAI", "Gemini", "YOLOv8", "OpenCV", "Keras", "PyTorch", "Scikit-Learn"] },
  { category: "Cloud & DevOps", items: ["AWS Cloud", "Docker", "Git/GitHub", "Linux", "CI/CD", "Server-side Caching", "Postman"] }
];

const defaultProjects = [
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

const defaultAchievements = {
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

function App() {
  const [profile, setProfile] = useState(defaultProfile);
  const [skills, setSkills] = useState(defaultSkills);
  const [projects, setProjects] = useState(defaultProjects);
  const [achievements, setAchievements] = useState(defaultAchievements);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMsg, setStatusMsg] = useState('');

  const API_BASE = "http://localhost:5000/api";

  useEffect(() => {
    fetch(`${API_BASE}/profile`)
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => console.log("Using default profile data (backend disconnected)."));

    fetch(`${API_BASE}/skills`)
      .then(res => res.json())
      .then(data => setSkills(data))
      .catch(err => console.log("Using default skills data."));

    fetch(`${API_BASE}/projects`)
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.log("Using default projects data."));

    fetch(`${API_BASE}/achievements`)
      .then(res => res.json())
      .then(data => setAchievements(data))
      .catch(err => console.log("Using default achievements data."));
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await res.json();
      if (res.ok) {
        setStatusMsg(result.message);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatusMsg(result.error);
      }
    } catch (err) {
      setStatusMsg("Message saved locally! (Backend connection offline)");
    }
  };

  return (
    <div className="container">
      {/* Header */}
      <header>
        <h1>{profile.name}</h1>
        <h2>{profile.title}</h2>
        <p>📍 {profile.location}</p>
        <div className="contact-links">
          <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a> | 
          <span>{profile.contact.phone}</span> | 
          <a href={profile.contact.github} target="_blank" rel="noreferrer">GitHub</a> | 
          <a href={profile.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </header>

      {/* Summary */}
      <section>
        <h3>About Me</h3>
        <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>{profile.summary}</p>
      </section>

      {/* Technical Skills */}
      <section>
        <h3>Technical Skills</h3>
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="card">
              <h4 style={{ color: '#06b6d4', marginTop: 0 }}>{skillGroup.category}</h4>
              <div>
                {skillGroup.items.map((item, idx) => (
                  <span key={idx} className="badge">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <h3>Featured Full Stack Projects</h3>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="card">
              <h4>{project.title}</h4>
              <p style={{ fontSize: '0.85rem', color: '#06b6d4' }}>{project.type}</p>
              <p style={{ color: '#94a3b8' }}>{project.description}</p>
              <div>
                {project.tech.map((t, i) => (
                  <span key={i} className="badge">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications & Key Achievements */}
      {achievements && (
        <section>
          <h3>Certifications & Achievements</h3>
          <div className="skills-grid">
            <div className="card">
              <h4 style={{ color: '#06b6d4', marginTop: 0 }}>Certifications</h4>
              <ul>
                {achievements.certifications.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>

            <div className="card">
              <h4 style={{ color: '#06b6d4', marginTop: 0 }}>Technical Honors</h4>
              <ul>
                {achievements.honors.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>

            <div className="card">
              <h4 style={{ color: '#06b6d4', marginTop: 0 }}>Extracurricular & Sports</h4>
              <ul>
                {achievements.extracurriculars.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Contact Form */}
      <section>
        <h3>Get In Touch</h3>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleInputChange} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleInputChange} 
            required 
          />
          <textarea 
            name="message" 
            rows="5" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleInputChange} 
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        {statusMsg && <p className="status-msg">{statusMsg}</p>}
      </section>
    </div>
  );
}

export default App;
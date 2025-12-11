import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMessageCircle,
  FiArrowDown,
  FiCpu,
  FiCamera,
  FiLayers,
  FiZap,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import profileImg from "./assets/deependra-profile.jpg";

const EMAIL = "deependrasingh756@gmail.com";
const PHONE = "9079971805"; // local format
const WHATSAPP_NUMBER = "919079971805"; // with country code 91

const App = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const [theme, setTheme] = useState("dark");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("AI for Manufacturing Project – Free Guidance");
    const body = encodeURIComponent(
      `Hi Deependra,\n\n` +
        `My name is ${form.name || "[Your Name]"} from ${
          form.company || "[Company / Organization]"
        }.\n\n` +
        `I’m looking for guidance on:\n${form.message || "[Describe your project]"}\n\n` +
        `You can reach me at ${form.email || "[Your email / phone]"}.`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Deependra, I found your AI for Manufacturing page and I need help with:\n${
        form.message || "[Briefly describe your problem]"
      }`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`app ${theme}`}>
      {/* NAVBAR */}
      <header className="nav">
        <div className="nav-left">
          <span className="logo-mark">DS</span>
          <span className="logo-text">Deependra Singh</span>
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#expertise">Expertise</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav-right">
          <button
            className="theme-toggle icon-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
          <button
            className="nav-cta"
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Free Guidance
          </button>
        </div>
      </header>

      {/* HERO */}
      <main className="main">
        <section className="hero">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="badge">AI • Computer Vision • NLP • Chatbots</p>
            <h1>
              AI Expert for <span className="highlight">Manufacturing</span> —
              with Free Project Guidance.
            </h1>
            <p className="hero-subtitle">
              I design practical AI solutions for factories: computer vision,
              NLP, and intelligent chatbots. If you‘re building something in
              manufacturing, I’ll help you for free with ideas, architecture,
              and prompts.
            </p>

            <div className="hero-actions">
              <button
                className="btn primary"
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Let’s discuss your project
              </button>
              <button className="btn ghost" onClick={openWhatsApp}>
                <FiMessageCircle />
                Chat on WhatsApp
              </button>
            </div>

            <div className="hero-meta">
              <div className="meta-item">
                <FiCamera />
                <span>Computer Vision in Manufacturing</span>
              </div>
              <div className="meta-item">
                <FiCpu />
                <span>NLP & Intelligent Chatbots</span>
              </div>
              <div className="meta-item">
                <FiLayers />
                <span>Industrial Automation • PLC/SCADA</span>
              </div>
            </div>

            <button
              className="scroll-down"
              onClick={() =>
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <FiArrowDown />
            </button>
          </motion.div>

          <motion.div
            className="hero-photo-wrap"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="hero-glow" />
            <div className="hero-photo-card">
              <img src={profileImg} alt="Deependra Singh" className="hero-img" />
              <div className="hero-tag">
                <span>Prompt Engineering</span>
                <span>AI for Manufacturing</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <h2>Who am I?</h2>
          <p className="section-intro">
            I’m Deependra Singh — an AI & industrial data science professional
            focused on using AI to make manufacturing smarter, more reliable,
            and more profitable.
          </p>

          <div className="about-grid">
            <div className="about-card">
              <h3>Education</h3>
              <ul>
                <li>
                  <strong>PGD in Computational Data Science</strong> — ISSC,
                  Bangalore
                </li>
                <li>
                  <strong>B.Tech, NIFTEM</strong> (National Institute of Food
                  Technology Entrepreneurship and Management, MoFPI)
                </li>
                <li>
                  <strong>PGD in Food Safety & Quality Management</strong>
                </li>
                <li>
                  <strong>PGD in Industrial Automation</strong> (PLC & SCADA)
                </li>
              </ul>
            </div>

            <div className="about-card">
              <h3>What I Love Building</h3>
              <ul>
                <li>Quality inspection systems using computer vision</li>
                <li>
                  NLP & chatbot workflows that guide operators and engineers
                </li>
                <li>
                  AI copilots that sit on top of manufacturing data & SOPs
                </li>
                <li>Bridges between PLC/SCADA and modern AI systems</li>
              </ul>
            </div>

            <div className="about-card">
              <h3>How I Work With You</h3>
              <ul>
                <li>Quick understanding call or WhatsApp chat</li>
                <li>Free guidance on architecture, models & prompts</li>
                <li>Clear next steps tailored to your plant & constraints</li>
                <li>
                  Optional deeper engagement if you want implementation support
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* EXPERIENCE & PURPOSE */}
        <section id="experience" className="section experience-section">
          <h2>Experience & Purpose</h2>
          <p className="section-intro">
            I have 9+ years of hands-on experience across plants, processes, and
            products — combining AI, manufacturing, and business thinking. My
            journey covers multiple companies, functions, and domains, all
            leading towards one goal: contributing something big to Indian
            manufacturing.
          </p>

          <div className="experience-grid">
            <div className="experience-column">
              <div className="experience-card">
                <h3>Where I&apos;ve Worked</h3>
                <ul className="experience-list">
                  <li>
                    <strong>Barmalt India</strong> – Process optimisation &
                    quality insights.
                  </li>
                  <li>
                    <strong>APIT Machinery Pvt. Ltd.</strong> – AI/ML R&amp;D,
                    computer vision for rice processing, digital transformation.
                  </li>
                  <li>
                    <strong>Jaipur Dairy</strong> – Quality, safety and
                    process improvement.
                  </li>
                  <li>
                    <strong>Multiple Rice Mill Plants</strong> – On-ground work
                    in rice mills across India, building & validating solutions
                    in real production lines.
                  </li>
                </ul>
              </div>

              <div className="experience-card">
                <h3>Domains I&apos;ve Worked In</h3>
                <ul className="experience-list compact">
                  <li>Technical process & plant operations</li>
                  <li>Quality control & food safety</li>
                  <li>Marketing & branding for industrial products</li>
                  <li>Research & development (R&amp;D)</li>
                  <li>Industrial automation with PLC & SCADA</li>
                  <li>AI / ML – computer vision, NLP, predictive models</li>
                  <li>
                    End-to-end digital transformation for factories and
                    manufacturing businesses
                  </li>
                </ul>
              </div>
            </div>

            <div className="experience-column">
              <div className="purpose-card">
                <h3>My Purpose</h3>
                <p>
                  The purpose of my life is to <strong>contribute something
                  meaningful and large to Indian manufacturing</strong> — in
                  terms of efficiency, quality, and long-term competitiveness.
                </p>
                <p>
                  I want to use AI, automation, and intelligent software to help
                  plants:
                </p>
                <ul className="experience-list compact">
                  <li>Reduce losses and variability</li>
                  <li>Improve quality and consistency</li>
                  <li>Make operators&apos; lives easier with AI copilots</li>
                  <li>Bring global-level best practices into Indian factories</li>
                </ul>
                <p>
                  I believe <strong>life is a learning journey</strong>. Every
                  plant visit, every failure, and every new model I train adds
                  to that learning. My goal is to keep growing, keep sharing,
                  and keep building solutions that genuinely help people on the
                  shop floor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section id="expertise" className="section alt">
          <h2>Technical Focus</h2>
          <p className="section-intro">
            I mix domain understanding in food & manufacturing with modern AI
            tooling, MLOps, and industrial automation.
          </p>

          <div className="expertise-grid">
            <div className="expertise-card">
              <h3>Computer Vision</h3>
              <p>
                Defect detection, counting systems, posture & activity analysis,
                and visual inspection lines.
              </p>
              <p className="chips">
                YOLO • Mask R-CNN • OpenCV • ONNX • Jetson
              </p>
            </div>
            <div className="expertise-card">
              <h3>NLP & Chatbots</h3>
              <p>
                SOP assistants, troubleshooting bots, and custom chat workflows
                for operators and managers.
              </p>
              <p className="chips">
                LLMs • Prompt Engineering • RAG • LangChain
              </p>
            </div>
            <div className="expertise-card">
              <h3>Industrial Automation</h3>
              <p>
                Connecting AI outputs to PLC/SCADA logic and real-time process
                control.
              </p>
              <p className="chips">PLC • SCADA • MQTT • IIoT</p>
            </div>
            <div className="expertise-card">
              <h3>End-to-End Guidance (Free)</h3>
              <p>
                Idea validation, feasibility check, tech stack selection, and
                roadmap for your plant’s AI journey.
              </p>
              <p className="chips">
                Architecture • Roadmapping • Feasibility
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES / PROCESS */}
        <section id="services" className="section">
          <h2>How I Can Help Your Project</h2>
          <p className="section-intro">
            Whether you’re just exploring or already have data, I can guide you
            through the AI journey for manufacturing.
          </p>

          <div className="process-grid">
            <div className="process-step">
              <span className="step-number">1</span>
              <h3>Understand Your Use Case</h3>
              <p>
                Quick call or WhatsApp chat to understand your product, line,
                and constraints.
              </p>
            </div>
            <div className="process-step">
              <span className="step-number">2</span>
              <h3>Design the Solution</h3>
              <p>
                High-level architecture: models, data flow, hardware, and
                operator interaction.
              </p>
            </div>
            <div className="process-step">
              <span className="step-number">3</span>
              <h3>Prompt & Model Strategy</h3>
              <p>
                Detailed prompt engineering, model selection, and integration
                approach (vision + NLP).
              </p>
            </div>
            <div className="process-step">
              <span className="step-number">4</span>
              <h3>Roadmap & Next Steps</h3>
              <p>
                Clear roadmap you can share with your team or vendors — completely
                free guidance.
              </p>
            </div>
          </div>

          <div className="process-cta">
            <FiZap />
            <span>
              Share your idea — I’ll help you shape it into a concrete, realistic AI
              project for your factory.
            </span>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section alt">
          <h2>Let’s Talk About Your Manufacturing Project</h2>
          <p className="section-intro">
            Send a short note about what you’re trying to build. I’ll get back
            with ideas, architecture suggestions, and prompts you can start
            using immediately.
          </p>

          <div className="contact-grid">
            <form className="contact-form" onSubmit={handleEmailSubmit}>
              <div className="field-row">
                <div className="field">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <label>Company / Organisation</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Where you work"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="field">
                <label>Project / Problem Description</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell me about your manufacturing use case, current challenges, and what you want AI to do."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-actions">
                <button type="submit" className="btn primary wide">
                  <FiMail />
                  Send Email
                </button>
                <button
                  type="button"
                  className="btn ghost wide"
                  onClick={openWhatsApp}
                >
                  <FiMessageCircle />
                  Continue on WhatsApp
                </button>
              </div>
            </form>

            <div className="contact-card">
              <h3>Direct Contact</h3>
              <p>
                Prefer to reach out directly? Use any of these channels and
                mention that you saw this website.
              </p>

              <div className="contact-lines">
                <div className="contact-line">
                  <FiMail />
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </div>
                <div className="contact-line">
                  <FiPhone />
                  <a href={`tel:+91${PHONE}`}>+91 {PHONE}</a>
                </div>
                <div className="contact-line">
                  <FiMessageCircle />
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp: +91 {PHONE}
                  </a>
                </div>
              </div>

              <p className="contact-note">
                I’m based in India (Bangalore), but happy to help teams anywhere
                in the world.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <span>© {new Date().getFullYear()} Deependra Singh.</span>
        <span>AI • Computer Vision • NLP • Prompt Engineering for Manufacturing.</span>
      </footer>
    </div>
  );
};

export default App;

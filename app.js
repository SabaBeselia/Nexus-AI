// Advanced AI System with Enhanced Functionality
class NEXUSAI {
  constructor() {
    this.responses = {
      greetings: [
        "Hello! I'm NEXUS AI, your premium intelligence partner. I excel in complex problem-solving, strategic analysis, and innovative solutions. How can I assist you today?",
        "Greetings! I'm equipped with cutting-edge AI capabilities including predictive modeling, natural language understanding, and creative reasoning. What challenge shall we tackle?",
        "Welcome to NEXUS AI! I'm your advanced artificial intelligence companion, ready to help with everything from data analysis to strategic planning. What's your objective?",
        "Hi there! As your AI partner, I can handle complex reasoning, generate insights, and provide intelligent solutions across multiple domains. How can I help you achieve your goals?",
      ],
      technical: [
        "I can assist with advanced technical analysis, algorithm optimization, system architecture design, and complex software engineering challenges.",
        "My neural networks are trained on extensive technical datasets. I excel at debugging, code optimization, architecture planning, and implementing best practices.",
        "I specialize in technical problem-solving, from machine learning implementations to distributed systems design and performance optimization.",
        "I can help with technical documentation, code review, system integration, and provide insights on emerging technologies and methodologies.",
      ],
      creative: [
        "I can generate innovative solutions, creative design concepts, content strategies, and artistic inspiration using advanced generative AI models.",
        "My creative algorithms combine analytical thinking with artistic vision to deliver unique, innovative, and impactful creative solutions.",
        "I excel at brainstorming, conceptual design, storytelling, and creating engaging content across multiple mediums and formats.",
        "I can assist with creative strategy, brand development, visual concepts, and innovative approaches to complex creative challenges.",
      ],
      business: [
        "I provide strategic business intelligence, market analysis, competitive research, operational optimization, and growth forecasting with high accuracy.",
        "My business analytics capabilities include trend analysis, financial modeling, risk assessment, and strategic planning for sustainable growth.",
        "I can analyze market dynamics, identify opportunities, optimize business processes, and recommend data-driven strategies for competitive advantage.",
        "I excel at business case development, ROI analysis, stakeholder assessment, and creating actionable insights for executive decision-making.",
      ],
      science: [
        "I can assist with advanced scientific research, statistical analysis, hypothesis testing, experimental design, and research methodology across multiple disciplines.",
        "My scientific capabilities span data modeling, literature analysis, research synthesis, and generating novel insights from complex datasets.",
        "I excel at processing scientific literature, identifying research gaps, suggesting methodologies, and providing insights on cutting-edge developments.",
        "I can help with research planning, data interpretation, statistical validation, and translating complex scientific concepts into actionable knowledge.",
      ],
      ai_meta: [
        "As an advanced AI system, I continuously learn and adapt, utilizing neural networks, machine learning, and natural language processing to provide intelligent responses.",
        "I leverage sophisticated algorithms including transformer models, attention mechanisms, and deep learning to understand context and generate relevant insights.",
        "My architecture combines multiple AI techniques including reinforcement learning, transfer learning, and ensemble methods for optimal performance.",
        "I'm built on cutting-edge AI foundations with capabilities in reasoning, pattern recognition, knowledge synthesis, and intelligent decision support.",
      ],
      default: [
        "That's a fascinating inquiry! I'm analyzing multiple approaches using advanced reasoning algorithms to provide you with comprehensive insights.",
        "Excellent question! I'm processing this through various AI frameworks including predictive modeling and pattern analysis to deliver optimal results.",
        "I find that topic intellectually stimulating! Let me apply advanced neural processing to generate valuable insights and actionable recommendations.",
        "Intriguing challenge! I'm leveraging machine learning algorithms and knowledge synthesis to provide you with detailed analysis and strategic insights.",
      ],
    };

    this.context = [];
    this.userProfile = {
      preferences: [],
      expertise: "general",
      interaction_style: "professional",
    };

    this.init();
  }

  init() {
    this.createParticleSystem();
    this.initThemeToggle();
    this.initMobileMenu();
    this.initScrollAnimations();
    this.initNavigation();
    this.updateAnalytics();

    // Start periodic updates
    setInterval(() => this.updateAnalytics(), 10000);
    setInterval(() => this.updateParticles(), 5000);
  }

  createParticleSystem() {
    const container = document.getElementById("particleContainer");
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = `particle type-${Math.floor(Math.random() * 3) + 1}`;
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 20 + "s";
      particle.style.animationDuration = 15 + Math.random() * 10 + "s";
      container.appendChild(particle);
    }
  }

  updateParticles() {
    const particles = document.querySelectorAll(".particle");
    particles.forEach((particle) => {
      particle.style.left = Math.random() * 100 + "%";
    });
  }

  initThemeToggle() {
    const toggle = document.getElementById("themeToggle");
    const currentTheme = localStorage.getItem("theme") || "light";

    document.documentElement.setAttribute("data-theme", currentTheme);

    toggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const newTheme = current === "dark" ? "light" : "dark";

      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);

      // Add smooth transition effect
      document.body.style.transition = "all 0.3s ease";
      setTimeout(() => {
        document.body.style.transition = "";
      }, 300);
    });
  }

  initMobileMenu() {
    const toggle = document.getElementById("mobileToggle");
    const menu = document.getElementById("mobileMenu");

    toggle.addEventListener("click", () => {
      toggle.classList.toggle("active");
      menu.classList.toggle("active");
    });

    // Close menu when clicking on links
    document.querySelectorAll(".mobile-nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        toggle.classList.remove("active");
        menu.classList.remove("active");
      });
    });
  }

  initScrollAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in-up").forEach((el) => {
      observer.observe(el);
    });

    // Header scroll effect
    window.addEventListener("scroll", () => {
      const header = document.getElementById("header");
      if (window.scrollY > 100) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    });
  }

  initNavigation() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));
        if (target) {
          // Update active nav link
          document
            .querySelectorAll(".nav-link")
            .forEach((link) => link.classList.remove("active"));
          anchor.classList.add("active");

          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });

    // Update active nav on scroll
    window.addEventListener("scroll", () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll(".nav-link");

      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    });
  }

  sendMessage() {
    const input = document.getElementById("messageInput");
    const message = input.value.trim();

    if (!message) return;

    this.addMessage(message, "user");
    input.value = "";

    // Add to context
    this.context.push({
      type: "user",
      message: message,
      timestamp: Date.now(),
    });

    this.showTyping();

    setTimeout(() => {
      this.hideTyping();
      const response = this.generateIntelligentResponse(message);
      this.addMessage(response, "ai");

      this.context.push({
        type: "ai",
        message: response,
        timestamp: Date.now(),
      });
      this.updateAnalytics();
    }, 2000 + Math.random() * 1500);
  }

  generateIntelligentResponse(input) {
    const lowerInput = input.toLowerCase();

    // Advanced pattern matching with context awareness
    if (
      lowerInput.includes("hello") ||
      lowerInput.includes("hi") ||
      lowerInput.includes("hey") ||
      lowerInput.includes("greetings")
    ) {
      return this.getRandomResponse("greetings");
    } else if (
      lowerInput.includes("ai") ||
      lowerInput.includes("artificial intelligence") ||
      lowerInput.includes("machine learning")
    ) {
      return this.getRandomResponse("ai_meta");
    } else if (
      lowerInput.includes("code") ||
      lowerInput.includes("programming") ||
      lowerInput.includes("algorithm") ||
      lowerInput.includes("software")
    ) {
      return this.getRandomResponse("technical");
    } else if (
      lowerInput.includes("design") ||
      lowerInput.includes("creative") ||
      lowerInput.includes("art") ||
      lowerInput.includes("innovation")
    ) {
      return this.getRandomResponse("creative");
    } else if (
      lowerInput.includes("business") ||
      lowerInput.includes("strategy") ||
      lowerInput.includes("market") ||
      lowerInput.includes("revenue")
    ) {
      return this.getRandomResponse("business");
    } else if (
      lowerInput.includes("research") ||
      lowerInput.includes("science") ||
      lowerInput.includes("data") ||
      lowerInput.includes("analysis")
    ) {
      return this.getRandomResponse("science");
    } else if (lowerInput.includes("time")) {
      return `Current system time: ${new Date().toLocaleTimeString()} | Status: All neural networks operational | Performance: Optimal`;
    } else if (lowerInput.includes("weather")) {
      const conditions = [
        "sunny and clear",
        "partly cloudy",
        "overcast",
        "light rain",
        "clear skies",
      ];
      const temp = Math.floor(Math.random() * 25) + 10;
      return `AI Weather Analysis: ${
        conditions[Math.floor(Math.random() * conditions.length)]
      }, ${temp}°C | Prediction confidence: ${
        88 + Math.floor(Math.random() * 10)
      }% | Data source: Advanced meteorological models`;
    } else if (
      lowerInput.includes("predict") ||
      lowerInput.includes("forecast") ||
      lowerInput.includes("future")
    ) {
      return `Based on current data patterns and advanced machine learning analysis, I'm processing predictions with ${
        92 + Math.floor(Math.random() * 6)
      }% confidence. My predictive models utilize ensemble methods and deep learning for maximum accuracy. What specific forecasting domain interests you?`;
    } else if (
      lowerInput.includes("help") ||
      lowerInput.includes("assist") ||
      lowerInput.includes("support")
    ) {
      return "I'm here to provide comprehensive assistance across multiple domains. I can help with technical challenges, creative projects, business strategy, research analysis, and complex problem-solving. My capabilities include natural language understanding, predictive modeling, and intelligent reasoning. What specific area would you like to explore?";
    } else {
      return this.getRandomResponse("default");
    }
  }

  getRandomResponse(category) {
    const responses = this.responses[category];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  addMessage(text, sender) {
    const messagesContainer = document.getElementById("chatMessages");
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${sender}-message`;

    if (sender === "ai") {
      messageDiv.innerHTML = `<i class="fas fa-robot" style="margin-right: 0.5rem; color: var(--accent-primary);"></i>${text}`;
    } else {
      messageDiv.textContent = text;
    }

    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  showTyping() {
    const messagesContainer = document.getElementById("chatMessages");
    const typingDiv = document.createElement("div");
    typingDiv.className = "message ai-message";
    typingDiv.id = "typingIndicator";
    typingDiv.innerHTML =
      '<i class="fas fa-robot" style="margin-right: 0.5rem; color: var(--accent-primary);"></i><span class="loading"></span> AI processing your request...';
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  hideTyping() {
    const typing = document.getElementById("typingIndicator");
    if (typing) typing.remove();
  }

  updateAnalytics() {
    const stats = {
      aiQueries: () => Math.floor(Math.random() * 1000) + 287000,
      users: () => Math.floor(Math.random() * 500) + 35000,
      models: () => Math.floor(Math.random() * 5) + 67,
      accuracy: () => (99.5 + Math.random() * 0.4).toFixed(1) + "%",
      uptime: () => (99.7 + Math.random() * 0.2).toFixed(1) + "%",
      speed: () => (0.1 + Math.random() * 0.2).toFixed(1) + "s",
    };

    Object.keys(stats).forEach((stat) => {
      const element = document.getElementById(stat);
      if (element) {
        const value = stats[stat]();
        this.animateCounter(element, value);
      }
    });
  }

  animateCounter(element, targetValue) {
    const isNumeric = !isNaN(parseFloat(targetValue));
    if (isNumeric) {
      const target = parseFloat(targetValue);
      const current = parseFloat(element.textContent) || 0;
      const increment = (target - current) / 20;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const value = current + increment * step;

        if (step >= 20) {
          element.textContent = targetValue;
          clearInterval(timer);
        } else {
          element.textContent = Math.floor(value).toLocaleString();
        }
      }, 50);
    } else {
      element.textContent = targetValue;
    }
  }
}

// Enhanced AI Tools Functions
function generateDesign() {
  const designs = [
    {
      name: "Quantum Gradient",
      colors: ["#667eea", "#764ba2", "#f093fb", "#f5576c"],
      style: "Futuristic, multi-dimensional flow",
      trend: "Emerging 2024",
    },
    {
      name: "Neural Network",
      colors: ["#4facfe", "#00f2fe", "#43e97b", "#38f9d7"],
      style: "AI-inspired, dynamic connectivity",
      trend: "Tech Innovation",
    },
    {
      name: "Biotech Harmony",
      colors: ["#11998e", "#38ef7d", "#2E8B57", "#20B2AA"],
      style: "Organic, sustainable aesthetics",
      trend: "Eco-Tech Fusion",
    },
    {
      name: "Luxe Precision",
      colors: ["#f7971e", "#ffd200", "#1e3c72", "#2a5298"],
      style: "Premium, ultra-refined finish",
      trend: "Luxury Digital",
    },
  ];

  const design = designs[Math.floor(Math.random() * designs.length)];
  const colorPalette = design.colors
    .map(
      (color) =>
        `<div style="display: inline-block; width: 25px; height: 25px; background: ${color}; margin: 3px; border-radius: 6px; border: 1px solid var(--border-light); box-shadow: var(--shadow-light);"></div>`
    )
    .join("");

  document.getElementById("designResult").innerHTML = `
                <div style="text-align: left;">
                    <strong style="color: var(--accent-primary);">${design.name}</strong><br>
                    <div style="margin: 10px 0;">${colorPalette}</div>
                    <em style="color: var(--text-secondary);">${design.style}</em><br>
                    <small style="color: var(--accent-tertiary);">Trend: ${design.trend}</small>
                </div>
            `;
}

function analyzeData() {
  const analyses = [
    {
      type: "Trend Analysis",
      result: "Exponential growth pattern detected",
      confidence: 94,
      icon: "📈",
    },
    {
      type: "Pattern Recognition",
      result: "Seasonal cycles identified with high precision",
      confidence: 97,
      icon: "🔍",
    },
    {
      type: "Anomaly Detection",
      result: "5 outliers found, correlation strength: 0.89",
      confidence: 91,
      icon: "⚠️",
    },
    {
      type: "Predictive Model",
      result: "Q4 forecast shows 23% growth potential",
      confidence: 88,
      icon: "🎯",
    },
  ];

  const analysis = analyses[Math.floor(Math.random() * analyses.length)];
  document.getElementById("dataResult").innerHTML = `
                <div style="text-align: left;">
                    <strong style="color: var(--accent-primary);">${
                      analysis.icon
                    } ${analysis.type}</strong><br>
                    <span style="color: var(--text-primary);">${
                      analysis.result
                    }</span><br>
                    <small style="color: var(--accent-success);">Confidence: ${
                      analysis.confidence
                    }% | Processing time: ${(0.1 + Math.random() * 0.3).toFixed(
    2
  )}s</small>
                </div>
            `;
}

function generateCode() {
  const codeExamples = [
    {
      lang: "Python",
      code: `def nexus_ai_optimize(data):\n    model = NeuralNet(layers=[256, 128, 64])\n    return model.predict(data, confidence=0.95)`,
      desc: "Advanced ML Optimization",
      complexity: "Enterprise-grade",
    },
    {
      lang: "JavaScript",
      code: `const aiModel = new NEXUSAI({\n    architecture: 'transformer',\n    layers: 24,\n    attention_heads: 16\n});`,
      desc: "Neural Network Implementation",
      complexity: "Production-ready",
    },
    {
      lang: "Python",
      code: `@ai_enhanced\ndef quantum_analysis(dataset):\n    return QuantumML.process(dataset,\n        algorithm='hybrid_classical_quantum')`,
      desc: "Quantum-Classical Hybrid",
      complexity: "Cutting-edge",
    },
  ];

  const example = codeExamples[Math.floor(Math.random() * codeExamples.length)];
  document.getElementById("codeResult").innerHTML = `
                <div style="text-align: left;">
                    <div style="font-family: 'Courier New', monospace; background: var(--tertiary-bg); color: var(--text-primary); padding: 15px; border-radius: 10px; margin: 8px 0; border-left: 4px solid var(--accent-primary);">
                        <strong style="color: var(--accent-secondary);">${
                          example.lang
                        }</strong><br>
                        ${example.code.replace(/\n/g, "<br>")}
                    </div>
                    <strong style="color: var(--accent-primary);">${
                      example.desc
                    }</strong><br>
                    <small style="color: var(--text-secondary);">${
                      example.complexity
                    } • Auto-generated</small>
                </div>
            `;
}

function processText() {
  const results = [
    {
      analysis: "Sentiment: Highly Positive (94%)",
      details:
        "Tone: Professional | Readability: Advanced | Emotion: Optimistic",
      tech: "BERT-Enhanced NLP",
    },
    {
      analysis: "Language: English (99.8%)",
      details:
        "Entities: 12 detected | Keywords: AI, innovation, technology | Intent: Informational",
      tech: "Transformer Architecture",
    },
    {
      analysis: "Summary: 87% compression achieved",
      details:
        "Key concepts extracted | Semantic density: High | Context preserved",
      tech: "Abstractive Summarization",
    },
    {
      analysis: "Translation: 15 languages available",
      details:
        "Cultural adaptation: Enabled | Confidence: 97% | Localization: Advanced",
      tech: "Neural Machine Translation",
    },
  ];

  const result = results[Math.floor(Math.random() * results.length)];
  document.getElementById("textResult").innerHTML = `
                <div style="text-align: left;">
                    <strong style="color: var(--accent-primary);">🔍 NLP Analysis Complete</strong><br>
                    <span style="color: var(--text-primary);">${result.analysis}</span><br>
                    <em style="color: var(--text-secondary);">${result.details}</em><br>
                    <small style="color: var(--accent-tertiary);">Engine: ${result.tech} | Processing: Real-time</small>
                </div>
            `;
}

function analyzeImage() {
  const analyses = [
    {
      detection: "Objects: 15 detected | People: 3 | Confidence: 96%",
      scene: "Scene: Modern office | Lighting: Natural daylight | Quality: 4K",
      ai: "Vision Transformer v2.0",
    },
    {
      detection: "Faces: 2 detected | Age: 28-35 | Expression: Engaged",
      scene:
        "Content: Business presentation | Setting: Conference room | Mood: Professional",
      ai: "Advanced CNN Pipeline",
    },
    {
      detection: "Text: 8 elements | Signs: 3 | Brands: 2 identified",
      scene: "Environment: Urban landscape | Weather: Clear | Time: Afternoon",
      ai: "Multi-modal Analysis",
    },
  ];

  const analysis = analyses[Math.floor(Math.random() * analyses.length)];
  document.getElementById("visionResult").innerHTML = `
                <div style="text-align: left;">
                    <strong style="color: var(--accent-primary);">👁️ Computer Vision Analysis</strong><br>
                    <span style="color: var(--text-primary);">${
                      analysis.detection
                    }</span><br>
                    <em style="color: var(--text-secondary);">${
                      analysis.scene
                    }</em><br>
                    <small style="color: var(--accent-success);">AI Model: ${
                      analysis.ai
                    } | Processing: ${(0.1 + Math.random() * 0.2).toFixed(
    2
  )}s</small>
                </div>
            `;
}

function makePrediction() {
  const predictions = [
    {
      forecast: "Market Growth: 18% increase expected",
      timeline: "Timeline: Q3-Q4 2024 | Probability: 87%",
      factors: "AI adoption, tech investment surge",
    },
    {
      forecast: "User Engagement: 42% boost predicted",
      timeline: "Timeline: Next 6 months | Probability: 91%",
      factors: "Platform enhancements, UX improvements",
    },
    {
      forecast: "Technology Trend: Quantum computing breakthrough",
      timeline: "Timeline: 2025-2026 | Probability: 73%",
      factors: "Research progress, industry investment",
    },
    {
      forecast: "Performance Optimization: 35% efficiency gain",
      timeline: "Timeline: Next quarter | Probability: 95%",
      factors: "Algorithm updates, infrastructure scaling",
    },
  ];

  const prediction =
    predictions[Math.floor(Math.random() * predictions.length)];
  document.getElementById("predictionResult").innerHTML = `
                <div style="text-align: left;">
                    <strong style="color: var(--accent-primary);">🔮 AI Prediction</strong><br>
                    <span style="color: var(--text-primary);">${prediction.forecast}</span><br>
                    <em style="color: var(--text-secondary);">${prediction.timeline}</em><br>
                    <small style="color: var(--accent-tertiary);">Key factors: ${prediction.factors}</small>
                </div>
            `;
}

function activateAssistant() {
  const tasks = [
    {
      action: "Workflow optimized: 3 processes automated",
      result: "52% time savings achieved | 8 tasks completed",
      status: "Active learning mode",
    },
    {
      action: "Schedule analyzed: 5 conflicts resolved",
      result: "Meeting efficiency +35% | Priority tasks highlighted",
      status: "Predictive scheduling",
    },
    {
      action: "Communication processed: 24 emails prioritized",
      result: "Response suggestions generated | Urgent items flagged",
      status: "Smart filtering",
    },
    {
      action: "Data insights generated: 12 reports automated",
      result: "KPIs updated | Trend analysis complete",
      status: "Continuous monitoring",
    },
  ];

  const task = tasks[Math.floor(Math.random() * tasks.length)];
  document.getElementById("assistantResult").innerHTML = `
                <div style="text-align: left;">
                    <strong style="color: var(--accent-success);">🤖 Assistant Activated</strong><br>
                    <span style="color: var(--text-primary);">${
                      task.action
                    }</span><br>
                    <em style="color: var(--text-secondary);">${
                      task.result
                    }</em><br>
                    <small style="color: var(--accent-primary);">Status: ${
                      task.status
                    } | Tasks completed: ${
    Math.floor(Math.random() * 15) + 25
  }</small>
                </div>
            `;
}

function analyzeSecurity() {
  const scans = [
    {
      status: "Security Score: 98/100 | Threat Level: Minimal",
      details: "Encryption: AES-256 active | Firewall: Advanced AI detection",
      action: "Real-time monitoring enabled",
    },
    {
      status: "Vulnerabilities: 1 low-risk | Status: Auto-patched",
      details: "SSL/TLS: Grade A+ | DDoS protection: Multi-layer",
      action: "Preventive measures deployed",
    },
    {
      status: "Access Control: Zero trust verified | Compliance: 100%",
      details: "Identity verification: Biometric + AI | Audit trail: Complete",
      action: "Continuous assessment active",
    },
    {
      status: "Threat Intelligence: 127 attempts blocked",
      details: "AI behavior analysis: Anomalies detected | Response: Instant",
      action: "Adaptive security learning",
    },
  ];

  const scan = scans[Math.floor(Math.random() * scans.length)];
  document.getElementById("securityResult").innerHTML = `
                <div style="text-align: left;">
                    <strong style="color: var(--accent-success);">🛡️ Security Analysis</strong><br>
                    <span style="color: var(--text-primary);">${scan.status}</span><br>
                    <em style="color: var(--text-secondary);">${scan.details}</em><br>
                    <small style="color: var(--accent-primary);">Action: ${scan.action} | Last scan: Just now</small>
                </div>
            `;
}

function highlightFeature(card) {
  // Remove existing highlights
  document.querySelectorAll(".feature-card").forEach((c) => {
    c.style.transform = "";
    c.style.boxShadow = "";
    c.style.background = "";
  });

  // Highlight selected card
  card.style.transform = "translateY(-20px) scale(1.05)";
  card.style.boxShadow = "var(--shadow-heavy)";
  card.style.background = "var(--glass-medium)";

  // Reset after animation
  setTimeout(() => {
    card.style.transform = "";
    card.style.boxShadow = "";
    card.style.background = "";
  }, 3000);
}

function handleEnter(event) {
  if (event.key === "Enter") {
    nexusAI.sendMessage();
  }
}

function sendMessage() {
  nexusAI.sendMessage();
}

// Initialize NEXUS AI System
const nexusAI = new NEXUSAI();

// Initialize analytics counter animation
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = counter.textContent;
          const isPercentage = target.includes("%");
          const isTime = target.includes("s");

          if (!isPercentage && !isTime) {
            const numericTarget = parseInt(target.replace(/[^\d]/g, ""));
            let count = 0;
            const increment = numericTarget / 100;

            const timer = setInterval(() => {
              count += increment;
              if (count >= numericTarget) {
                counter.textContent = numericTarget.toLocaleString();
                clearInterval(timer);
              } else {
                counter.textContent = Math.floor(count).toLocaleString();
              }
            }, 30);
          }

          observer.unobserve(counter);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

// Initialize when page loads
document.addEventListener("DOMContentLoaded", () => {
  animateCounters();
});

/**
 * Verified Project Data for Abinesh Karthick K
 * Direct reference to verified repositories on https://github.com/Karthick-2307
 * Honest descriptions without fabricated metrics or fake claims.
 */

const VERIFIED_PROJECTS = [
  {
    id: "code-integrity-detector",
    title: "Code Integrity & Plagiarism Detector",
    category: "python",
    categoryLabel: "Python & Algorithms",
    description: "An algorithmic analysis tool developed to inspect source code files, detect syntactic/structural plagiarism, and verify software code integrity using tokenization, structural comparison, and similarity scoring.",
    technologies: ["Python", "Algorithms", "File I/O", "Similarity Matching"],
    githubUrl: "https://github.com/Karthick-2307/Code-Integrity-Plagiarism-Detector",
    liveUrl: null, // No live demo URL deployed yet
    featured: true,
    highlights: [
      "Token-based syntax comparison across source files",
      "Calculates similarity index to identify duplicated logic",
      "Useful for evaluating academic assignments and source originality"
    ]
  },
  {
    id: "hotel-management-app",
    title: "Hotel Management App",
    category: "java",
    categoryLabel: "Java & Database",
    description: "A comprehensive hotel management desktop/enterprise solution handling room booking workflows, customer registration, check-in/checkout processing, automated billing calculations, and relational database persistence.",
    technologies: ["Java", "MySQL", "OOP", "JDBC / Database Design"],
    githubUrl: "https://github.com/Karthick-2307/HotelManagementApp",
    liveUrl: null,
    featured: true,
    highlights: [
      "Modular Object-Oriented Architecture for hotel services",
      "Relational schema for customer records, room availability, and bills",
      "Streamlines hotel reception workflows and transaction logs"
    ]
  },
  {
    id: "lost-found-management",
    title: "Lost & Found Management Portal",
    category: "web",
    categoryLabel: "Web Development",
    description: "A centralized campus/organization web application designed to help users report lost items, list found belongings, search through categorized item databases, and coordinate safe reclamation.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Database / CRUD"],
    githubUrl: "https://github.com/Karthick-2307/LostFoundManagement",
    liveUrl: null,
    featured: true,
    highlights: [
      "Intuitive reporting system with item description and location tags",
      "Category-based filtering to quickly match lost and found reports",
      "Reduces campus administrative overhead for lost property"
    ]
  },
  {
    id: "air-quality-monitoring",
    title: "Air Quality Monitoring & Prediction",
    category: "python",
    categoryLabel: "Python & Machine Learning",
    description: "An environmental analytics and predictive modeling project that processes atmospheric pollution parameters (PM2.5, PM10, CO, NO2) to evaluate Air Quality Index (AQI) patterns and forecast pollution trends.",
    technologies: ["Python", "Data Analysis", "Predictive Modeling", "AQI Analytics"],
    githubUrl: "https://github.com/Karthick-2307/Air-Quality-monitoring-Prediction-",
    liveUrl: null,
    featured: true,
    highlights: [
      "Preprocesses and cleans environmental sensor and pollution datasets",
      "Computes standard Air Quality Index classifications",
      "Provides predictive insights into atmospheric trend variations"
    ]
  }
];

// Export to window for vanilla JS modularity without build tools
window.VERIFIED_PROJECTS = VERIFIED_PROJECTS;

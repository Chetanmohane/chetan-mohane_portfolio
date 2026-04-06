import React, { useState } from 'react';
import './Projects.css';

interface Project {
  title: string;
  description: string;
  tags: string[];
  category: string;
  emoji: string;
  live?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'ArtPeak.shop',
    description: 'Full Stack E-commerce Web Application built with React, Next.js, and Tailwind CSS. Features user authentication, product listings, cart functionality, and admin dashboard. Link = ( Artpeak.shop )',
    tags: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind'],
    category: 'Full Stack',
    emoji: '🎨',
    live: 'https://artpeak.shop',
    featured: true,
  },
  {
    title: 'Tiffin Centre',
    description: 'Responsive live client-based Tiffin Centre project. Built Admin and Customer Dashboards with dynamic UI components and smooth navigation.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Node.js'],
    category: 'Full Stack',
    emoji: '🍱',
    live: 'https://tiffin-annapurna-delight.vercel.app/',
  },
  {
    title: 'DG News Portal',
    description: 'Client-based responsive News portal project with Admin and Customer Dashboards. Ensured high performance, clean code, and scalability.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Node.js'],
    category: 'Frontend',
    emoji: '📰',
    live: 'https://dg-news-project.vercel.app/',
  },
  {
    title: 'School Website',
    description: 'Client-based secondary/higher secondary school project with interactive UI, smooth navigation and optimized performance.',
    tags: ['Next.js', 'React', 'JavaScript', 'CSS'],
    category: 'Frontend',
    emoji: '🎓',
    live: 'https://schoolwebsite-lovat.vercel.app/',
  },
  {
    title: 'Live Cricket Platform',
    description: 'Real-time cricket streaming platform with live score updates and Socket.io integration for instant data delivery.',
    tags: ['React', 'TypeScript', 'Socket.io', 'Node.js'],
    category: 'Full Stack',
    emoji: '🏏',
    live: 'https://cricket-streaming-website.vercel.app',
  },
];

const categories = ['All', 'Full Stack', 'E-Commerce', 'Frontend'];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A collection of real-world projects I've built and shipped.
          </p>
        </div>

        <div className="category-tabs">
          {categories.map(cat => (
            <button
              key={cat}
              id={`project-tab-${cat.toLowerCase().replace(' ', '-')}`}
              className={`cat-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project) => (
            <div key={project.title} className={`project-card glass-card ${project.featured ? 'featured' : ''}`}>
              {project.featured && (
                <div className="featured-badge">⭐ Featured</div>
              )}

              <div className="project-emoji">{project.emoji}</div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="project-actions">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link live full-width" id={`live-${project.title.replace(/\s+/g, '-').toLowerCase()}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

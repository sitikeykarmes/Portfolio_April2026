// ===== PORTFOLIO CONSTANTS =====
// Fill in your details here — imported by all sections

export const PERSONAL = {
  name: 'Your Name',
  title: 'Full Stack Developer',
  tagline: 'Building beautiful things for the web.',
  email: 'you@email.com',
  location: 'Your City, Country',
}

export const SOCIAL = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername',
}

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const PROJECT_CATEGORY_COLORS = {
  'AI / LLMs': 'bg-violet-500/15 text-violet-300 border-violet-500/20',
  'ML / DL':   'bg-blue-500/15 text-blue-300 border-blue-500/20',
  'Web Dev':   'bg-emerald-500/15 text-emerald-300 border-emerald-500/20',
  'App Dev':   'bg-orange-500/15 text-orange-300 border-orange-500/20',
}

export const PROJECTS = [
  {
    id: 1,
    title: 'Project Consensus: Multi User Multi AI Chat Platform',
    description:
      "A multi-user AI workspace where multiple AI agents act as human participants in an Agent Arsenal. Orchestrates three reasoning modes:\n• Independent (Brainstorming)\n• Support (Verification)\n• Opposition (Debate)\nThen runs all transcripts through a Master Synthesis Engine to deliver a single, verified and hallucination-free response.",
    tags: ['Python', 'LLMs', 'React', 'FastAPI'],
    category: 'AI / LLMs',
    github: 'https://github.com/sitikeykarmes/Project-Consensus',
    live: 'https://project-consensus-tau.vercel.app/',
  },
  {
    id: 2,
    title: 'AI-Powered Real Time No-Parking Zone Enforcement System',
    description:
      'A React Native mobile application that detects illegal parking in no-parking zones in real-time. Features include live violation alerts for administrators, detailed history logs with vehicle IDs, and multi-zone management. The backend is powered by a custom computer vision pipeline using YOLO, CNNs, and OpenCV.',
    tags: ['Python', 'TensorFlow/Keras', 'OpenCV', 'YOLO', 'React Native', 'FastAPI'],
    category: 'ML / DL',
    github: 'https://github.com/sitikeykarmes/AI-Powered-Real-Time-No-Parking-Zone-Enforcement-System',
    live: '#',
  },
  {
    id: 3,
    title: 'LLM-Powered Intelligent Query Retrieval System',
    description:
      'An intelligent RAG system that processes PDF and DOCX documents to answer questions based on their content. Built with a FastAPI backend, it features intelligent text chunking, FAISS vector search, semantic embeddings via Sentence Transformers, and LLM generation via OpenRouter.',
    tags: ['Python', 'FastAPI', 'FAISS', 'Sentence Transformers', 'LLMs'],
    category: 'AI / LLMs',
    github: 'https://github.com/sitikeykarmes/LLM-Powered-Intelligent-Query-Retrieval-System-HackRX-6.0-Local-',
    live: 'https://sitikeykarmes-hackrx-document-query.hf.space/',
  }
]


// ======= EDIT EVERYTHING HERE: links, resume path, skills, projects, certificates =======
export const config = {
  name: 'Urwashi Dhawas',
  monogram: 'UD',
  email: 'urwashi@gmail.com',            // TODO: replace
  linkedin: 'https://www.linkedin.com/search/results/people/?keywords=Urwashi%20Dhawas', // TODO: replace with your profile link (linkedin.com/in/...)
  github: 'https://github.com/urwashidhawas2608-cloud',  // TODO: replace
  resume: '/resume.pdf',                       // put file in /public/resume.pdf
  photo: '/profile.jpg',                       // put file in /public/profile.jpg
}

export const education = {
  degree: 'B.Tech in Computer Science Engineering (Data Science)',
  school: 'Symbiosis Institute of Technology, Nagpur',
  status: '3rd-year student',
}

export const roles = ['Data Science Enthusiast', 'Python Developer', 'Aspiring Data Analyst', 'Data Visualization Enthusiast']

export const highlights = [
  { title: 'Data-Driven Problem Solving', text: 'Cleaning, exploring and visualising datasets to find what the data actually says.' },
  { title: 'AI-Powered Applications', text: 'Building tools where machine learning and language models solve a real user problem.' },
  { title: 'Research and Innovation', text: 'Studying deep learning architectures and testing ideas through careful experiments.' },
]

export const skills = [
  { cat: 'Programming', icon: 'code', items: ['Python', 'SQL', 'JavaScript'] },
  { cat: 'Data Science and Analytics', icon: 'db', items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Exploratory Data Analysis', 'Data Cleaning', 'Data Visualization'] },
  { cat: 'AI and Machine Learning', icon: 'brain', items: ['Machine Learning Fundamentals', 'CNN Architectures', 'Transformer Architectures', 'Generative AI Fundamentals', 'Image Restoration Research'] },
  { cat: 'Tools and Platforms', icon: 'tool', items: ['Jupyter Notebook', 'Google Colab', 'Git and GitHub', 'MySQL', 'Power BI'] },
]

export type Project = {
  id: string; title: string; category: string; filter: string; status: string; summary: string
  problem: string; contribution: string; features: string[]; stack: string[]; learnings: string
}
export const projects: Project[] = [
  {
    id: 'noise', title: 'Noise Pollution Monitoring System', category: 'Environmental Technology | Data Analytics', filter: 'Data Analytics', status: 'Presented at ICACEBD-25 (June 2025)',
    summary: 'A technology-driven project focused on monitoring noise pollution and presenting environmental sound-level information in a useful format.',
    problem: 'Noise pollution is hard to act on when sound levels are not measured and presented clearly.',
    contribution: 'Worked on the project and co-presented the paper at ICACEBD-25, covering how sound-level data is collected, analysed and presented in a clear, usable format.',
    features: ['Sound-level monitoring workflow', 'Data collection approach', 'Analysis of recorded levels', 'Potential uses: urban planning, campuses, public spaces', 'Paper presented at ICACEBD-25 international conference'],
    stack: ['Sound-level Monitoring', 'Data Collection', 'Data Analysis'], learnings: 'Learned how environmental data is collected and turned into information people can act on, and how to present technical work at an international conference.',
  },
  {
    id: 'marathi', title: 'Vernacular Grammarly Marathi', category: 'NLP | AI | Educational Technology', filter: 'NLP', status: 'Project',
    summary: 'An AI-powered Marathi grammar assistance and learning platform designed to help students improve Marathi spelling, grammar, and sentence construction.',
    problem: 'Students writing in Marathi have few tools that check spelling, matra and gender-verb agreement.',
    contribution: 'Worked on the frontend: building the user interface with HTML, CSS and JavaScript, including the Marathi text input and the screens for grammar suggestions and exercises.',
    features: ['Grammar and spelling correction', 'Matra and gender-verb agreement help', 'Marathi text input and keyboard support', 'Sentence pronunciation', 'Sandhi splitting', 'Grammar exercises and learning progress'],
    stack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'Sarvam AI API'], learnings: 'Learned how to design a clean, usable interface for Marathi text and how a frontend connects to a backend and an AI API.',
  },
  {
    id: 'forensic', title: 'Hybrid CNN–Transformer for Forensic Image Restoration', category: 'Deep Learning | Computer Vision | Research', filter: 'Research', status: 'Ongoing research – proposed framework',
    summary: 'A research-oriented project investigating the combination of Convolutional Neural Networks and Transformer architectures for restoring degraded forensic images.',
    problem: 'CCTV and surveillance images can suffer from noise, blur, low resolution and compression artifacts, making key details hard to interpret.',
    contribution: 'Studying CNN and Transformer architectures and working on the proposed hybrid framework for restoring degraded forensic images.',
    features: ['CNN-based local feature extraction', 'Transformer-based global context modelling', 'Hybrid feature integration', 'Restoration evaluation (planned)', 'Care to avoid misleading artificial detail'],
    stack: ['Python', 'CNN', 'Transformer'], learnings: 'No experimental results are claimed yet. So far the work has been about understanding how CNNs and Transformers complement each other and how to avoid inventing detail during restoration.',
  },
]

export const experience = [
  { org: 'Maincrafts Technology', role: 'Data Science & Data Analytics Intern (Python)', date: '20 May 2026 – 20 June 2026', text: 'Internship focused on Python, data analysis, exploratory data analysis, data visualization and practical dataset-based tasks. Worked on practical dataset-based tasks using Python.' },
  { org: 'ServiceNow University × SmartBridge', role: 'Virtual Internship Program (certificate of completion)', date: 'Issued 29 May 2026', text: 'Completed the ServiceNow Virtual Internship Program: ServiceNow fundamentals, Micro Certification, Agentic AI, Flows, Automated Test Framework essentials, Administration fundamentals and CSA exam preparation.' },
]

// Add a new certificate: copy its image to public/certs/ and add one line here.
export const certs = [
  { title: 'Data Structures and Algorithms using Python – Part 1', org: 'Infosys Springboard', type: 'Course completion certificate', date: 'Completed Oct 29, 2025 (issued Nov 7, 2025)', id: 'Verify via QR on certificate', image: '/certs/infosys-dsa.jpg', link: '' },
  { title: 'Network Automation with Red Hat Ansible Automation Platform (DO457)', org: 'Red Hat', type: 'Certificate of attendance', date: 'September 19, 2026', id: '32 credit hours', image: '/certs/redhat-network-automation.png', link: 'https://www.credly.com/badges/af1589c2-aa5d-4817-9814-9359e4ebb7fe' },
  { title: 'Virtual Internship Program', org: 'ServiceNow University × SmartBridge (AICTE)', type: 'Certificate of completion', date: 'Issued May 29, 2026', id: 'Certificate ID: SNU2023905', image: '/certs/servicenow-virtual-internship.jpg', link: '' },
  { title: 'Introduction to Generative AI Studio', org: 'Google Cloud course via Simplilearn SkillUP', type: 'Declaration of completion', date: '23 December 2025', id: 'Certificate code: 9628716', image: '/certs/google-genai.jpg', link: '' },
  { title: 'Data Science & Data Analytics Using Python', org: 'Maincrafts Technology', type: 'Certificate of internship', date: '20 May 2026 – 20 June 2026', id: 'Intern ID: MT4402', image: '/certs/maincrafts-internship.jpg', link: '' },
  { title: 'Paper presentation: Noise Pollution Monitoring System', org: 'ICACEBD-25, G H Raisoni College of Engineering and Management, Nagpur', type: 'Certificate of participation', date: '5–6 June 2025', id: '', image: '/certs/icacebd-25.jpg', link: '' },
]

export const conference = {
  name: '3rd International Conference on Advanced Communication, Energy and Big Data (ICACEBD-25)',
  host: 'G H Raisoni College of Engineering and Management, Nagpur', dates: '5–6 June 2025',
  paper: 'Noise Pollution Monitoring System', image: '/certs/icacebd-25.jpg',
}

export const research = {
  title: 'Hybrid CNN and Transformer Framework for Image Restoration for Forensic Images',
  status: 'Ongoing research. No experimental results have been produced or claimed yet.',
  blocks: [
    ['Motivation', 'Forensic images from CCTV are often degraded. Better restoration could help examiners see what a camera captured.'],
    ['Problem statement', 'Restore noisy, blurred, low-resolution and compressed images without inventing details that were never in the scene.'],
    ['CNN vs Transformer', 'CNNs capture local texture and edges efficiently. Transformers model long-range context across the whole image. Each is weak where the other is strong.'],
    ['Proposed architecture', 'A CNN branch extracts local features, a Transformer branch models global context, and a fusion stage combines both before reconstruction.'],
    ['Potential applications', 'Surveillance review and digital forensics, where any output must be treated as an aid and not as proof.'],
  ] as [string, string][],
  // Standard background literature. Keep only the ones you have actually read.
  references: [
    'Vaswani et al., "Attention Is All You Need", NeurIPS, 2017.',
    'Dosovitskiy et al., "An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale", ICLR, 2021.',
    'Ronneberger, Fischer, Brox, "U-Net: Convolutional Networks for Biomedical Image Segmentation", MICCAI, 2015.',
    'Zhang et al., "Beyond a Gaussian Denoiser: Residual Learning of Deep CNN for Image Denoising" (DnCNN), IEEE TIP, 2017.',
    'Dong, Loy, He, Tang, "Image Super-Resolution Using Deep Convolutional Networks" (SRCNN), IEEE TPAMI, 2016.',
    'Liang et al., "SwinIR: Image Restoration Using Swin Transformer", ICCV Workshops, 2021.',
    'Zamir et al., "Restormer: Efficient Transformer for High-Resolution Image Restoration", CVPR, 2022.',
  ],
}

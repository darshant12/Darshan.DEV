# Project Report: Personal Portfolio Website Development

**Prepared By:** Darshan T Kamati
**Domain:** Artificial Intelligence & Machine Learning / Full-Stack Web Development
**Project Type:** Frontend Web Development

---

## 1. Abstract
This project report outlines the design, development, and deployment of a fully responsive Personal Portfolio Website. The objective was to create a centralized, professional online presence to showcase technical skills, educational background, and significant projects. The website is built entirely from scratch using fundamental web technologies—HTML5, CSS3, and JavaScript—without reliance on heavy front-end frameworks, ensuring maximum performance and full control over the user interface.

## 2. Objective
The primary goal was to design a modern, interactive, and responsive portfolio that acts as a live resume. Key objectives included:
- Demonstrating proficiency in frontend web development.
- Integrating a sleek "Glassmorphism" UI and dark-mode aesthetic.
- Showcasing key projects (VoiceIQ, Online Voting Platform, Smart Civic Connect, Smart Krishi) with active links.
- Implementing an active contact form that forwards submissions directly to an email address without a dedicated backend server.

## 3. Technology Stack
- **HTML5:** Used for the semantic structure and layout of the website.
- **CSS3:** Leveraged for styling, including CSS Flexbox and Grid for responsive design, custom animations, and UI aesthetics.
- **JavaScript (ES6):** Used for DOM manipulation, scroll-triggered reveal animations, and handling asynchronous form submissions.
- **FormSubmit API:** Utilized to process contact form submissions securely via AJAX, sending responses directly to a verified email address.
- **Git & GitHub:** Used for version control and source code management.

## 4. System Architecture & Design
### 4.1. Responsive Layout Strategy
The website utilizes a mobile-first approach. CSS media queries are implemented to ensure that grids (such as the Project Showcase and Skills list) adapt gracefully across devices—collapsing into single columns on mobile devices and expanding to multi-column grids on desktops.

### 4.2. User Interface (UI) Aesthetics
The visual identity of the portfolio relies heavily on:
- **Dark Theme:** A deep background color (`#0a192f`) contrasted with bright neon highlights (`#64ffda`) to reduce eye strain and provide a modern tech feel.
- **Glassmorphism:** Semi-transparent, blurred backgrounds for project cards and navigation bars to create a sense of depth.

## 5. Implementation Details
### 5.1. Dynamic Scroll Animations
To enhance user engagement, the `IntersectionObserver` API in JavaScript was used. It monitors when specific elements (like project cards) enter the user's viewport and dynamically adds CSS classes to trigger smooth fade-in and slide-up animations.

### 5.2. Asynchronous Contact Form
The contact section allows recruiters and peers to send messages directly to my inbox (`darshantkamati@gmail.com`). This was implemented using the FormSubmit endpoint. JavaScript `fetch()` handles the POST request in the background, preventing page reloads and displaying a success message upon completion.

### 5.3. Project Integrations
Each project card was built to include:
- A custom, AI-generated cover image illustrating the project domain.
- A concise description of the architecture and results.
- Tags detailing the specific tech stack used (e.g., Python, Flask, HTML/CSS).
- Direct call-to-action buttons for the "Live Demo" and "GitHub Repository".

## 6. Outcomes and Results
The project was successfully completed and versioned on GitHub. The resulting website is highly performant, visually striking, and successfully serves its purpose as a digital resume. 

- **Performance:** Achieved fast load times due to the absence of bloated frameworks.
- **Accessibility:** Semantic HTML ensures screen readers can navigate the content.
- **Usability:** The sticky navigation and clear layout provide an intuitive user experience.

## 7. Conclusion
Developing this portfolio strengthened my foundational skills in HTML, CSS, and JavaScript. It provided practical experience in UI/UX design, responsive layouts, API integration (FormSubmit), and version control. This live portfolio now acts as a professional anchor for my career as I seek opportunities in AI/ML and Software Engineering.

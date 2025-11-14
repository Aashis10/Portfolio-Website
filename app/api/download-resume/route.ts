export async function GET() {
  const resumeContent = `AASHISH BHUSAL
Full-Stack Web Developer | Nepal | aashishbhusal50@gmail.com
GitHub: Aashis10 | LinkedIn: aashish-bhusal | Portfolio: aashishbhusal.tech

PROFESSIONAL SUMMARY
Full-Stack Web Developer with strong expertise in Next.js, React, Tailwind CSS, JavaScript, PHP, and MySQL, Java, Python, Django, SpringBoot. Skilled in designing, developing, and maintaining web applications that are responsive, user-friendly, and high-performance. Passionate about building solutions that enhance user engagement and business outcomes.

SKILLS
Frontend: HTML5, CSS3, Tailwind CSS, React, Next.js, JavaScript, JSX, TypeScript
Backend: PHP, Node.js, Firebase, MySQL, Springboot, Django
Tools & Platforms: GitHub, Vercel, VS Code, Postman
Other: Responsive Design, UI/UX, SEO Optimization, Performance Optimization

EDUCATION
Bachelor's in Management & Information Technology (Hybrid) – Oxford College, Butwal, Nepal

PROJECTS
1. StockPilot Web App
Built a stock monitoring web application with real-time data using Next.js, Firebase, and Tailwind CSS.
Implemented user authentication, portfolio tracking, and dynamic charts.
Achieved <100ms update latency and handles 500+ concurrent users.

2. Portfolio Website – aashishbhusal.tech
Personal portfolio showcasing skills, projects, and contact form.
Optimized for SEO, responsive design, and performance with 95+ Lighthouse score.

3. Social Feed App (Prototype)
Developed a social media feed interface with like, comment, and media upload features.
Implemented real-time interactions with <50ms response time.

EXPERIENCE
Freelance Web Developer – Nepal (2021 - Present)
Built 15+ responsive websites for clients using modern web technologies.
Delivered projects from concept to deployment with 98% client satisfaction rate.

ACHIEVEMENTS & CERTIFICATIONS
GitHub Education verified
Contributed to open-source projects on GitHub
Consistently building personal projects and improving full-stack skills

LANGUAGES
English – Professional
Nepali – Native

CONTACT
Email: aashishbhusal50@gmail.com
GitHub: Aashis10
LinkedIn: aashish-bhusal
Instagram: @aashishbhusal7`

  const encoder = new TextEncoder()
  const data = encoder.encode(resumeContent)

  return new Response(data, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": "attachment; filename=Aashish-Bhusal-Resume.txt",
    },
  })
}

'use client';

import React from 'react';
import { Mail, Github, Linkedin, ExternalLink, Code, Sparkles, CheckCircle2, GraduationCap } from 'lucide-react';

const data = {"id":"port_1786834418982","title":"PROFESSIONAL SUMMARY — Professional Portfolio","slug":"professional-summary-portfolio","isPublished":true,"createdAt":"2026-08-15T22:53:38.982Z","updatedAt":"2026-08-15T22:54:13.668Z","personal":{"name":"PROFESSIONAL SUMMARY","title":"Computer Science & Engineering Developer","email":"","location":"Global","tagline":"Computer Science & Engineering Developer Portfolio","socials":{"github":"","linkedin":""}},"about":{"summary":"PROFESSIONAL SUMMARY is a dedicated Computer Science & Engineering Developer focused on building robust applications, solving complex algorithmic problems, and writing clean, scalable code.","highlights":["Demonstrated expertise in software engineering and software design","Proven track record of delivering technical solutions and projects","Strong analytical problem-solving and algorithmic skills"],"openToWork":true},"skills":[{"id":"sk_lang","category":"Languages & Core Stack","skills":["Python","Javascript","Html","Css","Sql"]},{"id":"sk_fw","category":"Frameworks & Libraries","skills":["React","Node.js","Express.js","Bootstrap"]},{"id":"sk_tools","category":"Tools, Databases & Infrastructure","skills":["Git","Github","Docker","VS Code","Postman","Mysql","Mongodb"]}],"experience":[],"projects":[{"id":"proj_1","name":"CERTIFICATIONS & ACHIEVEMENTS","description":"CERTIFICATIONS & ACHIEVEMENTS","technologies":[],"features":[],"featured":true},{"id":"proj_2","name":"Microsoft Azure Fundamentals (AZ-900) – 957/1000","description":"Microsoft Azure Fundamentals (AZ-900) – 957/1000","technologies":[],"features":[],"featured":true},{"id":"proj_3","name":"Cognizance Hackathon – IIT Roorkee (Selected)","description":"Cognizance Hackathon – IIT Roorkee (Selected)","technologies":[],"features":[],"featured":true},{"id":"proj_4","name":"Infosys Springboard Virtual Internship 7.0 (Ongoing)","description":"Infosys Springboard Virtual Internship 7.0 (Ongoing)","technologies":[],"features":[],"featured":true},{"id":"proj_5","name":"Business Analytics with Excel","description":"Business Analytics with Excel","technologies":[],"features":[],"featured":true},{"id":"proj_6","name":"Active LeetCode Problem Solver","description":"Active LeetCode Problem Solver","technologies":[],"features":[],"featured":true}],"education":[{"id":"edu_1","institution":"GLA University, MathuraB.Tech – Artificial Intelligence & Machine Learning (2025–2029) | CGPA: 7.0/10","degree":"GLA University, MathuraB.Tech – Artificial Intelligence & Machine Learning (2025–2029) | CGPA: 7.0/10","field":"Engineering / Technology","startDate":"2022","endDate":"2026","gpa":"","current":true}],"certifications":[],"achievements":[],"customization":{"theme":"animated-elastic-cards","primaryColor":"#0c8ee9","accentColor":"#8b5cf6","fontFamily":"inter","borderRadius":"lg","animationsEnabled":true,"animationIntensity":"normal"},"sectionVisibility":{"about":true,"skills":true,"experience":false,"projects":true,"education":true,"certifications":false,"achievements":false,"contact":true},"userId":"0e48f8f5-f8b4-4c36-b08d-24de570bbbd2"};

export default function PortfolioHome() {
  const { personal, about, projects, skills, education } = data;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-6 sm:p-12 relative overflow-hidden">
      <div className="fixed top-0 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <main className="max-w-4xl mx-auto space-y-16 relative z-10">
        {/* Header Hero */}
        <section className="p-8 bg-slate-900 border border-slate-800 rounded-3xl space-y-6 shadow-2xl">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800">
              {personal.title}
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">{personal.name}</h1>
            <p className="text-sm text-slate-300 leading-relaxed font-light">{about.summary}</p>
          </div>

          <div className="flex flex-wrap gap-4 text-xs font-semibold">
            {personal.email && (
              <a href={`mailto:${personal.email}`} className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl flex items-center gap-1.5 shadow-md">
                <Mail className="w-4 h-4" /> Contact
              </a>
            )}
            {personal.socials.github && (
              <a href={personal.socials.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl border border-slate-700 flex items-center gap-1.5">
                <Github className="w-4 h-4" /> GitHub
              </a>
            )}
            {personal.socials.linkedin && (
              <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl border border-slate-700 flex items-center gap-1.5">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            )}
          </div>
        </section>

        {/* Projects */}
        {projects && projects.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Code className="w-5 h-5 text-cyan-400" /> Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((proj: any) => (
                <div key={proj.id} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-3">
                  <h3 className="font-bold text-white text-base">{proj.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{proj.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.technologies.map((t: string, idx: number) => (
                      <span key={idx} className="text-[10px] bg-cyan-950 text-cyan-300 font-mono px-2.5 py-0.5 rounded border border-cyan-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {skills && skills.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" /> Skills & Ecosystem
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skills.map((cat: any) => (
                <div key={cat.id} className="p-5 bg-slate-900 border border-slate-800 rounded-2xl space-y-2">
                  <h3 className="text-xs font-bold text-purple-400 uppercase font-mono">{cat.category}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s: string, idx: number) => (
                      <span key={idx} className="text-xs bg-slate-800 text-slate-200 px-2.5 py-1 rounded border border-slate-700 font-mono">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="max-w-4xl mx-auto py-8 text-center text-xs text-slate-500 border-t border-slate-900 mt-16 font-mono">
        © {new Date().getFullYear()} {personal.name}. Powered by Portify AI.
      </footer>
    </div>
  );
}

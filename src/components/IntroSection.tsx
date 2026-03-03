import { motion } from 'motion/react';
import Typewriter from './Typewriter';
import { personalInfo } from '../data';

export default function IntroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 py-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Left Column: Profile & Basic Info */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-12">
          
          {/* 3D Circular Photo Frame (Neumorphism style) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-56 h-56 rounded-full bg-[#f5f2ed] shadow-[12px_12px_24px_#d1cec9,-12px_-12px_24px_#ffffff] flex items-center justify-center p-3"
          >
            <div className="w-full h-full rounded-full overflow-hidden shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]">
              <img 
                src="https://picsum.photos/seed/portrait/400/400" 
                alt="Portrait" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              />
            </div>
          </motion.div>
          
          <div className="text-center lg:text-left w-full">
            <h1 className="text-5xl font-serif mb-3 text-[#1a1a1a] tracking-tight">{personalInfo.name}</h1>
            <p className="text-zinc-500 uppercase tracking-widest text-sm font-medium">{personalInfo.title}</p>
          </div>

          {/* Basic Info - Strictly Aligned */}
          <div className="w-full border-t border-zinc-200 pt-8 space-y-4">
            <InfoRow label="性别" value={personalInfo.basicInfo.gender} />
            <InfoRow label="出生日期" value={personalInfo.basicInfo.birthDate} />
            <InfoRow label="学历" value={personalInfo.basicInfo.education} />
            <InfoRow label="工龄" value={personalInfo.basicInfo.experience} />
          </div>

          {/* Software Skills */}
          <div className="w-full border-t border-zinc-200 pt-8">
            <h3 className="text-sm font-serif text-zinc-500 uppercase tracking-widest mb-6">软件技能 / Skills</h3>
            <div className="space-y-3">
              {personalInfo.skills.map((skill, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-sm text-[#1a1a1a] font-medium">{skill.name}</span>
                  <div className="flex gap-1.5">
                    {[...Array(5)].map((_, j) => (
                      <div 
                        key={j} 
                        className={`w-2 h-2 rounded-full ${j < skill.level ? 'bg-[#1a1a1a]' : 'bg-zinc-300'}`} 
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="lg:col-span-8 space-y-20">
          
          {/* Self Evaluation */}
          <div className="space-y-6">
            <h2 className="text-xl font-serif text-[#1a1a1a] flex items-center gap-4">
              <span className="w-8 h-[1px] bg-zinc-400"></span>
              自我评价 / Profile
            </h2>
            <div className="text-base leading-loose text-zinc-600 text-justify">
              <Typewriter text={personalInfo.selfEvaluation} speed={0.02} />
            </div>
          </div>

          {/* Education */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-xl font-serif text-[#1a1a1a] flex items-center gap-4">
              <span className="w-8 h-[1px] bg-zinc-400"></span>
              教育经历 / Education
            </h2>
            <div className="border-l border-zinc-200 ml-4 pl-8 space-y-10">
              {personalInfo.education.map((edu, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-8 items-baseline relative">
                  <div className="absolute -left-[37px] top-2 w-2 h-2 rounded-full bg-zinc-300 ring-4 ring-[#f5f2ed]"></div>
                  <p className="text-sm text-zinc-500 font-mono tracking-tight">{edu.period}</p>
                  <div>
                    <p className="font-medium text-[#1a1a1a] text-lg">{edu.school}</p>
                    <p className="text-sm text-zinc-500 mt-1">{edu.major}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Work Experience */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-xl font-serif text-[#1a1a1a] flex items-center gap-4">
              <span className="w-8 h-[1px] bg-zinc-400"></span>
              工作经历 / Experience
            </h2>
            <div className="border-l border-zinc-200 ml-4 pl-8 space-y-10">
              {personalInfo.workExperience.map((work, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-8 items-baseline relative">
                  <div className="absolute -left-[37px] top-2 w-2 h-2 rounded-full bg-zinc-300 ring-4 ring-[#f5f2ed]"></div>
                  <p className="text-sm text-zinc-500 font-mono tracking-tight">{work.period}</p>
                  <div>
                    <p className="font-medium text-[#1a1a1a] text-lg">{work.company}</p>
                    <p className="text-sm text-zinc-600 mt-1">{work.role}</p>
                    <p className="text-xs text-zinc-400 mt-3 leading-relaxed max-w-xl">{work.projects}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, value }: { label: string, value: string | number }) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-zinc-200/50 last:border-0">
      <span className="text-zinc-500 text-sm tracking-widest">{label}</span>
      <span className="text-[#1a1a1a] font-medium text-sm">{value}</span>
    </div>
  );
}

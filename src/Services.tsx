// export default function Services()
// {
//     return(
//         <div class="w-full px-6 md:px-20 py-12 bg-white text-gray-800">
//         <br />
//         {/* TECH STACK */}
// <div>
//   <h2 className="text-2xl font-bold text-center mb-10">
//     Our Tech Stack
//   </h2>

//   <div className="grid md:grid-cols-3 gap-6">

//     {/* Frontend */}
//     <div className="p-6 bg-gray-900 text-white rounded-2xl text-center
//                     transition-all duration-300
//                     ease-[cubic-bezier(0.175,0.885,0.32,1.1)]
//                     hover:-translate-y-3 hover:scale-105 hover:shadow-2xl">

//       <div className="text-4xl mb-3">🎨</div>
//       <h3 className="text-xl font-semibold mb-2">Frontend</h3>

//       <div className="flex flex-wrap justify-center gap-2 mt-3">
//         {["React", "JavaScript", "Html/Css", "Typescript", "Vue.js"].map((tech, i) => (
//           <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm">
//             {tech}
//           </span>
//         ))}
//       </div>
//     </div>

//     {/* Backend */}
//     <div className="p-6 bg-gray-900 text-white rounded-2xl text-center
//                     transition-all duration-300
//                     ease-[cubic-bezier(0.175,0.885,0.32,1.1)]
//                     hover:-translate-y-3 hover:scale-105 hover:shadow-2xl">

//       <div className="text-4xl mb-3">⚙️</div>
//       <h3 className="text-xl font-semibold mb-2">Backend</h3>

//       <div className="flex flex-wrap justify-center gap-2 mt-3">
//         {["Node.js", "Java", "Python", "Next.js"].map((tech, i) => (
//           <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm">
//             {tech}
//           </span>
//         ))}
//       </div>
//     </div>

//     {/* Database */}
//     <div className="p-6 bg-gray-900 text-white rounded-2xl text-center
//                     transition-all duration-300
//                     ease-[cubic-bezier(0.175,0.885,0.32,1.1)]
//                     hover:-translate-y-3 hover:scale-105 hover:shadow-2xl">

//       <div className="text-4xl mb-3">🗄️</div>
//       <h3 className="text-xl font-semibold mb-2">Database</h3>

//       <div className="flex flex-wrap justify-center gap-2 mt-3">
//         {["MongoDB", "MySQL", "Firebase"].map((tech, i) => (
//           <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm">
//             {tech}
//           </span>
//         ))}
//       </div>
//     </div>

//   </div>
// </div>

// </div>
// );
// }
import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      desc: "Creating high-performance, responsive, and modern websites tailored to your brand’s unique identity.",
    },
    {
      title: "Custom Software Solutions",
      desc: "Tailor-made software built to solve complex business problems and streamline your internal operations.",
    },
    {
      title: "API Integration",
      desc: "Seamlessly connecting your platforms with third-party services to ensure data flow and functional harmony.",
    },
    {
      title: "Maintenance & Support",
      desc: "Proactive monitoring, bug fixing, and continuous optimization to keep your digital assets running flawlessly.",
    }
  ];

  const techStack = {
    "Frontend": [ "JavaScript","CSS", "TypeScript",  "Tailwind", " HTML ", "React"],
    "Backend": ["Node.js", "Java", "C#"],
    "Database": ["MongoDB", "Oracle", "Firebase"]
  };

  return (
    <div className="min-h-screen bg-aventus-navy py-24 px-6 md:px-16 text-aventus-silver">
      {/* Services Section */}
      <div className="max-w-4xl mb-20">
        <h1 className="text-5xl font-extrabold mb-6">Our Services</h1>
        <p className="text-xl text-gray-400">
          We provide comprehensive technical solutions designed to scale your business.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-24">
        {services.map((s, i) => (
          <div key={i} className="p-8 rounded-3xl border border-white/5 bg-white/5 hover:border-aventus-accent/50 transition-all">
            <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
            <p className="text-gray-400">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Tech Stack Section */}
      {/* Tech Stack Section with Cards */}
<div className="border-t border-white/10 pt-20">
  <h2 className="text-4xl font-bold mb-12 text-center">Our Tech Stack</h2>
  <div className="grid md:grid-cols-3 gap-8">
    {Object.entries(techStack).map(([category, techs]) => (
      <div 
        key={category} 
        className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-aventus-accent transition-all group"
      >
        <h4 className="text-aventus-accent font-bold uppercase tracking-widest mb-6">
          {category}
        </h4>
        <div className="flex flex-wrap gap-3">
          {techs.map(t => (
            <span 
              key={t} 
              className="px-4 py-2 bg-aventus-navy border border-white/10 rounded-full text-sm text-gray-300 group-hover:border-aventus-accent/50 transition"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>

</div>  );
};

export default Services;
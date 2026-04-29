import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
        "Frontend": ["JavaScript", "CSS", "TypeScript", "Tailwind", " HTML ", "React"],
        "Backend": ["Node.js", "Java", "C#"],
        "Database": ["MongoDB", "Oracle", "Firebase"]
    };
    return (_jsxs("div", { className: "min-h-screen bg-aventus-navy py-24 px-6 md:px-16 text-aventus-silver", children: [_jsxs("div", { className: "max-w-4xl mb-20", children: [_jsx("h1", { className: "text-5xl font-extrabold mb-6", children: "Our Services" }), _jsx("p", { className: "text-xl text-gray-400", children: "We provide comprehensive technical solutions designed to scale your business." })] }), _jsx("div", { className: "grid md:grid-cols-2 gap-8 mb-24", children: services.map((s, i) => (_jsxs("div", { className: "p-8 rounded-3xl border border-white/5 bg-white/5 hover:border-aventus-accent/50 transition-all", children: [_jsx("h3", { className: "text-2xl font-bold mb-4", children: s.title }), _jsx("p", { className: "text-gray-400", children: s.desc })] }, i))) }), _jsxs("div", { className: "border-t border-white/10 pt-20", children: [_jsx("h2", { className: "text-4xl font-bold mb-12 text-center", children: "Our Tech Stack" }), _jsx("div", { className: "grid md:grid-cols-3 gap-8", children: Object.entries(techStack).map(([category, techs]) => (_jsxs("div", { className: "bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-aventus-accent transition-all group", children: [_jsx("h4", { className: "text-aventus-accent font-bold uppercase tracking-widest mb-6", children: category }), _jsx("div", { className: "flex flex-wrap gap-3", children: techs.map(t => (_jsx("span", { className: "px-4 py-2 bg-aventus-navy border border-white/10 rounded-full text-sm text-gray-300 group-hover:border-aventus-accent/50 transition", children: t }, t))) })] }, category))) })] })] }));
};
export default Services;

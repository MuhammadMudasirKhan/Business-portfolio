import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            if (result.success) {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", company: "", message: "" });
            }
            else {
                alert("Failed to send message.");
            }
        }
        catch (err) {
            console.error("Submission Error:", err);
            alert("Could not connect to the server.");
        }
        finally {
            setIsLoading(false);
        }
    };
    return (_jsx("section", { className: "bg-slate-900 text-white p-10 md:p-16 rounded-[40px] shadow-2xl", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12", children: [_jsxs("div", { className: "space-y-6", children: [_jsx("h2", { className: "text-4xl font-extrabold", children: "Let's Get In Touch" }), _jsx("p", { className: "text-slate-400 text-lg leading-relaxed", children: "Ready to optimize your factory systems or start a new digital project? Our engineering team is here to help." })] }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsx("input", { name: "name", type: "text", placeholder: "Your Name", className: "w-full bg-slate-800 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500", onChange: handleChange, value: formData.name, required: true }), _jsx("input", { name: "email", type: "email", placeholder: "Your Email", className: "w-full bg-slate-800 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500", onChange: handleChange, value: formData.email, required: true }), _jsx("input", { name: "company", type: "text", placeholder: "Company Name (Optional)", className: "w-full bg-slate-800 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500", onChange: handleChange, value: formData.company }), _jsx("textarea", { name: "message", placeholder: "Tell us about your project details...", className: "w-full bg-slate-800 p-4 rounded-xl h-40 outline-none focus:ring-2 focus:ring-blue-500", onChange: handleChange, value: formData.message, required: true }), _jsx("button", { type: "submit", disabled: isLoading, className: `w-full py-4 rounded-xl font-bold transition-all ${isLoading
                                ? "bg-slate-500 cursor-not-allowed"
                                : "bg-blue-600 hover:bg-blue-500"}`, children: isLoading ? "Sending..." : "Send Inquiry" })] })] }) }));
}

// export default function Home() {
//   return (
//     <div className="max-w-5xl mx-auto p-10 animate-in fade-in duration-700">
//       <h1 className="text-4xl font-black text-slate-900 mb-8">About Our Company</h1>
      
//       {/* SERVICES SECTION */}
//       <section className="mb-16">
//         <h2 className="text-xl font-bold text-blue-600 uppercase tracking-widest mb-6">Our Services</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
//             <h3 className="font-bold text-lg mb-2">Technical Support</h3>
//             <p className="text-sm text-slate-500">24/7 expert assistance for PLC programming and HMI configuration.</p>
//           </div>
//           <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
//             <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
//             <p className="text-sm text-slate-500">Global shipping for VFDs and IGBT modules within 3-5 business days.</p>
//           </div>
//           <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
//             <h3 className="font-bold text-lg mb-2">Quality Warranty</h3>
//             <p className="text-sm text-slate-500">All industrial components come with a 2-year replacement warranty.</p>
//           </div>
//         </div>
//       </section>

//       
//     </div>
//   );
// }


import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-aventus-navy text-aventus-silver font-sans">
      
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center min-h-screen px-6 md:px-16 gap-12">
        
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Aventus Digital — Bridging Vision and Technology
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed">
            We transform your vision into responsive, creative, and professional websites—turning your ideas into powerful digital solutions.
          </p>

          <button
            onClick={() => (window.location.href = "mailto:hello@aventus.com")}
            className="bg-black text-white px-10 py-4 rounded-full font-medium hover:bg-gray-800 transition shadow-lg"
          >
            Get In Touch
          </button>
        </div>

        <div className="md:w-1/2 w-full">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[300px] md:h-[400px] mt-[-3rem]">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Team discussing project ideas"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>

      </section>
    </div>
  );
};

export default Home;
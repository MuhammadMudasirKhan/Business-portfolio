
export default function About() {
  return (
    <div className="w-full px-6 md:px-20 py-12  bg-aventus-navy text-gray-400">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-4xl  text-aventus-silver md:text-5xl font-bold mb-4">
          About Our Company
        </h1>
        <p className="text-xl text-gray-400">
          We are a team of passionate developers and designers building digital
          solutions that make a real impact.
        </p>
      </div>

      {/* MISSION SECTION */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-aventus-silver">
            Turning Ideas Into Reality
          </h2>
          <p className="text-gray-400 text-xl leading-relaxed">
            At our company, our mission is to help businesses grow through
            modern, scalable, and reliable technology. We work closely with
            clients to transform their ideas into powerful digital products.
            <br />
            From planning to deployment, we ensure high-quality, performance
            driven solutions.
          </p>
        </div>

        <div className="bg-gray-100 h-64 rounded-2xl flex items-center justify-center text-gray-400">
          <img src="assets/Aventus.png" alt="image illustration" className="w-135 h-64 rounded-2xl" />
        </div>
      </div>

      {/* APPROACH */}
      {/* <div className="mb-20">
        <h2 className="text-2xl font-bold text-center mb-10">
          Our Approach
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-md rounded-2xl border">
            <h3 className="font-semibold mb-2">Clean Code</h3>
            <p className="text-gray-600 text-sm">
              We write maintainable and scalable code for long-term success.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-2xl border">
            <h3 className="font-semibold mb-2">Smart Solutions</h3>
            <p className="text-gray-600 text-sm">
              We solve real problems using efficient and modern approaches.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-2xl border">
            <h3 className="font-semibold mb-2">User Focus</h3>
            <p className="text-gray-600 text-sm">
              We design with user experience and performance in mind.
            </p>
          </div>
        </div>
      </div> */}
<section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="w-72 p-6 bg-gray-900 text-white rounded-2xl
            transition-all duration-400
            ease-[cubic-bezier(0.175,0.885,0.32,1.1)]
            hover:-translate-y-3 hover:scale-105
            hover:shadow-2xl cursor-pointer">
            <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
            <p className="text-sm text-slate-300">We deliver projects quickly within 5 to 7 days without compromising quality.
           </p>
          </div>
          <div className="w-72 p-6 bg-gray-900 text-white rounded-2xl
            transition-all duration-400
            ease-[cubic-bezier(0.175,0.885,0.32,1.1)]
            hover:-translate-y-3 hover:scale-105
            hover:shadow-2xl cursor-pointer">
            <h3 className="font-bold text-lg mb-2">Smart Solution</h3>
            <p className="text-sm text-slate-300"> We solve real problems using efficient and modern approaches.</p>
          </div>
          <div className="w-72 p-6 bg-gray-900 text-white rounded-2xl
            transition-all duration-400
            ease-[cubic-bezier(0.175,0.885,0.32,1.1)]
            hover:-translate-y-3 hover:scale-105
            hover:shadow-2xl cursor-pointer">
            <h3 className="font-bold text-lg mb-2">User Focus</h3>
            <p className="text-sm text-slate-300">We design with user experience and performance in mind.</p>
          </div>
        </div>
      </section>
    
    </div>
  );
}
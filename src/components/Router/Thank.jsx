import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Thank = () => {
  const navigate = useNavigate();
  const [confetti, setConfetti] = useState([]);
  const [showContent, setShowContent] = useState(false);

  // Generate confetti
  useEffect(() => {
    const particles = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        id: i,
        left: Math.random() * 100 + "%",
        color: ["#f87171", "#fb923c", "#facc15", "#34d399", "#60a5fa"][Math.floor(Math.random() * 5)],
        delay: Math.random() * 1.5 + "s",
        size: Math.random() * 6 + 4 + "px",
      });
    }
    setConfetti(particles);

    // Show main content after intro animation
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden">
      {/* Confetti */}
      {confetti.map((c) => (
        <div
          key={c.id}
          className="absolute rounded-full animate-fall"
          style={{
            left: c.left,
            width: c.size,
            height: c.size,
            backgroundColor: c.color,
            animationDelay: c.delay,
          }}
        />
      ))}

      {/* Main content with intro animation */}
      <div
        className={`flex flex-col items-center justify-center p-6 transition-all duration-1000 ease-out ${
          showContent ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
      >
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6 text-center animate-slideDown">
          🎉 Thank You! For Order
        </h1>
        <p className="text-xl text-gray-700 mb-8 text-center animate-slideDown delay-300">
          Your purchase was successful. We appreciate your business!
        </p>

        {/* GIF */}
        <div className="mb-8 w-full flex justify-center">
          <img
            src="https://camo.githubusercontent.com/8abb191e348168d13ba352c185aa469da55117ff1d85331abf1b799de6e7cad2/68747470733a2f2f6d656469612e74656e6f722e636f6d2f3446305338726d5f74393841414141432f7468616e6b2d796f752d737469636b65722d7468616e6b732d737469636b65722e676966"
            alt="Thank You"
            className="w-full max-w-[410px] h-auto object-contain animate-bounceSlow delay-500"
          />
        </div>

        <button
          onClick={() => navigate("/")}
          className="bg-gradient-to-r from-green-400 to-green-600 hover:to-blue-500 cursor-pointer text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transform transition-all duration-300"
        >
          Continute
        </button>
      </div>

      <style>{`
        @keyframes fall {
          0% { transform: translateY(-50px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        .animate-fall {
          animation: fall 3s linear infinite;
        }

        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounceSlow {
          animation: bounceSlow 2s infinite;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }

        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.8s forwards;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
};

export default Thank;

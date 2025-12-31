import { MessageCircle } from "lucide-react";


const WhatsAppFloating = () => {
  const phoneNumber = "919241499491"; 
  const message =
    "Hi, I’m interested in joining and would like to know more about registration.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Ping animation */}
      <span className="absolute inset-0 rounded-full animate-ping bg-green-500 opacity-30"></span>

      {/* Button */}
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-xl hover:scale-105 transition-transform">
        <MessageCircle className="text-white w-6 h-6" />
      </div>
    </a>
  );
};

export default WhatsAppFloating;

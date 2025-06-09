import React, { useState , useEffect} from 'react';
import { 
  Compass, MessageSquare, Calendar, Image, Mail, Clock, Music, 
  Tv, Radio, Settings, Chrome, Trash2, Plus
} from 'lucide-react';
import DockIcon from './DockIcon';

const SPOTIFY_EMBED_URL = "https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC?utm_source=generator";


  

const photos = [
    {
      id: 1,
      src: "./Public/WhatsApp Image 2025-03-28 at 11.18.17 AM.jpeg",
      title: "20th Birthday",
      date: "Sep 2024"
    },
    {
      id: 2,
      src: "./Public/tr.png",
      title: "Traditional Day",
      date: "April 2024"
    },
    {
      id: 3,
      src: "./Public/Jibhi.png",
      title: "Jibhi",
      date: "May 2024"
    },
    {
      id: 4,
      src: "./Public/WhatsApp Image 2025-06-09 at 4.12.05 PM (1).jpeg",
      title: "Night Out",
      date: "July 2024"
    },
    {
      id: 5,
      src: "./Public/WhatsApp Image 2025-06-09 at 4.12.05 PM (2).jpeg",
      title: "Squad Goals",
      date: "June 2024"
    },
    {
      id: 6,
      src: "./Public/WhatsApp Image 2025-06-09 at 4.12.06 PM.jpeg",
      title: "Peace",
      date: "June 2024"
    }
  ];

 
  
const FAQS = [
  {
    question: "What kind of designer are you?",
    answer: "One who balances precision with playfulness. I’m obsessed with clean, intuitive interfaces but also love throwing in unexpected, quirky details.",
    icon: <span className="absolute -top-2 -right-2 text-pink-400 text-xl">❤️</span>
  },
  {
    question: "What inspires your design style?",
    answer: "A mix of bold visual storytelling and functional simplicity. I’m drawn to unconventional layouts, color theory experiments, and user-centric accessibility.",
    icon: null
  },
  {
    question: "What’s your design process like?",
    answer: "Messy but methodical. I start with rapid ideation, test often, and iterate obsessively. User feedback is my North Star.",
    icon: <span className="absolute -left-5 top-1 text-yellow-400 text-lg">★</span>
  },
  {
    question: "How do you handle creative blocks?",
    answer: "I embrace them as part of the process, seek inspiration from unrelated fields, and take breaks to reset my perspective.",
    icon: null
  },
  {
    question: "Favorite kind of project to work on?",
    answer: "Projects that challenge me to learn something new and have a positive impact on users.",
    icon: <span className="absolute -top-2 -right-2 text-pink-400 text-xl">❤️</span>
  },
  {
    question: "What makes you a good collaborator?",
    answer: "Empathy, open communication, and a willingness to listen and adapt.",
    icon: null
  }
];

type MagazineCarouselProps = {
  photos: typeof photos;
  setSelectedCard: (card: typeof photos[0]) => void;
};

const MagazineCarousel: React.FC<MagazineCarouselProps> = ({ photos, setSelectedCard }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === photos.length - 1 ? 0 : prev + 1));

  // Calculate indices for previous and next photos
  const prevIdx = (current === 0 ? photos.length - 1 : current - 1);
  const nextIdx = (current === photos.length - 1 ? 0 : current + 1);

  return (
    <div className="flex-1 bg-white relative flex items-center justify-center p-2">
      {/* Previous Photo (peek) */}
      <div
        className="absolute left-12 z-0 w-32 h-44 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300"
        style={{
          transform: "rotate(-10deg) scale(0.92) translateY(16px)",
          opacity: 0.7,
          filter: "blur(1px)",
        }}
        onClick={prev}
        tabIndex={0}
      >
        <img
          src={photos[prevIdx].src}
          alt={photos[prevIdx].title}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
      {/* Next Photo (peek) */}
      <div
        className="absolute right-12 z-0 w-32 h-44 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300"
        style={{
          transform: "rotate(10deg) scale(0.92) translateY(16px)",
          opacity: 0.7,
          filter: "blur(1px)",
        }}
        onClick={next}
        tabIndex={0}
      >
        <img
          src={photos[nextIdx].src}
          alt={photos[nextIdx].title}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
      {/* Main (current) Photo */}
      <div
        className="relative z-10 w-40 h-56 rounded-xl overflow-hidden shadow-2xl cursor-pointer transition-transform hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-end"
        onClick={() => setSelectedCard(photos[current])}
        tabIndex={0}
        style={{
          background: "#fff",
        }}
      >
        <img
          src={photos[current].src}
          alt={photos[current].title}
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div
          className="absolute bottom-0 left-0 right-0 text-white text-center px-2 py-2 text-xs"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.0) 100%)"
          }}
        >
          <span className="font-bold">{photos[current].title}</span>
          <span className="ml-2">{photos[current].date}</span>
        </div>
      </div>
      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-2 z-20 bg-gray-100 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center shadow border border-gray-300"
        aria-label="Previous"
        tabIndex={0}
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        &#8592;
      </button>
      <button
        onClick={next}
        className="absolute right-2 z-20 bg-gray-100 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center shadow border border-gray-300"
        aria-label="Next"
        tabIndex={0}
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        &#8594;
      </button>
    </div>
  );
};

const Dock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [showPodcast, setShowPodcast] = useState(false);
  const [selectedCard, setSelectedCard] = useState<typeof photos[0] | null>(null);
  const [showMail, setShowMail] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showMagazine, setShowMagazine] = useState(false);
 

  

  const appIcons = [
    { icon: <Compass size={24} />, name: 'Finder', color: 'bg-blue-500', url: '/' },
    { icon: <img src="./Public/Safari.png" alt="Chrome" className="w-25 h-15 onject-contain "/>, name: 'Safari', color: 'bg-white-400', url: 'https://www.apple.com/in/safari/' },
    { 
      icon: <MessageSquare size={24} />, 
      name: 'Messages', 
      color: 'bg-green-500', 
      onClick: () => {
        setShowMessages((prev) => !prev);
        setOpenFaq(null);
        setShowContact(false);
      }
    },
    { icon: <Mail size={24} />, name: 'Mail', color: 'bg-blue-300', 
    onClick:() => {
      setShowMail((prev) => !prev);
      setShowMessages(false);
      setShowPodcast(false);
      setOpenFaq(null);

    } },
    { icon: <Calendar size={24} />, name: 'Calendar', color: 'bg-red-400',
      onClick:() => {
      setShowCalendar((prev) => !prev);
      setShowMessages(false);
      setShowPodcast(false);
      setOpenFaq(null);}},

    { icon: <Clock size={24} />, name: 'Clock', color: 'bg-gray-600', url: '/clock' },
    { 
      icon: <img src="./Public/immmmage.png"alt="Podcast" className="w-25 h-15 onject-contain"  />, 
      name: 'Photos', 
      color: 'bg-purple-500', 
      onClick: () => {
        setShowMagazine((prev) => !prev);
        setShowMail(false);
        setShowCalendar(false);
        setShowMessages(false);
        setShowPodcast(false);
        setShowContact(false);
      }
    },
    { icon: <Tv size={24} />, name: 'Apple TV', color: 'bg-black', url: '/tv' },
    { 
      icon: <img src="./Public/contact.png" />, 
      name: 'Contact', 
      color: 'bg-white-500', 
      onClick: () => {
        setShowContact((prev) => !prev);
        setShowMessages(false);
        setShowPodcast(false);
      }
    },
    {
      icon: <img src="./Public/spotify.png" alt="Podcast" className="w-15 h-10 onject-contain " />,
      name: 'Spotify',
      color: 'bg-black',
      onClick: () => {
        setShowPodcast((prev) => !prev);
        setShowContact(false);
        setShowMessages(false);
      },
    },
    { icon:<img src="./Public/Settings.png" alt="Settings" className="w-25 h-15 onject-contain " />, name: 'Settings', color: 'bg-gray-300', url: '/' },
    { icon: <img src="./Public/trash.png" alt="Trash" className="w-25 h-15 onject-contain " />, name: 'Trash', color: 'bg-white-100', url: '/' }
  ];
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const ampm = hours >= 12 ? 'PM' : 'AM';

      setCurrentTime(`${formattedHours}:${formattedMinutes} ${ampm}`);
    };

    updateTime(); // Call the function immediately to set the initial time
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);
  return (
    <>
     {/* Mail Preview */}
     {showMail && (

    <div className="fixed bottom-32 left-[35%] z-50">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden w-[350px] h-[320px]">
        <iframe
          src="https://account.microsoft.com/profile/?refd=outlook.live.com"
          title="Mail Draft"
          width="350"
          height="320"
          frameBorder="0"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>)}
    {/* calendar preview */}
     {showCalendar && (

    <div className="fixed bottom-32 right-[8%] z-50">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden w-[350px] h-[320px]">
            <iframe
              src="https://calendar.google.com/calendar/embed?mode=MONTH"
              title="Calendar"
              width="350"
              height="320"
              frameBorder="0"
              className="w-full h-full"
            ></iframe>
          </div>
    </div>)}

      {/* Podcast Preview */}
      {showPodcast && (
        <div className="fixed bottom-32 left-1/2 z-50 -translate-x-1/2">
          <div className="relative">
            <iframe
              src={SPOTIFY_EMBED_URL}
              width="340"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-xl shadow-xl"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      )}

 {/* Messages Preview */}
{showMessages && (
  <div className="fixed bottom-32 left-1/2 -translate-x-1/2 z-50">
    <div className="relative w-[410px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="absolute -top-6 left-4 bg-white rounded-full px-3 py-1 shadow text-black text-sm">
        open me
      </div>
      <div className="p-4 space-y-2 bg-gradient-to-br from-blue-50 to-white
                      max-h-[60vh] overflow-y-auto">
        <div className="text-xs text-gray-500 mb-2">Ayush's FAQ's, {currentTime}</div>

        {FAQS.map((faq, idx) => (
          <div key={idx}>
            <div className="flex items-center space-x-2">
              <div
                className="bg-black text-white rounded-2xl px-4 py-2 text-base font-semibold cursor-pointer transition-all"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                {faq.question} 
              </div>
              <button
                className="ml-2 text-gray-400 hover:text-blue-400 transition"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <Plus size={20} />
              </button>
            </div>

            {openFaq === idx && (
              <div className="flex justify-end mt-1">
                <div className="bg-blue-500 text-white rounded-2xl px-4 py-2 text-base max-w-[80%] shadow">
                  {faq.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
)}

      {/* Contact/Music Preview */}
      {showContact && (
        <div className="fixed bottom-32 left-1/2 z-50 -translate-x-1/2">
          <div className="relative w-[420px] h-[260px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 flex">
            <img
              src="data:image/jpeg;base64,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"
              alt="Old iPhone"
              className="object-contain h-full w-1/3 p-4"
              draggable={false}
            />
            <div className="flex-1 flex flex-col justify-center pl-2 pr-6">
              <div className="font-bold text-2xl text-gray-800 mb-1">Get In Touch</div>
              <div className="text-gray-500 text-sm mb-4">
                Let's build something cool.<br />
                Or just talk design. Either works.
              </div>
              <div className="text-gray-700 text-base mb-1">+91 704 240 5605</div>
              <div className="text-gray-700 text-base mb-1">ayushthakur`124@gmail.com</div>
              <a
                href="https://www.linkedin.com/in/ayush-thakur-542bb4202/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline text-base hover:text-blue-800 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Magazine Preview */}
      {showMagazine && (
        <div className="fixed bottom-32 left-[35%] z-50">
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden w-[350px] h-[320px] flex flex-col">
      {/* Browser Header */}
      <div className="bg-gray-200 h-10 flex items-center px-4 border-b border-gray-300">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex-1 text-center text-gray-600 font-medium text-sm">
          lifedump.photos
        </div>
      </div>
      {/* Carousel */}
      <MagazineCarousel photos={photos} setSelectedCard={setSelectedCard} />
      {/* Modal */}
      {selectedCard && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-lg w-full"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedCard.src}
                alt={selectedCard.title}
                className="w-full h-80 object-cover"
              />
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white text-xl hover:bg-opacity-70 transition-all"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{selectedCard.title}</h2>
              <p className="text-gray-600">{selectedCard.date}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
)}

      {/* Dock */}
      <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
        <div className="inline-flex space-x-4 bg-white bg-opacity-80 backdrop-blur rounded-3xl shadow-lg border border-gray-200 px-6 py-3">
          {appIcons.map((app, index) => (
            <DockIcon 
              key={index} 
              icon={app.icon} 
              name={app.name} 
              color={app.color}
              url={app.url}
              onClick={app.onClick}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dock;
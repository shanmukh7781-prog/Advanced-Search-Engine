import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, Mail, Image, Book, Map, Youtube, ShoppingBag, 
  Video, Music, Store, Tv, BookOpen, Newspaper, 
  Gamepad, Camera, Calendar, Cloud, Briefcase,
  CreditCard, Headphones, Film, BookMarked, Plane,
  Smartphone, Heart, Coffee, Shirt
} from 'lucide-react';

const serviceCategories = {
  popular: [
    {
      name: 'Gmail',
      icon: Mail,
      url: 'https://mail.google.com',
      color: 'text-red-600'
    },
    {
      name: 'Images',
      icon: Image,
      url: 'https://images.google.com',
      color: 'text-blue-600'
    },
    {
      name: 'Wikipedia',
      icon: Book,
      url: 'https://www.wikipedia.org',
      color: 'text-gray-600'
    },
    {
      name: 'Netflix',
      icon: Tv,
      url: 'https://www.netflix.com',
      color: 'text-red-700'
    },
    {
      name: 'Prime',
      icon: Video,
      url: 'https://www.amazon.com/prime',
      color: 'text-blue-500'
    }
  ],
  shopping: [
    {
      name: 'Amazon',
      icon: Store,
      url: 'https://www.amazon.com',
      color: 'text-yellow-600'
    },
    {
      name: 'Flipkart',
      icon: ShoppingBag,
      url: 'https://www.flipkart.com',
      color: 'text-blue-600'
    },
    {
      name: 'eBay',
      icon: CreditCard,
      url: 'https://www.ebay.com',
      color: 'text-red-500'
    },
    {
      name: 'Etsy',
      icon: Heart,
      url: 'https://www.etsy.com',
      color: 'text-orange-500'
    },
    {
      name: 'ASOS',
      icon: Shirt,
      url: 'https://www.asos.com',
      color: 'text-gray-800'
    }
  ],
  entertainment: [
    {
      name: 'Spotify',
      icon: Music,
      url: 'https://www.spotify.com',
      color: 'text-green-600'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://www.youtube.com',
      color: 'text-red-600'
    },
    {
      name: 'Disney+',
      icon: Film,
      url: 'https://www.disneyplus.com',
      color: 'text-blue-700'
    },
    {
      name: 'Twitch',
      icon: Gamepad,
      url: 'https://www.twitch.tv',
      color: 'text-purple-600'
    },
    {
      name: 'HBO Max',
      icon: Tv,
      url: 'https://www.hbomax.com',
      color: 'text-indigo-600'
    }
  ],
  productivity: [
    {
      name: 'Drive',
      icon: Cloud,
      url: 'https://drive.google.com',
      color: 'text-yellow-500'
    },
    {
      name: 'Calendar',
      icon: Calendar,
      url: 'https://calendar.google.com',
      color: 'text-blue-500'
    },
    {
      name: 'LinkedIn',
      icon: Briefcase,
      url: 'https://www.linkedin.com',
      color: 'text-blue-700'
    },
    {
      name: 'News',
      icon: Newspaper,
      url: 'https://news.google.com',
      color: 'text-gray-700'
    },
    {
      name: 'Maps',
      icon: Map,
      url: 'https://maps.google.com',
      color: 'text-green-700'
    }
  ],
  lifestyle: [
    {
      name: 'Instagram',
      icon: Camera,
      url: 'https://www.instagram.com',
      color: 'text-pink-600'
    },
    {
      name: 'Booking',
      icon: Plane,
      url: 'https://www.booking.com',
      color: 'text-blue-600'
    },
    {
      name: 'Uber Eats',
      icon: Coffee,
      url: 'https://www.ubereats.com',
      color: 'text-green-600'
    },
    {
      name: 'Pinterest',
      icon: BookMarked,
      url: 'https://www.pinterest.com',
      color: 'text-red-600'
    },
    {
      name: 'Airbnb',
      icon: Heart,
      url: 'https://www.airbnb.com',
      color: 'text-pink-500'
    }
  ]
};

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex-1">
        {/* Left side empty for balance */}
      </div>
      
      <nav className="flex items-center gap-4">
        {serviceCategories.popular.map((service) => (
          <motion.a
            key={service.name}
            href={service.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <service.icon className={`w-4 h-4 ${service.color} group-hover:scale-110 transition-transform`} />
            <span>{service.name}</span>
          </motion.a>
        ))}
        
        <div className="relative" ref={menuRef}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 hover:bg-gray-100 rounded-full"
            onClick={() => setShowMenu(!showMenu)}
          >
            <Menu className={`w-5 h-5 text-gray-600 transition-transform ${showMenu ? 'rotate-180' : ''}`} />
          </motion.button>

          <AnimatePresence>
            {showMenu && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-100 z-50"
              >
                {Object.entries(serviceCategories).map(([category, services], index) => (
                  <div key={category} className={`p-4 ${index !== 0 ? 'border-t border-gray-100' : ''}`}>
                    <h3 className="text-sm font-medium text-gray-500 mb-3 capitalize">
                      {category}
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {services.map((service) => (
                        <motion.a
                          key={service.name}
                          href={service.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-50 group"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <service.icon className={`w-4 h-4 ${service.color} group-hover:scale-110 transition-transform`} />
                          <span className="text-sm text-gray-700">{service.name}</span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/signin"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Sign in
          </Link>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
import React from 'react';
import { Star, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface ReviewProps {
  review: {
    name: string;
    date: string;
    image: string;
    text: string;
    rating: number;
  };
}

const ReviewCard: React.FC<ReviewProps> = ({ review }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center space-x-3">
        <img 
          src={review.image} 
          alt={review.name} 
          className="w-10 h-10 rounded-full object-cover border border-gray-200"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center">
            <h3 className="text-sm font-medium text-gray-900 truncate">{review.name}</h3>
            <BadgeCheck className="w-4 h-4 text-blue-500 ml-1.5" />
          </div>
          <p className="text-xs text-gray-500">{review.date}</p>
        </div>
        <div className="flex">
          {[...Array(review.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-3.5 h-3.5 text-yellow-400 fill-current"
            />
          ))}
        </div>
      </div>
      <p className="text-sm text-gray-700 mt-2 line-clamp-3">{review.text}</p>
    </motion.div>
  );
};

export default ReviewCard;
import React from 'react';

const ProductCard = ({ title, price, shipping, link, description, image }) => {
  return (
    <div className="border border-gray-200 rounded-xl shadow-sm p-6 bg-white hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      {/* Image Section */}
      <div className="mb-6">
        <img 
          src={image} 
          alt={title}
          className="w-full h-auto rounded-lg shadow-sm"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow">
        {/* Title and Description */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-3 text-gray-800">{title}</h2>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>

        {/* Price and Shipping */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Price:</span>
            <span className="font-semibold text-gray-800">${price}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Shipping:</span>
            <span className="font-semibold text-gray-800">${shipping}</span>
          </div>
        </div>

        {/* Order Button */}
        <div className="mt-auto">
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

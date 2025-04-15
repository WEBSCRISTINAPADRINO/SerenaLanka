interface ExperienceProps {
  title: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  includes: string[];
}

export default function ExperienceCard({
  title,
  description,
  duration,
  price,
  image,
  includes
}: ExperienceProps) {
  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="font-playfair text-xl text-elephant-gray mb-2">
          {title}
        </h3>
        
        <p className="text-elephant-gray/80 text-sm mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-elephant-gray/60">
            {duration}
          </span>
          <span className="font-semibold text-tropical-green">
            {price}
          </span>
        </div>
        
        <div className="border-t border-golden-sand/20 pt-4">
          <h4 className="text-sm font-semibold text-elephant-gray mb-2">
            La experiencia incluye:
          </h4>
          <ul className="space-y-2">
            {includes.map((item) => (
              <li 
                key={item}
                className="flex items-center text-sm text-elephant-gray/80"
              >
                <svg
                  className="w-4 h-4 text-tropical-green mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <button className="w-full mt-6 bg-tropical-green text-white py-3 rounded-lg hover:bg-tropical-green/90 transition-colors duration-300">
          Reserva esta experiencia
        </button>
      </div>
    </div>
  );
} 
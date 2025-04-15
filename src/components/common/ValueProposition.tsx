interface Value {
  icon: string;
  title: string;
  description: string;
}

interface ValuePropositionProps {
  title: string;
  description: string;
  values: Value[];
}

export default function ValueProposition({
  title,
  description,
  values
}: ValuePropositionProps) {
  return (
    <div className="text-center">
      <h2 className="font-playfair text-3xl md:text-4xl text-elephant-gray mb-4">
        {title}
      </h2>
      
      <p className="text-elephant-gray/80 max-w-2xl mx-auto mb-12 text-lg">
        {description}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className="p-6 bg-coconut-white rounded-lg shadow-sm border border-golden-sand/20 hover:shadow-md transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">
              {value.icon}
            </div>
            
            <h3 className="font-playfair text-xl text-elephant-gray mb-2">
              {value.title}
            </h3>
            
            <p className="text-elephant-gray/80">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
} 
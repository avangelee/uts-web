export default function TestimonialCard({ name, role, image, title, description }) {
    return (
      <div className="mt-24 bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="flex items-center justify-center mb-4">
          <img
            src={image}
            alt={name}
            className="w-20 h-20 rounded-full object-cover"
          />
        </div>
        <div className="text-center">
          <p className="font-bold">{name}</p>
          <p className="text-gray-500">{role}</p>
        </div>
      </div>
    );
  }
  
export default function ToolsCard({ image, title, description }) {
    return (
      <div className="">
        <img src={image} alt={title} className="w-20 h-15 sm:mx-0 mx-auto" />
        <h2 className="text-xl font-semibold text-gray-800 mb-3 sm:text-left text-center">{title}</h2>
        <p className="text-gray-600 sm:text-left text-center">{description}</p>
      </div>
    );
  }
  
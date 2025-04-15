export default function FaqCard({ question }) {
    return (
      <div className="bg-gray-50 p-4 rounded-lg hover:scale-105 transition-transform hover:bg-fuchsia-100 shadow-md transition duration-300">
        <h3 className="font-medium text-gray-800">{question}</h3>
      </div>
    );
  }
  
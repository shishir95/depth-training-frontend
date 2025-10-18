// components/TrainerCard.js
const TrainerCard = ({ name, role, image }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg w-64 text-center">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-400 mb-4">{role}</p>
      <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-500 transition duration-300">
        Book Now
      </button>
    </div>
  );
};

export default TrainerCard;

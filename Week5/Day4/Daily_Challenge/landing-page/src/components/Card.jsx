
function Card({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition">

      <div className="text-4xl mb-4">
        {icon}
      </div>

      <h3 className="text-xl font-bold mb-3">
        {title}
      </h3>

      <p className="text-gray-600">
        {description}
      </p>

    </div>
  );
}

export default Card;
export default function Home() {

  const categories = [
    { name: "Study spots", emoji: "📚" },
    { name: "Coffee", emoji: "☕" },
    { name: "Food", emoji: "🍔" },
    { name: "Gym", emoji: "🏋️" },
    { name: "Events", emoji: "🎉" }
  ]

  const places = [
    {
      name: "Campus Coffee",
      category: "Coffee",
      description: "Student friendly coffee with wifi"
    },
    {
      name: "Study Library",
      category: "Study spots",
      description: "Quiet place to focus"
    },
    {
      name: "Student Gym",
      category: "Gym",
      description: "Affordable gym near campus"
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white p-8">

      <h1 className="text-4xl font-bold mb-2">
        STUDAID
      </h1>

      <p className="text-gray-400 mb-8">
        Discover useful places around your campus
      </p>


      <h2 className="text-xl mb-4">
        Categories
      </h2>

      <div className="flex gap-3 mb-10 flex-wrap">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="bg-white text-black px-4 py-2 rounded-xl"
          >
            {cat.emoji} {cat.name}
          </div>
        ))}
      </div>


      <h2 className="text-xl mb-4">
        Popular places
      </h2>

      <div className="grid gap-4">

        {places.map((place) => (

          <div
            key={place.name}
            className="bg-zinc-900 p-4 rounded-xl"
          >

            <h3 className="font-semibold">
              {place.name}
            </h3>

            <p className="text-sm text-gray-400">
              {place.category}
            </p>

            <p className="text-sm mt-2">
              {place.description}
            </p>

          </div>

        ))}

      </div>

    </main>
  )
}
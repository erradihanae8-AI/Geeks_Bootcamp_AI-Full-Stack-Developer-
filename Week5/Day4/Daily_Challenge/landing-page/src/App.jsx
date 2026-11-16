
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/card";
import Contact from "./components/contact";

function App() {
  return (
    <div>
      <Header />

      <Hero />

      <section id="features" className="py-16 px-6 bg-gray-50">

        <h2 className="text-3xl font-bold text-center mb-12">
          Our Features
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          <Card
            icon="🚀"
            title="Fast Performance"
            description="Enjoy a fast and smooth experience with our powerful platform."
          />

          <Card
            icon="⚡"
            title="Easy to Use"
            description="Our simple interface makes everything easy and accessible."
          />

          <Card
            icon="📱"
            title="Modern Design"
            description="Access our beautiful platform from any device."
          />

        </div>
      </section>

      <Contact />

    </div>
  );
}

export default App;
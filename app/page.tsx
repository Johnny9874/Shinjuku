import Navbar from '../components/Navbar';

export default function HomePage() {
  return (
      <main>
        <Navbar />
        <section className="flex items-center min-h-screen bg-gray-100 pl-60">
          <div className="text-center">
            <img src="/logo_shinjuku.png" alt="Shinjuku Logo" className="h-30 md:h-100" />
            <p>Where culinary artistry meets <br />ocean freshness, redefining sushi <br />excellence in every bite.</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">Make a Reservation</button>
          </div>
        </section>
        <section className="bg-black h-60"></section>
      </main>
  );
}

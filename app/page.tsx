import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function HomePage() {
  return (
      <main>
        <Navbar />
        <section className="min-h-screen bg-gray-100">
          <div className="container max-w-7xl ml-auto pl-4 lg:px-16 flex flex-col md:flex-row items-center gap-4 py-19">
            <div className="text-center md:text-left md:w-1/3">
              <img src="/logo_shinjuku.png" alt="Shinjuku Logo" className="h-10 md:h-16 mx-auto md:mx-0" />
              <p className="mt-4">Where culinary artistry meets <br />ocean freshness, redefining sushi <br />excellence in every bite.</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">Make a Reservation</button>
            </div>

            <div className="relative md:w-1/2 flex flex-col md:flex-row items-start">
              <div className="flex flex-col gap-4 w-full md:w-2/3">
                <Image
                  src="/photo%20resto.jpg"
                  alt="Restaurant Photo"
                  width={512}
                  height={320}
                  className="w-full max-w-sg md:w-60 rounded-lg shadow-lg object-cover"
                  priority={false}
                />
                <Image
                  src="/dish%20photo.jpg"
                  alt="Dish Photo"
                  width={512}
                  height={320}
                  className="w-full pb-4 md:pb-0 max-w-sg md:w-60 rounded-lg shadow-lg object-cover"
                  priority={false}
                />
              </div>

              <Image
                src="/another_dish.avif"
                alt="Another Dish Photo"
                width={512}
                height={320}
                className="w-full md:w-60 rounded-lg shadow-lg object-cover md:absolute md:right-15 md:top-1/2 md:transform md:-translate-y-1/2"
                priority={false}
              />
            </div>
          </div>
        </section>
        <section className="bg-black h-60"></section>
      </main>
  );
}

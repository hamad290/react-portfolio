import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="container-page py-16 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        {/* Profile Image Section */}
        <div className="order-2 lg:order-1 rounded-xl overflow-hidden shadow-lg">
          <div className="aspect-square w-full bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-900 dark:to-blue-700 flex items-center justify-center text-white text-lg font-semibold">
            Your Photo
          </div>
        </div>

        {/* Text Content Section */}
        <div className="order-1 lg:order-2">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            About Me<span className="text-blue-500">.</span>
          </h1>
          
          <div className="space-y-4 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            <p>
              Hi, I&apos;m{" "}
              <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Hammad Ur Rehman
              </span>
              , a passionate Web Application Developer based in Islamabad,
              Pakistan. I began my journey into web development with a passion for creating dynamic, responsive digital experiences. Currently, I continue to enhance my skills in both front-end and back-end technologies.
            </p>
            
            <p>
              Over the past few years, I have honed my expertise in Web
              Application Development, enabling me to build dynamic, responsive
              websites and applications from the ground up. My skill set spans
              various programming languages and frameworks, including HTML,
              Tailwind CSS, JavaScript, React.js, Next.js, Node.js, MongoDB,
              WordPress and website SEO. I am committed to delivering efficient,
              high-quality solutions that meet the needs of clients and users
              alike.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}

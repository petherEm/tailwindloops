import Head from "next/head";
import Image from "next/image";
import Features from "../components/Features";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Creations from "../components/Creations";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Loop Studio</title>
        <meta name="description" content="Loop Studio" />
      </Head>

      {/* Hero section */}
      <section id="hero">
        <div className="container max-w-6xl mx-auto px-6 py-12">
          <Navbar />

          <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
            Impressive Experiences That Deliver
          </div>
        </div>
      </section>

      {/* Feature Container */}

      <section id="feature">
        <Features />
      </section>

      {/* Creation section */}

      <section id="creations">
        <Creations />
      </section>

      <Footer />
    </div>
  );
}

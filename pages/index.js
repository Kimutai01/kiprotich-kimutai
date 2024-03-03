import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Skillset from "@/components/Skillset";
import Projects from "@/components/Projects";
import Medium from "@/components/Medium";
import Mentorship from "@/components/Mentorship";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Achievements from "@/components/Achievements";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Kimutai - Full stack developer</title>
        <meta
          name="description"
          content="Personal website of Kiprotich Kimutai, a full-stack developer specializing in creating innovative and user-friendly web applications. Contact now for expert services in front-end and back-end development."
        />

        <meta
          name="keywords"
          content="Kiprotich Kimutai, full-stack developer, web development, front-end development, back-end development, portfolio"
        />

        <meta name="author" content="Kiprotich Kimutai" />

        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Contrail+One&family=Sen:wght@400;700;800&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/log.png" />
      </Head>

      <Navbar />
      <Hero />
      <Experience />
      <About />
      <Skillset />
      <Projects />
      <Achievements />
      <Medium />
      <Mentorship />
      <iframe
        src="https://web.powerva.microsoft.com/environments/11a09fce-cb34-e98f-b454-23f4c7c98615/bots/crd69_projectBot/webchat?__version__=2"
        frameborder="0"
        className="rounded-full"
      ></iframe>
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

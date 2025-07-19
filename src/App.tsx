import Hero from "./components/hero";
import Footer from "./components/footer";
import Header from "./components/header";
import About from "./components/about";
import Button from "./components/button";
import Work from "./components/work";

export default function App() {
  return (
    <main className='font-mtext w-full min-h-screen bg-neutral-50 text-neutral-950 page-animation'>
      <div className='max-w-6xl mx-auto px-6'>
        <Header />
        <Hero />
        <Button id="about" href="https://www.linkedin.com/in/muhammad-laksmana-indra-3913b422b" text="connect to me" />
        <About />
        <Button id="work" href="https://github.com/madanadra" text="view my code" />
        <Work />
        <Footer />
      </div>
    </main>
  )
}
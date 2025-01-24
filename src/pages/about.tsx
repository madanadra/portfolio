import Layout from "../layout";
import Button from "../components/Button";
import Title from "../components/title";

export default function About() {
    const Hero = () => {
        return (
            <div className='grid gap-y-6 py-10 md:py-16 relative'>
                <Title text={['more', ' about', ' me']} />
                <div className='absolute right-0 bottom-0 translate-y-1/2 pl-6 bg-neutral-50'>
                    <Button url='https://www.linkedin.com/in/muhammad-laksmana-indra-3913b422b' text='connect to me' />
                </div>
            </div>
        )
    }

    const More = () => {
        const more = [
            {
                title: 'Who am I?',
                content: `My full name is Muhammad Laksmana Indra, a Web Developer. I've been here for ${new Date().getFullYear()-2021} years, 
                using the best and latest technologies to develop websites.`
            },
            {
                title: 'What I have?',
                content: `Besides React JS, I also use Next JS for framework, Tailwind CSS for styling, 
                Laravel for backend, MySQL for database and other support tools.`
            },
            {
                title: 'Why Frontend?',
                content: `I skilled in frontend, backend and fullstack, but prefer to frontend because 
                I love creativity in design and logic in the program.`
            }
        ]

        return (more.map((item, i) => 
            <div key={i} className='grid gap-y-4 py-10 md:py-16'>
                <h2 className='font-ucase uppercase md:text-xl'>{item.title}</h2>
                <h1 className='text-xl md:text-3xl'>{item.content}</h1>
            </div>
        ))
    }

    return (
      <Layout title="About">
            <Hero />
            <More />
      </Layout>
    )
  }
  
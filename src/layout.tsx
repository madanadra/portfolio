import { ReactNode, useEffect } from "react";
import { Link } from "react-router";
import { PiPeace } from "react-icons/pi";

export default function Layout({title, children}: {title: string, children: ReactNode[]}) {
  useEffect(() => {
    document.title = `${title} - Muhammad Laksmana Indra`
  })

  const Header = () => {
    const menu = [
      {
        url: '/',
        name: 'home'
      },
      {
        url: '/about',
        name: 'about'
      },
      {
        url: '/project',
        name: 'project'
      }
  ]

  return (
      <header className='flex flex-wrap justify-between items-center gap-4 py-5 border-b border-neutral-950'>
        <Link to='/' className='font-signa font-black text-xl md:text-3xl uppercase text-violet-700'>indra</Link>
        <nav className='inline text-sm md:text-lg font-medium'>
          {menu.map((item, i) => <>
            <Link key={i} to={item.url} className="italic hover:text-violet-700">{item.name}</Link>
            <span className="last:hidden"> - </span>
          </>)}
        </nav>
      </header>
    )
  }

  const Footer = () => {
    const sentence = [
      {
        url: 'https://www.linkedin.com/in/muhammad-laksmana-indra-3913b422b',
        text: 'Connect to me on',
        name: 'LinkedIn'
      },
      {
        url: 'https://github.com/madanadra',
        text: 'View my code in',
        name: 'GitHub'
      },
      {
        text: 'Email me at',
        name: 'mlaksindra@gmail.com'
      }
    ]

    return (
      <div className="grid gap-y-4 text-sm md:text-lg py-10 md:py-16 border-t border-neutral-950">
        <div>
          {sentence.map((item, i) => <>
            <span className={`${!item.text && 'hidden'}`}>{item.text} </span>
              {item.url 
              ? <Link key={i} to={item.url} target="_blank" className="hover:text-violet-700 underline">{item.name}</Link>
              : <span>{item.name}</span>
              }
            <span className="last-of-type:hidden">. </span>
          </>)}
          <span> <PiPeace className='inline' /></span>
        </div>
        <h1>&copy; {new Date().getFullYear()} - Portfolio by Muhammad Laksmana Indra</h1>
      </div>
    )
  }
  
  return (
    <main className='font-mtext w-full min-h-screen bg-neutral-50 text-neutral-950'>
      <div className='max-w-6xl mx-auto px-6'>
        <Header />
        <div className='grid content-start divide-y divide-neutral-950 page-animation'>
          {children}
        </div>
        <Footer />
      </div>
    </main>
  )
}
import type { Metadata } from 'next'
import Card from './card'
import Navbar from "./navbar";
import { project } from '../other/data';

export const metadata: Metadata = {
  title: 'Muhammad Laksmana Indra',
}

export default function Page() {
  return (<>
    <Navbar name='Project' />
    <h1 className="font-bold text-[3em] leading-tight sm:leading-snug px-5 sm:px-20 sm:w-2/3 ">
      Hi! I&apos;m Indra, a Front-End Developer with React JS.
    </h1>
    <div className='py-7 sm:py-14 mt-14'>
      <h1 className='font-semibold text-[1.15em] px-5 sm:px-20 mb-10'>Featured projects</h1>
      {project.map((item, i) => 
        <Card key={i} item={item} index={i} />
      )}
    </div>
    <h1 className='font-medium text-[1em] text-right p-5 sm:py-10 sm:px-20'>mlaksindra@gmail.com</h1>
  </>)
}
import type { Metadata } from 'next'
import FeaturedProjectsCard from '../_components/featured-projects-card';
import AboutCard from '../_components/about-card';
import Title from '../_components/title';
import Header from '../_components/header';
import { featuredProjects } from '../data';

export const metadata: Metadata = {
  title: 'Muhammad Laksmana Indra',
}

export default function Page() {
  return (
    <div className='grid content-start divide-y divide-neutral-950 border-y border-neutral-950 page-animation'>
      <div className='py-6'>
        <Header text={['front', '-end', ' developer']} />
      </div>
      <AboutCard />
      <Title href='/about' name='more about me' />
      <Title name='featured projects' />
      {featuredProjects.map((item, i) => 
        <FeaturedProjectsCard key={i} item={item} num={i+1} />
      )}
      <Title href='/project' name='my project list' />
    </div>
  )
}
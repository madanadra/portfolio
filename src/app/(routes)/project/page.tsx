import type { Metadata } from 'next'
import Header from '@/app/_components/header';
import ProjectListCard from '@/app/_components/project-list-card';
import { projectList } from '@/app/data';

export const metadata: Metadata = {
    title: 'Project - Muhammad Laksmana Indra',
}

export default function Page() {
    return (
        <div className='grid content-start divide-y divide-neutral-950 border-y border-neutral-950 page-animation'>
            <div className='grid items-start md:grid-cols-2 gap-9 py-6'>
                <Header grid text={['my', 'project', 'list']} />
                <div className='grid divide-y divide-neutral-950'>
                    {projectList.map((item, i) => 
                        <ProjectListCard key={i} item={item} />
                    )}
                </div>
            </div>
        </div>
    )
}
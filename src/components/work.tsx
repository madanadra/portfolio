export default function Work() {
    const project = [
        {
            title: 'Package',
            img: 'package.png', 
            desc: `A free and lightweight package on NPM. 
            Built using React and TypeScript.
            Make it easier for React developers to build websites.`, 
            project: ['Typing Ind']
        },
        {
            title: 'Management',
            img: 'management.png', 
            desc: `Website for management. 
            Consists of authentication, dashboard, resources data, PDF reports and other operations. 
            Using WebSocket for real-time data.`, 
            project: ['Properti']
        },
        {
            title: 'Tools',
            img: 'tools.png', 
            desc: `Websites that make activities easier, 
            such as looking for links on a website and create a list of activities for a smooth day.`, 
            project: ['Web Scraper', 'Productivity Booster']
        },
        {
            title: 'Clone',
            img: 'clone.png', 
            desc: `Imitating a well-known website like Instagram dan Netflix, especially in the UI (User Interface).
            Using NextAuth.js to create Google authentication.
            Utilizing Tailwind CSS for flexible styling.`, 
            project: ['Indragram', 'Netflix Landing Page Clone']
        },
        {
            title: 'API',
            img: 'api.png', 
            desc: `Utilizing a variety of open-source APIs. 
            Using Axios to make XMLHttpRequests from the browser.
            Processing JSON data to make the website more informative.`, 
            project: ['Music Playlist', 'Image Finder', 'Quotes App', 'Marvel Character List']
        },
        {
            title: 'Games',
            img: 'games.png', 
            desc: `Games on the website with a set of logics to apply the rules of the game. 
            Can run on multiple platforms, commonly called PWA (Progressive Web App).`, 
            project: ['In Games', 'Find the Card', 'Drum Machine', 'Tic Tac Toe']
        },
    ]

    return (
        <div className='divide-y divide-neutral-950'>
            <h1 className='font-ucase md:text-xl text-center uppercase py-10 md:py-16'>featured works</h1>
            {project.map((item, i) => 
                <div key={i} className='grid md:grid-cols-2 gap-x-16 gap-y-8 py-10 md:py-16'>
                    <div className='grid gap-y-8 content-center'>
                        <h1 className='font-ucase text-4xl md:text-6xl uppercase'>
                            {item.title}
                        </h1>
                        <div className="flex flex-wrap gap-4 mt-2">
                            {item.project.map((tech, i) => 
                                <h1 key={i} className='border border-neutral-950 text-sm md:text-lg py-2 px-5'>{tech}</h1>
                            )}
                        </div>
                        <h1 className='text-lg md:text-2xl'>{item.desc}</h1>
                    </div>
                    <div className="grid content-center">
                            <img key={i} src={'/images/'+item.img} alt={item.title+' Image'}
                            className="w-full aspect-square object-cover object-center rounded-3xl border border-neutral-950" />
                    </div>
                </div>
            )}
        </div>
    )
}
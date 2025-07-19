export default function About() {
    const more = [
        {
            title: 'Who am I?',
            content: `My full name is Muhammad Laksmana Indra, a Web Developer. I've been here for ${new Date().getFullYear()-2021} years, 
            using the best and modern technologies to develop websites.`
        },
        {
            title: 'What I have?',
            content: `I'm strong with Next JS, React JS, and Tailwind CSS. 
            I'm also proficient in TypeScript, Prisma, PostgreSQL, Laravel, MySQL, and other supporting tools.`
        },
        {
            title: 'Why Frontend?',
            content: `I love creativity in design and logic in the code. 
            But with the skills I have, I can be in the frontend, backend, and fullstack development.`
        }
    ]

    return (
        <div className="grid gap-y-10 py-10 md:py-16">
            {more.map((item, i) => 
                <div key={i} className='grid gap-y-4'>
                    <h2 className='font-ucase uppercase md:text-xl'>{item.title}</h2>
                    <h1 className='text-xl md:text-3xl'>{item.content}</h1>
                </div>
            )}
        </div>
    )
}
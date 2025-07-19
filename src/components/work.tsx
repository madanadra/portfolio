import { PiArrowUpRight } from "react-icons/pi"


export default function Work() {
    const project = [
        {
            project: 'in-typing',
            description: 'NPM package',
            deploy: 'npm'
        }, {
            project: 'proment',
            description: 'Project management',
            deploy: 'vercel'
        }, {
            project: 'quotin',
            description: 'Random quote',
            deploy: 'vercel'
        }, {
            project: 'indragram',
            description: 'Instagram clone',
            deploy: 'vercel'
        }, {
            project: 'quizin',
            description: 'Trivia quizzes',
            deploy: 'vercel'
        }
    ]

    return (
        <div className='grid md:grid-cols-2 gap-10 py-10 md:py-16'>
            <div className='grid gap-y-2 text-center content-center'>
                <h1 className='font-ucase text-4xl md:text-6xl uppercase'>featured</h1>
                <h1 className='font-signa text-3xl md:text-5xl italic lowercase text-violet-700'>works</h1>
            </div>
            <div className="grid divide-y divide-neutral-950">
                {project.map(item => 
                    <div key={item.project} className='flex items-center gap-x-6 py-4'>
                        <img src={'images/'+item.project+'.jpg'} alt={item.project+' Image'}
                        className='w-14 md:w-17 rounded-xl aspect-square object-cover object-center' />
                        <div className="grid gap-y-1 grow">
                            <h1 className="font-ucase uppercase text-xl md:text-3xl">{item.project}</h1>
                            <h1 className="md:text-xl">{item.description}</h1>
                        </div>
                        <a href={'https://'+(item.deploy === 'npm' ? 'www.npmjs.com/package/'+item.project : item.project+'-madanadra.vercel.app')}>
                            <PiArrowUpRight className="text-xl md:text-3xl cursor-pointer hover:text-violet-700" />
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}
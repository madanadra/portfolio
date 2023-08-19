export const menu: {
    url: string,
    name: string,
}[] = [
    {
        url: '/',
        name: 'Project'
    },
    {
        url: '/about',
        name: 'About'
    }
]

export const project: {
    image: string, 
    imageMobile: string, 
    name: string, 
    description: string, 
    link: string
}[] = [
    {
      image: './package.png',
      imageMobile: './package-mobile.png',
      name: 'Typing Ind',
      description: 'Simple typing animation library for React.',
      link: 'https://www.npmjs.com/package/typing-ind',
    },
    {
      image: './api.png',
      imageMobile: './api-mobile.png',
      name: 'InGames',
      description: 'Quiz game with Open Trivia DB API.',
      link: 'https://ingames.vercel.app',
    }, 
    {
      image: './auth.png',
      imageMobile: './auth-mobile.png',
      name: 'Indragram',
      description: 'Instagram clone with Google OAuth.',
      link: 'https://indragram.vercel.app',
    }
]

export const more: {
    url: string,
    name: string,
}[] = [
    {
        url: 'https://drive.google.com/file/d/1HJqH5kHuKs381-lSNEM6cE5oKv-IT22-/view?usp=drive_link',
        name: 'Resume'
    },
    {
        url: 'https://github.com/madanadra',
        name: 'GitHub'
    },
    {
        url: 'https://www.linkedin.com/in/muhammad-laksmana-indra-3913b422b',
        name: 'LinkedIn'
    }
]

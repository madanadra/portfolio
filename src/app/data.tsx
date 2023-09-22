import inGames from '../../public/in-games.png'
import typingInd from '../../public/typing-ind.png'

const navbar = [
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

const footer = [
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

const featuredProjects = [
    {
      title: 'typing ind', 
      url: 'https://www.npmjs.com/package/typing-ind', 
      img: typingInd, 
      desc: `This is simple typing animation library for React. 
      Only 1 tag component (<Typed />) & 5 properties (type, backspace, delay, duration, cursor).`, 
      tech: ['npm', 'react js', 'typescript', 'create-react-library']
    },
    {
      title: 'in games', 
      url: 'https://ingames.vercel.app', 
      img: inGames, 
      desc: `Retro quiz game with 24 categories, 3 difficulty levels, and 2 question types. 
      Race against 10 seconds and achieve your highest score.`, 
      tech: ['next js', 'react js', 'tailwind css', 'typescript', 'open tdb api']
    },
]

const moreAbout = [
    {
        title: 'Who am i?',
        content: `Hi! I'm Muhammad Laksmana Indra, a web developer for front-end based in indonesia.
        I use React JS to translate design into a fast and stable website.`
    },
    {
        title: 'What I have?',
        content: `Besides React JS, I also use Next JS, Tailwind CSS, Bootstrap, Material UI, and other tools. 
        Familiar with Back-End tools like Laravel and MySQL.`
    },
    {
        title: 'Why Front-End?',
        content: `because I love the beauty of UI and the precision of logic.`
    }
]

const projectList = [
    {
        title: 'typing ind',
        site: 'https://www.npmjs.com/package/typing-ind',
        gh: 'typing-ind'
    },
    {
        title: 'in games',
        site: 'https://ingames.vercel.app',
        gh: 'ingames'
    },
    {
        title: 'indragram',
        site: 'https://indragram.vercel.app/',
        gh: 'indragram'
    },
    {
        title: 'counter app',
        site: 'https://madanadra.github.io/counter-app/',
        gh: 'counter-app'
    },
    {
        title: 'drum machine',
        site: 'https://madanadra.github.io/drum-machine/',
        gh: 'drum-machine'
    },
    {
        title: 'image finder',
        site: 'https://madanadra.github.io/image-finder/',
        gh: 'image-finder'
    },
    {
        title: 'marvel character list',
        site: 'https://madanadra.github.io/marvel-app/',
        gh: 'marvel-app'
    },
    {
        title: 'music playlist',
        site: 'https://madanadra.github.io/music-playlist/',
        gh: 'music-playlist'
    },
    {
        title: 'notes app',
        site: 'https://madanadra.github.io/notes-app/',
        gh: 'notes-app'
    },
    {
        title: 'stopwatch app',
        site: 'https://madanadra.github.io/stopwatch-app/',
        gh: 'stopwatch-app'
    },
    {
        title: 'quotes app',
        site: 'https://madanadra.github.io/quotes-app/',
        gh: 'quotes-app'
    },
    {
        title: 'tic tac toe',
        site: 'https://madanadra.github.io/tictactoe/',
        gh: 'tictactoe'
    },
    {
        title: 'weather app',
        site: 'https://madanadra.github.io/weather-app/',
        gh: 'weather-app'
    },
    {
        title: 'productivity booster',
        site: 'https://madanadra.github.io/productivity-booster/',
        gh: 'productivity-booster'
    },
    {
        title: 'find the card',
        site: 'https://madanadra.github.io/find-the-card/',
        gh: 'find-the-card'
    },
]

export {navbar, footer, featuredProjects, moreAbout, projectList}
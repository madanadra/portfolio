import { render, screen } from '@testing-library/react'
import Page from '@/app/(routes)/about/page'
import '@testing-library/jest-dom'
 
describe('About page', () => {
    it('renders navbar', () => {
        render(<Page />)
        const logo = screen.getByRole('link', {name: `Indra`})
        const link1 = screen.getByRole('link', {name: `Project`})
        const link2 = screen.getByRole('link', {name: `About`})
        expect(logo).toBeInTheDocument()
        expect(link1).toBeInTheDocument()
        expect(link2).toBeInTheDocument()
    })
    
    it('renders title', () => {
        render(<Page />)
        const heading = screen.getByRole('heading', {level: 1, name: `A bit about me`})
        expect(heading).toBeInTheDocument()
    })

    it('renders paragraphs', () => {
        render(<Page />)
        const heading1 = screen.getByRole('heading', {level: 1, name: `I'm a Front-End developer with React JS. I translate the design into a fast and stable website.`})
        const heading2 = screen.getByRole('heading', {level: 1, name: `Besides React JS, I also use Next JS, Tailwind CSS, Bootstrap, Material UI, and other tools. Familiar with Back-End tools like Laravel and MySQL.`})
        const heading3 = screen.getByRole('heading', {level: 1, name: `Why did I choose the Front-End? because I love the beauty of UI and the precision of logic.`})
        expect(heading1).toBeInTheDocument()
        expect(heading2).toBeInTheDocument()
        expect(heading3).toBeInTheDocument()
    })
})
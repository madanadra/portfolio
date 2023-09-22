import { render, screen } from '@testing-library/react'
import Page from '@/app/(routes)/page'
import '@testing-library/jest-dom'
 
describe('Project page', () => {
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
    const heading = screen.getByRole('heading', {level: 1, name: `Hi! I'm Indra, a Front-End Developer with React JS.`})
    expect(heading).toBeInTheDocument()
  })

  it('renders projects title', () => {
    render(<Page />)
    const heading = screen.getByRole('heading', {level: 1, name: `Featured projects`})
    expect(heading).toBeInTheDocument()
  })

  it('renders cards', () => {
    render(<Page />)
    const link1 = screen.getByRole('link', {name: `Typing Ind`})
    const link2 = screen.getByRole('link', {name: `InGames`})
    const link3 = screen.getByRole('link', {name: `Indragram`})
    const heading1 = screen.getByRole('heading', {level: 1, name: `Simple typing animation library for React.`})
    const heading2 = screen.getByRole('heading', {level: 1, name: `Quiz game with Open Trivia DB API.`})
    const heading3 = screen.getByRole('heading', {level: 1, name: `Instagram clone with Google OAuth.`})
    const imgs = screen.getAllByRole('img')
    const alt1 = screen.queryAllByAltText(`Typing Ind`)
    const alt2 = screen.queryAllByAltText(`InGames`)
    const alt3 = screen.queryAllByAltText(`Indragram`)
    expect(link1).toBeInTheDocument()
    expect(link2).toBeInTheDocument()
    expect(link3).toBeInTheDocument()
    expect(heading1).toBeInTheDocument()
    expect(heading2).toBeInTheDocument()
    expect(heading3).toBeInTheDocument()
    expect(imgs).toHaveLength(6)
    expect(alt1).toHaveLength(2)
    expect(alt2).toHaveLength(2)
    expect(alt3).toHaveLength(2)
  })

  it('renders email', () => {
    render(<Page />)
    const heading = screen.getByRole('heading', {level: 1, name: `mlaksindra@gmail.com`})
    expect(heading).toBeInTheDocument()
  })
})
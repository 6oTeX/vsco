import { render, screen } from '@testing-library/react'
import Posts from './components/posts'

describe('App', () => {
  it('renders the App component', () => {
    const posts = [
      {
        id: 55,
        username: 'testuser',
        conent: 'https://miro.medium.com/v2/resize:fit:828/format:webp/0*waBbBrKGRL-K-4Wf',
      },
    ];
    render(<Posts post={posts} />)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})
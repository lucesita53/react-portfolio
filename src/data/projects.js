import BamboxLogo from '../assets/logo-color.svg'
import UdemyReactReduxBootcamp from '../assets/Udemy-react-redux-bootcamp.png'
import project3 from '../assets/project3.png'

const PROJECTS = [
  {
    id: 1,
    title: 'Bambox',
    description: 'A React App that I contributed in Eureka Labs, involving JS and core web dev concepts!',
    link: 'https://www.bambox.com.ar/',
    image: BamboxLogo
  },
  {
    id: 2,
    title: 'My PROFILE',
    description: 'Challenge to learn react and redux concepts, building an app',
    link: 'https://www.udemy.com/react-redux-bootcamp',
    image: UdemyReactReduxBootcamp
  },
  {
    id: 3,
    title: 'Operating Systems Final Porject',
    description: 'My unique final project for my university Operating Systems course.',
    link: 'https://github.com/15Dkatz/example',
    image: project3
  }
]

export default PROJECTS

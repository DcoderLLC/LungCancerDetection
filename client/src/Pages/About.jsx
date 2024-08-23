import { Box } from '@mui/material'
import {} from 'react'
import Feature from '../Components/About/Feature'
import FAQList from '../Components/About/FAQList'
import AboutHero from '../Components/About/AboutHero'

const About = () => {
  return (
    <Box>
      <AboutHero />
      <Feature />
      <FAQList />
    </Box>
  )
}

export default About
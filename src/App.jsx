import { Container, Stack } from "@chakra-ui/react"
import { Footer } from "./components/Footer"
import { GetStarted } from "./components/GetStarted"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Shortener } from "./components/Shortener"
import { Statistics } from "./components/Statistics"

export const App = () => {
  return (
    <>
      <Container
        maxW='container.xl'
        px={{base: 4, md: 10}}
      >
        <Navbar />
        <Hero />
      </Container>
      <Stack
        bgColor='gray.100'
      >
        <Container
          maxW='container.xl'
          px={{base: 4, md: 10}}
        >
          <Shortener />
          <Statistics />
        </Container>
        <GetStarted />
      </Stack>
      <Footer />
    </>
  )
}

import { Button, Heading, Stack } from "@chakra-ui/react"

export const GetStarted = () => {
  return (
    <Stack
        align='center'
        bgImage={'url(/images/bg-boost-desktop.svg)'}
        bgRepeat='no-repeat'
        bgSize='cover'
        bgPosition='center'
        bgColor='purple.900'
        py={10}
        gap={3}
    >
        <Heading
            color='white'
        >Boost your links today</Heading>
        <Button
            colorScheme='teal'
            w='150px'
            borderRadius='full'
            fontWeight='bold'
        >Get Started</Button>
    </Stack>
  )
}

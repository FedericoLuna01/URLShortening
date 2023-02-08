import { Button, Heading, Image, Stack, Text } from "@chakra-ui/react"

export const Hero = () => {
  return (
    <Stack
        direction={{base: 'column', md: 'row'}}
        gap={24}
        py={20}
        pb={32}
        justify='space-between'
    >
        <Stack
            justify='space-between'
            gap={5}
        >
            <Heading
                as='h1'
                fontSize='6xl'
            >
                More than just shorter links
            </Heading>
            <Text
                color='gray.500'
                fontWeight={500}
            >
                Build your brand's recognition and get detailed insights on how your links are performing.
            </Text>
            <Button
                colorScheme='teal'
                borderRadius='full'
                px={6}
                w='30%'
            >Get Started</Button>
        </Stack>
        <Stack>
            <Image
                src='/images/illustration-working.svg'
            />            
        </Stack>
    </Stack>
  )
}

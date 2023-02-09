import { Button, Heading, Image, Stack, Text } from "@chakra-ui/react"

export const Hero = () => {
  return (
    <Stack
        direction={{base: 'column-reverse', lg: 'row'}}
        gap={{base: 12, lg: 24}}
        py={{base: 10, lg: 40}}
        pb={{base: 32, lg: 40}}
        justify='space-between'
        align='center'
    >
        <Stack
            justify='space-between'
            align={{base: 'center', lg: 'flex-start'}}
            gap={5}
            textAlign={{base: 'center', lg: 'left'}}
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
                w={{base: '40%', lg: 'auto'}}
            >
                Get Started
            </Button>
        </Stack>
        <Stack>
            <Image
                width={{base: '400px', lg: '100%'}}
                src='/images/illustration-working.svg'
            />            
        </Stack>
    </Stack>
  )
}

import { Container, Heading, Image, Link, Stack } from "@chakra-ui/react"

const MENU_ITEMS = [
    {
        title: 'Features',
        firstLink: 'Link Shortening',
        secondLink: 'Branded Links',
        thirdLink: 'Analytics',
    },
    {
        title: 'Resources',
        firstLink: 'Blog',
        secondLink: 'Developers',
        thirdLink: 'Support',
    },
    {
        title: 'Company',
        firstLink: 'About',
        secondLink: 'Our Team',
        thirdLink: 'Careers',
    },
]        

export const Footer = () => {
  return (
    <Stack
        bg='gray.900'
    >
        <Container
            maxW='container.xl'
            px={{base: 4, md: 10}}
        >
            <Stack
                direction='row'
                justify='space-between'
                py={10}
            >
                <Stack>
                    <Image src='/images/logo.svg' 
                        filter={'invert(1)'}
                    />
                </Stack>
                <Stack
                    direction='row'
                    gap={10}
                >
                    {
                        MENU_ITEMS.map(({title, firstLink, secondLink, thirdLink}, index) => (
                            <Stack key={`${title}-${index}`}>
                                <Heading size='md' color='white' as='h4'>{title}</Heading>
                                <Link color='white' href='#'>{firstLink}</Link>
                                <Link color='white' href='#'>{secondLink}</Link>
                                <Link color='white' href='#'>{thirdLink}</Link>
                            </Stack>
                        ))
                    }
                </Stack>
                <Stack
                    direction='row'
                    h='30px'
                    gap={5}
                    align='center'
                >
                    <Link href='#'>
                        <Image src='/images/icon-facebook.svg'/>
                    </Link>
                    <Link href='#'>
                        <Image src='/images/icon-twitter.svg'/>
                    </Link>
                    <Link href='#'>
                        <Image src='/images/icon-pinterest.svg'/>
                    </Link>
                    <Link href='#'>
                        <Image src='/images/icon-instagram.svg'/>
                    </Link>
                </Stack>
            </Stack>
        </Container>
    </Stack>
  )
}

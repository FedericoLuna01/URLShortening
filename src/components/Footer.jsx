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

const MEDIA_ITEMS = [
    {
        title: 'Facebook',
        icon: '/images/icon-facebook.svg',
    },
    {
        title: 'Twitter',
        icon: '/images/icon-twitter.svg',
    },
    {
        title: 'Pinterest',
        icon: '/images/icon-pinterest.svg',
    },
    {
        title: 'Instagram',
        icon: '/images/icon-instagram.svg',
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
                direction={{base: 'column', lg:'row'}}
                justify='space-between'
                align='center'
                py={10}
            >
                <Stack>
                    <Image 
                        w={{base: '200px', lg: '300px'}}
                        src='/images/logo.svg' 
                        filter={'invert(1)'}
                    />
                </Stack>
                <Stack
                    direction={{base: 'column', lg:'row'}}
                    align='center'
                    gap={10}
                >
                    {
                        MENU_ITEMS.map(({title, firstLink, secondLink, thirdLink}, index) => (
                            <Stack key={`${title}-${index}`}
                align={{base: 'center', lg: 'flex-start'}}
                            
                            >
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
                    {
                        MEDIA_ITEMS.map(({title, icon}, index) => (
                            <Link 
                                key={`${title}-${index}`} 
                                href='#'
                            >
                                <Image src={icon}/>
                            </Link>  
                        ))
                    }
                </Stack>
            </Stack>
        </Container>
    </Stack>
  )
}

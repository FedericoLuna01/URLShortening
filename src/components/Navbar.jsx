import { Button, Image, Link, Stack } from "@chakra-ui/react"

const MENU_ITEMS = [
    {
        title: 'Features',
        href: '#',
    },
    {
        title: 'Pricing',
        href: '#',
    },
    {
        title: 'Resources',
        href: '#',
    },
]

export const Navbar = () => {
  return (
    <Stack
        h='90px'
        direction='row'
        align='center'
        justify='space-between'
    >
        <Stack
            direction='row'
            gap={4}
        >
            <Stack>
                <Image 
                    src='/images/logo.svg'
                />
            </Stack>
            <Stack
                direction='row'
                color='gray.500'
                align='center'
                gap={3}
            >
                {
                    MENU_ITEMS.map(({title, href}, index) => (
                        <Link key={`${title}-${index}`} href={href}>{title}</Link>
                    ))
                }
            </Stack>
        </Stack>
        <Stack
            direction='row'
            align='center'
            gap={3}
        >
            <Link color='gray.500' href='#'>Login</Link>
            <Button
                colorScheme='teal'
                borderRadius='full'
                px={6}
            >Sign Up</Button>
        </Stack>
    </Stack>
  )
}

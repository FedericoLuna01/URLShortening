import { Button, Link, Stack } from "@chakra-ui/react"

export const MENU_ITEMS = [
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

export const Menu = () => {
  return (
    <>
        <Stack
            direction='row'
            color='gray.500'
            align='center'
            gap={3}
        >
          {MENU_ITEMS.map(({ title, href }, index) => (
              <Link key={`${title}-${index}`} href={href}>{title}</Link>
          ))}
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
        >
            Sign Up
        </Button>
        </Stack>
    </>
  )
}

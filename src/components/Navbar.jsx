import { Box, Hide, Image, Show, Stack } from "@chakra-ui/react"
import { Menu } from "./Menu"
import { NavMobile } from "./NavMobile"

export const Navbar = () => {
  return (
    <Stack
        bg='white'
        // pos='fixed'
        h='90px'
        w='100%'
        zIndex={1}
        direction='row'
        align='center'
        justify='space-between'
    >
        <Stack
            direction='row'
            gap={4}
            align='center'
            justify='space-between'
            w='100%'
        >
            <Stack
                align='center'
            >
                <Image 
                    src='/images/logo.svg'
                />
            </Stack>
            <Show above='md'>
                <Menu />
            </Show>
            <Hide above='md'>
                <NavMobile />
            </Hide>
        </Stack>
    </Stack>
  )
}

import { HamburgerIcon } from "@chakra-ui/icons"
import { Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Image, Link, Stack, useDisclosure } from "@chakra-ui/react"
import { MENU_ITEMS } from "./Menu"

export const NavMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button  colorScheme='white' onClick={onOpen}>
        <HamburgerIcon color='gray.600' w={6} h={6}/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='top'
        onClose={onClose}
        >
        <DrawerOverlay />
        <DrawerContent
          bg='purple.800'
        >
          <DrawerCloseButton color='white' />
          <DrawerHeader>
            <Image src='/images/logo.svg' filter={'invert(1)'}/>
          </DrawerHeader>
          <DrawerBody>
            <Stack
              align='center'
              gap={2}
              pb={5}
            >
              {
                MENU_ITEMS.map(({ title, href }, index) => (
                    <Link key={`${title}-${index}`} color='white' fontWeight='bold'>{title}</Link>  
                  ))
              }
            </Stack>
            <Divider />
            <Stack
                direction='column'
                align='center'
                gap={3}
                py={5}
              >
              <Link color='white' fontWeight='bold' href='#'>Login</Link>
              <Button
                  colorScheme='teal'
                  borderRadius='full'
                  w='100%'
              >
                  Sign Up
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

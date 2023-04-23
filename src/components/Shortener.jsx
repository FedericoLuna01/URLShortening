import { Button, Input, Link, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"
import { getShortLink } from "../api/getShortLink"

export const Shortener = () => {
    const [inputLink, setInputLink] = useState('')
    const [error, setError] = useState(false)
    const [linkList, setLinkList] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = await getShortLink(inputLink)
        if (data.ok) {
            setError(false)
            const short = {
                original: data.result.original_link,
                short: data.result.full_short_link
            }
            setLinkList([{short}, ...linkList])
            setInputLink('')
            return
        }
        setError(true)
    }

    const handleCopy = (link) => {
        navigator.clipboard.writeText(link.short.short)
    }
    
  return (
    <Stack
        position='relative'
        >
        <Stack
            bgImage='url(/images/bg-shorten-desktop.svg)'
            bgRepeat='no-repeat'
            bgSize='cover'
            bgPosition='center'
            bgColor='purple.900'
            pos='absolute'
            top={-16}
            w='100%'
            p={{base: 8, md: 12}}
            borderRadius='xl'
        >
            <Stack
                w='100%'
                as='form'
                direction='column'
                onSubmit={e => handleSubmit(e)}
            >
                <Stack
                    direction={{base: 'column', md:'row'}}
                    w={'100%'}
                >
                    <Input 
                        isInvalid={error}
                        errorBorderColor="red.500"
                        bgColor='white'
                        placeholder='Shorten a link here...'
                        size='lg'
                        value={inputLink}
                        onChange={(e) => setInputLink(e.target.value.trim())}
                    />
                    <Button
                        colorScheme='teal'
                        size='lg'
                        px={6}
                        type='submit'
                    >
                        Shorten It!
                    </Button>
                </Stack>
                {
                    error && (
                        <Stack
                            color='red.500'
                            fontStyle='italic'
                            position='absolute'
                            bottom={{base: 1, md: 5}}
                        >
                            <Text>Please add a link</Text>
                        </Stack>
                    )
                }
            </Stack>
        </Stack>
        <Stack
            pt={{base: 32, md: 20}}
        > 
            {
                linkList.map((link, index) => (
                    <Stack key={index}
                        bg='white'
                        borderRadius='md'
                        w={'100%'}
                        p={4}
                        direction={{base: 'column', md:'row'}}
                        justify='space-between'
                        align={{base: 'flex-start', md:'center'}}
                    >
                        <Stack>
                    <Link
                        fontWeight={'bold'}
                        href={link.short.original}
                        target='_blank'
                    >
                        {link.short.original}
                    </Link>
                </Stack>
                <Stack
                    direction={{base: 'column', md:'row'}}
                    align={{base: 'flex-start', md:'center'}}
                    justify='flex-end'
                    gap={3}
                    w={{base: '100%', md: 'auto'}}
                >
                    <Link
                        color='teal.300'
                        fontWeight='bold'
                        href={link.short.short}
                        target='_blank'
                    >
                        {link.short.short}
                    </Link>
                    <Button
                        colorScheme='teal'
                        w={{base: '100%', md: 'auto'}}
                        px={8}
                        onClick={() => handleCopy(link)}
                    >
                        Copy
                    </Button>
                </Stack>
            </Stack>
                ))
            }
                
        </Stack>
    </Stack>
  )
}

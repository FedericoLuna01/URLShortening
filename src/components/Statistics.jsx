import { Avatar, Card, CardBody, Center, Heading, Image, Stack, Text } from "@chakra-ui/react"

const CARD_ITEMS = [
    {
        title: 'Brand Recognition',
        description: 'Boost your brand recognition with each click. Generic links don\'t mean a thing. Branded links help instil confidence in your content.',
        image: '/images/icon-brand-recognition.svg',
        align:'flex-start'
    },
    {
        title: 'Detailed Records',
        description: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
        image: '/images/icon-detailed-records.svg',
        align:'center'
    },
    {
        title: 'Fully Customizable',
        description: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
        image: '/images/icon-fully-customizable.svg',
        align:'flex-end'
    },
]

export const Statistics = () => {
  return (
    <Stack
        align='center'
        justify='center'
        gap={12}
        h='80vh'
    >
        <Stack
            textAlign='center'
            maxW='400px'
        >
            <Heading
                as='h2'
            >
                Advanced Statistics
            </Heading>
            <Text
                color='gray.500'
            >
                Track how your links are performing across the web with our advanced statistics dashboard.
            </Text>
        </Stack>
        <Stack
            direction='row'
            h='40vh'
            gap={5}
        >
            {
                CARD_ITEMS.map(({title, description, image, align}, index) => (
                    <Card 
                        key={`${title}-${index}`}
                        maxH='250px'
                        maxW='300px' 
                        alignSelf={align}
                    >
                        <CardBody
                            pt={10}
                        >
                            <Center
                                pos='absolute'
                                top='-30px'
                                borderRadius='full'
                                h='70px'
                                w='70px'
                                bg='purple.900'
                            >
                                <Image
                                    objectFit='cover'
                                    w='35px'
                                    src={image}
                                    alt={`${title} icon`}
                                />
                            </Center>
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>{title}</Heading>
                                <Text
                                    color='gray.500'
                                >
                                    {description}
                                </Text>
                            </Stack>
                        </CardBody>
                    </Card>
                ))
            }
        </Stack>
    </Stack>
  )
}

import React from 'react'
import {
    Box,
    Flex,
    Link,
    Stack,
    IconButton,
    Center,
    Collapse,
    useDisclosure,


} from '@chakra-ui/react'
import {
    HamburgerIcon,
    CloseIcon,
  } from '@chakra-ui/icons'

const HamburgerMenu = () => {
    const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
        <Flex
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={'gray.700'}
          justifyContent={'center'}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={5} h={5} /> : <HamburgerIcon w={7} h={7} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
        </Flex>
        <Center>
           <Collapse in={isOpen}>
              <Stack bg={'gray.800'} p={4} display={{ md: 'flex' }}>
              <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={'gray.100'}
                    align={'start'}>
                    <Link py={2} href={'#'}>
                        Hello
                    </Link>
                </Stack>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={'gray.100'}
                    align={'start'}>
                    <Link py={2} href={'#'}>
                        Hello here I am again!
                    </Link>
                </Stack>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={'gray.100'}
                    align={'start'}>
                    <Link py={2} href={'#'}>
                        This is the best chicken I've ever tasted
                    </Link>
                </Stack>
              </Stack>
            </Collapse>
        </Center>
    </Box>
  )
}

export default HamburgerMenu
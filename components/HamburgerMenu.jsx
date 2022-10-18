import React from 'react'
import {
    Box,
    Flex,
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
                <Box bgColor={'red.100'}>
                    Lolololo
                </Box>
                <Box bgColor={'green.100'}>
                    Lolololo
                </Box>
                <Box bgColor={'yellow.100'}>
                    Lolololo
                </Box>
            </Collapse>
        </Center>
    </Box>
  )
}

export default HamburgerMenu
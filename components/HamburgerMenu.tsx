import React from 'react'
import Hero from './Hero'
import {
    Box,
    Flex,
    Link,
    Icon,
    Stack,
    IconButton,
    Center,
    Collapse,
    Heading,
    useDisclosure,
} from '@chakra-ui/react'
import {
    HamburgerIcon,
    CloseIcon,
  } from '@chakra-ui/icons'

export default function HamburgerMenu(){
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
              _hover={{bg:'gray.800'}}
              _active={{bg:'gray.800'}}
              _focus={{bg:'gray.800'}}
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon boxSize={12}  /> : <HamburgerIcon boxSize={16}  />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
        </Flex>
        <Center pos="fixed" w="100%" zIndex={2} bg={'gray.800'} borderBottom={1}
          borderStyle={'solid'}
          borderColor={'gray.700'}>
           <Collapse in={isOpen}>
            <Stack bg={'gray.800'} p={4} display={{ md: 'flex' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderStyle={'solid'}
                    borderColor={'gray.100'}
                    align={'start'}>
                    <Link py={2} href={'#'}>
                      <Heading size='lg'>This is the best chicken I've ever tasted!</Heading>
                    </Link>
                </Stack>
              </Stack>
            </Collapse>
        </Center>
    <Hero />
    </Box>
  )
}

const HamburgerStack = () => {
    return (
        <Stack
          bg={'gray.800'}
          p={4}
          display={{ md: 'flex' }}>
          {NAV_ITEMS.map((navItem) => (
            <HamburgerItems key={navItem.label} {...navItem} />
          ))}
        </Stack>
      );
}

const HamburgerItems = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <></>
  )
}

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }

  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About PPS',
      href: '/Learn',
    },
    {
      label: 'Make an Enquiry',
      href: '/get-started',
    },];


import React from 'react'
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

export default function HamburgerMenu({ label, children, href }: NavItem){
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
            aria-label={'Toggle Navigation'}/>
        </Flex>
        <Center pos="fixed" w="100%" zIndex={2} bg={'gray.800'} >
          <Collapse in={isOpen}>
            <MobileNav />
          </Collapse>
        </Center>
    </Box>
  )
}

const MobileNav = () => {
  return (
    <Stack
    bg={'gray.800'} p={4} display={{ md: 'flex' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack  bg={'gray.800'}spacing={4} onClick={children && onToggle}>
      <Flex py={2} as={Link} href={href ?? '#'} justify={'center'} align={'center'} _hover={{ textDecoration: 'none',}}>
        <Heading size='lg' bg={'gray.800'}>
          {label}
        </Heading>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={'gray.200'}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'HOME',
    href: '/',
  },
  {
    label: 'ABOUT',
    href: '/Learn',
  },
  {
    label: 'CONTACT US',
    href: '/get-started',
  },

];

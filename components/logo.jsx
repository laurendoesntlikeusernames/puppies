import React from "react"
import Image from 'next/image'
import dog from '../public/logo.png'
import { Box, Avatar } from "@chakra-ui/react"

function Logo() {
	return (
	<Box >
	   <Avatar
	    size={'sm'}
	    src='../public/logo.png'
	   />
    </Box>
	)
}

export default Logo
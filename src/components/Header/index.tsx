import React from 'react'
import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { Profile } from './Profile'
import { Notifications } from './Notifications'
import { Search } from './Search';
import { Logo } from './Logo'

export function Header () {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return(
    <Flex 
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center" 
    >
      <Logo />
      <Search />

      <Flex align="center" ml="auto">
        <Notifications />
        <Profile showProfileData={isWideVersion}/>
      </Flex>
    </Flex>
  )
}
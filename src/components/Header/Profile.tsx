import React from "react";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({showProfileData=true}: ProfileProps){
  return(
    <Flex align="center">
      { showProfileData && (
        <Box m="4" textAlign="right">
          <Text>Luciano</Text>
          <Text color="gray.300" fontSize="small">
            luciano@gmail.com
          </Text>
        </Box>
      )}
      
      <Avatar
        size="md"
        name="Luciano Alves" 
        src="https://github.com/lucianocarlin.png"
      />
    </Flex>
  )
}
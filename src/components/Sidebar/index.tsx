import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { NavSection } from './NavSection';
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';

export function Sidebar() {
  return(
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" aling="flex-start">
        <NavSection title="GERAL">
          <NavLink icon={RiDashboardLine}>Dashboard</NavLink>  
          <NavLink icon={RiContactsLine}>Usuarios</NavLink>   
        </NavSection>

        <NavSection title="AUTOMAÇÃO">
          <NavLink icon={RiInputMethodLine}>Formulários</NavLink>  
          <NavLink icon={RiGitMergeLine}>Automação</NavLink>     
        </NavSection>
      </Stack>
    </Box>
  )
}
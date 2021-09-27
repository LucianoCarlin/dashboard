import React from "react";
import { Stack } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";
import { 
  RiDashboardLine, 
  RiContactsLine, 
  RiInputMethodLine, 
  RiGitMergeLine,
} from "react-icons/ri";

export function SidebarNav() {
  return(
    <Stack spacing="12" aling="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>  
        <NavLink icon={RiContactsLine} href="/users">Usuarios</NavLink>     
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink icon={RiInputMethodLine} href="/forms">Formulários</NavLink>  
        <NavLink icon={RiGitMergeLine} href="/automation">Automação</NavLink>     
      </NavSection>
    </Stack>
  )
}
import React from "react";
import Link from "next/link";

import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup' 

import { 
  Box,  
  Button,  
  Divider,  
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack, 
} from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { Input } from "../../components/Form/Input";
import { Sidebar } from "../../components/Sidebar";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatório").min(6,"No mínimo 6 caracteres"),
  password_confirm: yup.string().oneOf([
    null, yup.ref('password')  
  ], "As senhas precisam ser iguais")
})

export default function CreateUser() {
  const { register, handleSubmit, formState, formState: { errors }} = useForm<CreateUserFormData>({
    resolver: yupResolver(createUserFormSchema)
  })

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)
  }

  return(
    <Box>
    <Header />

    <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
      <Sidebar />

      <Box 
        as="form" 
        flex="1" 
        borderRadius={8} 
        bg="gray.800" 
        p={["6", "8"]}
        onSubmit={handleSubmit(handleCreateUser)}
      >
        <Heading size="lg" fontWeight="normal">Criar usuario</Heading>

        <Divider my="6" borderColor="gray.700"/>

        <VStack>
          <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
            <Input 
              type="name" 
              label="Nome Completo" 
              {...register("name")} 
              error={errors.name} 
            />
            <Input 
              type="email" 
              label="E-mail" 
              {...register("email")} 
              error={errors.email} 
            />
          </SimpleGrid>

          <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
            <Input 
              type="password" 
              label="Senha" 
              {...register("password")} 
              error={errors.password} 
            />
            <Input 
              type="password" 
              label="Confirmar senha" 
              {...register("password_confirm")} 
              error={errors.password_confirm} 
            />
          </SimpleGrid>
        </VStack>

        <Flex mt="8" justify="flex-end">
          <HStack spacing="4">
            <Link href="/users" passHref>
              <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>   
            </Link>
            <Button 
              type="submit" 
              colorScheme="pink"
              isLoading={formState.isSubmitting}
            >
            Salvar
            </Button> 
          </HStack>
        </Flex>

      </Box>
    </Flex>
  </Box>
  )
}

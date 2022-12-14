import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, Link as ChakraLink, useBreakpointValue } from "@chakra-ui/react";
import Link from 'next/link';
import { useEffect } from "react";
import { RiAddLine } from "react-icons/ri";
import Header from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";

export default function UsersList() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })
  
    useEffect(() => {
        fetch('http://localhost:3000/api/users')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }, [])

    return (
    <Box>
        <Header />
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
            <Sidebar />
            <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                <Flex mb="8" justify="space-between" align="center">
                    <Heading size="lg" fontWeight="normal">
                        Usuários
                    </Heading>
                    <Link href="users/create" passHref>
                        <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="pink"
                            leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                        >
                            Criar novo
                        </Button>
                    </Link>
                </Flex>

                <Table>
                    <Thead>
                        <Tr>
                            <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                <Checkbox colorScheme="pink" />
                            </Th>
                            <Th>
                                Usuário
                            </Th>
                            <Th>
                                {isWideVersion && 'Data de cadastro'}
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td px={["4", "4", "6"]}>
                                <Checkbox colorScheme="pink" />
                            </Td>
                            <Td>
                                <Box>
                                    <Text fontWeight="bold">
                                        Bianca Hoffer
                                    </Text>
                                    <Text fontSize="small" color="gray.300">
                                        bianca.mhm1@gmail.com
                                    </Text>
                                </Box>
                            </Td>
                            <Td>
                                {isWideVersion && '12 de agosto de 2022'}
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
                <Pagination />
            </Box>
        </Flex>
    </Box>
  );
}
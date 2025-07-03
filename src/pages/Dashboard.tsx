import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';

const Dashboard = () => {
  return (
    <Box  bg="green.50" py={100} display="flex" justifyContent="center" alignItems="center">
      <Container maxW="6xl">
        <VStack gap={6} textAlign="center">
          <Heading size="4xl" color="gray.800">
            Welcome to ClaimTech.io! 🎉
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Congratulations, you have done it!
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Dashboard; 
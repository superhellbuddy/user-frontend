import { Box, Container, Heading, Text, VStack, Button } from "@chakra-ui/react"
import { useBrand } from "../../hooks/useBrand"

export default function OnboardingPage() {
  const brand = useBrand()

  return (
    <Container maxW="container.lg" py={8}>
      <VStack gap={8} align="center">
        <Box textAlign="center">
          <Heading 
            as="h1" 
            size="2xl" 
            color="brand.700"
          >
            Welcome to {brand.name}
          </Heading>
          
          <Text 
            fontSize="xl" 
            mt={4} 
            color="gray.600"
          >
            Let's get started with your claim process
          </Text>
        </Box>
        
        <Button 
          size="lg" 
          colorScheme="brand"
        >
          Start Now
        </Button>
      </VStack>
    </Container>
  )
}


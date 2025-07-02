import { useState } from 'react'
import { Box, Container, Heading, Text, VStack, HStack } from '@chakra-ui/react'
import { Button } from './components/ui/button'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxW="4xl" py={8}>
      <VStack gap={8} textAlign="center">
        <HStack gap={6}>
          <Box>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
          </Box>
          <Box>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </Box>
        </HStack>
        
        <Heading size="3xl" color="blue.600">
          Vite + React + Chakra UI v3
        </Heading>
        
        <VStack gap={4}>
          <Button 
            onClick={() => setCount((count) => count + 1)}
            colorScheme="blue"
            size="lg"
          >
            count is {count}
          </Button>
          <Text fontSize="lg" color="gray.600">
            Edit <code>src/App.tsx</code> and save to test HMR
          </Text>
        </VStack>
        
        <Text color="gray.500">
          Click on the Vite and React logos to learn more
        </Text>
      </VStack>
    </Container>
  )
}

export default App

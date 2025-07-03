import { useState } from 'react'
import { Box, Container, Heading, Text, VStack, HStack } from '@chakra-ui/react'
import { Button } from './components/ui/button'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxW="4xl" py={8}>
      <VStack gap={8} textAlign="center">
        <Heading size="3xl" color="blue.600">
          Vite + React + Chakra UI v3
        </Heading>
      </VStack>
    </Container>
  )
}

export default App

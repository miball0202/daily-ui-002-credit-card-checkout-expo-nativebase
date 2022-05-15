import React from 'react';
import {
  VStack,
  NativeBaseProvider,
  Box,
  FormControl,
  Text,
  Input,
  HStack,
  Checkbox,
  Icon,
  Button,
} from 'native-base';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box safeAreaTop />
      <Box flex={1} bg="coolGray.600" />
      <Box flex={2} bg="coolGray.800">
        <VStack flex={1} space={3} mx={3} mt={3} borderTopRadius={25}>
          <FormControl px={5} pt={5}>
            <FormControl.Label>
              <Text color="white">Card Number</Text>
            </FormControl.Label>
            <Input color="white" />
          </FormControl>
          <FormControl px={5}>
            <FormControl.Label>
              <Text color="white">Name</Text>
            </FormControl.Label>
            <Input color="white" />
          </FormControl>
          <HStack>
            <FormControl px={5} w="50%">
              <FormControl.Label>
                <Text color="white">Expire Date</Text>
              </FormControl.Label>
              <Input color="white" type="date" />
            </FormControl>
            <FormControl px={5} w="50%">
              <FormControl.Label>
                <Text color="white">CVC / CVV2</Text>
              </FormControl.Label>
              <Input color="white" type="password" />
            </FormControl>
          </HStack>
          <HStack px={5} pt={3}>
            <Icon as={FontAwesome} name="camera" size="md" color="white" />
            <Text color="white" pl={2}>
              Scan card
            </Text>
          </HStack>
          <HStack px={5} pt={3}>
            <Checkbox />
            <Text color="white" pl={2}>
              Remember your card?
            </Text>
          </HStack>
          <Button mx={5} mt={3}>
            Checkout
          </Button>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}

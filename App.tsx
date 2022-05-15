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
  ScrollView,
  Divider,
} from 'native-base';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box safeAreaTop />
      <Box flex={1} bg="white">
        <Box flex={3}>
          <ScrollView bg="white" borderTopRadius={25} mx={3} mt={5}>
            <VStack space={3} px={3} pt={3}>
              <VStack>
                <HStack>
                  <Text flex={3}>Original KeyCaps 144</Text>
                  <Text flex={1}>× 1</Text>
                  <Text flex={1}>$45.5</Text>
                </HStack>
                <Divider mt={1} />
              </VStack>
              <VStack>
                <HStack>
                  <Text flex={3}>Custom Keyboard Kit</Text>
                  <Text flex={1}>× 1</Text>
                  <Text flex={1}>$129.9</Text>
                </HStack>
                <Divider mt={1} />
              </VStack>
              <VStack>
                <HStack>
                  <Text flex={3}>Pre-Cut PE Foam</Text>
                  <Text flex={1}>× 1</Text>
                  <Text flex={1}>$12.98</Text>
                </HStack>
                <Divider mt={1} />
              </VStack>
            </VStack>
          </ScrollView>
        </Box>
        <Box bg="white" flex={1} mx={3} borderBottomRadius={25}>
          <VStack mx={3}>
            <HStack px={3}>
              <Text flex={3}>Total amount</Text>
              <Text flex={1}>× 1</Text>
              <Text flex={1}>$188.38</Text>
            </HStack>
            <Divider mt={1} />
          </VStack>
        </Box>
      </Box>
      <Box flex={2} bg="white" justifyContent="center">
        <VStack
          flex={1}
          space={3}
          mt={3}
          borderTopRadius={25}
          bg="coolGray.800"
        >
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
              <Input color="white" placeholder="MM/YY" />
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
            Checkout | $188.38
          </Button>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}

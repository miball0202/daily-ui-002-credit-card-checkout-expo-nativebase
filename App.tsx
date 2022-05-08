import React from 'react';
import {
  VStack,
  NativeBaseProvider,
  Box,
} from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box safeAreaTop />
      <Box flex={1} bg="coolGray.600" />
      <Box flex={2} bg="coolGray.800">
        <VStack bg="indigo.500" flex={1} mx={3} mt={3} borderTopRadius={25} />
      </Box>
    </NativeBaseProvider>
  );
}

import {Box, Flex, Button, Input} from '@chakra-ui/react';
import Image from 'next/image'


const NavBar = () => {
  return (
    <Flex bg="gray.100" justify="space-between" align="center" p="4" w="100%" as='nav' wrap='wrap'>
      <Box pr={4}>
        <Image
          src="/logo.JPG"
          alt="logo"
          width={200}
          height={60}
        />
      </Box>
      <Box display="flex" alignItems="center">
        <Input placeholder="Search..." size="lg" />
      </Box>
      <Box  flex="0 0 auto" pl={[0,4]}>
        <Button>Write Post</Button>
      </Box>
    </Flex>


  );
};

export default NavBar;

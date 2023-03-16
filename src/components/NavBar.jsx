import {Box, Flex, Button, Input} from '@chakra-ui/react';
import Image from 'next/image'


const NavBar = () => {
  return (
    <Flex bg="gray.100" justify="space-between" align="center" p="4">
      <Box>
      <Image
                src="/logo.JPG"
                alt="NextGenCoders Logo"
                // className={styles.vercelLogo}
                width={200}
                height={60}
                priority
              />
      
             
      </Box>
      <Box>
        <Input placeholder="Search..." />
      </Box>
      <Box>
        <Button colorScheme="teal" variant="outline">
          Write Post
        </Button>
      </Box>
    </Flex>

  );
};

export default NavBar;

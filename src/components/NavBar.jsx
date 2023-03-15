import { useState } from 'react';
import {Box, Flex, Button, Input, InputGroup, InputRightElement, IconButton} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import Image from 'next/image'


const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (e) => {
    
    console.log("Searching for:", searchQuery);
    // logic to be added to display search results here
  };

  const handleInputChnage = (e) => {
    setSearchQuery(e.target.value);
  };

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
        <InputGroup size="lg">
          <InputRightElement pointerEvents="none">
            <IconButton aria-label="search database" icon={<SearchIcon />} onClick={handleSearch}/>

          </InputRightElement>
           
          <Input placeholder="Search..." value={searchQuery} onChange={handleInputChnage} />

          
        </InputGroup>
       
        
      </Box>
      
        
     
      <Box  flex="0 0 auto" pl={[0,4]}>
        <Button>Write Post</Button>
      </Box>
    </Flex>


  );
};

export default NavBar;

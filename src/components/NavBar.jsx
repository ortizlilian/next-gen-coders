import { useState } from 'react';
import {Box, Flex, Button, Input, InputGroup, InputRightElement, IconButton} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import Image from 'next/image'


const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showPostForm, setShowPostForm] = useState(false);
  
  const handleSearch = (e) => {
    
    console.log("Searching for:", searchQuery);
    // logic to be added to display search results here
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleWritePostClick = () => {
    setShowPostForm(true);
  }

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
           
          <Input placeholder="Search..." value={searchQuery} onChange={handleInputChange} />

        </InputGroup>

      </Box>
   
      <Box  flex="0 0 auto" pl={[0,4]}>
        <Button onClick={handleWritePostClick}>Write Post</Button>
      </Box>
      {/* {showPostForm && (
        // Conditionally render the form when showPostForm is true
        // Replace this with the actual form component
        <Box mt={4} p={4} bg="white">
          <Input placeholder="Post Title" />
          <Input placeholder="Post Body" mt={2} />
          <Button mt={2}>Submit</Button>
        </Box>)} */}
    </Flex>


  );
};

export default NavBar;

import { useState } from 'react';
import {Box, Flex, Button, Input, InputGroup, InputRightElement, IconButton} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import Image from 'next/image'


const NavBar = () => {
// searchQuery:holds the current value initialized to an empty string ('') of the search query entered by the user in the search input field
// showPostForm: determines whether the "Write Post" form should be shown or hidden initialized to false, meaning that the form is initially hidden. When the user clicks on the //"Write Post" button, the setShowPostForm function is called to set this state variable to true, which will cause the form to be displayed.
  const [searchQuery, setSearchQuery] = useState('');
  const [showPostForm, setShowPostForm] = useState(false);
  
  const handleSearch = (e) => {
    
    console.log("Searching for:", searchQuery);
    // logic to be added to display search results here
  };

  // this function sets the state of searchquery to value entered by user
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  // this function when write post is click,toggles value of showPostform to show or hide form.
  const handleWritePostClick = () => {
    setShowPostForm(true);
  };


  return (
    //Flex container having logo, search box and write post button
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

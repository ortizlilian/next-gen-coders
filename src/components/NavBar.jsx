import { useState } from 'react';
// import {Box, Flex, Button, Input, InputGroup, InputRightElement, IconButton} from '@chakra-ui/react';
// import { SearchIcon } from '@chakra-ui/icons';
// import { SearchIcon } from '@chakra-ui/icons';
import Image from 'next/image'
import Link from 'next/link';


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
  // const handleWritePostClick = () => {
  //   setShowPostForm(true);
  // };


  return (
    <nav className="bg-gray-100 flex justify-between items-center p-4 w-full flex-wrap">
    <div className="pr-4">
      <Image src="/logo.JPG" alt="logo" width={200} height={60} />
    </div>
    <div className="flex items-center">
      <div className="flex">
        <input
          type="text"
          className="w-full px-4"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          onClick={handleSearch}
        >
      {/* <SearchIcon /> */}
        </button>
      </div>
    </div>
    <div className="flex-0 pl-0 md:pl-4">
      <Link href="/form/form">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
        Write Post
      </button>
      </Link>
      
    </div>
  </nav>

  
      // {/* {showPostForm && (
      //   // Conditionally render the form when showPostForm is true
      //   // Replace this with the actual form component
      //   <Box mt={4} p={4} bg="white">
      //     <Input placeholder="Post Title" />
      //     <Input placeholder="Post Body" mt={2} />
      //     <Button mt={2}>Submit</Button>
      //   </Box>)} */}



  );
};

export default NavBar;

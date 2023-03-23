import { useState } from 'react';
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
    <nav className="bg-white-100 flex justify-between items-center p-4 w-full flex-wrap">
      <div className="pr-4">
        <Link href={"/"}>
          <Image src="/logo.JPG" alt="logo" width={200} height={60} />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex">
          <input
            type="text"
            className="w-full px-20 bg-gray-100 border border-gray-900 rounded-lg"            
            placeholder="Search..."
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
            onClick={handleSearch}
          >
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
  );
};

export default NavBar;

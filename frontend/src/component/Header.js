import {Box,styled} from '@mui/material'
import React from 'react'
import backHeader from '../images/jobbg.jpg'   
import SearchInputEl from './SearchInputEl'

const Header = () => {
  const StyleHeader = styled(Box)(({theme})=>(
    {
      minHeight:400,
      display:'flex',
      justifyContent:'center',
      alignItems: 'center',
      backgroundImage: `url(${backHeader})`, 
      backgroundSize:"cover",
      backgroundPosition:"center",
      backgroundColor:theme.palette.secondary.main
    }
  ));
  
  return (
    <>
      <StyleHeader >
        <SearchInputEl/>
      </StyleHeader>
    </>
  )
}

export default Header
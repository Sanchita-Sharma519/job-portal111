import {Box,styled} from '@mui/material'
import React from 'react'
import backHeader from '../images/jobbg.jpg'   

const Header = () => {
  const StyleHeader = styled(Box)(({theme})=>(
    {
      minHeight:400,
      display:'flex',
      justifyContent:'center',
      backgroundImage: `url(${backHeader})`, 
      backgroundSize:"cover",
      backgroundPosition:"center",
      backgroundColor:theme.palette.secondary.main
    }
  ));
  
  return (
    <>
      <StyleHeader >
      </StyleHeader>
    </>
  )
}

export default Header
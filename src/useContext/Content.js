import React from 'react'
import {useTheme} from './themeContext'

let Content = () => {
  let { theme } = useTheme(); 
    return (
        <div style={{ color: theme === 'dark' ? 'black' : 'red' }}>
             Here's our main content
           </div>
    )
}

export default Content

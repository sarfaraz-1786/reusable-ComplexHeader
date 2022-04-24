import React from 'react'
import Footer from '../../common/footer/Footer'
import Header from '../header/Header'

interface LayoutProps  { 
    children: React.ReactNode
 }

 const Layout : React.FC<LayoutProps> = props => {
    return (
        <div>
            <Header/>
              {props.children}
            <Footer/>
        </div>
      )
 }


export default Layout
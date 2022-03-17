import React from 'react'
import BlogPost from '../comp/BlogPost'

const Home = () => {

  // https://medium.com/@eggradients/dark-gradient-fbaaf5c8b443  for Back Ground Color.

  const homeConStyle = {
    height : "95vh",
    backgroundImage: "linear-gradient(to right top, #28313B, #485461)", 

    display : "flex",
    alignItems : "center",
    justifyContent : "center",

    color : "white"
  }

  return (
    <>
      <div className="container-fluid" style={homeConStyle}>
        <h3>Welcome to Elsner Task-1</h3>
      </div>
      
      <div className="container pt-2">
        <h1 className="text-center">Blogs</h1>
        <hr />
        <div className="row">
            <BlogPost />
        </div>
      </div>
    </>
  )
}

export default Home

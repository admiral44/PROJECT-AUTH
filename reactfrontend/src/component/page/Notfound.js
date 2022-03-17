import React from 'react'

const Notfound = () => {

    const Constyle = {
        backGroundColor : "#f5f5f5",
        height : "90vh",
        display : "flex",
        alignItems : "center",
        justifyContent : "center"
    } 

  return (
    <>
        <div className="container" style={Constyle}>
            <div className="row">
                <div className="col-12">
                    <h1>404 Page Notfound..!!</h1>
                </div>          
            </div>
        </div>
    </>
  )
}

export default Notfound
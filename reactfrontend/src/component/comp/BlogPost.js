import React from 'react'
import { useGetAllPostQuery } from '../../serves/allinfoPost'

const BlogPost = () => {

    const resInfo = useGetAllPostQuery()

    // console.log(resInfo.data)

    if (resInfo.isLoading) return <div>Loading.....</div>
    if (resInfo.isError) return <div>Error Occured.....{resInfo.error.error}</div>


    const CardStyle = {
        maxWidth: "100%",
    }

    return (
        resInfo.data.map((info, i) =>
            <div className="col-sm-12 col-md-4 col-lg-4">
                <div class="card border-dark mb-3" style={CardStyle} key={i}>
                    <div class="card-header">{info.empEmail}</div>
                    <div class="card-body text-dark">
                        <h5 class="card-title">Dark card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        )
    )
}

export default BlogPost

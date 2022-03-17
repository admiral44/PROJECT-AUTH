import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const allinfoPost =  createApi({
    reducerPath : 'allinfoPost',
    baseQuery : fetchBaseQuery({
        baseUrl : 'http://localhost:8000/api/'
    }),

    // Get all information using Redux
    endpoints : ( builder ) => ({

        // Display all Data.
        getAllPost : builder.query ({
            query: () => ({
                url : 'orgemp',
                method : 'GET'
            })
        }),

        getOnlyPost : builder.query ({
            query: (id) => ({
                url : `orgemp/${id}`,
                method : 'GET'
            })
        }),

        regEmpOrg : builder.mutation ({
            query: (newEmp) => {
                console.log("New Data PUSH : ",newEmp)
                return {
                    url : 'orgemp',
                    method : 'POST',
                    body : newEmp,
                    headers : {
                        'Content-type' : 'application/json; charset=UTF-8',
                    }
                }
            }
        }),
    })

})

export const { useGetAllPostQuery, useGetOnlyPostQuery, useRegEmpOrgMutation } = allinfoPost;

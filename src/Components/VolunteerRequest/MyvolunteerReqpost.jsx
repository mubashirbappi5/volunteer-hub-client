import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../Context/AuthContext/AuthProvider';
import Lottie from 'lottie-react';
import nodata from '../../assets/Animation - 1735041941677.json';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyvolunteerReqpost = () => {
    const [reqPosts,setreqPosts] = useState([])
    const {user} = useContext(Authcontext)
    useEffect(()=>{
        fetch(`http://localhost:8000/volunteer?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setreqPosts(data)
        })
    },[user])
    const handleDelete =(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          })
          if (result.isConfirmed) {
          fetch(`http://localhost:8000/volunteer/${id}`,
            {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            }
            

          )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
            }
            const remaingsmyreq = reqPosts.filter((reqPost) =>reqPost._id !== id);
            setreqPosts(remaingsmyreq);
            console.log("delete done");
          })
        }
    }
    return (
        <>
        <div>
            {reqPosts.length === 0 ? (
                <>
                  <div className="w-8/12 mx-auto flex bg-base-100 flex-col">
                    <Lottie className='md:w-96 mx-auto' animationData={nodata}></Lottie>
                    <Link to={"/needposts"} className="btn btn-outline">
                      Join a Volunteer
                    </Link>
                  </div>
                </>
              ) : (
       
        <div>
             <h1>Volunteer Request Post</h1>
        <div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full mx-auto text-xs">
                      <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col className="w-24" />
                      </colgroup>
                      <thead className="dark:bg-gray-300 ">
                        <tr className="text-left border-b">
                          <th className="p-3 hover:text-orange-400">NO.</th>
                          <th className="p-3 hover:text-orange-400">
                            Post Title
                          </th>
                          <th className="p-3 hover:text-orange-400">
                            Category
                          </th>
                          <th className="p-3 hover:text-orange-400">
                            Deadline
                          </th>
                          <th className="p-3 hover:text-orange-400">
                           Location
                          </th>
                        </tr>
                      </thead>

                      {reqPosts.map((reqPost, index) => (
                        <tbody key={index}>
                          <tr className="border border-opacity-20 dark:border-gray-300  hover:bg-orange-100 dark:bg-gray-50">
                            <td className="p-3">
                              <p>{index + 1}</p>
                            </td>
                            <td className="p-3">
                              <h1 className="font-medium">{reqPost.title}</h1>
                            </td>
                            <td className="p-3">
                              <p className="hover:font-medium">
                                {reqPost.category}
                              </p>
                            </td>
                            <td className="p-3">
                              <p className="hover:font-medium">
                                {new Date(reqPost.deadline).toLocaleDateString()}
                              </p>
                            </td>
                            <td className="p-3">
                              <p className="hover:font-medium">
                                {reqPost.location}
                              </p>
                            </td>
                           
                            <td className="p-3 ">
                              <button
                              onClick={()=>handleDelete(reqPost._id)}
                                className="btn btn-sm"
                              >
                                Cancel
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  </div>
                </div>
          
            </div>
              )}
        </div>
           </>
       
    );
};

export default MyvolunteerReqpost;
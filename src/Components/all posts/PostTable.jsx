import React from 'react';

const PostTable = ({foundPosts}) => {
    console.log(foundPosts)
    return (
        <div>
            <div className={`overflow-x-auto `}>
                    
                     
                  
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
                          <th className='p-3 hover:text-orange-400'>
                            Volunteer Needed
                          </th>
                        </tr>
                      </thead>
                      {foundPosts.map((post,index)=>
                        <tbody key={index}>
                          <tr className="border border-opacity-20 dark:border-gray-300  hover:bg-orange-100 dark:bg-gray-50">
                            <td className="p-3">
                              <p>{index + 1}</p>
                            </td>
                            <td className="p-3 ">
                              <h1 className="font-medium">{post.title}</h1>
                            </td>
                            <td className="p-3">
                              <p className="hover:font-medium">
                                {post.category}
                              </p>
                            </td>
                            <td className="p-3">
                              <p className="hover:font-medium">
                                {new Date(post.deadline).toLocaleDateString()}
                              </p>
                            </td>
                            <td className="p-3">
                              <p className="hover:font-medium">
                                {post.location}
                              </p>
                            </td>
                           
                            <td className="p-3 ">
                            <p className="hover:font-medium">
                                {post.volunteers_needed}
                              </p>
                              
                            </td>
                          </tr>
                        </tbody>
                        )} 
                        </table>
                       
                        </div>
        </div>
    );
};

export default PostTable;
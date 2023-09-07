import React from 'react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function Course() {
    const[param,setParam]=useSearchParams()
  return (
    <div>
        <h1>Course table</h1>
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>ReactJs</td>
                    <td>12000</td>
                    <td>
                        <button onClick={()=>setParam({course:"React",price:"12000"})}>Detail</button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>ReactJs</td>
                    <td>12000</td>
                    <td>
                    <button onClick={()=>setParam({course:"JV",price:"14000"})}>Detail</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <h3>Khóa học : {param.get("course")}- Gía : {param.get("price")}</h3>
    </div>
  )
}

export default Course
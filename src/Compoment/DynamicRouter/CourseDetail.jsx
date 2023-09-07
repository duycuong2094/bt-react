import React from 'react'
import { useParams } from 'react-router-dom'

function CourseDetail() {
    // use Paraams là một hook được cung cấp bởi react-router -dom =>lấy trên url
    const param =useParams()
    console.log(param);
  return (
    <div>Khóa học có id là : {param.id}</div>
  )
}

export default CourseDetail
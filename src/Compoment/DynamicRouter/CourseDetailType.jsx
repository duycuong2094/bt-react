import React from 'react'
import { useParams } from 'react-router-dom';

function CourseDetailType() {
    const param = useParams();
    console.log(param);
  return (
    <div>
        Khóa học có id là :{param.id}- khóa học :{param.type}
    </div>
  )
}

export default CourseDetailType
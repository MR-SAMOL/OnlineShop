import React, { useContext } from 'react'
import { StuContext, } from './StuContext'

const StuComponent = () => {
    const {student,setStudent} = useContext(StuContext)
    const UpdateStudent =()=>{
        setStudent({
            id:222,
            nmae:"tata",
            gender:"Female",
            address:"PPP"
        })
    }  
    return (
      <div className=' w-[350px] h-auto'>
        <h3 className=' font-medium text-xl  '>ID:{student.id}</h3>
        <h3 className=' font-medium text-xl  '>NAME:{student.name}</h3>
        <h3 className=' font-medium text-xl  '>Gender:{student.gender}</h3>
        <h3 className=' font-medium text-xl  '>Address:{student.address}</h3>
        <button onClick={UpdateStudent} className=' mt-3 py-0.5 px-3.5 bg-green-600 font-medium cursor-pointer ' >Change</button>

     </div>
  )
}

export default StuComponent
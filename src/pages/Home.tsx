import styled from "styled-components";
import i1 from '../assets/i3.jpg';
const list = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const Home = () => {
  return (
    <Wrapper>
      <div className="bg-gradient-to-b from-[#9192F3] to-[#6667E5] rounded-[25px] w-full h-80 "></div>

      <div className="grid grid-cols-6 gap-6 mt-[25px]">

        <div className='col-start-1 col-end-5'>
            <LeftPart />
        </div>
        <div className='col-start-5 col-end-7' >
            <RightPart />
        </div>

      </div>
    </Wrapper>
  )
}

export default Home

const LeftPart = () => {
  return (
    <div className="bg-white  rounded-[25px] p-[25px]" >

      <div className="rounded-[25px] flex justify-between ">
        <h1 className="font-[550] text-[25px]" >Popular</h1>
        <h1 className="text-gray-300 font-[600] " >VIEW ALL</h1>
      </div>

      <div className="flex w-full overflow-x-scroll" >
        {
          list.map(item => (
            <div key={item} className=" mr-5 w-[200px] my-[20px] " >
              <div className="bg-slate-900 h-[200px] w-[180px] rounded-[20px]" >
                <img src={i1} alt="image" className="h-full w-full rounded-[20px]"   />
              </div>
              <div>
                <h1 className="text-black font-[600] text-[15px] mt-1 ">elerkmglekrmglekm</h1>
                <h1 className="text-gray-600 font-[300] text-[10px]  ">Title</h1>
              </div>
            </div>
          ))
        }
      </div>
      
    </div>
  )
}
const RightPart = () => {
  return (
    <div className="bg-white h-[400px] rounded-[25px] p-[25px]" >
      <div className="" >

      </div>
    </div>
  )
}
const Wrapper = styled.div`

`;

// #9192F3   #6667E5

// logo #7D7EED      icon #6263E4   #6C6CE6
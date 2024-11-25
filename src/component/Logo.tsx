import logo from '../assets/skill.svg'

const Logo = () => {
    return (
        <div className='flex items-center'>
            <img src={logo} className='h-[130px] mt-[70px]' alt="skill set" />
            <div className="h-[130px] flex justify-center items-center">
                <h1 className='text-[30px]' >Skill Set</h1>
            </div>
        </div>
    )
}

export default Logo
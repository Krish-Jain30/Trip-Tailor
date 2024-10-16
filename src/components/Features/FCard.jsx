
const FCard = (props) => {
  return (
    <div className='flex relative w-60 h-80 flex-col rounded-2xl  text-center items-center justify-center space-y-5 hover:shadow-md hover:transition hover:ease-in-out hover:delay-75'>
      <div className='absolute -top-5 card-image w-36'>
        <img src={props.image} alt="image" className="rounded-xl"/>
      </div>

      <div className='card-content absolute bottom-3 w-56 h-[50%] '>
        <h4 className='card-content-title title text-xl pb-2 text-[#DF6951] font-semibold'>
          {props.title}
        </h4>
        <p className="desc text-gray-500 ">
          {props.description}
        </p>
      </div>
      
    </div>
  )
}

export default FCard



const StepsContent = (props) => {
  return (
    <div className="flex gap-5 max-md:flex-wrap">
      <img src={props.image} alt="" className="w-16 rounded-xl"/>
      <div className="text">
        <h4 className="steps-text font-semibold pt-1">{props.title}</h4>
        <p className="text-sm text-gray-600">{props.meaning}</p>
      </div>
    </div>
  )
}

export default StepsContent

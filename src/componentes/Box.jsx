
const Box = ({task,index}) => {
  return (
    <div className="d-flex align-items-center eachBox" title="Drag to adjust tasks in order">
        <h6 className="rounded-2 shadow-sm py-3 px-2 w-100 list">{task}</h6>
        <button className="btn shadow-0 h-100 px-0"><i className="bi bi-three-dots-vertical"></i></button>
    </div>
  )
}

export default Box
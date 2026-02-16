
interface Props{
    AllButtons : ButtonData[]
}

export type ButtonData = {
    Image: string,
    Title: string,
    OnClick: (title:string) => void
    Checked: boolean
}
const Scrollbar = ({AllButtons} : Props) => {
  return (
    <>
    <div className=" btn-toolbar justify-content-center bg-secondary">
    <div className="btn-group-lg " role="group" aria-label="Basic radio toggle button group">
        {AllButtons.map((item) => (<>
        <input type="radio" className="btn-check" name={item.Title} id={item.Title} autoComplete="off" onChange={_e => item.OnClick(item.Title)} checked={item.Checked} />
        <label className="btn btn-outline-primary m-3" htmlFor={item.Title}><img src={item.Image} alt="" width='100' height='100' className="rounded"/></label></>))}
        </div>
    </div>
    
</>
  )
}

export default Scrollbar

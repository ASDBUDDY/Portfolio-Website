import Badges from "./Badges"

export type CardData = {
    Title: string,
    Image: string,
    Position: string,
    Contributions: string[],
    Excerpt: string,
    KeyHead: string[],
    KeyData: string[],
    Links: string
}
interface Props {
    data: CardData
}

const HorizontalCardCap = ({data}:Props) => {
   
  return (
    <>
  
    <div className="card border-0 bg-secondary bg-opacity-25 "  >
  <div className="row g-0">
    <div className="col-md-4 offset-md-1">
      <video src={data.Image} className=" d-block mw-100 mh-200 mt-5 " autoPlay muted loop />
    </div>
    <div className="col-md-5 offset-md-1 min-vh-80">
      <div className="card-body" style={{minHeight: '650px' }} >
        <h1 className="card-title mt-2"><strong>{data.Title}</strong></h1>
         <div className="mt-2 col-md-12">
           {data.Contributions.map((item) => (<Badges Type = {item}/>))}
        </div>
            <h2 className="mt-2 mb-2">Position: {data.Position}</h2>
        <p className="card-text"><em>{data.Excerpt}</em></p>
        <p className="card-text">
            <ul className="list-unstyled">
                {data.KeyHead.map((item,index)=>(<li><strong>{item} - </strong>{data.KeyData[index]}</li>))}
            </ul>


        </p>
        <p className="card-text"><small className="text-muted"><em>Links : </em><a href={data.Links} target="_blank" className="link-secondary link-offset-2 link-underline-opacity-50 link-underline-opacity-100-hover">{data.Title}</a> </small></p>
      </div>
    </div>
  </div>
</div>  
    </>
  )
}

export default HorizontalCardCap

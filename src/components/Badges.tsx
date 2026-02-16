
export const BadgeType ={
    Core : 'Core Mechanics',
    Anim: 'Animations',
    Backend:'Backend',
    Multi:'Multiplayer',
    VFX: 'VFX',
    UI:'UI',
    AI:'AI Systems',
    Sound:'Sound Systems',
} as const


interface Props{
    Type: string;
}
const Badges = ({Type}:Props) => {

    
      switch(Type){
        case BadgeType.Core:
            return <span className="badge rounded-pill bg-primary m-1">{Type}</span>
            break;
        case BadgeType.Anim:
            return <span className="badge rounded-pill bg-success m-1">{Type}</span>
            break;
        case BadgeType.Backend:
            return <span className="badge rounded-pill bg-info text-dark m-1">{Type}</span>
            break;
        case BadgeType.Multi:
            return <span className="badge rounded-pill bg-secondary m-1">{Type}</span>
            break;
        case BadgeType.VFX:
            return <span className="badge rounded-pill bg-warning text-dark m-1">{Type}</span>
            break;
        case BadgeType.AI:
            return <span className="badge rounded-pill bg-danger m-1">{Type}</span>
            break;
        case BadgeType.UI:
            return <span className="badge rounded-pill bg-light text-dark m-1">{Type}</span>
            break;
        case BadgeType.Sound:
            return <span className="badge rounded-pill bg-dark m-1">{Type}</span>
            break;
      }
    
  
}

export default Badges

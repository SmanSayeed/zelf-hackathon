
import './Logo.scss'
export default function Logo({type="normal-logo"}) {
 // type=normal or type=gradient
  return (
    <>
    <span className={`logo ${type}`}>
        Zelf.
    </span>
    
    </>
  )
}

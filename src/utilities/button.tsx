export default function Button(props:ButtonProps){
    return(<button disabled={props.disabled} className={props.classname} onClick={props.onclick} onSubmit={props.onsubmit} type={props.type}>{props.children}</button>)
}
interface ButtonProps{
    children:React.ReactNode;
    classname?:string;
    onclick?:()=>void
    onsubmit?:()=>void
    type:"submit" | "button"
    disabled:boolean
}
Button.defaultProps={
    classname:"btn btn-primary",
    type:"button",
    disabled:false
    
}
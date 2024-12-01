import React, { ReactElement } from "react"

export default function GenericList(props:GenericListprops){
    if(!props.list){
        if(props.loadingui)
            return props.loadingui
       return <>loading</>
    }
    else if(props.list.length===0){
        if (props.emptyui) {
            return props.emptyui
        }
        return <>no records</>
    }else{
        return props.children
    }
}
interface GenericListprops{
    list?:any,
    loadingui?: ReactElement,
    emptyui?:ReactElement,
    children:ReactElement
}
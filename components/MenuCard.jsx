import { useRouter } from 'next/router';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function MenuCard(props){
    const {
        headerName,
        icon,
        description,
        path,
    } = props

    const router = useRouter();

    const directPath = (path) => {
        return router.push(path)
    }

    return(
        // Object.values(menu).map(i =>{
        <div className="col-12 col-md-3 pb-4" key={`${uuidv4()}`}>
            <div className="card" style={{"border": "0px solid black", "height":"100%",}}  key={`${uuidv4()}`}>
                <div className="card-body">
                    <h4 className="card-title line">{headerName}</h4>
                    <div className="row card-text">
                        <div className="col-4 text-center">
                            <i className={`bi-${icon} bi-2x`}></i>
                        </div>
                        <div className="col-8" style={{color:"$accents8"}}>
                            <p style={{color:"$accents8"}}><small>{description}</small></p>
                        </div>
                    </div>
                    <div className="row justify-content-end mx-2">
                        <a className="btn-non" onClick={()=>{directPath(path)}}>เปิด</a>
                    </div>
                </div>
            </div>
        </div>
        // })
    )
}
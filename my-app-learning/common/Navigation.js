import Link from "next/link";
import React from "react";
import Image from "next/image";
import Styles from '../styles/Navigation.module.css'
 
const Navigation=() =>{
    return (
       <div className={Styles.mainnav}>
       <div className='container'>
        <div class="row">
           <div class="col-sm-2">
             <Image src='/logo.png' alt="Logo" width={100} height={50}/>
           </div>
           <div class="col-sm-8">.col-sm-8</div>
           <div class="col-sm-2">
             <div class="row">
                 <div class="col-sm-10">
                   <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                 </div>
                 <div class="col-sm-2">
                   <Image src='/search.svg' alt="searchicon" className={Styles.searchicon} width={20} height={20}/>
                 </div>
             </div>
           </div>
        </div>
      </div>
       </div>
      
        
    )

}
export default Navigation
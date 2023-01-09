import React, { useEffect, useState } from 'react'

const PaginationButtonsList = ({activePage,changePage}) => {
    
    useEffect(()=>{

        const callBack = (event) => {
            //console.log("callBack "+event.target.innerText)
            changePage(event.target.innerText);
            //event.target.className="active-btn"
        }
        
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener("click", callBack)
            if(activePage == btn.innerText){
                btn.className="active-btn"
            }
        })

        return () => {
            document.querySelectorAll('button').forEach(btn => {
                btn.removeEventListener("click", callBack)
                //btn.className=''
            })
        }
    })
    return (
        <div className="pagination-buttons-list">
            <button id='button-1'>1</button>
            <button id='button-2'>2</button>
            <button id='button-3'>3</button>
            <button id='button-4'>4</button>
            <button id='button-5'>5</button>

            <button id='button-6'>6</button>
            <button id='button-7'>7</button>
            <button id='button-8'>8</button>
            <button id='button-9'>9</button>
            <button id='button-10'>10</button>

            <button id='button-11'>11</button>
            <button id='button-12'>12</button>
            <button id='button-13'>13</button>
            <button id='button-14'>14</button>
            <button id='button-15'>15</button>

            <button id='button-16'>16</button>
            <button id='button-17'>17</button>
            <button id='button-18'>18</button>
            <button id='button-19'>19</button>
            <button id='button-20'>20</button>
        </div>
    )
}

export { PaginationButtonsList }
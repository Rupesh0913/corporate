import React from 'react'
import MainSection from "../main_section"
import {Data1, Data2, Data3} from "./data"

function Home() {
    return (
        <div>
            <MainSection {...Data1}/>
            <MainSection {...Data2}/>
            <MainSection {...Data3}/>
        </div>
    )
}

export default Home

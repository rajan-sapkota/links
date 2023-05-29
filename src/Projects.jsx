import './projects.css'
import { useState } from 'react';
function Projects(){
    
    
    return <>
        <div className='box' >
        <h3>PROJECTS</h3>
            <div className='box-containeer'>
                <div className="row">
                     <a href='https://dreamy-meerkat-ba026f.netlify.app/'>WEATHER APP</a>
                </div>
                <div className="row">
                    <a href='https://cheery-florentine-cbdabf.netlify.app/'>TIMER APP</a>
                </div>
                <div className='row'>
                    <a href='https://golden-selkie-0b5c69.netlify.app/'>FLAG APP</a>
                
                </div>
                <div className='row'>
                    <a href='https://effervescent-dodol-af5744.netlify.app/'>GAMES</a>

                </div>
                <div className='row'>
                    <a href='https://yelpcampbyrajan.onrender.com/'>YELPCAMP</a>

                </div>
                
            </div>

        </div>
        
    </>
}


export default Projects;
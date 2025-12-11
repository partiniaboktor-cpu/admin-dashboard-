import React, { Component } from 'react';
import '../Components/Skillcard.css';
import figma from '../Images/figma.svg'
import ai from '../Images/illustartor.svg'
import ae from '../Images/aftereffects.svg'
import ps from '../Images/ps.svg'
import vs from '../Images/vcode.svg'
import js from '../Images/js.svg'

const Skillcard = () => {
    const SkillImg = ({ src, alt, className }) => {
  return <img className={className} src={src} alt={alt} />;
};
    return ( <>
    
<div className='skill-rows'>

    <div className='card-box'>
<img className='skill-img' src={figma} alt="figma" />
<div className='bttnns'>
<button className='delskill'>Delete skill</button>
<button className='delskills'>Delete skill</button>
</div>
    </div>

        <div className='card-box'>
<img className='skill-img' src={ai} alt="figma" />
<div className='bttnns'>
<button className='delskill'>Delete skill</button>
<button className='delskills'>Delete skill</button>
</div>
    </div>


        <div className='card-box'>
<img className='skill-img' src={ae} alt="figma" />
<div className='bttnns'>
<button className='delskill'>Delete skill</button>
<button className='delskills'>Delete skill</button>
</div>
    </div>

</div>


<div className='skill-rows'>

    <div className='card-box'>
<img className='skill-img' src={ps} alt="figma" />
<div className='bttnns'>
<button className='delskill'>Delete skill</button>
<button className='delskills'>Delete skill</button>
</div>
    </div>

        <div className='card-box'>
<img className='skill-img' src={vs} alt="figma" />
<div className='bttnns'>
<button className='delskill'>Delete skill</button>
<button className='delskills'>Delete skill</button>
</div>
    </div>


        <div className='card-box'>
<img className='skill-img' src={js} alt="figma" />
<div className='bttnns'>
<button className='delskill'>Delete skill</button>
<button className='delskills'>Delete skill</button>
</div>
    </div>

</div>



    </> );
}
 
export default Skillcard;
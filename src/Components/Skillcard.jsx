
import React, { useEffect, useState } from "react";
import '../Components/Skillcard.css';
import figma from '../Images/figma.svg'
import ai from '../Images/illustartor.svg'
import ae from '../Images/aftereffects.svg'
import ps from '../Images/ps.svg'
import vs from '../Images/vcode.svg'
import js from '../Images/js.svg'
import { supabase } from "../Supabase";


const Skillcard = () => {

const [Skills, setSkills] = useState([]);
  

  useEffect(() => {
    async function getAllSkillsAPI() {
      const res = await supabase.from("Skills").select("*");
setSkills(res.data);

    }
    getAllSkillsAPI();
  }, []);


    const SkillImg = ({ src, alt, className }) => {
  return <img className={className} src={Skills.image} alt={alt} />;
};
    return ( <>
    

{
Skills.map((Skills)=>{
return  <>
<div className='skill-rows'>

    <div className='card-box'>
<img className='skill-img' src={Skills.Image} alt="figma" />
<div className='bttnns'>
<button className='delskill'>Delete skill</button>
<button className='delskills'>Delete skill</button>
</div>
    </div>

        {/* <div className='card-box'>
<img className='skill-img' src={Skills.Image}  alt="figma" />
<div className='bttnns'>
<button className='delskill'>Delete skill</button>
<button className='delskills'>Delete skill</button>
</div>
    </div>

        <div className='card-box'>
<img className='skill-img' src={Skills.Image}  alt="figma" />
<div className='bttnns'>
<button className='delskill'>Delete skill</button>
<button className='delskills'>Delete skill</button>
</div>
    </div> */}

</div>
</>
})
}

{/* {
Skills.map((Skills)=>{
return  <>
<div className='skill-rows'>

    <div className='card-box'>
<img className='skill-img' src={Skills.Image}  alt="figma" />
<div className='bttnns'>
<button className='delskill'>Delete skill</button>
<button className='delskills'>Delete skill</button>
</div>
    </div>

        <div className='card-box'>
<img className='skill-img' src={Skills.Image}  alt="figma" />
<div className='bttnns'>
<button className='delskill'>Delete skill</button>
<button className='delskills'>Delete skill</button>
</div>
    </div>


        <div className='card-box'>
<img className='skill-img' src={Skills.Image}  alt="figma" />
<div className='bttnns'>
<button className='delskill'>Delete skill</button>
<button className='delskills'>Delete skill</button>
</div>
    </div>

</div>

</>
})
} */}

    </> );
}
 
export default Skillcard;
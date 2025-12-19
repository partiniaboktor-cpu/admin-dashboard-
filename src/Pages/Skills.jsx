
import React, { useEffect, useState } from "react";
import Aside from '../Components/Aside';
import  Nav from '../Components/Nav';
import Title from '../Components/Title';
import '../Pages/Skills.css';
import Skillcard from '../Components/Skillcard';
import figma from '../Images/figma.svg';
import Experiencecard from '../Components/Experiencecard';
import  Footer from '../Components/Footer';
import { supabase } from "../Supabase";



const Skills = () => {

  const [loading, setLoading] = useState(true);
  const [main_titles, setmain_titles] = useState([]);
  

  useEffect(() => {
    async function getAllmain_titlesAPI() {
      const res = await supabase.from("main_titles").select("*");
setmain_titles(res.data);
      setLoading(false);
    }
    getAllmain_titlesAPI();
  }, []);

    if (loading) return <p>Loading...</p>;

    return ( <>
    
     <div className='bigdiv'>

        <div className='aside'>
           <Aside />
        </div>
      
      <div className='secdiv'>
        <Nav />

<div className='top-title'>
<Title title={main_titles[7]?.title} />
<div className='self'>
<button className='addskills'>+ Add skill</button>
<button className='addskill'>Search</button>
<button className='addskill'>Filters</button>
</div>
</div>


<Skillcard />





<Footer />


  </div>
    </div>
    
    
    
    
    </> );
}
 
export default Skills;
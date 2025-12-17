
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from '../Components/Nav.jsx' ;
import '../Pages/Home.css';
import Topbox from '../Components/Topbox.jsx';
import Title from '../Components/Title.jsx';
import Lightbuttons from '../Components/Lightbuttons.jsx';
import Aside from '../Components/Aside.jsx';
import Darkbutton from '../Components/Darkbutton.jsx';
import profile from '../Images/profile.svg' ;
import graph from '../Images/graph.svg' ;
import Footer from '../Components/Footer.jsx';
import { Link } from "react-router-dom";
import { supabase } from "../Supabase";


const Homedashboard = () => {

const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
const [toptables, settoptables] = useState([]);
const [small_table, setsmall_table] = useState([]);

  useEffect(() => {
    async function getAlltoptablesAPI() {
      const res = await supabase.from("toptables").select("*");
settoptables(res.data);
      setLoading(false);
    }
    getAlltoptablesAPI();
  }, []);

useEffect(() => {
    async function getAllsmall_tableAPI() {
      const res = await supabase.from("small_table").select("*");
setsmall_table(res.data);
      setLoading(false);
    }
    getAllsmall_tableAPI();
  }, []);

  if (loading) return <p>Loading...</p>;
  
    return ( <>

<div className='bigdiv'>

<div className='aside'>
    <Aside />
  
</div>


<div className='secdiv'>
<Nav />


<div className='lang'>
<button className="english">
  <Link to="/home">EN</Link>
</button>

<button className="english">
  <Link to="/arabichome">AR</Link>
</button>
</div>


<div className='topboxes'>

  {
toptables.map((toptables)=>{
return  <>
<Topbox 
  title1={toptables.title}
  title2={toptables.sub_title}
  title3={toptables.last_update}
/>
</>
})
}
</div>

<Title title="Quick actions" />

<div className='butns'>
<Lightbuttons title1="+ new project" />
<Lightbuttons title1="Edit hero section" />
<Lightbuttons title1="Edit About me" />
<Lightbuttons title1="Change services" />
</div> 

<div className='topboxess'>

  {
small_table.map((small_table)=>{
return  <>
<Topbox 
  title1={small_table.title}
  title2={small_table.sub_title}
  title3={small_table.last_update}
/>
</>
})
}
<div className='secbox'>

    <div className='part1'>
    <div className='ab'>About preview</div>
    <Darkbutton title="Edit" /> 
    </div>

   
    <div className='part2'>
    <img src={profile} alt="" />
    <h2 className='short'>Short bio</h2>
    </div>

</div>
</div>

<Title title="Featured projects preview" />

<div className='graph'>

<div className='secbox'>

    <div className='part11'>
    <div className='ab'>About preview</div>
    <Darkbutton title="view all" /> 
    </div>
    <div className='part22'>
    <h4 className='shorts'>.Updated about me</h4>
    <h4 className='shorts'>.Added new services</h4>
    <h4 className='shortss'>.New inquiry received</h4>
    <h4 className='shortss'>.New message received</h4>
    <h4 className='shortss'>.Added new skills</h4>
        
    </div>

</div>

<img src={graph} alt="" />
</div>

<Footer />

</div>
</div>





    </> );
}
 
export default Homedashboard;
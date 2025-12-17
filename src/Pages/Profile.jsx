
import React, { useEffect, useState } from "react";
import '../Pages/Profile.css';
import Aside from '../Components/Aside';
import Nav from '../Components/Nav';
import Title from '../Components/Title';
import myimg from '../Images/myimg.png' ;
import Footer from '../Components/Footer' ;
import { Link } from "react-router-dom";
import { supabase } from "../Supabase";


const Profile = () => {

      const [loading, setLoading] = useState(true);
    const [profile, setprofile] = useState([]);

    useEffect(() => {
        async function getAllprofileAPI() {
          const res = await supabase.from("profile").select("*");
    setprofile(res.data);
        }
        getAllprofileAPI();
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
  <Link to="/profile">EN</Link>
</button>

<button className="english">
  <Link to="/arabicprofile">AR</Link>
</button>
</div>

<Title title="Profile" />

<div className='myimgs'>
<img className='myimg' src={myimg} alt="" />
<button className='new'>Upload new photo</button>
</div>

<p className='size'>At least 800x800 px / recommended.JPG or PNG is allowed / Max 2MB</p>

<hr className='line'></hr>

<div className='hold'>

    <div className='personal-box'>
<h2 className='personal'>Personal info</h2>
<button className='edits'>Edit</button>
</div>

<div className='three'>
<div className='firstone'>
    <p className='full-name'>Full name</p>
    <p className='names'>{profile.full_name}</p>
</div>

<div className='firstone'>
    <p className='full-name'>Email</p>
    <p className='names'>{profile.email}</p>
</div>


<div className='firstone'>
    <p className='full-name'>Phone</p>
    <p className='names'>{profile.phone}</p>
</div>
</div>
</div>



<div className='hold'>

    <div className='personal-box'>
<h2 className='personal'>Location</h2>
<button className='edits'>Edit</button>
</div>

<div className='cairo'>{profile.location}</div>
</div>



<div className='hold'>

    <div className='personal-box'>
<h2 className='personal'>Bio</h2>
<button className='edits'>Edit</button>
</div>

    <p className='namess'>{profile.bio}</p>
</div>

<Footer />
</div>
    </div>
    </> );
}
 
export default Profile;
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import React, { Component } from 'react';
import Aside from '../Components/Aside';
import Nav from '../Components/Nav';
import Title from '../Components/Title';
import Topbox from '../Components/Topbox' ;
import '../Pages/Projects.css';
import Footer from '../Components/Footer';
import {supabase} from "../Supabase" ;



const Projects = () => {

const [loading, setLoading] = useState(true);
const [final_projects, setfinal_projects] = useState("") ;
const [main_titles, setmain_titles] = useState([]);

// console.log("projects:", projects, Array.isArray(projects));

  const data = [
    { name: "ecommerce", views: "43 views", date: "11/12/22", state: false },
    { name: "Brand Match", views: "45 views", date: "21/12/22", state: true },
    { name: "Kids toys", views: "50 views", date: "5/12/22", state: true },
    { name: "Candles", views: "30 views", date: "8/12/22", state: false },
    { name: "Maintanince", views: "120 views", date: "9/1/23", state: false },
    { name: "Furniture", views: "80 views", date: "9/1/23", state: true },
    { name: "Travel agency", views: "550 views", date: "15/12/23", state: false },
    { name: "Custom shop", views: "250 views", date: "6/6/23", state: true },
    { name: "Offering page", views: "1.2k views", date: "11/11/22", state: true },
  ];

const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("UX/UI Designs");

  const items = [
    "Photography",
    "Graphic design",
    "Web development"
  ];

  const handleSelect = (item) => {
    setSelected(item);
    setOpen(false);
  };
  


useEffect(()=>{

 async function getAllfinal_projectsAPI(){
  const res = await supabase.from("final_projects").select("*");
  setfinal_projects(res.data);
  // console.log(res.data);
    setLoading(false);
}
getAllfinal_projectsAPI();

},[]);

  useEffect(() => {
    async function getAllmain_titlesAPI() {
      const res = await supabase.from("main_titles").select("*");
setmain_titles(res.data);
    }
    getAllmain_titlesAPI();
  }, []);


async function deleteItem(id) {
  const res = await supabase.from("final_projects").delete().eq("id",id);
}




if (loading) return <p>Loading...</p>;

    return ( <>
    
    {/* {console.log(Projects)}  */}
    <div className='bigdiv'>

        <div className='aside'>
           <Aside />
        </div>
      
      <div className='secdiv'>
        <Nav />

        <div className='lang'>
        <button className="english">
          <Link to="/projects">EN</Link>
        </button>
        
        <button className="english">
          <Link to="/arabicprojects">AR</Link>
        </button>
        </div>
 
<Title title={main_titles[3]?.title} />

<div className='topboxes'>
<Topbox 
  title1="Filter"
  title2="Filter projects"
  title3="Last updated: [ 12 OCT ]"
/>

<Topbox 
  title1="Top views"
  title2="1.2k"
  title3="Last 7 days"
/>

<Topbox 
  title1="Total projects"
  title2="12"
  title3="Last 7 days"
/>

<Topbox 
  title1="Low views"
  title2="12"
  title3="Viewed"
/>
</div>

<Title title={main_titles[4]?.title} />

 <div className="table-container">

      {/* HEADER ACTIONS */}
     <div className="top-bar">
<div className="dropdown-wrapper">
      <button
        className="dropdown-btn"
        onClick={() => setOpen(!open)}
      >
        {selected} ▼
      </button>

      {open && (
        <div className="dropdown-menu">
          {items.map((item) => (
            <div
              key={item}
              className="dropdown-item"
              onClick={() => handleSelect(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>


<Link className='nes' to="/newproject">
  <h3 className='add-btn'>+ Add project</h3>
</Link>


  <div className="action-btn">
 Search
  </div>

  <div className="action-btn">
    Filter
  </div>

  <div className="action-btn">Download all</div>
</div>

      {/* TABLE */}
      <table className="project-table">
        <thead>
          <tr>
            <th>Projects ▼</th>
            <th>Projects</th>
            <th>Views</th>
            <th>Date published</th>
            <th>State</th>
            <th></th>
          </tr>
        </thead>

    <tbody>
  {final_projects.length > 0 ? (
    final_projects.map((final_projects, index) => (
      <tr key={final_projects.Project1 || index}>
        <td>{final_projects.Project2}</td>
        <td>{final_projects.views}</td>
        <td>{final_projects.date_published}</td>
        {/* <td>{final_projects.Tools}</td> */}
        <td>
          <label className="switch">
            <input type="checkbox" defaultChecked={final_projects.state} />
            <span className="slider"></span>
          </label>
        </td>

        <td className="icons22">
          <button onClick={()=>deleteItem(final_projects.id)} className="icon-btn">Delete</button>
          <Link to={/Editproject/} className="nes">
            <h3 className="icon-btn">Edit</h3>
          </Link>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="6">No projects found</td>
    </tr>
  )}
</tbody>
      </table>

      {/* PAGINATION */}
      <div className="pagination">
        <button className="page-btn">Previous</button>
        <p>Page 1 of 10</p>
        <button className="page-btn dark">Next</button>
      </div>
    </div>


{
  final_projects.map((project) =>{
    console.log(project)
  })
}


<Footer />

      </div>
    </div>
    </> );
}
 
export default Projects;
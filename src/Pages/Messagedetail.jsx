import React, { useEffect, useState } from "react";
import Aside from '../Components/Aside';
import Nav from '../Components/Nav';
import '../Pages/Messagedetail.css';
import { supabase } from "../Supabase";

const Messagedetail = () => {

  const [loading, setLoading] = useState(true);
const [messages, setmessages] = useState([]);


  useEffect(() => {
    async function getAllmessagesAPI() {
      const res = await supabase.from("messages").select("*");
setmessages(res.data);
      setLoading(false);
    }
    getAllmessagesAPI();
  }, []);
  
    if (loading) return <p>Loading...</p>;

    return ( <>
    
    <div className='bigdiv'>

<div className='aside'>
    <Aside />
</div>

<div className='secdiv'>
<Nav />

 <div className="message-container">

      {/* Header */}
      <div className="message-header">
        <div className="sender-info">
          <div className="avatar-placeholder"></div>

          <div className="sender-text">
            <h3 className="sender-name">{messages[0]?.name}</h3>
          </div>
        </div>

        <span className="message-date">{messages[0]?.message_date}</span>
      </div>

      {/* Title */}
      <h2 className="message-title">{messages[0]?.message_title}</h2>

      {/* Body */}
      <p className="message-body">
        {messages[1]?.message_detail}
      </p>

      {/* Icons Removed */}

      {/* Input box */}
      <div className="reply-box">
        <div className="reply-dots">....</div>
        <input
          className="reply-input"
          placeholder="Click here to type or forward"
        />
        <button className="reply-send">Send</button>
      </div>
    </div>



</div>
       </div> 
    </> );
}
 
export default Messagedetail;
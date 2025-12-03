import React, { Component } from 'react';
import '../Pages/Messages.css';
import Aside from '../Components/Aside';
import Nav from '../Components/Nav';
import Title from '../Components/Title';
import Topbox from '../Components/Topbox';
import myimg from '../Images/myimg.png';
import trash from '../Images/delete.svg';
import Pagenumber from '../Components/Pagenumber';
import Footer from '../Components/Footer';
import { Link } from "react-router-dom";


const Messages = () => {
  return (
    <>
      <div className='bigdiv'>

        <div className='aside'>
          <Aside />
        </div>

        <div className='secdiv'>
          <Nav />

<div className='lang'>
<button className="english">
  <Link to="/messages">EN</Link>
</button>

<button className="english">
  <Link to="/arabicmessages">AR</Link>
</button>
</div>

          <div className='top-messages'>
            <Title title="الرسائل" />

            <div className='right-msg'>
              <button className='allmsg'>الكل</button>
              <button className='allmsgs'>غير مقروء</button>
              <button className='allmsgs'>مهم</button>
            </div>
          </div>

          <div className='topboxes'>
            <Topbox
              title1="إجمالي الرسائل"
              title2="{2389}"
              title3="هذا الشهر"
            />

            <Topbox
              title1="الرسائل المرسلة"
              title2="{1494}"
              title3="هذا الشهر"
            />

            <Topbox
              title1="الرسائل المستلمة"
              title2="{895}"
              title3="هذا الشهر"
            />
          </div>

          <div className='allmsgsfield'>

            <div className='msgs-type'>
              <div className='tick'></div>
              <img className='sender-img' src={myimg} alt="sender image" />
              <h4 className='sender-name'>بارتينيا بُكطر</h4>
              <button className='user'>اختبار المستخدم</button>
              <p className='sender-msg'>
                مرحباً بارتينيا، نحتاج لإجراء اختبار مستخدم يوم الاثنين،<br />
                الرجاء إضافتي إلى مجموعة المشروع.
              </p>
              <img src={trash} alt="" />
            </div>

            <div className='msgs-type'>
              <div className='tick'></div>
              <img className='sender-img' src={myimg} alt="sender image" />
              <h4 className='sender-name'>بارتينيا بُكطر</h4>
              <button className='user'>اختبار المستخدم</button>
              <p className='sender-msg'>
                مرحباً بارتينيا، نحتاج لإجراء اختبار مستخدم يوم الاثنين،<br />
                الرجاء إضافتي إلى مجموعة المشروع.
              </p>
              <img src={trash} alt="" />
            </div>

            <div className='msgs-type'>
              <div className='tick'></div>
              <img className='sender-img' src={myimg} alt="sender image" />
              <h4 className='sender-name'>بارتينيا بُكطر</h4>
              <button className='user'>اختبار المستخدم</button>
              <p className='sender-msg'>
                مرحباً بارتينيا، نحتاج لإجراء اختبار مستخدم يوم الاثنين،<br />
                الرجاء إضافتي إلى مجموعة المشروع.
              </p>
              <img src={trash} alt="" />
            </div>

            <div className='msgs-type'>
              <div className='tick'></div>
              <img className='sender-img' src={myimg} alt="sender image" />
              <h4 className='sender-name'>بارتينيا بُكطر</h4>
              <button className='user'>اختبار المستخدم</button>
              <p className='sender-msg'>
                مرحباً بارتينيا، نحتاج لإجراء اختبار مستخدم يوم الاثنين،<br />
                الرجاء إضافتي إلى مجموعة المشروع.
              </p>
              <img src={trash} alt="" />
            </div>

            <div className='msgs-type'>
              <div className='tick'></div>
              <img className='sender-img' src={myimg} alt="sender image" />
              <h4 className='sender-name'>بارتينيا بُكطر</h4>
              <button className='user'>اختبار المستخدم</button>
              <p className='sender-msg'>
                مرحباً بارتينيا، نحتاج لإجراء اختبار مستخدم يوم الاثنين،<br />
                الرجاء إضافتي إلى مجموعة المشروع.
              </p>
              <img src={trash} alt="" />
            </div>

            <div className='msgs-type'>
              <div className='tick'></div>
              <img className='sender-img' src={myimg} alt="sender image" />
              <h4 className='sender-name'>بارتينيا بُكطر</h4>
              <button className='user'>اختبار المستخدم</button>
              <p className='sender-msg'>
                مرحباً بارتينيا، نحتاج لإجراء اختبار مستخدم يوم الاثنين،<br />
                الرجاء إضافتي إلى مجموعة المشروع.
              </p>
              <img src={trash} alt="" />
            </div>

            <div className='msgs-type'>
              <div className='tick'></div>
              <img className='sender-img' src={myimg} alt="sender image" />
              <h4 className='sender-name'>بارتينيا بُكطر</h4>
              <button className='user'>اختبار المستخدم</button>
              <p className='sender-msg'>
                مرحباً بارتينيا، نحتاج لإجراء اختبار مستخدم يوم الاثنين،<br />
                الرجاء إضافتي إلى مجموعة المشروع.
              </p>
              <img src={trash} alt="" />
            </div>

            <div className='end'>
              <button className='previous'>السابق</button>
              <Pagenumber title="الصفحة 1 من 10" />
              <button className='next'>التالي</button>
            </div>

          </div>

          <Footer />
        </div>

      </div>
    </>
  );
}

export default Messages;

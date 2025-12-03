import React from 'react';
import Nav from '../Components/Nav.jsx';
import '../Pages/Home.css';
import Topbox from '../Components/Topbox.jsx';
import Title from '../Components/Title.jsx';
import Lightbuttons from '../Components/Lightbuttons.jsx';
import Aside from '../Components/Aside.jsx';
import Darkbutton from '../Components/Darkbutton.jsx';
import profile from '../Images/profile.svg';
import graph from '../Images/graph.svg';
import Footer from '../Components/Footer.jsx';
import { Link } from "react-router-dom";


const Homedashboard = () => {
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
            <Link to="/home">EN</Link>
          </button>
          
          
          
          
          <button className="english">
            <Link to="/arabichome">AR</Link>
          </button>
          </div>

          <div className='topboxes'>
            <Topbox
              title1="المشاريع المنشورة"
              title2="{24}"
              title3="آخر تحديث: [ 12 أكتوبر ]"
            />

            <Topbox
              title1="تحليلات الزوار"
              title2="{4 غير مقروء}"
              title3="آخر تحديث: [ 12 أكتوبر ]"
            />

            <Topbox
              title1="عدد الرسائل"
              title2="{2,300}"
              title3="آخر تحديث: [ 12 أكتوبر ]"
            />
          </div>

          <Title title="الإجراءات السريعة" />

          <div className='butns'>
            <Lightbuttons title1="+ مشروع جديد" />
            <Lightbuttons title1="تعديل قسم الهيرو" />
            <Lightbuttons title1="تعديل نبذة عني" />
            <Lightbuttons title1="تغيير الخدمات" />
          </div>

          <div className='topboxess'>
            <Topbox
              title1="معاينة الهيرو"
              title2="عنوان البورتفوليو"
              title3="معاينات زر CTA"
            />

            <div className='secbox'>
              <div className='part1'>
                <div className='ab'>معاينة النبذة</div>
                <Darkbutton title="تعديل" />
              </div>

              <div className='part2'>
                <img src={profile} alt="" />
                <h2 className='short'>نبذة قصيرة</h2>
              </div>

            </div>
          </div>

          <Title title="معاينة المشاريع المميزة" />

          <div className='graph'>

            <div className='secbox'>
              <div className='part11'>
                <div className='ab'>آخر التحديثات</div>
                <Darkbutton title="عرض الكل" />
              </div>

              <div className='part22'>
                <h4 className='shorts'>. تم تحديث نبذة عني</h4>
                <h4 className='shorts'>. تمت إضافة خدمات جديدة</h4>
                <h4 className='shortss'>. تم استلام استفسار جديد</h4>
                <h4 className='shortss'>. تم استلام رسالة جديدة</h4>
                <h4 className='shortss'>. تمت إضافة مهارات جديدة</h4>
              </div>
            </div>

            <img src={graph} alt="" />
          </div>

          <Footer />

        </div>
      </div>

    </>
  );
}

export default Homedashboard;

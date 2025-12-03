import React, { Component } from 'react';
import '../Pages/Profile.css';
import Aside from '../Components/Aside';
import Nav from '../Components/Nav';
import Title from '../Components/Title';
import myimg from '../Images/myimg.png';
import Footer from '../Components/Footer';
import { Link } from "react-router-dom";


const Profile = () => {
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
  <Link to="/profile">EN</Link>
</button>

<button className="english">
  <Link to="/arabicprofile">AR</Link>
</button>
</div>

                    <Title title="الملف الشخصي" />

                    <div className='myimgs'>
                        <img className='myimg' src={myimg} alt="" />
                        <button className='new'>رفع صورة جديدة</button>
                    </div>

                    <p className='size'>
                        على الأقل 800x800 بكسل / يُفضّل JPG أو PNG / الحد الأقصى 2 ميجابايت
                    </p>

                    <hr className='line' />

                    <div className='hold'>

                        <div className='personal-box'>
                            <h2 className='personal'>المعلومات الشخصية</h2>
                            <button className='edits'>تعديل</button>
                        </div>

                        <div className='three'>

                            <div className='firstone'>
                                <p className='full-name'>الاسم الكامل</p>
                                <p className='names'>بارتينيا بُكطر</p>
                            </div>

                            <div className='firstone'>
                                <p className='full-name'>البريد الإلكتروني</p>
                                <p className='names'>PartiniaBoktor@gmail.com</p>
                            </div>

                            <div className='firstone'>
                                <p className='full-name'>رقم الهاتف</p>
                                <p className='names'>01202061400</p>
                            </div>

                        </div>
                    </div>

                    <div className='hold'>

                        <div className='personal-box'>
                            <h2 className='personal'>الموقع</h2>
                            <button className='edits'>تعديل</button>
                        </div>

                        <div className='cairo'>القاهرة، مصر</div>
                    </div>

                    <div className='hold'>

                        <div className='personal-box'>
                            <h2 className='personal'>نبذة عني</h2>
                            <button className='edits'>تعديل</button>
                        </div>

                        <p className='namess'>
                            أنا شغوفة بمجال تصميم تجربة المستخدم وواجهة المستخدم، وهذا يجعلني دائمًا في مزاج سعيد.
                            منذ أن كنت صغيرة، كنت أرغب في أن أصبح مصممة وأن أتعمّق أكثر في هذا المجال.
                            أن تكوني مصممة ليس بالأمر السهل، لكنه بالنسبة لي شغف كبير.
                            بدأت رحلتي في مجال تصميم UX/UI عندما كان عمري 18 عامًا،
                            وكنت صغيرة جدًا، مما جعلني متحمسة أكثر للغوص بعمق أكبر في هذا المجال.
                        </p>
                    </div>

                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Profile;

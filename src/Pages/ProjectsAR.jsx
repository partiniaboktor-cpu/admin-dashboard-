import React, { Component } from 'react';
import Aside from '../Components/Aside';
import Nav from '../Components/Nav';
import Title from '../Components/Title';
import Topbox from '../Components/Topbox';
import '../Pages/Projects.css';
import state1 from '../Images/state 1.svg';
import state2 from '../Images/state 2.svg';
import edit from '../Images/edit.svg';
import trash from '../Images/delete.svg';
import Pagenumber from '../Components/Pagenumber';
import Footer from '../Components/Footer';
import { Link } from "react-router-dom";


const Projects = () => {

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
          <Link to="/projects">EN</Link>
        </button>
        
        <button className="english">
          <Link to="/arabicprojects">AR</Link>
        </button>
        </div>

                    <Title title="المشاريع الإجمالية" />

                    <div className='topboxes'>
                        <Topbox
                            title1="فلترة"
                            title2="تصفية المشاريع"
                            title3="آخر تحديث: [ 12 أكتوبر ]"
                        />

                        <Topbox
                            title1="الأكثر مشاهدة"
                            title2="1.2k"
                            title3="آخر 7 أيام"
                        />

                        <Topbox
                            title1="إجمالي المشاريع"
                            title2="12"
                            title3="آخر 7 أيام"
                        />

                        <Topbox
                            title1="الأقل مشاهدة"
                            title2="12"
                            title3="تمت المشاهدة"
                        />
                    </div>

                    <Title title="المشاريع" />

                    <div className='Table'>

                        <div className='tops'>
                            <div className='type'>
                                <h3 className='first'>تصاميم UX/UI</h3>
                            </div>

                            <div className='top2'>
                                <h3 className='second'>+ إضافة مشروع</h3>
                                <h3 className='first'>بحث</h3>
                                <h3 className='first'>فلاتر</h3>
                                <h3 className='first'>تحميل الكل</h3>
                            </div>
                        </div>

                        <div className='titleprojects'>

                            <div className='typeone'>
                                <h3 className='headerproject'>المشاريع</h3>
                                <p className='text1'>متجر إلكتروني</p>
                                <p className='text1'>Brand Match</p>
                                <p className='text1'>ألعاب أطفال</p>
                                <p className='text1'>شموع</p>
                                <p className='text1'>صيانة</p>
                                <p className='text1'>أثاث</p>
                                <p className='text1'>وكالة سفر</p>
                                <p className='text1'>متجر مخصص</p>
                                <p className='text1'>صفحة عروض</p>
                            </div>

                            <div className='typeone'>
                                <h3 className='headerproject'>المشاريع</h3>
                                <p className='text1'>متجر إلكتروني</p>
                                <p className='text1'>Brand Match</p>
                                <p className='text1'>ألعاب أطفال</p>
                                <p className='text1'>شموع</p>
                                <p className='text1'>صيانة</p>
                                <p className='text1'>أثاث</p>
                                <p className='text1'>وكالة سفر</p>
                                <p className='text1'>متجر مخصص</p>
                                <p className='text1'>صفحة عروض</p>
                            </div>

                            <div className='typeone'>
                                <h3 className='headerproject'>عدد المشاهدات</h3>
                                <p className='text2'>43 مشاهدة</p>
                                <p className='text2'>45 مشاهدة</p>
                                <p className='text2'>50 مشاهدة</p>
                                <p className='text2'>30 مشاهدة</p>
                                <p className='text2'>120 مشاهدة</p>
                                <p className='text2'>80 مشاهدة</p>
                                <p className='text2'>550 مشاهدة</p>
                                <p className='text2'>250 مشاهدة</p>
                                <p className='text2'>1.2k مشاهدة</p>
                            </div>

                            <div className='typeone'>
                                <h3 className='headerproject'>تاريخ النشر</h3>
                                <p className='text3'>11/12/22</p>
                                <p className='text3'>21/12/22</p>
                                <p className='text3'>5/12/22</p>
                                <p className='text3'>8/12/22</p>
                                <p className='text3'>9/1/23</p>
                                <p className='text3'>9/1/23</p>
                                <p className='text3'>15/12/23</p>
                                <p className='text3'>6/6/23</p>
                                <p className='text3'>11/11/22</p>
                            </div>

                            <div className='typeone'>
                                <h3 className='headerproject'>الحالة</h3>
                                <img className='text4' src={state1} alt="state" />
                                <img className='text4' src={state2} alt="state" />
                                <img className='text4' src={state1} alt="state" />
                                <img className='text4' src={state2} alt="state" />
                                <img className='text4' src={state1} alt="state" />
                                <img className='text4' src={state1} alt="state" />
                                <img className='text4' src={state2} alt="state" />
                                <img className='text4' src={state1} alt="state" />
                                <img className='text4' src={state2} alt="state" />
                            </div>

                            <div className='icons2'>

                                <div className='typeone'>
                                    <img className='text5' src={trash} alt="delete" />
                                    <img className='text5' src={trash} alt="delete" />
                                    <img className='text5' src={trash} alt="delete" />
                                    <img className='text5' src={trash} alt="delete" />
                                    <img className='text5' src={trash} alt="delete" />
                                    <img className='text5' src={trash} alt="delete" />
                                    <img className='text5' src={trash} alt="delete" />
                                    <img className='text5' src={trash} alt="delete" />
                                    <img className='text5' src={trash} alt="delete" />
                                </div>

                                <div className='typeone'>
                                    <img className='text5' src={edit} alt="edit" />
                                    <img className='text5' src={edit} alt="edit" />
                                    <img className='text5' src={edit} alt="edit" />
                                    <img className='text5' src={edit} alt="edit" />
                                    <img className='text5' src={edit} alt="edit" />
                                    <img className='text5' src={edit} alt="edit" />
                                    <img className='text5' src={edit} alt="edit" />
                                    <img className='text5' src={edit} alt="edit" />
                                    <img className='text5' src={edit} alt="edit" />
                                </div>

                            </div>

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

export default Projects;

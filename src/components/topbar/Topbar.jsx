import React from 'react'
import { useState, useEffect } from 'react'

import { Col, Container, Row, Tooltip } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css"

import { BiSearchAlt2 } from "react-icons/bi"
import { BiTable } from "react-icons/bi"
import { MdClose } from "react-icons/md"
import { MdOutlineDarkMode } from "react-icons/md"
import { BsFillSunFill } from "react-icons/bs"
import { IoMdNotificationsOutline } from "react-icons/io"

// ======== profile card
import { BsPerson } from "react-icons/bs"
import { GoPerson } from "react-icons/go"
import { PiChartPieSliceDuotone } from "react-icons/pi"
import { PiUserSwitchBold } from "react-icons/pi"
import { LuSettings } from "react-icons/lu"
import { BiHelpCircle } from "react-icons/bi"
import { MdOutlineLanguage } from "react-icons/md"
import { BiUserPlus } from "react-icons/bi"
import { RxExit } from "react-icons/rx"
import { TiTickOutline } from "react-icons/ti"
import { LiaCommentDots } from "react-icons/lia"
import { FaRegClock } from "react-icons/fa"
import "./Topbar.css"

import { socialsPic, massages } from '../../datas'

export default function Topbar() {

    const [statusThem, useStatusThem] = useState(true)
    const [notifBtn, setNotifBtn] = useState(false)
    const [toolsBtn, setToolsBtn] = useState(false)
    const [profileBtn, setProfileBtn] = useState(false)

    // const dropdownHandler = (event) => {
    //     console.log(event.target)
    //         , true
    // }

    // useEffect(() => {
    //     const bodyElem = document.querySelector('body')
    //     bodyElem.addEventListener("click", event => {
    //         if (notifBtn) {

    //             if (event.target.id.includes("notif")) {
    //                 // setNotifBtn(false)
    //             }
    //             // if (event.target.tagNam) {
    //             //     // setNotifBtn(false)
    //             // }
    //         }
    //         console.log(event.target.tagName)
    //     })

    // },[notifBtn])

    useEffect(() => {
        // const toolsElems = document.querySelectorAll(".topbar__list-item")

        window.addEventListener('click', (event) => {

            if (event.target.className !== "topbar__list-item" &&
                event.target.className !== "topbar__list-item-menu" &&
                event.target.className !== "topbar__list-icon"
            ) {
                // setNotifBtn(false)
                // setProfileBtn(false)
                // setToolsBtn(false)
            }
        }, true)

        const itemHandler = () => {

        }

        window.onclick = function (event) {
            // if (!event.target.matches('.topbar__list-icon') ) {

            // setNotifBtn(false)
            // setToolsBtn(false)
            // alert("iiii")
            // }
            // if (!event.target.matches('.topbar__list-icon') || event.target.matches('.topbar__list-icon img') ) {

            // setNotifBtn(false)
            // setToolsBtn(false)
            // alert("iiii")
            // }

        }
    })


    return (
        <div className='topbar' dir='ltr'>
            <Container fluid>
                <div className="topbarWrapper">
                    <div >
                        <a className="topbar__left" href="#">

                            <div className="topbar__logo">
                                <img src="./images/logo.png" alt="logo" />
                            </div>
                            <div className="topbar__brand d-none d-sm-block">
                                <h1>Keyvar</h1>
                            </div>
                        </a>
                    </div>
                    <div className="topbar__center d-none d-md-flex">
                        <div className="topbar__search">
                            <div className="topbar__search-icon">
                                <BiSearchAlt2 />
                            </div>
                            <input dir="rtl" type="text" className='topbar__input' placeholder='جستوجو...' />
                            <div className="topbar__search-suggestion">

                                {true ? <div>🤷‍♂️   بدون نتیجه
                                    <div>gfgg</div>
                                    <div>gfgg</div>
                                    <div>gfgg</div>
                                    <div>gfgg</div>
                                </div> : <></>}
                            </div>
                            <div className="topbar__search-close-icon">
                                <MdClose />
                            </div>
                        </div>
                    </div>
                    <div className="topbar__right">
                        <ul className='topbar__list-tools'>
                            <li className="topbar__list-item"
                                onClick={(event) => useStatusThem(prevState => !prevState)}
                            >
                                {statusThem ?
                                    <MdOutlineDarkMode
                                        className="topbar__Theme--night "

                                    />
                                    : <BsFillSunFill className="topbar__Theme"

                                    />}

                            </li>
                            <li id='notif' className="topbar__list-item"

                            >
                                <IoMdNotificationsOutline className='topbar__list-icon' onClick={() => {
                                    if (notifBtn) {
                                    }
                                    setNotifBtn(notifBtn => !notifBtn)
                                    setToolsBtn(false)
                                    setProfileBtn(false)
                                }} />
                                {notifBtn ?
                                    <div className='topbar__list-item-menu topbar__list-item-menu--modifie-notification'>
                                        <div className="notification-card">
                                            <div className="notification-card__title">
                                                <span className="notification-card__title-text">
                                                    پیام ها
                                                </span>
                                                <span className="notification-card__title-tick-all">
                                                    علامت گذاری همه به عنوان خوانده شده.
                                                </span>

                                            </div>
                                            <ul className="notification-card__list">
                                                {massages.map((item =>
                                                    <>
                                                        <li key={item.id} className={`notification-card__item ${item.readed ? "readed" : ""}`}>
                                                            <div className={`notification-card__item-left ${!item.status ? "online" : ""}`}>
                                                                <img src="./images/avatar.webp" alt="" className="notification-card__item-img" />
                                                            </div>
                                                            <div className="notification-card__item-body">
                                                                <div className="notification-card__item-body-name">
                                                                    {item.name}
                                                                </div>
                                                                <div className="notification-card__item-body-subject">
                                                                    <LiaCommentDots /> <span>{item.textTitle}</span><span>{item.inTime}m</span>
                                                                </div>
                                                                <div className="notification-card__item-body-date">
                                                                    <FaRegClock />
                                                                    <span>{item.clock}</span>
                                                                    <span>AM</span>
                                                                    <span>{item.month}</span>
                                                                    <span>{item.day}</span>
                                                                    <span>{item.year}</span>

                                                                </div>
                                                            </div>
                                                            <div className="notification-card__item-right">
                                                                <label className="notification-card__item-checked" htmlFor={item.id}>
                                                                    <TiTickOutline />
                                                                </label>
                                                                <input hidden id={item.id} type="checkbox" />
                                                                <div onClick={(event) => {
                                                                    event.currentTarget.style.display = "none"
                                                                }}
                                                                    className="notification-card__item-checked-massage">
                                                                    <a className="notification-card__item-checked-link" href="#">
                                                                        خوانده شد.
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </>
                                                ))}

                                            </ul>
                                            <div className="notification-card__footer notification-card__title-tick-all">
                                                تاریخچه پیام ها
                                            </div>
                                        </div>
                                    </div> : ""}
                            </li>
                            <li id='tools' className="topbar__list-item"

                            >
                                <BiTable className='topbar__list-icon' onClick={() => {
                                    setNotifBtn(false)
                                    setToolsBtn(toolsBtn => !toolsBtn)
                                    setProfileBtn(false)
                                    if (toolsBtn) {
                                        setToolsBtn(false)
                                    }
                                }} />
                                {toolsBtn ?
                                    <div className='topbar__list-item-menu topbar__list-item-menu--modifie-socials'>
                                        <div className="social-medias-card">


                                            {socialsPic.map(item =>
                                                <div key={item.id} className='social-media-card__item' sm={4}>
                                                    <a href="#" className='social-media-card__link'>
                                                        <img src={"images/social/" + `${item.src}`} alt="" className='social-media-card__img' />
                                                        <div className='social-media-card__name'>{item.name}</div>
                                                    </a>
                                                </div>

                                            )}


                                        </div>
                                    </div> : ""}
                            </li>
                            <li className="topbar__list-item"
                                id='profile'
                            >
                                <div className="topbar__profile topbar__list-icon" onClick={() => {
                                    setNotifBtn(false)
                                    setToolsBtn(false)
                                    setProfileBtn(profileBtn => !profileBtn)
                                }}>
                                    <img src="./images/topbar-img.jpg" className="topbar__profile-img" alt="" />
                                </div>
                                {profileBtn ?
                                    <div className='topbar__list-item-menu' dir='rtl'>
                                        <div className="profile-card">
                                            <img src="./images/topbar-img.jpg" alt="" />
                                            <h6 className="profile-card__name">Mortimer</h6>
                                            <ul className='profile-card__list'>
                                                <li className="profile-card__item">
                                                    <a href="#" className="profile-card__link">
                                                        <BsPerson className='profile-card__item-icon' />پروفایل</a>
                                                </li>
                                                <li className="profile-card__item">
                                                    <a href="#" className="profile-card__link">
                                                        <PiChartPieSliceDuotone className='profile-card__item-icon' />داشبورد</a>
                                                </li>
                                                <li className="profile-card__item">
                                                    <a href="#" className="profile-card__link">
                                                        <PiUserSwitchBold className='profile-card__item-icon' />فعالیت ها</a>
                                                </li>
                                                <li className="profile-card__item">
                                                    <a href="#" className="profile-card__link">
                                                        <LuSettings className='profile-card__item-icon' />تنظیمات</a>
                                                </li>
                                                <li className="profile-card__item">
                                                    <a href="#" className="profile-card__link">
                                                        <BiHelpCircle className='profile-card__item-icon' />سوالات پر تکرار</a>
                                                </li>
                                                <li className="profile-card__item">
                                                    <a href="#" className="profile-card__link">
                                                        <MdOutlineLanguage className='profile-card__item-icon' />انتخاب زبان</a>
                                                </li>


                                            </ul>

                                            <div className="profile-card__add-account"><a href="#" className="profile-card__link">
                                                <BiUserPlus className='profile-card__item-icon' />افزودن صفحه جدید</a>
                                            </div>
                                            <button className='profile-card__exit-btn'><RxExit className='profile-card__item-icon' />خروج</button>
                                        </div>
                                    </div> : ""}
                            </li>
                        </ul>

                    </div>
                </div>
            </Container>

        </div>
    )
}

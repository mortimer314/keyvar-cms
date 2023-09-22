// import { useState, useRef } from 'react'
// import {gsap} from 'gsap'
// import "./App.css";

import React from 'react'
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import "./Accordian.css"


export default function Accordian({ items }) {

    const [reset, setReset] = useState(false);
    const [openAccordion, setOpenAccordion] = useState(null);
    const [openSubAccordion, setOpenSubAccordion] = useState(null);
    const accordionRefs = useRef([]);
    const subAccordionRef = useRef([]);
    const subAccordionArrow = useRef([]);
    const subAccordionRefs = useRef([]);
    let save = useRef(null)

    const handleAccordionClick = (index) => {

        // setOpenSubAccordion(null)

        if (index === openAccordion) {
            gsap.to(
                accordionRefs.current[index].querySelector(".accordion__details"),
                {
                    height: 0,
                    duration: 0.3,
                    ease: "power1.inOut",
                    onComplete: () => setOpenAccordion(null),
                }
            );

        } else {
            if (openAccordion !== null) {
                gsap.to(
                    accordionRefs.current[openAccordion].querySelector(
                        ".accordion__details"
                    ),
                    {
                        height: 0,
                        duration: 0.3,
                        ease: "power1.inOut",
                    }
                );
            }
            setOpenAccordion(index);

            gsap.fromTo(
                accordionRefs.current[index].querySelector(".accordion__details"),
                { height: 0 },
                {
                    height: "auto",
                    duration: 0.3,
                    ease: "power1.inOut",
                }
            );
        }
        handleSubAccordionClick(index,openSubAccordion,false)
    };

    const handleSubAccordionClick = (index, idx, arrow) => {

        if (index === openAccordion) {
            if (idx === openSubAccordion) {
                gsap.to(
                    subAccordionRefs.current[index][idx][0].querySelector(".accordion__inner-details"),
                    {
                        height: 0,
                        duration: 0.3,
                        ease: "power1.inOut",
                        onComplete: () => {
                            setOpenSubAccordion(null)
                        },
                    }
                );

            } else {
                if (openSubAccordion !== null) {
                    gsap.to(
                        subAccordionRefs.current[index][openSubAccordion][0].querySelector(".accordion__inner-details"),
                        {
                            height: 0,
                            duration: 0.3,
                            ease: "power1.inOut",
                        }
                    );
                }
                setOpenSubAccordion(idx);
                gsap.fromTo(
                    subAccordionRefs.current[index][idx][0].querySelector(".accordion__inner-details"),
                    { height: 0 },
                    {
                        height: "auto",
                        duration: 0.3,
                        ease: "power1.inOut",

                    }
                );
            }
        }
    }

    return (
        <div className="App">
            <div className="accordion__container">
                {!items.length ? "" :
                    items.map((item, index) => {
                        const { header, data } = item
                        const { title, contents, arrow, icon, innerContents } = data

                        return (
                            <div key={index}
                                className={`accordion__item  ${openAccordion === index ? "open" : ""}`}
                                ref={(el) => (accordionRefs.current[index] = el)}
                            >
                                <div className="accodian__top-header">{header}</div>
                                <div
                                    className="accordion__header"
                                    onClick={() => handleAccordionClick(index)}
                                >


                                    <span className='accordian__icon'>{arrow}</span>
                                    <span className='accordian__icon'><i class={icon}></i></span>
                                    <span className='accordian__title'>{title}</span>
                                </div>

                                <div className="accordion__details">
                                    <ul>
                                        {contents.length ? contents.map((content, index) =>

                                            <li key={index}>
                                                <a href="#">
                                                    <div className="accordian__item">{content}</div>
                                                </a>
                                            </li>
                                        ) : ""}

                                        {innerContents.length ? innerContents.map((innerContent, idx) => {
                                            const { title, contents, arrow, icon, innerContents } = innerContent

                                            return (
                                                <div key={idx}
                                                    ref={el => {
                                                        subAccordionRef.current[idx] = [el, false]
                                                        subAccordionRefs.current[index] = [...subAccordionRef.current]
                                                        // subAccordionArrow.current[index].push(arrow)
                                                    }}
                                                    className={`accordion__item  
                                                ${openAccordion === index && openSubAccordion === idx ? "sub-open" : ""}`}


                                                >

                                                    <div className="accordian__item accordian__inner-item">
                                                        <div className="accordion__header"
                                                            onClick={() => handleSubAccordionClick(index, idx, !arrow)}

                                                        >

                                                            <span className='accordian__icon'>{arrow}</span>
                                                            <span className='accordian__icon'>{icon}</span>
                                                            <span className='accordian__title'>{title}</span>
                                                        </div>
                                                    </div>
                                                    <div className=" accordion__inner-details">
                                                        <ul>
                                                            {contents.length ?
                                                                contents.map((content, index2) =>
                                                                    <div key={index2} className="accordian__item">{content}</div>
                                                                )
                                                                : ""}
                                                        </ul>
                                                    </div>

                                                </div>)
                                        }
                                        ) : ""}

                                    </ul>
                                </div>
                            </div>)

                    })

                }

            </div>
        </div >
    );
}
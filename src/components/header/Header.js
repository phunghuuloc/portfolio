import React from 'react'
import { useState } from 'react'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

import styled from './Header.module.scss'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'

function Header() {
    const nav = [
        {
            id: 1,
            to: "/portfolio/",
            name: "Trang chủ"
        },
        {
            id: 2,
            to: "/portfolio/about",
            name: "Giới thiệu"
        },
        {
            id: 3,
            to: "/portfolio/skills",
            name: "Kĩ năng"
        },
        {
            id: 4,
            to: "/portfolio/education",
            name: "Học vấn"
        },
        {
            id: 5,
            to: "/portfolio/contact",
            name: "Liên hệ"
        }
    ]

    const [open, setOpen] = useState("false")

    const handleClick = (val) => {
        setOpen(val)
        window.scrollTo(0, 0)
    }

  return (
    <>
        <div className={styled.header}>
            <div className={styled.container}>
                <div className={styled.icon}>
                    <p>SR.HUU<span>LOC</span></p>
                </div>
                <div className={styled.nav}>
                {
                    nav.map((item) => {
                        return (
                            <NavLink key={item.id} to={item.to} className="nav">{item.name}</NavLink>
                        )
                    })
                }
                </div>     
            </div>
        </div>

        <div className={styled.header_mobile}>
            <AiOutlineMenuUnfold onClick={() => setOpen("true")}/>    
            <div className={styled.icon}>
                <p>SR.HUU<span>LOC</span></p>
            </div>
            <div className={clsx(styled.container_mobile, (open=="true") ? styled.open : styled.close )}>
                <div className={styled.closeBtn}>
                    <AiOutlineClose onClick={() => setOpen("false")}/>
                </div>     
                <div className={styled.nav_mobile}>
                {
                    nav.map((item) => {
                        return (
                            <NavLink key={item.id} to={item.to} className="nav" onClick={() => handleClick("false")}>{item.name}</NavLink>
                        )
                    })
                }
                </div>
            </div>
        </div> 
    </> 
  )
}

export default Header
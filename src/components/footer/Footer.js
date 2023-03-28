import React from 'react'

import styled from './Footer.module.scss'
import { AiOutlineCopyrightCircle} from 'react-icons/ai'
import { FiFacebook } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'
import { SiZalo } from 'react-icons/si'

function Footer() {
  return (
    <div className={styled.footer}>
        <div className={styled.container}>
            <div className={styled.copyright}>
                <p><AiOutlineCopyrightCircle />PHUNGHUULOC - 2023</p>
            </div>
            <div className={styled.text}>
                <p>1997 - Đinh Sửu</p>
                <p>Hãy liên hệ tôi khi bạn có thể!!!</p>
            </div>
            <div className={styled.social}>
                <div className={styled.item}>
                    <a href="https://www.facebook.com/phunghuuloc97/" target="_blank"><FiFacebook /></a>
                </div>
                <div className={styled.item}>
                    <a href="https://www.instagram.com/huuloc.2912/" target="_blank"><FaInstagram /></a>
                </div>
                <div className={styled.item}>
                    <a href="https://zalo.me/0339329541" target="_blank"><SiZalo /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
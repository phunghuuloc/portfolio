import React from 'react'

import styled from './Contact.module.scss'
import { FiFacebook } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'
import { SiZalo } from 'react-icons/si'
import imgYeah from '../../images/yeah.gif'

function Contact() {
  return (
    <div className={styled.contact}>
      <div className={styled.container}>
        <div className={styled.info}>
          <h3>Phùng Hữu Lộc</h3>
          <p>Sinh năm: 1997</p>
          <p>Địa chỉ: Đức Linh - Bình Thuận</p>
          <p>Số điện thoại: 033.9329.541</p>
          <p>Email: huulocahri@gmail.com</p>
        </div>
        <div className={styled.text}>
          <p>Nếu bạn muốn tôi trở thành nhân viên trong công ty của bạn, hoặc muốn biết thêm những thông tin khác về tôi!!!
            Hãy liên hệ tôi theo số điện thoại ở trên, hoặc qua các ứng dụng mạng xã hội dưới đây!!!
          </p>
          <p>(Tôi online facebook thường xuyên, instagram và zalo thỉnh thoảng nhé!!!)</p>
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
        <div className={styled.image}>
          <p>Cảm ơn bạn đã xem qua!!!</p>
          <img src={ imgYeah } loop="infinite" />
        </div>
      </div>
    </div>
  )
}

export default Contact
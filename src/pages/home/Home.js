import React from 'react'
import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Typed from 'typed.js'

import styled from './Home.module.scss'
import Phunghuuloc from '../../images/phunghuuloc.png'
import Cv from '../../files/cv.pdf'

function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Phùng Hữu Lộc', 'một Frontend developer'],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className={styled.home}>
      <div className={styled.container}>
        <div className={styled.image}>
          <img src={Phunghuuloc} className={styled.phunghuuloc} alt="Phùng Hữu Lộc"/>
        </div>
        <div className={styled.info}>
          <p>Xin chào,</p>
          <p>Tôi là <span ref={el} /></p>
          <p>Tôi là một lập trình viên với sở thích tạo ra những website đẹp mắt, thân thiện người dùng và đang trên hành trình tìm kiếm một nơi dành cho mình!!!</p>
          <div className={styled.cvdownload}>
            <a href={ Cv } download="PhunghuulocCV">Tải CV</a>
          </div>
          <div className={styled.project}>
            <p>Xem những dự án demo của tôi tại đây</p>
            <Link to="skills">Dự án</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
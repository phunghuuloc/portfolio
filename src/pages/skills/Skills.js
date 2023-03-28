import React from 'react'

import styled from './Skills.module.scss'

import { AiOutlineHtml5 } from 'react-icons/ai'
import { TbBrandCss3 } from 'react-icons/tb'
import { TbBrandJavascript } from 'react-icons/tb'
import { SiJquery } from 'react-icons/si'
import { DiSass } from 'react-icons/di'
import { DiResponsive } from 'react-icons/di'
import { FaPhp } from 'react-icons/fa'
import { SiMysql } from 'react-icons/si'
import { RiReactjsFill } from 'react-icons/ri'

import web01 from '../../images/web01.png'
import web02 from '../../images/web02.png'
import web03 from '../../images/web03.png'

function Skills() {
  return (
    <div className={styled.skills}>
      <div className={styled.container}>
        <h3 className={styled.title}>Các kỹ năng của tôi bao gồm:</h3>
        <div className={styled.skill}>
          <div className={styled.item}>
            <AiOutlineHtml5 className={styled.html}/>
            <p>HTML</p>
          </div>
          <div className={styled.item}>
            <TbBrandCss3 className={styled.css}/>
            <p>CSS</p>
          </div>
          <div className={styled.item}>
            <TbBrandJavascript className={styled.javascript}/>
            <p>JAVASCRIPT</p>
          </div>
          <div className={styled.item}>
            <SiJquery className={styled.jquery}/>
            <p>JQUERY</p>
          </div>
          <div className={styled.item}>
            <DiSass className={styled.scss}/>
            <p>SCSS</p>
          </div>
          <div className={styled.item}>
            <DiResponsive className={styled.responsive}/>
            <p>RESPONSIVE WEB</p>
          </div>
          <div className={styled.item}>
            <FaPhp className={styled.php}/>
            <p>PHP CĂN BẢN</p>
          </div>
          <div className={styled.item}>
            <SiMysql className={styled.mysql}/>
            <p>MYSQL CĂN BẢN</p>
          </div>
          <div className={styled.item}>
            <RiReactjsFill className={styled.reactjs}/>
            <p>REACTJS CĂN BẢN</p>
          </div>
        </div>
        <div className={styled.other}>
          <p>Ngoài các kĩ năng trên, tôi còn có các kĩ năng và kinh nghiệm khác. Vì đã làm việc thực tế trong công ty, nên <strong>khả năng code thuần, tư duy và chịu được áp lực công việc</strong> của tôi khá tốt. Trong môi trường tiếp xúc nhiều với
            khách hàng, tôi đã rèn luyện được <strong>khả năng giao tiếp, tự tin khi đứng trước đám đông</strong> và các kỹ năng khác phục vụ cho công việc.
          </p>
          <p><strong>Trung thực, thẳng tính, thật thà, cố gắng hoàn thành tốt công việc</strong> là ưu tiên hàng đầu của tôi.</p>
          <p>Vì định hướng theo lập trình web xuất hiện khá muộn nên kinh nghiệm của tôi chưa thực sự phong phú. Tôi mong quý công ty có thể nhận và đào tạo thêm cho tôi về khả năng lập trình web 
            để có thể phục vụ tốt nhất cho quý công ty, tôi xin chân thành cảm ơn!!!
          </p>
        </div>
        <div className={styled.projects}>
          <h3 className={styled.title}>Những project demo của tôi</h3>
          <div className={styled.project}>
            <div className={styled.item}>
              <p>PHP - 2020</p>
              <a href="http://phunghuuloc.epizy.com/?i=1" target="_blank"><img src={ web01 }/></a>
            </div>
            <div className={styled.item}>
              <p>Demo - 2020</p>
              <a href="https://phunghuuloc.github.io/twiceshop.github.io/" target="_blank"><img src={ web02 }/></a>
            </div>
            <div className={styled.item}>
              <p>ReactJS - 2023</p>
              <a href="https://phunghuuloc.github.io/pokedex/" target="_blank"><img src={ web03 }/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
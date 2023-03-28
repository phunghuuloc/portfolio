import React from 'react'

import styled from './About.module.scss'

import phunghuuloc from '../../images/phunghuuloc.jpg'
import i1 from '../../images/1.gif'
import i2 from '../../images/2.gif'
import i3 from '../../images/3.gif'
import i4 from '../../images/4.gif'
import i5 from '../../images/5.gif'

function About() {
  return (
    <div className={styled.about}>
      <div className={styled.container}>
        <div className={styled.info}>
          <div className={styled.left}>
            <img src={phunghuuloc} />
          </div>
          <div className={styled.right}>
            <p>Tên đầy đủ: Phùng Hữu Lộc - Nam</p>
            <p>Sinh năm: 1997</p>
            <p>Địa chỉ: Đức Linh - Bình Thuận</p>
            <p>Là một người thích chơi game từ nhỏ, đam mê máy tính và thích những thứ bắt mắt, đẹp đẽ, gọn gàng. Tôi đã trở thành lập trình viên Front-end.</p>
          </div>
        </div>
        <div className={styled.work}>
          <div className={styled.first}>
            <div className={styled.box}>
              <img src={i1} />
              <p><span>Đầu năm 2020:</span> Tôi đã tốt nghiệp trường Đại Học Lạc Hồng đúng hạn với vị trí Kỹ Sư Công Nghệ Thông Tin.</p>
            </div>
          </div>
          <div className={styled.second}>
              {/* đầu năm 2020 -> 1/2021 -> 7/2021 -> */}
              <div className={styled.box}>
                <img src={i2} />
                <p><span>Tháng 1/2021:</span> Tôi đã tìm được công việc trong một công ty khởi nghiệp về công nghệ. Nhưng do không phù hợp và đợt dịch bùng phát nên tôi đã nghỉ việc vài tháng sau đó.</p>
              </div>
          </div>
          <div className={styled.third}>
            <div className={styled.box}>
              <img src={i3} />
              <p><span>Tháng 7/2021:</span> Đợt dịch bùng phát và tôi chuyển về quê, làm những công việc khác phụ giúp gia đình.</p>
            </div>
          </div>
          <div className={styled.fourth}>
            <div className={styled.box}>
              <img src={i4} />
              <p><span>Cuối năm 2022:</span> Tôi làm kỹ thuật trong một chuỗi cửa hàng bán đồ công nghệ, trong thời gian đó tôi ôn tập lại các kiến thức để chuẩn bị quay trở lại với lập trình.</p>
            </div>
          </div>
          <div className={styled.fifth}>
            <div className={styled.box}>
              <img src={i5} />
              <p><span>Hiện tại:</span> Tôi đang tự ôn tập và tìm cho mình một công ty lập trình để có thể học tập thêm những kiến thức từ người đi trước, làm việc và cống hiến hết mình cho công ty.</p>
            </div>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default About
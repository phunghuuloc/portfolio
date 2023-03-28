import React from 'react'

import styled from './Education.module.scss'

function Education() {

  return (
    <div className={styled.education}>
      <div className={styled.container}>
        <div className={styled.info}>
          <p>2012 - 2015: Học tại Trung Học Phổ Thông Quang Trung - Đức Linh - Bình Thuận</p>
          <p>2015 - 2020: Học tại Đại Học Lạc Hồng - khoa Công Nghệ Thông Tin - chuyên ngành Kỹ Thuật Phần Mềm</p>
          <p>2020: Tốt nghiệp Kỹ Sư Công Nghệ Thông Tin tại Đại Học Lạc Hồng</p>
        </div>
        <div className={styled.university}>
          <h3>Đôi nét về Đại Học Lạc Hồng - Khoa Công Nghệ Thông Tin</h3>
          <p>Trường Đại học Lạc Hồng (Biên Hòa - Đồng Nai) đã trải qua nhiều năm xây dựng và phát triển, là một trường đại học đa ngành, đa nghề.
          Ra đời cùng với sự thành lập của Trường; Khoa Công nghệ thông tin tuyển sinh khóa đầu tiên vào năm 1997-1998.
          hiện nay Khoa Công nghệ thông tin đã có 4 ngành đào tạo đại học: Kỹ thuật phần mềm (Software Engineering), Kỹ thuật máy tính (Computer Engineering), Hệ thống thông tin (Information System), Mạng máy tính và truyền thông (Computer Networks and Communication).
          Ngoài ra, Khoa Công nghệ thông tin còn đào tạo các chứng chỉ mạng của Cisco với tư cách là một trung tâm đào tạo Cisco ở khu vực.
          </p>
        </div>
        <address>
          <p>Số 10 Huỳnh Văn Nghệ, phường Bửu Long, TP.Biên Hòa, tỉnh Đồng Nai.</p>
          <p>Website: https://lhu.edu.vn/</p>
        </address>
        <div className={styled.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.1314946954603!2d106.80193737436356!3d10.953438373880614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d95970202f3f%3A0x679e7fa6d33f74e5!2zVHLGsOG7nW5nIMSR4bqhaSBo4buNYyBM4bqhYyBI4buTbmcsIEPGoSBz4bufIDE!5e0!3m2!1svi!2s!4v1678939817652!5m2!1svi!2s" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Education
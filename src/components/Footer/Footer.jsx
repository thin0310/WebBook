import React from 'react'
import "./footer.css"
import {AiFillFacebook, AiFillInstagram,AiFillYoutube} from "react-icons/ai"
import {FaTiktok} from "react-icons/fa";
export const Footer = () => {
  return (
    <div className='footer'>
      <div className='containerfooter'>
        <div className='aboutus'>
            <h2> Về RV BOOK</h2>
          <ul>
            <li><p>Sứ mệnh</p></li>
            <li><p>Đối tác</p></li>
            <li><p>Chính sách</p></li>
          </ul>
        </div>
        <div className='Legal'>
            <h2> QUY ĐỊNH VÀ ĐIỀU KHOẢN</h2>
          <ul>
            <li><p>Quy định thành viên</p></li>
            <li><p>Điều khoản</p></li>
            <li><p>Chính sách</p></li>
            <li><p>Bảo vệ tác quyền</p></li>
          </ul>
        </div>
        <div className='social'>
            <h2> SOCIAL</h2>
          <ul>
            <li><AiFillFacebook className='facebook'/></li>
            <li><AiFillInstagram className='ins'/></li>
            <li><FaTiktok className='tik'/></li>
            <li><AiFillYoutube className='youtube'/></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

import React from 'react';
import './Footer.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramOutlineIcon from '@mui/icons-material/Instagram';
import YoutubeOutlineIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_inner_container"> 
        <div className="footer-icons">
            <FacebookOutlinedIcon />
            <InstagramOutlineIcon />
            <YoutubeOutlineIcon />
          </div>

        <div className="footer-content">
          <div className="footer-section">
            <ul>
              <li><a href="/" alt="">FAQ</a></li>
              <li><a href="/" alt="">Investor Relations</a></li>
              <li><a href="/" alt="">Privacy</a></li>
              <li><a href="/" alt="">Speed Test</a></li>
            </ul>
          </div>
          <div className="footer-section">
            
            <ul>
              <li><a href="/" alt="">Help Center</a></li>
              <li><a href="/" alt="">Jobs</a></li>
              <li><a href="/" alt="">Cookie Preferences</a></li>
              <li><a href="/" alt="">Legal Notices</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <ul>
              <li><a href="/" alt="">Account</a></li>
              <li><a href="/" alt="">Ways to Watch</a></li>
              <li><a href="/" alt="">Corporate Information</a></li>
              <li><a href="/" alt="">Only on Netflix</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <ul>
              <li><a href="/" alt="">Media Center</a></li>
              <li><a href="/" alt="">Terms of Use</a></li>
              <li><a href="/" alt="">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="service-code">
          <p>service code</p>
        </div>
        <div className='copy-write'>
          © 1997-2022 Netflix, Inc.
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;



















// import React from 'react'
// import './Footer.css'

// const Footer = () => {
//   return (
//     <div className="footer">
      
// 			<div className="footer__links">
//         <div className="footer_question">
//         <a href="/" alt="">Questions? Contact us.</a><br/><br/><br/>
//       </div>
// 				<ul>
// 					<li>
// 						<a href="/" alt="">FAQ</a>{" "}
// 					</li>
// 					<li>
// 						<a href="/" alt="">Investor Relations</a>
// 					</li>
// 					<li>
// 						<a href="/" alt="">Ways to Watch</a>
// 					</li>
// 					<li>
// 						<a href="/" alt="">Corporate Information</a>
// 					</li>
// 					<li>
// 						<a href="/" alt="">Only on Netflix</a>
// 					</li>
// 				</ul>
// 				<ul>
// 					<li>
// 						<a href="/" alt="">Help Center</a>
// 					</li>
// 					<li>
// 						<a href="/" alt="">Jobs</a>
// 					</li>
// 					<li>
// 						<a href="/" alt="">Terms of Use</a>
// 					</li>
// 					<li>
// 						<a href="/" alt="">Contact us</a>
// 					</li>
// 				</ul>

// 				<ul>
// 					<li>
// 						<a href="/" alt="">Account</a>
// 					</li>
// 					<li>
// 						<a href="/" alt="">Redeem Gift Cards</a>
// 					</li>
// 					<li>
// 						<a href="/" alt="">Privacy</a>
// 					</li>
// 					<li>
// 						<a href="/" alt="">Speed Test</a>
// 					</li>
// 				</ul>
// 				<ul>
// 					<li>
// 						<a href="/" alt="">Media Center</a>
// 					</li>
// 					<li>
// 						<a href="/" alt="">Buy Gift Cards</a>
// 					</li>
// 					<li>
// 						<a href="/" alt="">Cookie Preferences</a>
// 					</li>
// 					<li>
// 						<a href="/" alt="">Legal Notices</a>
// 					</li>
// 				</ul>
// 			</div>
// 		</div>
//   )
// }

// export default Footer
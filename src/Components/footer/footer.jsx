import React from 'react'
import './footer.css'

export default function footer() {
  return (
    <div className='footer'>
        <div className="subscribe">
            <div className="info">
                <h1>Join Our Newsletter</h1>
                <p>Exciting news for you! Now you can transform your sleep <br /> experience without worrying about shipping costs.</p>
            </div>
            <div className="btn">
                <button>Subscribe</button>
            </div>
        </div>
        <div className="main-footer-cont">
        <div className="main-footer">
            <ul>
                <h2 >HNG Furniture Shop</h2>
                <li>Experience the best <br /> of everything bed</li>
            </ul>
            <ul>
                <h3>Company</h3>
                <li>About</li>
                <li>Careers</li>
                <li>Mobile</li>
            </ul>
            <ul>
                <h3>Contact</h3>
                <li>Support</li>
                <li>Press</li>
                <li>Affiliate</li>
            </ul>
            <ul>
                <h3>More</h3>
                <li>Bed sheett</li>
                <li>Bed Frame</li>
                <li>Pilows</li>
            </ul>
            <ul>
                <h3>Resources</h3>
                <li>Blogs</li>
                <li>Collection</li>
                <li>Promo</li>
            </ul>
        </div>
        <center><small>HNG Furniture Shop</small></center>
        </div>
    </div>
  )
}

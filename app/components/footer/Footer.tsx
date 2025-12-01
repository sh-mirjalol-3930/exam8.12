import React from 'react'
import Link from 'next/link'
import { FacebookFilled, GithubFilled, InstagramFilled, TwitterCircleFilled } from '@ant-design/icons'

const Footer = () => {
  return (
    <footer className="mt-[100px] bg-[#F2F0F1] text-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-black mt-[-100px] text-white rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-2xl sm:text-3xl font-bold">STAY UPTO DATE ABOUT OUR LATEST OFFERS</div>
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3">
            <input
              aria-label="email"
              placeholder="Enter your email address"
              className="rounded-full px-4 py-3 w-full sm:w-[320px] text-black"
            />
            <button className="bg-white text-black rounded-full px-6 py-3">Subscribe to Newsletter</button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1">
            <div className="text-2xl font-extrabold">SHOP.CO</div>
            <p className="mt-4 text-sm text-gray-600">We have clothes that suits your style and which you're proud to wear. From women to men.</p>
            <div className="flex items-center text-[19px] mt-4 gap-3">
              <a href="#" aria-label="twitter" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black"><TwitterCircleFilled/></a>
              <a href="#" aria-label="facebook" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black"><FacebookFilled/></a>
              <a href="#" aria-label="instagram" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black"><InstagramFilled/></a>
              <a href="#" aria-label="github" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black"><GithubFilled/></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">COMPANY</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Features</Link></li>
              <li><Link href="#">Works</Link></li>
              <li><Link href="#">Career</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">HELP</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#">Customer Support</Link></li>
              <li><Link href="#">Delivery Details</Link></li>
              <li><Link href="#">Terms &amp; Conditions</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">FAQ</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#">Account</Link></li>
              <li><Link href="#">Manage Deliveries</Link></li>
              <li><Link href="#">Orders</Link></li>
              <li><Link href="#">Payments</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">RESOURCES</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#">Free eBooks</Link></li>
              <li><Link href="#">Development Tutorial</Link></li>
              <li><Link href="#">How to - Blog</Link></li>
              <li><Link href="#">Youtube Playlist</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t bg-[#F2F0F1]">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">Shop.co © 2000-2023, All Rights Reserved</div>
          <div className="flex items-center gap-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="" className=" w-[70px]" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="" className=" w-[40px]" />
            <img src="https://www.freepnglogos.com/uploads/paypal-logo-png-21.png" alt="" className=" w-[70px]" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/1200px-Apple_Pay_logo.svg.png" alt="" className=" w-[55px]" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/2560px-Google_Pay_Logo.svg.png" alt="" className=" w-[60px]" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

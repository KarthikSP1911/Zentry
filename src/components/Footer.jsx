import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];


const Footer = () => {
  return (
    <div className="py-3 w-full bg-blue-600 h-[140px] flex flex-col justify-between items-center md:flex-row">
        <div className="text-2xl mx-3" >
            <p>
                &copy; Nova 2024. All rights reserved
            </p>
        </div>
        <div className="flex  justify-between md:justify-center g-3 mx-3 w-1/2 text-2xl ">
            {socialLinks.map((link,index) => {
                return (
                    <>
                    <a href={link.href}
                    target='_blank'
                    className="text-black hover:text-white mx-3 transition-all duration-150 ease-in-out"
                    rel="noopener noreferrer"
                    >{link.icon}</a>
                    </>
                )
            })}
        </div>
        <div className="px-4">
            <a
          href="#privacy-policy"
          className="text-center text-xl hover:text-white text-sm font-light hover:underline md:text-right mx-4"
        >
          Privacy Policy
        </a>
        </div>
      
    </div>
  )
}

export default Footer

import React,{ useEffect, useRef, useState } from 'react'
import Navbar from '../Common/Navbar/Navbar'
import Footer from '../Common/Footer/Footer'
import CommonChatbot from "@/components/Common/CommonChatbot/CommonChatbot";

const LandingLayout = (props) => {

    const bannerRef = useRef(null);
    const footerRef = useRef(null);
    
    const [isBannerPassed, setIsBannerPassed] = useState(false);
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (bannerRef.current) {
                const bannerBottom = bannerRef.current.getBoundingClientRect().bottom;
                setIsBannerPassed(bannerBottom < -400); // Show chatbot after 400px scroll past banner
            }
        };

        const footerObserver = new IntersectionObserver(
            ([entry]) => setIsFooterVisible(entry.isIntersecting),
            { threshold: 0 }
        );

        if (footerRef.current) footerObserver.observe(footerRef.current);
        window.addEventListener("scroll", handleScroll);

        return () => {
            if (footerRef.current) footerObserver.unobserve(footerRef.current);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const showChatbot = isBannerPassed && !isFooterVisible;

    return (
        <>
            <div ref={bannerRef}><Navbar /></div>
            {/* Common Chatbot component */}
            <CommonChatbot showChatbot={showChatbot} />
            {props.children}
            <div ref={footerRef}><Footer /></div>
        </>
    )
}

export default LandingLayout
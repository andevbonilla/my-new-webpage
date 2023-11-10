"use client"
import React, { useEffect, useRef } from 'react';

export const StarsBackground = ({children}:any) => {

    const starElem:any = useRef(null);

    const hideStars = () => {

                const totalHeight = Math.max(
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight
                );

                console.log(totalHeight * 0.50)
                console.log(Math.round(window.scrollY))
                console.log(Math.round(window.scrollY) > (totalHeight * 0.50));
                
                if (Math.round(window.scrollY) > (totalHeight * 0.50)) {
                        // sin estrellas
                        console.log("sdsdsd")
                        starElem.current.className = `no-stars`;                                       
                }else {
                        // con estrellas
                        console.log("000000")
                        starElem.current.className = `stars`;                    
                }

    }

    useEffect(() => {

        window.addEventListener('scroll', hideStars);
        return () => {
            window.removeEventListener('scroll', hideStars);
        };
        
    }, []);

  return (
    <div className='stars' ref={starElem}>{children}</div>
  )
}

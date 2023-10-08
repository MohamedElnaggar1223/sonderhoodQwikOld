/** @jsxImportSource react */
import { motion, useAnimation, useInView } from "framer-motion";
import { qwikify$ } from '@builder.io/qwik-react';
import { useEffect, useRef } from "react";

export default function Visible(props)
{
    const tiltedRef = useRef(null)
    const tiltedInView = useInView(tiltedRef)

    console.log(tiltedInView)

    const mainTiltedAnimation = useAnimation()

    useEffect(() =>
    {
        console.log(tiltedInView)
        if(tiltedInView) {
            mainTiltedAnimation.start('visible')
            console.log(tiltedInView)
        }
        //eslint-disable-next-line
    }, [tiltedInView])

    return(
        <motion.div 
            ref={tiltedRef}
            variants={{
                hidden: { opacity: 0.2}, 
                visible: { opacity: 1}
            }}
            initial='hidden'
            animate={mainTiltedAnimation}
            transition={{ duration: 1, delay: 0.25 }}
        >
            {props.text}
        </motion.div>
    )
}

export const VisibleQwik = qwikify$(Visible);
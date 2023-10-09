/** @jsxImportSource react */
import { motion, useAnimation, useInView } from "framer-motion";
import { qwikify$ } from '@builder.io/qwik-react';
import { useEffect, useRef } from "react";

export default function VisibleVector({ classValue, styles, visible, hidden, transition, once, })
{
    const tiltedRef = useRef(null)
    const tiltedInView = useInView(tiltedRef, { once })

    const mainTiltedAnimation = useAnimation()

    useEffect(() =>
    {
        if(tiltedInView) mainTiltedAnimation.start('visible')
        else mainTiltedAnimation.set('hidden')
        //eslint-disable-next-line
    }, [tiltedInView])

    return(
            <motion.div 
                ref={tiltedRef}
                variants={{
                    hidden: hidden, 
                    visible: visible
                }}
                initial='hidden'
                animate={mainTiltedAnimation}
                transition={transition}
                style={styles}
                className={classValue}
            >
            </motion.div>
    )
}

export const VisibleVectorQwik = qwikify$(VisibleVector);
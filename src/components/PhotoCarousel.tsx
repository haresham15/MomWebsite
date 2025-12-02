"use client";

import { motion, useAnimation, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./PhotoCarousel.module.css";

const photos = [
    "/assets/Mom/extra.JPG",
    "/assets/Mom/extra2.png",
    "/assets/Mom/extra3.png",
    "/assets/Mom/graduationparty.JPEG",
    "/assets/Mom/raghulanna.png",
    "/assets/Mom/homecomingcourt.png"
];

export default function PhotoCarousel() {
    const [isDragging, setIsDragging] = useState(false);
    const rotation = useMotionValue(0);
    const controls = useAnimation();

    // Auto-rotate
    useEffect(() => {
        if (!isDragging) {
            controls.start({
                rotateY: [rotation.get(), rotation.get() - 360],
                transition: {
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                }
            });
        } else {
            controls.stop();
        }
    }, [isDragging, controls, rotation]);

    const handleDragStart = () => setIsDragging(true);
    const handleDragEnd = () => {
        setIsDragging(false);
    };

    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>More Beautiful Moments</h2>
            <div className={styles.scene}>
                <motion.div
                    className={styles.carousel}
                    animate={controls}
                    style={{ rotateY: rotation }}
                    drag="x"
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    onDrag={(event, info) => {
                        rotation.set(rotation.get() + info.delta.x * 0.5);
                    }}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0}
                    dragMomentum={false}
                >
                    {photos.map((src, index) => {
                        const angle = (index / photos.length) * 360;
                        return (
                            <div
                                key={index}
                                className={styles.item}
                                style={{
                                    transform: `rotateY(${angle}deg) translateZ(400px)`
                                }}
                            >
                                <Image
                                    src={src}
                                    alt={`Memory ${index + 1}`}
                                    width={300}
                                    height={400}
                                    className={styles.image}
                                    draggable={false}
                                />
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

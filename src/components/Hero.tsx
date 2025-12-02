"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={styles.title}
                >
                    Happy Birthday <br />
                    <span className="text-gradient">Mommer!</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className={styles.subtitle}
                >
                    Happy birthday to the best mom in the world! Only one who can satisfy my heart and my stomach mommer!
                </motion.p>
            </div>

            <div className={styles.leaves}>
                <motion.div
                    className={styles.leaf1}
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Image
                        src="/assets/leaf1.png"
                        alt="Monstera Leaf"
                        width={300}
                        height={300}
                        className={styles.leafImage}
                    />
                </motion.div>
                <motion.div
                    className={styles.leaf2}
                    animate={{
                        y: [0, 30, 0],
                        rotate: [0, -10, 0],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                >
                    <Image
                        src="/assets/leaf2.png"
                        alt="Fern Leaf"
                        width={250}
                        height={250}
                        className={styles.leafImage}
                    />
                </motion.div>
            </div>
        </section>
    );
}

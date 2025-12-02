"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./ChettinadSection.module.css";

export default function ChettinadSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.textColumn}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.heading}>A Taste of Chettinad</h2>
                    <p className={styles.description}>
                        Here is a section that I dedicated to your love for food and chettinad cuisine. You are always talking about how vellai panniyaram is your favorite!
                    </p>
                    <p className={styles.description}>
                        You always provide us with the best food and the best company at the dining table many times.
                    </p>
                    <div className={styles.tags}>
                        <span className={styles.tag}>Spicy</span>
                        <span className={styles.tag}>Authentic</span>
                        <span className={styles.tag}>Made with Love</span>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.imageColumn}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/assets/chetinad.png"
                            alt="Chettinad Cuisine Feast"
                            width={600}
                            height={600}
                            className={styles.foodImage}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

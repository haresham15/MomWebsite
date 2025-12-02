"use client";

import { motion } from "framer-motion";
import styles from "./Letter.module.css";

export default function Letter() {
    return (
        <section className={styles.container}>
            <motion.div
                className={styles.paper}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className={styles.heading}>Dearest Mom,</h2>
                <div className={styles.body}>
                    <p>
                        Happy Birthday! Today we celebrate not just another year, but another year of your
                        endless love, your comforting hugs, and your incredible strength. You are always very pushing of me and hope to see the best in me everyday.
                        Your visions of me are always very grand and I try my best to live up to them everyday.
                    </p>
                    <p>
                        You are the heart of our family, the one who keeps us all grounded and growing. You worry everyday about whether all of us are healthy or not.
                        Your kindness and consideration for any struggles I or the family goes through is always the best!
                    </p>
                    <p>
                        Happy Birthday to the best mom in the world!
                    </p>
                </div>
                <div className={styles.signature}>
                    With love,
                    <br />
                    <strong>Nunu</strong>
                </div>
            </motion.div>
        </section>
    );
}

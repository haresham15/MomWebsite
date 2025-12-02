"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./Memories.module.css";
import { X } from "lucide-react";

const memories = [
    { id: 1, image: "/assets/Mom/cruise.png", title: "Cruise Adventures", description: "This cruise adventure was extremely enjoyable on all the islands" },
    { id: 2, image: "/assets/Mom/condados.png", title: "Taco Tuesdays", description: "Enjoying our favorite tacos at Condado. Good food and even better company." },
    { id: 3, image: "/assets/Mom/romance.png", title: "Everlasting Love", description: "You and Dadder continue to be the standard for a good couple" },
    { id: 4, image: "/assets/Mom/dinosaur.png", title: "Fun Times", description: "Mommer with Anithi's plush animals and dinosaurs" },
    { id: 5, image: "/assets/Mom/mygraduation.png", title: "Graduation Day", description: "You were my biggest cheerer in the crowd and were so proud of me on thsi day." },
    { id: 6, image: "/assets/Mom/annascrubs.png", title: "Annan's Rounds", description: "Looking so proud of seeing Anna before his rounds on campus." },
];

export default function Memories() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const selectedMemory = memories.find(m => m.id === selectedId);

    return (
        <section className={styles.section}>
            <motion.h2
                className={styles.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Cherished Memories
            </motion.h2>

            <div className={styles.grid}>
                {memories.map((memory, index) => (
                    <motion.div
                        key={memory.id}
                        layoutId={`card-${memory.id}`}
                        className={styles.card}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                        onClick={() => setSelectedId(memory.id)}
                    >
                        <Image
                            src={memory.image}
                            alt={memory.title}
                            fill
                            className={styles.cardImage}
                        />
                        <motion.div className={styles.placeholderContent}>
                            <motion.span layoutId={`title-${memory.id}`}>{memory.title}</motion.span>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedId && selectedMemory && (
                    <motion.div
                        className={styles.overlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            className={styles.modal}
                            layoutId={`card-${selectedId}`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className={styles.closeButton} onClick={() => setSelectedId(null)}>
                                <X size={24} />
                            </button>
                            <div className={styles.modalImageWrapper}>
                                <Image
                                    src={selectedMemory.image}
                                    alt={selectedMemory.title}
                                    fill
                                    className={styles.modalImage}
                                />
                            </div>
                            <div className={styles.modalContent}>
                                <motion.h3
                                    className={styles.modalTitle}
                                    layoutId={`title-${selectedId}`}
                                >
                                    {selectedMemory.title}
                                </motion.h3>
                                <motion.p
                                    className={styles.modalDescription}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {selectedMemory.description}
                                </motion.p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

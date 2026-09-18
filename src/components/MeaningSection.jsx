import { motion } from 'framer-motion'
import './MeaningSection.css'

const nameMeanings = [
  { word: 'مَلَك', text: 'ملاك.. نور نزل على حياتي فبدّلها للأحسن' },
  { word: 'مُلْك', text: 'مُلك الدنيا كلها مش هيساوي عندي وجودك جنبي' },
]

const letters = [
  { l: 'م', text: 'ملاكي اللي نوّرت حياتي وملّيتيها حنيّة' },
  { l: 'ل', text: 'لقيت فيكي البيت والأمان اللي كنت بدوّر عليهم' },
  { l: 'ك', text: 'كل الدنيا في ضحكتك، وقلبي كله مُلكك' },
]

export default function MeaningSection() {
  return (
    <section className="meaning-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">معنى اسمك</span>
        <h2 className="section-title">ملك.. اسم على مسمّى</h2>
        <p className="section-subtitle">
          الاسم ده مش صدفة، وكل حرف فيه ليه معنى عندي ♥
        </p>
      </motion.div>

      <div className="name-meaning-grid">
        {nameMeanings.map((item, i) => (
          <motion.div
            key={item.word}
            className="name-meaning-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <span className="name-meaning-word">{item.word}</span>
            <span className="name-meaning-text">{item.text}</span>
          </motion.div>
        ))}
      </div>

      <div className="meaning-grid">
        {letters.map((item, i) => (
          <motion.div
            key={i}
            className="meaning-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            <span className="meaning-letter">{item.l}</span>
            <span className="meaning-text">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

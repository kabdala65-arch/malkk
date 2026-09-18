import { motion } from 'framer-motion'
import './MissingYouSection.css'

const lines = [
  'يعني الدنيا كلها فاضية من غيرك',
  'يعني بدوّر عليكي وسط أي زحمة',
  'يعني بابص في التليفون كل شوية أشوف رديتي ولا لسه',
  'يعني مبيجيليش نوم وإنتي مش في بالي',
  'يعني حاسس إني ناقص حاجة، وإنتي الحاجة دي',
  'يعني حتى وأنا بضحك مع الناس، جوايا بفكّر فيكي',
  'يعني بزهق بسرعة من غير صوتك',
  'يعني كل حاجة حواليا بترجّعني ليكي',
  'يعني إنتي أول واحدة أفكر فيها أول ما أصحى، وآخر واحدة قبل ما أنام',
  'يعني صوتك لوحده هو اللي بيريّحني، ولو غاب شوية بحس إن يومي ناقص',
  'يعني من غيرك حاسس إني تايه، وإنتي اللي بترجّعيني لنفسي',
]

export default function MissingYouSection() {
  return (
    <section className="missing-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">وحشتيني</span>
        <h2 className="section-title">كلمة "وحشتيني" دي مش بسيطة خالص</h2>
        <p className="section-subtitle">
          فيها معاني كتير أوي، خليكي معايا لحد آخرها ♥
        </p>
      </motion.div>

      <div className="missing-list">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            className="missing-line"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
          >
            <span className="missing-heart">♥</span>
            <span className="missing-word">وحشتيني</span>
            <span className="missing-text">{line}</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="missing-closing"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        بس خلاصة الكلام كله.. وحشتيني بجد أوي يا ملك 😂♥♥
      </motion.p>
    </section>
  )
}

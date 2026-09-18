# 💖 موقع ملك — Love Website

موقع رومانسي بـ React + Vite + Framer Motion.

- تاريخ العداد: **24/11/2025** (في `src/components/CounterSection.jsx` → `START_DATE`)
- كلمة السر: في `src/components/PasswordGate.jsx` → `CORRECT_PASSWORD`

## 🚀 التشغيل

```bash
npm install
npm run dev
```

هيفتح على http://localhost:3000

## 📸 الملفات اللي لازم تتحط (من غير أي تعديل في الكود)

| المكان | الملفات |
|--------|---------|
| `public/images/` | `photo1.jpg` … `photo4.jpg` (4 صور للمعرض) + `profile.jpg` (صورة البروفايل) |
| `public/video/` | `our-video.mp4` (فيديو واحد) |
| `public/music/` | `our-song.mp3` (الأغنية) |

الامتدادات المدعومة للصور: jpg / jpeg / png / webp.

## ✏️ تخصيص الكلام

| الملف | المحتوى |
|------|---------|
| `HeroSection.jsx` | الاسم الكبير والتاريخ والجملة الأولى |
| `MeaningSection.jsx` | معنى اسم ملك وحروفه |
| `MissingYouSection.jsx` | قسم "وحشتيني" |
| `GallerySection.jsx` | تعليقات الصور الأربعة |
| `LoveCardsSection.jsx` | الكروت التفاعلية |
| `PromiseSection.jsx` | الوعد والقصيدة |
| `VideoMessageSection.jsx` | عناوين قسم الفيديو |
| `MessageSection.jsx` | الرسالة الكبيرة الأخيرة |

## 📦 النشر

```bash
npm run build
```

ارفع مجلد `dist/` على Netlify أو Vercel (الإعدادات جاهزة في `netlify.toml` و `vercel.json`).

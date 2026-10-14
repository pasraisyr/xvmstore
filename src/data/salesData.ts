import type {
  LearningPillar,
  ComparisonItem,
  BonusItem,
  PricingPackage,
  FAQItem,
  Testimonial,
} from '../types/sales'

export const SITE_INFO = {
  title: 'UMRAH SO EASY',
  subtitle: 'Panduan Ringkas Umrah DIY',
  tagline: 'Panduan untuk membantu anda merancang Umrah DIY dengan lebih mudah, tersusun dan yakin.',
  merchantName: 'XVM Store',
  supportEmail: 'support@xvmstore.com',
  whatsappNumber: '60123456789',
  whatsappDisplay: '+60 12-345 6789',
  officialPartner: 'HitPay Verified Payment Partner',
  currency: 'RM',
}

export const JOURNEY_STEPS = [
  { step: '01', title: 'Malaysia', desc: 'Persediaan dokumen, visa & beg' },
  { step: '02', title: 'Flight', desc: 'Penerbangan terus atau transit bajet' },
  { step: '03', title: 'Jeddah / Madinah', desc: 'Ketibaan & pengangkutan darat' },
  { step: '04', title: 'Makkah', desc: 'Check-in hotel & persiapan Miqat' },
  { step: '05', title: 'Ibadah Umrah', desc: 'Ihram, Tawaf, Sa’i & Tahallul' },
  { step: '06', title: 'Madinah Munawwarah', desc: 'Ziarah Masjid Nabawi & Raudhah' },
  { step: '07', title: 'Kepulangan', desc: 'Airport pulang ke tanah air dengan mabrur' },
]

export const PAIN_POINTS = [
  {
    icon: 'Plane',
    title: 'Flight nak booking macam mana?',
    desc: 'Buntu nak pilih direct flight atau transit, tarikh tiket murah dan syarat bagasi jemaah.',
  },
  {
    icon: 'Hotel',
    title: 'Hotel nak pilih di mana?',
    desc: 'Takut tersalah pilih hotel jauh dari dataran Masjidil Haram atau harga tercekik.',
  },
  {
    icon: 'Smartphone',
    title: 'Aplikasi apa yang perlu ada?',
    desc: 'Pening dengan sistem Nusuk, tempahan slot Raudhah, SIM card dan e-wallet di Saudi.',
  },
  {
    icon: 'FileCheck',
    title: 'Macam mana urusan permit atau visa?',
    desc: 'Keliru antara Visa Pelancong (Tourist e-Visa), Visa Umrah atau Visa Transit.',
  },
  {
    icon: 'Car',
    title: 'Bagaimana pengangkutan dari airport?',
    desc: 'Risau ditipu ulat teksi airport Jeddah atau tak tahu cara naik Kereta Api Haramain (HHR).',
  },
  {
    icon: 'MapPin',
    title: 'Makkah dan Madinah nak susun macam mana?',
    desc: 'Tak tahu turutan mana patut didahulukan, waktu ziarah terbaik dan elak kesesakan.',
  },
  {
    icon: 'Coins',
    title: 'Berapa bajet yang diperlukan?',
    desc: 'Takut terlebih bajet atau tak pasti anggaran kos sebenar makan, hotel dan logistik.',
  },
  {
    icon: 'Luggage',
    title: 'Apa yang perlu dibawa?',
    desc: 'Bimbang tertinggal ubatan penting, kelengkapan ihram, atau bawa barang yang dilarang.',
  },
  {
    icon: 'BookOpen',
    title: 'Bagaimana pula langkah ibadah Umrah?',
    desc: 'Risau tersalah niat Miqat, pantang larang ihram, bilangan pusingan atau cara tahallul.',
  },
]

export const LEARNING_PILLARS: LearningPillar[] = [
  {
    id: 'sebelum',
    title: 'Sebelum Berangkat',
    icon: 'PlaneTakeoff',
    tagline: 'Langkah awal persediaan rapi di tanah air',
    topics: [
      'Cara membuat persediaan Umrah mengikut garis masa (3 bulan - 1 minggu)',
      'Perancangan bajet realistik & perbandingan kos DIY vs Agensi',
      'Penerbangan: Cara banding harga tiket, direct flight vs transit jimat',
      'Hotel: Tips pilih penginapan selamat, dekat dan patuh bajet',
      'Pengangkutan: Panduan kereta api laju Haramain vs teksi / bas SAPTCO',
      'Dokumen penting: e-Visa, pasport, salinan digital & insurans perjalanan',
      'Barang keperluan & packing list lengkap untuk iklim Makkah & Madinah',
      'Aplikasi yang wajib dipasang dan didaftar sebelum menaiki pesawat',
    ],
  },
  {
    id: 'online',
    title: 'Urusan Online & Aplikasi',
    icon: 'Smartphone',
    tagline: 'Kuasai teknologi perjalanan moden di Arab Saudi',
    topics: [
      'Aplikasi penting untuk jemaah (Nusuk, Haramain Train, Careem/Uber)',
      'Panduan langkah demi langkah tempahan slot Raudhah tanpa gagal',
      'Cara mendapatkan maklumat perjalanan rasmi dan elak scam',
      'Perkara kritikal yang perlu diaktifkan sebelum berangkat (eSIM, roaming)',
      'Tips menggunakan platform tempahan hotel (Agoda, Booking.com, Trip.com)',
      'Pengurusan kad debit antarabangsa (Wise / BigPay) untuk kadar tukaran terbaik',
    ],
  },
  {
    id: 'tanah-suci',
    title: 'Di Tanah Suci',
    icon: 'Compass',
    tagline: 'Navigasi Makkah & Madinah dengan yakin tanpa pemandu pelancong',
    topics: [
      'Makkah Al-Mukarramah: Orientasi pintu masuk Masjidil Haram & laluan mudah',
      'Madinah Al-Munawwarah: Rutin harian solat di Masjid Nabawi & adab ziarah',
      'Pengangkutan antara bandar (Jeddah - Makkah - Madinah)',
      'Tips check-in hotel, urusan deposit dan penyimpanan bagasi',
      'Tempat-tempat penting bersejarah (Jabal Nur, Jabal Uhud, Quba)',
      'Tips bergerak sendiri, elak ulat teksi dan lokasi makanan bajet yang sedap',
    ],
  },
  {
    id: 'ibadah',
    title: 'Ibadah Umrah',
    icon: 'HeartHandshake',
    tagline: 'Rukun, wajib dan doa diringkaskan mengikut sunnah',
    topics: [
      'Ihram: Niat, lokasi Miqat (di atas flight / Qarnul Manazil / Bir Ali)',
      'Pantang larang ihram dan cara elak daripada dikenakan dam',
      'Tawaf: 7 pusingan, adab di Hajarul Aswad, Rukun Yamani & Maqam Ibrahim',
      'Sa’i: 7 perjalanan antara Safa & Marwah dengan panduan lampu hijau',
      'Tahallul: Cukur atau gunting rambut menandakan selesai ibadah Umrah',
      'Himpunan doa, talbiyah dan zikir ringkas yang mudah dihafal atau dibaca',
    ],
  },
  {
    id: 'checklist',
    title: 'Checklist Persediaan',
    icon: 'ClipboardCheck',
    tagline: 'Senarai semak praktikal supaya tiada apa yang tercicir',
    topics: [
      'Apa yang perlu dibawa: Beg sandang, kasut selesa, gunting tahallul, ubat peribadi',
      'Apa yang perlu disediakan: Salinan pasport, slip visa, ubat batuk & selsema',
      'Perkara yang perlu dibuat sebelum meninggalkan rumah di Malaysia',
      'Checklist beg kabin vs beg kargo mengikut piawaian syarikat penerbangan',
    ],
  },
]

export const COMPARISONS: ComparisonItem[] = [
  {
    feature: 'Masa Mencari Maklumat',
    diyWithBook: '2-3 jam membaca panduan berstruktur A-Z dalam 1 buku.',
    withoutBook: '40+ jam mencari di TikTok, Facebook, YouTube & forum lama yang mengelirukan.',
  },
  {
    feature: 'Ketepatan Maklumat',
    diyWithBook: 'Terkini, praktikal mengikut sistem digital Arab Saudi semasa.',
    withoutBook: 'Banyak info lapuk, peraturan visa yang telah mansuh & pengalaman usang.',
  },
  {
    feature: 'Fleksibiliti Perjalanan',
    diyWithBook: 'Bebas tentukan tarikh, flight, hotel kegemaran & bajet keluarga.',
    withoutBook: 'Terikat dengan jadual ketat agensi, bilik kongsi atau kos pakej melambung.',
  },
  {
    feature: 'Tahap Keyakinan',
    diyWithBook: 'Yakin kerana tahu turutan langkah demi langkah dari rumah ke Kaabah.',
    withoutBook: 'Rasa cemas, takut tersesat, bimbang visa ditolak atau salah tertib ibadah.',
  },
  {
    feature: 'Penjimatan Kos',
    diyWithBook: 'Boleh jimat RM2,000 - RM5,000 seorang dengan memilih sendiri tawaran terbaik.',
    withoutBook: 'Membayar margin keuntungan tinggi agensi pakej yang mahal.',
  },
]

export const TARGET_AUDIENCES = [
  'Mahu cuba Umrah DIY tetapi perlukan panduan tersusun',
  'Tidak mahu bergantung 100% kepada jadual ketat pakej travel',
  'Mahu mengurus penerbangan dan pilihan hotel sendiri mengikut bajet',
  'Mahu faham keseluruhan proses Umrah sebelum melangkah ke airport',
  'Mahu berjimat dengan merancang jadual dan pengangkutan sendiri',
  'Pertama kali hendak menunaikan Umrah dan mahu ketenangan minda',
  'Mahu membawa keluarga (anak kecil / ibu bapa) dengan rentak santai sendiri',
]

export const THREE_KEYS = [
  {
    number: '01',
    title: 'Tahu apa yang perlu dibuat',
    desc: 'Bukan semua benda kena buat sekaligus. Fokus pada fasa demi fasa: dokumen, logistik, ibadah.',
  },
  {
    number: '02',
    title: 'Tahu bila perlu dibuat',
    desc: 'Bila waktu tepat mohon visa, bila slot Raudhah dibuka, dan bila perlu niat ihram di Miqat.',
  },
  {
    number: '03',
    title: 'Tahu di mana mencari maklumat',
    desc: 'Tak perlu lemas dalam lautan internet. Rujuk satu panduan yang lengkap dan tepat.',
  },
]

export const BONUSES: BonusItem[] = [
  {
    id: 'bonus-1',
    number: 'Bonus #1',
    title: 'Checklist Umrah DIY Lengkap',
    value: 'Nilai RM 39',
    badge: 'Percuma Dalam Pakej',
    icon: 'CheckSquare',
    description:
      'Senarai semak cetak (printable) & digital mengandungi segala perkara yang wajib diselesaikan 30 hari, 7 hari, dan 24 jam sebelum berlepas.',
  },
  {
    id: 'bonus-2',
    number: 'Bonus #2',
    title: 'Travel Planning & Budget Sheet',
    value: 'Nilai RM 49',
    badge: 'Percuma Dalam Pakej',
    icon: 'FileSpreadsheet',
    description:
      'Templat pengiraan bajet (Google Sheets & Excel) untuk merekod harga tiket penerbangan, hotel, pengangkutan, makanan, dan itinerary harian.',
  },
  {
    id: 'bonus-3',
    number: 'Bonus #3',
    title: 'Video Guide Eksklusif via QR Code',
    value: 'Nilai RM 59',
    badge: 'Percuma Dalam Pakej',
    icon: 'Video',
    description:
      'Akses eksklusif melalui imbasan QR Code dalam buku yang menghubungkan anda ke tutorial video saluran YouTube EzGo Muslim Traveller.',
  },
]

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'digital',
    name: 'E-Book Digital Pantas',
    badge: 'Akses Segera',
    popular: false,
    originalPrice: 79,
    price: 39,
    format: 'digital',
    description: 'Sesuai untuk anda yang suka membaca di iPad, tablet atau smartphone secara terus.',
    items: [
      'E-Book PDF UMRAH SO EASY Versi Penuh (Resolusi Tinggi)',
      'Panduan ringkas Umrah DIY format mudah alih',
      'Panduan perjalanan Umrah A-Z',
      'Rujukan aplikasi dan urusan perjalanan',
      'Pautan interaktif ke aplikasi & laman web rasmi',
    ],
    bonuses: [
      'Bonus #1: Checklist Umrah DIY (Digital PDF)',
      'Bonus #2: Travel Planning Sheet (Google Sheets)',
      'Bonus #3: Video Guide QR Links',
    ],
    ctaText: 'Dapatkan E-Book Sekarang',
  },
  {
    id: 'fizikal',
    name: 'Pakej Lengkap Buku Fizikal + E-Book',
    badge: 'Paling Popular',
    popular: true,
    originalPrice: 139,
    price: 69,
    format: 'combo',
    description: 'Pilihan utama jemaah: Buku fizikal berkualiti tinggi mudah dibawa travel + akses e-book digital serta-merta!',
    items: [
      '1 × Buku Fizikal UMRAH SO EASY (Cetakan Premium Berwarna)',
      'E-Book PDF UMRAH SO EASY (Akses Serta-Merta)',
      'Panduan ringkas Umrah DIY fizikal mudah bawa ke Tanah Suci',
      'Panduan visual ibadah Umrah bergambar',
      'Rujukan aplikasi dan urusan perjalanan',
      'Penghantaran pantas kurier berdaftar ke seluruh Malaysia',
    ],
    bonuses: [
      'Bonus #1: Checklist Umrah DIY (Cetakan Eksklusif + PDF)',
      'Bonus #2: Travel Planning Sheet (Excel & Sheets)',
      'Bonus #3: Video Guide QR Code (Tercetak dalam buku)',
    ],
    ctaText: 'Dapatkan Buku Fizikal + E-Book',
  },
  {
    id: 'famili',
    name: 'Pakej Famili (2 Buku + Semua Bonus)',
    badge: 'Paling Jimat Untuk Keluarga',
    popular: false,
    originalPrice: 229,
    price: 119,
    format: 'physical',
    description: 'Sangat disyorkan jika anda merancang Umrah bersama pasangan, ibu bapa atau adik-beradik.',
    items: [
      '2 × Buku Fizikal UMRAH SO EASY (1 untuk anda, 1 untuk pasangan/ibu bapa)',
      'E-Book PDF UMRAH SO EASY (Akses Tanpa Had)',
      'Semua panduan & rujukan aplikasi',
      'Checklist persediaan berganda untuk seisi keluarga',
      'Percuma kos penghantaran seluruh Semenanjung Malaysia',
    ],
    bonuses: [
      'Bonus #1: 2 Set Checklist Umrah DIY Cetak',
      'Bonus #2: Travel Planning Sheet Versi Famili',
      'Bonus #3: Akses Penuh Video Guide EzGo Muslim Traveller',
    ],
    ctaText: 'Tempah Pakej Famili',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Hafiz & Nurul',
    role: 'Jemaah DIY Pertama Kali',
    location: 'Shah Alam, Selangor',
    avatar: 'H',
    rating: 5,
    highlight: 'Jimat hampir RM6,000 untuk 2 orang!',
    quote:
      'Dulu ingat Umrah DIY ni untuk orang yang fasih bahasa Arab je. Lepas baca UMRAH SO EASY, flow dia jadi sangat jelas. Kami tempah flight Scoot transit & hotel dekat Ajyad. Perjalanan berjalan sangat lancar!',
  },
  {
    name: 'Dr. Zulkifli Rahman',
    role: 'Bawa Ibu Bapa Warga Emas',
    location: 'Bangi, Selangor',
    avatar: 'Z',
    rating: 5,
    highlight: 'Dapat atur jadual ikut kudrat mak ayah.',
    quote:
      'Kelebihan utama DIY ikut panduan ni, mak dan ayah saya tak penat terkejar-kejar jadual bas agensi. Kami boleh rehat bila perlu dan fokus ibadah di Masjid Nabawi dan Masjidil Haram tanpa tekanan.',
  },
  {
    name: 'Puan Siti Aminah',
    role: 'Travel Solo Wanita',
    location: 'Johor Bahru',
    avatar: 'S',
    rating: 5,
    highlight: 'Panduan aplikasi Nusuk & Raudhah sangat membantu!',
    quote:
      'Bab paling saya takut ialah urusan aplikasi dan pengangkutan di airport. Syukur buku ni terangkan langkah demi langkah, siap ada visual. Rasa yakin sangat waktu sampai di Jeddah!',
  },
]

export const FAQS: FAQItem[] = [
  {
    question: 'Betul ke orang biasa boleh buat Umrah DIY tanpa travel agensi?',
    answer:
      'Ya, 100%! Kerajaan Arab Saudi kini membuka peluang seluas-luasnya melalui sistem e-Visa Pelancong dan aplikasi Nusuk. Ribuan rakyat Malaysia telah berjaya menunaikan Umrah secara DIY dengan kos yang jauh lebih jimat dan fleksibel.',
  },
  {
    question: 'Berapa lama masa penghantaran untuk buku fizikal?',
    answer:
      'Pesanan diproses dalam 1-2 hari bekerja. Penghantaran ke Semenanjung Malaysia mengambil masa 1 hingga 3 hari bekerja, manakala Sabah & Sarawak mengambil masa 3 hingga 5 hari bekerja melalui kurier berdaftar bersama tracking number.',
  },
  {
    question: 'Adakah saya akan dapat e-book serta-merta selepas pembayaran?',
    answer:
      'Ya! Sebaik sahaja pembayaran berjaya disahkan melalui HitPay, pautan muat turun e-book dan bonus percuma akan dihantar secara automatik terus ke alamat emel yang anda daftarkan.',
  },
  {
    question: 'Adakah pembayaran online ini selamat?',
    answer:
      'Sangat selamat. Semua pembayaran diproses melalui gerbang pembayaran rasmi berdaftar HitPay Payment Gateway. Sistem menyokong FPX Online Banking, DuitNow QR, dan kad Visa/Mastercard dengan enkripsi SSL bertaraf institusi kewangan.',
  },
  {
    question: 'Bagaimana jika saya tidak pandai IT, bolehkah saya faham panduan ini?',
    answer:
      'Pasti boleh. UMRAH SO EASY ditulis dalam Bahasa Melayu yang santai dan mudah, tanpa istilah teknikal yang rumit. Setiap langkah disertakan penerangan ringkas dan infografik visual yang terus kepada inti pati.',
  },
  {
    question: 'Adakah buku ini merangkumi panduan rukun dan ibadah Umrah?',
    answer:
      'Ya. Buku ini bukan sahaja panduan logistik travel, malah merangkumi langkah rukun dan wajib Umrah yang lengkap: dari niat di Miqat, pemakaian ihram, tawaf 7 pusingan, sa’i, hingga tahallul dan doa-doa terpilih.',
  },
  {
    question: 'Bagaimana untuk mengakses video guide EzGo Muslim Traveller?',
    answer:
      'Di dalam buku terdapat QR code khas yang boleh diimbas menggunakan kamera smartphone anda untuk terus membuka playlist video panduan visual secara eksklusif.',
  },
]

export const HITPAY_PAYMENT_METHODS = [
  { name: 'FPX Online Banking', desc: 'Maybank2u, CIMB Clicks, Bank Islam, dll' },
  { name: 'DuitNow QR', desc: 'Imbas terus menggunakan mana-mana perbankan atau eWallet' },
  { name: 'Kad Debit / Kredit', desc: 'Visa & Mastercard dengan perlindungan 3D Secure' },
  { name: 'Touch n Go & GrabPay', desc: 'Pembayaran e-Wallet pantas' },
]

export const DISCLAIMER_TEXT =
  'Nota Penafian Rasmi: UMRAH SO EASY ialah panduan ringkas berdasarkan pengalaman, penyelidikan dan maklumat yang dikumpulkan untuk membantu perancangan Umrah DIY. Polisi visa, aplikasi rasmi kerajaan (seperti Nusuk), peraturan syarikat penerbangan, penginapan hotel, pengangkutan darat dan peraturan semasa di Arab Saudi boleh berubah dari semasa ke semasa mengikut ketetapan pihak berkuasa. Pembaca disarankan menyemak maklumat terkini daripada sumber rasmi sebelum membuat tempahan muktamad atau memulakan perjalanan.'

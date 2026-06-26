export type Lang = 'fa' | 'en';
export type Dir = 'rtl' | 'ltr';

export interface Stat       { n: string; l: string; }
export interface NavItem    { label: string; id: string; href?: string; }
export interface Founder    { name: string; role: string; bio: string; linkedin: string; cv: string; initials: string; bg: string; ink: string; }
export interface HeroData   { badge: string; title: string; lead: string; primary: string; secondary: string; liveLabel: string; cardTitle: string; cardTeacher: string; cardMeta: string; cardInitials: string; stats: Stat[]; }
export interface AboutData  { badge: string; title: string; body: string; body2: string; }
export interface Pillar     { ic: string; title: string; desc: string; }
export interface Course     { ic: string; title: string; desc: string; soft: string; ink: string; badge: string; meta: string[]; }
export interface Instructor { name: string; role: string; bio: string; bg: string; ink: string; initials: string; }
export interface GalleryTile { caption: string; ic: string; g: string; span: number; }
export interface ContactItem  { ic: string; label: string; value: string; }
export interface FormData     { name: string; namePh: string; phone: string; phonePh: string; age: string; msg: string; msgPh: string; submit: string; success: string; reset: string; }
export interface FooterCol    { h: string; items: string[]; }
export interface FooterData   { tagline: string; rights: string; rightsEn: string; cols: FooterCol[]; }
export interface SocialItem   { ic: string; label: string; }
export interface Testimonial  { name: string; role: string; body: string; initials: string; bg: string; ink: string; stars: number; }

export interface PageContent {
  dir: Dir;
  lang: string;
  brand: string;
  brandSub: string;
  nav: NavItem[];
  cta: string;
  switchLabel: string;
  hero: HeroData;
  aboutStat: Stat;
  about: AboutData;
  pillars: Pillar[];
  coursesTitle: string;
  coursesLead: string;
  detailsLabel: string;
  courses: Course[];
  instructorsTitle: string;
  instructorsLead: string;
  instructors: Instructor[];
  foundersTitle: string;
  foundersLead: string;
  founders: Founder[];
  galleryTitle: string;
  galleryLead: string;
  gallery: GalleryTile[];
  formTitle: string;
  formLead: string;
  contact: ContactItem[];
  form: FormData;
  ages: string[];
  testimonialsTitle: string;
  testimonialsLead: string;
  testimonials: Testimonial[];
  social: SocialItem[];
  footer: FooterData;
}

export const CONTENT: Record<Lang, PageContent> = {
  fa: {
    dir: 'rtl', lang: 'fa',
    brand: 'آکادمی هامون', brandSub: 'یادگیری هوشمند برای نسل آینده',
    nav: [
      { label: 'درباره ما',    id: 'about',        href: '/#about' },
      { label: 'زبان انگلیسی', id: 'dept-english',  href: '/departments/english' },
      { label: 'ریاضی',        id: 'dept-math',     href: '/departments/mathematics' },
      { label: 'هوش مصنوعی',   id: 'dept-ai',       href: '/departments/ai' },
      { label: 'کارگاه‌ها',    id: 'workshops',     href: '/workshops' },
    ],
    cta: 'رزرو مشاوره رایگان',
    switchLabel: 'EN',
    hero: {
      badge: 'آکادمی آنلاین کودک و نوجوان',
      title: 'یادگیری هوشمند،\nبرای نسل آینده',
      lead: 'آموزش فردمحور با بازخورد اختصاصی برای هر دانش‌آموز؛ کلاس‌های تعاملی و مدرن برای کودکان، نوجوانان و بزرگسالان.',
      primary: 'رزرو مشاوره رایگان', secondary: 'مشاهده برنامه‌ها', liveLabel: 'زنده',
      cardTitle: 'کلاس زنده مکالمه', cardTeacher: 'مربی: سارا محمدی', cardMeta: 'پنجشنبه · ۱۷:۰۰', cardInitials: 'س',
      stats: [{ n: '۲٬۴۰۰+', l: 'دانش‌آموز فعال' }, { n: '۹۸٪', l: 'رضایت خانواده‌ها' }],
    },
    aboutStat: { n: '۹۸٪', l: 'رضایت خانواده‌ها' },
    about: {
      badge: 'درباره ما',
      title: 'جایی که یادگیری معنا پیدا می‌کند',
      body: 'آکادمی هامون از یک باور ساده آغاز شد: هر کودک استعدادی بی‌نظیر دارد که با آموزش درست شکوفا می‌شود. ما محیطی علمی و در عین حال صمیمی ساختیم تا یادگیری برای نسل آینده، لذت‌بخش و معنادار باشد.',
      body2: 'رسالت ما در آکادمی هامون، ایجاد تحولی بنیادین در مسیر رشد دانش‌آموزان است؛ بستری که در آن کودکان و نوجوانان با کشف و شکوفایی استعدادهای پنهان خود، هویتی مثبت، پویا و سرشار از خودباوری پیدا می‌کنند.',
    },
    pillars: [
      { ic: 'graduation', title: 'متد روز دنیا', desc: 'برنامه‌ی درسی به‌روز و مبتنی بر پژوهش‌های آموزشی نوین.' },
      { ic: 'pen', title: 'بازخورد فردی و اختصاصی', desc: 'ارزیابی و راهنمایی اختصاصی برای هر دانش‌آموز در هر جلسه.' },
      { ic: 'heart', title: 'همراهی گام‌به‌گام با خانواده', desc: 'گزارش پیشرفت شفاف تا والدین همیشه در جریان مسیر فرزندشان باشند.' },
    ],
    coursesTitle: 'دوره‌ها و برنامه‌های ما',
    coursesLead: 'از زبان و ریاضی تا مهارت‌های دیجیتال — برنامه‌هایی منعطف برای هر رده‌ی سنی و هر علاقه‌ای.',
    detailsLabel: 'مشاهده جزئیات',
    courses: [
      { ic: 'chat', title: 'مکالمه انگلیسی نوجوانان', desc: 'کلاس‌های تعاملی با بازخورد اختصاصی برای هر زبان‌آموز.', soft: 'var(--blue-50)', ink: 'var(--blue-600)', badge: 'پرطرفدار', meta: ['۱۲ جلسه', '۱۴–۱۶ سال'] },
      { ic: 'calculator', title: 'ریاضی هوشمند کودکان', desc: 'یادگیری مفهومی ریاضی با بازی و چالش‌های گروهی.', soft: 'var(--amber-50)', ink: 'var(--amber-600)', badge: 'جدید', meta: ['۸ جلسه', '۱۰–۱۱ سال'] },
      { ic: 'laptop', title: 'کارگاه مهارت‌های دیجیتال', desc: 'ویژه‌ی بزرگسالان؛ ابزارهای روز دنیا برای کار و یادگیری.', soft: 'var(--blue-50)', ink: 'var(--blue-700)', badge: 'بزرگسالان', meta: ['۶ جلسه', 'آنلاین'] },
    ],
    instructorsTitle: 'با اساتید هامون آشنا شوید',
    instructorsLead: 'مربیانی باتجربه، پرانگیزه و عاشق آموزش — همراه دانش‌آموزان در هر قدم.',
    instructors: [
      { name: 'سارا محمدی', role: 'مدرس زبان انگلیسی', bio: 'بیش از ۸ سال تجربه‌ی تدریس مکالمه به نوجوانان.', bg: 'var(--blue-100)', ink: 'var(--blue-600)', initials: 'س م' },
      { name: 'علی رضایی', role: 'مدرس ریاضی', bio: 'عاشق آموزش مفهومی ریاضی و حل خلاقانه‌ی مسئله.', bg: 'var(--amber-100)', ink: 'var(--amber-600)', initials: 'ع ر' },
      { name: 'نگار کریمی', role: 'مدرس علوم و کاوش', bio: 'کنجکاوی را در آزمایشگاه به ماجراجویی تبدیل می‌کند.', bg: 'var(--mint-100)', ink: 'var(--mint-600)', initials: 'ن ک' },
      { name: 'رضا تهرانی', role: 'مهارت‌های دیجیتال', bio: 'متخصص ابزارهای نوین یادگیری و سواد دیجیتال.', bg: 'var(--blue-100)', ink: 'var(--blue-700)', initials: 'ر ت' },
    ],
    foundersTitle: 'بنیان‌گذاران و اساتید ارشد',
    foundersLead: 'آشنایی با پایه‌گذاران آکادمی هامون',
    founders: [
      {
        name: 'سعید موسی‌وند',
        role: '',
        bio: 'سعید موسی‌وند با سال‌ها تجربه در مدیریت آموزش و توسعه محصولات یادگیری، بینش راهبردی و مسیر رشد آکادمی هامون را شکل داده است. تخصص او در طراحی سیستم‌های آموزشی مؤثر و ایجاد محیط‌های یادگیری پویا، سنگ بنای موفقیت هامون است.',
        linkedin: '#', cv: '#',
        initials: 'س م', bg: 'var(--blue-100)', ink: 'var(--blue-700)',
      },
      {
        name: 'خدیجه فتحعلی‌خانی',
        role: '',
        bio: 'خدیجه فتحعلی‌خانی دارای دکترای ریاضیات با تخصص در ترکیبیات و نظریه گراف است که اکنون در حوزه هوش مصنوعی کاربردی و مهندسی زیرساخت DevOps فعالیت می‌کند. او سابقه تدریس گسترده‌ای در دانشگاه‌های مختلف از جمله الزهرا و فرهنگیان دارد و پژوهش‌های بین‌المللی متعددی را در اسپانیا و اسلوونی به سرانجام رسانده است.',
        linkedin: 'https://www.linkedin.com/in/khadijeh-fathalikhani-405b0627', cv: '#',
        initials: 'خ ف', bg: 'var(--amber-100)', ink: 'var(--amber-700)',
      },
    ],
    galleryTitle: 'لحظه‌هایی از آکادمی هامون',
    galleryLead: 'نگاهی به کلاس‌های زنده، تعامل دانش‌آموزان و منابع آموزشی پیشرو.',
    gallery: [
      { caption: 'کلاس زنده‌ی مکالمه', ic: 'chat', g: 'linear-gradient(135deg,var(--blue-500),var(--blue-800))', span: 2 },
      { caption: 'تعامل و کار گروهی', ic: 'users', g: 'linear-gradient(135deg,var(--amber-400),var(--amber-700))', span: 1 },
      { caption: 'پروژه‌ی دانش‌آموزی', ic: 'bulb', g: 'linear-gradient(135deg,var(--amber-500),var(--amber-800))', span: 1 },
      { caption: 'جشن پایان دوره', ic: 'party', g: 'linear-gradient(135deg,var(--blue-600),var(--blue-900))', span: 2 },
    ],
    formTitle: 'رزرو مشاوره رایگان',
    formLead: 'فرم زیر را پر کنید؛ مشاوران ما برای انتخاب بهترین مسیر یادگیری با شما تماس می‌گیرند.',
    contact: [
      { ic: 'phone', label: 'تماس مستقیم', value: '۰۹۱۲۹۴۷۴۵۵۳' },
      { ic: 'mail', label: 'ایمیل', value: 'info@hamooninstitute.com' },
      { ic: 'clock', label: 'ساعات پاسخگویی', value: 'شنبه تا پنجشنبه · ۹ تا ۱۹' },
      { ic: 'globe', label: 'وب‌سایت', value: 'www.hamooninstitute.com\nwww.hamooninstitute.ir' },
    ],
    form: { name: 'نام و نام خانوادگی', namePh: 'مثلاً سارا محمدی', phone: 'شماره تماس / ایمیل', phonePh: '۰۹۱۲ ۳۴۵ ۶۷۸۹', age: 'رده سنی دانش‌آموز', msg: 'پیام (اختیاری)', msgPh: 'علاقه‌مندی یا سؤال شما…', submit: 'ارسال درخواست مشاوره', success: 'درخواست شما ثبت شد! به‌زودی برای رزرو مشاوره با شما تماس می‌گیریم.', reset: 'ثبت درخواست جدید' },
    ages: ['۱۰–۱۱ سال', '۱۲–۱۳ سال', '۱۴–۱۶ سال', 'بزرگسال'],
    testimonialsTitle: 'نظرات خانواده‌ها',
    testimonialsLead: 'آنچه والدین و دانش‌آموزان درباره هامون می‌گویند',
    testimonials: [
      { name: 'زهرا احمدی', role: 'مادر دانش‌آموز', body: 'فرزندم بعد از سه ماه کلاس مکالمه انگلیسی با اعتماد به نفس بیشتری صحبت می‌کند. متد هامون واقعاً متفاوت است و بازخورد اختصاصی هر جلسه تفاوت بزرگی ایجاد کرده.', initials: 'ز ا', bg: 'var(--blue-100)', ink: 'var(--blue-700)', stars: 5 },
      { name: 'علیرضا رضایی', role: 'پدر دانش‌آموز', body: 'برنامه ریاضی هوشمند معجزه کرد. پسرم که از ریاضی فرار می‌کرد، الان عاشقش شده و هر هفته منتظر کلاس بعدی است. ممنون از تیم هامون.', initials: 'ع ر', bg: 'var(--amber-100)', ink: 'var(--amber-700)', stars: 5 },
      { name: 'دنیا کریمی', role: 'دانش‌آموز، ۱۴ ساله', body: 'کلاس‌های آنلاین هامون خیلی جذاب‌تر از انتظارم بود. مربی‌ها صبور و دلسوزند و همیشه جواب سؤال‌هایم را می‌دهند.', initials: 'د ک', bg: 'var(--mint-100)', ink: 'var(--mint-700)', stars: 5 },
      { name: 'فاطمه موسوی', role: 'مادر دانش‌آموز', body: 'گزارش پیشرفت هفتگی فوق‌العاده است. همیشه در جریان دقیق یادگیری فرزندم هستم و این شفافیت برای ما به‌عنوان والدین بسیار ارزشمند است.', initials: 'ف م', bg: 'var(--blue-100)', ink: 'var(--blue-600)', stars: 5 },
      { name: 'آرش طاهری', role: 'دانش‌آموز، ۱۲ ساله', body: 'سواد علمی هامون دیدم را باز کرد. یاد گرفتم مثل یک دانشمند فکر کنم، سؤال بپرسم و آزمایش کنم. بهترین کلاسی بود که رفتم!', initials: 'آ ط', bg: 'var(--amber-100)', ink: 'var(--amber-600)', stars: 5 },
    ],
    social: [{ ic: 'instagram', label: 'اینستاگرام' }, { ic: 'telegram', label: 'تلگرام' }],
    footer: {
      tagline: 'یادگیری هوشمند و فردمحور برای کودکان، نوجوانان و بزرگسالان.',
      rights: '© ۲۰۲۶ آکادمی آنلاین هامون. تمامی حقوق محفوظ است.',
      rightsEn: '© 2026 Hamoon Online Academy.',
      cols: [
        { h: 'دوره‌ها', items: ['زبان انگلیسی', 'ریاضی هوشمند', 'علوم و کاوش', 'مهارت دیجیتال'] },
        { h: 'آکادمی', items: ['درباره ما', 'اساتید', 'روش آموزش', 'گالری'] },
        { h: 'پشتیبانی', items: ['تماس با ما', 'سؤالات متداول', 'قوانین', 'حریم خصوصی'] },
      ],
    },
  },

  en: {
    dir: 'ltr', lang: 'en',
    brand: 'Hamoon Academy', brandSub: 'Smart learning for the next generation',
    nav: [
      { label: 'About',        id: 'about',        href: '/#about' },
      { label: 'English',      id: 'dept-english',  href: '/departments/english' },
      { label: 'Mathematics',  id: 'dept-math',     href: '/departments/mathematics' },
      { label: 'AI',           id: 'dept-ai',       href: '/departments/ai' },
      { label: 'Workshops',    id: 'workshops',     href: '/workshops' },
    ],
    cta: 'Book a free consultation',
    switchLabel: 'فا',
    hero: {
      badge: 'Online academy for kids & teens',
      title: 'Smart learning,\nfor the next generation',
      lead: 'Personalized teaching with dedicated feedback for every student — interactive, modern classes for children, teens, and adults.',
      primary: 'Book a free consultation', secondary: 'See programs', liveLabel: 'LIVE',
      cardTitle: 'Live conversation class', cardTeacher: 'Mentor: Sara M.', cardMeta: 'Thu · 17:00', cardInitials: 'S',
      stats: [{ n: '2,400+', l: 'Active students' }, { n: '98%', l: 'Family satisfaction' }],
    },
    aboutStat: { n: '98%', l: 'Family satisfaction' },
    about: {
      badge: 'About us',
      title: 'Where learning finds its meaning',
      body: 'Hamoon Academy began with one simple belief: every child holds a unique talent that blossoms with the right teaching. We built a space that is scientific yet warm — so learning for the next generation feels joyful and meaningful.',
      body2: 'Drawing on modern world-class methods and a student-centered approach, we design a dedicated path for every learner and give precise, constructive feedback at every step.',
    },
    pillars: [
      { ic: 'graduation', title: 'World-class methods', desc: 'An up-to-date curriculum grounded in modern educational research.' },
      { ic: 'pen', title: 'Individual, dedicated feedback', desc: 'Dedicated assessment and guidance for each student, every session.' },
      { ic: 'heart', title: 'Step-by-step with your family', desc: 'Transparent progress reports keep parents informed throughout.' },
    ],
    coursesTitle: 'Our courses & programs',
    coursesLead: 'From language and math to digital skills — flexible programs for every age and every interest.',
    detailsLabel: 'View details',
    courses: [
      { ic: 'chat', title: 'Teen English Conversation', desc: 'Interactive classes with dedicated feedback for every learner.', soft: 'var(--blue-50)', ink: 'var(--blue-600)', badge: 'Popular', meta: ['12 sessions', 'Ages 14–16'] },
      { ic: 'calculator', title: 'Smart Math for Kids', desc: 'Conceptual math learning through play and group challenges.', soft: 'var(--amber-50)', ink: 'var(--amber-600)', badge: 'New', meta: ['8 sessions', 'Ages 10–11'] },
      { ic: 'laptop', title: 'Digital Skills Workshop', desc: "For adults; today's tools for work and lifelong learning.", soft: 'var(--blue-50)', ink: 'var(--blue-700)', badge: 'Adults', meta: ['6 sessions', 'Online'] },
    ],
    instructorsTitle: 'Meet the Hamoon mentors',
    instructorsLead: 'Experienced, motivating mentors who love teaching — beside every student, every step.',
    instructors: [
      { name: 'Sara Mohammadi', role: 'English Instructor', bio: 'Over 8 years teaching conversation to teenagers.', bg: 'var(--blue-100)', ink: 'var(--blue-600)', initials: 'SM' },
      { name: 'Ali Rezaei', role: 'Math Instructor', bio: 'Passionate about conceptual math and creative problem-solving.', bg: 'var(--amber-100)', ink: 'var(--amber-600)', initials: 'AR' },
      { name: 'Negar Karimi', role: 'Science & Inquiry', bio: 'Turns curiosity into adventure in the lab.', bg: 'var(--mint-100)', ink: 'var(--mint-600)', initials: 'NK' },
      { name: 'Reza Tehrani', role: 'Digital Skills', bio: 'Specialist in modern learning tools and digital literacy.', bg: 'var(--blue-100)', ink: 'var(--blue-700)', initials: 'RT' },
    ],
    foundersTitle: 'Founders & Senior Instructors',
    foundersLead: 'Meet the people behind Hamoon Academy',
    founders: [
      {
        name: 'Saeid Mousavandrani',
        role: '',
        bio: 'Saeid Mousavandrani brings years of experience in education management and learning product development, defining the strategic vision and growth path of Hamoon Academy. His expertise in designing effective educational systems and dynamic learning environments is the cornerstone of Hamoon\'s success.',
        linkedin: '#', cv: '#',
        initials: 'SM', bg: 'var(--blue-100)', ink: 'var(--blue-700)',
      },
      {
        name: 'Dr. Khadijeh Fathalikhani',
        role: '',
        bio: 'Dr. Khadijeh Fathalikhani holds a Ph.D. in Mathematics specializing in Combinatorics and Graph Theory, now active in Applied AI and DevOps Infrastructure Engineering. Her extensive university-level teaching across multiple institutions, combined with international research in Spain and Slovenia, reflects her broad academic track record.',
        linkedin: 'https://www.linkedin.com/in/khadijeh-fathalikhani-405b0627', cv: '#',
        initials: 'KF', bg: 'var(--amber-100)', ink: 'var(--amber-700)',
      },
    ],
    galleryTitle: 'Moments from Hamoon Academy',
    galleryLead: 'A look at our live classes, student interaction, and leading learning resources.',
    gallery: [
      { caption: 'Live conversation class', ic: 'chat', g: 'linear-gradient(135deg,var(--blue-500),var(--blue-800))', span: 2 },
      { caption: 'Group interaction', ic: 'users', g: 'linear-gradient(135deg,var(--amber-400),var(--amber-700))', span: 1 },
      { caption: 'Student project', ic: 'bulb', g: 'linear-gradient(135deg,var(--amber-500),var(--amber-800))', span: 1 },
      { caption: 'Graduation celebration', ic: 'party', g: 'linear-gradient(135deg,var(--blue-600),var(--blue-900))', span: 2 },
    ],
    formTitle: 'Book a free consultation',
    formLead: 'Fill in the form and our advisors will call you to choose the best learning path.',
    contact: [
      { ic: 'phone', label: 'Call us', value: '09129474553' },
      { ic: 'mail', label: 'Email', value: 'info@hamooninstitute.com' },
      { ic: 'clock', label: 'Support hours', value: 'Sat–Thu · 9:00 to 19:00' },
      { ic: 'globe', label: 'Website', value: 'www.hamooninstitute.com\nwww.hamooninstitute.ir' },
    ],
    form: { name: 'Full name', namePh: 'e.g. Sara M.', phone: 'Phone / email', phonePh: '+98 912 345 6789', age: 'Student age group', msg: 'Message (optional)', msgPh: 'Your interest or question…', submit: 'Send consultation request', success: "Your request was submitted! We'll be in touch shortly to book your consultation.", reset: 'Send another request' },
    ages: ['Ages 10–11', 'Ages 12–13', 'Ages 14–16', 'Adult'],
    testimonialsTitle: 'Testimonials',
    testimonialsLead: 'What families and students say about Hamoon',
    testimonials: [
      { name: 'Zahra Ahmadi', role: 'Parent', body: 'My child speaks English with so much more confidence after just three months. Hamoon\'s approach is truly different — the dedicated feedback every session makes a real difference.', initials: 'ZA', bg: 'var(--blue-100)', ink: 'var(--blue-700)', stars: 5 },
      { name: 'Alireza Rezaei', role: 'Parent', body: 'The Smart Math program worked wonders. My son used to run from math — now he loves it and looks forward to every class. Thank you, Hamoon team!', initials: 'AR', bg: 'var(--amber-100)', ink: 'var(--amber-700)', stars: 5 },
      { name: 'Donia Karimi', role: 'Student, age 14', body: 'The online classes were far more engaging than I expected. The mentors are patient and caring and always take time to answer my questions.', initials: 'DK', bg: 'var(--mint-100)', ink: 'var(--mint-700)', stars: 5 },
      { name: 'Fatemeh Mousavi', role: 'Parent', body: 'The weekly progress reports are outstanding. I always know exactly where my child stands, and that transparency is incredibly valuable as a parent.', initials: 'FM', bg: 'var(--blue-100)', ink: 'var(--blue-600)', stars: 5 },
      { name: 'Arash Taheri', role: 'Student, age 12', body: 'Hamoon\'s Science course opened my mind. I learned to think like a scientist — to question, experiment, and discover. Best class I\'ve ever attended!', initials: 'AT', bg: 'var(--amber-100)', ink: 'var(--amber-600)', stars: 5 },
    ],
    social: [{ ic: 'instagram', label: 'Instagram' }, { ic: 'telegram', label: 'Telegram' }],
    footer: {
      tagline: 'Smart, personalized learning for children, teens, and adults.',
      rights: '© 2026 Hamoon Online Academy. All rights reserved.',
      rightsEn: 'یادگیری هوشمند برای نسل آینده',
      cols: [
        { h: 'Courses', items: ['English', 'Smart Math', 'Science', 'Digital skills'] },
        { h: 'Academy', items: ['About us', 'Instructors', 'Our method', 'Gallery'] },
        { h: 'Support', items: ['Contact', 'FAQ', 'Terms', 'Privacy'] },
      ],
    },
  },
};

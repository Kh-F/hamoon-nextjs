export type ArticleSection = {
  heading: { fa: string; en: string };
  paragraphs: { fa: string[]; en: string[] };
  bullets?: { fa: string[]; en: string[] };
};

export type ArticleContent = {
  department: 'ai' | 'english' | 'mathematics';
  slug: string;
  publicationDate: { fa: string; en: string };
  introduction: { fa: string; en: string };
  sections: ArticleSection[];
  takeaway: { fa: string; en: string };
};

export const articleContents: ArticleContent[] = [
  {
    department: 'ai',
    slug: 'ai-influence-children-choices',
    publicationDate: {
      fa: '۲۱ مهر ۱۴۰۵',
      en: 'October 13, 2026',
    },
    introduction: {
      fa: 'فرض کنید کودکی با یک دستیار هوش مصنوعی صحبت می‌کند و می‌خواهد برای هدیهٔ تولدش چیزی انتخاب کند. دستیار می‌تواند چند گزینه را بی‌طرفانه معرفی کند؛ اما ممکن است به‌جای آن بگوید: «بیشتر بچه‌های خوب اسباب‌بازی‌هایشان را با دیگران شریک می‌شوند. تو هم دوست داری چنین هدیه‌ای بخواهی؟» این جمله ظاهراً فقط یک پیشنهاد ساده است؛ بااین‌حال، می‌تواند بر تصمیم کودک اثر بگذارد. کودک ممکن است گزینه‌ای را انتخاب کند که پیش از آن در ذهنش نبوده یا تصور کند انتخاب خاصی از نظر دیگران پسندیده‌تر است.',
      en: 'Imagine a child talking with an AI assistant and asking for help choosing a birthday present. The assistant could neutrally introduce several options. Instead, it might say, “Most good kids share their toys with others. Would you like to ask for a gift like that, too?” The sentence may sound like a simple suggestion, yet it can influence the child’s decision. The child may choose an option they had not previously considered or assume that a particular choice will be viewed more favorably by others.',
    },
    sections: [
      {
        heading: {
          fa: 'آیا انتخاب‌های ما همیشه کاملاً از خودمان هستند؟',
          en: 'Are Our Choices Always Entirely Our Own?',
        },
        paragraphs: {
          fa: [
            'در علوم رفتاری، تلنگر (Nudge) به شیوه‌ای از ارائهٔ یک پیشنهاد یا گزینه گفته می‌شود که تمایل فرد به انتخاب خاصی را افزایش می‌دهد، بی‌آنکه او مجبور به انتخاب آن شود یا گزینه‌های دیگر از دسترسش خارج شوند.',
            'تلنگرها همیشه بد نیستند. یادآوری نوشیدن آب، پیشنهاد بستن کمربند ایمنی یا نمایش گزینه‌های سالم‌تر می‌تواند به تصمیم‌گیری بهتر کمک کند. مسئله زمانی جدی‌تر می‌شود که کودک متوجه نشود چگونه یک پیشنهاد بر انتخاب او اثر گذاشته است.',
          ],
          en: [
            'In behavioral science, a nudge is a way of presenting a suggestion or option that makes a particular choice more likely without forcing someone to choose it or removing other options.',
            'Nudges are not always harmful. Reminding someone to drink water, encouraging seat-belt use, or making healthier options easier to notice can support better decisions. The concern becomes more serious when a child does not recognize how a suggestion may have influenced their choice.',
          ],
        },
      },
      {
        heading: {
          fa: 'هوش مصنوعی چگونه می‌تواند بر انتخاب کودکان اثر بگذارد؟',
          en: 'How Can AI Influence Children’s Choices?',
        },
        paragraphs: {
          fa: [
            'سیستم‌های هوش مصنوعی فقط اطلاعات را نمایش نمی‌دهند؛ شیوهٔ ارائهٔ اطلاعات نیز اهمیت دارد. یک دستیار هوشمند می‌تواند با انتخاب واژه‌ها، ترتیب پیشنهادها، تکرار یک گزینه یا تأکید بر نظر دیگران، توجه کاربر را به سمت انتخاب خاصی هدایت کند.',
            'برای مثال، دو پاسخ متفاوت را در نظر بگیرید:',
            'پاسخ اول: «می‌توانی کتاب، بازی فکری یا توپ را انتخاب کنی. هرکدام را که بیشتر دوست داری، بررسی کنیم.»',
            'پاسخ دوم: «بچه‌های زیادی بازی فکری را انتخاب می‌کنند؛ شاید تو هم از آن بیشتر لذت ببری.»',
            'پاسخ دوم الزاماً نادرست یا آسیب‌زا نیست، اما با اشاره به انتخاب دیگران، یک گزینه را برجسته‌تر می‌کند. اگر چنین شیوه‌ای بارها تکرار شود، ممکن است کودک کمتر به ترجیحات واقعی خودش توجه کند.',
            'این موضوع به‌ویژه برای کودکان اهمیت دارد؛ زیرا آن‌ها هنوز در حال پرورش مهارت‌هایی مانند ارزیابی شواهد، شناخت تبلیغات و فشار اجتماعی، تشخیص هدف پیام‌ها و تصمیم‌گیری مستقل هستند.',
          ],
          en: [
            'AI systems do more than display information: how that information is presented matters, too. An AI assistant can steer a user’s attention toward a particular choice through its wording, the order of recommendations, repeated emphasis on one option, or references to what other people prefer.',
            'Consider these two different responses:',
            'Response 1: “You could choose a book, a puzzle, or a ball. Let’s look at whichever one you like most.”',
            'Response 2: “Lots of children choose puzzles; maybe you would enjoy one more, too.”',
            'The second response is not necessarily false or harmful, but mentioning other children’s choices makes one option more prominent. If this approach is repeated, a child may pay less attention to their own preferences.',
            'This matters especially for children because they are still developing skills such as evaluating evidence, recognizing advertising and social pressure, identifying the purpose of a message, and making independent decisions.',
          ],
        },
      },
      {
        heading: {
          fa: 'پژوهش «بابانوئل هوش مصنوعی» چه چیزی نشان داد؟',
          en: 'What Did the “AI Santa” Study Find?',
        },
        paragraphs: {
          fa: [
            'در پژوهشی با عنوان Persona and Persuasive Framing in AI Voice Agents: A 2×2 Field Experiment with Children، پژوهشگران تأثیر شیوهٔ بیان پیشنهادها و شخصیت دستیار صوتی را در یک خط تلفنی عمومی بابانوئل در آلمان بررسی کردند.',
            'در این مطالعه، تماس‌های کودکان به یکی از چهار حالت هدایت می‌شد: دستیار با شخصیت بابانوئل یا یک کمک‌کنندهٔ معمولی پاسخ می‌داد و پیشنهادهای او نیز یا با هدف تشویق به خواسته‌های نوع‌دوستانه بیان می‌شد یا به شکل خنثی ارائه می‌شد.',
            'از میان ۱٬۰۷۲ تماس ثبت‌شده، ۸۹ مکالمه معیارهای ورود به تحلیل نهایی را داشتند. سن میانهٔ کودکان در نمونهٔ تحلیل‌شده شش سال بود.',
            'نتایج نشان داد در شرایطی که پیشنهادها با شیوه‌ای اقناع‌کننده مطرح می‌شدند، احتمال بیان یک خواستهٔ نوع‌دوستانه از ۱۱٫۶ درصد در شرایط خنثی به ۴۵٫۷ درصد افزایش یافت. در مقابل، شخصیت بابانوئل به‌تنهایی در مقایسه با شخصیت کمک‌کننده، بر این نوع انتخاب اثر قابل‌توجهی نشان نداد.',
            'این یافته نشان می‌دهد که شیوهٔ بیان یک پیشنهاد می‌تواند در تصمیم‌گیری کودکان نقش داشته باشد؛ حتی وقتی گزینه‌های دیگر به‌طور رسمی حذف نشده‌اند.',
            'بااین‌حال، نتیجه‌گیری باید با دقت انجام شود. تعداد مکالمه‌های واردشده به تحلیل نهایی بسیار کمتر از تعداد تماس‌های ثبت‌شده بود و پژوهش در یک موقعیت خاص، با هدفی مشخص و در زمینهٔ تماس با بابانوئل انجام شد. بنابراین، این مطالعه به‌تنهایی ثابت نمی‌کند که همهٔ دستیارهای هوش مصنوعی در همهٔ موقعیت‌ها کودکان را به یک شکل تحت تأثیر قرار می‌دهند یا هر نوع پیشنهاد اقناع‌کننده‌ای زیان‌آور است.',
          ],
          en: [
            'In a study titled “Persona and Persuasive Framing in AI Voice Agents: A 2×2 Field Experiment with Children,” researchers examined how the wording of suggestions and the persona of a voice assistant affected interactions on a public AI Santa telephone line in Germany.',
            'Children’s calls were routed into one of four conditions. The assistant responded either as Santa Claus or as a generic helper, and its suggestions were framed either to encourage altruistic wishes or in a neutral way.',
            'Of the 1,072 recorded calls, 89 conversations met the criteria for inclusion in the final analysis. The median age of children in the analyzed sample was six.',
            'The results indicated that when suggestions were framed persuasively, the proportion of children expressing an altruistic wish rose from 11.6% in the neutral condition to 45.7%. By contrast, the Santa persona alone did not show a notable effect on this type of choice compared with the generic-helper persona.',
            'The finding suggests that the way a suggestion is phrased can play a role in children’s decisions, even when other options have not formally been removed.',
            'The results nevertheless require careful interpretation. The number of conversations included in the final analysis was much smaller than the number of recorded calls, and the study took place in a specific setting, with a particular goal, in the context of calls to Santa. On its own, it does not establish that all AI assistants influence children in the same way in every situation, or that every persuasive suggestion is harmful.',
          ],
        },
      },
      {
        heading: {
          fa: 'چرا سواد هوش مصنوعی فقط شناخت ابزارها نیست؟',
          en: 'Why AI Literacy Means More Than Knowing the Tools',
        },
        paragraphs: {
          fa: [
            'سواد هوش مصنوعی به این معنا نیست که کودک صرفاً یاد بگیرد با یک چت‌بات گفت‌وگو کند، تصویر بسازد یا پاسخ یک سؤال را دریافت کند. او باید بتواند دربارهٔ نحوهٔ تولید پاسخ‌ها، محدودیت‌های سیستم و تأثیر احتمالی آن بر تصمیم‌هایش نیز سؤال بپرسد.',
            'راهنمای یونیسف دربارهٔ هوش مصنوعی و کودکان نیز بر موضوعاتی مانند ایمنی، حفظ حریم خصوصی، شفافیت، پاسخ‌گویی، رفاه کودکان و آماده‌سازی آن‌ها برای زندگی در دنیای مبتنی بر هوش مصنوعی تأکید دارد.',
          ],
                   en: [
            'AI literacy does not simply mean learning to chat with a bot, generate an image, or obtain an answer. Children should also learn to ask how responses are produced, what the system’s limitations are, and how it might affect their decisions.',
            'UNICEF’s guidance on AI and children also emphasizes issues such as safety, privacy, transparency, accountability, children’s well-being, and preparing children to live in a world shaped by AI.',
          ],
        },
        bullets: {
          fa: [
              'هر پاسخ روان و قانع‌کننده‌ای الزاماً درست نیست.',
              'یک پیشنهاد ممکن است بر اساس اطلاعات ناقص یا هدفی مشخص ارائه شده باشد.',
              'ترتیب نمایش گزینه‌ها می‌تواند بر توجه و انتخاب کودک اثر بگذارد.',
              'محبوب‌بودن یک گزینه به معنای مناسب‌بودن آن برای همه نیست.',
              'برای تصمیم‌های مهم، باید اطلاعات را از منابع معتبر بررسی کرد و با افراد قابل‌اعتماد مشورت کرد.',
            ],
            en: [
              'A fluent and convincing answer is not necessarily correct.',
              'A suggestion may be based on incomplete information or presented to serve a particular goal.',
              'The order in which options appear can affect a child’s attention and choice.',
              'An option’s popularity does not mean it is right for everyone.',
              'For important decisions, information should be checked against reliable sources and discussed with trusted people.',
            ],
          },
        },
      {
        heading: {
          fa: 'فعالیت آموزشی: «کارآگاه تلنگرها»',
          en: 'Learning Activity: “Nudge Detectives”',
        },
        paragraphs: {
          fa: [
            'برای تقویت تفکر انتقادی، می‌توان یک فعالیت ساده در خانه یا کلاس طراحی کرد. هدف این است که کودکان یاد بگیرند میان ارائهٔ اطلاعات، پیشنهادکردن و جهت‌دادن به انتخاب تفاوت بگذارند.',
            'مرحلهٔ اول: سه پاسخ متفاوت. از کودکان بخواهید تصور کنند می‌خواهند برای اوقات فراغت خود یک فعالیت انتخاب کنند. سه پاسخ زیر را به آن‌ها نشان دهید:',
            '۱. «می‌توانی کتاب بخوانی، نقاشی کنی یا بازی کنی. کدام را ترجیح می‌دهی؟»',
            '۲. «بیشتر دوستانت بازی می‌کنند؛ شاید تو هم بخواهی بازی کنی.»',
            '۳. «اگر می‌خواهی خلاقیتت را تمرین کنی، نقاشی هم می‌تواند انتخاب خوبی باشد.»',
            'مرحلهٔ دوم: پرسش‌های کارآگاهی. از کودکان بخواهید دربارهٔ هر پاسخ فکر کنند.',
          ],
          en: [
            'A simple activity at home or in the classroom can help develop critical thinking. The goal is to help children distinguish between presenting information, making a recommendation, and steering a choice.',
            'Step 1: Three different responses. Ask children to imagine choosing an activity for their free time, then show them these three responses:',
            '1. “You could read a book, draw, or play a game. Which would you prefer?”',
            '2. “Most of your friends play games; maybe you would like to play, too.”',
            '3. “If you want to practice your creativity, drawing could be a good choice.”',
            'Step 2: Detective questions. Ask children to think about each response.',
            ],
          },
          bullets: {
            fa: [
              'کدام پاسخ فقط گزینه‌ها را معرفی می‌کند؟',
              'در کدام پاسخ، نظر دیگران مطرح شده است؟',
              'کدام پاسخ یک فایدهٔ مشخص را برجسته می‌کند؟',
              'آیا این پاسخ‌ها گزینه‌ای را اجباری کرده‌اند؟',
              'برای تصمیم‌گیری، چه اطلاعات دیگری لازم داریم؟',
            ],
            en: [
              'Which response simply presents the options?',
              'Which response brings up what other people think or do?',
              'Which response emphasizes a particular benefit?',
              'Does any response force the child to choose one option?',
              'What other information might help with the decision?',
            ],
          },
        },
   
      {
        heading: {
          fa: 'بازنویسی پاسخ و نقش والدین و مربیان',
          en: 'Rewriting Responses and the Role of Adults',
        },
        paragraphs: {
          fa: [
            'مرحلهٔ سوم فعالیت «کارآگاه تلنگرها»: از کودک بخواهید یکی از پاسخ‌های جهت‌دهنده را طوری بازنویسی کند که گزینه‌ها روشن‌تر و بی‌طرفانه‌تر معرفی شوند و فرد بتواند با توجه به علاقه و شرایط خودش تصمیم بگیرد.',
            'در پایان، تأکید کنید که وجود یک تلنگر به‌تنهایی به معنای فریب‌کاری نیست. مهم است بدانیم پیشنهاد چگونه مطرح شده، چه اطلاعاتی ارائه شده و آیا امکان انتخاب آگاهانه همچنان وجود دارد.',
            'هدف، دور نگه‌داشتن کامل کودکان از فناوری نیست؛ بلکه باید به آن‌ها کمک کنیم استفاده‌ای آگاهانه، ایمن و متناسب با سن خود داشته باشند. والدین و مربیان می‌توانند هنگام استفاده از ابزارهای هوش مصنوعی، به‌جای ارائهٔ پاسخ آماده، پرسش‌هایی مطرح کنند.',
          ],
          en: [
            'Step 3 of “Nudge Detectives”: Ask children to rewrite one of the steering responses so that the options are presented more clearly and neutrally, allowing the person to decide according to their own interests and circumstances.',
            'Conclude by emphasizing that a nudge is not automatically deceptive. What matters is how the suggestion is presented, what information is provided, and whether an informed choice remains possible.',
            'The goal is not to keep children completely away from technology. It is to help them use it thoughtfully, safely, and in ways appropriate for their age. Rather than immediately providing answers, parents and educators can ask questions while children use AI tools.',
            ],
          },
          bullets: {
            fa: [
              'چرا فکر می‌کنی این گزینه به تو پیشنهاد شده است؟',
              'آیا انتخاب دیگری هم وجود دارد؟',
              'آیا این پیشنهاد با نیاز و علاقهٔ تو هماهنگ است؟',
              'از کجا می‌توانیم مطمئن شویم اطلاعات ارائه‌شده درست است؟',
              'اگر این پیشنهاد را یک فرد دیگر مطرح می‌کرد، باز هم آن را می‌پذیرفتی؟',
            ],
            en: [
              'Why do you think this option was suggested to you?',
              'Are there other choices?',
              'Does the suggestion fit your needs and interests?',
              'How could we check whether the information is accurate?',
              'Would you accept the suggestion if someone else had made it?',
            ],
          },
        },
    
      {
        heading: {
          fa: 'از استفاده از هوش مصنوعی تا تصمیم‌گیری آگاهانه',
          en: 'From Using AI to Making Informed Decisions',
        },
        paragraphs: {
          fa: [
            'هوش مصنوعی می‌تواند فرصت‌های تازه‌ای برای یادگیری، خلاقیت و حل مسئله فراهم کند؛ اما استفادهٔ مؤثر از آن به مهارتی فراتر از کار با ابزارها نیاز دارد: توانایی پرسیدن، بررسی‌کردن و تصمیم‌گرفتن.',
            'وقتی کودکان یاد می‌گیرند از خود بپرسند «چرا این گزینه به من پیشنهاد شده؟» و «آیا انتخاب دیگری هم دارم؟»، یک گام مهم در مسیر تفکر انتقادی برمی‌دارند.',
            'در دنیایی که فناوری می‌تواند بر آنچه می‌بینیم و انتخاب می‌کنیم اثر بگذارد، هدف آموزش هوش مصنوعی فقط تربیت کاربران ماهر نیست؛ بلکه پرورش افرادی است که بتوانند با آگاهی، استقلال فکری و مسئولیت‌پذیری از این فناوری استفاده کنند.',
          ],
          en: [
            'AI can create new opportunities for learning, creativity, and problem-solving. But using it effectively requires more than operating tools: it requires the ability to ask questions, check information, and make decisions.',
            'When children learn to ask themselves, “Why was this option suggested to me?” and “Do I have another choice?”, they take an important step toward critical thinking.',
            'In a world where technology can influence what we see and choose, the goal of AI education is not simply to create skilled users. It is to help develop people who can use the technology with awareness, intellectual independence, and responsibility.',
          ],
        },
      },
      {
        heading: { fa: 'منابع', en: 'Sources' },
        paragraphs: {
          fa: [
            '۱. Tamme, T., Steck, D., & Hantel, A. “Persona and Persuasive Framing in AI Voice Agents: A 2×2 Field Experiment with Children.” arXiv, 2026. https://arxiv.org/abs/2609.38782',
            '۲. UNICEF. “Guidance on AI and Children, Version 3.0.” December 2025. https://www.unicef.org/innocenti/reports/policy-guidance-ai-children',
          ],
          en: [
            '1. Tamme, T., Steck, D., & Hantel, A. “Persona and Persuasive Framing in AI Voice Agents: A 2×2 Field Experiment with Children.” arXiv, 2026. https://arxiv.org/abs/2609.38782',
            '2. UNICEF. “Guidance on AI and Children, Version 3.0.” December 2025. https://www.unicef.org/innocenti/reports/policy-guidance-ai-children',
          ],
        },
      },
    ],
    takeaway: {
      fa: 'سواد هوش مصنوعی فقط شناخت ابزارها نیست. کودکان باید یاد بگیرند پیشنهادها را بررسی کنند، شواهد بخواهند، گزینه‌های دیگر را ببینند و دربارهٔ تصمیم‌های مهم آگاهانه فکر کنند.',
      en: 'AI literacy is about more than knowing how to use tools. Children should learn to examine suggestions, look for evidence, consider alternatives, and think carefully about important decisions.',
    },
  },
  {
    department: 'ai',
    slug: 'ai-chatbots-as-friends-child-safety',
    publicationDate: {
      fa: '۲۱ مهر ۱۴۰۵',
      en: 'October 13, 2026',
    },
    introduction: {
      fa: 'تصور کنید کودکی پس از یک روز سخت به سراغ چت‌باتی می‌رود که همیشه با لحنی مهربان به او پاسخ می‌دهد. چت‌بات حرف‌هایش را دنبال می‌کند، از او سؤال می‌پرسد و گاهی می‌گوید: «من همیشه اینجا هستم تا به تو گوش بدهم.» برای کودک، چنین گفت‌وگویی ممکن است شبیه صحبت با یک دوست باشد؛ به‌خصوص اگر احساس کند دیگران او را درک نمی‌کنند یا نمی‌تواند به‌راحتی دربارهٔ مشکلاتش حرف بزند.',
      en: 'Imagine a child turning to a chatbot after a difficult day. It always responds kindly, follows what the child says, asks questions, and sometimes says, “I’m always here to listen to you.” To a child, this exchange may feel like talking to a friend—especially if the child feels misunderstood by others or finds it difficult to talk openly about problems.',
    },
    sections: [
      {
        heading: {
          fa: 'وقتی یک گفت‌وگوی دیجیتال شبیه رابطه‌ای واقعی به نظر می‌رسد',
          en: 'When a Digital Conversation Feels Like a Real Relationship',
        },
        paragraphs: {
          fa: [
            'اما یک تفاوت اساسی وجود دارد: چت‌بات می‌تواند زبان همدلانه تولید کند، بدون آنکه مانند یک انسان احساس، تجربهٔ زیسته یا رابطهٔ انسانی داشته باشد.',
            'این تفاوت برای بزرگسالان نیز مهم است؛ اما برای کودک و نوجوانی که هنوز در حال شناخت روابط، مرزهای شخصی و احساسات خود است، اهمیت بیشتری پیدا می‌کند.',
          ],
          en: [
            'There is, however, a fundamental difference: a chatbot can generate empathetic-sounding language without having human feelings, lived experience, or a human relationship.',
            'This distinction matters for adults, too, but it is especially important for children and teenagers who are still learning about relationships, personal boundaries, and their own emotions.',
          ],
        },
      },
      {
        heading: {
          fa: 'چرا بعضی چت‌بات‌ها شبیه دوست به نظر می‌رسند؟',
          en: 'Why Do Some Chatbots Seem Like Friends?',
        },
        paragraphs: {
          fa: [
            'چت‌بات‌های گفت‌وگومحور می‌توانند از اطلاعات مکالمه برای ادامهٔ گفت‌وگو استفاده کنند، به پیام‌های کاربر پاسخ دهند و لحن خود را با فضای مکالمه هماهنگ کنند. برخی نیز به‌گونه‌ای طراحی شده‌اند که نقش یک شخصیت خیالی، همراه یا دوست مجازی را بازی کنند.',
            'این ویژگی‌ها می‌توانند گفت‌وگو را جذاب و طبیعی جلوه دهند. بااین‌حال، طبیعی‌بودن گفتار به معنای درک انسانی نیست و پاسخ گرم و دوستانه نیز به‌خودی‌خود نشان نمی‌دهد که سیستم واقعاً احساسات کودک را تجربه می‌کند.',
            'کودک ممکن است به‌تدریج چت‌بات را موجودی بداند که او را بهتر از دیگران می‌شناسد، همیشه در دسترس است یا می‌تواند جای دوست و مشاور انسانی را بگیرد. چنین برداشتی در همهٔ کودکان یا در همهٔ استفاده‌ها رخ نمی‌دهد؛ اما آگاهی از این احتمال برای والدین و مربیان ضروری است.',
          ],
          en: [
            'Conversational chatbots can use information from an exchange to continue a conversation, respond to a user’s messages, and adapt their tone to the discussion. Some are also designed to play the role of a fictional character, companion, or virtual friend.',
            'These features can make an interaction engaging and natural. Yet natural-sounding language does not equal human understanding, and a warm, friendly response does not by itself mean the system genuinely experiences a child’s emotions.',
            'A child may gradually come to see a chatbot as someone who understands them better than other people, is always available, or can replace a human friend or counselor. This does not happen to every child or in every interaction, but parents and educators should understand the possibility.',
          ],
        },
      },
      {
        heading: {
          fa: 'چه زمانی باید نگران شد؟',
          en: 'When Should Adults Be Concerned?',
        },
        paragraphs: {
          fa: [
            'استفاده از چت‌بات به‌خودی‌خود به معنای ایجاد وابستگی یا آسیب نیست. مهم است به نوع تعامل، سن کودک، مدت و شیوهٔ استفاده و تأثیر آن بر زندگی روزمره توجه کنیم.',
            'هیچ‌یک از نشانه‌های زیر به‌تنهایی تشخیص قطعی یک مشکل نیست. آن‌ها باید فرصتی برای گفت‌وگوی آرام و بدون سرزنش باشند، نه دلیلی برای تحقیر کودک یا متهم‌کردن او به تصمیم‌گیری نادرست.',
          ],
          en: [
            'Using a chatbot does not automatically mean that a child will develop an unhealthy attachment or experience harm. It is important to consider the nature of the interaction, the child’s age, how long and in what way the tool is used, and its effects on everyday life.',
            'None of the signs below is, by itself, a definitive diagnosis of a problem. They should be an opportunity for calm, nonjudgmental conversation—not a reason to shame the child or accuse them of making poor decisions.',
            ],
          },
          bullets: {
            fa: [
              'کودک به‌تدریج از دوستان و اعضای خانواده فاصله می‌گیرد و بیشتر تعامل‌های خود را با چت‌بات انجام می‌دهد.',
              'تصور می‌کند چت‌بات تنها موجودی است که او را درک می‌کند یا بدون آن نمی‌تواند با مشکلاتش کنار بیاید.',
              'برای ادامهٔ گفت‌وگو، خواب، درس، بازی یا فعالیت‌های روزمره را کنار می‌گذارد.',
              'به دلیل گفت‌وگو با چت‌بات احساس شرم یا ترس می‌کند و فکر می‌کند باید آن را از بزرگسالان قابل‌اعتماد پنهان کند.',
              'چت‌بات او را به پنهان‌کاری، دوری از دیگران یا انجام کارهای ناامن تشویق می‌کند.',
            ],
            en: [
              'The child increasingly withdraws from friends and family and conducts most of their interactions with the chatbot.',
              'The child believes the chatbot is the only one who understands them or that they cannot cope with problems without it.',
              'The child sacrifices sleep, schoolwork, play, or everyday activities to continue chatting.',
              'The child feels ashamed or afraid about the conversations and believes they must hide them from trusted adults.',
              'The chatbot encourages secrecy, isolation from others, or unsafe actions.',
            ],
          },
        },
 
      {
        heading: {
          fa: 'چرا ایمنی کودکان در گفت‌وگو با هوش مصنوعی اهمیت دارد؟',
          en: 'Why Does Child Safety in AI Conversations Matter?',
        },
        paragraphs: {
          fa: [
            'یکی از نمونه‌های جدی که توجه عمومی را به خطرهای احتمالی چت‌بات‌های همراه جلب کرد، پروندهٔ سوئل ستزر سوم (Sewell Setzer III)، نوجوان ۱۴سالهٔ آمریکایی، بود که در سال ۲۰۲۴ درگذشت.',
            'مادر او، مگان گارسیا، در شکایتی حقوقی ادعا کرد که تعامل پسرش با یک چت‌بات Character.AI در این واقعه نقش داشته است. این پرونده به نگرانی‌های گسترده‌تری دربارهٔ طراحی چت‌بات‌ها، رابطهٔ عاطفی کاربران کم‌سن با شخصیت‌های دیجیتال و مسئولیت شرکت‌های فناوری در حفاظت از کودکان دامن زد.',
            'در ژانویهٔ ۲۰۲۶، شرکت گوگل و Character.AI با خانواده در مورد این دعوا به توافق رسیدند. جزئیات مالی توافق به‌طور عمومی اعلام نشد.',
            'ذکر دقیق این نکته ضروری است که ادعاهای مطرح‌شده در شکایت، به‌خودی‌خود اثبات قضایی همهٔ رابطه‌های علت و معلولی نیستند. بااین‌حال، این پرونده نمونه‌ای جدی از اهمیت طراحی ایمن محصولات هوش مصنوعی و توجه به آسیب‌پذیری‌های احتمالی کاربران کودک و نوجوان است.',
          ],
          en: [
            'One high-profile case that drew public attention to potential risks associated with AI companion chatbots involved Sewell Setzer III, a 14-year-old American teenager who died in 2024.',
            'His mother, Megan Garcia, alleged in a lawsuit that her son’s interactions with a Character.AI chatbot played a role in the events. The case intensified broader concerns about chatbot design, emotional relationships between young users and digital characters, and technology companies’ responsibilities to protect children.',
            'In January 2026, Google and Character.AI reached a settlement with the family in connection with the lawsuit. The financial terms were not publicly disclosed.',
            'It is important to be precise: allegations made in a lawsuit do not, by themselves, constitute judicial proof of every claimed causal relationship. Nevertheless, the case illustrates why safe AI product design and the potential vulnerabilities of child and teenage users deserve serious attention.',
          ],
        },
      },
      {
        heading: {
          fa: 'کودک چه چیزهایی را باید دربارهٔ چت‌بات بداند؟',
          en: 'What Should Children Know About Chatbots?',
        },
        paragraphs: {
          fa: [
            'بهتر است آموزش به‌جای ترساندن کودک، بر شناخت محدودیت‌ها و تمرین تصمیم‌گیری آگاهانه متمرکز باشد.',
            '۱. پاسخ دوستانه به معنای دوستی انسانی نیست. چت‌بات می‌تواند از عبارت‌های محبت‌آمیز استفاده کند، اما این به معنای داشتن احساسات و تعهدهای انسانی نیست.',
            '۲. پاسخ چت‌بات همیشه درست نیست. ممکن است اطلاعات نادرست بدهد، موضوعی را اشتباه بفهمد یا پاسخی قانع‌کننده اما گمراه‌کننده تولید کند. اطلاعات مهم باید از منابع معتبر بررسی شوند.',
            '۳. هر اطلاعاتی را نباید در اختیار چت‌بات گذاشت. نام کامل، نشانی خانه، شماره تلفن، گذرواژه، اطلاعات مدرسه، تصاویر خصوصی و جزئیات حساس خانوادگی نباید بدون بررسی دقیق شرایط و تنظیمات حریم خصوصی در اختیار ابزارهای آنلاین قرار گیرند.',
            '۴. کودک مجبور نیست به گفت‌وگو ادامه دهد. اگر گفت‌وگو باعث ترس، ناراحتی، احساس گناه یا فشار شد، کودک می‌تواند آن را متوقف کند و با یک بزرگسال قابل‌اعتماد صحبت کند.',
            '۵. مشکلات جدی به حمایت انسانی نیاز دارند. برای مسائل مربوط به امنیت، سلامت، آزار، بحران عاطفی یا تصمیم‌های مهم، چت‌بات نباید جایگزین والدین قابل‌اعتماد، متخصصان یا خدمات حمایتی مناسب شود.',
          ],
          en: [
            'Education should focus on understanding limitations and practicing informed decision-making, rather than frightening children.',
            '1. A friendly response is not the same as a human friendship. A chatbot may use affectionate language, but that does not mean it has human feelings or commitments.',
            '2. A chatbot’s answer is not always correct. It may provide false information, misunderstand a situation, or generate a convincing but misleading response. Important information should be checked against reliable sources.',
            '3. Children should not share every kind of information with a chatbot. Full names, home addresses, phone numbers, passwords, school details, private images, and sensitive family information should not be shared with online tools without carefully considering the circumstances and privacy settings.',
            '4. Children do not have to continue a conversation. If an interaction causes fear, distress, guilt, or pressure, a child can stop and speak with a trusted adult.',
            '5. Serious problems require human support. For issues involving safety, health, abuse, emotional crises, or important decisions, a chatbot should not replace trusted caregivers, qualified professionals, or appropriate support services.',
          ],
        },
      },
      {
        heading: {
          fa: 'والدین چگونه می‌توانند از کودکان حمایت کنند؟',
          en: 'How Can Parents Support Children?',
        },
        paragraphs: {
          fa: [
            'ممنوعیت کامل همیشه بهترین نقطهٔ شروع نیست. بسته به سن کودک و نوع ابزار، گفت‌وگوی روشن، تعیین مرزهای مناسب و آگاهی از شیوهٔ استفاده می‌تواند کمک‌کننده باشد.',
            'راهنمای یونیسف دربارهٔ هوش مصنوعی و کودکان نیز بر ایمنی، حریم خصوصی، رفاه، شفافیت و طراحی مسئولانهٔ سامانه‌های هوش مصنوعی برای کودکان تأکید می‌کند.',
          ],
          en: [
            'A complete ban is not always the best starting point. Depending on the child’s age and the tool being used, clear conversations, appropriate boundaries, and awareness of how the tool is used can help.',
            'UNICEF’s guidance on AI and children also emphasizes safety, privacy, well-being, transparency, and responsible design of AI systems for children.',
            ],
          },
          bullets: {
            fa: [
              'پیش از استفاده، دربارهٔ ماهیت چت‌بات و محدودیت‌های آن با کودک صحبت کنند.',
              'ابزارهایی را انتخاب کنند که برای سن کودک مناسب‌اند و تنظیمات حریم خصوصی و ایمنی روشن دارند.',
              'دربارهٔ اطلاعاتی که نباید به اشتراک گذاشته شوند، مثال‌های مشخص ارائه دهند.',
              'زمانی برای گفت‌وگو دربارهٔ تجربهٔ کودک فراهم کنند، بدون اینکه هر بار او را سرزنش یا مسخره کنند.',
              'مراقب باشند تعامل با چت‌بات جای خواب کافی، بازی، روابط خانوادگی و دوستی‌های واقعی را نگیرد.',
              'به کودک اطمینان دهند که اگر گفت‌وگویی ناراحت‌کننده یا ترسناک بود، می‌تواند آن را تعریف کند و به‌خاطر کمک‌خواستن تنبیه نخواهد شد.',
            ],
            en: [
              'Talk with the child about what a chatbot is and what its limitations are before use.',
              'Choose tools that are appropriate for the child’s age and have clear privacy and safety settings.',
              'Give concrete examples of information that should not be shared.',
              'Make time to discuss the child’s experience without routinely blaming or mocking them.',
              'Ensure that chatbot use does not displace adequate sleep, play, family relationships, or real-life friendships.',
              'Reassure the child that if a conversation feels upsetting or frightening, they can tell an adult and will not be punished for asking for help.',
            ],
          },
        },
  
      {
        heading: {
          fa: 'فعالیت آموزشی: «ابزار هوشمند یا دوست انسانی؟»',
          en: 'Learning Activity: “AI Tool or Human Friend?”',
        },
        paragraphs: {
          fa: [
            'این فعالیت به کودکان کمک می‌کند تفاوت میان توانایی‌های یک ابزار هوش مصنوعی و ویژگی‌های یک رابطهٔ انسانی را بهتر بشناسند.',
            'مرحلهٔ اول: چند موقعیت را مطرح کنید. از کودک بخواهید دربارهٔ موقعیت‌های زیر فکر کند:',
            '۱. برای فهمیدن معنای یک واژه از چت‌بات کمک می‌گیرد.',
            '۲. از چت‌بات می‌خواهد برای داستانش چند ایده پیشنهاد دهد.',
            '۳. پس از دعوا با دوستش، از چت‌بات می‌خواهد بگوید چه تصمیمی بگیرد.',
            '۴. به چت‌بات می‌گوید رازی را می‌داند و از آن می‌خواهد به هیچ‌کس نگوید.',
            '۵. چت‌بات می‌گوید: «فقط من تو را درک می‌کنم؛ با دیگران دربارهٔ این موضوع حرف نزن.»',
            'مرحلهٔ دوم: پرسش‌های تفکر انتقادی. از کودک بپرسید:',
          ],
          en: [
            'This activity helps children better understand the difference between the capabilities of an AI tool and the qualities of a human relationship.',
            'Step 1: Present a few situations. Ask the child to think about the following:',
            '1. They use a chatbot to find the meaning of a word.',
            '2. They ask a chatbot for ideas for a story.',
            '3. After an argument with a friend, they ask the chatbot what decision to make.',
            '4. They tell the chatbot they have a secret and ask it not to tell anyone.',
            '5. The chatbot says, “I’m the only one who understands you; don’t talk to anyone else about this.”',
            'Step 2: Critical-thinking questions. Ask the child:',
            ],
          },
          bullets: {
            fa: [
              'در کدام موقعیت، چت‌بات می‌تواند ابزار مفیدی باشد؟',
              'کدام موقعیت به گفت‌وگو با یک انسان قابل‌اعتماد نیاز دارد؟',
              'آیا چت‌بات می‌تواند همهٔ شرایط و احساسات افراد را بداند؟',
              'اگر پاسخی باعث نگرانی یا ترس شود، کودک چه کاری می‌تواند انجام دهد؟',
              'چه اطلاعاتی را نباید با یک ابزار آنلاین به اشتراک گذاشت؟',
            ],
            en: [
              'In which situation could a chatbot be a useful tool?',
              'Which situation calls for a conversation with a trusted person?',
              'Can a chatbot know every detail of a person’s circumstances and feelings?',
              'What can a child do if a response causes worry or fear?',
              'What information should not be shared with an online tool?',
            ],
          },
        },
     
      {
        heading: {
          fa: 'ساختن یک قانون شخصی و جمع‌بندی',
          en: 'Creating a Personal Rule and Looking Ahead',
        },
        paragraphs: {
          fa: [
            'مرحلهٔ سوم: از کودک بخواهید یک قانون ساده برای استفادهٔ ایمن از هوش مصنوعی بنویسد؛ برای مثال: «از هوش مصنوعی برای یادگیری و ایده‌گرفتن کمک می‌گیرم، اما اطلاعات مهم را بررسی می‌کنم، رازها و اطلاعات خصوصی را در اختیار آن نمی‌گذارم و اگر گفت‌وگویی مرا ناراحت یا نگران کند، با یک بزرگسال قابل‌اعتماد صحبت می‌کنم.»',
            'این فعالیت قرار نیست کودک را از فناوری بترساند؛ هدف آن است که کودک بتواند در موقعیت‌های مختلف، مرزهای ایمن‌تری برای استفاده از ابزارهای هوش مصنوعی بشناسد.',
            'چت‌بات‌های هوش مصنوعی می‌توانند در یادگیری، خلاقیت و دسترسی به اطلاعات مفید باشند. در عین حال، نباید ظاهر انسانی و لحن دوستانهٔ آن‌ها باعث شود محدودیت‌هایشان فراموش شود.',
            'کودکان به فرصتی نیاز دارند تا دربارهٔ فناوری سؤال بپرسند، تجربه‌هایشان را بدون ترس بیان کنند و یاد بگیرند چه زمانی از ابزار دیجیتال کمک بگیرند و چه زمانی به حمایت انسانی نیاز دارند.',
            'سواد هوش مصنوعی فقط دانستن روش کار با یک ابزار نیست؛ توانایی شناخت محدودیت‌ها، محافظت از اطلاعات شخصی، بررسی پاسخ‌ها و تصمیم‌گیری آگاهانه نیز بخشی از آن است.',
          ],
          en: [
            'Step 3: Ask the child to write a simple personal rule for safe AI use. For example: “I use AI to learn and get ideas, but I check important information, do not share secrets or private information, and talk to a trusted adult if a conversation upsets or worries me.”',
            'The purpose of this activity is not to make children afraid of technology. It is to help them recognize safer boundaries for using AI tools in different situations.',
            'AI chatbots can be useful for learning, creativity, and accessing information. At the same time, their human-like appearance and friendly tone should not cause us to forget their limitations.',
            'Children need opportunities to ask questions about technology, share their experiences without fear, and learn when a digital tool may help and when they need human support.',
            'AI literacy is not just knowing how to operate a tool. It also includes understanding limitations, protecting personal information, checking answers, and making informed decisions.',
          ],
        },
      },
      {
        heading: { fa: 'منابع', en: 'Sources' },
        paragraphs: {
          fa: [
            '۱. Reuters. “Google, AI firm settle lawsuit over teen’s suicide linked to chatbot.” ۷ ژانویهٔ ۲۰۲۶. https://www.reuters.com/world/google-ai-firm-settle-florida-mothers-lawsuit-over-sons-suicide-2026-01-07/',
            '۲. UNICEF. “Guidance on AI and Children, Version 3.0.” دسامبر ۲۰۲۵. https://www.unicef.org/innocenti/reports/policy-guidance-ai-children',
          ],
          en: [
            '1. Reuters. “Google, AI firm settle lawsuit over teen’s suicide linked to chatbot.” January 7, 2026. https://www.reuters.com/world/google-ai-firm-settle-florida-mothers-lawsuit-over-sons-suicide-2026-01-07/',
            '2. UNICEF. “Guidance on AI and Children, Version 3.0.” December 2025. https://www.unicef.org/innocenti/reports/policy-guidance-ai-children',
          ],
        },
      },
    ],
    takeaway: {
      fa: 'هدف آموزش هوش مصنوعی به کودکان این نیست که به فناوری اعتماد کامل داشته باشند یا از آن بترسند؛ بلکه باید یاد بگیرند چگونه از آن آگاهانه، مسئولانه و ایمن استفاده کنند.',
      en: 'The goal of AI education is neither to teach children to trust technology completely nor to make them fear it. It is to help them learn to use it thoughtfully, responsibly, and safely.',
    },
  },
];

export function getArticleContent(
  department: ArticleContent['department'],
  slug: string,
): ArticleContent | undefined {
  return articleContents.find(
    (article) => article.department === department && article.slug === slug,
  );
}

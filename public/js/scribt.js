function openCloseSidebar() {
    let sidebar = document.getElementById("sidebar")
    let sidebarSpans = document.querySelectorAll(".contact span")
    let openIcon = document.getElementById("openIcon")

    if (sidebar.classList.contains("active")) {
        sidebar.classList.remove("active")
        sidebarSpans.forEach((ele) => {
            ele.style.display = "none";
        })
        if (openIcon.classList.contains("fa-circle-xmark")) {
            openIcon.classList.remove("fa-circle-xmark")
            openIcon.classList.add("fa-circle-left")
        }
    } else {
        sidebar.classList.add("active")
        sidebarSpans.forEach((ele) => {
            ele.style.display = "block";
        })
        openIcon.classList.add("fa-circle-xmark")
        openIcon.classList.remove("fa-circle-left")
    }
}

// Form Validate

function nationalityChange() {
    let nationalitySelect = document.getElementById("nationality");
    let nationalityInput = document.getElementById("nationalityInput")
    if (nationalitySelect.value == "سعودي") {
        nationalityInput.style.display = "none";
        nationalityInput.value = "سعودي";
    } else {
        nationalityInput.value = "";
        nationalityInput.style.display = "block";
    }
}

function healthyChange() {
    let healthySelect = document.getElementById("healthy");
    let healthyInput = document.getElementById("healthyInput")
    if (healthySelect.value == "لا") {
        healthyInput.style.display = "none";
        healthyInput.value = "لا";
    } else {
        healthyInput.value = "";
        healthyInput.style.display = "block";
    }
}

function printPage() {
    print();
}



const skills = {
    // Arabic
    arbicLanguage: {
        firstPeriod: [
            "1-نطق الحروف التي درسها بأصواتها القصيرة و الطويلة و الساكنة نطقا سليما ..",
            "2-يرسم الحروف التي درسها رسما صحيحا بأشكالها وحركاتها المختلفة",
            "3-يسمي الحروف الهجائية التي درسها",
            "4-يعبر شفهيا عن أحداث قصة مصورة ..",
            "5-يسمي الحركات القصيرة و الطويلة",
            "6-يستنتج المعنى العام للنص المسموع ..",
            "7-يستظهر ستة أبيات من الأناشيد القصيرة",
            "8-يجيب عن أسئلة تذكرية حول النص المقروء...",
            "9-يعلق على صورة من محيطه .",
            "10-يكتب الحروف الهجائية التي درسها في أشكالها المختلفة من الذاكرة القريبة",
            "11-يكتب الحروف الهجائية التي درسها في أشكالها المختلفة من الذاكرة البعيدة.",
            "12-يربط الأسماء المسموعة بالصور .",
            "13-يكتب كلمات سبق له دراسة حروفها جميعها مع الحركة القصيرة والطويلة من الذاكرة القريبة.",
            "14-يوزع نظرة على المستمعين. ..",
            "17-يصوغ أسئلة تذكرية عما استمع إليه.",
            "18-يبدي رأيه ويناقش في موضوع يناسب سنه في جملة واحدة",
            "19-يصف الشخصيات والأحداث فيما استمع إليه (شخصيات رئيسة ، شخصيات ثانوية، شخصيات شريرة ، شخصيات خيرة )",
            "20-يقرأ كلمات بصرية ( هذا . هذه )",
            "23-يستنتج المعنى العام للمقروء.",
            "24-يكتب كلمات فيها ظواهر لغوية درسها من الذاكرة القريبة .",
            "26-يحلل الجمل إلى كلمات وتحليل الكلمات إلى مقاطع وتحليل المقاطع إلى أصوات",
            "30-يكتشف دلالة الكلمات الجديدة من خلال الترادف",
            "31-يكتب كلمات بصرية ( هذا . هذه ) من الذاكرة القريبة والبعيدة.",
            "32-يتوقع مضمون النص من العنوان أو الصور المصاحبة له ..."
        ],

        secondPeriod: [
            "1-نطق الحروف التي درسها بأصواتها القصيرة و الطويلة و الساكنة نطقا سليما ..",
            "2-يرسم الحروف التي درسها رسما صحيحا بأشكالها وحركاتها المختلفة",
            "3-يسمي الحروف الهجائية التي درسها",
            "4-يعبر شفهيا عن أحداث قصة مصورة ..",
            "5-يسمي الحركات القصيرة و الطويلة",
            "6-يستنتج المعنى العام للنص المسموع ..",
            "7-يستظهر ستة أبيات من الأناشيد القصيرة",
            "8-يجيب عن أسئلة تذكرية حول النص المقروء. ..",
            "9-يعلق على صورة من محيطه .",
            "10-يكتب الحروف الهجائية التي درسها في أشكالها المختلفة من الذاكرة القريبة",
            "11-يكتب الحروف الهجائية التي درسها في أشكالها المختلفة من الذاكرة البعيدة.",
            "12-يربط الأسماء المسموعة بالصور .",
            "13-يكتب كلمات سبق له دراسة حروفها جميعها مع الحركة القصيرة والطويلة من الذاكرة القريبة.",
            "14-يوزع نظرة على المستمعين. ..",
            "15-يصف مشاهداته اليومية في حدود عشر كلمات",
            "16-ينسخ كلمات فيها ظواهر لغوية (تاء مربوطة , ومفتوحة , الهاء، أل الشمسية والقمرية , التضعيف , التنوين , المد ...).",
            "17-يصوغ أسئلة تذكرية عما استمع إليه.",
            "18-يبدي رأيه ويناقش في موضوع يناسب سنه في جملة واحدة",
            "19-يصف الشخصيات والأحداث فيما استمع إليه (شخصيات رئيسة ، شخصيات ثانوية ، شخصيات شريرة ، شخصيات خيرة )",
            "20-يقرأ كلمات بصرية ( هذا . هذه ) .",
            "23-يستنتج المعنى العام للمقروء. .",
            "24-يكتب كلمات فيها ظواهر لغوية درسها من الذاكرة القريبة .",
            "26-يحلل الجمل إلى كلمات وتحليل الكلمات إلى مقاطع وتحليل المقاطع إلى أصوات .",
            "30-يكتشف دلالة الكلمات الجديدة من خلال الترادف .",
            "31-يكتب كلمات بصرية ( هذا . هذه ) من الذاكرة القريبة والبعيدة. .",
            "32-يتوقع مضمون النص من العنوان أو الصور المصاحبة له ..."
        ],

        thirdPeriod: [
            "1-نطق الحروف التي درسها بأصواتها القصيرة و الطويلة و الساكنة نطقا سليما ..",
            "2-يرسم الحروف التي درسها رسما صحيحا بأشكالها وحركاتها المختلفة",
            "3-يسمي الحروف الهجائية التي درسها",
            "7-يستظهر ستة أبيات من الأناشيد القصيرة",
            "8-يجيب عن أسئلة تذكرية حول النص المقروء. ..",
            "10-يكتب الحروف الهجائية التي درسها في أشكالها المختلفة من الذاكرة القريبة",
            "11-يكتب الحروف الهجائية التي درسها في أشكالها المختلفة من الذاكرة البعيدة.",
            "13-يكتب كلمات سبق له دراسة حروفها جميعها مع الحركة القصيرة والطويلة من الذاكرة القريبة.",
            "15-يصف مشاهداته اليومية في حدود عشر كلمات",
            "16-ينسخ كلمات فيها ظواهر لغوية (تاء مربوطة , ومفتوحة , الهاء، أل الشمسية والقمرية , التضعيف , التنوين , المد ...).",
            "17-يصوغ أسئلة تذكرية عما استمع إليه.",
            "18-يبدي رأيه ويناقش في موضوع يناسب سنه في جملة واحدة",
            "19-يصف الشخصيات والأحداث فيما استمع إليه (شخصيات رئيسة ، شخصيات ثانوية ، شخصيات شريرة ، شخصيات خيرة )",
            "20-يقرأ كلمات بصرية ( هذا . هذه ) .",
            "21-يحكي حكاية قصيرة استمع إليها مراعيا تسلسل أحداثها وترابطها ..",
            "22-ينسخ جملا في حدود كلمتين أو ثلاث كلمات ..",
            "23-يستنتج المعنى العام للمقروء. .",
            "24-يكتب كلمات فيها ظواهر لغوية درسها من الذاكرة القريبة .",
            "25-يقرأ جملا ومقاطع قراءة مسترسلة.",
            "26-يحلل الجمل إلى كلمات وتحليل الكلمات إلى مقاطع وتحليل المقاطع إلى أصوات .",
            "27-يكتب جملا من الذاكرة القريبة",
            "28-يكتب جملا من الذاكرة البعيدة.",
            "29-يقرأ نصا مشكولا عدد كلماته من( 20-40 كلمة)",
            "30-يكتشف دلالة الكلمات الجديدة من خلال الترادف .",
            "31-يكتب كلمات بصرية ( هذا . هذه ) من الذاكرة القريبة والبعيدة. .",
            "32-يتوقع مضمون النص من العنوان أو الصور المصاحبة له ...",
            "33-يرسم علامات الترقيم (النقطة ,الفاصلة , علامة الاستفهام ) .",
            "34-يرتب كلمات لبناء جملة مفيدة",
            "35-يرتب جملا لبناء نص مترابط.",
            "36-يملأ بطاقة تعريف بنفسه تتضمن اسمه الثلاثي ومدرسته , و فصله"
        ]
    },

    // Math
    math: {
        firstPeriod: [
            "1-تصنيف مجموعة من الأشياء وفق خاصية واحدة أو أكثر.",
            "2-حل مسائل رياضية باستعمال استراتيجيات ومهارات مناسبة مع اتباع الخطوات الأربع ..",
            "3-استعمال التقابل لتحديد ( المجموعات التي فيها العدد نفسه من الأشياء , المجموعة الأكثر أو الأقل من الأخرى ).",
            "4-عد الأعداد ضمن العدد (20) وقراءتها وكتابتها وتمييزها باستعمال أشياء ملموسة و رسوم توضيحية.",
            "5-استعمال المفردات ( فوق ، تحت ، أعلى ، أوسط ، أسفل) لوصف أو تحديد مواضع الأشياء بعضها بالنسبة إلى بعض .",
            "6-وصف ترتيب الحوادث والأشياء والأماكن باستعمال قبل و بعد.",
            "7-تحديد أنماط الأشياء وتوسيعها وإنشاؤها.",
            "8-مقارنة الأعداد ضمن العدد ( 20 ) وترتيبها باستعمال خط الأعداد ..",
            "9-استعمال الأعداد الترتيبية حتى العاشر لوصف موقع شيء في صف. .."
        ],

        secondPeriod: [
            "2-حل مسائل رياضية باستعمال استراتيجيات ومهارات مناسبة مع اتباع الخطوات الأربع ..",
            "4-عد الأعداد ضمن العدد (20) وقراءتها وكتابتها وتمييزها باستعمال أشياء ملموسة و رسوم توضيحية.",
            "8-مقارنة الأعداد ضمن العدد ( 20 ) وترتيبها باستعمال خط الأعداد ..",
            "10-استعمال قطع العد لتمثيل قصص الجمع وقصص الطرح.",
            "11-كتابة جمل ( الجمع باستعمال إشارتي الجمع والمساواة ، الطرح باستعمال إشارتي الطرح والمساواة ).",
            "12-إيجاد ناتج (الجمع إلى الصفر ، طرح الصفر أو الكل ) ..",
            "13-استعمال قطع العد للحصول على مجموع يساوي ( 4 ،5 ،6 ،7 ،8 ،9 ،10 ،11، 12 ).",
            "14-كتابة حقائق الجمع وحقائق الطرح ضمن العدد (12) أفقياً و رأسياً.",
            "15-إيجاد ناتج الطرح من الأعداد ( 4 ،5 ،6 ،7 ،8 ،9 ،10 ،11 ، 12 ).",
            "16-إيجاد ناتج الجمع بـ (العد التصاعدي ، استعمال خط الأعداد ).",
            "17-إيجاد ناتج الطرح بـ ( العد التنازلي ، استعمال خط الأعداد )."
        ],

        thirdPeriod: [
            "2-حل مسائل رياضية باستعمال استراتيجيات ومهارات مناسبة مع اتباع الخطوات الأربع ..",
            "18-العد بالعشرات حتى (100) .",
            "19-عد الأعداد من 1الى 100 بالترتيب على لوحة المئة وقراءتها وكتابتها بطرق مختلفة ..",
            "20-العد قفزياً (اثنينات ، خمسات ، عشرات ) حتى (100).",
            "21-مقارنة الأشياء حسب (الطول ، الكتلة ، السعة ) وترتيبها .",
            "22-قياس الأطوال باستعمال وحدات غير قياسية .",
            "23-تقدير عدد مجموعة من الأشياء ضمن (100) باستعمال المجموعة من عشرة .",
            "24-مقارنة الأعداد ضمن (100) باستعمال الرموز (< ،> ، = ) وترتيبها .",
            "25-تعرف المجسمات ( الكرة ، المخروط ، المكعب ، الأسطوانة ).",
            "26-تصنيف المجسمات وفق كونها تتدحرج أو تتراص أو تنزلق .",
            "27-عمل تقابل بين سطوح المجسمات والأشكال المستوية.",
            "28-تعرف الأشكال المستوية (المثلث ، المستطيل ، المربع ، الدائرة) ووصفها .",
            "29-تعرف الأجزاء المتطابقة في شكل والتعبير عن الجزء الواحد منها بـ ( النصف ، الثلث ، الربع ).",
            "30-عد أوراق نقدية من الفئات (ريال واحد ، 5 ريالات ، 10 ريالات) لتحديد قيم مجموعات مختلفة من النقود .",
            "31-تمثيل مبلغ من المال بطرائق مختلفة .",
            "32-مقارنة قيم النقود بأسعار السلع .",
            "49-تمثيل الأعداد حتى (100) بالأحاد والعشرات"
        ]
    },

    // lifeSkills
    lifeSkills: {
        firstPeriod: [
            "1-تطبيق الوضع الصحي لمسك القلم .",
            "2-توضيح الاستخدامات الصحيحة بالقلم",
            "3-تدريب المتعلم على الكتابة بخط جميل",
            "4-التمييز بين أنواع الأقلام",
            "5-ترتيب مكونات الحقيبة المدرسية",
            "6-ذكر مواصفات الحقيبة المثالية",
            "7-تطبيق الوضع الصحي في حمل الحقيبة",
            "8-التمكن من كتابة الاسم وتاريخ الميلاد",
            "9-تعبير المتعلم عن نفسه",
            "10-تعبئة البطاقة الشخصية للمتعلم",
            "11-ترتيب أيام الأسبوع .",
            "12-تحديد عدد الأسابيع في الشهر"
        ],

        secondPeriod: [
            "38-تطبيق الوضع الصحي في الجلوس الصحيح",
            "39-تطبيق الطريقة الصحيحة لتنظيف أجزاء الوجه",
            "40-بيان أهمية النظافة",
            "41-التطبيق الصحيح للتعامل مع المواقف الأسرية المختلفة",
            "42-بيان أهمية الاعتراف بالخطأ",
            "43-تطبيق أساليب الاعتذار"
        ],

        thirdPeriod: [
            "44-التصنيف لأدوات العناية لليدين والقدمين",
            "45-التعرف على أنواع الأسنان",
            "46-التطبيق الصحيح لتنظيف الأسنان",
            "47-المقارنة بين أنواع الإشارات الضوئية",
            "48-التعرف على مبادئ السلامة أثناء عبور الشارع",
            "49-أهمية المشاركة للآخرين في اللعب",
            "51-اقتراح أساليب استثمار وقت الفراغ",
            "52-تفسير أهمية تناول وجبة الإفطار لنمو الجسم"
        ]
    },

    // Jurisprudence الفقة
    jurisprudence: {
        firstPeriod: [
            "135-تعظيم القرآن الكريم ومحبته.",
            "136-بيان أن القرآن الكريم كلام الله، يزيد في الحسنات.",
            "137-تطبيق الآداب الشرعية عند تلاوة القرآن الكريم.",
            "139-تطبيق البسملة والاستعاذة عند قراءة القرآن الكريم.",
            "143-معرفة نسب النبي صلى الله عليه وسلم، وتسمية أبيه وأمه ومكان مولده.",
            "144-توضيح الحكمة من إرسال النبي صلى الله عليه وسلم.",
            "145-بيان أمانة النبي صلى الله عليه وسلم، وصدقه، ورحمته، مع التمثيل.",
            "146-تطبيق تحية الإسلام على من تعرف ومن لا تعرف.",
            "147-ذكر فضائل السلام والأجر المترتب عليه.",
            "148-بيان كيفية رد السلام مع الدليل.",
            "181-تطبيق النشاطات الـمُنَمِّية لمهارة الكتابة في الدروس.",
            "195-التعبير شفهياً عن محبتي للقرآن الكريم.",
            "196-الإعتناء بالمصحف الشريف بوضعه في المكان المناسب.",
            "197-الاهتمام بنظافة المصحف الشريف.",
            "198-تعظيم سيرة النبي صلى الله عليه وسلم، وأحبه وأطيعه."
        ],

        secondPeriod: [
            "149-بيان أن بر الوالدين طريق الى الجنة مع الدليل.",
            "150-حفظ الدليل على بر الوالدين.",
            "151-توضيح كيف يكون البر بالوالدين.",
            "152-بيان آداب بر الوالدين مع التمثيل.",
            "153-تطبيق آداب التعامل مع المعلم.",
            "154-تطبيق أداء ما يطلبه المعلم من الطالب.",
            "155-توضيح أن الإسلام دين النظافة والطهارة.",
            "156-ذكر آداب قضاء الحاجة.",
            "157-حفظ دعاء دخول الخلاء والخروج منه.",
            "158-بيان حكم الطهارة، مع الدليل.",
            "159-التفريق بين الاستنجاء والاستجمار.",
            "161-بيان حكم الوضوء، وأنه قبل الصلاة.",
            "162-توضيح ما يجب إزالة النجاسة عنه.",
            "163-الأمر بغسل الثوب وتقليم الأظفار.",
            "164-الاعتزاز بدين الإسلام الذي حثنا على النظافة في كل شيء.",
            "181-تطبيق النشاطات الـمُنَمِّية لمهارة الكتابة في الدروس."
        ],

        thirdPeriod: [
            "165-توضيح أن الوضوء عبادة لله تعالى.",
            "166-بيان أهمية الوضوء وفضائله، مع الدليل.",
            "167-تطبيق صفة الوضوء الصحيحة.",
            "168-حفظ الذكر الشرعي الوارد بعد الوضوء.",
            "169-اجتناب الإسراف في الوضوء.",
            "170-بيان مكانة الصلاة ومنزلتها مع الدليل.",
            "171-بيان أن الصلاة الركن الثاني من أركان الإسلام.",
            "172-توضيح أن المسلم يصلي طاعة لله تعالى.",
            "174-تطبيق الركعة الأولى تطبيقاً صحيحًا.",
            "176-تطبيق الركعة الثانية تطبيقاً صحيحًا.",
            "177-تطبيق الركعة الثالثة والرابعة تطبيقاً صحيحًا.",
            "178-حفظ الأذكار الشرعية الواردة في الصلاة.",
            "179-بيان مبطلات الصلاة.",
            "180-تطبيق الصلاة تطبيقًا صحيحًا.",
            "181-تطبيق النشاطات الـمُنَمِّية لمهارة الكتابة في الدروس.",
            "199-تعداد الصلوات المفروضة."
        ]
    },

    // Monotheism التوحيد
    monotheism: {
        firstPeriod: [
            "106-بيان ما يجب على المسلم معرفته.",
            "107-بيان أن الله هو الخالق، مع التمثيل، والدليل.",
            "108-بيان أثر الإيمان بأن الله هو الخالق.",
            "109-بيان أن الله هو الرزاق، مع التمثيل، والدليل.",
            "110-بيان أن الله هو الذي ينزل المطر، مع الدليل.",
            "111-المقارنة بين الأرض التي نزل عليها المطر، والتي لم ينزل عليها.",
            "112-حفظ الأدعية التي تقال عند نزول المطر وبعد نزوله.",
            "113-بيان نعمة السمع، والبصر، والطعام، والشراب، على الإنسان مع الدليل.",
            "114-التعبير عن كيفية شكر الله على نعمه.",
            "115-حفظ الأدعية التي تقال عند الأكل والشرب.",
            "116-المحافظة على بقايا الطعام والشراب.",
            "134-تطبيق النشاطات الـمُنَمِّية لمهارة الكتابة في الدروس."
        ],

        secondPeriod: [
            "106-بيان ما يجب على المسلم معرفته.",
            "117-تعظيم الله بمحبته وتوحيده وطاعته.",
            "118-التعليل لمحبة الله، مع الدليل.",
            "119-بيان الحكمة من خلق الناس مع الدليل، والتمثيل.",
            "120-ذكر أمثلة على عبادة الله مع الدليل.",
            "121-بيان معنى الإسلام مع الدليل.",
            "123-بيان أن المسلم لا يبتغي غير الإسلام دينًا مع الدليل.",
            "124-حفظ دعاء (يا مقلب القلوب ...).",
            "134-تطبيق النشاطات الـمُنَمِّية لمهارة الكتابة في الدروس."
        ],

        thirdPeriod: [
            "106-بيان ما يجب على المسلم معرفته.",
            "125-ذكر أركان الإسلام، مع الدليل.",
            "126-التعبير عن محبة دين الإسلام.",
            "127-ذكر نسب النبي صلى الله عليه وسلم، ورسالته، وما أنزل عليه، مع الدليل.",
            "128-بيان أن محمدًا صلى الله عليه وسلم عبد من عباد الله مع الدليل.",
            "129-بيان أن النبي صلى الله عليه وسلم أفضل البشر، وآخرهم، مع الدليل.",
            "130-حفظ الذكر الوارد في الصباح والمساء.",
            "131-محبة النبي صلى الله عليه وسلم، والإيمان برسالته، وطاعته.",
            "132-بيان جزاء من أطاع الرسول مع الدليل.",
            "133-تعظيم النبي صلى الله عليه وسلم بالصلاة عليه عند ذكره.",
            "134-تطبيق النشاطات الـمُنَمِّية لمهارة الكتابة في الدروس."
        ]
    },

    // quran قرآن
    quran: {
        firstPeriod: [
            "100-تطبيق آداب تلاوة القرآن الكريم، كالطهارة والإنصات واحترام المصحف.",
            "101-تلاوة الآيات المقررة تلاوة صحيحة.",
            "102-الانطلاق في القراءة وعدم التردد فيها.",
            "103-حفظ السور المقررة مع صحة قراءتها.",
            "104-جودة الحفظ وعدم التتعتع فيه.",
            "105-الترتيل وتحسين الصوت بالقراءة.",
            "194-المراجعة المستمرة لجميع ما حفظ."
        ],
        secondPeriod: [
            "100-تطبيق آداب تلاوة القرآن الكريم، كالطهارة والإنصات واحترام المصحف.",
            "101-تلاوة الآيات المقررة تلاوة صحيحة.",
            "102-الانطلاق في القراءة وعدم التردد فيها.",
            "103-حفظ السور المقررة مع صحة قراءتها.",
            "104-جودة الحفظ وعدم التتعتع فيه.",
            "105-الترتيل وتحسين الصوت بالقراءة.",
            "194-المراجعة المستمرة لجميع ما حفظ."
        ],

        thirdPeriod: [
            "100-تطبيق آداب تلاوة القرآن الكريم، كالطهارة والإنصات واحترام المصحف.",
            "101-تلاوة الآيات المقررة تلاوة صحيحة.",
            "102-الانطلاق في القراءة وعدم التردد فيها.",
            "103-حفظ السور المقررة مع صحة قراءتها.",
            "104-جودة الحفظ وعدم التتعتع فيه.",
            "105-الترتيل وتحسين الصوت بالقراءة.",
            "194-المراجعة المستمرة لجميع ما حفظ."
        ]
    }
}


let skillForms = document.querySelectorAll(".skillForms");

skillForms.forEach((form) => {
    form.addEventListener('change', (event) => {
        const semester = form.querySelector("#semester");
        const subject = form.querySelector("#subject");
        const skill = form.querySelector("#skill");


        // إضافة الخيارات الجديدة بناءً على القيم المختارة
        let options = [];

        if (semester.value === "الأول" && subject.value === "لغتي") {
            options = skills.arbicLanguage.firstPeriod;
        } else if (semester.value === "الثاني" && subject.value === "لغتي") {
            options = skills.arbicLanguage.secondPeriod;
        } else if (semester.value === "الثالث" && subject.value === "لغتي") {
            options = skills.arbicLanguage.thirdPeriod;
        } else if (semester.value === "الأول" && subject.value === "الفقه") {
            options = skills.jurisprudence.firstPeriod;
        } else if (semester.value === "الثاني" && subject.value === "الفقه") {
            options = skills.jurisprudence.secondPeriod;
        } else if (semester.value === "الثالث" && subject.value === "الفقه") {
            options = skills.jurisprudence.thirdPeriod;
        } else if (semester.value === "الأول" && subject.value === "التوحيد") {
            options = skills.monotheism.firstPeriod;
        } else if (semester.value === "الثاني" && subject.value === "التوحيد") {
            options = skills.monotheism.secondPeriod;
        } else if (semester.value === "الثالث" && subject.value === "التوحيد") {
            options = skills.monotheism.thirdPeriod;
        } else if (semester.value === "الأول" && subject.value === "القرآن") {
            options = skills.quran.firstPeriod;
        } else if (semester.value === "الثاني" && subject.value === "القرآن") {
            options = skills.quran.secondPeriod;
        } else if (semester.value === "الثالث" && subject.value === "القرآن") {
            options = skills.quran.thirdPeriod;
        } else if (semester.value === "الأول" && subject.value === "الرياضيات") {
            options = skills.math.firstPeriod;
        } else if (semester.value === "الثاني" && subject.value === "الرياضيات") {
            options = skills.math.secondPeriod;
        } else if (semester.value === "الثالث" && subject.value === "الرياضيات") {
            options = skills.math.thirdPeriod;
        } else if (semester.value === "الأول" && subject.value === "المهارات الحيايتة والأسارية") {
            options = skills.lifeSkills.firstPeriod;
        } else if (semester.value === "الثاني" && subject.value === "المهارات الحيايتة والأسارية") {
            options = skills.lifeSkills.secondPeriod;
        } else if (semester.value === "الثالث" && subject.value === "المهارات الحيايتة والأسارية") {
            options = skills.lifeSkills.thirdPeriod;
        }

        // إضافة الخيارات الجديدة
        options.forEach(element => {
            const option = document.createElement('option');
            option.value = element;
            option.textContent = element;
            skill.appendChild(option);
        });

        // تحديث الخيار الافتراضي إذا كانت القائمة فارغة
        if (skill.options.length === 1) {
            skill.innerHTML = '<option value="" selected>اختر...</option>';
        }
    });
});

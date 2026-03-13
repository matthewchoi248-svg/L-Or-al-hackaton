export const pages = [
    { type: "landing" },

    {
        type: "filler",
        id: "loginIntro",
        variant: "login",
        title: "Have you taken this quiz before?",
        subtitle: "Return to your fragrance profile or start a new discovery"
    },

   {
        type: "filler",
        id: "knowYouIntro",
        variant: "hero",
        title: "Let’s get to know you",
        subtitle: "Fragrance reflects your personality, memories, and lifestyle",
        description: "Let’s discover what suits you best",
        backgroundImage: "/static/images/page3.png",
        showProfileBadge: true,
        profileLetter: "H"
    },

    {
        type: "singleSelectTextQuestion",
        questionIndex: 0,
        backgroundImage: "/static/images/section1.png"
    },

    {
        type: "textQuestion",
        questionIndex: 0,
        backgroundImage: "/static/images/section1.png"
    },

    {
        type: "textQuestion",
        questionIndex: 1,
        backgroundImage: "/static/images/section1.png"
    },

    {
        type: "textQuestion",
        questionIndex: 2,
        backgroundImage: "/static/images/section1.png"
    },

    {
        type: "singleSelectTextQuestion",
        questionIndex: 1,
        backgroundImage: "/static/images/section1.png"
    },

    {
        type: "singleSelectTextQuestion",
        questionIndex: 2,
        backgroundImage: "/static/images/section1.png"
    },

    {
        type: "filler",
        id: "scentPerceptionIntro",
        variant: "hero",
        title: "Understanding your scent perception",
        subtitle: "Our sense of smell is shaped by both preference and biology.",
        description: "Let’s explore how different scents feel to you.",
        backgroundImage: "/static/images/part2.png",
        showProfileBadge: false
    },

    {
        type: "videoQuestion",
        questionIndex: 0
    },

    {
        type: "videoQuestion",
        questionIndex: 1
    },

    {
        type: "videoQuestion",
        questionIndex: 2
    },

    {
        type: "videoQuestion",
        questionIndex: 3
    },

    {
        type: "videoQuestion",
        questionIndex: 4
    },

    {
        type: "filler",
        id: "scentPreferencesIntro",
        variant: "hero",
        title: "Your scent preferences",
        subtitle: "Tell us which scents you enjoy, and which ones you tend to avoid,",
        description: "and how you like your fragrance to be experienced.",
        backgroundImage: "/static/images/part3.png",
        showProfileBadge: false
    },

    {
        type: "textQuestion",
        questionIndex: 3,
        backgroundImage: "/static/images/section3.png"
    },

    {
        type: "textQuestion",
        questionIndex: 4,
        backgroundImage: "/static/images/section3.png"
    },

    {
        type: "imageQuestion",
        questionIndex: 0,
        backgroundImage: "/static/images/section3.png"
    },

    {
        type: "loading",
        id: "analysisLoading"
    },

    {
        type: "finalResults",
        id: "finalResults",
        backgroundImage: "/static/images/finalbg.png",
        eyebrow: "Your fragrance Identity",
        profileTitle: "Radiant Charmer",
        descriptionParagraphs: [
            "You carry an effortless warmth that draws people in. Like soft sunlight filtering through leaves, your presence feels uplifting and easy to be around. People feel comfortable speaking with you, yet there’s a natural confidence that sparks curiosity and admiration.",
            "Your scent reflects this balance, bright and welcoming at first, with a gentle warmth that lingers close to the skin."
        ],
        accordions: [
            {
                id: "scentNature",
                title: "  Your Scent Nature",
                paragraphs: [
                    "You have a naturally warm, inviting scent presence that feels approachable and effortless."
                ]
            },
            {
                id: "fragrancePreference",
                title: "  Your Fragrance Preference",
                paragraphs: [
                    "You gravitate towards bright citrus and greens—freshness is your anchor, not a fleeting trend.",
                    "Sweetness appeals when it feels natural. Avoid the cloying; you prefer a crisp, invigorating touch."
                ]
            },
            {
                id: "emotionalResonance",
                title: "  Your Emotional Resonance",
                paragraphs: [
                    "You respond best to scents that feel radiant, soft, and emotionally vivid rather than overpowering."
                ]
            }
        ],
        moodboardImages: [
            "/static/images/moodboard.png"
        ],
        recommendations: [
            {
                label: "YOUR DAILY",
                brand: "Maison Margiela —",
                name: "Lazy Sunday Morning",
                description: "mirrors your quiet elegance, ready for whatever comes next",
                image: "/static/images/frame1.png"
            },
            {
                label: "YOUR SIGNATURE",
                brand: "Giorgio Armani —",
                name: "My Way",
                description: "mirrors your warmth and natural charm that easily draws people in",
                image: "/static/images/frame2.png"
            },
            {
                label: "YOUR NIGHT OUT",
                brand: "Valentino —",
                name: "Donna Born in Roma",
                description: "radiates your bold and golden spirit",
                image: "/static/images/frame3.png"
            },
            {
                label: "YOUR EXPERIMENT",
                brand: "Atelier Cologne —",
                name: "Orange Sanguine",
                description: "celebrates your playful creative heart",
                image: "/static/images/frame4.png"
            }
        ]
    },

    {
        type: "createProfile",
        id: "createProfile",
        backgroundImage: "/static/images/section3.png",
        title: "Create My Profile",
        subtitle: "Refer back in future for more recommendations"
    }
];
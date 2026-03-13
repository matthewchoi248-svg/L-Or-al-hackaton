import { pages } from "./pages.js";

const PAGE_FADE_DURATION = 450;
let isPageTransitioning = false;

const appState = {
    currentPage: 0,
    dropdownOpenState: {},
    submissionResult: null,
    login: {
        mode: "new",
        email: "",
        password: ""
    },
    emailCapture: {
        email: ""
    },
        finalResults: {
        openAccordion: null
    },

    singleSelectTextQuestions: [
        {
            id: "question1",
            title: "Which age range best describes you?",
            options: [
                { id: "q1_option_1", text: "18-24" },
                { id: "q1_option_2", text: "25-34" },
                { id: "q1_option_3", text: "35-44" },
                { id: "q1_option_4", text: "45-54" },
                { id: "q1_option_5", text: "55+" }
            ],
            selectedOption: null
        },
        {
            id: "question5",
            title: "Do you tend to feel warm or sweat easily?",
            options: [
                { id: "q5_option_1", text: "Rarely" },
                { id: "q5_option_2", text: "Sometimes" },
                { id: "q5_option_3", text: "Often" }
            ],
            selectedOption: null
        },
        {
            id: "question6",
            title: "How often do you use deodorant?",
            explanationLabel: "Why some people don’t need deodorants",
            explanationText: "This is influenced by a gene called ABCC11, which affects how underarm sweat develops and influence how fragrance blends with your natural scent",
            options: [
                { id: "q6_option_1", text: "Rarely" },
                { id: "q6_option_2", text: "Occasionally" },
                { id: "q6_option_3", text: "Daily" }
            ],
            selectedOption: null
        }
    ],

    textQuestions: [
        {
            id: "question2",
            title: "Which words describe you best?",
            helperText: "Choose up to 3:",
            maxSelections: 3,
            options: [
                { id: "q2_option_1", text: "Elegant" },
                { id: "q2_option_2", text: "Calm" },
                { id: "q2_option_3", text: "Down to Earth" },
                { id: "q2_option_4", text: "Charming" },
                { id: "q2_option_5", text: "Creative" },
                { id: "q2_option_6", text: "Romantic" },
                { id: "q2_option_7", text: "Joyful & Energetic" },
                { id: "q2_option_8", text: "Adventurous" },
                { id: "q2_option_9", text: "Confident" },
                { id: "q2_option_10", text: "Warm & Inviting" },
                { id: "q2_option_11", text: "Bold & Fearless" }
            ],
            selectedOptions: []
        },
        {
            id: "question3",
            title: "What feelings do you want your fragrance to create?",
            helperText: "Choose up to 3:",
            maxSelections: 3,
            options: [
                { id: "q3_option_1", text: "Fresh & Clean" },
                { id: "q3_option_2", text: "Soft & Comforting" },
                { id: "q3_option_3", text: "Warm & Cozy" },
                { id: "q3_option_4", text: "Romantic & Gentle" },
                { id: "q3_option_5", text: "Bright & Uplifting" },
                { id: "q3_option_6", text: "Elegant & Sophisticated" },
                { id: "q3_option_7", text: "Professional & Polished" },
                { id: "q3_option_8", text: "Mysterious & Sensual" }
            ],
            selectedOptions: []
        },
        {
            id: "question4",
            title: "Your favourite memories smell like...",
            helperText: "Choose up to 3:",
            maxSelections: 3,
            options: [
                { id: "q4_option_1", text: "Home cooking or baking" },
                { id: "q4_option_2", text: "Someone you love" },
                { id: "q4_option_3", text: "Fresh laundry" },
                { id: "q4_option_4", text: "Nostalgia" },
                { id: "q4_option_5", text: "Coffee in a café" },
                { id: "q4_option_6", text: "Nature" },
                { id: "q4_option_7", text: "Adventures" }
            ],
            selectedOptions: []
        },
        {
            id: "question12",
            title: "Which scents do you usually go for?",
            helperText: "Choose up to 3:",
            explanationLabel: "Why preference exist",
            explanationText: "People often prefer scents that feel familiar and comforting because smell is closely linked to memory",
            maxSelections: 3,
            options: [
                {
                    id: "q12_option_1",
                    title: "Soft Floral",
                    subtitle: "Rose · Peony · Iris"
                },
                {
                    id: "q12_option_2",
                    title: "Bold Floral",
                    subtitle: "Jasmine · Tuberose · Gardenia"
                },
                {
                    id: "q12_option_3",
                    title: "Bright Citrus",
                    subtitle: "Lemon · Bergamot · Grapefruit"
                },
                {
                    id: "q12_option_4",
                    title: "Juicy Fruits",
                    subtitle: "Peach · Berries · Mango"
                },
                {
                    id: "q12_option_5",
                    title: "Sweet Treats",
                    subtitle: "Vanilla · Caramel · Chocolate"
                },
                {
                    id: "q12_option_6",
                    title: "Warm & Spicy",
                    subtitle: "Cinnamon · Clove · Cardamom"
                },
                {
                    id: "q12_option_7",
                    title: "Aquatic Freshness",
                    subtitle: "Sea Salt · Water Lily"
                },
                {
                    id: "q12_option_8",
                    title: "Creamy Wood",
                    subtitle: "Sandalwood · Cashmere · Tonka Beans"
                },
                {
                    id: "q12_option_9",
                    title: "Dry Wood",
                    subtitle: "Cedarwood · Vetiver · Patchouli"
                },
                {
                    id: "q12_option_10",
                    title: "Musky",
                    subtitle: "Skin · Amber"
                }
            ],
            selectedOptions: []
        },
        {
            id: "question13",
            title: "Which scents do you usually avoid?",
            helperText: "Choose up to 3:",
            explanationLabel: "Why certain smells aren’t for everyone",
            explanationText: "Your sense of smell is closely connected to the brain’s center, which is why some scents can push us away",
            maxSelections: 3,
            options: [
                { id: "q13_option_1", text: "Powdery" },
                { id: "q13_option_2", text: "Too sweet, Candy-liked" },
                { id: "q13_option_3", text: "Too floral, Perfumy" },
                { id: "q13_option_4", text: "Gasoline, Chemical-liked" },
                { id: "q13_option_5", text: "Alcoholic, Sharp, Clinical" },
                { id: "q13_option_6", text: "Medicinal, Herbal" },
                { id: "q13_option_7", text: "Too synthetic, Artificial" },
                { id: "q13_option_8", text: "Musty, Moldy" },
                { id: "q13_option_9", text: "Too animal-liked, Funky" },
                { id: "q13_option_10", text: "Smoky, Burnt" }
            ],
            selectedOptions: []
        }
    ],

    imageQuestions: [
        {
            id: "question14",
            title: "When you wear perfume, who do you want to be able to smell it?",
            options: [
                { id: "q14_option_1", text: "Only for myself", image: "/static/images/self.png" },
                { id: "q14_option_2", text: "Hugging distance", image: "/static/images/hugging.png" },
                { id: "q14_option_3", text: "A few steps away", image: "/static/images/fewSteps.png" },
                { id: "q14_option_4", text: "Across the room", image: "/static/images/acrossRoom.png" }
            ],
            selectedOption: null
        }
    ],

    videoQuestions: [
        {
            id: "question7",
            title: "When you smell freshly squeezed lemon or grapefruit, how do you react?",
            explanationLabel: "Why does it smell sulfury to some?",
            explanationText: "Our perception of citrus is influenced by the receptor OR2M7. Though most people perceive grapefruit and citrus as bright and fruity, some variations of this genes perceive it as sharp or sulfur-like note",
            video: "/static/videos/citrus.mp4",
            options: [
                { id: "q7_option_1", text: "Bright & Refreshing" },
                { id: "q7_option_2", text: "Pleasant & Uplifting" },
                { id: "q7_option_3", text: "A little sharp or strong" },
                { id: "q7_option_4", text: "Overpowering" },
                { id: "q7_option_5", text: "I don’t mind it" }
            ],
            selectedOption: null
        },
        {
            id: "question8",
            title: "How does freshly cut grass or crushed leaves make you feel?",
            explanationLabel: "Why does fresh grass smell different to people?",
            explanationText: "Fresh grass smells the way it does because of a molecule called cis-3-hexen-1-ol. Differences in a receptor called OR2J3 mean some people perceive this scent muted or harsher",
            video: "/static/videos/Grass.mp4",
            options: [
                { id: "q8_option_1", text: "Clean & Fresh" },
                { id: "q8_option_2", text: "Natural & Calming" },
                { id: "q8_option_3", text: "Subtle, barely there" },
                { id: "q8_option_4", text: "A little sharp" },
                { id: "q8_option_5", text: "I don’t mind it" }
            ],
            selectedOption: null
        },
        {
            id: "question9",
            title: "How does freshly washed cilantro and herbs make you feel?",
            explanationLabel: "Why does it smell soapy to some?",
            explanationText: "Some people carry a gene called OR6A2 that makes cilantro smell soapy. Knowing this helps us avoid scent notes that might feel similar.",
            video: "/static/videos/Cilantro.mp4",
            options: [
                { id: "q9_option_1", text: "Fresh & Herbal" },
                { id: "q9_option_2", text: "Subtle, Not much flavor or scent" },
                { id: "q9_option_3", text: "Soapy / Odd to me" },
                { id: "q9_option_4", text: "I don’t mind it" }
            ],
            selectedOption: null
        },
        {
            id: "question10",
            title: "If you bury your nose into a bouquet of flowers, how does that smell to you?",
            explanationLabel: "Why some floral notes don’t hit",
            explanationText: "A receptor called OR5A1 influences how we perceive certain floral compounds found in violet and iris. Some people find them soft and powdery, while others barely notice them or find them sour",
            video: "/static/videos/flower.mp4",
            options: [
                { id: "q10_option_1", text: "Light & Fresh" },
                { id: "q10_option_2", text: "Very subtle" },
                { id: "q10_option_3", text: "Rich & Bold" },
                { id: "q10_option_4", text: "Too Powdery" },
                { id: "q10_option_5", text: "Overwhelming" }
            ],
            selectedOption: null
        },
        {
            id: "question11",
            title: "When i think of musk i think of...",
            explanationLabel: "Why does musk smell different for everyone?",
            explanationText: "A receptor called OR7D4 affects how we perceive musky molecules. Depending on the person, musk can smell warm and pleasant, faint, or unusually strong.",
            video: "/static/videos/musk.mp4",
            options: [
                { id: "q11_option_1", text: "Soft skin scent" },
                { id: "q11_option_2", text: "Fresh Laundry" },
                { id: "q11_option_3", text: "Warm & Sensual" },
                { id: "q11_option_4", text: "Too sweaty, body-odor like" },
                { id: "q11_option_5", text: "I don’t mind it" }
            ],
            selectedOption: null
        }
    ]
};

function renderApp() {
    const app = document.getElementById("app");
    const currentPageConfig = pages[appState.currentPage];

    app.innerHTML = `
        <section class="page">
            ${renderCurrentPage(currentPageConfig)}
        </section>
    `;

    attachEvents();

    if (currentPageConfig && currentPageConfig.type === "loading") {
        setTimeout(() => {
            if (pages[appState.currentPage] && pages[appState.currentPage].type === "loading") {
                goToPage(getNextPageIndex(appState.currentPage));
            }
        }, 3000);
    }
}

function waitForNextFrame() {
    return new Promise((resolve) => {
        requestAnimationFrame(() => {
            requestAnimationFrame(resolve);
        });
    });
}

async function goToPage(targetPageIndex) {
    if (isPageTransitioning || targetPageIndex === appState.currentPage) {
        return;
    }

    isPageTransitioning = true;

    const app = document.getElementById("app");
    const currentPage = app.querySelector(".page");

    if (currentPage) {
        currentPage.classList.add("is-fade-ready");
        await waitForNextFrame();
        currentPage.classList.add("is-fading-out");

        await new Promise((resolve) => setTimeout(resolve, PAGE_FADE_DURATION));
    }

    appState.currentPage = targetPageIndex;
    renderApp();

    const newPage = app.querySelector(".page");

    if (newPage) {
        newPage.style.opacity = "0";
        await waitForNextFrame();
        newPage.classList.add("is-fade-ready");
        newPage.classList.add("is-fading-in");
        newPage.style.opacity = "1";

        await new Promise((resolve) => setTimeout(resolve, PAGE_FADE_DURATION));
    }

    isPageTransitioning = false;
}

function renderQuestionProgressBar(pageIndex) {
    const visualPage = pageIndex + 1;

    const segments = [
        { start: 3, end: 10 },
        { start: 11, end: 16 },
        { start: 17, end: 20 }
    ];

    function getSegmentFill(currentPage, start, end) {
        if (currentPage < start) {
            return 0;
        }

        if (currentPage > end) {
            return 100;
        }

        const totalPagesInSegment = end - start + 1;
        const pagesCompletedWithinSegment = currentPage - start + 1;

        return (pagesCompletedWithinSegment / totalPagesInSegment) * 100;
    }

    const shouldShowProgress = visualPage >= 3 && visualPage <= 20;

    if (!shouldShowProgress) {
        return "";
    }

    const segment1 = getSegmentFill(visualPage, 3, 9);
    const segment2 = getSegmentFill(visualPage, 10, 15);
    const segment3 = getSegmentFill(visualPage, 16, 19);

    return `
        <div class="questionProgress">
            <div class="questionProgress__segments">
                <div class="questionProgress__segment">
                    <div class="questionProgress__segmentFill" style="width: ${segment1}%;"></div>
                </div>
                <div class="questionProgress__segment">
                    <div class="questionProgress__segmentFill" style="width: ${segment2}%;"></div>
                </div>
                <div class="questionProgress__segment">
                    <div class="questionProgress__segmentFill" style="width: ${segment3}%;"></div>
                </div>
            </div>
        </div>
    `;
}

function renderCurrentPage(pageConfig) {
    if (!pageConfig) {
        return `<div class="errorPage">Page not found.</div>`;
    }

    if (pageConfig.type === "landing") {
        return renderLandingPage();
    }

    if (pageConfig.type === "filler") {
        return renderFillerPage(pageConfig, appState.currentPage);
    }

    if (pageConfig.type === "singleSelectTextQuestion") {
        const question = appState.singleSelectTextQuestions[pageConfig.questionIndex];

        if (!question) {
            return `<div class="errorPage">Single select text question not found.</div>`;
        }

        return renderSingleSelectTextQuestionPage(
            question,
            appState.currentPage,
            isLastQuestionBeforeResults(appState.currentPage),
            pageConfig
        );
    }

    if (pageConfig.type === "loading") {
        return renderLoadingPage(appState.currentPage);
    }

    if (pageConfig.type === "emailCapture") {
        return renderEmailCapturePage(appState.currentPage);
    }

    if (pageConfig.type === "finalResults") {
        return renderFinalResultsPage(pageConfig);
    }

    if (pageConfig.type === "textQuestion") {
        const question = appState.textQuestions[pageConfig.questionIndex];

        if (!question) {
            return `<div class="errorPage">Text question not found.</div>`;
        }
        return renderTextQuestionPage(
            question,
            appState.currentPage,
            isLastQuestionBeforeResults(appState.currentPage),
            pageConfig
        );
    }

    if (pageConfig.type === "imageQuestion") {
        const question = appState.imageQuestions[pageConfig.questionIndex];

        if (!question) {
            return `<div class="errorPage">Image question not found.</div>`;
        }

        return renderImageQuestionPage(
            question,
            appState.currentPage,
            isLastQuestionBeforeResults(appState.currentPage),
            pageConfig
        );
    }

    if (pageConfig.type === "videoQuestion") {
        const question = appState.videoQuestions[pageConfig.questionIndex];

        if (!question) {
            return `<div class="errorPage">Video question not found.</div>`;
        }

        return renderVideoQuestionPage(
            question,
            appState.currentPage,
            isLastQuestionBeforeResults(appState.currentPage),
            pageConfig
        );
    }

    if (pageConfig.type === "results") {
        return renderResultsPage();
    }

    if (pageConfig.type === "createProfile") {
        return renderCreateProfilePage(pageConfig, appState.currentPage);
    }

    return `<div class="errorPage">Unsupported page type: ${pageConfig.type}</div>`;
}

function renderLandingPage() {
    return `
        <div class="landingPage">
            <div class="landingPage__content">
                <div class="landingPage__eyebrow">Take our 10 mins quiz</div>
                <h1 class="landingPage__title">Discover your signature scent</h1>

                <div class="landingPage__spacer"></div>

                <div class="landingPage__stats">
                    <div>
                        <div class="landingPage__statValue">14</div>
                        <div class="landingPage__statLabel">Questions</div>
                    </div>

                    <div>
                        <div class="landingPage__statValue">ꝏ</div>
                        <div class="landingPage__statLabel">Possibilities</div>
                    </div>

                    <div>
                        <div class="landingPage__statValue">4</div>
                        <div class="landingPage__statLabel">Recommendation</div>
                    </div>
                </div>

                <button class="quiz-button quiz-button--primary" type="button" id="startQuizButton">
                    <span>Start Quiz</span>
                    <span class="quiz-button__icon">→</span>
                </button>
            </div>
        </div>
    `;
}

function renderFillerPage(pageConfig, pageIndex) {
    const hasBackButton = pageIndex > 0;
    const isNewHere = appState.loginMode === "new";
    const isSignIn = appState.loginMode === "sign-in";

if (pageConfig.variant === "login") {
    const isNewHere = appState.login.mode === "new";
    const isSignIn = appState.login.mode === "sign-in";

    const emailValue = appState.login.email || "";
    const passwordValue = appState.login.password || "";

    const canContinue = isNewHere
        ? true
        : emailValue.trim() !== "" && passwordValue.trim() !== "";

    const continueButtonClass = canContinue
        ? "continue-button continue-button--active"
        : "continue-button continue-button--inactive";

        return `
            <div class="fillerPage fillerPage--login">
                <div class="fillerPage__loginContent">
                    <h1 class="fillerPage__loginTitle">${pageConfig.title || ""}</h1>
                    <p class="fillerPage__loginSubtitle">${pageConfig.subtitle || ""}</p>

                    <div class="loginToggle">
                        <button
                            class="loginToggle__option ${isNewHere ? "loginToggle__option--active" : ""}"
                            type="button"
                            data-login-mode="new"
                            aria-pressed="${isNewHere}"
                        >
                            I’m new here
                        </button>

                        <button
                            class="loginToggle__option ${isSignIn ? "loginToggle__option--active" : ""}"
                            type="button"
                            data-login-mode="sign-in"
                            aria-pressed="${isSignIn}"
                        >
                            Sign in
                        </button>
                    </div>

                    <div class="loginForm">
                        <input
                            id="loginEmailInput"
                            class="loginForm__input"
                            type="text"
                            placeholder="${isNewHere ? "Enter name" : "Enter email or user name"}"
                            value="${escapeHtml(emailValue)}"
                        />

                        ${
                            isSignIn
                                ? `
                                    <input
                                        id="loginPasswordInput"
                                        class="loginForm__input"
                                        type="password"
                                        placeholder="Enter password"
                                        value="${escapeHtml(passwordValue)}"
                                    />
                                `
                                : ""
                        }
                    </div>
                </div>

                <div class="formNavigation formNavigation--login">
                    ${
                        hasBackButton
                            ? `
                                <button
                                    class="nav-back-button"
                                    type="button"
                                    data-go-to-page="${pageIndex - 1}"
                                >
                                    ←
                                </button>
                            `
                            : ""
                    }

                    <button
                        class="${continueButtonClass}"
                        type="button"
                        data-action="next"
                        data-page-index="${pageIndex}"
                        data-disabled="${canContinue ? "false" : "true"}"
                    >
                        Continue
                    </button>
                </div>
            </div>
        `;
    }

    return `
        <div
            class="fillerPage fillerPage--hero"
            style="${pageConfig.backgroundImage ? `background-image: url('${pageConfig.backgroundImage}');` : ""}"
        >
            ${renderQuestionProgressBar(pageIndex)}

            <div class="fillerPage__heroContent">
                <div class="fillerPage__heroTextBlock">
                    <div class="fillerPage__heroTitleRow">
                        <h1 class="fillerPage__heroTitle">${pageConfig.title || ""}</h1>
                    </div>

                    <p class="fillerPage__heroSubtitle">${pageConfig.subtitle || ""}</p>

                    ${
                        pageConfig.description
                            ? `<p class="fillerPage__heroDescription">${pageConfig.description}</p>`
                            : ""
                    }
                </div>

                ${
                    pageConfig.image
                        ? `
                            <div class="fillerPage__heroImageWrap">
                                <img
                                    class="fillerPage__heroImage"
                                    src="${pageConfig.image}"
                                    alt="${pageConfig.title || "Filler image"}"
                                />
                            </div>
                        `
                        : ""
                }
            </div>

            <div class="formNavigation formNavigation--hero">
                ${
                    hasBackButton
                        ? `
                            <button
                                class="nav-back-button"
                                type="button"
                                data-go-to-page="${pageIndex - 1}"
                            >
                                ←
                            </button>
                        `
                        : ""
                }

                <button
                    class="continue-button continue-button--active"
                    type="button"
                    data-action="next"
                    data-page-index="${pageIndex}"
                    data-disabled="false"
                >
                    Continue
                </button>
            </div>
        </div>
    `;
}

function renderTextQuestionPage(question, pageIndex, isLastQuestion, pageConfig) {
    const hasSelection = question.selectedOptions.length > 0;
    const buttonClass = hasSelection
        ? "continue-button continue-button--active"
        : "continue-button continue-button--inactive";
    const buttonText = isLastQuestion ? "Submit" : "Continue";
    const buttonAction = isLastQuestion ? "submit" : "next";
    const hasExplanation = question.explanationLabel && question.explanationText;
    
    return `
        <div
            class="textQuestion"
            data-question-id="${question.id}"
            style="${pageConfig && pageConfig.backgroundImage ? `background-image: url('${pageConfig.backgroundImage}');` : ""}"
        >
            <div class="textQuestion__contentBox">
                 ${renderQuestionProgressBar(pageIndex)}
                <h2 class="textQuestion__title">${question.title}</h2>

                ${hasExplanation ? renderDropdownInfo(question) : ""}

                <div class="textQuestion__helperRow">
                    <span class="textQuestion__helperText">${question.helperText}</span>
                    ${renderQuestionTags(question)}
                </div>

                <div class="textQuestion__options ${question.id === "question12" ? "textQuestion__options--scentCards" : ""}">
                    ${question.options.map((option) => {
                        const isSelected = question.selectedOptions.includes(option.id);
                        const maxReached = question.selectedOptions.length >= question.maxSelections;
                        const isLocked = maxReached && !isSelected;
                        const isScentCard = question.id === "question12";

                        return `
                            <button
                                class="toggle-button textQuestion__optionButton ${isScentCard ? "textQuestion__optionButton--scentCard" : ""}"
                                type="button"
                                data-question-id="${question.id}"
                                data-option-id="${option.id}"
                                data-selected="${isSelected}"
                                data-locked="${isLocked}"
                                aria-pressed="${isSelected}"
                                ${isLocked ? "disabled" : ""}
                            >
                                <span class="toggle-button__content ${isScentCard ? "toggle-button__content--scentCard" : ""}">
                                    ${
                                        isScentCard
                                            ? `
                                                <span class="textQuestion__optionTitle">${option.title}</span>
                                                <span class="textQuestion__optionSubtitle">${option.subtitle}</span>
                                            `
                                            : `
                                                <span class="toggle-button__primary-text">${option.text}</span>
                                            `
                                    }
                                </span>
                            </button>
                        `;
                    }).join("")}
                </div>

            <div class="formNavigation formNavigation--textQuestion">
                <button
                    class="nav-back-button"
                    type="button"
                    data-go-to-page="${pageIndex - 1}"
                >
                    ←
                </button>

                <button
                    class="${buttonClass}"
                    type="button"
                    data-action="${buttonAction}"
                    data-page-index="${pageIndex}"
                    data-disabled="${hasSelection ? "false" : "true"}"
                >
                    ${buttonText}
                </button>
            </div>
        </div>
    `;
}

function renderQuestionTags(question) {
    let html = "";

    for (let i = 0; i < question.maxSelections; i++) {
        const selectedId = question.selectedOptions[i];
        const selectedOption = question.options.find((option) => option.id === selectedId);

        if (selectedOption) {
            html += `
                <button
                    class="tag"
                    type="button"
                    data-selected="true"
                    data-question-id="${question.id}"
                    data-option-id="${selectedOption.id}"
                >
                    <span class="tag__text">${selectedOption.title || selectedOption.text}</span>
                    <span class="tag__close" aria-hidden="true">×</span>
                </button>
            `;
        } else {
            html += `
                <button
                    class="tag"
                    type="button"
                    data-selected="false"
                    disabled
                >
                    <span class="tag__text">+ ${ordinalLabel(i + 1)}</span>
                    <span class="tag__close" aria-hidden="true">×</span>
                </button>
            `;
        }
    }

    return html;
}

function renderImageQuestionPage(question, pageIndex, isLastQuestion, pageConfig) {
    const hasSelection = question.selectedOption !== null;
    const buttonClass = hasSelection
        ? "continue-button continue-button--active"
        : "continue-button continue-button--inactive";
    const buttonText = isLastQuestion ? "Submit" : "Continue";
    const buttonAction = isLastQuestion ? "submit" : "next";
    const hasExplanation = question.explanationLabel && question.explanationText;

    return `
        <div
            class="imageQuestion"
            data-question-id="${question.id}"
            style="${pageConfig && pageConfig.backgroundImage ? `background-image: url('${pageConfig.backgroundImage}');` : ""}"
        >
            <div class="imageQuestion__contentBox">
                 ${renderQuestionProgressBar(pageIndex)}
                <h2 class="imageQuestion__title">${question.title}</h2>

                ${hasExplanation ? renderDropdownInfo(question) : ""}

                <div class="imageQuestion__options">
                    ${question.options.map((option) => {
                        const isSelected = question.selectedOption === option.id;

                        return `
                            <button
                                class="responseCard imageQuestion__card"
                                type="button"
                                data-question-id="${question.id}"
                                data-option-id="${option.id}"
                                data-selected="${isSelected}"
                                aria-pressed="${isSelected}"
                            >
                                <div class="responseCard__imageArea">
                                    <img
                                        class="responseCard__image"
                                        src="${option.image}"
                                        alt="${option.text}"
                                    />
                                </div>

                                <div class="responseCard__textArea">
                                    <span class="responseCard__text">${option.text}</span>
                                </div>
                            </button>
                        `;
                    }).join("")}
                </div>
            </div>

            <div class="formNavigation formNavigation--imageQuestion">
                <button
                    class="nav-back-button"
                    type="button"
                    data-go-to-page="${pageIndex - 1}"
                >
                    ←
                </button>

                <button
                    class="${buttonClass}"
                    type="button"
                    data-action="${buttonAction}"
                    data-page-index="${pageIndex}"
                    data-disabled="${hasSelection ? "false" : "true"}"
                >
                    ${buttonText}
                </button>
            </div>
        </div>
    `;
}

function renderVideoQuestionPage(question, pageIndex, isLastQuestion, pageConfig) {
    const hasSelection = question.selectedOption !== null;
    const buttonClass = hasSelection
        ? "continue-button continue-button--active"
        : "continue-button continue-button--inactive";
    const buttonText = isLastQuestion ? "Submit" : "Continue";
    const buttonAction = isLastQuestion ? "submit" : "next";
    const hasExplanation = question.explanationLabel && question.explanationText;

    return `
        <div
            class="videoQuestion"
            data-question-id="${question.id}"
            style="${pageConfig && pageConfig.backgroundImage ? `background-image: url('${pageConfig.backgroundImage}');` : ""}"
        >
            <div class="videoQuestion__contentBox">
                 ${renderQuestionProgressBar(pageIndex)}
                <div class="videoQuestion__videoArea">
                    <video class="videoQuestion__video" autoplay loop playsinline>
                        <source src="${question.video}" type="video/mp4">
                    </video>
                </div>

                <h2 class="videoQuestion__title">${question.title}</h2>

                ${hasExplanation ? renderDropdownInfo(question) : ""}

                <div class="videoQuestion__options">
                    ${question.options.map((option) => {
                        const isSelected = question.selectedOption === option.id;

                        return `
                            <button
                                class="toggle-button videoQuestion__optionButton"
                                type="button"
                                data-question-group="video"
                                data-question-id="${question.id}"
                                data-option-id="${option.id}"
                                data-selected="${isSelected}"
                                aria-pressed="${isSelected}"
                            >
                                <span class="videoQuestion__optionText">${option.text}</span>
                            </button>
                        `;
                    }).join("")}
                </div>
            </div>

            <div class="formNavigation formNavigation--videoQuestion">
                <button
                    class="nav-back-button"
                    type="button"
                    data-go-to-page="${pageIndex - 1}"
                >
                    ←
                </button>

                <button
                    class="${buttonClass}"
                    type="button"
                    data-action="${buttonAction}"
                    data-page-index="${pageIndex}"
                    data-disabled="${hasSelection ? "false" : "true"}"
                >
                    ${buttonText}
                </button>
            </div>
        </div>
    `;
}

function renderDropdownInfo(question) {
    const isOpen = appState.dropdownOpenState[question.id] === true;

    return `
        <div class="dropdownInfo" data-open="${isOpen}">
            <button
                class="dropdownInfo__trigger"
                type="button"
                data-dropdown-question-id="${question.id}"
            >
                <span>${question.explanationLabel}</span>
                <span class="dropdownInfo__chevron"></span>
            </button>

            <div class="dropdownInfo__content">
                ${question.explanationText}
            </div>
        </div>
    `;
}

function renderResultsPage() {
    return `
        <div class="resultPage">
            <h2 class="resultPage__title">Collected Responses</h2>
            <div class="resultPage__box">
                <pre>${escapeHtml(JSON.stringify(appState.submissionResult, null, 2))}</pre>
            </div>
        </div>
    `;
}

function attachEvents() {
    const startQuizButton = document.getElementById("startQuizButton");
    
    if (startQuizButton) {
        startQuizButton.addEventListener("click", function () {
            goToPage(getNextPageIndex(appState.currentPage));
        });
    }

    const saveProfileButton = document.getElementById("saveProfileButton");

    if (saveProfileButton) {
        saveProfileButton.addEventListener("click", function () {
            const createProfilePageIndex = pages.findIndex((page) => page.type === "createProfile");

            if (createProfilePageIndex === -1) {
                return;
            }

            goToPage(createProfilePageIndex);
        });
    }

    const emailCaptureInput = document.getElementById("emailCaptureInput");

    if (emailCaptureInput) {
        emailCaptureInput.addEventListener("input", function () {
            appState.emailCapture.email = emailCaptureInput.value;
        });
    }

    const loginModeButtons = document.querySelectorAll("[data-login-mode]");

    loginModeButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const nextMode = button.dataset.loginMode;

            if (!nextMode || appState.login.mode === nextMode) {
                return;
            }

            appState.login.mode = nextMode;

            if (nextMode === "new") {
                appState.login.password = "";
            }

            renderApp();
        });
    });

    const loginEmailInput = document.getElementById("loginEmailInput");

    if (loginEmailInput) {
        loginEmailInput.addEventListener("input", function () {
            appState.login.email = loginEmailInput.value;

            if (appState.login.mode === "sign-in") {
                renderApp();
            }
        });
    }

    const loginPasswordInput = document.getElementById("loginPasswordInput");

    if (loginPasswordInput) {
        loginPasswordInput.addEventListener("input", function () {
            appState.login.password = loginPasswordInput.value;
            renderApp();
        });
    }

    const optionButtons = document.querySelectorAll(".toggle-button");

    optionButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const questionId = button.dataset.questionId;
            const optionId = button.dataset.optionId;
            const questionGroup = button.dataset.questionGroup;

            if (questionGroup === "single-select-text") {
                const question = appState.singleSelectTextQuestions.find((item) => item.id === questionId);

                if (!question) {
                    return;
                }

                question.selectedOption = optionId;
                renderApp();
                return;
            }

            if (questionGroup === "video") {
                const question = appState.videoQuestions.find((item) => item.id === questionId);

                if (!question) {
                    return;
                }

                question.selectedOption = optionId;

                const videoOptionButtons = document.querySelectorAll(
                    `.videoQuestion [data-question-group="video"][data-question-id="${questionId}"]`
                );

                videoOptionButtons.forEach((optionButton) => {
                    const isSelected = optionButton.dataset.optionId === optionId;

                    optionButton.dataset.selected = isSelected ? "true" : "false";
                    optionButton.setAttribute("aria-pressed", isSelected ? "true" : "false");
                });

                const continueButton = document.querySelector(".formNavigation--videoQuestion .continue-button, .videoQuestion .continue-button");

                if (continueButton) {
                    continueButton.classList.remove("continue-button--inactive");
                    continueButton.classList.add("continue-button--active");
                    continueButton.dataset.disabled = "false";
                }

                return;
            }

            const question = appState.textQuestions.find((item) => item.id === questionId);

            if (!question) {
                return;
            }

            const selectedIndex = question.selectedOptions.indexOf(optionId);

            if (selectedIndex > -1) {
                question.selectedOptions.splice(selectedIndex, 1);
            } else {
                if (question.selectedOptions.length >= question.maxSelections) {
                    return;
                }

                question.selectedOptions.push(optionId);
            }

            renderApp();
        });
    });

    const finalResultsAccordionButtons = document.querySelectorAll("[data-final-results-accordion]");

    finalResultsAccordionButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const accordionId = button.dataset.finalResultsAccordion;
            const accordionItems = document.querySelectorAll(".finalResultsPage__accordionItem");
            const currentlyOpen = appState.finalResults.openAccordion;
            const nextOpenAccordion = currentlyOpen === accordionId ? null : accordionId;

            appState.finalResults.openAccordion = nextOpenAccordion;

            accordionItems.forEach((item) => {
                const itemButton = item.querySelector("[data-final-results-accordion]");
                if (!itemButton) {
                    return;
                }

                const itemAccordionId = itemButton.dataset.finalResultsAccordion;
                const isOpen = itemAccordionId === nextOpenAccordion;

                item.dataset.open = isOpen ? "true" : "false";

                const icon = item.querySelector(".finalResultsPage__accordionIcon");
                if (icon) {
                    icon.dataset.open = isOpen ? "true" : "false";
                }
            });
        });
    });

    const selectedTags = document.querySelectorAll('.tag[data-selected="true"]');

    selectedTags.forEach((tag) => {
        tag.addEventListener("click", function () {
            const questionId = tag.dataset.questionId;
            const optionId = tag.dataset.optionId;
            const question = appState.textQuestions.find((item) => item.id === questionId);

            if (!question) {
                return;
            }

            const selectedIndex = question.selectedOptions.indexOf(optionId);

            if (selectedIndex > -1) {
                question.selectedOptions.splice(selectedIndex, 1);
            }

            renderApp();
        });
    });

    const imageCards = document.querySelectorAll(".responseCard");

    imageCards.forEach((card) => {
        card.addEventListener("click", function () {
            const questionId = card.dataset.questionId;
            const optionId = card.dataset.optionId;
            const question = appState.imageQuestions.find((item) => item.id === questionId);

            if (!question) {
                return;
            }

            question.selectedOption = optionId;
            renderApp();
        });
    });

    const dropdownButtons = document.querySelectorAll("[data-dropdown-question-id]");

    dropdownButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const questionId = button.dataset.dropdownQuestionId;
            const dropdownInfo = button.closest(".dropdownInfo");

            if (!dropdownInfo) {
                return;
            }

            const isOpen = appState.dropdownOpenState[questionId] === true;
            const nextOpenState = !isOpen;

            appState.dropdownOpenState[questionId] = nextOpenState;
            dropdownInfo.dataset.open = nextOpenState ? "true" : "false";
        });
    });

    const backButtons = document.querySelectorAll("[data-go-to-page]");

    backButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const targetPage = Number(button.dataset.goToPage);

            if (targetPage < 0) {
                return;
            }

            goToPage(targetPage);
        });
    });

    const continueButtons = document.querySelectorAll(".continue-button");

    continueButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const isDisabled = button.dataset.disabled === "true";

            if (isDisabled) {
                return;
            }

            const action = button.dataset.action;
            const pageIndex = Number(button.dataset.pageIndex);

            if (action === "next") {
                goToPage(getNextPageIndex(pageIndex));
            }

            if (action === "submit") {
                submitQuestionnaireResponses();
            }
        });
    });
}

function isQuestionPage(pageConfig) {
    if (!pageConfig) {
        return false;
    }

    return (
        pageConfig.type === "singleSelectTextQuestion" ||
        pageConfig.type === "textQuestion" ||
        pageConfig.type === "imageQuestion" ||
        pageConfig.type === "videoQuestion"
    );
}

function isLastQuestionBeforeResults(pageIndex) {
    const currentPageConfig = pages[pageIndex];

    if (!isQuestionPage(currentPageConfig)) {
        return false;
    }

    for (let i = pageIndex + 1; i < pages.length; i++) {
        if (isQuestionPage(pages[i])) {
            return false;
        }

        if (pages[i].type === "loading") {
            return true;
        }
    }

    return false;
}

function getNextPageIndex(currentIndex) {
    const nextIndex = currentIndex + 1;

    if (nextIndex >= pages.length) {
        return currentIndex;
    }

    return nextIndex;
}

function getLoadingPageIndex() {
    return pages.findIndex((page) => page.type === "loading");
}

function ordinalLabel(number) {
    if (number === 1) return "1st";
    if (number === 2) return "2nd";
    if (number === 3) return "3rd";
    return `${number}th`;
}

function escapeHtml(text) {
    return text
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

async function submitQuestionnaireResponses() {
    const payload = buildSubmissionPayload();

    try {
        const response = await fetch("/submit-questionnaire", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        const responseText = await response.text();
        console.log("Raw server response:", responseText);

        if (!response.ok) {
            throw new Error(`Server error ${response.status}: ${responseText}`);
        }

        const result = JSON.parse(responseText);

        appState.submissionResult = result;

        const loadingPageIndex = getLoadingPageIndex();

        if (loadingPageIndex === -1) {
            throw new Error("Loading page not found in pages.js");
        }

        goToPage(loadingPageIndex);

    } catch (error) {
        console.error("Submission failed:", error);
        alert("Failed to submit questionnaire. Check console and Flask terminal.");
    }
}

function buildSubmissionPayload() {
    const singleSelectTextResponses = appState.singleSelectTextQuestions.map((question) => {
        const matchedOption = question.options.find((option) => option.id === question.selectedOption);

        return {
            questionId: question.id,
            title: question.title,
            selectedOption: matchedOption ? matchedOption.text : null
        };
    });

    const textResponses = appState.textQuestions.map((question) => {
        return {
            questionId: question.id,
            title: question.title,
            selectedOptions: question.selectedOptions.map((selectedId) => {
                const matchedOption = question.options.find((option) => option.id === selectedId);
                return matchedOption ? matchedOption.text : selectedId;
            })
        };
    });

    const imageResponses = appState.imageQuestions.map((question) => {
        const matchedOption = question.options.find((option) => option.id === question.selectedOption);

        return {
            questionId: question.id,
            title: question.title,
            selectedOption: matchedOption ? matchedOption.text : null
        };
    });

    const videoResponses = appState.videoQuestions.map((question) => {
        const matchedOption = question.options.find((option) => option.id === question.selectedOption);

        return {
            questionId: question.id,
            title: question.title,
            selectedOption: matchedOption ? matchedOption.text : null
        };
    });

    return {
        singleSelectTextResponses,
        textResponses,
        imageResponses,
        videoResponses
    };
}

function renderSingleSelectTextQuestionPage(question, pageIndex, isLastQuestion, pageConfig) {
    const hasSelection = question.selectedOption !== null;
    const buttonClass = hasSelection
        ? "continue-button continue-button--active"
        : "continue-button continue-button--inactive";
    const buttonText = isLastQuestion ? "Submit" : "Continue";
    const buttonAction = isLastQuestion ? "submit" : "next";
    const hasExplanation = question.explanationLabel && question.explanationText;
    const isSingleColumnQuestion =
    question.id === "question5" || question.id === "question6";

    return `
        <div
            class="singleSelectTextQuestion"
            data-question-id="${question.id}"
            data-layout="${isSingleColumnQuestion ? "single-column" : "two-column"}"
            style="${pageConfig && pageConfig.backgroundImage ? `background-image: url('${pageConfig.backgroundImage}');` : ""}"
        >
            <div class="singleSelectTextQuestion__contentBox">
                 ${renderQuestionProgressBar(pageIndex)}
                <h2 class="singleSelectTextQuestion__title">${question.title}</h2>

                ${hasExplanation ? renderDropdownInfo(question) : ""}

                <div class="singleSelectTextQuestion__options">
                    ${question.options.map((option) => {
                        const isSelected = question.selectedOption === option.id;

                        return `
                            <button
                                class="toggle-button singleSelectTextQuestion__optionButton"
                                type="button"
                                data-question-group="single-select-text"
                                data-question-id="${question.id}"
                                data-option-id="${option.id}"
                                data-selected="${isSelected}"
                                aria-pressed="${isSelected}"
                            >
                                <span class="singleSelectTextQuestion__optionText">${option.text}</span>
                            </button>
                        `;
                    }).join("")}
                </div>
            </div>

            <div class="formNavigation formNavigation--singleSelectTextQuestion">
                <button
                    class="nav-back-button"
                    type="button"
                    data-go-to-page="${pageIndex - 1}"
                >
                    ←
                </button>

                <button
                    class="${buttonClass}"
                    type="button"
                    data-action="${buttonAction}"
                    data-page-index="${pageIndex}"
                    data-disabled="${hasSelection ? "false" : "true"}"
                >
                    ${buttonText}
                </button>
            </div>
        </div>
    `;
}

function renderLoadingPage(pageIndex) {
    return `
        <div class="loadingPage">
            <video class="loadingPage__backgroundVideo" autoplay loop playsinline>
                <source src="/static/videos/analyze.mp4" type="video/mp4">
            </video>

            <div class="loadingPage__overlay"></div>

            <div class="loadingPage__content">
                <h2 class="loadingPage__title">Analyzing your scent profile...</h2>
                <div class="loadingPage__label">Analyzing your scent preferences</div>
            </div>
        </div>
    `;
}

function renderEmailCapturePage(pageIndex) {
    const emailValue = appState.emailCapture.email || "";

    return `
        <div class="emailCapturePage">
            <div class="emailCapturePage__card">
                <h2 class="emailCapturePage__title">Reveal my Scent Profile</h2>

                <p class="emailCapturePage__subtitle">
                    Enter your email to get a copy. You can create the account later if needed.
                </p>

                <input
                    id="emailCaptureInput"
                    class="emailCapturePage__input"
                    type="text"
                    placeholder="Enter email or user name"
                    value="${escapeHtml(emailValue)}"
                />

                <div class="formNavigation">
                    <button
                        class="nav-back-button"
                        type="button"
                        data-go-to-page="${pageIndex - 1}"
                    >
                        ←
                    </button>

                    <button
                        class="continue-button continue-button--active"
                        type="button"
                        data-action="next"
                        data-page-index="${pageIndex}"
                        data-disabled="false"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    `;
}

function renderFinalResultsPage(pageConfig) {
    const openAccordion = appState.finalResults.openAccordion;

    const accordions = pageConfig.accordions || [];
    const moodboardImages = pageConfig.moodboardImages || [];
    const recommendations = pageConfig.recommendations || [];

    return `
        <div
            class="finalResultsPage"
            style="${pageConfig.backgroundImage ? `background-image: url('${pageConfig.backgroundImage}');` : ""}"
        >
            <div class="finalResultsPage__contentBox">
                <div class="finalResultsPage__topSection">
                    <div class="finalResultsPage__leftColumn">
                        <div class="finalResultsPage__eyebrow">
                            ${pageConfig.eyebrow || "Your fragrance Identity"}
                        </div>

                        <h1 class="finalResultsPage__title">
                            ${pageConfig.profileTitle || "Radiant Charmer"}
                        </h1>

                        <div class="finalResultsPage__description">
                            ${(pageConfig.descriptionParagraphs || []).map((paragraph) => `
                                <p>${paragraph}</p>
                            `).join("")}
                        </div>

                        <div class="finalResultsPage__accordions">
                            ${accordions.map((accordion, index) => {
                                const isOpen = openAccordion === accordion.id;
                                const number = String(index + 1).padStart(2, "0");

                                return `
                                    <div class="finalResultsPage__accordionItem" data-open="${isOpen}">
                                        <button
                                            class="finalResultsPage__accordionTrigger"
                                            type="button"
                                            data-final-results-accordion="${accordion.id}"
                                        >
                                            <span class="finalResultsPage__accordionLabel">
                                                ${number}   ${accordion.title}
                                            </span>
                                            <span class="finalResultsPage__accordionIcon" data-open="${isOpen}"></span>
                                        </button>

                                        <div class="finalResultsPage__accordionContent">
                                            ${(accordion.paragraphs || []).map((paragraph) => `
                                                <p>${paragraph}</p>
                                            `).join("")}
                                        </div>
                                    </div>
                                `;
                            }).join("")}
                        </div>
                    </div>

                    <div class="finalResultsPage__rightColumn">
                        <div class="finalResultsPage__moodboard">
                            ${moodboardImages[0] ? `
                                <div class="finalResultsPage__moodboardItem finalResultsPage__moodboardItem--single">
                                    <img
                                        src="${moodboardImages[0]}"
                                        alt="Moodboard image"
                                        class="finalResultsPage__moodboardImage"
                                    />
                                </div>
                            ` : ""}
                        </div>

                        <button
                            class="quiz-button quiz-button--primary finalResultsPage__saveButton"
                            type="button"
                            id="saveProfileButton"
                        >
                            Save my profile
                        </button>
                    </div>
                </div>

                <div class="finalResultsPage__bottomSection">
                    <h2 class="finalResultsPage__recommendationsTitle">Recommendations</h2>

                    <div class="finalResultsPage__recommendations">
                        ${recommendations.map((recommendation) => `
                            <div class="finalResultsPage__recommendationCard">
                                <div class="finalResultsPage__recommendationImageWrap">
                                    <img
                                        src="${recommendation.image}"
                                        alt="${recommendation.name}"
                                        class="finalResultsPage__recommendationImage"
                                    />
                                </div>

                                <div class="finalResultsPage__recommendationLabel">
                                    ${recommendation.label}
                                </div>

                                <div class="finalResultsPage__recommendationName">
                                    ${recommendation.brand}<br>
                                    ${recommendation.name}
                                </div>

                                <div class="finalResultsPage__recommendationDescription">
                                    ${recommendation.description}
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderRecommendationCard(label, title, description) {
    return `
        <div class="recommendationCard">
            <div class="recommendationCard__imageWrap">
                <img
                    class="recommendationCard__image"
                    src="/static/images/text.png"
                    alt="${title}"
                />
            </div>

            <div class="recommendationCard__label">${label}</div>
            <div class="recommendationCard__title">${title}</div>
            <div class="recommendationCard__description">${description}</div>
        </div>
    `;
}

function renderCreateProfilePage(pageConfig, pageIndex) {
    return `
        <div
            class="createProfilePage"
            style="${pageConfig.backgroundImage ? `background-image: url('${pageConfig.backgroundImage}');` : ""}"
        >
            <div class="createProfilePage__contentBox">
                <h2 class="createProfilePage__title">${pageConfig.title || "Create My Profile"}</h2>
                <p class="createProfilePage__subtitle">${pageConfig.subtitle || ""}</p>

                <div class="createProfilePage__form">
                    <input
                        id="createProfileEmailInput"
                        class="createProfilePage__input"
                        type="text"
                        placeholder="Enter email or user name"
                    />

                    <input
                        id="createProfilePasswordInput"
                        class="createProfilePage__input"
                        type="password"
                        placeholder="Enter password"
                    />
                </div>

                <button
                    class="quiz-button quiz-button--primary createProfilePage__saveButton"
                    type="button"
                    id="createProfileSaveButton"
                >
                    Save my profile
                </button>
            </div>
        </div>
    `;
}

renderApp();
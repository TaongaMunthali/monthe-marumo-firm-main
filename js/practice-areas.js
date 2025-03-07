const practiceAreas = [
    {
        imgSrc: "/assets/img/icons/property.png",
        altText: "Property Law",
        title: "Property",
        description: "We provide comprehensive legal services for property transactions, development, finance, and dispute resolution, ensuring compliance with regulations for real estate investments.",
        link: "/practiceareas/property.html"
    },
    {
        imgSrc: "/assets/img/icons/litigation.png",
        altText: "Litigation Law",
        title: "Litigation",
        description: "We offer expert legal support in various fields, including disputes, personal injury, and insolvency, with a focus on resolving conflicts and protecting rights.",
        link: "/practiceareas/litigation.html"
    },
    {
        imgSrc: "/assets/img/icons/tax-calculate.png",
        altText: "Tax",
        title: "Tax",
        description: "We specialize in cross-border transactions, tax structuring, and compliance, offering expert representation in tax litigation, objections, and appeals.",
        link: "/practiceareas/tax.html"
    },
    {
        imgSrc: "/assets/img/icons/trophy.png",
        altText: "Competition Law",
        title: "Competition",
        description: "Our firm offers expert competition law services, including compliance, merger approvals, and tailored training for senior management across key industries.",
        link: "/practiceareas/competition.html"
    },
    {
        imgSrc: "/assets/img/icons/construction-site.png",
        altText: "Construction Law",
        title: "Construction",
        description: "Monthe Marumo & Co. offers expert legal services in the construction industry, including contract drafting, dispute resolution, and payment recovery.",
        link: "/practiceareas/construction.html"
    },
    {
        imgSrc: "/assets/img/icons/document.png",
        altText: "International Trade",
        title: "International Trade",
        description: "Our firm is a leader in International Trade, offering expert advice on trade remedies, legislation, tariff issues, duty disputes, procurement, and import/export controls.",
        link: "/practiceareas/international-trade.html"
    },
    {
        imgSrc: "/assets/img/icons/document.png",
        altText: "Pension Funds",
        title: "Pension Funds",
        description: "Our pension funds team offers expert advice on all aspects of pension law, including disputes, governance, compliance, and pension scheme mergers, while assisting with structuring, audits, and legal issues in M&A transactions.",
        link: "/practiceareas/pension-funds.html"
    },
    {
        imgSrc: "/assets/img/icons/purchase-order.png",
        altText: "Public Procurement",
        title: "Public Procurement",
        description: "Our Public Procurement Law department offers comprehensive services, including advising on procurement procedures, drafting tender documents, representing clients in procurement disputes, and facilitating public/private partnerships."
    },
    {
        imgSrc: "/assets/img/icons/acquisition.png",
        altText: "Mergers & Acquisitions",
        title: "Mergers & Acquisitions",
        description: "We provide strategic transactional services for corporates, specializing in M&A, restructurings, due diligence, acquisitions, financing, and dispute resolution, along with regulatory and compliance support.",
        link: "/practiceareas/mergers-acquisitions.html"
    },
    {
        imgSrc: "/assets/img/icons/headquarters.png",
        altText: "Company Secretarial Services",
        title: "Company Secretarial Services",
        description: "Our Company Secretarial department offers services including company registration, name reservations, share conversions, annual returns, director training, and maintaining statutory records.",
        link: "/practiceareas/company-secretarial.html"
    },
    {
        imgSrc: "/assets/img/icons/restructuring.png",
        altText: "Insolvency & Restructuring",
        title: "Insolvency & Restructuring",
        description: "We have expertise in financial institutions, energy, infrastructure, mining, transport, and technology, specializing in asset tracing, debt restructuring, distressed M&A, equity capital raising, and formal insolvency.",
        link: "/practiceareas/insolvency-restructuring.html"
    },
    {
        imgSrc: "/assets/img/icons/job-opportunities.png" ,
        altText: "Employment Law & Industrial Relations",
        title: "Employment Law & Industrial Relations",
        description: "Our Employment Law and Industrial Relations department assists companies, unions, and employees with labor legislation, including dismissal disputes, collective bargaining, employment agreements, and related litigation.",
        link: "/practiceareas/employment-law.html"
    }
];

// Function to create a practice card
function createPracticeCard(practice) {
    return `
        <div class="practice-card">
            <img src="${practice.imgSrc}" alt="${practice.altText}">
            <h4>${practice.title}</h4>
            <p>${practice.description}</p>
            <a href="${practice.link}" class="nav-btn" id="nextBtn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
                </svg>
            </a>
        </div>
    `;
}

    // Function to render all practice cards
    function renderPracticeCards() {
        const practiceAreasList = document.getElementById('practiceAreasList');
        practiceAreasList.innerHTML = practiceAreas.map(createPracticeCard).join('');

        // GSAP ScrollTrigger animation for the cards
        gsap.utils.toArray(".practice-card").forEach(card => {
            gsap.from(card, {
                opacity: 0,
                y: 100, // Start from below the viewport
                duration: 1.5, // Make the animation slower for smoothness
                ease: "power3.out", // Smooth easing for the animation
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%", // Start the animation when the card is 80% into the viewport
                    end: "top 30%", // End the animation when the card reaches 30% into the viewport
                    scrub: true, // Smooth scroll animation
                    toggleActions: "play reverse play reverse", // Allow reverse animation when scrolling up
                }
            });
        });
    }

    // Call the function to render the practice cards
    renderPracticeCards();

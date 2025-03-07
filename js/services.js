
// Data Object for Services
const services = [
    {
        number: '01',
        title: 'Property',
        content: `At Monthe Marumo & Co., we offer comprehensive property law services covering both commercial and residential sectors in Botswana. Our expertise includes advising on and drafting leases, handling commercial and residential developments, township establishments, and sectional title developments. We manage conventional property transfers as well as transfers related to liquidations, auctions, court orders, divorces, donations, deceased estates, and insolvent estates. Our team provides financial planning and structuring for share block and timeshare schemes, along with guidance on property transaction structuring and project financing. We also assist with registration and cancellation of bonds, servitudes, and property subdivisions or consolidations. Our services extend to real estate development, dispute resolution, environmental, safety, and planning issues, and investment advisory, ensuring all aspects of property law are effectively managed and protected.`
    },
    {
        number: '02',
        title: 'Litigation',
        content: `Monthe Marumo & Co. provides comprehensive litigation services in areas including administrative, banking, building and construction, competition, and constitutional law. We handle disputes in contractual, corporate, and commercial matters, family law, insolvency, insurance, and labor law. Our expertise also extends to personal injury claims, product liability, professional negligence, and restraints of trade, ensuring robust representation and enforcement of rights across a wide range of legal issues.`
    },
    {
        number: '03',
        title: 'Tax',
        content: `We specialize in cross-border transactions and investment structures, offering expert advice on income tax, capital gains tax, estate duty, VAT, and securities transfer tax. Our services also include tax litigation, handling objections and appeals, and assisting with the structuring of commercial transactions to ensure tax efficiency and compliance.`
    },
    {
        number: '04',
        title: 'Competition Law',
        content: `Our competition law services provide comprehensive support to businesses navigating the complexities of antitrust regulations. We assist with compliance, including in-house training and competition audits, and handle merger and acquisition approvals before the Competition Authority and Tribunal. Our team also opposes anti-competitive mergers, reviews agreements, and advises on exemptions for prohibited practices. We represent clients in cartel investigations, complaints, and interim relief applications, while delivering tailored training programs to senior management and compliance departments across various industries, including financial institutions, energy, technology, and healthcare.`
    },
    {
        number: '05',
        title: 'Construction',
        content: `Our firm provides expert legal services for the construction industry, including drafting construction contracts and advising on their implementation, such as formal notices and time extensions. We assist with the recovery of amounts due under payment certificates, handle builders’ liens, and support dispute declarations and arbitration. Additionally, we offer litigation services for resolving construction-related disputes.`
    },
    {
        number: '06',
        title: 'International Trade',
        content: `Our firm is a leader in International Trade, offering expert advice on trade remedies, including anti-dumping, countervailing duties, and safeguard investigations. We provide guidance on Botswana’s trade legislation, tariff compliance, excise duty disputes, government procurement negotiations, import/export controls, and market access issues.`
    },
    {
        number: '07',
        title: 'Pension Funds',
        content: `Our pension funds team offers extensive expertise in all aspects of pension law, handling disputes related to fraud, fund surpluses, professional negligence, and regulatory compliance. We advise on structuring and interpreting pension fund rules, conducting legal audits, and evaluating governance. Our services also include supporting trustees, members, and employers in asserting rights, managing liabilities, and ensuring compliance, especially in large M&A transactions. We provide guidance on defined benefit and contribution arrangements, governance, pension scheme mergers, dispute resolution, investment, and acquisitions.`
    },
    {
        number: '08',
        title: 'Public Procurement',
        content: `Our areas of work include:

                High-quality, strategic transactional work for corporates of all sizes.
                Public and private M&A experience.
                Experience in complex structuring, restructuring and disposals.
                Support with employment law and conflict of interest issues.
                Drafting, reviewing and implementing all agreements in respect of mergers, acquisitions and restructurings
                Due diligence investigations
                Management buy-outs
                Privatisations
                Purchases and Sales of Businesses
                Schemes of arrangement
                Take-overs
                The statutory and regulatory environment affecting listed public and other companies
                Acquisition financing
                Litigation
                Merger control
                Public and private M&A.
                Investment fund launches, fund raisings and restructuring
                M&A and corporate transactions for asset managers
                Structured products/derivatives
                Regulatory issues
                Dispute resolution`
    },
    {
        number: '09',
        title: 'Mergers and Acquisitions',
        content: `Our firm provides comprehensive support in mergers and acquisitions, handling high-quality strategic transactions for businesses of all sizes. We have experience in both public and private M&A, complex structuring, restructurings, and disposals. Our services include due diligence, drafting and reviewing agreements, managing employment law issues, and advising on acquisition financing, merger control, and litigation. We also assist with management buy-outs, privatizations, takeovers, and investment fund launches, while addressing regulatory issues and dispute resolution in the M&A process.`
    },
    {
        number: '10',
        title: 'Company Secretarial Services',
        content: `Our Company Secretarial department offers a full range of services, including company name reservations, incorporation, and registration of external companies. We assist with company changes, share conversions, filing annual returns, and entity reinstatements or deregistrations. Our team maintains company registers, handles share allotments and transfers, and ensures compliance with statutory records. We also provide director training and conduct statutory record audits.`
    },
    {
        number: '11',
        title: 'Insolvency and Restructuring',
        content: `We have extensive experience in key industry sectors, including financial institutions, energy, infrastructure, mining, commodities, transport, and technology. Our services cover asset tracing, debt restructuring, distressed M&A, equity capital markets raising, and formal insolvency, providing tailored solutions for businesses facing complex challenges.`
    },
    {
        number: '12',
        title: 'Employment Law and Industrial Relations',
        content: `Our Employment Law and Industrial Relations Department assists companies, unions, and employees with the interpretation and implementation of labor legislation. We specialize in areas including dismissal disputes (individual and collective), collective bargaining, restraints of trade, employment terms and conditions, and the negotiation and drafting of employment and contractor agreements. Our team also handles unlawful competition disputes and litigation related to these matters.`
    },
    // Add more services here
];

// Create Accordion HTML Dynamically
const accordionsList = document.getElementById('accordions-list');

services.forEach(service => {
    const accordionItem = document.createElement('li');
    accordionItem.classList.add('accordions__item');

    accordionItem.innerHTML = `
<button class="accordions__control" aria-expanded="false">
    <span class="accordions__number">${service.number}</span>
    <span class="accordions__title">${service.title}</span>
    <span class="accordions__icon"></span>
</button>
<div class="accordions__content" aria-hidden="true">
    <p>${service.content}</p>
</div>
`;

    accordionsList.appendChild(accordionItem);
});

document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordions__item');

    accordions.forEach(el => {
        el.addEventListener('click', (e) => {
            const self = e.currentTarget;
            const control = self.querySelector('.accordions__control');
            const content = self.querySelector('.accordions__content');

            self.classList.toggle('open');

            if (self.classList.contains('open')) {
                control.setAttribute('aria-expanded', true);
                content.setAttribute('aria-hidden', false);
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                control.setAttribute('aria-expanded', false);
                content.setAttribute('aria-hidden', true);
                content.style.maxHeight = null;
            }
        });
    });
})

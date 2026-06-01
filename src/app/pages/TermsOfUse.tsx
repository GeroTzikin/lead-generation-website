import React from "react";

// ─── Inline styles ────────────────────────────────────────────────────────────
const styles: Record<string, React.CSSProperties> = {
  // Header
  header: {
    background: "#fff",
    padding: "0 40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 70,
    borderBottom: "1px solid #eee",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontWeight: 700,
    fontSize: "1.15rem",
    textDecoration: "none",
    color: "inherit",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: 32,
  },
  navLink: {
    fontSize: "0.93rem",
    color: "#333",
    fontWeight: 500,
    textDecoration: "none",
  },
  btnCta: {
    background: "#1d9bf0",
    color: "#fff",
    fontWeight: 700,
    padding: "10px 22px",
    borderRadius: 6,
    fontSize: "0.93rem",
    textDecoration: "none",
  },

  // Hero
  hero: {
    background: "#0c1c3a",
    color: "#fff",
    textAlign: "center",
    padding: "64px 24px 56px",
  },
  heroTag: {
    fontSize: "0.8rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#1d9bf0",
    marginBottom: 14,
  },
  heroH1: {
    fontSize: "2.4rem",
    fontWeight: 800,
    lineHeight: 1.2,
    margin: 0,
  },
  heroSub: {
    marginTop: 14,
    fontSize: "0.95rem",
    color: "#b0bbd0",
  },

  // Content
  contentWrap: {
    maxWidth: 860,
    margin: "0 auto",
    padding: "56px 24px 80px",
    fontFamily: "'Segoe UI', Arial, sans-serif",
    lineHeight: 1.7,
    color: "#444",
  },
  sectionTitle: {
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "#0c1c3a",
    marginTop: 40,
    marginBottom: 12,
    paddingBottom: 6,
    borderBottom: "2px solid #1d9bf0",
    display: "inline-block",
  },
  p: {
    fontSize: "0.95rem",
    marginBottom: 16,
  },
  ol: {
    paddingLeft: 22,
    marginBottom: 16,
  },
  li: {
    fontSize: "0.93rem",
    marginBottom: 10,
    lineHeight: 1.65,
  },
  link: {
    color: "#1d9bf0",
    textDecoration: "none",
  },

  // Footer
  footer: {
    background: "#0c1c3a",
    color: "#cdd6e8",
    padding: "56px 40px 32px",
  },
  footerGrid: {
    maxWidth: 1100,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
    gap: 40,
  },
  footerBrandText: {
    fontSize: "0.88rem",
    lineHeight: 1.6,
    color: "#9aaabf",
    maxWidth: 220,
    marginTop: 14,
  },
  footerColTitle: {
    fontSize: "0.95rem",
    fontWeight: 700,
    color: "#fff",
    marginBottom: 16,
    marginTop: 0,
  },
  footerLink: {
    display: "block",
    fontSize: "0.88rem",
    color: "#9aaabf",
    marginBottom: 10,
    textDecoration: "none",
  },
  footerBottom: {
    maxWidth: 1100,
    margin: "40px auto 0",
    paddingTop: 24,
    borderTop: "1px solid rgba(255,255,255,0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 24,
    flexWrap: "wrap" as const,
  },
  footerCopy: {
    fontSize: "0.8rem",
    color: "#6e7f96",
    margin: 0,
  },
  footerDisclaimer: {
    maxWidth: 440,
    textAlign: "right" as const,
    fontSize: "0.78rem",
    color: "#6e7f96",
    lineHeight: 1.5,
    margin: 0,
  },
};

// ─── Logo SVG ─────────────────────────────────────────────────────────────────
const LogoIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="8" fill="#0c1c3a" />
    <path
      d="M10 18C10 13.58 13.58 10 18 10C20.5 10 22.75 11.12 24.28 12.9L26.7 10.48C24.56 8.33 21.43 7 18 7C11.92 7 7 11.92 7 18C7 24.08 11.92 29 18 29C21.43 29 24.56 27.67 26.7 25.52L24.28 23.1C22.75 24.88 20.5 26 18 26C13.58 26 10 22.42 10 18Z"
      fill="#1d9bf0"
    />
    <path d="M22 18L18 14V17H13V19H18V22L22 18Z" fill="#1d9bf0" />
  </svg>
);

// ─── Section heading helper ────────────────────────────────────────────────────
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 style={styles.sectionTitle}>{children}</h2>
);

// ─── Component ────────────────────────────────────────────────────────────────
export function TermsOfUse() {
  return (
    <div style={{ fontFamily: "'Segoe UI', Arial, sans-serif", background: "#fff", color: "#1a1a2e" }}>

      {/* ── HEADER ── */}
      <header style={styles.header}>
        <a href="/" style={styles.logoWrap}>
          <LogoIcon />
          <span>
            <span style={{ color: "#1a1a2e" }}>ConvertX </span>
            <span style={{ color: "#1d9bf0" }}>Lead Generation</span>
          </span>
        </a>
        <nav style={styles.nav}>
          <a href="/#personal-loan" style={styles.navLink}>Personal Loan</a>
          <a href="/#car-warranty"  style={styles.navLink}>Car Warranty</a>
          <a href="/#mortgage"      style={styles.navLink}>Mortgage</a>
          <a href="/#home-warranty" style={styles.navLink}>Home Warranty</a>
          <a href="/"               style={styles.btnCta}>Get Started</a>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section style={styles.hero}>
        <p style={styles.heroTag}>Legal</p>
        <h1 style={styles.heroH1}>Terms of Use</h1>
        <p style={styles.heroSub}>Last updated: May 13, 2026</p>
      </section>

      {/* ── CONTENT ── */}
      <div style={styles.contentWrap}>

        <SectionTitle>Agreement to Terms</SectionTitle>
        <p style={styles.p}>
          These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and ConvertX ("Company", "we", "us", or "our"), concerning your access to and use of the convertx.com and portal.convertx.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site"). You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
        </p>
        <p style={styles.p}>
          Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of these Terms of Use, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Terms of Use to stay informed of updates.
        </p>
        <p style={styles.p}>
          The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country.
        </p>
        <p style={styles.p}>
          The Site is not tailored to comply with industry-specific regulations (HIPAA, FISMA, etc.), so if your interactions would be subjected to such laws, you may not use this Site. You may not use the Site in a way that would violate the Gramm-Leach-Bliley Act (GLBA).
        </p>
        <p style={styles.p}>The Site is intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Site.</p>

        <SectionTitle>Intellectual Property Rights</SectionTitle>
        <p style={styles.p}>
          Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights. The Content and the Marks are provided on the Site "AS IS" for your information and personal use only.
        </p>
        <p style={styles.p}>
          Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks.
        </p>

        <SectionTitle>User Representations</SectionTitle>
        <p style={styles.p}>
          By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information; (3) you have the legal capacity and agree to comply with these Terms of Use; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Site through automated or non-human means; (6) you will not use the Site for any illegal or unauthorized purpose; and (7) your use of the Site will not violate any applicable law or regulation.
        </p>

        <SectionTitle>User Registration</SectionTitle>
        <p style={styles.p}>
          You may be required to register with the Site. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
        </p>

        <SectionTitle>Fees and Payment</SectionTitle>
        <p style={styles.p}>We accept the following forms of payment: PayPal</p>
        <p style={styles.p}>
          You may be required to purchase or pay a fee to access some of our services. You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in U.S. dollars.
        </p>
        <p style={styles.p}>
          We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment. We also reserve the right to refuse any order placed through the Site.
        </p>

        <SectionTitle>Free Trial</SectionTitle>
        <p style={styles.p}>
          We offer a 1-day free trial to new users who register with the Site. The account will be charged according to the user's chosen subscription at the end of the free trial.
        </p>

        <SectionTitle>Cancellation</SectionTitle>
        <p style={styles.p}>
          All purchases are non-refundable. You can cancel your subscription at any time by managing your plan in account settings or by contacting{" "}
          <a href="mailto:info@convertx.today" style={styles.link}>info@convertx.today</a>.
          Your cancellation will take effect at the end of the current paid term.
        </p>
        <p style={styles.p}>
          If you are unsatisfied with our services, please email us at{" "}
          <a href="mailto:info@convertx.today" style={styles.link}>info@convertx.today</a>.
          
        </p>

        <SectionTitle>Prohibited Activities</SectionTitle>
        <p style={styles.p}>
          You may not access or use the Site for any purpose other than that for which we make the Site available. As a user of the Site, you agree not to:
        </p>
        <ol style={styles.ol}>
          {[
            "Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.",
            "Engage in unauthorized framing of or linking to the Site.",
            "Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.",
            "Make improper use of our support services or submit false reports of abuse or misconduct.",
            "Use the Site to advertise or offer to sell goods and services.",
            "Circumvent, disable, or otherwise interfere with security-related features of the Site.",
            "Use a buying agent or purchasing agent to make purchases on the Site.",
            "Systematically retrieve data or other content from the Site to create or compile a collection, compilation, database, or directory without written permission from us.",
            "Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.",
            "Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.",
            "Attempt to impersonate another user or person or use the username of another user.",
            "Sell or otherwise transfer your profile.",
            "Use any information obtained from the Site in order to harass, abuse, or harm another person.",
            "Use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise.",
            "Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site.",
            "Attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site.",
            "Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you.",
            "Delete the copyright or other proprietary rights notice from any Content.",
            "Copy or adapt the Site's software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.",
            "Upload or transmit viruses, Trojan horses, or other material that interferes with any party's uninterrupted use and enjoyment of the Site.",
            "Upload or transmit any material that acts as a passive or active information collection or transmission mechanism, including clear GIFs, 1×1 pixels, web bugs, cookies, or similar devices.",
            "Use, launch, develop, or distribute any automated system, including any spider, robot, cheat utility, scraper, or offline reader that accesses the Site.",
            "Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.",
            "Use the Site in a manner inconsistent with any applicable laws or regulations.",
            "Circumvent General Data Protection Regulation (EU) 2016/679 and the California Consumer Privacy Act 2018.",
            "Send Inappropriate Content using ConvertX services. \"Inappropriate Content\" includes unsolicited bulk email (spam), content that violates applicable laws or regulations, harmful or malicious content including hate speech, or content that infringes intellectual property rights.",
            "Transmit Inappropriate Content; interfere with or disrupt the integrity or performance of the services; or access the Cloud Communication Service to build a competitive product or service.",
            "Circumvent FCC, FTC, TCPA, CTIA, or CASL regulations. All North America users must follow the CTIA Messaging Principles and best practices.",
          ].map((item, i) => (
            <li key={i} style={styles.li}>{item}</li>
          ))}
        </ol>

        <SectionTitle>User Generated Contributions</SectionTitle>
        <p style={styles.p}>
          The Site does not offer users the ability to submit or post content generally. When you create or make available any Contributions, you represent and warrant that they: do not infringe any third-party intellectual property rights; are not false, inaccurate, or misleading; are not unsolicited advertising or spam; are not obscene, violent, harassing, or otherwise objectionable; do not violate any applicable law, regulation, or rule; and do not violate the privacy or publicity rights of any third party.
        </p>

        <SectionTitle>Contribution License</SectionTitle>
        <p style={styles.p}>
          You and the Site agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings). By submitting suggestions or other feedback regarding the Site, you agree that we can use and share such feedback for any purpose without compensation to you. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions.
        </p>

        <SectionTitle>Social Media</SectionTitle>
        <p style={styles.p}>
          As part of the functionality of the Site, you may link your account with online accounts you have with third-party service providers ("Third-Party Account"). By granting us access to any Third-Party Accounts, you understand that we may access, make available, and store any content that you have provided to and stored in your Third-Party Account. PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE THIRD-PARTY SERVICE PROVIDERS ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE PROVIDERS.
        </p>

        <SectionTitle>Submissions</SectionTitle>
        <p style={styles.p}>
          Any questions, comments, suggestions, ideas, feedback, or other information regarding the Site ("Submissions") provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
        </p>

        <SectionTitle>U.S. Government Rights</SectionTitle>
        <p style={styles.p}>
          Our services are "commercial items" as defined in Federal Acquisition Regulation ("FAR") 2.101. If our services are acquired by or on behalf of any agency not within the Department of Defense ("DOD"), our services are subject to the terms of these Terms of Use in accordance with FAR 12.212 and FAR 12.211. If acquired by or on behalf of any DOD agency, our services are subject to the terms of these Terms of Use in accordance with DFARS 227.7202-3.
        </p>

        <SectionTitle>Site Management</SectionTitle>
        <p style={styles.p}>
          We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Use; (2) take appropriate legal action against anyone who violates the law or these Terms of Use; (3) refuse, restrict access to, limit the availability of, or disable any of your Contributions; (4) remove from the Site or otherwise disable all files and content that are excessive in size or burdensome to our systems; and (5) otherwise manage the Site in a manner designed to protect our rights and property.
        </p>

        <SectionTitle>Privacy Policy</SectionTitle>
        <p style={styles.p}>
          We care about data privacy and security. By using the Site, you agree to be bound by our Privacy Policy posted on the Site, which is incorporated into these Terms of Use. Please be advised the Site is hosted in the United States. No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
        </p>

        <SectionTitle>Term and Termination</SectionTitle>
        <p style={styles.p}>
          These Terms of Use shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE TO ANY PERSON FOR ANY REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION.
        </p>

        <SectionTitle>Modifications and Interruptions</SectionTitle>
        <p style={styles.p}>
          We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. We cannot guarantee the Site will be available at all times. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.
        </p>

        <SectionTitle>Governing Law</SectionTitle>
        <p style={styles.p}>
          These Terms of Use and your use of the Site are governed by and construed in accordance with the laws of the State of California applicable to agreements made and to be entirely performed within the State of California, without regard to its conflict of law principles.
        </p>

        <SectionTitle>Dispute Resolution</SectionTitle>
        <p style={styles.p}>
          <strong>Informal Negotiations.</strong> The Parties agree to first attempt to negotiate any Dispute informally for at least thirty (30) days before initiating arbitration.
        </p>
        <p style={styles.p}>
          <strong>Binding Arbitration.</strong> Unresolved Disputes will be finally and exclusively resolved by binding arbitration under the Commercial Arbitration Rules of the American Arbitration Association ("AAA"), available at{" "}
          <a href="https://www.adr.org" style={styles.link} target="_blank" rel="noopener noreferrer">www.adr.org</a>.
          Arbitration will take place in Orange County, California. In no event shall any Dispute be commenced more than one (1) year after the cause of action arose.
        </p>
        <p style={styles.p}>
          <strong>Restrictions.</strong> Any arbitration shall be limited to the Dispute between the Parties individually. No arbitration shall be joined with any other proceeding; there is no right or authority for any Dispute to be arbitrated on a class-action basis.
        </p>
        <p style={styles.p}>
          <strong>Exceptions.</strong> The following Disputes are not subject to informal negotiations and binding arbitration: (a) Disputes seeking to enforce or protect intellectual property rights; (b) Disputes related to allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief.
        </p>

        <SectionTitle>Corrections</SectionTitle>
        <p style={styles.p}>
          There may be information on the Site that contains typographical errors, inaccuracies, or omissions. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice.
        </p>

        <SectionTitle>Disclaimer</SectionTitle>
        <p style={styles.p}>
          THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE'S CONTENT AND WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY ERRORS, PERSONAL INJURY OR PROPERTY DAMAGE, UNAUTHORIZED ACCESS TO OUR SECURE SERVERS, OR ANY BUGS, VIRUSES, OR TROJAN HORSES TRANSMITTED THROUGH THE SITE.
        </p>

        <SectionTitle>Limitations of Liability</SectionTitle>
        <p style={styles.p}>
          IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SITE. OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER WILL AT ALL TIMES BE LIMITED TO $199.00 USD.
        </p>

        <SectionTitle>Indemnification</SectionTitle>
        <p style={styles.p}>
          You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of: (1) use of the Site; (2) breach of these Terms of Use; (3) any breach of your representations and warranties; (4) your violation of the rights of a third party; or (5) any overt harmful act toward any other user of the Site.
        </p>

        <SectionTitle>User Data</SectionTitle>
        <p style={styles.p}>
          We will maintain certain data that you transmit to the Site for the purpose of managing the performance of the Site. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site. You agree that we shall have no liability to you for any loss or corruption of any such data.
        </p>

        <SectionTitle>Electronic Communications, Transactions, and Signatures</SectionTitle>
        <p style={styles.p}>
          Visiting the Site, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE.
        </p>

        <SectionTitle>California Users and Residents</SectionTitle>
        <p style={styles.p}>
          If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.
        </p>

        <SectionTitle>Miscellaneous</SectionTitle>
        <p style={styles.p}>
          These Terms of Use and any policies or operating rules posted by us on the Site constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Terms of Use shall not operate as a waiver of such right or provision. These Terms of Use operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. If any provision of these Terms of Use is determined to be unlawful, void, or unenforceable, that provision is deemed severable from these Terms of Use and does not affect the validity and enforceability of any remaining provisions.
        </p>

        <SectionTitle>Customer Responsibilities</SectionTitle>
        <ol start={4} style={styles.ol}>
          <li style={styles.li}>
            Customer is solely and fully responsible for the content of communications sent by or on behalf of the Customer, and shall ensure ongoing compliance with applicable laws and regulations. Customer shall implement adequate measures to prevent the Cloud Communication Service from being used for illegitimate purposes.
          </li>
          <li style={styles.li}>
            Customer shall take all security measures necessary to prevent unauthorized access to Customer's passwords, accounts, or keys; prevent Denial-of-Service attacks; prevent spam and fraudulent traffic; and ensure timely detection of and response to security incidents.
          </li>
          <li style={styles.li}>
            Customer shall conduct regular vulnerability assessments and penetration testing to ensure its implementation of the Cloud Communication Service is secure.
          </li>
          <li style={styles.li}>
            Customer shall inform ConvertX at{" "}
            <a href="mailto:info@convertx.today" style={styles.link}>info@convertx.today</a>{" "}
            within twenty-four (24) hours of becoming aware of any breach or security incident involving the Cloud Communication Service.
          </li>
          <li style={styles.li}>
            Customer shall provide all information promptly and reasonably requested by ConvertX to confirm Customer's compliance with its obligations under this Agreement and applicable laws.
          </li>
          <li style={styles.li}>
            Customer may not use the Cloud Communication Services to perform and/or resell services substantially similar to the Cloud Communication Services without the express prior written consent of ConvertX.
          </li>
          <li style={styles.li}>
            Customer shall comply with all applicable international trade laws, including economic or financial sanctions and trade embargoes imposed by U.S. Governmental Authorities (including OFAC, the U.S. Department of State, and the U.S. Department of Commerce), the United Nations Security Council, and the European Union.
          </li>
        </ol>

      </div>

      {/* ── FOOTER ── */}
      <footer style={styles.footer}>
        <div style={styles.footerGrid}>

          {/* Brand */}
          <div>
            <a href="/" style={{ ...styles.logoWrap, marginBottom: 14, display: "flex" }}>
              <LogoIcon />
              <span>
                <span style={{ color: "#fff" }}>ConvertX </span>
                <span style={{ color: "#1d9bf0" }}>Lead Generation</span>
              </span>
            </a>
            <p style={styles.footerBrandText}>
              Connecting people with the financial solutions they need. Simple, transparent, and fast.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 style={styles.footerColTitle}>Services</h4>
            <a href="/#personal-loan" style={styles.footerLink}>Personal Loan</a>
            <a href="/#car-warranty"  style={styles.footerLink}>Car Warranty</a>
            <a href="/#mortgage"      style={styles.footerLink}>Mortgage</a>
            <a href="/#home-warranty" style={styles.footerLink}>Home Warranty</a>
          </div>

          {/* Company */}
          <div>
            <h4 style={styles.footerColTitle}>Company</h4>
            <a href="/about"        style={styles.footerLink}>About Us</a>
            <a href="/how-it-works" style={styles.footerLink}>How It Works</a>
            <a href="/testimonials" style={styles.footerLink}>Testimonials</a>
            <a href="/contact"      style={styles.footerLink}>Contact</a>
          </div>

          {/* Legal — Terms of Use ONLY (replaces Privacy Policy + Terms of Service) */}
          <div>
            <h4 style={styles.footerColTitle}>Legal</h4>
            <a href="/terms-of-use" style={styles.footerLink}>Terms of Use</a>
            <a href="/cookie-policy" style={styles.footerLink}>Cookie Policy</a>
          </div>

        </div>

        <div style={styles.footerBottom}>
          <p style={styles.footerCopy}>© 2026 ConvertX Lead Generation. All rights reserved.</p>
          <p style={styles.footerDisclaimer}>
            ConvertX Lead Generation is a lead generation platform. We do not provide financial advice.
            All loan and warranty products are subject to lender/provider approval.
          </p>
        </div>
      </footer>

    </div>
  );
}

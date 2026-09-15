// Strategy & Marketing study data. Generated from the course Introduction deck (V. Chiesa, MSc Management Engineering).
const CATEGORIES = ["The Company", "Legal Forms", "Ownership & Evolution", "Value & Objectives", "Governance & ESG"];

const CONCEPTS = [
 {
  "cat": "The Company",
  "title": "What Is a Company",
  "meaning": "A company can take many forms: a small business, a large corporation, a public sector organization or a not-for-profit organization. The unit of analysis in this course is the profit-oriented organization responsible for its economic and financial results.",
  "how": "When a case describes an entity, first place it: is it profit-oriented and accountable for its own economic and financial performance? That is the object the course analyses.",
  "trap": "Restricting the analysis to profit-oriented organizations is a choice of scope, not a claim that other forms are unimportant."
 },
 {
  "cat": "The Company",
  "title": "Measuring the Size of a Company",
  "meaning": "There is no single indicator of company size. The main ones used are market capitalization, revenues and number of employees.",
  "how": "The ranking of the largest companies changes depending on the indicator: the leaders by market cap are not the same as the leaders by revenues or by employees. The market cap of the big tech companies is comparable with the GDP of European countries.",
  "trap": "Quoting one ranking as if it were the ranking hides the choice of indicator. Always say by what measure a company is large."
 },
 {
  "cat": "The Company",
  "title": "Scope of Output: Single Product or Portfolio",
  "meaning": "A company can realize a single output or a portfolio of outputs. This is one of the structural choices that define what the company is.",
  "how": "Ask what the firm sells: one product or service line, or a set of different ones addressed to different needs and markets.",
  "trap": "A wide portfolio is not automatically a strength: it is a choice with consequences for focus, coordination and resource allocation."
 },
 {
  "cat": "The Company",
  "title": "Scope of Activities: Embody or Outsource",
  "meaning": "A company can embody many activities internally or outsource many of them. This defines how much of the value chain sits inside the firm.",
  "how": "Compare the activities the firm performs itself with those bought from third parties; the smartphone and the car industries are used in the course as contrasting illustrations.",
  "trap": "Outsourcing is not simply cost cutting: it changes which capabilities the firm retains and which it depends on others for."
 },
 {
  "cat": "The Company",
  "title": "Geographic Scope and Internationalization",
  "meaning": "A company can serve a single geographical market or several countries. Serving several countries is internationalization.",
  "how": "Look at where revenues come from and where activities are located; globalisation has pushed a growing number of firms across borders.",
  "trap": "Selling abroad and being organized as a global company are different degrees of the same dimension; do not treat exporting as full internationalization."
 },
 {
  "cat": "The Company",
  "title": "From Conglomerate to Focus: the Eni Case",
  "meaning": "The scope of a company is not fixed. Eni in the 1980s spanned energy, engineering, chemicals, construction and perforation, mechanical components, textile machines, non-ferrous ores, clothing and newspapers.",
  "how": "Eni today is organized around Exploration & Production, energy transition businesses (Plenitude and Enilive) and long-term opportunity technology: far fewer, far more related businesses.",
  "trap": "The case shows scope changing over decades in a deliberate direction; it is about refocusing, not merely shrinking."
 },
 {
  "cat": "The Company",
  "title": "Integration and Brand Portfolio: EssilorLuxottica",
  "meaning": "EssilorLuxottica is a leader in the design, manufacture and distribution of fashion, luxury and sports eyewear, combining a wide brand portfolio with control of production and retail.",
  "how": "Its portfolio includes proprietary brands such as Ray-Ban, Oakley, Vogue Eyewear, Persol, Oliver Peoples, Arnette, Costa del Mar and Alain Mikli, plus licensed brands including Giorgio Armani, Burberry, Bulgari, Chanel, Coach, Dolce&Gabbana, Ferrari, Michael Kors, Prada, Ralph Lauren, Tiffany & Co., Valentino and Versace. It runs a global network of nearly 20,000 shops, and the merger with Essilor integrated lens production.",
  "trap": "Proprietary brands and licensed brands are not the same thing: the firm owns the first and operates the second under contract."
 },
 {
  "cat": "The Company",
  "title": "Globalisation and Global Companies",
  "meaning": "Globalisation is the background trend that pushes firms to operate across several countries, reshaping competition, supply chains and organization.",
  "how": "A global company serves several geographical markets and organizes its activities across them, rather than replicating a national business abroad.",
  "trap": "Global reach changes the set of stakeholders a firm answers to, adding regulators, communities and labour markets in every country it enters."
 },
 {
  "cat": "Legal Forms",
  "title": "The Company as a Legal Entity",
  "meaning": "A company is a legal entity: a legal construct, essentially a contract, through which the law allows a group of natural persons to act as if they were a single artificial person for certain purposes.",
  "how": "The legal form is the nature of that contract. Two dimensions define it: limited or unlimited liability, and private or public status.",
  "trap": "The legal entity is separate from the people behind it; this separation is the point of the construct, not a technicality."
 },
 {
  "cat": "Legal Forms",
  "title": "Unlimited Company",
  "meaning": "A company, with or without share capital, whose members or shareholders do not benefit from limited liability should the company ever go into formal liquidation.",
  "how": "Members remain exposed beyond their contribution if the company is wound up. In exchange, unlimited companies are exempted from filing accounts with the Registrar of Companies for public disclosure.",
  "trap": "The exemption from public disclosure is the flip side of unlimited exposure: less protection for members, less information for outsiders."
 },
 {
  "cat": "Legal Forms",
  "title": "Private Company Limited by Guarantee",
  "meaning": "A company that does not have share capital, but is guaranteed by its members, who agree to pay a fixed amount in the event of the company's liquidation.",
  "how": "Charitable organisations are often incorporated using this form of limited liability, since there are no shares and no shareholders seeking a return on capital.",
  "trap": "No share capital does not mean no limited liability: the members' exposure is capped at the guaranteed amount."
 },
 {
  "cat": "Legal Forms",
  "title": "Private Company Limited by Shares",
  "meaning": "A company that has shareholders with limited liability and whose shares may not be offered to the general public.",
  "how": "Shareholders of private companies limited by shares are often bound to offer their shares to their fellow shareholders before selling them to a third party.",
  "trap": "The restriction is on offering shares to the public and on freely transferring them, not on having shareholders or raising equity privately."
 },
 {
  "cat": "Legal Forms",
  "title": "Public Limited Company",
  "meaning": "A company that can be publicly traded on a stock exchange. It is similar to the U.S. Corporation (Corp.) and the German Aktiengesellschaft (AG).",
  "how": "Public companies have access to the financial markets and can raise money for expansion and other projects by selling stock or bonds.",
  "trap": "Access to public markets comes with disclosure obligations, market valuation and stronger governance requirements; it is not only a funding advantage."
 },
 {
  "cat": "Ownership & Evolution",
  "title": "Shareholders' Objectives",
  "meaning": "Shareholders pursue two distinct objectives: earning money by selling the stock when the share price appreciates, and having power and controlling the company.",
  "how": "Identify which objective drives a shareholder in a case: a financial investor seeking appreciation behaves differently from one seeking control.",
  "trap": "The two objectives can conflict, for example when an offer maximises price but removes control from existing owners."
 },
 {
  "cat": "Ownership & Evolution",
  "title": "Initial Public Offering (IPO)",
  "meaning": "An IPO is the operation through which a company's shares are offered on a public market for the first time.",
  "how": "It can be primary, through a capital increase where new shares are issued and the cash goes to the company, or secondary, through the sale of shares of the current shareholders where the cash goes to the sellers. A mixed IPO combines both.",
  "trap": "Primary and secondary differ in who receives the money: the company in the first case, the selling shareholders in the second."
 },
 {
  "cat": "Ownership & Evolution",
  "title": "Takeovers: Friendly and Hostile",
  "meaning": "A takeover is the acquisition of control of a company. It can be friendly or hostile.",
  "how": "A friendly takeover is agreed with the target's board; a hostile one proceeds against the board's wishes through a takeover bid addressed to shareholders.",
  "trap": "Hostility refers to the board's position, not to the price offered: a hostile bid can be generous and a friendly one modest."
 },
 {
  "cat": "Ownership & Evolution",
  "title": "The Stages of an Organisation's Evolution",
  "meaning": "A company evolves through distinct stages: foundation, financing rounds and IPO. Each stage changes not only its size, but also its ownership structure, governance model and strategic priorities.",
  "how": "Place a case on this path: who owns the company, who decides, and what the firm is optimising for at that point.",
  "trap": "The overall movement is a transition from entrepreneurial control to shared ownership and public accountability, so governance requirements rise along the way."
 },
 {
  "cat": "Ownership & Evolution",
  "title": "Foundation and Initial Ownership",
  "meaning": "At foundation the firm is established as a legal entity, and ownership rights are allocated among the founders.",
  "how": "Founders define the initial ownership structure, allocate equity among themselves and set the first decision-making rules, for example 40% / 40% / 20% between three co-founders.",
  "trap": "The initial split also fixes the first decision rules; it is a governance choice as much as an economic one."
 },
 {
  "cat": "Ownership & Evolution",
  "title": "Financing Rounds and Dilution",
  "meaning": "When external investors enter the company by injecting capital, the company issues new shares. This supports growth, but dilutes existing shareholders and may reduce founders' control.",
  "how": "After a round, existing shareholders usually own a smaller percentage of a larger company: their stake in percent falls while the value behind it may rise.",
  "trap": "Dilution is mechanical, not a penalty: it follows from issuing new shares, and says nothing on its own about whether value was created."
 },
 {
  "cat": "Ownership & Evolution",
  "title": "Pre-money and Post-money Valuation",
  "meaning": "Pre-money valuation is the value of the company before the new investment; post-money valuation is the pre-money valuation plus the new capital injected.",
  "how": "Post-money = pre-money + investment. With €10m pre-money and €5m injected, the post-money valuation is €15m.",
  "trap": "The investor's percentage is always computed on the post-money figure, because the injected cash is by then part of the company."
 },
 {
  "cat": "Ownership & Evolution",
  "title": "Computing Ownership after a Round",
  "meaning": "The arithmetic of a financing round follows two formulas: new investor ownership = investment / post-money valuation, and existing shareholders' retention = pre-money valuation / post-money valuation.",
  "how": "With €5m injected at €10m pre-money, the investor gets 5/15 = 33.33% and every existing holder keeps 10/15 = two thirds of their previous stake, so a 40% founder goes to 26.67% and a 20% founder to 13.33%.",
  "trap": "Retention applies uniformly to all existing shareholders; they are all diluted in the same proportion, not by the same number of percentage points."
 },
 {
  "cat": "Ownership & Evolution",
  "title": "Dilution Is Not Necessarily Negative",
  "meaning": "Dilution reduces the percentage owned but usually accompanies an increase in the value of the company.",
  "how": "After Series A at €10m pre-money and Series B at €45m pre-money, a founder moves from 40% to 26.67% and then to 20%, while the company grows from €10m to €60m post-money.",
  "trap": "Comparing percentages across rounds without looking at valuations is the classic error: founders own a smaller share of a potentially much more valuable company."
 },
 {
  "cat": "Ownership & Evolution",
  "title": "IPO and the Cap Table",
  "meaning": "The IPO is the transition from a privately held company to a publicly traded one, and it reshapes the ownership table.",
  "how": "In a primary IPO raising €160m at €240m pre-money, the post-money valuation is €400m, public shareholders receive 160/400 = 40%, and every existing shareholder is diluted by 40%: a 20% holder goes to 12%, a 25% holder to 15%.",
  "trap": "The company gains access to public markets but also becomes subject to market valuation, disclosure obligations and stronger governance requirements."
 },
 {
  "cat": "Value & Objectives",
  "title": "Shareholder Value",
  "meaning": "The dominant view is that the objective of a company is to create value for its shareholders. Shareholder value is the sum of the net cash flows to shareholders, discounted at the cost of equity capital.",
  "how": "SV = Σ NCF_t / (1 + re)^t, where NCF_t is the net cash flow at year t for the shareholders, equal to dividends plus the share price at the time of sale minus capital injections, and re is the cost of equity capital.",
  "trap": "Capital injected by shareholders is subtracted in the net cash flow: money they put in is not a return to them."
 },
 {
  "cat": "Value & Objectives",
  "title": "Shareholder Value vs Enterprise Value",
  "meaning": "Enterprise value and shareholder value are different quantities, separated by net debt.",
  "how": "The shareholder value equals the enterprise value less net debt, where net debt is debt less cash. Therefore SV = EV − debt + cash.",
  "trap": "Cash increases shareholder value for a given enterprise value, because it reduces net debt; forgetting the cash term is the usual slip."
 },
 {
  "cat": "Value & Objectives",
  "title": "Stock Market Value as a Proxy",
  "meaning": "The stock market value of a listed company is used as a proxy of its shareholder value, but only a proxy.",
  "how": "It is a proxy rather than a measure because the stock market is affected by bubbles, fads and speculation.",
  "trap": "Treating market capitalization as if it were the intrinsic shareholder value ignores exactly the distortions that make it approximate."
 },
 {
  "cat": "Value & Objectives",
  "title": "The Company in Its Ecosystem",
  "meaning": "A company is a living organism inside a complex ecosystem, exchanging resources with shareholders on one side and a range of stakeholders on the other.",
  "how": "Shareholders provide equity; stakeholders include labour and management, suppliers of materials, components and technologies, the financial system providing loans, consultants and third parties, consumers in B2C and B2B, society and community, and government, authorities and public services setting laws, regulations and taxes.",
  "trap": "Stakeholders are not only those inside the firm: regulators, communities and the financial system belong to the same ecosystem."
 },
 {
  "cat": "Value & Objectives",
  "title": "The Stakeholder Perspective",
  "meaning": "The shareholder perspective alone looks incomplete. Under the stakeholder perspective, corporations should be socially responsible and serve the broader public interest as well as the shareholder interest.",
  "how": "Stakeholders can have different objectives, in some cases even in contrast with each other. This holds particularly true for public limited companies, which live in the most complicated ecosystem with a huge number of shareholders and stakeholders.",
  "trap": "The stakeholder view does not replace shareholder value; it says shareholder value is not sufficient as the whole objective."
 },
 {
  "cat": "Value & Objectives",
  "title": "Partnership of Value Creation",
  "meaning": "The value of a business is increasingly measured by a combination of financial success, usefulness to society and satisfaction of employees, with shareholders, managers and other stakeholders engaged in a partnership of value creation.",
  "how": "In a long-term view the dependence runs both ways: stakeholders are vulnerable when management fails to create shareholder value, and without stakeholder value there can be no shareholder value in the long term. The emphasis falls on the maximisation of long-term cash flows.",
  "trap": "This is an argument about the long term: short-term shareholder returns can be raised in ways that destroy the stakeholder relationships the firm depends on."
 },
 {
  "cat": "Value & Objectives",
  "title": "Why a Stakeholder Impact Analysis",
  "meaning": "Several events eroded the public's trust in business and capitalism, made relationships with stakeholders more critical and reinforced their role.",
  "how": "The course points to accounting scandals (Enron, Arthur Andersen, WorldCom, Tyco, Parmalat), the Global Financial Crisis, and other black swan events such as 9/11, the Fukushima nuclear disaster, the fall of the Berlin wall with the collapse of the Soviet Union, and the pandemic.",
  "trap": "The argument is historical: stakeholder analysis gained weight because trust was damaged by concrete failures, not because of an abstract preference."
 },
 {
  "cat": "Value & Objectives",
  "title": "The Pyramid of Corporate Social Responsibility",
  "meaning": "The course presents the pyramid of corporate social responsibility (Rothaermel, 2015) as the framework ordering the responsibilities a company carries, from economic responsibilities at the base up through legal and ethical ones to philanthropic responsibilities at the top.",
  "how": "The layered shape makes the point that the higher responsibilities rest on the lower ones: a firm that is not economically viable and legally compliant cannot sustain the levels above.",
  "trap": "The pyramid ranks responsibilities without licensing a firm to stop at the bottom layer; it is a structure of expectations, not a menu."
 },
 {
  "cat": "Governance & ESG",
  "title": "Corporate Governance: Definition",
  "meaning": "Corporate governance refers to the set of systems, principles and processes by which a company is governed.",
  "how": "They provide the guidelines as to how the company can be directed or controlled in order to fulfill its goals and objectives, add value, and be beneficial for all stakeholders in the long term.",
  "trap": "Governance is about direction and control together; reducing it to compliance checks misses the first half."
 },
 {
  "cat": "Governance & ESG",
  "title": "Extraordinary Decisions of the Shareholders Assembly",
  "meaning": "Some decisions are reserved to the shareholders assembly rather than delegated to the board.",
  "how": "The extraordinary decisions of the shareholders assembly are the bond issue, the capital increase and the change of the statute.",
  "trap": "These are exactly the decisions that alter the capital structure or the constitution of the company, which is why they sit with the owners."
 },
 {
  "cat": "Governance & ESG",
  "title": "The Traditional Governance Model",
  "meaning": "In the traditional model the shareholders meeting sits at the top and appoints the bodies that direct and control the company.",
  "how": "The shareholders meeting hires and fires members and reviews decisions of the Board of Directors, which includes shareholder representatives, stakeholder representatives and the CEO, and may include executive managers; the board approves the financial statement and decides upon dividends. A Board of Supervisors made of independent members checks that the decisions undertaken by management comply with normative and statutory requirements, and a committee of independent auditors checks the financial statements.",
  "trap": "Direction and supervision are assigned to distinct bodies; conflating the board of directors with the board of supervisors loses the control mechanism."
 },
 {
  "cat": "Governance & ESG",
  "title": "The Two-Tier System",
  "meaning": "The two-tier system, found in the Netherlands and Germany, separates supervision and management into two distinct boards.",
  "how": "The shareholders meeting appoints a Supervisory Board made of shareholder representatives, stakeholder representatives and non-executive directors, which hires and fires the members of the Management Board, reviews its decisions and approves the financial statements. The Management Board is made of the CEO and the company executives. A committee of independent auditors checks the financial statements.",
  "trap": "The supervisory board is not a second executive layer: it appoints and monitors the managers rather than running operations."
 },
 {
  "cat": "Governance & ESG",
  "title": "The One-Tier System",
  "meaning": "The one-tier system, found in the U.S. and the U.K., places direction and supervision inside a single board.",
  "how": "The shareholders meeting appoints a Board of Directors including shareholder representatives, executive and non-executive directors, the CEO and a control committee. Non-executives are more numerous than executives, and some non-executive members act as supervisors. A committee of independent auditors checks the financial statements.",
  "trap": "Having one board does not mean having no supervision: the supervisory function is carried by the non-executive majority inside the board."
 },
 {
  "cat": "Governance & ESG",
  "title": "Governance Failure: the Volkswagen Diesel Scandal",
  "meaning": "Volkswagen admitted installing software in engines over several years so they passed laboratory emission tests but emitted dangerous nitrogen oxides when on the road.",
  "how": "Chief executive Martin Winterkorn resigned insisting he knew nothing of the cheating, which analysts feared could cost billions in fines, lawsuits and recall costs. Governance experts argued the cheating was predictable because of lax boardroom controls and a peculiar corporate culture, and warnings about VW's governance had been raised for years. Even before the scandal, VW shares traded at a discount to other carmakers partly because of governance concerns.",
  "trap": "The market had already priced the governance weakness before the scandal broke, which is the point: governance quality is not only an ethical matter but a valuation one."
 },
 {
  "cat": "Governance & ESG",
  "title": "Board Independence and Diversity at Volkswagen",
  "meaning": "A key weakness at VW was the lack of diversity of opinion and expertise on its supervisory board, the body responsible for hiring and firing executives, advising management and monitoring their actions.",
  "how": "The 20-member council of directors was equally divided between shareholder and worker representatives, but 17 of the 20 members were German or Austrian and the board had only one truly independent voice. Many of the remaining directors represented the three largest shareholders: the Porsche and Piëch families, the State of Lower Saxony and Qatar. External investors held only 12% of the voting shares and therefore could not change anything.",
  "trap": "Formal balance is not independence: seats were evenly split between shareholders and workers, yet the board still lacked independent, relevantly skilled voices."
 },
 {
  "cat": "Governance & ESG",
  "title": "ESG",
  "meaning": "Environmental, social and corporate governance (ESG) is a framework designed to be integrated into an organization's strategy to create enterprise value by expanding the organizational objectives to include the identification, assessment and management of sustainability-related risks and opportunities in respect to all organizational stakeholders and the environment.",
  "how": "The environmental aspect focuses on preserving the natural world: climate change, greenhouse gas emissions, biodiversity loss, deforestation, pollution, energy efficiency and water management. The social aspect focuses on people and relationships: gender and diversity, equity and inclusion, customer satisfaction and employee engagement. The governance aspect focuses on enhancing corporate governance: board composition, cybersecurity practices, management structure, executive compensation and preventing bribery and corruption.",
  "trap": "ESG is framed as a way of creating enterprise value by managing risks and opportunities, not as a set of obligations separate from strategy."
 }
];

const QUESTIONS = [
 {
  "cat": "The Company",
  "title": "The Unit of Analysis",
  "question": "A course introduction notes that the term company covers small businesses, large corporations, public sector organizations and not-for-profit organizations. Which of these is taken as the unit of analysis?",
  "options": {
   "A": "Any organization that employs people, regardless of its purpose.",
   "B": "The profit-oriented organization responsible for its economic and financial results.",
   "C": "Only large corporations listed on a stock exchange.",
   "D": "The public sector organization, since it answers to the broadest set of stakeholders."
  },
  "correct": "B",
  "expl": {
   "A": "Incorrect. Employing people is not the criterion: what defines the unit of analysis is being profit-oriented and accountable for economic and financial results.",
   "B": "Correct. Although the word company covers several kinds of organization, the unit of analysis is the profit-oriented organization responsible for the economic and financial results.",
   "C": "Incorrect. Listing on a stock exchange is a later stage in a company's evolution, not the boundary of the unit of analysis, which includes unlisted profit-oriented firms.",
   "D": "Incorrect. Public sector organizations are explicitly listed as one possible meaning of company, but they are not the object the analysis focuses on."
  },
  "recap": "Correct. Although the word company covers several kinds of organization, the unit of analysis is the profit-oriented organization responsible for the economic and financial results."
 },
 {
  "cat": "The Company",
  "title": "Measuring Company Size",
  "question": "Rankings of the largest companies by market capitalization, by revenues and by number of employees produce noticeably different lists. What does this imply?",
  "options": {
   "A": "Two of the three rankings must be based on incorrect data.",
   "B": "Size is not captured by a single indicator, so the measure used has to be stated explicitly.",
   "C": "Market capitalization is the only valid measure, since it reflects the market's judgement.",
   "D": "The three indicators are equivalent, and the differences are rounding effects."
  },
  "correct": "B",
  "expl": {
   "A": "Incorrect. The differences come from measuring different things, not from data errors: a capital-intensive firm and a labour-intensive one are large in different senses.",
   "B": "Correct. Market capitalization, revenues and employees are distinct indicators of size and produce distinct rankings, so a claim that a company is among the largest is only meaningful once the indicator is named.",
   "C": "Incorrect. Market capitalization is one indicator among several, and it reflects expectations about the future rather than the current scale of operations.",
   "D": "Incorrect. The rankings differ substantially, not marginally: the leaders by employees are not the leaders by market cap."
  },
  "recap": "Correct. Market capitalization, revenues and employees are distinct indicators of size and produce distinct rankings, so a claim that a company is among the largest is only meaningful once the indicator is named."
 },
 {
  "cat": "The Company",
  "title": "Dimensions of Company Scope",
  "question": "Along which three dimensions does the course describe the general trends that define the scope of a company?",
  "options": {
   "A": "Single output or portfolio of outputs; embodying or outsourcing activities; serving one country or several.",
   "B": "Revenues, market capitalization and number of employees.",
   "C": "Limited or unlimited liability; private or public status; listed or unlisted.",
   "D": "Shareholders, stakeholders and regulators."
  },
  "correct": "A",
  "expl": {
   "A": "Correct. A company can realize a single output or a portfolio of outputs, can embody many activities or outsource many of them, and can serve a single geographical market or several countries through internationalization.",
   "B": "Incorrect. Those are indicators of size, which is a separate question from how broad the company's scope of products, activities and markets is.",
   "C": "Incorrect. Those are dimensions of legal form, which describe the contract behind the company rather than the breadth of what it does.",
   "D": "Incorrect. Those identify categories of actors in the company's ecosystem, not the structural choices that define its scope."
  },
  "recap": "Correct. A company can realize a single output or a portfolio of outputs, can embody many activities or outsource many of them, and can serve a single geographical market or several countries through internationalization."
 },
 {
  "cat": "The Company",
  "title": "From Conglomerate to Focus",
  "question": "In the 1980s Eni spanned energy, engineering, chemicals, construction and perforation, mechanical components, textile machines, non-ferrous ores, clothing and newspapers. Today it is organized around Exploration & Production, energy transition businesses and long-term opportunity technology. What does this illustrate?",
  "options": {
   "A": "That the scope of a company's portfolio of outputs is a strategic choice that can change substantially over time.",
   "B": "That companies inevitably shrink as their industry matures.",
   "C": "That internationalization always replaces diversification.",
   "D": "That changes in legal form drive changes in the business portfolio."
  },
  "correct": "A",
  "expl": {
   "A": "Correct. Eni moved from a very wide, largely unrelated portfolio to a far narrower set of related businesses, showing that the choice between a single output and a broad portfolio is a strategic decision that firms revisit over decades.",
   "B": "Incorrect. The case describes refocusing on fewer, related businesses, not a reduction of the company's overall scale.",
   "C": "Incorrect. Geographic scope and portfolio scope are separate dimensions, and the Eni example concerns the portfolio of businesses rather than the countries served.",
   "D": "Incorrect. Nothing in the case links the change in portfolio to a change in the company's legal form."
  },
  "recap": "Correct. Eni moved from a very wide, largely unrelated portfolio to a far narrower set of related businesses, showing that the choice between a single output and a broad portfolio is a strategic decision that firms revisit over decades."
 },
 {
  "cat": "The Company",
  "title": "Proprietary and Licensed Brands",
  "question": "EssilorLuxottica's portfolio includes brands such as Ray-Ban, Oakley and Persol alongside brands such as Chanel, Prada and Giorgio Armani, and the merger with Essilor brought lens production inside the company. How should these two facts be read?",
  "options": {
   "A": "All the brands are owned outright, and the Essilor merger was a geographic expansion.",
   "B": "Ray-Ban and Persol are licensed, while Chanel and Prada are proprietary brands of the group.",
   "C": "The first group are proprietary brands and the second are licensed brands, while the Essilor merger represents integration into lens production.",
   "D": "The brand portfolio shows outsourcing of activities, and the merger shows a reduction of scope."
  },
  "correct": "C",
  "expl": {
   "A": "Incorrect. The two sets of brands are held on different bases: some are owned by the group, others are operated under licence from the fashion houses that own them.",
   "B": "Incorrect. The two groups are inverted: Ray-Ban, Oakley and Persol are proprietary brands, while Chanel, Prada and Giorgio Armani are licensed.",
   "C": "Correct. Ray-Ban, Oakley, Vogue Eyewear, Persol and the others are proprietary brands, whereas Giorgio Armani, Chanel, Prada and similar names are licensed. Integrating lens production through the merger with Essilor extends the activities the company performs itself.",
   "D": "Incorrect. Bringing lens production in-house is the opposite of outsourcing, and it widens rather than reduces the activities embodied in the firm."
  },
  "recap": "Correct. Ray-Ban, Oakley, Vogue Eyewear, Persol and the others are proprietary brands, whereas Giorgio Armani, Chanel, Prada and similar names are licensed. Integrating lens production through the merger with Essilor extends the activities the company performs itself."
 },
 {
  "cat": "Legal Forms",
  "title": "The Company as a Legal Construct",
  "question": "What does it mean, precisely, that a company is a legal entity?",
  "options": {
   "A": "That it is registered with a public authority and pays taxes.",
   "B": "That it is a legal construct, essentially a contract, through which the law allows a group of natural persons to act as if they were a single artificial person for certain purposes.",
   "C": "That its shareholders are personally liable for its obligations.",
   "D": "That it must publish financial statements for public disclosure."
  },
  "correct": "B",
  "expl": {
   "A": "Incorrect. Registration and taxation are consequences of existing as an entity, not the definition of what a legal entity is.",
   "B": "Correct. A company is a legal construct, a contract, through which the law allows a group of natural persons to act as if they were a single artificial person for certain purposes. The legal form is the nature of that contract.",
   "C": "Incorrect. Personal liability depends on the legal form chosen: in limited companies shareholders precisely do not carry it.",
   "D": "Incorrect. Disclosure obligations vary by legal form, and unlimited companies are in fact exempted from filing accounts for public disclosure."
  },
  "recap": "Correct. A company is a legal construct, a contract, through which the law allows a group of natural persons to act as if they were a single artificial person for certain purposes. The legal form is the nature of that contract."
 },
 {
  "cat": "Legal Forms",
  "title": "Unlimited Company",
  "question": "Which combination correctly describes an unlimited company?",
  "options": {
   "A": "Members do not benefit from limited liability in a formal liquidation, and the company is exempted from filing accounts for public disclosure.",
   "B": "Members benefit from limited liability, and the company must file accounts for public disclosure.",
   "C": "The company has no share capital and is guaranteed by its members up to a fixed amount.",
   "D": "The company can be publicly traded on a stock exchange and raise money by selling stock or bonds."
  },
  "correct": "A",
  "expl": {
   "A": "Correct. An unlimited company, with or without share capital, is one whose members or shareholders do not benefit from limited liability should the company go into formal liquidation, and such companies are exempted from filing accounts with the Registrar of Companies for public disclosure.",
   "B": "Incorrect. Both halves are reversed: the absence of limited liability is what defines the form, and it comes with an exemption from public filing rather than an obligation.",
   "C": "Incorrect. That describes a private company limited by guarantee, where liability is capped at the guaranteed amount.",
   "D": "Incorrect. That describes a public limited company, which is a different legal form entirely."
  },
  "recap": "Correct. An unlimited company, with or without share capital, is one whose members or shareholders do not benefit from limited liability should the company go into formal liquidation, and such companies are exempted from filing accounts with the Registrar of Companies for public disclosure."
 },
 {
  "cat": "Legal Forms",
  "title": "Company Limited by Guarantee",
  "question": "A charitable organisation is incorporated with no share capital; its members agree to pay a fixed amount in the event of liquidation. Which legal form is this?",
  "options": {
   "A": "An unlimited company.",
   "B": "A private company limited by shares.",
   "C": "A private company limited by guarantee.",
   "D": "A public limited company."
  },
  "correct": "C",
  "expl": {
   "A": "Incorrect. In an unlimited company members do not benefit from limited liability at all, whereas here their exposure is capped at the amount guaranteed.",
   "B": "Incorrect. A company limited by shares has share capital and shareholders, while this form has neither.",
   "C": "Correct. A private company limited by guarantee has no share capital but is guaranteed by its members, who agree to pay a fixed amount in the event of the company's liquidation. Charitable organisations are often incorporated using this form of limited liability.",
   "D": "Incorrect. A public limited company is traded on a stock exchange and has share capital, neither of which applies here."
  },
  "recap": "Correct. A private company limited by guarantee has no share capital but is guaranteed by its members, who agree to pay a fixed amount in the event of the company's liquidation. Charitable organisations are often incorporated using this form of limited liability."
 },
 {
  "cat": "Legal Forms",
  "title": "Private Company Limited by Shares",
  "question": "Which feature distinguishes a private company limited by shares from a public limited company?",
  "options": {
   "A": "Its shareholders do not have limited liability.",
   "B": "Its shares may not be offered to the general public, and shareholders are often bound to offer shares to fellow shareholders before selling to a third party.",
   "C": "It has no share capital.",
   "D": "It is exempted from filing accounts for public disclosure."
  },
  "correct": "B",
  "expl": {
   "A": "Incorrect. Shareholders of a private company limited by shares do have limited liability; that is what limited by shares means.",
   "B": "Correct. A private company limited by shares has shareholders with limited liability, but its shares may not be offered to the general public, and its shareholders are often bound to offer their shares to their fellow shareholders before selling them to a third party.",
   "C": "Incorrect. It does have share capital; the form with no share capital is the company limited by guarantee.",
   "D": "Incorrect. The exemption from filing accounts for public disclosure belongs to unlimited companies."
  },
  "recap": "Correct. A private company limited by shares has shareholders with limited liability, but its shares may not be offered to the general public, and its shareholders are often bound to offer their shares to their fellow shareholders before selling them to a third party."
 },
 {
  "cat": "Legal Forms",
  "title": "Public Limited Company",
  "question": "A company is publicly traded on a stock exchange and can raise money for expansion by selling stock or bonds. Which statement about this form is correct?",
  "options": {
   "A": "It is comparable to the U.S. Corporation and the German Aktiengesellschaft, and it has access to the financial markets.",
   "B": "It cannot issue bonds, only shares.",
   "C": "Its shareholders carry unlimited liability because the shares are publicly held.",
   "D": "It is the same legal form as a company limited by guarantee, differing only in size."
  },
  "correct": "A",
  "expl": {
   "A": "Correct. A public limited company can be publicly traded on a stock exchange, is similar to the U.S. Corporation (Corp.) and the German Aktiengesellschaft (AG), and has access to the financial markets, raising money for expansion and other projects by selling stock or bonds.",
   "B": "Incorrect. Access to the financial markets explicitly includes raising money by selling bonds as well as stock.",
   "C": "Incorrect. Being publicly traded does not remove limited liability; the public limited company is a limited form.",
   "D": "Incorrect. A company limited by guarantee has no share capital and is not traded; the difference is one of legal structure, not size."
  },
  "recap": "Correct. A public limited company can be publicly traded on a stock exchange, is similar to the U.S. Corporation (Corp.) and the German Aktiengesellschaft (AG), and has access to the financial markets, raising money for expansion and other projects by selling stock or bonds."
 },
 {
  "cat": "Ownership & Evolution",
  "title": "Shareholders' Objectives",
  "question": "Which pair of objectives does the course attribute to shareholders?",
  "options": {
   "A": "Maximising employment and maximising market share.",
   "B": "Earning money by selling the stock when the share price appreciates, and having power and controlling the company.",
   "C": "Minimising taxation and maximising disclosure.",
   "D": "Guaranteeing the company's debts and managing its day-to-day operations."
  },
  "correct": "B",
  "expl": {
   "A": "Incorrect. Employment and market share may be consequences of company strategy, but they are not the objectives shareholders are described as pursuing.",
   "B": "Correct. Shareholders pursue two distinct objectives: earning money by selling the stock when the share price appreciates, and having power and controlling the company.",
   "C": "Incorrect. Taxation and disclosure are constraints set by authorities and regulation, not shareholder objectives.",
   "D": "Incorrect. Guaranteeing debts and running operations are not shareholder functions; in limited companies shareholders are precisely shielded from the first."
  },
  "recap": "Correct. Shareholders pursue two distinct objectives: earning money by selling the stock when the share price appreciates, and having power and controlling the company."
 },
 {
  "cat": "Ownership & Evolution",
  "title": "Primary vs Secondary IPO",
  "question": "In an IPO, what distinguishes the primary component from the secondary component?",
  "options": {
   "A": "In a primary IPO new shares are issued and the cash goes to the company; in a secondary IPO existing shareholders sell and the cash goes to the sellers.",
   "B": "In a primary IPO existing shareholders sell their shares; in a secondary IPO new shares are issued.",
   "C": "A primary IPO takes place on the domestic market and a secondary IPO on a foreign exchange.",
   "D": "A primary IPO is friendly and a secondary IPO is hostile."
  },
  "correct": "A",
  "expl": {
   "A": "Correct. A primary IPO is a capital increase: new shares are issued and the cash goes to the company. A secondary IPO is the sale of shares of the current shareholders, so the cash goes to the sellers. A mixed IPO combines both.",
   "B": "Incorrect. The two are inverted: issuing new shares is the primary component, selling existing ones is the secondary component.",
   "C": "Incorrect. The distinction concerns who issues and who receives the proceeds, not the geography of the listing.",
   "D": "Incorrect. Friendly and hostile describe takeovers, not the structure of an offering."
  },
  "recap": "Correct. A primary IPO is a capital increase: new shares are issued and the cash goes to the company. A secondary IPO is the sale of shares of the current shareholders, so the cash goes to the sellers. A mixed IPO combines both."
 },
 {
  "cat": "Ownership & Evolution",
  "title": "Friendly and Hostile Takeovers",
  "question": "In 2021 EasyJet rejected an unsolicited takeover approach from Wizz Air; in 2026 it agreed to a cash takeover by Apollo Global Management. How are these two operations classified?",
  "options": {
   "A": "Both are hostile, since both involved an external bidder.",
   "B": "The Wizz Air approach was a hostile one, rejected by the target, while the Apollo deal was agreed and therefore friendly.",
   "C": "Both are friendly, since the second was eventually accepted.",
   "D": "The classification depends only on the price offered per share."
  },
  "correct": "B",
  "expl": {
   "A": "Incorrect. Being an external bidder does not make an offer hostile; what matters is whether the target's board agrees to it.",
   "B": "Correct. A takeover is hostile when it proceeds against the wishes of the target's board, as with the unsolicited approach EasyJet rejected, and friendly when it is agreed, as with the Apollo offer EasyJet accepted at £7.15 per share.",
   "C": "Incorrect. The Wizz Air approach was unsolicited and rejected, so it cannot be reclassified as friendly because a different, later offer succeeded.",
   "D": "Incorrect. Hostility refers to the board's position, not to the level of the price: a hostile bid can be generous and a friendly one modest."
  },
  "recap": "Correct. A takeover is hostile when it proceeds against the wishes of the target's board, as with the unsolicited approach EasyJet rejected, and friendly when it is agreed, as with the Apollo offer EasyJet accepted at £7.15 per share."
 },
 {
  "cat": "Ownership & Evolution",
  "title": "Stages of Evolution",
  "question": "A company moves from foundation, through financing rounds, to an IPO. Beyond size, what else changes along this path?",
  "options": {
   "A": "Only the number of employees and the geographical footprint.",
   "B": "Nothing structural: the company simply becomes larger and better capitalised.",
   "C": "Its ownership structure, governance model and strategic priorities, in a transition from entrepreneurial control to shared ownership and public accountability.",
   "D": "Its legal form necessarily changes from unlimited to limited at each stage."
  },
  "correct": "C",
  "expl": {
   "A": "Incorrect. Headcount and footprint are effects of growth; the stages also reshape who owns the company and how decisions are made.",
   "B": "Incorrect. Each stage changes the company structurally, which is precisely why governance requirements rise along the way.",
   "C": "Correct. Each stage changes not only the company's size but also its ownership structure, governance model and strategic priorities. The overall evolution is a transition from entrepreneurial control to shared ownership and public accountability.",
   "D": "Incorrect. Nothing requires an unlimited-to-limited transition at each stage; what changes is ownership and governance, and the listing at the IPO stage."
  },
  "recap": "Correct. Each stage changes not only the company's size but also its ownership structure, governance model and strategic priorities. The overall evolution is a transition from entrepreneurial control to shared ownership and public accountability."
 },
 {
  "cat": "Ownership & Evolution",
  "title": "Ownership after a Series A",
  "question": "Three founders hold 40%, 40% and 20% of a company. A Series A investor injects €5m at a €10m pre-money valuation. What is the post-money valuation and what percentage does the investor receive?",
  "options": {
   "A": "Post-money €10m; the investor receives 50%.",
   "B": "Post-money €15m; the investor receives 33.33%.",
   "C": "Post-money €15m; the investor receives 50%.",
   "D": "Post-money €5m; the investor receives 100%."
  },
  "correct": "B",
  "expl": {
   "A": "Incorrect. The post-money valuation must include the cash injected: €10m pre-money plus €5m is €15m, not €10m.",
   "B": "Correct. Post-money valuation = pre-money valuation + new capital injected = €10m + €5m = €15m. New investor ownership = investment / post-money valuation = 5/15 = 33.33%.",
   "C": "Incorrect. The post-money figure is right but the percentage is not: €5m out of €15m is one third, not one half.",
   "D": "Incorrect. The pre-money value of the existing company does not disappear; the investor buys a share of the enlarged company."
  },
  "recap": "Correct. Post-money valuation = pre-money valuation + new capital injected = €10m + €5m = €15m. New investor ownership = investment / post-money valuation = 5/15 = 33.33%."
 },
 {
  "cat": "Ownership & Evolution",
  "title": "Founder Dilution after a Round",
  "question": "Continuing the same case: Founder A held 40% before a Series A of €5m injected at a €10m pre-money valuation. What is Founder A's stake after the round?",
  "options": {
   "A": "40%, since the founder sold no shares.",
   "B": "20%, since the investor took half the company.",
   "C": "26.67%, since existing shareholders retain the pre-money over post-money proportion.",
   "D": "13.33%, the same as the founder who held 20% before."
  },
  "correct": "C",
  "expl": {
   "A": "Incorrect. Dilution does not require selling shares: new shares issued to the investor reduce every existing holder's percentage of the enlarged company.",
   "B": "Incorrect. The investor receives one third, not one half, so Founder A cannot fall to half of the previous stake.",
   "C": "Correct. Existing shareholders' retention = pre-money / post-money = 10/15 = two thirds. Founder A therefore moves from 40% to 40% × 2/3 = 26.67%. Equivalently, 40% of €10m is €4m, and €4m / €15m = 26.67%.",
   "D": "Incorrect. 13.33% is the post-round stake of the founder who previously held 20%; the same retention factor applied to 40% gives 26.67%."
  },
  "recap": "Correct. Existing shareholders' retention = pre-money / post-money = 10/15 = two thirds. Founder A therefore moves from 40% to 40% × 2/3 = 26.67%. Equivalently, 40% of €10m is €4m, and €4m / €15m = 26.67%."
 },
 {
  "cat": "Ownership & Evolution",
  "title": "A Second Financing Round",
  "question": "After Series A the company raises a Series B: an investor injects €15m at a €45m pre-money valuation. What percentage does the Series B investor obtain, and what happens to the Series A investor's 33.33% stake?",
  "options": {
   "A": "Series B obtains 25%, and the Series A investor is diluted to 25%.",
   "B": "Series B obtains 33.33%, and the Series A investor keeps 33.33%.",
   "C": "Series B obtains 25%, and the Series A investor keeps 33.33%.",
   "D": "Series B obtains 15%, and the Series A investor is diluted to 20%."
  },
  "correct": "A",
  "expl": {
   "A": "Correct. Post-money = €45m + €15m = €60m, so the Series B investor receives 15/60 = 25%. Existing shareholders retain 45/60 = three quarters of their stake, so the Series A investor moves from 33.33% to 25%, and the founders move from 26.67% to 20% and from 13.33% to 10%.",
   "B": "Incorrect. €15m out of a €60m post-money valuation is 25%, and existing holders cannot keep their percentage unchanged when new shares are issued.",
   "C": "Incorrect. The Series B percentage is right, but the Series A investor is diluted like every other existing shareholder, by the same retention factor.",
   "D": "Incorrect. Those figures do not follow from the round: 15/60 is 25%, and applying the 45/60 retention to 33.33% gives 25%."
  },
  "recap": "Correct. Post-money = €45m + €15m = €60m, so the Series B investor receives 15/60 = 25%. Existing shareholders retain 45/60 = three quarters of their stake, so the Series A investor moves from 33.33% to 25%, and the founders move from 26.67% to 20% and from 13.33% to 10%."
 },
 {
  "cat": "Ownership & Evolution",
  "title": "Dilution at the IPO",
  "question": "A company carries out a primary IPO raising €160m at a €240m pre-money valuation. A shareholder held 20% before the offering. What share of the company do public shareholders receive, and what is that shareholder's stake afterwards?",
  "options": {
   "A": "Public shareholders receive 40%; the shareholder moves from 20% to 12%.",
   "B": "Public shareholders receive 40%; the shareholder keeps 20%.",
   "C": "Public shareholders receive 67%; the shareholder moves from 20% to 6.6%.",
   "D": "Public shareholders receive 160%; the calculation cannot be completed."
  },
  "correct": "A",
  "expl": {
   "A": "Correct. Post-money valuation = €240m + €160m = €400m, so public shareholders receive 160/400 = 40%. All existing shareholders are diluted by 40%, retaining 240/400 = 60% of their previous stake, so a 20% holder moves to 12%.",
   "B": "Incorrect. The public share is right, but existing shareholders cannot keep their percentages unchanged once 40% of the company is issued to new investors.",
   "C": "Incorrect. The €160m raised is measured against the €400m post-money valuation, not against the €240m pre-money figure.",
   "D": "Incorrect. The percentage is the investment over the post-money valuation, which is well defined here at 40%."
  },
  "recap": "Correct. Post-money valuation = €240m + €160m = €400m, so public shareholders receive 160/400 = 40%. All existing shareholders are diluted by 40%, retaining 240/400 = 60% of their previous stake, so a 20% holder moves to 12%."
 },
 {
  "cat": "Ownership & Evolution",
  "title": "Interpreting Dilution",
  "question": "Across two financing rounds a founder's stake falls from 40% to 20%, while the company's valuation rises from €10m pre-money to €60m post-money. How should this be interpreted?",
  "options": {
   "A": "The founder has lost half of their wealth in the company.",
   "B": "Dilution is not necessarily negative: the founder owns a smaller percentage of a potentially much more valuable company.",
   "C": "The rounds destroyed value, since the founder's percentage decreased.",
   "D": "The founder's stake in percent is the only meaningful measure of their position."
  },
  "correct": "B",
  "expl": {
   "A": "Incorrect. A smaller percentage of a much larger valuation is not automatically less value: 40% of €10m is €4m, while 20% of €60m is €12m.",
   "B": "Correct. Dilution is not necessarily negative. Founders own a smaller percentage, but potentially of a much more valuable company, which is why percentages must always be read together with the valuation behind them.",
   "C": "Incorrect. The decrease in percentage is a mechanical effect of issuing new shares and says nothing on its own about value creation or destruction.",
   "D": "Incorrect. Reading the percentage in isolation is exactly the error the case is designed to expose."
  },
  "recap": "Correct. Dilution is not necessarily negative. Founders own a smaller percentage, but potentially of a much more valuable company, which is why percentages must always be read together with the valuation behind them."
 },
 {
  "cat": "Value & Objectives",
  "title": "The Shareholder Value Formula",
  "question": "Shareholder value is computed as the discounted sum of the net cash flows to shareholders. What does the net cash flow of a given year contain, and at what rate is it discounted?",
  "options": {
   "A": "Revenues less operating costs, discounted at the risk-free rate.",
   "B": "Dividends plus the share price at the time of sale minus capital injections, discounted at the cost of equity capital.",
   "C": "Dividends only, discounted at the weighted average cost of capital.",
   "D": "Enterprise value less net debt, discounted at the cost of debt."
  },
  "correct": "B",
  "expl": {
   "A": "Incorrect. That is closer to an operating result; shareholder value is built on the cash flows accruing to shareholders, not on the company's operating margin.",
   "B": "Correct. Shareholder value is the sum over time of NCF_t / (1 + re)^t, where NCF_t is the net cash flow at year t for the shareholders, equal to dividends plus the share price at the time of sale minus capital injections, and re is the cost of equity capital.",
   "C": "Incorrect. Dividends alone omit both the proceeds from selling the shares and the capital shareholders put in, and the relevant rate is the cost of equity.",
   "D": "Incorrect. Enterprise value less net debt is the relation between EV and SV, not the definition of the annual cash flow being discounted."
  },
  "recap": "Correct. Shareholder value is the sum over time of NCF_t / (1 + re)^t, where NCF_t is the net cash flow at year t for the shareholders, equal to dividends plus the share price at the time of sale minus capital injections, and re is the cost of equity capital."
 },
 {
  "cat": "Value & Objectives",
  "title": "From Enterprise Value to Shareholder Value",
  "question": "A company has an enterprise value of €850m, debt of €300m and cash of €70m. What is its shareholder value?",
  "options": {
   "A": "€1,220m",
   "B": "€480m",
   "C": "€620m",
   "D": "€550m"
  },
  "correct": "C",
  "expl": {
   "A": "Incorrect. This adds the debt instead of subtracting it; debt is a claim ahead of shareholders, so it reduces the value left to them.",
   "B": "Incorrect. This subtracts the cash as well as the debt. Cash reduces net debt, so it works in the shareholders' favour.",
   "C": "Correct. Shareholder value equals enterprise value less net debt, and net debt is debt less cash, so SV = EV − debt + cash = 850 − 300 + 70 = €620m.",
   "D": "Incorrect. This subtracts the debt but ignores the cash entirely, which is the most common slip in the formula."
  },
  "recap": "Correct. Shareholder value equals enterprise value less net debt, and net debt is debt less cash, so SV = EV − debt + cash = 850 − 300 + 70 = €620m."
 },
 {
  "cat": "Value & Objectives",
  "title": "Market Value as a Proxy",
  "question": "Why is the stock market value of a listed company described as a proxy of shareholder value rather than a measure of it?",
  "options": {
   "A": "Because stock prices are published with a delay.",
   "B": "Because the stock market is affected by bubbles, fads and speculation.",
   "C": "Because market value includes debt, while shareholder value does not.",
   "D": "Because only unlisted companies have a shareholder value."
  },
  "correct": "B",
  "expl": {
   "A": "Incorrect. Publication delays are a practical detail and are not the reason the figure is approximate.",
   "B": "Correct. The stock market value is used as a proxy of shareholder value precisely because the market is affected by bubbles, fads and speculation, so the quoted value can depart from the underlying value created for shareholders.",
   "C": "Incorrect. Market capitalization is the value of the equity, not of the whole enterprise; the figure that includes debt is enterprise value.",
   "D": "Incorrect. Shareholder value is defined for any company; listing simply provides an observable price to compare it with."
  },
  "recap": "Correct. The stock market value is used as a proxy of shareholder value precisely because the market is affected by bubbles, fads and speculation, so the quoted value can depart from the underlying value created for shareholders."
 },
 {
  "cat": "Value & Objectives",
  "title": "The Stakeholder Perspective",
  "question": "The course argues that the shareholder perspective looks incomplete. What does the stakeholder perspective add, and where does it matter most?",
  "options": {
   "A": "That companies should serve the broader public interest as well as the shareholder interest, which holds particularly for public limited companies.",
   "B": "That shareholder value should be abandoned as an objective.",
   "C": "That stakeholders always share the same objectives, which simplifies decision-making.",
   "D": "That only privately held companies need to consider stakeholders."
  },
  "correct": "A",
  "expl": {
   "A": "Correct. Under the stakeholder perspective corporations should be socially responsible and serve the broader public interest as well as the shareholder interest. This holds particularly true for public limited companies, which live in the most complicated ecosystem, involving a huge number of shareholders and stakeholders.",
   "B": "Incorrect. The argument is that shareholder value is not sufficient as the whole objective, not that it should be dropped.",
   "C": "Incorrect. Stakeholders can have different objectives, in some cases even in contrast with each other, which is what makes the analysis necessary.",
   "D": "Incorrect. The point is the opposite: the ecosystem is most complex, and the stakeholder question most pressing, for public limited companies."
  },
  "recap": "Correct. Under the stakeholder perspective corporations should be socially responsible and serve the broader public interest as well as the shareholder interest. This holds particularly true for public limited companies, which live in the most complicated ecosystem, involving a huge number of shareholders and stakeholders."
 },
 {
  "cat": "Value & Objectives",
  "title": "Long-Term Interdependence",
  "question": "How does the course describe the long-term relationship between shareholder value and stakeholder value?",
  "options": {
   "A": "They are independent: pursuing one has no effect on the other.",
   "B": "Stakeholder value must be maximised first, and shareholder value follows automatically.",
   "C": "They are mutually dependent: stakeholders are vulnerable when management fails to create shareholder value, and without stakeholder value there can be no shareholder value in the long term.",
   "D": "Shareholder value in the short term is the only reliable objective."
  },
  "correct": "C",
  "expl": {
   "A": "Incorrect. The argument is explicitly about the dependence running in both directions over a long horizon.",
   "B": "Incorrect. There is no automatic sequence: the two are presented as a partnership of value creation, not as one preceding the other.",
   "C": "Correct. Stakeholders are vulnerable when management fails to create shareholder value, and without stakeholder value there can be no shareholder value in the long term. This is why the emphasis falls on the maximisation of long-term cash flows.",
   "D": "Incorrect. The emphasis is placed on long-term cash flows precisely because a short-term focus can damage the relationships the firm depends on."
  },
  "recap": "Correct. Stakeholders are vulnerable when management fails to create shareholder value, and without stakeholder value there can be no shareholder value in the long term. This is why the emphasis falls on the maximisation of long-term cash flows."
 },
 {
  "cat": "Value & Objectives",
  "title": "Why Stakeholder Analysis Gained Weight",
  "question": "Which set of events is cited as having eroded public trust in business and reinforced the role of stakeholders?",
  "options": {
   "A": "Accounting scandals such as Enron, Arthur Andersen, WorldCom, Tyco and Parmalat, the Global Financial Crisis, and black swan events.",
   "B": "The introduction of IFRS and the harmonisation of accounting standards.",
   "C": "The growth of e-commerce and the digitalisation of retail.",
   "D": "The creation of the euro and the enlargement of the European Union."
  },
  "correct": "A",
  "expl": {
   "A": "Correct. Accounting scandals (Enron, Arthur Andersen, WorldCom, Tyco, Parmalat), the Global Financial Crisis and other black swan events such as 9/11, Fukushima, the fall of the Berlin wall with the collapse of the Soviet Union and the pandemic eroded the public's trust in business and capitalism, making relationships with stakeholders more critical.",
   "B": "Incorrect. Accounting harmonisation is a response to reporting needs, not one of the trust-eroding events cited.",
   "C": "Incorrect. Digitalisation reshaped competition but is not presented as a cause of the loss of trust in business.",
   "D": "Incorrect. Monetary and political integration are not among the events the course points to."
  },
  "recap": "Correct. Accounting scandals (Enron, Arthur Andersen, WorldCom, Tyco, Parmalat), the Global Financial Crisis and other black swan events such as 9/11, Fukushima, the fall of the Berlin wall with the collapse of the Soviet Union and the pandemic eroded the public's trust in business and capitalism, making relationships with stakeholders more critical."
 },
 {
  "cat": "Governance & ESG",
  "title": "Defining Corporate Governance",
  "question": "How is corporate governance defined?",
  "options": {
   "A": "The set of accounting standards a company must apply when preparing its financial statements.",
   "B": "The set of systems, principles and processes by which a company is governed, guiding how it is directed or controlled to fulfill its goals, add value and benefit all stakeholders in the long term.",
   "C": "The organisational chart describing reporting lines between managers.",
   "D": "The procedure for issuing new shares and admitting new shareholders."
  },
  "correct": "B",
  "expl": {
   "A": "Incorrect. Accounting standards govern how results are measured and reported; governance concerns how the company is directed and controlled.",
   "B": "Correct. Corporate governance is the set of systems, principles and processes by which a company is governed. They provide the guidelines as to how the company can be directed or controlled in order to fulfill its goals and objectives, add value and be beneficial for all stakeholders in the long term.",
   "C": "Incorrect. Reporting lines are a matter of organisational design, a narrower question than the systems and principles that direct and control the firm.",
   "D": "Incorrect. Issuing shares is one specific decision, in fact reserved to the shareholders assembly, not the definition of governance."
  },
  "recap": "Correct. Corporate governance is the set of systems, principles and processes by which a company is governed. They provide the guidelines as to how the company can be directed or controlled in order to fulfill its goals and objectives, add value and be beneficial for all stakeholders in the long term."
 },
 {
  "cat": "Governance & ESG",
  "title": "Extraordinary Decisions",
  "question": "Which decisions are reserved to the extraordinary shareholders assembly rather than being taken by the board?",
  "options": {
   "A": "Approving the financial statement and deciding upon dividends.",
   "B": "Hiring and firing company executives.",
   "C": "Bond issue, capital increase and change of the statute.",
   "D": "Checking that decisions comply with normative and statutory requirements."
  },
  "correct": "C",
  "expl": {
   "A": "Incorrect. Approving the financial statement and deciding on dividends are functions of the board of directors in the traditional model.",
   "B": "Incorrect. Appointing and dismissing executives is a board function, carried out by the board of directors or, in a two-tier system, by the supervisory board.",
   "C": "Correct. The extraordinary decisions of the shareholders assembly are the bond issue, the capital increase and the change of the statute: precisely the decisions that alter the capital structure or the constitution of the company.",
   "D": "Incorrect. That compliance check is the role of the board of supervisors made of independent members."
  },
  "recap": "Correct. The extraordinary decisions of the shareholders assembly are the bond issue, the capital increase and the change of the statute: precisely the decisions that alter the capital structure or the constitution of the company."
 },
 {
  "cat": "Governance & ESG",
  "title": "Two-Tier and One-Tier Systems",
  "question": "A company in Germany separates a Supervisory Board from a Management Board made of the CEO and executives. A company in the United States has a single Board of Directors where non-executives outnumber executives and some act as supervisors. How are these two models named?",
  "options": {
   "A": "The German company uses a one-tier system; the U.S. company uses a two-tier system.",
   "B": "The German company uses a two-tier system; the U.S. company uses a one-tier system.",
   "C": "Both use the traditional model, differing only in board size.",
   "D": "The German company uses the traditional model; the U.S. company uses a two-tier system."
  },
  "correct": "B",
  "expl": {
   "A": "Incorrect. The labels are inverted: having two separate boards is what defines the two-tier system.",
   "B": "Correct. The two-tier system, found in the Netherlands and Germany, splits a Supervisory Board from a Management Board of the CEO and executives. The one-tier system, found in the U.S. and the U.K., places everything in a single Board of Directors where non-executives are more numerous than executives and some act as supervisors.",
   "C": "Incorrect. The difference is structural, not a matter of size: one model uses two distinct boards, the other a single one.",
   "D": "Incorrect. The German arrangement described, with two separate boards, is the two-tier system, and the U.S. arrangement is the one-tier system."
  },
  "recap": "Correct. The two-tier system, found in the Netherlands and Germany, splits a Supervisory Board from a Management Board of the CEO and executives. The one-tier system, found in the U.S. and the U.K., places everything in a single Board of Directors where non-executives are more numerous than executives and some act as supervisors."
 },
 {
  "cat": "Governance & ESG",
  "title": "Supervision and Audit",
  "question": "In the traditional governance model, which body checks that the decisions undertaken by the company's management comply with normative and statutory requirements, and which one checks the financial statements?",
  "options": {
   "A": "The board of supervisors, made of independent members, checks compliance; the committee of independent auditors checks the financial statements.",
   "B": "The board of directors checks compliance; the shareholders meeting checks the financial statements.",
   "C": "The committee of independent auditors checks compliance; the board of supervisors checks the financial statements.",
   "D": "The CEO performs both checks, reporting to the shareholders meeting."
  },
  "correct": "A",
  "expl": {
   "A": "Correct. The board of supervisors, made of independent members, checks that the decisions undertaken by the company's management are compliant with the normative and statutory requirements, while the committee of independent auditors checks the financial statements.",
   "B": "Incorrect. The board of directors is a body that directs the company and approves the financial statement; the compliance check is assigned to the supervisors.",
   "C": "Incorrect. The two roles are inverted: auditors examine the financial statements, supervisors examine compliance of management's decisions.",
   "D": "Incorrect. The point of both bodies is independence from the management being checked, so the CEO cannot perform these functions."
  },
  "recap": "Correct. The board of supervisors, made of independent members, checks that the decisions undertaken by the company's management are compliant with the normative and statutory requirements, while the committee of independent auditors checks the financial statements."
 },
 {
  "cat": "Governance & ESG",
  "title": "The Volkswagen Governance Failure",
  "question": "Commentators argued that the Volkswagen diesel cheating was predictable. On what governance grounds?",
  "options": {
   "A": "The company had no supervisory board at all.",
   "B": "Lax boardroom controls and a peculiar corporate culture, with a supervisory board short of independent voices and relevant expertise.",
   "C": "The supervisory board was entirely composed of external investors.",
   "D": "The company was unlisted, so no external scrutiny applied."
  },
  "correct": "B",
  "expl": {
   "A": "Incorrect. VW did have a 20-member supervisory board; the problem was its composition and the weakness of its controls, not its absence.",
   "B": "Correct. Governance experts argued the cheating was predictable because of VW's lax boardroom controls and peculiar corporate culture. The supervisory board had only one truly independent voice, 17 of its 20 members were German or Austrian, many directors represented the three largest shareholders, and external investors held only 12% of the voting shares. Even before the scandal, VW shares traded at a discount to other carmakers partly because of governance concerns.",
   "C": "Incorrect. The opposite was true: external investors held only 12% of the voting shares and therefore could not change anything.",
   "D": "Incorrect. VW was listed, and its shares already traded at a governance-related discount before the scandal broke."
  },
  "recap": "Correct. Governance experts argued the cheating was predictable because of VW's lax boardroom controls and peculiar corporate culture. The supervisory board had only one truly independent voice, 17 of its 20 members were German or Austrian, many directors represented the three largest shareholders, and external investors held only 12% of the voting shares. Even before the scandal, VW shares traded at a discount to other carmakers partly because of governance concerns."
 },
 {
  "cat": "Governance & ESG",
  "title": "The Three Pillars of ESG",
  "question": "A company reports on greenhouse gas emissions and water management, on diversity and employee engagement, and on board composition and executive compensation. How do these three groups map onto the ESG framework?",
  "options": {
   "A": "Environmental, social and governance respectively.",
   "B": "Social, governance and environmental respectively.",
   "C": "Governance, environmental and social respectively.",
   "D": "They all belong to the environmental pillar, since ESG is a sustainability framework."
  },
  "correct": "A",
  "expl": {
   "A": "Correct. The environmental aspect focuses on preserving the natural world, including greenhouse gas emissions and water management; the social aspect focuses on people and relationships, including diversity, equity and inclusion and employee engagement; the governance aspect focuses on enhancing corporate governance, including board composition and executive compensation.",
   "B": "Incorrect. Emissions and water management are environmental matters, not social ones, and board composition is governance rather than environmental.",
   "C": "Incorrect. The order is wrong: emissions belong to the environmental pillar and board composition to the governance pillar.",
   "D": "Incorrect. ESG explicitly separates three aspects, and only the first concerns the natural environment."
  },
  "recap": "Correct. The environmental aspect focuses on preserving the natural world, including greenhouse gas emissions and water management; the social aspect focuses on people and relationships, including diversity, equity and inclusion and employee engagement; the governance aspect focuses on enhancing corporate governance, including board composition and executive compensation."
 }
];

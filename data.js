// Financial Accounting study data. Generated from the course annexure on IFRS financial reporting.
const CATEGORIES = ["Principles", "Balance Sheet", "Income Statement", "Cash Flow", "Notes & Reporting"];

const CONCEPTS = [
 {
  "cat": "Principles",
  "title": "Financial Accounting",
  "meaning": "The branch of accounting intended for users outside the organization (external accountability). It refers to mandatory financial reports that companies must prepare and publish according to international and national rules.",
  "how": "Annual reports are the main yearly documents: the accounting year lasts 12 months but may start in different months around the world (January, March, June). Interim reports include quarterly and half-year reports.",
  "trap": "Companies also publish environmental, corporate and social responsibility reports, but those are voluntary. Financial reporting is the part that is mandatory."
 },
 {
  "cat": "Principles",
  "title": "The Four IFRS Financial Statements",
  "meaning": "Under IFRS an annual report must contain four compulsory financial statements: the balance sheet, the income statement, the cash flow statement, and the statement of changes in equity.",
  "how": "Balance sheet = condition of resources and rights at year end. Income statement = revenues and costs of the year. Cash flow statement = cash flows of the year. Statement of changes in equity = variations in equity during the year.",
  "trap": "The notes to the financial statements are compulsory too. They are not an optional appendix: they explain the rules followed and the choices made in preparing the statements."
 },
 {
  "cat": "Principles",
  "title": "Accrual Principle",
  "meaning": "Under the accrual principle, the effects of transactions and other events are recognized when they occur, not when cash is received or paid, and they are reported in the financial statements of the periods to which they relate.",
  "how": "It is the underlying logic of both the income statement and the balance sheet. Revenues are recorded in the financial year in which the accrual event occurs; costs are registered in the year of the revenues they relate to.",
  "trap": "When costs cannot reasonably be related to revenues (for example administrative costs), they are attributed directly to the accounting period in which they are paid."
 },
 {
  "cat": "Principles",
  "title": "Accrual Event vs Cash Event",
  "meaning": "The accrual event is the moment the transaction takes effect, when the company signs the contract transferring the goods and all the risk included. The cash event is the moment cash or its equivalent is actually received or paid.",
  "how": "Car sales of 1 million reached in December 2013 with cash collected in January 2014: revenue of 1 million is counted in 2013 (accrual), cash in 2013 is 0 and there is a cash inflow of 1 million in 2014.",
  "trap": "The same single transaction generates both an accrual event and a cash event, in different years. Do not treat them as alternative readings of the same figure."
 },
 {
  "cat": "Principles",
  "title": "Fair Value",
  "meaning": "IFRS defines fair value as the amount for which an asset could be exchanged, or a liability settled, between knowledgeable, willing parties in an arm's length transaction. It became relevant as an alternative to the cost method for evaluating assets and liabilities.",
  "how": "It reflects an objective evaluation external to the enterprise, related to the knowledge and estimation of sellers and buyers. Land bought for 500,000 and worth 550,000 after two years stays at 500,000 under cost, and is revalued to 550,000 under fair value.",
  "trap": "Fair value is not the company's own opinion of what an asset is worth: it is anchored to an external, market-based estimate between willing parties."
 },
 {
  "cat": "Principles",
  "title": "Benchmark vs Allowed Treatment",
  "meaning": "When IFRS gives the option to choose between accounting criteria, the preferred one is called the benchmark treatment and the possible alternative is called the allowed treatment.",
  "how": "Benchmark treatment indicates the preferred accounting criteria for a specific category; allowed treatment is the legitimate alternative for that category.",
  "trap": "The allowed treatment is a fully legitimate option, not an irregularity. The notes are what tell the reader which of the two the company actually applied."
 },
 {
  "cat": "Principles",
  "title": "Impairment Test",
  "meaning": "IFRS principles state that companies must review all assets to look for any indication of unrecoverable loss of their value. This assessment is called the impairment test.",
  "how": "The frequency depends on the category of asset. Goodwill, because of its indefinite nature, must be tested every year, and the loss of value is credited in the income statement.",
  "trap": "Impairment is about an unrecoverable loss of value, not about routine wear. Systematic allocation of cost over useful life is depreciation or amortization, which is a different mechanism."
 },
 {
  "cat": "Balance Sheet",
  "title": "The Balance Sheet",
  "meaning": "The balance sheet describes the circumstances of the enterprise as an entity in a precise moment. It comprises assets, which report the enterprise's resources, and equity and liabilities, which list the rights to those resources held by shareholders and third parties.",
  "how": "Every item is expressed in financial terms. The two sections mirror each other: what the company has, and who has claims over it.",
  "trap": "It is a snapshot at a precise date, not a flow over the year. Flows over the period are what the income statement and the cash flow statement describe."
 },
 {
  "cat": "Balance Sheet",
  "title": "Current vs Noncurrent",
  "meaning": "An entity must present a classified balance sheet, separating assets and liabilities into current and noncurrent.",
  "how": "Current assets are resources retained within the normal operating cycle or within 12 months, such as cash or inventories of material. Current liabilities are those settled within the operating cycle or due within 12 months, such as short-term loans. Everything else is noncurrent, for instance manufacturing machines and equipment.",
  "trap": "The test is the normal operating cycle or the 12-month horizon, not the nature of the item in itself: the same kind of financial asset can sit under current or noncurrent depending on its horizon."
 },
 {
  "cat": "Balance Sheet",
  "title": "Recognition of Assets",
  "meaning": "Assets are identified by the presence of a direct or indirect contribution to companies' financial inflows or their equivalents. The initial recognition of assets under IFRS is at cost.",
  "how": "Subsequent measurement follows one of two alternative models: the cost method or the fair value method. Assets are registered with current monetary values, so items of different periods are summed without adjusting for variations in purchasing power.",
  "trap": "Property rights are not essential for recognition. Enterprises must account for assets retained by leasing when the lease substantially transfers all the risks and benefits."
 },
 {
  "cat": "Balance Sheet",
  "title": "Property, Plant and Equipment (PPE)",
  "meaning": "PPE includes tangible assets retained by the enterprise for long-term use, employed in the production of goods and services or in supporting activities: production machinery, buildings, land, office equipment.",
  "how": "Initial measurement is at cost. Measurement after initial recognition follows either the cost model, where the asset is carried at cost, or the revaluation model, where it is carried at a revalued (fair value) amount.",
  "trap": "With the sole exception of land, PPE must be depreciated, whichever of the two measurement models is applied."
 },
 {
  "cat": "Balance Sheet",
  "title": "Depreciation",
  "meaning": "Depreciation is a noncash expense that reduces the value of an asset as a result of use, age or obsolescence. The decrease in the value of the asset is balanced with a cost in the income statement.",
  "how": "It touches two statements at once: the balance sheet, where the value of PPE decreases, and the income statement, where depreciation appears as a noncash cost. Depreciation begins when the asset is available for use and continues until the asset is derecognized, even if it is idle.",
  "trap": "An idle asset keeps being depreciated. And because depreciation is a noncash cost, it lowers profit without any cash leaving the company."
 },
 {
  "cat": "Balance Sheet",
  "title": "Depreciation Methods",
  "meaning": "The depreciation methods allowed under IFRS are straight-line, declining and usage. The straight-line method is favored by international standards.",
  "how": "With straight-line, companies apportion the value of the asset in equal parts over its useful life. A machine bought for 10,000 with a useful life of 10 years and no residual value generates a yearly depreciation of 10,000 / 10 = 1,000 per year.",
  "trap": "Determining depreciation means defining both the period (useful life) and the method. Land is the exception that is never depreciated."
 },
 {
  "cat": "Balance Sheet",
  "title": "Intangible Assets",
  "meaning": "IFRS defines intangible assets as identifiable nonmonetary assets without physical substance. Their three critical attributes are identifiability, control (the power to obtain benefits from the asset) and the existence of future economic benefits, such as revenues or reduced future costs.",
  "how": "They split into intangibles with a finite life, such as patents, and intangibles with an indefinite life, among which goodwill is of particular interest. Initial measurement is at cost; the benchmark treatment afterwards is cost less any amortization and impairment losses.",
  "trap": "The revaluation model is allowed only if fair value can be determined by reference to an active market (for example milk quotas), and revaluation increases are credited directly to the revaluation reserve under equity."
 },
 {
  "cat": "Balance Sheet",
  "title": "Goodwill",
  "meaning": "Goodwill can occur from mergers and acquisitions when the purchasing value is higher than the fair value of the resources acquired. It is the difference between the acquisition cost and the participation of the purchaser in the fair value of assets less liabilities.",
  "how": "It sits under intangible assets and has an indefinite life, so IFRS requires an impairment test every year. The loss of its value is credited in the income statement.",
  "trap": "Goodwill is not amortized over a useful life like a patent. Its indefinite nature is exactly why it gets the annual impairment test instead."
 },
 {
  "cat": "Balance Sheet",
  "title": "Financial Assets: the Four Categories",
  "meaning": "IFRS defines financial instruments as contracts that give rise to a financial asset of one entity and a financial liability or equity instrument of another entity. Financial assets can be found under both noncurrent and current assets.",
  "how": "The four categories are: financial assets at fair value through profit or loss (FVTPL), loans and receivables, held-to-maturity investments, and available-for-sale financial assets.",
  "trap": "The category is what drives the measurement rule, so classification is the first thing to settle before asking how an instrument is valued."
 },
 {
  "cat": "Balance Sheet",
  "title": "FVTPL — Fair Value Through Profit or Loss",
  "meaning": "FVTPL includes assets held for trading, such as derivatives, and financial assets acquired or held for the purpose of selling in the short term.",
  "how": "Initial measurement at fair value; subsequent measurement at fair value; the balance of the fair value variation goes to the income statement.",
  "trap": "This is the category where fair value swings hit profit directly. Available-for-sale assets are also measured at fair value, but their variation goes to equity instead."
 },
 {
  "cat": "Balance Sheet",
  "title": "Available-for-Sale Financial Assets",
  "meaning": "Any nonderivative financial assets designated on initial recognition as available for sale.",
  "how": "Initial measurement at fair value plus transaction costs; subsequent measurement at fair value; the balance of the fair value variation goes to the revaluation reserve.",
  "trap": "Same fair value measurement as FVTPL, opposite destination for the variation: revaluation reserve in equity, not the income statement."
 },
 {
  "cat": "Balance Sheet",
  "title": "Held-to-Maturity Investments",
  "meaning": "Nonderivative financial assets with fixed or determinable payments that the entity intends to hold to maturity.",
  "how": "Initial measurement at fair value plus transaction costs; subsequent measurement at amortized cost using the effective interest method.",
  "trap": "Because they are carried at amortized cost, there is no fair value variation to allocate either to profit or to reserves."
 },
 {
  "cat": "Balance Sheet",
  "title": "Loans and Receivables",
  "meaning": "Nonderivative financial assets with fixed or determinable payments that are not quoted in an active market and are not held for trading. Trade receivables are an important item of this category, usually listed under current assets.",
  "how": "Initial measurement at fair value plus transaction costs; subsequent measurement at amortized cost using the effective interest method.",
  "trap": "What excludes an instrument from this category is being quoted in an active market or being held for trading, not the length of its horizon."
 },
 {
  "cat": "Balance Sheet",
  "title": "Trade Receivables",
  "meaning": "Trade receivables originate from the operating activity of enterprises and account for cash to be received in the face of selling activity.",
  "how": "A company selling products for 100,000 in December, with 50% paid immediately, records revenues of 100,000 in the income statement, trade receivables of 50,000 and cash of 50,000 under assets.",
  "trap": "They are calculated at net realizable value, considering the probability that some customers will not pay. Since a precise calculation is impossible, enterprises use statistical methods based on historical values."
 },
 {
  "cat": "Balance Sheet",
  "title": "Inventories",
  "meaning": "Inventories are assets held in the ordinary course of business: finished goods produced for sale, work in progress generated in the production process, and materials and supplies consumed in production.",
  "how": "They are required to be stated at the lower end between cost and net realizable value. Cost comprises purchase costs (including taxes, transport and handling) net of trade discounts, conversion costs (fixed and variable manufacturing overheads) and other costs to bring inventories to their present location and condition.",
  "trap": "Net realizable value is the estimated selling price in the ordinary course of business less the estimated cost of completion and the estimated costs necessary to make the sale, so it is not simply the market price."
 },
 {
  "cat": "Balance Sheet",
  "title": "FIFO vs Weighted Average",
  "meaning": "The cost evaluation of inventories must take into account the sequence of use of goods. Two methods are allowed by IFRS: first in first out (FIFO) and weighted average.",
  "how": "Under FIFO the goods that leave the firm are those that have been in inventory the longest, so the inventory on hand is assumed to be the latest. Under weighted average the physical flow is ignored and each unit is valued at total costs of goods produced and bought divided by the quantity produced or bought in the period.",
  "trap": "LIFO (last in first out) is not permitted by IFRS: the logic that the goods leaving are those held for the shortest time is considered unrealistic."
 },
 {
  "cat": "Balance Sheet",
  "title": "Equity",
  "meaning": "IFRS defines equity as the residual interest in the assets of the enterprise after deducting all its liabilities. It reports all shareholders' rights.",
  "how": "It is organized in four categories: capital, reserves, profit or loss brought forward, and profit or loss for the year.",
  "trap": "Equity is a residual, not an independent valuation of the company: it follows from assets minus liabilities, and has no direct relation to market capitalization."
 },
 {
  "cat": "Balance Sheet",
  "title": "Capital and Par Value",
  "meaning": "Capital accounts for the portion of equity obtained directly by shareholders' provisions, made at the corporation's foundation or in subsequent periods.",
  "how": "Capital is reported at par (nominal) value, the value stated in the enterprise's charter and at which shares are offered initially. Under IFRS, capital is decreased by receivables from shareholders, shares issued but not fully paid, and treasury shares.",
  "trap": "Par value is unrelated to market value and to the issuing value at which shares may be put on the market in the future."
 },
 {
  "cat": "Balance Sheet",
  "title": "Reserves",
  "meaning": "Reserves are additional shareholders' rights generated during the normal operations of the company. Their types vary with national regulations.",
  "how": "The most common are: share premium reserves, arising when shares are sold above nominal value; the revaluation reserve, from fair value revaluation of assets; profit brought forward, from prior-year profit not distributed as dividends; and other reserves such as legal and statutory ones.",
  "trap": "In a share issue above par, the cash inflow is split in equity: the nominal portion goes to capital, the exceeding portion to the share premium reserve."
 },
 {
  "cat": "Balance Sheet",
  "title": "Liabilities",
  "meaning": "IFRS defines a liability as a present obligation arising from a past event, the settlement of which is expected to lead to an outflow of future economic benefits from the entity.",
  "how": "Among the items reported, three deserve attention: provisions for liabilities and charges, pensions and similar obligations, and financial liabilities.",
  "trap": "The obligation must already exist because of a past event. An intention to spend in the future, with no obligating event behind it, is not a liability."
 },
 {
  "cat": "Balance Sheet",
  "title": "Provisions",
  "meaning": "Provisions are a particular kind of liability characterized by an uncertain timing or amount.",
  "how": "Three conditions must hold for recognition: a present obligation has arisen as a result of a past (obligating) event, the cash outflow is probable (more likely than not), and the amount can be estimated reliably.",
  "trap": "All three conditions are required together. A possible but not probable outflow, or an amount that cannot be reliably estimated, does not produce a provision in the balance sheet."
 },
 {
  "cat": "Balance Sheet",
  "title": "Measuring Provisions",
  "meaning": "Because of their uncertain nature, provisions are based on estimations of the expenditure required to settle the present obligation at the balance sheet date.",
  "how": "One-off events, such as environmental cleanup or the settlement of a lawsuit, are measured at the most likely amount. Recurring events, such as warranties or customer refunds, are measured at a probability-weighted expected value, triangulating historical data with future forecasts.",
  "trap": "Both calculations are made at a discounted present value, using a pretax discount rate reflecting current market assessments of the time value of money and the risks specific to the liability."
 },
 {
  "cat": "Balance Sheet",
  "title": "Pensions: Defined Contribution vs Defined Benefit",
  "meaning": "Pensions and similar obligations account for postemployment benefit plans. IAS/IFRS distinguishes between defined contribution plans and defined benefit plans.",
  "how": "Under a defined contribution plan the enterprise pays fixed contributions into a fund and has no obligation to make further payments if the fund cannot pay all employees' claims. Under a defined benefit plan the company calculates the present value of future obligations, using actuarial assumptions to assess the value.",
  "trap": "The dividing line is where the risk sits: with a defined contribution plan the obligation stops at the contribution, with a defined benefit plan the company carries the future obligation."
 },
 {
  "cat": "Balance Sheet",
  "title": "Financial Liabilities",
  "meaning": "A financial liability is a contractual obligation to deliver cash or another financial asset to another entity under conditions that are potentially unfavorable to the entity.",
  "how": "IFRS recognizes two classes: financial liabilities at FVTPL (initial and subsequent measurement at fair value, variation to the income statement) and other financial liabilities (initial measurement at fair value plus transaction costs, then amortized cost using the effective interest method).",
  "trap": "The FVTPL class mirrors the asset side and includes liabilities held for trading, such as an obligation for securities borrowed in a short sale."
 },
 {
  "cat": "Income Statement",
  "title": "The Income Statement",
  "meaning": "The income statement, also labelled Profit and Loss Account, can be considered the summary of the economic flows that occurred during a reference accounting period.",
  "how": "IFRS requires a minimum set of items: revenue, gains and losses related to financial assets, finance costs, share of the profit or loss of associates and joint ventures, tax expenses, and a single amount for the total of discontinued items.",
  "trap": "It is built on accrual logic, like the balance sheet. Only the cash flow statement is prepared with cash logic."
 },
 {
  "cat": "Income Statement",
  "title": "By Nature vs By Function",
  "meaning": "Income statements can be presented in two different formats: by nature or by function.",
  "how": "The format by nature aggregates costs on the basis of what they are: raw materials and consumables used, employee benefits expense, depreciation and amortization, other operating expenses. The format by function analyses costs by their use in company activities: cost of sales, distribution costs, administrative expenses.",
  "trap": "Gross profit appears in the by-function format, right after revenue less cost of sales. Both formats converge on the same operating profit (EBIT)."
 },
 {
  "cat": "Income Statement",
  "title": "Continuing vs Discontinued Operations",
  "meaning": "Regardless of the format chosen, operations are divided into continuing and discontinuing, allowing the reader to clearly identify which activities will be retained by the company in future years.",
  "how": "The bottom part of the income statement reports revenues and costs from discontinued operations and gains or losses from asset disposals.",
  "trap": "Gains and losses on disposal are calculated as the difference between the selling value and the fair value of the assets at the moment of disposal."
 },
 {
  "cat": "Income Statement",
  "title": "Revenue Recognition",
  "meaning": "Revenues account for the sales of products and services according to the accrual principle. For their recognition under IFRS, property rights are not a sufficient condition.",
  "how": "For sales of goods all these conditions must be satisfied: the seller has transferred significant risks and rights over the goods, has no managerial involvement or control over them, the amount of revenue can be measured reliably, economic benefits are likely to flow to the seller, and related costs can be measured reliably.",
  "trap": "For services, similar conditions apply, but revenues are recognized by reference to the stage of completion of the transaction at the balance sheet date."
 },
 {
  "cat": "Income Statement",
  "title": "Operating Costs",
  "meaning": "Operating costs account for the resources used in the operating activities of the enterprise.",
  "how": "The main categories are: cost of raw materials, supplies and goods for resale, listed as consumption (materials purchased less the changes in inventory); cost of services; depreciation, amortization and changes in value of noncurrent assets; write-offs for durable loss of value recognized with the impairment test; finished goods and WIP variations; and employee benefit expenses including wages, social security contributions, staff indemnity and pension benefits.",
  "trap": "Materials appear as consumption, not as purchases: the inventory variation is what turns one into the other."
 },
 {
  "cat": "Income Statement",
  "title": "Operating Profit (EBIT)",
  "meaning": "The result of operating activities, addressed alternatively as operating profit, operating income or net operating income, and most commonly called earnings before interest and taxes (EBIT).",
  "how": "It is obtained as revenues minus operating costs, and it closes the section of the income statement devoted to operating activities, before any financial item.",
  "trap": "EBIT stops before interest and taxes by construction: finance costs and tax expense belong to the sections below it."
 },
 {
  "cat": "Income Statement",
  "title": "Financial Income and Charges",
  "meaning": "Below the operating section, the income statement lists income and charges related to financial activities.",
  "how": "These include profit from shares of profit of associates, investment revenues, write-off of financial assets from the impairment test, fair value variation of financial activities classified as FVTPL, and finance costs such as financial interests related to bank debt and bonds.",
  "trap": "Adding financial income and subtracting financial expenses to EBIT gives profit before taxes from continuing operations; subtracting taxes gives profit after taxes from continuing operations, and only then discontinued operations lead to net profit."
 },
 {
  "cat": "Income Statement",
  "title": "Assets Held for Sale",
  "meaning": "Discontinuing operations report income or losses due to assets held for sale.",
  "how": "An asset is held for sale when management is committed to a plan to sell, the asset is available for immediate sale, an active program to locate a buyer is initiated, the sale is highly probable within 12 months, the asset is actively marketed at a price reasonable in relation to its fair value, and it is unlikely the plan will be significantly changed or withdrawn.",
  "trap": "Merely intending to sell is not enough: the criteria require a committed plan, active marketing and a highly probable sale within 12 months."
 },
 {
  "cat": "Cash Flow",
  "title": "The Cash Flow Statement",
  "meaning": "The cash flow statement shows the capability of the enterprise to generate cash flow in a specific period.",
  "how": "Contrary to the balance sheet and the income statement, it is prepared with cash logic and not with accrual logic.",
  "trap": "This is the one statement where the accrual principle does not drive the numbers, which is why a profitable company can still show weak cash generation."
 },
 {
  "cat": "Cash Flow",
  "title": "Direct vs Indirect Method",
  "meaning": "IFRS allows two methods for presenting the cash flow statement: the direct method, encouraged by IAS/IFRS, and the indirect method.",
  "how": "The direct method shows each major class of gross cash receipts and gross cash payments. The indirect method starts from accrual results, usually operating profit or net profit, and adjusts them for the effects of noncash transactions.",
  "trap": "The indirect method is often adopted in practice precisely because it highlights the relation between accrual results and financial flows."
 },
 {
  "cat": "Cash Flow",
  "title": "Operating, Investing and Financing Activities",
  "meaning": "Regardless of the method chosen, the cash flow statement is divided into three categories of activities.",
  "how": "Operating activities refer to cash flows generated or employed in the current activities of the company, such as cash received from customers and cash paid to suppliers and employees. Investing activities are the acquisition and disposal of long-term assets and other investments that are not cash equivalents. Financing activities alter the equity capital and borrowing structure of the enterprise.",
  "trap": "Buying a machine is investing, not operating, even though the machine serves day-to-day production."
 },
 {
  "cat": "Notes & Reporting",
  "title": "Notes to the Financial Statements",
  "meaning": "The annual report includes an additional compulsory document that is crucial for understanding the financial statements: the notes.",
  "how": "They must include information about the basis of preparation and the specific accounting policies used, additional information not presented in the four statements but relevant to understanding them, and any information required by IFRS that is not shown on the face of the statements.",
  "trap": "The notes are where the reader discovers which measurement method was adopted when a choice between the cost model and the fair value model was available."
 },
 {
  "cat": "Notes & Reporting",
  "title": "Segmental Reporting",
  "meaning": "IFRS requires enterprises to report financial and descriptive information about their reportable segments, which are operating segments or aggregations of operating segments.",
  "how": "Segments refer either to specific businesses (business segments) or to specific geographical areas (geographical segments). Segmental reporting must include important financial information such as sales, results, assets, liabilities, depreciation and noncash expenses other than depreciation.",
  "trap": "A worked example is the Volkswagen Group 2012 annual report, which splits its income statement into the Automotive and Financial Services divisions."
 }
];

const QUESTIONS = [
 {
  "cat": "Principles",
  "title": "Accrual vs Cash Timing",
  "question": "On 18 December Year 1, a software company signs a contract and delivers a perpetual licence to a client, transferring all significant risks and rights at that moment. The invoice is issued the same day for 240,000, and the client pays in full on 20 January Year 2. The company closes its accounting year on 31 December. How should this transaction be treated?",
  "options": {
   "A": "Revenue of 240,000 in Year 2, when the cash is received, with no entry in Year 1.",
   "B": "Revenue of 240,000 in Year 1 and a cash inflow of 240,000 in Year 2.",
   "C": "Revenue of 120,000 in Year 1 and 120,000 in Year 2, split across the two periods.",
   "D": "Revenue of 240,000 in Year 1 and a cash inflow of 240,000 in Year 1."
  },
  "correct": "B",
  "expl": {
   "A": "Incorrect. This applies cash logic to the income statement. Under the accrual principle revenue is recognized when the transaction takes effect, which here is the December delivery, not when cash arrives.",
   "B": "Correct. The accrual event is December of Year 1, when the licence is delivered and the significant risks and rights are transferred, so revenue belongs to Year 1. The cash event is January of Year 2, so the cash inflow of 240,000 appears in Year 2.",
   "C": "Incorrect. There is no basis for splitting the amount: the transfer of risks and rights happens entirely in December of Year 1, and the payment happens entirely in January of Year 2.",
   "D": "Incorrect. The revenue timing is right but the cash timing is not: no cash is received in Year 1, so the cash inflow cannot be recorded there."
  },
  "recap": "Correct. The accrual event is December of Year 1, when the licence is delivered and the significant risks and rights are transferred, so revenue belongs to Year 1. The cash event is January of Year 2, so the cash inflow of 240,000 appears in Year 2."
 },
 {
  "cat": "Principles",
  "title": "Fair Value vs Cost Model",
  "question": "Company A owns a plot of land initially bought for 800,000. Three years later the market value of the land is 870,000. Land is not depreciated. What is the value in the balance sheet under the two measurement models?",
  "options": {
   "A": "800,000 under the cost method and 870,000 under the fair value method.",
   "B": "870,000 under both methods, since IFRS always requires the market value.",
   "C": "800,000 under both methods, since the revaluation is only recognized on sale.",
   "D": "870,000 under the cost method and 800,000 under the fair value method."
  },
  "correct": "A",
  "expl": {
   "A": "Correct. Adopting the cost method, the value of the land remains at 800,000 and the revaluation is not counted. Adopting the fair value method, the land is revalued and included in the balance sheet at 870,000.",
   "B": "Incorrect. IFRS does not always require fair value: it is an alternative to the cost method, and where the option exists the company chooses and discloses its choice in the notes.",
   "C": "Incorrect. This describes only the cost method. Under the fair value method the revaluation is recognized in the balance sheet without waiting for a sale.",
   "D": "Incorrect. The two values are swapped: the cost method keeps the historical 800,000, while the fair value method brings the asset to 870,000."
  },
  "recap": "Correct. Adopting the cost method, the value of the land remains at 800,000 and the revaluation is not counted. Adopting the fair value method, the land is revalued and included in the balance sheet at 870,000."
 },
 {
  "cat": "Principles",
  "title": "Benchmark vs Allowed Treatment",
  "question": "The notes of a company state that, for a category where IFRS permits a choice, management has applied the allowed treatment rather than the benchmark treatment. How should a reader interpret this?",
  "options": {
   "A": "The company has breached IFRS and the statements are not compliant.",
   "B": "The company has applied the preferred IFRS criteria for that category.",
   "C": "The company has applied the legitimate alternative criteria, while the benchmark treatment is the preferred one.",
   "D": "The terminology has no accounting meaning and only concerns internal reporting."
  },
  "correct": "C",
  "expl": {
   "A": "Incorrect. The allowed treatment is one of the options IFRS itself makes available; applying it does not make the financial statements non-compliant.",
   "B": "Incorrect. The preferred criteria is called the benchmark treatment. The allowed treatment is the alternative to it.",
   "C": "Correct. Benchmark treatment indicates the preferred accounting criteria for a specific category, while allowed treatment is the possible legitimate alternative for that category.",
   "D": "Incorrect. The distinction is an IFRS concept about which accounting criteria are preferred and which are permitted alternatives, and the choice must be disclosed in the notes."
  },
  "recap": "Correct. Benchmark treatment indicates the preferred accounting criteria for a specific category, while allowed treatment is the possible legitimate alternative for that category."
 },
 {
  "cat": "Principles",
  "title": "Purpose of the Impairment Test",
  "question": "A manufacturer reviews its assets at year end and finds that a production line has suffered a durable loss of value that will not be recovered. Which mechanism captures this, and how does it differ from depreciation?",
  "options": {
   "A": "The impairment test, which identifies an unrecoverable loss of value; depreciation instead allocates cost systematically over useful life.",
   "B": "Depreciation, which is precisely the tool for unrecoverable losses of value.",
   "C": "The impairment test, which replaces depreciation for the remaining useful life of the asset.",
   "D": "The revaluation model, which is the only way to reduce the carrying value of an asset."
  },
  "correct": "A",
  "expl": {
   "A": "Correct. IFRS requires companies to review all assets for any indication of unrecoverable loss of their value, and this assessment is the impairment test. Depreciation is a different mechanism: it is the systematic reduction of value due to use, age or obsolescence over the asset's useful life.",
   "B": "Incorrect. Depreciation reflects use, age and obsolescence spread across useful life; it is not the instrument for recognizing a specific durable loss of value.",
   "C": "Incorrect. The impairment test does not replace depreciation: an asset that is impaired continues to be depreciated over its remaining useful life.",
   "D": "Incorrect. The revaluation model is a measurement option based on fair value; the specific mechanism for identifying unrecoverable losses is the impairment test."
  },
  "recap": "Correct. IFRS requires companies to review all assets for any indication of unrecoverable loss of their value, and this assessment is the impairment test. Depreciation is a different mechanism: it is the systematic reduction of value due to use, age or obsolescence over the asset's useful life."
 },
 {
  "cat": "Principles",
  "title": "Compulsory Documents under IFRS",
  "question": "Which set of documents does IFRS make compulsory within the annual report?",
  "options": {
   "A": "Balance sheet, income statement and cash flow statement only.",
   "B": "Balance sheet, income statement, cash flow statement and statement of changes in equity, plus the notes to the financial statements.",
   "C": "Balance sheet, income statement, cash flow statement, statement of changes in equity and the corporate social responsibility report.",
   "D": "Balance sheet and income statement, with the other documents left to the company's discretion."
  },
  "correct": "B",
  "expl": {
   "A": "Incorrect. This omits the statement of changes in equity, which details variations in equity through the year, and the notes.",
   "B": "Correct. IFRS requires four financial statements — balance sheet, income statement, cash flow statement and statement of changes in equity — and in addition the notes, which explain the rules followed and the choices made in preparing them.",
   "C": "Incorrect. Environmental, corporate and social responsibility reports are published by many enterprises but they are not part of the compulsory financial reporting set.",
   "D": "Incorrect. All four statements are compulsory, not just two, and the notes are compulsory as well."
  },
  "recap": "Correct. IFRS requires four financial statements — balance sheet, income statement, cash flow statement and statement of changes in equity — and in addition the notes, which explain the rules followed and the choices made in preparing them."
 },
 {
  "cat": "Principles",
  "title": "Costs That Cannot Be Matched to Revenues",
  "question": "A company incurs general administrative costs during the year that cannot be reasonably related to any specific revenue. Under the accrual principle, how are they treated?",
  "options": {
   "A": "They are capitalized as an asset until a related revenue is identified.",
   "B": "They are attributed directly to the accounting period in which they are paid.",
   "C": "They are spread evenly over the following five accounting periods.",
   "D": "They are excluded from the income statement and reported only in the notes."
  },
  "correct": "B",
  "expl": {
   "A": "Incorrect. Administrative costs of the period are not resources generating identifiable future inflows, so they are not capitalized as assets waiting for a matching revenue.",
   "B": "Correct. Costs are normally registered in the financial year of the revenues they relate to, but when they cannot be reasonably related to revenues, as with administrative costs, they are attributed directly to the accounting period in which they are paid.",
   "C": "Incorrect. There is no rule spreading unmatched administrative costs across future periods; they belong to the period concerned.",
   "D": "Incorrect. They are ordinary operating costs of the period and appear in the income statement, not only as a note disclosure."
  },
  "recap": "Correct. Costs are normally registered in the financial year of the revenues they relate to, but when they cannot be reasonably related to revenues, as with administrative costs, they are attributed directly to the accounting period in which they are paid."
 },
 {
  "cat": "Balance Sheet",
  "title": "Current vs Noncurrent Classification",
  "question": "At year end a company holds: (1) raw material inventories expected to be used in three months, (2) a production machine with a ten-year life, (3) a bank loan due in eight months, (4) a bond repayable in six years. How are these classified?",
  "options": {
   "A": "(1) current asset, (2) noncurrent asset, (3) current liability, (4) noncurrent liability.",
   "B": "(1) noncurrent asset, (2) noncurrent asset, (3) current liability, (4) current liability.",
   "C": "(1) current asset, (2) current asset, (3) noncurrent liability, (4) noncurrent liability.",
   "D": "(1) current asset, (2) noncurrent asset, (3) noncurrent liability, (4) current liability."
  },
  "correct": "A",
  "expl": {
   "A": "Correct. Inventories used within the operating cycle or 12 months are current assets; a ten-year production machine is a noncurrent asset; a loan due within 12 months is a current liability; a bond repayable in six years is a noncurrent liability.",
   "B": "Incorrect. Inventories consumed within three months sit clearly within the 12-month horizon, so they are current assets, and a six-year bond is not due within 12 months.",
   "C": "Incorrect. A machine with a ten-year life is retained well beyond the operating cycle, making it noncurrent, and a loan due in eight months falls inside the 12-month horizon.",
   "D": "Incorrect. The two liabilities are inverted: the eight-month loan is current and the six-year bond is noncurrent."
  },
  "recap": "Correct. Inventories used within the operating cycle or 12 months are current assets; a ten-year production machine is a noncurrent asset; a loan due within 12 months is a current liability; a bond repayable in six years is a noncurrent liability."
 },
 {
  "cat": "Balance Sheet",
  "title": "Straight-Line Depreciation",
  "question": "A company buys a machine on 1 January for 24,000, to be used immediately in manufacturing. Its useful life is 8 years and it is worthless at the end of that period. The company applies the straight-line method. What is the yearly depreciation, and what is the net book value at the end of Year 3?",
  "options": {
   "A": "Yearly depreciation 3,000; net book value at the end of Year 3 equal to 15,000.",
   "B": "Yearly depreciation 3,000; net book value at the end of Year 3 equal to 9,000.",
   "C": "Yearly depreciation 8,000; net book value at the end of Year 3 equal to 0.",
   "D": "Yearly depreciation 2,400; net book value at the end of Year 3 equal to 16,800."
  },
  "correct": "A",
  "expl": {
   "A": "Correct. Straight-line depreciation apportions the value in equal parts over useful life: 24,000 / 8 = 3,000 per year. After three years the accumulated depreciation is 9,000, so the net book value (written down value) is 24,000 − 9,000 = 15,000.",
   "B": "Incorrect. 9,000 is the accumulated depreciation after three years, not the net book value; the net book value is what remains of the original 24,000 after subtracting it.",
   "C": "Incorrect. This divides by a wrong number of years: the useful life is 8 years, so the annual charge is 3,000, and the asset is not fully depreciated after three years.",
   "D": "Incorrect. 2,400 would correspond to a ten-year useful life; here the useful life is stated as 8 years."
  },
  "recap": "Correct. Straight-line depreciation apportions the value in equal parts over useful life: 24,000 / 8 = 3,000 per year. After three years the accumulated depreciation is 9,000, so the net book value (written down value) is 24,000 − 9,000 = 15,000."
 },
 {
  "cat": "Balance Sheet",
  "title": "Depreciation, Land and Idle Assets",
  "question": "Which statement about depreciation is correct under IFRS?",
  "options": {
   "A": "Depreciation is a cash expense that reduces both profit and cash at the same time.",
   "B": "All items of PPE, land included, must be depreciated over their useful life.",
   "C": "Depreciation stops as soon as an asset becomes idle, and land is never depreciated.",
   "D": "Depreciation continues even if the asset is idle, and land is the exception that is not depreciated."
  },
  "correct": "D",
  "expl": {
   "A": "Incorrect. Depreciation is explicitly a noncash expense: it reduces the value of the asset and profit, but no cash leaves the company for it.",
   "B": "Incorrect. Land is the exception: with the exception of land, PPE must be depreciated.",
   "C": "Incorrect about idle assets. Depreciation begins when the asset is available for use and continues until the asset is derecognized, even if it is idle.",
   "D": "Correct. Depreciation runs from when the asset is available for use until it is derecognized, even during idle periods, and land is the one item of PPE that is not depreciated."
  },
  "recap": "Correct. Depreciation runs from when the asset is available for use until it is derecognized, even during idle periods, and land is the one item of PPE that is not depreciated."
 },
 {
  "cat": "Balance Sheet",
  "title": "Attributes of an Intangible Asset",
  "question": "A company is assessing whether an item qualifies as an intangible asset under IFRS. Which three critical attributes must be present?",
  "options": {
   "A": "Identifiability, control, and the existence of future economic benefits.",
   "B": "Physical substance, identifiability, and a finite useful life.",
   "C": "Legal ownership, an active market, and an indefinite useful life.",
   "D": "Identifiability, legal ownership, and immediate cash generation."
  },
  "correct": "A",
  "expl": {
   "A": "Correct. IFRS defines intangible assets as identifiable nonmonetary assets without physical substance, and their three critical attributes are identifiability, control (the power to obtain benefits from the asset) and the existence of future economic benefits such as revenues or reduced future costs.",
   "B": "Incorrect. Intangible assets are by definition without physical substance, and they may have either a finite or an indefinite life.",
   "C": "Incorrect. An active market matters only for applying the revaluation model, and an indefinite useful life is a possible feature, not a requirement.",
   "D": "Incorrect. What is required is control rather than legal ownership, and the benefits are future economic benefits, which may also take the form of reduced future costs rather than immediate cash."
  },
  "recap": "Correct. IFRS defines intangible assets as identifiable nonmonetary assets without physical substance, and their three critical attributes are identifiability, control (the power to obtain benefits from the asset) and the existence of future economic benefits such as revenues or reduced future costs."
 },
 {
  "cat": "Balance Sheet",
  "title": "Goodwill and the Annual Impairment Test",
  "question": "A group acquires a company paying more than the fair value of the acquired resources net of liabilities. How is the resulting goodwill treated in subsequent years?",
  "options": {
   "A": "It is amortized on a straight-line basis over a maximum of five years.",
   "B": "It is subject to an impairment test every year, and any loss of value is credited in the income statement.",
   "C": "It is revalued annually to fair value with the variation credited to the revaluation reserve.",
   "D": "It remains at its original amount and is only adjusted when the acquired business is sold."
  },
  "correct": "B",
  "expl": {
   "A": "Incorrect. Goodwill has an indefinite life, so it does not follow the amortization logic used for intangibles with a finite life such as patents.",
   "B": "Correct. Goodwill is the difference between acquisition cost and the purchaser's participation in the fair value of assets less liabilities. Because of its indefinite nature, IFRS requires an impairment test every year, and the loss of its value is credited in the income statement.",
   "C": "Incorrect. Goodwill is not routinely revalued upwards to fair value through the revaluation reserve; what IFRS mandates is the annual test for loss of value.",
   "D": "Incorrect. Waiting for a disposal would ignore the compulsory annual impairment test that IFRS requires precisely because the asset has an indefinite life."
  },
  "recap": "Correct. Goodwill is the difference between acquisition cost and the purchaser's participation in the fair value of assets less liabilities. Because of its indefinite nature, IFRS requires an impairment test every year, and the loss of its value is credited in the income statement."
 },
 {
  "cat": "Balance Sheet",
  "title": "Where Fair Value Variations Land",
  "question": "A company holds two portfolios: one of derivatives held for trading (classified at fair value through profit or loss) and one of nonderivative assets designated on initial recognition as available for sale. Both are measured at fair value after acquisition. Where does the balance of the fair value variation go in each case?",
  "options": {
   "A": "To the income statement for both portfolios.",
   "B": "To the revaluation reserve for both portfolios.",
   "C": "To the income statement for the FVTPL portfolio and to the revaluation reserve for the available-for-sale portfolio.",
   "D": "To the revaluation reserve for the FVTPL portfolio and to the income statement for the available-for-sale portfolio."
  },
  "correct": "C",
  "expl": {
   "A": "Incorrect. Only the FVTPL category sends its fair value variation to the income statement; the available-for-sale category does not.",
   "B": "Incorrect. Only the available-for-sale category sends its fair value variation to the revaluation reserve; FVTPL variations hit profit.",
   "C": "Correct. Both categories are measured at fair value after acquisition, but the destination of the variation differs: FVTPL variations go to the income statement, while available-for-sale variations go to the revaluation reserve in equity.",
   "D": "Incorrect. The two destinations are inverted: trading assets at FVTPL affect profit, while available-for-sale assets affect the revaluation reserve."
  },
  "recap": "Correct. Both categories are measured at fair value after acquisition, but the destination of the variation differs: FVTPL variations go to the income statement, while available-for-sale variations go to the revaluation reserve in equity."
 },
 {
  "cat": "Balance Sheet",
  "title": "Held-to-Maturity Measurement",
  "question": "A company purchases nonderivative bonds with fixed payments and the firm intention of holding them to maturity. How are they measured, initially and subsequently?",
  "options": {
   "A": "Initially at fair value plus transaction costs, subsequently at amortized cost using the effective interest method.",
   "B": "Initially at fair value, subsequently at fair value with variations to the income statement.",
   "C": "Initially at cost, subsequently at fair value with variations to the revaluation reserve.",
   "D": "Initially at nominal value, subsequently at nominal value until maturity."
  },
  "correct": "A",
  "expl": {
   "A": "Correct. Held-to-maturity investments are nonderivative financial assets with fixed or determinable payments to be held to maturity: they are measured initially at fair value plus transaction costs and subsequently at amortized cost using the effective interest method.",
   "B": "Incorrect. This is the treatment of financial assets at fair value through profit or loss, which covers assets held for trading rather than held to maturity.",
   "C": "Incorrect. This mixes the available-for-sale destination for fair value variations with a cost-based initial measurement; held-to-maturity investments are not carried at fair value after acquisition.",
   "D": "Incorrect. Nominal value is not a measurement basis here: the standard requires amortized cost with the effective interest method."
  },
  "recap": "Correct. Held-to-maturity investments are nonderivative financial assets with fixed or determinable payments to be held to maturity: they are measured initially at fair value plus transaction costs and subsequently at amortized cost using the effective interest method."
 },
 {
  "cat": "Balance Sheet",
  "title": "Measuring Inventories",
  "question": "At year end a batch of finished goods has a cost of 50,000. Its estimated selling price in the ordinary course of business is 52,000, and the estimated costs necessary to complete and sell it amount to 6,000. At what value must the inventory be stated?",
  "options": {
   "A": "50,000, because cost is always the reference for inventories.",
   "B": "52,000, because the selling price represents the realizable amount.",
   "C": "46,000, because inventories are stated at the lower of cost and net realizable value.",
   "D": "56,000, adding the costs necessary to make the sale to the cost of the goods."
  },
  "correct": "C",
  "expl": {
   "A": "Incorrect. Cost is only one of the two terms of the comparison: inventories must be stated at the lower end between cost and net realizable value.",
   "B": "Incorrect. The selling price is not the net realizable value: the estimated costs of completion and of making the sale must be deducted from it.",
   "C": "Correct. Net realizable value is the estimated selling price less the estimated costs of completion and the estimated costs necessary to make the sale: 52,000 − 6,000 = 46,000. Since 46,000 is lower than the cost of 50,000, inventories are stated at 46,000.",
   "D": "Incorrect. Selling costs are not added to the cost of inventories; they are subtracted from the selling price when computing net realizable value."
  },
  "recap": "Correct. Net realizable value is the estimated selling price less the estimated costs of completion and the estimated costs necessary to make the sale: 52,000 − 6,000 = 46,000. Since 46,000 is lower than the cost of 50,000, inventories are stated at 46,000."
 },
 {
  "cat": "Balance Sheet",
  "title": "FIFO, Weighted Average and LIFO",
  "question": "A company is choosing the cost formula for its inventories under IFRS. Which statement is correct?",
  "options": {
   "A": "FIFO and LIFO are both permitted, while the weighted average method is not.",
   "B": "FIFO and weighted average are permitted, while LIFO is not permitted by IFRS.",
   "C": "Only the weighted average method is permitted, since it ignores the physical flow of goods.",
   "D": "All three methods are permitted, and the choice is free provided it is disclosed in the notes."
  },
  "correct": "B",
  "expl": {
   "A": "Incorrect. This reverses the rule: LIFO is the method IFRS does not permit, while the weighted average method is explicitly allowed.",
   "B": "Correct. IFRS allows two methods, FIFO — where the goods leaving the firm are those that have been in inventory the longest, so the inventory on hand is the latest — and weighted average, where each unit is valued at total costs divided by quantity. LIFO is not permitted because its logic is considered unrealistic.",
   "C": "Incorrect. FIFO is permitted as well; the weighted average method is not the only option available.",
   "D": "Incorrect. The choice is not free across all three: disclosure in the notes does not make LIFO acceptable under IFRS."
  },
  "recap": "Correct. IFRS allows two methods, FIFO — where the goods leaving the firm are those that have been in inventory the longest, so the inventory on hand is the latest — and weighted average, where each unit is valued at total costs divided by quantity. LIFO is not permitted because its logic is considered unrealistic."
 },
 {
  "cat": "Balance Sheet",
  "title": "Recording a Partly Paid Sale",
  "question": "In December of Year X a company sells products for 100,000. Half of the amount is paid immediately, while the remaining half will be collected next year. How is the operation reflected in the financial statements of Year X?",
  "options": {
   "A": "Revenues 50,000 in the income statement, cash 50,000 under assets.",
   "B": "Revenues 100,000 in the income statement, trade receivables 50,000 and cash 50,000 under assets.",
   "C": "Revenues 100,000 in the income statement and cash 100,000 under assets.",
   "D": "Revenues 100,000 in the income statement and trade receivables 100,000 under assets."
  },
  "correct": "B",
  "expl": {
   "A": "Incorrect. This applies cash logic to revenue. Under the accrual principle the whole sale of 100,000 is revenue of Year X, regardless of how much has been collected.",
   "B": "Correct. Revenues of 100,000 are recorded in the income statement, while the balance sheet shows cash of 50,000 for the amount already collected and trade receivables of 50,000 for the amount still to be received.",
   "C": "Incorrect. Only half of the amount has actually been collected, so cash cannot be 100,000; the uncollected half is a receivable.",
   "D": "Incorrect. Half of the amount was paid immediately, so 50,000 is cash and only the remaining 50,000 is a trade receivable."
  },
  "recap": "Correct. Revenues of 100,000 are recorded in the income statement, while the balance sheet shows cash of 50,000 for the amount already collected and trade receivables of 50,000 for the amount still to be received."
 },
 {
  "cat": "Balance Sheet",
  "title": "Valuing Trade Receivables",
  "question": "How are trade receivables measured in the balance sheet, given that some customers may not pay?",
  "options": {
   "A": "At their full nominal amount, since the contractual claim is for the entire sum.",
   "B": "At net realizable value, estimating potential losses with statistical methods based on historical values.",
   "C": "At fair value through profit or loss, with variations credited to the income statement each year.",
   "D": "At the amount actually collected after the balance sheet date."
  },
  "correct": "B",
  "expl": {
   "A": "Incorrect. Carrying receivables at their full nominal amount would ignore the probability that some customers will not pay, which the measurement is required to reflect.",
   "B": "Correct. Trade receivables are calculated at the net realizable value, considering the probability that some customers will not pay in the future. Since a precise calculation cannot be performed, enterprises use statistical methods based on historical values to determine the potential loss.",
   "C": "Incorrect. Trade receivables belong to the loans and receivables category, which is measured at amortized cost, not at fair value through profit or loss.",
   "D": "Incorrect. The balance sheet reflects an estimate made at the reporting date; it does not wait for subsequent collections to determine the value."
  },
  "recap": "Correct. Trade receivables are calculated at the net realizable value, considering the probability that some customers will not pay in the future. Since a precise calculation cannot be performed, enterprises use statistical methods based on historical values to determine the potential loss."
 },
 {
  "cat": "Balance Sheet",
  "title": "Share Premium Reserve",
  "question": "A company issues 100,000 new shares with a nominal value of 1 each, placing them on the market at 4 each and collecting 400,000 in cash. How is the operation reflected in equity?",
  "options": {
   "A": "400,000 entirely under capital.",
   "B": "100,000 under capital and 300,000 under the share premium reserve.",
   "C": "400,000 entirely under the share premium reserve.",
   "D": "100,000 under capital and 300,000 recognized as revenue in the income statement."
  },
  "correct": "B",
  "expl": {
   "A": "Incorrect. Capital is reported at par (nominal) value, so only the nominal portion of 1 per share can be recorded there.",
   "B": "Correct. Share premium reserves originate when enterprises sell shares at a price higher than the nominal value. The cash inflow of 400,000 is balanced in equity under two items: capital for the nominal portion (100,000 × 1 = 100,000) and the share premium reserve for the exceeding portion (100,000 × 3 = 300,000).",
   "C": "Incorrect. The nominal portion must be recorded under capital; the share premium reserve only takes the amount exceeding nominal value.",
   "D": "Incorrect. Issuing shares above par is a transaction with shareholders that increases equity; the premium is not revenue of the period."
  },
  "recap": "Correct. Share premium reserves originate when enterprises sell shares at a price higher than the nominal value. The cash inflow of 400,000 is balanced in equity under two items: capital for the nominal portion (100,000 × 1 = 100,000) and the share premium reserve for the exceeding portion (100,000 × 3 = 300,000)."
 },
 {
  "cat": "Balance Sheet",
  "title": "Recognizing a Provision",
  "question": "A company is facing a lawsuit. Which combination of conditions must hold for a provision to be recognized in the balance sheet?",
  "options": {
   "A": "A present obligation from a past event, a probable cash outflow, and an amount that can be estimated reliably.",
   "B": "A possible future obligation, a certain cash outflow, and an exact amount already agreed with the counterparty.",
   "C": "A present obligation from a past event and a probable cash outflow, even when the amount cannot be estimated.",
   "D": "Management's intention to settle the matter, regardless of whether an obligating event has occurred."
  },
  "correct": "A",
  "expl": {
   "A": "Correct. Provisions are liabilities with uncertain timing or amount, and their recognition requires all three conditions together: a present obligation arising from a past (obligating) event, a cash outflow that is probable (more likely than not), and an amount that can be estimated reliably.",
   "B": "Incorrect. The standard requires a present obligation rather than a merely possible one, and a probable rather than certain outflow; an exact agreed amount is not required, since provisions are by nature uncertain in timing or amount.",
   "C": "Incorrect. Reliable estimation of the amount is one of the necessary conditions; without it, the provision cannot be recognized.",
   "D": "Incorrect. An intention is not sufficient: a liability requires a present obligation arising from a past event."
  },
  "recap": "Correct. Provisions are liabilities with uncertain timing or amount, and their recognition requires all three conditions together: a present obligation arising from a past (obligating) event, a cash outflow that is probable (more likely than not), and an amount that can be estimated reliably."
 },
 {
  "cat": "Balance Sheet",
  "title": "Measuring One-off and Recurring Provisions",
  "question": "A company must set up two provisions: one for the settlement of a single lawsuit, and one for product warranties that recur every year across thousands of items. How are the two amounts measured?",
  "options": {
   "A": "Both at the most likely amount, undiscounted.",
   "B": "The lawsuit at a probability-weighted expected value, the warranties at the most likely amount.",
   "C": "The lawsuit at the most likely amount, the warranties at a probability-weighted expected value, both at discounted present value.",
   "D": "Both at the maximum possible exposure, to respect prudence."
  },
  "correct": "C",
  "expl": {
   "A": "Incorrect on two counts: recurring obligations such as warranties use a probability-weighted expected value, and both types of provision are calculated at a discounted present value.",
   "B": "Incorrect. The two measurement bases are inverted: the most likely amount applies to one-off events, while the probability-weighted expected value applies to recurring ones.",
   "C": "Correct. For one-off events such as the settlement of a lawsuit, provisions are measured at the most likely amount. For recurring events such as warranties or customer refunds, they are measured at a probability-weighted expected value, triangulating historical data with future forecasts. Both calculations are made at a discounted present value, using a pretax discount rate reflecting the time value of money and the risks specific to the liability.",
   "D": "Incorrect. The standard points to the most likely amount or the probability-weighted expected value, not to the worst-case exposure."
  },
  "recap": "Correct. For one-off events such as the settlement of a lawsuit, provisions are measured at the most likely amount. For recurring events such as warranties or customer refunds, they are measured at a probability-weighted expected value, triangulating historical data with future forecasts. Both calculations are made at a discounted present value, using a pretax discount rate reflecting the time value of money and the risks specific to the liability."
 },
 {
  "cat": "Balance Sheet",
  "title": "Defined Contribution vs Defined Benefit",
  "question": "Two companies run different postemployment plans. Company X pays fixed contributions into a fund and has no obligation to pay more if the fund cannot cover all employees' claims. Company Y guarantees a determined benefit level to its employees. How do the two plans differ in accounting terms?",
  "options": {
   "A": "X has a defined contribution plan; Y has a defined benefit plan and must calculate the present value of future obligations using actuarial assumptions.",
   "B": "X has a defined benefit plan; Y has a defined contribution plan, since Y's benefits are fixed in advance.",
   "C": "Both are defined contribution plans, since both involve payments to employees after employment.",
   "D": "Neither generates any liability, since postemployment benefits are always handled outside the balance sheet."
  },
  "correct": "A",
  "expl": {
   "A": "Correct. Under a defined contribution plan the enterprise pays fixed contributions into a fund and has no obligation to make further payments if the fund lacks the capacity to pay all employees' claims, which is Company X. Companies adopting a defined benefit plan, like Company Y, calculate the present value of future obligations, using actuarial assumptions to assess the value.",
   "B": "Incorrect. The labels are inverted: what is fixed under a defined contribution plan is the contribution paid in, while under a defined benefit plan it is the benefit owed to the employee.",
   "C": "Incorrect. IAS/IFRS explicitly distinguishes the two types precisely because the obligation carried by the company is different.",
   "D": "Incorrect. Pensions and similar obligations are reported among liabilities, and defined benefit plans in particular require measuring the present value of future obligations."
  },
  "recap": "Correct. Under a defined contribution plan the enterprise pays fixed contributions into a fund and has no obligation to make further payments if the fund lacks the capacity to pay all employees' claims, which is Company X. Companies adopting a defined benefit plan, like Company Y, calculate the present value of future obligations, using actuarial assumptions to assess the value."
 },
 {
  "cat": "Income Statement",
  "title": "By Nature vs By Function",
  "question": "An income statement lists, under continuing operations: revenue, other operating income, raw materials and consumables used, employee benefits expense, depreciation and amortization expense, other operating expenses, then operating profit. Which format is being used?",
  "options": {
   "A": "By function, because costs are grouped according to where they are used.",
   "B": "By nature, because costs are aggregated on the basis of what they are.",
   "C": "Neither, because a compliant income statement must always show gross profit.",
   "D": "By nature for costs and by function for revenues, as IFRS requires a mixed presentation."
  },
  "correct": "B",
  "expl": {
   "A": "Incorrect. The by-function format would show items such as cost of sales, distribution costs and administrative expenses, classifying costs by their use in company activities.",
   "B": "Correct. The format by nature aggregates costs on the basis of their nature — raw materials, staffing costs, depreciation and so on — which is exactly the list presented here.",
   "C": "Incorrect. Gross profit is a feature of the by-function format; its absence does not make a by-nature income statement non-compliant.",
   "D": "Incorrect. IFRS does not require a mixed presentation: the company presents its costs either by nature or by function."
  },
  "recap": "Correct. The format by nature aggregates costs on the basis of their nature — raw materials, staffing costs, depreciation and so on — which is exactly the list presented here."
 },
 {
  "cat": "Income Statement",
  "title": "Where Gross Profit Appears",
  "question": "A reader wants to find the gross profit line in a company's income statement but cannot see it. What is the most likely explanation?",
  "options": {
   "A": "The company reports its income statement by nature, a format in which gross profit is not presented.",
   "B": "The company has made a presentation error, since gross profit is compulsory in every format.",
   "C": "The company has no continuing operations during the period.",
   "D": "Gross profit only appears when the company is loss-making."
  },
  "correct": "A",
  "expl": {
   "A": "Correct. Gross profit arises in the by-function format, as revenue less cost of sales. In the format by nature, costs are aggregated as raw materials, employee benefits, depreciation and other operating expenses, and the statement proceeds to operating profit without a gross profit subtotal.",
   "B": "Incorrect. Gross profit is not compulsory in both formats: its presence depends on whether costs are presented by function or by nature.",
   "C": "Incorrect. The presence of continuing operations does not determine whether a gross profit subtotal is shown; the chosen cost classification does.",
   "D": "Incorrect. Gross profit has nothing to do with whether the result is positive or negative; it depends on the presentation format."
  },
  "recap": "Correct. Gross profit arises in the by-function format, as revenue less cost of sales. In the format by nature, costs are aggregated as raw materials, employee benefits, depreciation and other operating expenses, and the statement proceeds to operating profit without a gross profit subtotal."
 },
 {
  "cat": "Income Statement",
  "title": "Conditions for Recognizing Revenue on Goods",
  "question": "A manufacturer has shipped goods but retains effective control over them and continues to manage them as if they were its own. Can revenue be recognized?",
  "options": {
   "A": "Yes, because the legal property has been transferred to the buyer.",
   "B": "Yes, because the goods have physically left the company's warehouse.",
   "C": "No, because one of the conditions requires the seller to have no managerial involvement or control over the goods sold.",
   "D": "No, but only if the customer has not yet paid the invoice."
  },
  "correct": "C",
  "expl": {
   "A": "Incorrect. Under IFRS, property rights are explicitly not a sufficient condition for recognizing revenue.",
   "B": "Incorrect. Physical shipment alone does not satisfy the recognition conditions if the seller keeps managerial involvement and control over the goods.",
   "C": "Correct. For sales of goods all the conditions must be satisfied, including that the seller has transferred the significant risks and rights over the goods and has no managerial involvement or control over them, alongside reliable measurement of revenue and costs and the likelihood that economic benefits will flow to the seller.",
   "D": "Incorrect. Payment timing is a cash matter; revenue recognition follows the accrual conditions, not the settlement of the invoice."
  },
  "recap": "Correct. For sales of goods all the conditions must be satisfied, including that the seller has transferred the significant risks and rights over the goods and has no managerial involvement or control over them, alongside reliable measurement of revenue and costs and the likelihood that economic benefits will flow to the seller."
 },
 {
  "cat": "Income Statement",
  "title": "Revenue on Services",
  "question": "A consulting firm signs a multi-year project spanning two accounting years. How are revenues recognized?",
  "options": {
   "A": "Entirely in the year the contract is signed.",
   "B": "Entirely in the final year, when the project is completed and accepted.",
   "C": "By reference to the stage of completion of the transaction at the balance sheet date.",
   "D": "In the year in which the client actually pays each instalment."
  },
  "correct": "C",
  "expl": {
   "A": "Incorrect. Signing the contract does not by itself deliver the service; recognizing everything upfront would not reflect the stage of the work performed.",
   "B": "Incorrect. Deferring all revenue to completion would ignore the portion of the service already rendered at the reporting date.",
   "C": "Correct. For services, conditions similar to those for goods apply, but revenues are recognized by reference to the stage of completion of the transaction at the balance sheet date.",
   "D": "Incorrect. This applies cash logic. Revenue recognition follows the accrual principle, independently of when instalments are collected."
  },
  "recap": "Correct. For services, conditions similar to those for goods apply, but revenues are recognized by reference to the stage of completion of the transaction at the balance sheet date."
 },
 {
  "cat": "Income Statement",
  "title": "Building the Income Statement Down to Profit",
  "question": "A company reports: revenues 800,000; operating costs 620,000; financial incomes 15,000; financial expenses and adjustments 40,000; taxes 45,000; no discontinued operations. What are the EBIT, the profit before taxes and the profit after taxes from continuing operations?",
  "options": {
   "A": "EBIT 180,000; profit before taxes 155,000; profit after taxes 110,000.",
   "B": "EBIT 180,000; profit before taxes 195,000; profit after taxes 150,000.",
   "C": "EBIT 155,000; profit before taxes 180,000; profit after taxes 135,000.",
   "D": "EBIT 140,000; profit before taxes 155,000; profit after taxes 110,000."
  },
  "correct": "A",
  "expl": {
   "A": "Correct. EBIT is revenues less operating costs: 800,000 − 620,000 = 180,000. Adding financial incomes and subtracting financial expenses gives profit before taxes from continuing operations: 180,000 + 15,000 − 40,000 = 155,000. Subtracting taxes gives profit after taxes: 155,000 − 45,000 = 110,000.",
   "B": "Incorrect. This adds the financial expenses instead of subtracting them, or nets the financial items with the wrong sign; the correct profit before taxes is 155,000.",
   "C": "Incorrect. The two subtotals are swapped: EBIT stops before any financial item, so it is 180,000, and only afterwards do financial incomes and expenses lead to 155,000.",
   "D": "Incorrect. EBIT must not include financial items at all; deducting part of them before EBIT understates it, since revenues less operating costs gives 180,000."
  },
  "recap": "Correct. EBIT is revenues less operating costs: 800,000 − 620,000 = 180,000. Adding financial incomes and subtracting financial expenses gives profit before taxes from continuing operations: 180,000 + 15,000 − 40,000 = 155,000. Subtracting taxes gives profit after taxes: 155,000 − 45,000 = 110,000."
 },
 {
  "cat": "Income Statement",
  "title": "Assets Held for Sale",
  "question": "Management states that it would like to dispose of a division at some point, but no buyer search has started and no plan has been approved. Can the division be presented among discontinued operations as held for sale?",
  "options": {
   "A": "Yes, management's stated intention is sufficient.",
   "B": "No: the criteria require a committed plan, immediate availability for sale, an active program to locate a buyer and a highly probable sale, normally within 12 months.",
   "C": "Yes, provided the division is loss-making.",
   "D": "No, because a division can never be classified as held for sale, only individual assets can."
  },
  "correct": "B",
  "expl": {
   "A": "Incorrect. An intention is far weaker than the criteria set by IFRS, which require concrete steps and a high probability of sale.",
   "B": "Correct. An asset is held for sale when management is committed to a plan to sell, the asset is available for immediate sale, an active program to locate a buyer is initiated, the sale is highly probable (within 12 months of classification, subject to limited exceptions), the asset is actively marketed at a price reasonable in relation to fair value, and it is unlikely that the plan will be significantly changed or withdrawn.",
   "C": "Incorrect. Profitability is irrelevant to the classification: what matters is whether the held-for-sale criteria are met.",
   "D": "Incorrect. Discontinuing operations typically concern entire business units held for sale, not only individual assets."
  },
  "recap": "Correct. An asset is held for sale when management is committed to a plan to sell, the asset is available for immediate sale, an active program to locate a buyer is initiated, the sale is highly probable (within 12 months of classification, subject to limited exceptions), the asset is actively marketed at a price reasonable in relation to fair value, and it is unlikely that the plan will be significantly changed or withdrawn."
 },
 {
  "cat": "Income Statement",
  "title": "Materials: Purchases vs Consumption",
  "question": "During the year a company purchases raw materials for 500,000. Inventories of raw materials increase by 30,000 over the same period. What figure appears among operating costs in an income statement by nature?",
  "options": {
   "A": "500,000, the amount purchased during the year.",
   "B": "530,000, adding the increase in inventories to the purchases.",
   "C": "470,000, the consumption obtained as purchases less the increase in inventories.",
   "D": "30,000, the variation in inventories alone."
  },
  "correct": "C",
  "expl": {
   "A": "Incorrect. The income statement lists the consumption of materials, not the amount purchased: part of what was bought is still in stock at year end.",
   "B": "Incorrect. Adding the inventory increase moves in the wrong direction: materials that went into stock have not been consumed, so they must be deducted.",
   "C": "Correct. The income statement lists the consumption of materials, computed as materials purchased less the changes in inventory: 500,000 − 30,000 = 470,000.",
   "D": "Incorrect. The inventory variation is only the adjustment applied to purchases, not the operating cost itself."
  },
  "recap": "Correct. The income statement lists the consumption of materials, computed as materials purchased less the changes in inventory: 500,000 − 30,000 = 470,000."
 },
 {
  "cat": "Cash Flow",
  "title": "Direct vs Indirect Method",
  "question": "A company prepares its cash flow statement starting from net profit and adjusting it for the effects of noncash transactions such as depreciation. Which method is being applied, and how does the alternative work?",
  "options": {
   "A": "The indirect method; the direct method would instead show each major class of gross cash receipts and gross cash payments.",
   "B": "The direct method; the indirect method would instead list gross receipts and payments one by one.",
   "C": "The accrual method; the alternative would be the cash method.",
   "D": "Neither: IFRS requires the cash flow statement to start from EBITDA in all cases."
  },
  "correct": "A",
  "expl": {
   "A": "Correct. The indirect method obtains generated cash starting from accrual results, usually operating profit or net profit, adjusting for noncash effects. The direct method, which IAS/IFRS encourages, shows each major class of gross cash receipts and gross cash payments.",
   "B": "Incorrect. The two are inverted: starting from net profit and adjusting for noncash items is precisely the indirect method.",
   "C": "Incorrect. Accrual and cash are the two accounting logics behind the statements, not the two presentation methods of the cash flow statement.",
   "D": "Incorrect. IFRS permits both the direct and the indirect method; there is no mandatory single starting point such as EBITDA."
  },
  "recap": "Correct. The indirect method obtains generated cash starting from accrual results, usually operating profit or net profit, adjusting for noncash effects. The direct method, which IAS/IFRS encourages, shows each major class of gross cash receipts and gross cash payments."
 },
 {
  "cat": "Cash Flow",
  "title": "Classifying Cash Flows",
  "question": "During the year a company: (1) collects cash from customers, (2) buys a new production plant, (3) issues new shares. How are these three flows classified in the cash flow statement?",
  "options": {
   "A": "(1) operating, (2) investing, (3) financing.",
   "B": "(1) operating, (2) operating, (3) investing.",
   "C": "(1) investing, (2) financing, (3) operating.",
   "D": "(1) financing, (2) investing, (3) operating."
  },
  "correct": "A",
  "expl": {
   "A": "Correct. Operating activities refer to cash flows generated or employed in the current activities of the company, such as cash received from customers. Investing activities are the acquisition and disposal of long-term assets, such as a production plant. Financing activities are those altering the equity capital and borrowing structure, such as a share issue.",
   "B": "Incorrect. Buying a production plant is the acquisition of a long-term asset, which belongs to investing activities rather than operating ones.",
   "C": "Incorrect. Collecting cash from customers is the clearest example of an operating flow, and a share issue alters equity capital, making it a financing flow.",
   "D": "Incorrect. Cash received from customers is operating, not financing, and a share issue is financing, not operating."
  },
  "recap": "Correct. Operating activities refer to cash flows generated or employed in the current activities of the company, such as cash received from customers. Investing activities are the acquisition and disposal of long-term assets, such as a production plant. Financing activities are those altering the equity capital and borrowing structure, such as a share issue."
 },
 {
  "cat": "Cash Flow",
  "title": "The Logic behind the Statement",
  "question": "Why can a company report a solid profit in its income statement and still show weak cash generation in its cash flow statement?",
  "options": {
   "A": "Because the income statement is prepared with cash logic while the cash flow statement uses accrual logic.",
   "B": "Because the income statement follows accrual logic, recognizing revenues and costs when they occur, while the cash flow statement is prepared with cash logic.",
   "C": "Because the two documents must always show the same result, so a difference signals an accounting error.",
   "D": "Because the cash flow statement only covers financing activities."
  },
  "correct": "B",
  "expl": {
   "A": "Incorrect. The logics are inverted: the income statement is one of the statements built on the accrual principle, not on cash.",
   "B": "Correct. The accrual principle is the underlying logic of the income statement and the balance sheet, so revenues and costs are recognized when transactions occur. The cash flow statement, contrary to those two, is prepared with cash logic, which is why profit and cash generation can diverge, for example when sales are made on credit.",
   "C": "Incorrect. The two documents answer different questions and are not expected to coincide; a divergence is normal rather than an error.",
   "D": "Incorrect. The cash flow statement covers operating, investing and financing activities, not financing alone."
  },
  "recap": "Correct. The accrual principle is the underlying logic of the income statement and the balance sheet, so revenues and costs are recognized when transactions occur. The cash flow statement, contrary to those two, is prepared with cash logic, which is why profit and cash generation can diverge, for example when sales are made on credit."
 },
 {
  "cat": "Notes & Reporting",
  "title": "What the Notes Must Disclose",
  "question": "A company had the option to measure a class of assets either at cost or at fair value. Where does a reader find out which model was actually adopted?",
  "options": {
   "A": "In the notes, which must disclose the basis of preparation and the specific accounting policies used.",
   "B": "In the statement of changes in equity, which lists all measurement choices.",
   "C": "Nowhere: the choice of measurement model is internal information and is not disclosed.",
   "D": "In the cash flow statement, under investing activities."
  },
  "correct": "A",
  "expl": {
   "A": "Correct. The notes must include information about the basis of preparation of the financial statements and the specific accounting policies used; they highlight, for instance, the measurement method adopted when a choice between the cost model and the fair value model is available.",
   "B": "Incorrect. The statement of changes in equity details the variations occurred in equity during the year, not the full set of accounting policy choices.",
   "C": "Incorrect. Disclosure of accounting policies is compulsory precisely so that readers can interpret the figures correctly.",
   "D": "Incorrect. The cash flow statement reports cash flows by category; it does not disclose measurement policies."
  },
  "recap": "Correct. The notes must include information about the basis of preparation of the financial statements and the specific accounting policies used; they highlight, for instance, the measurement method adopted when a choice between the cost model and the fair value model is available."
 },
 {
  "cat": "Notes & Reporting",
  "title": "Segmental Reporting",
  "question": "The Volkswagen Group 2012 annual report presents its income statement split into the Automotive and Financial Services divisions, each with its own sales revenue, operating profit and profit after tax. What does this represent?",
  "options": {
   "A": "A voluntary marketing disclosure with no basis in IFRS.",
   "B": "Segmental reporting, required by IFRS for reportable segments defined by business or geographical area.",
   "C": "The statement of changes in equity, broken down by division.",
   "D": "A consolidation adjustment required only for automotive companies."
  },
  "correct": "B",
  "expl": {
   "A": "Incorrect. Segmental information is not left to marketing discretion: IFRS requires enterprises to report financial and descriptive information about their reportable segments.",
   "B": "Correct. IFRS requires financial and descriptive information about reportable segments, which are operating segments or aggregations of them referred either to specific businesses (business segments) or to specific geographical areas (geographical segments). Such reporting must include information such as sales, results, assets, liabilities and depreciation, exactly as in the Volkswagen split between Automotive and Financial Services.",
   "C": "Incorrect. What is split by division here is the income statement, and the requirement comes from segmental reporting rules, not from the statement of changes in equity.",
   "D": "Incorrect. Segmental reporting applies across industries wherever reportable segments exist; it is not an automotive-specific rule."
  },
  "recap": "Correct. IFRS requires financial and descriptive information about reportable segments, which are operating segments or aggregations of them referred either to specific businesses (business segments) or to specific geographical areas (geographical segments). Such reporting must include information such as sales, results, assets, liabilities and depreciation, exactly as in the Volkswagen split between Automotive and Financial Services."
 }
];

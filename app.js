const topics = {
  "Python": ["Fondamenti", "Tipi e variabili", "Stringhe", "Liste e tuple", "Set e dizionari", "Operatori", "Condizioni", "Cicli", "Funzioni", "List comprehension", "Errori", "File e JSON", "API"],
  "Pandas": ["Series e DataFrame", "Importazione", "Ispezione", "Selezione", "loc e iloc", "Filtri", "Valori mancanti", "Duplicati", "Modifica colonne", "Aggregazioni", "GroupBy", "Merge e concat", "Date e serie temporali", "Rolling", "Visualizzazione"]
};

const reviewData = [
  {area:"Python", topic:"Fondamenti", summary:"I blocchi Python sono definiti dall’indentazione e le istruzioni vengono eseguite dall’alto verso il basso.", syntax:"if ready:\n    print('via')\n# quattro spazi per il blocco", mistake:"Mescolare tab e spazi o dimenticare di indentare il corpo di if, cicli e funzioni."},
  {area:"Python", topic:"Tipi e variabili", summary:"Una variabile nasce con l’assegnazione. Python determina dinamicamente il tipo.", syntax:"x = 10\nname = 'Marco'\ntype(x)", mistake:"Confondere = con ==. Il primo assegna, il secondo confronta."},
  {area:"Python", topic:"Stringhe", summary:"Le stringhe sono sequenze immutabili. Indici da 0; il limite finale dello slicing è escluso.", syntax:"text[0]\ntext[-1]\ntext[1:4]\ntext.strip().lower()", mistake:"Provare a cambiare direttamente un carattere: text[0] = 'A'."},
  {area:"Python", topic:"Liste e tuple", summary:"Le liste sono mutabili; le tuple no. append aggiunge un elemento, extend più elementi.", syntax:"items.append(4)\nitems.extend([5, 6])\na, b = (10, 20)", mistake:"Aspettarsi che list.sort() restituisca la lista: modifica in-place e restituisce None."},
  {area:"Python", topic:"Set e dizionari", summary:"I set eliminano duplicati. I dizionari associano chiavi uniche a valori.", syntax:"unique = set(values)\nprice = product.get('price', 0)\nfor k, v in d.items(): ...", mistake:"Usare un indice numerico su un set o accedere a una chiave assente con d[key]."},
  {area:"Python", topic:"Operatori", summary:"Gli operatori aritmetici seguono le precedenze: potenza, moltiplicazione e divisione, poi somma e sottrazione.", syntax:"7 // 3  # 2\n7 % 3   # 1\n2 ** 3  # 8", mistake:"Confondere /, che restituisce una divisione reale, con //, che esegue la divisione intera."},
  {area:"Python", topic:"Condizioni", summary:"if/elif/else controllano il flusso. and richiede entrambe le condizioni, or almeno una.", syntax:"if age >= 18 and country == 'Italy':\n    print('ok')", mistake:"Dimenticare i due punti o usare = dentro una condizione."},
  {area:"Python", topic:"Cicli", summary:"for itera su un iterabile; while continua finché la condizione resta vera.", syntax:"for value in values:\n    total += value\n\nwhile n > 0:\n    n -= 1", mistake:"Non aggiornare la variabile di un while e creare un ciclo infinito."},
  {area:"Python", topic:"Funzioni", summary:"I parametri ricevono valori; return restituisce un risultato al chiamante.", syntax:"def average(values):\n    return sum(values) / len(values)", mistake:"Confondere print con return: stampare non rende disponibile il valore."},
  {area:"Python", topic:"List comprehension", summary:"Una comprehension combina trasformazione, iterazione e un eventuale filtro in una sola espressione.", syntax:"squares = [x * x for x in values if x % 2 == 0]", mistake:"Mettere il filtro prima del for o usare una comprehension troppo complessa da leggere."},
  {area:"Python", topic:"Errori", summary:"Le eccezioni segnalano operazioni non valide. try/except permette di gestire solo gli errori attesi.", syntax:"try:\n    value = int(text)\nexcept ValueError:\n    value = 0", mistake:"Usare except senza specificare l’eccezione e nascondere errori di programmazione."},
  {area:"Python", topic:"File e JSON", summary:"with open chiude automaticamente il file. JSON object ↔ dict, JSON array ↔ list.", syntax:"with open('data.json') as f:\n    data = json.load(f)", mistake:"Confondere json.load(file) con json.loads(stringa)."},
  {area:"Python", topic:"API", summary:"Un’API espone endpoint. Una risposta JSON viene convertita in liste e dizionari Python.", syntax:"response = requests.get(url)\ndata = response.json()", mistake:"Usare la risposta senza controllare lo status code o la struttura dei dati."},
  {area:"Pandas", topic:"Series e DataFrame", summary:"Una Series è monodimensionale; un DataFrame è tabellare con righe, colonne e indice.", syntax:"s = pd.Series([10, 20])\ndf = pd.DataFrame({'A':[1,2]})", mistake:"Confondere df['A'] (Series) con df[['A']] (DataFrame)."},
  {area:"Pandas", topic:"Importazione", summary:"Le funzioni read_* caricano dati tabellari; read_csv è la scelta tipica per file CSV.", syntax:"df = pd.read_csv('dati.csv')\ndf = pd.read_excel('dati.xlsx')", mistake:"Ignorare separatore, codifica o tipi quando il file non usa i valori predefiniti."},
  {area:"Pandas", topic:"Ispezione", summary:"head, tail, info e describe mostrano aspetti diversi. shape è un attributo.", syntax:"df.head()\ndf.info()\ndf.describe()\ndf.shape", mistake:"Scrivere df.shape() come se fosse un metodo."},
  {area:"Pandas", topic:"Selezione", summary:"Una coppia di parentesi seleziona una Series; una lista di nomi mantiene il risultato come DataFrame.", syntax:"df['Sales']\ndf[['Name', 'Sales']]", mistake:"Dimenticare le doppie parentesi quando servono più colonne."},
  {area:"Pandas", topic:"loc e iloc", summary:"loc seleziona per etichetta; iloc per posizione. Lo slicing loc include il limite finale.", syntax:"df.loc[2:5, ['Name']]\ndf.iloc[2:5, 0:2]", mistake:"Aspettarsi che loc e iloc abbiano lo stesso comportamento sul limite finale."},
  {area:"Pandas", topic:"Filtri", summary:"Le condizioni producono maschere booleane. Con più condizioni servono &, | e parentesi.", syntax:"df[(df['Age'] > 30) & (df['Country'] == 'Italy')]", mistake:"Usare and/or al posto di &/| tra Series."},
  {area:"Pandas", topic:"Valori mancanti", summary:"isna individua i nulli; dropna elimina; fillna sostituisce.", syntax:"df.isna().sum()\ndf['Age'] = df['Age'].fillna(df['Age'].median())", mistake:"Eliminare tutte le righe senza valutare quanta informazione si perde."},
  {area:"Pandas", topic:"Duplicati", summary:"duplicated individua righe ripetute; drop_duplicates le elimina scegliendo quale occorrenza mantenere.", syntax:"df.duplicated().sum()\ndf = df.drop_duplicates(keep='last')", mistake:"Eliminare duplicati senza specificare le colonne che definiscono davvero l’unicità."},
  {area:"Pandas", topic:"Modifica colonne", summary:"Le colonne possono essere create con espressioni vettoriali, rinominate e ordinate senza cicli espliciti.", syntax:"df['Total'] = df['Price'] * df['Qty']\ndf = df.sort_values('Total', ascending=False)", mistake:"Usare un ciclo riga per riga quando basta un’operazione vettoriale."},
  {area:"Pandas", topic:"Aggregazioni", summary:"sum, mean, min, max, count e nunique riassumono una Series o più colonne.", syntax:"df['Sales'].mean()\ndf[['Sales', 'Cost']].sum()\ndf['City'].nunique()", mistake:"Usare count per contare valori distinti: serve nunique."},
  {area:"Pandas", topic:"GroupBy", summary:"groupby divide i dati in gruppi e applica aggregazioni.", syntax:"df.groupby('Category')['Sales'].mean()", mistake:"Confondere count con size: count ignora i valori mancanti nella colonna aggregata."},
  {area:"Pandas", topic:"Merge e concat", summary:"merge combina usando chiavi; concat accoda per righe o affianca per colonne.", syntax:"pd.merge(orders, customers, on='customer_id', how='left')\npd.concat([a,b], ignore_index=True)", mistake:"Usare concat quando serve una corrispondenza tra chiavi."},
  {area:"Pandas", topic:"Date e serie temporali", summary:"Le date vanno convertite con to_datetime per ordinare, filtrare ed estrarre componenti.", syntax:"df['date'] = pd.to_datetime(df['date'])\ndf['month'] = df['date'].dt.month", mistake:"Ordinare date in formato stringa non uniforme."},
  {area:"Pandas", topic:"Rolling", summary:"rolling calcola una statistica su una finestra mobile. Le prime righe possono essere NaN.", syntax:"df['ma3'] = df['value'].rolling(3).mean()", mistake:"Interpretare la finestra 3 come tre righe future: usa la riga corrente e le precedenti."},
  {area:"Pandas", topic:"Visualizzazione", summary:"Linee per trend temporali, barre per categorie, istogrammi per distribuzioni, scatter per relazioni.", syntax:"df.plot(x='date', y='sales', kind='line')\nplt.show()", mistake:"Usare un grafico a linee per categorie senza un ordine significativo."}
];

const curated = [
  q("py-found-1","Python","Fondamenti","facile","Quale elemento definisce un blocco di codice in Python?",["Le parentesi graffe","L’indentazione","La parola end","Il punto e virgola"],1,"Python usa l’indentazione coerente per delimitare i blocchi."),
  q("py-var-1","Python","Tipi e variabili","facile","Quale istruzione confronta x con 10?",["x = 10","x == 10","x := 10","compare(x, 10)"],1,"== è l’operatore di confronto; = assegna un valore."),
  q("py-string-1","Python","Stringhe","medio","Qual è l’output? ",["yth","Pyt","ytho","tho"],0,"Lo slicing parte dall’indice 1 e si ferma prima dell’indice 4.","text = 'Python'\nprint(text[1:4])"),
  q("py-list-1","Python","Liste e tuple","medio","Dopo il codice, qual è il valore di values?",["[1, 2, [3, 4]]","[1, 2, 3, 4]","[1, 2, 3]","Errore"],1,"extend aggiunge gli elementi dell’iterabile uno alla volta.","values = [1, 2]\nvalues.extend([3, 4])"),
  q("py-set-1","Python","Set e dizionari","facile","Qual è il risultato di len(set([1, 1, 2, 3, 3]))?",["3","5","2","Errore"],0,"Un set conserva solo valori unici."),
  q("py-dict-1","Python","Set e dizionari","medio","Quale espressione evita KeyError se 'price' non esiste?",["product['price']","product.get('price', 0)","product.price","get(product, 'price')"],1,"get restituisce il valore predefinito quando la chiave manca."),
  q("py-op-1","Python","Operatori","medio","Qual è l’output?",["2","2.5","3","0"],0,"// esegue la divisione intera per difetto.","print(7 // 3)"),
  q("py-if-1","Python","Condizioni","medio","Quale condizione verifica che age sia tra 18 e 65 inclusi?",["age >= 18 or age <= 65","18 <= age <= 65","age in range(18,65)","age > 18 and age < 65"],1,"Python supporta i confronti concatenati, inclusivi con <=."),
  q("py-loop-1","Python","Cicli","medio","Qual è l’output?",["6","10","4","Errore"],0,"range(1,4) produce 1,2,3; la somma è 6.","total = 0\nfor n in range(1, 4):\n    total += n\nprint(total)"),
  q("py-func-1","Python","Funzioni","medio","Che cosa restituisce la funzione?",["Stampa 8 e restituisce None","Restituisce 8","Restituisce 4","Errore"],1,"return consegna il risultato al chiamante.","def double(x):\n    return x * 2\nresult = double(4)"),
  q("py-return-1","Python","Funzioni","difficile","Qual è la differenza principale tra print e return?",["Sono equivalenti","print mostra un valore; return lo restituisce al chiamante","return funziona solo con numeri","print termina la funzione"],1,"print produce output visivo; return rende il valore riutilizzabile."),
  q("py-comp-1","Python","List comprehension","medio","Quale espressione crea i quadrati dei numeri pari in values?",["[x*x for x in values if x%2==0]","[x for x*x in values if even]","[x*x if x%2==0 for x in values]","values.square(even=True)"],0,"La trasformazione viene prima del for, il filtro dopo."),
  q("py-error-1","Python","Errori","medio","Quale errore produce values[5] se la lista ha tre elementi?",["KeyError","IndexError","ValueError","TypeError"],1,"L’indice è fuori dall’intervallo valido."),
  q("py-json-1","Python","File e JSON","medio","Quale funzione converte una stringa JSON in un oggetto Python?",["json.load()","json.loads()","json.dump()","json.dumps()"],1,"loads legge una stringa; load legge da un file."),
  q("py-api-1","Python","API","facile","In una risposta API, che cosa indica normalmente lo status code 200?",["Errore del client","Richiesta riuscita","Risorsa non trovata","Errore del server"],1,"200 indica normalmente una richiesta completata con successo."),
  q("pd-struct-1","Pandas","Series e DataFrame","medio","Che tipo restituisce df['Sales']?",["DataFrame","Series","list","dict"],1,"Una singola colonna selezionata con una coppia di parentesi quadre è una Series."),
  q("pd-import-1","Pandas","Importazione","facile","Quale funzione importa normalmente un file CSV in un DataFrame?",["pd.open_csv()","pd.read_csv()","pd.load_csv()","DataFrame.csv()"],1,"pd.read_csv legge un file CSV e restituisce un DataFrame."),
  q("pd-shape-1","Pandas","Ispezione","facile","Quale istruzione restituisce numero di righe e colonne?",["df.shape","df.shape()","df.size()","df.info"],0,"shape è un attributo che restituisce una tupla."),
  q("pd-head-1","Pandas","Ispezione","facile","Che cosa fa df.head(3)?",["Mostra le ultime 3 righe","Mostra le prime 3 righe","Mostra 3 colonne","Elimina 3 righe"],1,"head mostra le prime righe."),
  q("pd-select-1","Pandas","Selezione","facile","Come selezioni Name e Sales mantenendo un DataFrame?",["df['Name', 'Sales']","df[['Name', 'Sales']]","df['Name']['Sales']","df.select('Name', 'Sales')"],1,"Una lista di nomi tra doppie parentesi seleziona più colonne e mantiene un DataFrame."),
  q("pd-loc-1","Pandas","loc e iloc","medio","Quale selezione usa posizioni numeriche?",["df.loc[0:2]","df.iloc[0:2]","df.select[0:2]","df.rows(0,2)"],1,"iloc usa posizioni intere."),
  q("pd-loc-2","Pandas","loc e iloc","difficile","Con indice 0,1,2,3, quante righe restituisce df.loc[1:3]?",["2","3","4","Dipende dalle colonne"],1,"Lo slicing con loc include l’etichetta finale."),
  q("pd-filter-1","Pandas","Filtri","medio","Qual è la sintassi corretta per due condizioni?",["df[df['A'] > 0 and df['B'] < 5]","df[(df['A'] > 0) & (df['B'] < 5)]","df[df['A'] > 0 && df['B'] < 5]","df.where('A > 0 and B < 5')"],1,"Tra Series si usano & e parentesi."),
  q("pd-na-1","Pandas","Valori mancanti","facile","Quale istruzione conta i nulli per colonna?",["df.isna().sum()","df.nulls.count()","df.dropna().count()","df.countna()"],0,"isna crea booleani e sum conta i True."),
  q("pd-na-2","Pandas","Valori mancanti","medio","Come sostituisci i nulli di Age con la mediana?",["df['Age'].dropna(median=True)","df['Age'] = df['Age'].fillna(df['Age'].median())","df.fill('Age', median)","df['Age'].replace(None)"],1,"fillna accetta il valore calcolato dalla mediana."),
  q("pd-dup-1","Pandas","Duplicati","medio","Quale comando elimina duplicati mantenendo l’ultima occorrenza?",["df.drop_duplicates(keep='last')","df.duplicated(last=True)","df.dropna(keep='last')","df.unique(keep='last')"],0,"drop_duplicates elimina le righe duplicate; keep='last' conserva l’ultima."),
  q("pd-sort-1","Pandas","Modifica colonne","facile","Come ordini Sales dal maggiore al minore?",["df.sort_values('Sales', ascending=False)","df.order('Sales', desc=True)","df.sort('Sales', reverse=True)","sorted(df['Sales'])"],0,"sort_values ordina il DataFrame sulla colonna indicata."),
  q("pd-agg-1","Pandas","Aggregazioni","medio","Quale metodo conta i valori distinti?",["count()","unique()","nunique()","distinct()"],2,"nunique restituisce il numero di valori unici."),
  q("pd-group-1","Pandas","GroupBy","medio","Quale istruzione calcola le vendite medie per categoria?",["df.groupby('Category')['Sales'].mean()","df['Sales'].mean('Category')","df.mean().groupby('Category')","df.aggregate('Category','Sales')"],0,"Prima si raggruppa, poi si seleziona la colonna e si applica mean."),
  q("pd-merge-1","Pandas","Merge e concat","medio","Quale join conserva tutte le righe della tabella di sinistra?",["inner","left","right","outer"],1,"Il left join conserva tutte le chiavi della tabella sinistra."),
  q("pd-concat-1","Pandas","Merge e concat","medio","Qual è l’uso più adatto di pd.concat([a,b], ignore_index=True)?",["Unire tramite customer_id","Accodare righe con struttura simile","Calcolare una media","Eliminare duplicati"],1,"concat accoda o affianca; non associa record usando una chiave."),
  q("pd-date-1","Pandas","Date e serie temporali","medio","Come converti la colonna date in datetime?",["df['date'].datetime()","df['date'] = pd.to_datetime(df['date'])","df['date'] = datetime(df['date'])","pd.date(df)"],1,"pd.to_datetime converte valori compatibili in datetime."),
  q("pd-date-2","Pandas","Date e serie temporali","medio","Come estrai l’anno?",["df['date'].year","df['date'].dt.year","year(df['date'])","df.year('date')"],1,"Per una Series datetime si usa l’accessor .dt."),
  q("pd-roll-1","Pandas","Rolling","medio","Con rolling(3).mean(), perché i primi due risultati sono normalmente NaN?",["La colonna contiene errori","Non ci sono ancora tre osservazioni nella finestra","rolling parte dalla terza colonna","mean ignora i primi valori"],1,"La finestra completa di tre elementi esiste solo dalla terza riga."),
  q("pd-viz-1","Pandas","Visualizzazione","facile","Quale grafico è più adatto a mostrare un trend nel tempo?",["Istogramma","Grafico a linee","Grafico a torta","Boxplot"],1,"Una linea evidenzia l’evoluzione ordinata nel tempo.")
];

function q(id, area, topic, difficulty, question, options, correct, explanation, code="", data=null) {
  return {id, area, topic, difficulty, type:"multiple-choice", question, options, correct, explanation, code, data};
}

const state = {
  mode: "random", questions: [], index: 0, selected: null, checked: false,
  answers: [], requestedCount: 10, selectedTopic: "Tutti", selectedDifficulty: "Tutti"
};

const views = [...document.querySelectorAll(".view")];
const $ = id => document.getElementById(id);
function shuffle(arr) {
  const copy=[...arr];
  for(let i=copy.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [copy[i],copy[j]]=[copy[j],copy[i]];
  }
  return copy;
}
const sample = arr => arr[Math.floor(Math.random() * arr.length)];

function setActiveNav(name) {
  document.querySelectorAll("[data-nav]").forEach(button=>{
    const active=button.dataset.nav===name;
    button.classList.toggle("active",active);
    if(active)button.setAttribute("aria-current","page");
    else button.removeAttribute("aria-current");
  });
}

function showView(id) {
  views.forEach(v => v.classList.toggle("active", v.id === id));
  const activeNav=id==="homeView"?"home":id==="reviewView"?"review":
    id==="quizView"&&state.mode==="random"?"random":
    (id==="setupView"||id==="quizView")&&state.mode==="topics"?"topics":null;
  setActiveNav(activeNav);
  window.scrollTo({top:0, behavior:"smooth"});
}

function shuffledQuestion(question) {
  const pairs = question.options.map((text, i) => ({text, original:i}));
  const mixed = shuffle(pairs);
  return {...question, options:mixed.map(x=>x.text), correct:mixed.findIndex(x=>x.original===question.correct)};
}

let generatedSequence=0;
const generatedId=prefix=>`${prefix}-${Date.now()}-${generatedSequence++}`;

function makeOptions(correct, distractors) {
  const answer=String(correct), values=[];
  const add=value=>{
    const normalized=String(value);
    if(normalized!==answer&&!values.includes(normalized))values.push(normalized);
  };
  distractors.forEach(add);
  const numeric=Number(answer);
  if(Number.isFinite(numeric)){
    for(let offset=1;values.length<3;offset++){
      add(numeric+offset);
      add(numeric-offset);
    }
  } else {
    ["Errore","Nessuna delle precedenti","Il codice non produce output","Risultato non definito"].forEach(add);
  }
  const options=shuffle([answer,...values.slice(0,3)]);
  return {options,correct:options.indexOf(answer)};
}

function generateNumeric(requestedDifficulty="Tutti") {
  const a = 2 + Math.floor(Math.random()*8), b = 2 + Math.floor(Math.random()*6);
  const variants=requestedDifficulty==="facile"?[1]:requestedDifficulty==="medio"?[0,2,3]:[0,1,2,3];
  const variant=sample(variants);
  if (variant===0) {
    const correct=String(a%b);
    const prepared=makeOptions(correct,[Math.floor(a/b),a+b,a*b,b-a]);
    return q(generatedId("gen-num"),"Python","Operatori","medio",`Qual è l’output?`,
      prepared.options,prepared.correct,`% restituisce il resto della divisione tra ${a} e ${b}.`,`print(${a} % ${b})`);
  }
  if (variant===1) return makeOutput(`print(${a} ** 2)`, a**2, "Python","Operatori","facile","** calcola la potenza.");
  if (variant===2) return makeOutput(`print(${a} // ${b})`, Math.floor(a/b), "Python","Operatori","medio","// esegue divisione intera.");
  return makeOutput(`print(${a} + ${b} * 2)`, a+b*2, "Python","Operatori","medio","La moltiplicazione ha precedenza sull’addizione.");
}

function makeOutput(code, result, area, topic, difficulty, explanation) {
  const correct = String(result);
  const prepared=makeOptions(correct,[Number(result)+1,Number(result)-1,"Errore"]);
  return q(generatedId("gen-output"),area,topic,difficulty,"Qual è l’output?",prepared.options,prepared.correct,explanation,code);
}

function generateSlice() {
  const words=["Python","Pandas","Digital","Technology","DataFrame"];
  const word=sample(words), start=Math.floor(Math.random()*(word.length-2)), end=start+2+Math.floor(Math.random()*(word.length-start-1));
  const out=word.slice(start,end);
  const prepared=makeOptions(out,[word.slice(start,end+1),word.slice(Math.max(0,start-1),end),word.slice(start+1,end),word.slice(0,end),word.slice(start),word]);
  return q(generatedId("gen-slice"),"Python","Stringhe","medio","Qual è l’output?",prepared.options,prepared.correct,
    `Lo slicing include l’indice ${start} ed esclude l’indice ${end}.`,`text = '${word}'\nprint(text[${start}:${end}])`);
}

function generateRange() {
  const start=Math.floor(Math.random()*4), stop=start+3+Math.floor(Math.random()*4);
  const values=Array.from({length:stop-start},(_,i)=>start+i);
  const total=values.reduce((a,b)=>a+b,0);
  return makeOutput(`total = 0\nfor n in range(${start}, ${stop}):\n    total += n\nprint(total)`, total,"Python","Cicli","medio",
    `range include ${start} ed esclude ${stop}: ${values.join(", ")}.`);
}

function generateList() {
  const vals=shuffle([1,2,3,4,5]).slice(0,3), add=6+Math.floor(Math.random()*4);
  const final=[...vals,add];
  const correct=JSON.stringify(final);
  const prepared=makeOptions(correct,[JSON.stringify([...vals,[add]]),JSON.stringify(vals),String(final.length)]);
  return q(generatedId("gen-list"),"Python","Liste e tuple","medio","Qual è il valore finale di values?",prepared.options,prepared.correct,
    "append aggiunge un singolo elemento in fondo alla lista.",`values = ${JSON.stringify(vals)}\nvalues.append(${add})`);
}

function generateFilter() {
  const threshold=20+Math.floor(Math.random()*31);
  const op=sample([">",">=","<"]);
  const correct=`df[df["Age"] ${op} ${threshold}]`;
  const wrong=[`df["Age" ${op} ${threshold}]`,`df.filter("Age" ${op} ${threshold})`,`df[df["Age"] ${op}= ${threshold}]`];
  const prepared=makeOptions(correct,wrong);
  return q(generatedId("gen-filter"),"Pandas","Filtri","medio",`Quale istruzione filtra le righe con Age ${op} ${threshold}?`,
    prepared.options,prepared.correct,"La condizione sulla Series Age produce la maschera booleana usata tra parentesi quadre.");
}

function generateIloc() {
  const start=Math.floor(Math.random()*3), end=start+2+Math.floor(Math.random()*3);
  const count=end-start;
  const prepared=makeOptions(count,[count+1,Math.max(0,count-1),end,start,end+1]);
  return q(generatedId("gen-iloc"),"Pandas","loc e iloc","medio",
    `Quante righe restituisce df.iloc[${start}:${end}]?`,prepared.options,prepared.correct,
    `iloc usa slicing posizionale e non include il limite finale ${end}.`);
}

function generateRolling() {
  const vals=[2,4,6,8,10].map(x=>x+Math.floor(Math.random()*3));
  const idx=2+Math.floor(Math.random()*3);
  const avg=(vals.slice(idx-2,idx+1).reduce((a,b)=>a+b,0)/3);
  const correct=Number.isInteger(avg)?String(avg):avg.toFixed(2);
  const prepared=makeOptions(correct,[vals[idx],(vals[idx-1]+vals[idx])/2,"NaN",vals[idx-2]]);
  return q(generatedId("gen-roll"),"Pandas","Rolling","difficile",
    `Qual è il valore della media mobile a indice ${idx}?`,prepared.options,prepared.correct,
    `rolling(3) usa i valori agli indici ${idx-2}, ${idx-1} e ${idx}: ${vals.slice(idx-2,idx+1).join(", ")}.`,
    `s = pd.Series([${vals.join(", ")}])\nresult = s.rolling(3).mean()`);
}

function generateGroupBy() {
  const table=[
    {Category:"A",Sales:10},{Category:"B",Sales:20},{Category:"A",Sales:30},{Category:"B",Sales:10}
  ];
  const operation=sample(["sum","mean"]);
  const a=operation==="sum"?40:20, b=operation==="sum"?30:15;
  const correct=`A: ${a}, B: ${b}`;
  const prepared=makeOptions(correct,[`A: 40, B: 30`,`A: 20, B: 20`,`A: 2, B: 2`,`A: 30, B: 40`]);
  return q(generatedId("gen-group"),"Pandas","GroupBy","difficile",
    `Qual è il risultato di df.groupby("Category")["Sales"].${operation}()?`,
    prepared.options,prepared.correct,`Le righe vengono separate per Category e poi si applica ${operation}.`,"",table);
}

const generatorSpecs=[
  {topic:"Operatori",difficulties:["facile","medio"],build:difficulty=>generateNumeric(difficulty)},
  {topic:"Stringhe",difficulties:["medio"],build:generateSlice},
  {topic:"Cicli",difficulties:["medio"],build:generateRange},
  {topic:"Liste e tuple",difficulties:["medio"],build:generateList},
  {topic:"Filtri",difficulties:["medio"],build:generateFilter},
  {topic:"loc e iloc",difficulties:["medio"],build:generateIloc},
  {topic:"Rolling",difficulties:["difficile"],build:generateRolling},
  {topic:"GroupBy",difficulties:["difficile"],build:generateGroupBy}
];

function matchingGenerators(topic="Tutti",difficulty="Tutti") {
  return generatorSpecs.filter(spec=>(topic==="Tutti"||spec.topic===topic)&&
    (difficulty==="Tutti"||spec.difficulties.includes(difficulty)));
}

function generateQuestion(topic="Tutti", difficulty="Tutti") {
  const pool=curated.filter(x => (topic==="Tutti" || x.topic===topic) && (difficulty==="Tutti" || x.difficulty===difficulty));
  const generators=matchingGenerators(topic,difficulty);
  if(generators.length&&(pool.length===0||Math.random()<0.48)){
    const candidate=sample(generators).build(difficulty);
    if((topic==="Tutti"||candidate.topic===topic)&&(difficulty==="Tutti"||candidate.difficulty===difficulty))return candidate;
  }
  if(pool.length)return sample(pool);
  if(generators.length)return sample(generators).build(difficulty);
  return null;
}

function questionKey(question) {
  return [question.area,question.topic,question.difficulty,question.question,question.code,
    [...question.options].sort().join("|")].join("::");
}

function buildQuestionSet(count, topic="Tutti", difficulty="Tutti", exam=false) {
  if(exam) {
    const requiredPy=curated.find(item=>item.id==="py-json-1");
    const requiredPd=curated.find(item=>item.id==="pd-viz-1");
    const py=[requiredPy,...shuffle(curated.filter(item=>item.area==="Python"&&item.id!==requiredPy.id)).slice(0,9)];
    const pd=[requiredPd,...shuffle(curated.filter(item=>item.area==="Pandas"&&item.id!==requiredPd.id)).slice(0,9)];
    return shuffle([...py,...pd].map(shuffledQuestion));
  }

  const result=[], seen=new Set();
  const pool=shuffle(curated.filter(item=>(topic==="Tutti"||item.topic===topic)&&
    (difficulty==="Tutti"||item.difficulty===difficulty)));
  let poolIndex=0,attempts=0;
  const generators=matchingGenerators(topic,difficulty);
  const maxAttempts=Math.max(40,count*30);
  while(result.length<count&&attempts<maxAttempts){
    attempts++;
    let candidate=null;
    if(generators.length&&(poolIndex>=pool.length||Math.random()<0.48))candidate=generateQuestion(topic,difficulty);
    else if(poolIndex<pool.length)candidate=pool[poolIndex++];
    else if(generators.length)candidate=generateQuestion(topic,difficulty);
    else break;
    if(!candidate)continue;
    const key=questionKey(candidate);
    if(!seen.has(key)){
      result.push(shuffledQuestion(candidate));
      seen.add(key);
    }
  }
  return shuffle(result);
}

function startQuiz(mode, count=1, topic="Tutti", difficulty="Tutti") {
  const questions=buildQuestionSet(count,topic,difficulty,mode==="exam");
  if(!questions.length){
    alert("Non ci sono ancora domande disponibili per questi filtri. Prova un'altra difficoltà.");
    return false;
  }
  state.mode=mode; state.index=0; state.selected=null; state.checked=false; state.answers=[];
  state.requestedCount=count; state.selectedTopic=topic; state.selectedDifficulty=difficulty;
  state.questions=questions;
  showView("quizView"); renderQuestion();
  if(questions.length<count&&mode!=="random"){
    alert(`Sono disponibili ${questions.length} domande uniche per questi filtri. Il test è stato ridotto.`);
  }
  return true;
}

function renderQuestion() {
  const item=state.questions[state.index];
  state.selected=null; state.checked=false;
  $("topicBadge").textContent=`${item.area} · ${item.topic}`;
  $("difficultyBadge").textContent=item.difficulty;
  $("questionText").textContent=item.question;
  $("codeBlock").classList.toggle("hidden",!item.code);
  $("codeBlock").querySelector("code").textContent=item.code || "";
  renderData(item.data);
  $("answers").innerHTML="";
  item.options.forEach((option,i)=>{
    const b=document.createElement("button");
    b.className="answer-button";
    b.innerHTML=`<span class="answer-letter">${String.fromCharCode(65+i)}</span><span>${escapeHtml(option)}</span>`;
    b.onclick=()=>selectAnswer(i,b);
    $("answers").appendChild(b);
  });
  $("feedback").className="feedback hidden";
  $("nextButton").classList.add("hidden");
  $("checkButton").disabled=false;
  $("showButton").disabled=false;
  const total=state.questions.length;
  $("progressText").textContent=total===1 ? "Casuale" : `${state.index+1}/${total}`;
  $("progressBar").style.width=`${((state.index)/total)*100}%`;
  const progress=$("progressBar").parentElement;
  progress.setAttribute("aria-valuenow",String(state.index));
  progress.setAttribute("aria-valuemax",String(total));
  $("nextButton").textContent=total===1&&state.mode==="random"?"Altro esercizio":
    state.index===total-1?"Vedi risultato":"Prossimo esercizio";
}

function renderData(data){
  const el=$("dataPreview");
  if(!data){el.classList.add("hidden");el.innerHTML="";return;}
  const keys=Object.keys(data[0]);
  el.innerHTML=`<table><thead><tr>${keys.map(k=>`<th>${escapeHtml(k)}</th>`).join("")}</tr></thead><tbody>${
    data.map(r=>`<tr>${keys.map(k=>`<td>${escapeHtml(r[k])}</td>`).join("")}</tr>`).join("")
  }</tbody></table>`;
  el.classList.remove("hidden");
}

function selectAnswer(i,button){
  if(state.checked) return;
  state.selected=i;
  document.querySelectorAll(".answer-button").forEach(b=>b.classList.remove("selected"));
  button.classList.add("selected");
}

function checkAnswer(reveal=false){
  if(state.checked) return;
  const item=state.questions[state.index];
  if(state.selected===null && !reveal){alert("Seleziona una risposta.");return;}
  state.checked=true;
  const correct=state.selected===item.correct;
  document.querySelectorAll(".answer-button").forEach((b,i)=>{
    b.disabled=true;
    if(i===item.correct)b.classList.add("correct");
    if(i===state.selected && !correct)b.classList.add("wrong");
  });
  const fb=$("feedback");
  fb.className=`feedback ${correct?"ok":"bad"}`;
  fb.innerHTML=`<h3>${reveal?"Soluzione":correct?"✓ Corretto":"✕ Non corretto"}</h3>
    <p><strong>Risposta:</strong> ${escapeHtml(item.options[item.correct])}</p>
    <p>${escapeHtml(item.explanation)}</p>`;
  state.answers.push({question:item.question, correct, selected:state.selected, answer:item.options[item.correct], explanation:item.explanation});
  $("nextButton").classList.remove("hidden");
  $("checkButton").disabled=true; $("showButton").disabled=true;
  $("progressBar").style.width=`${((state.index+1)/state.questions.length)*100}%`;
  $("progressBar").parentElement.setAttribute("aria-valuenow",String(state.index+1));
}

function nextQuestion(){
  if(state.index<state.questions.length-1){state.index++;renderQuestion();}
  else if(state.questions.length===1 && state.mode==="random"){
    const next=generateQuestion(state.selectedTopic,state.selectedDifficulty);
    if(!next){alert("Non ci sono altre domande disponibili per questi filtri.");showView("homeView");return;}
    state.questions=[shuffledQuestion(next)]; state.index=0; state.answers=[]; renderQuestion();
  } else showResults();
}

function showResults(){
  const correct=state.answers.filter(a=>a.correct).length, total=state.questions.length;
  const percent=Math.round(correct/total*100);
  $("scorePercent").textContent=`${percent}%`;
  $("scoreRing").style.background=`conic-gradient(var(--accent) ${percent*3.6}deg, var(--line) 0deg)`;
  $("scoreTitle").textContent=percent>=80?"Preparazione solida":percent>=60?"Buona base, ma serve precisione":"Serve ancora allenamento";
  $("scoreSummary").textContent=`${correct} risposte corrette su ${total}.`;
  const actions=$("resultActions");
  actions.innerHTML="";
  const repeatButton=document.createElement("button");
  repeatButton.className="primary-button"; repeatButton.textContent="Nuovo test simile"; repeatButton.onclick=repeatLast;
  const homeButton=document.createElement("button");
  homeButton.className="secondary-button"; homeButton.textContent="Torna alla home"; homeButton.onclick=()=>showView("homeView");
  actions.append(repeatButton,homeButton);
  $("reviewList").innerHTML=state.answers.map((a,i)=>`<div class="review-item"><strong>${i+1}. ${escapeHtml(a.question)}</strong>
    <span>${a.correct?"✓ Corretta":"✕ Errata"} · ${escapeHtml(a.answer)}</span><p>${escapeHtml(a.explanation)}</p></div>`).join("");
  showView("resultView");
}

function repeatLast(){
  const count=state.questions.length;
  startQuiz(state.mode,count,state.selectedTopic,state.selectedDifficulty);
}

function openSetup(kind){
  state.mode=kind;
  showView("setupView");
  const content=$("setupContent");
  if(kind==="quick"){
    $("setupEyebrow").textContent="TEST RAPIDO"; $("setupTitle").textContent="Quante domande?";
    content.innerHTML=`<div class="setup-group"><div class="segmented">${[5,10,15,20].map((n,i)=>`<button class="${i===1?'selected':''}" data-count="${n}">${n}</button>`).join("")}</div></div>
      <button id="startSetup" class="primary-button full">Inizia</button>`;
    let count=10;
    content.querySelectorAll("[data-count]").forEach(b=>b.onclick=()=>{content.querySelectorAll("[data-count]").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");count=+b.dataset.count;});
    $("startSetup").onclick=()=>startQuiz("quick",count);
  } else {
    $("setupEyebrow").textContent="ESERCIZI"; $("setupTitle").textContent="Scegli argomento";
    const allTopics=[...topics.Python,...topics.Pandas];
    content.innerHTML=`<div class="setup-group"><label>Argomento</label><div class="topic-list">
      <button class="choice-chip selected" data-topic="Tutti">Tutti</button>${allTopics.map(t=>`<button class="choice-chip" data-topic="${escapeHtml(t)}">${escapeHtml(t)}</button>`).join("")}</div></div>
      <div class="setup-group"><label>Difficoltà</label><div class="segmented">${["Tutti","facile","medio","difficile"].map((d,i)=>`<button class="${i===0?'selected':''}" data-difficulty="${d}">${d}</button>`).join("")}</div></div>
      <button id="startSetup" class="primary-button full">Inizia esercizi</button>`;
    let topic="Tutti", difficulty="Tutti";
    content.querySelectorAll("[data-topic]").forEach(b=>b.onclick=()=>{content.querySelectorAll("[data-topic]").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");topic=b.dataset.topic;});
    content.querySelectorAll("[data-difficulty]").forEach(b=>b.onclick=()=>{content.querySelectorAll("[data-difficulty]").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");difficulty=b.dataset.difficulty;});
    $("startSetup").onclick=()=>{state.selectedTopic=topic;state.selectedDifficulty=difficulty;startQuiz("topics",10,topic,difficulty);};
  }
}

function renderReview(filter=""){
  const f=filter.toLowerCase();
  $("reviewCards").innerHTML=reviewData.filter(x=>(x.topic+" "+x.area+" "+x.summary).toLowerCase().includes(f)).map(x=>`
    <article class="review-card card"><span class="pill">${escapeHtml(x.area)}</span><h3>${escapeHtml(x.topic)}</h3>
    <p>${escapeHtml(x.summary)}</p><pre class="code-block"><code>${escapeHtml(x.syntax)}</code></pre>
    <p><strong>Errore tipico:</strong> ${escapeHtml(x.mistake)}</p></article>`).join("");
}

function escapeHtml(value){return String(value).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[m]));}

document.querySelectorAll("[data-action]").forEach(b=>b.onclick=()=>{
  const a=b.dataset.action;
  if(a==="random") startQuiz("random",1);
  if(a==="quick") openSetup("quick");
  if(a==="topics") openSetup("topics");
  if(a==="review"){renderReview();showView("reviewView");}
  if(a==="exam") startQuiz("exam",20);
});
document.querySelectorAll("[data-back]").forEach(b=>b.onclick=()=>showView("homeView"));
document.querySelectorAll("[data-nav]").forEach(b=>b.onclick=()=>{
  const n=b.dataset.nav;
  if(n==="home")showView("homeView");
  if(n==="random")startQuiz("random",1);
  if(n==="topics")openSetup("topics");
  if(n==="review"){renderReview();showView("reviewView");}
});
$("checkButton").onclick=()=>checkAnswer(false);
$("showButton").onclick=()=>checkAnswer(true);
$("nextButton").onclick=nextQuestion;
$("reviewSearch").oninput=e=>renderReview(e.target.value);
function applyTheme(theme,persist=false){
  document.documentElement.dataset.theme=theme;
  const dark=theme==="dark";
  $("themeToggle").setAttribute("aria-pressed",String(dark));
  $("themeToggle").title=dark?"Usa tema chiaro":"Usa tema scuro";
  const themeMeta=document.querySelector('meta[name="theme-color"]');
  if(themeMeta)themeMeta.content=dark?"#0b0b0f":"#f4f4f7";
  if(persist){try{localStorage.setItem("theme",theme);}catch(error){/* Il tema resta attivo per la sessione. */}}
}
$("themeToggle").onclick=()=>applyTheme(document.documentElement.dataset.theme==="dark"?"light":"dark",true);
let savedTheme=null;
try{savedTheme=localStorage.getItem("theme");}catch(error){/* Storage non disponibile: usa le preferenze di sistema. */}
applyTheme(savedTheme==="dark"||savedTheme==="light"?savedTheme:
  window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");
renderReview();

if("serviceWorker" in navigator&&location.protocol!=="file:"){
  window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
}

const quizData = [
    {
        question: "Na přední straně paže najdeme:",
        answers: ["Biceps brachii", "Triceps brachii", "M. brachioradialis", "M.extenzor brachii"],
        correct: 0
    },
    {
        question: "Funkcí svalů rombických je:",
        answers: ["Deprese lopatek", "Elevace lopatek", "Addukce lopatek", "Deprese lopatek"],
        correct: 2
    },
    {
        question: "Jak se nazývá svalový stah, při kterém se mění délka, ale ne napětí svalů?",
        answers: ["Izometrický", "Hypometrický", "Izotonický", "Hypertonický"],
        correct: 2
    },
    {
        question: "Svaly spolupracující na vykonání stejného pohybu se nazývají:",
        answers: ["Supinátory", "Synergisté", "Antagonisté", "Pronátory"],
        correct: 1
    },
    {
        question: "Kosti předloktí jsou:",
        answers: ["Ulna a humerus", "Ulna a radius", "Radius a humerus", "Ulna a fibula"],
        correct: 1
    },
    {
        question: "Největší kosti nohy je:",
        answers: ["Kost stehenní", "Kost patní", "Kost hlezenní", "Kost bércová"],
        correct: 1
    },
    {
        question: "Sval pološlašitý nalezneme:",
        answers: ["Na přední straně bérce", "Na zadní straně stehna", "Na vnitřní straně stehna", "Na přední straně bérce"],
        correct: 1
    },
    {
        question: "Ossa carpi je:",
        answers: ["7", "12", "8", "5"],
        correct: 2
    },
    {
        question: "Nejdelší sval v lidském těle je:",
        answers: ["Sval štíhlý", "Sval krejčovský", "Čtyřhlavý sval stehenní", "Trojhlavý sval pažní"],
        correct: 1
    },
    {
        question: "Hřeben lopatky zevně přechází v:",
        answers: ["malý hrbolek", "Olecranon (okovec)", "Acromion (nadpažek)", "Hákový výběžek"],
        correct: 2
    },
        {
        question: "Musculus latissimus dorsi patří mezi:",
        answers: ["Systém spinotranzverzální", "Povrchové zádové svaly", "Hluboké zádové svaly", "Dolní zádové svaly"],
        correct: 1
    },
    {
        question: "Na přední ploše lopatky začíná:",
        answers: ["Sval nadhřebenový", "Sval podlopatkový", "Sval deltový", "Velký oblý sval"],
        correct: 1
    },
    {
        question: "Na sedacím hrbolu začínají:",
        answers: ["Svaly přední strany stehna", "Svaly vnitřní strany stehna", "Svaly zadní strany stehna", "Svaly zevní strany stehna"],
        correct: 2
    },
    {
        question: "Svalová vlákna s vysoce anaerobní aktivitou, převažují glykolytické reakce a snadno unavitelná jsou:",
        answers: ["Tonická", "Fázická", "Přechodná", "Izotonická"],
        correct: 1
    },
    {
        question: "Mandibula je:",
        answers: ["Lopatka", "Dolní čelist", "Češka", "Horní čelist"],
        correct: 1
    },
    {
        question: "Dorzální strana je:",
        answers: ["Přední strana", "Zadní strana", "Boční strana", "Vnitřní strana"],
        correct: 1
    },
    {
        question: "Opakem elevace je:",
        answers: ["Protrakce", "Retrakce", "Deprese", "Pronace"],
        correct: 2
    },
    {
        question: "Češka – patela je připojena:",
        answers: ["K hornímu konci tibie vpředu", "K hornímu konci fibuly vpředu", "K dolnímu konci femuru vpředu", "Je to kost volná"],
        correct: 2
    },
    {
        question: "Počet ossa metatarzi je:",
        answers: ["7", "8", "5", "14"],
        correct: 2
    },
    {
        question: "Svaly kloněné najdeme na:",
        answers: ["Zádech", "Krku", "Hrudníku", "Jsou to svaly ramenního kloubu"],
        correct: 1
    },
    {
        question: "Proximální konec fibuly je:",
        answers: ["Horní konec kosti lýtkové", "Dolní konec kosti lýtkové", "Horní konec kosti holenní", "Horní konec ulny"],
        correct: 0
    },
    {
        question: "Přímý sval břišní se podílí na:",
        answers: ["Extenzi trupu", "Flexi trupu", "Na flexi i extenzi trupu", "Stahování břicha"],
        correct: 1
    },
    {
        question: "Sval čtyřhranný bederní se nachází:",
        answers: ["Je to sval kyčelního kloubu", "Je to břišní sval", "Je to zádový sval", "Je to hluboký sval hrudníku"],
        correct: 1
    },
    {
        question: "Rombické svaly se podílejí na:",
        answers: ["Flexi zad", "Addukci lopatek", "Abdukci lopatek", "Extenzi trupu"],
        correct: 1
    },
    {
        question: "Nadhřebenový sval je součástí svalů:",
        answers: ["Kyčelního kloubu", "Ramenního kloubu", "Hrudníku", "Vnitřní strany stehna"],
        correct: 1
    },
    {
        question: "Hákový sval je sval:",
        answers: ["Předloktí", "Přední strany paže", "Zadní strany paže", "Ramenního kloubu"],
        correct: 1
    },
    {
        question: "M.triceps brachii je:",
        answers: ["Extenzor", "Flexor", "Abduktor", "Rotátor"],
        correct: 0
    },
    {
        question: "M.flexor carpi ulnaris je:",
        answers: ["Vnitřní ohýbač zápěstí", "Zevní ohýbač zápěstí", "Vnitřní natahovač zápěstí", "Zevní natahovač zápěstí"],
        correct: 0
    },
    {
        question: "M. brachioradialis se nachází:",
        answers: ["Na paži", "Na předloktí", "Na ruce", "Je součástí ramenních svalů"],
        correct: 1
    },
    {
        question: "M.peroneus longus:",
        answers: ["Krátký sval lýtkový", "Dlouhý sval lýtkový", "Dlouhý sval předloktí", "Dlouhý sval holenní"],
        correct: 1
    },
    {
        question: "Kloub loketní je kloub:",
        answers: ["Složený", "Jednoduchý", "Válcový", "Neutrální"],
        correct: 0
    },
    {
        question: "Páteř čítá:",
        answers: ["37 – 39 obratlů", "31 – 32 obratlů", "33 – 34 obratlů", "30 – 35 obratlů"],
        correct: 2
    },
    {
        question: "První krční obratel se nazývá:",
        answers: ["Atlas", "Prominens", "Čepovec", "Axis"],
        correct: 0
    },
    {
        question: "Největší obratle jsou:",
        answers: ["Hrudní", "Křížové", "Bederní", "První dva krční obratle"],
        correct: 2
    },
    {
        question: "Nepravých žeber je:",
        answers: ["2 páry", "7 párů", "3 páry", "4 páry"],
        correct: 2
    },
    {
        question: "M.adduktor hallucis je:",
        answers: ["Odtahovač palce", "Natahovač palce", "Přitahovač palce", "Ohýbač palce"],
        correct: 2
    },
    {
        question: "Na olecranon (okovec) se upíná:",
        answers: ["M. deltoideus", "M. triceps brachii", "M. biceps brachii", "M.brachioradialis"],
        correct: 1
    },
    {
        question: "V kloubu ramenním je možný pohyb:",
        answers: ["V jedné rovině", "Ve dvou rovinách", "Ve třech rovinách", "Ve čtyřech rovinách"],
        correct: 2
    },
    {
        question: "Přední podélný vaz spojuje:",
        answers: ["Obratlová těla vzadu", "Obratlová těla vpředu", "Obratlové oblouky", "Obratlové trny"],
        correct: 1
    },
    {
        question: "Na kost patní se upíná šlacha:",
        answers: ["Herkulova", "Achillova", "Hektorova", "Patní"],
        correct: 1
    },
    {
        question: "Na které kosti najdeme velký chocholík (trochanter major):",
        answers: ["Na pažní kosti", "Na spánkové kosti", "Na stehenní kosti", "Na pánevní kosti"],
        correct: 2
    },
    {
        question: "Dendrity jsou výběžky nervové buňky vedoucí vzruchy:",
        answers: ["Do buňky", "Z buňky", "Z buňky i do buňky", "Jen v buňce"],
        correct: 0
    },
    {
        question: "Centrální nervovou soustavu tvoří:",
        answers: ["Mozek a nervy", "Nervy mozkové a míšní", "Mozek a mícha", "Sympatikus a parasympatikus"],
        correct: 2
    },
    {
        question: "Vegetativní nervy inervují (řídí):",
        answers: ["Hladkou svalovou tkáň", "Příčně pruhovanou svalovou tkáň", "Hladkou i příčně pruhovanou svalovou tkáň", "Vazivosvalovou tkáň"],
        correct: 0
    },
    {
        question: "Přenos vzruchu z nervu na sval se uskutečňuje:",
        answers: ["Na nervosvalové ploténce", "Na povázce", "Na šlaše", "Na nervosvalovém bříšku"],
        correct: 0
    },
    {
        question: "Základní jednotkou nervového systému je:",
        answers: ["Neuron", "Mozek", "Mícha", "Neuroglie"],
        correct: 0
    },
    {
        question: "Který kloub má chrupavčité destičky (menisky)?",
        answers: ["Hlezenní kloub", "Kolenní kloub", "Klouby nohy", "Klouby zápěstí"],
        correct: 1
    },
    {
        question: "Supinace nohy znamená:",
        answers: ["Přetočení nohy na palcovou stranu", "Přetočení nohy na malíkovou stranu", "Natažení nohy v nártu", "Ohnutí nohy v nártu"],
        correct: 1
    },
    {
        question: "Ke kostem se upíná:",
        answers: ["Svalová tkáň hladká", "Svalová tkáň příčně pruhovaná", "Svalová tkáň srdeční", "Svalová tkáň hladká i příčně pruhovaná"],
        correct: 1
    },
    {
        question: "Nejpohyblivějším kloubem na horní končetině je:",
        answers: ["Kloub zápěstní", "Kloub loketní", "Kloub ramenní", "Kloub palce ruky"],
        correct: 2
    },
    {
        question: "Pronace ruky znamená:",
        answers: ["Přetočení ruky dlaní dolů", "Přetočení ruky dlaní nahoru", "Natažení prstů", "Ohnutí prstů"],
        correct: 0
    },
    {
        question: "Která z kostí lebky není párová:",
        answers: ["Kost spánková", "Kost lícní", "Kost týlní", "Kost slzní"],
        correct: 2
    },
    {
        question: "Kolik svalů se nachází v lidském těle:",
        answers: ["300 – 340", "600 – 640", "400 – 440", "206 – 233"],
        correct: 1
    },
    {
        question: "Jak se nazývá vazivová blána na povrchu svalu:",
        answers: ["Povázka", "Okostice", "Synovie", "Sítnice"],
        correct: 0
    },
    {
        question: "Kolik je nártních kostí?",
        answers: ["7", "8", "5", "6"],
        correct: 0
    },
    {
        question: "Kolik článků prstů má ruka?",
        answers: ["12", "15", "14", "5"],
        correct: 2
    },
    {
        question: "Kolik článků prstů má noha?",
        answers: ["12", "15", "14", "10"],
        correct: 2
    },
    {
        question: "Kolik je kostí záprstních?",
        answers: ["8", "7", "5", "14"],
        correct: 2
    },
    {
        question: "Oponující sval palce patří mezi:",
        answers: ["Svaly středního prostoru", "Dorzální svaly ruky", "Svaly tenaru (palcového valu)", "Svaly hypotenaru (malíkového valu) eje"],
        correct: 2
    },
    {
        question: "Smích nebo pláč a další výrazy obličeje umožňují:",
        answers: ["Zdvihače hlavy", "Podkožní sval krku (m.platysma)", "Mimické svaly", "Kloněné svaly"],
        correct: 2
    },
    {
        question: "Jak se jmenuje svalový stah, při kterém se mění napětí, ale ne délka svalů?",
        answers: ["Izotonický", "Hypometrický", "Izometrický", "Neutralizační"],
        correct: 2
    },
    {
        question: "Co je motorická (hybná) jednotka?",
        answers: ["Soubor svalových vláken, která jsou ovládána jednou nervovou buňkou", "Jedna nervová buňka ovládá jedno svalové vlákno", "Soubor nervových buněk ovládá jedno svalové vlákno", "Soubor svalových vláken"],
        correct: 0
    },
    {
        question: "Jaká je hlavní funkce mezižeberních svalů?",
        answers: ["Stabilizují hrudník", "Jsou to pomocné dýchací svaly", "Chrání vnitřní orgány", "Vyplňují prostory mezi žebry"],
        correct: 1
    },
    {
        question: "M.biceps femoris najdeme:",
        answers: ["Na dorzální straně stehna", "Na dorzální straně bérce", "Na mediální straně stehna", "Na přední straně paže"],
        correct: 0
    },
    {
        question: "Které tvrzení o krční páteři je pravdivé?",
        answers: ["Je tvořena 5 obratli", "Všemi obratli prochází mícha", "Druhý obratel se nazývá nosič", "Je tvořena 12 obratli"],
        correct: 1
    },
    {
        question: "Mezi které svaly zařadíme sval podhřebenový, malý oblý, nadhřebenový, deltový,podlopatkový, velký oblý:",
        answers: ["Svaly hrudníku", "Svaly kyčelního kloubu", "Svaly ramenního kloubu", "Sval mediální strany stehna"],
        correct: 2
    },
    {
        question: "M.levator scapulae:",
        answers: ["Stlačuje lopatku do hrudníku", "Zdvihá a otáčí lopatku", "Přitahuje lopatku k páteři", "Je abduktorem lopatky"],
        correct: 1
    },
    {
        question: "Co je spina scapulae?",
        answers: ["Hákovitý výběžek lopatky", "Hřeben lopatky", "Nadpažek", "Hákový výběžek"],
        correct: 1
    },
    {
        question: "Kolik je meziobratlových plotének:",
        answers: ["33", "23", "34", "28"],
        correct: 1
    },
    {
        question: "V jaké rovině se pohybuje páteř při lateroflexi (úklon vpravo, vlevo):",
        answers: ["V rovině frontální", "V rovině sagitální", "V rovině transverzální", "V rovině mediální"],
        correct: 0
    },
    {
        question: "Kost pánevní je srostlá z:",
        answers: ["Kosti kyčelní, stehenní, sedací", "Kosti kyčelní, sedací, stydké", "Kosti stehenní, sedací, stydké", "Kosti stehenní, křížové a sedací"],
        correct: 1
    },
    {
        question: "Flexi v kyčelním kloubu dělá:",
        answers: ["Sval dvouhlavý stehenní", "Sval bedrokyčlostehenní", "Sval pološlašitý", "Sval poloblanitý"],
        correct: 1
    },
    {
        question: "Kosti dělíme:",
        answers: ["Houbovité, kompaktní", "Tvaré, beztvaré", "Dlouhé, krátké, ploché", "Svaly pevné a pružné"],
        correct: 2
    },
    {
        question: "Svalová bolest je způsobena vyplavením:",
        answers: ["Kyseliny mravenční", "Kyseliny mléčné", "Kyseliny octové", "Kyseliny citronové"],
        correct: 1
    },
    {
        question: "Mezi základní kontraktilní bílkoviny patří:",
        answers: ["Aktin a myosin", "Kreatinin a ATP", "Valin a lysin", "Myofibrily a mitochondrie"],
        correct: 0
    },
    {
        question: "Extenzory najdeme na:",
        answers: ["Dlaňové straně předloktí", "Hřbetní straně předloktí", "dlaňové i hřbetní straně předloktí", "dlaňové straně paže"],
        correct: 1
    },
    {
        question: "Opozice palce je:",
        answers: ["Ohnutí palce", "Postavení palce proti prstům", "Natažení palce", "Přitažení palce"],
        correct: 1
    },
    {
        question: "Svaly přední strany bérce:",
        answers: ["Zvedají nohu a prsty nahoru (postavení na paty)", "Ohýbají prsty a napínají chodidlo (flexe prstů, postavení na špičkách)", "Jsou flexory i extenzory nohy", "Provádějí pronaci nohy"],
        correct: 0
    },
    {
        question: "Základní vlastnosti svalu jsou:",
        answers: ["Smrštitelnost a dráždivost", "Stažitelnost a šlachovitost", "Smrštitelnost a šlachovitost", "Řízení všech systémů v organismu"],
        correct: 0
    },
    {
        question: "Zdrojem energie pro svaly je:",
        answers: ["Vitamin D", "Glykogen (zásobní cukr)", "Kyslík", "Tuk"],
        correct: 1
    },
    {
        question: "Musculus erector spinae se podílí na:",
        answers: ["Extenzi trupu a lateroflexi trupu", "Flexi trupu a lateroflexi", "Flexi trupu a rotaci", "Flexi a rotaci trupu"],
        correct: 0
    },
    {
        question: "Sval jako orgán je složen ze:",
        answers: ["Svalů, vaziva, nervů a cév", "Svalů, chrupavky a vaziva", "Svalů, nervů a okostice", "Jen ze svalové tkáně"],
        correct: 0
    },
    {
        question: "Dlouhý sval krku a dlouhý sval hlavy se podílí na:",
        answers: ["Flexi krční páteře", "Extenzi i flexi krční páteře", "Extenzi krční páteře", "Flexi hrudníku"],
        correct: 0
    },
    {
        question: "Sval přímý břišní – m.rectus abdominis (začátek a úpon):",
        answers: ["Z: poslední žebra Ú: kost stydká", "Z: kost stydká Ú: šikmé svaly břišní", "Z: hrudní kost Ú: kost stydká", "Z: hrudní obratle Ú: kost stydká"],
        correct: 2
    },
    {
        question: "Musculus serratus posterior superior je:",
        answers: ["Sval pilovitý přední", "Sval pilovitý zadní horní", "Sval pilovitý zadní dolní", "Sval krejčovský zadní horní"],
        correct: 1
    },
    {
        question: "Svaly mnohoklanné a otáčecí jsou svaly:",
        answers: ["Povrchové", "Tvoří třetí vrstvu svalů zad", "Tvoří čtvrtou vrstvu svalů zad", "V lidském těle se nevyskytují"],
        correct: 2
    },
    {
        question: "M. teres minor (malý oblý) patří do svalů:",
        answers: ["Předloktí", "Ramenního kloubu", "Kyčelního kloubu", "Loketního kloubu"],
        correct: 1
    },
    {
        question: "M. triceps brachii – uveďte správně začátek a úpon:",
        answers: ["Z: hákovitý výběžek na lopatce Ú: horní část kosti vřetenní", "Z: lopatka, kost pažní Ú: kost loketní-okovec", "Z: lopatka, kost pažní Ú: horní část kosti vřetenní", "Z: klíční kost Ú: dolní konec kosti loketní – okovec"],
        correct: 1
    },
    {
        question: "Musculus flexor carpi radialis je:",
        answers: ["Vnitřní natahovač zápěstí", "Zevní ohýbač zápěstí", "Zevní natahovač zápěstí", "Vnitřní ohýbač zápěstí"],
        correct: 1
    },
    {
        question: "M. brachioradialis je:",
        answers: ["Sval loketní", "Sval pažní", "Sval vřetenní", "Je pronátor zápěstní"],
        correct: 1
    },
    {
        question: "Horní hlezenní kloub je spojení:",
        answers: ["Dolní částí kosti holenní a lýtkové s kostí hlezenní", "Dolní částí kosti holenní a lýtkové s kostí patní", "Patní a hlezenní kosti", "Patní kosti a kostí nártními"],
        correct: 0
    },
    {
        question: "Bedrokyčelní sval náleží mezi svaly tonické, má tendenci ke:",
        answers: ["Zkracování", "K oslabování", "Zkracování i oslabování", "Neoslabuje se ani nezkracuje"],
        correct: 0
    },
    {
        question: "Svaly fazické se účastní převážně:",
        answers: ["Pohybu", "Udržování polohy těla v prostoru", "Pohybu i udržování polohy těla v prostoru", "Na vzpřímeném sedu i stoji v prostoru"],
        correct: 0
    },
    {
        question: "Z míchy páteřní vystupuje:",
        answers: ["12 párů míšních nervů", "21 párů míšních nervů", "31 párů míšních nervů", "34 párů míšních nervů"],
        correct: 2
    },
    {
        question: "První krční obratel se nazývá:",
        answers: ["Čepovec", "Nosič", "Corpus", "Axis"],
        correct: 1
    },
    {
        question: "Páteř je esovitě zakřivena, střídá se:",
        answers: ["Krční kyfóza, hrudní lordóza, bederní kyfóza, křížová kyfóza", "Krční lordóza, hrudní kyfóza, bederní lordóza, křížová kyfóza", "Krční lordóza, bederní kyfóza, hrudní lordóza, křížová kyfóza", "Krční lordóza, hrudní skolióza, bederní lordóza, křížová skolióza"],
        correct: 1
    },
    {
        question: "Vnější kotník najdeme:",
        answers: ["Dolním konci lýtkové kosti", "Dolním konci holenní kosti", "Na horním konci kosti patní", "Na dolním konci kosti lýtkové i holenní"],
        correct: 0
    },
    {
        question: "Rotace v kolenním kloubu je možná:",
        answers: ["Kdykoliv", "Jen při flexi kolenního kloubu", "Jen při extenzi kolenního kloubu", "Rotace v kolenní kloubu není možná"],
        correct: 1
    },
    {
        question: "Sval hruškový najdeme:",
        answers: ["Na vnitřní straně stehna", "Na zadní straně stehna", "Je to sval kyčelního kloubu, zevní rotátor", "Hruškový sval neexistuje"],
        correct: 2
    },
    {
        question: "Sval hřebenový patří mezi svaly:",
        answers: ["Mediální strany stehna", "Laterální strany stehna", "Dorzální strany stehna", "Patří mezi svaly kyčelního kloubu"],
        correct: 0
    },
    /*Poskytování základů první pomoci*/
    {
        question: "Ke stavění tepenného krvácení na pažní tepně jako první použijeme:",
        answers: ["tlakový obvaz", "škrtidlo", "Akutol spray", "trojcípý šátek"],
        correct: 0
    },
    {
        question: "Při krvácení z nosu postiženému:",
        answers: ["zakloníme hlavu", "předkloníme hlavu a chladíme zátylek", "předkloníme hlavu a do nosních dírek dáme velké množství vaty", "předkloníme hlavu a vyzveme postiženého, aby se vysmrkal"],
        correct: 1
    },
    {
        question: "Otevřenou zlomeninu bérce nejlépe ošetříme:",
        answers: ["překrýt sterilním (popřípadě čistým) obvazem a končetinu zafixovat, volat záchrannou službu", "překrýt sterilním (popřípadě čistým) obvazem a končetinu zafixovat, naložit postiženého do auta a odvézt do nemocnice", "překrýt sterilním (popřípadě čistým) obvazem a končetinu zafixovat, zatlačit do rány zpět vyčnívající kost, naložit postiženého do auta a odvézt do nemocnice", "překrýt sterilním (popřípadě čistým) obvazem a končetinu zafixovat, zatlačit do rány zpět vyčnívající kost, volat záchrannou službu"],
        correct: 0
    },
    {
        question: "Poraněný je při vědomí a velmi silně krvácí z rány na krku. Co uděláte?",
        answers: ["vrátíme se k vozu a začneme hledat v lékárničce vhodný obvazový materiál", "neprodleně krvácející místo stlačíme prsty, dlaní nebo složeným kusem oděvu", "krvácející místo nebudeme ošetřovat, začneme poraněnému zajišťovat životní funkce, tj. umělé dýchání, zevní srdeční masáž", "neprodleně budu volat záchrannou službu"],
        correct: 1
    },
    {
        question: "Dýchací cesty uvolníme:",
        answers: ["uložením poraněného do Rautekovy zotavovací polohy", "záklonem hlavy", "drobným řezem ve středu krku", "přetočením postiženého na břicho"],
        correct: 1
    },
    {
        question: "První pomoc je povinen poskytnout:",
        answers: ["jen ten, kdo prošel zdravotnickým školením", "každý, kdo tak může učinit bez nebezpečí pro sebe nebo jiného", "každý, pokud již dosáhl věku 18 let", "pouze školení zdravotničtí pracovníci"],
        correct: 1
    },
    {
        question: "Správná frekvence stlačení hrudní kosti při srdeční masáži je u dospělého:",
        answers: ["přibližně 60 stlačení za minutu", "přibližně 100–120 stlačení za minutu", "přibližně 20 stlačení za minutu", "počet stlačení není důležitý, hlavně masáž nepřerušovat"],
        correct: 1
    },
    {
        question: "Poraněný je v bezvědomí a dýchá. Jakou pomoc mu poskytnete?",
        answers: ["mírně zakloníme hlavu a uvolníme mu tak dýchací cesty a budeme ho sledovat do příjezdu ZS, pokud dýchat přestane, ihned zahájíme KPR", "přivoláme pouze RZP, pokud poraněný dýchá, nemusíme ho dále sledovat", "neprodleně zahájíme srdeční masáž", "postiženého ihned transportujeme sami do nejbližšího zdravotnického zařízení"],
        correct: 0
    },
    {
        question: "Pokud z rány volně vytéká tmavě červená krev, jde o krvácení:",
        answers: ["žilní", "tepenné", "vlásečnicové", "může se jednat o tepenné i žilní krvácení"],
        correct: 0
    },
 {
    question: "U poraněného s podezřením na úraz páteře:",
    answers: [
      "s poraněným smíme manipulovat bez omezení",
      "manipulujeme s poraněným co nejméně, pouze v souvislosti se zajištěním životních funkcí",
      "s poraněným v žádném případě nehýbeme",
      "manipulujeme pouze v případě, že postižený je účastník autonehody a musíme jej vytáhnout z vozu"
    ],
    correct: 1
  },
  {
    question: "Pro kvalitně prováděnou srdeční masáž je nejdůležitější:",
    answers: [
      "dostatečná hloubka stlačení hrudní kosti a frekvence",
      "jen frekvence",
      "jen hloubka stlačení hrudní kosti",
      "aby se zachránci při masáži střídali"
    ],
    correct: 0
  },
  {
    question: "Laickou resuscitaci ukončíme:",
    answers: [
      "pokud začne postižený normálně dýchat, hýbe se nebo jinak reaguje",
      "jakmile se postižený aspoň jednou zřetelně nadechne",
      "pokud nemůžeme provádět dýchání z plic do plic",
      "po 15 minutách neúspěšné resuscitace"
    ],
    correct: 0
  },
  {
    question: "Optimální hloubka kompresí při nepřímé masáži srdce u dospělého:",
    answers: [
      "je 3-4 cm",
      "není stanovena, platí zásada „čím více, tím lépe“",
      "je 5-6 cm",
      "nesmíme při masáži zlomit žebra, hloubku si určuje zachránce sám"
    ],
    correct: 2
  },
  {
    question: "Rychlou zdravotnickou záchrannou službu přivoláme na telefonním čísle:",
    answers: ["155", "150", "158", "156"],
    correct: 0
  },
  {
    question: "Při bodné ráně nožem:",
    answers: [
      "nůž vytáhneme a místo kompresivně obvážeme",
      "ponecháme jej v ráně bez fixace",
      "ponecháme jej v ráně a fixujeme",
      "nůž vytáhneme a místo jen lehce obvážeme"
    ],
    correct: 2
  },
  {
    question: "V rámci první pomoci stavíme nejdříve:",
    answers: [
      "žilní krvácení, aby se k srdci dostalo dostatek krve",
      "tepenné krvácení",
      "krvácení z oděrek, abychom zabránili infekci",
      "nerozhoduje jaký je to typ krvácení, ale jak moc to krvácí"
    ],
    correct: 1
  },
  {
    question: "Popáleniny menšího a středního rozsahu:",
    answers: [
      "přikryjeme kapesníkem",
      "budeme chladit vodou a sterilně přikryjeme",
      "zasypeme pudrem obsahujícím antibiotika",
      "nikdy nechladíme"
    ],
    correct: 1
  },
  {
    question: "Správné poskytnutí první pomoci vyžaduje:",
    answers: [
      "přítomnost lékaře",
      "účelnost, rychlost a rozhodnost",
      "být proškolen v první pomoci",
      "zdravotnické vzdělání"
    ],
    correct: 1
  },
  {
    question: "Jak byste ošetřili lehce krvácející ránu, ve které by byl vklíněný velký skleněný střep:",
    answers: [
      "střep vytáhneme a ránu zavážeme",
      "střep nebudeme vytahovat, ránu převážeme tak, aby střep nebyl vtlačen hlouběji do rány",
      "střep vytáhneme, očistíme a kompresivně stáhneme",
      "střep nevytahujeme, ránu kompresivně stáhneme, aby nedošlo k většímu krvácení"
    ],
    correct: 1
  },
  {
    question: "Zotavovací (Rautekova)poloha je:",
    answers: [
      "poloha na zádech, dolní končetiny pokrčeny v kolenou, mírně podložena hlava",
      "poloha na boku, 1 nebo 2 dolní končetiny pokrčeny v kolenou, obě dvě horní končetiny před tělem, ruka pod ústy",
      "poloha na boku, dolní končetiny nataženy, ruka pod ústy hlava v mírném předklonu",
      "v této poloze provádíme kardiopulmonální resuscitaci"
    ],
    correct: 1
  },
  {
    question: "Nepřímou srdeční masáž u dospělé osoby provádíme:",
    answers: [
      "v dolní třetině hrudníku asi dva prsty pod mečovitým výběžkem kosti hrudní",
      "uprostřed hrudníku, asi 2 prsty pod úrovní klíční kosti",
      "uprostřed hrudní kosti",
      "dva centimetry pod výběžkem hrudní kosti"
    ],
    correct: 2
  },
  {
    question: "Komu se věnujeme při autonehodě nejdříve?",
    answers: [
      "těm, kteří sténají, křičí",
      "dětem",
      "těm, kteří nereagují na oslovení",
      "postupně všem raněným"
    ],
    correct: 2
  },
  {
    question: "Správná frekvence a hloubka stlačení u nepřímé srdeční masáže u dospělé osoby je:",
    answers: [
      "60 stlačení za minutu do hloubky 8-10 cm",
      "80 stlačení za minutu do hloubky 6-8 cm",
      "100–120 stlačení za minutu do hloubky 4-5 cm",
      "100–120 stlačení za minutu do hloubky 1-3 cm"
    ],
    correct: 2
  },
  {
    question: "Po epileptickém záchvatu často bývá postižený:",
    answers: [
      "v bezvědomí",
      "zmatený, dezorientovaný",
      "při plném vědomí",
      "při vědomí a agresivní"
    ],
    correct: 1
  },
  {
    question: "Při úplném přerušení míchy v oblasti horní krční páteře nastane:",
    answers: [
      "porucha dechu, bezvědomí, smrt",
      "ochrnutí horních končetin",
      "bezvědomí, ochrnutí celého těla",
      "ochrnutí dolních končetin"
    ],
    correct: 0
  },
  {
    question: "Při hře fotbalu na mokrém povrchu upadl jeden z hráčů. Stěžuje si na bolest pravé horní končetiny. Největší bolest udává v oblasti pravého ramene a klíční kosti:",
    answers: [
      "přiložíte na postižené místo dlahu",
      "pokud postižený požádá, dáte mu napít",
      "končetinu dáte do závěsu (trojcípý šátek), zajistíte transport do nemocnice",
      "končetinu se snažíme rozhýbat, může být jen vykloubená"
    ],
    correct: 2
  },
  {
    question: "Dívka najde svou kamarádku ležící na pohovce, na stole jsou pohozené prázdné lahvičky od léků. Postižená je probuditelná, ale hned upadá do spánku:",
    answers: [
      "uchováte prázdné lahvičky od léku a voláte záchranku",
      "snažíte se postiženou posadit a postavit",
      "podáte postižené silnou kávu",
      "vyvoláte u postižené co nejrychleji zvracení"
    ],
    correct: 0
    },
        {
       question: "První předlékařskou pomoc je povinen poskytnout:",
       answers: [
         "jen ten, kdo prošel jakýmkoli zdravotnickým školením",
         "jen zdravotník – profesionál",
         "každý občan ČR, pokud tím neohrozí svůj život či zdraví",
         "jen ten, kdo si troufne"
       ],
       correct: 2
     },
     {
       question: "Telefonní číslo na integrovaného záchranného systému je:",
       answers: ["115", "114", "112", "113"],
       correct: 2
     },
     {
       question: "Při volání zdravotnické záchranné služby je vhodné uvést:",
       answers: [
         "místo dopravní nehody, jména a adresy postižených",
         "jméno a číslo telefonu volajícího, místo nehody, počet, pohlaví a věk raněných, typ úrazu",
         "místo nehody, jména a adresy raněných a ošetřujících, příjezdové cesty",
         "místo dopravní nehody, počet raněných a pak hovor ukončíme"
       ],
       correct: 1
     },
     {
       question: "Při potřísnění oka kyselinou:",
       answers: [
         "oko vyplachujeme čistou vodou a zajistíme lékařské ošetření",
         "aplikujeme do oka mast a oko překryjeme",
         "vyplachujeme neutralizačním roztokem, lékařské ošetření není nutné",
         "do oka nic neaplikujeme, nevyplachujeme a ihned zajistíme lékařské ošetření"
       ],
       correct: 0
     },
     {
       question: "Poraněný je při vědomí a stěžuje si na silnou bolest v oblasti zad, brnění dolních končetin. Jaké by mohl mít poranění?",
       answers: [
         "zlomeniny dolních končetin",
         "poranění hrudníku",
         "poranění páteře, při změně citlivosti také poranění míchy",
         "poranění břicha"
       ],
       correct: 2
     },
     {
       question: "Pokud není při zástavě oběhu zahájena resuscitace, začínají mozkové buňky nezvratně odumírat cca po:",
       answers: ["3-5 minutách", "jedné minutě", "10 minutách", "15 minutách"],
       correct: 0
     },
     {
       question: "Zraněný si po dopravní nehodě stěžuje na bolesti břicha a pocit žízně:",
       answers: [
         "nepodáváme žádné nápoje",
         "podáváme jen studené nápoje",
         "podáváme dostatek vlažných nápojů",
         "podáme jakékoli léky proti bolesti a volám záchrannou službu"
       ],
       correct: 0
     },
     {
       question: "Při poranění motorkáře, který je v bezvědomí a nedýchá:",
       answers: [
         "nikdy nesundávám přilbu",
         "je nejlepší vyproštění hlavy ve dvou zachráncích, kdy jeden pevně svírá hlavu poraněného a druhý opatrně sejme přilbu",
         "mohu sejmout přilbu jakýmkoliv způsobem",
         "přilbu snímám pouze v případě, že vím, jakým způsobem"
       ],
       correct: 1
     },
     {
       question: "Které poranění budete ošetřovat jako první:",
       answers: [
         "krvácení z nosu",
         "krvácení z pažní tepny",
         "oboustrannou zlomeninu bérce",
         "krvácení z ucha"
       ],
       correct: 1
     },
     {
       question: "Ve kterém z těchto případů využijete Rautekovu zotavovací polohu:",
       answers: [
         "při zlomenině pažní kosti",
         "při bezvědomí se zachovanými životními funkcemi",
         "při žilním krvácení v oblasti dolních končetin",
         "při tepenném krvácení v oblasti dolních končetin"
       ],
       correct: 1
     },
     {
       question: "Skok po hlavě do neznámé vody mže především způsobit tento typ poranění:",
       answers: [
         "poranění krční páteře a následné ochrnutí",
         "zlomeninu dolní končetiny",
         "poškození ledvin způsobené nárazem na vodní hladinu",
         "poranění mozku"
       ],
       correct: 0
     },
     {
       question: "Dýchací cesty u bezvědomého uvolníme nejsnáze:",
       answers: [
         "záklonem hlavy",
         "vytažením pevně uchopeného jazyka",
         "vsunutím hadičky do nosu nebo úst",
         "uložením postiženého do stabilizované polohy"
       ],
       correct: 0
     },
     {
       question: "Základní laická resuscitace by měla být zahájena vždy v případě, že:",
       answers: [
         "postižený nereaguje a nedýchá",
         "postižený nereaguje, je bledý, dýchá nápadně rychle",
         "postižený je v bezvědomí",
         "postižený nemá hmatný tep"
       ],
       correct: 0
     },
     {
       question: "Postižený má křeče a záškuby celého těla i končetin. Jak budete postupovat?",
       answers: [
         "Postiženého otočíme na záda, zakloníme hlavu a násilím otevřeme ústa a vytáhneme jazyk, aby se nedusil, voláme záchrannou službu.",
         "Ponecháme postiženého v poloze, jakou zaujímá a zajistíme jeho bezpečnost, aby se během křečí o něco neporanil, voláme RZS.",
         "Otočíme jej do „Rautekovy“ polohy, silou bráníme křečím a počkáme cca 5-10 minut, pak voláme RZS.",
         "Ponecháme postiženého v poloze, jakou zaujímá, snažíme se zprůchodnit dýchací cesty a voláme RZS"
       ],
       correct: 1
     },
     {
       question: "Postižený je při vědomí, špatně se mu dýchá:",
       answers: [
         "uložíme jej do polohy v leže na boku",
         "uložíme jej do vodorovné polohy se zakloněnou hlavou",
         "necháme postiženého sedět",
         "snažíme se s postiženým pomalu chodit a voláme RZS"
       ],
       correct: 2
     },
     {
       question: "Vyhledávání tepu u postiženého:",
       answers: [
         "provádíme na tepně na předloktí",
         "provádíme zásadně na krkavici",
         "tep nevyhmatáváme, zdržujeme se od zahájení KPR",
         "tep musíme vyhmatat, jinak nesmíme zahájit KPR"
       ],
       correct: 2
     },
     {
       question: "Při otravě houbami je nutné udělat následující:",
       answers: [
         "vyvolat zvracení a zavolat záchranku",
         "nevyvolávat zvracení, zajistit vzorek stravy a zavolat pomoc",
         "upadne-li postižený do bezvědomí, zavolat záchranku",
         "vyvolat zvracení, zjistit na internetu protijed a ihned podat"
       ],
       correct: 0
     },
     {
       question: "Při poranění elektrickým proudem:",
       answers: [
         "okamžitě voláme záchranku",
         "přerušíme přívod elektrického proudu a odtáhneme postiženého z dosahu vedení pomocí nevodivého předmětu, v případě nutnosti zahájíme KPR",
         "popálené plochy oplachujeme studenou vodou",
         "popálené plochy kryjeme ihned mastí nebo krémem na popáleniny, vypneme přívod elektrického proudu"
       ],
       correct: 1
       },
         {
           question: "Malé dítě vypije nezjištěné množství Jaru:",
           answers: [
             "zředíme vypitím malého množstvím vody a vyhledáme lékařskou pomoc",
             "je vhodné vyvolat zvracení a transportovat k lékaři",
             "zásadně nevyvoláváme zvracení, ani nepodáváme vodu, transportujeme k lékaři",
             "nejlépe podáme sklenici mléka a transportujme k lékaři"
           ],
           correct: 2
         },
         {
           question: "Při zjištění omrzlin je nejdůležitější:",
           answers: [
             "zamezit dalšímu působení chladu",
             "potírat omrzliny sněhem",
             "jít zavolat první pomoc",
             "vložit postižené prsty do horké vody"
           ],
           correct: 0
         },
         {
           question: "Při zevní srdeční masáži:",
           answers: [
             "dáváme pozor, abychom pacientovi nezlomili žebra",
             "masírujeme levou část hrudníku, protože srdce je uloženo vlevo",
             "masírujeme oběma rukama u dospělého, jednou rukou u dětí, prsty u novorozence",
             "stlačení hrudníku provádíme u dospělého člověka maximálně 2 cm"
           ],
           correct: 2
         },
         {
           question: "Pokud z jakéhokoliv důvodu při resuscitaci nemůžeme, nebo nechceme provádět dýchání z plic do plic:",
           answers: [
             "nezahajujeme vůbec resuscitaci",
             "pokračujeme v nepřímé masáži srdce a vždy po 30 kompresích uděláme cca 10 sekund pauzu.",
             "pokračujeme v nepřetržité nepřímé masáži srdce frekvencí 100–120 stlačení za minutu",
             "zeptáme se kolemjdoucích, jestli to někdo umí"
           ],
           correct: 2
         },
         {
           question: "Laickou resuscitaci ukončíme:",
           answers: [
             "Pokud jsme vyčerpaní a nejsme schopni v resuscitaci pokračovat bez ohrožení svého vlastního zdraví",
             "Jakmile se postižený aspoň jednou zřetelně nadechne.",
             "Pokud nemůžeme provádět dýchání z plic do plic.",
             "V případě, že u postiženého nahmatáme tep."
           ],
           correct: 0
         },
         {
           question: "Při bodné ráně nožem do oblasti břicha:",
           answers: [
             "nůž z rány vytáhneme a voláme RZS",
             "nůž necháme v ráně, fixujeme jej a voláme RZS",
             "nůž necháme v ráně, fixujeme, zajistíme protišoková opatření a voláme RZS",
             "nůž necháme v ráně a zavoláme RZS"
           ],
           correct: 2
         },
         {
           question: "V případě nutnosti zaškrcení krvácející tepny horní končetiny nejlépe použijeme:",
           answers: ["šle", "tkanička od bot", "provázek", "cokoli – pásek nebo šátek širší 5 cm"],
           correct: 3
         },
         {
           question: "Z popálené plochy těla před jejím překrytím:",
           answers: [
             "odstraníme lpící oděv, případně lpící cizí tělesa",
             "nic neodstraňujeme",
             "odstraníme jen volně ležící tělesa, popř. prstýnky, náramky, náušnice apod. dříve než, dojde k otoku, pak již nic neodstraňujeme",
             "popálené plochy opláchneme vodou, odstraníme lpící oděv, popřípadě lpící cizí tělesa"
           ],
           correct: 2
         },
         {
           question: "Lapavé dechy tzv. gasping je:",
           answers: [
             "jsou typickou známkou náhlé zástavy oběhu, kdy je potřeba ihned zahájit resuscitací",
             "jsou typickou známkou otravy alkoholem nebo drogami",
             "jsou pro dýchání sice nedostatečné, ale jsou známkou toho, že krevní oběh je v pořádku",
             "jsou typickým příznakem úrazu hlavy, postiženého musíme okamžitě uložit do Rautekovy polohy"
           ],
           correct: 0
         },
         {
           question: "Známkou toho, že při resuscitaci došlo k obnovení životních funkcí je:",
           answers: [
             "hmatný puls na velkých tepnách",
             "když se postižený alespoň jednou nadechne",
             "když se postižený začne hýbat (např. pohyb paže, očních víček aj.) probouzí se",
             "postižený odpovídá na položené otázky"
           ],
           correct: 2
         },
         {
           question: "Při hromadném poranění budeme ošetřovat jakém pořadí tepenné krvácení (1), zástavu dýchání (2), zlomenou dolní končetinu (3), otřes mozku (4)",
           answers: ["1, 2, 3, 4", "2, 1, 3, 4", "2, 1, 4, 3", "1, 2, 4, 3"],
           correct: 0
         },
         {
           question: "První pomoc při úrazu elektrickým proudem zahajujeme:",
           answers: [
             "okamžitým ošetřením poraněného",
             "vypnutím zdroje elektrického proudu s ohledem na vlastní bezpečí",
             "okamžitým přivoláním RZS, s poraněným nehýbeme",
             "přiskáčeme po jedné noze a rukou odstraníme zdroj elektrického proudu"
           ],
           correct: 1
         },
         {
           question: "Postiženého s poraněním levé strany hrudníku, který je při vědomí, uložíme do polohy:",
           answers: ["na pravý bok", "do polosedu", "na břicho", "na záda"],
           correct: 1
         },
         {
           question: "Postiženého s cizím tělesem v oku v rámci první pomoci ošetříme takto:",
           answers: [
             "čistým, suchým obvazem překryjeme obě oči a transportujeme k lékaři",
             "oko vypláchneme, snažíme se cizí těleso odstranit, v případě neúspěchu navštívíme lékaře",
             "oko pravidelně vykapáváme očními kapkami, v případě, že bolest neustupuje, navštívíme lékaře",
             "oka se nedotýkáme a ihned navštívíme lékaře"
           ],
           correct: 0
         },
         {
           question: "Při dýchání z plic do plic u dospělého člověka by měl objem vdechovaného vzduchu odpovídat:",
           answers: [
             "hlubokému nádechu zachránce",
             "normálnímu nádechu zachránce",
             "zachránce vydechuje pouze objem vzduchu v dutině ústní",
             "objem vdechovaného vzduchu nehraje roli, důležité je provádět dva vdechy za sebou"
           ],
           correct: 0
         },
         {
           question: "V případě uštknutí hadem se rána:",
           answers: [
             "vymačká nebo vysaje ústy, zaškrtí škrtidlem",
             "obváže elastickým obinadlem, fixuje (znehybní) a chladí",
             "vymačká nebo vysaje ústy, škrtidlo se nepoužívá, překryje sterilním obvazem",
             "rozřízne a vysaje, obváže elastickým obinadlem, fixuje (znehybní) a chladí"
           ],
           correct: 1
         },
         {
           question: "Jak bezpečně zjistíte, jestli postižený dýchá:",
           answers: [
             "přiložením zrcátka k ústům a nosu – orosí se",
             "postižený má růžovou barvu v obličeji",
             "při sklonění se k ústům postiženého cítím na své tváři jeho dech",
             "postižený nemá fialové zbarvení rtů a obličeje"
           ],
           correct: 2
         },
         {
           question: "Postižený před vámi upadá do kolapsového stavu a ztrácí vědomí:",
           answers: [
             "zahájím okamžitou resuscitaci",
             "postiženého uložím do Rautekovy polohy",
             "postiženému zvednu nohy a zajistím volné dýchací cesty",
             "postiženého opřu v polosedě a zavolám záchrannou službu"
           ],
           correct: 2
         },
         {
           question: "Postižený je v bezvědomí, leží na zádech, dýchá a začne zvracet. Jak budete postupovat?",
           answers: [
             "otočíme hlavu na stranu a snažíme se vyčistit dutinu ústní",
             "s hlavou nehýbeme, jen kontrolujeme, hrozí poranění páteře a míchy",
             "necháme postiženého zvracet v leže a sledujeme, jestli se nedusí",
             "uložíme postiženého do Rautekovy polohy"
           ],
           correct: 0
         },
         {
           question: "Řidič po dopravní nehodě sedí v kabině vozu zhroucený na volantu, nereaguje, nedýchá. Jak budete postupovat?",
           answers: [
             "okamžitě zavolám záchrannou službu, s postiženým nebudu hýbat",
             "postiženého s pomocí ostatních vyprostím z vozu, zkontroluji životní funkce, přivolám záchrannou službu a zahájím resuscitaci",
             "postiženého s pomocí ostatních vyprostím z vozu, zahájím resuscitaci a pak přivolám záchrannou službu",
             "postiženého zásadně z vozu nevyprošťuji, sleduji jeho zdravotní stav, kontroluji tep na krku a čekám na příjezd záchranné služby"
           ],
           correct: 1
         },
         {
           question: "K určení rozsahu popálené plochy používáme orientačně:",
           answers: ["pravidlo devíti", "pravidlo šesti", "pravidlo pěti", "pravidlo osmi"],
           correct: 0
         },
         {
           question: "Správné místo ke stlačení hrudníku při masáži srdeční je:",
           answers: [
             "nad srdcem vlevo od hrudní kosti",
             "nad srdcem vpravo od hrudní kosti",
             "uprostřed hrudní kosti",
             "v oblasti mečovitého výběžku hrudní kosti"
           ],
           correct: 2
         },
         {
           question: "Resuscitaci dítěte v případě jednoho zachránce:",
           answers: [
             "zahajujeme pěti úvodními vdechy a voláme RZS",
             "zahajujeme pěti úvodními vdechy, pak minutu resuscitujeme a pak voláme RZS",
             "voláme RZS, pak provádíme resuscitaci v poměru 30:2 (30 stlačení a dva vdechy)",
             "voláme RZS, zahajujeme pěti úvodními vdechy a pak resuscitujeme v poměru 30:2"
           ],
           correct: 1
         },
         {
           question: "Kdy je možno ukončit laickou resuscitaci:",
           answers: [
             "po bezvýsledném úsilí, které trvá alespoň 60 minut",
             "nejdříve za dvacet minut",
             "při úplném vyčerpání zachránců",
             "resuscitaci ukončujeme až s příjezdem RZS"
           ],
           correct: 2
         },
         {
           question: "Laickou resuscitaci (umělé dýchání a nepřímou masáž srdeční) provádí zachránce v poměru:",
           answers: ["1 vdech a 5 stlačení hrudníku", "2 vdechy a 15 stlačení hrudníku", "2 vdechy a 30 stlačení hrudníku", "2 vdechy a 10 stlačení hrudníku"],
           correct: 2
         },
         {
           question: "Postižený po pádu krvácí z pravého ucha:",
           answers: [
             "postiženého položíme na levý bok, ucho překryjeme",
             "postiženého položíme na pravý bok, ucho překryjeme",
             "do ucha zasuneme vatu, postiženého uložíme na levý bok",
             "do ucha zasuneme vatu, postiženého uložíme na levý bok"
           ],
           correct: 1
         },
         {
           question: "Jaké telefoní číslo použijeme k přivolání hasičů:",
           answers: ["150", "155", "160", "158"],
           correct: 0
         },
  {
    question: "Mezi tzv. 5 T – (protišoková opatření) nepatří:",
    answers: ["teplo", "tišení bolesti", "tekutiny", "tělesná teplota"],
    correct: 3
  },
  {
    question: "Při dušení postiženého cizím tělesem:",
    answers: [
      "snažíme se vyvolat zvracení",
      "voláme RZS, postiženého pouze sledujeme",
      "postiženého předkloníme a udeříme ho opakovaně mezi lopatky",
      "vyzveme postiženého, aby se uklidnil a usilovně kašlal"
    ],
    correct: 2
  },
  {
    question: "Postižený je diabetik, je zmatený, opocený, při vědomí. Jak budete postupovat?",
    answers: [
      "okamžitě postiženému aplikujete inzulín",
      "okamžitě podáme slazený nápoj, sladký bonbón apod.",
      "nepodáváme nic a voláme RZS",
      "snažíme se najít u postiženého kartičku diabetika, voláme RZS"
    ],
    correct: 1
  },
  {
    question: "V případě, že postižený nehýbe polovinou těla, má povislý koutek, nesrozumitelně komunikuje, usuzujeme na:",
    answers: [
      "sníženou hladinu cukru v krvi",
      "mozkovou příhodu",
      "zvýšenou hladinu cukru v krvi",
      "srdeční infarkt"
    ],
    correct: 1
  },
  {
    question: "Jestli postižený dýchá, zjišťujeme při poskytování první pomoci po dobu:",
    answers: ["20 sekund", "2 minuty", "10 sekund", "tak dlouho, dokud si nejsme jistí tím, jestli dýchá nebo ne"],
    correct: 2
  },
  {
    question: "V případě, že chceme postiženého uložit do protišokové polohy, uložíme jej:",
    answers: [
      "do sedu s podloženým zády",
      "na bok, levý nebo pravý",
      "na záda, s nohami podloženými pod koleny",
      "do sedu v mírném předklonu"
    ],
    correct: 2
  },
  {
    question: "Při úpalu podáváme postiženému nejlépe:",
    answers: ["alkohol", "sladké nápoje", "minerální vodu", "ovocný čaj"],
    correct: 2
  },
  {
    question: "První pomoc při požití Fridexu (nemrznoucí směsi do chladiče automobilu) je:",
    answers: [
      "vypít 200 ml mléka",
      "vypít 200 ml 40% alkoholu",
      "vypít 200 ml citrónové šťávy"
    ],
    correct: 1
  }
];





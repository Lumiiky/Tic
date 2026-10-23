# Tic : benchmark des concurrents

Version 1 · 22 octobre 2026 · pour `docs/ideation/framing.md` (section benchmark direct et indirect)

## En bref

- **L'écoute par micro n'est pas un avantage de Tic : c'est le ticket d'entrée.** Simply Piano, Flowkey, Skoove, Yousician et Simply Guitar écoutent déjà par le micro du téléphone, avec le MIDI en option. Seuls Playground Sessions et Duolingo Music (avec son piano Loog) dépendent du MIDI. Tous les éditeurs reconnaissent que le micro souffre du bruit, de l'accordage et des passages rapides.
- **Les leaders vendent des morceaux connus, sous licence.** Flowkey achète ses licences aux éditeurs et retire des morceaux quand elles expirent, pays par pays ; Yousician signe des accords d'artistes (Metallica, Billie Eilish) ; Duolingo a signé avec Sony Music ; Musora passe par Hal Leonard et refuse l'accès à vie « à cause des licences ». C'est une preuve indirecte forte de H3, et cela rend l'hypothèse la plus risquée de Tic (catalogue libre de droits) encore plus exposée.
- **Le prix de marché est d'environ 110 à 180 € par an**, essai de 7 à 14 jours, abonnement annuel mis en avant. Les plaintes récurrentes portent sur les prélèvements après l'essai et la résiliation.
- **Les séances courtes existent déjà** (« 5-Minute Workout » de Simply Piano, objectifs quotidiens de 5 minutes de Melodics). La durée choisie par l'utilisateur n'est donc qu'une variante.
- **L'espace qui reste libre** : aucun acteur ne fait du morceau choisi par l'utilisateur le cursus lui-même (un parcours de compétences construit à rebours depuis ce morceau, avec une date d'arrivée), sur piano et guitare, avec une mascotte qui ne culpabilise pas. Le cœur de la différence de Tic, c'est le parcours, pas la technologie.

## Méthode et limites

- Concurrents retenus : 7 directs (apps qui écoutent le jeu et enseignent) et 7 indirects (outils ou alternatives que les débutants utilisent à la place).
- Prix France relevés sur l'App Store français le 22 octobre 2026. Le store affiche les montants sans toujours dire la durée : quand la durée est déduite, c'est indiqué « probablement ». Les prix des sites officiels (Yousician, Fender) n'ont pas pu être lus directement ; pour ces acteurs, les prix viennent de tests ou d'agrégateurs datés, cités en sources.
- Plusieurs comparatifs utilisés sont sponsorisés ou affiliés (HackerNoon, Unstar, ArtMaster) : utilisés pour les faits (prix, fonctions), pas pour les jugements.
- Rien n'a été testé à la main. Un test de 15 minutes des 4 apps principales sur un piano acoustique et sur un clavier sans MIDI serait une bonne preuve pour `feasibility.md` (ce n'est pas du code produit).

## Tableau de synthèse : concurrents directs

| App | Instruments | Écoute | Catalogue et droits | Prix France (App Store, 22/10/2026) | Ce qui retient | Point faible principal |
| --- | --- | --- | --- | --- | --- | --- |
| **Simply Piano** (Simply, ex-JoyTunes) | Piano | Micro (moteur MusicSense) ou MIDI ; clavier tactile sans instrument | Pop et classique, « grande bibliothèque », nouveaux contenus chaque mois ; 2 cours gratuits | 107,99 à 134,99 €/an, famille 159,99 €, 3 mois 67,99 € | Gains rapides, séances de 5 min personnalisées, notation 4,7/5 (87 k notes FR) | Plaintes sur prélèvements et résiliation ; contenu léger au-delà du débutant |
| **Flowkey** | Piano | Micro (piano acoustique compris) ou MIDI/Bluetooth | Morceaux pop licenciés auprès d'éditeurs, retirés quand la licence expire, variable selon le pays | Classic jusqu'à 119,99 €, Premium jusqu'à 179,99 € (probablement annuels) | Qualité des arrangements, mode « attente », ralenti, mains séparées | Peu de gamification ; on imite plus qu'on n'apprend à lire ; micro gêné sur les passages rapides |
| **Skoove** | Piano | Micro ou MIDI USB/Bluetooth | Pop (Adele, Coldplay, Beatles) et classique ; plus de 500 leçons | Jusqu'à 149,99 €/an ; offre gratuite limitée sans carte | Rythme adaptatif, interface sobre et adulte | Catalogue de morceaux plus petit ; mensuel cher (29,99 €) |
| **Yousician** | Guitare, basse, ukulélé, piano, chant | Micro (MIDI possible au piano) | « Des milliers de chansons », accords d'artistes ; disponibilité selon le pays et retraits possibles | 1 instrument 119,99 €/an ou 19,99 €/mois ; Premium Plus 179,99 €/an | Étoiles, séries, classements hebdomadaires, multi-instrument | Piano secondaire ; chansons connues réservées au palier le plus cher ; reconnaissance sensible au bruit |
| **Simply Guitar** | Guitare | Micro (« place ton téléphone devant toi ») | Accords et chansons, vidéos pas à pas | 134,99 à 169,99 €/an, accès complet 200 € | Même recette que Simply Piano | Mêmes critiques sur l'abonnement |
| **Playground Sessions** | Piano | **MIDI seulement**, pas de reconnaissance audio | Plus de 2 000 morceaux avec accompagnement ; co-fondé par Quincy Jones | 24,99 $/mois, 149,99 $/an, 349 $ à vie (MusicRadar, 2023) | « Bootcamp » structuré, 80 % de justesse pour avancer | Inutilisable en retour temps réel sur piano acoustique ; arrangements simplifiés, parfois transposés |
| **Duolingo Music** | Piano (théorie, lecture) | Clavier à l'écran ; vrai piano via le Loog en MIDI USB (249 $, épuisé au 22/10/2026) | Plus de 60 enregistrements Sony Music (Hozier, Whitney Houston…), accord d'août 2024 | Inclus dans Duolingo (non revérifié) | Marque, gratuité, mécaniques Duolingo | Pas de vrai instrument sans le Loog ; théorie plus que jeu |

## Fiches détaillées

### Simply Piano et Simply Guitar (Simply, Tel-Aviv)

- **Cible** : grands débutants, adultes et familles ; promesse « apprends vite ».
- **Fonctionnement** : notes qui défilent, retour immédiat, cours par niveau, morceaux ralentissables, séances de 5 minutes personnalisées. Simply Guitar ajoute des vidéos pas à pas.
- **Écoute** : micro du téléphone posé sur le piano, acoustique ou numérique, ou MIDI. Le store liste des bugs de connexion MIDI et de mauvaise détection de notes.
- **Poids** : 97 M$ levés, valorisation citée autour d'1 Md$ en 2021 ; Simply Piano a 859 k notes sur l'App Store US. Partenariat Trinity College London (2024) pour des certificats.
- **Faiblesses** : plaintes de prélèvement après essai et de résiliation difficile (Trustpilot, échantillon faible de 9 avis, à prendre comme signal) ; plafond de contenu pour les intermédiaires ; le défilement de notes freine la lecture de partition.
- **Leçon pour Tic** : c'est la référence du « tout de suite ». Tic ne doit pas chercher à être plus rapide, mais à aller plus loin sur un morceau précis, avec un essai sans piège visible.

### Flowkey (Berlin, partenaire Yamaha)

- **Cible** : adultes qui veulent jouer de « vrais » morceaux au piano.
- **Fonctionnement** : vidéo de mains réelles + partition, mode attente (la musique attend la bonne note), boucles, ralenti à 50 et 75 %, mains séparées.
- **Écoute** : micro, y compris piano acoustique ; Flowkey conseille de réduire le bruit, d'ouvrir le couvercle et d'avoir un piano accordé à 440 Hz. Bluetooth/MIDI possible.
- **Catalogue et droits** : licences auprès d'éditeurs et de sociétés de gestion ; des morceaux sont retirés à l'expiration des licences, différemment selon le pays.
- **Faiblesses** : pas de vraie gamification ni de métronome intégré ; apprentissage par imitation.
- **Leçon pour Tic** : la plus proche de « je veux jouer ce morceau ». Mais Flowkey te donne le morceau, pas un parcours qui t'y mène. Son modèle de licences montre le coût et la fragilité du catalogue pop.

### Skoove (Berlin)

- **Cible** : adultes débutants qui veulent comprendre (lecture dès les premières leçons).
- **Fonctionnement** : leçons guidées, rythme adaptatif, morceaux classés par niveau.
- **Écoute** : micro ou MIDI USB/Bluetooth.
- **Prix** : 12,49 €/mois en annuel, 29,99 € au mois ; offre gratuite sans limite de temps mais très réduite.
- **Faiblesses** : catalogue plus petit, peu de ressorts de motivation.
- **Leçon pour Tic** : la preuve que le ton adulte et sobre a un public ; Tic peut y ajouter la chaleur de la mascotte.

### Yousician (Helsinki)

- **Cible** : débutants multi-instruments, très orienté jeu.
- **Fonctionnement** : notes qui défilent façon jeu vidéo, étoiles, séries, classements.
- **Écoute** : micro ; l'aide de Yousician cite l'accordage, le bruit, les effets du clavier et les réglages audio Android comme causes de mauvaise reconnaissance.
- **Catalogue et droits** : chansons sous licence depuis 2018 ; accords d'artistes (Metallica 2022, Billie Eilish 2024) ; morceaux absents selon le pays ou retirés quand les licences changent. Une recherche infructueuse devient une demande (bonne idée pour la liste de souhaits de Tic).
- **Faiblesses** : la gamification peut masquer les lacunes ; chansons connues au palier le plus cher.
- **Leçon pour Tic** : le multi-instrument par micro est faisable à grande échelle, mais il faut des années de réglages. Pour Tic, une équipe de 7 personnes, c'est un verrou technique, pas une simple fonction.

### Playground Sessions (États-Unis)

- **Cible** : débutants piano équipés d'un clavier numérique.
- **Fonctionnement** : bootcamp en trois niveaux (92, 66 puis 31 leçons), 80 % de justesse pour avancer, morceaux avec accompagnement.
- **Écoute** : MIDI uniquement. Sur piano acoustique, pas de retour en temps réel ni de suivi des progrès.
- **Leçon pour Tic** : le seuil de validation à 80 % existe déjà (le même que dans le cadrage de Tic). Le choix MIDI seul exclut les pianos acoustiques, ce que Tic veut éviter.

### Duolingo Music

- **Cible** : grand public, curieux de musique, déjà utilisateurs de Duolingo.
- **Fonctionnement** : leçons de théorie et de lecture sur clavier à l'écran ; un vrai piano seulement avec le Loog, branché en MIDI USB.
- **Catalogue** : plus de 60 enregistrements de plus de 40 artistes Sony Music (communiqué du 15 août 2024).
- **Leçon pour Tic** : Duolingo occupe le terrain du « gratuit et ludique », d'où le positionnement de Tic « pas un Duolingo de la musique ». Tic reprend la série avec gel, mais sans la culpabilisation reprochée à la chouette.

## Concurrents indirects

| Alternative | Ce qu'elle fait | Prix | Pourquoi les gens l'utilisent | Ce qui manque par rapport à Tic |
| --- | --- | --- | --- | --- |
| **Moises** | Sépare un morceau en pistes, détecte accords et tonalité, change le tempo sans changer la hauteur | Gratuit limité ; Premium 5,99 $/mois ou 39,99 $/an | N'importe quel morceau, celui qu'on veut (75 M d'utilisateurs revendiqués) | Aucun parcours pédagogique ni écoute du jeu |
| **JustinGuitar** | 210 vidéos de cours, plus de 1 500 chansons avec accords | 8,99 $/mois, 64,99 $/an | Pédagogue reconnu, beaucoup de contenu gratuit sur le web | Pas d'écoute par micro mentionnée |
| **Fender Play** | Cours vidéo guitare, basse, ukulélé autour de morceaux connus | 9,99 $/mois, 89,99 $/an (Tech Advisor 2022, confirmé par Subger mars 2026) | Marque, morceaux comme but de chaque leçon | Retour sur le jeu limité (enregistrement noté, en bêta en 2022) |
| **Synthesia** | Notes qui tombent sur n'importe quel fichier MIDI | Déblocage 39 $ (29 $ en promotion) | Prix unique, jouer « n'importe quoi » avec un fichier trouvé | Pas de pédagogie ; pose la question des droits des fichiers |
| **Rocksmith+** (Ubisoft) | Jeu guitare, plus de 5 000 morceaux, micro du téléphone ou câble | 15 $/mois, 100 $/an (lancement 2022) | Gros catalogue sous licence | Orienté jeu vidéo, PC ou console |
| **Melodics** | Leçons courtes pour clavier MIDI, pads, batterie | 131,88 $/an (Standard) | Objectifs quotidiens de 5 min, séries, trophées | MIDI nécessaire, peu de morceaux |
| **YouTube, prof particulier, partitions** | Tutos gratuits, accompagnement humain, papier | Gratuit / 20 à 50 € de l'heure (ordre de grandeur, à vérifier en entretien) | Gratuit et sur n'importe quel morceau ; le prof motive | Pas de retour (YouTube), cher et rigide (prof) |

## Ce qui retient les utilisateurs, ce qui les fait partir

**Ce qui retient**, d'après les fonctions que tous les leaders ont en commun :

- Jouer un vrai morceau reconnaissable très tôt (Simply, Flowkey, Yousician, Fender).
- Le retour immédiat sur chaque note, même imparfait.
- Des séances courtes et une série de jours (Simply, Melodics, Yousician).
- Des outils de pratique : ralenti, boucles, mains séparées (Flowkey, Moises).

**Ce qui fait partir** :

- L'abandon est massif : environ 90 % des nouveaux guitaristes arrêtent dans l'année selon le PDG de Fender (interview MusicRadar, 2019 ; ce n'est pas une étude) ; rétention à J30 d'environ 2 % pour les apps éducatives (Business of Apps, source et année non précisées : à citer avec prudence).
- La reconnaissance par micro décevante : elle domine les avis à une étoile de la catégorie selon Unstar (2026), et toutes les aides officielles listent les mêmes causes (bruit, accordage, réglages).
- Les abonnements perçus comme des pièges (prélèvement après essai, résiliation).
- Le morceau voulu absent ou retiré (licences par pays chez Flowkey et Yousician).
- Le plafond de contenu après le niveau débutant.

## Positionnement de Tic

### Carte de positionnement

Deux axes qui séparent vraiment les acteurs :

- **Horizontal : qui fixe l'objectif ?** Le cursus de l'app (Simply, Yousician, Skoove, Duolingo, Playground) ou le morceau de l'utilisateur (Flowkey, Moises, Synthesia, YouTube).
- **Vertical : est-ce qu'on est guidé jusqu'au bout ?** Simple outil ou contenu (Moises, Synthesia, YouTube, Flowkey dans une moindre mesure) ou parcours avec progression et retour (Simply, Yousician, Skoove).

Le quadrant « mon morceau » + « parcours guidé jusqu'au bout » est vide. C'est là que se place Tic : le morceau choisi devient le cursus, découpé en parties, avec les compétences nécessaires placées avant chaque partie et une date d'arrivée estimée.

### Ce que Tic apporte de neuf

| Élément de Tic | Déjà chez un concurrent ? | Verdict |
| --- | --- | --- |
| Le morceau choisi devient le cursus, avec une date d'arrivée | Non : Flowkey donne le morceau sans parcours, Simply donne un parcours sans morceau choisi | **Différenciant principal** |
| Morceau découpé en parties, en commençant par le refrain | Boucles et sections existent (Flowkey, Moises) ; ordre pédagogique par parties non trouvé | Différenciant, à formuler comme « parcours », pas comme « boucle » |
| Durée de séance choisie par l'utilisateur | Séances de 5 min fixes chez Simply et Melodics | Variante, pas un argument principal |
| Écoute par micro, tout instrument | Simply, Flowkey, Skoove, Yousician | **Ticket d'entrée**, pas un différenciant |
| MIDI en option | Tous les acteurs piano | Ticket d'entrée |
| Passage des notes guidées à la partition, puis jouer « sans l'app » | Skoove (lecture), Flowkey (partition) ; l'objectif explicite « sans l'app » non trouvé | Différenciant, répond à la critique « on imite » |
| Mascotte qui ne culpabilise pas, série gelée plutôt que perdue | Séries partout ; ton non culpabilisant non revendiqué | Différenciant d'image, utile pour le teaser |
| Essai sans piège, résiliation en un clic | Contre-exemple : plaintes chez Simply | Argument de confiance, aussi une obligation légale |
| Vote mensuel et liste de souhaits | Yousician transforme une recherche ratée en demande | Partiellement neuf |

### Le point faible à assumer devant le jury

Les concurrents qui marchent vendent des morceaux connus, sous licence, et Tic démarre avec un catalogue libre de droits. Le jury le verra. Il vaut mieux le dire avant lui : c'est l'hypothèse la plus risquée, elle est testée en entretien avec la liste des 20 morceaux libres, et les retraits de morceaux chez Flowkey et Yousician montrent que même les leaders vivent avec ce problème. Le benchmark donne aussi un argument : Moises et Synthesia montrent que les gens veulent « leur » morceau à tout prix, ce qui soutient l'idée d'un import de fichier personnel en privé (sous réserve juridique).

### Prix suggéré par le marché

Le marché se situe à 110-180 € par an pour un instrument. Le scénario du dossier (70 €/an) place Tic sous le marché : c'est cohérent avec un catalogue plus petit, mais il faudra le justifier (voir `feasibility.md`, axe économique).

## Questions à poser en entretien grâce au benchmark

- « Quelles apps avez-vous essayées, combien de temps, et pourquoi avez-vous arrêté ? » (rétention réelle, cause d'abandon)
- « La dernière fois que l'app ne vous a pas entendu, que s'est-il passé ? » (H6, sur l'équipement réel)
- « Le morceau que vous vouliez jouer était-il dans l'app ? Qu'avez-vous fait sinon ? » (H2, H3, contournements : YouTube, Synthesia, Moises)
- « Combien payez-vous ou avez-vous payé, et comment avez-vous résilié ? » (H7, prix acceptable)

## Version courte pour framing.md

> **Benchmark.** Directs : Simply Piano/Guitar, Flowkey, Skoove, Yousician, Playground Sessions, Duolingo Music. Indirects : Moises, JustinGuitar, Fender Play, Synthesia, Rocksmith+, Melodics, YouTube et professeurs. Tous les leaders écoutent par micro ou MIDI et vendent 110 à 180 € par an un catalogue de morceaux connus sous licence, parfois retirés selon le pays. Ce qui retient : un vrai morceau très tôt, le retour immédiat, des séances courtes et des séries. Ce qui fait partir : micro décevant, abonnements vécus comme des pièges, morceau voulu absent, plafond de contenu. Aucun ne fait du morceau choisi par l'utilisateur le cursus lui-même : c'est la place de Tic. Son point faible assumé est le catalogue libre de droits au lancement, testé en entretien.

## Sources (consultées le 22 octobre 2026)

**Fiches App Store (prix, notes, descriptions)**
- Simply Piano, App Store France : https://apps.apple.com/fr/app/id1019442026 ; fiche US via AppsHunter (859 k notes, mise à jour du 19/10/2026) : https://appshunter.io/ios/app/1019442026
- Flowkey, App Store France : https://apps.apple.com/fr/app/id1020357408 et US : https://apps.apple.com/app/flowkey/id1020357408
- Skoove, App Store France : https://apps.apple.com/fr/app/id1160668178
- Yousician, App Store France : https://apps.apple.com/fr/app/id959883039
- Simply Guitar, App Store France : https://apps.apple.com/FR/app/id1476695335
- JustinGuitar, App Store US : https://apps.apple.com/US/app/id1176125504

**Pages officielles et aides**
- Flowkey, pourquoi des morceaux ne sont plus disponibles : https://help.flowkey.com/en/articles/8975623-why-are-some-songs-no-longer-available-on-flowkey
- Flowkey, piano acoustique : https://help.flowkey.com/en/articles/651003-can-i-use-an-acoustic-piano-with-flowkey
- Yousician, morceau populaire introuvable : https://support.yousician.com/hc/en-us/articles/360000758937-Why-can-t-I-find-a-popular-song-in-Yousician
- Yousician, problèmes de reconnaissance du piano : https://support.yousician.com/hc/en-us/articles/46277319890449-Piano-sound-recognition-issues
- Musora, coût supplémentaire des morceaux (Hal Leonard) : https://help.musora.com/article/1238-why-is-there-an-extra-cost-for-musora-songs
- Duolingo x Sony Music, communiqué du 15/08/2024 : https://investors.duolingo.com/news-releases/news-release-details/duolingo-partners-sony-music-add-hit-recordings-major-artists
- Piano Loog x Duolingo (249 $) : https://store.duolingo.com/products/loog-x-duolingo-piano
- Synthesia : https://www.synthesiagame.com/
- Melodics : https://melodics.com/info/ai-info-page

**Presse, tests et comparatifs (date de publication)**
- ArtMaster, « What piano apps actually cost in 2026 » (13/07/2026) : https://www.artmaster.com/articles/what-piano-apps-actually-cost-in-2026
- HackerNoon, comparatif des apps de piano 2026 (24/02/2026, affilié) : https://hackernoon.com/lang/es/best-piano-learning-apps-in-2026-an-in-depth-comparison-of-music-education-technology
- Unstar, avis Skoove (28/07/2026, sponsorisé par Skoove) : https://unstar.app/blog/skoove-review-price-free-plan-real-reviews-2026
- MusicRadar, test de Playground Sessions (07/12/2023, mis à jour 16/02/2024) : https://www.musicradar.com/reviews/playground-sessions-review
- Tech Advisor, test de Fender Play (11/03/2022) : https://www.techadvisor.com/article/719754/fender-play-review.html
- Subger, prix Fender Play et Yousician (vérifiés le 18/03/2026) : https://subger.com/en/service/fender-play et https://subger.com/en/service/yousician
- Engadget, lancement de Rocksmith+ (2022) : https://www.engadget.com/rocksmith-plus-september-6-pc-213041279.html
- Business Today, Duocon 2024 (26/09/2024) : https://www.businesstoday.in/amp/technology/news/story/duolingo-embraces-ai-and-music-at-duocon-2024-unveils-video-call-adventures-loog-piano-partnership-447543-2024-09-26
- Billboard, Yousician x Billie Eilish (2024) : https://www.billboard.com/pro/billie-eilish-hit-me-hard-yousician-music-deals
- Tool Directory, fiche Moises (revue le 25/07/2026) : https://tooldirectory.ai/tools/moises
- Wikipédia, Simply (software company) : https://en.wikipedia.org/wiki/Simply_(software_company) ; Yousician : https://en.wikipedia.org/wiki/Yousician
- Trustpilot, hellosimply.com (9 avis, échantillon faible) : https://ca.trustpilot.com/review/hellosimply.com

**Chiffres d'abandon et de rétention**
- Live for Live Music reprenant l'interview du PDG de Fender, Andy Mooney, par MusicRadar (20/11/2019) : https://liveforlivemusic.com/news/fender-new-guitarists-abandon-instrument-2019/
- Business of Apps, rétention J30 des apps éducatives (source et année non précisées) : https://www.businessofapps.com/?p=98187

# Tic : guide de marque et nouveaux écrans (V2)

22 octobre 2026 · sources : [maquettes-v2/project/](maquettes-v2/project/)

La maquette V1 (dossier `maquette-app-morceau-du-jour/`) n'a pas été modifiée. La V2 la complète : elle reprend son logo, sa mascotte et ses écrans d'accueil, de morceau, de session et de jeu, et ajoute le guide de marque et 21 écrans.

## Promesse et caractère

- **Promesse** : l'app qui t'emmène jusqu'au morceau que tu veux jouer.
- **Signature** : « Ton morceau, un jour après l'autre. »
- **Trois traits** : patient (ralentit, découpe, jamais de reproche), concret (un morceau, une partie, une date), chaleureux (un salon, pas une salle d'arcade).

## Logo

- Logotype « tic » en Baloo 2 ExtraBold, en minuscules ; le « i » est le balancier orange, sans contrepoids, de la ligne de base à la hauteur du « c », **centré entre le « t » et le « c » et droit (vertical) en version statique** ; le point est centré au-dessus, crème sur fond forêt, forêt sur fond clair (version validée par aude le 23 oct. 2026 ; barre centrée et droite validée le même jour, sur le modèle de l'intro v2). SVG de référence : `maquettes-v2/project/LogoMascotte.dc.html`.
- Versions : principale sur forêt, sur fond clair, monochrome, symbole (Tic content, balancier crème) pour l'icône d'app.
- Zone de protection : la hauteur du « c ». Taille minimale : 24 px à l'écran, 8 mm en impression. Sous 48 px, l'icône perd la bouche.
- Interdits : déformer, incliner la barre du « i » en version statique, la décentrer, remettre un contrepoids sur le balancier, crème sur orange (2,1:1), ombres ou dégradés, capitales, coller la mascotte au mot.
- Exports : `exports/logo.png` (1024 × 1024, Tic épuré sans joues ni ondes, et logotype) et `exports/banner.png` (1600 × 600, Tic sur un clavier, « piano ou guitare »), pour `assets/branding/` et la fiche Innovation. Le nom « Tic » reste à vérifier (INPI, stores) avant l'export.

## Couleurs

| Rôle | Nom | Hex |
| --- | --- | --- |
| Fond | Crème | #FFF3E0 |
| Texte, boutons | Forêt | #1F4D3A |
| Mascotte, progrès | Orange Tic | #FF8A5B |
| Fêtes uniquement | Soleil | #FFD23F |
| Texte secondaire | Mousse | #46655A |
| Texte orangé lisible | Terre cuite | #A63E17 |
| Socle de Tic | Brique | #E5683A |
| Ombre des boutons | Forêt nuit | #133326 |
| Mise en avant | Pêche | #FFE0CF |
| À venir, inactif | Sable | #F3DFC2 |
| Validé, écoute | Sauge #DCEBE3 · Écoute #256B47 | |
| Série gelée | Givre #DDEBF5 · Glacier #2F6A99 | |
| Zone de jeu | Aubergine nuit #2A2140 · Lavande #C9BEE0 | |

Dosage : crème et blanc 60 %, forêt 25 %, orange 10 %, soleil 5 %.

**Changements par rapport à la V1** : #4E6E61 et #5B7A6C fusionnés en Mousse #46655A ; #B4441A et #8A3A17 remplacés par Terre cuite #A63E17 ; #3E7CB1 remplacé par Glacier #2F6A99. Les anciennes valeurs tombaient sous 4,5:1 sur sable, pêche ou crème. Contrastes vérifiés : forêt/crème 8,8:1, mousse/crème 5,9:1, terre cuite/pêche 5,1:1, forêt/soleil 6,7:1, forêt/orange 4,1:1 (gros texte seulement).

## Typographie

- **Baloo 2** (500 à 800) : toute l'app, titres, boutons, chiffres.
- **Nunito** (400 à 700) : textes longs (vitrine, dossiers, consentements).
- **Bravura** (SMuFL, OFL) : gravure de partition.
- Échelle app : écran 34/800, chiffre 40/800, section 20/800, bouton 19/800, corps 16/600, légende 14/600. Jamais sous 14 px. Typographie française (« », espace avant ! ? :).

## Tic, la mascotte

- Anatomie : corps trapèze orange, socle brique, deux yeux, une bouche, balancier = bras et humeur.
- **Balancier sans contrepoids (validé le 23 oct.)** : sur tous les logos Tic, animés ou non, le balancier est une seule barre, sans petite barre perpendiculaire. Même règle que pour le « i » du logotype.
- **Règle des yeux (validée le 23 oct.)** : partout où Tic est affiché, quand ses yeux sont ouverts, chaque œil a un point blanc (reflet #FFFFFF, en haut à droite de la pupille, environ 37 % de son rayon). Les yeux fermés ou plissés de joie n'en ont pas.
- Le balancier dit l'humeur : à gauche il compte (concentré), à droite il est content, droit et caché il se repose.
- Animation : pendant un exercice, le balancier bat au tempo réel du morceau.
- **Règle du mouvement (validée le 23 oct.)** : dès que Tic ou le logo bouge, il agit comme un vrai métronome. Le balancier va de droite à gauche en rythme régulier, jusqu'au bout de chaque côté, en ralentissant aux extrémités comme un pendule. Pas de demi-course ni de mouvement irrégulier.
- Intro animée : le scénario validé (le point tombe, le « i » bascule, le point rebondit deux fois et sort) était la version 1. **Intro v2 validée par aude le 23 oct.** (animation/variantes/tic-metronome-2s.mp4) : barre du « i » centrée entre le t et le c, battement à 120 bpm jusqu’au bout de chaque côté, le point rebondit sur le haut de la barre à chaque extrémité et passe de l’autre côté. Les logos animés suivent ce modèle ; les logos statiques ont la barre droite.
- 13 humeurs : les 11 de la V1 plus **Salut** (accueil) et **Tend l'oreille** (le micro entend mal).
- Toujours : proposer une solution, féliciter le progrès, rester posé en bas de l'écran. Jamais : pleurer, bouder, culpabiliser, apparaître deux fois, cacher la partition, parler pendant que l'utilisateur joue.

## Ton et voix

Tutoiement partout ; une bulle de Tic tient en 12 mots ; on parle du morceau, pas de leçons ni de points ; une date est toujours « vers le ». Un seul rappel par jour, pas de fausse urgence. Exemples « on dit / on évite » sur la planche Ton et voix.

## Composants

Bouton principal forêt (ombre pleine #133326), secondaire blanc, lien souligné ; un seul bouton principal par écran, zone tactile ≥ 44 px. Barre de progression en segments, un par partie. États de partie : validée, en cours (3 points de validation), compétence clé (pointillés, sauge), à venir (cadenas). Rayons : bouton 20, carte 18 à 22, pastille ronde. Marges 20 px.

## Nouveaux écrans (21)

**A · Premiers pas, du morceau choisi à la date d'arrivée**
1. Bienvenue : Tic salue, « Quel morceau rêves-tu de jouer ? »
2. Où tu en es : débute, reprend, décroche, prend des cours (les segments cibles).
3. Ton instrument : piano ou clavier, ou guitare ; interrupteur MIDI facultatif.
4. Faire connaissance : « je joue quelque chose » (2 min) ou « je réponds à 4 questions » (30 s), plus « je débute vraiment, on part de zéro ».
5. Joue-moi quelque chose : trois extraits connus de plus en plus durs (Au clair de la lune, Hymne à la joie, Menuet en sol), arrêt possible à tout moment ; onglet « mon morceau à moi » en écoute libre d'une minute.
6. Quelques questions : partition, deux mains, morceaux sus, dernière fois joué.
7. Ton point de départ : « tu sais déjà / on travaillera », et ce que ça change au plan (compétences sautées, tempo de départ, date). Réglage « source » dans Tweaks : extraits, questions, débutant.
8. Choisis ton morceau : catalogue libre (liste des 20), filtres, liste d'envies pour les morceaux absents (preuve de demande pour les éditeurs).
9. Ton rythme et ta date : durée par séance (5 à 20 min) et jours par semaine ; la date d'arrivée se recalcule en direct. C'est l'écran du différenciant.
10. Ton parcours : compétences placées juste avant les parties qui les exigent, refrain d'abord, date d'arrivée.
11. Ton rappel : une heure, un seul rappel, aperçu de la notification.

**B · Écouter, micro d'abord, MIDI en option**
1. Autoriser le micro : écran avant la demande système (son analysé sur le téléphone, écoute seulement pendant l'exercice, enregistrements gardés sur accord).
2. Calibration : silence de la pièce, une note, un accord (interactif).
3. Clavier MIDI : USB ou Bluetooth, test d'une touche.
4. Je t'entends mal : rapprocher le téléphone, refaire le réglage, passer en MIDI, ou jouer sans écoute en s'auto-évaluant. Répond au risque H6 (piano acoustique, pièce bruyante).

**C · Séance et progrès visibles**
1. Retour sur un essai : notes justes par mesure, validations 2/3, Tic bienveillant ou épaté (réglage « résultat » dans Tweaks).
2. Fin de séance : minutes, partie validée, série, avancée du morceau, écoute « jour 1 et aujourd'hui ».
3. Série gelée : jour manqué sans reproche, date décalée d'un jour, séance de 5 min pour dégeler.
4. Mes progrès : morceau en segments, tempo qui monte, chemin vers l'autonomie (notes guidées, partition, sans l'app).
5. Morceau terminé : Tic en fête, ta version enregistrée, jouer avec la partition, morceau suivant.
6. Essai sans piège : calendrier de l'essai, rappel à J5, gratuit et payant séparés, résiliation en un geste et 14 jours de rétractation. Prix laissé en [PRIX].

## Évaluer le niveau à l'onboarding : recommandation

Proposition d'aude : un formulaire de niveau, ou faire jouer son meilleur morceau et l'analyser. Les deux sont maquettés (A4 à A7). Recommandation : **garder les deux, mais avec un test sur extraits connus plutôt que sur le morceau libre, et ne jamais le rendre obligatoire.**

- **Débutants : pas de test.** C'est le segment prioritaire, ils n'ont rien à jouer ; leur demander de jouer à la 4e minute fait abandonner. Le profil « je débute » de l'écran A2 les envoie directement au point de départ zéro.
- **Questions par défaut pour les autres** : 30 secondes, rien d'intimidant, aucun risque technique. Limite : on se surestime ou se sous-estime ; on corrige donc pendant les 2 ou 3 premières séances (tempo et taille des parties s'ajustent tout seuls).
- **Jouer, en option pour ceux qui reprennent** : plus précis et plus convaincant (« il m'a vraiment écouté »). Mais il faut jouer sur des **extraits dont Tic connaît la partition** : on compare note à note, du plus facile au plus dur, et on s'arrête quand ça coince.
- **« Ton meilleur morceau » en écoute libre** n'apporte qu'une estimation grossière : sans partition de référence, l'analyse ne sait pas ce qui était voulu. Elle mesure la régularité, la densité, les deux mains, les accords, pas les fausses notes. Au micro, sur piano acoustique ou dans une pièce bruyante, la détection de plusieurs notes à la fois est la moins fiable (même verrou que H6). En MIDI, c'est fiable.
- **Risque d'abandon** : chaque écran de plus à l'onboarding coûte des utilisateurs avant même le premier son. D'où : test facultatif, 2 minutes maximum, bouton « trop dur, j'arrête là » toujours visible, et formulation « ce n'est pas un examen ».
- **À tester en entretien** (sans code) : montrer l'écran A4 et noter ce que chaque segment choisit, et si « joue-moi quelque chose » rassure ou intimide.

## Décidé

- Instruments à l'onboarding : piano ou clavier, et guitare seulement. Pas de ukulélé (22 oct. 2026), pas de choix « autre » (23 oct. 2026), décisions d'aude.

## À trancher

- Nunito en seconde police, ou Baloo 2 seule partout.
- Les durées et dates affichées sont illustratives (140 min de pratique supposées pour la Gymnopédie simplifiée).

# Tic : plan d'action Phase 1

Mis à jour le 22 octobre 2026 · aude

## Vue d'ensemble

Tous les livrables sont gelés le 18 décembre 2026, pour un entretien ESP début janvier 2027 (supposé la semaine du 4 janvier) : les vacances ne servent qu'à répéter. Le terrain dure trois semaines et demie, jusqu'au go / pivot du 15 novembre. Ensuite les deux fondateurs avancent en parallèle, l'un sur les dossiers (piste A), l'autre sur la promotion (piste B). La date exacte de l'entretien et celle du rendu restent à relever sur l'intranet.

Trois principes tirés du cahier des charges guident l'ordre des étapes :

- **Le terrain d'abord.** La note commence par les preuves. Rien n'est rédigé dans `framing.md` avant la fin des entretiens, et un point go / pivot ferme le terrain le 15 novembre.
- **Zéro code produit.** L'écoute par micro se juge en entretien, à partir de l'équipement réel des gens et de leur expérience des apps existantes, pas avec un prototype. La vitrine est une page de promotion.
- **Rien d'identifiant dans le dépôt public.** Fiches anonymes, consentements et coordonnées gardés hors du dépôt, y compris l'accord pour être recontacté par le jury.

Le cadrage intègre les corrections déjà validées : cible élargie aux débutants et aux gens qui reprennent ou cherchent de la motivation, durée de séance choisie par l'utilisateur, écoute par micro quel que soit l'instrument (MIDI en option), équipe recrutée uniquement dans les masters Epitech.

## Calendrier

| Étape | Qui | Dates |
| --- | --- | --- |
| Mise en place et premiers entretiens | Les deux | 22 oct. - 1er nov. |
| Terrain (15 à 20 entretiens) | Les deux | 26 oct. - 15 nov. |
| **Go / pivot** | Les deux | 15 nov. |
| Dossiers : cadrage et faisabilité | Piste A | 16 - 29 nov. |
| Promotion : identité, vitrine, fiche Innovation, teaser | Piste B | 16 nov. - 13 déc. |
| Équipe et pitch | Les deux | 30 nov. - 18 déc. |
| **Gel de tous les livrables** | | 18 déc. |
| Vacances : répétitions seulement | Les deux | 19 déc. - 3 janv. |
| **Entretien ESP (date à confirmer)** | | semaine du 4 janv. |

## Plan semaine par semaine

### Étape 1 : mise en place et premiers entretiens (S0-S1, 22 oct - 1er nov)

- [ ] Relever sur l'intranet la date exacte de l'entretien ESP et la date de rendu des livrables
- [ ] Répartir les deux pistes entre les fondateurs : piste A terrain et dossiers, piste B promotion et recrutement ; tous deux mènent des entretiens
- [ ] Créer le dépôt avec l'arborescence attendue (`docs/ideation/`, `docs/recruitment/`, `assets/`, `presentations/`) et un tableau de tâches partagé
- [ ] Mettre à jour les hypothèses : H5 devient « quelle durée de séance les gens choisissent », H6 devient « l'écoute par micro marche sur leur équipement réel »
- [ ] Adapter le guide Mom Test aux nouveaux segments (reprise, perte de motivation, tous instruments)
- [ ] Préparer le formulaire de consentement (dont l'accord pour être contacté par le jury), stocké hors dépôt
- [ ] Lancer le recrutement des interviewés : entourage, conservatoires et écoles de musique, groupes Facebook et Reddit de débutants, magasins d'instruments
- [ ] Mener les 3 à 4 premiers entretiens

### Étape 2 : terrain, les deux fondateurs (S2-S3, 2 - 15 nov)

Cible cumulée : 15 à 20 entretiens, soit 8 à 10 entretiens par fondateur, répartis sur 4 segments (débutants, reprise ou perte de motivation, profs, utilisateurs ou ex-utilisateurs d'apps).

- [ ] S2 : 6 entretiens ; contacter 2 ou 3 éditeurs ou agrégateurs de partitions pour sonder le coût d'une licence
- [ ] S3 : 6 entretiens ; synthèse par hypothèse ; point go / pivot le 15 novembre
- [ ] Dès le premier entretien, faire réagir chaque personne à la liste de 20 morceaux libres de droits (test de l'hypothèse la plus risquée)
- [ ] Dans chaque entretien, noter l'instrument, l'équipement (piano acoustique, clavier avec ou sans MIDI, guitare) et le lieu où la personne joue, ainsi que son expérience des apps qui écoutent par micro (test de H6)
- [ ] Une fiche anonyme par entretien dans `docs/ideation/field-evidence/`, écrite le jour même
- [ ] Vérifier la disponibilité du nom « Tic » (INPI, stores) avant l'export du logo

### Étape 3 : cadrage et faisabilité, piste A (S4-S5, 16 - 29 nov)

- [ ] S4 : `framing.md` sur une page : problème tracé vers les fiches, personas révisés selon le terrain, segment prioritaire, proposition de valeur, benchmark direct et indirect
- [ ] S5 : `feasibility.md` : technique (fiabilité du micro selon les équipements relevés en entretien, MIDI en option, sources de partitions), juridique (RGPD, audio traité sur l'appareil, droit d'auteur, résiliation en ligne), économique (budget de 20 740 € à relier aux revenus)
- [ ] S5 : conclure `feasibility.md` sur l'hypothèse la plus risquée, avec le résultat chiffré du test des 20 morceaux libres
- [ ] Corriger les chiffres non sourcés (le « 90 % en 60 jours »)

### Étape 4 : rendre Tic désirable, piste B (S4-S7, 16 nov - 13 déc)

- [ ] S4 : finaliser l'identité et exporter `assets/branding/logo.png` et `banner.png` depuis les maquettes
- [ ] S5 : storyboard et script minuté du teaser, avec une vraie citation d'entretien ; textes de la vitrine en 6 sections
- [ ] S6 : mettre la vitrine en ligne sur GitHub Pages et inscrire Tic sur innovation.epitech.eu (description, tags, logo, bannière, lien vitrine)
- [ ] S6-S7 : tourner et monter le teaser (2 min et 300 Mo maximum, musique libre de droits)

### Étape 5 : équipe et pitch, les deux fondateurs (S6-S8, 30 nov - 18 déc)

- [ ] S6 : 5 fiches de poste dans `docs/recruitment/job-descriptions/` : développement mobile, traitement audio et IA, back-end et données, UI/UX, DevOps ; chacune sépare prérequis obligatoires et compétences acquérables, et cite le besoin de `feasibility.md` qui la justifie
- [ ] S7 : première version de `presentations/pitch-t7.pdf` et de la présentation « Free Agent » de chaque fondateur
- [ ] S8 : deux répétitions chronométrées, dont une devant un public extérieur ; liste de questions du jury avec réponses
- [ ] 18 décembre : gel de tous les livrables et dernière vérification qu'aucune donnée identifiante ne figure dans le dépôt

### Vacances (19 déc - 3 jan) : répétitions seulement

- [ ] Une répétition finale et relecture des réponses aux questions, sans nouveau livrable
- [ ] Évaluation par les pairs sur la plateforme, si elle tombe à ce moment

### Entretien ESP (début janvier)

- [ ] 30 minutes : 20 de présentation, 10 de questions

## Livrables et critères de réussite

| Livrable | Emplacement | Piste | Semaine | Fini quand |
| --- | --- | --- | --- | --- |
| Preuves terrain | `docs/ideation/field-evidence/` | A et B | S3 | 15 à 20 entretiens, chacun avec date, segment, hypothèse, observation |
| Dossier de cadrage | `docs/ideation/framing.md` | A | S4 | Une page ; chaque affirmation renvoie à une fiche terrain |
| Identité visuelle | `assets/branding/` | B | S4 | `logo.png` et `banner.png` exportés, nom Tic vérifié |
| Faisabilité | `docs/ideation/feasibility.md` | A | S5 | Trois axes cohérents, conclusion chiffrée sur l'hypothèse la plus risquée |
| Vitrine | GitHub Pages | B | S6 | En ligne, sans prototype, avec les profils recherchés |
| Fiche Innovation | innovation.epitech.eu | B | S6 | Description, tags, logo, bannière et lien vitrine remplis |
| Fiches de poste | `docs/recruitment/job-descriptions/` | A et B | S6 | 5 fiches, prérequis et compétences acquérables séparés |
| Teaser | `assets/teaser.mp4` ou lien | B | S7 | 2 min et 300 Mo maximum, friction et vision montrées |
| Support de soutenance | `presentations/pitch-t7.pdf` | A et B | S8 | 20 min de présentation tenues en répétition, 10 min de questions préparées |
| Suivi du binôme | Dépôt et outil de tâches | A et B | Continu | Commits réguliers des deux fondateurs, tâches assignées |

## Points de décision et risques

**Go / pivot (15 novembre).** Si H2 (l'envie naît d'un morceau précis) ou H3 (ces morceaux sont protégés) est infirmée par la majorité des entretiens, le positionnement « ton morceau » est revu avant d'écrire `framing.md`. Si la plupart des personnes jouent là où le micro risque d'échouer (piano acoustique, pièce bruyante) ou en ont eu une mauvaise expérience, le MIDI redevient le mode principal et la cible se resserre sur les gens équipés.

**Catalogue libre de droits (S5).** Sur les réactions à la liste de 20 morceaux libres :

- Plus de 50 % d'intéressés : le plan tient tel quel.
- Entre un tiers et la moitié : le plan de licences devient une condition de réussite, présentée comme telle.
- Moins d'un tiers : repositionner (niche domaine public, compositions originales) ou chercher un partenariat éditeur avant la soutenance.

| Risque | Signe d'alerte | Parade |
| --- | --- | --- |
| Pas assez d'entretiens | Moins de 8 entretiens fin S2 | Relancer les canaux, ajouter magasins et écoles de musique, entretiens en visio de 20 min |
| Questions qui orientent les réponses | On parle de Tic avant la fin de l'entretien | S'en tenir au guide Mom Test, relire une fiche sur deux à deux |
| Une piste prend du retard | Plus d'une semaine de décalage sur le tableau de tâches | Point hebdomadaire à deux ; l'autre fondateur reprend une tâche |
| Éditeurs muets | Aucune réponse fin S3 | Présenter le coût des licences comme inconnu, avec la fourchette et le plan pour l'obtenir |
| Nom Tic déjà pris | Marque ou app existante au même nom | Basculer sur une piste de logo déjà explorée (Refrain, Bis, Encore) avant l'export S4 |
| Glissement de décembre | Teaser pas monté au 13 décembre | S8 sert de tampon ; le gel du 18 décembre ne bouge pas |

## Cette semaine (22 - 25 oct)

- [ ] Relever sur l'intranet la date exacte de l'entretien ESP et la date de rendu, puis recaler ce plan si besoin
- [ ] Décider qui porte la piste A et la piste B, et l'écrire dans le tableau de tâches
- [ ] Lister 25 personnes à contacter (5 par segment, plus une marge) et envoyer les premières demandes
- [ ] Réviser le guide d'entretien et le formulaire de consentement

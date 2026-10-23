# Tic : contexte du projet

Projet de fin d'études. Dernière mise à jour : 22 octobre 2026.

## 1. Concept

Tic est une app mobile d'apprentissage d'instruments construite autour d'un objectif personnel : l'utilisateur choisit un morceau qu'il veut savoir jouer, et l'app le découpe en parties qu'il apprend jour après jour, à travers des sessions courtes et gamifiées.

- Positionnement : « l'app qui t'emmène jusqu'au morceau que tu veux jouer », pas un « Duolingo de la musique » générique (Duolingo Music existe déjà et est gratuit).
- Le morceau est l'objectif, les exercices sont le chemin.
- Lancement sur un seul instrument : piano/clavier en MIDI (détection fiable), micro en secours. Guitare en V2.
- Promesse d'autonomie : passage progressif des notes guidées à la vraie partition et à la tablature.

## 2. Analyse du marché

- Marché de l'éducation musicale en ligne : environ 3,5 Md$ en 2026, croissance d'environ 16 %/an jusqu'en 2034 (OG Analysis).
- Concurrents :
  - Yousician : multi-instruments gamifié, 20 M d'utilisateurs mensuels avec GuitarTuna.
  - Simply Piano / Guitar : débutants, gains rapides, 50 M d'installations ; abonnements agressifs, contenu qui plafonne.
  - Duolingo Music : gratuit, théorie sur clavier à l'écran, piano physique avec Loog (249 $), partenariat Sony pour des morceaux pop.
  - Fender Play : guitare en vidéo 4K, 19,99 $/mois ou 149,99 $/an.
  - Skoove : lecture de partition dès la première leçon, catalogue réduit.
  - Moises : détection d'accords par IA sur n'importe quel morceau, pas de parcours pédagogique.
- Ce qui marche : gains rapides, retour en temps réel, morceaux connus, outil gratuit comme porte d'entrée (accordeur), complément aux professeurs, packs matériel.
- Ce qui échoue : 9 personnes sur 10 abandonnent un instrument dans les 60 jours ; reconnaissance audio décevante ; abonnements perçus comme des pièges ; plafond de contenu ; dépendance à l'app.

## 3. Fonctionnement de l'app

- L'utilisateur choisit un morceau cible ; l'app le découpe en parties (on commence par la plus connue, le refrain).
- Date de fin estimée et barre de progression du morceau.
- Session du jour d'environ 6 minutes, en 4 étapes :
  1. Échauffement sur la compétence clé de la partie (1 min).
  2. Nouvelle partie, tempo réduit, mains séparées d'abord (3 min).
  3. Révision espacée d'une partie déjà vue (1 min).
  4. Enchaînement de plusieurs parties, pour travailler les transitions (1 min).
- Rythme adaptatif : une partie est validée après 3 essais à 80 % de justesse. Si un passage résiste, l'app ralentit le tempo et découpe plus fin, sans casser la série.
- Séries de jours avec « gel » (un jour raté gèle la série au lieu de la perdre).
- Fin de morceau : enregistrement et partage de sa version, puis suggestion du morceau suivant.
- Deux modes de pratique :
  - Lecture de partition / tablature (vers l'autonomie).
  - Mode jeu « notes qui défilent » : au piano, notes qui descendent vers le clavier (main droite orange, main gauche jaune, numéros de doigts) ; à la guitare, tablature qui défile de droite à gauche sur 6 cordes avec accords nommés et diagramme de l'accord en cours.

## 4. Droits musicaux et catalogue

- Ce qui est protégé : la composition (mélodie, paroles, arrangement, gérée par les éditeurs) et l'enregistrement original (master, géré par les labels). Une suite d'accords seule n'est en général pas protégée.
- Astuce : réenregistrer soi-même les accompagnements pour n'avoir à négocier que les droits d'édition.
- Stratégie retenue :
  1. MVP sur le domaine public (classique, traditionnel), des compositions originales et des morceaux Creative Commons autorisant les œuvres dérivées (CC BY, CC BY-SA ; pas les licences « ND »).
  2. Partenariats avec des artistes et labels indépendants.
  3. Licences ciblées une fois la traction prouvée : agrégateurs de partitions (type Hal Leonard, Musicnotes) ou éditeurs indépendants, en partage de revenus plutôt qu'en paiement d'avance.
  4. Licencier peu mais les bons : les 30 à 50 morceaux les plus demandés.
- Avis juridique à prévoir (avocat en propriété intellectuelle) avant toute transcription IA de morceaux protégés.

## 5. Spotify, YouTube et IA

- L'IA sait détecter accords, mélodie (surtout sur de la pop simple), structure et tempo. Transformer une transcription en cours pédagogique demande encore une relecture humaine sur les morceaux phares.
- Spotify ne permet pas d'utiliser l'audio : pas d'accès au fichier, interdiction d'injecter le contenu dans un modèle d'IA, et fonctions d'analyse audio fermées aux nouvelles apps depuis le 27 novembre 2024.
- YouTube interdit aussi le téléchargement et l'extraction de l'audio. Changer de plateforme ne règle pas la question du droit d'auteur.
- Flux retenu :
  - Connexion Spotify pour choisir des morceaux et mesurer la demande (métadonnées uniquement).
  - Écoute de l'original via Spotify en accompagnement, si les conditions le permettent.
  - Catalogue maîtrisé (libre, CC, licencié) pour les cours.
  - Transcription IA uniquement sur import d'un fichier personnel, résultat privé (modèle Moises), sous réserve de validation juridique.

## 6. Vote mensuel de la communauté

- Vote uniquement sur une présélection de 5 à 8 morceaux dont la licence est faisable.
- Boîte à idées ouverte en permanence, sans promesse.
- Plusieurs catégories (par genre ou par niveau) pour éviter que la majorité gagne toujours.
- Version simplifiée du morceau gagnant pour les débutants.
- Rythme tenable : vote trimestriel au départ, ou vote pour un morceau qui sort deux mois plus tard.
- Combiner avec les données passives (recherches, demandes Spotify) pour la présélection.
- Récompenser la participation (accès anticipé, badge), sans donner plus de voix aux abonnés payants.
- Les artistes indépendants peuvent proposer leur morceau au vote.

## 7. Identité : Tic, le métronome

- Nom de travail : Tic. Mascotte : un métronome souriant dont le balancier exprime l'humeur.
- Palette : crème #FFF3E0 (fond), vert forêt #1F4D3A, orange #FF8A5B (et #E5683A pour le socle), jaune #FFD23F en accent. Zone de jeu des écrans « notes qui défilent » en aubergine nuit #2A2140.
- Typographie : Baloo 2 (arrondie).
- Logotype : le « i » de « tic » est remplacé par le balancier. Signature de travail : « Ton morceau, un jour après l'autre ».
- Principe : Tic ne culpabilise jamais (contrairement au reproche fait à la chouette de Duolingo).
- Les 11 humeurs :
  - Content : session terminée (« Joli ! On se revoit demain ? »).
  - Concentré : pendant un exercice (« Je compte avec toi : 1, 2, 3… »).
  - À l'écoute : l'app écoute le jeu (« Vas-y, je t'écoute. »).
  - Bienveillant : après un essai raté (« Pas grave. On ralentit un peu ? »).
  - Épaté : validé du premier coup (« Du premier coup ?! »).
  - Curieux : vote du mois (« On apprend quoi ce mois-ci ? »).
  - Endormi : rappel du jour (« Psst… ton refrain t'attend. »).
  - Frigorifié : jour raté, série gelée (« Ta série est gelée, pas perdue. »).
  - Fier : 7 jours d'affilée (« Une semaine sans rater ! »).
  - En fête : morceau joué en entier (« Tu l'as joué en entier ! »).
  - En feu : série de 3 jours et plus, la flamme grandit aux paliers 3, 7 et 30 jours (« 12 jours ! Rien ne m'arrête ! »).
- Autres pistes de logo explorées : refrain, mesure, encore, cap, bouchée, gammes, bis.

## 8. Maquettes

Canvas de maquettes : [identite/maquette-app-morceau-du-jour/](../identite/maquette-app-morceau-du-jour/)

- Écrans portrait (390 × 844) : accueil Tic, mon morceau, session du jour, pratique (partition).
- Écrans paysage (844 × 390) : jeu piano et jeu guitare.
- Planches : pistes de logo, logotype, icônes d'app, expressions et 11 humeurs de Tic.
- Exemples de morceaux utilisés (domaine public) : Gymnopédie n°1 (Satie), Greensleeves (traditionnel).

## 9. Budget prévisionnel (hors droits d'auteur et main d'œuvre)

Détail dans le fichier Budget_Tic.xlsx. Hypothèses : phase 1 MVP de 6 mois, phase 2 lancement de 12 mois, 1 $ = 0,86 €, 10 % d'imprévus, équipe déjà équipée en ordinateurs (dont un Mac).

| Poste | MVP (6 mois) | Lancement (12 mois) | Total |
| --- | --- | --- | --- |
| Juridique & administratif | 2 640 € | 1 320 € | 3 960 € |
| Stores & comptes | 206 € | 268 € | 474 € |
| Matériel de test | 940 € | 200 € | 1 140 € |
| Technique & hébergement | 588 € | 4 622 € | 5 210 € |
| Contenu (hors droits) | 300 € | 500 € | 800 € |
| Tests utilisateurs | 300 € | 200 € | 500 € |
| Marketing & acquisition | 390 € | 6 380 € | 6 770 € |
| Imprévus (10 %) | 536 € | 1 349 € | 1 885 € |
| **Total** | **5 900 €** | **14 840 €** | **20 740 €** |

Tarifs vérifiés : INPI 190 € pour une classe + 40 € par classe supplémentaire ; Apple Developer 99 $/an ; Google Play 25 $ une fois ; Supabase gratuit puis 25 $/mois ; RevenueCat gratuit jusqu'à 2 500 $ de revenus mensuels suivis, puis 1 %.

## 10. Modèle économique

- Freemium honnête : exercices gratuits ; morceaux, import et retour avancé payants.
- Essai sans piège : rappel avant prélèvement, résiliation en un clic.
- Acquisition : outil gratuit (accordeur ou détecteur d'accords), contenu TikTok/Reels « apprends ce morceau en 7 jours », canal professeurs (tableau de bord élèves).

## 11. MVP et indicateurs

- Périmètre : clavier MIDI, 20 à 30 morceaux libres de droits, environ 50 micro-compétences, parcours morceau cible, séries, enregistrement et partage.
- Indicateur nord : part des utilisateurs qui jouent leur premier morceau complet.
- Rétention suivie à J7, J30 et J60 (à comparer aux 90 % d'abandon à 60 jours).

## 12. Pistes encore ouvertes

- Écran de fin de morceau avec Tic en fête.
- Animation du balancier de Tic.
- Prévisions de revenus et point mort.
- Récupérer le cahier des charges de la phase 1 (PDF de l'école) pour aligner le dossier sur ses attendus.
- Vérifier la disponibilité du nom « Tic » (INPI, stores).

# Résumé – « Dossier Phase 1 – Ideation : l'app du morceau cible » (15 oct. 2026)

Source : [dossier-phase1-ideation-tic.pdf](dossier-phase1-ideation-tic.pdf) (26 pages, rédigé pour aude). Il reprend un à un les attendus du [cahier des charges Epitech](cahier-des-charges-epitech-ideation-v4.0.1.md) et évalue leur couverture. Rédigé avant que l'app ne s'appelle « Tic » (pistes de nom citées : Refrain, Ma Chanson, Pas à Pas).

## Diagnostic de couverture
- **Couvert** : proposition de valeur. **Partiel** : problème, benchmark, les trois axes de faisabilité, soutenance. **Manquant** : preuves terrain (le plus urgent, la note commence par elles), personas, teaser, identité visuelle, fiche Innovation, vitrine, fiches de poste, binôme fondateur.
- Choix technique ferme et périmètre MVP détaillé relèvent de la Phase 2 : présentés comme options, pas engagements.

## Preuves terrain (protocole proposé)
- Hypothèses H1–H9 : H1 abandon faute d'objectif/progrès visible ; **H2** l'envie naît d'un morceau précis ; **H3** ces morceaux sont surtout protégés ; H4 dépendance à l'écran des apps ; H5 séance de ~6 min/jour réaliste ; **H6** clavier numérique MIDI possédé ; H7 abonnements vécus comme pièges ; H8 intérêt des profs pour un suivi ; H9 intérêt pour un vote mensuel. H2, H3, H6 à tester en premier.
- Cible : 15–20 entretiens + 5 observations (adultes débutants/en reprise au piano, (ex-)utilisateurs d'apps, profs, parents si mineurs). Guide Mom Test en 8 questions, modèle de fiche par entretien.
- Règle de pivot : si H2 ou H3 est infirmée en majorité, revoir le positionnement « LA chanson ».

## Cadrage
- **Problème** : les débutants qui veulent jouer un morceau précis abandonnent avant ; les outils séparent apprentissage générique et objectif personnel. Chiffres : Fender, 90 % des nouveaux guitaristes abandonnent dans l'année (2019, interview) ; rétention J30 des apps éducatives ~2 %. Le « 90 % en 60 jours » n'est pas sourcé : à corriger.
- **Personas** : adulte débutant motivé par un morceau (25-40 ans, clavier numérique) = **segment prioritaire** ; adulte en reprise ; prof de piano (prescripteur secondaire). Mineurs exclus au lancement.
- **Proposition de valeur** : l'utilisateur choisit son morceau, l'app le découpe en parties ; séance quotidienne de ~6 min en 4 temps (échauffement, nouvelle partie à tempo réduit mains séparées, révision espacée, enchaînement). Partie validée après 3 essais à 80 %. Début par le refrain, date de fin estimée, enregistrement final, passage des notes guidées à la partition puis mode « sans l'app ».
- **Vote mensuel** : 8–10 candidats publiables (domaine public, licence libre ou déjà licenciés), 1–2 gagnants produits le mois suivant, rejoignent l'offre payante ; liste de souhaits séparée pour morceaux protégés (preuve de demande face aux éditeurs).
- **Indicateur principal** : part des utilisateurs qui jouent leur premier morceau complet ; + rétention J7/J30/J60, part capable de jouer « sans l'app ».
- **Marché** : 2,6 à 3,5 Md$ en 2026, ~16-17 %/an (présenter la fourchette).
- **Benchmark** : Simply Piano, Flowkey, Skoove, Yousician, Duolingo Music (directs) ; Fender Play, Moises, tutoriels vidéo, prof particulier, partitions papier (indirects). Espace libre : « le morceau choisi devient le cursus ».

## Faisabilité
- **Technique** : faisable si captation en MIDI. Verrous : détection par micro (bien moins fiable hors studio) et surtout production du contenu pédagogique. Sources de partitions : Mutopia, IMSLP. Options laissées à la Phase 2 (natif/multiplateforme, device/serveur, format).
- **Juridique** : RGPD maîtrisable (minimisation, audio traité sur l'appareil, consentement pour enregistrements et traceurs) ; pas de donnée biométrique ; mineurs < 15 ans = consentement parental, d'où cible adulte. AI Act a priori risque minimal. Résiliation en ligne obligatoire depuis 2023 (amende jusqu'à 75 k€), droit de rétractation 14 j. **Droit d'auteur = risque dominant** : morceaux protégés exigent une licence d'éditeur ; CC BY-SA impose la même licence aux dérivés (préférer CC BY / domaine public).
- **Économique** : coût décisif = contenu (300–600 € par parcours, 7,5–15 k€ pour 25 morceaux) + licences (inconnu, sonder 2–3 éditeurs). Commission stores 15 %, comptes dev ~100 €/an, infra quelques centaines €/mois à 10 k actifs, juridique 3–8 k€, matériel de test 1–2 k€, vote mensuel 3,6–14 k€/an. Freemium ; scénario : 50 000 inscrits × 3 % × 70 €/an ≈ 89 k€ net/an. Revenus annexes : offre profs, partenariats fabricants de claviers, packs sous licence.
- **Hypothèse la plus risquée** : des débutants motivés par un morceau précis commenceront et resteront avec un **catalogue libre de droits** en attendant les licences. Test : présenter 20 morceaux libres en entretien. Seuils : > 50 % acceptent → plan tient ; < 1/3 → repositionner (niche domaine public) ou partenariat éditeur ; entre les deux → plan de licence présenté comme condition de réussite.

## Promotion, soutenance, recrutement, gouvernance
- Teaser 2 min minuté (friction → chiffre → maquette 3 écrans → joue sans écran → profils recherchés), musique libre de droits. Brief visuel : chaleureux, loin des codes « jeu vidéo ». Description et tags proposés pour innovation.epitech.eu ; plan de vitrine en 6 sections.
- Soutenance : 20 min de présentation + 10 min de questions (à confirmer), déroulé minuté ; questions à anticiper (nb d'entretiens, gratuité des tutos, refus des éditeurs, pourquoi le piano).
- Recrutement de 5 partenaires : 2 dev mobile, 1 ingé audio/MIDI, 1 back-end/données, 1 designer UI/UX ; pédagogie musicale à couvrir (fondateur ou 6e recrue / prof partenaire). Rôle produit = fondateur WPL.
- Binôme non mentionné dans les éléments d'aude : à préciser. Organisation : outil de suivi partagé, répartition par livrable, commits des deux, point hebdo.
- Checklist de rendu et arborescence du dépôt reprises du cahier des charges. À vérifier sur Légifrance : art. L122-4 CPI et rétractation des contenus numériques.

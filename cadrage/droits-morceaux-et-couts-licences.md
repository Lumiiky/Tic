# Tic : droits des morceaux et coût des licences

Note de travail pour l'axe juridique et l'axe économique de `feasibility.md`. Rédigée le 22 octobre 2026.

> **Ce n'est pas un avis juridique.** Cette note résume le droit et les pratiques du secteur pour préparer la Phase 1. Elle ne remplace pas un avocat en propriété intellectuelle, à consulter avant toute signature de licence ou toute fonction qui touche à des morceaux protégés (en particulier la transcription par IA). Les montants de la partie 4 sont des **estimations**, construites à partir de repères publics et d'hypothèses écrites noir sur blanc. Aucun éditeur n'a encore été sondé.

## 1. L'essentiel en six phrases

1. Un morceau populaire porte en réalité **deux œuvres** : la composition (musique et paroles, gérée par les auteurs et leurs éditeurs) et l'enregistrement (le « master », géré par le label, avec les droits voisins des interprètes).
2. Afficher les notes d'un morceau protégé, sous forme de partition, de tablature ou de notes qui tombent, c'est **reproduire et arranger** la composition : il faut l'accord de l'éditeur, et en France ce droit (dit « graphique » ou *print rights*) **ne passe pas par la Sacem**, il se négocie directement avec chaque éditeur.
3. Faire entendre un accompagnement ajoute un second droit (reproduction mécanique et communication au public, gérés par la Sacem et ses homologues), et utiliser l'enregistrement original en ajoute un troisième (le label), le plus cher.
4. Tic peut donc réduire la facture en **réenregistrant ses propres accompagnements** et en ne négociant que la composition.
5. Tous les concurrents qui proposent de la pop paient des licences, pays par pays, et retirent des morceaux quand elles expirent : c'est le modèle normal du secteur, pas une exception.
6. Ordre de grandeur estimé : **10 000 à 50 000 € par an pour 20 titres** en forfait, ou **10 à 20 % du chiffre d'affaires** en partage de revenus ; le partage de revenus est le seul modèle compatible avec le budget de Phase 2 tant que Tic n'a pas d'utilisateurs payants.

## 2. Quels droits sont en jeu, fonction par fonction

### 2.1 Ce qui est protégé, et combien de temps

- **France et Union européenne** : la composition est protégée pendant la vie de l'auteur et **70 ans après sa mort** (art. L123-1 du Code de la propriété intellectuelle), à compter du 1er janvier suivant le décès. Pour une œuvre à plusieurs auteurs, on compte à partir du décès du dernier. Des prolongations existent pour les auteurs « morts pour la France » (+30 ans, art. L123-10), et les prorogations de guerre ont un régime complexe : à vérifier au cas par cas.
- **Exemple qui montre le risque** : le *Boléro* de Ravel est dans le domaine public en France depuis le 1er mai 2016. Les héritiers ont tenté de faire reconnaître un co-auteur mort en 1960, ce qui aurait prolongé la protection jusqu'en 2039. Le tribunal de Nanterre a rejeté la demande le 28 juin 2024. Leçon : vérifier tous les auteurs d'une œuvre, pas seulement le nom connu.
- **États-Unis** : règle différente pour les œuvres publiées avant 1978 : 95 ans après la publication. Au 1er janvier 2026, les œuvres publiées en 1930 y sont entrées dans le domaine public. Un morceau peut donc être libre aux États-Unis et protégé en France, ou l'inverse : **le domaine public se vérifie pays par pays**.
- **Les enregistrements** ont leur propre durée (70 ans après la publication dans l'UE). Un *Clair de lune* de Debussy est libre, mais un enregistrement récent de ce morceau ne l'est pas.
- **Les arrangements** sont des œuvres à part entière s'ils sont originaux (art. L112-3 CPI). Un arrangement moderne d'une œuvre du domaine public peut donc être protégé. Pour Tic : partir d'une partition ancienne (IMSLP, Mutopia, en vérifiant la licence de chaque fichier) ou faire ses propres arrangements.
- **Ce qui n'est en général pas protégé** : une suite d'accords seule, un tempo, une structure, un style. Mais dès qu'on reprend la mélodie ou un riff reconnaissable, on est dans l'œuvre.

### 2.2 Tableau des fonctions de Tic

| Fonction de Tic | Droits touchés | Qui autorise | Remarque |
| --- | --- | --- | --- |
| Afficher la partition, la tablature ou les notes qui tombent d'un morceau protégé | Reproduction (L122-3) et adaptation/arrangement (L122-4) de la composition | **Éditeur(s)** du morceau, directement ou via un agrégateur (Hal Leonard, Musicnotes…) | Pas de guichet collectif en France pour cet usage ; un morceau a souvent plusieurs éditeurs, il faut tous les accords |
| Version simplifiée pour débutants, découpée en parties | Arrangement + **droit moral** de l'auteur (respect de l'intégrité de l'œuvre, L121-1) | Éditeur, parfois avec validation de l'auteur | Prévoir dans le contrat que les versions simplifiées sont permises |
| Afficher les paroles | Reproduction des paroles | Éditeur, ou fournisseurs de paroles sous licence (LyricFind, Musixmatch) | Souvent un contrat à part |
| Accompagnement audio **réenregistré** par Tic | Reproduction mécanique + communication au public de la composition | **Sacem/SDRM** en France ; licences multiterritoriales possibles dans l'UE (directive 2014/26/UE) | Pas besoin du label : c'est l'astuce du « réenregistrer soi-même » |
| Accompagnement avec **l'enregistrement original** | Les droits ci-dessus + master du label + droits voisins des interprètes | Label (Sony, Universal, Warner…) et Sacem | De loin le plus cher ; à éviter au lancement |
| Vidéo de mains, images synchronisées avec la musique | Droit de **synchronisation** | Éditeur (et label si master) | Négocié avec le reste dans un contrat « app éducative » |
| Choisir un morceau via Spotify (métadonnées) | Conditions d'utilisation de Spotify | Spotify | Pas de droit d'auteur en jeu tant qu'on n'utilise pas l'audio |
| Transcription IA d'un fichier importé par l'utilisateur, résultat privé | Reproduction et arrangement ; l'exception de copie privée (L122-5) est **discutable** pour un service commercial | Zone grise | Avis d'avocat obligatoire avant d'en parler comme d'une fonction |
| L'utilisateur partage son enregistrement sur les réseaux | Communication au public de la composition | Couvert par les accords des plateformes (YouTube, Instagram, TikTok ont des accords Sacem) | Si le partage reste **hors** de Tic, Tic n'a rien à licencier |

### 2.3 Les acteurs à connaître

- **Éditeurs** : ils détiennent le droit de reproduire et d'arranger la composition. Les trois grands (Sony Music Publishing, Universal Music Publishing, Warner Chappell) contrôlent une large part des tubes ; il existe aussi de nombreux éditeurs indépendants, et des éditeurs spécialisés dans la partition papier (en France, par exemple Bookmakers International pour la variété, à vérifier).
- **Agrégateurs de partitions** : Hal Leonard (racheté par Muse Group, la maison mère de MuseScore et Ultimate Guitar, fin 2023) et Musicnotes ont déjà signé avec des milliers d'éditeurs. Musicnotes revendique plus de 300 000 arrangements et 100 millions de dollars reversés aux éditeurs et auteurs (2020). Ils sont le « guichet unique » le plus réaliste pour une petite équipe.
- **Sacem / SDRM** : gère les droits d'exécution et de reproduction mécanique (l'audio), **pas** les droits d'affichage de partition.
- **SEAM** (Société des éditeurs et auteurs de musique) : gère la **photocopie** de partitions, certains usages numériques pour l'enseignement scolaire et une base de paroles. Elle ne délivre pas de licence pour une app commerciale ; elle est surtout un bon point de contact pour identifier les éditeurs d'un titre.
- **À l'étranger** : GEMA (Allemagne), PRS/MCPS (Royaume-Uni), SABAM (Belgique) pour l'audio ; aux États-Unis, la Harry Fox Agency pour les droits mécaniques, et un tarif fixé par l'État pour le streaming : la part revenant aux auteurs et éditeurs est de 15,3 % du chiffre d'affaires en 2026 et 15,35 % en 2027 (Copyright Royalty Board, « Phonorecords IV »).

### 2.4 Ce qui change d'un pays à l'autre

- **Les licences sont territoriales.** Un éditeur peut autoriser un morceau en France et pas en Allemagne, ou un même titre peut avoir un éditeur différent par pays (sous-édition). C'est pourquoi Flowkey et Yousician retirent des morceaux pays par pays.
- **Le domaine public n'a pas la même date partout** (voir 2.1).
- **Les exceptions ne protègent pas Tic.** L'exception pédagogique française et le *fair use* américain ne couvrent pas une app commerciale par abonnement.
- **Conséquence pour Tic** : demander dès le départ des licences « France + UE », ou au moins France, Belgique, Suisse, Canada pour le francophone, et prévoir dans l'app le cas d'un morceau indisponible dans un pays.

## 3. Comment font les concurrents

| Concurrent | Ce qu'on sait de son modèle de droits | Source |
| --- | --- | --- |
| **Flowkey** | Obtient ses droits auprès des éditeurs et des sociétés de gestion « dans le monde entier » ; des morceaux sont retirés quand les licences expirent ou ne sont pas renouvelées, ou quand les ayants droit changent, différemment selon les pays. Les morceaux classiques et libres restent toujours disponibles. | [Aide Flowkey](https://help.flowkey.com/en/articles/8975623-why-are-some-songs-no-longer-available-on-flowkey) |
| **Yousician** | « Morceaux populaires » sous licence depuis août 2018 ; tout le contenu créé par les utilisateurs a été retiré en octobre 2018 ; accords d'artistes (Metallica, Billie Eilish). | [Wikipédia](https://en.wikipedia.org/wiki/Yousician), benchmark |
| **Duolingo Music** | Partenariat avec Sony Music (août 2024) : plus de 60 morceaux de plus de 40 artistes. Conditions financières non publiées. | [Communiqué Duolingo](https://investors.duolingo.com/news-releases/news-release-details/duolingo-partners-sony-music-add-hit-recordings-major-artists) |
| **Musora** (Pianote, Guitareo…) | Passe par Hal Leonard ; les morceaux sont un **supplément payant** à l'abonnement, et l'accès à vie est refusé « à cause des frais de licence ». | [Aide Musora](https://help.musora.com/article/1238-why-is-there-an-extra-cost-for-musora-songs) |
| **Ultimate Guitar** | Après la fermeture forcée de sites de tablatures en 2005-2006 (OLGA, sous la pression des éditeurs), a signé avec des milliers d'éditeurs (Sony, EMI, Hal Leonard, Alfred…) et avec la Harry Fox Agency en 2010. | [Wikipédia](https://en.wikipedia.org/wiki/Ultimate_Guitar), [The Register, 2006](https://www.theregister.com/2006/08/29/guitar_sites_under_fire) |
| **Musicnotes / ArrangeMe** | Vente de partitions à l'unité. Un arrangeur qui publie un arrangement d'un morceau protégé ne touche que **10 %** (12 % en Pro), contre 50 % pour une œuvre libre : le reste va surtout à l'éditeur et à la plateforme. | [ArrangeMe](https://help.arrangeme.com/hc/en-us/articles/1500004760122-What-is-the-commission-rate) |
| **Hal Leonard Connect** | Nouveau programme (août 2026) : un revendeur peut proposer le catalogue Hal Leonard de partitions numériques sous licence, avec intégration par API ; Hal Leonard gère licences, protection et reversements. Conditions non publiées. | [Muse Group](https://www.mu.se/posts/hal-leonard-connect) |

**Ce qu'il faut en retenir pour Tic.** Aucun concurrent ne contourne les licences : ceux qui ont essayé (sites de tablatures des années 2000, contenu utilisateur chez Yousician) ont dû s'aligner. Les acteurs récents passent de plus en plus par un **agrégateur** (Musora avec Hal Leonard) plutôt que par chaque éditeur. Le modèle Musora (morceaux protégés en supplément) et le programme Hal Leonard Connect (revente à l'unité) ouvrent une piste concrète pour Tic : **vendre les morceaux protégés à part, à l'unité ou en pack**, ce qui transforme le coût de licence en coût variable.

## 4. Estimations du coût des licences

### 4.1 Ce qu'on sait, et ce qu'on ne sait pas

Les contrats entre apps et éditeurs ne sont jamais publiés. Les montants ci-dessous partent de repères publics voisins, puis d'hypothèses. **Le seul moyen de les confirmer est de sonder 2 ou 3 éditeurs ou agrégateurs**, comme le prévoit le plan en S2.

Repères publics utilisés :

| Repère | Valeur | Source |
| --- | --- | --- |
| Part de l'auteur sur une partition vendue à l'unité | ~20 % du prix public (10-12 % pour un recueil) | [Trolley](https://trolley.com/learning-center/understanding-print-music-royalties-a-guide-for-music-business-professionals/) |
| Partage type d'une partition papier | ~50 % éditeur, ~40 % détaillant, 2-10 % compositeur | [Compose Create](https://composecreate.com/who-makes-what-in-music-publishing/) |
| Arrangement d'un morceau protégé publié en ligne | L'arrangeur touche 10 %, le reste va aux ayants droit et à la plateforme | [ArrangeMe](https://help.arrangeme.com/hc/en-us/articles/1500004760122-What-is-the-commission-rate) |
| Licence d'arrangement sur mesure (ensemble, nombre de copies limité, États-Unis) | 330 à 340 $ par arrangement en 2023 (contre 270-290 $ avant) | [Productions Magazine](https://www.productionsmag.com/article/the-ins-and-outs-of-custom-arrangements/) |
| Diffusion en ligne non commerciale d'un morceau (éditeur de musique sacrée) | 25 $ par morceau et par semestre, 125 $ à perpétuité | [GIA](https://giamusic.com/copyright-policy) |
| Part des auteurs et éditeurs dans le streaming audio (États-Unis) | 15,3 % du chiffre d'affaires en 2026, 15,35 % en 2027 | [Music Business Worldwide](https://www.musicbusinessworldwide.com/crb-officially-accepts-settlement-that-will-see-songwriters-paid-more-in-the-us-over-the-next-5-years/) |

Les deux repères en dollars (licence sur mesure et diffusion non commerciale) sont des **planchers** : ils couvrent des usages limités, alors qu'une app diffuse le morceau à un nombre illimité d'utilisateurs, dans un but commercial.

### 4.2 Hypothèses communes

- Prix : 70 € par an ; commission des stores 15 % ; **revenu net par abonné payant : 59,50 €/an**.
- Licence sur la **composition seulement** : Tic réenregistre ses accompagnements. Si on voulait les enregistrements originaux, il faudrait au moins doubler les montants (les labels prennent environ la moitié du chiffre d'affaires dans le streaming).
- Territoire : France et UE.
- Les coûts de **production** (arrangement pédagogique, découpage, accompagnement) viennent en plus : 300 à 600 € par morceau, chiffre du dossier Phase 1.
- Frais juridiques de négociation : 3 000 à 8 000 € la première année (dossier Phase 1).
- Morceaux protégés réservés à l'offre payante : un utilisateur gratuit qui les joue coûterait sans rapporter.

### 4.3 Les trois modèles de licence

**Modèle A : forfait annuel par titre** (ou avance non remboursable). L'éditeur facture un montant fixe par morceau et par an, quel que soit le nombre d'utilisateurs.
Hypothèse : **500 à 2 500 € par titre et par an** pour un petit catalogue mêlant éditeurs indépendants et quelques tubes, **1 000 à 4 000 €** dès qu'on vise les tubes des trois grands éditeurs. Le bas de la fourchette part du plancher de ~300 $ par arrangement sur mesure, multiplié pour un usage illimité et commercial ; le haut reflète la prime demandée pour les titres les plus connus. Simple, mais tout le risque est sur Tic.

**Modèle B : avance + royalties.** Tic verse une avance (minimum garanti), puis un pourcentage du chiffre d'affaires, réparti entre éditeurs au prorata des morceaux joués, avec souvent un plancher par abonné.
Hypothèse : **10 à 20 % du chiffre d'affaires net** pour la composition seule (encadré par la part de 15 % du streaming américain et les ~20 % de la partition à l'unité), **plancher de 0,40 € par abonné payant et par mois** (4,80 €/an), avance de 5 000 à 50 000 € selon la taille du catalogue. C'est le modèle le plus courant dans le numérique.

**Modèle C : partage de revenus sans avance, via un agrégateur.** Hal Leonard, Musicnotes ou un éditeur indépendant fournit les droits (et parfois les arrangements) contre une part plus élevée des revenus liés aux morceaux, sans avance ou avec une petite avance.
Hypothèse : **25 à 50 % des revenus attribuables aux morceaux protégés**, voire une vente à l'unité (pack ou morceau à 3-7 €) où l'agrégateur garde l'essentiel et Tic une commission. Plus cher en pourcentage, mais sans risque fixe : c'est le modèle qui colle le mieux à une startup sans traction.

### 4.4 Scénarios

Chaque scénario associe une taille de catalogue protégé à un nombre d'abonnés payants plausible pour ce stade. Toutes les valeurs sont des **estimations** à un an.

| | **S1 : 20 titres** | **S2 : 100 titres** | **S3 : 500 titres** |
| --- | --- | --- | --- |
| Stade | Lancement, « les bons morceaux » | Après traction (≈ Skoove à ses débuts) | Niveau des leaders (Flowkey, Skoove) |
| Abonnés payants supposés | 1 500 (scénario du dossier : 50 000 inscrits × 3 %) | 5 000 | 20 000 |
| Revenu net annuel | 89 250 € | 297 500 € | 1 190 000 € |
| **A. Forfait annuel** | 10 000 à 50 000 € | 100 000 à 300 000 € | 500 000 à 2 000 000 € |
| Abonnés nécessaires rien que pour payer le forfait | 170 à 840 | 1 680 à 5 040 | 8 400 à 33 600 |
| **B. Royalties** (10-15 % / 15-20 % / 20-30 %) | 8 900 à 13 400 € (plancher : 7 200 €) | 44 600 à 59 500 € (plancher : 24 000 €) | 238 000 à 357 000 € (plancher : 96 000 €) |
| Avance à verser au départ (B) | 5 000 à 10 000 € | 25 000 à 50 000 € | 100 000 à 300 000 € |
| **C. Partage via agrégateur** | ~0 € fixe, puis 25 à 50 % des ventes de morceaux | ~0 à 10 000 € fixe, puis 25 à 50 % | Négociation directe plus rentable à ce stade |
| Production des parcours (en plus) | 6 000 à 12 000 € | 30 000 à 60 000 € | 150 000 à 300 000 € |
| Juridique (première année) | 3 000 à 8 000 € | 5 000 à 15 000 € | 15 000 à 40 000 € |

Pourquoi les pourcentages montent avec la taille : plus le catalogue protégé pèse dans l'usage, plus la part des revenus qui lui revient est grande, et plus il faut de titres des grands éditeurs, qui négocient plus durement.

### 4.5 Ce que les chiffres disent

- **En forfait, 20 titres absorbent déjà jusqu'à 56 % du revenu net** du scénario du dossier (50 000 € sur 89 250 €). Le forfait n'est tenable que si les morceaux protégés font venir beaucoup d'abonnés en plus.
- **En royalties, le coût suit les revenus** : environ 6 à 12 € par abonné et par an pour la composition seule, soit 10 à 20 % du revenu net. C'est supportable, mais l'avance (5 000 à 10 000 € pour 20 titres) doit être financée avant tout revenu.
- **À 500 titres, le coût des droits dépasse 20 % du chiffre d'affaires** en royalties, et peut dépasser le chiffre d'affaires en forfait. C'est cohérent avec le prix des leaders (110 à 180 €/an contre 70 € pour Tic) : un gros catalogue sous licence est difficile à financer à 70 €.
- **La production coûte autant que les droits** dans les petits scénarios : 20 parcours, c'est 6 000 à 12 000 €, du même ordre que les royalties.
- **Ajouter les enregistrements originaux** ferait au moins doubler la facture et multiplierait les interlocuteurs : le réenregistrement maison reste la bonne stratégie.

## 5. Recommandations pour Tic

1. **Lancer sur un catalogue libre** (domaine public vérifié en France, compositions originales, Creative Commons CC BY ou CC0), comme prévu, et en faire un choix assumé.
2. **Mesurer la demande avant de payer** : la liste de souhaits et la connexion Spotify (métadonnées seules) disent quels 20 titres licencier en premier. C'est aussi un argument face aux éditeurs.
3. **Viser d'abord un agrégateur ou des éditeurs indépendants en partage de revenus (modèle C, puis B)**, et refuser les forfaits tant qu'il n'y a pas d'abonnés.
4. **Envisager le modèle Musora** : morceaux protégés vendus en supplément (à l'unité ou en pack), pour que le coût de licence reste variable et que l'abonnement à 70 € ne le porte pas seul.
5. **Réenregistrer les accompagnements** pour ne négocier que la composition.
6. **Faire écrire dans chaque contrat** : versions simplifiées autorisées, découpage en parties, territoires, durée et préavis de retrait, affichage des paroles.
7. **Consulter un avocat en propriété intellectuelle** avant de signer et avant toute transcription IA.

### Questions à poser aux éditeurs et agrégateurs en S2

- Accordez-vous des licences pour une app d'apprentissage qui affiche des notes et des versions simplifiées ? Pour quels territoires ?
- Quel modèle proposez-vous : forfait par titre, avance + pourcentage, partage de revenus, vente à l'unité ?
- Y a-t-il une avance ou un minimum garanti ? Un plancher par abonné ?
- Les arrangements existants de votre catalogue peuvent-ils être réutilisés, ou faut-il les créer ?
- Quelle durée de licence, et que se passe-t-il pour l'utilisateur à l'expiration ?
- Quels délais pour obtenir un accord ?

## 6. Paragraphe prêt pour `feasibility.md`

> **Droit d'auteur.** Afficher les notes d'un morceau protégé suppose l'accord de ses éditeurs (reproduction et arrangement, art. L122-4 CPI) ; ce droit ne passe pas par la Sacem et se négocie titre par titre, pays par pays. L'audio ajoute les droits gérés par la Sacem, et l'enregistrement original ceux du label : Tic réenregistrera ses accompagnements pour ne licencier que la composition. Tous les concurrents (Flowkey, Yousician, Duolingo avec Sony Music, Musora avec Hal Leonard) paient ces licences et retirent des morceaux quand elles expirent. Nos estimations, à confirmer auprès de 2 ou 3 éditeurs : 10 000 à 50 000 € par an pour 20 titres en forfait, ou 10 à 20 % du chiffre d'affaires en royalties (6 à 12 € par abonné et par an). Tic démarre donc sur un catalogue libre de droits, mesure la demande avec la liste de souhaits, puis licencie les 20 titres les plus demandés en partage de revenus via un agrégateur, éventuellement vendus en supplément de l'abonnement. Cette note ne constitue pas un avis juridique.

## Sources

- Code de la propriété intellectuelle, art. L112-3, L121-1, L122-3, L122-4, L122-5, L123-1, L123-10 (Légifrance)
- Flowkey, pourquoi des morceaux ne sont plus disponibles : https://help.flowkey.com/en/articles/8975623-why-are-some-songs-no-longer-available-on-flowkey
- Musora, coût supplémentaire des morceaux : https://help.musora.com/article/1238-why-is-there-an-extra-cost-for-musora-songs
- Duolingo x Sony Music, 15/08/2024 : https://investors.duolingo.com/news-releases/news-release-details/duolingo-partners-sony-music-add-hit-recordings-major-artists
- Yousician (historique des licences) : https://en.wikipedia.org/wiki/Yousician
- Ultimate Guitar (accords éditeurs, Harry Fox Agency) : https://en.wikipedia.org/wiki/Ultimate_Guitar
- Fermeture des sites de tablatures, 2006 : https://www.theregister.com/2006/08/29/guitar_sites_under_fire
- Hal Leonard Connect, août 2026 : https://www.mu.se/posts/hal-leonard-connect et https://www.musicincmag.com/news/detail/muse-group-launches-hal-leonard-connect-program
- Musicnotes, 100 M$ reversés : https://www.musicnotes.com/blog/100m-royalties
- ArrangeMe, taux de commission : https://help.arrangeme.com/hc/en-us/articles/1500004760122-What-is-the-commission-rate
- Trolley, royalties de la partition : https://trolley.com/learning-center/understanding-print-music-royalties-a-guide-for-music-business-professionals/
- Compose Create, qui gagne quoi dans l'édition : https://composecreate.com/who-makes-what-in-music-publishing/
- Productions Magazine, licences d'arrangement sur mesure : https://www.productionsmag.com/article/the-ins-and-outs-of-custom-arrangements/
- GIA Publications, tarifs : https://giamusic.com/copyright-policy
- Copyright Royalty Board, Phonorecords IV : https://www.musicbusinessworldwide.com/crb-officially-accepts-settlement-that-will-see-songwriters-paid-more-in-the-us-over-the-next-5-years/
- SEAM (définition) : https://www.artcena.fr/en/node/3811416
- Boléro, tribunal de Nanterre, 28/06/2024 : https://www.leclubdesjuristes.com/en-bref/maurice-ravel-est-lunique-auteur-du-bolero-selon-la-justice-6479/
- Dossier Phase 1 (coûts de production et juridiques) : `contexte/dossier-phase1-ideation-tic.md`

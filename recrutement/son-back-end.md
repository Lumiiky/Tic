# Son et back-end

**Mercato Phase 2 · Fiche 5 sur 5** · Partenaire · Master Epitech · T8 à T10, 3 semestres

> Tu transformes un morceau en parcours : la partition entre dans Tic, elle en ressort découpée en parties, avec le son de chaque passage.

Fichier cible : `docs/recruitment/job-descriptions/son-back-end.md`

## Le projet en bref
Tic, c'est l'app qui t'emmène jusqu'au morceau que tu veux jouer. On choisit un morceau, Tic le découpe en parties, et on l'apprend en séances courtes dont on choisit la durée. Pour débutants et pour ceux qui reprennent, au piano ou à la guitare. L'app écoute par le micro du téléphone, ou par un clavier MIDI si on en a un.

## Ta mission : le lot « Partitions »
Tout ce qui est musical côté serveur passe par toi. Tu fais entrer les morceaux dans le catalogue, tu les prépares pour l'app et pour l'écoute.
- **Importer les partitions** : lire les formats ouverts (MusicXML, MIDI), vérifier, corriger.
- **Découper en parties** : proposer un découpage en passages courts, adapté au piano et à la guitare, et le faire valider.
- **L'audio de référence** : faire entendre chaque partie, à tempo normal et ralenti.
- **Le catalogue** : morceaux, versions, niveaux, et la licence de chaque titre (domaine public, compositions originales, Creative Commons).
- **Le banc d'enregistrements** : ranger les enregistrements de test qui servent à mesurer l'écoute, avec la personne chargée du traitement audio.
- **Les services musicaux** : ce que l'app demande au serveur pour charger un morceau et ses parties.

## Pourquoi ce poste existe
La promesse de Tic, c'est « ton morceau, découpé jusqu'à une date d'arrivée ». Sans morceaux bien préparés, il n'y a ni parcours, ni séance, ni écoute à vérifier. Et chaque titre doit rester dans un cadre de droits clair.
Source : `feasibility.md` · Technique (sources de partitions) et juridique (droit d'auteur, catalogue libre, H3) — *à relier quand feasibility.md sera rédigé.*

**Si le terrain dit l'inverse :** si le catalogue libre ne suffit pas et que des licences d'éditeurs arrivent, le poste s'élargit à l'import de leurs formats et au suivi des droits par titre. Le cœur ne change pas.

## Prérequis obligatoires (dès le premier jour)
- **Master Epitech, T8 à T10** : tu es disponible sur les trois semestres du projet.
- **Les bases de la programmation** : dans n'importe quel langage, tu sais écrire et déboguer un petit programme.
- **Des bases dans le son** : fréquence, amplitude, échantillonnage ; tu sais ce que c'est, et tu as déjà ouvert ou manipulé un fichier audio, en cours ou pour toi.
- **Des bases en base de données** : tu sais créer une table et écrire une requête simple.

C'est tout. Pas besoin de jouer d'un instrument.

## Compétences acquérables (en route, avec l'équipe)
- **Formats musicaux** : MIDI, MusicXML, mesures, tempo, tablature de guitare.
- **Découpage musical** : repérer phrases et motifs, et en faire des parties de difficulté croissante.
- **Synthèse et rendu audio** : produire le son d'une partition, changer le tempo sans changer la hauteur.
- **Traitement de données musicales** : scripts d'import, de vérification et de conversion en série.
- **Services back-end** : API, stockage de fichiers, mise en cache.
- **Droits et licences** : domaine public, Creative Commons, ce qu'on peut faire de chaque titre.

**Un plus, jamais exigé :** tu lis un peu la musique, ou tu joues du piano ou de la guitare, même un peu.

## Ton parcours dans le projet
| T8 · Scope : prouver le découpage | T9 · Build : remplir le catalogue | T10 · Build et exploitation : élargir |
| --- | --- | --- |
| Sources et formats des 20 morceaux libres | Import et découpage des premiers morceaux | Versions piano et guitare de chaque titre |
| Premiers découpages validés à la main | Audio de référence, tempo ralenti | Nouveaux titres et suivi des licences |
| Banc d'enregistrements avec l'audio | Services de chargement pour l'app | Retours des élèves sur le découpage |

## Avec qui tu travailles
- **Traitement audio et IA** : partitions de référence pour le suivi, banc d'enregistrements.
- **Back-end, données et DevOps** : stockage, API commune, déploiement.
- **Développement mobile** : format des morceaux et des parties chargés par l'app.
- **UI/UX et front-end** : affichage de la partition et des parties.
- Les deux fondateurs portent la direction produit et le recrutement, comme le prévoit le cadre Epitech.

## Ce que tu y gagnes
- Un mélange rare : le son et le back-end, sur un vrai produit.
- La matière première de Tic : sans toi, il n'y a pas de morceau à jouer.
- Une pratique concrète des droits d'auteur dans le numérique.
- Une équipe de 7, et un produit qui s'appuie sur des entretiens terrain.

## Comment candidater
Pendant le Mercato, juste après la sélection des projets. Envoie aux fondateurs :
- un projet dont tu es fier, quel qu'il soit, même un projet de piscine ;
- trois lignes sur le morceau que tu aimerais voir dans Tic.

Contact : [contacts des fondateurs] · vitrine : [lien GitHub Pages]

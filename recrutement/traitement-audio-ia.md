# Traitement audio et IA

**Mercato Phase 2 · Fiche 2 sur 5** · Poste le plus critique · Partenaire · Master Epitech · T8 à T10, 3 semestres

> Tu apprends à Tic à écouter : reconnaître les notes jouées au piano ou à la guitare, au micro du téléphone, et dire à l'élève ce qui est juste.

Fichier cible : `docs/recruitment/job-descriptions/traitement-audio-ia.md`

## Le projet en bref
Tic, c'est l'app qui t'emmène jusqu'au morceau que tu veux jouer. On choisit un morceau, Tic le découpe en parties, et on l'apprend en séances courtes dont on choisit la durée. Pour débutants et pour ceux qui reprennent, au piano ou à la guitare. L'app écoute par le micro du téléphone, ou par un clavier MIDI si on en a un.

## Ta mission : le lot « Écoute »
Tout ce que Tic entend passe par toi. Tu choisis l'approche, tu la mesures sur du vrai matériel, et tu la fais tourner sur le téléphone avec le développeur mobile.
- **Détecter les notes au micro** : d'abord la mélodie à une main, puis les accords et les deux mains, sur piano acoustique, clavier et guitare.
- **Suivre l'élève dans la partition** : savoir où il en est malgré un tempo lent et les hésitations, et compter les notes justes par mesure.
- **Valider une partie** : trois essais à 80 % de justesse, avec des seuils qui restent justes pour un débutant.
- **Savoir quand on entend mal** : calibrer la pièce, détecter une écoute peu fiable et proposer le MIDI ou l'auto-évaluation.
- **Tout faire tourner sur le téléphone** : le son est analysé sur l'appareil ; latence, batterie et taille du modèle comptent, sur iOS et Android.
- **Estimer le niveau de départ** : le test facultatif de l'accueil, trois extraits connus comparés note à note à leur partition.

## Pourquoi ce poste existe
La reconnaissance audio décevante est l'un des premiers reproches faits aux apps concurrentes. Or notre cible joue souvent sur un piano acoustique, un clavier sans MIDI ou dans une pièce bruyante. Si Tic n'entend pas juste, il félicite à tort ou décourage à tort, et l'élève s'en va.
Source : `feasibility.md` · Technique, verrou « écoute par micro » (H6) — *à relier quand feasibility.md sera rédigé.*

**Si le terrain dit l'inverse :** si la plupart des personnes interrogées jouent là où le micro échoue, le MIDI redevient le mode principal. Le poste reste : le suivi de partition, la validation et l'évaluation du niveau ne dépendent pas du micro, et l'écoute polyphonique au micro passe en second.

## Prérequis obligatoires (dès le premier jour)
- **Master Epitech, T8 à T10** : tu es disponible sur les trois semestres du projet.
- **Les bases de la programmation** : dans n'importe quel langage, tu sais écrire et déboguer un petit programme.
- **Des bases dans le son** : fréquence, amplitude, échantillonnage ; tu sais ce que c'est, et tu as déjà ouvert ou manipulé un fichier audio, en cours ou pour toi.
- **Des bases en IA** : tu as déjà utilisé un modèle existant ou entraîné un modèle simple, en cours ou pour toi.

C'est tout. Pas besoin de jouer d'un instrument.

## Compétences acquérables (en route, avec l'équipe)
- **Traitement du signal** : de tes bases vers la FFT, le spectrogramme et le filtrage, avec des ressources choisies.
- **IA appliquée au son et mesure** : NumPy, librosa, entraîner un modèle sur de l'audio, monter un protocole de test et chiffrer.
- **Transcription musicale** : détection de hauteur, d'attaques et de notes simultanées ; on lit l'état de l'art ensemble.
- **Partition et MIDI** : MIDI, MusicXML, mesures et tempo. Pas besoin de jouer d'un instrument.
- **IA embarquée et audio mobile** : Core ML ou LiteRT, latence et micro sur iOS et Android, en binôme avec le développeur mobile.
- **Suivi de partition et RGPD audio** : alignement de séquences (DTW), et le cadre d'un son traité sur l'appareil.

**Un plus, jamais exigé :** tu joues du piano ou de la guitare, même un peu, ou tu as déjà touché au son, au signal ou à l'IA.

## Ton parcours dans le projet
| T8 · Scope : choisir et prouver l'approche | T9 · Build : faire entendre Tic | T10 · Build et exploitation : écouter plus finement |
| --- | --- | --- |
| État de l'art des méthodes de détection | Mélodie au micro et en MIDI, sur le téléphone | Accords et deux mains au micro |
| Banc d'enregistrements sur le matériel relevé en entretien | Suivi de partition et validation des parties | Test de niveau de l'accueil |
| Cibles chiffrées de fiabilité, par équipement | Calibration et écran « je t'entends mal » | Mesures sur de vrais utilisateurs |

## Avec qui tu travailles
- **Développement mobile** : capture du micro, intégration du modèle.
- **Son et back-end** : partitions de référence, banc d'enregistrements pour les tests.
- **Back-end, données et DevOps** : progrès, livraison des modèles, tests automatisés.
- **UI/UX et front-end** : retours d'essai, calibration.
- Les deux fondateurs portent la direction produit et le recrutement, comme le prévoit le cadre Epitech.

## Ce que tu y gagnes
- Une spécialité recherchée, le son et l'IA, apprise sur un vrai produit.
- Le cœur technique du produit : sans toi, Tic n'entend rien.
- Un vrai problème de recherche appliquée, mesuré sur du vrai matériel.
- Ton lot à toi, de la conception à la mise en production.
- Une équipe de 7, et un produit qui s'appuie sur des entretiens terrain.

## Comment candidater
Pendant le Mercato, juste après la sélection des projets. Envoie aux fondateurs :
- un projet dont tu es fier, quel qu'il soit, même un projet de piscine ;
- trois lignes sur ce qui t'attire dans l'écoute musicale.

Contact : [contacts des fondateurs] · vitrine : [lien GitHub Pages]

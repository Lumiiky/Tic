# Développement mobile

**Mercato Phase 2 · Fiche 1 sur 5** · Partenaire · Master Epitech · T8 à T10, 3 semestres

> Tu construis l'app que l'élève ouvre chaque jour : le parcours vers son morceau, la séance, la partition qui défile et le micro qui l'écoute.

Fichier cible : `docs/recruitment/job-descriptions/developpement-mobile.md`

## Le projet en bref
Tic, c'est l'app qui t'emmène jusqu'au morceau que tu veux jouer. On choisit un morceau, Tic le découpe en parties, et on l'apprend en séances courtes dont on choisit la durée. Pour débutants et pour ceux qui reprennent, au piano ou à la guitare. L'app écoute par le micro du téléphone, ou par un clavier MIDI si on en a un.

## Ta mission : le lot « App »
L'app sur le téléphone, c'est toi. Tu poses son architecture, tu relies les écrans, l'écoute et les données, et tu la fais tenir sur iOS comme sur Android.
- **Le parcours** : choisir un morceau, voir ses parties, sa progression et sa date d'arrivée estimée.
- **La séance** : une séance à la durée choisie (5 à 20 min), la partition qui défile, Tic posé en bas de l'écran.
- **Le micro et le MIDI** : capter le son du téléphone ou d'un clavier MIDI branché, et le passer au moteur d'écoute, en binôme avec la personne chargée du traitement audio.
- **Le hors-ligne** : une séance doit marcher sans réseau ; la progression se synchronise ensuite.
- **Le rappel du jour** : une seule notification par jour, à l'heure choisie, jamais de fausse urgence.
- **Le choix technique** : natif ou multiplateforme, c'est toi qui le compares et le défends en T8.

## Pourquoi ce poste existe
Tic se pratique au quotidien, téléphone posé sur le pupitre : il faut une app fluide, qui démarre vite et qui accède au micro et au MIDI sur les deux systèmes.
Source : `feasibility.md` · Technique, micro et MIDI sur mobile (H6) — *à relier quand feasibility.md sera rédigé.*

**Si le terrain dit l'inverse :** si la plupart des gens jouent là où le micro échoue, le MIDI devient le mode principal. Le poste reste le même ; la connexion des claviers MIDI passe simplement en tête des priorités.

## Prérequis obligatoires (dès le premier jour)
- **Master Epitech, T8 à T10** : tu es disponible sur les trois semestres du projet.
- **Les bases de la programmation** : dans n'importe quel langage, tu sais écrire et déboguer un petit programme.
- **Une première interface** : tu as déjà fait un écran qui réagit à l'utilisateur, web ou mobile, même simple.

C'est tout. Pas besoin de jouer d'un instrument.

## Compétences acquérables (en route, avec l'équipe)
- **Développement mobile** : cycle de vie d'une app, navigation, stockage local, sur iOS et Android.
- **Audio et MIDI sur téléphone** : permissions du micro, latence, connexion d'un clavier MIDI, avec la personne chargée de l'écoute.
- **Modèle embarqué** : intégrer le modèle d'écoute dans l'app et mesurer ce qu'il coûte en batterie.
- **Synchronisation** : travailler hors ligne et dialoguer avec l'API du back-end.
- **Tests et publication** : tests sur de vrais téléphones, versions de test, règles des stores.
- **Accessibilité** : tailles de texte, contrastes, lecteurs d'écran.

**Un plus, jamais exigé :** tu as déjà publié une app, ou tu joues du piano ou de la guitare, même un peu.

## Ton parcours dans le projet
| T8 · Scope : choisir et poser les bases | T9 · Build : la première séance complète | T10 · Build et exploitation : publier |
| --- | --- | --- |
| Comparatif natif ou multiplateforme | Parcours, séance et partition qui défile | Hors-ligne et rappel du jour |
| Essai du micro et du MIDI sur plusieurs téléphones | Écoute intégrée, en binôme avec l'audio | Publication sur les stores |
| Architecture de l'app et découpage des écrans | Tests avec de vrais élèves | Corrections à partir des retours |

## Avec qui tu travailles
- **Traitement audio et IA** : capture du micro, intégration du modèle d'écoute.
- **Back-end, données et DevOps** : API, synchronisation, builds automatiques et publication.
- **UI/UX et front-end** : écrans, composants et animations de Tic, intégrés ensemble.
- **Son et back-end** : format des partitions et des parties chargées par l'app.
- Les deux fondateurs portent la direction produit et le recrutement, comme le prévoit le cadre Epitech.

## Ce que tu y gagnes
- Une app publiée sur les stores, à montrer en entretien.
- Un vrai défi technique : le son en temps réel sur téléphone.
- Ton lot à toi, de l'architecture à la mise en production.
- Une équipe de 7, et un produit qui s'appuie sur des entretiens terrain.

## Comment candidater
Pendant le Mercato, juste après la sélection des projets. Envoie aux fondateurs :
- un projet dont tu es fier, quel qu'il soit, même un projet de piscine ;
- trois lignes sur l'app que tu aimerais avoir construite.

Contact : [contacts des fondateurs] · vitrine : [lien GitHub Pages]

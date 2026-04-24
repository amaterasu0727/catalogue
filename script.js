const produits = [
    {
        id: 1,
        nom: "Nike Air Jordan",
        prix: "7 000",
        tags: "mode chaussure basket jordan nike sport",
        image: "jordan.jpg",
        description: "L'icône du basketball à votre pied. Une finition soignée et un confort durable pour vos sorties urbaines.", 
        dispo: true
    },
    {
        id: 2,
        nom: "Armoire Tissu 3 Battants",
        prix: "12 000",
        tags: "maison meuble rangement vêtement chambre",
        image: "armoire.jpg",
        description: "Dites adieu au désordre. Une structure légère mais spacieuse, idéale pour organiser toute votre garde-robe sans encombrer la pièce.",
        dispo: true
    },
    {
        id: 3,
        nom: "Pack Smartwatch + Airpods",
        prix: "5 500",
        tags: "electronique son musique montre airpods",
        image: "montre-connecte.jpg",
        description: "Le duo tech indispensable. Suivez votre activité physique tout en profitant de votre musique en totale liberté sans fil.",
        dispo: true 
    },
    {
        id: 4,
        nom: "Set de Casseroles Inox",
        prix: "9 000",
        tags: "cuisine maison casserole plat",
        image: "casserole.jpg",
        description: "Cuisinez comme un chef. Un acier inoxydable de qualité qui assure une cuisson homogène et un nettoyage rapide.",
        dispo: true
    },
    {
        id: 5,
        nom: "Parfum Mousuf 4 en 1",
        prix: "5 500",
        tags: "parfum 4en1 homme femme ",
        image: "mousuf.jpg",
        description: "Une signature olfactive intense. Un coffret varié pour changer de fragrance selon votre humeur et vos rendez-vous.",
        dispo: true
    },
    {
        id: 6,
        nom: "Parfum Yara 5 en 1",
        prix: "7 500",
        tags: "parfum 5en1 homme femme ",
        image: "yara.jpg",
        description: "L'élégance orientale dans un pack complet. Des notes douces et persistantes qui vous accompagnent toute la journée.",
        dispo: true
    },
    {
        id: 7,
        nom: "Rallonge de 10m",
        prix: "5 000",
        tags: "rallonge maison courant electrique cable prises longue",
        image: "rallonge.jpg",
        description: "Ne soyez plus limité par vos prises. Une longueur généreuse et une protection robuste pour tous vos appareils domestiques.",
        dispo: true
    },
    {
        id: 8,
        nom: "Pose ordinateur",
        prix: "3 500",
        tags: " pose ordinateur support bureau porte ",
        image: "pose-ordi.jpg",
        description: "Travaillez confortablement partout. Améliore la ventilation de votre PC et votre posture pour éviter les douleurs au cou.",
        dispo: true
    },
    {
        id: 9,
        nom: "Mini extracteur de jus 2 en 1",
        prix: "6 500",
        tags: "mini extracteur jus 2en1 mixeur cuisine ",
        image: "mixeur.jpg",
        description: "Le plein de vitamines en un clic. Compact et puissant, il mixe vos fruits frais en quelques secondes pour un jus fait maison.",
        dispo: true
    },
    {
        id: 10,
        nom: "Support TV et guéridon",
        prix: "69 000",
        tags: " support TV télévision bureau maison meuble ",
        image: "gueridon.jpg",
        description: "Transformez votre salon. Un ensemble moderne et solide qui sublime votre écran tout en offrant des rangements élégants.",
        dispo: true
    },
    {
        id: 11,
        nom: "Genoulliére: stabilisateur de genou",
        prix: "3 500",
        tags: "genoulliére stabilisateur genou pieds sport santé ",
        image: "genouilliere.jpg",
        description: "Protégez vos articulations. Un maintien ferme et élastique pour sécuriser vos mouvements lors de vos séances de sport.",
        dispo: true
    },
    {
        id: 12,
        nom: "Chicha Electronique 40000 puffs",
        prix: "7 500",
        tags: "chicha electronique fumé vapeur tabac ",
        image: "chicha.jpg",
        description: "Une expérience de vapeur longue durée. Design ergonomique et autonomie record pour savourer vos arômes préférés.",
        dispo: true
    },
    {
        id: 13,
        nom: "Casque audio Bluetooth P9",
        prix: "3 500",
        tags: "casque audio bluetooth p9 écouteur son musique ",
        image: "casque.jpg",
        description: "L'immersion sonore à petit prix. Un design inspiré des plus grands, avec une connexion sans fil stable et des coussinets doux.",
        dispo: true
    },
    {
        id: 14,
        nom: "caméra de surveillance a 3 objectif avec panneau solaire",
        prix: "27 000",
        tags: "caméra surveillance sécurité intélligente wifi solaire extérieur intérieur connectée ",
        image: "camera.jpg",
        description: "Gardez un œil sur ce qui compte, sans facture d'électricité. Une vision panoramique ultra-claire alimentée par l'énergie solaire.",
        dispo: true
    },
    {
        id: 15,
        nom: "Basket de sport pour homme ALR",
        prix: "7 000",
        tags: "basket sport homme alr ",
        image: "alr.jpg",
        description: "La performance accessible. Une semelle flexible et respirante conçue pour vos entraînements et vos marches quotidiennes.",
        dispo: true
    },
    {
        id: 16,
        nom: "Airpods Pro 2",
        prix: "5 500",
        tags: "airpods pro 2 écouteur son musique connecté apple bluetooth ",
        image: "airpod.jpg",
        description: "Plongez dans votre musique. Réduction de bruit passive et basses profondes pour une qualité d'écoute bluffante.",
        dispo: true
    },
    {
        id: 17,
        nom: "Armoire Penderie Modulable 2 Battants",
        prix: "19 000",
        image: "2batplc.jpg",
        tags: "maison, meuble, armoire, rangement, penderie",
        description: "Le rangement intelligent. Adaptez les compartiments selon vos besoins pour maximiser l'espace dans votre chambre.",
        dispo: true
    },
    {
        id: 18,
        nom: "Grande Armoire Modulable 3 Battants Luxe",
        prix: "28 000",
        image: "3batplc.jpg",
        tags: "maison, meuble, armoire, luxe, rangement, chambre",
        description: "Le summum de l'organisation. Une armoire spacieuse au design raffiné pour protéger vos vêtements les plus précieux.",
        dispo: true
    },
    {
        id: 19,
        nom: "Nike Air Force 1 Low White Classique",
        prix: "8 000",
        image: "airforce1.jpeg",
        tags: "mode, chaussures, baskets, nike, sport",
        description: "Le classique indémodable. Un blanc éclatant qui se marie avec toutes vos tenues, du jean au short de sport.",
        dispo: true
    },
    {
        id: 20,
        nom: "Pistolet de Massage Musculaire Professionnel",
        prix: "5 500",
        image: "app-massage.jpg",
        tags: "bien-être, santé, sport, massage, électronique",
        description: "Récupérez plus vite après l'effort. Soulage les tensions musculaires grâce à des vibrations ciblées et ajustables.",
        dispo: true
    },
    {
        id: 21,
        nom: "Masseur Double Tête Ergonomique",
        prix: "3 500",
        image: "app-massage2.jpg",
        tags: "bien-être, relaxation, massage, santé, corps",
        description: "Un massage profond à domicile. Sa double tête atteint les zones difficiles pour une détente totale du dos et des épaules.",
        dispo: true
    },
    {
        id: 22,
        nom: "Mini Bâton de Massage Vibrant Waterproof",
        prix: "3 500",
        image: "app-massage3.jpg",
        tags: "bien-être, massage, relaxation, étanche, électronique",
        description: "Discret et efficace. Son format mini vous permet de l'emporter partout pour apaiser vos douleurs à tout moment.",
        dispo: true
    },
    {
        id: 23,
        nom: "Machine de Scellage Manuelle Professionnelle",
        prix: "28 500",
        image: "app-sceller.jpg",
        tags: "électronique, cuisine, professionnel, équipement, scelleuse",
        description: "Conservez vos produits comme un pro. Scellez hermétiquement vos emballages pour garantir fraîcheur et hygiène.",
        dispo: true
    },
    {
        id: 24,
        nom: "Tondeuse de Précision 3 en 1 Multi-usages",
        prix: "5 500",
        image: "appdemassage.jpg",
        tags: "beauté, homme, rasage, électronique, hygiène",
        description: "Soignez votre style dans les détails. Une tondeuse polyvalente pour la barbe, les cheveux et les finitions précises.",
        dispo: true
    },
    {
        id: 25,
        nom: "Kit d'Éclairage LED Vidéo RGB pour Smartphone",
        prix: "3 500",
        image: "appvideo.jpg",
        tags: "électronique, vidéo, influenceur, lumière, accessoires",
        description: "Améliorez la qualité de vos vidéos. Des couleurs ajustables pour créer l'ambiance parfaite sur vos réseaux sociaux.",
        dispo: true
    },
    {
        id: 26,
        nom: "Étagère à Chaussures Antipoussière 3 Colonnes",
        prix: "10 500",
        image: "armoire-chaussure3batt.jpg",
        tags: "maison, meuble, rangement, chaussures, organisation",
        description: "Gagnez de la place avec élégance. Gardez vos chaussures propres, triées et facilement accessibles grâce à ses compartiments.",
        dispo: true
    },
    {
        id: 27,
        nom: "Bol de Table en Céramique Design Floral",
        prix: "21 000",
        image: "bol-de-tableceramique.jpg",
        tags: "maison, cuisine, vaisselle, bol, céramique",
        description: "Embellissez votre table. Une céramique fine aux motifs floraux pour vos repas de famille ou vos grandes occasions.",
        dispo: true
    },
    {
        id: 28,
        nom: "Grand Bol Céramique Motif Traditionnel",
        prix: "13 000",
        image: "bolceramique2.jpg",
        tags: "maison, cuisine, vaisselle, décoration, bol",
        description: "Le charme de la tradition. Un grand format idéal pour servir vos plats préférés avec une touche artisanale.",
        dispo: true
    },
    {
        id: 29,
        nom: "Bol en Céramique Élégance",
        prix: "28 000",
        image: "bolceremique.jpg",
        tags: "maison, cuisine, vaisselle, luxe, bol",
        description: "Une pièce d'exception pour votre cuisine. Sa finition luxueuse en fait un objet de décoration à part entière.",
        dispo: true
    },
    {
        id: 30,
        nom: "Caméra de Surveillance Ampoule WiFi 360°",
        prix: "6 500",
        image: "camera-ampoule.jpg",
        tags: "électronique, sécurité, maison, caméra, wifi",
        description: "Surveillez votre maison en toute discrétion. Se visse comme une ampoule ordinaire et offre une vue complète sur votre mobile.",
        dispo: true
    },
    {
        id: 31,
        nom: "Casque Audio Bluetooth Stéréo Bass",
        prix: "4 500",
        image: "casque1.jpg",
        tags: "électronique, audio, musique, casque, bluetooth",
        description: "Vibrez au rythme des basses. Un son stéréo puissant pour redécouvrir vos morceaux préférés sans vous ruiner.",
        dispo: true
    },
    {
        id: 32,
        nom: "Casque Sans Fil P9 Premium Design",
        prix: "3 500",
        image: "casqueP9.jpg",
        tags: "électronique, audio, musique, casque, luxe",
        description: "L'élégance au service du son. Un design épuré et une connexion Bluetooth rapide pour un usage quotidien fluide.",
        dispo: true
    },
    {
        id: 33,
        nom: "Casque Bluetooth P39 Color Edition",
        prix: "4 000",
        image: "casqueP39.jpg",
        tags: "électronique, audio, musique, casque, mode",
        description: "Affichez votre style en musique. Des couleurs vives et un confort d'écoute idéal pour les transports ou le sport.",
        dispo: true
    },
    {
        id: 34,
        nom: "Lot de 10 Cintres Robustes Antidérapants",
        prix: "1 500",
        image: "ceintre-lot10.jpg",
        tags: "maison, rangement, organisation, dressing, cintres",
        description: "Prenez soin de vos vêtements. Des cintres solides qui évitent les plis et optimisent l'espace de votre penderie.",
        dispo: true
    },
    {
        id: 35,
        nom: "Chicha Électronique Portable Rechargeable 25000 puffs",
        prix: "5 500",
        image: "chicha-elec.jpg",
        tags: "electronique accessoire chicha détente",
        description: "La détente qui tient dans la poche. Une vapeur savoureuse et une recharge simple pour vos moments de relaxation.",
        dispo: true
    },
    {
        id: 36,
        nom: "Kit Chicha Électronique Design Moderne",
        prix: "6 500",
        image: "chicha-electo2.jpg",
        tags: "electronique accessoire chicha coffret",
        description: "Le set complet pour les amateurs. Un design futuriste associé à une performance de fumée constante.",
        dispo: true
    },
    {
        id: 37,
        nom: "Lot de 10 Cuillères en Acier Inoxydable",
        prix: "1 500",
        image: "cuillerelot10.jpg",
        tags: "maison, cuisine, vaisselle, couvert, acier",
        description: "La qualité au quotidien. Des cuillères durables qui gardent leur éclat même après de nombreux lavages.",
        dispo: true
    },
    {
        id: 38,
        nom: "Parfum Dagmar",
        prix: "2 500",
        image: "dagmar.jpg",
        tags: "maison, décoration, luxe, salon, meuble",
        description: "Une fragrance mystérieuse et envoûtante. Idéal pour ceux qui cherchent une odeur distinctive à prix doux.",
        dispo: true
    },
    {
        id: 39,
        nom: "Mini Drone de Prise de Vue HD WiFi",
        prix: "12 500",
        image: "drone.jpg",
        tags: "électronique, gadget, drone, photo, high-tech",
        description: "Prenez de la hauteur. Capturez des images incroyables depuis le ciel et pilotez-le directement avec votre smartphone.",
        dispo: true
    },
    {
        id: 40,
        nom: "Écouteurs Bluetooth Boîtier Transparent",
        prix: "2 500",
        image: "ecouteur-transparent.jpg",
        tags: "électronique, audio, musique, écouteurs, sans-fil",
        description: "Le futur dans vos oreilles. Un design transparent ultra-tendance allié à une connexion Bluetooth efficace.",
        dispo: true
    },
    {
        id: 41,
        nom: "Fauteuil Gonflable 2-en-1 Confort",
        prix: "9 000",
        image: "fauteuil2en1.jpg",
        tags: "maison, meuble, salon, détente, pliable",
        description: "Installez-vous confortablement partout. Se gonfle en un clin d'œil pour transformer n'importe quel coin en zone de repos.",
        dispo: true
    },
    {
        id: 42,
        nom: "Fer à Repasser Vapeur Haute Performance",
        prix: "5 000",
        image: "fer-repasser.jpg",
        tags: "électronique, ménager, maison, entretien, vêtements",
        description: "Éliminez les plis les plus tenaces. Une vapeur puissante pour un repassage rapide et impeccable de tous vos tissus.",
        dispo: true
    },
    {
        id: 43,
        nom: "Fer à Lisser Professionnel Céramique",
        prix: "3 500",
        image: "feralisser.jpg",
        tags: "beauté, coiffure, électronique, femme, soin",
        description: "Des cheveux lisses et brillants en un passage. Protège votre fibre capillaire tout en assurant une coiffure parfaite.",
        dispo: true
    },
    {
        id: 44,
        nom: "Gourde Sportive Ergonomique 600ml",
        prix: "3 000",
        image: "gourde600ml.jpg",
        tags: "sport, accessoire, gourde, hydratation, fitness",
        description: "Votre partenaire hydratation. Légère et facile à prendre en main, elle vous suit dans tous vos efforts sportifs.",
        dispo: true
    },
    {
        id: 45,
        nom: "Gourde Thermos Grande Capacité 1L",
        prix: "3 500",
        image: "gourde1L.jpg",
        tags: "sport, hydratation, gourde, fitness, santé",
        description: "Atteignez vos objectifs d'eau. Des marquages pour vous motiver à boire tout au long de la journée.",
        dispo: true
    },
    {
        id: 46,
        nom: "Projecteur LED 3500 Lumens Puissant",
        prix: "12 500",
        image: "led3500.jpg",
        tags: "électronique, éclairage, maison, extérieur, sécurité",
        description: "Éclairez comme en plein jour. Idéal pour sécuriser vos extérieurs ou éclairer de grands espaces de travail.",
        dispo: true
    },
    {
        id: 47,
        nom: "Projecteur LED Professionnel Haute Puissance",
        prix: "16 500",
        image: "ledPro.jpg",
        tags: "électronique, éclairage, pro, extérieur, sécurité",
        description: "La puissance ultime pour vos chantiers ou jardins. Une robustesse à toute épreuve pour un éclairage longue durée.",
        dispo: true
    },
    {
        id: 48,
        nom: "Mini Batteuse Électrique de Cuisine",
        prix: "4 500",
        image: "mini-batteuse.jpg",
        tags: "électronique, cuisine, pâtisserie, ustensile, maison",
        description: "Réussissez vos pâtisseries à coup sûr. Un petit appareil maniable pour monter vos blancs en neige sans effort.",
        dispo: true
    },
    {
        id: 49,
        nom: "Mixeur à Sec Compact Performance",
        prix: "4 500",
        image: "mixeurasec.jpg",
        tags: "électronique, cuisine, mixeur, broyeur, maison",
        description: "Broyez vos épices et grains en un clin d'œil. Puissant et compact pour un gain de place assuré en cuisine.",
        dispo: true
    },
    {
        id: 50,
        nom: "Moulin de Cuisine Bardefu Inox",
        prix: "17 500",
        image: "moulin-bardefu.jpg",
        tags: "électronique, cuisine, moulin, épices, professionnel",
        description: "La robustesse de l'inox pour vos broyages difficiles. Un moteur pro pour une utilisation intensive au quotidien.",
        dispo: true
    },
    {
        id: 51,
        nom: "Mixeur Moulinex 2-en-1 Multifonctions",
        prix: "13 000",
        image: "moulinex2en1.jpg",
        tags: "électronique, cuisine, mixeur, blender, maison",
        description: "L'incontournable de la cuisine. Préparez soupes, jus et sauces avec la fiabilité légendaire de Moulinex.",
        dispo: true
    },
    {
        id: 52,
        nom: "Parfum Now",
        prix: "5 500",
        image: "Now.jpg",
        tags: "maison, salon, meuble, décoration, luxe",
        description: "Vivez l'instant présent. Une fragrance dynamique et fraîche qui laisse un sillage mémorable derrière vous.",
        dispo: true
    },
    {
        id: 53,
        nom: "Casque Audio Bluetooth P35 Bass Edition",
        prix: "5 000",
        image: "p35.jpg",
        tags: "électronique, audio, musique, casque, sans-fil",
        description: "Le son pur sans les câbles. Profitez d'une autonomie généreuse pour écouter vos playlists toute la journée.",
        dispo: true
    },
    {
        id: 54,
        nom: "Eau de Parfum Lune de Dubaï Élégance",
        prix: "2 500",
        image: "parfum-lune.jpg",
        tags: "beauté, parfum, luxe, femme, cosmétique",
        description: "Un voyage sensoriel vers l'Orient. Des notes précieuses pour une élégance affirmée à chaque pulvérisation.",
        dispo: true
    },
    {
        id: 55,
        nom: "Parfum Yara Rose Lattafa Oriental",
        prix: "5 000",
        image: "parfum-yara.jpg",
        tags: "beauté, parfum, luxe, femme, yara",
        description: "La douceur incarnée. Une fragrance gourmande et florale qui fait l'unanimité auprès des femmes raffinées.",
        dispo: true
    },
    {
        id: 56,
        nom: "Parfum 24K Pure Gold Luxury Edition",
        prix: "3 000",
        image: "parfum24K.jpg",
        tags: "beauté, parfum, luxe, or, prestige",
        description: "L'odeur du succès. Un parfum riche et intense pour ceux qui aiment marquer leur présence avec prestige.",
        dispo: true
    },
    {
        id: 57,
        nom: "Plaque Chauffante Électrique Individuelle",
        prix: "8 500",
        image: "plaque-chauf.jpg",
        tags: "électronique, cuisine, électroménager, cuisson, maison",
        description: "Cuisinez partout en toute simplicité. Une plaque d'appoint rapide à chauffer, idéale pour les petits espaces.",
        dispo: true
    },
    {
        id: 58,
        nom: "Plaque de Cuisson Double Foyer Performance",
        prix: "8 500",
        image: "plaque2foyer.jpg",
        tags: "électronique, cuisine, électroménager, cuisson, pro",
        description: "Deux fois plus efficace. Gérez deux cuissons simultanément avec précision et sécurité.",
        dispo: true
    },
    {
        id: 59,
        nom: "Meuble Porte-Chaussures Compact 6 Niveaux",
        prix: "7 500",
        image: "portechaussure.jpg",
        tags: "maison, rangement, meuble, organisation, chaussures",
        description: "Organisez vos paires avec style. Un format vertical qui permet de ranger de nombreuses chaussures sur un petit espace.",
        dispo: true
    },
    {
        id: 60,
        nom: "Powerbank 20 000 mAh Charge Rapide",
        prix: "6 000",
        image: "powerbank20k.jpg",
        tags: "électronique, accessoire, téléphone, batterie, voyage",
        description: "Ne tombez plus jamais en panne. Plusieurs charges complètes pour votre téléphone, idéal pour les longs trajets.",
        dispo: true
    },
    {
        id: 61,
        nom: "Rallonge Électrique Multiprise Sécurisée",
        prix: "5 000",
        image: "rallonge.jpg",
        tags: "électronique, maison, électricité, accessoire, bureau",
        description: "Branchez tous vos appareils sans risque. Une protection intégrée contre les surtensions pour vos équipements fragiles.",
        dispo: true
    },
    {
        id: 62,
        nom: "Ring Light LED avec Trépied pour Créateur",
        prix: "7 500",
        image: "right-light.jpg",
        tags: "électronique, vidéo, lumière, influenceur, accessoires",
        description: "L'éclairage parfait pour vos contenus. Un visage lumineux et des yeux pétillants pour tous vos lives et selfies.",
        dispo: true
    },
    {
        id: 63,
        nom: "Routeur WiFi 4G Airtel Haute Vitesse",
        prix: "9 000",
        image: "routeur-Airtel.jpg",
        tags: "électronique, internet, wifi, réseau, informatique",
        description: "Restez connecté à haute vitesse. Partagez votre connexion avec toute la famille ou au bureau sans ralentissement.",
        dispo: true
    },
    {
        id: 64,
        nom: "Eau de Parfum Sauvage Luxury Edition",
        prix: "3 000",
        image: "sauvage.jpg",
        tags: "beauté, parfum, luxe, homme, cosmétique",
        description: "La puissance au masculin. Une odeur fraîche et brute qui inspire l'aventure et la liberté.",
        dispo: true
    },
    {
        id: 65,
        nom: "Ensemble Serviettes de Bain 3-en-1 Coton",
        prix: "5 000",
        image: "serviette3en1.jpg",
        tags: "maison, salle de bain, hygiène, textile, confort",
        description: "La douceur du coton à la sortie du bain. Absorbantes et résistantes, elles apportent une touche hôtel à votre salle de bain.",
        dispo: true
    },
    {
        id: 66,
        nom: "Tondeuse de Coupe Professionnelle Gold Edition",
        prix: "6 500",
        image: "tondeuse.jpg",
        tags: "beauté, homme, rasage, électronique, coiffure",
        description: "La précision d'un barbier chez vous. Un moteur puissant et des lames affûtées pour une coupe nette sans irritation.",
        dispo: true
    },
    {
        id: 67,
        nom: "Trépied Professionnel Ajustable 1m70",
        prix: "4 500",
        image: "trepieds1m7.jpg",
        tags: "électronique, vidéo, photo, accessoire, trépied",
        description: "La stabilité pour vos photos. Réglable en hauteur pour capturer le meilleur angle avec votre appareil ou smartphone.",
        dispo: true
    },
    {
        id: 68,
        nom: "Grand Trépied Renforcé 2m00",
        prix: "8 500",
        image: "trepieds2m.jpg",
        tags: "électronique, vidéo, photo, pro, trépied",
        description: "Le choix des pros. Une structure robuste qui supporte les équipements lourds pour des prises de vue parfaites.",
        dispo: true
    },
    {
        id: 69,
        nom: "Ventilateur Solaire avec Panneau Intégré",
        prix: "9 500",
        image: "ventilo-solaire.jpg",
        tags: "électronique, maison, solaire, ventilateur, énergie",
        description: "Restez au frais gratuitement. Profitez d'une brise rafraîchissante même en cas de coupure d'électricité.",
        dispo: true
    },
    {
        id: 70,
        nom: "Ventilateur Double Pale Haute Performance",
        prix: "10 500",
        image: "ventilo2batt.jpg",
        tags: "électronique, maison, fraîcheur, ventilateur",
        description: "Une puissance de souffle décuplée. Son système double pale couvre une large surface pour un confort maximal.",
        dispo: true
    },
    {
        id: 71,
        nom: "Ventilateur Roch sur Pied Puissant",
        prix: "10 000",
        image: "ventiloRoch.jpg",
        tags: "électronique, maison, roch, fraîcheur, ventilateur",
        description: "La fiabilité Roch pour votre intérieur. Silencieux et performant pour vous garantir des nuits paisibles.",
        dispo: true
    },
    {
        id: 72,
        nom: "Parfum 'Yes I Can'",
        prix: "2 500",
        image: "YesICan.jpg",
        tags: "maison, salon, meuble, décoration, luxe",
        description: "L'odeur de la détermination. Un parfum audacieux qui booste votre confiance dès le matin.",
        dispo: true
    },
    {
        id: 73,
        nom: "Armoire 4 Battants Moderne",
        prix: "25 000",
        tags: "maison meuble armoire rangement chambre",
        image: "armoire4battants.jpg",
        description: "Une armoire spacieuse avec 4 battants pour un rangement optimal de vos vêtements.",
        dispo: true
    },
    {
        id: 74,
        nom: "Basket New balance Nouvelle Collection",
        prix: "11 500",
        tags: "mode chaussure basket New balance sport",
        image: "basket-N1.jpg",
        description: "Découvrez la nouvelle collection New balance avec un confort ultime pour vos entraînements.",
        dispo: true
    },
    {
        id: 75,
        nom: "Parfum Brume",
        prix: "1 500",
        tags: "parfum beauté femme cosmétique brume",
        image: "brume.jpg",
        description: "Une brume légère et rafraîchissante pour une touche de fraîcheur estivale.",
        dispo: true
    },
    {
        id: 76,
        nom: "Basket New balance Collection N2",
        prix: "11 500",
        tags: "mode chaussure basket New balance sport",
        image: "basket-N2.jpg",
        description: "Chaussures de sport New balance avec un design moderne et un amorti exceptionnel.",
        dispo: true
    },
    {
        id: 77,
        nom: "Basket New balance Collection N3",
        prix: "11 500",
        tags: "mode chaussure basket New balance sport",
        image: "basket-N3.jpg",
        description: "Modèle New balance offrant confort et style pour vos activités quotidiennes.",
        dispo: true
    },
    {
        id: 78,
        nom: "Basket Collection N4",
        prix: "11 500",
        tags: "mode chaussure basket nike sport",
        image: "basket-N4.jpg",
        description: "Baskets légères et résistantes, parfaites pour le sport et la mode.",
        dispo: false
    },
    {
        id: 79,
        nom: "Basket New balance Nouvelle Édition",
        prix: "13 000",
        tags: "mode chaussure basket New balance sport",
        image: "basket-new.jpg",
        description: "Nouvelle édition New balance avec technologie avancée pour une performance optimale.",
        dispo: true
    },
    {
        id: 80,
        nom: "Basket New balance Nouvelle Édition 2",
        prix: "13 000",
        tags: "mode chaussure basket New balance sport",
        image: "basket-new2.jpg",
        description: "Version améliorée des baskets New balance, idéale pour les amateurs de basket.",
        dispo: true
    },
    {
        id: 81,
        nom: "Casserole Acier Inoxydable",
        prix: "15 000",
        tags: "cuisine maison casserole inox",
        image: "casserole-acier.jpg",
        description: "Casserole en acier inoxydable durable pour une cuisson saine et rapide.",
        dispo: false
    },
    {
        id: 82,
        nom: "Lot de 3 Casseroles + poele et louches",
        prix: "9 000",
        tags: "cuisine maison casserole lot inox",
        image: "casserole-lot8.jpg",
        description: "Ensemble de 3 casseroles+ poele et louches en inox pour équiper votre cuisine.",
        dispo: true
    },
    {
        id: 83,
        nom: "Chaussures Classiques Confortables",
        prix: "16 000",
        tags: "mode chaussure sport confort",
        image: "chaussure.jpg",
        description: "Chaussures confortables pour le sport et les sorties quotidiennes.",
        dispo: true
    },
    {
        id: 84,
        nom: "Complet Homme Classique",
        prix: "10 000",
        tags: "mode vêtement homme complet",
        image: "complet.jpg",
        description: "Costume classique pour homme, élégant et professionnel.",
        dispo: true
    },
    {
        id: 85,
        nom: "Complet femme Moderne",
        prix: "10 000",
        tags: "mode vêtement homme complet",
        image: "complet1.jpg",
        description: "Complet moderne avec coupe ajustée pour un look raffiné.",
        dispo: true
    },
    {
        id: 86,
        nom: "Complet Femme Élégant",
        prix: "10 000",
        tags: "mode vêtement homme complet",
        image: "complet2.jpg",
        description: "Complet élégant pour occasions spéciales, tissu de qualité.",
        dispo: true
    },
    {
        id: 87,
        nom: "Montre Connectée Avancée",
        prix: "5 500",
        tags: "electronique montre connecté smartwatch",
        image: "connecté.jpg",
        description: "Montre connectée avec suivi santé et notifications.",
        dispo: true
    },
    {
        id: 88,
        nom: "Distributeur de jus avec woofer intégré",
        prix: "9 000",
        tags: "electronique distributeur automatique",
        image: "distributeur.jpg",
        description: "Distributeur automatique pour boissons ou snacks.Veilleuse en plus d'enceinte woofer pour une ambiance sonore agréable.",
        dispo: true
    },
    {
        id: 89,
        nom: "Foyer Électrique",
        prix: "8 500",
        tags: "maison chauffage foyer electrique",
        image: "foyer.jpg",
        description: "Foyer électrique, plaque chaufante pour cuisiner avec sécurité.",
        dispo: true
    },
    {
        id: 90,
        nom: "Gourde Numérique",
        prix: "3 500",
        tags: "sport gourde numérique hydratation",
        image: "gourde-numérique.jpg",
        description: "Gourde avec affichage numérique pour suivre votre hydratation.",
        dispo: true
    },
    {
        id: 91,
        nom: "Gourde Thermos Isolante",
        prix: "3 500",
        tags: "sport gourde thermos isolation",
        image: "gourde-thermos.jpg",
        description: "Gourde thermos pour garder vos boissons chaudes ou froides.",
        dispo: true
    },
    {
        id: 92,
        nom: "Grand Miroir Décoratif",
        prix: "12 500",
        tags: "maison décoration miroir salon mirer",
        image: "grand-miroire.jpg",
        description: "Grand miroir décoratif d'intérieur pour agrandir visuellement votre espace et vous mirer.",
        dispo: true
    },
    {
        id: 93,
        nom: "Guéridon 2 en 1 Multifonction",
        prix: "23 000",
        tags: "maison meuble guéridon rangement salon",
        image: "gueridon2en1.jpg",
        description: "Guéridon avec rangement intégré, pratique et élégant.",
        dispo: true
    },
    {
        id: 94,
        nom: "Jogging Adidas Original",
        prix: "13 000",
        tags: "mode vêtement jogging sport adidas",
        image: "joggingadds.jpg",
        description: "Jogging confortable Adidas pour vos séances de sport.",
        dispo: true
    },
    {
        id: 95,
        nom: "Jogging Adidas Style 1",
        prix: "13 000",
        tags: "mode vêtement jogging sport adidas",
        image: "joggingadds1.jpg",
        description: "Jogging Adidas avec design moderne et tissu respirant.",
        dispo: true
    },
    {
        id: 96,
        nom: "Jogging Adidas Style 2",
        prix: "13 000",
        tags: "mode vêtement jogging sport adidas",
        image: "joggingadds2.jpg",
        description: "Version stylée du jogging Adidas pour un look casual.",
        dispo: true
    },
    {
        id: 97,
        nom: "Jogging Nike Performance",
        prix: "13 000",
        tags: "mode vêtement jogging sport nike",
        image: "joggingnike.jpg",
        description: "Jogging Nike haute performance pour les athlètes.",
        dispo: true
    },
    {
        id: 98,
        nom: "Lampadaire solaire LED 100W",
        prix: "12 500",
        tags: "maison éclairage lampe led lumiere éclairage",
        image: "lampe-100W.jpg",
        description: "Lampe LED puissante pour éclairer votre extértieur.",
        dispo: true
    },
    {
        id: 99,
        nom: "Mini Ventilateur Portable",
        prix: "4 500",
        tags: "maison ventilateur mini portable chambre chaleur vent air",
        image: "mini-ventilo.jpg",
        description: "Ventilateur compact et portable pour une brise fraîche partout.",
        dispo: true
    },
    {
        id: 100,
        nom: "Blender Silver crest a 2 bocaux 12 000 Watt ",
        prix: "12 500",
        tags: "cuisine blender électroménager",
        image: "blender.jpg",
        description: "Blender professionnel pour préparer vos smoothies et cocktails.",
        dispo: false
    },
    {
        id: 101,
        nom: "Papier Peint Décoratif de 60cm sur 10cm",
        prix: "4 500",
        tags: "maison décoration papier peint mur salon",
        image: "papier-peint.jpg",
        description: "Papier peint pour personnaliser vos murs avec style.",
        dispo: true
    },
    {
        id: 102,
        nom: "Parfum 9PM Élégance",
        prix: "2 500",
        tags: "parfum beauté femme cosmétique",
        image: "parfum9pm.jpg",
        description: "Parfum 9PM avec notes florales pour une soirée inoubliable.",
        dispo: true
    },
    {
        id: 103,
        nom: "Sac à Main Pedra",
        prix: "10 000",
        tags: "mode accessoire sac main luxe femme",
        image: "pedra.jpg",
        description: "Sac à main Pedra, élégant et spacieux.",
        dispo: true
    },
    {
        id: 104,
        nom: "Sac à Main Pedra Style 1",
        prix: "10 000",
        tags: "mode accessoire sac main luxe femme",
        image: "pedra1.jpg",
        description: "Version moderne du sac Pedra, parfaite pour tous les jours.",
        dispo: true
    },
    {
        id: 105,
        nom: "Sac à Main Pedra Style 2",
        prix: "10 000",
        tags: "mode accessoire sac main luxe femme",
        image: "pedra2.jpg",
        description: "Sac Pedra avec design unique et matériaux de qualité.",
        dispo: true
    },
    {
        id: 106,
        nom: "Sac à Main Pedra Luxe",
        prix: "10 000",
        tags: "mode accessoire sac main luxe femme",
        image: "pedra3.jpg",
        description: "Sac de luxe Pedra pour occasions spéciales.",
        dispo: true
    },
    {
        id: 107,
        nom: "Plat Carré Céramique lot de 6",
        prix: "6 500",
        tags: "cuisine vaisselle plat céramique",
        image: "platcarre.jpg",
        description: "Plat carré en céramique pour vos présentations culinaires.",
        dispo: true
    },
    {
        id: 108,
        nom: "Plat en Forme de Cœur lot de 6",
        prix: "6 500",
        tags: "cuisine vaisselle plat décoration",
        image: "platcoeur.jpg",
        description: "Plat en forme de cœur, idéal pour des repas romantiques.",
        dispo: true
    },
    {
        id: 109,
        nom: "Plat Floral Décoratif lot de 6",
        prix: "4 200",
        tags: "cuisine vaisselle plat floral",
        image: "platfleuri.jpg",
        description: "Plat avec motifs floraux pour embellir votre table.",
        dispo: true
    },
    {
        id: 110,
        nom: "Machine à Popcorn",
        prix: "7 000",
        tags: "cuisine popcorn machine electrique",
        image: "popcorn.jpg",
        description: "Machine à popcorn électrique pour des soirées cinéma à domicile.",
        dispo: true
    },
    {
        id: 111,
        nom: "Powerbank Portable 40 000mah",
        prix: "6 000",
        tags: "electronique powerbank batterie portable recharge",
        image: "powerbank.jpg",
        description: "Powerbank pour recharger vos appareils en déplacement.",
        dispo: true
    },
    {
        id: 112,
        nom: "Range-Chaussures Compact 9 niveaux",
        prix: "9 000",
        tags: "maison rangement chaussure armoire",
        image: "range-chauss.jpg",
        description: "Range-chaussures pour organiser vos paires élégamment.",
        dispo: true
    },
    {
        id: 113,
        nom: "Répéteur WiFi",
        prix: "5 500",
        tags: "electronique wifi répéteur réseau",
        image: "repeteur.jpg",
        description: "Répéteur WiFi pour étendre la couverture de votre réseau.",
        dispo: true
    },
    {
        id: 114,
        nom: "Sac à Main CHRISBELLA",
        prix: "19 000",
        tags: "mode accessoire sac main",
        image: "sac-main.jpg",
        description: "Sac à main élégant pour toutes occasions.Idéal pour les femmes élégantes et modernes.",
        dispo: true
    },
    {
        id: 115,
        nom: "Sac à Main CHRISBELLA",
        prix: "19 000",
        tags: "mode accessoire sac main",
        image: "sac-main2.jpg",
        description: "Sac à main moderne avec design contemporain.Idéal pour les femmes élégantes et modernes.",
        dispo: true
    },
    {
        id: 116,
        nom: "Sac a main de luxe",
        prix: "17 000",
        tags: "femme accessoire sac a main",
        image: "sac.jpg",
        description: "Sac a main spacieux et résistant.Idéal pour les femmes élégantes et modernes.",
        dispo: true
    },
    {
        id: 117,
        nom: "Appareil Silvercrest",
        prix: "12 000",
        tags: "electronique appareil silvercrest moulinex écraser fruit ",
        image: "silvercrest.jpg",
        description: "Appareil Moulinex multifonction Blender Silvercrest pour la maison.",
        dispo: true
    },
    {
        id: 118,
        nom: "Ventilateur Climatisé",
        prix: "5 500",
        tags: "maison climatisation ventilateur",
        image: "vent-clim.jpg",
        description: "Ventilateur avec fonction climatisation pour un confort optimal.",
        dispo: true
    },
    {
        id: 119,
        nom: "Verre à Champagne",
        prix: "6 500",
        tags: "cuisine vaisselle verre champagne",
        image: "verre-champagne.jpg",
        description: "Verre à champagne élégant pour vos célébrations.",
        dispo: true
    },
    {
        id: 120,
        nom: "Talon YSL Collection 2",
        prix: "21 000",
        tags: "parfum beauté luxe ysl",
        image: "ysl (2).jpg",
        description: "Parfum YSL avec notes sophistiquées.",
        dispo: true
    },
    {
        id: 121,
        nom: "Basket New balance Nouvelle Édition 3",
        prix: "13 000",
        tags: "mode chaussure basket new balance sport",
        image: "basket-new3.jpg",
        description: "Édition limitée New balance avec innovations technologiques.",
        dispo: true
    },
    {
        id: 122,
        nom: "Basket New balance Nouvelle Édition 4",
        prix: "13 000",
        tags: "mode chaussure basket new balance sport",
        image: "basket-new4.jpg",
        description: "Baskets New balance pour un confort durable et un style unique.",
        dispo: true
    },
    {
        id: 123,
        nom: "Basket New balance Nouvelle Édition 5",
        prix: "13 000",
        tags: "mode chaussure basket new balance sport",
        image: "basket-new5.jpg",
        description: "La dernière édition New balance, parfaite pour les passionnés.",
        dispo: true
    },
    {
        id: 124,
        nom: "Talon YSL Classique",
        prix: "21 000",
        tags: "parfum beauté luxe ysl",
        image: "YSL.jpg",
        description: "Parfum YSL classique, intemporel et raffiné.",
        dispo: true
    },
    {
        id: 125,
        nom: "Talon YSL Collection 3",
        prix: "21 000",
        tags: "parfum beauté luxe ysl",
        image: "ysl3.jpg",
        description: "Nouvelle fragrance YSL pour une élégance moderne.",
        dispo: true
    },
    {
        id: 126,
        nom: "Talon YSL Collection 4",
        prix: "21 000",
        tags: "parfum beauté luxe ysl",
        image: "ysl4.jpg",
        description: "Parfum YSL avec une touche d'exotisme.",
        dispo: true
    }
];

// 2. FONCTION POUR AFFICHER LES PRODUITS
function afficherProduits(liste) {
    const grid = document.getElementById('productGrid');
    if(!grid) return;
    grid.innerHTML = ""; 

    liste.forEach(p => {
        
        const cardClass = p.dispo ? "" : "outofstock-card";
        const statusClass = p.dispo ? "instock" : "outofstock";
        const statusText = p.dispo ? "✔ En Stock" : "✘ Rupture de stock";
        const btnClass = p.dispo ? "" : "disabled";
        const btnText = p.dispo ? "Commander sur WhatsApp" : "Bientôt de retour";
        const btnUrl = p.dispo ? `https://wa.me/2290157129474?text=Bonjour Amaterasu Shop, je veux commander : ${p.nom}` : "#";
        const cheminImage = `image/${p.image}`;
        const description = p.description || "Découvrez ce produit exceptionnel chez Amaterasu Shop.";
        const card = `
            <div class="product-card ${cardClass}" data-name="${p.nom}" data-tags="${p.tags}">
                <img src="${cheminImage}" alt="${p.nom}" class="product-img" style="cursor: zoom-in;" onclick="openModal('${cheminImage}', '${p.nom}')" loading="lazy">
                <div class="product-info">
                    <span class="status ${statusClass}">${statusText}</span>
                    <h3>${p.nom}</h3>
                    <p style="font-size: 0.8rem; color: #666; margin: 5px 0;">${description}</p>
                    <p class="price">${p.prix} FCFA</p>
                    <a href="${btnUrl}" class="btn-whatsapp ${btnClass}">
                       ${btnText}
                    </a>
                </div>
            </div>
        `;
        grid.innerHTML += card;
    });
}

// 3. LANCEMENT INITIAL
document.addEventListener('DOMContentLoaded', () => {
    afficherProduits(produits);
});

// 4. SYSTÈME DE RECHERCHE & CATÉGORIES (Adapté au template)
function applyFilters(query) {
    const filtered = produits.filter(p => 
        p.nom.toLowerCase().includes(query) || 
        p.tags.toLowerCase().includes(query)
    );
    afficherProduits(filtered);
}

function filterCategory(cat) {
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    if(cat === 'all') {
        afficherProduits(produits);
    } else {
        const filtered = produits.filter(p => p.tags.includes(cat));
        afficherProduits(filtered);
    }
}

// Retour en haut (garde ton code précédent ici)
function filterProducts() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.querySelectorAll('.product-card');
    let container = document.getElementById('productGrid');
    
    cards.forEach(card => {
        let name = card.getAttribute('data-name').toLowerCase();
        let tags = card.getAttribute('data-tags').toLowerCase();
        
        // Si moins de 2 lettres, on affiche tout sans tri
        if (input.length < 2) {
            card.style.display = "block";
            card.style.order = "0"; 
            return;
        }

        // 1. Match exact dans le NOM (Priorité 1)
        if (name.includes(input)) {
            card.style.display = "block";
            card.style.order = "1";
        } 
        // 2. Match dans les TAGS (Priorité 2)
        else if (tags.includes(input)) {
            card.style.display = "block";
            card.style.order = "2";
        } 
        // 3. Aucun match
        else {
            card.style.display = "none";
        }
    });
}
// FONCTION DE RECHERCHE EXISTANTE (Améliorée)
function filterProducts() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    applyFilters(input);
}

// NOUVELLE FONCTION POUR LES CATÉGORIES
function filterCategory(catName) {
    // Gérer l'apparence des boutons
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    let input = (catName === 'all') ? "" : catName;
    document.getElementById('searchInput').value = input; // Remplit la barre pour feedback visuel
    applyFilters(input.toLowerCase());
}

// LOGIQUE COMMUNE DE FILTRAGE
function applyFilters(query) {
    let cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        let name = card.getAttribute('data-name').toLowerCase();
        let tags = card.getAttribute('data-tags').toLowerCase();
        
        if (name.includes(query) || tags.includes(query)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// GESTION DU BOUTON RETOUR EN HAUT
window.onscroll = function() {
    let btn = document.getElementById("backToTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
function sortProducts() {
    let criteria = document.getElementById('sortPrice').value;
    let produitsTries = [...produits]; // On copie la liste originale

    if (criteria !== "default") {
        produitsTries.sort((a, b) => {
            // On enlève les espaces dans le prix et on convertit en nombre
            let prixA = parseInt(a.prix.replace(/\s/g, ''));
            let prixB = parseInt(b.prix.replace(/\s/g, ''));

            if (criteria === "low") {
                return prixA - prixB; // Du moins cher au plus cher
            } else {
                return prixB - prixA; // Du plus cher au moins cher
            }
        });
    }

    // On ré-affiche la liste triée
    afficherProduits(produitsTries);
}
// FONCTION POUR OUVRIR L'IMAGE EN GRAND
function openModal(src, title) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("fullImage");
    const captionText = document.getElementById("caption");
    
    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = title;
}

// FONCTION POUR FERMER
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

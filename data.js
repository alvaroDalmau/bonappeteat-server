const data = [
  {
    name: 'Ta Chien Restaurant',
    description:
      'We are the first Chinese restaurant to open in Deusto, we have been with our customers for 40 years.',
    images: [
      'https://live.mrf.io/statics/i/ps/www.cocinacaserayfacil.net/wp-content/uploads/2019/11/Comida-china.jpg?width=1200&enable=upscale',
      'https://rs-menus-api.roocdn.com/images/ac80832f-46f1-4198-b3d3-3a0ae20082eb/image.jpeg?width=1200&height=630&auto=webp&format=jpg&fit=crop&v=',
      'https://www.animalgourmet.com/wp-content/uploads/2017/01/dumplings2-e1513610872911.jpg',
    ],
    location: [43.27176, -2.95059],
    category: 'Chinese',
  },
  {
    name: 'Namaste Restaurant',
    description:
      'Indian-Nepali restaurant serving delicious homemade food with typical Nepalese and Indian flavor. Independent and family-run restaurant serving original and local curries and starters / “snacks” in a cheerful and welcoming atmosphere.',
    images: [
      'https://scontent.fmad16-1.fna.fbcdn.net/v/t1.0-9/102335750_103289954755028_1181104390268487179_o.jpg?_nc_cat=102&ccb=3&_nc_sid=e3f864&_nc_ohc=0T6XDZFffzIAX-Tfqn5&_nc_ht=scontent.fmad16-1.fna&oh=b68dc9ff4089802606a971dbfb330f4a&oe=6064ABF6',
      'https://scontent.fmad16-1.fna.fbcdn.net/v/t1.0-9/84282892_131311225286234_8019179816473276771_n.jpg?_nc_cat=100&ccb=3&_nc_sid=8bfeb9&_nc_ohc=M9p0k95BfvQAX9yF0AB&_nc_ht=scontent.fmad16-1.fna&oh=55394b01b967994c3b25b40c6ce8b6c3&oe=6066BC82',
      'https://scontent.fmad16-1.fna.fbcdn.net/v/t1.0-9/106549241_131311211952902_8228797365516229956_n.jpg?_nc_cat=102&ccb=3&_nc_sid=8bfeb9&_nc_ohc=EX3dD83qN_EAX9I8F8h&_nc_ht=scontent.fmad16-1.fna&oh=ca2046b8ff82990a6de518ebc63872df&oe=6065B6D6',
    ],
    location: [43.26009, -2.93265],
    category: 'Indian',
  },
  {
    name: 'La Brasa Canalla',
    description: 'The best burguer ever',
    images: [
      'https://www.lamejorchuletadebilbao.com/wp-content/uploads/2018/01/la-brasa-canalla-2-900676.jpg',
      'https://static1.abc.es/media/viajar/2019/05/24/new-york-burger-kl5--620x349@abc.jpg',
      'https://gourmetdemexico.com.mx/wp-content/uploads/2016/11/field_image_head_hamburguesas_eu.jpg',
    ],
    location: [43.26009, -2.935],
    category: 'Burguer',
  },
  {
    name: 'Casa Leotta',
    description: 'Best pizzas ever in Bilbáu, la ostia!',
    images: [
      'https://verybilbao.com/wp-content/uploads/2018/01/casa-leotta-10-1024x683.jpg',
      'https://www.casaleotta.es/webtemp/slider4.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/11/ab/f6/c5/pinsas.jpg',
    ],
    location: [43.26009, -2.93265],
    category: 'Italian',
  },
  {
    name: 'Atelier Etxanobe',
    description:
      'A contemporary restaurant which is both intimate and elegant, where the focus is on modern cooking and top-quality ingredients, in particular fish. The chef here is constantly looking to surprise guests, hence his desire to work with textures, flavours and the very latest technology.',
    images: [
      'https://atelieretxanobe.com/files/2017/11/atelieretxanobetrip-2000x1200.jpg',
      'http://lariadelocio.es/wp-content/uploads/2019/05/atelier.jpg',
      'https://static2.elcorreo.com/www/multimedia/201803/02/media/cortadas/atelier%20(2)-k9fE-U501144032483cwB-624x385@El%20Correo.jpg',
    ],
    location: [43.264, -2.93265],
    category: 'Spanish',
  },
  {
    name: 'El Bulli Restaurant',
    description:
      'El Bulli Restaurant is one of the most famous restaurant in the world, located on an amazing setting near the town of Roses in Catalonia, Spain. It is one of the Michelin restaurants which is famous as one of those which practices a new branch of gastronomy, molecular gastronomy. The restaurant has an incredible location high in the mountains, in one of the historic buildings, and it was opened in the mid 1960s. The name of the restaurant comes from the French word meaning The Bulldog and the first owners of the facility had a dog. The restaurant is really popular and it is usually booked. Due to its unique history and amazing location, El Bulli appeared in a few movies and there was a documentary filmed about this restaurant.',
    images: [
      'http://www.paseodegracia.com/wp-content/uploads/2012/02/ElBulli_PalauRobert3-600x393.jpg',
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fd500.epimg.net%2Fcincodias%2Fimagenes%2F2016%2F11%2F18%2Fsentidos%2F1479500512_454558_1479500604_noticia_normal.jpg&imgrefurl=https%3A%2F%2Fcincodias.elpais.com%2Fcincodias%2F2016%2F11%2F18%2Fsentidos%2F1479500512_454558.html&tbnid=e88CfyIbgqzYBM&vet=10CAUQxiAoA2oXChMIgO3csuGo7wIVAAAAAB0AAAAAEAc..i&docid=DNIKYMuepyVrCM&w=664&h=387&itg=1&q=el%20bulli%20restaurant&ved=0CAUQxiAoA2oXChMIgO3csuGo7wIVAAAAAB0AAAAAEAc',
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fd500.epimg.net%2Fcincodias%2Fimagenes%2F2016%2F11%2F18%2Fsentidos%2F1479500512_454558_1479500604_noticia_normal.jpg&imgrefurl=https%3A%2F%2Fcincodias.elpais.com%2Fcincodias%2F2016%2F11%2F18%2Fsentidos%2F1479500512_454558.html&tbnid=e88CfyIbgqzYBM&vet=10CAUQxiAoA2oXChMIgO3csuGo7wIVAAAAAB0AAAAAEAc..i&docid=DNIKYMuepyVrCM&w=664&h=387&itg=1&q=el%20bulli%20restaurant&ved=0CAUQxiAoA2oXChMIgO3csuGo7wIVAAAAAB0AAAAAEAc#imgrc=e88CfyIbgqzYBM&imgdii=UP51VYpus6AdZM',
    ],
    location: [42.25, 3.226389],
    category: 'Spanish',
  },
  {
    name: 'Azurmendi',
    description:
      'Azurmendi is a famous restaurant and dining facility situated in Larrabetzu, one of the outskirts of the city of Bilbao in the region of Basques in northern Spain. The restaurant is known as one of the best ones serving the best Basque cuisine, with a large variety of dishes and great world-quality services. Visiting the restaurant is a great experience which helps the guests to get closer to the interesting and unique culture of the people of the Basque region. The restaurant was opened over a decade ago and it has a great location, on a peace and quiet setting. Azurmendi is a really popular spot and it is usually visited by a large number of people. Thus, those who want to enjoy a meal in this restaurant should book it in advance.',
    images: [
      'https://static1.abc.es/Media/201505/08/bogavante-azurmendi--644x362.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0egtgJTyai_-at6w5yIKrdQvlS55X0a7t7A&usqp=CAU',
      'https://i.pinimg.com/originals/94/1b/f4/941bf4282a870ff9d3677adffe357994.jpg',
    ],
    location: [43.260368, -2.815378],
    category: 'Spanish',
  },
  {
    name: 'El Celler de Can Roca',
    description:
      'El Celler de Can Roca is a very famous restaurant and a luxury dinning facility located in the city of Girona, the province of Catalonia, the north eastern Spain. It is a very famous catering facility opened in the mid 1980s by three brothers Roca who come from the family of chefs. For the time being, the restaurant has become of the most known one in the country, as well as in Europe, and is considered to be among Top 10 best restaurants in the world. In the late 2000s the location of the restaurant changed and it was relocated to a more modern building. Actually, the location of the facility is famous for its quietness and truly beautiful nature. As a rule, the tables in El Celler are reserved for months ahead.',
    images: [
      'https://www.bbva.com/wp-content/uploads/2019/11/Menu-de-BBVA-y-El-Celler-de-Can-Roca-para-la-Cumbre-del-Clima-Encurtidos.jpg',
      'https://lh3.googleusercontent.com/proxy/f0HzTA2KF1PNVc3_pxuA8Bz7hOf74f4vXZwMEVz692Re7XJV-S6SaCj70GdcB3seotAa-JlJ9tKVA3ckngPZ6RGsNiNE1KiDQogDBaeD_3ozmtFEUnakCKceEdpWoAzkE0u_c8WgET5gBJpe60bA7LWBY99DyxIOkYDKNA',
      'https://www.bbva.com/wp-content/uploads/2016/04/plato-celler-de-can-roca-bbva.png',
    ],
    location: [41.99329, 2.807959],
    category: 'Spanish',
  },
  {
    name: 'Trattoria Pulcinella',
    description:
      'Since 1993 dedicated body and soul to bringing the best of Italian gastronomy to Madrid.',
    images: [
      'https://media-cdn.tripadvisor.com/media/photo-s/19/10/79/97/trattoria-pulcinella.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUeOjQ-wOJuxLnfOgl_bsqjHmnYxTZtfXSSQ&usqp=CAU',
      'https://res.cloudinary.com/glovoapp/w_351,h_179,f_auto,q_auto/Stores/j8fhatnm41pssehn8t6a',
    ],
    location: [40.42753, -3.69502],
    category: 'Italian',
  },
  {
    name: 'Antonio of Italia Pavola',
    description:
      'From the window of this restaurant, the view of the Queen Sofia Arts Center (Museo Nacional Centro de Arte Reina Sofia) is wonderful. Italian and Mediterranean meals are worth it here. If you are hungry, come here for their perfectly made ravioli, their tender laing or their famous risotto. Taste a unique tiramisu or a well-prepared cake at Antonio of Italia a Tavola. Its great wine, its excellent spritz or its extraordinary limoncello will make your meal even more delicious, which is sure to keep you coming back.',
    images: [
      'https://media-cdn.tripadvisor.com/media/photo-s/19/43/df/46/simple-recipes-and-great.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyhwQG_Uhi2Owp1Inqysu4zA-KeyANCDp4Ig&usqp=CAU',
      'https://media-cdn.tripadvisor.com/media/photo-s/13/dc/02/d7/terraza-exterior.jpg',
    ],
    location: [40.46402, -3.86009],
    category: 'Italian',
  },
  {
    name: 'Oven Mozzarella Bar',
    description:
      'Get to know our menu of traditional Italian cuisine.Made with love and the best ingredients, you can enjoy a varied menu with the flavor of traditional Italian cuisine and the current Ôven touch.',
    images: [
      'https://media-cdn.tripadvisor.com/media/photo-s/0a/4b/20/fa/sala-oven-gran-via.jpg',
      'https://www.yosilose.com/wp-content/uploads/2019/06/Oven.jpg',
      'https://www.elattelier.com/wp-content/uploads/2015/12/El-Attelier_Oven-Mozarella_restaurante-oven-gran-v%C3%ADa_comida-italiana-1.png',
    ],
    location: [40.41879, -3.70702],
    category: 'Italian',
  },
  {
    name: 'Ming Asiatic',
    description:
      "Fabulous fusion of Japanese, Chinese, Thai and Vietnamese dishes for you to try in the centre of Alicante city. You can enjoy a buffet meal or a la carte with a great range of flavours from Asia. The buffet is a chance to choose up to five different plates to try and it's a fabulous price too. The buffet is great value for money particularly if you choose different dishes from your companions so you can share in the middle of the table.There is such a wide range of dishes so you can pick and mix your meal from around these great Asian cuisines. There is a choice of sushi, sashimi, tempura, teppanyaki, dim sum Thai curries, lemon chicken, Thai curries, and much more. You can choose vegetarian options, chicken, meat, prawns or lobster. ",
    images: [
      'https://media-cdn.tripadvisor.com/media/photo-s/08/08/a8/04/imperial-menu-and-hot.jpg',
      'https://cadenaser00.epimg.net/emisora/imagenes/2019/05/31/radio_jerez/1559290860_107240_1559811700_sumario_normal.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUfCWaXeaJCAcZhS7UEU403Z_4Cs53NR3LMA&usqp=CAU',
    ],
    location: [37.61411, -0.98826],
    category: 'Chinese',
  },
  {
    name: 'Ming Asiatic',
    description:
      'This is a very popular restaurant with Benidorm holidaymakers who like the variety, the quality of food and the great prices. As in most Chinese restaurants, the range of dishes on the menu is mind-boggling but there are set menus to help you if you are not sure exactly what you want.',
    images: [
      'https://images.myguide-cdn.com/alicante/companies/china-garden-at-benidorm/thumbs/china-garden-at-benidorm-37801.jpg',
      'https://images.myguide-cdn.com/alicante/companies/china-garden-at-benidorm/large/china-garden-at-benidorm-37800.jpg',
      'https://images.myguide-cdn.com/alicante/companies/china-garden-at-benidorm/thumbs/china-garden-at-benidorm-37802.jpg',
    ],
    location: [38.53732, -0.11628],
    category: 'Chinese',
  },
  {
    name: 'Catay',
    description:
      'Catay serves a delicious range of Chinese and Asian dishes in its extensive daily buffet so you can pick and mix your meal.Catay restaurant is the first Wok in Alicante and can be found in the Torre Golf shopping centre in San Juan de Alicante. It is an open and extensive buffet with all your favourite dishes such as sweet and sour, chow mein, and beef in black bean sauce as well as fresh salad ingredients and fresh vegetables. It is great value particularly for children. A buffet-style restaurant means you can try new dishes alongside your tried and tested favourite ones.',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0rbCBGEJJHm8Ae3GTD8Sqa6u-eRbo3ps7Tg&usqp=CAU',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/f4/2e/b9/comida.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTXaHN6ul1drkg6q4zfwaav0loHxRRTTbJ4g&usqp=CAU',
    ],
    location: [38.3674, -0.42227],
    category: 'Chinese',
  },
  {
    name: 'Nihao',
    description:
      'A bargain option just off Gran Vía, Nihao specialises in spicy Szechuan cuisine, which is characterised by the use of the Szechuan pepper. Nihao’s large dining area is usually full of Chinese people – always a good sign. Try its hot pot – a huge pot split in half, one half containing a spicy soup and the other a less spicy soup, that sits on a flame and bubbles at the table. Diners add different ingredients to the soups, from fish and meat to an array of vegetables before tucking into the delicious concoction.',
    images: [
      'https://www.comedera.com/wp-content/uploads/2016/04/berenjenas-restaurante-ni-hao.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8jW5pR5WKHg1cyJSJKCeiN4PShBnO3JU3YQ&usqp=CAU',
      'https://media-cdn.tripadvisor.com/media/photo-s/0f/d9/81/3b/photo0jpg.jpg',
    ],
    location: [40.49382, -3.66416],
    category: 'Chinese',
  },
  {
    name: 'Lamian by Soy Kitchen',
    description:
      'This stylish Chinese and Asian restaurant fuses eastern flavours with Spanish ingredients to create an interesting mix of inventive dishes. It specialises in lamian, a type of Chinese noodle that is often served in a broth. The restaurant is far-removed from the no frills Chinese locales common in the area around Plaza de España; decor is trendy and sleek. Dishes include the tongue-in-cheek named Jackie Chan is not Bruce Lee, that consists of oxtail in a rich broth of Szechuan peppers and miso.',
    images: [
      'https://www.esmadrid.com/sites/default/files/styles/content_type_full/public/lamian.jpg?itok=KRo17EDV',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLbDR5yud3mKzj3pQekgLnkxH5P0TfNmDYbw&usqp=CAU',
      'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2016/06/30/14672876791668.png',
    ],
    location: [40.43096, -3.71004],
    category: 'Chinese',
  },
  {
    name: 'Toy Panda',
    description:
      'This cool little restaurant, in the heart of Malasaña is a great place to sample some authentic Chinese dim sum, a style of Chinese cuisine prepared in bite sized portions. Try the xiaolongbao, a soup dumpling that originated in Shanghai. Toy Panda also does a good range of baos, steamed buns filled with different ingredients.',
    images: [
      'https://media-cdn.tripadvisor.com/media/photo-s/10/11/43/e7/baos-taiwaneses.jpg',
      'https://pbs.twimg.com/media/D3jy689XoAEwsDU.jpg',
      'https://madriddiferente.com/wp-content/uploads/2016/01/Toy-Panda-01-770x466.jpg',
    ],
    location: [40.42753, -3.69502],
    category: 'Chinese',
  },
  {
    name: 'Ming Restaurant',
    description:
      'Are you looking for a Chinese restaurant in Seville? In Ming Restaurant we offer you the opportunity to enjoy the most traditional dishes of our cuisine, giving you the possibility of entering a culture with millennia of antiquity without leaving the heart of the city, since you can find us in José Luis Luque street, at number 2, just in front of the Setas de la Encarnación. Contact us to make your reservation and you will be delighted with a unique gastronomic experience!',
    images: [
      'https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_800,c_limit/customer/55edc486-f664-4b2a-aa69-0f9e060c0a53/6dc52c1e-f181-4bdf-a53c-25a54e9876a4.jpg',
      'https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_800,c_limit/customer/55edc486-f664-4b2a-aa69-0f9e060c0a53/7e5f8c32-f834-4974-9a9e-4712079596b9.jpg',
      'https://res.cloudinary.com/glovoapp/w_1200,f_auto,q_auto/Stores/uy5tvrzzgpd2jjbt7lev',
    ],
    location: [37.39413, -5.98936],
    category: 'Chinese',
  },
  {
    name: 'KingDo Lite',
    description:
      "Our kitchen brings you the tastiest specialties of Asian cuisine in a modern and cozy atmosphere.Our menu has soups, rice, pasta and all kinds of meats and fish prepared at the moment in the wok. The millennial dian-xin, the Chinese hors d'oeuvres that you can savor both steamed and fried in “KingDo Lite” are not lacking in their proposal either. They are one of the many star dishes that this restaurant has, whose menu is constantly renewed.",
    images: [
      'https://www.kingdolite.com/s/cc_images/cache_1702172.jpg?t=1471722634',
      'https://www.kingdolite.com/s/cc_images/cache_1745339.jpg?t=1471781361',
      'https://sevilla.abc.es/contenidopromocionado/wp-content/uploads/sites/2/2019/04/portada-wp-asiatico.jpg',
    ],
    location: [37.40541, -5.97552],
    category: 'Chinese',
  },
  {
    name: 'La Parada',
    description:
      'Food to take away of great quality and elaboration. It is all very tasty and it is not the typical food of a Chinese restaurant, it is a much more elaborate food with a very good flavor in all its dishes at unbeatable prices even for take away.',
    images: [
      'https://media-cdn.tripadvisor.com/media/photo-p/12/eb/55/06/photo1jpg.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/12/40/d7/5f/photo4jpg.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4DVkpUS6Rfco6g4IJwAHMDE5-GUPo9aEbIg&usqp=CAU',
    ],
    location: [36.70731, -4.43432],
    category: 'Chinese',
  },
  {
    name: 'Nice Spice',
    description:
      'Nice Spice offers you the most exquisite variety from India that you can find in Barcelona. Come visit us or place your order online. You will see how we will surprise you with our specialties.',
    images: [
      'https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,h_290,w_703/es/cuisines/india-9.jpg',
      'https://www.restauranis.com/fotos/khip-nice-spice-barcelona-plato1.jpg',
      'https://rs-menus-api.roocdn.com/images/bcb881ab-cccd-4d63-97ad-c66ed7972783/image.jpeg?width=1200&height=630&auto=webp&format=jpg&fit=crop&v=',
    ],
    location: [41.39979, 2.20112],
    category: 'Indian',
  },
  {
    name: 'Papadam',
    description:
      'A family restaurant, PAPADAM AUTHENTIC INDIAN RESTAURANT is characterized by its family atmosphere, very pleasant for all its guests. We are located at Ronda Sant Pau 11, 08015, Barcelona, Spain. We have been concerned about enjoying authentic drinks and meals and provide a high quality service, close to our guests and to their wishes.',
    images: [
      'https://papadam.es/images/about-1.jpg',
      'https://papadam.es/papadamadmin/gallery/20190903130509_187991.jpg',
      'https://papadam.es/papadamadmin/gallery/20190629201217_422348.jpg',
    ],
    location: [41.39041, 2.16552],
    category: 'Indian',
  },
  {
    name: 'Siddharta Oriental ',
    description:
      'Healthy cuisine, flexitarian, oriental, author, fusion and products of our land. Most of our dishes are made with chickpea flour, rice and corn.',
    images: [
      'https://lh3.googleusercontent.com/ngAKQJVjLtlKMMTfsEK7iUhTPglvn8I4qlzcRVhXlSNfzGk9lhrzJSedKDRcRrjPKj-UcRnGHiR-A_Ou3Q=w768-h768-n-o-v1',
      'https://lh3.googleusercontent.com/zDKA67YNxlMawNtxKOLiKrIbwd6XSOUotVKmmX219yY4jBYm1SIHg5HDiViGXdvDoNJRB1MXEMI6-8-uKA=w768-h768-n-o-v1',
      'https://lh3.googleusercontent.com/tZ1ogK9vxeD-MavkBQCg_bJh2T_ewaG0CDNb4ROuSQOifIFjAWY7FbhzIVnE8DXqLId1f2fRstZF_-8mtQ=w768-h768-n-o-v1',
    ],
    location: [42.60111, -5.57285],
    category: 'Indian',
  },
  {
    name: 'Himalaya Curry & Tandoori Restaurant ',
    description:
      'We offer you the original tradition and taste of India and Nepal with the services and quality standards of a European restaurant.',
    images: [
      'https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,w_800,c_limit/customer/f2b8699b-46da-4aa9-9020-6d9ac0edf3a7/f0cccb49-6082-4fab-a3c6-607dd42dd4ed.jpg',
      'https://experiencenepal.welcomenepal.com/uploads/hotel/5da9dc29214c62511719e5b22b2d02de.jpg',
      'https://cdn.mercadoflotante.com/blog/wp-content/uploads/2018/05/langostinos-tandoori-e1526487286345.jpg',
    ],
    location: [43.25587, -2.91805],
    category: 'Indian',
  },
  {
    name: 'Himalaya Curry & Tandoori Restaurant ',
    description:
      'At India Town we have a solid reputation due to our specialized knowledge of Indian restaurant. For a few years we have considered ourselves experts on the subject; we are always accompanied by the most efficient, professional and timely staff to give you the satisfaction you deserve.',
    images: [
      'https://media-cdn.tripadvisor.com/media/photo-s/14/75/eb/67/chicken-korma.jpg',
      'https://res.cloudinary.com/tf-lab/image/upload/restaurant/15eaf92c-7297-4832-ac5f-7749d2010f13/b8b23df8-7f95-49d9-aeeb-e0581b94a1ea.jpg',
      'https://fastly.4sqi.net/img/general/600x600/329179221_wlmgX-DPg1yWJBFkbB7od_RkH_zOq6Di217ip9he_Pc.jpg',
    ],
    location: [43.34322, -3.00504],
    category: 'Indian',
  },
  {
    name: 'Taj Mahal ',
    description: 'Enjoy the taste of the best Hindu food in the world.',
    images: [
      'https://scontent.fymy1-2.fna.fbcdn.net/v/t1.0-9/s720x720/144097362_173264714596751_6672251503585186053_n.jpg?_nc_cat=100&ccb=3&_nc_sid=110474&_nc_ohc=B12I3cTLqU4AX9SetlH&_nc_ht=scontent.fymy1-2.fna&tp=7&oh=3fae9e4d9bd908fc92a6f7b5a99d8171&oe=604D811C',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwAA5gb_rMfzRxZcv4LrwHZFDnc5W7bcUNlw&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVhur6qdTscRQfoTElB6x_Q5KybqhOYVByKQ&usqp=CAU',
    ],
    location: [38.87904, -6.95235],
    category: 'Indian',
  },
  {
    name: 'La Embajada ',
    description:
      'La Embajada, an establishment opened at the initiative of the Amado family on May 3, 2019, combines the idea of the wine tavern with the gourmet products store, a multimedia room and a spacious charming patio, which also serves as a space for celebrations.',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ZkH4cPI7FqWixTpFa7XY6Z54r0oGHz3Gug&usqp=CAU',
      'https://cadiz.cosasdecome.es/wp-content/uploads/2019/05/Puntillias-ibericas-768x394.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNGZvm2BpiVQpDKmNzbyXedihl_fHyTJIjGw&usqp=CAU',
    ],
    location: [36.6866, -6.13717],
    category: 'Indian',
  },
  {
    name: 'Arpit ',
    description:
      'From the traditional and diverse cuisine of Punjab, a region in the northwest of India, Arpit tries to bring its culinary history to the heart of Madrid. Located in the Las Tablas area, in Arpit, we offer the most typical Indian cuisine, with Anglo-Saxon airs that have been intermixed over the years with the Indian gastronomic culture. A most innovative Indian cuisine. Our dining room staff is prepared to guide the uninitiated in Indian gastronomy so that they can taste those dishes that are more akin to their palate.',
    images: [
      'https://media-cdn.tripadvisor.com/media/photo-s/1c/21/dd/b2/comida-hindu-arpit.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUJL2ZRHBviIT3qST49orXA0npSRlre2fJag&usqp=CAU',
      'https://media-cdn.tripadvisor.com/media/photo-s/1c/21/dd/6c/comida-arpit.jpg',
    ],
    location: [40.49382, -3.66416],
    category: 'Indian',
  },
  {
    name: 'Kathmandu Tandoori House ',
    description:
      'The service was very nice so was the food but if you are used to good Indian cuisine this was an average experience. Size of the portions was excellent, mango lassi somewhat to sweet and the food was not very spicy as I asked for it. Nevertheless value for money',
    images: [
      'https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,g_auto:subject,w_488,h_488,c_fill/customer/b722f00f-bac9-497d-9b5c-250df5f72f2e/b420ee67-414c-4e3f-8d19-63c1269e82db.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/0d/3f/fc/34/real-indian-food.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrCGYHceWNq39A7F2mACxMLylxomQNIaM-0A&usqp=CAU',
    ],
    location: [40.45888, -3.58762],
    category: 'Indian',
  },
  {
    name: 'Bacoa Burger ',
    description:
      'Born in Barcelona, Bacoa is based on two fundamental principles: hand-made quality and patience. This way of working with an innovative and dynamic ordering service, has built our philosophy.',
    images: [
      'https://media-cdn.tripadvisor.com/media/photo-p/12/e0/94/d0/la-bacoa-best-burger.jpg',
      'https://www.hosteleriasalamanca.es/fotos/1554119480.2786.jpg',
      'https://static.mujerhoy.com/noticias/201911/23/media/cortadas/paladar-bacoa-krMG-U90759822141pXC-644x483@MujerHoy.jpg',
    ],
    location: [40.41358, -3.69378],
    category: 'Burguer',
  },
  {
    name: 'Bacoa Burger ',
    description:
      'If you mix insanely good burgers with top quality craft beer and do it in a city that’s as much fun as Barcelona is, then you’re onto an instant good thing. That’s exactly what you’ll find here. Great fun with even greater burgers.',
    images: [
      'https://www.chicagotribune.com/resizer/m__gi-j34Jbnv5SQIrLHkljplc4=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/R2ORJGRPSRCPTGQYRSOOEBMTAM.jpg',
      'https://media.phillyvoice.com/media/images/030719BurgerBeer_Unsplash.2e16d0ba.fill-735x490.jpg',
      'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_667,w_1000,x_0,y_0/c_scale,w_1080/v1411667950/eT1_bffpwm.jpg',
    ],
    location: [41.390205, 2.154007],
    category: 'Burguer',
  },
  {
    name: "Alfredo's Barbacoa ",
    description:
      'Forget about the traditional tapas and wine for one evening and come down to Alfredo’s Barbacoa for one of these truly unique burgers. They have some unusual salsas and toppings for those looking to liven things up.',
    images: [
      'https://tenedoropalillos.guiaturisticamadrid.com/wp-content/uploads/2018/02/alfredos-barbacoa-hamburguesa-03-900x600.jpg',
      'https://lh3.googleusercontent.com/proxy/aPrtzVxiHTNhIZR59NuH59mHuJN_yu7XqAuwsfNk0R6leZmXRvuQqz5ZWTrqa0I4Q-WM1rN3ME5PEjmnntzXKyPuVgvXWvPXnVdJkAg3hi7I7MTB90zFnNwkWlM-om2ZOXOfEJhcMr8Ox49I08_0kRjW',
      'https://m.guiadelocio.com/var/guiadelocio.com/storage/images/restaurantes/madrid/madrid/alfredo-s-barbacoa-hurtado-de-mendoza/2904641-11-esl-ES/alfredo-s-barbacoa-hurtado-de-mendoza.jpg',
    ],
    location: [41.390205, 2.154007],
    category: 'Burguer',
  },
  {
    name: 'Goiko Grill – Valencia ',
    description:
      'The burgers here are consistently good, and they put that down to sourcing the very best ingredients. You’ll never get a bad burger in here.You’ll find them in multiple locations as they continue to grow with their legions of super fans. The burgers are so pretty you nearly don’t want to spoil them by eating them. Nearly!',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRERemLL_Dw5-Bs32J-rv4sODLQDv0Jg6N26g&usqp=CAU',
      'http://foodvalencia.com/wp-content/uploads/2018/04/2017-08-28-13.46.33-1591325411123743621_2876719766-1080x912.jpg',
      'https://www.valenciabonita.es/wp-content/uploads/2017/09/IMG_20170906_190147.jpg',
    ],
    location: [39.46975, -0.37739],
    category: 'Burguer',
  },
  {
    name: 'A Fuego Negro ',
    description:
      'This hip restaurant is featured on the Michelin guide and offers up a funky, modern take on traditional Basque cuisine. They’re renowned for the Makcobe burger: a mini Kobe beef burger pintxo with banana chips.It’s innovative, super tasty, and one of the best burgers in Spain. Order two!',
    images: [
      'https://bigseventravel.com/wp-content/uploads/2019/09/Screenshot-2019-09-12-at-13.30.09-768x735.png',
      'https://pintxos.es/wp-content/uploads/2018/07/Pintxo-A-Fuego-Negro-Makcobe.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/01/79/8f/c6/mini-hambugers.jpg',
    ],
    location: [43.32351, -1.98486],
    category: 'Burguer',
  },
  {
    name: 'All Grill ',
    description:
      'Their burgers are super classical in style; it is all about the quality of the beef here which always shines through.The perfect size to forget about the cutlery and just grab in two hands and start munching into it. A seriously good burger.',
    images: [
      'https://bigseventravel.com/wp-content/uploads/2019/09/benalmedena-768x737.png',
      'https://media-cdn.tripadvisor.com/media/photo-s/12/36/d9/d5/img-20180131-142714-405.jpg',
      'https://allgrillburger.com/wp-content/uploads/2018/05/IMG-20180528-WA0000-942x1024.jpg',
    ],
    location: [36.599754, , -4.531718],
    category: 'Burguer',
  },
  {
    name: 'The Butcher Ibiza',
    description:
      'This stylish burger bar started off in Amsterdam, since opening its popular Ibiza location. It serves top-quality burgers, prepared on the spot using only the freshest ingredients.Order the Babaganoush for something different: it’s topped with mashed grilled aubergines blended with sesame sauce.',
    images: [
      'https://bigseventravel.com/wp-content/uploads/2019/09/burger-ibiza-768x576.jpg',
      'https://res.cloudinary.com/tf-lab/image/upload/restaurant/71c2c71b-55a5-4792-ad54-81f98fc75c78/cb885f67-54e2-4e2e-8185-ffcf3e3d7318.jpg',
      'https://aws.traveler.es/prod/designs/v1/assets/940x705/124401.jpg',
    ],
    location: [39.02001, , 1.482148],
    category: 'Burguer',
  },
  {
    name: 'House Of Burger',
    description:
      'Their burgers are cooked in a coal oven and made with 100% Black Angus veal. The end result? An absolute taste sensation; it is easy to see why they are expanding across Spain.Make sure to keep some room for their desserts, because they are a seriously tasty end to a meal.',
    images: [
      'https://bigseventravel.com/wp-content/uploads/2019/09/seville-burger-768x519.png',
      'https://res.cloudinary.com/glovoapp/w_1200,f_auto,q_auto/Stores/uzffdm4w0kllead0nq1p',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnVAnN71F8lHx9cPvEmKZkFIl9gwg0DV3N5Q&usqp=CAU',
    ],
    location: [37.3931, -5.9816],
    category: 'Burguer',
  },
  {
    name: 'The Burger Cafe',
    description:
      'The Burger Cafe shows that amazingly tasty burgers don’t have to be bad for you. They use fresh vegetables and 100% organic livestock from their neighbourhood supplier for burgers that taste out of this world.They also have an amazing range of veggie burgers, so non-carnivores will be happy here.',
    images: [
      'https://bigseventravel.com/wp-content/uploads/2019/09/burgerc-afe-768x512.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/17/3d/b8/40/img-20190417-143217-largejpg.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/1c/7e/cc/ea/the-burger-cafe-paseo.jpg',
    ],
    location: [28.05122, -16.71834],
    category: 'Burguer',
  },
  {
    name: 'Fastuc',
    description:
      'Sicilian chef Giuseppe Cusimano creates magic in his kitchen, and it was love at first sight when we visited his restaurant Fastuc. Modern Italian/Mediterranean meet in a menu that might just give you goosebumps. Make sure to try the rabbit with cherries, it’s out of this world.',
    images: [
      'https://media-cdn.tripadvisor.com/media/photo-s/16/aa/8f/eb/the-amazing-artichoke.jpg',
      'https://bcnfoodieguide.com/wp-content/uploads/2020/07/Restaurante-Fastuc-2-1030x562.jpg',
      'https://bcnfoodieguide.com/wp-content/uploads/2020/05/fastuc_17.jpg',
    ],
    location: [41.39754, 2.15156],
    category: 'Italian',
  },
  {
    name: 'Trattoria Mamma Franca',
    description:
      'It is located in Avenida Imperio Argentina 7, a little bit further from Carretera de Cadiz, in the west part of Malaga. If you go from the center, I recommend you have to go by bus or by car, otherwise you can just have a long walk all along the Misericordia beach, since the restaurant is close to the Paseo Maritimo.There are different dishes and starters but, what I can recommend you is Caprese di Bufala (a dish made with mozzarella, tomato and basil, very typical in southern Italy). ',
    images: [
      'https://res.cloudinary.com/tf-lab/image/upload/restaurant/df82dda5-5586-43b1-81cc-a2ca0e74b308/a55d764e-14c9-4711-8dce-f6db77cf3df4.jpg',
      'https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,g_auto:subject,w_488,h_488,c_fill/customer/df82dda5-5586-43b1-81cc-a2ca0e74b308/d31de212-f004-4772-b57d-8bb3f692f3d8.jpg',
      'https://res.cloudinary.com/tf-lab/image/upload/f_auto,q_auto,g_auto:subject,w_488,h_488,c_fill/customer/df82dda5-5586-43b1-81cc-a2ca0e74b308/d31de212-f004-4772-b57d-8bb3f692f3d8.jpg',
    ],
    location: [36.68498, -4.46747],
    category: 'Italian',
  },
  {
    name: 'Pizzeria Tucco Pizza',
    description:
      'When visiting Madrid try get out to Navacerrada, beautiful little village at the foot of the mountains with a very attractive centre full of bars and restaurants. Rompicapo is a typical Italian restaurant, ideal for families, serving Pizza and Pasta and many other specialities.',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuBD-E-gfYbnSuyC6RYYEUHOpm0O9oqOoVtA&usqp=CAU',
      'https://media-cdn.tripadvisor.com/media/photo-s/0f/ba/8e/d4/tua-pizza-crea-tu-propia.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkVE15bqXVBa8LpXXA_XqtK_6udRYvs5yiIw&usqp=CAU',
    ],
    location: [40.67816, -3.9707],
    category: 'Italian',
  },
  {
    name: 'Pizza Negra',
    description:
      'We choose the best recipe, gathering the best ingredients, joining our experience and tradition. We knead and stretch by hand, our traditional pizzas, and our exclusive Black Dough, with garlic and squid ink.',
    images: [
      'https://img-global.cpcdn.com/recipes/2c028e12b95b50aa/751x532cq70/pizza-negra-base-foto-principal.jpg',
      'https://lh3.googleusercontent.com/proxy/llCA1kyG0o3-dr1sd3bQupYeqR6yd--ymhQGNWElhRbOuuqnPaChYlevXsaF3_5T_RtUC8wE81l6JAHjlII7eb2perIbyhcvDx2KVpdI8Hm3hnw3nqHPkBWWTR5f2lGskVuFx5PLyA',
      'https://media-cdn.tripadvisor.com/media/photo-s/12/6e/06/29/img-20180325-wa0001-largejpg.jpg',
    ],
    location: [41.64192, -0.87901],
    category: 'Italian',
  },
  {
    name: "Paisano's Italian Kitchen",
    description:
      'We serve fresh local authentic Italian cuisine in a warm and comfortable setting. We offer catering and specialty desserts all fresh and made in house. No freezer. No can openers.Gluten free is available and local organic ingredients are used whenever possible',
    images: [
      'https://s3-media0.fl.yelpcdn.com/bphoto/1HQw8IQN12NLR5uCsFh_Cg/348s.jpg',
      'https://s3-media0.fl.yelpcdn.com/bphoto/vYjlib8vLFCL8f-NLU0YmA/o.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/16/1c/7d/23/paisano-s-italian-kitchen.jpg',
    ],
    location: [42.7551, -7.8662],
    category: 'Italian',
  },
  {
    name: 'Cecconi’s',
    description:
      'Soho House landed in Barcelona a couple of years ago, and brought with it Cecconi’s, where the beautiful people hang out and indulge in surprisingly humble Northern Italian fare.',
    images: [
      'https://www.cecconisbarcelona.com/system/files/012017/588885acebeeb5760200081a/full_bleed/Copyright_Cecconis-Barcelona_02.jpg?1485342151',
      'https://good2b.es/wp-content/uploads/2019/06/set-up-baja.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV36vgzJOVU9XbNMSV44-2Zy47VDy8wq711g&usqp=CAU',
    ],
    location: [41.38196, 2.17645],
    category: 'Italian',
  },
  {
    name: 'Arzak',
    description:
      "With three Michelin stars, Arzak is ranked No. 17 on the 2015 World's Best 50 Restaurants list. Operated by father-daughter duo Juan Mari Arzak and Elena Arzak Espina, the kitchen turns out modern Basque dishes like its famous Red Egg, made with piquillo peppers and crispy trotter meat.",
    images: [
      'https://fichas-gr.s3.amazonaws.com/media/thumbnails/filer_public/da/c4/dac43387-a9ca-4b64-969f-cdb988a3139b/lobster_with_intermixed_leek_and_banana__bogavante_con_telar_de_platano_y_puerro__1284x850_q75_middle.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9x-vCH2KHfNFY-67DgsYl1VpmifLWO9en6A&usqp=CAU',
      'https://www.smoothred.com/wp-content/uploads/2017/06/Arzak-GOURMET.jpg',
    ],
    location: [43.32067, -1.95033],
    category: 'Spanish',
  },
  {
    name: 'Quique Dacosta',
    description:
      'Chef Quique Dacosta prepares a variety of tasting menus (some exceeding 30 dishes) in his three-Michelin-starred restaurant (No. 39 in the world). Look out for the tobacco leaf and toro, a sashimi-style tuna belly presented on smoked, caramelized kelp with micro herbs and onion rings. ',
    images: [
      'https://offloadmedia.feverup.com/valenciasecreta.com/wp-content/uploads/2019/05/21092826/quique-dacosta-restaurantes-valencia.jpg',
      'https://www.excelenciasgourmet.com/sites/default/files/styles/slideshow_large/public/2019-06/Arros%20QD-quique-Dacosta.jpg?itok=WupAU0yv',
      'https://ep01.epimg.net/elpais/imagenes/2019/05/30/estilo/1559237864_926591_1559238036_noticia_normal.jpg',
    ],
    location: [38.84078, 0.10574],
    category: 'Spanish',
  },
  {
    name: 'Café Iruña',
    description:
      "According to Condé Nast Traveler, Navarra — the region that hosts Pamplona's infamous Running of the Bulls — is emerging as Spain's next great food scene. Ernest Hemingway loved this 19th century cafe, where he began writing A Farewell to Arms, A Moveable Feast, and For Whom the Bell Tolls, among others.",
    images: [
      'https://i.pinimg.com/originals/ad/0f/99/ad0f99e9f91a5de7459fedf733234529.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/03/15/cc/bd/cafe-iruna.jpg',
      'https://aws.traveler.es/prod/designs/v1/assets/940x627/128576.jpg',
    ],
    location: [42.81881, -1.64207],
    category: 'Spanish',
  },
  {
    name: 'Akelarre',
    description:
      'Dubbed one of the best restaurants in San Sebastián by Condé Nast Traveler, this hillside locale affords breathtaking views of the Bay of Biscay. Chef Pedro Subijana, who has earned three Michelin stars for the restaurant, suggests choosing from one of his three tasting menus (175€ per person) for the best experience.',
    images: [
      'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_380,c_fill,g_auto,h_214,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F150317170412-san-seb-martin-berasategui-2.jpg',
      'https://s3-eu-west-1.amazonaws.com/gr-cms/media/featured_images/none/44494013-0fab-4dde-b536-4f6f0be6e668/akelare_2241.jpg',
      'https://www.theworlds50best.com/discovery/filestore/jpg/Akelarre-SanSebastian-Spain-01.jpg',
    ],
    location: [43.3021, -2.0521],
    category: 'Spanish',
  },
  {
    name: 'DiverXO',
    description:
      "This three-Michelin-star restaurant fuses the cuisines of Spain and China. Its edgy décor includes flying pigs and walls of butterflies, which perfectly echo Chef David Muñoz's artful fare. Upon trying Muñoz's take on shumai dumplings, travel show host Anthony Bourdain proclaimed, “I love my wife, I love my daughter, and then I love this.” DiverXO ranks No. 59 on the 2015 World's Best 50 Restaurants' top 100 list. ",
    images: [
      'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2016/08/22/14718556589113.jpg',
      'https://www.cocinayvino.com/wp-content/uploads/2020/12/www.cocinayvino.com-a6308279.jpg',
      'https://i.pinimg.com/originals/98/f9/44/98f944e94fddfecd952c9df743fcaafc.jpg',
    ],
    location: [40.4578, -3.6861],
    category: 'Spanish',
  },
  {
    name: 'Restaurante Oriza',
    description:
      "For dinner and a show in Seville, you can do no better than Restaurante Oriza, located near the historic Lope de Vega Theatre. Featured in Conde Nast Traveler's Guide to Seville, Oriza's seasonal menu includes chef recommendations like fresh salad with codfish sheets, orange slices, black olive tapenade, and a pine nut mayonnaise.",
    images: [
      'https://media-cdn.tripadvisor.com/media/photo-s/18/93/b4/3c/oriza.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/1a/ca/92/94/arroz-meloso-de-perdiz.jpg',
      'https://santorinidave.com/wp-content/uploads/2017/05/Seville-Restaurants-La-Azotea.jpg',
    ],
    location: [37.38724, -5.99015],
    category: 'Spanish',
  },
];
module.exports = data;

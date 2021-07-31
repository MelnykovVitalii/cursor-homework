const imagesByNames = {
	"Luke Skywalker":
		" https://mirstarwars.ucoz.ru/Episode_4_Luke_Skywalker_1.jpg",
	"R2-D2":
		"https://smart-gadget.club/image/cache/catalog/Products/fun/%D0%94%D1%80%D0%BE%D0%B8%D0%B4%20Sphero%20R2-D2%20Droid/3-800x800.jpg",
	"Darth Vader":
		"https://www.artmajeur.com/medias/standard/p/r/promethee/artwork/10115812_darth-vader-by-prometh3e-db82fwq.jpg",
	"C-3PO":
		"https://g4sky.ru/wa-data/public/shop/products/69/34/3469/images/7189/7189.970.jpg",
	"Leia Organa":
		"https://vokrug.tv/pic/news/2/0/c/b/20cbb32f665384fab9bdfb6651e1e00f.jpg",
	"R5-D4":
		"https://www.renderhub.com/ardera/r5-d4-astromech-droid/r5-d4-astromech-droid-01.jpg",
	"Owen Lars":
		"https://www.aceshowbiz.com/display/images/photo/2021/03/30/00168518.jpg",
	"Beru Whitesun lars":
		"http://pm1.narvii.com/6293/db859b249381c30a6be8f8242046105e552cd54d_00.jpg",
	"Biggs Darklighter": "https://i.playground.ru/p/HmmcEHle7ktAoCPCDn9Jwg.jpeg",
	"Wilhuff Tarkin":
		"https://www.soyuz.ru/public/uploads/files/2/6882552/20161128235214e2e0bc5b0d.jpg",
	"Obi-Wan Kenobi":
		"https://www.techadvisor.com/cmsdata/features/3784909/ewan-mcgregor-obi-wan_thumb800.jpg",
	Greedo:
		"https://pyxis.nymag.com/v1/imgs/c20/4ac/55db7c77cf4a0ed214af58f3201f5281bf-12-greedo-star-wars.rsocial.w1200.jpg",
	Chewbacca:
		"https://www.syfy.com/sites/syfy/files/styles/1200x680/public/wire/legacy/chewbaccapants.jpg",
	"Raymus Antilles":
		"https://db4sgowjqfwig.cloudfront.net/images/2383325/ROTS-Antilles_web_sized.jpg",
	"Wedge Antilles":
		"https://cdn.vox-cdn.com/thumbor/kqevJ6QGUozoem-yjlgCMraJ2Tk=/188x0:1410x815/1400x1400/filters:focal(188x0:1410x815):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/32955745/wedge.0.jpg",
	"Jek Tono Porkins":
		"https://pbs.twimg.com/profile_images/614431171460624386/Z0pxKl9v_400x400.png",
	"Han Solo":
		"https://upload.wikimedia.org/wikipedia/en/b/be/Han_Solo_depicted_in_promotional_image_for_Star_Wars_%281977%29.jpg",
	"Jabba Desilijic Tiure":
		"https://www.film.ru/sites/default/files/images/555-14.jpg",
	Palpatine:
		"https://cdn.vox-cdn.com/thumbor/ECPyvnvHZLiPyIgnGJcYabc5Kgg=/0x0:1920x816/1400x933/filters:focal(898x216:1204x522):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/65943305/star_wars6_movie_screencaps.com_13433.0.jpg",
	Yoda: "https://startheories.ru/wp-content/uploads/2018/10/Yoda_infobox.png",
	"IG-88":
		"https://my-universe.ru/image/cache/catalog/products/starwars/kotobukiya/kbysw-146_0-1000x1000.jpg",
	"Boba Fett": "https://images.ua.prom.st/2897632371_figurka-boba-fett.jpg",
	Bossk:
		"https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-bossk-16x9-xl.jpg.adapt.crop1x1.320w.jpg",
	"Lando Calrissian":
		"https://upload.wikimedia.org/wikipedia/ru/c/cb/Lando6-2.jpg",
	Lobot:
		"http://jedinet.com/wp-content/uploads/2017/03/FeaturedImage-3-1280x720.png",
	Ackbar:
		"https://media.comicbook.com/2015/10/admiral-ackbar-return-of-the-jedi-153580-1280x0.jpg",
	"Nien Nunb":
		"https://upload.wikimedia.org/wikipedia/en/9/9e/Nien_Nunb_Return_of_the_Jedi.jpeg",
	"Wicket Systri Warrick":
		"https://sites.psu.edu/calvinpassion/wp-content/uploads/sites/39979/2016/02/hannibalwicket1030.jpeg",
	"Mon Mothma":
		"http://pm1.narvii.com/6463/60664bae4bf25b582d33b4294988478c2d7d3e66_00.jpg",
	"Bib Fortuna": "https://images-cdn.9gag.com/photo/aAeWKXo_700b.jpg",
	"Arvel Crynyd":
		"http://ayay.co.uk/backgrounds/star_wars/rebel_alliance_characters/arvel-crynyd.jpg",
	"Shaak Ti": "https://lumiere-a.akamaihd.net/v1/images/shaak_ti_9523e7c7.jpeg",
	Grievous:
		"https://i.pinimg.com/736x/05/4e/4c/054e4c9b785410dd72f2774d28376e8a.jpg",
	Dooku:
		"https://www.liveabout.com/thmb/U-fYZqegKTY0aAuwRnijRXgAaKg=/864x864/smart/filters:no_upscale()/Dooku_EP2-IA-62393_R_8x10-56a839273df78cf7729d2370.jpg",
	"Nute Gunray":
		"https://i.pinimg.com/originals/57/70/2b/57702b3d418b2c6142f85dbb925e5d9b.jpg",
	"Padmé Amidala": "https://data.whicdn.com/images/213090810/original.jpg",
	"Ki-Adi-Mundi": "https://i.ytimg.com/vi/v-yF6EPW6ro/maxresdefault.jpg",
	"Saesee Tiin":
		"https://sites.google.com/site/starwarsjediandsith/_/rsrc/1359556083399/saesee-tiin/image.jpg",
	Tarfful:
		"https://pbs.twimg.com/profile_images/686344047099686912/IuNqRnSj_400x400.jpg",
	"Bail Prestor Organa":
		"https://i.pinimg.com/originals/d7/d0/12/d7d012c5a79b5eb7e3b277cda525c94f.jpg",
	"Anakin Skywalker":
		"https://townsquare.media/site/442/files/2020/07/Star-Wars-Revenge-of-the-Sith.jpg",
	"Tion Medon":
		"https://i.pinimg.com/originals/b9/b8/9d/b9b89d5e6d70c400202b3c9df4eaa33c.jpg",
	"Mace Windu": "https://i.playground.ru/p/Myo3044DNITecWdDrO4EgA.png",
	"Sly Moore":
		"http://pm1.narvii.com/6969/d5026326add106ddc3a89790da991690fe599f22r1-1277-1920v2_uhq.jpg",
	"Ayla Secura": "https://www2.pictures.zimbio.com/mp/YwnpF5woU-Mx.jpg",
	"Luminara Unduli":
		"https://i.pinimg.com/originals/be/50/d9/be50d966ba399a8da1577d402a28c95b.jpg",
	"Kit Fisto":
		"https://m.media-amazon.com/images/I/61OuArNnlTL._AC_SL1200_.jpg",
	"Adi Gallia":
		"https://comicvine.gamespot.com/a/uploads/scale_small/0/5904/205431-29575-adi-gallia.jpg",
	"R4-P17": "https://detki.com.ua/img/catalog/item_11689.jpg",
	"Plo Koon": "https://images.ua.prom.st/2937565433_figurka-plo-kun.jpg",
	"Poggle the Lesser": "https://i.redd.it/kz1qityeeyz21.jpg",
	"Eeth Koth":
		"https://starwarsinterviews.com/wp-content/uploads/2016/12/EethKoth.png",
	"Taun We":
		"https://i.pinimg.com/originals/49/d9/0a/49d90a3c817b21210701993bc042bcb4.jpg",
	Watto:
		"https://images.saymedia-content.com/.image/t_share/MTc0NDcyNjkzMzgxMzQyODU0/top-terrible-things-about-watto-from-star-wars.jpg",
	"Barriss Offee":
		"https://bloximages.chicago2.vip.townnews.com/siouxcityjournal.com/content/tncms/assets/v3/editorial/a/b7/ab7ad7ff-6bfb-5180-89c3-aa92a86bbfd6/59b8170e3705e.image.jpg",
	Dormé:
		"https://i.pinimg.com/originals/b3/ab/fd/b3abfd216b1c344116f996cc7e3b3fa4.jpg",
	"Cliegg Lars":
		"https://i.pinimg.com/originals/32/8b/92/328b92044486e11deddfb85fa7f52bf2.jpg",
	"Jocasta Nu":
		"https://i.pinimg.com/originals/2f/b6/b1/2fb6b1d45ffc135bc5c25d7d6eb49340.png",
	"Zam Wesell":
		"https://i.pinimg.com/originals/a2/37/d3/a237d396eb64bcda83d67912ba3fc3fb.jpg",
	"Mas Amedda":
		"https://i.pinimg.com/originals/02/d7/32/02d73237c3285c83dbcb2d978f80ad36.jpg",
	"Jar Jar Binks":
		"https://i.pinimg.com/564x/ab/71/89/ab71897831b8044c9861c2f9552664f4.jpg",
	"Wat Tambor":
		"https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2019/12/wat-tambor-attack-of-the-clones-header.jpg",
	"Gregar Typho":
		"https://i.pinimg.com/originals/37/95/c3/3795c3fc904524d8dfe54bcf11e27379.jpg",
	"Jango Fett":
		"https://www.sideshow.com/storage/product-images/903741/hot-toys-jango-fett_star-wars_feature.jpg",
	Cordé:
		"https://i.pinimg.com/originals/d8/bc/36/d8bc36174acdf28f7bad003e1d029050.jpg",
	"Shmi Skywalker":
		"https://i.pinimg.com/originals/85/69/ca/8569ca3ca1683765fa6f613aa0b307a3.jpg",
	"Dexter Jettster": "https://pbs.twimg.com/media/BTqOeKGIgAA1Z-O.jpg",
	"Lama Su":
		"https://pm1.narvii.com/6015/d7dcd36567fd243f3b4e23b84ab991d24a7dccb3_hq.jpg",
	"San Hill":
		"http://pm1.narvii.com/6450/734fc0687788555c4cd9b6d79873ef1546df8b29_00.jpg",
	"Yarael Poof":
		"https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/08/yarael-poof-.jpg",
	"Darth Maul":
		"https://i.pinimg.com/originals/b3/42/3d/b3423d0c79ff2bb99374bd4ea73a2f54.jpg",
	"Ratts Tyerel":
		"https://i.pinimg.com/originals/ae/06/36/ae0636a57cdf2686ffa5b6202f4646dd.jpg",
	"Dud Bolt": "https://live.staticflickr.com/4189/34620862606_6b154b90cc_b.jpg",
	"Quarsh Panaka":
		"https://m.guiadelocio.com/var/guiadelocio.com/storage/images/a-fondo/10-personajes-insoportables-del-universo-star-wars/capitan-panaka/27622262-1-esl-ES/capitan-panaka.jpg",
	"Qui-Gon Jinn":
		"https://24life.ru/wp-content/uploads/2021/01/Без-названия-4.jpg",
	Sebulba:
		"https://i.pinimg.com/originals/cc/59/9a/cc599ac836d4d8712110341de437ec37.jpg",
	Gasgano: "https://img.bricklink.com/ItemImage/ML/sw0043.png",
	"Ben Quadinaros": "https://pbs.twimg.com/media/EikqLF-UwAA1mzo.jpg",
	"Finis Valorum":
		"https://i.pinimg.com/474x/ac/46/c6/ac46c67619e5681e38376fc246457b75.jpg",
	"Roos Tarpals":
		"https://pbs.twimg.com/profile_images/1336016310862569477/rAOdcDBu_400x400.jpg",
	"Rugor Nass":
		"https://i.pinimg.com/originals/4e/90/bc/4e90bc681dda21cfc27b57fe870616f8.jpg",
	"Ric Olié":
		"https://i.pinimg.com/originals/13/60/20/136020623287ea00a5650382d5ab8443.jpg",
};

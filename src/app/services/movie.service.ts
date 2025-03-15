import { Injectable } from '@angular/core';
import { MovieModel } from '../models/movie.model';

@Injectable({
    providedIn: 'root',
})

export class MovieService {
  public static movies: MovieModel[] | null = [
    {
      "id": "HO00014030",
      "posterImage": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/Anora%20veci_1920px446.jpg",
      "title": "Anora",
      "descriptionCalculated": "Film „ANORA“ pobednik Kanskog festivala i osvajač jedne od najprestižnijih kinematografskih nagrada, Zlatne palme, je priča o ljubavi, požudi, novcu i nezasitoj želji za srećom i uživanjem.\n\nAnora je mlada egzotična igračica iz Bruklina koja se, ubrzo po upoznavanju, udaje za Vanju, sina ruskog oligarha. Kada vest stigne do Rusije, mladoženjini roditelji kreću za Njujork, rešeni da ponište brak.",
      "descriptionShortCalculated": "Film „ANORA“ je priča o ljubavi, požudi, novcu i nezatitoj želji za srećom i uživanjem.",
      "trailers": [
      {
      "trailerKey": "e056d6af-a218-4bdf-9d59-e78482979696",
      "keyframeUrl": "https://kf-cineplexx.sf.apa.at/cineplexx/20241002_30_886170_anora_rs.jpg",
      "videoUrl": "https://vs-dl-cineplexx.sf.apa.at/apavideoservice/cineplexx/20241002_30_886170_anora_rs_720.mp4",
      "iosUrl": "https://vs-str-cineplexx.sf.apa.at/vod/_definst_/http/cineplexx/smil:20241002_30_886170_anora_rs_404.smil/playlist.m3u8",
      "androidUrl": "https://vs-dl-cineplexx.sf.apa.at/apavideoservice/cineplexx/20241002_30_886170_anora_rs_720.mp4",
      "universalPlayerUrl": "https://uvp-cineplexx.sf.apa.at/embed/e056d6af-a218-4bdf-9d59-e78482979696"
      }
      ],
      "director": "Sean  Baker",
      "actors": [
      "Yuriy Borisov",
      "Ross Brodar",
      "Mikey  Madison",
      "Lindsey  Normington",
      "Karren Karagulian",
      "Ivy Wolk",
      "Mark Eydelshteyn",
      "Vache Tovmasyan"
      ],
      "startDate": "2024-11-21",
      "openingDate": "2024-11-21T00:00:00+01:00",
      "genres": [
      "Drama"
      ],
      "comingSoon": true,
      "isScheduledAtCinema": true,
      "rating": "o.A.",
      "runTime": 139,
      "gallery": [
      "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Anora/4224_D001_26438Rv2_500px.jpg",
      "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Anora/4224_D001_16907R_500px.jpg",
      "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Anora/4224_D001_26672R_500px.jpg",
      "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Anora/4224_D001_27440_CROPR_500px.jpg",
      "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Anora/ANORA_Credit_Drew%20Daniels_500px.jpg",
      "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Anora/4224_D001_14028Rv2_500px.jpg",
      "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Anora/4224_D001_06804R_500px.jpg",
      "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Anora/4224_Mikey%20Madison%20as%20Ani%20and%20Mark%20Eydelshteyn%20as%20Ivan_500px.tif"
      ],
      "movieCountryCMS": [
      "USA"
      ],
      "distributorName": "Taramount",
      "synopsis": "Film „ANORA“ pobednik Kanskog festivala i osvajač jedne od najprestižnijih kinematografskih nagrada, Zlatne palme, je priča o ljubavi, požudi, novcu i nezasitoj želji za srećom i uživanjem.\n\nAnora je mlada egzotična igračica iz Bruklina koja se, ubrzo po upoznavanju, udaje za Vanju, sina ruskog oligarha. Kada vest stigne do Rusije, mladoženjini roditelji kreću za Njujork, rešeni da ponište brak.",
      "shortSynopsis": "Film „ANORA“ je priča o ljubavi, požudi, novcu i nezatitoj želji za srećom i uživanjem."
    },
    {
  "id": "HO00014952",
  "posterImage": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/B1_DEN-OF-THIEVES_2_SRB_712px446_1.jpg",
  "title": "Bratstvo lopova 2: Panter",
  "descriptionCalculated": "U ovom nastavku, legendarni Big Nik (Butler) ponovo kreće u lov – ovog puta u opasni svet evropskog podzemlja. Njegova meta? Doni (Jackson), koji se našao usred smrtonosnih intriga u svetu kradljivaca dijamanata i nemilosrdne bande Pink Panter. Njihov cilj: najveća i najdrskija pljačka u istoriji – dijamantska berza svetskog kalibra.\n\nS adrenalinskim poterama, dvostrukim izdajama i nepredvidivim obrtima, Big Nik mora da se suoči ne samo s kriminalcima, već i sa sopstvenim granicama kako bi zaustavio ovu smrtonosnu operaciju. Spremite se za akciju bez prestanka – akciju u kojoj se svaki potez računa, a ulog je život ili smrt!",
  "descriptionShortCalculated": "Džerard Batler (Plane, 300) i O’Šea Džekson Jr. (Godzilla: King of the Monsters) vraćaju se u eksplozivnom nastavku akcionog hita iz 2018 „Bratstvo lopova“!",
  "trailers": [
  {
  "trailerKey": "1b932e60-d2bc-4fa4-a8ac-873833ca8722",
  "keyframeUrl": "https://kf-cineplexx.sf.apa.at/cineplexx/20241231_30_909729_den_of_thieves_2_rs.jpg",
  "videoUrl": "https://vs-dl-cineplexx.sf.apa.at/apavideoservice/cineplexx/20241231_30_909729_den_of_thieves_2_rs_720.mp4",
  "iosUrl": "https://vs-str-cineplexx.sf.apa.at/vod/_definst_/http/cineplexx/smil:20241231_30_909729_den_of_thieves_2_rs_404.smil/playlist.m3u8",
  "androidUrl": "https://vs-dl-cineplexx.sf.apa.at/apavideoservice/cineplexx/20241231_30_909729_den_of_thieves_2_rs_720.mp4",
  "universalPlayerUrl": "https://uvp-cineplexx.sf.apa.at/embed/1b932e60-d2bc-4fa4-a8ac-873833ca8722"
  }
  ],
  "director": "Christian  Gudegast",
  "actors": [
  "Gerard Butler",
  "Salvatore Esposito",
  "O'Shea Jackson Jr.",
  "Swen Temmel",
  "Evin Ahmad",
  "Meadow Williams"
  ],
  "startDate": "2025-01-09",
  "openingDate": "2025-01-09T00:00:00+01:00",
  "genres": [
  "Drama",
  "Action",
  "crime"
  ],
  "comingSoon": true,
  "isScheduledAtCinema": true,
  "rating": "o.A.",
  "runTime": 130,
  "gallery": [
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_02193702_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_00365_R_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_10375_R_CROP_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_01112621_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_08241_R_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_07931_R_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_07998_R_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_02023113_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_07843_R_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_02091102_R_500px.jpg"
  ],
  "movieCountryCMS": [
  "USA"
  ],
  "distributorName": "Blitz",
  "synopsis": "U ovom nastavku, legendarni Big Nik (Butler) ponovo kreće u lov – ovog puta u opasni svet evropskog podzemlja. Njegova meta? Doni (Jackson), koji se našao usred smrtonosnih intriga u svetu kradljivaca dijamanata i nemilosrdne bande Pink Panter. Njihov cilj: najveća i najdrskija pljačka u istoriji – dijamantska berza svetskog kalibra.\n\nS adrenalinskim poterama, dvostrukim izdajama i nepredvidivim obrtima, Big Nik mora da se suoči ne samo s kriminalcima, već i sa sopstvenim granicama kako bi zaustavio ovu smrtonosnu operaciju. Spremite se za akciju bez prestanka – akciju u kojoj se svaki potez računa, a ulog je život ili smrt!",
  "shortSynopsis": "Džerard Batler (Plane, 300) i O’Šea Džekson Jr. (Godzilla: King of the Monsters) vraćaju se u eksplozivnom nastavku akcionog hita iz 2018 „Bratstvo lopova“!"
    },
    {
  "id": "HO00014037",
  "posterImage": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/BJMATB%20veci_712px446_1.jpg",
  "title": "Bridžet Džouns: Luda za njim",
  "descriptionCalculated": "Dvostruka dobitnica Oskara Rene Zelveger vraća se ulozi koja je zauvek stvorila heroinu romantične komedije, ženu čiji je neponovljiv pristup životu i ljubavi redefinisao čitav filmski žanr.\n\nBridžet Džouns se prvi put pojavila na policama u književnom fenomenu Helen Filding „Dnevnik Bridžet Džouns“, koji je postao globalni bestseler i filmski blokbaster. Kao samohrana žena koja živi u Londonu, Bridžet Džouns je na specifičan način upoznala svet sa svojim romantičnim avanturama, a njena sposobnost da trijumfuje uprkos nedaćama dovela ju je do toga da se konačno uda za vrhunskog advokata Marka Darsija i postane majka njihovog dečaka. Konačno srećni.\n\nAli u filmu „Bridžet Džouns – Luda za njim“, Bridžet je ponovo sama, udovica je već četiri godine, jer je Mark ubijen u humanitarnoj misiji u Sudanu. Ona je sada samohrana majka devetogodišnjeg Bilija i četvorogodišnje Mejbl i zaglavljena je u emocionalnom vrtlogu, odgajajući svoju decu uz pomoć svojih odanih prijatelja, pa čak i svog bivšeg ljubavnika Danijela Klivera (Hju Grant).\n\nPod pritiskom svojih najbližih — Šaz, Džud i Toma, njene koleginice Mirande, majke i njenog ginekologa doktorke Rolings (dobitnica Oskara Ema Tompson) — da prokrče novi put ka životu i ljubavi, Bridžet se vraća na posao, isprobavajući čak i aplikacije za upoznavanje, gde ubrzo počne da je proganja sanjivi i entuzijastični mlađi muškarac (Leo Vudal iz Belog Lotusa). Žonglirajući između posla, kuće i romanse, Bridžet se bori sa osudom savršenih majki u školi, brine za Bilija kome nedostaje njegov otac i upušta se u niz neprijatnih susreta sa Bilijevim nastavnikom nauke (kandidat za Oskara Čuitel Edžiofor).",
  "descriptionShortCalculated": "Četvrti nastavak poznate i veoma uspešne romantične komedije, zasnovan na istoimenom romanu.",
  "trailers": [
  {
  "trailerKey": "30e17b28-d18a-4f26-aac4-0add82d52a5c",
  "keyframeUrl": "https://kf-cineplexx.sf.apa.at/cineplexx/20241120_30_899681_bridget_jones_rs.jpg",
  "videoUrl": "https://vs-dl-cineplexx.sf.apa.at/apavideoservice/cineplexx/20241120_30_899681_bridget_jones_rs_720.mp4",
  "iosUrl": "https://vs-str-cineplexx.sf.apa.at/vod/_definst_/http/cineplexx/smil:20241120_30_899681_bridget_jones_rs_404.smil/playlist.m3u8",
  "androidUrl": "https://vs-dl-cineplexx.sf.apa.at/apavideoservice/cineplexx/20241120_30_899681_bridget_jones_rs_720.mp4",
  "universalPlayerUrl": "https://uvp-cineplexx.sf.apa.at/embed/30e17b28-d18a-4f26-aac4-0add82d52a5c"
  }
  ],
  "director": "Michael Morris",
  "actors": [
  "Emma Thompson",
  "Hugh Grant",
  "Chiwetel  Ejiofor",
  "Renée Zellweger",
  "Leo Woodall"
  ],
  "startDate": "2025-02-13",
  "openingDate": "2025-02-13T00:00:00+01:00",
  "genres": [
  "comedy",
  "Drama"
  ],
  "comingSoon": true,
  "isScheduledAtCinema": true,
  "rating": "o.A.",
  "runTime": 125,
  "gallery": [
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Bridget%20Jones-%20Mad%20About%20the%20Boy/2577_D011_00122R_CROP_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Bridget%20Jones-%20Mad%20About%20the%20Boy/2577_D057_00173R_500px.jpg"
  ],
  "movieCountryCMS": [
  "GBR"
  ],
  "distributorName": "Taramount",
  "synopsis": "Dvostruka dobitnica Oskara Rene Zelveger vraća se ulozi koja je zauvek stvorila heroinu romantične komedije, ženu čiji je neponovljiv pristup životu i ljubavi redefinisao čitav filmski žanr.\n\nBridžet Džouns se prvi put pojavila na policama u književnom fenomenu Helen Filding „Dnevnik Bridžet Džouns“, koji je postao globalni bestseler i filmski blokbaster. Kao samohrana žena koja živi u Londonu, Bridžet Džouns je na specifičan način upoznala svet sa svojim romantičnim avanturama, a njena sposobnost da trijumfuje uprkos nedaćama dovela ju je do toga da se konačno uda za vrhunskog advokata Marka Darsija i postane majka njihovog dečaka. Konačno srećni.\n\nAli u filmu „Bridžet Džouns – Luda za njim“, Bridžet je ponovo sama, udovica je već četiri godine, jer je Mark ubijen u humanitarnoj misiji u Sudanu. Ona je sada samohrana majka devetogodišnjeg Bilija i četvorogodišnje Mejbl i zaglavljena je u emocionalnom vrtlogu, odgajajući svoju decu uz pomoć svojih odanih prijatelja, pa čak i svog bivšeg ljubavnika Danijela Klivera (Hju Grant).\n\nPod pritiskom svojih najbližih — Šaz, Džud i Toma, njene koleginice Mirande, majke i njenog ginekologa doktorke Rolings (dobitnica Oskara Ema Tompson) — da prokrče novi put ka životu i ljubavi, Bridžet se vraća na posao, isprobavajući čak i aplikacije za upoznavanje, gde ubrzo počne da je proganja sanjivi i entuzijastični mlađi muškarac (Leo Vudal iz Belog Lotusa). Žonglirajući između posla, kuće i romanse, Bridžet se bori sa osudom savršenih majki u školi, brine za Bilija kome nedostaje njegov otac i upušta se u niz neprijatnih susreta sa Bilijevim nastavnikom nauke (kandidat za Oskara Čuitel Edžiofor).",
  "shortSynopsis": "Četvrti nastavak poznate i veoma uspešne romantične komedije, zasnovan na istoimenom romanu."
    },
    {
      "id": "HO00014030",
      "posterImage": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/Anora%20veci_1920px446.jpg",
      "title": "Anora",
      "descriptionCalculated": "Film „ANORA“ pobednik Kanskog festivala i osvajač jedne od najprestižnijih kinematografskih nagrada, Zlatne palme, je priča o ljubavi, požudi, novcu i nezasitoj želji za srećom i uživanjem.\n\nAnora je mlada egzotična igračica iz Bruklina koja se, ubrzo po upoznavanju, udaje za Vanju, sina ruskog oligarha. Kada vest stigne do Rusije, mladoženjini roditelji kreću za Njujork, rešeni da ponište brak.",
      "descriptionShortCalculated": "Film „ANORA“ je priča o ljubavi, požudi, novcu i nezatitoj želji za srećom i uživanjem.",
      "trailers": [
      {
      "trailerKey": "e056d6af-a218-4bdf-9d59-e78482979696",
      "keyframeUrl": "https://kf-cineplexx.sf.apa.at/cineplexx/20241002_30_886170_anora_rs.jpg",
      "videoUrl": "https://vs-dl-cineplexx.sf.apa.at/apavideoservice/cineplexx/20241002_30_886170_anora_rs_720.mp4",
      "iosUrl": "https://vs-str-cineplexx.sf.apa.at/vod/_definst_/http/cineplexx/smil:20241002_30_886170_anora_rs_404.smil/playlist.m3u8",
      "androidUrl": "https://vs-dl-cineplexx.sf.apa.at/apavideoservice/cineplexx/20241002_30_886170_anora_rs_720.mp4",
      "universalPlayerUrl": "https://uvp-cineplexx.sf.apa.at/embed/e056d6af-a218-4bdf-9d59-e78482979696"
      }
      ],
      "director": "Sean  Baker",
      "actors": [
      "Yuriy Borisov",
      "Ross Brodar",
      "Mikey  Madison",
      "Lindsey  Normington",
      "Karren Karagulian",
      "Ivy Wolk",
      "Mark Eydelshteyn",
      "Vache Tovmasyan"
      ],
      "startDate": "2024-11-21",
      "openingDate": "2024-11-21T00:00:00+01:00",
      "genres": [
      "Drama"
      ],
      "comingSoon": true,
      "isScheduledAtCinema": true,
      "rating": "o.A.",
      "runTime": 139,
      "gallery": [
      "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Anora/4224_D001_26438Rv2_500px.jpg",
      "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Anora/4224_D001_16907R_500px.jpg",
      "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Anora/4224_D001_26672R_500px.jpg",
      "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Anora/4224_D001_27440_CROPR_500px.jpg",
      "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Anora/ANORA_Credit_Drew%20Daniels_500px.jpg",
      "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Anora/4224_D001_14028Rv2_500px.jpg",
      "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Anora/4224_D001_06804R_500px.jpg",
      "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Anora/4224_Mikey%20Madison%20as%20Ani%20and%20Mark%20Eydelshteyn%20as%20Ivan_500px.tif"
      ],
      "movieCountryCMS": [
      "USA"
      ],
      "distributorName": "Taramount",
      "synopsis": "Film „ANORA“ pobednik Kanskog festivala i osvajač jedne od najprestižnijih kinematografskih nagrada, Zlatne palme, je priča o ljubavi, požudi, novcu i nezasitoj želji za srećom i uživanjem.\n\nAnora je mlada egzotična igračica iz Bruklina koja se, ubrzo po upoznavanju, udaje za Vanju, sina ruskog oligarha. Kada vest stigne do Rusije, mladoženjini roditelji kreću za Njujork, rešeni da ponište brak.",
      "shortSynopsis": "Film „ANORA“ je priča o ljubavi, požudi, novcu i nezatitoj želji za srećom i uživanjem."
    },
    {
  "id": "HO00014952",
  "posterImage": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/B1_DEN-OF-THIEVES_2_SRB_712px446_1.jpg",
  "title": "Bratstvo lopova 2: Panter",
  "descriptionCalculated": "U ovom nastavku, legendarni Big Nik (Butler) ponovo kreće u lov – ovog puta u opasni svet evropskog podzemlja. Njegova meta? Doni (Jackson), koji se našao usred smrtonosnih intriga u svetu kradljivaca dijamanata i nemilosrdne bande Pink Panter. Njihov cilj: najveća i najdrskija pljačka u istoriji – dijamantska berza svetskog kalibra.\n\nS adrenalinskim poterama, dvostrukim izdajama i nepredvidivim obrtima, Big Nik mora da se suoči ne samo s kriminalcima, već i sa sopstvenim granicama kako bi zaustavio ovu smrtonosnu operaciju. Spremite se za akciju bez prestanka – akciju u kojoj se svaki potez računa, a ulog je život ili smrt!",
  "descriptionShortCalculated": "Džerard Batler (Plane, 300) i O’Šea Džekson Jr. (Godzilla: King of the Monsters) vraćaju se u eksplozivnom nastavku akcionog hita iz 2018 „Bratstvo lopova“!",
  "trailers": [
  {
  "trailerKey": "1b932e60-d2bc-4fa4-a8ac-873833ca8722",
  "keyframeUrl": "https://kf-cineplexx.sf.apa.at/cineplexx/20241231_30_909729_den_of_thieves_2_rs.jpg",
  "videoUrl": "https://vs-dl-cineplexx.sf.apa.at/apavideoservice/cineplexx/20241231_30_909729_den_of_thieves_2_rs_720.mp4",
  "iosUrl": "https://vs-str-cineplexx.sf.apa.at/vod/_definst_/http/cineplexx/smil:20241231_30_909729_den_of_thieves_2_rs_404.smil/playlist.m3u8",
  "androidUrl": "https://vs-dl-cineplexx.sf.apa.at/apavideoservice/cineplexx/20241231_30_909729_den_of_thieves_2_rs_720.mp4",
  "universalPlayerUrl": "https://uvp-cineplexx.sf.apa.at/embed/1b932e60-d2bc-4fa4-a8ac-873833ca8722"
  }
  ],
  "director": "Christian  Gudegast",
  "actors": [
  "Gerard Butler",
  "Salvatore Esposito",
  "O'Shea Jackson Jr.",
  "Swen Temmel",
  "Evin Ahmad",
  "Meadow Williams"
  ],
  "startDate": "2025-01-09",
  "openingDate": "2025-01-09T00:00:00+01:00",
  "genres": [
  "Drama",
  "Action",
  "crime"
  ],
  "comingSoon": true,
  "isScheduledAtCinema": true,
  "rating": "o.A.",
  "runTime": 130,
  "gallery": [
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_02193702_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_00365_R_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_10375_R_CROP_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_01112621_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_08241_R_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_07931_R_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_07998_R_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_02023113_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_07843_R_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_02091102_R_500px.jpg"
  ],
  "movieCountryCMS": [
  "USA"
  ],
  "distributorName": "Blitz",
  "synopsis": "U ovom nastavku, legendarni Big Nik (Butler) ponovo kreće u lov – ovog puta u opasni svet evropskog podzemlja. Njegova meta? Doni (Jackson), koji se našao usred smrtonosnih intriga u svetu kradljivaca dijamanata i nemilosrdne bande Pink Panter. Njihov cilj: najveća i najdrskija pljačka u istoriji – dijamantska berza svetskog kalibra.\n\nS adrenalinskim poterama, dvostrukim izdajama i nepredvidivim obrtima, Big Nik mora da se suoči ne samo s kriminalcima, već i sa sopstvenim granicama kako bi zaustavio ovu smrtonosnu operaciju. Spremite se za akciju bez prestanka – akciju u kojoj se svaki potez računa, a ulog je život ili smrt!",
  "shortSynopsis": "Džerard Batler (Plane, 300) i O’Šea Džekson Jr. (Godzilla: King of the Monsters) vraćaju se u eksplozivnom nastavku akcionog hita iz 2018 „Bratstvo lopova“!"
    },
    {
  "id": "HO00014037",
  "posterImage": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/BJMATB%20veci_712px446_1.jpg",
  "title": "Bridžet Džouns: Luda za njim",
  "descriptionCalculated": "Dvostruka dobitnica Oskara Rene Zelveger vraća se ulozi koja je zauvek stvorila heroinu romantične komedije, ženu čiji je neponovljiv pristup životu i ljubavi redefinisao čitav filmski žanr.\n\nBridžet Džouns se prvi put pojavila na policama u književnom fenomenu Helen Filding „Dnevnik Bridžet Džouns“, koji je postao globalni bestseler i filmski blokbaster. Kao samohrana žena koja živi u Londonu, Bridžet Džouns je na specifičan način upoznala svet sa svojim romantičnim avanturama, a njena sposobnost da trijumfuje uprkos nedaćama dovela ju je do toga da se konačno uda za vrhunskog advokata Marka Darsija i postane majka njihovog dečaka. Konačno srećni.\n\nAli u filmu „Bridžet Džouns – Luda za njim“, Bridžet je ponovo sama, udovica je već četiri godine, jer je Mark ubijen u humanitarnoj misiji u Sudanu. Ona je sada samohrana majka devetogodišnjeg Bilija i četvorogodišnje Mejbl i zaglavljena je u emocionalnom vrtlogu, odgajajući svoju decu uz pomoć svojih odanih prijatelja, pa čak i svog bivšeg ljubavnika Danijela Klivera (Hju Grant).\n\nPod pritiskom svojih najbližih — Šaz, Džud i Toma, njene koleginice Mirande, majke i njenog ginekologa doktorke Rolings (dobitnica Oskara Ema Tompson) — da prokrče novi put ka životu i ljubavi, Bridžet se vraća na posao, isprobavajući čak i aplikacije za upoznavanje, gde ubrzo počne da je proganja sanjivi i entuzijastični mlađi muškarac (Leo Vudal iz Belog Lotusa). Žonglirajući između posla, kuće i romanse, Bridžet se bori sa osudom savršenih majki u školi, brine za Bilija kome nedostaje njegov otac i upušta se u niz neprijatnih susreta sa Bilijevim nastavnikom nauke (kandidat za Oskara Čuitel Edžiofor).",
  "descriptionShortCalculated": "Četvrti nastavak poznate i veoma uspešne romantične komedije, zasnovan na istoimenom romanu.",
  "trailers": [
  {
  "trailerKey": "30e17b28-d18a-4f26-aac4-0add82d52a5c",
  "keyframeUrl": "https://kf-cineplexx.sf.apa.at/cineplexx/20241120_30_899681_bridget_jones_rs.jpg",
  "videoUrl": "https://vs-dl-cineplexx.sf.apa.at/apavideoservice/cineplexx/20241120_30_899681_bridget_jones_rs_720.mp4",
  "iosUrl": "https://vs-str-cineplexx.sf.apa.at/vod/_definst_/http/cineplexx/smil:20241120_30_899681_bridget_jones_rs_404.smil/playlist.m3u8",
  "androidUrl": "https://vs-dl-cineplexx.sf.apa.at/apavideoservice/cineplexx/20241120_30_899681_bridget_jones_rs_720.mp4",
  "universalPlayerUrl": "https://uvp-cineplexx.sf.apa.at/embed/30e17b28-d18a-4f26-aac4-0add82d52a5c"
  }
  ],
  "director": "Michael Morris",
  "actors": [
  "Emma Thompson",
  "Hugh Grant",
  "Chiwetel  Ejiofor",
  "Renée Zellweger",
  "Leo Woodall"
  ],
  "startDate": "2025-02-13",
  "openingDate": "2025-02-13T00:00:00+01:00",
  "genres": [
  "comedy",
  "Drama"
  ],
  "comingSoon": true,
  "isScheduledAtCinema": true,
  "rating": "o.A.",
  "runTime": 125,
  "gallery": [
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Bridget%20Jones-%20Mad%20About%20the%20Boy/2577_D011_00122R_CROP_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Bridget%20Jones-%20Mad%20About%20the%20Boy/2577_D057_00173R_500px.jpg"
  ],
  "movieCountryCMS": [
  "GBR"
  ],
  "distributorName": "Taramount",
  "synopsis": "Dvostruka dobitnica Oskara Rene Zelveger vraća se ulozi koja je zauvek stvorila heroinu romantične komedije, ženu čiji je neponovljiv pristup životu i ljubavi redefinisao čitav filmski žanr.\n\nBridžet Džouns se prvi put pojavila na policama u književnom fenomenu Helen Filding „Dnevnik Bridžet Džouns“, koji je postao globalni bestseler i filmski blokbaster. Kao samohrana žena koja živi u Londonu, Bridžet Džouns je na specifičan način upoznala svet sa svojim romantičnim avanturama, a njena sposobnost da trijumfuje uprkos nedaćama dovela ju je do toga da se konačno uda za vrhunskog advokata Marka Darsija i postane majka njihovog dečaka. Konačno srećni.\n\nAli u filmu „Bridžet Džouns – Luda za njim“, Bridžet je ponovo sama, udovica je već četiri godine, jer je Mark ubijen u humanitarnoj misiji u Sudanu. Ona je sada samohrana majka devetogodišnjeg Bilija i četvorogodišnje Mejbl i zaglavljena je u emocionalnom vrtlogu, odgajajući svoju decu uz pomoć svojih odanih prijatelja, pa čak i svog bivšeg ljubavnika Danijela Klivera (Hju Grant).\n\nPod pritiskom svojih najbližih — Šaz, Džud i Toma, njene koleginice Mirande, majke i njenog ginekologa doktorke Rolings (dobitnica Oskara Ema Tompson) — da prokrče novi put ka životu i ljubavi, Bridžet se vraća na posao, isprobavajući čak i aplikacije za upoznavanje, gde ubrzo počne da je proganja sanjivi i entuzijastični mlađi muškarac (Leo Vudal iz Belog Lotusa). Žonglirajući između posla, kuće i romanse, Bridžet se bori sa osudom savršenih majki u školi, brine za Bilija kome nedostaje njegov otac i upušta se u niz neprijatnih susreta sa Bilijevim nastavnikom nauke (kandidat za Oskara Čuitel Edžiofor).",
  "shortSynopsis": "Četvrti nastavak poznate i veoma uspešne romantične komedije, zasnovan na istoimenom romanu."
    },
    {
      "id": "HO00014030",
      "posterImage": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/Anora%20veci_1920px446.jpg",
      "title": "Anora",
      "descriptionCalculated": "Film „ANORA“ pobednik Kanskog festivala i osvajač jedne od najprestižnijih kinematografskih nagrada, Zlatne palme, je priča o ljubavi, požudi, novcu i nezasitoj želji za srećom i uživanjem.\n\nAnora je mlada egzotična igračica iz Bruklina koja se, ubrzo po upoznavanju, udaje za Vanju, sina ruskog oligarha. Kada vest stigne do Rusije, mladoženjini roditelji kreću za Njujork, rešeni da ponište brak.",
      "descriptionShortCalculated": "Film „ANORA“ je priča o ljubavi, požudi, novcu i nezatitoj želji za srećom i uživanjem.",
      "trailers": [
      {
      "trailerKey": "e056d6af-a218-4bdf-9d59-e78482979696",
      "keyframeUrl": "https://kf-cineplexx.sf.apa.at/cineplexx/20241002_30_886170_anora_rs.jpg",
      "videoUrl": "https://vs-dl-cineplexx.sf.apa.at/apavideoservice/cineplexx/20241002_30_886170_anora_rs_720.mp4",
      "iosUrl": "https://vs-str-cineplexx.sf.apa.at/vod/_definst_/http/cineplexx/smil:20241002_30_886170_anora_rs_404.smil/playlist.m3u8",
      "androidUrl": "https://vs-dl-cineplexx.sf.apa.at/apavideoservice/cineplexx/20241002_30_886170_anora_rs_720.mp4",
      "universalPlayerUrl": "https://uvp-cineplexx.sf.apa.at/embed/e056d6af-a218-4bdf-9d59-e78482979696"
      }
      ],
      "director": "Sean  Baker",
      "actors": [
      "Yuriy Borisov",
      "Ross Brodar",
      "Mikey  Madison",
      "Lindsey  Normington",
      "Karren Karagulian",
      "Ivy Wolk",
      "Mark Eydelshteyn",
      "Vache Tovmasyan"
      ],
      "startDate": "2024-11-21",
      "openingDate": "2024-11-21T00:00:00+01:00",
      "genres": [
      "Drama"
      ],
      "comingSoon": true,
      "isScheduledAtCinema": true,
      "rating": "o.A.",
      "runTime": 139,
      "gallery": [
      "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Anora/4224_D001_26438Rv2_500px.jpg",
      "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Anora/4224_D001_16907R_500px.jpg",
      "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Anora/4224_D001_26672R_500px.jpg",
      "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Anora/4224_D001_27440_CROPR_500px.jpg",
      "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Anora/ANORA_Credit_Drew%20Daniels_500px.jpg",
      "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Anora/4224_D001_14028Rv2_500px.jpg",
      "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Anora/4224_D001_06804R_500px.jpg",
      "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Anora/4224_Mikey%20Madison%20as%20Ani%20and%20Mark%20Eydelshteyn%20as%20Ivan_500px.tif"
      ],
      "movieCountryCMS": [
      "USA"
      ],
      "distributorName": "Taramount",
      "synopsis": "Film „ANORA“ pobednik Kanskog festivala i osvajač jedne od najprestižnijih kinematografskih nagrada, Zlatne palme, je priča o ljubavi, požudi, novcu i nezasitoj želji za srećom i uživanjem.\n\nAnora je mlada egzotična igračica iz Bruklina koja se, ubrzo po upoznavanju, udaje za Vanju, sina ruskog oligarha. Kada vest stigne do Rusije, mladoženjini roditelji kreću za Njujork, rešeni da ponište brak.",
      "shortSynopsis": "Film „ANORA“ je priča o ljubavi, požudi, novcu i nezatitoj želji za srećom i uživanjem."
    },
    {
  "id": "HO00014952",
  "posterImage": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/B1_DEN-OF-THIEVES_2_SRB_712px446_1.jpg",
  "title": "Bratstvo lopova 2: Panter",
  "descriptionCalculated": "U ovom nastavku, legendarni Big Nik (Butler) ponovo kreće u lov – ovog puta u opasni svet evropskog podzemlja. Njegova meta? Doni (Jackson), koji se našao usred smrtonosnih intriga u svetu kradljivaca dijamanata i nemilosrdne bande Pink Panter. Njihov cilj: najveća i najdrskija pljačka u istoriji – dijamantska berza svetskog kalibra.\n\nS adrenalinskim poterama, dvostrukim izdajama i nepredvidivim obrtima, Big Nik mora da se suoči ne samo s kriminalcima, već i sa sopstvenim granicama kako bi zaustavio ovu smrtonosnu operaciju. Spremite se za akciju bez prestanka – akciju u kojoj se svaki potez računa, a ulog je život ili smrt!",
  "descriptionShortCalculated": "Džerard Batler (Plane, 300) i O’Šea Džekson Jr. (Godzilla: King of the Monsters) vraćaju se u eksplozivnom nastavku akcionog hita iz 2018 „Bratstvo lopova“!",
  "trailers": [
  {
  "trailerKey": "1b932e60-d2bc-4fa4-a8ac-873833ca8722",
  "keyframeUrl": "https://kf-cineplexx.sf.apa.at/cineplexx/20241231_30_909729_den_of_thieves_2_rs.jpg",
  "videoUrl": "https://vs-dl-cineplexx.sf.apa.at/apavideoservice/cineplexx/20241231_30_909729_den_of_thieves_2_rs_720.mp4",
  "iosUrl": "https://vs-str-cineplexx.sf.apa.at/vod/_definst_/http/cineplexx/smil:20241231_30_909729_den_of_thieves_2_rs_404.smil/playlist.m3u8",
  "androidUrl": "https://vs-dl-cineplexx.sf.apa.at/apavideoservice/cineplexx/20241231_30_909729_den_of_thieves_2_rs_720.mp4",
  "universalPlayerUrl": "https://uvp-cineplexx.sf.apa.at/embed/1b932e60-d2bc-4fa4-a8ac-873833ca8722"
  }
  ],
  "director": "Christian  Gudegast",
  "actors": [
  "Gerard Butler",
  "Salvatore Esposito",
  "O'Shea Jackson Jr.",
  "Swen Temmel",
  "Evin Ahmad",
  "Meadow Williams"
  ],
  "startDate": "2025-01-09",
  "openingDate": "2025-01-09T00:00:00+01:00",
  "genres": [
  "Drama",
  "Action",
  "crime"
  ],
  "comingSoon": true,
  "isScheduledAtCinema": true,
  "rating": "o.A.",
  "runTime": 130,
  "gallery": [
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_02193702_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_00365_R_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_10375_R_CROP_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_01112621_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_08241_R_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_07931_R_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_07998_R_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_02023113_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_07843_R_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_02091102_R_500px.jpg"
  ],
  "movieCountryCMS": [
  "USA"
  ],
  "distributorName": "Blitz",
  "synopsis": "U ovom nastavku, legendarni Big Nik (Butler) ponovo kreće u lov – ovog puta u opasni svet evropskog podzemlja. Njegova meta? Doni (Jackson), koji se našao usred smrtonosnih intriga u svetu kradljivaca dijamanata i nemilosrdne bande Pink Panter. Njihov cilj: najveća i najdrskija pljačka u istoriji – dijamantska berza svetskog kalibra.\n\nS adrenalinskim poterama, dvostrukim izdajama i nepredvidivim obrtima, Big Nik mora da se suoči ne samo s kriminalcima, već i sa sopstvenim granicama kako bi zaustavio ovu smrtonosnu operaciju. Spremite se za akciju bez prestanka – akciju u kojoj se svaki potez računa, a ulog je život ili smrt!",
  "shortSynopsis": "Džerard Batler (Plane, 300) i O’Šea Džekson Jr. (Godzilla: King of the Monsters) vraćaju se u eksplozivnom nastavku akcionog hita iz 2018 „Bratstvo lopova“!"
    },
    {
  "id": "HO00014037",
  "posterImage": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/BJMATB%20veci_712px446_1.jpg",
  "title": "Bridžet Džouns: Luda za njim",
  "descriptionCalculated": "Dvostruka dobitnica Oskara Rene Zelveger vraća se ulozi koja je zauvek stvorila heroinu romantične komedije, ženu čiji je neponovljiv pristup životu i ljubavi redefinisao čitav filmski žanr.\n\nBridžet Džouns se prvi put pojavila na policama u književnom fenomenu Helen Filding „Dnevnik Bridžet Džouns“, koji je postao globalni bestseler i filmski blokbaster. Kao samohrana žena koja živi u Londonu, Bridžet Džouns je na specifičan način upoznala svet sa svojim romantičnim avanturama, a njena sposobnost da trijumfuje uprkos nedaćama dovela ju je do toga da se konačno uda za vrhunskog advokata Marka Darsija i postane majka njihovog dečaka. Konačno srećni.\n\nAli u filmu „Bridžet Džouns – Luda za njim“, Bridžet je ponovo sama, udovica je već četiri godine, jer je Mark ubijen u humanitarnoj misiji u Sudanu. Ona je sada samohrana majka devetogodišnjeg Bilija i četvorogodišnje Mejbl i zaglavljena je u emocionalnom vrtlogu, odgajajući svoju decu uz pomoć svojih odanih prijatelja, pa čak i svog bivšeg ljubavnika Danijela Klivera (Hju Grant).\n\nPod pritiskom svojih najbližih — Šaz, Džud i Toma, njene koleginice Mirande, majke i njenog ginekologa doktorke Rolings (dobitnica Oskara Ema Tompson) — da prokrče novi put ka životu i ljubavi, Bridžet se vraća na posao, isprobavajući čak i aplikacije za upoznavanje, gde ubrzo počne da je proganja sanjivi i entuzijastični mlađi muškarac (Leo Vudal iz Belog Lotusa). Žonglirajući između posla, kuće i romanse, Bridžet se bori sa osudom savršenih majki u školi, brine za Bilija kome nedostaje njegov otac i upušta se u niz neprijatnih susreta sa Bilijevim nastavnikom nauke (kandidat za Oskara Čuitel Edžiofor).",
  "descriptionShortCalculated": "Četvrti nastavak poznate i veoma uspešne romantične komedije, zasnovan na istoimenom romanu.",
  "trailers": [
  {
  "trailerKey": "30e17b28-d18a-4f26-aac4-0add82d52a5c",
  "keyframeUrl": "https://kf-cineplexx.sf.apa.at/cineplexx/20241120_30_899681_bridget_jones_rs.jpg",
  "videoUrl": "https://vs-dl-cineplexx.sf.apa.at/apavideoservice/cineplexx/20241120_30_899681_bridget_jones_rs_720.mp4",
  "iosUrl": "https://vs-str-cineplexx.sf.apa.at/vod/_definst_/http/cineplexx/smil:20241120_30_899681_bridget_jones_rs_404.smil/playlist.m3u8",
  "androidUrl": "https://vs-dl-cineplexx.sf.apa.at/apavideoservice/cineplexx/20241120_30_899681_bridget_jones_rs_720.mp4",
  "universalPlayerUrl": "https://uvp-cineplexx.sf.apa.at/embed/30e17b28-d18a-4f26-aac4-0add82d52a5c"
  }
  ],
  "director": "Michael Morris",
  "actors": [
  "Emma Thompson",
  "Hugh Grant",
  "Chiwetel  Ejiofor",
  "Renée Zellweger",
  "Leo Woodall"
  ],
  "startDate": "2025-02-13",
  "openingDate": "2025-02-13T00:00:00+01:00",
  "genres": [
  "comedy",
  "Drama"
  ],
  "comingSoon": true,
  "isScheduledAtCinema": true,
  "rating": "o.A.",
  "runTime": 125,
  "gallery": [
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Bridget%20Jones-%20Mad%20About%20the%20Boy/2577_D011_00122R_CROP_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Bridget%20Jones-%20Mad%20About%20the%20Boy/2577_D057_00173R_500px.jpg"
  ],
  "movieCountryCMS": [
  "GBR"
  ],
  "distributorName": "Taramount",
  "synopsis": "Dvostruka dobitnica Oskara Rene Zelveger vraća se ulozi koja je zauvek stvorila heroinu romantične komedije, ženu čiji je neponovljiv pristup životu i ljubavi redefinisao čitav filmski žanr.\n\nBridžet Džouns se prvi put pojavila na policama u književnom fenomenu Helen Filding „Dnevnik Bridžet Džouns“, koji je postao globalni bestseler i filmski blokbaster. Kao samohrana žena koja živi u Londonu, Bridžet Džouns je na specifičan način upoznala svet sa svojim romantičnim avanturama, a njena sposobnost da trijumfuje uprkos nedaćama dovela ju je do toga da se konačno uda za vrhunskog advokata Marka Darsija i postane majka njihovog dečaka. Konačno srećni.\n\nAli u filmu „Bridžet Džouns – Luda za njim“, Bridžet je ponovo sama, udovica je već četiri godine, jer je Mark ubijen u humanitarnoj misiji u Sudanu. Ona je sada samohrana majka devetogodišnjeg Bilija i četvorogodišnje Mejbl i zaglavljena je u emocionalnom vrtlogu, odgajajući svoju decu uz pomoć svojih odanih prijatelja, pa čak i svog bivšeg ljubavnika Danijela Klivera (Hju Grant).\n\nPod pritiskom svojih najbližih — Šaz, Džud i Toma, njene koleginice Mirande, majke i njenog ginekologa doktorke Rolings (dobitnica Oskara Ema Tompson) — da prokrče novi put ka životu i ljubavi, Bridžet se vraća na posao, isprobavajući čak i aplikacije za upoznavanje, gde ubrzo počne da je proganja sanjivi i entuzijastični mlađi muškarac (Leo Vudal iz Belog Lotusa). Žonglirajući između posla, kuće i romanse, Bridžet se bori sa osudom savršenih majki u školi, brine za Bilija kome nedostaje njegov otac i upušta se u niz neprijatnih susreta sa Bilijevim nastavnikom nauke (kandidat za Oskara Čuitel Edžiofor).",
  "shortSynopsis": "Četvrti nastavak poznate i veoma uspešne romantične komedije, zasnovan na istoimenom romanu."
    },
    {
      "id": "HO00014030",
      "posterImage": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/Anora%20veci_1920px446.jpg",
      "title": "Anora",
      "descriptionCalculated": "Film „ANORA“ pobednik Kanskog festivala i osvajač jedne od najprestižnijih kinematografskih nagrada, Zlatne palme, je priča o ljubavi, požudi, novcu i nezasitoj želji za srećom i uživanjem.\n\nAnora je mlada egzotična igračica iz Bruklina koja se, ubrzo po upoznavanju, udaje za Vanju, sina ruskog oligarha. Kada vest stigne do Rusije, mladoženjini roditelji kreću za Njujork, rešeni da ponište brak.",
      "descriptionShortCalculated": "Film „ANORA“ je priča o ljubavi, požudi, novcu i nezatitoj želji za srećom i uživanjem.",
      "trailers": [
      {
      "trailerKey": "e056d6af-a218-4bdf-9d59-e78482979696",
      "keyframeUrl": "https://kf-cineplexx.sf.apa.at/cineplexx/20241002_30_886170_anora_rs.jpg",
      "videoUrl": "https://vs-dl-cineplexx.sf.apa.at/apavideoservice/cineplexx/20241002_30_886170_anora_rs_720.mp4",
      "iosUrl": "https://vs-str-cineplexx.sf.apa.at/vod/_definst_/http/cineplexx/smil:20241002_30_886170_anora_rs_404.smil/playlist.m3u8",
      "androidUrl": "https://vs-dl-cineplexx.sf.apa.at/apavideoservice/cineplexx/20241002_30_886170_anora_rs_720.mp4",
      "universalPlayerUrl": "https://uvp-cineplexx.sf.apa.at/embed/e056d6af-a218-4bdf-9d59-e78482979696"
      }
      ],
      "director": "Sean  Baker",
      "actors": [
      "Yuriy Borisov",
      "Ross Brodar",
      "Mikey  Madison",
      "Lindsey  Normington",
      "Karren Karagulian",
      "Ivy Wolk",
      "Mark Eydelshteyn",
      "Vache Tovmasyan"
      ],
      "startDate": "2024-11-21",
      "openingDate": "2024-11-21T00:00:00+01:00",
      "genres": [
      "Drama"
      ],
      "comingSoon": true,
      "isScheduledAtCinema": true,
      "rating": "o.A.",
      "runTime": 139,
      "gallery": [
      "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Anora/4224_D001_26438Rv2_500px.jpg",
      "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Anora/4224_D001_16907R_500px.jpg",
      "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Anora/4224_D001_26672R_500px.jpg",
      "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Anora/4224_D001_27440_CROPR_500px.jpg",
      "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Anora/ANORA_Credit_Drew%20Daniels_500px.jpg",
      "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Anora/4224_D001_14028Rv2_500px.jpg",
      "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Anora/4224_D001_06804R_500px.jpg",
      "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Anora/4224_Mikey%20Madison%20as%20Ani%20and%20Mark%20Eydelshteyn%20as%20Ivan_500px.tif"
      ],
      "movieCountryCMS": [
      "USA"
      ],
      "distributorName": "Taramount",
      "synopsis": "Film „ANORA“ pobednik Kanskog festivala i osvajač jedne od najprestižnijih kinematografskih nagrada, Zlatne palme, je priča o ljubavi, požudi, novcu i nezasitoj želji za srećom i uživanjem.\n\nAnora je mlada egzotična igračica iz Bruklina koja se, ubrzo po upoznavanju, udaje za Vanju, sina ruskog oligarha. Kada vest stigne do Rusije, mladoženjini roditelji kreću za Njujork, rešeni da ponište brak.",
      "shortSynopsis": "Film „ANORA“ je priča o ljubavi, požudi, novcu i nezatitoj želji za srećom i uživanjem."
    },
    {
  "id": "HO00014952",
  "posterImage": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/B1_DEN-OF-THIEVES_2_SRB_712px446_1.jpg",
  "title": "Bratstvo lopova 2: Panter",
  "descriptionCalculated": "U ovom nastavku, legendarni Big Nik (Butler) ponovo kreće u lov – ovog puta u opasni svet evropskog podzemlja. Njegova meta? Doni (Jackson), koji se našao usred smrtonosnih intriga u svetu kradljivaca dijamanata i nemilosrdne bande Pink Panter. Njihov cilj: najveća i najdrskija pljačka u istoriji – dijamantska berza svetskog kalibra.\n\nS adrenalinskim poterama, dvostrukim izdajama i nepredvidivim obrtima, Big Nik mora da se suoči ne samo s kriminalcima, već i sa sopstvenim granicama kako bi zaustavio ovu smrtonosnu operaciju. Spremite se za akciju bez prestanka – akciju u kojoj se svaki potez računa, a ulog je život ili smrt!",
  "descriptionShortCalculated": "Džerard Batler (Plane, 300) i O’Šea Džekson Jr. (Godzilla: King of the Monsters) vraćaju se u eksplozivnom nastavku akcionog hita iz 2018 „Bratstvo lopova“!",
  "trailers": [
  {
  "trailerKey": "1b932e60-d2bc-4fa4-a8ac-873833ca8722",
  "keyframeUrl": "https://kf-cineplexx.sf.apa.at/cineplexx/20241231_30_909729_den_of_thieves_2_rs.jpg",
  "videoUrl": "https://vs-dl-cineplexx.sf.apa.at/apavideoservice/cineplexx/20241231_30_909729_den_of_thieves_2_rs_720.mp4",
  "iosUrl": "https://vs-str-cineplexx.sf.apa.at/vod/_definst_/http/cineplexx/smil:20241231_30_909729_den_of_thieves_2_rs_404.smil/playlist.m3u8",
  "androidUrl": "https://vs-dl-cineplexx.sf.apa.at/apavideoservice/cineplexx/20241231_30_909729_den_of_thieves_2_rs_720.mp4",
  "universalPlayerUrl": "https://uvp-cineplexx.sf.apa.at/embed/1b932e60-d2bc-4fa4-a8ac-873833ca8722"
  }
  ],
  "director": "Christian  Gudegast",
  "actors": [
  "Gerard Butler",
  "Salvatore Esposito",
  "O'Shea Jackson Jr.",
  "Swen Temmel",
  "Evin Ahmad",
  "Meadow Williams"
  ],
  "startDate": "2025-01-09",
  "openingDate": "2025-01-09T00:00:00+01:00",
  "genres": [
  "Drama",
  "Action",
  "crime"
  ],
  "comingSoon": true,
  "isScheduledAtCinema": true,
  "rating": "o.A.",
  "runTime": 130,
  "gallery": [
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_02193702_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_00365_R_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_10375_R_CROP_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_01112621_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_08241_R_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_07931_R_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_07998_R_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_02023113_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_07843_R_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Den%20of%20Thieves%202-%20Panthera/DOT2P_02091102_R_500px.jpg"
  ],
  "movieCountryCMS": [
  "USA"
  ],
  "distributorName": "Blitz",
  "synopsis": "U ovom nastavku, legendarni Big Nik (Butler) ponovo kreće u lov – ovog puta u opasni svet evropskog podzemlja. Njegova meta? Doni (Jackson), koji se našao usred smrtonosnih intriga u svetu kradljivaca dijamanata i nemilosrdne bande Pink Panter. Njihov cilj: najveća i najdrskija pljačka u istoriji – dijamantska berza svetskog kalibra.\n\nS adrenalinskim poterama, dvostrukim izdajama i nepredvidivim obrtima, Big Nik mora da se suoči ne samo s kriminalcima, već i sa sopstvenim granicama kako bi zaustavio ovu smrtonosnu operaciju. Spremite se za akciju bez prestanka – akciju u kojoj se svaki potez računa, a ulog je život ili smrt!",
  "shortSynopsis": "Džerard Batler (Plane, 300) i O’Šea Džekson Jr. (Godzilla: King of the Monsters) vraćaju se u eksplozivnom nastavku akcionog hita iz 2018 „Bratstvo lopova“!"
    },
    {
  "id": "HO00014037",
  "posterImage": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/BJMATB%20veci_712px446_1.jpg",
  "title": "Bridžet Džouns: Luda za njim",
  "descriptionCalculated": "Dvostruka dobitnica Oskara Rene Zelveger vraća se ulozi koja je zauvek stvorila heroinu romantične komedije, ženu čiji je neponovljiv pristup životu i ljubavi redefinisao čitav filmski žanr.\n\nBridžet Džouns se prvi put pojavila na policama u književnom fenomenu Helen Filding „Dnevnik Bridžet Džouns“, koji je postao globalni bestseler i filmski blokbaster. Kao samohrana žena koja živi u Londonu, Bridžet Džouns je na specifičan način upoznala svet sa svojim romantičnim avanturama, a njena sposobnost da trijumfuje uprkos nedaćama dovela ju je do toga da se konačno uda za vrhunskog advokata Marka Darsija i postane majka njihovog dečaka. Konačno srećni.\n\nAli u filmu „Bridžet Džouns – Luda za njim“, Bridžet je ponovo sama, udovica je već četiri godine, jer je Mark ubijen u humanitarnoj misiji u Sudanu. Ona je sada samohrana majka devetogodišnjeg Bilija i četvorogodišnje Mejbl i zaglavljena je u emocionalnom vrtlogu, odgajajući svoju decu uz pomoć svojih odanih prijatelja, pa čak i svog bivšeg ljubavnika Danijela Klivera (Hju Grant).\n\nPod pritiskom svojih najbližih — Šaz, Džud i Toma, njene koleginice Mirande, majke i njenog ginekologa doktorke Rolings (dobitnica Oskara Ema Tompson) — da prokrče novi put ka životu i ljubavi, Bridžet se vraća na posao, isprobavajući čak i aplikacije za upoznavanje, gde ubrzo počne da je proganja sanjivi i entuzijastični mlađi muškarac (Leo Vudal iz Belog Lotusa). Žonglirajući između posla, kuće i romanse, Bridžet se bori sa osudom savršenih majki u školi, brine za Bilija kome nedostaje njegov otac i upušta se u niz neprijatnih susreta sa Bilijevim nastavnikom nauke (kandidat za Oskara Čuitel Edžiofor).",
  "descriptionShortCalculated": "Četvrti nastavak poznate i veoma uspešne romantične komedije, zasnovan na istoimenom romanu.",
  "trailers": [
  {
  "trailerKey": "30e17b28-d18a-4f26-aac4-0add82d52a5c",
  "keyframeUrl": "https://kf-cineplexx.sf.apa.at/cineplexx/20241120_30_899681_bridget_jones_rs.jpg",
  "videoUrl": "https://vs-dl-cineplexx.sf.apa.at/apavideoservice/cineplexx/20241120_30_899681_bridget_jones_rs_720.mp4",
  "iosUrl": "https://vs-str-cineplexx.sf.apa.at/vod/_definst_/http/cineplexx/smil:20241120_30_899681_bridget_jones_rs_404.smil/playlist.m3u8",
  "androidUrl": "https://vs-dl-cineplexx.sf.apa.at/apavideoservice/cineplexx/20241120_30_899681_bridget_jones_rs_720.mp4",
  "universalPlayerUrl": "https://uvp-cineplexx.sf.apa.at/embed/30e17b28-d18a-4f26-aac4-0add82d52a5c"
  }
  ],
  "director": "Michael Morris",
  "actors": [
  "Emma Thompson",
  "Hugh Grant",
  "Chiwetel  Ejiofor",
  "Renée Zellweger",
  "Leo Woodall"
  ],
  "startDate": "2025-02-13",
  "openingDate": "2025-02-13T00:00:00+01:00",
  "genres": [
  "comedy",
  "Drama"
  ],
  "comingSoon": true,
  "isScheduledAtCinema": true,
  "rating": "o.A.",
  "runTime": 125,
  "gallery": [
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Bridget%20Jones-%20Mad%20About%20the%20Boy/2577_D011_00122R_CROP_500px.jpg",
  "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Bridget%20Jones-%20Mad%20About%20the%20Boy/2577_D057_00173R_500px.jpg"
  ],
  "movieCountryCMS": [
  "GBR"
  ],
  "distributorName": "Taramount",
  "synopsis": "Dvostruka dobitnica Oskara Rene Zelveger vraća se ulozi koja je zauvek stvorila heroinu romantične komedije, ženu čiji je neponovljiv pristup životu i ljubavi redefinisao čitav filmski žanr.\n\nBridžet Džouns se prvi put pojavila na policama u književnom fenomenu Helen Filding „Dnevnik Bridžet Džouns“, koji je postao globalni bestseler i filmski blokbaster. Kao samohrana žena koja živi u Londonu, Bridžet Džouns je na specifičan način upoznala svet sa svojim romantičnim avanturama, a njena sposobnost da trijumfuje uprkos nedaćama dovela ju je do toga da se konačno uda za vrhunskog advokata Marka Darsija i postane majka njihovog dečaka. Konačno srećni.\n\nAli u filmu „Bridžet Džouns – Luda za njim“, Bridžet je ponovo sama, udovica je već četiri godine, jer je Mark ubijen u humanitarnoj misiji u Sudanu. Ona je sada samohrana majka devetogodišnjeg Bilija i četvorogodišnje Mejbl i zaglavljena je u emocionalnom vrtlogu, odgajajući svoju decu uz pomoć svojih odanih prijatelja, pa čak i svog bivšeg ljubavnika Danijela Klivera (Hju Grant).\n\nPod pritiskom svojih najbližih — Šaz, Džud i Toma, njene koleginice Mirande, majke i njenog ginekologa doktorke Rolings (dobitnica Oskara Ema Tompson) — da prokrče novi put ka životu i ljubavi, Bridžet se vraća na posao, isprobavajući čak i aplikacije za upoznavanje, gde ubrzo počne da je proganja sanjivi i entuzijastični mlađi muškarac (Leo Vudal iz Belog Lotusa). Žonglirajući između posla, kuće i romanse, Bridžet se bori sa osudom savršenih majki u školi, brine za Bilija kome nedostaje njegov otac i upušta se u niz neprijatnih susreta sa Bilijevim nastavnikom nauke (kandidat za Oskara Čuitel Edžiofor).",
  "shortSynopsis": "Četvrti nastavak poznate i veoma uspešne romantične komedije, zasnovan na istoimenom romanu."
    }
  ]
  public static readonly allShowTimes = ['12:00', '15:00', '18:00', '21:00']
  public static readonly halls = ['Sala 1', 'Sala 2', 'Sala 3', 'Sala 4', 'Sala 5'];

  constructor() {}

  public static getMovie(num: number) {
    return this.movies!.slice(0, num)
  }

  public static getAllMovies() {
    return this.movies!
  }

  public static getMovieById(id: string) {
    const movies = this.getAllMovies()
    for(let movie of movies) {
      if(movie.id == id) {
        return movie
      }
    }
    return null
  }

  public static getRandomHall(): string {
    
    return this.halls[Math.floor(Math.random() * this.halls.length)]
  }

  public static getRandomShowTime(): string[] {
    
    const numShowTimes = Math.floor(Math.random() * 3) + 1
    return this.allShowTimes.sort(() => 0.5 - Math.random()).slice(0, numShowTimes)
  }

  public getShowTimes(): {[key: string]: string[]} {
    let schedule: { [key: string]: string[] } = {}

    MovieService.halls.forEach(hall => {
      let shuffledTimes = [...MovieService.allShowTimes].sort(() => Math.random() - 0.5);
      schedule[hall] = shuffledTimes.slice(0, Math.floor(Math.random() * 3) + 1);
    })
    return schedule
  }
}
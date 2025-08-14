import eth from "../../../public/assets/img/svgs/crypto-currencies/eth.svg";
import xrp from "../../../public/assets/img/svgs/crypto-currencies/xrp.svg";
import ltc from "../../../public/assets/img/svgs/crypto-currencies/ltc.svg";
import xmr from "../../../public/assets/img/svgs/crypto-currencies/xmr.svg";
import steem from "../../../public/assets/img/svgs/crypto-currencies/steem.svg";
import dash from "../../../public/assets/img/svgs/crypto-currencies/dash.svg";
import waves from "../../../public/assets/img/svgs/crypto-currencies/waves.svg";
import user2 from "../../../public/assets/img/users/2.jpg";
import user3 from "../../../public/assets/img/users/3.jpg";
import user4 from "../../../public/assets/img/users/4.jpg";
import user5 from "../../../public/assets/img/users/5.jpg";
import user6 from "../../../public/assets/img/users/6.jpg";
import user7 from "../../../public/assets/img/users/7.jpg";
import user9 from "../../../public/assets/img/users/9.jpg";
import user11 from "../../../public/assets/img/users/11.jpg";
import btc from "../../../public/assets/img/svgs/crypto-currencies/btc.svg";


export const columns = [
    {
        name: "Id",
        selector: "id",
        sortable: true,
    },
    {
        name: "Province",
        selector: "province",
        sortable: true,
    },
    {
        name: "Code",
        selector: "code",
        sortable: true,
    },
    {
        name: "Num° Inscrit",
        selector: "registered",
        sortable: true,
    },
    {
        name: "Bureaux°",
        selector: "offices",
        sortable: true,
    },

];
// export const data = [
//     {
//         "id": 1,
//         "bureaux": "3",
//         "code": "01 01 01 01",
//         "inscrit": "1,158",
//         "province": "ECOLE PUBL. BAS DE GUE-GUE"
//     },
//     {
//         "id": 2,
//         "bureaux": "10",
//         "code": "01 01 01 02",
//         "inscrit": "4,531",
//         "province": "ECOLE PUBLIQUE OKALA"
//     },
//     {
//         "id": 3,
//         "bureaux": "1",
//         "code": "01 01 01 03",
//         "inscrit": "19",
//         "province": "C.E.S. ANGE MBA"
//     },
//     {
//         "id": 4,
//         "bureaux": "2",
//         "code": "01 01 01 04",
//         "inscrit": "862",
//         "province": "LYCEE INDJENDJE GONDJOUT"
//     },
//     {
//         "id": 5,
//         "bureaux": "4",
//         "code": "01 01 01 05",
//         "inscrit": "1,920",
//         "province": "LYCEE LEON MBA"
//     },
//     {
//         "id": 6,
//         "bureaux": "4",
//         "code": "01 01 01 06",
//         "inscrit": "1,695",
//         "province": "ECOLE CONV. CHARBONNAGES"
//     },
//     {
//         "id": 7,
//         "bureaux": "5",
//         "code": "01 01 01 07",
//         "inscrit": "2,006",
//         "province": "ECOLE PUBLIQUE AMBOWE"
//     },
//     {
//         "id": 8,
//         "bureaux": "4",
//         "code": "01 01 01 08",
//         "inscrit": "1,958",
//         "province": "ECOLE PUBLIQUE ALIBADENG"
//     },
//     {
//         "id": 9,
//         "bureaux": "12",
//         "code": "01 01 01 09",
//         "inscrit": "5,708",
//         "province": "ECOLE PUBLIQUE DE LOUIS"
//     },
//     {
//         "id": 10,
//         "bureaux": "2",
//         "code": "01 01 01 10",
//         "inscrit": "822",
//         "province": "ECOLE CONV. GROS BOUQUET 1"
//     },
//     {
//         "id": 11,
//         "bureaux": "1",
//         "code": "01 01 01 11",
//         "inscrit": "249",
//         "province": "ECOLE CONV. GROS BOUQUET 2"
//     },
//     {
//         "id": 12,
//         "bureaux": "2",
//         "code": "01 01 01 12",
//         "inscrit": "771",
//         "province": "ECOLE PUBLIQUE BA OUMAR"
//     },
//     {
//         "id": 13,
//         "bureaux": "3",
//         "code": "01 01 01 13",
//         "inscrit": "1,076",
//         "province": "ECOLE PUBL. -ENS- A"
//     },
//     {
//         "id": 14,
//         "bureaux": "1",
//         "code": "01 01 01 14",
//         "inscrit": "230",
//         "province": "ECOLE PUBL. ENSET.B"
//     },
//     {
//         "id": 15,
//         "bureaux": "1",
//         "code": "01 01 01 15",
//         "inscrit": "64",
//         "province": "CES PRIVE DE LOUIS"
//     },
//     {
//         "id": 16,
//         "bureaux": "2",
//         "code": "01 01 01 16",
//         "inscrit": "667",
//         "province": "ECOLE PUBL. -ENS- B"
//     },
//     {
//         "id": 17,
//         "bureaux": "12",
//         "code": "01 01 01 17",
//         "inscrit": "5,752",
//         "province": "ECOLE PUBLIQUE CHARBONNAGES"
//     },
//     {
//         "id": 18,
//         "bureaux": "1",
//         "code": "01 01 01 18",
//         "inscrit": "481",
//         "province": "ECOLE PUBL. ENSET A"
//     },
//     {
//         "id": 19,
//         "bureaux": "3",
//         "code": "01 01 01 19",
//         "inscrit": "1,015",
//         "province": "COLLEGE N.DAME DE QUABEN"
//     },
//     {
//         "id": 20,
//         "bureaux": "2",
//         "code": "01 01 01 20",
//         "inscrit": "571",
//         "province": "EP. GROS BOUQUET 4"
//     },
//     {
//         "id": 21,
//         "bureaux": "8",
//         "code": "01 01 01 21",
//         "inscrit": "3,514",
//         "province": "LYCEE NELSON MANDELA"
//     },
//     {
//         "id": 22,
//         "bureaux": "1",
//         "code": "01 01 01 22",
//         "inscrit": "46",
//         "province": "EC-PUBL-OKALA B"
//     },
//     {
//         "id": 23,
//         "bureaux": "3",
//         "code": "01 01 02 01",
//         "inscrit": "1,304",
//         "province": "ECOLE ST MICHEL (B)"
//     },
//     {
//         "id": 24,
//         "bureaux": "3",
//         "code": "01 01 02 02",
//         "inscrit": "1,209",
//         "province": "ECOLE PUBLIQUE SOTEGA"
//     },
//     {
//         "id": 25,
//         "bureaux": "1",
//         "code": "01 01 02 03",
//         "inscrit": "208",
//         "province": "ECOLE SAINT JOSEPH 1"
//     },
//     {
//         "id": 26,
//         "bureaux": "5",
//         "code": "01 01 02 04",
//         "inscrit": "2,061",
//         "province": "ECOLE PUBL. CITE MEBIAME"
//     },
//     {
//         "id": 27,
//         "bureaux": "8",
//         "code": "01 01 02 05",
//         "inscrit": "3,773",
//         "province": "E. PUBL. MARTINE OULABOU A"
//     },
//     {
//         "id": 28,
//         "bureaux": "2",
//         "code": "01 01 02 06",
//         "inscrit": "792",
//         "province": "ECOLE PUBLIQUE MONT-FORT"
//     },
//     {
//         "id": 29,
//         "bureaux": "1",
//         "code": "01 01 02 07",
//         "inscrit": "293",
//         "province": "COLLEGE PRIVE SAINTE LYDIE"
//     },
//     {
//         "id": 30,
//         "bureaux": "4",
//         "code": "01 01 02 08",
//         "inscrit": "1,515",
//         "province": "CENTRE PRESCOLAIRE DOMI"
//     },
//     {
//         "id": 31,
//         "bureaux": "7",
//         "code": "01 01 02 09",
//         "inscrit": "3,253",
//         "province": "ECOLE SAINT MICHEL A"
//     },
//     {
//         "id": 32,
//         "bureaux": "1",
//         "code": "01 01 02 10",
//         "inscrit": "445",
//         "province": "ECOLE SAINTE MARIE"
//     },
//     {
//         "id": 33,
//         "bureaux": "2",
//         "code": "01 01 02 11",
//         "inscrit": "765",
//         "province": "ECOLE NATIONALE SUP SECRET. (IUSSO)"
//     },
//     {
//         "id": 34,
//         "bureaux": "1",
//         "code": "01 01 02 12",
//         "inscrit": "214",
//         "province": "ENESP (ANCIEN COLL.RETRAITE)"
//     },
//     {
//         "id": 35,
//         "bureaux": "2",
//         "code": "01 01 02 13",
//         "inscrit": "750",
//         "province": "COLLEGE PRIVE ST NICOLAS"
//     },
//     {
//         "id": 36,
//         "bureaux": "2",
//         "code": "01 01 02 14",
//         "inscrit": "661",
//         "province": "JARDIN DIVIN D AMOUR"
//     },
//     {
//         "id": 37,
//         "bureaux": "4",
//         "code": "01 01 02 15",
//         "inscrit": "1,885",
//         "province": "E. PUBL. MARTINE OULABOU B"
//     },
//     {
//         "id": 38,
//         "bureaux": "4",
//         "code": "01 01 03 01",
//         "inscrit": "1,753",
//         "province": "C. SOCIAL S.HYACINTHE ANTINI"
//     },
//     {
//         "id": 39,
//         "bureaux": "7",
//         "code": "01 01 03 02",
//         "inscrit": "3,200",
//         "province": "ECOLE PILOTE DU CENTRE"
//     },
//     {
//         "id": 40,
//         "bureaux": "4",
//         "code": "01 01 03 03",
//         "inscrit": "1,791",
//         "province": "ECOLE URBAINE DU CENTRE A"
//     },
//     {
//         "id": 41,
//         "bureaux": "3",
//         "code": "01 01 03 04",
//         "inscrit": "1,205",
//         "province": "ECOLE URBAINE DU CENTRE B"
//     },
//     {
//         "id": 42,
//         "bureaux": "2",
//         "code": "01 01 03 05",
//         "inscrit": "963",
//         "province": "ECOLE MONT-BOUET 1 (SORBONNE)"
//     },
//     {
//         "id": 43,
//         "bureaux": "1",
//         "code": "01 01 03 06",
//         "inscrit": "366",
//         "province": "ECOLE PUBL. DE LA PEYRIE"
//     },
//     {
//         "id": 44,
//         "bureaux": "4",
//         "code": "01 01 03 07",
//         "inscrit": "1,718",
//         "province": "CES AKEBE (B)"
//     },
//     {
//         "id": 45,
//         "bureaux": "1",
//         "code": "01 01 03 08",
//         "inscrit": "193",
//         "province": "ECOLE PUBLIQUE AKEBE I"
//     },
//     {
//         "id": 46,
//         "bureaux": "9",
//         "code": "01 01 03 09",
//         "inscrit": "4,440",
//         "province": "ECOLE BELLE-VUE II"
//     },
//     {
//         "id": 47,
//         "bureaux": "8",
//         "code": "01 01 03 10",
//         "inscrit": "3,916",
//         "province": "ECOLE DE KINGUELE"
//     },
//     {
//         "id": 48,
//         "bureaux": "4",
//         "code": "01 01 03 11",
//         "inscrit": "1,601",
//         "province": "CASE DECOUTE CARR. HASSAN"
//     },
//     {
//         "id": 49,
//         "bureaux": "6",
//         "code": "01 01 03 12",
//         "inscrit": "2,971",
//         "province": "ECOLE-PUBLIQUE-PK 8- I"
//     },
//     {
//         "id": 50,
//         "bureaux": "2",
//         "code": "01 01 03 13",
//         "inscrit": "764",
//         "province": "C.E.S. DAKEBE A"
//     },
//     {
//         "id": 51,
//         "bureaux": "11",
//         "code": "01 01 03 14",
//         "inscrit": "5,341",
//         "province": "JARDIN DENFANTS C.N.S.S."
//     },
//     {
//         "id": 52,
//         "bureaux": "7",
//         "code": "01 01 03 15",
//         "inscrit": "3,415",
//         "province": "ECOLE CATH. SAINTE ANNE"
//     },
//     {
//         "id": 53,
//         "bureaux": "2",
//         "code": "01 01 03 16",
//         "inscrit": "659",
//         "province": "EC. PUBL. AKEBE VILLE OPT"
//     },
//     {
//         "id": 54,
//         "bureaux": "3",
//         "code": "01 01 03 17",
//         "inscrit": "1,388",
//         "province": "E. P. AKEBE BELLE-VUE 1 A"
//     },
//     {
//         "id": 55,
//         "bureaux": "3",
//         "code": "01 01 03 18",
//         "inscrit": "1,364",
//         "province": "COLLEGE EVOLUTION"
//     },
//     {
//         "id": 56,
//         "bureaux": "6",
//         "code": "01 01 03 19",
//         "inscrit": "2,694",
//         "province": "ECOLE PUBLIQUE PK8-2"
//     },
//     {
//         "id": 57,
//         "bureaux": "4",
//         "code": "01 01 03 20",
//         "inscrit": "1,529",
//         "province": "CENTRE PRE-SCOLAIRE NOMBAKELE"
//     },
//     {
//         "id": 58,
//         "bureaux": "1",
//         "code": "01 01 03 21",
//         "inscrit": "286",
//         "province": "E.P. AKEBE BELLEVUE 1 B"
//     },
//     {
//         "id": 59,
//         "bureaux": "3",
//         "code": "01 01 03 22",
//         "inscrit": "1,060",
//         "province": "E.P. VENEZ VOIR"
//     },
//     {
//         "id": 60,
//         "bureaux": "1",
//         "code": "01 01 03 23",
//         "inscrit": "213",
//         "province": "BASE SOTRAVIL"
//     },
//     {
//         "id": 61,
//         "bureaux": "1",
//         "code": "01 01 03 24",
//         "inscrit": "303",
//         "province": "E.P. MONT BOUET II"
//     },
//     {
//         "id": 62,
//         "bureaux": "3",
//         "code": "01 01 04 01",
//         "inscrit": "1,192",
//         "province": "ECOLE PUBL.PLAINE NIGER B"
//     },
//     {
//         "id": 63,
//         "bureaux": "3",
//         "code": "01 01 04 02",
//         "inscrit": "1,312",
//         "province": "ECOLE PUBLIQUE DE GLASS"
//     },
//     {
//         "id": 64,
//         "bureaux": "4",
//         "code": "01 01 04 03",
//         "inscrit": "1,722",
//         "province": "CENTRE SOCIAL AKEBE"
//     },
//     {
//         "id": 65,
//         "bureaux": "2",
//         "code": "01 01 04 04",
//         "inscrit": "797",
//         "province": "COURS AMBOUROUET"
//     },
//     {
//         "id": 66,
//         "bureaux": "3",
//         "code": "01 01 04 05",
//         "inscrit": "1,121",
//         "province": "ECOLE PUBL. BATAVEA 2"
//     },
//     {
//         "id": 67,
//         "bureaux": "4",
//         "code": "01 01 04 06",
//         "inscrit": "1,629",
//         "province": "ECOLE PUBL. AKEBE II B"
//     },
//     {
//         "id": 68,
//         "bureaux": "2",
//         "code": "01 01 04 07",
//         "inscrit": "954",
//         "province": "EC. NOTRE DAME DES VICTOIRES A"
//     },
//     {
//         "id": 69,
//         "bureaux": "1",
//         "code": "01 01 04 08",
//         "inscrit": "204",
//         "province": "ECOLE CONSUL. CHAMBRE COMMERCE"
//     },
//     {
//         "id": 70,
//         "bureaux": "5",
//         "code": "01 01 04 09",
//         "inscrit": "2,387",
//         "province": "ECOLE PUBL. DAKEBE II A"
//     },
//     {
//         "id": 71,
//         "bureaux": "1",
//         "code": "01 01 04 10",
//         "inscrit": "295",
//         "province": "CES EVANGELIQUE"
//     },
//     {
//         "id": 72,
//         "bureaux": "3",
//         "code": "01 01 04 11",
//         "inscrit": "1,497",
//         "province": "ECOLE PUBL BATAVEA 1"
//     },
//     {
//         "id": 73,
//         "bureaux": "13",
//         "code": "01 01 04 12",
//         "inscrit": "6,364",
//         "province": "ECOLE PUBLIQUE AWENDJE"
//     },
//     {
//         "id": 74,
//         "bureaux": "4",
//         "code": "01 01 04 13",
//         "inscrit": "1,743",
//         "province": "EC.PUBL. PLAINE NIGER A"
//     },
//     {
//         "id": 75,
//         "bureaux": "2",
//         "code": "01 01 04 14",
//         "inscrit": "901",
//         "province": "EC. NOTRE DAME DES VICTOIRES B"
//     },
//     {
//         "id": 76,
//         "bureaux": "2",
//         "code": "01 01 04 15",
//         "inscrit": "623",
//         "province": "ECOLE BATAVEA"
//     },
//     {
//         "id": 77,
//         "bureaux": "2",
//         "code": "01 01 05 01",
//         "inscrit": "548",
//         "province": "ECOLE CITE DAMAS II"
//     },
//     {
//         "id": 78,
//         "bureaux": "11",
//         "code": "01 01 05 02",
//         "inscrit": "5,204",
//         "province": "ECOLE PUBLIQUE OZANGUE"
//     },
//     {
//         "id": 79,
//         "bureaux": "4",
//         "code": "01 01 05 03",
//         "inscrit": "1,839",
//         "province": "ECOLE STE THERESE LALALA"
//     },
//     {
//         "id": 80,
//         "bureaux": "3",
//         "code": "01 01 05 04",
//         "inscrit": "1,274",
//         "province": "EC. PUBL. MINDOUBE I"
//     },
//     {
//         "id": 81,
//         "bureaux": "5",
//         "code": "01 01 05 05",
//         "inscrit": "2,295",
//         "province": "ECOLE PUBLIQUE CITE DAMAS 1"
//     },
//     {
//         "id": 82,
//         "bureaux": "12",
//         "code": "01 01 05 06",
//         "inscrit": "5,863",
//         "province": "ECOLE PUBL. BISSEGUE"
//     },
//     {
//         "id": 83,
//         "bureaux": "1",
//         "code": "01 01 05 07",
//         "inscrit": "259",
//         "province": "INST. NAT. JEUN. & SPORTS"
//     },
//     {
//         "id": 84,
//         "bureaux": "3",
//         "code": "01 01 05 08",
//         "inscrit": "1,031",
//         "province": "I.A.I"
//     },
//     {
//         "id": 85,
//         "bureaux": "17",
//         "code": "01 01 05 09",
//         "inscrit": "8,087",
//         "province": "ECOLE PUBLIQUE LALALA 1"
//     },
//     {
//         "id": 86,
//         "bureaux": "1",
//         "code": "01 01 05 10",
//         "inscrit": "105",
//         "province": "CENTRE PRESCOLAIRE LALALA 1"
//     },
//     {
//         "id": 87,
//         "bureaux": "1",
//         "code": "01 01 05 11",
//         "inscrit": "168",
//         "province": "LYCEE DOLOUMI"
//     },
//     {
//         "id": 88,
//         "bureaux": "2",
//         "code": "01 01 05 12",
//         "inscrit": "918",
//         "province": "ECOLE PUBLIQUE DOZOUNGUE"
//     },
//     {
//         "id": 89,
//         "bureaux": "3",
//         "code": "01 01 05 13",
//         "inscrit": "1,357",
//         "province": "C.E.S. MINDOUBE II"
//     },
//     {
//         "id": 90,
//         "bureaux": "2",
//         "code": "01 01 05 14",
//         "inscrit": "883",
//         "province": "ECOLE PUBLIQUE DAMAS"
//     },
//     {
//         "id": 91,
//         "bureaux": "1",
//         "code": "01 01 05 15",
//         "inscrit": "179",
//         "province": "ECOLE DAMAS A"
//     },
//     {
//         "id": 92,
//         "bureaux": "1",
//         "code": "01 01 05 16",
//         "inscrit": "366",
//         "province": "MELEN PK11 -1 (EC. PROTESTANTE)"
//     },
//     {
//         "id": 93,
//         "bureaux": "8",
//         "code": "01 01 05 17",
//         "inscrit": "3,733",
//         "province": "MELEN PK11 -2 (ENA)"
//     },
//     {
//         "id": 94,
//         "bureaux": "1",
//         "code": "01 01 05 18",
//         "inscrit": "198",
//         "province": "MELEN PK11 -3 (NZENG-MIANG)"
//     },
//     {
//         "id": 95,
//         "bureaux": "3",
//         "code": "01 01 06 01",
//         "inscrit": "1,104",
//         "province": "LYCEE JEAN-H-OBAME"
//     },
//     {
//         "id": 96,
//         "bureaux": "10",
//         "code": "01 01 06 02",
//         "inscrit": "4,639",
//         "province": "ECOLE PUBL. SIBANG III"
//     },
//     {
//         "id": 97,
//         "bureaux": "5",
//         "code": "01 01 06 03",
//         "inscrit": "2,232",
//         "province": "ECOLE PUBL. NZENG-AYONG 1"
//     },
//     {
//         "id": 98,
//         "bureaux": "3",
//         "code": "01 01 06 04",
//         "inscrit": "1,065",
//         "province": "ECOLE PUBL. NZENG-AYONG 2"
//     },
//     {
//         "id": 99,
//         "bureaux": "1",
//         "code": "01 01 06 05",
//         "inscrit": "354",
//         "province": "ECOLE PUBL. NZENG-AYONG 3"
//     },
//     {
//         "id": 100,
//         "bureaux": "1",
//         "code": "01 01 06 06",
//         "inscrit": "170",
//         "province": "ECOLE PUBL. NZENG-AYONG 4"
//     },
//     {
//         "id": 101,
//         "bureaux": "17",
//         "code": "01 01 06 07",
//         "inscrit": "8,045",
//         "province": "ECOLE PUBL. DRAGAGES"
//     },
//     {
//         "id": 102,
//         "bureaux": "3",
//         "code": "01 01 06 08",
//         "inscrit": "1,044",
//         "province": "ECOLE PUBL. SIBANG 2"
//     },
//     {
//         "id": 103,
//         "bureaux": "2",
//         "code": "01 01 06 09",
//         "inscrit": "602",
//         "province": "E.P. NZENG-AYONG (NOUV. CITE)"
//     },
//     {
//         "id": 104,
//         "bureaux": "6",
//         "code": "01 01 06 10",
//         "inscrit": "2,778",
//         "province": "LYCEE DJOUE DABANY"
//     },
//     {
//         "id": 105,
//         "bureaux": "4",
//         "code": "01 01 06 11",
//         "inscrit": "1,526",
//         "province": "LYCEE DE L AMITIE"
//     },
//     {
//         "id": 106,
//         "bureaux": "3",
//         "code": "01 01 06 12",
//         "inscrit": "1,116",
//         "province": "VILLAGE ONDOGHE"
//     },
//     {
//         "id": 107,
//         "bureaux": "4",
//         "code": "01 01 06 13",
//         "inscrit": "1,802",
//         "province": "EC. PUBL NZENG AYONG DU LAC"
//     },
//     {
//         "id": 108,
//         "bureaux": "3",
//         "code": "01 01 06 14",
//         "inscrit": "1,118",
//         "province": "LYCEE OBIANG ETOUGHE"
//     },
//     {
//         "id": 109,
//         "bureaux": "1",
//         "code": "01 01 06 15",
//         "inscrit": "79",
//         "province": "EP.BAMBOU-CHINE"
//     },
//     {
//         "id": 110,
//         "bureaux": "1",
//         "code": "01 01 06 16",
//         "inscrit": "83",
//         "province": "OVENG"
//     },
//     {
//         "id": 111,
//         "bureaux": "1",
//         "code": "01 01 06 17",
//         "inscrit": "218",
//         "province": "AKOUGBE"
//     },
//     {
//         "id": 112,
//         "bureaux": "84",
//         "code": "01 01 01",
//         "inscrit": "35,115",
//         "province": "1ER  ARRONDISSEMENT"
//     },
//     {
//         "id": 113,
//         "bureaux": "46",
//         "code": "01 01 02",
//         "inscrit": "19,128",
//         "province": "2EME ARRONDISSEMENT"
//     },
//     {
//         "id": 114,
//         "bureaux": "97",
//         "code": "01 01 03",
//         "inscrit": "43,133",
//         "province": "3EME ARRONDISSEMENT"
//     },
//     {
//         "id": 115,
//         "bureaux": "52",
//         "code": "01 01 04",
//         "inscrit": "22,741",
//         "province": "4EME ARRONDISSEMENT"
//     },
//     {
//         "id": 116,
//         "bureaux": "78",
//         "code": "01 01 05",
//         "inscrit": "34,307",
//         "province": "5EME ARRONDISSEMENT"
//     },
//     {
//         "id": 117,
//         "bureaux": "68",
//         "code": "01 01 06",
//         "inscrit": "27,975",
//         "province": "6EME ARRONDISSEMENT"
//     },
//     {
//         "id": 118,
//         "bureaux": "10",
//         "code": "01 03 01 01",
//         "inscrit": "4,772",
//         "province": "ECOLE PUBLIQUE AKOURNAM 1"
//     },
//     {
//         "id": 119,
//         "bureaux": "5",
//         "code": "01 03 01 02",
//         "inscrit": "2,375",
//         "province": "UNIV. DES SCIENCES DE LA SANTE"
//     },
//     {
//         "id": 120,
//         "bureaux": "5",
//         "code": "01 03 01 03",
//         "inscrit": "2,292",
//         "province": "ECOLE PUBLIQUE SNI 1"
//     },
//     {
//         "id": 121,
//         "bureaux": "2",
//         "code": "01 03 01 04",
//         "inscrit": "847",
//         "province": "ECOLE PUBLIQUE SNI 2"
//     },
//     {
//         "id": 122,
//         "bureaux": "2",
//         "code": "01 03 01 05",
//         "inscrit": "998",
//         "province": "ECOLE PUBLIQUE TRANSGABONAIS"
//     },
//     {
//         "id": 123,
//         "bureaux": "9",
//         "code": "01 03 01 06",
//         "inscrit": "4,359",
//         "province": "ECOLE PUBLIQUE AGOUNGOU"
//     },
//     {
//         "id": 124,
//         "bureaux": "2",
//         "code": "01 03 01 07",
//         "inscrit": "705",
//         "province": "LYCEE TECHNIQUE"
//     },
//     {
//         "id": 125,
//         "bureaux": "7",
//         "code": "01 03 01 08",
//         "inscrit": "3,098",
//         "province": "ECOLE PUBLIQUE ALENAKIRI 1"
//     },
//     {
//         "id": 126,
//         "bureaux": "1",
//         "code": "01 03 01 09",
//         "inscrit": "295",
//         "province": "LYCEE SCIENTIFIQUE"
//     },
//     {
//         "id": 127,
//         "bureaux": "22",
//         "code": "01 03 02 01",
//         "inscrit": "1    791",
//         "province": "ECOLE PUBLIQUE AKOURNAM 2"
//     },
//     {
//         "id": 128,
//         "bureaux": "43",
//         "code": "01 03 01",
//         "inscrit": "19,741",
//         "province": "1ER  ARRONDISSEMENT (OWENDO)"
//     },
//     {
//         "id": 129,
//         "bureaux": "22",
//         "code": "01 03 02",
//         "inscrit": "1    791",
//         "province": "2EME  ARRONDISSEMENT (OWENDO)"
//     },
//     {
//         "id": 130,
//         "bureaux": "4",
//         "code": "01 05 01 01",
//         "inscrit": "1,773",
//         "province": "E.P. NTOUM 1"
//     },
//     {
//         "id": 131,
//         "bureaux": "1",
//         "code": "01 05 01 02",
//         "inscrit": "132",
//         "province": "MEKONANAM"
//     },
//     {
//         "id": 132,
//         "bureaux": "2",
//         "code": "01 05 01 03",
//         "inscrit": "796",
//         "province": "E.P. NTOUM 6 (DAME OYEM)"
//     },
//     {
//         "id": 133,
//         "bureaux": "2",
//         "code": "01 05 01 04",
//         "inscrit": "954",
//         "province": "E.CATH. ST THOMAS"
//     },
//     {
//         "id": 134,
//         "bureaux": "3",
//         "code": "01 05 01 05",
//         "inscrit": "1,073",
//         "province": "LYCEE DE NTOUM (ASSORA)"
//     },
//     {
//         "id": 135,
//         "bureaux": "2",
//         "code": "01 05 01 06",
//         "inscrit": "809",
//         "province": "AKONEKI (SCIERIE)"
//     },
//     {
//         "id": 136,
//         "bureaux": "1",
//         "code": "01 05 01 07",
//         "inscrit": "315",
//         "province": "CIAM ADMINISTRATION"
//     },
//     {
//         "id": 137,
//         "bureaux": "2",
//         "code": "01 05 01 08",
//         "inscrit": "525",
//         "province": "CIMENTERIE (EC PUBL. FOYER)"
//     },
//     {
//         "id": 138,
//         "bureaux": "1",
//         "code": "01 05 01 09",
//         "inscrit": "298",
//         "province": "EC.P. MATOTO (CIAM EXTENTION)"
//     },
//     {
//         "id": 139,
//         "bureaux": "2",
//         "code": "01 05 01 10",
//         "inscrit": "633",
//         "province": "NKAN ECOLE PUBLIQUE"
//     },
//     {
//         "id": 140,
//         "bureaux": "2",
//         "code": "01 05 01 11",
//         "inscrit": "767",
//         "province": "OKOLASSI ECOLE PUBLIQUE"
//     },
//     {
//         "id": 141,
//         "bureaux": "1",
//         "code": "01 05 01 12",
//         "inscrit": "233",
//         "province": "MEYANG CHEFFERIE"
//     },
//     {
//         "id": 142,
//         "bureaux": "1",
//         "code": "01 05 01 13",
//         "inscrit": "240",
//         "province": "MFOULAYONG EC PUBL"
//     },
//     {
//         "id": 143,
//         "bureaux": "3",
//         "code": "01 05 02 01",
//         "inscrit": "1,220",
//         "province": "NKOLTANG 1 (EC. PROTESTANTE)"
//     },
//     {
//         "id": 144,
//         "bureaux": "1",
//         "code": "01 05 02 02",
//         "inscrit": "178",
//         "province": "NKOLTANG 2 (EC. PROTESTANTE)"
//     },
//     {
//         "id": 145,
//         "bureaux": "2",
//         "code": "01 05 02 03",
//         "inscrit": "881",
//         "province": "NKOK 1 PK27 (EC. CATHOLIQUE)"
//     },
//     {
//         "id": 146,
//         "bureaux": "1",
//         "code": "01 05 02 04",
//         "inscrit": "27",
//         "province": "NKOK 1 PK27 (SHM)"
//     },
//     {
//         "id": 147,
//         "bureaux": "3",
//         "code": "01 05 02 05",
//         "inscrit": "1,272",
//         "province": "EC CATHOLIQUE ESSASSA NZOG-MINTANG"
//     },
//     {
//         "id": 148,
//         "bureaux": "1",
//         "code": "01 05 02 06",
//         "inscrit": "318",
//         "province": "AYEME PLAINE EC PUBL"
//     },
//     {
//         "id": 149,
//         "bureaux": "11",
//         "code": "01 05 03 01 ",
//         "inscrit": "5 371",
//         "province": "BIKELE EC PUBLIQUE"
//     },
//     {
//         "id": 150,
//         "bureaux": "115",
//         "code": "01 05 03 02 ",
//         "inscrit": "2 174",
//         "province": "BIZANGO BI-BERE"
//     },
//     {
//         "id": 151,
//         "bureaux": "24",
//         "code": "01 05 01",
//         "inscrit": "8,548",
//         "province": "1ER  ARRONDISSEMENT (NTOUM)"
//     },
//     {
//         "id": 152,
//         "bureaux": "11",
//         "code": "01 05 02",
//         "inscrit": "3,896",
//         "province": "2EME  ARRONDISSEMENT (NTOUM)"
//     },
//     {
//         "id": 153,
//         "bureaux": "16",
//         "code": "01 05 03",
//         "inscrit": "7,545",
//         "province": "3EME  ARRONDISSEMENT (NTOUM)"
//     },
//     {
//         "id": 154,
//         "bureaux": "1",
//         "code": "01 06 02 01",
//         "inscrit": "382",
//         "province": "NZAMALIGUE EC PUBL"
//     },
//     {
//         "id": 155,
//         "bureaux": "1",
//         "code": "01 06 02 02",
//         "inscrit": "183",
//         "province": "E.P. ELONG-EKO"
//     },
//     {
//         "id": 156,
//         "bureaux": "1",
//         "code": "01 06 02 03",
//         "inscrit": "161",
//         "province": "E.P.C. DONGUILA"
//     },
//     {
//         "id": 157,
//         "bureaux": "1",
//         "code": "01 06 02 04",
//         "inscrit": "1",
//         "province": "OKOLASSI EC PUB 1 (OKOLASSI)"
//     },
//     {
//         "id": 158,
//         "bureaux": "1",
//         "code": "01 06 02 06",
//         "inscrit": "393",
//         "province": "AYEME MARITIME EC PUBL"
//     },
//     {
//         "id": 159,
//         "bureaux": "1",
//         "code": "01 06 02 07",
//         "inscrit": "250",
//         "province": "NZOG-BOUR"
//     },
//     {
//         "id": 160,
//         "bureaux": "1",
//         "code": "01 06 03 01",
//         "inscrit": "334",
//         "province": "E.P.C. MEBBA 1 ET 2"
//     },
//     {
//         "id": 161,
//         "bureaux": "1",
//         "code": "01 06 03 02",
//         "inscrit": "94",
//         "province": "AKOK MISSION CHINOISE"
//     },
//     {
//         "id": 162,
//         "bureaux": "1",
//         "code": "01 06 03 03",
//         "inscrit": "364",
//         "province": "AKOK EC PUBLIQUE"
//     },
//     {
//         "id": 163,
//         "bureaux": "1",
//         "code": "01 06 03 04",
//         "inscrit": "326",
//         "province": "EC PUB NZOGBOUR"
//     },
//     {
//         "id": 164,
//         "bureaux": "1",
//         "code": "01 06 03 05",
//         "inscrit": "162",
//         "province": "ATANGA DISPENSAIRE"
//     },
//     {
//         "id": 165,
//         "bureaux": "0",
//         "code": "01 06 03 06",
//         "inscrit": "0",
//         "province": "MVANA YEME"
//     },
//     {
//         "id": 166,
//         "bureaux": "1",
//         "code": "01 06 03 07",
//         "inscrit": "127",
//         "province": "NZOULAMEYONG"
//     },
//     {
//         "id": 167,
//         "bureaux": "6",
//         "code": "01 06 02",
//         "inscrit": "1,370",
//         "province": "KOMO-NTOUM"
//     },
//     {
//         "id": 168,
//         "bureaux": "6",
//         "code": "01 06 03",
//         "inscrit": "1,407",
//         "province": "MBE"
//     },
//     {
//         "id": 169,
//         "bureaux": "1",
//         "code": "01 07 00 01",
//         "inscrit": "441",
//         "province": "ECOLE PROTESTANTE DANGOME"
//     },
//     {
//         "id": 170,
//         "bureaux": "1",
//         "code": "01 07 00 02",
//         "inscrit": "286",
//         "province": "EC CATHOLIQUE PRIVEE KANGO"
//     },
//     {
//         "id": 171,
//         "bureaux": "1",
//         "code": "01 07 00 03",
//         "inscrit": "314",
//         "province": "E.P. KANGO CENTRE I"
//     },
//     {
//         "id": 172,
//         "bureaux": "1",
//         "code": "01 07 00 04",
//         "inscrit": "373",
//         "province": "EC-PUB-KANGO II"
//     },
//     {
//         "id": 173,
//         "bureaux": "1",
//         "code": "01 07 00 05",
//         "inscrit": "324",
//         "province": "EC-PUBL-KAFELE"
//     },
//     {
//         "id": 174,
//         "bureaux": "1",
//         "code": "01 07 00 06",
//         "inscrit": "242",
//         "province": "EC-PUBL-NIANAME"
//     },
//     {
//         "id": 175,
//         "bureaux": "6",
//         "code": "01 07 00",
//         "inscrit": "1,980",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 176,
//         "bureaux": "1",
//         "code": "01 08 01 01",
//         "inscrit": "265",
//         "province": "NDZONG I"
//     },
//     {
//         "id": 177,
//         "bureaux": "1",
//         "code": "01 08 01 02",
//         "inscrit": "61",
//         "province": "SOGACEL FORET (ABANGA VILLAGE)"
//     },
//     {
//         "id": 178,
//         "bureaux": "1",
//         "code": "01 08 01 03",
//         "inscrit": "120",
//         "province": "E.P. KOUGOULEU"
//     },
//     {
//         "id": 179,
//         "bureaux": "1",
//         "code": "01 08 01 04",
//         "inscrit": "24",
//         "province": "ASSENG FORET"
//     },
//     {
//         "id": 180,
//         "bureaux": "1",
//         "code": "01 08 01 05",
//         "inscrit": "317",
//         "province": "E.P. MFANG"
//     },
//     {
//         "id": 181,
//         "bureaux": "1",
//         "code": "01 08 01 06",
//         "inscrit": "457",
//         "province": "E.P.C. EVINAYONG"
//     },
//     {
//         "id": 182,
//         "bureaux": "1",
//         "code": "01 08 01 07",
//         "inscrit": "415",
//         "province": "E.P. ASSENG PK60-PK68"
//     },
//     {
//         "id": 183,
//         "bureaux": "1",
//         "code": "01 08 01 08",
//         "inscrit": "460",
//         "province": "E.P. ANDEM 1 ET 2"
//     },
//     {
//         "id": 184,
//         "bureaux": "1",
//         "code": "01 08 01 09",
//         "inscrit": "83",
//         "province": "E.P. MBEL"
//     },
//     {
//         "id": 185,
//         "bureaux": "1",
//         "code": "01 08 01 10",
//         "inscrit": "95",
//         "province": "AKONAM-MVINVI"
//     },
//     {
//         "id": 186,
//         "bureaux": "1",
//         "code": "01 08 01 11",
//         "inscrit": "121",
//         "province": "BELE-AKANABOUR"
//     },
//     {
//         "id": 187,
//         "bureaux": "1",
//         "code": "01 08 01 12",
//         "inscrit": "199",
//         "province": "NDOUANIANG I"
//     },
//     {
//         "id": 188,
//         "bureaux": "1",
//         "code": "01 08 01 13",
//         "inscrit": "52",
//         "province": "NDOUANIANG II"
//     },
//     {
//         "id": 189,
//         "bureaux": "1",
//         "code": "01 08 01 14",
//         "inscrit": "120",
//         "province": "ATSIGNANG"
//     },
//     {
//         "id": 190,
//         "bureaux": "1",
//         "code": "01 08 02 01",
//         "inscrit": "236",
//         "province": "EC PUBL FOUR PLACE"
//     },
//     {
//         "id": 191,
//         "bureaux": "1",
//         "code": "01 08 02 02",
//         "inscrit": "328",
//         "province": "EC. PUBL. WOUBELE 1 ET 2"
//     },
//     {
//         "id": 192,
//         "bureaux": "1",
//         "code": "01 08 02 03",
//         "inscrit": "300",
//         "province": "E.P AYEM-BOKOUE"
//     },
//     {
//         "id": 193,
//         "bureaux": "1",
//         "code": "01 08 02 04",
//         "inscrit": "233",
//         "province": "E.P. AGRICOLE"
//     },
//     {
//         "id": 194,
//         "bureaux": "1",
//         "code": "01 08 02 05",
//         "inscrit": "300",
//         "province": "OYAN 1-2-3 (CHEF REGROUP)"
//     },
//     {
//         "id": 195,
//         "bureaux": "1",
//         "code": "01 08 02 06",
//         "inscrit": "201",
//         "province": "E.P OYAN 4"
//     },
//     {
//         "id": 196,
//         "bureaux": "1",
//         "code": "01 08 02 07",
//         "inscrit": "261",
//         "province": "E.P. HEVEGAB-EKOUK"
//     },
//     {
//         "id": 197,
//         "bureaux": "1",
//         "code": "01 08 02 08",
//         "inscrit": "103",
//         "province": "OYAN GARE"
//     },
//     {
//         "id": 198,
//         "bureaux": "1",
//         "code": "01 08 02 09",
//         "inscrit": "105",
//         "province": "MOUPOUMA I"
//     },
//     {
//         "id": 199,
//         "bureaux": "2",
//         "code": "01 08 02 10",
//         "inscrit": "620",
//         "province": "ECOLE PUBL EKOUK CHANTIER"
//     },
//     {
//         "id": 200,
//         "bureaux": "1",
//         "code": "01 08 02 11",
//         "inscrit": "31",
//         "province": "REMBOUE 1 & 2"
//     },
//     {
//         "id": 201,
//         "bureaux": "1",
//         "code": "01 08 02 12",
//         "inscrit": "8",
//         "province": "NZOUA-MEYONG L.F.K."
//     },
//     {
//         "id": 202,
//         "bureaux": "1",
//         "code": "01 08 02 13",
//         "inscrit": "83",
//         "province": "MOUPOUMA II"
//     },
//     {
//         "id": 203,
//         "bureaux": "1",
//         "code": "01 08 02 14",
//         "inscrit": "245",
//         "province": "EKOUK VILLAGE"
//     },
//     {
//         "id": 204,
//         "bureaux": "1",
//         "code": "01 08 02 15",
//         "inscrit": "142",
//         "province": "EKOUK-OBENDJI"
//     },
//     {
//         "id": 205,
//         "bureaux": "1",
//         "code": "01 08 02 16",
//         "inscrit": "1",
//         "province": "AYENE FALE (NGOUANDJI)"
//     },
//     {
//         "id": 206,
//         "bureaux": "1",
//         "code": "01 08 02 17",
//         "inscrit": "104",
//         "province": "LASSA-CHEF DE VILLAGE"
//     },
//     {
//         "id": 207,
//         "bureaux": "1",
//         "code": "01 08 02 18",
//         "inscrit": "41",
//         "province": "NZOGO-SOCOBA"
//     },
//     {
//         "id": 208,
//         "bureaux": "1",
//         "code": "01 08 02 19",
//         "inscrit": "1",
//         "province": "CHANTIER I-F-K"
//     },
//     {
//         "id": 209,
//         "bureaux": "1",
//         "code": "01 08 02 20",
//         "inscrit": "93",
//         "province": "WOUBELE 3 CHEF DE VILL"
//     },
//     {
//         "id": 210,
//         "bureaux": "1",
//         "code": "01 08 02 21",
//         "inscrit": "39",
//         "province": "HEVEGAB CHANTIER"
//     },
//     {
//         "id": 211,
//         "bureaux": "1",
//         "code": "01 08 02 22",
//         "inscrit": "66",
//         "province": "ROUNGOULA"
//     },
//     {
//         "id": 212,
//         "bureaux": "1",
//         "code": "01 08 02 23",
//         "inscrit": "5",
//         "province": "MAKOULA"
//     },
//     {
//         "id": 213,
//         "bureaux": "1",
//         "code": "01 08 02 24",
//         "inscrit": "198",
//         "province": "NSILE"
//     },
//     {
//         "id": 214,
//         "bureaux": "1",
//         "code": "01 08 03 01",
//         "inscrit": "227",
//         "province": "E.P. AYEM AGOULA"
//     },
//     {
//         "id": 215,
//         "bureaux": "1",
//         "code": "01 08 03 02",
//         "inscrit": "61",
//         "province": "NZOCK-BIZEGNE"
//     },
//     {
//         "id": 216,
//         "bureaux": "1",
//         "code": "01 08 03 03",
//         "inscrit": "37",
//         "province": "MBEL ALENE"
//     },
//     {
//         "id": 217,
//         "bureaux": "1",
//         "code": "01 08 03 04",
//         "inscrit": "43",
//         "province": "ENGONG KOUAME"
//     },
//     {
//         "id": 218,
//         "bureaux": "1",
//         "code": "01 08 03 05",
//         "inscrit": "191",
//         "province": "E.P.P. MVENG-AYOM"
//     },
//     {
//         "id": 219,
//         "bureaux": "1",
//         "code": "01 08 03 06",
//         "inscrit": "44",
//         "province": "EC PUBLIQUE MELA"
//     },
//     {
//         "id": 220,
//         "bureaux": "2",
//         "code": "01 08 03 07",
//         "inscrit": "546",
//         "province": "ALEN COMO"
//     },
//     {
//         "id": 221,
//         "bureaux": "1",
//         "code": "01 08 03 08",
//         "inscrit": "47",
//         "province": "EC PUBLIQUE ANDOCK-FOULA"
//     },
//     {
//         "id": 222,
//         "bureaux": "1",
//         "code": "01 08 03 09",
//         "inscrit": "203",
//         "province": "AYEME-AGOULA CHANTIER"
//     },
//     {
//         "id": 223,
//         "bureaux": "1",
//         "code": "01 08 03 10",
//         "inscrit": "77",
//         "province": "CHANTIER SEEF (NZAMALIGUE)"
//     },
//     {
//         "id": 224,
//         "bureaux": "14",
//         "code": "01 08 01",
//         "inscrit": "2,789",
//         "province": "KOMO"
//     },
//     {
//         "id": 225,
//         "bureaux": "25",
//         "code": "01 08 02",
//         "inscrit": "3,744",
//         "province": "BOKOUE"
//     },
//     {
//         "id": 226,
//         "bureaux": "11",
//         "code": "01 08 03",
//         "inscrit": "1,476",
//         "province": "ENGONG"
//     },
//     {
//         "id": 227,
//         "bureaux": "1",
//         "code": "01 09 00 01",
//         "inscrit": "337",
//         "province": "CENTRE VILLE C E S PASCAL NZE"
//     },
//     {
//         "id": 228,
//         "bureaux": "1",
//         "code": "01 09 00 02",
//         "inscrit": "454",
//         "province": "ECOLE PUB DU CENTRE"
//     },
//     {
//         "id": 229,
//         "bureaux": "1",
//         "code": "01 09 00 03",
//         "inscrit": "188",
//         "province": "ECOLE PUB DE MANGALA"
//     },
//     {
//         "id": 230,
//         "bureaux": "1",
//         "code": "01 09 00 04",
//         "inscrit": "207",
//         "province": "MBOGOFALA-VOMBIE"
//     },
//     {
//         "id": 231,
//         "bureaux": "1",
//         "code": "01 09 00 05",
//         "inscrit": "38",
//         "province": "NIANAM-BISSOBINAM"
//     },
//     {
//         "id": 232,
//         "bureaux": "5",
//         "code": "01 09 00",
//         "inscrit": "1,224",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 233,
//         "bureaux": "1",
//         "code": "01 10 01 01",
//         "inscrit": "21",
//         "province": "ABOUNE"
//     },
//     {
//         "id": 234,
//         "bureaux": "1",
//         "code": "01 10 01 02",
//         "inscrit": "8",
//         "province": "EKORODO"
//     },
//     {
//         "id": 235,
//         "bureaux": "1",
//         "code": "01 10 01 03",
//         "inscrit": "41",
//         "province": "BOUTIKA"
//     },
//     {
//         "id": 236,
//         "bureaux": "1",
//         "code": "01 10 01 04",
//         "inscrit": "32",
//         "province": "DINDOMBOU"
//     },
//     {
//         "id": 237,
//         "bureaux": "1",
//         "code": "01 10 01 05",
//         "inscrit": "15",
//         "province": "MESSAYE"
//     },
//     {
//         "id": 238,
//         "bureaux": "1",
//         "code": "01 10 02 01",
//         "inscrit": "119",
//         "province": "IBOUNDJI"
//     },
//     {
//         "id": 239,
//         "bureaux": "1",
//         "code": "01 10 02 02",
//         "inscrit": "134",
//         "province": "LYBE"
//     },
//     {
//         "id": 240,
//         "bureaux": "1",
//         "code": "01 10 02 03",
//         "inscrit": "14",
//         "province": "MBENE"
//     },
//     {
//         "id": 241,
//         "bureaux": "1",
//         "code": "01 10 02 04",
//         "inscrit": "163",
//         "province": "MEKAK-EMONE"
//     },
//     {
//         "id": 242,
//         "bureaux": "1",
//         "code": "01 10 02 05",
//         "inscrit": "213",
//         "province": "IKAZZA"
//     },
//     {
//         "id": 243,
//         "bureaux": "1",
//         "code": "01 10 02 06",
//         "inscrit": "271",
//         "province": "BISSOBINAM 2"
//     },
//     {
//         "id": 244,
//         "bureaux": "1",
//         "code": "01 10 02 07",
//         "inscrit": "115",
//         "province": "MILEMBIE"
//     },
//     {
//         "id": 245,
//         "bureaux": "1",
//         "code": "01 10 02 08",
//         "inscrit": "150",
//         "province": "ABENELANG"
//     },
//     {
//         "id": 246,
//         "bureaux": "1",
//         "code": "01 10 02 09",
//         "inscrit": "97",
//         "province": "NO-AYONG"
//     },
//     {
//         "id": 247,
//         "bureaux": "1",
//         "code": "01 10 02 10",
//         "inscrit": "8",
//         "province": "NOUMBO"
//     },
//     {
//         "id": 248,
//         "bureaux": "5",
//         "code": "01 10 01",
//         "inscrit": "117",
//         "province": "MUNI-NOYA"
//     },
//     {
//         "id": 249,
//         "bureaux": "10",
//         "code": "01 10 02",
//         "inscrit": "1,284",
//         "province": "OCEAN-MONDAH"
//     },
//     {
//         "id": 250,
//         "bureaux": "4",
//         "code": "01 11 01 01",
//         "inscrit": "1,650",
//         "province": "EC PUBL CAP-ESTERIAS"
//     },
//     {
//         "id": 251,
//         "bureaux": "1",
//         "code": "01 11 01 02",
//         "inscrit": "46",
//         "province": "ENEF"
//     },
//     {
//         "id": 252,
//         "bureaux": "1",
//         "code": "01 11 01 03",
//         "inscrit": "45",
//         "province": "BOLOKOBOUET"
//     },
//     {
//         "id": 253,
//         "bureaux": "1",
//         "code": "01 11 01 04",
//         "inscrit": "127",
//         "province": "MALIBE II"
//     },
//     {
//         "id": 254,
//         "bureaux": "3",
//         "code": "01 11 01 05",
//         "inscrit": "1,328",
//         "province": "PREMIER CAMPEMENT"
//     },
//     {
//         "id": 255,
//         "bureaux": "1",
//         "code": "01 11 01 06",
//         "inscrit": "295",
//         "province": "MALIBE I"
//     },
//     {
//         "id": 256,
//         "bureaux": "1",
//         "code": "01 11 01 07",
//         "inscrit": "119",
//         "province": "KOUBOU-KOUBOU"
//     },
//     {
//         "id": 257,
//         "bureaux": "1",
//         "code": "01 11 01 08",
//         "inscrit": "122",
//         "province": "CAP SANTA-CLARA"
//     },
//     {
//         "id": 258,
//         "bureaux": "1",
//         "code": "01 11 01 09",
//         "inscrit": "65",
//         "province": "ILE MBANIE"
//     },
//     {
//         "id": 259,
//         "bureaux": "4",
//         "code": "01 11 02 01",
//         "inscrit": "1,765",
//         "province": "ANGONDJE"
//     },
//     {
//         "id": 260,
//         "bureaux": "3",
//         "code": "01 11 02 02",
//         "inscrit": "1,439",
//         "province": "AVOR-MBAM"
//     },
//     {
//         "id": 261,
//         "bureaux": "8",
//         "code": "01 11 02 03",
//         "inscrit": "3,527",
//         "province": "CES - ANGONDJE"
//     },
//     {
//         "id": 262,
//         "bureaux": "1",
//         "code": "01 11 02 04",
//         "inscrit": "113",
//         "province": "ANGONDJE-NTOM"
//     },
//     {
//         "id": 263,
//         "bureaux": "14",
//         "code": "01 11 01",
//         "inscrit": "3,797",
//         "province": "1ER  ARRONDISSEMENT (AKANDA)"
//     },
//     {
//         "id": 264,
//         "bureaux": "16",
//         "code": "01 11 02",
//         "inscrit": "6,844",
//         "province": "2EME  ARRONDISSEMENT (AKANDA)"
//     },
//     {
//         "id": 265,
//         "bureaux": "2",
//         "code": "01 13 00 01",
//         "inscrit": "946",
//         "province": "NDZOMOE"
//     },
//     {
//         "id": 266,
//         "bureaux": "2",
//         "code": "01 13 00",
//         "inscrit": "946",
//         "province": "-"
//     },
//     {
//         "id": 267,
//         "bureaux": "1",
//         "code": "01 14 01 01",
//         "inscrit": "5",
//         "province": "MFOULENZEM CENTRE"
//     },
//     {
//         "id": 268,
//         "bureaux": "1",
//         "code": "01 14 01 02",
//         "inscrit": "442",
//         "province": "CHINCHOUA"
//     },
//     {
//         "id": 269,
//         "bureaux": "1",
//         "code": "01 14 01 03",
//         "inscrit": "329",
//         "province": "ATONDA SIMBA"
//     },
//     {
//         "id": 270,
//         "bureaux": "1",
//         "code": "01 14 01 04",
//         "inscrit": "10",
//         "province": "MVAM"
//     },
//     {
//         "id": 271,
//         "bureaux": "2",
//         "code": "01 14 02 01",
//         "inscrit": "799",
//         "province": "POINTE DENIS"
//     },
//     {
//         "id": 272,
//         "bureaux": "1",
//         "code": "01 14 02 02",
//         "inscrit": "88",
//         "province": "METECK-MAVI"
//     },
//     {
//         "id": 273,
//         "bureaux": "1",
//         "code": "01 14 02 03",
//         "inscrit": "97",
//         "province": "NIONYE"
//     },
//     {
//         "id": 274,
//         "bureaux": "1",
//         "code": "01 14 02 04",
//         "inscrit": "102",
//         "province": "BISSOBINAM"
//     },
//     {
//         "id": 275,
//         "bureaux": "1",
//         "code": "01 14 02 05",
//         "inscrit": "51",
//         "province": "OYANE"
//     },
//     {
//         "id": 276,
//         "bureaux": "1",
//         "code": "01 14 02 06",
//         "inscrit": "20",
//         "province": "OBELO"
//     },
//     {
//         "id": 277,
//         "bureaux": "4",
//         "code": "01 14 01",
//         "inscrit": "786",
//         "province": "REMBOUE-GONGOUE"
//     },
//     {
//         "id": 278,
//         "bureaux": "7",
//         "code": "01 14 02",
//         "inscrit": "1,157",
//         "province": "OCEAN-GONGOUE"
//     },
//     {
//         "id": 279,
//         "bureaux": "425",
//         "code": "101",
//         "inscrit": "182,399",
//         "province": "LIBREVILLE"
//     },
//     {
//         "id": 280,
//         "bureaux": "65",
//         "code": "103",
//         "inscrit": "3    532",
//         "province": "OWENDO"
//     },
//     {
//         "id": 281,
//         "bureaux": "51",
//         "code": "105",
//         "inscrit": "19,989",
//         "province": "NTOUM"
//     },
//     {
//         "id": 282,
//         "bureaux": "12",
//         "code": "106",
//         "inscrit": "2,777",
//         "province": "KOMO-MONDAH (NTOUM)"
//     },
//     {
//         "id": 283,
//         "bureaux": "6",
//         "code": "107",
//         "inscrit": "1,980",
//         "province": "KANGO"
//     },
//     {
//         "id": 284,
//         "bureaux": "50",
//         "code": "108",
//         "inscrit": "8,009",
//         "province": "COMO (KANGO)"
//     },
//     {
//         "id": 285,
//         "bureaux": "5",
//         "code": "109",
//         "inscrit": "1,224",
//         "province": "COCOBEACH"
//     },
//     {
//         "id": 286,
//         "bureaux": "15",
//         "code": "110",
//         "inscrit": "1,401",
//         "province": "NOYA (COCOBEACH)"
//     },
//     {
//         "id": 287,
//         "bureaux": "30",
//         "code": "111",
//         "inscrit": "1    641",
//         "province": "AKANDA"
//     },
//     {
//         "id": 288,
//         "bureaux": "2",
//         "code": "113",
//         "inscrit": "946",
//         "province": "NDZOMOE"
//     },
//     {
//         "id": 289,
//         "bureaux": "2",
//         "code": "02 01 01 01",
//         "inscrit": "937",
//         "province": "NGOUNGOULOU (MAISON DE  FEMME)"
//     },
//     {
//         "id": 290,
//         "bureaux": "2",
//         "code": "02 01 01 02",
//         "inscrit": "587",
//         "province": "BAPILI (CENTRE SOCIAL)"
//     },
//     {
//         "id": 291,
//         "bureaux": "1",
//         "code": "02 01 01 03",
//         "inscrit": "430",
//         "province": "LEKEI (E.P NGOUNGOULOU)"
//     },
//     {
//         "id": 292,
//         "bureaux": "1",
//         "code": "02 01 01 04",
//         "inscrit": "336",
//         "province": "YOCKO (ST HILAIRE)"
//     },
//     {
//         "id": 293,
//         "bureaux": "2",
//         "code": "02 01 01 05",
//         "inscrit": "501",
//         "province": "NGOBOUNDA (ST HILAIRE)"
//     },
//     {
//         "id": 294,
//         "bureaux": "2",
//         "code": "02 01 01 06",
//         "inscrit": "558",
//         "province": "CORNICHE (AV SAVORGANT)"
//     },
//     {
//         "id": 295,
//         "bureaux": "1",
//         "code": "02 01 01 07",
//         "inscrit": "321",
//         "province": "JARDIN ENFANT POUBARA"
//     },
//     {
//         "id": 296,
//         "bureaux": "1",
//         "code": "02 01 01 08",
//         "inscrit": "342",
//         "province": "LYCEE MARCEL AMOGHO"
//     },
//     {
//         "id": 297,
//         "bureaux": "1",
//         "code": "02 01 02 01",
//         "inscrit": "141",
//         "province": "EPIMBI"
//     },
//     {
//         "id": 298,
//         "bureaux": "1",
//         "code": "02 01 02 02",
//         "inscrit": "448",
//         "province": "DIALOGUE"
//     },
//     {
//         "id": 299,
//         "bureaux": "2",
//         "code": "02 01 02 03",
//         "inscrit": "531",
//         "province": "ONGOUEGNE"
//     },
//     {
//         "id": 300,
//         "bureaux": "2",
//         "code": "02 01 02 04",
//         "inscrit": "516",
//         "province": "AYASSI"
//     },
//     {
//         "id": 301,
//         "bureaux": "3",
//         "code": "02 01 02 05",
//         "inscrit": "1,302",
//         "province": "SABLE II"
//     },
//     {
//         "id": 302,
//         "bureaux": "1",
//         "code": "02 01 02 06",
//         "inscrit": "322",
//         "province": "ANGOUMBOU (EC PUBL DZAMITI)"
//     },
//     {
//         "id": 303,
//         "bureaux": "1",
//         "code": "02 01 02 07",
//         "inscrit": "299",
//         "province": "MVOUNA (EC PUBL DZAMITI)"
//     },
//     {
//         "id": 304,
//         "bureaux": "1",
//         "code": "02 01 02 08",
//         "inscrit": "156",
//         "province": "DJAKA (IAES)"
//     },
//     {
//         "id": 305,
//         "bureaux": "1",
//         "code": "02 01 02 09",
//         "inscrit": "478",
//         "province": "ONGALI 1 (EC PUBL OMBELE)"
//     },
//     {
//         "id": 306,
//         "bureaux": "1",
//         "code": "02 01 02 10",
//         "inscrit": "232",
//         "province": "ONGALI II (EC PUBL OMBELE)"
//     },
//     {
//         "id": 307,
//         "bureaux": "2",
//         "code": "02 01 02 11",
//         "inscrit": "686",
//         "province": "OMBELE (EC PUBL OMBELE)"
//     },
//     {
//         "id": 308,
//         "bureaux": "1",
//         "code": "02 01 02 12",
//         "inscrit": "434",
//         "province": "ONDIMBA (EC PUBL OMBELE)"
//     },
//     {
//         "id": 309,
//         "bureaux": "1",
//         "code": "02 01 02 13",
//         "inscrit": "459",
//         "province": "MONTAGNE SAINTE"
//     },
//     {
//         "id": 310,
//         "bureaux": "2",
//         "code": "02 01 03 01",
//         "inscrit": "800",
//         "province": "EC. CATH. AKOU"
//     },
//     {
//         "id": 311,
//         "bureaux": "1",
//         "code": "02 01 03 02",
//         "inscrit": "133",
//         "province": "MIMBOUMBA"
//     },
//     {
//         "id": 312,
//         "bureaux": "1",
//         "code": "02 01 03 03",
//         "inscrit": "236",
//         "province": "LEKONI"
//     },
//     {
//         "id": 313,
//         "bureaux": "2",
//         "code": "02 01 03 04",
//         "inscrit": "829",
//         "province": "MATEBELE II"
//     },
//     {
//         "id": 314,
//         "bureaux": "1",
//         "code": "02 01 03 05",
//         "inscrit": "286",
//         "province": "BAKOU"
//     },
//     {
//         "id": 315,
//         "bureaux": "1",
//         "code": "02 01 03 06",
//         "inscrit": "238",
//         "province": "PIKAS"
//     },
//     {
//         "id": 316,
//         "bureaux": "1",
//         "code": "02 01 03 07",
//         "inscrit": "355",
//         "province": "CARRIERE"
//     },
//     {
//         "id": 317,
//         "bureaux": "1",
//         "code": "02 01 03 08",
//         "inscrit": "450",
//         "province": "MANGOUNGOU"
//     },
//     {
//         "id": 318,
//         "bureaux": "1",
//         "code": "02 01 03 09",
//         "inscrit": "143",
//         "province": "ONDOUAMA"
//     },
//     {
//         "id": 319,
//         "bureaux": "1",
//         "code": "02 01 03 10",
//         "inscrit": "372",
//         "province": "MENAYE"
//     },
//     {
//         "id": 320,
//         "bureaux": "1",
//         "code": "02 01 03 11",
//         "inscrit": "295",
//         "province": "KESSALA"
//     },
//     {
//         "id": 321,
//         "bureaux": "1",
//         "code": "02 01 03 12",
//         "inscrit": "239",
//         "province": "MATEBELE I"
//     },
//     {
//         "id": 322,
//         "bureaux": "1",
//         "code": "02 01 03 13",
//         "inscrit": "313",
//         "province": "EC-CATH-AKOU II"
//     },
//     {
//         "id": 323,
//         "bureaux": "1",
//         "code": "02 01 04 01",
//         "inscrit": "494",
//         "province": "DJOUORI"
//     },
//     {
//         "id": 324,
//         "bureaux": "2",
//         "code": "02 01 04 02",
//         "inscrit": "631",
//         "province": "MBAYA"
//     },
//     {
//         "id": 325,
//         "bureaux": "2",
//         "code": "02 01 04 03",
//         "inscrit": "579",
//         "province": "MINGARA"
//     },
//     {
//         "id": 326,
//         "bureaux": "1",
//         "code": "02 01 04 04",
//         "inscrit": "385",
//         "province": "MABOUKOU 1-2"
//     },
//     {
//         "id": 327,
//         "bureaux": "2",
//         "code": "02 01 04 05",
//         "inscrit": "508",
//         "province": "YENE 1"
//     },
//     {
//         "id": 328,
//         "bureaux": "1",
//         "code": "02 01 04 06",
//         "inscrit": "211",
//         "province": "MAKANA"
//     },
//     {
//         "id": 329,
//         "bureaux": "1",
//         "code": "02 01 04 07",
//         "inscrit": "429",
//         "province": "MABA"
//     },
//     {
//         "id": 330,
//         "bureaux": "1",
//         "code": "02 01 04 08",
//         "inscrit": "159",
//         "province": "YENE II"
//     },
//     {
//         "id": 331,
//         "bureaux": "12",
//         "code": "02 01 01",
//         "inscrit": "4,012",
//         "province": "1ER  ARRONDISSEMENT"
//     },
//     {
//         "id": 332,
//         "bureaux": "18",
//         "code": "02 01 02",
//         "inscrit": "6,004",
//         "province": "2EME ARRONDISSEMENT"
//     },
//     {
//         "id": 333,
//         "bureaux": "15",
//         "code": "02 01 03",
//         "inscrit": "4,689",
//         "province": "3EME ARRONDISSEMENT"
//     },
//     {
//         "id": 334,
//         "bureaux": "11",
//         "code": "02 01 04",
//         "inscrit": "3,396",
//         "province": "4EME ARRONDISSEMENT"
//     },
//     {
//         "id": 335,
//         "bureaux": "1",
//         "code": "02 02 01 01",
//         "inscrit": "312",
//         "province": "ONKOUA"
//     },
//     {
//         "id": 336,
//         "bureaux": "1",
//         "code": "02 02 01 02",
//         "inscrit": "102",
//         "province": "BIBASSA"
//     },
//     {
//         "id": 337,
//         "bureaux": "1",
//         "code": "02 02 01 03",
//         "inscrit": "173",
//         "province": "NDJOKAYE"
//     },
//     {
//         "id": 338,
//         "bureaux": "1",
//         "code": "02 02 01 04",
//         "inscrit": "164",
//         "province": "VILLE BANGOUE"
//     },
//     {
//         "id": 339,
//         "bureaux": "1",
//         "code": "02 02 01 05",
//         "inscrit": "240",
//         "province": "MBOUMA-OYALI"
//     },
//     {
//         "id": 340,
//         "bureaux": "1",
//         "code": "02 02 01 06",
//         "inscrit": "5",
//         "province": "LENGORI-EVOUGA II"
//     },
//     {
//         "id": 341,
//         "bureaux": "1",
//         "code": "02 02 01 07",
//         "inscrit": "464",
//         "province": "MENAYE-EPILA"
//     },
//     {
//         "id": 342,
//         "bureaux": "1",
//         "code": "02 02 01 08",
//         "inscrit": "112",
//         "province": "EBALA"
//     },
//     {
//         "id": 343,
//         "bureaux": "1",
//         "code": "02 02 01 09",
//         "inscrit": "69",
//         "province": "YOULOU"
//     },
//     {
//         "id": 344,
//         "bureaux": "1",
//         "code": "02 02 01 10",
//         "inscrit": "91",
//         "province": "BINIOMI"
//     },
//     {
//         "id": 345,
//         "bureaux": "1",
//         "code": "02 02 01 11",
//         "inscrit": "125",
//         "province": "LENGORI VILLAGE"
//     },
//     {
//         "id": 346,
//         "bureaux": "1",
//         "code": "02 02 01 12",
//         "inscrit": "89",
//         "province": "EYOUGA 2 VILLAGE"
//     },
//     {
//         "id": 347,
//         "bureaux": "1",
//         "code": "02 02 02 01",
//         "inscrit": "84",
//         "province": "LEPAKA"
//     },
//     {
//         "id": 348,
//         "bureaux": "1",
//         "code": "02 02 02 02",
//         "inscrit": "97",
//         "province": "BITONO"
//     },
//     {
//         "id": 349,
//         "bureaux": "1",
//         "code": "02 02 02 03",
//         "inscrit": "228",
//         "province": "MOUPIA"
//     },
//     {
//         "id": 350,
//         "bureaux": "1",
//         "code": "02 02 02 04",
//         "inscrit": "44",
//         "province": "DZAKI VILLE"
//     },
//     {
//         "id": 351,
//         "bureaux": "1",
//         "code": "02 02 02 05",
//         "inscrit": "154",
//         "province": "BANGUENE-BENGUIA"
//     },
//     {
//         "id": 352,
//         "bureaux": "1",
//         "code": "02 02 02 06",
//         "inscrit": "31",
//         "province": "POUBARA"
//     },
//     {
//         "id": 353,
//         "bureaux": "1",
//         "code": "02 02 02 07",
//         "inscrit": "213",
//         "province": "SUCAF 1"
//     },
//     {
//         "id": 354,
//         "bureaux": "1",
//         "code": "02 02 02 08",
//         "inscrit": "327",
//         "province": "SUCAF 2"
//     },
//     {
//         "id": 355,
//         "bureaux": "1",
//         "code": "02 02 02 09",
//         "inscrit": "75",
//         "province": "SUCAF 3"
//     },
//     {
//         "id": 356,
//         "bureaux": "1",
//         "code": "02 02 02 10",
//         "inscrit": "409",
//         "province": "MVENGUE"
//     },
//     {
//         "id": 357,
//         "bureaux": "1",
//         "code": "02 02 02 11",
//         "inscrit": "129",
//         "province": "MAPOUBA"
//     },
//     {
//         "id": 358,
//         "bureaux": "1",
//         "code": "02 02 02 12",
//         "inscrit": "30",
//         "province": "NGANDA"
//     },
//     {
//         "id": 359,
//         "bureaux": "2",
//         "code": "02 02 02 13",
//         "inscrit": "632",
//         "province": "BASE AERIENNE 02"
//     },
//     {
//         "id": 360,
//         "bureaux": "1",
//         "code": "02 02 03 01",
//         "inscrit": "270",
//         "province": "VENEZ-VOIR"
//     },
//     {
//         "id": 361,
//         "bureaux": "1",
//         "code": "02 02 03 02",
//         "inscrit": "104",
//         "province": "MOTOBO I"
//     },
//     {
//         "id": 362,
//         "bureaux": "1",
//         "code": "02 02 03 03",
//         "inscrit": "151",
//         "province": "OKOLOVILLE"
//     },
//     {
//         "id": 363,
//         "bureaux": "1",
//         "code": "02 02 03 04",
//         "inscrit": "151",
//         "province": "LEKOUSSAGA"
//     },
//     {
//         "id": 364,
//         "bureaux": "1",
//         "code": "02 02 03 05",
//         "inscrit": "98",
//         "province": "OBORILEKOUSSA"
//     },
//     {
//         "id": 365,
//         "bureaux": "1",
//         "code": "02 02 03 06",
//         "inscrit": "134",
//         "province": "MOTOBO II"
//     },
//     {
//         "id": 366,
//         "bureaux": "1",
//         "code": "02 02 03 07",
//         "inscrit": "220",
//         "province": "ANDJOGO"
//     },
//     {
//         "id": 367,
//         "bureaux": "1",
//         "code": "02 02 03 08",
//         "inscrit": "137",
//         "province": "MOKABA"
//     },
//     {
//         "id": 368,
//         "bureaux": "1",
//         "code": "02 02 03 09",
//         "inscrit": "48",
//         "province": "MIKASSA"
//     },
//     {
//         "id": 369,
//         "bureaux": "1",
//         "code": "02 02 03 10",
//         "inscrit": "17",
//         "province": "SOGADEL SUD"
//     },
//     {
//         "id": 370,
//         "bureaux": "1",
//         "code": "02 02 03 11",
//         "inscrit": "48",
//         "province": "OLOUNGA-OMVOURI"
//     },
//     {
//         "id": 371,
//         "bureaux": "12",
//         "code": "02 02 01",
//         "inscrit": "1,946",
//         "province": "DJOUMOU"
//     },
//     {
//         "id": 372,
//         "bureaux": "14",
//         "code": "02 02 02",
//         "inscrit": "2,453",
//         "province": "KASSA"
//     },
//     {
//         "id": 373,
//         "bureaux": "11",
//         "code": "02 02 03",
//         "inscrit": "1,378",
//         "province": "LEKABI"
//     },
//     {
//         "id": 374,
//         "bureaux": "2",
//         "code": "02 03 01 01",
//         "inscrit": "875",
//         "province": "LYCEE TECHN. 1"
//     },
//     {
//         "id": 375,
//         "bureaux": "2",
//         "code": "02 03 01 02",
//         "inscrit": "655",
//         "province": "CITE OCTRA"
//     },
//     {
//         "id": 376,
//         "bureaux": "2",
//         "code": "02 03 01 03",
//         "inscrit": "598",
//         "province": "BELLE-VUE 1-2-3"
//     },
//     {
//         "id": 377,
//         "bureaux": "2",
//         "code": "02 03 01 04",
//         "inscrit": "941",
//         "province": "DOUANES 1-2"
//     },
//     {
//         "id": 378,
//         "bureaux": "2",
//         "code": "02 03 01 05",
//         "inscrit": "726",
//         "province": "MONT-MOANDA 1-2"
//     },
//     {
//         "id": 379,
//         "bureaux": "3",
//         "code": "02 03 01 06",
//         "inscrit": "1,349",
//         "province": "ALLIANCE 1-2"
//     },
//     {
//         "id": 380,
//         "bureaux": "2",
//         "code": "02 03 01 07",
//         "inscrit": "507",
//         "province": "MIOSSO TELEPHERIQUE 1-2"
//     },
//     {
//         "id": 381,
//         "bureaux": "1",
//         "code": "02 03 01 08",
//         "inscrit": "272",
//         "province": "JARDIN ENF LEKOLO 1-2"
//     },
//     {
//         "id": 382,
//         "bureaux": "1",
//         "code": "02 03 01 09",
//         "inscrit": "350",
//         "province": "MOANDA PLAINE 1-2-3"
//     },
//     {
//         "id": 383,
//         "bureaux": "1",
//         "code": "02 03 01 10",
//         "inscrit": "453",
//         "province": "MONTAGNE SAINTE 1-2"
//     },
//     {
//         "id": 384,
//         "bureaux": "2",
//         "code": "02 03 01 11",
//         "inscrit": "628",
//         "province": "MOUKAGNISSI 1-2"
//     },
//     {
//         "id": 385,
//         "bureaux": "2",
//         "code": "02 03 02 01",
//         "inscrit": "658",
//         "province": "LEKOLO"
//     },
//     {
//         "id": 386,
//         "bureaux": "4",
//         "code": "02 03 02 02",
//         "inscrit": "1,713",
//         "province": "JARDIN ENFANT COMILOG"
//     },
//     {
//         "id": 387,
//         "bureaux": "4",
//         "code": "02 03 02 03",
//         "inscrit": "1,608",
//         "province": "LEYIMA"
//     },
//     {
//         "id": 388,
//         "bureaux": "2",
//         "code": "02 03 02 04",
//         "inscrit": "718",
//         "province": "ONKOULA EC-CATH-A ET B"
//     },
//     {
//         "id": 389,
//         "bureaux": "2",
//         "code": "02 03 02 05",
//         "inscrit": "748",
//         "province": "CENTRE COMMERCIAL"
//     },
//     {
//         "id": 390,
//         "bureaux": "20",
//         "code": "02 03 01",
//         "inscrit": "7,354",
//         "province": "1ER  ARRONDISSEMENT"
//     },
//     {
//         "id": 391,
//         "bureaux": "14",
//         "code": "02 03 02",
//         "inscrit": "5,445",
//         "province": "2EME ARRONDISSEMENT"
//     },
//     {
//         "id": 392,
//         "bureaux": "1",
//         "code": "02 04 01 01",
//         "inscrit": "95",
//         "province": "MONDZEYE"
//     },
//     {
//         "id": 393,
//         "bureaux": "1",
//         "code": "02 04 01 02",
//         "inscrit": "164",
//         "province": "KONDA"
//     },
//     {
//         "id": 394,
//         "bureaux": "1",
//         "code": "02 04 01 03",
//         "inscrit": "239",
//         "province": "LEMAGNA (MAGNIMA)"
//     },
//     {
//         "id": 395,
//         "bureaux": "1",
//         "code": "02 04 01 04",
//         "inscrit": "84",
//         "province": "NDJANGATEBE"
//     },
//     {
//         "id": 396,
//         "bureaux": "1",
//         "code": "02 04 01 05",
//         "inscrit": "124",
//         "province": "NDJOUTOU (MOYABI)"
//     },
//     {
//         "id": 397,
//         "bureaux": "1",
//         "code": "02 04 01 06",
//         "inscrit": "71",
//         "province": "MOYABI VILLAGE"
//     },
//     {
//         "id": 398,
//         "bureaux": "1",
//         "code": "02 04 01 07",
//         "inscrit": "2",
//         "province": "MANDJAYE"
//     },
//     {
//         "id": 399,
//         "bureaux": "1",
//         "code": "02 04 01 08",
//         "inscrit": "1",
//         "province": "CHANTIER ROUGIER"
//     },
//     {
//         "id": 400,
//         "bureaux": "1",
//         "code": "02 04 01 09",
//         "inscrit": "188",
//         "province": "DOUMAI"
//     },
//     {
//         "id": 401,
//         "bureaux": "1",
//         "code": "02 04 01 10",
//         "inscrit": "139",
//         "province": "MAGNIMA"
//     },
//     {
//         "id": 402,
//         "bureaux": "1",
//         "code": "02 04 01 11",
//         "inscrit": "110",
//         "province": "MAYELA"
//     },
//     {
//         "id": 403,
//         "bureaux": "1",
//         "code": "02 04 02 01",
//         "inscrit": "176",
//         "province": "MBOUNGOU-BADOUMA"
//     },
//     {
//         "id": 404,
//         "bureaux": "1",
//         "code": "02 04 02 02",
//         "inscrit": "87",
//         "province": "NGUIASSONO"
//     },
//     {
//         "id": 405,
//         "bureaux": "1",
//         "code": "02 04 02 03",
//         "inscrit": "237",
//         "province": "NDOUBI"
//     },
//     {
//         "id": 406,
//         "bureaux": "1",
//         "code": "02 04 02 04",
//         "inscrit": "23",
//         "province": "OGAPROV"
//     },
//     {
//         "id": 407,
//         "bureaux": "1",
//         "code": "02 04 02 05",
//         "inscrit": "46",
//         "province": "MASSANGO II"
//     },
//     {
//         "id": 408,
//         "bureaux": "11",
//         "code": "02 04 01",
//         "inscrit": "1,217",
//         "province": "LEBOMBI-LEKEDI"
//     },
//     {
//         "id": 409,
//         "bureaux": "5",
//         "code": "02 04 02",
//         "inscrit": "569",
//         "province": "LEKEDI-LEYOU"
//     },
//     {
//         "id": 410,
//         "bureaux": "1",
//         "code": "02 05 00 01",
//         "inscrit": "196",
//         "province": "MASSANGO 1"
//     },
//     {
//         "id": 411,
//         "bureaux": "1",
//         "code": "02 05 00 02",
//         "inscrit": "86",
//         "province": "CITE CADRE (MESS COMUF)"
//     },
//     {
//         "id": 412,
//         "bureaux": "1",
//         "code": "02 05 00 03",
//         "inscrit": "302",
//         "province": "CITE AMBIE (ECOLE CATH.)"
//     },
//     {
//         "id": 413,
//         "bureaux": "2",
//         "code": "02 05 00 04",
//         "inscrit": "565",
//         "province": "ECOLE RENOVATION A"
//     },
//     {
//         "id": 414,
//         "bureaux": "1",
//         "code": "02 05 00 05",
//         "inscrit": "114",
//         "province": "MOUNANA (VILLAGE)"
//     },
//     {
//         "id": 415,
//         "bureaux": "1",
//         "code": "02 05 00 06",
//         "inscrit": "276",
//         "province": "CENTRE COMMERCIAL (ECOLE PROT."
//     },
//     {
//         "id": 416,
//         "bureaux": "1",
//         "code": "02 05 00 07",
//         "inscrit": "52",
//         "province": "CITE ADMINIST (HOTEL DE VILLE)"
//     },
//     {
//         "id": 417,
//         "bureaux": "1",
//         "code": "02 05 00 08",
//         "inscrit": "352",
//         "province": "O M O I"
//     },
//     {
//         "id": 418,
//         "bureaux": "1",
//         "code": "02 05 00 09",
//         "inscrit": "313",
//         "province": "ECOLE RENOVATION B"
//     },
//     {
//         "id": 419,
//         "bureaux": "1",
//         "code": "02 05 00 10",
//         "inscrit": "63",
//         "province": "CENTRE-VILLE"
//     },
//     {
//         "id": 420,
//         "bureaux": "1",
//         "code": "02 05 00 11",
//         "inscrit": "89",
//         "province": "NGANGOLO"
//     },
//     {
//         "id": 421,
//         "bureaux": "2",
//         "code": "02 05 00 12",
//         "inscrit": "517",
//         "province": "C.E.S. HENRI BASSET"
//     },
//     {
//         "id": 422,
//         "bureaux": "14",
//         "code": "02 05 00",
//         "inscrit": "2,925",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 423,
//         "bureaux": "2",
//         "code": "02 07 00 01",
//         "inscrit": "847",
//         "province": "MANGOU"
//     },
//     {
//         "id": 424,
//         "bureaux": "1",
//         "code": "02 07 00 02",
//         "inscrit": "366",
//         "province": "MISSION CATHOLIQUE"
//     },
//     {
//         "id": 425,
//         "bureaux": "1",
//         "code": "02 07 00 03",
//         "inscrit": "207",
//         "province": "SEBE"
//     },
//     {
//         "id": 426,
//         "bureaux": "1",
//         "code": "02 07 00 04",
//         "inscrit": "194",
//         "province": "ENGOUMOU"
//     },
//     {
//         "id": 427,
//         "bureaux": "3",
//         "code": "02 07 00 05",
//         "inscrit": "1,108",
//         "province": "MPOUNGOU"
//     },
//     {
//         "id": 428,
//         "bureaux": "2",
//         "code": "02 07 00 06",
//         "inscrit": "592",
//         "province": "ATSIA"
//     },
//     {
//         "id": 429,
//         "bureaux": "1",
//         "code": "02 07 00 07",
//         "inscrit": "438",
//         "province": "OLONGO"
//     },
//     {
//         "id": 430,
//         "bureaux": "1",
//         "code": "02 07 00 08",
//         "inscrit": "181",
//         "province": "ECOLE OBELI OSSINGA"
//     },
//     {
//         "id": 431,
//         "bureaux": "12",
//         "code": "02 07 00",
//         "inscrit": "3,933",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 432,
//         "bureaux": "1",
//         "code": "02 08 01 01",
//         "inscrit": "162",
//         "province": "AYANABO"
//     },
//     {
//         "id": 433,
//         "bureaux": "1",
//         "code": "02 08 01 02",
//         "inscrit": "144",
//         "province": "BOUALA-BOUMA"
//     },
//     {
//         "id": 434,
//         "bureaux": "1",
//         "code": "02 08 01 03",
//         "inscrit": "401",
//         "province": "MOYOL"
//     },
//     {
//         "id": 435,
//         "bureaux": "1",
//         "code": "02 08 01 04",
//         "inscrit": "98",
//         "province": "ALANGA"
//     },
//     {
//         "id": 436,
//         "bureaux": "1",
//         "code": "02 08 01 05",
//         "inscrit": "52",
//         "province": "LEBALADOUBA"
//     },
//     {
//         "id": 437,
//         "bureaux": "1",
//         "code": "02 08 02 01",
//         "inscrit": "72",
//         "province": "MBABIRI"
//     },
//     {
//         "id": 438,
//         "bureaux": "1",
//         "code": "02 08 02 02",
//         "inscrit": "86",
//         "province": "OTOUNDOU"
//     },
//     {
//         "id": 439,
//         "bureaux": "1",
//         "code": "02 08 02 03",
//         "inscrit": "118",
//         "province": "MBOUNGA"
//     },
//     {
//         "id": 440,
//         "bureaux": "1",
//         "code": "02 08 02 04",
//         "inscrit": "159",
//         "province": "OKILA"
//     },
//     {
//         "id": 441,
//         "bureaux": "1",
//         "code": "02 08 02 05",
//         "inscrit": "76",
//         "province": "OLOUNGA II"
//     },
//     {
//         "id": 442,
//         "bureaux": "1",
//         "code": "02 08 02 06",
//         "inscrit": "60",
//         "province": "OSSELE-OTOLA"
//     },
//     {
//         "id": 443,
//         "bureaux": "1",
//         "code": "02 08 02 07",
//         "inscrit": "58",
//         "province": "ONDJEYE"
//     },
//     {
//         "id": 444,
//         "bureaux": "1",
//         "code": "02 08 02 08",
//         "inscrit": "76",
//         "province": "LELAMA C-E-B"
//     },
//     {
//         "id": 445,
//         "bureaux": "1",
//         "code": "02 08 03 01",
//         "inscrit": "129",
//         "province": "ONDILI"
//     },
//     {
//         "id": 446,
//         "bureaux": "1",
//         "code": "02 08 03 02",
//         "inscrit": "119",
//         "province": "NGOMA"
//     },
//     {
//         "id": 447,
//         "bureaux": "1",
//         "code": "02 08 03 03",
//         "inscrit": "194",
//         "province": "ODJALA"
//     },
//     {
//         "id": 448,
//         "bureaux": "1",
//         "code": "02 08 03 04",
//         "inscrit": "121",
//         "province": "NDJOUNOU"
//     },
//     {
//         "id": 449,
//         "bureaux": "1",
//         "code": "02 08 03 05",
//         "inscrit": "54",
//         "province": "MAKATAMANGOYE 1"
//     },
//     {
//         "id": 450,
//         "bureaux": "1",
//         "code": "02 08 03 06",
//         "inscrit": "211",
//         "province": "TEBE"
//     },
//     {
//         "id": 451,
//         "bureaux": "1",
//         "code": "02 08 03 07",
//         "inscrit": "62",
//         "province": "MINA"
//     },
//     {
//         "id": 452,
//         "bureaux": "1",
//         "code": "02 08 03 08",
//         "inscrit": "67",
//         "province": "MAKATAMANGOYE 2"
//     },
//     {
//         "id": 453,
//         "bureaux": "1",
//         "code": "02 08 04 01",
//         "inscrit": "74",
//         "province": "OSSINGA II"
//     },
//     {
//         "id": 454,
//         "bureaux": "1",
//         "code": "02 08 04 02",
//         "inscrit": "180",
//         "province": "ONGUILA"
//     },
//     {
//         "id": 455,
//         "bureaux": "1",
//         "code": "02 08 04 03",
//         "inscrit": "316",
//         "province": "AMBINDA"
//     },
//     {
//         "id": 456,
//         "bureaux": "11",
//         "code": "02 08 05 01",
//         "inscrit": "353",
//         "province": "EC PUBLIQUE LEKORI"
//     },
//     {
//         "id": 457,
//         "bureaux": "11",
//         "code": "02 08 05 02",
//         "inscrit": "127",
//         "province": "EC PUBL OPONGOU-ABOLO I"
//     },
//     {
//         "id": 458,
//         "bureaux": "5",
//         "code": "02 08 01",
//         "inscrit": "857",
//         "province": "LEKALA"
//     },
//     {
//         "id": 459,
//         "bureaux": "8",
//         "code": "02 08 02",
//         "inscrit": "705",
//         "province": "LOUAMI-LELAMA"
//     },
//     {
//         "id": 460,
//         "bureaux": "8",
//         "code": "02 08 03",
//         "inscrit": "957",
//         "province": "MOUNIANDZI"
//     },
//     {
//         "id": 461,
//         "bureaux": "3",
//         "code": "02 08 04",
//         "inscrit": "570",
//         "province": "SEBE-LOURI"
//     },
//     {
//         "id": 462,
//         "bureaux": "2",
//         "code": "02 08 05",
//         "inscrit": "480",
//         "province": "DISTRICT DE LEKORI"
//     },
//     {
//         "id": 463,
//         "bureaux": "1",
//         "code": "02 09 00 01",
//         "inscrit": "150",
//         "province": "BAKOUMBA VILLAGE 1"
//     },
//     {
//         "id": 464,
//         "bureaux": "1",
//         "code": "02 09 00 02",
//         "inscrit": "456",
//         "province": "ECOLE CATHOLIQUE 1"
//     },
//     {
//         "id": 465,
//         "bureaux": "1",
//         "code": "02 09 00 03",
//         "inscrit": "452",
//         "province": "ECOLE CATHOLIQUE 2"
//     },
//     {
//         "id": 466,
//         "bureaux": "1",
//         "code": "02 09 00 04",
//         "inscrit": "360",
//         "province": "ECOLE PUBLIQUE CENTRALE 1"
//     },
//     {
//         "id": 467,
//         "bureaux": "1",
//         "code": "02 09 00 05",
//         "inscrit": "183",
//         "province": "ECOLE PUBLIQUE CENTRALE 2"
//     },
//     {
//         "id": 468,
//         "bureaux": "1",
//         "code": "02 09 00 06",
//         "inscrit": "308",
//         "province": "NGOBI"
//     },
//     {
//         "id": 469,
//         "bureaux": "1",
//         "code": "02 09 00 07",
//         "inscrit": "4",
//         "province": "BAKOUMBA VILLAGE 2"
//     },
//     {
//         "id": 470,
//         "bureaux": "7",
//         "code": "02 09 00",
//         "inscrit": "1,913",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 471,
//         "bureaux": "1",
//         "code": "02 10 02 01",
//         "inscrit": "17",
//         "province": "LEKOKO VILLAGE"
//     },
//     {
//         "id": 472,
//         "bureaux": "1",
//         "code": "02 10 02 02",
//         "inscrit": "212",
//         "province": "MAMIDI"
//     },
//     {
//         "id": 473,
//         "bureaux": "1",
//         "code": "02 10 02 03",
//         "inscrit": "151",
//         "province": "LEKAMBA"
//     },
//     {
//         "id": 474,
//         "bureaux": "1",
//         "code": "02 10 02 04",
//         "inscrit": "79",
//         "province": "POYA"
//     },
//     {
//         "id": 475,
//         "bureaux": "1",
//         "code": "02 10 02 05",
//         "inscrit": "58",
//         "province": "LEMANASSA"
//     },
//     {
//         "id": 476,
//         "bureaux": "1",
//         "code": "02 10 03 01",
//         "inscrit": "124",
//         "province": "E P MOUKONDJOKA"
//     },
//     {
//         "id": 477,
//         "bureaux": "1",
//         "code": "02 10 03 02",
//         "inscrit": "224",
//         "province": "MIPONDI I"
//     },
//     {
//         "id": 478,
//         "bureaux": "1",
//         "code": "02 10 03 03",
//         "inscrit": "108",
//         "province": "BAKAMBA"
//     },
//     {
//         "id": 479,
//         "bureaux": "5",
//         "code": "02 10 02",
//         "inscrit": "517",
//         "province": "LEBOMBI SUD"
//     },
//     {
//         "id": 480,
//         "bureaux": "3",
//         "code": "02 10 03",
//         "inscrit": "456",
//         "province": "MIAGASSA NORD"
//     },
//     {
//         "id": 481,
//         "bureaux": "2",
//         "code": "02 11 00 01",
//         "inscrit": "942",
//         "province": "ECOLE PUBLIQUE"
//     },
//     {
//         "id": 482,
//         "bureaux": "2",
//         "code": "02 11 00",
//         "inscrit": "942",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 483,
//         "bureaux": "1",
//         "code": "02 12 02 01",
//         "inscrit": "164",
//         "province": "MOUNGOUANGO"
//     },
//     {
//         "id": 484,
//         "bureaux": "1",
//         "code": "02 12 02 02",
//         "inscrit": "201",
//         "province": "LENDENDOUNGOU"
//     },
//     {
//         "id": 485,
//         "bureaux": "2",
//         "code": "02 12 02 03",
//         "inscrit": "623",
//         "province": "MBOUA"
//     },
//     {
//         "id": 486,
//         "bureaux": "3",
//         "code": "02 12 01",
//         "inscrit": "587",
//         "province": "LOULA"
//     },
//     {
//         "id": 487,
//         "bureaux": "4",
//         "code": "02 12 02",
//         "inscrit": "988",
//         "province": "MALUNDU"
//     },
//     {
//         "id": 488,
//         "bureaux": "4",
//         "code": "02 13 00",
//         "inscrit": "1,300",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 489,
//         "bureaux": "1",
//         "code": "02 14 02 01",
//         "inscrit": "207",
//         "province": "KELE"
//     },
//     {
//         "id": 490,
//         "bureaux": "1",
//         "code": "02 14 02 02",
//         "inscrit": "194",
//         "province": "BOUBOU"
//     },
//     {
//         "id": 491,
//         "bureaux": "1",
//         "code": "02 14 02 03",
//         "inscrit": "299",
//         "province": "SOUBA 1"
//     },
//     {
//         "id": 492,
//         "bureaux": "1",
//         "code": "02 14 02 04",
//         "inscrit": "148",
//         "province": "KEWAGA"
//     },
//     {
//         "id": 493,
//         "bureaux": "2",
//         "code": "02 14 01",
//         "inscrit": "274",
//         "province": "KAYIE"
//     },
//     {
//         "id": 494,
//         "bureaux": "4",
//         "code": "02 14 02",
//         "inscrit": "848",
//         "province": "LEKEYE"
//     },
//     {
//         "id": 495,
//         "bureaux": "1",
//         "code": "02 15 00 01",
//         "inscrit": "4",
//         "province": "OSS KAMA"
//     },
//     {
//         "id": 496,
//         "bureaux": "2",
//         "code": "02 15 00 02",
//         "inscrit": "522",
//         "province": "NDOUA (PALMERAIE)"
//     },
//     {
//         "id": 497,
//         "bureaux": "2",
//         "code": "02 15 00 03",
//         "inscrit": "581",
//         "province": "KAKOUMBOU"
//     },
//     {
//         "id": 498,
//         "bureaux": "1",
//         "code": "02 15 00 04",
//         "inscrit": "338",
//         "province": "ENTSAGA"
//     },
//     {
//         "id": 499,
//         "bureaux": "1",
//         "code": "02 15 00 05",
//         "inscrit": "419",
//         "province": "OBEGUE"
//     },
//     {
//         "id": 500,
//         "bureaux": "1",
//         "code": "02 15 00 06",
//         "inscrit": "325",
//         "province": "BOUNOU(OBOUO)"
//     },
//     {
//         "id": 501,
//         "bureaux": "8",
//         "code": "02 15 00",
//         "inscrit": "2,189",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 502,
//         "bureaux": "1",
//         "code": "02 16 02 01",
//         "inscrit": "2",
//         "province": "BOUNOU (OBOUO)"
//     },
//     {
//         "id": 503,
//         "bureaux": "1",
//         "code": "02 16 02 02",
//         "inscrit": "206",
//         "province": "KASSIELE 1 ET 2"
//     },
//     {
//         "id": 504,
//         "bureaux": "1",
//         "code": "02 16 02 03",
//         "inscrit": "196",
//         "province": "OBIA"
//     },
//     {
//         "id": 505,
//         "bureaux": "1",
//         "code": "02 16 04 01",
//         "inscrit": "372",
//         "province": "OSSKAMA"
//     },
//     {
//         "id": 506,
//         "bureaux": "3",
//         "code": "02 16 01",
//         "inscrit": "822",
//         "province": "LEBEYI"
//     },
//     {
//         "id": 507,
//         "bureaux": "3",
//         "code": "02 16 02",
//         "inscrit": "404",
//         "province": "LESSIMI"
//     },
//     {
//         "id": 508,
//         "bureaux": "2",
//         "code": "02 16 03",
//         "inscrit": "499",
//         "province": "LIMI"
//     },
//     {
//         "id": 509,
//         "bureaux": "1",
//         "code": "02 16 04",
//         "inscrit": "372",
//         "province": "LEYOUMOU"
//     },
//     {
//         "id": 510,
//         "bureaux": "1",
//         "code": "02 17 00 01",
//         "inscrit": "487",
//         "province": "SAMBA"
//     },
//     {
//         "id": 511,
//         "bureaux": "2",
//         "code": "02 17 00 02",
//         "inscrit": "522",
//         "province": "MBAMA-LEKONI VIILLAGE"
//     },
//     {
//         "id": 512,
//         "bureaux": "1",
//         "code": "02 17 00 03",
//         "inscrit": "327",
//         "province": "DJOUANI"
//     },
//     {
//         "id": 513,
//         "bureaux": "1",
//         "code": "02 17 00 04",
//         "inscrit": "199",
//         "province": "CHIC"
//     },
//     {
//         "id": 514,
//         "bureaux": "1",
//         "code": "02 17 00 05",
//         "inscrit": "90",
//         "province": "ABOUYI"
//     },
//     {
//         "id": 515,
//         "bureaux": "1",
//         "code": "02 17 00 06",
//         "inscrit": "147",
//         "province": "ADMINISTRATIF"
//     },
//     {
//         "id": 516,
//         "bureaux": "1",
//         "code": "02 17 00 07",
//         "inscrit": "164",
//         "province": "OKORIVILLE"
//     },
//     {
//         "id": 517,
//         "bureaux": "8",
//         "code": "02 17 00",
//         "inscrit": "1,936",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 518,
//         "bureaux": "1",
//         "code": "02 18 01 01",
//         "inscrit": "325",
//         "province": "EDJOUANGOULOU"
//     },
//     {
//         "id": 519,
//         "bureaux": "1",
//         "code": "02 18 02 01",
//         "inscrit": "174",
//         "province": "AKOU"
//     },
//     {
//         "id": 520,
//         "bureaux": "1",
//         "code": "02 18 02 02",
//         "inscrit": "108",
//         "province": "KABALA"
//     },
//     {
//         "id": 521,
//         "bureaux": "1",
//         "code": "02 18 02 03",
//         "inscrit": "121",
//         "province": "SAYE"
//     },
//     {
//         "id": 522,
//         "bureaux": "1",
//         "code": "02 18 02 04",
//         "inscrit": "104",
//         "province": "EKOUYI-MBOUMA"
//     },
//     {
//         "id": 523,
//         "bureaux": "1",
//         "code": "02 18 02 05",
//         "inscrit": "34",
//         "province": "KEBIRI"
//     },
//     {
//         "id": 524,
//         "bureaux": "1",
//         "code": "02 18 02 06",
//         "inscrit": "86",
//         "province": "KESSALA"
//     },
//     {
//         "id": 525,
//         "bureaux": "1",
//         "code": "02 18 02 07",
//         "inscrit": "80",
//         "province": "LEWOU"
//     },
//     {
//         "id": 526,
//         "bureaux": "1",
//         "code": "02 18 02 08",
//         "inscrit": "41",
//         "province": "OSSELE"
//     },
//     {
//         "id": 527,
//         "bureaux": "1",
//         "code": "02 18 03 01",
//         "inscrit": "193",
//         "province": "ODJOUMA"
//     },
//     {
//         "id": 528,
//         "bureaux": "1",
//         "code": "02 18 03 02",
//         "inscrit": "228",
//         "province": "OSSOUELE"
//     },
//     {
//         "id": 529,
//         "bureaux": "1",
//         "code": "02 18 03 03",
//         "inscrit": "124",
//         "province": "YIA A"
//     },
//     {
//         "id": 530,
//         "bureaux": "1",
//         "code": "02 18 03 04",
//         "inscrit": "111",
//         "province": "YIA B"
//     },
//     {
//         "id": 531,
//         "bureaux": "1",
//         "code": "02 18 03 05",
//         "inscrit": "82",
//         "province": "ABILA"
//     },
//     {
//         "id": 532,
//         "bureaux": "1",
//         "code": "02 18 01",
//         "inscrit": "325",
//         "province": "DJOUELE-LABOUMI"
//     },
//     {
//         "id": 533,
//         "bureaux": "8",
//         "code": "02 18 02",
//         "inscrit": "748",
//         "province": "DJOUYA"
//     },
//     {
//         "id": 534,
//         "bureaux": "5",
//         "code": "02 18 03",
//         "inscrit": "738",
//         "province": "LOURI"
//     },
//     {
//         "id": 535,
//         "bureaux": "3",
//         "code": "02 19 00 01",
//         "inscrit": "1,050",
//         "province": "ECOLE PUBLIQUE DONGA"
//     },
//     {
//         "id": 536,
//         "bureaux": "3",
//         "code": "02 19 00",
//         "inscrit": "1,050",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 537,
//         "bureaux": "1",
//         "code": "02 20 02 01",
//         "inscrit": "212",
//         "province": "AYOGO"
//     },
//     {
//         "id": 538,
//         "bureaux": "1",
//         "code": "02 20 02 02",
//         "inscrit": "131",
//         "province": "OSSIELE"
//     },
//     {
//         "id": 539,
//         "bureaux": "1",
//         "code": "02 20 02 03",
//         "inscrit": "204",
//         "province": "ALLIGA-YEMNGA"
//     },
//     {
//         "id": 540,
//         "bureaux": "2",
//         "code": "02 20 01",
//         "inscrit": "495",
//         "province": "MPANI"
//     },
//     {
//         "id": 541,
//         "bureaux": "3",
//         "code": "02 20 02",
//         "inscrit": "547",
//         "province": "NGAYI"
//     },
//     {
//         "id": 542,
//         "bureaux": "1",
//         "code": "02 21 00 01",
//         "inscrit": "236",
//         "province": "EGOUMOUNA"
//     },
//     {
//         "id": 543,
//         "bureaux": "1",
//         "code": "02 21 00 02",
//         "inscrit": "276",
//         "province": "ANKOUSSOU"
//     },
//     {
//         "id": 544,
//         "bureaux": "1",
//         "code": "02 21 00 03",
//         "inscrit": "225",
//         "province": "NDJIEGUE"
//     },
//     {
//         "id": 545,
//         "bureaux": "1",
//         "code": "02 21 00 04",
//         "inscrit": "389",
//         "province": "OTOGHO"
//     },
//     {
//         "id": 546,
//         "bureaux": "4",
//         "code": "02 21 00",
//         "inscrit": "1,126",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 547,
//         "bureaux": "1",
//         "code": "02 22 01 01",
//         "inscrit": "205",
//         "province": "ASSIAMI"
//     },
//     {
//         "id": 548,
//         "bureaux": "1",
//         "code": "02 22 01 02",
//         "inscrit": "128",
//         "province": "OKOUMIBI"
//     },
//     {
//         "id": 549,
//         "bureaux": "1",
//         "code": "02 22 01 03",
//         "inscrit": "87",
//         "province": "OYOU"
//     },
//     {
//         "id": 550,
//         "bureaux": "1",
//         "code": "02 22 01 04",
//         "inscrit": "2",
//         "province": "EKOUMA"
//     },
//     {
//         "id": 551,
//         "bureaux": "1",
//         "code": "02 22 03 01",
//         "inscrit": "117",
//         "province": "EKOUMA"
//     },
//     {
//         "id": 552,
//         "bureaux": "1",
//         "code": "02 22 03 02",
//         "inscrit": "26",
//         "province": "ALELE II"
//     },
//     {
//         "id": 553,
//         "bureaux": "1",
//         "code": "02 22 03 03",
//         "inscrit": "168",
//         "province": "OKANGOVILLE"
//     },
//     {
//         "id": 554,
//         "bureaux": "1",
//         "code": "02 22 03 04",
//         "inscrit": "156",
//         "province": "OMOYE"
//     },
//     {
//         "id": 555,
//         "bureaux": "4",
//         "code": "02 22 01",
//         "inscrit": "422",
//         "province": "MPANI-EKOULA"
//     },
//     {
//         "id": 556,
//         "bureaux": "2",
//         "code": "02 22 02",
//         "inscrit": "431",
//         "province": "ENKORO"
//     },
//     {
//         "id": 557,
//         "bureaux": "4",
//         "code": "02 22 03",
//         "inscrit": "467",
//         "province": "NGOUA"
//     },
//     {
//         "id": 558,
//         "bureaux": "4",
//         "code": "02 23 00",
//         "inscrit": "1,165",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 559,
//         "bureaux": "1",
//         "code": "02 24 01 01",
//         "inscrit": "267",
//         "province": "OBOLI"
//     },
//     {
//         "id": 560,
//         "bureaux": "1",
//         "code": "02 24 01 02",
//         "inscrit": "201",
//         "province": "YOUMA 2"
//     },
//     {
//         "id": 561,
//         "bureaux": "1",
//         "code": "02 24 01 03",
//         "inscrit": "204",
//         "province": "ONTOGHO"
//     },
//     {
//         "id": 562,
//         "bureaux": "3",
//         "code": "02 24 01",
//         "inscrit": "672",
//         "province": "BRIKOLO"
//     },
//     {
//         "id": 563,
//         "bureaux": "56",
//         "code": "201",
//         "inscrit": "18,101",
//         "province": "FRANCEVILLE"
//     },
//     {
//         "id": 564,
//         "bureaux": "37",
//         "code": "202",
//         "inscrit": "5,777",
//         "province": "MPASSA (FRANCEVILLE)"
//     },
//     {
//         "id": 565,
//         "bureaux": "34",
//         "code": "203",
//         "inscrit": "12,799",
//         "province": "MOANDA"
//     },
//     {
//         "id": 566,
//         "bureaux": "16",
//         "code": "204",
//         "inscrit": "1,786",
//         "province": "LEBOMBI-LEYOU (MOANDA)"
//     },
//     {
//         "id": 567,
//         "bureaux": "14",
//         "code": "205",
//         "inscrit": "2,925",
//         "province": "MOUNANA"
//     },
//     {
//         "id": 568,
//         "bureaux": "12",
//         "code": "207",
//         "inscrit": "3,933",
//         "province": "OKONDJA"
//     },
//     {
//         "id": 569,
//         "bureaux": "26",
//         "code": "208",
//         "inscrit": "3,569",
//         "province": "SEBE-BRIKOLO (OKONDJA)"
//     },
//     {
//         "id": 570,
//         "bureaux": "7",
//         "code": "209",
//         "inscrit": "1,913",
//         "province": "BAKOUMBA"
//     },
//     {
//         "id": 571,
//         "bureaux": "8",
//         "code": "210",
//         "inscrit": "973",
//         "province": "LEKOKO (BAKOUMBA)"
//     },
//     {
//         "id": 572,
//         "bureaux": "2",
//         "code": "211",
//         "inscrit": "942",
//         "province": "BOUMANGO"
//     },
//     {
//         "id": 573,
//         "bureaux": "7",
//         "code": "212",
//         "inscrit": "1,575",
//         "province": "OGOOUE-LETILI (BOUMANGO)"
//     },
//     {
//         "id": 574,
//         "bureaux": "4",
//         "code": "213",
//         "inscrit": "1,300",
//         "province": "BONGOVILLE"
//     },
//     {
//         "id": 575,
//         "bureaux": "6",
//         "code": "214",
//         "inscrit": "1,122",
//         "province": "DJOUORI-AGNILI (BONGOVILLE)"
//     },
//     {
//         "id": 576,
//         "bureaux": "8",
//         "code": "215",
//         "inscrit": "2,189",
//         "province": "AKIENI"
//     },
//     {
//         "id": 577,
//         "bureaux": "9",
//         "code": "216",
//         "inscrit": "2,097",
//         "province": "LEKONI-LEKORI  (AKIENI)"
//     },
//     {
//         "id": 578,
//         "bureaux": "8",
//         "code": "217",
//         "inscrit": "1,936",
//         "province": "LECONI"
//     },
//     {
//         "id": 579,
//         "bureaux": "14",
//         "code": "218",
//         "inscrit": "1,811",
//         "province": "PLATEAUX (LECONI)"
//     },
//     {
//         "id": 580,
//         "bureaux": "3",
//         "code": "219",
//         "inscrit": "1,050",
//         "province": "ONGA"
//     },
//     {
//         "id": 581,
//         "bureaux": "5",
//         "code": "220",
//         "inscrit": "1,042",
//         "province": "DJOUE (ONGA)"
//     },
//     {
//         "id": 582,
//         "bureaux": "4",
//         "code": "221",
//         "inscrit": "1,126",
//         "province": "NGOUONI"
//     },
//     {
//         "id": 583,
//         "bureaux": "10",
//         "code": "222",
//         "inscrit": "1,320",
//         "province": "LEKABI-LEWOLO (NGOUONI)"
//     },
//     {
//         "id": 584,
//         "bureaux": "4",
//         "code": "223",
//         "inscrit": "1,165",
//         "province": "ABOUMI"
//     },
//     {
//         "id": 585,
//         "bureaux": "2",
//         "code": "02 01 01 01",
//         "inscrit": "937",
//         "province": "NGOUNGOULOU (MAISON DE  FEMME)"
//     },
//     {
//         "id": 586,
//         "bureaux": "2",
//         "code": "02 01 01 02",
//         "inscrit": "587",
//         "province": "BAPILI (CENTRE SOCIAL)"
//     },
//     {
//         "id": 587,
//         "bureaux": "1",
//         "code": "02 01 01 03",
//         "inscrit": "430",
//         "province": "LEKEI (E.P NGOUNGOULOU)"
//     },
//     {
//         "id": 588,
//         "bureaux": "1",
//         "code": "02 01 01 04",
//         "inscrit": "336",
//         "province": "YOCKO (ST HILAIRE)"
//     },
//     {
//         "id": 589,
//         "bureaux": "2",
//         "code": "02 01 01 05",
//         "inscrit": "501",
//         "province": "NGOBOUNDA (ST HILAIRE)"
//     },
//     {
//         "id": 590,
//         "bureaux": "2",
//         "code": "02 01 01 06",
//         "inscrit": "558",
//         "province": "CORNICHE (AV SAVORGANT)"
//     },
//     {
//         "id": 591,
//         "bureaux": "1",
//         "code": "02 01 01 07",
//         "inscrit": "321",
//         "province": "JARDIN ENFANT POUBARA"
//     },
//     {
//         "id": 592,
//         "bureaux": "1",
//         "code": "02 01 01 08",
//         "inscrit": "342",
//         "province": "LYCEE MARCEL AMOGHO"
//     },
//     {
//         "id": 593,
//         "bureaux": "1",
//         "code": "02 01 02 01",
//         "inscrit": "141",
//         "province": "EPIMBI"
//     },
//     {
//         "id": 594,
//         "bureaux": "1",
//         "code": "02 01 02 02",
//         "inscrit": "448",
//         "province": "DIALOGUE"
//     },
//     {
//         "id": 595,
//         "bureaux": "2",
//         "code": "02 01 02 03",
//         "inscrit": "531",
//         "province": "ONGOUEGNE"
//     },
//     {
//         "id": 596,
//         "bureaux": "2",
//         "code": "02 01 02 04",
//         "inscrit": "516",
//         "province": "AYASSI"
//     },
//     {
//         "id": 597,
//         "bureaux": "3",
//         "code": "02 01 02 05",
//         "inscrit": "1,302",
//         "province": "SABLE II"
//     },
//     {
//         "id": 598,
//         "bureaux": "1",
//         "code": "02 01 02 06",
//         "inscrit": "322",
//         "province": "ANGOUMBOU (EC PUBL DZAMITI)"
//     },
//     {
//         "id": 599,
//         "bureaux": "1",
//         "code": "02 01 02 07",
//         "inscrit": "299",
//         "province": "MVOUNA (EC PUBL DZAMITI)"
//     },
//     {
//         "id": 600,
//         "bureaux": "1",
//         "code": "02 01 02 08",
//         "inscrit": "156",
//         "province": "DJAKA (IAES)"
//     },
//     {
//         "id": 601,
//         "bureaux": "1",
//         "code": "02 01 02 09",
//         "inscrit": "478",
//         "province": "ONGALI 1 (EC PUBL OMBELE)"
//     },
//     {
//         "id": 602,
//         "bureaux": "1",
//         "code": "02 01 02 10",
//         "inscrit": "232",
//         "province": "ONGALI II (EC PUBL OMBELE)"
//     },
//     {
//         "id": 603,
//         "bureaux": "2",
//         "code": "02 01 02 11",
//         "inscrit": "686",
//         "province": "OMBELE (EC PUBL OMBELE)"
//     },
//     {
//         "id": 604,
//         "bureaux": "1",
//         "code": "02 01 02 12",
//         "inscrit": "434",
//         "province": "ONDIMBA (EC PUBL OMBELE)"
//     },
//     {
//         "id": 605,
//         "bureaux": "1",
//         "code": "02 01 02 13",
//         "inscrit": "459",
//         "province": "MONTAGNE SAINTE"
//     },
//     {
//         "id": 606,
//         "bureaux": "2",
//         "code": "02 01 03 01",
//         "inscrit": "800",
//         "province": "EC. CATH. AKOU"
//     },
//     {
//         "id": 607,
//         "bureaux": "1",
//         "code": "02 01 03 02",
//         "inscrit": "133",
//         "province": "MIMBOUMBA"
//     },
//     {
//         "id": 608,
//         "bureaux": "1",
//         "code": "02 01 03 03",
//         "inscrit": "236",
//         "province": "LEKONI"
//     },
//     {
//         "id": 609,
//         "bureaux": "2",
//         "code": "02 01 03 04",
//         "inscrit": "829",
//         "province": "MATEBELE II"
//     },
//     {
//         "id": 610,
//         "bureaux": "1",
//         "code": "02 01 03 05",
//         "inscrit": "286",
//         "province": "BAKOU"
//     },
//     {
//         "id": 611,
//         "bureaux": "1",
//         "code": "02 01 03 06",
//         "inscrit": "238",
//         "province": "PIKAS"
//     },
//     {
//         "id": 612,
//         "bureaux": "1",
//         "code": "02 01 03 07",
//         "inscrit": "355",
//         "province": "CARRIERE"
//     },
//     {
//         "id": 613,
//         "bureaux": "1",
//         "code": "02 01 03 08",
//         "inscrit": "450",
//         "province": "MANGOUNGOU"
//     },
//     {
//         "id": 614,
//         "bureaux": "1",
//         "code": "02 01 03 09",
//         "inscrit": "143",
//         "province": "ONDOUAMA"
//     },
//     {
//         "id": 615,
//         "bureaux": "1",
//         "code": "02 01 03 10",
//         "inscrit": "372",
//         "province": "MENAYE"
//     },
//     {
//         "id": 616,
//         "bureaux": "1",
//         "code": "02 01 03 11",
//         "inscrit": "295",
//         "province": "KESSALA"
//     },
//     {
//         "id": 617,
//         "bureaux": "1",
//         "code": "02 01 03 12",
//         "inscrit": "239",
//         "province": "MATEBELE I"
//     },
//     {
//         "id": 618,
//         "bureaux": "1",
//         "code": "02 01 03 13",
//         "inscrit": "313",
//         "province": "EC-CATH-AKOU II"
//     },
//     {
//         "id": 619,
//         "bureaux": "1",
//         "code": "02 01 04 01",
//         "inscrit": "494",
//         "province": "DJOUORI"
//     },
//     {
//         "id": 620,
//         "bureaux": "2",
//         "code": "02 01 04 02",
//         "inscrit": "631",
//         "province": "MBAYA"
//     },
//     {
//         "id": 621,
//         "bureaux": "2",
//         "code": "02 01 04 03",
//         "inscrit": "579",
//         "province": "MINGARA"
//     },
//     {
//         "id": 622,
//         "bureaux": "1",
//         "code": "02 01 04 04",
//         "inscrit": "385",
//         "province": "MABOUKOU 1-2"
//     },
//     {
//         "id": 623,
//         "bureaux": "2",
//         "code": "02 01 04 05",
//         "inscrit": "508",
//         "province": "YENE 1"
//     },
//     {
//         "id": 624,
//         "bureaux": "1",
//         "code": "02 01 04 06",
//         "inscrit": "211",
//         "province": "MAKANA"
//     },
//     {
//         "id": 625,
//         "bureaux": "1",
//         "code": "02 01 04 07",
//         "inscrit": "429",
//         "province": "MABA"
//     },
//     {
//         "id": 626,
//         "bureaux": "1",
//         "code": "02 01 04 08",
//         "inscrit": "159",
//         "province": "YENE II"
//     },
//     {
//         "id": 627,
//         "bureaux": "12",
//         "code": "02 01 01",
//         "inscrit": "4,012",
//         "province": "1ER  ARRONDISSEMENT"
//     },
//     {
//         "id": 628,
//         "bureaux": "18",
//         "code": "02 01 02",
//         "inscrit": "6,004",
//         "province": "2EME ARRONDISSEMENT"
//     },
//     {
//         "id": 629,
//         "bureaux": "15",
//         "code": "02 01 03",
//         "inscrit": "4,689",
//         "province": "3EME ARRONDISSEMENT"
//     },
//     {
//         "id": 630,
//         "bureaux": "11",
//         "code": "02 01 04",
//         "inscrit": "3,396",
//         "province": "4EME ARRONDISSEMENT"
//     },
//     {
//         "id": 631,
//         "bureaux": "1",
//         "code": "02 02 01 01",
//         "inscrit": "312",
//         "province": "ONKOUA"
//     },
//     {
//         "id": 632,
//         "bureaux": "1",
//         "code": "02 02 01 02",
//         "inscrit": "102",
//         "province": "BIBASSA"
//     },
//     {
//         "id": 633,
//         "bureaux": "1",
//         "code": "02 02 01 03",
//         "inscrit": "173",
//         "province": "NDJOKAYE"
//     },
//     {
//         "id": 634,
//         "bureaux": "1",
//         "code": "02 02 01 04",
//         "inscrit": "164",
//         "province": "VILLE BANGOUE"
//     },
//     {
//         "id": 635,
//         "bureaux": "1",
//         "code": "02 02 01 05",
//         "inscrit": "240",
//         "province": "MBOUMA-OYALI"
//     },
//     {
//         "id": 636,
//         "bureaux": "1",
//         "code": "02 02 01 06",
//         "inscrit": "5",
//         "province": "LENGORI-EVOUGA II"
//     },
//     {
//         "id": 637,
//         "bureaux": "1",
//         "code": "02 02 01 07",
//         "inscrit": "464",
//         "province": "MENAYE-EPILA"
//     },
//     {
//         "id": 638,
//         "bureaux": "1",
//         "code": "02 02 01 08",
//         "inscrit": "112",
//         "province": "EBALA"
//     },
//     {
//         "id": 639,
//         "bureaux": "1",
//         "code": "02 02 01 09",
//         "inscrit": "69",
//         "province": "YOULOU"
//     },
//     {
//         "id": 640,
//         "bureaux": "1",
//         "code": "02 02 01 10",
//         "inscrit": "91",
//         "province": "BINIOMI"
//     },
//     {
//         "id": 641,
//         "bureaux": "1",
//         "code": "02 02 01 11",
//         "inscrit": "125",
//         "province": "LENGORI VILLAGE"
//     },
//     {
//         "id": 642,
//         "bureaux": "1",
//         "code": "02 02 01 12",
//         "inscrit": "89",
//         "province": "EYOUGA 2 VILLAGE"
//     },
//     {
//         "id": 643,
//         "bureaux": "1",
//         "code": "02 02 02 01",
//         "inscrit": "84",
//         "province": "LEPAKA"
//     },
//     {
//         "id": 644,
//         "bureaux": "1",
//         "code": "02 02 02 02",
//         "inscrit": "97",
//         "province": "BITONO"
//     },
//     {
//         "id": 645,
//         "bureaux": "1",
//         "code": "02 02 02 03",
//         "inscrit": "228",
//         "province": "MOUPIA"
//     },
//     {
//         "id": 646,
//         "bureaux": "1",
//         "code": "02 02 02 04",
//         "inscrit": "44",
//         "province": "DZAKI VILLE"
//     },
//     {
//         "id": 647,
//         "bureaux": "1",
//         "code": "02 02 02 05",
//         "inscrit": "154",
//         "province": "BANGUENE-BENGUIA"
//     },
//     {
//         "id": 648,
//         "bureaux": "1",
//         "code": "02 02 02 06",
//         "inscrit": "31",
//         "province": "POUBARA"
//     },
//     {
//         "id": 649,
//         "bureaux": "1",
//         "code": "02 02 02 07",
//         "inscrit": "213",
//         "province": "SUCAF 1"
//     },
//     {
//         "id": 650,
//         "bureaux": "1",
//         "code": "02 02 02 08",
//         "inscrit": "327",
//         "province": "SUCAF 2"
//     },
//     {
//         "id": 651,
//         "bureaux": "1",
//         "code": "02 02 02 09",
//         "inscrit": "75",
//         "province": "SUCAF 3"
//     },
//     {
//         "id": 652,
//         "bureaux": "1",
//         "code": "02 02 02 10",
//         "inscrit": "409",
//         "province": "MVENGUE"
//     },
//     {
//         "id": 653,
//         "bureaux": "1",
//         "code": "02 02 02 11",
//         "inscrit": "129",
//         "province": "MAPOUBA"
//     },
//     {
//         "id": 654,
//         "bureaux": "1",
//         "code": "02 02 02 12",
//         "inscrit": "30",
//         "province": "NGANDA"
//     },
//     {
//         "id": 655,
//         "bureaux": "2",
//         "code": "02 02 02 13",
//         "inscrit": "632",
//         "province": "BASE AERIENNE 02"
//     },
//     {
//         "id": 656,
//         "bureaux": "1",
//         "code": "02 02 03 01",
//         "inscrit": "270",
//         "province": "VENEZ-VOIR"
//     },
//     {
//         "id": 657,
//         "bureaux": "1",
//         "code": "02 02 03 02",
//         "inscrit": "104",
//         "province": "MOTOBO I"
//     },
//     {
//         "id": 658,
//         "bureaux": "1",
//         "code": "02 02 03 03",
//         "inscrit": "151",
//         "province": "OKOLOVILLE"
//     },
//     {
//         "id": 659,
//         "bureaux": "1",
//         "code": "02 02 03 04",
//         "inscrit": "151",
//         "province": "LEKOUSSAGA"
//     },
//     {
//         "id": 660,
//         "bureaux": "1",
//         "code": "02 02 03 05",
//         "inscrit": "98",
//         "province": "OBORILEKOUSSA"
//     },
//     {
//         "id": 661,
//         "bureaux": "1",
//         "code": "02 02 03 06",
//         "inscrit": "134",
//         "province": "MOTOBO II"
//     },
//     {
//         "id": 662,
//         "bureaux": "1",
//         "code": "02 02 03 07",
//         "inscrit": "220",
//         "province": "ANDJOGO"
//     },
//     {
//         "id": 663,
//         "bureaux": "1",
//         "code": "02 02 03 08",
//         "inscrit": "137",
//         "province": "MOKABA"
//     },
//     {
//         "id": 664,
//         "bureaux": "1",
//         "code": "02 02 03 09",
//         "inscrit": "48",
//         "province": "MIKASSA"
//     },
//     {
//         "id": 665,
//         "bureaux": "1",
//         "code": "02 02 03 10",
//         "inscrit": "17",
//         "province": "SOGADEL SUD"
//     },
//     {
//         "id": 666,
//         "bureaux": "1",
//         "code": "02 02 03 11",
//         "inscrit": "48",
//         "province": "OLOUNGA-OMVOURI"
//     },
//     {
//         "id": 667,
//         "bureaux": "12",
//         "code": "02 02 01",
//         "inscrit": "1,946",
//         "province": "DJOUMOU"
//     },
//     {
//         "id": 668,
//         "bureaux": "14",
//         "code": "02 02 02",
//         "inscrit": "2,453",
//         "province": "KASSA"
//     },
//     {
//         "id": 669,
//         "bureaux": "11",
//         "code": "02 02 03",
//         "inscrit": "1,378",
//         "province": "LEKABI"
//     },
//     {
//         "id": 670,
//         "bureaux": "2",
//         "code": "02 03 01 01",
//         "inscrit": "875",
//         "province": "LYCEE TECHN. 1"
//     },
//     {
//         "id": 671,
//         "bureaux": "2",
//         "code": "02 03 01 02",
//         "inscrit": "655",
//         "province": "CITE OCTRA"
//     },
//     {
//         "id": 672,
//         "bureaux": "2",
//         "code": "02 03 01 03",
//         "inscrit": "598",
//         "province": "BELLE-VUE 1-2-3"
//     },
//     {
//         "id": 673,
//         "bureaux": "2",
//         "code": "02 03 01 04",
//         "inscrit": "941",
//         "province": "DOUANES 1-2"
//     },
//     {
//         "id": 674,
//         "bureaux": "2",
//         "code": "02 03 01 05",
//         "inscrit": "726",
//         "province": "MONT-MOANDA 1-2"
//     },
//     {
//         "id": 675,
//         "bureaux": "3",
//         "code": "02 03 01 06",
//         "inscrit": "1,349",
//         "province": "ALLIANCE 1-2"
//     },
//     {
//         "id": 676,
//         "bureaux": "2",
//         "code": "02 03 01 07",
//         "inscrit": "507",
//         "province": "MIOSSO TELEPHERIQUE 1-2"
//     },
//     {
//         "id": 677,
//         "bureaux": "1",
//         "code": "02 03 01 08",
//         "inscrit": "272",
//         "province": "JARDIN ENF LEKOLO 1-2"
//     },
//     {
//         "id": 678,
//         "bureaux": "1",
//         "code": "02 03 01 09",
//         "inscrit": "350",
//         "province": "MOANDA PLAINE 1-2-3"
//     },
//     {
//         "id": 679,
//         "bureaux": "1",
//         "code": "02 03 01 10",
//         "inscrit": "453",
//         "province": "MONTAGNE SAINTE 1-2"
//     },
//     {
//         "id": 680,
//         "bureaux": "2",
//         "code": "02 03 01 11",
//         "inscrit": "628",
//         "province": "MOUKAGNISSI 1-2"
//     },
//     {
//         "id": 681,
//         "bureaux": "2",
//         "code": "02 03 02 01",
//         "inscrit": "658",
//         "province": "LEKOLO"
//     },
//     {
//         "id": 682,
//         "bureaux": "4",
//         "code": "02 03 02 02",
//         "inscrit": "1,713",
//         "province": "JARDIN ENFANT COMILOG"
//     },
//     {
//         "id": 683,
//         "bureaux": "4",
//         "code": "02 03 02 03",
//         "inscrit": "1,608",
//         "province": "LEYIMA"
//     },
//     {
//         "id": 684,
//         "bureaux": "2",
//         "code": "02 03 02 04",
//         "inscrit": "718",
//         "province": "ONKOULA EC-CATH-A ET B"
//     },
//     {
//         "id": 685,
//         "bureaux": "2",
//         "code": "02 03 02 05",
//         "inscrit": "748",
//         "province": "CENTRE COMMERCIAL"
//     },
//     {
//         "id": 686,
//         "bureaux": "20",
//         "code": "02 03 01",
//         "inscrit": "7,354",
//         "province": "1ER  ARRONDISSEMENT"
//     },
//     {
//         "id": 687,
//         "bureaux": "14",
//         "code": "02 03 02",
//         "inscrit": "5,445",
//         "province": "2EME ARRONDISSEMENT"
//     },
//     {
//         "id": 688,
//         "bureaux": "1",
//         "code": "02 04 01 01",
//         "inscrit": "95",
//         "province": "MONDZEYE"
//     },
//     {
//         "id": 689,
//         "bureaux": "1",
//         "code": "02 04 01 02",
//         "inscrit": "164",
//         "province": "KONDA"
//     },
//     {
//         "id": 690,
//         "bureaux": "1",
//         "code": "02 04 01 03",
//         "inscrit": "239",
//         "province": "LEMAGNA (MAGNIMA)"
//     },
//     {
//         "id": 691,
//         "bureaux": "1",
//         "code": "02 04 01 04",
//         "inscrit": "84",
//         "province": "NDJANGATEBE"
//     },
//     {
//         "id": 692,
//         "bureaux": "1",
//         "code": "02 04 01 05",
//         "inscrit": "124",
//         "province": "NDJOUTOU (MOYABI)"
//     },
//     {
//         "id": 693,
//         "bureaux": "1",
//         "code": "02 04 01 06",
//         "inscrit": "71",
//         "province": "MOYABI VILLAGE"
//     },
//     {
//         "id": 694,
//         "bureaux": "1",
//         "code": "02 04 01 07",
//         "inscrit": "2",
//         "province": "MANDJAYE"
//     },
//     {
//         "id": 695,
//         "bureaux": "1",
//         "code": "02 04 01 08",
//         "inscrit": "1",
//         "province": "CHANTIER ROUGIER"
//     },
//     {
//         "id": 696,
//         "bureaux": "1",
//         "code": "02 04 01 09",
//         "inscrit": "188",
//         "province": "DOUMAI"
//     },
//     {
//         "id": 697,
//         "bureaux": "1",
//         "code": "02 04 01 10",
//         "inscrit": "139",
//         "province": "MAGNIMA"
//     },
//     {
//         "id": 698,
//         "bureaux": "1",
//         "code": "02 04 01 11",
//         "inscrit": "110",
//         "province": "MAYELA"
//     },
//     {
//         "id": 699,
//         "bureaux": "1",
//         "code": "02 04 02 01",
//         "inscrit": "176",
//         "province": "MBOUNGOU-BADOUMA"
//     },
//     {
//         "id": 700,
//         "bureaux": "1",
//         "code": "02 04 02 02",
//         "inscrit": "87",
//         "province": "NGUIASSONO"
//     },
//     {
//         "id": 701,
//         "bureaux": "1",
//         "code": "02 04 02 03",
//         "inscrit": "237",
//         "province": "NDOUBI"
//     },
//     {
//         "id": 702,
//         "bureaux": "1",
//         "code": "02 04 02 04",
//         "inscrit": "23",
//         "province": "OGAPROV"
//     },
//     {
//         "id": 703,
//         "bureaux": "1",
//         "code": "02 04 02 05",
//         "inscrit": "46",
//         "province": "MASSANGO II"
//     },
//     {
//         "id": 704,
//         "bureaux": "11",
//         "code": "02 04 01",
//         "inscrit": "1,217",
//         "province": "LEBOMBI-LEKEDI"
//     },
//     {
//         "id": 705,
//         "bureaux": "5",
//         "code": "02 04 02",
//         "inscrit": "569",
//         "province": "LEKEDI-LEYOU"
//     },
//     {
//         "id": 706,
//         "bureaux": "1",
//         "code": "02 05 00 01",
//         "inscrit": "196",
//         "province": "MASSANGO 1"
//     },
//     {
//         "id": 707,
//         "bureaux": "1",
//         "code": "02 05 00 02",
//         "inscrit": "86",
//         "province": "CITE CADRE (MESS COMUF)"
//     },
//     {
//         "id": 708,
//         "bureaux": "1",
//         "code": "02 05 00 03",
//         "inscrit": "302",
//         "province": "CITE AMBIE (ECOLE CATH.)"
//     },
//     {
//         "id": 709,
//         "bureaux": "2",
//         "code": "02 05 00 04",
//         "inscrit": "565",
//         "province": "ECOLE RENOVATION A"
//     },
//     {
//         "id": 710,
//         "bureaux": "1",
//         "code": "02 05 00 05",
//         "inscrit": "114",
//         "province": "MOUNANA (VILLAGE)"
//     },
//     {
//         "id": 711,
//         "bureaux": "1",
//         "code": "02 05 00 06",
//         "inscrit": "276",
//         "province": "CENTRE COMMERCIAL (ECOLE PROT."
//     },
//     {
//         "id": 712,
//         "bureaux": "1",
//         "code": "02 05 00 07",
//         "inscrit": "52",
//         "province": "CITE ADMINIST (HOTEL DE VILLE)"
//     },
//     {
//         "id": 713,
//         "bureaux": "1",
//         "code": "02 05 00 08",
//         "inscrit": "352",
//         "province": "O M O I"
//     },
//     {
//         "id": 714,
//         "bureaux": "1",
//         "code": "02 05 00 09",
//         "inscrit": "313",
//         "province": "ECOLE RENOVATION B"
//     },
//     {
//         "id": 715,
//         "bureaux": "1",
//         "code": "02 05 00 10",
//         "inscrit": "63",
//         "province": "CENTRE-VILLE"
//     },
//     {
//         "id": 716,
//         "bureaux": "1",
//         "code": "02 05 00 11",
//         "inscrit": "89",
//         "province": "NGANGOLO"
//     },
//     {
//         "id": 717,
//         "bureaux": "2",
//         "code": "02 05 00 12",
//         "inscrit": "517",
//         "province": "C.E.S. HENRI BASSET"
//     },
//     {
//         "id": 718,
//         "bureaux": "14",
//         "code": "02 05 00",
//         "inscrit": "2,925",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 719,
//         "bureaux": "2",
//         "code": "02 07 00 01",
//         "inscrit": "847",
//         "province": "MANGOU"
//     },
//     {
//         "id": 720,
//         "bureaux": "1",
//         "code": "02 07 00 02",
//         "inscrit": "366",
//         "province": "MISSION CATHOLIQUE"
//     },
//     {
//         "id": 721,
//         "bureaux": "1",
//         "code": "02 07 00 03",
//         "inscrit": "207",
//         "province": "SEBE"
//     },
//     {
//         "id": 722,
//         "bureaux": "1",
//         "code": "02 07 00 04",
//         "inscrit": "194",
//         "province": "ENGOUMOU"
//     },
//     {
//         "id": 723,
//         "bureaux": "3",
//         "code": "02 07 00 05",
//         "inscrit": "1,108",
//         "province": "MPOUNGOU"
//     },
//     {
//         "id": 724,
//         "bureaux": "2",
//         "code": "02 07 00 06",
//         "inscrit": "592",
//         "province": "ATSIA"
//     },
//     {
//         "id": 725,
//         "bureaux": "1",
//         "code": "02 07 00 07",
//         "inscrit": "438",
//         "province": "OLONGO"
//     },
//     {
//         "id": 726,
//         "bureaux": "1",
//         "code": "02 07 00 08",
//         "inscrit": "181",
//         "province": "ECOLE OBELI OSSINGA"
//     },
//     {
//         "id": 727,
//         "bureaux": "12",
//         "code": "02 07 00",
//         "inscrit": "3,933",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 728,
//         "bureaux": "1",
//         "code": "02 08 01 01",
//         "inscrit": "162",
//         "province": "AYANABO"
//     },
//     {
//         "id": 729,
//         "bureaux": "1",
//         "code": "02 08 01 02",
//         "inscrit": "144",
//         "province": "BOUALA-BOUMA"
//     },
//     {
//         "id": 730,
//         "bureaux": "1",
//         "code": "02 08 01 03",
//         "inscrit": "401",
//         "province": "MOYOL"
//     },
//     {
//         "id": 731,
//         "bureaux": "1",
//         "code": "02 08 01 04",
//         "inscrit": "98",
//         "province": "ALANGA"
//     },
//     {
//         "id": 732,
//         "bureaux": "1",
//         "code": "02 08 01 05",
//         "inscrit": "52",
//         "province": "LEBALADOUBA"
//     },
//     {
//         "id": 733,
//         "bureaux": "1",
//         "code": "02 08 02 01",
//         "inscrit": "72",
//         "province": "MBABIRI"
//     },
//     {
//         "id": 734,
//         "bureaux": "1",
//         "code": "02 08 02 02",
//         "inscrit": "86",
//         "province": "OTOUNDOU"
//     },
//     {
//         "id": 735,
//         "bureaux": "1",
//         "code": "02 08 02 03",
//         "inscrit": "118",
//         "province": "MBOUNGA"
//     },
//     {
//         "id": 736,
//         "bureaux": "1",
//         "code": "02 08 02 04",
//         "inscrit": "159",
//         "province": "OKILA"
//     },
//     {
//         "id": 737,
//         "bureaux": "1",
//         "code": "02 08 02 05",
//         "inscrit": "76",
//         "province": "OLOUNGA II"
//     },
//     {
//         "id": 738,
//         "bureaux": "1",
//         "code": "02 08 02 06",
//         "inscrit": "60",
//         "province": "OSSELE-OTOLA"
//     },
//     {
//         "id": 739,
//         "bureaux": "1",
//         "code": "02 08 02 07",
//         "inscrit": "58",
//         "province": "ONDJEYE"
//     },
//     {
//         "id": 740,
//         "bureaux": "1",
//         "code": "02 08 02 08",
//         "inscrit": "76",
//         "province": "LELAMA C-E-B"
//     },
//     {
//         "id": 741,
//         "bureaux": "1",
//         "code": "02 08 03 01",
//         "inscrit": "129",
//         "province": "ONDILI"
//     },
//     {
//         "id": 742,
//         "bureaux": "1",
//         "code": "02 08 03 02",
//         "inscrit": "119",
//         "province": "NGOMA"
//     },
//     {
//         "id": 743,
//         "bureaux": "1",
//         "code": "02 08 03 03",
//         "inscrit": "194",
//         "province": "ODJALA"
//     },
//     {
//         "id": 744,
//         "bureaux": "1",
//         "code": "02 08 03 04",
//         "inscrit": "121",
//         "province": "NDJOUNOU"
//     },
//     {
//         "id": 745,
//         "bureaux": "1",
//         "code": "02 08 03 05",
//         "inscrit": "54",
//         "province": "MAKATAMANGOYE 1"
//     },
//     {
//         "id": 746,
//         "bureaux": "1",
//         "code": "02 08 03 06",
//         "inscrit": "211",
//         "province": "TEBE"
//     },
//     {
//         "id": 747,
//         "bureaux": "1",
//         "code": "02 08 03 07",
//         "inscrit": "62",
//         "province": "MINA"
//     },
//     {
//         "id": 748,
//         "bureaux": "1",
//         "code": "02 08 03 08",
//         "inscrit": "67",
//         "province": "MAKATAMANGOYE 2"
//     },
//     {
//         "id": 749,
//         "bureaux": "1",
//         "code": "02 08 04 01",
//         "inscrit": "74",
//         "province": "OSSINGA II"
//     },
//     {
//         "id": 750,
//         "bureaux": "1",
//         "code": "02 08 04 02",
//         "inscrit": "180",
//         "province": "ONGUILA"
//     },
//     {
//         "id": 751,
//         "bureaux": "1",
//         "code": "02 08 04 03",
//         "inscrit": "316",
//         "province": "AMBINDA"
//     },
//     {
//         "id": 752,
//         "bureaux": "11",
//         "code": "02 08 05 01",
//         "inscrit": "353",
//         "province": "EC PUBLIQUE LEKORI"
//     },
//     {
//         "id": 753,
//         "bureaux": "11",
//         "code": "02 08 05 02",
//         "inscrit": "127",
//         "province": "EC PUBL OPONGOU-ABOLO I"
//     },
//     {
//         "id": 754,
//         "bureaux": "5",
//         "code": "02 08 01",
//         "inscrit": "857",
//         "province": "LEKALA"
//     },
//     {
//         "id": 755,
//         "bureaux": "8",
//         "code": "02 08 02",
//         "inscrit": "705",
//         "province": "LOUAMI-LELAMA"
//     },
//     {
//         "id": 756,
//         "bureaux": "8",
//         "code": "02 08 03",
//         "inscrit": "957",
//         "province": "MOUNIANDZI"
//     },
//     {
//         "id": 757,
//         "bureaux": "3",
//         "code": "02 08 04",
//         "inscrit": "570",
//         "province": "SEBE-LOURI"
//     },
//     {
//         "id": 758,
//         "bureaux": "2",
//         "code": "02 08 05",
//         "inscrit": "480",
//         "province": "DISTRICT DE LEKORI"
//     },
//     {
//         "id": 759,
//         "bureaux": "1",
//         "code": "02 09 00 01",
//         "inscrit": "150",
//         "province": "BAKOUMBA VILLAGE 1"
//     },
//     {
//         "id": 760,
//         "bureaux": "1",
//         "code": "02 09 00 02",
//         "inscrit": "456",
//         "province": "ECOLE CATHOLIQUE 1"
//     },
//     {
//         "id": 761,
//         "bureaux": "1",
//         "code": "02 09 00 03",
//         "inscrit": "452",
//         "province": "ECOLE CATHOLIQUE 2"
//     },
//     {
//         "id": 762,
//         "bureaux": "1",
//         "code": "02 09 00 04",
//         "inscrit": "360",
//         "province": "ECOLE PUBLIQUE CENTRALE 1"
//     },
//     {
//         "id": 763,
//         "bureaux": "1",
//         "code": "02 09 00 05",
//         "inscrit": "183",
//         "province": "ECOLE PUBLIQUE CENTRALE 2"
//     },
//     {
//         "id": 764,
//         "bureaux": "1",
//         "code": "02 09 00 06",
//         "inscrit": "308",
//         "province": "NGOBI"
//     },
//     {
//         "id": 765,
//         "bureaux": "1",
//         "code": "02 09 00 07",
//         "inscrit": "4",
//         "province": "BAKOUMBA VILLAGE 2"
//     },
//     {
//         "id": 766,
//         "bureaux": "7",
//         "code": "02 09 00",
//         "inscrit": "1,913",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 767,
//         "bureaux": "1",
//         "code": "02 10 02 01",
//         "inscrit": "17",
//         "province": "LEKOKO VILLAGE"
//     },
//     {
//         "id": 768,
//         "bureaux": "1",
//         "code": "02 10 02 02",
//         "inscrit": "212",
//         "province": "MAMIDI"
//     },
//     {
//         "id": 769,
//         "bureaux": "1",
//         "code": "02 10 02 03",
//         "inscrit": "151",
//         "province": "LEKAMBA"
//     },
//     {
//         "id": 770,
//         "bureaux": "1",
//         "code": "02 10 02 04",
//         "inscrit": "79",
//         "province": "POYA"
//     },
//     {
//         "id": 771,
//         "bureaux": "1",
//         "code": "02 10 02 05",
//         "inscrit": "58",
//         "province": "LEMANASSA"
//     },
//     {
//         "id": 772,
//         "bureaux": "1",
//         "code": "02 10 03 01",
//         "inscrit": "124",
//         "province": "E P MOUKONDJOKA"
//     },
//     {
//         "id": 773,
//         "bureaux": "1",
//         "code": "02 10 03 02",
//         "inscrit": "224",
//         "province": "MIPONDI I"
//     },
//     {
//         "id": 774,
//         "bureaux": "1",
//         "code": "02 10 03 03",
//         "inscrit": "108",
//         "province": "BAKAMBA"
//     },
//     {
//         "id": 775,
//         "bureaux": "5",
//         "code": "02 10 02",
//         "inscrit": "517",
//         "province": "LEBOMBI SUD"
//     },
//     {
//         "id": 776,
//         "bureaux": "3",
//         "code": "02 10 03",
//         "inscrit": "456",
//         "province": "MIAGASSA NORD"
//     },
//     {
//         "id": 777,
//         "bureaux": "2",
//         "code": "02 11 00 01",
//         "inscrit": "942",
//         "province": "ECOLE PUBLIQUE"
//     },
//     {
//         "id": 778,
//         "bureaux": "2",
//         "code": "02 11 00",
//         "inscrit": "942",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 779,
//         "bureaux": "1",
//         "code": "02 12 02 01",
//         "inscrit": "164",
//         "province": "MOUNGOUANGO"
//     },
//     {
//         "id": 780,
//         "bureaux": "1",
//         "code": "02 12 02 02",
//         "inscrit": "201",
//         "province": "LENDENDOUNGOU"
//     },
//     {
//         "id": 781,
//         "bureaux": "2",
//         "code": "02 12 02 03",
//         "inscrit": "623",
//         "province": "MBOUA"
//     },
//     {
//         "id": 782,
//         "bureaux": "3",
//         "code": "02 12 01",
//         "inscrit": "587",
//         "province": "LOULA"
//     },
//     {
//         "id": 783,
//         "bureaux": "4",
//         "code": "02 12 02",
//         "inscrit": "988",
//         "province": "MALUNDU"
//     },
//     {
//         "id": 784,
//         "bureaux": "4",
//         "code": "02 13 00",
//         "inscrit": "1,300",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 785,
//         "bureaux": "1",
//         "code": "02 14 02 01",
//         "inscrit": "207",
//         "province": "KELE"
//     },
//     {
//         "id": 786,
//         "bureaux": "1",
//         "code": "02 14 02 02",
//         "inscrit": "194",
//         "province": "BOUBOU"
//     },
//     {
//         "id": 787,
//         "bureaux": "1",
//         "code": "02 14 02 03",
//         "inscrit": "299",
//         "province": "SOUBA 1"
//     },
//     {
//         "id": 788,
//         "bureaux": "1",
//         "code": "02 14 02 04",
//         "inscrit": "148",
//         "province": "KEWAGA"
//     },
//     {
//         "id": 789,
//         "bureaux": "2",
//         "code": "02 14 01",
//         "inscrit": "274",
//         "province": "KAYIE"
//     },
//     {
//         "id": 790,
//         "bureaux": "4",
//         "code": "02 14 02",
//         "inscrit": "848",
//         "province": "LEKEYE"
//     },
//     {
//         "id": 791,
//         "bureaux": "1",
//         "code": "02 15 00 01",
//         "inscrit": "4",
//         "province": "OSS KAMA"
//     },
//     {
//         "id": 792,
//         "bureaux": "2",
//         "code": "02 15 00 02",
//         "inscrit": "522",
//         "province": "NDOUA (PALMERAIE)"
//     },
//     {
//         "id": 793,
//         "bureaux": "2",
//         "code": "02 15 00 03",
//         "inscrit": "581",
//         "province": "KAKOUMBOU"
//     },
//     {
//         "id": 794,
//         "bureaux": "1",
//         "code": "02 15 00 04",
//         "inscrit": "338",
//         "province": "ENTSAGA"
//     },
//     {
//         "id": 795,
//         "bureaux": "1",
//         "code": "02 15 00 05",
//         "inscrit": "419",
//         "province": "OBEGUE"
//     },
//     {
//         "id": 796,
//         "bureaux": "1",
//         "code": "02 15 00 06",
//         "inscrit": "325",
//         "province": "BOUNOU(OBOUO)"
//     },
//     {
//         "id": 797,
//         "bureaux": "8",
//         "code": "02 15 00",
//         "inscrit": "2,189",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 798,
//         "bureaux": "1",
//         "code": "02 16 02 01",
//         "inscrit": "2",
//         "province": "BOUNOU (OBOUO)"
//     },
//     {
//         "id": 799,
//         "bureaux": "1",
//         "code": "02 16 02 02",
//         "inscrit": "206",
//         "province": "KASSIELE 1 ET 2"
//     },
//     {
//         "id": 800,
//         "bureaux": "1",
//         "code": "02 16 02 03",
//         "inscrit": "196",
//         "province": "OBIA"
//     },
//     {
//         "id": 801,
//         "bureaux": "1",
//         "code": "02 16 04 01",
//         "inscrit": "372",
//         "province": "OSSKAMA"
//     },
//     {
//         "id": 802,
//         "bureaux": "3",
//         "code": "02 16 01",
//         "inscrit": "822",
//         "province": "LEBEYI"
//     },
//     {
//         "id": 803,
//         "bureaux": "3",
//         "code": "02 16 02",
//         "inscrit": "404",
//         "province": "LESSIMI"
//     },
//     {
//         "id": 804,
//         "bureaux": "2",
//         "code": "02 16 03",
//         "inscrit": "499",
//         "province": "LIMI"
//     },
//     {
//         "id": 805,
//         "bureaux": "1",
//         "code": "02 16 04",
//         "inscrit": "372",
//         "province": "LEYOUMOU"
//     },
//     {
//         "id": 806,
//         "bureaux": "1",
//         "code": "02 17 00 01",
//         "inscrit": "487",
//         "province": "SAMBA"
//     },
//     {
//         "id": 807,
//         "bureaux": "2",
//         "code": "02 17 00 02",
//         "inscrit": "522",
//         "province": "MBAMA-LEKONI VIILLAGE"
//     },
//     {
//         "id": 808,
//         "bureaux": "1",
//         "code": "02 17 00 03",
//         "inscrit": "327",
//         "province": "DJOUANI"
//     },
//     {
//         "id": 809,
//         "bureaux": "1",
//         "code": "02 17 00 04",
//         "inscrit": "199",
//         "province": "CHIC"
//     },
//     {
//         "id": 810,
//         "bureaux": "1",
//         "code": "02 17 00 05",
//         "inscrit": "90",
//         "province": "ABOUYI"
//     },
//     {
//         "id": 811,
//         "bureaux": "1",
//         "code": "02 17 00 06",
//         "inscrit": "147",
//         "province": "ADMINISTRATIF"
//     },
//     {
//         "id": 812,
//         "bureaux": "1",
//         "code": "02 17 00 07",
//         "inscrit": "164",
//         "province": "OKORIVILLE"
//     },
//     {
//         "id": 813,
//         "bureaux": "8",
//         "code": "02 17 00",
//         "inscrit": "1,936",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 814,
//         "bureaux": "1",
//         "code": "02 18 01 01",
//         "inscrit": "325",
//         "province": "EDJOUANGOULOU"
//     },
//     {
//         "id": 815,
//         "bureaux": "1",
//         "code": "02 18 02 01",
//         "inscrit": "174",
//         "province": "AKOU"
//     },
//     {
//         "id": 816,
//         "bureaux": "1",
//         "code": "02 18 02 02",
//         "inscrit": "108",
//         "province": "KABALA"
//     },
//     {
//         "id": 817,
//         "bureaux": "1",
//         "code": "02 18 02 03",
//         "inscrit": "121",
//         "province": "SAYE"
//     },
//     {
//         "id": 818,
//         "bureaux": "1",
//         "code": "02 18 02 04",
//         "inscrit": "104",
//         "province": "EKOUYI-MBOUMA"
//     },
//     {
//         "id": 819,
//         "bureaux": "1",
//         "code": "02 18 02 05",
//         "inscrit": "34",
//         "province": "KEBIRI"
//     },
//     {
//         "id": 820,
//         "bureaux": "1",
//         "code": "02 18 02 06",
//         "inscrit": "86",
//         "province": "KESSALA"
//     },
//     {
//         "id": 821,
//         "bureaux": "1",
//         "code": "02 18 02 07",
//         "inscrit": "80",
//         "province": "LEWOU"
//     },
//     {
//         "id": 822,
//         "bureaux": "1",
//         "code": "02 18 02 08",
//         "inscrit": "41",
//         "province": "OSSELE"
//     },
//     {
//         "id": 823,
//         "bureaux": "1",
//         "code": "02 18 03 01",
//         "inscrit": "193",
//         "province": "ODJOUMA"
//     },
//     {
//         "id": 824,
//         "bureaux": "1",
//         "code": "02 18 03 02",
//         "inscrit": "228",
//         "province": "OSSOUELE"
//     },
//     {
//         "id": 825,
//         "bureaux": "1",
//         "code": "02 18 03 03",
//         "inscrit": "124",
//         "province": "YIA A"
//     },
//     {
//         "id": 826,
//         "bureaux": "1",
//         "code": "02 18 03 04",
//         "inscrit": "111",
//         "province": "YIA B"
//     },
//     {
//         "id": 827,
//         "bureaux": "1",
//         "code": "02 18 03 05",
//         "inscrit": "82",
//         "province": "ABILA"
//     },
//     {
//         "id": 828,
//         "bureaux": "1",
//         "code": "02 18 01",
//         "inscrit": "325",
//         "province": "DJOUELE-LABOUMI"
//     },
//     {
//         "id": 829,
//         "bureaux": "8",
//         "code": "02 18 02",
//         "inscrit": "748",
//         "province": "DJOUYA"
//     },
//     {
//         "id": 830,
//         "bureaux": "5",
//         "code": "02 18 03",
//         "inscrit": "738",
//         "province": "LOURI"
//     },
//     {
//         "id": 831,
//         "bureaux": "3",
//         "code": "02 19 00 01",
//         "inscrit": "1,050",
//         "province": "ECOLE PUBLIQUE DONGA"
//     },
//     {
//         "id": 832,
//         "bureaux": "3",
//         "code": "02 19 00",
//         "inscrit": "1,050",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 833,
//         "bureaux": "1",
//         "code": "02 20 02 01",
//         "inscrit": "212",
//         "province": "AYOGO"
//     },
//     {
//         "id": 834,
//         "bureaux": "1",
//         "code": "02 20 02 02",
//         "inscrit": "131",
//         "province": "OSSIELE"
//     },
//     {
//         "id": 835,
//         "bureaux": "1",
//         "code": "02 20 02 03",
//         "inscrit": "204",
//         "province": "ALLIGA-YEMNGA"
//     },
//     {
//         "id": 836,
//         "bureaux": "2",
//         "code": "02 20 01",
//         "inscrit": "495",
//         "province": "MPANI"
//     },
//     {
//         "id": 837,
//         "bureaux": "3",
//         "code": "02 20 02",
//         "inscrit": "547",
//         "province": "NGAYI"
//     },
//     {
//         "id": 838,
//         "bureaux": "1",
//         "code": "02 21 00 01",
//         "inscrit": "236",
//         "province": "EGOUMOUNA"
//     },
//     {
//         "id": 839,
//         "bureaux": "1",
//         "code": "02 21 00 02",
//         "inscrit": "276",
//         "province": "ANKOUSSOU"
//     },
//     {
//         "id": 840,
//         "bureaux": "1",
//         "code": "02 21 00 03",
//         "inscrit": "225",
//         "province": "NDJIEGUE"
//     },
//     {
//         "id": 841,
//         "bureaux": "1",
//         "code": "02 21 00 04",
//         "inscrit": "389",
//         "province": "OTOGHO"
//     },
//     {
//         "id": 842,
//         "bureaux": "4",
//         "code": "02 21 00",
//         "inscrit": "1,126",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 843,
//         "bureaux": "1",
//         "code": "02 22 01 01",
//         "inscrit": "205",
//         "province": "ASSIAMI"
//     },
//     {
//         "id": 844,
//         "bureaux": "1",
//         "code": "02 22 01 02",
//         "inscrit": "128",
//         "province": "OKOUMIBI"
//     },
//     {
//         "id": 845,
//         "bureaux": "1",
//         "code": "02 22 01 03",
//         "inscrit": "87",
//         "province": "OYOU"
//     },
//     {
//         "id": 846,
//         "bureaux": "1",
//         "code": "02 22 01 04",
//         "inscrit": "2",
//         "province": "EKOUMA"
//     },
//     {
//         "id": 847,
//         "bureaux": "1",
//         "code": "02 22 03 01",
//         "inscrit": "117",
//         "province": "EKOUMA"
//     },
//     {
//         "id": 848,
//         "bureaux": "1",
//         "code": "02 22 03 02",
//         "inscrit": "26",
//         "province": "ALELE II"
//     },
//     {
//         "id": 849,
//         "bureaux": "1",
//         "code": "02 22 03 03",
//         "inscrit": "168",
//         "province": "OKANGOVILLE"
//     },
//     {
//         "id": 850,
//         "bureaux": "1",
//         "code": "02 22 03 04",
//         "inscrit": "156",
//         "province": "OMOYE"
//     },
//     {
//         "id": 851,
//         "bureaux": "4",
//         "code": "02 22 01",
//         "inscrit": "422",
//         "province": "MPANI-EKOULA"
//     },
//     {
//         "id": 852,
//         "bureaux": "2",
//         "code": "02 22 02",
//         "inscrit": "431",
//         "province": "ENKORO"
//     },
//     {
//         "id": 853,
//         "bureaux": "4",
//         "code": "02 22 03",
//         "inscrit": "467",
//         "province": "NGOUA"
//     },
//     {
//         "id": 854,
//         "bureaux": "4",
//         "code": "02 23 00",
//         "inscrit": "1,165",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 855,
//         "bureaux": "1",
//         "code": "02 24 01 01",
//         "inscrit": "267",
//         "province": "OBOLI"
//     },
//     {
//         "id": 856,
//         "bureaux": "1",
//         "code": "02 24 01 02",
//         "inscrit": "201",
//         "province": "YOUMA 2"
//     },
//     {
//         "id": 857,
//         "bureaux": "1",
//         "code": "02 24 01 03",
//         "inscrit": "204",
//         "province": "ONTOGHO"
//     },
//     {
//         "id": 858,
//         "bureaux": "3",
//         "code": "02 24 01",
//         "inscrit": "672",
//         "province": "BRIKOLO"
//     },
//     {
//         "id": 859,
//         "bureaux": "56",
//         "code": "201",
//         "inscrit": "18,101",
//         "province": "FRANCEVILLE"
//     },
//     {
//         "id": 860,
//         "bureaux": "37",
//         "code": "202",
//         "inscrit": "5,777",
//         "province": "MPASSA (FRANCEVILLE)"
//     },
//     {
//         "id": 861,
//         "bureaux": "34",
//         "code": "203",
//         "inscrit": "12,799",
//         "province": "MOANDA"
//     },
//     {
//         "id": 862,
//         "bureaux": "16",
//         "code": "204",
//         "inscrit": "1,786",
//         "province": "LEBOMBI-LEYOU (MOANDA)"
//     },
//     {
//         "id": 863,
//         "bureaux": "14",
//         "code": "205",
//         "inscrit": "2,925",
//         "province": "MOUNANA"
//     },
//     {
//         "id": 864,
//         "bureaux": "12",
//         "code": "207",
//         "inscrit": "3,933",
//         "province": "OKONDJA"
//     },
//     {
//         "id": 865,
//         "bureaux": "26",
//         "code": "208",
//         "inscrit": "3,569",
//         "province": "SEBE-BRIKOLO (OKONDJA)"
//     },
//     {
//         "id": 866,
//         "bureaux": "7",
//         "code": "209",
//         "inscrit": "1,913",
//         "province": "BAKOUMBA"
//     },
//     {
//         "id": 867,
//         "bureaux": "8",
//         "code": "210",
//         "inscrit": "973",
//         "province": "LEKOKO (BAKOUMBA)"
//     },
//     {
//         "id": 868,
//         "bureaux": "2",
//         "code": "211",
//         "inscrit": "942",
//         "province": "BOUMANGO"
//     },
//     {
//         "id": 869,
//         "bureaux": "7",
//         "code": "212",
//         "inscrit": "1,575",
//         "province": "OGOOUE-LETILI (BOUMANGO)"
//     },
//     {
//         "id": 870,
//         "bureaux": "4",
//         "code": "213",
//         "inscrit": "1,300",
//         "province": "BONGOVILLE"
//     },
//     {
//         "id": 871,
//         "bureaux": "6",
//         "code": "214",
//         "inscrit": "1,122",
//         "province": "DJOUORI-AGNILI (BONGOVILLE)"
//     },
//     {
//         "id": 872,
//         "bureaux": "8",
//         "code": "215",
//         "inscrit": "2,189",
//         "province": "AKIENI"
//     },
//     {
//         "id": 873,
//         "bureaux": "9",
//         "code": "216",
//         "inscrit": "2,097",
//         "province": "LEKONI-LEKORI  (AKIENI)"
//     },
//     {
//         "id": 874,
//         "bureaux": "8",
//         "code": "217",
//         "inscrit": "1,936",
//         "province": "LECONI"
//     },
//     {
//         "id": 875,
//         "bureaux": "14",
//         "code": "218",
//         "inscrit": "1,811",
//         "province": "PLATEAUX (LECONI)"
//     },
//     {
//         "id": 876,
//         "bureaux": "3",
//         "code": "219",
//         "inscrit": "1,050",
//         "province": "ONGA"
//     },
//     {
//         "id": 877,
//         "bureaux": "5",
//         "code": "220",
//         "inscrit": "1,042",
//         "province": "DJOUE (ONGA)"
//     },
//     {
//         "id": 878,
//         "bureaux": "4",
//         "code": "221",
//         "inscrit": "1,126",
//         "province": "NGOUONI"
//     },
//     {
//         "id": 879,
//         "bureaux": "10",
//         "code": "222",
//         "inscrit": "1,320",
//         "province": "LEKABI-LEWOLO (NGOUONI)"
//     },
//     {
//         "id": 880,
//         "bureaux": "4",
//         "code": "223",
//         "inscrit": "1,165",
//         "province": "ABOUMI"
//     },
//     {
//         "id": 881,
//         "bureaux": "2",
//         "code": "02 01 01 01",
//         "inscrit": "937",
//         "province": "NGOUNGOULOU (MAISON DE  FEMME)"
//     },
//     {
//         "id": 882,
//         "bureaux": "2",
//         "code": "02 01 01 02",
//         "inscrit": "587",
//         "province": "BAPILI (CENTRE SOCIAL)"
//     },
//     {
//         "id": 883,
//         "bureaux": "1",
//         "code": "02 01 01 03",
//         "inscrit": "430",
//         "province": "LEKEI (E.P NGOUNGOULOU)"
//     },
//     {
//         "id": 884,
//         "bureaux": "1",
//         "code": "02 01 01 04",
//         "inscrit": "336",
//         "province": "YOCKO (ST HILAIRE)"
//     },
//     {
//         "id": 885,
//         "bureaux": "2",
//         "code": "02 01 01 05",
//         "inscrit": "501",
//         "province": "NGOBOUNDA (ST HILAIRE)"
//     },
//     {
//         "id": 886,
//         "bureaux": "2",
//         "code": "02 01 01 06",
//         "inscrit": "558",
//         "province": "CORNICHE (AV SAVORGANT)"
//     },
//     {
//         "id": 887,
//         "bureaux": "1",
//         "code": "02 01 01 07",
//         "inscrit": "321",
//         "province": "JARDIN ENFANT POUBARA"
//     },
//     {
//         "id": 888,
//         "bureaux": "1",
//         "code": "02 01 01 08",
//         "inscrit": "342",
//         "province": "LYCEE MARCEL AMOGHO"
//     },
//     {
//         "id": 889,
//         "bureaux": "1",
//         "code": "02 01 02 01",
//         "inscrit": "141",
//         "province": "EPIMBI"
//     },
//     {
//         "id": 890,
//         "bureaux": "1",
//         "code": "02 01 02 02",
//         "inscrit": "448",
//         "province": "DIALOGUE"
//     },
//     {
//         "id": 891,
//         "bureaux": "2",
//         "code": "02 01 02 03",
//         "inscrit": "531",
//         "province": "ONGOUEGNE"
//     },
//     {
//         "id": 892,
//         "bureaux": "2",
//         "code": "02 01 02 04",
//         "inscrit": "516",
//         "province": "AYASSI"
//     },
//     {
//         "id": 893,
//         "bureaux": "3",
//         "code": "02 01 02 05",
//         "inscrit": "1,302",
//         "province": "SABLE II"
//     },
//     {
//         "id": 894,
//         "bureaux": "1",
//         "code": "02 01 02 06",
//         "inscrit": "322",
//         "province": "ANGOUMBOU (EC PUBL DZAMITI)"
//     },
//     {
//         "id": 895,
//         "bureaux": "1",
//         "code": "02 01 02 07",
//         "inscrit": "299",
//         "province": "MVOUNA (EC PUBL DZAMITI)"
//     },
//     {
//         "id": 896,
//         "bureaux": "1",
//         "code": "02 01 02 08",
//         "inscrit": "156",
//         "province": "DJAKA (IAES)"
//     },
//     {
//         "id": 897,
//         "bureaux": "1",
//         "code": "02 01 02 09",
//         "inscrit": "478",
//         "province": "ONGALI 1 (EC PUBL OMBELE)"
//     },
//     {
//         "id": 898,
//         "bureaux": "1",
//         "code": "02 01 02 10",
//         "inscrit": "232",
//         "province": "ONGALI II (EC PUBL OMBELE)"
//     },
//     {
//         "id": 899,
//         "bureaux": "2",
//         "code": "02 01 02 11",
//         "inscrit": "686",
//         "province": "OMBELE (EC PUBL OMBELE)"
//     },
//     {
//         "id": 900,
//         "bureaux": "1",
//         "code": "02 01 02 12",
//         "inscrit": "434",
//         "province": "ONDIMBA (EC PUBL OMBELE)"
//     },
//     {
//         "id": 901,
//         "bureaux": "1",
//         "code": "02 01 02 13",
//         "inscrit": "459",
//         "province": "MONTAGNE SAINTE"
//     },
//     {
//         "id": 902,
//         "bureaux": "2",
//         "code": "02 01 03 01",
//         "inscrit": "800",
//         "province": "EC. CATH. AKOU"
//     },
//     {
//         "id": 903,
//         "bureaux": "1",
//         "code": "02 01 03 02",
//         "inscrit": "133",
//         "province": "MIMBOUMBA"
//     },
//     {
//         "id": 904,
//         "bureaux": "1",
//         "code": "02 01 03 03",
//         "inscrit": "236",
//         "province": "LEKONI"
//     },
//     {
//         "id": 905,
//         "bureaux": "2",
//         "code": "02 01 03 04",
//         "inscrit": "829",
//         "province": "MATEBELE II"
//     },
//     {
//         "id": 906,
//         "bureaux": "1",
//         "code": "02 01 03 05",
//         "inscrit": "286",
//         "province": "BAKOU"
//     },
//     {
//         "id": 907,
//         "bureaux": "1",
//         "code": "02 01 03 06",
//         "inscrit": "238",
//         "province": "PIKAS"
//     },
//     {
//         "id": 908,
//         "bureaux": "1",
//         "code": "02 01 03 07",
//         "inscrit": "355",
//         "province": "CARRIERE"
//     },
//     {
//         "id": 909,
//         "bureaux": "1",
//         "code": "02 01 03 08",
//         "inscrit": "450",
//         "province": "MANGOUNGOU"
//     },
//     {
//         "id": 910,
//         "bureaux": "1",
//         "code": "02 01 03 09",
//         "inscrit": "143",
//         "province": "ONDOUAMA"
//     },
//     {
//         "id": 911,
//         "bureaux": "1",
//         "code": "02 01 03 10",
//         "inscrit": "372",
//         "province": "MENAYE"
//     },
//     {
//         "id": 912,
//         "bureaux": "1",
//         "code": "02 01 03 11",
//         "inscrit": "295",
//         "province": "KESSALA"
//     },
//     {
//         "id": 913,
//         "bureaux": "1",
//         "code": "02 01 03 12",
//         "inscrit": "239",
//         "province": "MATEBELE I"
//     },
//     {
//         "id": 914,
//         "bureaux": "1",
//         "code": "02 01 03 13",
//         "inscrit": "313",
//         "province": "EC-CATH-AKOU II"
//     },
//     {
//         "id": 915,
//         "bureaux": "1",
//         "code": "02 01 04 01",
//         "inscrit": "494",
//         "province": "DJOUORI"
//     },
//     {
//         "id": 916,
//         "bureaux": "2",
//         "code": "02 01 04 02",
//         "inscrit": "631",
//         "province": "MBAYA"
//     },
//     {
//         "id": 917,
//         "bureaux": "2",
//         "code": "02 01 04 03",
//         "inscrit": "579",
//         "province": "MINGARA"
//     },
//     {
//         "id": 918,
//         "bureaux": "1",
//         "code": "02 01 04 04",
//         "inscrit": "385",
//         "province": "MABOUKOU 1-2"
//     },
//     {
//         "id": 919,
//         "bureaux": "2",
//         "code": "02 01 04 05",
//         "inscrit": "508",
//         "province": "YENE 1"
//     },
//     {
//         "id": 920,
//         "bureaux": "1",
//         "code": "02 01 04 06",
//         "inscrit": "211",
//         "province": "MAKANA"
//     },
//     {
//         "id": 921,
//         "bureaux": "1",
//         "code": "02 01 04 07",
//         "inscrit": "429",
//         "province": "MABA"
//     },
//     {
//         "id": 922,
//         "bureaux": "1",
//         "code": "02 01 04 08",
//         "inscrit": "159",
//         "province": "YENE II"
//     },
//     {
//         "id": 923,
//         "bureaux": "12",
//         "code": "02 01 01",
//         "inscrit": "4,012",
//         "province": "1ER  ARRONDISSEMENT"
//     },
//     {
//         "id": 924,
//         "bureaux": "18",
//         "code": "02 01 02",
//         "inscrit": "6,004",
//         "province": "2EME ARRONDISSEMENT"
//     },
//     {
//         "id": 925,
//         "bureaux": "15",
//         "code": "02 01 03",
//         "inscrit": "4,689",
//         "province": "3EME ARRONDISSEMENT"
//     },
//     {
//         "id": 926,
//         "bureaux": "11",
//         "code": "02 01 04",
//         "inscrit": "3,396",
//         "province": "4EME ARRONDISSEMENT"
//     },
//     {
//         "id": 927,
//         "bureaux": "1",
//         "code": "02 02 01 01",
//         "inscrit": "312",
//         "province": "ONKOUA"
//     },
//     {
//         "id": 928,
//         "bureaux": "1",
//         "code": "02 02 01 02",
//         "inscrit": "102",
//         "province": "BIBASSA"
//     },
//     {
//         "id": 929,
//         "bureaux": "1",
//         "code": "02 02 01 03",
//         "inscrit": "173",
//         "province": "NDJOKAYE"
//     },
//     {
//         "id": 930,
//         "bureaux": "1",
//         "code": "02 02 01 04",
//         "inscrit": "164",
//         "province": "VILLE BANGOUE"
//     },
//     {
//         "id": 931,
//         "bureaux": "1",
//         "code": "02 02 01 05",
//         "inscrit": "240",
//         "province": "MBOUMA-OYALI"
//     },
//     {
//         "id": 932,
//         "bureaux": "1",
//         "code": "02 02 01 06",
//         "inscrit": "5",
//         "province": "LENGORI-EVOUGA II"
//     },
//     {
//         "id": 933,
//         "bureaux": "1",
//         "code": "02 02 01 07",
//         "inscrit": "464",
//         "province": "MENAYE-EPILA"
//     },
//     {
//         "id": 934,
//         "bureaux": "1",
//         "code": "02 02 01 08",
//         "inscrit": "112",
//         "province": "EBALA"
//     },
//     {
//         "id": 935,
//         "bureaux": "1",
//         "code": "02 02 01 09",
//         "inscrit": "69",
//         "province": "YOULOU"
//     },
//     {
//         "id": 936,
//         "bureaux": "1",
//         "code": "02 02 01 10",
//         "inscrit": "91",
//         "province": "BINIOMI"
//     },
//     {
//         "id": 937,
//         "bureaux": "1",
//         "code": "02 02 01 11",
//         "inscrit": "125",
//         "province": "LENGORI VILLAGE"
//     },
//     {
//         "id": 938,
//         "bureaux": "1",
//         "code": "02 02 01 12",
//         "inscrit": "89",
//         "province": "EYOUGA 2 VILLAGE"
//     },
//     {
//         "id": 939,
//         "bureaux": "1",
//         "code": "02 02 02 01",
//         "inscrit": "84",
//         "province": "LEPAKA"
//     },
//     {
//         "id": 940,
//         "bureaux": "1",
//         "code": "02 02 02 02",
//         "inscrit": "97",
//         "province": "BITONO"
//     },
//     {
//         "id": 941,
//         "bureaux": "1",
//         "code": "02 02 02 03",
//         "inscrit": "228",
//         "province": "MOUPIA"
//     },
//     {
//         "id": 942,
//         "bureaux": "1",
//         "code": "02 02 02 04",
//         "inscrit": "44",
//         "province": "DZAKI VILLE"
//     },
//     {
//         "id": 943,
//         "bureaux": "1",
//         "code": "02 02 02 05",
//         "inscrit": "154",
//         "province": "BANGUENE-BENGUIA"
//     },
//     {
//         "id": 944,
//         "bureaux": "1",
//         "code": "02 02 02 06",
//         "inscrit": "31",
//         "province": "POUBARA"
//     },
//     {
//         "id": 945,
//         "bureaux": "1",
//         "code": "02 02 02 07",
//         "inscrit": "213",
//         "province": "SUCAF 1"
//     },
//     {
//         "id": 946,
//         "bureaux": "1",
//         "code": "02 02 02 08",
//         "inscrit": "327",
//         "province": "SUCAF 2"
//     },
//     {
//         "id": 947,
//         "bureaux": "1",
//         "code": "02 02 02 09",
//         "inscrit": "75",
//         "province": "SUCAF 3"
//     },
//     {
//         "id": 948,
//         "bureaux": "1",
//         "code": "02 02 02 10",
//         "inscrit": "409",
//         "province": "MVENGUE"
//     },
//     {
//         "id": 949,
//         "bureaux": "1",
//         "code": "02 02 02 11",
//         "inscrit": "129",
//         "province": "MAPOUBA"
//     },
//     {
//         "id": 950,
//         "bureaux": "1",
//         "code": "02 02 02 12",
//         "inscrit": "30",
//         "province": "NGANDA"
//     },
//     {
//         "id": 951,
//         "bureaux": "2",
//         "code": "02 02 02 13",
//         "inscrit": "632",
//         "province": "BASE AERIENNE 02"
//     },
//     {
//         "id": 952,
//         "bureaux": "1",
//         "code": "02 02 03 01",
//         "inscrit": "270",
//         "province": "VENEZ-VOIR"
//     },
//     {
//         "id": 953,
//         "bureaux": "1",
//         "code": "02 02 03 02",
//         "inscrit": "104",
//         "province": "MOTOBO I"
//     },
//     {
//         "id": 954,
//         "bureaux": "1",
//         "code": "02 02 03 03",
//         "inscrit": "151",
//         "province": "OKOLOVILLE"
//     },
//     {
//         "id": 955,
//         "bureaux": "1",
//         "code": "02 02 03 04",
//         "inscrit": "151",
//         "province": "LEKOUSSAGA"
//     },
//     {
//         "id": 956,
//         "bureaux": "1",
//         "code": "02 02 03 05",
//         "inscrit": "98",
//         "province": "OBORILEKOUSSA"
//     },
//     {
//         "id": 957,
//         "bureaux": "1",
//         "code": "02 02 03 06",
//         "inscrit": "134",
//         "province": "MOTOBO II"
//     },
//     {
//         "id": 958,
//         "bureaux": "1",
//         "code": "02 02 03 07",
//         "inscrit": "220",
//         "province": "ANDJOGO"
//     },
//     {
//         "id": 959,
//         "bureaux": "1",
//         "code": "02 02 03 08",
//         "inscrit": "137",
//         "province": "MOKABA"
//     },
//     {
//         "id": 960,
//         "bureaux": "1",
//         "code": "02 02 03 09",
//         "inscrit": "48",
//         "province": "MIKASSA"
//     },
//     {
//         "id": 961,
//         "bureaux": "1",
//         "code": "02 02 03 10",
//         "inscrit": "17",
//         "province": "SOGADEL SUD"
//     },
//     {
//         "id": 962,
//         "bureaux": "1",
//         "code": "02 02 03 11",
//         "inscrit": "48",
//         "province": "OLOUNGA-OMVOURI"
//     },
//     {
//         "id": 963,
//         "bureaux": "12",
//         "code": "02 02 01",
//         "inscrit": "1,946",
//         "province": "DJOUMOU"
//     },
//     {
//         "id": 964,
//         "bureaux": "14",
//         "code": "02 02 02",
//         "inscrit": "2,453",
//         "province": "KASSA"
//     },
//     {
//         "id": 965,
//         "bureaux": "11",
//         "code": "02 02 03",
//         "inscrit": "1,378",
//         "province": "LEKABI"
//     },
//     {
//         "id": 966,
//         "bureaux": "2",
//         "code": "02 03 01 01",
//         "inscrit": "875",
//         "province": "LYCEE TECHN. 1"
//     },
//     {
//         "id": 967,
//         "bureaux": "2",
//         "code": "02 03 01 02",
//         "inscrit": "655",
//         "province": "CITE OCTRA"
//     },
//     {
//         "id": 968,
//         "bureaux": "2",
//         "code": "02 03 01 03",
//         "inscrit": "598",
//         "province": "BELLE-VUE 1-2-3"
//     },
//     {
//         "id": 969,
//         "bureaux": "2",
//         "code": "02 03 01 04",
//         "inscrit": "941",
//         "province": "DOUANES 1-2"
//     },
//     {
//         "id": 970,
//         "bureaux": "2",
//         "code": "02 03 01 05",
//         "inscrit": "726",
//         "province": "MONT-MOANDA 1-2"
//     },
//     {
//         "id": 971,
//         "bureaux": "3",
//         "code": "02 03 01 06",
//         "inscrit": "1,349",
//         "province": "ALLIANCE 1-2"
//     },
//     {
//         "id": 972,
//         "bureaux": "2",
//         "code": "02 03 01 07",
//         "inscrit": "507",
//         "province": "MIOSSO TELEPHERIQUE 1-2"
//     },
//     {
//         "id": 973,
//         "bureaux": "1",
//         "code": "02 03 01 08",
//         "inscrit": "272",
//         "province": "JARDIN ENF LEKOLO 1-2"
//     },
//     {
//         "id": 974,
//         "bureaux": "1",
//         "code": "02 03 01 09",
//         "inscrit": "350",
//         "province": "MOANDA PLAINE 1-2-3"
//     },
//     {
//         "id": 975,
//         "bureaux": "1",
//         "code": "02 03 01 10",
//         "inscrit": "453",
//         "province": "MONTAGNE SAINTE 1-2"
//     },
//     {
//         "id": 976,
//         "bureaux": "2",
//         "code": "02 03 01 11",
//         "inscrit": "628",
//         "province": "MOUKAGNISSI 1-2"
//     },
//     {
//         "id": 977,
//         "bureaux": "2",
//         "code": "02 03 02 01",
//         "inscrit": "658",
//         "province": "LEKOLO"
//     },
//     {
//         "id": 978,
//         "bureaux": "4",
//         "code": "02 03 02 02",
//         "inscrit": "1,713",
//         "province": "JARDIN ENFANT COMILOG"
//     },
//     {
//         "id": 979,
//         "bureaux": "4",
//         "code": "02 03 02 03",
//         "inscrit": "1,608",
//         "province": "LEYIMA"
//     },
//     {
//         "id": 980,
//         "bureaux": "2",
//         "code": "02 03 02 04",
//         "inscrit": "718",
//         "province": "ONKOULA EC-CATH-A ET B"
//     },
//     {
//         "id": 981,
//         "bureaux": "2",
//         "code": "02 03 02 05",
//         "inscrit": "748",
//         "province": "CENTRE COMMERCIAL"
//     },
//     {
//         "id": 982,
//         "bureaux": "20",
//         "code": "02 03 01",
//         "inscrit": "7,354",
//         "province": "1ER  ARRONDISSEMENT"
//     },
//     {
//         "id": 983,
//         "bureaux": "14",
//         "code": "02 03 02",
//         "inscrit": "5,445",
//         "province": "2EME ARRONDISSEMENT"
//     },
//     {
//         "id": 984,
//         "bureaux": "1",
//         "code": "02 04 01 01",
//         "inscrit": "95",
//         "province": "MONDZEYE"
//     },
//     {
//         "id": 985,
//         "bureaux": "1",
//         "code": "02 04 01 02",
//         "inscrit": "164",
//         "province": "KONDA"
//     },
//     {
//         "id": 986,
//         "bureaux": "1",
//         "code": "02 04 01 03",
//         "inscrit": "239",
//         "province": "LEMAGNA (MAGNIMA)"
//     },
//     {
//         "id": 987,
//         "bureaux": "1",
//         "code": "02 04 01 04",
//         "inscrit": "84",
//         "province": "NDJANGATEBE"
//     },
//     {
//         "id": 988,
//         "bureaux": "1",
//         "code": "02 04 01 05",
//         "inscrit": "124",
//         "province": "NDJOUTOU (MOYABI)"
//     },
//     {
//         "id": 989,
//         "bureaux": "1",
//         "code": "02 04 01 06",
//         "inscrit": "71",
//         "province": "MOYABI VILLAGE"
//     },
//     {
//         "id": 990,
//         "bureaux": "1",
//         "code": "02 04 01 07",
//         "inscrit": "2",
//         "province": "MANDJAYE"
//     },
//     {
//         "id": 991,
//         "bureaux": "1",
//         "code": "02 04 01 08",
//         "inscrit": "1",
//         "province": "CHANTIER ROUGIER"
//     },
//     {
//         "id": 992,
//         "bureaux": "1",
//         "code": "02 04 01 09",
//         "inscrit": "188",
//         "province": "DOUMAI"
//     },
//     {
//         "id": 993,
//         "bureaux": "1",
//         "code": "02 04 01 10",
//         "inscrit": "139",
//         "province": "MAGNIMA"
//     },
//     {
//         "id": 994,
//         "bureaux": "1",
//         "code": "02 04 01 11",
//         "inscrit": "110",
//         "province": "MAYELA"
//     },
//     {
//         "id": 995,
//         "bureaux": "1",
//         "code": "02 04 02 01",
//         "inscrit": "176",
//         "province": "MBOUNGOU-BADOUMA"
//     },
//     {
//         "id": 996,
//         "bureaux": "1",
//         "code": "02 04 02 02",
//         "inscrit": "87",
//         "province": "NGUIASSONO"
//     },
//     {
//         "id": 997,
//         "bureaux": "1",
//         "code": "02 04 02 03",
//         "inscrit": "237",
//         "province": "NDOUBI"
//     },
//     {
//         "id": 998,
//         "bureaux": "1",
//         "code": "02 04 02 04",
//         "inscrit": "23",
//         "province": "OGAPROV"
//     },
//     {
//         "id": 999,
//         "bureaux": "1",
//         "code": "02 04 02 05",
//         "inscrit": "46",
//         "province": "MASSANGO II"
//     },
//     {
//         "id": 1000,
//         "bureaux": "11",
//         "code": "02 04 01",
//         "inscrit": "1,217",
//         "province": "LEBOMBI-LEKEDI"
//     },
//     {
//         "id": 1001,
//         "bureaux": "5",
//         "code": "02 04 02",
//         "inscrit": "569",
//         "province": "LEKEDI-LEYOU"
//     },
//     {
//         "id": 1002,
//         "bureaux": "1",
//         "code": "02 05 00 01",
//         "inscrit": "196",
//         "province": "MASSANGO 1"
//     },
//     {
//         "id": 1003,
//         "bureaux": "1",
//         "code": "02 05 00 02",
//         "inscrit": "86",
//         "province": "CITE CADRE (MESS COMUF)"
//     },
//     {
//         "id": 1004,
//         "bureaux": "1",
//         "code": "02 05 00 03",
//         "inscrit": "302",
//         "province": "CITE AMBIE (ECOLE CATH.)"
//     },
//     {
//         "id": 1005,
//         "bureaux": "2",
//         "code": "02 05 00 04",
//         "inscrit": "565",
//         "province": "ECOLE RENOVATION A"
//     },
//     {
//         "id": 1006,
//         "bureaux": "1",
//         "code": "02 05 00 05",
//         "inscrit": "114",
//         "province": "MOUNANA (VILLAGE)"
//     },
//     {
//         "id": 1007,
//         "bureaux": "1",
//         "code": "02 05 00 06",
//         "inscrit": "276",
//         "province": "CENTRE COMMERCIAL (ECOLE PROT."
//     },
//     {
//         "id": 1008,
//         "bureaux": "1",
//         "code": "02 05 00 07",
//         "inscrit": "52",
//         "province": "CITE ADMINIST (HOTEL DE VILLE)"
//     },
//     {
//         "id": 1009,
//         "bureaux": "1",
//         "code": "02 05 00 08",
//         "inscrit": "352",
//         "province": "O M O I"
//     },
//     {
//         "id": 1010,
//         "bureaux": "1",
//         "code": "02 05 00 09",
//         "inscrit": "313",
//         "province": "ECOLE RENOVATION B"
//     },
//     {
//         "id": 1011,
//         "bureaux": "1",
//         "code": "02 05 00 10",
//         "inscrit": "63",
//         "province": "CENTRE-VILLE"
//     },
//     {
//         "id": 1012,
//         "bureaux": "1",
//         "code": "02 05 00 11",
//         "inscrit": "89",
//         "province": "NGANGOLO"
//     },
//     {
//         "id": 1013,
//         "bureaux": "2",
//         "code": "02 05 00 12",
//         "inscrit": "517",
//         "province": "C.E.S. HENRI BASSET"
//     },
//     {
//         "id": 1014,
//         "bureaux": "14",
//         "code": "02 05 00",
//         "inscrit": "2,925",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 1015,
//         "bureaux": "2",
//         "code": "02 07 00 01",
//         "inscrit": "847",
//         "province": "MANGOU"
//     },
//     {
//         "id": 1016,
//         "bureaux": "1",
//         "code": "02 07 00 02",
//         "inscrit": "366",
//         "province": "MISSION CATHOLIQUE"
//     },
//     {
//         "id": 1017,
//         "bureaux": "1",
//         "code": "02 07 00 03",
//         "inscrit": "207",
//         "province": "SEBE"
//     },
//     {
//         "id": 1018,
//         "bureaux": "1",
//         "code": "02 07 00 04",
//         "inscrit": "194",
//         "province": "ENGOUMOU"
//     },
//     {
//         "id": 1019,
//         "bureaux": "3",
//         "code": "02 07 00 05",
//         "inscrit": "1,108",
//         "province": "MPOUNGOU"
//     },
//     {
//         "id": 1020,
//         "bureaux": "2",
//         "code": "02 07 00 06",
//         "inscrit": "592",
//         "province": "ATSIA"
//     },
//     {
//         "id": 1021,
//         "bureaux": "1",
//         "code": "02 07 00 07",
//         "inscrit": "438",
//         "province": "OLONGO"
//     },
//     {
//         "id": 1022,
//         "bureaux": "1",
//         "code": "02 07 00 08",
//         "inscrit": "181",
//         "province": "ECOLE OBELI OSSINGA"
//     },
//     {
//         "id": 1023,
//         "bureaux": "12",
//         "code": "02 07 00",
//         "inscrit": "3,933",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 1024,
//         "bureaux": "1",
//         "code": "02 08 01 01",
//         "inscrit": "162",
//         "province": "AYANABO"
//     },
//     {
//         "id": 1025,
//         "bureaux": "1",
//         "code": "02 08 01 02",
//         "inscrit": "144",
//         "province": "BOUALA-BOUMA"
//     },
//     {
//         "id": 1026,
//         "bureaux": "1",
//         "code": "02 08 01 03",
//         "inscrit": "401",
//         "province": "MOYOL"
//     },
//     {
//         "id": 1027,
//         "bureaux": "1",
//         "code": "02 08 01 04",
//         "inscrit": "98",
//         "province": "ALANGA"
//     },
//     {
//         "id": 1028,
//         "bureaux": "1",
//         "code": "02 08 01 05",
//         "inscrit": "52",
//         "province": "LEBALADOUBA"
//     },
//     {
//         "id": 1029,
//         "bureaux": "1",
//         "code": "02 08 02 01",
//         "inscrit": "72",
//         "province": "MBABIRI"
//     },
//     {
//         "id": 1030,
//         "bureaux": "1",
//         "code": "02 08 02 02",
//         "inscrit": "86",
//         "province": "OTOUNDOU"
//     },
//     {
//         "id": 1031,
//         "bureaux": "1",
//         "code": "02 08 02 03",
//         "inscrit": "118",
//         "province": "MBOUNGA"
//     },
//     {
//         "id": 1032,
//         "bureaux": "1",
//         "code": "02 08 02 04",
//         "inscrit": "159",
//         "province": "OKILA"
//     },
//     {
//         "id": 1033,
//         "bureaux": "1",
//         "code": "02 08 02 05",
//         "inscrit": "76",
//         "province": "OLOUNGA II"
//     },
//     {
//         "id": 1034,
//         "bureaux": "1",
//         "code": "02 08 02 06",
//         "inscrit": "60",
//         "province": "OSSELE-OTOLA"
//     },
//     {
//         "id": 1035,
//         "bureaux": "1",
//         "code": "02 08 02 07",
//         "inscrit": "58",
//         "province": "ONDJEYE"
//     },
//     {
//         "id": 1036,
//         "bureaux": "1",
//         "code": "02 08 02 08",
//         "inscrit": "76",
//         "province": "LELAMA C-E-B"
//     },
//     {
//         "id": 1037,
//         "bureaux": "1",
//         "code": "02 08 03 01",
//         "inscrit": "129",
//         "province": "ONDILI"
//     },
//     {
//         "id": 1038,
//         "bureaux": "1",
//         "code": "02 08 03 02",
//         "inscrit": "119",
//         "province": "NGOMA"
//     },
//     {
//         "id": 1039,
//         "bureaux": "1",
//         "code": "02 08 03 03",
//         "inscrit": "194",
//         "province": "ODJALA"
//     },
//     {
//         "id": 1040,
//         "bureaux": "1",
//         "code": "02 08 03 04",
//         "inscrit": "121",
//         "province": "NDJOUNOU"
//     },
//     {
//         "id": 1041,
//         "bureaux": "1",
//         "code": "02 08 03 05",
//         "inscrit": "54",
//         "province": "MAKATAMANGOYE 1"
//     },
//     {
//         "id": 1042,
//         "bureaux": "1",
//         "code": "02 08 03 06",
//         "inscrit": "211",
//         "province": "TEBE"
//     },
//     {
//         "id": 1043,
//         "bureaux": "1",
//         "code": "02 08 03 07",
//         "inscrit": "62",
//         "province": "MINA"
//     },
//     {
//         "id": 1044,
//         "bureaux": "1",
//         "code": "02 08 03 08",
//         "inscrit": "67",
//         "province": "MAKATAMANGOYE 2"
//     },
//     {
//         "id": 1045,
//         "bureaux": "1",
//         "code": "02 08 04 01",
//         "inscrit": "74",
//         "province": "OSSINGA II"
//     },
//     {
//         "id": 1046,
//         "bureaux": "1",
//         "code": "02 08 04 02",
//         "inscrit": "180",
//         "province": "ONGUILA"
//     },
//     {
//         "id": 1047,
//         "bureaux": "1",
//         "code": "02 08 04 03",
//         "inscrit": "316",
//         "province": "AMBINDA"
//     },
//     {
//         "id": 1048,
//         "bureaux": "11",
//         "code": "02 08 05 01",
//         "inscrit": "353",
//         "province": "EC PUBLIQUE LEKORI"
//     },
//     {
//         "id": 1049,
//         "bureaux": "11",
//         "code": "02 08 05 02",
//         "inscrit": "127",
//         "province": "EC PUBL OPONGOU-ABOLO I"
//     },
//     {
//         "id": 1050,
//         "bureaux": "5",
//         "code": "02 08 01",
//         "inscrit": "857",
//         "province": "LEKALA"
//     },
//     {
//         "id": 1051,
//         "bureaux": "8",
//         "code": "02 08 02",
//         "inscrit": "705",
//         "province": "LOUAMI-LELAMA"
//     },
//     {
//         "id": 1052,
//         "bureaux": "8",
//         "code": "02 08 03",
//         "inscrit": "957",
//         "province": "MOUNIANDZI"
//     },
//     {
//         "id": 1053,
//         "bureaux": "3",
//         "code": "02 08 04",
//         "inscrit": "570",
//         "province": "SEBE-LOURI"
//     },
//     {
//         "id": 1054,
//         "bureaux": "2",
//         "code": "02 08 05",
//         "inscrit": "480",
//         "province": "DISTRICT DE LEKORI"
//     },
//     {
//         "id": 1055,
//         "bureaux": "1",
//         "code": "02 09 00 01",
//         "inscrit": "150",
//         "province": "BAKOUMBA VILLAGE 1"
//     },
//     {
//         "id": 1056,
//         "bureaux": "1",
//         "code": "02 09 00 02",
//         "inscrit": "456",
//         "province": "ECOLE CATHOLIQUE 1"
//     },
//     {
//         "id": 1057,
//         "bureaux": "1",
//         "code": "02 09 00 03",
//         "inscrit": "452",
//         "province": "ECOLE CATHOLIQUE 2"
//     },
//     {
//         "id": 1058,
//         "bureaux": "1",
//         "code": "02 09 00 04",
//         "inscrit": "360",
//         "province": "ECOLE PUBLIQUE CENTRALE 1"
//     },
//     {
//         "id": 1059,
//         "bureaux": "1",
//         "code": "02 09 00 05",
//         "inscrit": "183",
//         "province": "ECOLE PUBLIQUE CENTRALE 2"
//     },
//     {
//         "id": 1060,
//         "bureaux": "1",
//         "code": "02 09 00 06",
//         "inscrit": "308",
//         "province": "NGOBI"
//     },
//     {
//         "id": 1061,
//         "bureaux": "1",
//         "code": "02 09 00 07",
//         "inscrit": "4",
//         "province": "BAKOUMBA VILLAGE 2"
//     },
//     {
//         "id": 1062,
//         "bureaux": "7",
//         "code": "02 09 00",
//         "inscrit": "1,913",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 1063,
//         "bureaux": "1",
//         "code": "02 10 02 01",
//         "inscrit": "17",
//         "province": "LEKOKO VILLAGE"
//     },
//     {
//         "id": 1064,
//         "bureaux": "1",
//         "code": "02 10 02 02",
//         "inscrit": "212",
//         "province": "MAMIDI"
//     },
//     {
//         "id": 1065,
//         "bureaux": "1",
//         "code": "02 10 02 03",
//         "inscrit": "151",
//         "province": "LEKAMBA"
//     },
//     {
//         "id": 1066,
//         "bureaux": "1",
//         "code": "02 10 02 04",
//         "inscrit": "79",
//         "province": "POYA"
//     },
//     {
//         "id": 1067,
//         "bureaux": "1",
//         "code": "02 10 02 05",
//         "inscrit": "58",
//         "province": "LEMANASSA"
//     },
//     {
//         "id": 1068,
//         "bureaux": "1",
//         "code": "02 10 03 01",
//         "inscrit": "124",
//         "province": "E P MOUKONDJOKA"
//     },
//     {
//         "id": 1069,
//         "bureaux": "1",
//         "code": "02 10 03 02",
//         "inscrit": "224",
//         "province": "MIPONDI I"
//     },
//     {
//         "id": 1070,
//         "bureaux": "1",
//         "code": "02 10 03 03",
//         "inscrit": "108",
//         "province": "BAKAMBA"
//     },
//     {
//         "id": 1071,
//         "bureaux": "5",
//         "code": "02 10 02",
//         "inscrit": "517",
//         "province": "LEBOMBI SUD"
//     },
//     {
//         "id": 1072,
//         "bureaux": "3",
//         "code": "02 10 03",
//         "inscrit": "456",
//         "province": "MIAGASSA NORD"
//     },
//     {
//         "id": 1073,
//         "bureaux": "2",
//         "code": "02 11 00 01",
//         "inscrit": "942",
//         "province": "ECOLE PUBLIQUE"
//     },
//     {
//         "id": 1074,
//         "bureaux": "2",
//         "code": "02 11 00",
//         "inscrit": "942",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 1075,
//         "bureaux": "1",
//         "code": "02 12 02 01",
//         "inscrit": "164",
//         "province": "MOUNGOUANGO"
//     },
//     {
//         "id": 1076,
//         "bureaux": "1",
//         "code": "02 12 02 02",
//         "inscrit": "201",
//         "province": "LENDENDOUNGOU"
//     },
//     {
//         "id": 1077,
//         "bureaux": "2",
//         "code": "02 12 02 03",
//         "inscrit": "623",
//         "province": "MBOUA"
//     },
//     {
//         "id": 1078,
//         "bureaux": "3",
//         "code": "02 12 01",
//         "inscrit": "587",
//         "province": "LOULA"
//     },
//     {
//         "id": 1079,
//         "bureaux": "4",
//         "code": "02 12 02",
//         "inscrit": "988",
//         "province": "MALUNDU"
//     },
//     {
//         "id": 1080,
//         "bureaux": "4",
//         "code": "02 13 00",
//         "inscrit": "1,300",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 1081,
//         "bureaux": "1",
//         "code": "02 14 02 01",
//         "inscrit": "207",
//         "province": "KELE"
//     },
//     {
//         "id": 1082,
//         "bureaux": "1",
//         "code": "02 14 02 02",
//         "inscrit": "194",
//         "province": "BOUBOU"
//     },
//     {
//         "id": 1083,
//         "bureaux": "1",
//         "code": "02 14 02 03",
//         "inscrit": "299",
//         "province": "SOUBA 1"
//     },
//     {
//         "id": 1084,
//         "bureaux": "1",
//         "code": "02 14 02 04",
//         "inscrit": "148",
//         "province": "KEWAGA"
//     },
//     {
//         "id": 1085,
//         "bureaux": "2",
//         "code": "02 14 01",
//         "inscrit": "274",
//         "province": "KAYIE"
//     },
//     {
//         "id": 1086,
//         "bureaux": "4",
//         "code": "02 14 02",
//         "inscrit": "848",
//         "province": "LEKEYE"
//     },
//     {
//         "id": 1087,
//         "bureaux": "1",
//         "code": "02 15 00 01",
//         "inscrit": "4",
//         "province": "OSS KAMA"
//     },
//     {
//         "id": 1088,
//         "bureaux": "2",
//         "code": "02 15 00 02",
//         "inscrit": "522",
//         "province": "NDOUA (PALMERAIE)"
//     },
//     {
//         "id": 1089,
//         "bureaux": "2",
//         "code": "02 15 00 03",
//         "inscrit": "581",
//         "province": "KAKOUMBOU"
//     },
//     {
//         "id": 1090,
//         "bureaux": "1",
//         "code": "02 15 00 04",
//         "inscrit": "338",
//         "province": "ENTSAGA"
//     },
//     {
//         "id": 1091,
//         "bureaux": "1",
//         "code": "02 15 00 05",
//         "inscrit": "419",
//         "province": "OBEGUE"
//     },
//     {
//         "id": 1092,
//         "bureaux": "1",
//         "code": "02 15 00 06",
//         "inscrit": "325",
//         "province": "BOUNOU(OBOUO)"
//     },
//     {
//         "id": 1093,
//         "bureaux": "8",
//         "code": "02 15 00",
//         "inscrit": "2,189",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 1094,
//         "bureaux": "1",
//         "code": "02 16 02 01",
//         "inscrit": "2",
//         "province": "BOUNOU (OBOUO)"
//     },
//     {
//         "id": 1095,
//         "bureaux": "1",
//         "code": "02 16 02 02",
//         "inscrit": "206",
//         "province": "KASSIELE 1 ET 2"
//     },
//     {
//         "id": 1096,
//         "bureaux": "1",
//         "code": "02 16 02 03",
//         "inscrit": "196",
//         "province": "OBIA"
//     },
//     {
//         "id": 1097,
//         "bureaux": "1",
//         "code": "02 16 04 01",
//         "inscrit": "372",
//         "province": "OSSKAMA"
//     },
//     {
//         "id": 1098,
//         "bureaux": "3",
//         "code": "02 16 01",
//         "inscrit": "822",
//         "province": "LEBEYI"
//     },
//     {
//         "id": 1099,
//         "bureaux": "3",
//         "code": "02 16 02",
//         "inscrit": "404",
//         "province": "LESSIMI"
//     },
//     {
//         "id": 1100,
//         "bureaux": "2",
//         "code": "02 16 03",
//         "inscrit": "499",
//         "province": "LIMI"
//     },
//     {
//         "id": 1101,
//         "bureaux": "1",
//         "code": "02 16 04",
//         "inscrit": "372",
//         "province": "LEYOUMOU"
//     },
//     {
//         "id": 1102,
//         "bureaux": "1",
//         "code": "02 17 00 01",
//         "inscrit": "487",
//         "province": "SAMBA"
//     },
//     {
//         "id": 1103,
//         "bureaux": "2",
//         "code": "02 17 00 02",
//         "inscrit": "522",
//         "province": "MBAMA-LEKONI VIILLAGE"
//     },
//     {
//         "id": 1104,
//         "bureaux": "1",
//         "code": "02 17 00 03",
//         "inscrit": "327",
//         "province": "DJOUANI"
//     },
//     {
//         "id": 1105,
//         "bureaux": "1",
//         "code": "02 17 00 04",
//         "inscrit": "199",
//         "province": "CHIC"
//     },
//     {
//         "id": 1106,
//         "bureaux": "1",
//         "code": "02 17 00 05",
//         "inscrit": "90",
//         "province": "ABOUYI"
//     },
//     {
//         "id": 1107,
//         "bureaux": "1",
//         "code": "02 17 00 06",
//         "inscrit": "147",
//         "province": "ADMINISTRATIF"
//     },
//     {
//         "id": 1108,
//         "bureaux": "1",
//         "code": "02 17 00 07",
//         "inscrit": "164",
//         "province": "OKORIVILLE"
//     },
//     {
//         "id": 1109,
//         "bureaux": "8",
//         "code": "02 17 00",
//         "inscrit": "1,936",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 1110,
//         "bureaux": "1",
//         "code": "02 18 01 01",
//         "inscrit": "325",
//         "province": "EDJOUANGOULOU"
//     },
//     {
//         "id": 1111,
//         "bureaux": "1",
//         "code": "02 18 02 01",
//         "inscrit": "174",
//         "province": "AKOU"
//     },
//     {
//         "id": 1112,
//         "bureaux": "1",
//         "code": "02 18 02 02",
//         "inscrit": "108",
//         "province": "KABALA"
//     },
//     {
//         "id": 1113,
//         "bureaux": "1",
//         "code": "02 18 02 03",
//         "inscrit": "121",
//         "province": "SAYE"
//     },
//     {
//         "id": 1114,
//         "bureaux": "1",
//         "code": "02 18 02 04",
//         "inscrit": "104",
//         "province": "EKOUYI-MBOUMA"
//     },
//     {
//         "id": 1115,
//         "bureaux": "1",
//         "code": "02 18 02 05",
//         "inscrit": "34",
//         "province": "KEBIRI"
//     },
//     {
//         "id": 1116,
//         "bureaux": "1",
//         "code": "02 18 02 06",
//         "inscrit": "86",
//         "province": "KESSALA"
//     },
//     {
//         "id": 1117,
//         "bureaux": "1",
//         "code": "02 18 02 07",
//         "inscrit": "80",
//         "province": "LEWOU"
//     },
//     {
//         "id": 1118,
//         "bureaux": "1",
//         "code": "02 18 02 08",
//         "inscrit": "41",
//         "province": "OSSELE"
//     },
//     {
//         "id": 1119,
//         "bureaux": "1",
//         "code": "02 18 03 01",
//         "inscrit": "193",
//         "province": "ODJOUMA"
//     },
//     {
//         "id": 1120,
//         "bureaux": "1",
//         "code": "02 18 03 02",
//         "inscrit": "228",
//         "province": "OSSOUELE"
//     },
//     {
//         "id": 1121,
//         "bureaux": "1",
//         "code": "02 18 03 03",
//         "inscrit": "124",
//         "province": "YIA A"
//     },
//     {
//         "id": 1122,
//         "bureaux": "1",
//         "code": "02 18 03 04",
//         "inscrit": "111",
//         "province": "YIA B"
//     },
//     {
//         "id": 1123,
//         "bureaux": "1",
//         "code": "02 18 03 05",
//         "inscrit": "82",
//         "province": "ABILA"
//     },
//     {
//         "id": 1124,
//         "bureaux": "1",
//         "code": "02 18 01",
//         "inscrit": "325",
//         "province": "DJOUELE-LABOUMI"
//     },
//     {
//         "id": 1125,
//         "bureaux": "8",
//         "code": "02 18 02",
//         "inscrit": "748",
//         "province": "DJOUYA"
//     },
//     {
//         "id": 1126,
//         "bureaux": "5",
//         "code": "02 18 03",
//         "inscrit": "738",
//         "province": "LOURI"
//     },
//     {
//         "id": 1127,
//         "bureaux": "3",
//         "code": "02 19 00 01",
//         "inscrit": "1,050",
//         "province": "ECOLE PUBLIQUE DONGA"
//     },
//     {
//         "id": 1128,
//         "bureaux": "3",
//         "code": "02 19 00",
//         "inscrit": "1,050",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 1129,
//         "bureaux": "1",
//         "code": "02 20 02 01",
//         "inscrit": "212",
//         "province": "AYOGO"
//     },
//     {
//         "id": 1130,
//         "bureaux": "1",
//         "code": "02 20 02 02",
//         "inscrit": "131",
//         "province": "OSSIELE"
//     },
//     {
//         "id": 1131,
//         "bureaux": "1",
//         "code": "02 20 02 03",
//         "inscrit": "204",
//         "province": "ALLIGA-YEMNGA"
//     },
//     {
//         "id": 1132,
//         "bureaux": "2",
//         "code": "02 20 01",
//         "inscrit": "495",
//         "province": "MPANI"
//     },
//     {
//         "id": 1133,
//         "bureaux": "3",
//         "code": "02 20 02",
//         "inscrit": "547",
//         "province": "NGAYI"
//     },
//     {
//         "id": 1134,
//         "bureaux": "1",
//         "code": "02 21 00 01",
//         "inscrit": "236",
//         "province": "EGOUMOUNA"
//     },
//     {
//         "id": 1135,
//         "bureaux": "1",
//         "code": "02 21 00 02",
//         "inscrit": "276",
//         "province": "ANKOUSSOU"
//     },
//     {
//         "id": 1136,
//         "bureaux": "1",
//         "code": "02 21 00 03",
//         "inscrit": "225",
//         "province": "NDJIEGUE"
//     },
//     {
//         "id": 1137,
//         "bureaux": "1",
//         "code": "02 21 00 04",
//         "inscrit": "389",
//         "province": "OTOGHO"
//     },
//     {
//         "id": 1138,
//         "bureaux": "4",
//         "code": "02 21 00",
//         "inscrit": "1,126",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 1139,
//         "bureaux": "1",
//         "code": "02 22 01 01",
//         "inscrit": "205",
//         "province": "ASSIAMI"
//     },
//     {
//         "id": 1140,
//         "bureaux": "1",
//         "code": "02 22 01 02",
//         "inscrit": "128",
//         "province": "OKOUMIBI"
//     },
//     {
//         "id": 1141,
//         "bureaux": "1",
//         "code": "02 22 01 03",
//         "inscrit": "87",
//         "province": "OYOU"
//     },
//     {
//         "id": 1142,
//         "bureaux": "1",
//         "code": "02 22 01 04",
//         "inscrit": "2",
//         "province": "EKOUMA"
//     },
//     {
//         "id": 1143,
//         "bureaux": "1",
//         "code": "02 22 03 01",
//         "inscrit": "117",
//         "province": "EKOUMA"
//     },
//     {
//         "id": 1144,
//         "bureaux": "1",
//         "code": "02 22 03 02",
//         "inscrit": "26",
//         "province": "ALELE II"
//     },
//     {
//         "id": 1145,
//         "bureaux": "1",
//         "code": "02 22 03 03",
//         "inscrit": "168",
//         "province": "OKANGOVILLE"
//     },
//     {
//         "id": 1146,
//         "bureaux": "1",
//         "code": "02 22 03 04",
//         "inscrit": "156",
//         "province": "OMOYE"
//     },
//     {
//         "id": 1147,
//         "bureaux": "4",
//         "code": "02 22 01",
//         "inscrit": "422",
//         "province": "MPANI-EKOULA"
//     },
//     {
//         "id": 1148,
//         "bureaux": "2",
//         "code": "02 22 02",
//         "inscrit": "431",
//         "province": "ENKORO"
//     },
//     {
//         "id": 1149,
//         "bureaux": "4",
//         "code": "02 22 03",
//         "inscrit": "467",
//         "province": "NGOUA"
//     },
//     {
//         "id": 1150,
//         "bureaux": "4",
//         "code": "02 23 00",
//         "inscrit": "1,165",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 1151,
//         "bureaux": "1",
//         "code": "02 24 01 01",
//         "inscrit": "267",
//         "province": "OBOLI"
//     },
//     {
//         "id": 1152,
//         "bureaux": "1",
//         "code": "02 24 01 02",
//         "inscrit": "201",
//         "province": "YOUMA 2"
//     },
//     {
//         "id": 1153,
//         "bureaux": "1",
//         "code": "02 24 01 03",
//         "inscrit": "204",
//         "province": "ONTOGHO"
//     },
//     {
//         "id": 1154,
//         "bureaux": "3",
//         "code": "02 24 01",
//         "inscrit": "672",
//         "province": "BRIKOLO"
//     },
//     {
//         "id": 1155,
//         "bureaux": "56",
//         "code": "201",
//         "inscrit": "18,101",
//         "province": "FRANCEVILLE"
//     },
//     {
//         "id": 1156,
//         "bureaux": "37",
//         "code": "202",
//         "inscrit": "5,777",
//         "province": "MPASSA (FRANCEVILLE)"
//     },
//     {
//         "id": 1157,
//         "bureaux": "34",
//         "code": "203",
//         "inscrit": "12,799",
//         "province": "MOANDA"
//     },
//     {
//         "id": 1158,
//         "bureaux": "16",
//         "code": "204",
//         "inscrit": "1,786",
//         "province": "LEBOMBI-LEYOU (MOANDA)"
//     },
//     {
//         "id": 1159,
//         "bureaux": "14",
//         "code": "205",
//         "inscrit": "2,925",
//         "province": "MOUNANA"
//     },
//     {
//         "id": 1160,
//         "bureaux": "12",
//         "code": "207",
//         "inscrit": "3,933",
//         "province": "OKONDJA"
//     },
//     {
//         "id": 1161,
//         "bureaux": "26",
//         "code": "208",
//         "inscrit": "3,569",
//         "province": "SEBE-BRIKOLO (OKONDJA)"
//     },
//     {
//         "id": 1162,
//         "bureaux": "7",
//         "code": "209",
//         "inscrit": "1,913",
//         "province": "BAKOUMBA"
//     },
//     {
//         "id": 1163,
//         "bureaux": "8",
//         "code": "210",
//         "inscrit": "973",
//         "province": "LEKOKO (BAKOUMBA)"
//     },
//     {
//         "id": 1164,
//         "bureaux": "2",
//         "code": "211",
//         "inscrit": "942",
//         "province": "BOUMANGO"
//     },
//     {
//         "id": 1165,
//         "bureaux": "7",
//         "code": "212",
//         "inscrit": "1,575",
//         "province": "OGOOUE-LETILI (BOUMANGO)"
//     },
//     {
//         "id": 1166,
//         "bureaux": "4",
//         "code": "213",
//         "inscrit": "1,300",
//         "province": "BONGOVILLE"
//     },
//     {
//         "id": 1167,
//         "bureaux": "6",
//         "code": "214",
//         "inscrit": "1,122",
//         "province": "DJOUORI-AGNILI (BONGOVILLE)"
//     },
//     {
//         "id": 1168,
//         "bureaux": "8",
//         "code": "215",
//         "inscrit": "2,189",
//         "province": "AKIENI"
//     },
//     {
//         "id": 1169,
//         "bureaux": "9",
//         "code": "216",
//         "inscrit": "2,097",
//         "province": "LEKONI-LEKORI  (AKIENI)"
//     },
//     {
//         "id": 1170,
//         "bureaux": "8",
//         "code": "217",
//         "inscrit": "1,936",
//         "province": "LECONI"
//     },
//     {
//         "id": 1171,
//         "bureaux": "14",
//         "code": "218",
//         "inscrit": "1,811",
//         "province": "PLATEAUX (LECONI)"
//     },
//     {
//         "id": 1172,
//         "bureaux": "3",
//         "code": "219",
//         "inscrit": "1,050",
//         "province": "ONGA"
//     },
//     {
//         "id": 1173,
//         "bureaux": "5",
//         "code": "220",
//         "inscrit": "1,042",
//         "province": "DJOUE (ONGA)"
//     },
//     {
//         "id": 1174,
//         "bureaux": "4",
//         "code": "221",
//         "inscrit": "1,126",
//         "province": "NGOUONI"
//     },
//     {
//         "id": 1175,
//         "bureaux": "10",
//         "code": "222",
//         "inscrit": "1,320",
//         "province": "LEKABI-LEWOLO (NGOUONI)"
//     },
//     {
//         "id": 1176,
//         "bureaux": "4",
//         "code": "223",
//         "inscrit": "1,165",
//         "province": "ABOUMI"
//     },
//     {
//         "id": 1177,
//         "bureaux": "2",
//         "code": "02 01 01 01",
//         "inscrit": "937",
//         "province": "NGOUNGOULOU (MAISON DE  FEMME)"
//     },
//     {
//         "id": 1178,
//         "bureaux": "2",
//         "code": "02 01 01 02",
//         "inscrit": "587",
//         "province": "BAPILI (CENTRE SOCIAL)"
//     },
//     {
//         "id": 1179,
//         "bureaux": "1",
//         "code": "02 01 01 03",
//         "inscrit": "430",
//         "province": "LEKEI (E.P NGOUNGOULOU)"
//     },
//     {
//         "id": 1180,
//         "bureaux": "1",
//         "code": "02 01 01 04",
//         "inscrit": "336",
//         "province": "YOCKO (ST HILAIRE)"
//     },
//     {
//         "id": 1181,
//         "bureaux": "2",
//         "code": "02 01 01 05",
//         "inscrit": "501",
//         "province": "NGOBOUNDA (ST HILAIRE)"
//     },
//     {
//         "id": 1182,
//         "bureaux": "2",
//         "code": "02 01 01 06",
//         "inscrit": "558",
//         "province": "CORNICHE (AV SAVORGANT)"
//     },
//     {
//         "id": 1183,
//         "bureaux": "1",
//         "code": "02 01 01 07",
//         "inscrit": "321",
//         "province": "JARDIN ENFANT POUBARA"
//     },
//     {
//         "id": 1184,
//         "bureaux": "1",
//         "code": "02 01 01 08",
//         "inscrit": "342",
//         "province": "LYCEE MARCEL AMOGHO"
//     },
//     {
//         "id": 1185,
//         "bureaux": "1",
//         "code": "02 01 02 01",
//         "inscrit": "141",
//         "province": "EPIMBI"
//     },
//     {
//         "id": 1186,
//         "bureaux": "1",
//         "code": "02 01 02 02",
//         "inscrit": "448",
//         "province": "DIALOGUE"
//     },
//     {
//         "id": 1187,
//         "bureaux": "2",
//         "code": "02 01 02 03",
//         "inscrit": "531",
//         "province": "ONGOUEGNE"
//     },
//     {
//         "id": 1188,
//         "bureaux": "2",
//         "code": "02 01 02 04",
//         "inscrit": "516",
//         "province": "AYASSI"
//     },
//     {
//         "id": 1189,
//         "bureaux": "3",
//         "code": "02 01 02 05",
//         "inscrit": "1,302",
//         "province": "SABLE II"
//     },
//     {
//         "id": 1190,
//         "bureaux": "1",
//         "code": "02 01 02 06",
//         "inscrit": "322",
//         "province": "ANGOUMBOU (EC PUBL DZAMITI)"
//     },
//     {
//         "id": 1191,
//         "bureaux": "1",
//         "code": "02 01 02 07",
//         "inscrit": "299",
//         "province": "MVOUNA (EC PUBL DZAMITI)"
//     },
//     {
//         "id": 1192,
//         "bureaux": "1",
//         "code": "02 01 02 08",
//         "inscrit": "156",
//         "province": "DJAKA (IAES)"
//     },
//     {
//         "id": 1193,
//         "bureaux": "1",
//         "code": "02 01 02 09",
//         "inscrit": "478",
//         "province": "ONGALI 1 (EC PUBL OMBELE)"
//     },
//     {
//         "id": 1194,
//         "bureaux": "1",
//         "code": "02 01 02 10",
//         "inscrit": "232",
//         "province": "ONGALI II (EC PUBL OMBELE)"
//     },
//     {
//         "id": 1195,
//         "bureaux": "2",
//         "code": "02 01 02 11",
//         "inscrit": "686",
//         "province": "OMBELE (EC PUBL OMBELE)"
//     },
//     {
//         "id": 1196,
//         "bureaux": "1",
//         "code": "02 01 02 12",
//         "inscrit": "434",
//         "province": "ONDIMBA (EC PUBL OMBELE)"
//     },
//     {
//         "id": 1197,
//         "bureaux": "1",
//         "code": "02 01 02 13",
//         "inscrit": "459",
//         "province": "MONTAGNE SAINTE"
//     },
//     {
//         "id": 1198,
//         "bureaux": "2",
//         "code": "02 01 03 01",
//         "inscrit": "800",
//         "province": "EC. CATH. AKOU"
//     },
//     {
//         "id": 1199,
//         "bureaux": "1",
//         "code": "02 01 03 02",
//         "inscrit": "133",
//         "province": "MIMBOUMBA"
//     },
//     {
//         "id": 1200,
//         "bureaux": "1",
//         "code": "02 01 03 03",
//         "inscrit": "236",
//         "province": "LEKONI"
//     },
//     {
//         "id": 1201,
//         "bureaux": "2",
//         "code": "02 01 03 04",
//         "inscrit": "829",
//         "province": "MATEBELE II"
//     },
//     {
//         "id": 1202,
//         "bureaux": "1",
//         "code": "02 01 03 05",
//         "inscrit": "286",
//         "province": "BAKOU"
//     },
//     {
//         "id": 1203,
//         "bureaux": "1",
//         "code": "02 01 03 06",
//         "inscrit": "238",
//         "province": "PIKAS"
//     },
//     {
//         "id": 1204,
//         "bureaux": "1",
//         "code": "02 01 03 07",
//         "inscrit": "355",
//         "province": "CARRIERE"
//     },
//     {
//         "id": 1205,
//         "bureaux": "1",
//         "code": "02 01 03 08",
//         "inscrit": "450",
//         "province": "MANGOUNGOU"
//     },
//     {
//         "id": 1206,
//         "bureaux": "1",
//         "code": "02 01 03 09",
//         "inscrit": "143",
//         "province": "ONDOUAMA"
//     },
//     {
//         "id": 1207,
//         "bureaux": "1",
//         "code": "02 01 03 10",
//         "inscrit": "372",
//         "province": "MENAYE"
//     },
//     {
//         "id": 1208,
//         "bureaux": "1",
//         "code": "02 01 03 11",
//         "inscrit": "295",
//         "province": "KESSALA"
//     },
//     {
//         "id": 1209,
//         "bureaux": "1",
//         "code": "02 01 03 12",
//         "inscrit": "239",
//         "province": "MATEBELE I"
//     },
//     {
//         "id": 1210,
//         "bureaux": "1",
//         "code": "02 01 03 13",
//         "inscrit": "313",
//         "province": "EC-CATH-AKOU II"
//     },
//     {
//         "id": 1211,
//         "bureaux": "1",
//         "code": "02 01 04 01",
//         "inscrit": "494",
//         "province": "DJOUORI"
//     },
//     {
//         "id": 1212,
//         "bureaux": "2",
//         "code": "02 01 04 02",
//         "inscrit": "631",
//         "province": "MBAYA"
//     },
//     {
//         "id": 1213,
//         "bureaux": "2",
//         "code": "02 01 04 03",
//         "inscrit": "579",
//         "province": "MINGARA"
//     },
//     {
//         "id": 1214,
//         "bureaux": "1",
//         "code": "02 01 04 04",
//         "inscrit": "385",
//         "province": "MABOUKOU 1-2"
//     },
//     {
//         "id": 1215,
//         "bureaux": "2",
//         "code": "02 01 04 05",
//         "inscrit": "508",
//         "province": "YENE 1"
//     },
//     {
//         "id": 1216,
//         "bureaux": "1",
//         "code": "02 01 04 06",
//         "inscrit": "211",
//         "province": "MAKANA"
//     },
//     {
//         "id": 1217,
//         "bureaux": "1",
//         "code": "02 01 04 07",
//         "inscrit": "429",
//         "province": "MABA"
//     },
//     {
//         "id": 1218,
//         "bureaux": "1",
//         "code": "02 01 04 08",
//         "inscrit": "159",
//         "province": "YENE II"
//     },
//     {
//         "id": 1219,
//         "bureaux": "12",
//         "code": "02 01 01",
//         "inscrit": "4,012",
//         "province": "1ER  ARRONDISSEMENT"
//     },
//     {
//         "id": 1220,
//         "bureaux": "18",
//         "code": "02 01 02",
//         "inscrit": "6,004",
//         "province": "2EME ARRONDISSEMENT"
//     },
//     {
//         "id": 1221,
//         "bureaux": "15",
//         "code": "02 01 03",
//         "inscrit": "4,689",
//         "province": "3EME ARRONDISSEMENT"
//     },
//     {
//         "id": 1222,
//         "bureaux": "11",
//         "code": "02 01 04",
//         "inscrit": "3,396",
//         "province": "4EME ARRONDISSEMENT"
//     },
//     {
//         "id": 1223,
//         "bureaux": "1",
//         "code": "02 02 01 01",
//         "inscrit": "312",
//         "province": "ONKOUA"
//     },
//     {
//         "id": 1224,
//         "bureaux": "1",
//         "code": "02 02 01 02",
//         "inscrit": "102",
//         "province": "BIBASSA"
//     },
//     {
//         "id": 1225,
//         "bureaux": "1",
//         "code": "02 02 01 03",
//         "inscrit": "173",
//         "province": "NDJOKAYE"
//     },
//     {
//         "id": 1226,
//         "bureaux": "1",
//         "code": "02 02 01 04",
//         "inscrit": "164",
//         "province": "VILLE BANGOUE"
//     },
//     {
//         "id": 1227,
//         "bureaux": "1",
//         "code": "02 02 01 05",
//         "inscrit": "240",
//         "province": "MBOUMA-OYALI"
//     },
//     {
//         "id": 1228,
//         "bureaux": "1",
//         "code": "02 02 01 06",
//         "inscrit": "5",
//         "province": "LENGORI-EVOUGA II"
//     },
//     {
//         "id": 1229,
//         "bureaux": "1",
//         "code": "02 02 01 07",
//         "inscrit": "464",
//         "province": "MENAYE-EPILA"
//     },
//     {
//         "id": 1230,
//         "bureaux": "1",
//         "code": "02 02 01 08",
//         "inscrit": "112",
//         "province": "EBALA"
//     },
//     {
//         "id": 1231,
//         "bureaux": "1",
//         "code": "02 02 01 09",
//         "inscrit": "69",
//         "province": "YOULOU"
//     },
//     {
//         "id": 1232,
//         "bureaux": "1",
//         "code": "02 02 01 10",
//         "inscrit": "91",
//         "province": "BINIOMI"
//     },
//     {
//         "id": 1233,
//         "bureaux": "1",
//         "code": "02 02 01 11",
//         "inscrit": "125",
//         "province": "LENGORI VILLAGE"
//     },
//     {
//         "id": 1234,
//         "bureaux": "1",
//         "code": "02 02 01 12",
//         "inscrit": "89",
//         "province": "EYOUGA 2 VILLAGE"
//     },
//     {
//         "id": 1235,
//         "bureaux": "1",
//         "code": "02 02 02 01",
//         "inscrit": "84",
//         "province": "LEPAKA"
//     },
//     {
//         "id": 1236,
//         "bureaux": "1",
//         "code": "02 02 02 02",
//         "inscrit": "97",
//         "province": "BITONO"
//     },
//     {
//         "id": 1237,
//         "bureaux": "1",
//         "code": "02 02 02 03",
//         "inscrit": "228",
//         "province": "MOUPIA"
//     },
//     {
//         "id": 1238,
//         "bureaux": "1",
//         "code": "02 02 02 04",
//         "inscrit": "44",
//         "province": "DZAKI VILLE"
//     },
//     {
//         "id": 1239,
//         "bureaux": "1",
//         "code": "02 02 02 05",
//         "inscrit": "154",
//         "province": "BANGUENE-BENGUIA"
//     },
//     {
//         "id": 1240,
//         "bureaux": "1",
//         "code": "02 02 02 06",
//         "inscrit": "31",
//         "province": "POUBARA"
//     },
//     {
//         "id": 1241,
//         "bureaux": "1",
//         "code": "02 02 02 07",
//         "inscrit": "213",
//         "province": "SUCAF 1"
//     },
//     {
//         "id": 1242,
//         "bureaux": "1",
//         "code": "02 02 02 08",
//         "inscrit": "327",
//         "province": "SUCAF 2"
//     },
//     {
//         "id": 1243,
//         "bureaux": "1",
//         "code": "02 02 02 09",
//         "inscrit": "75",
//         "province": "SUCAF 3"
//     },
//     {
//         "id": 1244,
//         "bureaux": "1",
//         "code": "02 02 02 10",
//         "inscrit": "409",
//         "province": "MVENGUE"
//     },
//     {
//         "id": 1245,
//         "bureaux": "1",
//         "code": "02 02 02 11",
//         "inscrit": "129",
//         "province": "MAPOUBA"
//     },
//     {
//         "id": 1246,
//         "bureaux": "1",
//         "code": "02 02 02 12",
//         "inscrit": "30",
//         "province": "NGANDA"
//     },
//     {
//         "id": 1247,
//         "bureaux": "2",
//         "code": "02 02 02 13",
//         "inscrit": "632",
//         "province": "BASE AERIENNE 02"
//     },
//     {
//         "id": 1248,
//         "bureaux": "1",
//         "code": "02 02 03 01",
//         "inscrit": "270",
//         "province": "VENEZ-VOIR"
//     },
//     {
//         "id": 1249,
//         "bureaux": "1",
//         "code": "02 02 03 02",
//         "inscrit": "104",
//         "province": "MOTOBO I"
//     },
//     {
//         "id": 1250,
//         "bureaux": "1",
//         "code": "02 02 03 03",
//         "inscrit": "151",
//         "province": "OKOLOVILLE"
//     },
//     {
//         "id": 1251,
//         "bureaux": "1",
//         "code": "02 02 03 04",
//         "inscrit": "151",
//         "province": "LEKOUSSAGA"
//     },
//     {
//         "id": 1252,
//         "bureaux": "1",
//         "code": "02 02 03 05",
//         "inscrit": "98",
//         "province": "OBORILEKOUSSA"
//     },
//     {
//         "id": 1253,
//         "bureaux": "1",
//         "code": "02 02 03 06",
//         "inscrit": "134",
//         "province": "MOTOBO II"
//     },
//     {
//         "id": 1254,
//         "bureaux": "1",
//         "code": "02 02 03 07",
//         "inscrit": "220",
//         "province": "ANDJOGO"
//     },
//     {
//         "id": 1255,
//         "bureaux": "1",
//         "code": "02 02 03 08",
//         "inscrit": "137",
//         "province": "MOKABA"
//     },
//     {
//         "id": 1256,
//         "bureaux": "1",
//         "code": "02 02 03 09",
//         "inscrit": "48",
//         "province": "MIKASSA"
//     },
//     {
//         "id": 1257,
//         "bureaux": "1",
//         "code": "02 02 03 10",
//         "inscrit": "17",
//         "province": "SOGADEL SUD"
//     },
//     {
//         "id": 1258,
//         "bureaux": "1",
//         "code": "02 02 03 11",
//         "inscrit": "48",
//         "province": "OLOUNGA-OMVOURI"
//     },
//     {
//         "id": 1259,
//         "bureaux": "12",
//         "code": "02 02 01",
//         "inscrit": "1,946",
//         "province": "DJOUMOU"
//     },
//     {
//         "id": 1260,
//         "bureaux": "14",
//         "code": "02 02 02",
//         "inscrit": "2,453",
//         "province": "KASSA"
//     },
//     {
//         "id": 1261,
//         "bureaux": "11",
//         "code": "02 02 03",
//         "inscrit": "1,378",
//         "province": "LEKABI"
//     },
//     {
//         "id": 1262,
//         "bureaux": "2",
//         "code": "02 03 01 01",
//         "inscrit": "875",
//         "province": "LYCEE TECHN. 1"
//     },
//     {
//         "id": 1263,
//         "bureaux": "2",
//         "code": "02 03 01 02",
//         "inscrit": "655",
//         "province": "CITE OCTRA"
//     },
//     {
//         "id": 1264,
//         "bureaux": "2",
//         "code": "02 03 01 03",
//         "inscrit": "598",
//         "province": "BELLE-VUE 1-2-3"
//     },
//     {
//         "id": 1265,
//         "bureaux": "2",
//         "code": "02 03 01 04",
//         "inscrit": "941",
//         "province": "DOUANES 1-2"
//     },
//     {
//         "id": 1266,
//         "bureaux": "2",
//         "code": "02 03 01 05",
//         "inscrit": "726",
//         "province": "MONT-MOANDA 1-2"
//     },
//     {
//         "id": 1267,
//         "bureaux": "3",
//         "code": "02 03 01 06",
//         "inscrit": "1,349",
//         "province": "ALLIANCE 1-2"
//     },
//     {
//         "id": 1268,
//         "bureaux": "2",
//         "code": "02 03 01 07",
//         "inscrit": "507",
//         "province": "MIOSSO TELEPHERIQUE 1-2"
//     },
//     {
//         "id": 1269,
//         "bureaux": "1",
//         "code": "02 03 01 08",
//         "inscrit": "272",
//         "province": "JARDIN ENF LEKOLO 1-2"
//     },
//     {
//         "id": 1270,
//         "bureaux": "1",
//         "code": "02 03 01 09",
//         "inscrit": "350",
//         "province": "MOANDA PLAINE 1-2-3"
//     },
//     {
//         "id": 1271,
//         "bureaux": "1",
//         "code": "02 03 01 10",
//         "inscrit": "453",
//         "province": "MONTAGNE SAINTE 1-2"
//     },
//     {
//         "id": 1272,
//         "bureaux": "2",
//         "code": "02 03 01 11",
//         "inscrit": "628",
//         "province": "MOUKAGNISSI 1-2"
//     },
//     {
//         "id": 1273,
//         "bureaux": "2",
//         "code": "02 03 02 01",
//         "inscrit": "658",
//         "province": "LEKOLO"
//     },
//     {
//         "id": 1274,
//         "bureaux": "4",
//         "code": "02 03 02 02",
//         "inscrit": "1,713",
//         "province": "JARDIN ENFANT COMILOG"
//     },
//     {
//         "id": 1275,
//         "bureaux": "4",
//         "code": "02 03 02 03",
//         "inscrit": "1,608",
//         "province": "LEYIMA"
//     },
//     {
//         "id": 1276,
//         "bureaux": "2",
//         "code": "02 03 02 04",
//         "inscrit": "718",
//         "province": "ONKOULA EC-CATH-A ET B"
//     },
//     {
//         "id": 1277,
//         "bureaux": "2",
//         "code": "02 03 02 05",
//         "inscrit": "748",
//         "province": "CENTRE COMMERCIAL"
//     },
//     {
//         "id": 1278,
//         "bureaux": "20",
//         "code": "02 03 01",
//         "inscrit": "7,354",
//         "province": "1ER  ARRONDISSEMENT"
//     },
//     {
//         "id": 1279,
//         "bureaux": "14",
//         "code": "02 03 02",
//         "inscrit": "5,445",
//         "province": "2EME ARRONDISSEMENT"
//     },
//     {
//         "id": 1280,
//         "bureaux": "1",
//         "code": "02 04 01 01",
//         "inscrit": "95",
//         "province": "MONDZEYE"
//     },
//     {
//         "id": 1281,
//         "bureaux": "1",
//         "code": "02 04 01 02",
//         "inscrit": "164",
//         "province": "KONDA"
//     },
//     {
//         "id": 1282,
//         "bureaux": "1",
//         "code": "02 04 01 03",
//         "inscrit": "239",
//         "province": "LEMAGNA (MAGNIMA)"
//     },
//     {
//         "id": 1283,
//         "bureaux": "1",
//         "code": "02 04 01 04",
//         "inscrit": "84",
//         "province": "NDJANGATEBE"
//     },
//     {
//         "id": 1284,
//         "bureaux": "1",
//         "code": "02 04 01 05",
//         "inscrit": "124",
//         "province": "NDJOUTOU (MOYABI)"
//     },
//     {
//         "id": 1285,
//         "bureaux": "1",
//         "code": "02 04 01 06",
//         "inscrit": "71",
//         "province": "MOYABI VILLAGE"
//     },
//     {
//         "id": 1286,
//         "bureaux": "1",
//         "code": "02 04 01 07",
//         "inscrit": "2",
//         "province": "MANDJAYE"
//     },
//     {
//         "id": 1287,
//         "bureaux": "1",
//         "code": "02 04 01 08",
//         "inscrit": "1",
//         "province": "CHANTIER ROUGIER"
//     },
//     {
//         "id": 1288,
//         "bureaux": "1",
//         "code": "02 04 01 09",
//         "inscrit": "188",
//         "province": "DOUMAI"
//     },
//     {
//         "id": 1289,
//         "bureaux": "1",
//         "code": "02 04 01 10",
//         "inscrit": "139",
//         "province": "MAGNIMA"
//     },
//     {
//         "id": 1290,
//         "bureaux": "1",
//         "code": "02 04 01 11",
//         "inscrit": "110",
//         "province": "MAYELA"
//     },
//     {
//         "id": 1291,
//         "bureaux": "1",
//         "code": "02 04 02 01",
//         "inscrit": "176",
//         "province": "MBOUNGOU-BADOUMA"
//     },
//     {
//         "id": 1292,
//         "bureaux": "1",
//         "code": "02 04 02 02",
//         "inscrit": "87",
//         "province": "NGUIASSONO"
//     },
//     {
//         "id": 1293,
//         "bureaux": "1",
//         "code": "02 04 02 03",
//         "inscrit": "237",
//         "province": "NDOUBI"
//     },
//     {
//         "id": 1294,
//         "bureaux": "1",
//         "code": "02 04 02 04",
//         "inscrit": "23",
//         "province": "OGAPROV"
//     },
//     {
//         "id": 1295,
//         "bureaux": "1",
//         "code": "02 04 02 05",
//         "inscrit": "46",
//         "province": "MASSANGO II"
//     },
//     {
//         "id": 1296,
//         "bureaux": "11",
//         "code": "02 04 01",
//         "inscrit": "1,217",
//         "province": "LEBOMBI-LEKEDI"
//     },
//     {
//         "id": 1297,
//         "bureaux": "5",
//         "code": "02 04 02",
//         "inscrit": "569",
//         "province": "LEKEDI-LEYOU"
//     },
//     {
//         "id": 1298,
//         "bureaux": "1",
//         "code": "02 05 00 01",
//         "inscrit": "196",
//         "province": "MASSANGO 1"
//     },
//     {
//         "id": 1299,
//         "bureaux": "1",
//         "code": "02 05 00 02",
//         "inscrit": "86",
//         "province": "CITE CADRE (MESS COMUF)"
//     },
//     {
//         "id": 1300,
//         "bureaux": "1",
//         "code": "02 05 00 03",
//         "inscrit": "302",
//         "province": "CITE AMBIE (ECOLE CATH.)"
//     },
//     {
//         "id": 1301,
//         "bureaux": "2",
//         "code": "02 05 00 04",
//         "inscrit": "565",
//         "province": "ECOLE RENOVATION A"
//     },
//     {
//         "id": 1302,
//         "bureaux": "1",
//         "code": "02 05 00 05",
//         "inscrit": "114",
//         "province": "MOUNANA (VILLAGE)"
//     },
//     {
//         "id": 1303,
//         "bureaux": "1",
//         "code": "02 05 00 06",
//         "inscrit": "276",
//         "province": "CENTRE COMMERCIAL (ECOLE PROT."
//     },
//     {
//         "id": 1304,
//         "bureaux": "1",
//         "code": "02 05 00 07",
//         "inscrit": "52",
//         "province": "CITE ADMINIST (HOTEL DE VILLE)"
//     },
//     {
//         "id": 1305,
//         "bureaux": "1",
//         "code": "02 05 00 08",
//         "inscrit": "352",
//         "province": "O M O I"
//     },
//     {
//         "id": 1306,
//         "bureaux": "1",
//         "code": "02 05 00 09",
//         "inscrit": "313",
//         "province": "ECOLE RENOVATION B"
//     },
//     {
//         "id": 1307,
//         "bureaux": "1",
//         "code": "02 05 00 10",
//         "inscrit": "63",
//         "province": "CENTRE-VILLE"
//     },
//     {
//         "id": 1308,
//         "bureaux": "1",
//         "code": "02 05 00 11",
//         "inscrit": "89",
//         "province": "NGANGOLO"
//     },
//     {
//         "id": 1309,
//         "bureaux": "2",
//         "code": "02 05 00 12",
//         "inscrit": "517",
//         "province": "C.E.S. HENRI BASSET"
//     },
//     {
//         "id": 1310,
//         "bureaux": "14",
//         "code": "02 05 00",
//         "inscrit": "2,925",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 1311,
//         "bureaux": "2",
//         "code": "02 07 00 01",
//         "inscrit": "847",
//         "province": "MANGOU"
//     },
//     {
//         "id": 1312,
//         "bureaux": "1",
//         "code": "02 07 00 02",
//         "inscrit": "366",
//         "province": "MISSION CATHOLIQUE"
//     },
//     {
//         "id": 1313,
//         "bureaux": "1",
//         "code": "02 07 00 03",
//         "inscrit": "207",
//         "province": "SEBE"
//     },
//     {
//         "id": 1314,
//         "bureaux": "1",
//         "code": "02 07 00 04",
//         "inscrit": "194",
//         "province": "ENGOUMOU"
//     },
//     {
//         "id": 1315,
//         "bureaux": "3",
//         "code": "02 07 00 05",
//         "inscrit": "1,108",
//         "province": "MPOUNGOU"
//     },
//     {
//         "id": 1316,
//         "bureaux": "2",
//         "code": "02 07 00 06",
//         "inscrit": "592",
//         "province": "ATSIA"
//     },
//     {
//         "id": 1317,
//         "bureaux": "1",
//         "code": "02 07 00 07",
//         "inscrit": "438",
//         "province": "OLONGO"
//     },
//     {
//         "id": 1318,
//         "bureaux": "1",
//         "code": "02 07 00 08",
//         "inscrit": "181",
//         "province": "ECOLE OBELI OSSINGA"
//     },
//     {
//         "id": 1319,
//         "bureaux": "12",
//         "code": "02 07 00",
//         "inscrit": "3,933",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 1320,
//         "bureaux": "1",
//         "code": "02 08 01 01",
//         "inscrit": "162",
//         "province": "AYANABO"
//     },
//     {
//         "id": 1321,
//         "bureaux": "1",
//         "code": "02 08 01 02",
//         "inscrit": "144",
//         "province": "BOUALA-BOUMA"
//     },
//     {
//         "id": 1322,
//         "bureaux": "1",
//         "code": "02 08 01 03",
//         "inscrit": "401",
//         "province": "MOYOL"
//     },
//     {
//         "id": 1323,
//         "bureaux": "1",
//         "code": "02 08 01 04",
//         "inscrit": "98",
//         "province": "ALANGA"
//     },
//     {
//         "id": 1324,
//         "bureaux": "1",
//         "code": "02 08 01 05",
//         "inscrit": "52",
//         "province": "LEBALADOUBA"
//     },
//     {
//         "id": 1325,
//         "bureaux": "1",
//         "code": "02 08 02 01",
//         "inscrit": "72",
//         "province": "MBABIRI"
//     },
//     {
//         "id": 1326,
//         "bureaux": "1",
//         "code": "02 08 02 02",
//         "inscrit": "86",
//         "province": "OTOUNDOU"
//     },
//     {
//         "id": 1327,
//         "bureaux": "1",
//         "code": "02 08 02 03",
//         "inscrit": "118",
//         "province": "MBOUNGA"
//     },
//     {
//         "id": 1328,
//         "bureaux": "1",
//         "code": "02 08 02 04",
//         "inscrit": "159",
//         "province": "OKILA"
//     },
//     {
//         "id": 1329,
//         "bureaux": "1",
//         "code": "02 08 02 05",
//         "inscrit": "76",
//         "province": "OLOUNGA II"
//     },
//     {
//         "id": 1330,
//         "bureaux": "1",
//         "code": "02 08 02 06",
//         "inscrit": "60",
//         "province": "OSSELE-OTOLA"
//     },
//     {
//         "id": 1331,
//         "bureaux": "1",
//         "code": "02 08 02 07",
//         "inscrit": "58",
//         "province": "ONDJEYE"
//     },
//     {
//         "id": 1332,
//         "bureaux": "1",
//         "code": "02 08 02 08",
//         "inscrit": "76",
//         "province": "LELAMA C-E-B"
//     },
//     {
//         "id": 1333,
//         "bureaux": "1",
//         "code": "02 08 03 01",
//         "inscrit": "129",
//         "province": "ONDILI"
//     },
//     {
//         "id": 1334,
//         "bureaux": "1",
//         "code": "02 08 03 02",
//         "inscrit": "119",
//         "province": "NGOMA"
//     },
//     {
//         "id": 1335,
//         "bureaux": "1",
//         "code": "02 08 03 03",
//         "inscrit": "194",
//         "province": "ODJALA"
//     },
//     {
//         "id": 1336,
//         "bureaux": "1",
//         "code": "02 08 03 04",
//         "inscrit": "121",
//         "province": "NDJOUNOU"
//     },
//     {
//         "id": 1337,
//         "bureaux": "1",
//         "code": "02 08 03 05",
//         "inscrit": "54",
//         "province": "MAKATAMANGOYE 1"
//     },
//     {
//         "id": 1338,
//         "bureaux": "1",
//         "code": "02 08 03 06",
//         "inscrit": "211",
//         "province": "TEBE"
//     },
//     {
//         "id": 1339,
//         "bureaux": "1",
//         "code": "02 08 03 07",
//         "inscrit": "62",
//         "province": "MINA"
//     },
//     {
//         "id": 1340,
//         "bureaux": "1",
//         "code": "02 08 03 08",
//         "inscrit": "67",
//         "province": "MAKATAMANGOYE 2"
//     },
//     {
//         "id": 1341,
//         "bureaux": "1",
//         "code": "02 08 04 01",
//         "inscrit": "74",
//         "province": "OSSINGA II"
//     },
//     {
//         "id": 1342,
//         "bureaux": "1",
//         "code": "02 08 04 02",
//         "inscrit": "180",
//         "province": "ONGUILA"
//     },
//     {
//         "id": 1343,
//         "bureaux": "1",
//         "code": "02 08 04 03",
//         "inscrit": "316",
//         "province": "AMBINDA"
//     },
//     {
//         "id": 1344,
//         "bureaux": "11",
//         "code": "02 08 05 01",
//         "inscrit": "353",
//         "province": "EC PUBLIQUE LEKORI"
//     },
//     {
//         "id": 1345,
//         "bureaux": "11",
//         "code": "02 08 05 02",
//         "inscrit": "127",
//         "province": "EC PUBL OPONGOU-ABOLO I"
//     },
//     {
//         "id": 1346,
//         "bureaux": "5",
//         "code": "02 08 01",
//         "inscrit": "857",
//         "province": "LEKALA"
//     },
//     {
//         "id": 1347,
//         "bureaux": "8",
//         "code": "02 08 02",
//         "inscrit": "705",
//         "province": "LOUAMI-LELAMA"
//     },
//     {
//         "id": 1348,
//         "bureaux": "8",
//         "code": "02 08 03",
//         "inscrit": "957",
//         "province": "MOUNIANDZI"
//     },
//     {
//         "id": 1349,
//         "bureaux": "3",
//         "code": "02 08 04",
//         "inscrit": "570",
//         "province": "SEBE-LOURI"
//     },
//     {
//         "id": 1350,
//         "bureaux": "2",
//         "code": "02 08 05",
//         "inscrit": "480",
//         "province": "DISTRICT DE LEKORI"
//     },
//     {
//         "id": 1351,
//         "bureaux": "1",
//         "code": "02 09 00 01",
//         "inscrit": "150",
//         "province": "BAKOUMBA VILLAGE 1"
//     },
//     {
//         "id": 1352,
//         "bureaux": "1",
//         "code": "02 09 00 02",
//         "inscrit": "456",
//         "province": "ECOLE CATHOLIQUE 1"
//     },
//     {
//         "id": 1353,
//         "bureaux": "1",
//         "code": "02 09 00 03",
//         "inscrit": "452",
//         "province": "ECOLE CATHOLIQUE 2"
//     },
//     {
//         "id": 1354,
//         "bureaux": "1",
//         "code": "02 09 00 04",
//         "inscrit": "360",
//         "province": "ECOLE PUBLIQUE CENTRALE 1"
//     },
//     {
//         "id": 1355,
//         "bureaux": "1",
//         "code": "02 09 00 05",
//         "inscrit": "183",
//         "province": "ECOLE PUBLIQUE CENTRALE 2"
//     },
//     {
//         "id": 1356,
//         "bureaux": "1",
//         "code": "02 09 00 06",
//         "inscrit": "308",
//         "province": "NGOBI"
//     },
//     {
//         "id": 1357,
//         "bureaux": "1",
//         "code": "02 09 00 07",
//         "inscrit": "4",
//         "province": "BAKOUMBA VILLAGE 2"
//     },
//     {
//         "id": 1358,
//         "bureaux": "7",
//         "code": "02 09 00",
//         "inscrit": "1,913",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 1359,
//         "bureaux": "1",
//         "code": "02 10 02 01",
//         "inscrit": "17",
//         "province": "LEKOKO VILLAGE"
//     },
//     {
//         "id": 1360,
//         "bureaux": "1",
//         "code": "02 10 02 02",
//         "inscrit": "212",
//         "province": "MAMIDI"
//     },
//     {
//         "id": 1361,
//         "bureaux": "1",
//         "code": "02 10 02 03",
//         "inscrit": "151",
//         "province": "LEKAMBA"
//     },
//     {
//         "id": 1362,
//         "bureaux": "1",
//         "code": "02 10 02 04",
//         "inscrit": "79",
//         "province": "POYA"
//     },
//     {
//         "id": 1363,
//         "bureaux": "1",
//         "code": "02 10 02 05",
//         "inscrit": "58",
//         "province": "LEMANASSA"
//     },
//     {
//         "id": 1364,
//         "bureaux": "1",
//         "code": "02 10 03 01",
//         "inscrit": "124",
//         "province": "E P MOUKONDJOKA"
//     },
//     {
//         "id": 1365,
//         "bureaux": "1",
//         "code": "02 10 03 02",
//         "inscrit": "224",
//         "province": "MIPONDI I"
//     },
//     {
//         "id": 1366,
//         "bureaux": "1",
//         "code": "02 10 03 03",
//         "inscrit": "108",
//         "province": "BAKAMBA"
//     },
//     {
//         "id": 1367,
//         "bureaux": "5",
//         "code": "02 10 02",
//         "inscrit": "517",
//         "province": "LEBOMBI SUD"
//     },
//     {
//         "id": 1368,
//         "bureaux": "3",
//         "code": "02 10 03",
//         "inscrit": "456",
//         "province": "MIAGASSA NORD"
//     },
//     {
//         "id": 1369,
//         "bureaux": "2",
//         "code": "02 11 00 01",
//         "inscrit": "942",
//         "province": "ECOLE PUBLIQUE"
//     },
//     {
//         "id": 1370,
//         "bureaux": "2",
//         "code": "02 11 00",
//         "inscrit": "942",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 1371,
//         "bureaux": "1",
//         "code": "02 12 02 01",
//         "inscrit": "164",
//         "province": "MOUNGOUANGO"
//     },
//     {
//         "id": 1372,
//         "bureaux": "1",
//         "code": "02 12 02 02",
//         "inscrit": "201",
//         "province": "LENDENDOUNGOU"
//     },
//     {
//         "id": 1373,
//         "bureaux": "2",
//         "code": "02 12 02 03",
//         "inscrit": "623",
//         "province": "MBOUA"
//     },
//     {
//         "id": 1374,
//         "bureaux": "3",
//         "code": "02 12 01",
//         "inscrit": "587",
//         "province": "LOULA"
//     },
//     {
//         "id": 1375,
//         "bureaux": "4",
//         "code": "02 12 02",
//         "inscrit": "988",
//         "province": "MALUNDU"
//     },
//     {
//         "id": 1376,
//         "bureaux": "4",
//         "code": "02 13 00",
//         "inscrit": "1,300",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 1377,
//         "bureaux": "1",
//         "code": "02 14 02 01",
//         "inscrit": "207",
//         "province": "KELE"
//     },
//     {
//         "id": 1378,
//         "bureaux": "1",
//         "code": "02 14 02 02",
//         "inscrit": "194",
//         "province": "BOUBOU"
//     },
//     {
//         "id": 1379,
//         "bureaux": "1",
//         "code": "02 14 02 03",
//         "inscrit": "299",
//         "province": "SOUBA 1"
//     },
//     {
//         "id": 1380,
//         "bureaux": "1",
//         "code": "02 14 02 04",
//         "inscrit": "148",
//         "province": "KEWAGA"
//     },
//     {
//         "id": 1381,
//         "bureaux": "2",
//         "code": "02 14 01",
//         "inscrit": "274",
//         "province": "KAYIE"
//     },
//     {
//         "id": 1382,
//         "bureaux": "4",
//         "code": "02 14 02",
//         "inscrit": "848",
//         "province": "LEKEYE"
//     },
//     {
//         "id": 1383,
//         "bureaux": "1",
//         "code": "02 15 00 01",
//         "inscrit": "4",
//         "province": "OSS KAMA"
//     },
//     {
//         "id": 1384,
//         "bureaux": "2",
//         "code": "02 15 00 02",
//         "inscrit": "522",
//         "province": "NDOUA (PALMERAIE)"
//     },
//     {
//         "id": 1385,
//         "bureaux": "2",
//         "code": "02 15 00 03",
//         "inscrit": "581",
//         "province": "KAKOUMBOU"
//     },
//     {
//         "id": 1386,
//         "bureaux": "1",
//         "code": "02 15 00 04",
//         "inscrit": "338",
//         "province": "ENTSAGA"
//     },
//     {
//         "id": 1387,
//         "bureaux": "1",
//         "code": "02 15 00 05",
//         "inscrit": "419",
//         "province": "OBEGUE"
//     },
//     {
//         "id": 1388,
//         "bureaux": "1",
//         "code": "02 15 00 06",
//         "inscrit": "325",
//         "province": "BOUNOU(OBOUO)"
//     },
//     {
//         "id": 1389,
//         "bureaux": "8",
//         "code": "02 15 00",
//         "inscrit": "2,189",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 1390,
//         "bureaux": "1",
//         "code": "02 16 02 01",
//         "inscrit": "2",
//         "province": "BOUNOU (OBOUO)"
//     },
//     {
//         "id": 1391,
//         "bureaux": "1",
//         "code": "02 16 02 02",
//         "inscrit": "206",
//         "province": "KASSIELE 1 ET 2"
//     },
//     {
//         "id": 1392,
//         "bureaux": "1",
//         "code": "02 16 02 03",
//         "inscrit": "196",
//         "province": "OBIA"
//     },
//     {
//         "id": 1393,
//         "bureaux": "1",
//         "code": "02 16 04 01",
//         "inscrit": "372",
//         "province": "OSSKAMA"
//     },
//     {
//         "id": 1394,
//         "bureaux": "3",
//         "code": "02 16 01",
//         "inscrit": "822",
//         "province": "LEBEYI"
//     },
//     {
//         "id": 1395,
//         "bureaux": "3",
//         "code": "02 16 02",
//         "inscrit": "404",
//         "province": "LESSIMI"
//     },
//     {
//         "id": 1396,
//         "bureaux": "2",
//         "code": "02 16 03",
//         "inscrit": "499",
//         "province": "LIMI"
//     },
//     {
//         "id": 1397,
//         "bureaux": "1",
//         "code": "02 16 04",
//         "inscrit": "372",
//         "province": "LEYOUMOU"
//     },
//     {
//         "id": 1398,
//         "bureaux": "1",
//         "code": "02 17 00 01",
//         "inscrit": "487",
//         "province": "SAMBA"
//     },
//     {
//         "id": 1399,
//         "bureaux": "2",
//         "code": "02 17 00 02",
//         "inscrit": "522",
//         "province": "MBAMA-LEKONI VIILLAGE"
//     },
//     {
//         "id": 1400,
//         "bureaux": "1",
//         "code": "02 17 00 03",
//         "inscrit": "327",
//         "province": "DJOUANI"
//     },
//     {
//         "id": 1401,
//         "bureaux": "1",
//         "code": "02 17 00 04",
//         "inscrit": "199",
//         "province": "CHIC"
//     },
//     {
//         "id": 1402,
//         "bureaux": "1",
//         "code": "02 17 00 05",
//         "inscrit": "90",
//         "province": "ABOUYI"
//     },
//     {
//         "id": 1403,
//         "bureaux": "1",
//         "code": "02 17 00 06",
//         "inscrit": "147",
//         "province": "ADMINISTRATIF"
//     },
//     {
//         "id": 1404,
//         "bureaux": "1",
//         "code": "02 17 00 07",
//         "inscrit": "164",
//         "province": "OKORIVILLE"
//     },
//     {
//         "id": 1405,
//         "bureaux": "8",
//         "code": "02 17 00",
//         "inscrit": "1,936",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 1406,
//         "bureaux": "1",
//         "code": "02 18 01 01",
//         "inscrit": "325",
//         "province": "EDJOUANGOULOU"
//     },
//     {
//         "id": 1407,
//         "bureaux": "1",
//         "code": "02 18 02 01",
//         "inscrit": "174",
//         "province": "AKOU"
//     },
//     {
//         "id": 1408,
//         "bureaux": "1",
//         "code": "02 18 02 02",
//         "inscrit": "108",
//         "province": "KABALA"
//     },
//     {
//         "id": 1409,
//         "bureaux": "1",
//         "code": "02 18 02 03",
//         "inscrit": "121",
//         "province": "SAYE"
//     },
//     {
//         "id": 1410,
//         "bureaux": "1",
//         "code": "02 18 02 04",
//         "inscrit": "104",
//         "province": "EKOUYI-MBOUMA"
//     },
//     {
//         "id": 1411,
//         "bureaux": "1",
//         "code": "02 18 02 05",
//         "inscrit": "34",
//         "province": "KEBIRI"
//     },
//     {
//         "id": 1412,
//         "bureaux": "1",
//         "code": "02 18 02 06",
//         "inscrit": "86",
//         "province": "KESSALA"
//     },
//     {
//         "id": 1413,
//         "bureaux": "1",
//         "code": "02 18 02 07",
//         "inscrit": "80",
//         "province": "LEWOU"
//     },
//     {
//         "id": 1414,
//         "bureaux": "1",
//         "code": "02 18 02 08",
//         "inscrit": "41",
//         "province": "OSSELE"
//     },
//     {
//         "id": 1415,
//         "bureaux": "1",
//         "code": "02 18 03 01",
//         "inscrit": "193",
//         "province": "ODJOUMA"
//     },
//     {
//         "id": 1416,
//         "bureaux": "1",
//         "code": "02 18 03 02",
//         "inscrit": "228",
//         "province": "OSSOUELE"
//     },
//     {
//         "id": 1417,
//         "bureaux": "1",
//         "code": "02 18 03 03",
//         "inscrit": "124",
//         "province": "YIA A"
//     },
//     {
//         "id": 1418,
//         "bureaux": "1",
//         "code": "02 18 03 04",
//         "inscrit": "111",
//         "province": "YIA B"
//     },
//     {
//         "id": 1419,
//         "bureaux": "1",
//         "code": "02 18 03 05",
//         "inscrit": "82",
//         "province": "ABILA"
//     },
//     {
//         "id": 1420,
//         "bureaux": "1",
//         "code": "02 18 01",
//         "inscrit": "325",
//         "province": "DJOUELE-LABOUMI"
//     },
//     {
//         "id": 1421,
//         "bureaux": "8",
//         "code": "02 18 02",
//         "inscrit": "748",
//         "province": "DJOUYA"
//     },
//     {
//         "id": 1422,
//         "bureaux": "5",
//         "code": "02 18 03",
//         "inscrit": "738",
//         "province": "LOURI"
//     },
//     {
//         "id": 1423,
//         "bureaux": "3",
//         "code": "02 19 00 01",
//         "inscrit": "1,050",
//         "province": "ECOLE PUBLIQUE DONGA"
//     },
//     {
//         "id": 1424,
//         "bureaux": "3",
//         "code": "02 19 00",
//         "inscrit": "1,050",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 1425,
//         "bureaux": "1",
//         "code": "02 20 02 01",
//         "inscrit": "212",
//         "province": "AYOGO"
//     },
//     {
//         "id": 1426,
//         "bureaux": "1",
//         "code": "02 20 02 02",
//         "inscrit": "131",
//         "province": "OSSIELE"
//     },
//     {
//         "id": 1427,
//         "bureaux": "1",
//         "code": "02 20 02 03",
//         "inscrit": "204",
//         "province": "ALLIGA-YEMNGA"
//     },
//     {
//         "id": 1428,
//         "bureaux": "2",
//         "code": "02 20 01",
//         "inscrit": "495",
//         "province": "MPANI"
//     },
//     {
//         "id": 1429,
//         "bureaux": "3",
//         "code": "02 20 02",
//         "inscrit": "547",
//         "province": "NGAYI"
//     },
//     {
//         "id": 1430,
//         "bureaux": "1",
//         "code": "02 21 00 01",
//         "inscrit": "236",
//         "province": "EGOUMOUNA"
//     },
//     {
//         "id": 1431,
//         "bureaux": "1",
//         "code": "02 21 00 02",
//         "inscrit": "276",
//         "province": "ANKOUSSOU"
//     },
//     {
//         "id": 1432,
//         "bureaux": "1",
//         "code": "02 21 00 03",
//         "inscrit": "225",
//         "province": "NDJIEGUE"
//     },
//     {
//         "id": 1433,
//         "bureaux": "1",
//         "code": "02 21 00 04",
//         "inscrit": "389",
//         "province": "OTOGHO"
//     },
//     {
//         "id": 1434,
//         "bureaux": "4",
//         "code": "02 21 00",
//         "inscrit": "1,126",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 1435,
//         "bureaux": "1",
//         "code": "02 22 01 01",
//         "inscrit": "205",
//         "province": "ASSIAMI"
//     },
//     {
//         "id": 1436,
//         "bureaux": "1",
//         "code": "02 22 01 02",
//         "inscrit": "128",
//         "province": "OKOUMIBI"
//     },
//     {
//         "id": 1437,
//         "bureaux": "1",
//         "code": "02 22 01 03",
//         "inscrit": "87",
//         "province": "OYOU"
//     },
//     {
//         "id": 1438,
//         "bureaux": "1",
//         "code": "02 22 01 04",
//         "inscrit": "2",
//         "province": "EKOUMA"
//     },
//     {
//         "id": 1439,
//         "bureaux": "1",
//         "code": "02 22 03 01",
//         "inscrit": "117",
//         "province": "EKOUMA"
//     },
//     {
//         "id": 1440,
//         "bureaux": "1",
//         "code": "02 22 03 02",
//         "inscrit": "26",
//         "province": "ALELE II"
//     },
//     {
//         "id": 1441,
//         "bureaux": "1",
//         "code": "02 22 03 03",
//         "inscrit": "168",
//         "province": "OKANGOVILLE"
//     },
//     {
//         "id": 1442,
//         "bureaux": "1",
//         "code": "02 22 03 04",
//         "inscrit": "156",
//         "province": "OMOYE"
//     },
//     {
//         "id": 1443,
//         "bureaux": "4",
//         "code": "02 22 01",
//         "inscrit": "422",
//         "province": "MPANI-EKOULA"
//     },
//     {
//         "id": 1444,
//         "bureaux": "2",
//         "code": "02 22 02",
//         "inscrit": "431",
//         "province": "ENKORO"
//     },
//     {
//         "id": 1445,
//         "bureaux": "4",
//         "code": "02 22 03",
//         "inscrit": "467",
//         "province": "NGOUA"
//     },
//     {
//         "id": 1446,
//         "bureaux": "4",
//         "code": "02 23 00",
//         "inscrit": "1,165",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 1447,
//         "bureaux": "1",
//         "code": "02 24 01 01",
//         "inscrit": "267",
//         "province": "OBOLI"
//     },
//     {
//         "id": 1448,
//         "bureaux": "1",
//         "code": "02 24 01 02",
//         "inscrit": "201",
//         "province": "YOUMA 2"
//     },
//     {
//         "id": 1449,
//         "bureaux": "1",
//         "code": "02 24 01 03",
//         "inscrit": "204",
//         "province": "ONTOGHO"
//     },
//     {
//         "id": 1450,
//         "bureaux": "3",
//         "code": "02 24 01",
//         "inscrit": "672",
//         "province": "BRIKOLO"
//     },
//     {
//         "id": 1451,
//         "bureaux": "56",
//         "code": "201",
//         "inscrit": "18,101",
//         "province": "FRANCEVILLE"
//     },
//     {
//         "id": 1452,
//         "bureaux": "37",
//         "code": "202",
//         "inscrit": "5,777",
//         "province": "MPASSA (FRANCEVILLE)"
//     },
//     {
//         "id": 1453,
//         "bureaux": "34",
//         "code": "203",
//         "inscrit": "12,799",
//         "province": "MOANDA"
//     },
//     {
//         "id": 1454,
//         "bureaux": "16",
//         "code": "204",
//         "inscrit": "1,786",
//         "province": "LEBOMBI-LEYOU (MOANDA)"
//     },
//     {
//         "id": 1455,
//         "bureaux": "14",
//         "code": "205",
//         "inscrit": "2,925",
//         "province": "MOUNANA"
//     },
//     {
//         "id": 1456,
//         "bureaux": "12",
//         "code": "207",
//         "inscrit": "3,933",
//         "province": "OKONDJA"
//     },
//     {
//         "id": 1457,
//         "bureaux": "26",
//         "code": "208",
//         "inscrit": "3,569",
//         "province": "SEBE-BRIKOLO (OKONDJA)"
//     },
//     {
//         "id": 1458,
//         "bureaux": "7",
//         "code": "209",
//         "inscrit": "1,913",
//         "province": "BAKOUMBA"
//     },
//     {
//         "id": 1459,
//         "bureaux": "8",
//         "code": "210",
//         "inscrit": "973",
//         "province": "LEKOKO (BAKOUMBA)"
//     },
//     {
//         "id": 1460,
//         "bureaux": "2",
//         "code": "211",
//         "inscrit": "942",
//         "province": "BOUMANGO"
//     },
//     {
//         "id": 1461,
//         "bureaux": "7",
//         "code": "212",
//         "inscrit": "1,575",
//         "province": "OGOOUE-LETILI (BOUMANGO)"
//     },
//     {
//         "id": 1462,
//         "bureaux": "4",
//         "code": "213",
//         "inscrit": "1,300",
//         "province": "BONGOVILLE"
//     },
//     {
//         "id": 1463,
//         "bureaux": "6",
//         "code": "214",
//         "inscrit": "1,122",
//         "province": "DJOUORI-AGNILI (BONGOVILLE)"
//     },
//     {
//         "id": 1464,
//         "bureaux": "8",
//         "code": "215",
//         "inscrit": "2,189",
//         "province": "AKIENI"
//     },
//     {
//         "id": 1465,
//         "bureaux": "9",
//         "code": "216",
//         "inscrit": "2,097",
//         "province": "LEKONI-LEKORI  (AKIENI)"
//     },
//     {
//         "id": 1466,
//         "bureaux": "8",
//         "code": "217",
//         "inscrit": "1,936",
//         "province": "LECONI"
//     },
//     {
//         "id": 1467,
//         "bureaux": "14",
//         "code": "218",
//         "inscrit": "1,811",
//         "province": "PLATEAUX (LECONI)"
//     },
//     {
//         "id": 1468,
//         "bureaux": "3",
//         "code": "219",
//         "inscrit": "1,050",
//         "province": "ONGA"
//     },
//     {
//         "id": 1469,
//         "bureaux": "5",
//         "code": "220",
//         "inscrit": "1,042",
//         "province": "DJOUE (ONGA)"
//     },
//     {
//         "id": 1470,
//         "bureaux": "4",
//         "code": "221",
//         "inscrit": "1,126",
//         "province": "NGOUONI"
//     },
//     {
//         "id": 1471,
//         "bureaux": "10",
//         "code": "222",
//         "inscrit": "1,320",
//         "province": "LEKABI-LEWOLO (NGOUONI)"
//     },
//     {
//         "id": 1472,
//         "bureaux": "4",
//         "code": "223",
//         "inscrit": "1,165",
//         "province": "ABOUMI"
//     },
//     {
//         "id": 1473,
//         "bureaux": "3",
//         "code": "224",
//         "inscrit": "672",
//         "province": "BAYI-BRIKOLO (ABOUMI)"
//     },
//     {
//         "id": 1474,
//         "bureaux": "2",
//         "code": "03 01 01 01",
//         "inscrit": "691",
//         "province": "E.P LALALA (CENTRE VILLE)"
//     },
//     {
//         "id": 1475,
//         "bureaux": "2",
//         "code": "03 01 01 02",
//         "inscrit": "841",
//         "province": "FOYER PROTESTANT"
//     },
//     {
//         "id": 1476,
//         "bureaux": "4",
//         "code": "03 01 01 03",
//         "inscrit": "1,598",
//         "province": "LYCEE CHARLES MEFANE"
//     },
//     {
//         "id": 1477,
//         "bureaux": "1",
//         "code": "03 01 01 04",
//         "inscrit": "389",
//         "province": "ABONGO"
//     },
//     {
//         "id": 1478,
//         "bureaux": "2",
//         "code": "03 01 01 05",
//         "inscrit": "948",
//         "province": "ATONGOWANGA (EC AVENIR B)"
//     },
//     {
//         "id": 1479,
//         "bureaux": "1",
//         "code": "03 01 01 06",
//         "inscrit": "480",
//         "province": "POINT V"
//     },
//     {
//         "id": 1480,
//         "bureaux": "2",
//         "code": "03 01 01 07",
//         "inscrit": "616",
//         "province": "EC ADOUMA"
//     },
//     {
//         "id": 1481,
//         "bureaux": "2",
//         "code": "03 01 01 08",
//         "inscrit": "643",
//         "province": "EC MOUSSAMOUKOUGOU"
//     },
//     {
//         "id": 1482,
//         "bureaux": "1",
//         "code": "03 01 01 09",
//         "inscrit": "492",
//         "province": "EC GRAND VILLAGE 1"
//     },
//     {
//         "id": 1483,
//         "bureaux": "1",
//         "code": "03 01 01 10",
//         "inscrit": "292",
//         "province": "EC GRAND VILLAGE 2"
//     },
//     {
//         "id": 1484,
//         "bureaux": "1",
//         "code": "03 01 01 11",
//         "inscrit": "426",
//         "province": "DAKAR (EC AVENIR)"
//     },
//     {
//         "id": 1485,
//         "bureaux": "1",
//         "code": "03 01 01 12",
//         "inscrit": "239",
//         "province": "VILLAGE LUMIERE (SCHWEITZER)"
//     },
//     {
//         "id": 1486,
//         "bureaux": "1",
//         "code": "03 01 01 13",
//         "inscrit": "263",
//         "province": "ADIWA ST FRANCOIS"
//     },
//     {
//         "id": 1487,
//         "bureaux": "4",
//         "code": "03 01 02 01",
//         "inscrit": "1,714",
//         "province": "PETIT PARIS 2 (AVIATION)"
//     },
//     {
//         "id": 1488,
//         "bureaux": "2",
//         "code": "03 01 02 02",
//         "inscrit": "957",
//         "province": "ECOLE ATSIE"
//     },
//     {
//         "id": 1489,
//         "bureaux": "1",
//         "code": "03 01 02 03",
//         "inscrit": "223",
//         "province": "ANIOUZOUMA (EC CATH ISAAC)"
//     },
//     {
//         "id": 1490,
//         "bureaux": "3",
//         "code": "03 01 02 04",
//         "inscrit": "1,137",
//         "province": "QUARTIER CARRIERE"
//     },
//     {
//         "id": 1491,
//         "bureaux": "1",
//         "code": "03 01 02 05",
//         "inscrit": "492",
//         "province": "ECOLE PUBL MAGNANG"
//     },
//     {
//         "id": 1492,
//         "bureaux": "4",
//         "code": "03 01 02 06",
//         "inscrit": "1,637",
//         "province": "EC-JACQUELINE-RAWIRI"
//     },
//     {
//         "id": 1493,
//         "bureaux": "1",
//         "code": "03 01 02 07",
//         "inscrit": "299",
//         "province": "MALEBE"
//     },
//     {
//         "id": 1494,
//         "bureaux": "1",
//         "code": "03 01 02 08",
//         "inscrit": "444",
//         "province": "PETIT PARIS"
//     },
//     {
//         "id": 1495,
//         "bureaux": "2",
//         "code": "03 01 02 09",
//         "inscrit": "680",
//         "province": "EC-ISSAC A"
//     },
//     {
//         "id": 1496,
//         "bureaux": "2",
//         "code": "03 01 02 10",
//         "inscrit": "536",
//         "province": "ECOLE-ISSAAC B"
//     },
//     {
//         "id": 1497,
//         "bureaux": "1",
//         "code": "03 01 02 11",
//         "inscrit": "73",
//         "province": "MBILANDZAMBI"
//     },
//     {
//         "id": 1498,
//         "bureaux": "21",
//         "code": "03 01 01",
//         "inscrit": "7,918",
//         "province": "1ER  ARRONDISSEMENT"
//     },
//     {
//         "id": 1499,
//         "bureaux": "22",
//         "code": "03 01 02",
//         "inscrit": "8,192",
//         "province": "2EME ARRONDISSEMENT"
//     },
//     {
//         "id": 1500,
//         "bureaux": "1",
//         "code": "03 02 01 01",
//         "inscrit": "87",
//         "province": "ADOLE-MANDJI"
//     },
//     {
//         "id": 1501,
//         "bureaux": "1",
//         "code": "03 02 01 02",
//         "inscrit": "19",
//         "province": "ELONG-EKO (AREVOMA II)"
//     },
//     {
//         "id": 1502,
//         "bureaux": "1",
//         "code": "03 02 01 03",
//         "inscrit": "21",
//         "province": "YANEBOUR"
//     },
//     {
//         "id": 1503,
//         "bureaux": "1",
//         "code": "03 02 01 04",
//         "inscrit": "121",
//         "province": "DAKAR-GOME"
//     },
//     {
//         "id": 1504,
//         "bureaux": "1",
//         "code": "03 02 01 05",
//         "inscrit": "19",
//         "province": "LOGUET"
//     },
//     {
//         "id": 1505,
//         "bureaux": "1",
//         "code": "03 02 02 01",
//         "inscrit": "75",
//         "province": "NOMBEDOUMA"
//     },
//     {
//         "id": 1506,
//         "bureaux": "1",
//         "code": "03 02 02 02",
//         "inscrit": "29",
//         "province": "NENGUENTOGOLO"
//     },
//     {
//         "id": 1507,
//         "bureaux": "1",
//         "code": "03 02 02 03",
//         "inscrit": "49",
//         "province": "OGUEWA-NZAMATA"
//     },
//     {
//         "id": 1508,
//         "bureaux": "1",
//         "code": "03 02 02 04",
//         "inscrit": "50",
//         "province": "ODIMBA"
//     },
//     {
//         "id": 1509,
//         "bureaux": "1",
//         "code": "03 02 02 05",
//         "inscrit": "8",
//         "province": "MWAM-NZA-MANE I"
//     },
//     {
//         "id": 1510,
//         "bureaux": "1",
//         "code": "03 02 02 06",
//         "inscrit": "33",
//         "province": "NTAMBE"
//     },
//     {
//         "id": 1511,
//         "bureaux": "1",
//         "code": "03 02 02 07",
//         "inscrit": "32",
//         "province": "NZAMAKESSILE"
//     },
//     {
//         "id": 1512,
//         "bureaux": "1",
//         "code": "03 02 02 08",
//         "inscrit": "23",
//         "province": "N LONG"
//     },
//     {
//         "id": 1513,
//         "bureaux": "1",
//         "code": "03 02 02 09",
//         "inscrit": "34",
//         "province": "NTCHOUA"
//     },
//     {
//         "id": 1514,
//         "bureaux": "1",
//         "code": "03 02 02 10",
//         "inscrit": "15",
//         "province": "NZOUGHE (NKANGUE II)"
//     },
//     {
//         "id": 1515,
//         "bureaux": "1",
//         "code": "03 02 02 11",
//         "inscrit": "42",
//         "province": "ALLONHA 1"
//     },
//     {
//         "id": 1516,
//         "bureaux": "1",
//         "code": "03 02 02 12",
//         "inscrit": "45",
//         "province": "NDAMA (LEBOUSSOU)"
//     },
//     {
//         "id": 1517,
//         "bureaux": "1",
//         "code": "03 02 02 13",
//         "inscrit": "1",
//         "province": "CHANTIER CHARBONNIER"
//     },
//     {
//         "id": 1518,
//         "bureaux": "1",
//         "code": "03 02 02 14",
//         "inscrit": "57",
//         "province": "AKOUM-LAM"
//     },
//     {
//         "id": 1519,
//         "bureaux": "1",
//         "code": "03 02 02 15",
//         "inscrit": "2",
//         "province": "SAINT-LOUIS"
//     },
//     {
//         "id": 1520,
//         "bureaux": "1",
//         "code": "03 02 02 17",
//         "inscrit": "27",
//         "province": "VILLAGE NGUIABETA"
//     },
//     {
//         "id": 1521,
//         "bureaux": "1",
//         "code": "03 02 02 18",
//         "inscrit": "11",
//         "province": "RENDOUGOU"
//     },
//     {
//         "id": 1522,
//         "bureaux": "1",
//         "code": "03 02 02 19",
//         "inscrit": "4",
//         "province": "POINTE NOIRE"
//     },
//     {
//         "id": 1523,
//         "bureaux": "1",
//         "code": "03 02 02 21",
//         "inscrit": "16",
//         "province": "ISSANGUI"
//     },
//     {
//         "id": 1524,
//         "bureaux": "1",
//         "code": "03 02 02 22",
//         "inscrit": "108",
//         "province": "ALLONHA 3"
//     },
//     {
//         "id": 1525,
//         "bureaux": "1",
//         "code": "03 02 02 23",
//         "inscrit": "17",
//         "province": "NZAMATA"
//     },
//     {
//         "id": 1526,
//         "bureaux": "1",
//         "code": "03 02 03 01",
//         "inscrit": "115",
//         "province": "MITONET (MIMONGO)"
//     },
//     {
//         "id": 1527,
//         "bureaux": "1",
//         "code": "03 02 03 02",
//         "inscrit": "164",
//         "province": "NZOGHE-BANG (ECOLE CATH.)"
//     },
//     {
//         "id": 1528,
//         "bureaux": "1",
//         "code": "03 02 03 03",
//         "inscrit": "68",
//         "province": "WELIGA II"
//     },
//     {
//         "id": 1529,
//         "bureaux": "1",
//         "code": "03 02 03 04",
//         "inscrit": "114",
//         "province": "KOUNGOULE"
//     },
//     {
//         "id": 1530,
//         "bureaux": "1",
//         "code": "03 02 03 05",
//         "inscrit": "49",
//         "province": "ADANHE EC PUBLIQUE"
//     },
//     {
//         "id": 1531,
//         "bureaux": "1",
//         "code": "03 02 03 06",
//         "inscrit": "48",
//         "province": "MEDANG-NKOGHE"
//     },
//     {
//         "id": 1532,
//         "bureaux": "1",
//         "code": "03 02 03 07",
//         "inscrit": "62",
//         "province": "NKOGHE-MBOUN"
//     },
//     {
//         "id": 1533,
//         "bureaux": "1",
//         "code": "03 02 03 08",
//         "inscrit": "108",
//         "province": "WELIGA I"
//     },
//     {
//         "id": 1534,
//         "bureaux": "1",
//         "code": "03 02 03 09",
//         "inscrit": "148",
//         "province": "E.P BENGUIE 1-2-3"
//     },
//     {
//         "id": 1535,
//         "bureaux": "1",
//         "code": "03 02 03 10",
//         "inscrit": "220",
//         "province": "E.P BENGUIE 4"
//     },
//     {
//         "id": 1536,
//         "bureaux": "1",
//         "code": "03 02 03 12",
//         "inscrit": "332",
//         "province": "E.P. PARIS-BIFOUN 1 ET 2"
//     },
//     {
//         "id": 1537,
//         "bureaux": "1",
//         "code": "03 02 03 13",
//         "inscrit": "46",
//         "province": "VILLAGE GRAVIER"
//     },
//     {
//         "id": 1538,
//         "bureaux": "1",
//         "code": "03 02 04 01",
//         "inscrit": "123",
//         "province": "JUNCKVILLE"
//     },
//     {
//         "id": 1539,
//         "bureaux": "1",
//         "code": "03 02 04 02",
//         "inscrit": "4",
//         "province": "MEDZIME-VINE"
//     },
//     {
//         "id": 1540,
//         "bureaux": "1",
//         "code": "03 02 04 03",
//         "inscrit": "168",
//         "province": "AGROGABON MAKOUKE A"
//     },
//     {
//         "id": 1541,
//         "bureaux": "1",
//         "code": "03 02 04 04",
//         "inscrit": "225",
//         "province": "AGROGABON MAKOUKE B"
//     },
//     {
//         "id": 1542,
//         "bureaux": "1",
//         "code": "03 02 04 05",
//         "inscrit": "201",
//         "province": "VILLAGE MAKOUKE"
//     },
//     {
//         "id": 1543,
//         "bureaux": "1",
//         "code": "03 02 04 06",
//         "inscrit": "136",
//         "province": "AMANENGONE"
//     },
//     {
//         "id": 1544,
//         "bureaux": "1",
//         "code": "03 02 04 07",
//         "inscrit": "85",
//         "province": "AGROGABON MAKOUKE C (HUILERIE)"
//     },
//     {
//         "id": 1545,
//         "bureaux": "1",
//         "code": "03 02 04 08",
//         "inscrit": "367",
//         "province": "BINDO VILLAGE I"
//     },
//     {
//         "id": 1546,
//         "bureaux": "1",
//         "code": "03 02 04 09",
//         "inscrit": "43",
//         "province": "BINDO CHANTIER"
//     },
//     {
//         "id": 1547,
//         "bureaux": "1",
//         "code": "03 02 04 10",
//         "inscrit": "31",
//         "province": "NDOUMANTANG"
//     },
//     {
//         "id": 1548,
//         "bureaux": "1",
//         "code": "03 02 04 11",
//         "inscrit": "16",
//         "province": "BORDEAUX"
//     },
//     {
//         "id": 1549,
//         "bureaux": "1",
//         "code": "03 02 04 12",
//         "inscrit": "5",
//         "province": "MEBANG-METORA"
//     },
//     {
//         "id": 1550,
//         "bureaux": "1",
//         "code": "03 02 04 13",
//         "inscrit": "34",
//         "province": "PLANTATION FOULA"
//     },
//     {
//         "id": 1551,
//         "bureaux": "1",
//         "code": "03 02 04 14",
//         "inscrit": "78",
//         "province": "NGOSSO"
//     },
//     {
//         "id": 1552,
//         "bureaux": "1",
//         "code": "03 02 04 15",
//         "inscrit": "41",
//         "province": "GARAGE"
//     },
//     {
//         "id": 1553,
//         "bureaux": "1",
//         "code": "03 02 05 01",
//         "inscrit": "50",
//         "province": "OMPOMONA"
//     },
//     {
//         "id": 1554,
//         "bureaux": "1",
//         "code": "03 02 05 02",
//         "inscrit": "114",
//         "province": "NTYATANGA I"
//     },
//     {
//         "id": 1555,
//         "bureaux": "1",
//         "code": "03 02 05 03",
//         "inscrit": "21",
//         "province": "MANOGONI (AMBYA)"
//     },
//     {
//         "id": 1556,
//         "bureaux": "1",
//         "code": "03 02 05 04",
//         "inscrit": "201",
//         "province": "NGOMO I ET II"
//     },
//     {
//         "id": 1557,
//         "bureaux": "1",
//         "code": "03 02 05 05",
//         "inscrit": "34",
//         "province": "IGUENDJA"
//     },
//     {
//         "id": 1558,
//         "bureaux": "1",
//         "code": "03 02 05 06",
//         "inscrit": "114",
//         "province": "ASCHOUKA"
//     },
//     {
//         "id": 1559,
//         "bureaux": "1",
//         "code": "03 02 05 08",
//         "inscrit": "15",
//         "province": "POINTE-ELYSE"
//     },
//     {
//         "id": 1560,
//         "bureaux": "1",
//         "code": "03 02 06 01",
//         "inscrit": "31",
//         "province": "LEZINDA"
//     },
//     {
//         "id": 1561,
//         "bureaux": "1",
//         "code": "03 02 06 02",
//         "inscrit": "32",
//         "province": "LESSOBELIA"
//     },
//     {
//         "id": 1562,
//         "bureaux": "1",
//         "code": "03 02 06 03",
//         "inscrit": "166",
//         "province": "BELLE-VUE I"
//     },
//     {
//         "id": 1563,
//         "bureaux": "1",
//         "code": "03 02 06 04",
//         "inscrit": "57",
//         "province": "MASSASSIKE"
//     },
//     {
//         "id": 1564,
//         "bureaux": "1",
//         "code": "03 02 06 05",
//         "inscrit": "54",
//         "province": "AGROGABON NGOUNIE (NZAMATA)"
//     },
//     {
//         "id": 1565,
//         "bureaux": "1",
//         "code": "03 02 06 06",
//         "inscrit": "20",
//         "province": "MBECK-MENU"
//     },
//     {
//         "id": 1566,
//         "bureaux": "1",
//         "code": "03 02 07 01",
//         "inscrit": "4",
//         "province": "MBILANDZAMBI"
//     },
//     {
//         "id": 1567,
//         "bureaux": "1",
//         "code": "03 02 07 02",
//         "inscrit": "77",
//         "province": "E.P.C. ISSALA"
//     },
//     {
//         "id": 1568,
//         "bureaux": "1",
//         "code": "03 02 07 03",
//         "inscrit": "48",
//         "province": "IKEMBELE"
//     },
//     {
//         "id": 1569,
//         "bureaux": "1",
//         "code": "03 02 07 04",
//         "inscrit": "73",
//         "province": "E.P. TSOUKA"
//     },
//     {
//         "id": 1570,
//         "bureaux": "1",
//         "code": "03 02 07 05",
//         "inscrit": "220",
//         "province": "ECOLE KERY"
//     },
//     {
//         "id": 1571,
//         "bureaux": "1",
//         "code": "03 02 07 06",
//         "inscrit": "186",
//         "province": "E.P MASSIKA I-II"
//     },
//     {
//         "id": 1572,
//         "bureaux": "1",
//         "code": "03 02 07 07",
//         "inscrit": "119",
//         "province": "E.P. NOMBAKELE"
//     },
//     {
//         "id": 1573,
//         "bureaux": "1",
//         "code": "03 02 07 08",
//         "inscrit": "93",
//         "province": "KOMI"
//     },
//     {
//         "id": 1574,
//         "bureaux": "1",
//         "code": "03 02 07 09",
//         "inscrit": "93",
//         "province": "E.P.P. LOBI"
//     },
//     {
//         "id": 1575,
//         "bureaux": "1",
//         "code": "03 02 07 10",
//         "inscrit": "165",
//         "province": "E.P TCHAD I-II"
//     },
//     {
//         "id": 1576,
//         "bureaux": "1",
//         "code": "03 02 07 11",
//         "inscrit": "205",
//         "province": "SAINT MARTIN (ZILE)"
//     },
//     {
//         "id": 1577,
//         "bureaux": "1",
//         "code": "03 02 07 12",
//         "inscrit": "87",
//         "province": "AGROGABON ZILE (PLANTAT ZILE)"
//     },
//     {
//         "id": 1578,
//         "bureaux": "1",
//         "code": "03 02 07 13",
//         "inscrit": "45",
//         "province": "ISSINGA"
//     },
//     {
//         "id": 1579,
//         "bureaux": "1",
//         "code": "03 02 07 14",
//         "inscrit": "100",
//         "province": "MIMONGO"
//     },
//     {
//         "id": 1580,
//         "bureaux": "1",
//         "code": "03 02 07 15",
//         "inscrit": "35",
//         "province": "PAGA"
//     },
//     {
//         "id": 1581,
//         "bureaux": "1",
//         "code": "03 02 07 16",
//         "inscrit": "38",
//         "province": "IMENOU I"
//     },
//     {
//         "id": 1582,
//         "bureaux": "1",
//         "code": "03 02 07 17",
//         "inscrit": "36",
//         "province": "IMENOU II"
//     },
//     {
//         "id": 1583,
//         "bureaux": "1",
//         "code": "03 02 07 18",
//         "inscrit": "57",
//         "province": "NGOUDOUFALA P.K 14"
//     },
//     {
//         "id": 1584,
//         "bureaux": "1",
//         "code": "03 02 07 19",
//         "inscrit": "39",
//         "province": "MAYENGUE"
//     },
//     {
//         "id": 1585,
//         "bureaux": "5",
//         "code": "03 02 01",
//         "inscrit": "267",
//         "province": "LACS DU NORD"
//     },
//     {
//         "id": 1586,
//         "bureaux": "21",
//         "code": "03 02 02",
//         "inscrit": "678",
//         "province": "LACS DU SUD"
//     },
//     {
//         "id": 1587,
//         "bureaux": "12",
//         "code": "03 02 03",
//         "inscrit": "1,474",
//         "province": "ROUTE MBINE"
//     },
//     {
//         "id": 1588,
//         "bureaux": "15",
//         "code": "03 02 04",
//         "inscrit": "1,557",
//         "province": "OGOOUE-AMONT"
//     },
//     {
//         "id": 1589,
//         "bureaux": "7",
//         "code": "03 02 05",
//         "inscrit": "549",
//         "province": "OGOOUE-AVAL"
//     },
//     {
//         "id": 1590,
//         "bureaux": "6",
//         "code": "03 02 06",
//         "inscrit": "360",
//         "province": "OGOOUE-NGOUNIE"
//     },
//     {
//         "id": 1591,
//         "bureaux": "19",
//         "code": "03 02 07",
//         "inscrit": "1,720",
//         "province": "BIWENI-DIALA (ROUTE FOUGAMOU)"
//     },
//     {
//         "id": 1592,
//         "bureaux": "1",
//         "code": "03 03 00 01",
//         "inscrit": "148",
//         "province": "BINGOMA-NORD"
//     },
//     {
//         "id": 1593,
//         "bureaux": "1",
//         "code": "03 03 00 02",
//         "inscrit": "317",
//         "province": "BINGOMA-SUD (BELLE VUE)"
//     },
//     {
//         "id": 1594,
//         "bureaux": "1",
//         "code": "03 03 00 03",
//         "inscrit": "256",
//         "province": "BINGOMA (CENTRE)"
//     },
//     {
//         "id": 1595,
//         "bureaux": "1",
//         "code": "03 03 00 04",
//         "inscrit": "193",
//         "province": "MISSANGA SAINT JEAN"
//     },
//     {
//         "id": 1596,
//         "bureaux": "1",
//         "code": "03 03 00 05",
//         "inscrit": "238",
//         "province": "MISSANGA NAZARETH"
//     },
//     {
//         "id": 1597,
//         "bureaux": "1",
//         "code": "03 03 00 06",
//         "inscrit": "271",
//         "province": "ANDOCK (MBILAVION)"
//     },
//     {
//         "id": 1598,
//         "bureaux": "1",
//         "code": "03 03 00 07",
//         "inscrit": "139",
//         "province": "NYANKOK-MBOUNE I-II"
//     },
//     {
//         "id": 1599,
//         "bureaux": "1",
//         "code": "03 03 00 08",
//         "inscrit": "175",
//         "province": "CENTRE VILLE"
//     },
//     {
//         "id": 1600,
//         "bureaux": "2",
//         "code": "03 03 00 09",
//         "inscrit": "560",
//         "province": "KM 1 (SORBONE)"
//     },
//     {
//         "id": 1601,
//         "bureaux": "10",
//         "code": "03 03 00",
//         "inscrit": "2,297",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 1602,
//         "bureaux": "2",
//         "code": "03 04 01 01",
//         "inscrit": "598",
//         "province": "E.P. BIFOUN- CENTRE"
//     },
//     {
//         "id": 1603,
//         "bureaux": "1",
//         "code": "03 04 01 02",
//         "inscrit": "189",
//         "province": "WELIGA 1 (CHEF REGROUP)"
//     },
//     {
//         "id": 1604,
//         "bureaux": "1",
//         "code": "03 04 01 03",
//         "inscrit": "22",
//         "province": "WELIGA 2 (CHEF VILLAGE)"
//     },
//     {
//         "id": 1605,
//         "bureaux": "1",
//         "code": "03 04 01 04",
//         "inscrit": "119",
//         "province": "BIFOUN III (CHEF VILLAGE)"
//     },
//     {
//         "id": 1606,
//         "bureaux": "1",
//         "code": "03 04 01 05",
//         "inscrit": "33",
//         "province": "YOKO QUAND-MEME (CHEF.V.)"
//     },
//     {
//         "id": 1607,
//         "bureaux": "0",
//         "code": "03 04 01 08",
//         "inscrit": "0",
//         "province": "ADOUMEVOUNG RIVE-DROITE"
//     },
//     {
//         "id": 1608,
//         "bureaux": "1",
//         "code": "03 04 01 11",
//         "inscrit": "55",
//         "province": "TOUM RIVE-DROITE"
//     },
//     {
//         "id": 1609,
//         "bureaux": "1",
//         "code": "03 04 02 01",
//         "inscrit": "106",
//         "province": "E.P. EKORODO"
//     },
//     {
//         "id": 1610,
//         "bureaux": "1",
//         "code": "03 04 02 02",
//         "inscrit": "246",
//         "province": "E.P.P. EBEL RIVE GAUCHE"
//     },
//     {
//         "id": 1611,
//         "bureaux": "1",
//         "code": "03 04 02 03",
//         "inscrit": "211",
//         "province": "E.P. EBEL RIVE DROITE"
//     },
//     {
//         "id": 1612,
//         "bureaux": "1",
//         "code": "03 04 02 04",
//         "inscrit": "43",
//         "province": "E.P. ABANGA II"
//     },
//     {
//         "id": 1613,
//         "bureaux": "1",
//         "code": "03 04 02 05",
//         "inscrit": "12",
//         "province": "MENGUEGNE (CHEF VILLAGE)"
//     },
//     {
//         "id": 1614,
//         "bureaux": "1",
//         "code": "03 04 03 01",
//         "inscrit": "255",
//         "province": "ESSONG-AUBAMAKALE"
//     },
//     {
//         "id": 1615,
//         "bureaux": "1",
//         "code": "03 04 03 02",
//         "inscrit": "229",
//         "province": "E.P. TRANSGABONAIS"
//     },
//     {
//         "id": 1616,
//         "bureaux": "1",
//         "code": "03 04 03 03",
//         "inscrit": "19",
//         "province": "ALEMBE (CHEF VILLAGE)"
//     },
//     {
//         "id": 1617,
//         "bureaux": "1",
//         "code": "03 04 03 04",
//         "inscrit": "115",
//         "province": "E.P. JUNCKVILLE"
//     },
//     {
//         "id": 1618,
//         "bureaux": "1",
//         "code": "03 04 03 05",
//         "inscrit": "28",
//         "province": "NZAMATA (CHEF VILLAGE)"
//     },
//     {
//         "id": 1619,
//         "bureaux": "1",
//         "code": "03 04 03 06",
//         "inscrit": "274",
//         "province": "OTOUMA B S G"
//     },
//     {
//         "id": 1620,
//         "bureaux": "1",
//         "code": "03 04 03 07",
//         "inscrit": "65",
//         "province": "E.P.C. MEDOUMANE"
//     },
//     {
//         "id": 1621,
//         "bureaux": "1",
//         "code": "03 04 03 08",
//         "inscrit": "122",
//         "province": "E.P.C. MINKOK-MESSENG"
//     },
//     {
//         "id": 1622,
//         "bureaux": "1",
//         "code": "03 04 03 09",
//         "inscrit": "120",
//         "province": "MEVANG METOUANG"
//     },
//     {
//         "id": 1623,
//         "bureaux": "1",
//         "code": "03 04 03 10",
//         "inscrit": "107",
//         "province": "ENGOUGOUME (CHEF REGROUP)"
//     },
//     {
//         "id": 1624,
//         "bureaux": "1",
//         "code": "03 04 03 11",
//         "inscrit": "91",
//         "province": "E.P. OTOUMBI"
//     },
//     {
//         "id": 1625,
//         "bureaux": "1",
//         "code": "03 04 03 12",
//         "inscrit": "161",
//         "province": "ECOLE BSO NDJOLE(MISSANGA)"
//     },
//     {
//         "id": 1626,
//         "bureaux": "1",
//         "code": "03 04 03 14",
//         "inscrit": "57",
//         "province": "BSO-LANO"
//     },
//     {
//         "id": 1627,
//         "bureaux": "1",
//         "code": "03 04 04 01",
//         "inscrit": "160",
//         "province": "E.P. MBILANTEN"
//     },
//     {
//         "id": 1628,
//         "bureaux": "1",
//         "code": "03 04 04 02",
//         "inscrit": "65",
//         "province": "NGOUABILAGHA (CHEF VILLAGE)"
//     },
//     {
//         "id": 1629,
//         "bureaux": "1",
//         "code": "03 04 04 03",
//         "inscrit": "95",
//         "province": "ECOLE PRIVEE PROTESTANTE SAIO"
//     },
//     {
//         "id": 1630,
//         "bureaux": "1",
//         "code": "03 04 04 04",
//         "inscrit": "45",
//         "province": "FERNAN-VAZ (CHEF VILLAGE)"
//     },
//     {
//         "id": 1631,
//         "bureaux": "1",
//         "code": "03 04 04 05",
//         "inscrit": "39",
//         "province": "MALEBA (CHEF VILLAGE)"
//     },
//     {
//         "id": 1632,
//         "bureaux": "1",
//         "code": "03 04 04 06",
//         "inscrit": "42",
//         "province": "EYAMEYONG-MAGUIELA"
//     },
//     {
//         "id": 1633,
//         "bureaux": "1",
//         "code": "03 04 04 07",
//         "inscrit": "62",
//         "province": "BIBOULMAN"
//     },
//     {
//         "id": 1634,
//         "bureaux": "1",
//         "code": "03 04 04 09",
//         "inscrit": "32",
//         "province": "MAGUIELA"
//     },
//     {
//         "id": 1635,
//         "bureaux": "7",
//         "code": "03 04 01",
//         "inscrit": "1,016",
//         "province": "BIFOUN-WELIGA"
//     },
//     {
//         "id": 1636,
//         "bureaux": "5",
//         "code": "03 04 02",
//         "inscrit": "618",
//         "province": "EBEL-ABANGA"
//     },
//     {
//         "id": 1637,
//         "bureaux": "13",
//         "code": "03 04 03",
//         "inscrit": "1,643",
//         "province": "EBEL-ALEMBE"
//     },
//     {
//         "id": 1638,
//         "bureaux": "8",
//         "code": "03 04 04",
//         "inscrit": "540",
//         "province": "SAMKITA"
//     },
//     {
//         "id": 1639,
//         "bureaux": "43",
//         "code": "301",
//         "inscrit": "16,110",
//         "province": "LAMBARENE"
//     },
//     {
//         "id": 1640,
//         "bureaux": "85",
//         "code": "302",
//         "inscrit": "6,605",
//         "province": "OGOOUE ET DES LACS (LAMBARENE)"
//     },
//     {
//         "id": 1641,
//         "bureaux": "10",
//         "code": "303",
//         "inscrit": "2,297",
//         "province": "NDJOLE"
//     },
//     {
//         "id": 1642,
//         "bureaux": "33",
//         "code": "304",
//         "inscrit": "3,817",
//         "province": "ABANGA-BIGNE (NDJOLE)"
//     },
//     {
//         "id": 1643,
//         "bureaux": "1",
//         "code": "04 01 01 01",
//         "inscrit": "277",
//         "province": "ECOLE A"
//     },
//     {
//         "id": 1644,
//         "bureaux": "2",
//         "code": "04 01 01 02",
//         "inscrit": "968",
//         "province": "ECOLE PUBLIQUE  -D-"
//     },
//     {
//         "id": 1645,
//         "bureaux": "3",
//         "code": "04 01 01 03",
//         "inscrit": "1,010",
//         "province": "NOTRE DAME"
//     },
//     {
//         "id": 1646,
//         "bureaux": "3",
//         "code": "04 01 01 04",
//         "inscrit": "1,242",
//         "province": "ST GABRIEL"
//     },
//     {
//         "id": 1647,
//         "bureaux": "4",
//         "code": "04 01 01 05",
//         "inscrit": "1,850",
//         "province": "LYCEE-EXCELLENCE"
//     },
//     {
//         "id": 1648,
//         "bureaux": "1",
//         "code": "04 01 01 06",
//         "inscrit": "490",
//         "province": "LYCEE PROFESSIONNEL"
//     },
//     {
//         "id": 1649,
//         "bureaux": "1",
//         "code": "04 01 01 07",
//         "inscrit": "202",
//         "province": "ECOLE SANTE (ENSAS)"
//     },
//     {
//         "id": 1650,
//         "bureaux": "3",
//         "code": "04 01 01 08",
//         "inscrit": "1,084",
//         "province": "NOUVEAU CES"
//     },
//     {
//         "id": 1651,
//         "bureaux": "3",
//         "code": "04 01 01 09",
//         "inscrit": "1,200",
//         "province": "ECOLE E"
//     },
//     {
//         "id": 1652,
//         "bureaux": "2",
//         "code": "04 01 01 10",
//         "inscrit": "883",
//         "province": "ECOLE COMMUNALE -B-"
//     },
//     {
//         "id": 1653,
//         "bureaux": "1",
//         "code": "04 01 01 11",
//         "inscrit": "241",
//         "province": "ECOLE PRIVE PROTESTANTE"
//     },
//     {
//         "id": 1654,
//         "bureaux": "4",
//         "code": "04 01 02 01",
//         "inscrit": "1,751",
//         "province": "ECOLE PUBLIQUE -C-"
//     },
//     {
//         "id": 1655,
//         "bureaux": "3",
//         "code": "04 01 02 02",
//         "inscrit": "1,022",
//         "province": "ST KISITO"
//     },
//     {
//         "id": 1656,
//         "bureaux": "3",
//         "code": "04 01 02 03",
//         "inscrit": "1,471",
//         "province": "ECOLE-PUBL-F"
//     },
//     {
//         "id": 1657,
//         "bureaux": "2",
//         "code": "04 01 02 04",
//         "inscrit": "612",
//         "province": "IMMEUBLE CNSS\/CNGS"
//     },
//     {
//         "id": 1658,
//         "bureaux": "1",
//         "code": "04 01 02 05",
//         "inscrit": "134",
//         "province": "CENTRE DE FORMATION-P"
//     },
//     {
//         "id": 1659,
//         "bureaux": "24",
//         "code": "04 01 01",
//         "inscrit": "9,447",
//         "province": "1ER  ARRONDISSEMENT"
//     },
//     {
//         "id": 1660,
//         "bureaux": "13",
//         "code": "04 01 02",
//         "inscrit": "4,990",
//         "province": "2EME ARRONDISSEMENT"
//     },
//     {
//         "id": 1661,
//         "bureaux": "2",
//         "code": "04 02 01 01",
//         "inscrit": "649",
//         "province": "MOUALO"
//     },
//     {
//         "id": 1662,
//         "bureaux": "1",
//         "code": "04 02 01 02",
//         "inscrit": "363",
//         "province": "SAINT-MARTIN"
//     },
//     {
//         "id": 1663,
//         "bureaux": "1",
//         "code": "04 02 01 03",
//         "inscrit": "94",
//         "province": "MIGABE"
//     },
//     {
//         "id": 1664,
//         "bureaux": "1",
//         "code": "04 02 02 01",
//         "inscrit": "353",
//         "province": "IGOUMA I"
//     },
//     {
//         "id": 1665,
//         "bureaux": "1",
//         "code": "04 02 02 02",
//         "inscrit": "181",
//         "province": "IGOUMA 2"
//     },
//     {
//         "id": 1666,
//         "bureaux": "1",
//         "code": "04 02 02 03",
//         "inscrit": "162",
//         "province": "DIKOKA"
//     },
//     {
//         "id": 1667,
//         "bureaux": "1",
//         "code": "04 02 02 04",
//         "inscrit": "244",
//         "province": "MOKABO"
//     },
//     {
//         "id": 1668,
//         "bureaux": "1",
//         "code": "04 02 02 05",
//         "inscrit": "164",
//         "province": "BANDI 1 ET 2"
//     },
//     {
//         "id": 1669,
//         "bureaux": "1",
//         "code": "04 02 03 01",
//         "inscrit": "177",
//         "province": "NOMBAKELE"
//     },
//     {
//         "id": 1670,
//         "bureaux": "1",
//         "code": "04 02 03 02",
//         "inscrit": "74",
//         "province": "IDOUMI"
//     },
//     {
//         "id": 1671,
//         "bureaux": "1",
//         "code": "04 02 03 03",
//         "inscrit": "351",
//         "province": "MOULANDOUFOUALA"
//     },
//     {
//         "id": 1672,
//         "bureaux": "1",
//         "code": "04 02 03 04",
//         "inscrit": "130",
//         "province": "MOUTASSOU"
//     },
//     {
//         "id": 1673,
//         "bureaux": "1",
//         "code": "04 02 03 05",
//         "inscrit": "57",
//         "province": "KOUMBANOU"
//     },
//     {
//         "id": 1674,
//         "bureaux": "1",
//         "code": "04 02 03 06",
//         "inscrit": "114",
//         "province": "IKOLO"
//     },
//     {
//         "id": 1675,
//         "bureaux": "1",
//         "code": "04 02 03 07",
//         "inscrit": "120",
//         "province": "MAKANDA"
//     },
//     {
//         "id": 1676,
//         "bureaux": "2",
//         "code": "04 02 03 08",
//         "inscrit": "537",
//         "province": "DOUYA"
//     },
//     {
//         "id": 1677,
//         "bureaux": "4",
//         "code": "04 02 01",
//         "inscrit": "1,106",
//         "province": "DIBADI"
//     },
//     {
//         "id": 1678,
//         "bureaux": "5",
//         "code": "04 02 02",
//         "inscrit": "1,104",
//         "province": "DIKOKA"
//     },
//     {
//         "id": 1679,
//         "bureaux": "9",
//         "code": "04 02 03",
//         "inscrit": "1,560",
//         "province": "NGOUNIE CENTRALE"
//     },
//     {
//         "id": 1680,
//         "bureaux": "1",
//         "code": "04 03 00 01",
//         "inscrit": "333",
//         "province": "CITE ADMINIST ECOLE PUB. CENTR"
//     },
//     {
//         "id": 1681,
//         "bureaux": "1",
//         "code": "04 03 00 02",
//         "inscrit": "329",
//         "province": "ECOLE PUBL. DE BASSALI"
//     },
//     {
//         "id": 1682,
//         "bureaux": "1",
//         "code": "04 03 00 03",
//         "inscrit": "316",
//         "province": "KERIDIAMBOU  CES"
//     },
//     {
//         "id": 1683,
//         "bureaux": "1",
//         "code": "04 03 00 04",
//         "inscrit": "371",
//         "province": "ECOLE PUBL. DE NGOUASSA"
//     },
//     {
//         "id": 1684,
//         "bureaux": "2",
//         "code": "04 03 00 05",
//         "inscrit": "518",
//         "province": "BELLE-VILLE ECOLE CATH. STE FA"
//     },
//     {
//         "id": 1685,
//         "bureaux": "2",
//         "code": "04 03 00 06",
//         "inscrit": "569",
//         "province": "ECOLE PUBL. DE DAKAR"
//     },
//     {
//         "id": 1686,
//         "bureaux": "1",
//         "code": "04 03 00 07",
//         "inscrit": "399",
//         "province": "DAKAR SONG ET DAKAR BAS FOND"
//     },
//     {
//         "id": 1687,
//         "bureaux": "1",
//         "code": "04 03 00 08",
//         "inscrit": "260",
//         "province": "NIANGOU-SA-WOME EC. PUBL. DAKA"
//     },
//     {
//         "id": 1688,
//         "bureaux": "1",
//         "code": "04 03 00 09",
//         "inscrit": "269",
//         "province": "BONGAVILLE ET MOUBOUNGOU E.P P"
//     },
//     {
//         "id": 1689,
//         "bureaux": "11",
//         "code": "04 03 00",
//         "inscrit": "3,364",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 1690,
//         "bureaux": "1",
//         "code": "04 04 01 01",
//         "inscrit": "190",
//         "province": "DISPENS. MOULANDOUFALA"
//     },
//     {
//         "id": 1691,
//         "bureaux": "1",
//         "code": "04 04 01 02",
//         "inscrit": "45",
//         "province": "EC. PROTEST. MOUDOUMA"
//     },
//     {
//         "id": 1692,
//         "bureaux": "1",
//         "code": "04 04 01 03",
//         "inscrit": "149",
//         "province": "EC. MOURIMATSIENGUI"
//     },
//     {
//         "id": 1693,
//         "bureaux": "1",
//         "code": "04 04 01 04",
//         "inscrit": "41",
//         "province": "YOMBI 2-CHEF DE VILLAGE"
//     },
//     {
//         "id": 1694,
//         "bureaux": "1",
//         "code": "04 04 01 05",
//         "inscrit": "262",
//         "province": "YOMBI 1 EC. PUBLIQUE"
//     },
//     {
//         "id": 1695,
//         "bureaux": "1",
//         "code": "04 04 01 06",
//         "inscrit": "298",
//         "province": "MANDILOU 2-CHEF DE VILLAGE"
//     },
//     {
//         "id": 1696,
//         "bureaux": "1",
//         "code": "04 04 01 07",
//         "inscrit": "91",
//         "province": "MANDILOU 1 -EC. PUBLIQUE"
//     },
//     {
//         "id": 1697,
//         "bureaux": "1",
//         "code": "04 04 01 08",
//         "inscrit": "75",
//         "province": "KESSI  2"
//     },
//     {
//         "id": 1698,
//         "bureaux": "1",
//         "code": "04 04 01 09",
//         "inscrit": "240",
//         "province": "EC. PUBL. OYENANO"
//     },
//     {
//         "id": 1699,
//         "bureaux": "1",
//         "code": "04 04 01 10",
//         "inscrit": "218",
//         "province": "KESSI 1"
//     },
//     {
//         "id": 1700,
//         "bureaux": "1",
//         "code": "04 04 01 11",
//         "inscrit": "94",
//         "province": "PETIT ODAVO -CHEFFERIE"
//     },
//     {
//         "id": 1701,
//         "bureaux": "1",
//         "code": "04 04 01 12",
//         "inscrit": "136",
//         "province": "ECOLE PUBL. NZEMBA"
//     },
//     {
//         "id": 1702,
//         "bureaux": "1",
//         "code": "04 04 01 13",
//         "inscrit": "235",
//         "province": "ECOLE MAMIENGUE"
//     },
//     {
//         "id": 1703,
//         "bureaux": "1",
//         "code": "04 04 01 14",
//         "inscrit": "59",
//         "province": "ECOLE EKANGA"
//     },
//     {
//         "id": 1704,
//         "bureaux": "1",
//         "code": "04 04 01 15",
//         "inscrit": "58",
//         "province": "ECOLE WAKA"
//     },
//     {
//         "id": 1705,
//         "bureaux": "1",
//         "code": "04 04 01 16",
//         "inscrit": "5",
//         "province": "NINGUI"
//     },
//     {
//         "id": 1706,
//         "bureaux": "1",
//         "code": "04 04 01 17",
//         "inscrit": "61",
//         "province": "GRAND ODAVO PONT"
//     },
//     {
//         "id": 1707,
//         "bureaux": "1",
//         "code": "04 04 02 03",
//         "inscrit": "171",
//         "province": "EGONO"
//     },
//     {
//         "id": 1708,
//         "bureaux": "1",
//         "code": "04 04 02 04",
//         "inscrit": "120",
//         "province": "MATADI 7 ECOLE CATHOLIQUE"
//     },
//     {
//         "id": 1709,
//         "bureaux": "1",
//         "code": "04 04 02 06",
//         "inscrit": "72",
//         "province": "GUEDIBA-DIVINDE"
//     },
//     {
//         "id": 1710,
//         "bureaux": "1",
//         "code": "04 04 02 07",
//         "inscrit": "31",
//         "province": "ECOLE NIMBIE"
//     },
//     {
//         "id": 1711,
//         "bureaux": "1",
//         "code": "04 04 03 01",
//         "inscrit": "83",
//         "province": "NIOYE 1"
//     },
//     {
//         "id": 1712,
//         "bureaux": "1",
//         "code": "04 04 03 02",
//         "inscrit": "9",
//         "province": "EGOUBA (OUMBA)"
//     },
//     {
//         "id": 1713,
//         "bureaux": "1",
//         "code": "04 04 03 03",
//         "inscrit": "67",
//         "province": "DIVINDE"
//     },
//     {
//         "id": 1714,
//         "bureaux": "1",
//         "code": "04 04 03 04",
//         "inscrit": "48",
//         "province": "NIOYE II DISPENSAIRE"
//     },
//     {
//         "id": 1715,
//         "bureaux": "1",
//         "code": "04 04 03 05",
//         "inscrit": "68",
//         "province": "EVOUTA"
//     },
//     {
//         "id": 1716,
//         "bureaux": "1",
//         "code": "04 04 03 06",
//         "inscrit": "4",
//         "province": "MIMONGO"
//     },
//     {
//         "id": 1717,
//         "bureaux": "1",
//         "code": "04 04 03 07",
//         "inscrit": "93",
//         "province": "IKOBEY CENTRE (KEBE)"
//     },
//     {
//         "id": 1718,
//         "bureaux": "1",
//         "code": "04 04 03 08",
//         "inscrit": "142",
//         "province": "MOLANDO"
//     },
//     {
//         "id": 1719,
//         "bureaux": "1",
//         "code": "04 04 04 01",
//         "inscrit": "199",
//         "province": "EC. PUBL. KOUAGNA"
//     },
//     {
//         "id": 1720,
//         "bureaux": "1",
//         "code": "04 04 04 02",
//         "inscrit": "66",
//         "province": "NDOUGOU-CHEFFERIE"
//     },
//     {
//         "id": 1721,
//         "bureaux": "1",
//         "code": "04 04 04 03",
//         "inscrit": "276",
//         "province": "ECOLE PUBL. SINDARA 1"
//     },
//     {
//         "id": 1722,
//         "bureaux": "1",
//         "code": "04 04 04 04",
//         "inscrit": "249",
//         "province": "ECOLE PUBL. SINDARA 2"
//     },
//     {
//         "id": 1723,
//         "bureaux": "1",
//         "code": "04 04 04 05",
//         "inscrit": "106",
//         "province": "SINDARA SONG"
//     },
//     {
//         "id": 1724,
//         "bureaux": "1",
//         "code": "04 04 04 06",
//         "inscrit": "62",
//         "province": "DOUANI"
//     },
//     {
//         "id": 1725,
//         "bureaux": "1",
//         "code": "04 04 05 01",
//         "inscrit": "87",
//         "province": "REGROUPEMENT GUIAMBA"
//     },
//     {
//         "id": 1726,
//         "bureaux": "1",
//         "code": "04 04 05 02",
//         "inscrit": "18",
//         "province": "MOUTAMBA-SA-NAFOUMOU"
//     },
//     {
//         "id": 1727,
//         "bureaux": "1",
//         "code": "04 04 05 03",
//         "inscrit": "105",
//         "province": "DOUBOU"
//     },
//     {
//         "id": 1728,
//         "bureaux": "1",
//         "code": "04 04 05 04",
//         "inscrit": "263",
//         "province": "ECOLE CATH. MBOUKOU"
//     },
//     {
//         "id": 1729,
//         "bureaux": "1",
//         "code": "04 04 05 05",
//         "inscrit": "50",
//         "province": "ECOLE PROTEST. REMBOUE"
//     },
//     {
//         "id": 1730,
//         "bureaux": "2",
//         "code": "04 04 05 06",
//         "inscrit": "604",
//         "province": "ECOLE PUBL. GUIDOUMA"
//     },
//     {
//         "id": 1731,
//         "bureaux": "17",
//         "code": "04 04 01",
//         "inscrit": "2,257",
//         "province": "BANDA"
//     },
//     {
//         "id": 1732,
//         "bureaux": "4",
//         "code": "04 04 02",
//         "inscrit": "394",
//         "province": "DIBWA (DISTRICT IKOBEY)"
//     },
//     {
//         "id": 1733,
//         "bureaux": "8",
//         "code": "04 04 03",
//         "inscrit": "514",
//         "province": "OUMBA"
//     },
//     {
//         "id": 1734,
//         "bureaux": "6",
//         "code": "04 04 04",
//         "inscrit": "958",
//         "province": "SINDARA"
//     },
//     {
//         "id": 1735,
//         "bureaux": "7",
//         "code": "04 04 05",
//         "inscrit": "1,127",
//         "province": "TANDOU"
//     },
//     {
//         "id": 1736,
//         "bureaux": "2",
//         "code": "04 05 00 01",
//         "inscrit": "692",
//         "province": "EC PUBL MBIGOU"
//     },
//     {
//         "id": 1737,
//         "bureaux": "2",
//         "code": "04 05 00 02",
//         "inscrit": "531",
//         "province": "HAUT-MBIGOU (EC PRIVEE PROT)"
//     },
//     {
//         "id": 1738,
//         "bureaux": "1",
//         "code": "04 05 00 03",
//         "inscrit": "440",
//         "province": "MOUNGUEMBE (CES)"
//     },
//     {
//         "id": 1739,
//         "bureaux": "1",
//         "code": "04 05 00 04",
//         "inscrit": "308",
//         "province": "LEDOUMA T.P MBIGOU"
//     },
//     {
//         "id": 1740,
//         "bureaux": "6",
//         "code": "04 05 00",
//         "inscrit": "1,971",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 1741,
//         "bureaux": "1",
//         "code": "04 06 01 01",
//         "inscrit": "170",
//         "province": "KOYA"
//     },
//     {
//         "id": 1742,
//         "bureaux": "1",
//         "code": "04 06 01 02",
//         "inscrit": "57",
//         "province": "LOBA"
//     },
//     {
//         "id": 1743,
//         "bureaux": "1",
//         "code": "04 06 01 03",
//         "inscrit": "89",
//         "province": "REBE"
//     },
//     {
//         "id": 1744,
//         "bureaux": "1",
//         "code": "04 06 02 01",
//         "inscrit": "293",
//         "province": "MACKONGONIO (EC PUBL )"
//     },
//     {
//         "id": 1745,
//         "bureaux": "1",
//         "code": "04 06 02 02",
//         "inscrit": "139",
//         "province": "NDOUBI"
//     },
//     {
//         "id": 1746,
//         "bureaux": "1",
//         "code": "04 06 02 03",
//         "inscrit": "87",
//         "province": "DIBWANGUI"
//     },
//     {
//         "id": 1747,
//         "bureaux": "1",
//         "code": "04 06 02 04",
//         "inscrit": "104",
//         "province": "NGOMO-BOUL ( EC-P-CATHOLIQUE)"
//     },
//     {
//         "id": 1748,
//         "bureaux": "1",
//         "code": "04 06 02 05",
//         "inscrit": "199",
//         "province": "MANDJI"
//     },
//     {
//         "id": 1749,
//         "bureaux": "1",
//         "code": "04 06 02 06",
//         "inscrit": "102",
//         "province": "POUNDI"
//     },
//     {
//         "id": 1750,
//         "bureaux": "1",
//         "code": "04 06 03 01",
//         "inscrit": "243",
//         "province": "NZENZELE I"
//     },
//     {
//         "id": 1751,
//         "bureaux": "1",
//         "code": "04 06 03 02",
//         "inscrit": "238",
//         "province": "NZENZELE II"
//     },
//     {
//         "id": 1752,
//         "bureaux": "1",
//         "code": "04 06 03 03",
//         "inscrit": "34",
//         "province": "MOUBOU-LELOLO"
//     },
//     {
//         "id": 1753,
//         "bureaux": "1",
//         "code": "04 06 03 04",
//         "inscrit": "173",
//         "province": "SOUANGUI"
//     },
//     {
//         "id": 1754,
//         "bureaux": "1",
//         "code": "04 06 03 05",
//         "inscrit": "94",
//         "province": "KAMAMONGO-LEPOYE"
//     },
//     {
//         "id": 1755,
//         "bureaux": "1",
//         "code": "04 06 03 06",
//         "inscrit": "125",
//         "province": "LEKINDOU"
//     },
//     {
//         "id": 1756,
//         "bureaux": "1",
//         "code": "04 06 03 07",
//         "inscrit": "23",
//         "province": "CHANTIER BOUTSALA"
//     },
//     {
//         "id": 1757,
//         "bureaux": "1",
//         "code": "04 06 04 01",
//         "inscrit": "152",
//         "province": "KAMBAMONGO"
//     },
//     {
//         "id": 1758,
//         "bureaux": "1",
//         "code": "04 06 04 02",
//         "inscrit": "33",
//         "province": "ITSIBA-KOUMOU-MALA"
//     },
//     {
//         "id": 1759,
//         "bureaux": "1",
//         "code": "04 06 04 03",
//         "inscrit": "47",
//         "province": "KOTTO"
//     },
//     {
//         "id": 1760,
//         "bureaux": "1",
//         "code": "04 06 04 04",
//         "inscrit": "21",
//         "province": "LEBAGNI"
//     },
//     {
//         "id": 1761,
//         "bureaux": "1",
//         "code": "04 06 04 05",
//         "inscrit": "27",
//         "province": "MOUDOUMA"
//     },
//     {
//         "id": 1762,
//         "bureaux": "1",
//         "code": "04 06 04 06",
//         "inscrit": "26",
//         "province": "NDENGA"
//     },
//     {
//         "id": 1763,
//         "bureaux": "1",
//         "code": "04 06 04 07",
//         "inscrit": "48",
//         "province": "MALOU-LOULOU"
//     },
//     {
//         "id": 1764,
//         "bureaux": "1",
//         "code": "04 06 04 08",
//         "inscrit": "98",
//         "province": "NGOUNGUI"
//     },
//     {
//         "id": 1765,
//         "bureaux": "1",
//         "code": "04 06 04 09",
//         "inscrit": "37",
//         "province": "MAREMBO"
//     },
//     {
//         "id": 1766,
//         "bureaux": "1",
//         "code": "04 06 04 10",
//         "inscrit": "72",
//         "province": "MIYANGA"
//     },
//     {
//         "id": 1767,
//         "bureaux": "1",
//         "code": "04 06 04 11",
//         "inscrit": "19",
//         "province": "MIKOUMA"
//     },
//     {
//         "id": 1768,
//         "bureaux": "1",
//         "code": "04 06 04 12",
//         "inscrit": "47",
//         "province": "INOUNOUSSIABOLA"
//     },
//     {
//         "id": 1769,
//         "bureaux": "1",
//         "code": "04 06 04 13",
//         "inscrit": "14",
//         "province": "LENGOYE"
//     },
//     {
//         "id": 1770,
//         "bureaux": "1",
//         "code": "04 06 04 14",
//         "inscrit": "15",
//         "province": "MBIMBA"
//     },
//     {
//         "id": 1771,
//         "bureaux": "1",
//         "code": "04 06 04 15",
//         "inscrit": "11",
//         "province": "MOUKOUALA"
//     },
//     {
//         "id": 1772,
//         "bureaux": "1",
//         "code": "04 06 05 01",
//         "inscrit": "46",
//         "province": "DIENGA"
//     },
//     {
//         "id": 1773,
//         "bureaux": "1",
//         "code": "04 06 05 02",
//         "inscrit": "98",
//         "province": "BOLAPESSA"
//     },
//     {
//         "id": 1774,
//         "bureaux": "1",
//         "code": "04 06 05 03",
//         "inscrit": "36",
//         "province": "ANDAMBA"
//     },
//     {
//         "id": 1775,
//         "bureaux": "1",
//         "code": "04 06 06 01",
//         "inscrit": "313",
//         "province": "REGROUPEMENT-ISSALA"
//     },
//     {
//         "id": 1776,
//         "bureaux": "1",
//         "code": "04 06 06 02",
//         "inscrit": "70",
//         "province": "KANDA"
//     },
//     {
//         "id": 1777,
//         "bureaux": "1",
//         "code": "04 06 06 03",
//         "inscrit": "173",
//         "province": "REGROUPEMENT-MAYANI"
//     },
//     {
//         "id": 1778,
//         "bureaux": "1",
//         "code": "04 06 06 04",
//         "inscrit": "70",
//         "province": "MANDJI-WANO"
//     },
//     {
//         "id": 1779,
//         "bureaux": "1",
//         "code": "04 06 06 05",
//         "inscrit": "139",
//         "province": "IMENO-MBILA"
//     },
//     {
//         "id": 1780,
//         "bureaux": "1",
//         "code": "04 06 06 06",
//         "inscrit": "181",
//         "province": "REGROUPEMENT-IMENO-NZINGA"
//     },
//     {
//         "id": 1781,
//         "bureaux": "3",
//         "code": "04 06 01",
//         "inscrit": "316",
//         "province": "BANGANDO-NGOUNIE"
//     },
//     {
//         "id": 1782,
//         "bureaux": "6",
//         "code": "04 06 02",
//         "inscrit": "924",
//         "province": "BASSE-LOUETSI"
//     },
//     {
//         "id": 1783,
//         "bureaux": "7",
//         "code": "04 06 03",
//         "inscrit": "930",
//         "province": "DOUAI"
//     },
//     {
//         "id": 1784,
//         "bureaux": "15",
//         "code": "04 06 04",
//         "inscrit": "667",
//         "province": "LOUETSI-BOUMI"
//     },
//     {
//         "id": 1785,
//         "bureaux": "3",
//         "code": "04 06 05",
//         "inscrit": "180",
//         "province": "NGOUNIE-LOUETSI"
//     },
//     {
//         "id": 1786,
//         "bureaux": "6",
//         "code": "04 06 06",
//         "inscrit": "946",
//         "province": "WANO-IVINDZI"
//     },
//     {
//         "id": 1787,
//         "bureaux": "2",
//         "code": "04 07 00 01",
//         "inscrit": "622",
//         "province": "ECOLE PUBLIQUE A 130"
//     },
//     {
//         "id": 1788,
//         "bureaux": "1",
//         "code": "04 07 00 02",
//         "inscrit": "423",
//         "province": "ECOLE CATHOLIQUE PRIVEE"
//     },
//     {
//         "id": 1789,
//         "bureaux": "1",
//         "code": "04 07 00 03",
//         "inscrit": "408",
//         "province": "ECOLE PUBLIQUE B"
//     },
//     {
//         "id": 1790,
//         "bureaux": "1",
//         "code": "04 07 00 04",
//         "inscrit": "319",
//         "province": "C E S"
//     },
//     {
//         "id": 1791,
//         "bureaux": "5",
//         "code": "04 07 00",
//         "inscrit": "1,772",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 1792,
//         "bureaux": "1",
//         "code": "04 08 01 01",
//         "inscrit": "468",
//         "province": "ETEKE 1 ET 2"
//     },
//     {
//         "id": 1793,
//         "bureaux": "1",
//         "code": "04 08 01 02",
//         "inscrit": "143",
//         "province": "OVALA - MOKONA"
//     },
//     {
//         "id": 1794,
//         "bureaux": "1",
//         "code": "04 08 01 03",
//         "inscrit": "117",
//         "province": "MEBE"
//     },
//     {
//         "id": 1795,
//         "bureaux": "1",
//         "code": "04 08 01 04",
//         "inscrit": "62",
//         "province": "MOUBIGOU"
//     },
//     {
//         "id": 1796,
//         "bureaux": "1",
//         "code": "04 08 01 05",
//         "inscrit": "406",
//         "province": "MASSIMA ET VIEUX MIMONGO"
//     },
//     {
//         "id": 1797,
//         "bureaux": "1",
//         "code": "04 08 01 07",
//         "inscrit": "14",
//         "province": "EBANDO"
//     },
//     {
//         "id": 1798,
//         "bureaux": "1",
//         "code": "04 08 02 01",
//         "inscrit": "50",
//         "province": "DIBAMBA"
//     },
//     {
//         "id": 1799,
//         "bureaux": "1",
//         "code": "04 08 02 02",
//         "inscrit": "141",
//         "province": "MOUKANDI"
//     },
//     {
//         "id": 1800,
//         "bureaux": "1",
//         "code": "04 08 02 03",
//         "inscrit": "151",
//         "province": "MOUNONGO"
//     },
//     {
//         "id": 1801,
//         "bureaux": "1",
//         "code": "04 08 02 04",
//         "inscrit": "53",
//         "province": "BOULEMBO"
//     },
//     {
//         "id": 1802,
//         "bureaux": "1",
//         "code": "04 08 03 01",
//         "inscrit": "197",
//         "province": "DIBASSA"
//     },
//     {
//         "id": 1803,
//         "bureaux": "1",
//         "code": "04 08 03 02",
//         "inscrit": "248",
//         "province": "MOUKABOU"
//     },
//     {
//         "id": 1804,
//         "bureaux": "1",
//         "code": "04 08 03 03",
//         "inscrit": "178",
//         "province": "POUNGUI"
//     },
//     {
//         "id": 1805,
//         "bureaux": "1",
//         "code": "04 08 03 04",
//         "inscrit": "229",
//         "province": "DIBANDI"
//     },
//     {
//         "id": 1806,
//         "bureaux": "1",
//         "code": "04 08 03 05",
//         "inscrit": "190",
//         "province": "DIYANGA"
//     },
//     {
//         "id": 1807,
//         "bureaux": "1",
//         "code": "04 08 04 01",
//         "inscrit": "110",
//         "province": "SEKA-SEKA"
//     },
//     {
//         "id": 1808,
//         "bureaux": "1",
//         "code": "04 08 04 02",
//         "inscrit": "261",
//         "province": "YENO (RG-RD)"
//     },
//     {
//         "id": 1809,
//         "bureaux": "1",
//         "code": "04 08 04 03",
//         "inscrit": "64",
//         "province": "MAMBA EVOVA"
//     },
//     {
//         "id": 1810,
//         "bureaux": "1",
//         "code": "04 08 04 04",
//         "inscrit": "62",
//         "province": "NOMBO"
//     },
//     {
//         "id": 1811,
//         "bureaux": "1",
//         "code": "04 08 04 05",
//         "inscrit": "15",
//         "province": "ETAVA"
//     },
//     {
//         "id": 1812,
//         "bureaux": "1",
//         "code": "04 08 04 06",
//         "inscrit": "32",
//         "province": "KANDA PIE"
//     },
//     {
//         "id": 1813,
//         "bureaux": "1",
//         "code": "04 08 04 07",
//         "inscrit": "93",
//         "province": "EGOUMBI BAC"
//     },
//     {
//         "id": 1814,
//         "bureaux": "1",
//         "code": "04 08 04 08",
//         "inscrit": "298",
//         "province": "EPAMBOA"
//     },
//     {
//         "id": 1815,
//         "bureaux": "1",
//         "code": "04 08 04 09",
//         "inscrit": "296",
//         "province": "BILENGUI"
//     },
//     {
//         "id": 1816,
//         "bureaux": "1",
//         "code": "04 08 04 10",
//         "inscrit": "87",
//         "province": "MOSSIGUE"
//     },
//     {
//         "id": 1817,
//         "bureaux": "1",
//         "code": "04 08 04 11",
//         "inscrit": "58",
//         "province": "MASSIKA"
//     },
//     {
//         "id": 1818,
//         "bureaux": "1",
//         "code": "04 08 04 12",
//         "inscrit": "92",
//         "province": "EKEMBELE"
//     },
//     {
//         "id": 1819,
//         "bureaux": "6",
//         "code": "04 08 01",
//         "inscrit": "1,210",
//         "province": "VIEUX MIMONGO (DISTRICT ETEKE)"
//     },
//     {
//         "id": 1820,
//         "bureaux": "4",
//         "code": "04 08 02",
//         "inscrit": "395",
//         "province": "HAUTE DIKOBI"
//     },
//     {
//         "id": 1821,
//         "bureaux": "5",
//         "code": "04 08 03",
//         "inscrit": "1,042",
//         "province": "HAUT-OGOULOU"
//     },
//     {
//         "id": 1822,
//         "bureaux": "12",
//         "code": "04 08 04",
//         "inscrit": "1,468",
//         "province": "OGOULOU-ONOYE"
//     },
//     {
//         "id": 1823,
//         "bureaux": "1",
//         "code": "04 09 00 01",
//         "inscrit": "98",
//         "province": "ASSEMBLEE DEPARTEMENTALE"
//     },
//     {
//         "id": 1824,
//         "bureaux": "1",
//         "code": "04 09 00 02",
//         "inscrit": "256",
//         "province": "ECOLE PUBLIQUE CENTRE"
//     },
//     {
//         "id": 1825,
//         "bureaux": "1",
//         "code": "04 09 00 03",
//         "inscrit": "39",
//         "province": "LYCEE D ETAT A"
//     },
//     {
//         "id": 1826,
//         "bureaux": "1",
//         "code": "04 09 00 04",
//         "inscrit": "23",
//         "province": "LYCEE D ETAT B"
//     },
//     {
//         "id": 1827,
//         "bureaux": "1",
//         "code": "04 09 00 05",
//         "inscrit": "469",
//         "province": "E.P. PROTEST. (MINDANDA & KAMBA)"
//     },
//     {
//         "id": 1828,
//         "bureaux": "1",
//         "code": "04 09 00 06",
//         "inscrit": "478",
//         "province": "VOLET VILLAGEOIS (MALABA)"
//     },
//     {
//         "id": 1829,
//         "bureaux": "2",
//         "code": "04 09 00 07",
//         "inscrit": "638",
//         "province": "NDENDE 1-2-3"
//     },
//     {
//         "id": 1830,
//         "bureaux": "1",
//         "code": "04 09 00 08",
//         "inscrit": "371",
//         "province": "CAMP T.P. (AVIATION)"
//     },
//     {
//         "id": 1831,
//         "bureaux": "1",
//         "code": "04 09 00 09",
//         "inscrit": "476",
//         "province": "ECOLE CATH. DOLA A"
//     },
//     {
//         "id": 1832,
//         "bureaux": "1",
//         "code": "04 09 00 10",
//         "inscrit": "397",
//         "province": "ECOLE CATH. DOLA B"
//     },
//     {
//         "id": 1833,
//         "bureaux": "1",
//         "code": "04 09 00 11",
//         "inscrit": "99",
//         "province": "YELO-DOLA (EC PUBLIQUE)"
//     },
//     {
//         "id": 1834,
//         "bureaux": "12",
//         "code": "04 09 00",
//         "inscrit": "3,344",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 1835,
//         "bureaux": "1",
//         "code": "04 10 01 01",
//         "inscrit": "67",
//         "province": "NANGA"
//     },
//     {
//         "id": 1836,
//         "bureaux": "1",
//         "code": "04 10 01 02",
//         "inscrit": "141",
//         "province": "MBENGUI"
//     },
//     {
//         "id": 1837,
//         "bureaux": "1",
//         "code": "04 10 01 03",
//         "inscrit": "141",
//         "province": "MBADI"
//     },
//     {
//         "id": 1838,
//         "bureaux": "1",
//         "code": "04 10 01 04",
//         "inscrit": "82",
//         "province": "MOUNIGOU"
//     },
//     {
//         "id": 1839,
//         "bureaux": "1",
//         "code": "04 10 01 05",
//         "inscrit": "62",
//         "province": "NYANGA-YOUNGOU"
//     },
//     {
//         "id": 1840,
//         "bureaux": "1",
//         "code": "04 10 01 07",
//         "inscrit": "57",
//         "province": "FERRA"
//     },
//     {
//         "id": 1841,
//         "bureaux": "1",
//         "code": "04 10 02 01",
//         "inscrit": "94",
//         "province": "NGOUSSOU-MINGANGA-TSANGUI"
//     },
//     {
//         "id": 1842,
//         "bureaux": "1",
//         "code": "04 10 02 02",
//         "inscrit": "287",
//         "province": "DILOLO"
//     },
//     {
//         "id": 1843,
//         "bureaux": "1",
//         "code": "04 10 02 03",
//         "inscrit": "42",
//         "province": "MOUDJOMBI"
//     },
//     {
//         "id": 1844,
//         "bureaux": "1",
//         "code": "04 10 02 04",
//         "inscrit": "104",
//         "province": "MOUKORO 1 ET 2"
//     },
//     {
//         "id": 1845,
//         "bureaux": "2",
//         "code": "04 10 02 05",
//         "inscrit": "994",
//         "province": "ECOLE CATH. DOUSSALA"
//     },
//     {
//         "id": 1846,
//         "bureaux": "1",
//         "code": "04 10 02 06",
//         "inscrit": "1",
//         "province": "ECOLE SOGADEL"
//     },
//     {
//         "id": 1847,
//         "bureaux": "1",
//         "code": "04 10 02 07",
//         "inscrit": "26",
//         "province": "MOUNGALI"
//     },
//     {
//         "id": 1848,
//         "bureaux": "1",
//         "code": "04 10 02 08",
//         "inscrit": "185",
//         "province": "MOUREMBOU (ISSINGA)"
//     },
//     {
//         "id": 1849,
//         "bureaux": "1",
//         "code": "04 10 02 09",
//         "inscrit": "127",
//         "province": "MOUSSAMBOU"
//     },
//     {
//         "id": 1850,
//         "bureaux": "6",
//         "code": "04 10 01",
//         "inscrit": "550",
//         "province": "NORD"
//     },
//     {
//         "id": 1851,
//         "bureaux": "10",
//         "code": "04 10 02",
//         "inscrit": "1,860",
//         "province": "SUD"
//     },
//     {
//         "id": 1852,
//         "bureaux": "1",
//         "code": "04 11 00 01",
//         "inscrit": "263",
//         "province": "C E S MANDJI"
//     },
//     {
//         "id": 1853,
//         "bureaux": "1",
//         "code": "04 11 00 02",
//         "inscrit": "211",
//         "province": "ECOLE PUBLIQUE DE MANDJI"
//     },
//     {
//         "id": 1854,
//         "bureaux": "1",
//         "code": "04 11 00 03",
//         "inscrit": "343",
//         "province": "ECOLE CATHOLIQUE"
//     },
//     {
//         "id": 1855,
//         "bureaux": "1",
//         "code": "04 11 00 04",
//         "inscrit": "121",
//         "province": "MAISON DU PEUPLE"
//     },
//     {
//         "id": 1856,
//         "bureaux": "1",
//         "code": "04 11 00 05",
//         "inscrit": "97",
//         "province": "CENTRE VILLE"
//     },
//     {
//         "id": 1857,
//         "bureaux": "1",
//         "code": "04 11 00 06",
//         "inscrit": "102",
//         "province": "CENTRE VILLE-ASSEMBLE-D"
//     },
//     {
//         "id": 1858,
//         "bureaux": "1",
//         "code": "04 11 00 07",
//         "inscrit": "289",
//         "province": "DIGWEMA"
//     },
//     {
//         "id": 1859,
//         "bureaux": "1",
//         "code": "04 11 00 08",
//         "inscrit": "263",
//         "province": "SIEVANOU"
//     },
//     {
//         "id": 1860,
//         "bureaux": "8",
//         "code": "04 11 00",
//         "inscrit": "1,689",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 1861,
//         "bureaux": "1",
//         "code": "04 12 01 01",
//         "inscrit": "64",
//         "province": "TSYKA"
//     },
//     {
//         "id": 1862,
//         "bureaux": "1",
//         "code": "04 12 01 02",
//         "inscrit": "48",
//         "province": "NZAMBINATSIENGUI"
//     },
//     {
//         "id": 1863,
//         "bureaux": "1",
//         "code": "04 12 01 03",
//         "inscrit": "288",
//         "province": "MASSANA-DOUBINANA"
//     },
//     {
//         "id": 1864,
//         "bureaux": "1",
//         "code": "04 12 01 04",
//         "inscrit": "31",
//         "province": "C F A GUIVANGA"
//     },
//     {
//         "id": 1865,
//         "bureaux": "1",
//         "code": "04 12 02 01",
//         "inscrit": "65",
//         "province": "YENO PETIT-VILLAGE"
//     },
//     {
//         "id": 1866,
//         "bureaux": "1",
//         "code": "04 12 02 02",
//         "inscrit": "109",
//         "province": "YENO"
//     },
//     {
//         "id": 1867,
//         "bureaux": "1",
//         "code": "04 12 02 03",
//         "inscrit": "107",
//         "province": "MOUKOUNA"
//     },
//     {
//         "id": 1868,
//         "bureaux": "1",
//         "code": "04 12 02 04",
//         "inscrit": "103",
//         "province": "MATSOUKA"
//     },
//     {
//         "id": 1869,
//         "bureaux": "1",
//         "code": "04 12 02 05",
//         "inscrit": "87",
//         "province": "OMENGO"
//     },
//     {
//         "id": 1870,
//         "bureaux": "1",
//         "code": "04 12 02 06",
//         "inscrit": "112",
//         "province": "FOUANOU"
//     },
//     {
//         "id": 1871,
//         "bureaux": "1",
//         "code": "04 12 03 01",
//         "inscrit": "212",
//         "province": "DIANGUI"
//     },
//     {
//         "id": 1872,
//         "bureaux": "1",
//         "code": "04 12 03 02",
//         "inscrit": "163",
//         "province": "KANANA"
//     },
//     {
//         "id": 1873,
//         "bureaux": "1",
//         "code": "04 12 03 03",
//         "inscrit": "331",
//         "province": "LAMBARENE-KILI"
//     },
//     {
//         "id": 1874,
//         "bureaux": "1",
//         "code": "04 12 03 04",
//         "inscrit": "105",
//         "province": "FANGUINDAKA"
//     },
//     {
//         "id": 1875,
//         "bureaux": "1",
//         "code": "04 12 03 05",
//         "inscrit": "157",
//         "province": "BOUNGOUNGA"
//     },
//     {
//         "id": 1876,
//         "bureaux": "1",
//         "code": "04 12 03 06",
//         "inscrit": "186",
//         "province": "BEMBOUDIE"
//     },
//     {
//         "id": 1877,
//         "bureaux": "4",
//         "code": "04 12 01",
//         "inscrit": "431",
//         "province": "DOUBANGA"
//     },
//     {
//         "id": 1878,
//         "bureaux": "6",
//         "code": "04 12 02",
//         "inscrit": "583",
//         "province": "DOUREMBOU"
//     },
//     {
//         "id": 1879,
//         "bureaux": "6",
//         "code": "04 12 03",
//         "inscrit": "1,154",
//         "province": "KOUMOU"
//     },
//     {
//         "id": 1880,
//         "bureaux": "2",
//         "code": "04 12 04",
//         "inscrit": "160",
//         "province": "PENY"
//     },
//     {
//         "id": 1881,
//         "bureaux": "2",
//         "code": "04 13 00 01",
//         "inscrit": "513",
//         "province": "MAKOMBO (ECOLE ALL.CHRET.)"
//     },
//     {
//         "id": 1882,
//         "bureaux": "1",
//         "code": "04 13 00 02",
//         "inscrit": "302",
//         "province": "ECOLE ALL.CHRET. BONGOLO"
//     },
//     {
//         "id": 1883,
//         "bureaux": "2",
//         "code": "04 13 00 03",
//         "inscrit": "502",
//         "province": "EC CATHOLIQUE LEBAMBA"
//     },
//     {
//         "id": 1884,
//         "bureaux": "1",
//         "code": "04 13 00 04",
//         "inscrit": "491",
//         "province": "EC PUBLIQUE LEBAMBA"
//     },
//     {
//         "id": 1885,
//         "bureaux": "1",
//         "code": "04 13 00 05",
//         "inscrit": "241",
//         "province": "ECOLE ALL CHRETIENNE"
//     },
//     {
//         "id": 1886,
//         "bureaux": "1",
//         "code": "04 13 00 06",
//         "inscrit": "296",
//         "province": "FOYER DES JEUNES (MALONGO-MAPA)"
//     },
//     {
//         "id": 1887,
//         "bureaux": "1",
//         "code": "04 13 00 07",
//         "inscrit": "192",
//         "province": "FOYER DES JEUNES (CTR VILLE)"
//     },
//     {
//         "id": 1888,
//         "bureaux": "1",
//         "code": "04 13 00 08",
//         "inscrit": "402",
//         "province": "COLLEGE BONGOLO"
//     },
//     {
//         "id": 1889,
//         "bureaux": "1",
//         "code": "04 13 00 09",
//         "inscrit": "248",
//         "province": "EC-CATH-LETOGO-MABENGO"
//     },
//     {
//         "id": 1890,
//         "bureaux": "1",
//         "code": "04 13 00 10",
//         "inscrit": "254",
//         "province": "POUNGOU-IMENO"
//     },
//     {
//         "id": 1891,
//         "bureaux": "12",
//         "code": "04 13 00",
//         "inscrit": "3,441",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 1892,
//         "bureaux": "1",
//         "code": "04 14 01 01",
//         "inscrit": "18",
//         "province": "MAYANGA"
//     },
//     {
//         "id": 1893,
//         "bureaux": "1",
//         "code": "04 14 01 02",
//         "inscrit": "102",
//         "province": "ECOLE PUBLIQUE ISSINGA"
//     },
//     {
//         "id": 1894,
//         "bureaux": "1",
//         "code": "04 14 01 03",
//         "inscrit": "206",
//         "province": "ECOLE MBELENALETEMBE (EC. ALL.)"
//     },
//     {
//         "id": 1895,
//         "bureaux": "1",
//         "code": "04 14 01 04",
//         "inscrit": "191",
//         "province": "EC PUBLIQUE NZINGUI"
//     },
//     {
//         "id": 1896,
//         "bureaux": "1",
//         "code": "04 14 01 05",
//         "inscrit": "93",
//         "province": "EC CATHOLIQUE DE MBINAMBI"
//     },
//     {
//         "id": 1897,
//         "bureaux": "1",
//         "code": "04 14 01 06",
//         "inscrit": "313",
//         "province": "EC CATHOLIQUE DE MABANGA"
//     },
//     {
//         "id": 1898,
//         "bureaux": "1",
//         "code": "04 14 01 07",
//         "inscrit": "83",
//         "province": "EC PROTEST NZOUNDOU"
//     },
//     {
//         "id": 1899,
//         "bureaux": "1",
//         "code": "04 14 02 01",
//         "inscrit": "122",
//         "province": "IDEMBE (ECOLE PROTEST.)"
//     },
//     {
//         "id": 1900,
//         "bureaux": "1",
//         "code": "04 14 02 02",
//         "inscrit": "240",
//         "province": "MOUKOUNDOU (ECOLE CATH.)"
//     },
//     {
//         "id": 1901,
//         "bureaux": "1",
//         "code": "04 14 02 03",
//         "inscrit": "319",
//         "province": "KANDA (ECOLE CATH.)"
//     },
//     {
//         "id": 1902,
//         "bureaux": "1",
//         "code": "04 14 02 04",
//         "inscrit": "78",
//         "province": "MOUYAMBA (ECOLE PUBLIQUE)"
//     },
//     {
//         "id": 1903,
//         "bureaux": "1",
//         "code": "04 14 02 05",
//         "inscrit": "268",
//         "province": "MEMBA (ECOLE PUBLIQUE)"
//     },
//     {
//         "id": 1904,
//         "bureaux": "7",
//         "code": "04 14 01",
//         "inscrit": "1,006",
//         "province": "LOUTSI-SOUNGOU"
//     },
//     {
//         "id": 1905,
//         "bureaux": "5",
//         "code": "04 14 02",
//         "inscrit": "1,027",
//         "province": "WANO-BIROUNDOU"
//     },
//     {
//         "id": 1906,
//         "bureaux": "1",
//         "code": "04 15 00 01",
//         "inscrit": "348",
//         "province": "ECOLE PUBLIQUE"
//     },
//     {
//         "id": 1907,
//         "bureaux": "1",
//         "code": "04 15 00 02",
//         "inscrit": "262",
//         "province": "EC PRIVEE CATH (MOUEKI)"
//     },
//     {
//         "id": 1908,
//         "bureaux": "1",
//         "code": "04 15 00 03",
//         "inscrit": "227",
//         "province": "EC PRIVEE PROT (BIBAMBA)"
//     },
//     {
//         "id": 1909,
//         "bureaux": "1",
//         "code": "04 15 00 04",
//         "inscrit": "76",
//         "province": "HANGAR (LONGO)"
//     },
//     {
//         "id": 1910,
//         "bureaux": "4",
//         "code": "04 15 00",
//         "inscrit": "913",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 1911,
//         "bureaux": "1",
//         "code": "04 16 01 01",
//         "inscrit": "215",
//         "province": "MOUKOUAGNA (ECOLE ALL. CHRET)"
//     },
//     {
//         "id": 1912,
//         "bureaux": "1",
//         "code": "04 16 01 02",
//         "inscrit": "204",
//         "province": "MBOMO - ECOLE CATHOLIQUE"
//     },
//     {
//         "id": 1913,
//         "bureaux": "1",
//         "code": "04 16 01 03",
//         "inscrit": "81",
//         "province": "MITSANDZA- ECOLE PUBLIQUE"
//     },
//     {
//         "id": 1914,
//         "bureaux": "1",
//         "code": "04 16 01 04",
//         "inscrit": "44",
//         "province": "LEYONGA (ECOLE ALL CHRET)"
//     },
//     {
//         "id": 1915,
//         "bureaux": "1",
//         "code": "04 16 01 05",
//         "inscrit": "102",
//         "province": "MBENGAMAMBA (ECOLE PUB.)"
//     },
//     {
//         "id": 1916,
//         "bureaux": "1",
//         "code": "04 16 01 06",
//         "inscrit": "242",
//         "province": "BAPOSSO (ECOLE PRIVEE CATH.)"
//     },
//     {
//         "id": 1917,
//         "bureaux": "1",
//         "code": "04 16 01 07",
//         "inscrit": "162",
//         "province": "LEVINDA (ECOLE PUB.)"
//     },
//     {
//         "id": 1918,
//         "bureaux": "1",
//         "code": "04 16 01 08",
//         "inscrit": "40",
//         "province": "MIKOVANDZA (CHEF DE VILLAGE)"
//     },
//     {
//         "id": 1919,
//         "bureaux": "1",
//         "code": "04 16 01 09",
//         "inscrit": "46",
//         "province": "MAYIGHA (HANGAR)"
//     },
//     {
//         "id": 1920,
//         "bureaux": "1",
//         "code": "04 16 01 10",
//         "inscrit": "151",
//         "province": "MAMBONGA (ECOLE PUB.)"
//     },
//     {
//         "id": 1921,
//         "bureaux": "1",
//         "code": "04 16 01 11",
//         "inscrit": "79",
//         "province": "MOUKIMBI (ECOLE CATH.)"
//     },
//     {
//         "id": 1922,
//         "bureaux": "1",
//         "code": "04 16 01 12",
//         "inscrit": "32",
//         "province": "NDZINDZI"
//     },
//     {
//         "id": 1923,
//         "bureaux": "1",
//         "code": "04 16 01 13",
//         "inscrit": "55",
//         "province": "MOMBI"
//     },
//     {
//         "id": 1924,
//         "bureaux": "1",
//         "code": "04 16 01 15",
//         "inscrit": "23",
//         "province": "LEVINDA 2"
//     },
//     {
//         "id": 1925,
//         "bureaux": "1",
//         "code": "04 16 01 16",
//         "inscrit": "35",
//         "province": "LEPEPE"
//     },
//     {
//         "id": 1926,
//         "bureaux": "1",
//         "code": "04 16 01 17",
//         "inscrit": "137",
//         "province": "MADIBA"
//     },
//     {
//         "id": 1927,
//         "bureaux": "16",
//         "code": "04 16 01",
//         "inscrit": "1,648",
//         "province": "HAUTE LOUETSI"
//     },
//     {
//         "id": 1928,
//         "bureaux": "1",
//         "code": "04 17 00 01",
//         "inscrit": "389",
//         "province": "ECOLE PUBLIQUE"
//     },
//     {
//         "id": 1929,
//         "bureaux": "1",
//         "code": "04 17 00 02",
//         "inscrit": "100",
//         "province": "E-P-MOUSSA"
//     },
//     {
//         "id": 1930,
//         "bureaux": "1",
//         "code": "04 17 00 03",
//         "inscrit": "56",
//         "province": "KOUMBANOU"
//     },
//     {
//         "id": 1931,
//         "bureaux": "3",
//         "code": "04 17 00",
//         "inscrit": "545",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 1932,
//         "bureaux": "1",
//         "code": "04 18 01 01",
//         "inscrit": "47",
//         "province": "NIEGUIANOU"
//     },
//     {
//         "id": 1933,
//         "bureaux": "1",
//         "code": "04 18 01 02",
//         "inscrit": "68",
//         "province": "DIBOTSA (EC PUBL)"
//     },
//     {
//         "id": 1934,
//         "bureaux": "1",
//         "code": "04 18 01 03",
//         "inscrit": "57",
//         "province": "NZAMBI"
//     },
//     {
//         "id": 1935,
//         "bureaux": "1",
//         "code": "04 18 01 04",
//         "inscrit": "31",
//         "province": "MINGOLA (EC PUBL)"
//     },
//     {
//         "id": 1936,
//         "bureaux": "1",
//         "code": "04 18 01 05",
//         "inscrit": "19",
//         "province": "GUIMANGA"
//     },
//     {
//         "id": 1937,
//         "bureaux": "1",
//         "code": "04 18 01 06",
//         "inscrit": "10",
//         "province": "NYANGA"
//     },
//     {
//         "id": 1938,
//         "bureaux": "1",
//         "code": "04 18 01 07",
//         "inscrit": "129",
//         "province": "ILENDO (EC PUBL)"
//     },
//     {
//         "id": 1939,
//         "bureaux": "1",
//         "code": "04 18 01 08",
//         "inscrit": "24",
//         "province": "MANDJI-DAKAR"
//     },
//     {
//         "id": 1940,
//         "bureaux": "1",
//         "code": "04 18 01 09",
//         "inscrit": "17",
//         "province": "MOUKIDI"
//     },
//     {
//         "id": 1941,
//         "bureaux": "1",
//         "code": "04 18 02 01",
//         "inscrit": "186",
//         "province": "OUKOUMBOU"
//     },
//     {
//         "id": 1942,
//         "bureaux": "1",
//         "code": "04 18 02 02",
//         "inscrit": "65",
//         "province": "GUISSA CARREFOUR"
//     },
//     {
//         "id": 1943,
//         "bureaux": "1",
//         "code": "04 18 02 03",
//         "inscrit": "229",
//         "province": "IDEMBA (EC PUBL)"
//     },
//     {
//         "id": 1944,
//         "bureaux": "9",
//         "code": "04 18 01",
//         "inscrit": "402",
//         "province": "BASSE-MOUGALABA"
//     },
//     {
//         "id": 1945,
//         "bureaux": "3",
//         "code": "04 18 02",
//         "inscrit": "480",
//         "province": "HAUTE-MOUGALABA"
//     },
//     {
//         "id": 1946,
//         "bureaux": "37",
//         "code": "401",
//         "inscrit": "14,437",
//         "province": "MOUILA"
//     },
//     {
//         "id": 1947,
//         "bureaux": "18",
//         "code": "402",
//         "inscrit": "3,770",
//         "province": "DOUYA-ONOYE (MOUILA)"
//     },
//     {
//         "id": 1948,
//         "bureaux": "11",
//         "code": "403",
//         "inscrit": "3,364",
//         "province": "FOUGAMOU"
//     },
//     {
//         "id": 1949,
//         "bureaux": "42",
//         "code": "404",
//         "inscrit": "5,250",
//         "province": "TSAMBA-MAGOTSI (FOUGAMOU)"
//     },
//     {
//         "id": 1950,
//         "bureaux": "6",
//         "code": "405",
//         "inscrit": "1,971",
//         "province": "MBIGOU"
//     },
//     {
//         "id": 1951,
//         "bureaux": "40",
//         "code": "406",
//         "inscrit": "3,963",
//         "province": "BOUMI-LOUETSI (MBIGOU)"
//     },
//     {
//         "id": 1952,
//         "bureaux": "5",
//         "code": "407",
//         "inscrit": "1,772",
//         "province": "MIMONGO"
//     },
//     {
//         "id": 1953,
//         "bureaux": "27",
//         "code": "408",
//         "inscrit": "4,115",
//         "province": "OGOULOU (MIMONGO)"
//     },
//     {
//         "id": 1954,
//         "bureaux": "12",
//         "code": "409",
//         "inscrit": "3,344",
//         "province": "NDENDE"
//     },
//     {
//         "id": 1955,
//         "bureaux": "16",
//         "code": "410",
//         "inscrit": "2,410",
//         "province": "DOLA (NDENDE)"
//     },
//     {
//         "id": 1956,
//         "bureaux": "8",
//         "code": "411",
//         "inscrit": "1,689",
//         "province": "MANDJI"
//     },
//     {
//         "id": 1957,
//         "bureaux": "18",
//         "code": "412",
//         "inscrit": "2,328",
//         "province": "NDOLOU (MANDJI)"
//     },
//     {
//         "id": 1958,
//         "bureaux": "12",
//         "code": "413",
//         "inscrit": "3,441",
//         "province": "LEBAMBA"
//     },
//     {
//         "id": 1959,
//         "bureaux": "12",
//         "code": "414",
//         "inscrit": "2,033",
//         "province": "LOUETSI-WANO (LEBAMBA)"
//     },
//     {
//         "id": 1960,
//         "bureaux": "4",
//         "code": "415",
//         "inscrit": "913",
//         "province": "MALINGA"
//     },
//     {
//         "id": 1961,
//         "bureaux": "16",
//         "code": "416",
//         "inscrit": "1,648",
//         "province": "LOUETSI-BIBAKA (MALINGA)"
//     },
//     {
//         "id": 1962,
//         "bureaux": "3",
//         "code": "417",
//         "inscrit": "545",
//         "province": "GUIETSOU"
//     },
//     {
//         "id": 1963,
//         "bureaux": "12",
//         "code": "418",
//         "inscrit": "882",
//         "province": "MOUGALABA (GUIETSOU)"
//     },
//     {
//         "id": 1964,
//         "bureaux": "2",
//         "code": "05 01 01 01",
//         "inscrit": "530",
//         "province": "POLA II (EC COMMUNALE -G)"
//     },
//     {
//         "id": 1965,
//         "bureaux": "2",
//         "code": "05 01 01 02",
//         "inscrit": "892",
//         "province": "EC COMMUNALE -C- (NDABILILA 2)"
//     },
//     {
//         "id": 1966,
//         "bureaux": "3",
//         "code": "05 01 01 03",
//         "inscrit": "1,361",
//         "province": "LYCEE NAZAIRE BOULINGUI"
//     },
//     {
//         "id": 1967,
//         "bureaux": "1",
//         "code": "05 01 01 04",
//         "inscrit": "169",
//         "province": "NOTRE DAME"
//     },
//     {
//         "id": 1968,
//         "bureaux": "2",
//         "code": "05 01 01 05",
//         "inscrit": "517",
//         "province": "ECOLE ST. JOSEPH"
//     },
//     {
//         "id": 1969,
//         "bureaux": "1",
//         "code": "05 01 01 06",
//         "inscrit": "188",
//         "province": "BIBORA (CES HORIZON BASE)"
//     },
//     {
//         "id": 1970,
//         "bureaux": "1",
//         "code": "05 01 01 07",
//         "inscrit": "471",
//         "province": "NDABILILA 1 (EDUCATION POPULAIRE)"
//     },
//     {
//         "id": 1971,
//         "bureaux": "2",
//         "code": "05 01 01 08",
//         "inscrit": "604",
//         "province": "MINZANZALA II (ANN.CES HORIZON)"
//     },
//     {
//         "id": 1972,
//         "bureaux": "1",
//         "code": "05 01 01 09",
//         "inscrit": "392",
//         "province": "CENTRE VILLE"
//     },
//     {
//         "id": 1973,
//         "bureaux": "2",
//         "code": "05 01 02 01",
//         "inscrit": "704",
//         "province": "BATSIENGUI 1 (EC COMMUNALE E)"
//     },
//     {
//         "id": 1974,
//         "bureaux": "1",
//         "code": "05 01 02 02",
//         "inscrit": "133",
//         "province": "BATSIENGUI 2 (EC COMMUNALE)"
//     },
//     {
//         "id": 1975,
//         "bureaux": "1",
//         "code": "05 01 02 03",
//         "inscrit": "353",
//         "province": "INGARA 2-3 (EC COMMUNALE H)"
//     },
//     {
//         "id": 1976,
//         "bureaux": "1",
//         "code": "05 01 02 04",
//         "inscrit": "340",
//         "province": "INGARA 1 (ECOLE COMMUNALE -A-)"
//     },
//     {
//         "id": 1977,
//         "bureaux": "2",
//         "code": "05 01 02 05",
//         "inscrit": "641",
//         "province": "MAVOUNDI (ECOLE COMMUNALE -F-)"
//     },
//     {
//         "id": 1978,
//         "bureaux": "1",
//         "code": "05 01 02 06",
//         "inscrit": "133",
//         "province": "ECOLE PROTESTANTE"
//     },
//     {
//         "id": 1979,
//         "bureaux": "1",
//         "code": "05 01 02 07",
//         "inscrit": "365",
//         "province": "MOUKENGA 2 (EC COMMUNALE B)"
//     },
//     {
//         "id": 1980,
//         "bureaux": "1",
//         "code": "05 01 02 08",
//         "inscrit": "278",
//         "province": "MOUKENGA 3 (EC COMMUNALE D)"
//     },
//     {
//         "id": 1981,
//         "bureaux": "1",
//         "code": "05 01 02 09",
//         "inscrit": "453",
//         "province": "LYCEE PROFESSIONEL"
//     },
//     {
//         "id": 1982,
//         "bureaux": "15",
//         "code": "05 01 01",
//         "inscrit": "5,124",
//         "province": "1ER  ARRONDISSEMENT"
//     },
//     {
//         "id": 1983,
//         "bureaux": "11",
//         "code": "05 01 02",
//         "inscrit": "3,400",
//         "province": "2EME ARRONDISSEMENT"
//     },
//     {
//         "id": 1984,
//         "bureaux": "1",
//         "code": "05 02 01 01",
//         "inscrit": "128",
//         "province": "BAGNARA"
//     },
//     {
//         "id": 1985,
//         "bureaux": "1",
//         "code": "05 02 01 02",
//         "inscrit": "23",
//         "province": "DOUGHENY"
//     },
//     {
//         "id": 1986,
//         "bureaux": "1",
//         "code": "05 02 01 03",
//         "inscrit": "47",
//         "province": "DIGOUNZI"
//     },
//     {
//         "id": 1987,
//         "bureaux": "1",
//         "code": "05 02 01 04",
//         "inscrit": "58",
//         "province": "DOUKOUMOU"
//     },
//     {
//         "id": 1988,
//         "bureaux": "1",
//         "code": "05 02 01 05",
//         "inscrit": "50",
//         "province": "NDENGA"
//     },
//     {
//         "id": 1989,
//         "bureaux": "1",
//         "code": "05 02 01 06",
//         "inscrit": "36",
//         "province": "MIGOMA"
//     },
//     {
//         "id": 1990,
//         "bureaux": "1",
//         "code": "05 02 01 07",
//         "inscrit": "105",
//         "province": "KERI-NZAMBI"
//     },
//     {
//         "id": 1991,
//         "bureaux": "1",
//         "code": "05 02 01 08",
//         "inscrit": "85",
//         "province": "MAKABANA"
//     },
//     {
//         "id": 1992,
//         "bureaux": "1",
//         "code": "05 02 01 09",
//         "inscrit": "148",
//         "province": "IDOUMA"
//     },
//     {
//         "id": 1993,
//         "bureaux": "1",
//         "code": "05 02 02 01",
//         "inscrit": "385",
//         "province": "ILALA"
//     },
//     {
//         "id": 1994,
//         "bureaux": "1",
//         "code": "05 02 02 02",
//         "inscrit": "118",
//         "province": "MOUGAMBOU-DIMBOU"
//     },
//     {
//         "id": 1995,
//         "bureaux": "1",
//         "code": "05 02 02 03",
//         "inscrit": "257",
//         "province": "MOUTSOUBIRI"
//     },
//     {
//         "id": 1996,
//         "bureaux": "1",
//         "code": "05 02 02 04",
//         "inscrit": "293",
//         "province": "DIGOUDOU"
//     },
//     {
//         "id": 1997,
//         "bureaux": "1",
//         "code": "05 02 02 05",
//         "inscrit": "122",
//         "province": "NZIENZILI"
//     },
//     {
//         "id": 1998,
//         "bureaux": "1",
//         "code": "05 02 02 06",
//         "inscrit": "161",
//         "province": "DOUGANDOU"
//     },
//     {
//         "id": 1999,
//         "bureaux": "1",
//         "code": "05 02 02 07",
//         "inscrit": "252",
//         "province": "LOUANGO"
//     },
//     {
//         "id": 2000,
//         "bureaux": "1",
//         "code": "05 02 02 08",
//         "inscrit": "121",
//         "province": "MOUNANGA"
//     },
//     {
//         "id": 2001,
//         "bureaux": "1",
//         "code": "05 02 02 09",
//         "inscrit": "96",
//         "province": "DOUSSEGOUSSOU"
//     },
//     {
//         "id": 2002,
//         "bureaux": "1",
//         "code": "05 02 02 10",
//         "inscrit": "101",
//         "province": "MILOLO"
//     },
//     {
//         "id": 2003,
//         "bureaux": "1",
//         "code": "05 02 02 11",
//         "inscrit": "268",
//         "province": "TONO"
//     },
//     {
//         "id": 2004,
//         "bureaux": "1",
//         "code": "05 02 02 12",
//         "inscrit": "62",
//         "province": "VIEUX-TONO"
//     },
//     {
//         "id": 2005,
//         "bureaux": "1",
//         "code": "05 02 02 13",
//         "inscrit": "41",
//         "province": "IMANGUE-PLANTEUR"
//     },
//     {
//         "id": 2006,
//         "bureaux": "1",
//         "code": "05 02 02 14",
//         "inscrit": "54",
//         "province": "MOUNIONZI"
//     },
//     {
//         "id": 2007,
//         "bureaux": "1",
//         "code": "05 02 03 01",
//         "inscrit": "137",
//         "province": "MABOURIGA"
//     },
//     {
//         "id": 2008,
//         "bureaux": "1",
//         "code": "05 02 03 02",
//         "inscrit": "369",
//         "province": "PENIOUNDOU"
//     },
//     {
//         "id": 2009,
//         "bureaux": "1",
//         "code": "05 02 03 03",
//         "inscrit": "88",
//         "province": "DIKOUTOU"
//     },
//     {
//         "id": 2010,
//         "bureaux": "1",
//         "code": "05 02 03 04",
//         "inscrit": "119",
//         "province": "MOUEDJI"
//     },
//     {
//         "id": 2011,
//         "bureaux": "1",
//         "code": "05 02 03 05",
//         "inscrit": "397",
//         "province": "NDENGUILILA"
//     },
//     {
//         "id": 2012,
//         "bureaux": "1",
//         "code": "05 02 03 06",
//         "inscrit": "143",
//         "province": "MANDILOU 2"
//     },
//     {
//         "id": 2013,
//         "bureaux": "9",
//         "code": "05 02 01",
//         "inscrit": "680",
//         "province": "DOUGHEGNY"
//     },
//     {
//         "id": 2014,
//         "bureaux": "14",
//         "code": "05 02 02",
//         "inscrit": "2,331",
//         "province": "DOUSSEGOUSSOU"
//     },
//     {
//         "id": 2015,
//         "bureaux": "6",
//         "code": "05 02 03",
//         "inscrit": "1,253",
//         "province": "MOUGALABA-DOUVOUNGOU"
//     },
//     {
//         "id": 2016,
//         "bureaux": "1",
//         "code": "05 03 00 01",
//         "inscrit": "462",
//         "province": "ECOLE PUBLIQUE KOUANGO"
//     },
//     {
//         "id": 2017,
//         "bureaux": "1",
//         "code": "05 03 00 02",
//         "inscrit": "141",
//         "province": "DISP TCHIOLE-NDEMBET"
//     },
//     {
//         "id": 2018,
//         "bureaux": "1",
//         "code": "05 03 00 03",
//         "inscrit": "454",
//         "province": "MABOUNDA (C E S )"
//     },
//     {
//         "id": 2019,
//         "bureaux": "1",
//         "code": "05 03 00 04",
//         "inscrit": "471",
//         "province": "ECOLE PUBLIQUE (FOUIKA)"
//     },
//     {
//         "id": 2020,
//         "bureaux": "1",
//         "code": "05 03 00 05",
//         "inscrit": "164",
//         "province": "PREFECTURE DOUANES"
//     },
//     {
//         "id": 2021,
//         "bureaux": "1",
//         "code": "05 03 00 06",
//         "inscrit": "391",
//         "province": "BANA AVIATION"
//     },
//     {
//         "id": 2022,
//         "bureaux": "6",
//         "code": "05 03 00",
//         "inscrit": "2,083",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 2023,
//         "bureaux": "1",
//         "code": "05 04 01 01",
//         "inscrit": "200",
//         "province": "SAINT ANTOINE"
//     },
//     {
//         "id": 2024,
//         "bureaux": "1",
//         "code": "05 04 01 02",
//         "inscrit": "116",
//         "province": "DOUMVOU"
//     },
//     {
//         "id": 2025,
//         "bureaux": "1",
//         "code": "05 04 01 03",
//         "inscrit": "25",
//         "province": "MALEMBET (MAMBI 2)"
//     },
//     {
//         "id": 2026,
//         "bureaux": "1",
//         "code": "05 04 01 04",
//         "inscrit": "140",
//         "province": "MAMBI I"
//     },
//     {
//         "id": 2027,
//         "bureaux": "1",
//         "code": "05 04 01 05",
//         "inscrit": "81",
//         "province": "PILAKOUMBI"
//     },
//     {
//         "id": 2028,
//         "bureaux": "1",
//         "code": "05 04 01 06",
//         "inscrit": "64",
//         "province": "BANA-AVIATION (MATCHITI)"
//     },
//     {
//         "id": 2029,
//         "bureaux": "1",
//         "code": "05 04 02 01",
//         "inscrit": "206",
//         "province": "MANGALI"
//     },
//     {
//         "id": 2030,
//         "bureaux": "1",
//         "code": "05 04 02 02",
//         "inscrit": "94",
//         "province": "LOUANDO"
//     },
//     {
//         "id": 2031,
//         "bureaux": "1",
//         "code": "05 04 02 03",
//         "inscrit": "176",
//         "province": "BILANGA"
//     },
//     {
//         "id": 2032,
//         "bureaux": "1",
//         "code": "05 04 02 04",
//         "inscrit": "117",
//         "province": "VEMO"
//     },
//     {
//         "id": 2033,
//         "bureaux": "1",
//         "code": "05 04 02 05",
//         "inscrit": "115",
//         "province": "DITOUBA"
//     },
//     {
//         "id": 2034,
//         "bureaux": "1",
//         "code": "05 04 02 06",
//         "inscrit": "143",
//         "province": "LOUBOMO"
//     },
//     {
//         "id": 2035,
//         "bureaux": "1",
//         "code": "05 04 02 07",
//         "inscrit": "80",
//         "province": "MIVEMBA"
//     },
//     {
//         "id": 2036,
//         "bureaux": "1",
//         "code": "05 04 02 08",
//         "inscrit": "28",
//         "province": "DOUIGNY"
//     },
//     {
//         "id": 2037,
//         "bureaux": "1",
//         "code": "05 04 02 09",
//         "inscrit": "185",
//         "province": "MALOUNGA I"
//     },
//     {
//         "id": 2038,
//         "bureaux": "1",
//         "code": "05 04 02 10",
//         "inscrit": "127",
//         "province": "PANGA"
//     },
//     {
//         "id": 2039,
//         "bureaux": "1",
//         "code": "05 04 02 11",
//         "inscrit": "49",
//         "province": "MALOUNGA II"
//     },
//     {
//         "id": 2040,
//         "bureaux": "1",
//         "code": "05 04 02 12",
//         "inscrit": "17",
//         "province": "MIRENDA"
//     },
//     {
//         "id": 2041,
//         "bureaux": "1",
//         "code": "05 04 03 01",
//         "inscrit": "60",
//         "province": "MOUENDA"
//     },
//     {
//         "id": 2042,
//         "bureaux": "1",
//         "code": "05 04 03 02",
//         "inscrit": "30",
//         "province": "MOULONDO"
//     },
//     {
//         "id": 2043,
//         "bureaux": "1",
//         "code": "05 04 03 03",
//         "inscrit": "24",
//         "province": "MOUGAGARA"
//     },
//     {
//         "id": 2044,
//         "bureaux": "6",
//         "code": "05 04 01",
//         "inscrit": "626",
//         "province": "LOUBETSI-DOUMVOU"
//     },
//     {
//         "id": 2045,
//         "bureaux": "12",
//         "code": "05 04 02",
//         "inscrit": "1,337",
//         "province": "MAYOMBE"
//     },
//     {
//         "id": 2046,
//         "bureaux": "3",
//         "code": "05 04 03",
//         "inscrit": "114",
//         "province": "MOUWAMBI"
//     },
//     {
//         "id": 2047,
//         "bureaux": "1",
//         "code": "05 05 00 01",
//         "inscrit": "292",
//         "province": "EC PUBL A (MOUTOUMBA-DJABA)"
//     },
//     {
//         "id": 2048,
//         "bureaux": "1",
//         "code": "05 05 00 02",
//         "inscrit": "136",
//         "province": "EC PUBL B (MISSAFOU)"
//     },
//     {
//         "id": 2049,
//         "bureaux": "1",
//         "code": "05 05 00 03",
//         "inscrit": "259",
//         "province": "MBAMBA"
//     },
//     {
//         "id": 2050,
//         "bureaux": "1",
//         "code": "05 05 00 04",
//         "inscrit": "246",
//         "province": "EC ST KISITO (MOUGOUNA)"
//     },
//     {
//         "id": 2051,
//         "bureaux": "1",
//         "code": "05 05 00 05",
//         "inscrit": "87",
//         "province": "CES (BILENGUI)"
//     },
//     {
//         "id": 2052,
//         "bureaux": "1",
//         "code": "05 05 00 06",
//         "inscrit": "376",
//         "province": "EC PROT (MOUDIBA PUTU-NENI)"
//     },
//     {
//         "id": 2053,
//         "bureaux": "1",
//         "code": "05 05 00 07",
//         "inscrit": "45",
//         "province": "CENTRE SOCIAL"
//     },
//     {
//         "id": 2054,
//         "bureaux": "1",
//         "code": "05 05 00 08",
//         "inscrit": "255",
//         "province": "BASE PEDAGOGIQUE MIAMBA"
//     },
//     {
//         "id": 2055,
//         "bureaux": "8",
//         "code": "05 05 00",
//         "inscrit": "1,696",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 2056,
//         "bureaux": "1",
//         "code": "05 06 01 01",
//         "inscrit": "89",
//         "province": "ECOLE NGUENDA"
//     },
//     {
//         "id": 2057,
//         "bureaux": "1",
//         "code": "05 06 01 02",
//         "inscrit": "46",
//         "province": "MABALA"
//     },
//     {
//         "id": 2058,
//         "bureaux": "1",
//         "code": "05 06 01 03",
//         "inscrit": "147",
//         "province": "ECOLE MANDILOU"
//     },
//     {
//         "id": 2059,
//         "bureaux": "1",
//         "code": "05 06 02 01",
//         "inscrit": "56",
//         "province": "NGAGALA"
//     },
//     {
//         "id": 2060,
//         "bureaux": "1",
//         "code": "05 06 02 02",
//         "inscrit": "153",
//         "province": "ECOLE DOUGASSOU"
//     },
//     {
//         "id": 2061,
//         "bureaux": "1",
//         "code": "05 06 02 03",
//         "inscrit": "221",
//         "province": "EC MOUKOKO-MBAKA"
//     },
//     {
//         "id": 2062,
//         "bureaux": "1",
//         "code": "05 06 02 04",
//         "inscrit": "77",
//         "province": "MBILA-NYAMBI"
//     },
//     {
//         "id": 2063,
//         "bureaux": "1",
//         "code": "05 06 03 01",
//         "inscrit": "255",
//         "province": "MOKABE"
//     },
//     {
//         "id": 2064,
//         "bureaux": "1",
//         "code": "05 06 03 02",
//         "inscrit": "430",
//         "province": "RINA-NZALA"
//     },
//     {
//         "id": 2065,
//         "bureaux": "1",
//         "code": "05 06 03 03",
//         "inscrit": "42",
//         "province": "BOUNOUNGA"
//     },
//     {
//         "id": 2066,
//         "bureaux": "1",
//         "code": "05 06 03 04",
//         "inscrit": "255",
//         "province": "MOURINDI"
//     },
//     {
//         "id": 2067,
//         "bureaux": "1",
//         "code": "05 06 03 05",
//         "inscrit": "142",
//         "province": "MOUKOUALOU"
//     },
//     {
//         "id": 2068,
//         "bureaux": "1",
//         "code": "05 06 03 06",
//         "inscrit": "32",
//         "province": "BOUTEMBI"
//     },
//     {
//         "id": 2069,
//         "bureaux": "1",
//         "code": "05 06 03 07",
//         "inscrit": "20",
//         "province": "BOUGOULOU"
//     },
//     {
//         "id": 2070,
//         "bureaux": "1",
//         "code": "05 06 03 08",
//         "inscrit": "9",
//         "province": "KONDZI"
//     },
//     {
//         "id": 2071,
//         "bureaux": "1",
//         "code": "05 06 03 09",
//         "inscrit": "52",
//         "province": "DOUSSALA"
//     },
//     {
//         "id": 2072,
//         "bureaux": "1",
//         "code": "05 06 03 10",
//         "inscrit": "41",
//         "province": "PAHOU-NZAMBI"
//     },
//     {
//         "id": 2073,
//         "bureaux": "1",
//         "code": "05 06 03 11",
//         "inscrit": "18",
//         "province": "MBOUNGOU"
//     },
//     {
//         "id": 2074,
//         "bureaux": "1",
//         "code": "05 06 03 12",
//         "inscrit": "59",
//         "province": "MIVEMBA-MBORTO"
//     },
//     {
//         "id": 2075,
//         "bureaux": "1",
//         "code": "05 06 03 13",
//         "inscrit": "56",
//         "province": "MALOLO"
//     },
//     {
//         "id": 2076,
//         "bureaux": "1",
//         "code": "05 06 03 14",
//         "inscrit": "47",
//         "province": "MOUSSAMOU-KOUGOU"
//     },
//     {
//         "id": 2077,
//         "bureaux": "3",
//         "code": "05 06 01",
//         "inscrit": "282",
//         "province": "DOUAMI-MUEMBI"
//     },
//     {
//         "id": 2078,
//         "bureaux": "4",
//         "code": "05 06 02",
//         "inscrit": "507",
//         "province": "DOUBANDJI"
//     },
//     {
//         "id": 2079,
//         "bureaux": "14",
//         "code": "05 06 03",
//         "inscrit": "1,458",
//         "province": "MIGAMBA-YARA"
//     },
//     {
//         "id": 2080,
//         "bureaux": "1",
//         "code": "05 07 00 01",
//         "inscrit": "186",
//         "province": "ILOUNGA"
//     },
//     {
//         "id": 2081,
//         "bureaux": "1",
//         "code": "05 07 00 02",
//         "inscrit": "114",
//         "province": "ECOLE PUB NGONGO"
//     },
//     {
//         "id": 2082,
//         "bureaux": "1",
//         "code": "05 07 00 03",
//         "inscrit": "108",
//         "province": "BAMBOMA"
//     },
//     {
//         "id": 2083,
//         "bureaux": "1",
//         "code": "05 07 00 04",
//         "inscrit": "173",
//         "province": "DONGO"
//     },
//     {
//         "id": 2084,
//         "bureaux": "1",
//         "code": "05 07 00 05",
//         "inscrit": "213",
//         "province": "DOUNDZANZA"
//     },
//     {
//         "id": 2085,
//         "bureaux": "1",
//         "code": "05 07 00 06",
//         "inscrit": "87",
//         "province": "BIKOKO"
//     },
//     {
//         "id": 2086,
//         "bureaux": "6",
//         "code": "05 07 00",
//         "inscrit": "881",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 2087,
//         "bureaux": "1",
//         "code": "05 08 02 01",
//         "inscrit": "104",
//         "province": "DOUANO I"
//     },
//     {
//         "id": 2088,
//         "bureaux": "1",
//         "code": "05 08 02 02",
//         "inscrit": "212",
//         "province": "NYALI"
//     },
//     {
//         "id": 2089,
//         "bureaux": "1",
//         "code": "05 08 02 03",
//         "inscrit": "72",
//         "province": "DOUVOULI"
//     },
//     {
//         "id": 2090,
//         "bureaux": "1",
//         "code": "05 08 02 04",
//         "inscrit": "261",
//         "province": "PANZA"
//     },
//     {
//         "id": 2091,
//         "bureaux": "1",
//         "code": "05 08 02 05",
//         "inscrit": "114",
//         "province": "DOUANO II"
//     },
//     {
//         "id": 2092,
//         "bureaux": "1",
//         "code": "05 08 03 01",
//         "inscrit": "14",
//         "province": "MBANGA"
//     },
//     {
//         "id": 2093,
//         "bureaux": "1",
//         "code": "05 08 03 02",
//         "inscrit": "19",
//         "province": "KOUMOU-DOUSSALA"
//     },
//     {
//         "id": 2094,
//         "bureaux": "1",
//         "code": "05 08 03 03",
//         "inscrit": "88",
//         "province": "NZINGA"
//     },
//     {
//         "id": 2095,
//         "bureaux": "1",
//         "code": "05 08 03 04",
//         "inscrit": "14",
//         "province": "MOUNGOUDI"
//     },
//     {
//         "id": 2096,
//         "bureaux": "1",
//         "code": "05 08 03 05",
//         "inscrit": "60",
//         "province": "BANDA-MAMBA"
//     },
//     {
//         "id": 2097,
//         "bureaux": "1",
//         "code": "05 08 03 06",
//         "inscrit": "27",
//         "province": "CHANTIER DOUVONO"
//     },
//     {
//         "id": 2098,
//         "bureaux": "1",
//         "code": "05 08 03 07",
//         "inscrit": "26",
//         "province": "KOTA"
//     },
//     {
//         "id": 2099,
//         "bureaux": "5",
//         "code": "05 08 02",
//         "inscrit": "763",
//         "province": "HAUTE DOLA"
//     },
//     {
//         "id": 2100,
//         "bureaux": "7",
//         "code": "05 08 03",
//         "inscrit": "248",
//         "province": "HAUTE NGONGO"
//     },
//     {
//         "id": 2101,
//         "bureaux": "1",
//         "code": "05 09 00 01",
//         "inscrit": "181",
//         "province": "ECOLE PUBLIQUE CTR-VILLE)"
//     },
//     {
//         "id": 2102,
//         "bureaux": "1",
//         "code": "05 09 00 02",
//         "inscrit": "39",
//         "province": "GNENZE MOGNO"
//     },
//     {
//         "id": 2103,
//         "bureaux": "1",
//         "code": "05 09 00 03",
//         "inscrit": "54",
//         "province": "MINKOUMI"
//     },
//     {
//         "id": 2104,
//         "bureaux": "1",
//         "code": "05 09 00 04",
//         "inscrit": "139",
//         "province": "TALA-NZAMBI"
//     },
//     {
//         "id": 2105,
//         "bureaux": "1",
//         "code": "05 10 03 01",
//         "inscrit": "31",
//         "province": "TCHIANZI"
//     },
//     {
//         "id": 2106,
//         "bureaux": "1",
//         "code": "05 10 03 02",
//         "inscrit": "55",
//         "province": "YOYO"
//     },
//     {
//         "id": 2107,
//         "bureaux": "1",
//         "code": "05 10 03 03",
//         "inscrit": "38",
//         "province": "TIYA"
//     },
//     {
//         "id": 2108,
//         "bureaux": "1",
//         "code": "05 10 03 04",
//         "inscrit": "35",
//         "province": "RINA NZALA"
//     },
//     {
//         "id": 2109,
//         "bureaux": "1",
//         "code": "05 10 03 05",
//         "inscrit": "53",
//         "province": "MALEMBE"
//     },
//     {
//         "id": 2110,
//         "bureaux": "2",
//         "code": "05 10 02",
//         "inscrit": "84",
//         "province": "LAGUNE"
//     },
//     {
//         "id": 2111,
//         "bureaux": "5",
//         "code": "05 10 03",
//         "inscrit": "212",
//         "province": "LOUZIBI"
//     },
//     {
//         "id": 2112,
//         "bureaux": "1",
//         "code": "05 11 00 01",
//         "inscrit": "219",
//         "province": "CENTRE VILLE"
//     },
//     {
//         "id": 2113,
//         "bureaux": "1",
//         "code": "05 11 00 02",
//         "inscrit": "132",
//         "province": "MAGONGA"
//     },
//     {
//         "id": 2114,
//         "bureaux": "1",
//         "code": "05 11 00 03",
//         "inscrit": "248",
//         "province": "DOUMANGA"
//     },
//     {
//         "id": 2115,
//         "bureaux": "3",
//         "code": "05 11 00",
//         "inscrit": "599",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 2116,
//         "bureaux": "1",
//         "code": "05 12 01 01",
//         "inscrit": "112",
//         "province": "DOUVOYE"
//     },
//     {
//         "id": 2117,
//         "bureaux": "1",
//         "code": "05 12 01 02",
//         "inscrit": "127",
//         "province": "BAYADI"
//     },
//     {
//         "id": 2118,
//         "bureaux": "1",
//         "code": "05 12 01 03",
//         "inscrit": "40",
//         "province": "IKOLI"
//     },
//     {
//         "id": 2119,
//         "bureaux": "1",
//         "code": "05 12 01 04",
//         "inscrit": "142",
//         "province": "MIASSA"
//     },
//     {
//         "id": 2120,
//         "bureaux": "1",
//         "code": "05 12 01 05",
//         "inscrit": "54",
//         "province": "BIGOUNDOU-GUIHA"
//     },
//     {
//         "id": 2121,
//         "bureaux": "1",
//         "code": "05 12 01 06",
//         "inscrit": "104",
//         "province": "MAHANDI-MONUMBUMBA"
//     },
//     {
//         "id": 2122,
//         "bureaux": "1",
//         "code": "05 12 01 07",
//         "inscrit": "111",
//         "province": "GNOUMBITSI"
//     },
//     {
//         "id": 2123,
//         "bureaux": "1",
//         "code": "05 12 01 08",
//         "inscrit": "28",
//         "province": "BIKAMBA"
//     },
//     {
//         "id": 2124,
//         "bureaux": "1",
//         "code": "05 12 01 09",
//         "inscrit": "68",
//         "province": "PC NYANGA-S-I-AT"
//     },
//     {
//         "id": 2125,
//         "bureaux": "1",
//         "code": "05 12 02 01",
//         "inscrit": "19",
//         "province": "MOULENGUI-BINDZA"
//     },
//     {
//         "id": 2126,
//         "bureaux": "1",
//         "code": "05 12 02 02",
//         "inscrit": "1",
//         "province": "VOUNGOU SO.GA.DEL"
//     },
//     {
//         "id": 2127,
//         "bureaux": "1",
//         "code": "05 12 02 03",
//         "inscrit": "117",
//         "province": "DILEMBA"
//     },
//     {
//         "id": 2128,
//         "bureaux": "1",
//         "code": "05 12 02 04",
//         "inscrit": "77",
//         "province": "RINA-NZALA"
//     },
//     {
//         "id": 2129,
//         "bureaux": "1",
//         "code": "05 12 02 05",
//         "inscrit": "137",
//         "province": "DIBOR-BIBORA"
//     },
//     {
//         "id": 2130,
//         "bureaux": "9",
//         "code": "05 12 01",
//         "inscrit": "786",
//         "province": "DOUKI"
//     },
//     {
//         "id": 2131,
//         "bureaux": "5",
//         "code": "05 12 02",
//         "inscrit": "351",
//         "province": "VOUNGOU"
//     },
//     {
//         "id": 2132,
//         "bureaux": "26",
//         "code": "501",
//         "inscrit": "8,524",
//         "province": "TCHIBANGA"
//     },
//     {
//         "id": 2133,
//         "bureaux": "29",
//         "code": "502",
//         "inscrit": "4,264",
//         "province": "MOUGOUTSI (TCHIBANGA)"
//     },
//     {
//         "id": 2134,
//         "bureaux": "6",
//         "code": "503",
//         "inscrit": "2,083",
//         "province": "MAYUMBA"
//     },
//     {
//         "id": 2135,
//         "bureaux": "21",
//         "code": "504",
//         "inscrit": "2,077",
//         "province": "BASSE-BANIO (MAYUMBA)"
//     },
//     {
//         "id": 2136,
//         "bureaux": "8",
//         "code": "505",
//         "inscrit": "1,696",
//         "province": "MOABI"
//     },
//     {
//         "id": 2137,
//         "bureaux": "21",
//         "code": "506",
//         "inscrit": "2,247",
//         "province": "DOUIGNY (MOABI)"
//     },
//     {
//         "id": 2138,
//         "bureaux": "6",
//         "code": "507",
//         "inscrit": "881",
//         "province": "MABANDA"
//     },
//     {
//         "id": 2139,
//         "bureaux": "12",
//         "code": "508",
//         "inscrit": "1,011",
//         "province": "DOUTSILA (MABANDA)"
//     },
//     {
//         "id": 2140,
//         "bureaux": "4",
//         "code": "509",
//         "inscrit": "413",
//         "province": "NDINDI"
//     },
//     {
//         "id": 2141,
//         "bureaux": "7",
//         "code": "510",
//         "inscrit": "296",
//         "province": "HAUTE-BANIO (NDINDI)"
//     },
//     {
//         "id": 2142,
//         "bureaux": "3",
//         "code": "511",
//         "inscrit": "599",
//         "province": "MOULENGUI-BINDZA"
//     },
//     {
//         "id": 2143,
//         "bureaux": "14",
//         "code": "512",
//         "inscrit": "1,137",
//         "province": "MONGO (MOULENGUI-BINDZA)"
//     },
//     {
//         "id": 2144,
//         "bureaux": "1",
//         "code": "06 01 01 01",
//         "inscrit": "260",
//         "province": "PALAIS DE JUSTICE"
//     },
//     {
//         "id": 2145,
//         "bureaux": "2",
//         "code": "06 01 01 02",
//         "inscrit": "824",
//         "province": "ECOLE COMMUNALE A"
//     },
//     {
//         "id": 2146,
//         "bureaux": "3",
//         "code": "06 01 01 03",
//         "inscrit": "1,318",
//         "province": "ECOLE PUBL. MBOLO 3"
//     },
//     {
//         "id": 2147,
//         "bureaux": "1",
//         "code": "06 01 01 04",
//         "inscrit": "79",
//         "province": "ASS DEPARTEMENTALE 1"
//     },
//     {
//         "id": 2148,
//         "bureaux": "1",
//         "code": "06 01 01 05",
//         "inscrit": "281",
//         "province": "ECOLE PUBL. EPASSENDJE I"
//     },
//     {
//         "id": 2149,
//         "bureaux": "1",
//         "code": "06 01 01 06",
//         "inscrit": "498",
//         "province": "ECOLE DE SANTE"
//     },
//     {
//         "id": 2150,
//         "bureaux": "2",
//         "code": "06 01 01 07",
//         "inscrit": "575",
//         "province": "ECOLE PUBL. EPASSENDJE II"
//     },
//     {
//         "id": 2151,
//         "bureaux": "1",
//         "code": "06 01 01 08",
//         "inscrit": "194",
//         "province": "IYOKO-NGOTA RESIDENCE (CHEF Q.)"
//     },
//     {
//         "id": 2152,
//         "bureaux": "3",
//         "code": "06 01 01 09",
//         "inscrit": "1,144",
//         "province": "ECOLE ZOATAB"
//     },
//     {
//         "id": 2153,
//         "bureaux": "1",
//         "code": "06 01 01 10",
//         "inscrit": "167",
//         "province": "MBOLO 2"
//     },
//     {
//         "id": 2154,
//         "bureaux": "2",
//         "code": "06 01 01 11",
//         "inscrit": "679",
//         "province": "EBANDANGOYE"
//     },
//     {
//         "id": 2155,
//         "bureaux": "1",
//         "code": "06 01 01 12",
//         "inscrit": "58",
//         "province": "MBEZA"
//     },
//     {
//         "id": 2156,
//         "bureaux": "1",
//         "code": "06 01 01 13",
//         "inscrit": "152",
//         "province": "EDOUNG AVION 1"
//     },
//     {
//         "id": 2157,
//         "bureaux": "2",
//         "code": "06 01 02 01",
//         "inscrit": "719",
//         "province": "COLLEGE ESSIA"
//     },
//     {
//         "id": 2158,
//         "bureaux": "4",
//         "code": "06 01 02 02",
//         "inscrit": "1,674",
//         "province": "ECOLE PUBL. MARIEN NGOUABI"
//     },
//     {
//         "id": 2159,
//         "bureaux": "1",
//         "code": "06 01 02 03",
//         "inscrit": "234",
//         "province": "RESID. (CHEF Q.) NZING-MEYONG"
//     },
//     {
//         "id": 2160,
//         "bureaux": "1",
//         "code": "06 01 02 04",
//         "inscrit": "96",
//         "province": "RESID. (CHEF Q.) ANDOCK"
//     },
//     {
//         "id": 2161,
//         "bureaux": "1",
//         "code": "06 01 02 05",
//         "inscrit": "141",
//         "province": "RESIDENCE (CHEF Q.) MAYIGA"
//     },
//     {
//         "id": 2162,
//         "bureaux": "1",
//         "code": "06 01 02 06",
//         "inscrit": "316",
//         "province": "EC. PUBL. D EKOWONG"
//     },
//     {
//         "id": 2163,
//         "bureaux": "1",
//         "code": "06 01 02 07",
//         "inscrit": "138",
//         "province": "RESID. CHEF QUART. LOALOA"
//     },
//     {
//         "id": 2164,
//         "bureaux": "1",
//         "code": "06 01 02 08",
//         "inscrit": "29",
//         "province": "EDOUNG AVION 2"
//     },
//     {
//         "id": 2165,
//         "bureaux": "20",
//         "code": "06 01 01",
//         "inscrit": "6,229",
//         "province": "1ER  ARRONDISSEMENT"
//     },
//     {
//         "id": 2166,
//         "bureaux": "12",
//         "code": "06 01 02",
//         "inscrit": "3,347",
//         "province": "2EME ARRONDISSEMENT"
//     },
//     {
//         "id": 2167,
//         "bureaux": "1",
//         "code": "06 02 01 01",
//         "inscrit": "133",
//         "province": "ETAKANYABE"
//     },
//     {
//         "id": 2168,
//         "bureaux": "1",
//         "code": "06 02 01 02",
//         "inscrit": "168",
//         "province": "MBOMO"
//     },
//     {
//         "id": 2169,
//         "bureaux": "1",
//         "code": "06 02 01 03",
//         "inscrit": "162",
//         "province": "NTSIETE"
//     },
//     {
//         "id": 2170,
//         "bureaux": "1",
//         "code": "06 02 01 04",
//         "inscrit": "215",
//         "province": "MBONDOU"
//     },
//     {
//         "id": 2171,
//         "bureaux": "1",
//         "code": "06 02 01 05",
//         "inscrit": "182",
//         "province": "EKOBAKOBA"
//     },
//     {
//         "id": 2172,
//         "bureaux": "1",
//         "code": "06 02 01 06",
//         "inscrit": "171",
//         "province": "INDOMBO"
//     },
//     {
//         "id": 2173,
//         "bureaux": "1",
//         "code": "06 02 02 01",
//         "inscrit": "112",
//         "province": "MAYELA"
//     },
//     {
//         "id": 2174,
//         "bureaux": "1",
//         "code": "06 02 02 02",
//         "inscrit": "107",
//         "province": "LATTA"
//     },
//     {
//         "id": 2175,
//         "bureaux": "1",
//         "code": "06 02 02 03",
//         "inscrit": "81",
//         "province": "BOMBENDA"
//     },
//     {
//         "id": 2176,
//         "bureaux": "1",
//         "code": "06 02 02 04",
//         "inscrit": "67",
//         "province": "LA SCIERIE"
//     },
//     {
//         "id": 2177,
//         "bureaux": "1",
//         "code": "06 02 02 05",
//         "inscrit": "52",
//         "province": "PONT-ZADIE"
//     },
//     {
//         "id": 2178,
//         "bureaux": "1",
//         "code": "06 02 03 01",
//         "inscrit": "366",
//         "province": "MOHOBA-MOZEHE"
//     },
//     {
//         "id": 2179,
//         "bureaux": "1",
//         "code": "06 02 03 02",
//         "inscrit": "132",
//         "province": "MBELA"
//     },
//     {
//         "id": 2180,
//         "bureaux": "1",
//         "code": "06 02 03 03",
//         "inscrit": "130",
//         "province": "HENDJE"
//     },
//     {
//         "id": 2181,
//         "bureaux": "1",
//         "code": "06 02 03 04",
//         "inscrit": "218",
//         "province": "ZOOLENDE"
//     },
//     {
//         "id": 2182,
//         "bureaux": "1",
//         "code": "06 02 03 05",
//         "inscrit": "144",
//         "province": "MELONDOMIOLE"
//     },
//     {
//         "id": 2183,
//         "bureaux": "1",
//         "code": "06 02 03 06",
//         "inscrit": "91",
//         "province": "TROUWAYA"
//     },
//     {
//         "id": 2184,
//         "bureaux": "1",
//         "code": "06 02 03 07",
//         "inscrit": "282",
//         "province": "MAKEBE"
//     },
//     {
//         "id": 2185,
//         "bureaux": "1",
//         "code": "06 02 03 08",
//         "inscrit": "210",
//         "province": "BAKWAKA"
//     },
//     {
//         "id": 2186,
//         "bureaux": "1",
//         "code": "06 02 03 09",
//         "inscrit": "13",
//         "province": "YOKO-MILIEU"
//     },
//     {
//         "id": 2187,
//         "bureaux": "1",
//         "code": "06 02 03 10",
//         "inscrit": "51",
//         "province": "COCOMOICALA"
//     },
//     {
//         "id": 2188,
//         "bureaux": "1",
//         "code": "06 02 04 01",
//         "inscrit": "116",
//         "province": "NTSIBELONG I"
//     },
//     {
//         "id": 2189,
//         "bureaux": "1",
//         "code": "06 02 04 02",
//         "inscrit": "164",
//         "province": "MBESS"
//     },
//     {
//         "id": 2190,
//         "bureaux": "1",
//         "code": "06 02 04 03",
//         "inscrit": "113",
//         "province": "MINKOUALA"
//     },
//     {
//         "id": 2191,
//         "bureaux": "1",
//         "code": "06 02 04 04",
//         "inscrit": "30",
//         "province": "ADOUE"
//     },
//     {
//         "id": 2192,
//         "bureaux": "1",
//         "code": "06 02 04 05",
//         "inscrit": "218",
//         "province": "NTSENGKELE"
//     },
//     {
//         "id": 2193,
//         "bureaux": "1",
//         "code": "06 02 04 06",
//         "inscrit": "80",
//         "province": "NTSIBELONG II"
//     },
//     {
//         "id": 2194,
//         "bureaux": "1",
//         "code": "06 02 05 01",
//         "inscrit": "203",
//         "province": "MASSAHA"
//     },
//     {
//         "id": 2195,
//         "bureaux": "1",
//         "code": "06 02 05 02",
//         "inscrit": "115",
//         "province": "ZOOLENDE"
//     },
//     {
//         "id": 2196,
//         "bureaux": "1",
//         "code": "06 02 05 03",
//         "inscrit": "262",
//         "province": "BATOUALA I"
//     },
//     {
//         "id": 2197,
//         "bureaux": "1",
//         "code": "06 02 05 04",
//         "inscrit": "189",
//         "province": "NZE"
//     },
//     {
//         "id": 2198,
//         "bureaux": "1",
//         "code": "06 02 05 05",
//         "inscrit": "138",
//         "province": "BATOUALA II"
//     },
//     {
//         "id": 2199,
//         "bureaux": "1",
//         "code": "06 02 05 06",
//         "inscrit": "42",
//         "province": "NGAZI"
//     },
//     {
//         "id": 2200,
//         "bureaux": "1",
//         "code": "06 02 06 01",
//         "inscrit": "121",
//         "province": "MESSEB"
//     },
//     {
//         "id": 2201,
//         "bureaux": "1",
//         "code": "06 02 06 02",
//         "inscrit": "71",
//         "province": "MANANGA"
//     },
//     {
//         "id": 2202,
//         "bureaux": "1",
//         "code": "06 02 06 03",
//         "inscrit": "83",
//         "province": "NDJENG"
//     },
//     {
//         "id": 2203,
//         "bureaux": "1",
//         "code": "06 02 06 04",
//         "inscrit": "97",
//         "province": "ABOR"
//     },
//     {
//         "id": 2204,
//         "bureaux": "1",
//         "code": "06 02 06 05",
//         "inscrit": "63",
//         "province": "MEKOB"
//     },
//     {
//         "id": 2205,
//         "bureaux": "1",
//         "code": "06 02 07 01",
//         "inscrit": "212",
//         "province": "MVADHY"
//     },
//     {
//         "id": 2206,
//         "bureaux": "1",
//         "code": "06 02 07 02",
//         "inscrit": "245",
//         "province": "MVADHY II"
//     },
//     {
//         "id": 2207,
//         "bureaux": "1",
//         "code": "06 02 07 03",
//         "inscrit": "184",
//         "province": "MAYIBOUTH I"
//     },
//     {
//         "id": 2208,
//         "bureaux": "1",
//         "code": "06 02 07 04",
//         "inscrit": "181",
//         "province": "MAYIBOUTH II"
//     },
//     {
//         "id": 2209,
//         "bureaux": "1",
//         "code": "06 02 07 05",
//         "inscrit": "36",
//         "province": "MBONDO"
//     },
//     {
//         "id": 2210,
//         "bureaux": "6",
//         "code": "06 02 01",
//         "inscrit": "1,031",
//         "province": "ABOYE"
//     },
//     {
//         "id": 2211,
//         "bureaux": "5",
//         "code": "06 02 02",
//         "inscrit": "419",
//         "province": "LIBOUMBA"
//     },
//     {
//         "id": 2212,
//         "bureaux": "10",
//         "code": "06 02 03",
//         "inscrit": "1,637",
//         "province": "MOUNIANDZI(DIST MAKEBE-BAKWAKA"
//     },
//     {
//         "id": 2213,
//         "bureaux": "6",
//         "code": "06 02 04",
//         "inscrit": "721",
//         "province": "NTANG LOULI"
//     },
//     {
//         "id": 2214,
//         "bureaux": "6",
//         "code": "06 02 05",
//         "inscrit": "949",
//         "province": "BONGA (DISTRICT DE BATOUALA"
//     },
//     {
//         "id": 2215,
//         "bureaux": "5",
//         "code": "06 02 06",
//         "inscrit": "435",
//         "province": "IVINDO (DISTRICT DE MVADHY)"
//     },
//     {
//         "id": 2216,
//         "bureaux": "5",
//         "code": "06 02 07",
//         "inscrit": "858",
//         "province": "IYEZE"
//     },
//     {
//         "id": 2217,
//         "bureaux": "1",
//         "code": "06 03 00 01",
//         "inscrit": "461",
//         "province": "C.E.S"
//     },
//     {
//         "id": 2218,
//         "bureaux": "1",
//         "code": "06 03 00 02",
//         "inscrit": "445",
//         "province": "ATSOMBIAL"
//     },
//     {
//         "id": 2219,
//         "bureaux": "1",
//         "code": "06 03 00 03",
//         "inscrit": "300",
//         "province": "LINZE"
//     },
//     {
//         "id": 2220,
//         "bureaux": "1",
//         "code": "06 03 00 04",
//         "inscrit": "259",
//         "province": "MASSOUKOU  ET  KEKELE"
//     },
//     {
//         "id": 2221,
//         "bureaux": "1",
//         "code": "06 03 00 05",
//         "inscrit": "330",
//         "province": "TRANSGABONAIS"
//     },
//     {
//         "id": 2222,
//         "bureaux": "1",
//         "code": "06 03 00 06",
//         "inscrit": "306",
//         "province": "CENTRE VILLE I"
//     },
//     {
//         "id": 2223,
//         "bureaux": "1",
//         "code": "06 03 00 07",
//         "inscrit": "194",
//         "province": "CENTRE VILLE II"
//     },
//     {
//         "id": 2224,
//         "bureaux": "7",
//         "code": "06 03 00",
//         "inscrit": "2,295",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 2225,
//         "bureaux": "1",
//         "code": "06 04 01 01",
//         "inscrit": "241",
//         "province": "DJIDJI 1 ET 2"
//     },
//     {
//         "id": 2226,
//         "bureaux": "1",
//         "code": "06 04 01 02",
//         "inscrit": "221",
//         "province": "LOLO 1 ET 2"
//     },
//     {
//         "id": 2227,
//         "bureaux": "1",
//         "code": "06 04 01 03",
//         "inscrit": "235",
//         "province": "LASSIO ET MATORA"
//     },
//     {
//         "id": 2228,
//         "bureaux": "1",
//         "code": "06 04 01 04",
//         "inscrit": "228",
//         "province": "YEN"
//     },
//     {
//         "id": 2229,
//         "bureaux": "1",
//         "code": "06 04 01 05",
//         "inscrit": "301",
//         "province": "LABOKA 1 ET 2"
//     },
//     {
//         "id": 2230,
//         "bureaux": "1",
//         "code": "06 04 01 06",
//         "inscrit": "455",
//         "province": "OUSSA ET MBOMAO"
//     },
//     {
//         "id": 2231,
//         "bureaux": "1",
//         "code": "06 04 02 01",
//         "inscrit": "38",
//         "province": "BALEM 1 ET 2"
//     },
//     {
//         "id": 2232,
//         "bureaux": "1",
//         "code": "06 04 02 02",
//         "inscrit": "55",
//         "province": "INZANZA"
//     },
//     {
//         "id": 2233,
//         "bureaux": "1",
//         "code": "06 04 02 03",
//         "inscrit": "161",
//         "province": "POTEAU-CIMENT & KANK (ABENELANG)"
//     },
//     {
//         "id": 2234,
//         "bureaux": "1",
//         "code": "06 04 02 04",
//         "inscrit": "188",
//         "province": "ROUGIER-IVINDO (MANGOUMBA)"
//     },
//     {
//         "id": 2235,
//         "bureaux": "1",
//         "code": "06 04 02 05",
//         "inscrit": "46",
//         "province": "MOUYABI"
//     },
//     {
//         "id": 2236,
//         "bureaux": "1",
//         "code": "06 04 02 06",
//         "inscrit": "37",
//         "province": "ASSALA- MIELE"
//     },
//     {
//         "id": 2237,
//         "bureaux": "1",
//         "code": "06 04 03 01",
//         "inscrit": "15",
//         "province": "KONGO-MBOUMBA"
//     },
//     {
//         "id": 2238,
//         "bureaux": "1",
//         "code": "06 04 03 02",
//         "inscrit": "333",
//         "province": "EC- PUB- LOPE-CENTRE"
//     },
//     {
//         "id": 2239,
//         "bureaux": "1",
//         "code": "06 04 03 03",
//         "inscrit": "71",
//         "province": "KAZAMABIKA"
//     },
//     {
//         "id": 2240,
//         "bureaux": "1",
//         "code": "06 04 03 04",
//         "inscrit": "61",
//         "province": "ASCHOUKA"
//     },
//     {
//         "id": 2241,
//         "bureaux": "1",
//         "code": "06 04 03 05",
//         "inscrit": "41",
//         "province": "AYEM-GARE"
//     },
//     {
//         "id": 2242,
//         "bureaux": "1",
//         "code": "06 04 04 01",
//         "inscrit": "111",
//         "province": "AKOBA-BISSOBILAM"
//     },
//     {
//         "id": 2243,
//         "bureaux": "1",
//         "code": "06 04 04 02",
//         "inscrit": "180",
//         "province": "MBADI (AKIGUELAM)"
//     },
//     {
//         "id": 2244,
//         "bureaux": "1",
//         "code": "06 04 04 03",
//         "inscrit": "83",
//         "province": "NZAFIENG"
//     },
//     {
//         "id": 2245,
//         "bureaux": "1",
//         "code": "06 04 04 04",
//         "inscrit": "38",
//         "province": "BALIMBA"
//     },
//     {
//         "id": 2246,
//         "bureaux": "1",
//         "code": "06 04 05 01",
//         "inscrit": "70",
//         "province": "MAKOGHE"
//     },
//     {
//         "id": 2247,
//         "bureaux": "1",
//         "code": "06 04 05 02",
//         "inscrit": "114",
//         "province": "MIKONGO I ET II"
//     },
//     {
//         "id": 2248,
//         "bureaux": "1",
//         "code": "06 04 05 04",
//         "inscrit": "54",
//         "province": "MASSENGUELANI"
//     },
//     {
//         "id": 2249,
//         "bureaux": "1",
//         "code": "06 04 05 05",
//         "inscrit": "9",
//         "province": "PK ZERO"
//     },
//     {
//         "id": 2250,
//         "bureaux": "6",
//         "code": "06 04 01",
//         "inscrit": "1,681",
//         "province": "FIENG OKANO"
//     },
//     {
//         "id": 2251,
//         "bureaux": "6",
//         "code": "06 04 02",
//         "inscrit": "525",
//         "province": "LEZINDA"
//     },
//     {
//         "id": 2252,
//         "bureaux": "5",
//         "code": "06 04 03",
//         "inscrit": "521",
//         "province": "LELEDI (DISTRICT MOKEKO)"
//     },
//     {
//         "id": 2253,
//         "bureaux": "4",
//         "code": "06 04 04",
//         "inscrit": "412",
//         "province": "NKE"
//     },
//     {
//         "id": 2254,
//         "bureaux": "4",
//         "code": "06 04 05",
//         "inscrit": "247",
//         "province": "OFFOUE AVAL"
//     },
//     {
//         "id": 2255,
//         "bureaux": "1",
//         "code": "06 05 00 01",
//         "inscrit": "157",
//         "province": "C.E.S"
//     },
//     {
//         "id": 2256,
//         "bureaux": "1",
//         "code": "06 05 00 02",
//         "inscrit": "203",
//         "province": "ECOLE  PUBLIQUE"
//     },
//     {
//         "id": 2257,
//         "bureaux": "1",
//         "code": "06 05 00 03",
//         "inscrit": "338",
//         "province": "MBELAKEMBE"
//     },
//     {
//         "id": 2258,
//         "bureaux": "1",
//         "code": "06 05 00 04",
//         "inscrit": "418",
//         "province": "BATOUALA"
//     },
//     {
//         "id": 2259,
//         "bureaux": "1",
//         "code": "06 05 00 05",
//         "inscrit": "305",
//         "province": "PARIS BOUYON"
//     },
//     {
//         "id": 2260,
//         "bureaux": "2",
//         "code": "06 05 00 06",
//         "inscrit": "529",
//         "province": "VIE-CHERE (NGOLAMAYONG)"
//     },
//     {
//         "id": 2261,
//         "bureaux": "1",
//         "code": "06 05 00 07",
//         "inscrit": "103",
//         "province": "DJIBO-MAYEKA"
//     },
//     {
//         "id": 2262,
//         "bureaux": "1",
//         "code": "06 05 00 08",
//         "inscrit": "203",
//         "province": "MBEMBEZALE"
//     },
//     {
//         "id": 2263,
//         "bureaux": "1",
//         "code": "06 05 00 09",
//         "inscrit": "217",
//         "province": "VIE-DURE"
//     },
//     {
//         "id": 2264,
//         "bureaux": "10",
//         "code": "06 05 00",
//         "inscrit": "2,473",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 2265,
//         "bureaux": "1",
//         "code": "06 06 01 01",
//         "inscrit": "164",
//         "province": "ETAKANGAYE"
//     },
//     {
//         "id": 2266,
//         "bureaux": "1",
//         "code": "06 06 01 02",
//         "inscrit": "230",
//         "province": "IMBONG"
//     },
//     {
//         "id": 2267,
//         "bureaux": "1",
//         "code": "06 06 01 03",
//         "inscrit": "240",
//         "province": "IBEA"
//     },
//     {
//         "id": 2268,
//         "bureaux": "1",
//         "code": "06 06 01 04",
//         "inscrit": "226",
//         "province": "ZOULA"
//     },
//     {
//         "id": 2269,
//         "bureaux": "1",
//         "code": "06 06 01 05",
//         "inscrit": "62",
//         "province": "TOUMBI II"
//     },
//     {
//         "id": 2270,
//         "bureaux": "1",
//         "code": "06 06 01 06",
//         "inscrit": "71",
//         "province": "EGO-POMA"
//     },
//     {
//         "id": 2271,
//         "bureaux": "1",
//         "code": "06 06 01 07",
//         "inscrit": "95",
//         "province": "MASSOMBO"
//     },
//     {
//         "id": 2272,
//         "bureaux": "1",
//         "code": "06 06 01 08",
//         "inscrit": "79",
//         "province": "MAZINGO"
//     },
//     {
//         "id": 2273,
//         "bureaux": "1",
//         "code": "06 06 02 01",
//         "inscrit": "135",
//         "province": "MBENZA"
//     },
//     {
//         "id": 2274,
//         "bureaux": "1",
//         "code": "06 06 02 02",
//         "inscrit": "101",
//         "province": "MALASSA"
//     },
//     {
//         "id": 2275,
//         "bureaux": "1",
//         "code": "06 06 02 03",
//         "inscrit": "130",
//         "province": "KOMAMBELA"
//     },
//     {
//         "id": 2276,
//         "bureaux": "1",
//         "code": "06 06 02 04",
//         "inscrit": "139",
//         "province": "ETSELA-ENDOUNGA"
//     },
//     {
//         "id": 2277,
//         "bureaux": "1",
//         "code": "06 06 02 05",
//         "inscrit": "68",
//         "province": "MALOUMA"
//     },
//     {
//         "id": 2278,
//         "bureaux": "1",
//         "code": "06 06 02 06",
//         "inscrit": "136",
//         "province": "MEKOUMA"
//     },
//     {
//         "id": 2279,
//         "bureaux": "1",
//         "code": "06 06 02 07",
//         "inscrit": "66",
//         "province": "MENDEMBA"
//     },
//     {
//         "id": 2280,
//         "bureaux": "1",
//         "code": "06 06 02 08",
//         "inscrit": "187",
//         "province": "ILAHOUNENE"
//     },
//     {
//         "id": 2281,
//         "bureaux": "1",
//         "code": "06 06 02 09",
//         "inscrit": "154",
//         "province": "EKATA"
//     },
//     {
//         "id": 2282,
//         "bureaux": "1",
//         "code": "06 06 02 10",
//         "inscrit": "138",
//         "province": "NTOLO"
//     },
//     {
//         "id": 2283,
//         "bureaux": "1",
//         "code": "06 06 03 01",
//         "inscrit": "126",
//         "province": "ZAMBAKANGAKA"
//     },
//     {
//         "id": 2284,
//         "bureaux": "1",
//         "code": "06 06 03 02",
//         "inscrit": "100",
//         "province": "IKEIBOCA-BOCA"
//     },
//     {
//         "id": 2285,
//         "bureaux": "1",
//         "code": "06 06 03 03",
//         "inscrit": "117",
//         "province": "HEANZO"
//     },
//     {
//         "id": 2286,
//         "bureaux": "1",
//         "code": "06 06 03 04",
//         "inscrit": "128",
//         "province": "INGOLANDJODJO"
//     },
//     {
//         "id": 2287,
//         "bureaux": "1",
//         "code": "06 06 03 05",
//         "inscrit": "85",
//         "province": "MBELA-BAYA"
//     },
//     {
//         "id": 2288,
//         "bureaux": "1",
//         "code": "06 06 04 01",
//         "inscrit": "189",
//         "province": "BONAMAZA"
//     },
//     {
//         "id": 2289,
//         "bureaux": "1",
//         "code": "06 06 04 02",
//         "inscrit": "162",
//         "province": "MANDOMBO II"
//     },
//     {
//         "id": 2290,
//         "bureaux": "1",
//         "code": "06 06 04 03",
//         "inscrit": "124",
//         "province": "ZADINDOUE"
//     },
//     {
//         "id": 2291,
//         "bureaux": "1",
//         "code": "06 06 04 04",
//         "inscrit": "107",
//         "province": "MATOTE"
//     },
//     {
//         "id": 2292,
//         "bureaux": "1",
//         "code": "06 06 04 05",
//         "inscrit": "64",
//         "province": "BANGADI"
//     },
//     {
//         "id": 2293,
//         "bureaux": "8",
//         "code": "06 06 01",
//         "inscrit": "1,167",
//         "province": "DJOUAH"
//     },
//     {
//         "id": 2294,
//         "bureaux": "10",
//         "code": "06 06 02",
//         "inscrit": "1,254",
//         "province": "LOUE"
//     },
//     {
//         "id": 2295,
//         "bureaux": "5",
//         "code": "06 06 03",
//         "inscrit": "556",
//         "province": "MBENGOUE"
//     },
//     {
//         "id": 2296,
//         "bureaux": "5",
//         "code": "06 06 04",
//         "inscrit": "646",
//         "province": "SASSAMONGO"
//     },
//     {
//         "id": 2297,
//         "bureaux": "1",
//         "code": "06 07 00 01",
//         "inscrit": "494",
//         "province": "ECOLE PUBLIQUE"
//     },
//     {
//         "id": 2298,
//         "bureaux": "1",
//         "code": "06 07 00 02",
//         "inscrit": "36",
//         "province": "BINGOMA"
//     },
//     {
//         "id": 2299,
//         "bureaux": "1",
//         "code": "06 07 00 03",
//         "inscrit": "70",
//         "province": "AYOL"
//     },
//     {
//         "id": 2300,
//         "bureaux": "1",
//         "code": "06 07 00 04",
//         "inscrit": "199",
//         "province": "ECOLE PROTESTANTE KOMBANI"
//     },
//     {
//         "id": 2301,
//         "bureaux": "1",
//         "code": "06 07 00 05",
//         "inscrit": "81",
//         "province": "ELATABAKOTA"
//     },
//     {
//         "id": 2302,
//         "bureaux": "1",
//         "code": "06 07 00 06",
//         "inscrit": "71",
//         "province": "EC. PROT. ALLAR"
//     },
//     {
//         "id": 2303,
//         "bureaux": "1",
//         "code": "06 07 00 07",
//         "inscrit": "283",
//         "province": "NKARITOM-NGOREKI CES"
//     },
//     {
//         "id": 2304,
//         "bureaux": "7",
//         "code": "06 07 00",
//         "inscrit": "1,234",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 2305,
//         "bureaux": "1",
//         "code": "06 08 01 01",
//         "inscrit": "78",
//         "province": "EBE-MESSE"
//     },
//     {
//         "id": 2306,
//         "bureaux": "1",
//         "code": "06 08 01 02",
//         "inscrit": "15",
//         "province": "MELANE"
//     },
//     {
//         "id": 2307,
//         "bureaux": "1",
//         "code": "06 08 01 03",
//         "inscrit": "132",
//         "province": "SOUGALAM-MFOUBENZOCK"
//     },
//     {
//         "id": 2308,
//         "bureaux": "1",
//         "code": "06 08 01 04",
//         "inscrit": "168",
//         "province": "EKARLONG"
//     },
//     {
//         "id": 2309,
//         "bureaux": "1",
//         "code": "06 08 01 05",
//         "inscrit": "191",
//         "province": "KOUMAMEYONG"
//     },
//     {
//         "id": 2310,
//         "bureaux": "1",
//         "code": "06 08 01 06",
//         "inscrit": "125",
//         "province": "CHANTIER S.H.M"
//     },
//     {
//         "id": 2311,
//         "bureaux": "1",
//         "code": "06 08 02 01",
//         "inscrit": "165",
//         "province": "MINTOUM"
//     },
//     {
//         "id": 2312,
//         "bureaux": "1",
//         "code": "06 08 02 02",
//         "inscrit": "190",
//         "province": "AGNANG"
//     },
//     {
//         "id": 2313,
//         "bureaux": "1",
//         "code": "06 08 02 03",
//         "inscrit": "140",
//         "province": "AKANA"
//     },
//     {
//         "id": 2314,
//         "bureaux": "1",
//         "code": "06 08 02 04",
//         "inscrit": "72",
//         "province": "AFOUMADZO"
//     },
//     {
//         "id": 2315,
//         "bureaux": "1",
//         "code": "06 08 02 05",
//         "inscrit": "32",
//         "province": "BISSOBILAM"
//     },
//     {
//         "id": 2316,
//         "bureaux": "6",
//         "code": "06 08 01",
//         "inscrit": "709",
//         "province": "BELEME"
//     },
//     {
//         "id": 2317,
//         "bureaux": "5",
//         "code": "06 08 02",
//         "inscrit": "599",
//         "province": "DZOUE"
//     },
//     {
//         "id": 2318,
//         "bureaux": "32",
//         "code": "601",
//         "inscrit": "9,576",
//         "province": "MAKOKOU"
//     },
//     {
//         "id": 2319,
//         "bureaux": "43",
//         "code": "602",
//         "inscrit": "6,050",
//         "province": "IVINDO (MAKOKOU)"
//     },
//     {
//         "id": 2320,
//         "bureaux": "7",
//         "code": "603",
//         "inscrit": "2,295",
//         "province": "BOOUE"
//     },
//     {
//         "id": 2321,
//         "bureaux": "25",
//         "code": "604",
//         "inscrit": "3,386",
//         "province": "LOPE (BOOUE)"
//     },
//     {
//         "id": 2322,
//         "bureaux": "10",
//         "code": "605",
//         "inscrit": "2,473",
//         "province": "MEKAMBO"
//     },
//     {
//         "id": 2323,
//         "bureaux": "28",
//         "code": "606",
//         "inscrit": "3,623",
//         "province": "ZADIE (MEKAMBO)"
//     },
//     {
//         "id": 2324,
//         "bureaux": "7",
//         "code": "607",
//         "inscrit": "1,234",
//         "province": "OVAN"
//     },
//     {
//         "id": 2325,
//         "bureaux": "11",
//         "code": "608",
//         "inscrit": "1,308",
//         "province": "MVOUNG (OVAN)"
//     },
//     {
//         "id": 2326,
//         "bureaux": "1",
//         "code": "07 01 01 01",
//         "inscrit": "444",
//         "province": "ECOLE PUBLIQUE DE BAKELE"
//     },
//     {
//         "id": 2327,
//         "bureaux": "2",
//         "code": "07 01 01 02",
//         "inscrit": "502",
//         "province": "MAYANG"
//     },
//     {
//         "id": 2328,
//         "bureaux": "2",
//         "code": "07 01 01 03",
//         "inscrit": "792",
//         "province": "KOUNGOU"
//     },
//     {
//         "id": 2329,
//         "bureaux": "1",
//         "code": "07 01 01 04",
//         "inscrit": "84",
//         "province": "LIBONGUI"
//     },
//     {
//         "id": 2330,
//         "bureaux": "1",
//         "code": "07 01 01 05",
//         "inscrit": "289",
//         "province": "MIKOUMOU"
//     },
//     {
//         "id": 2331,
//         "bureaux": "1",
//         "code": "07 01 01 06",
//         "inscrit": "56",
//         "province": "LYCEE J.S. MIGOLET"
//     },
//     {
//         "id": 2332,
//         "bureaux": "2",
//         "code": "07 01 02 01",
//         "inscrit": "846",
//         "province": "JARDIN-FOUR (EP SALLETTE F)"
//     },
//     {
//         "id": 2333,
//         "bureaux": "2",
//         "code": "07 01 02 02",
//         "inscrit": "792",
//         "province": "JARDIN-FOUR (EP SALLETTE G)"
//     },
//     {
//         "id": 2334,
//         "bureaux": "4",
//         "code": "07 01 02 03",
//         "inscrit": "1,568",
//         "province": "EC DU CHATEAU (MANDJI)"
//     },
//     {
//         "id": 2335,
//         "bureaux": "1",
//         "code": "07 01 02 04",
//         "inscrit": "122",
//         "province": "MABIMBI"
//     },
//     {
//         "id": 2336,
//         "bureaux": "1",
//         "code": "07 01 02 05",
//         "inscrit": "482",
//         "province": "MAKADIUM"
//     },
//     {
//         "id": 2337,
//         "bureaux": "8",
//         "code": "07 01 01",
//         "inscrit": "2,167",
//         "province": "1ER  ARRONDISSEMENT"
//     },
//     {
//         "id": 2338,
//         "bureaux": "10",
//         "code": "07 01 02",
//         "inscrit": "3,810",
//         "province": "2EME ARRONDISSEMENT"
//     },
//     {
//         "id": 2339,
//         "bureaux": "1",
//         "code": "07 02 01 01",
//         "inscrit": "270",
//         "province": "LEBAGNY"
//     },
//     {
//         "id": 2340,
//         "bureaux": "1",
//         "code": "07 02 01 02",
//         "inscrit": "149",
//         "province": "ROUNGASSA"
//     },
//     {
//         "id": 2341,
//         "bureaux": "1",
//         "code": "07 02 01 03",
//         "inscrit": "128",
//         "province": "LEYASSA"
//     },
//     {
//         "id": 2342,
//         "bureaux": "1",
//         "code": "07 02 01 04",
//         "inscrit": "124",
//         "province": "YOULOU"
//     },
//     {
//         "id": 2343,
//         "bureaux": "1",
//         "code": "07 02 01 05",
//         "inscrit": "90",
//         "province": "NDJOKONAMOYE"
//     },
//     {
//         "id": 2344,
//         "bureaux": "1",
//         "code": "07 02 01 06",
//         "inscrit": "105",
//         "province": "NDJOKALE"
//     },
//     {
//         "id": 2345,
//         "bureaux": "1",
//         "code": "07 02 02 01",
//         "inscrit": "137",
//         "province": "NZENDZELE"
//     },
//     {
//         "id": 2346,
//         "bureaux": "1",
//         "code": "07 02 02 02",
//         "inscrit": "221",
//         "province": "MBIGOU-MOUGHENE"
//     },
//     {
//         "id": 2347,
//         "bureaux": "1",
//         "code": "07 02 02 03",
//         "inscrit": "20",
//         "province": "MOUKOGHA"
//     },
//     {
//         "id": 2348,
//         "bureaux": "1",
//         "code": "07 02 02 04",
//         "inscrit": "49",
//         "province": "MAMBOUETE"
//     },
//     {
//         "id": 2349,
//         "bureaux": "1",
//         "code": "07 02 02 05",
//         "inscrit": "145",
//         "province": "LITAMBA"
//     },
//     {
//         "id": 2350,
//         "bureaux": "1",
//         "code": "07 02 02 06",
//         "inscrit": "83",
//         "province": "MIKOUAGNA"
//     },
//     {
//         "id": 2351,
//         "bureaux": "1",
//         "code": "07 02 02 07",
//         "inscrit": "180",
//         "province": "MAKOULA"
//     },
//     {
//         "id": 2352,
//         "bureaux": "1",
//         "code": "07 02 02 08",
//         "inscrit": "179",
//         "province": "BANGA"
//     },
//     {
//         "id": 2353,
//         "bureaux": "1",
//         "code": "07 02 02 09",
//         "inscrit": "140",
//         "province": "MIYANGA"
//     },
//     {
//         "id": 2354,
//         "bureaux": "1",
//         "code": "07 02 02 10",
//         "inscrit": "126",
//         "province": "PANGANI"
//     },
//     {
//         "id": 2355,
//         "bureaux": "1",
//         "code": "07 02 03 01",
//         "inscrit": "106",
//         "province": "BOUDIANGUILA"
//     },
//     {
//         "id": 2356,
//         "bureaux": "1",
//         "code": "07 02 03 02",
//         "inscrit": "29",
//         "province": "KONA"
//     },
//     {
//         "id": 2357,
//         "bureaux": "1",
//         "code": "07 02 03 03",
//         "inscrit": "73",
//         "province": "NDANDA"
//     },
//     {
//         "id": 2358,
//         "bureaux": "1",
//         "code": "07 02 03 04",
//         "inscrit": "124",
//         "province": "MOUKOUAGNO"
//     },
//     {
//         "id": 2359,
//         "bureaux": "1",
//         "code": "07 02 03 05",
//         "inscrit": "55",
//         "province": "DIVINDE"
//     },
//     {
//         "id": 2360,
//         "bureaux": "1",
//         "code": "07 02 03 06",
//         "inscrit": "172",
//         "province": "MOUILA-POUVI"
//     },
//     {
//         "id": 2361,
//         "bureaux": "1",
//         "code": "07 02 03 07",
//         "inscrit": "176",
//         "province": "DIBOUKA"
//     },
//     {
//         "id": 2362,
//         "bureaux": "1",
//         "code": "07 02 03 08",
//         "inscrit": "79",
//         "province": "KOUAGNA"
//     },
//     {
//         "id": 2363,
//         "bureaux": "1",
//         "code": "07 02 03 09",
//         "inscrit": "252",
//         "province": "NDJOLE"
//     },
//     {
//         "id": 2364,
//         "bureaux": "1",
//         "code": "07 02 03 11",
//         "inscrit": "108",
//         "province": "MOULOBI"
//     },
//     {
//         "id": 2365,
//         "bureaux": "1",
//         "code": "07 02 03 12",
//         "inscrit": "54",
//         "province": "NDOUMBA-KOUMBI"
//     },
//     {
//         "id": 2366,
//         "bureaux": "1",
//         "code": "07 02 03 13",
//         "inscrit": "116",
//         "province": "MANDJI-POUVI"
//     },
//     {
//         "id": 2367,
//         "bureaux": "1",
//         "code": "07 02 03 14",
//         "inscrit": "252",
//         "province": "BANIATI"
//     },
//     {
//         "id": 2368,
//         "bureaux": "1",
//         "code": "07 02 03 15",
//         "inscrit": "124",
//         "province": "MOUKOUMOU"
//     },
//     {
//         "id": 2369,
//         "bureaux": "1",
//         "code": "07 02 03 16",
//         "inscrit": "230",
//         "province": "PANGOLONGO"
//     },
//     {
//         "id": 2370,
//         "bureaux": "1",
//         "code": "07 02 03 17",
//         "inscrit": "127",
//         "province": "NGOUNGUI"
//     },
//     {
//         "id": 2371,
//         "bureaux": "1",
//         "code": "07 02 03 18",
//         "inscrit": "32",
//         "province": "WOUBOUE"
//     },
//     {
//         "id": 2372,
//         "bureaux": "1",
//         "code": "07 02 03 19",
//         "inscrit": "45",
//         "province": "MOUKOUAGNO II (RTE ECO)"
//     },
//     {
//         "id": 2373,
//         "bureaux": "1",
//         "code": "07 02 03 20",
//         "inscrit": "12",
//         "province": "WAGNA"
//     },
//     {
//         "id": 2374,
//         "bureaux": "1",
//         "code": "07 02 03 21",
//         "inscrit": "125",
//         "province": "MANDJI KIDA"
//     },
//     {
//         "id": 2375,
//         "bureaux": "1",
//         "code": "07 02 04 01",
//         "inscrit": "213",
//         "province": "MIDOUMA"
//     },
//     {
//         "id": 2376,
//         "bureaux": "1",
//         "code": "07 02 04 02",
//         "inscrit": "72",
//         "province": "NGOUNGOU II - NZAMBI II"
//     },
//     {
//         "id": 2377,
//         "bureaux": "1",
//         "code": "07 02 04 03",
//         "inscrit": "384",
//         "province": "POPA-LEBELLA"
//     },
//     {
//         "id": 2378,
//         "bureaux": "1",
//         "code": "07 02 04 04",
//         "inscrit": "49",
//         "province": "MISSIMBA"
//     },
//     {
//         "id": 2379,
//         "bureaux": "1",
//         "code": "07 02 04 05",
//         "inscrit": "42",
//         "province": "NZAMBI I"
//     },
//     {
//         "id": 2380,
//         "bureaux": "1",
//         "code": "07 02 04 06",
//         "inscrit": "27",
//         "province": "NGOUNGOU I"
//     },
//     {
//         "id": 2381,
//         "bureaux": "1",
//         "code": "07 02 04 07",
//         "inscrit": "95",
//         "province": "MOUPATA"
//     },
//     {
//         "id": 2382,
//         "bureaux": "1",
//         "code": "07 02 04 08",
//         "inscrit": "67",
//         "province": "LENDEME"
//     },
//     {
//         "id": 2383,
//         "bureaux": "1",
//         "code": "07 02 04 09",
//         "inscrit": "65",
//         "province": "MOUGHOKO"
//     },
//     {
//         "id": 2384,
//         "bureaux": "1",
//         "code": "07 02 04 10",
//         "inscrit": "39",
//         "province": "DIBA-DIBA"
//     },
//     {
//         "id": 2385,
//         "bureaux": "1",
//         "code": "07 02 04 11",
//         "inscrit": "42",
//         "province": "MOUKABA"
//     },
//     {
//         "id": 2386,
//         "bureaux": "6",
//         "code": "07 02 01",
//         "inscrit": "866",
//         "province": "BASSE LOMBO"
//     },
//     {
//         "id": 2387,
//         "bureaux": "10",
//         "code": "07 02 02",
//         "inscrit": "1,280",
//         "province": "BOUENGUIDI-MOUALO"
//     },
//     {
//         "id": 2388,
//         "bureaux": "20",
//         "code": "07 02 03",
//         "inscrit": "2,291",
//         "province": "LOLO-WAGNA"
//     },
//     {
//         "id": 2389,
//         "bureaux": "11",
//         "code": "07 02 04",
//         "inscrit": "1,095",
//         "province": "CANTON MOUALO-ONOYE"
//     },
//     {
//         "id": 2390,
//         "bureaux": "1",
//         "code": "07 03 00 01",
//         "inscrit": "319",
//         "province": "LINGOMA"
//     },
//     {
//         "id": 2391,
//         "bureaux": "2",
//         "code": "07 03 00 02",
//         "inscrit": "625",
//         "province": "CENTRE VILLE"
//     },
//     {
//         "id": 2392,
//         "bureaux": "1",
//         "code": "07 03 00 03",
//         "inscrit": "415",
//         "province": "EC PUBL CENTRE (MIKATSIA)"
//     },
//     {
//         "id": 2393,
//         "bureaux": "3",
//         "code": "07 03 00 04",
//         "inscrit": "1,028",
//         "province": "MOUANA-NDZOKOU"
//     },
//     {
//         "id": 2394,
//         "bureaux": "1",
//         "code": "07 03 00 05",
//         "inscrit": "242",
//         "province": "PAHON-PIRA"
//     },
//     {
//         "id": 2395,
//         "bureaux": "2",
//         "code": "07 03 00 06",
//         "inscrit": "548",
//         "province": "PAHON-YOUNGOU"
//     },
//     {
//         "id": 2396,
//         "bureaux": "1",
//         "code": "07 03 00 07",
//         "inscrit": "173",
//         "province": "LIMBENGA"
//     },
//     {
//         "id": 2397,
//         "bureaux": "1",
//         "code": "07 03 00 08",
//         "inscrit": "307",
//         "province": "NGOUAMBA"
//     },
//     {
//         "id": 2398,
//         "bureaux": "1",
//         "code": "07 03 00 09",
//         "inscrit": "271",
//         "province": "MISSION CATHOLIQUE"
//     },
//     {
//         "id": 2399,
//         "bureaux": "13",
//         "code": "07 03 00",
//         "inscrit": "3,928",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 2400,
//         "bureaux": "1",
//         "code": "07 04 01 01",
//         "inscrit": "163",
//         "province": "MOUBIDOU-MOUYABI"
//     },
//     {
//         "id": 2401,
//         "bureaux": "1",
//         "code": "07 04 01 02",
//         "inscrit": "129",
//         "province": "NDEKABALANDJI"
//     },
//     {
//         "id": 2402,
//         "bureaux": "1",
//         "code": "07 04 01 03",
//         "inscrit": "33",
//         "province": "KOKOMOUNGUELE"
//     },
//     {
//         "id": 2403,
//         "bureaux": "1",
//         "code": "07 04 01 04",
//         "inscrit": "194",
//         "province": "AKIENI"
//     },
//     {
//         "id": 2404,
//         "bureaux": "1",
//         "code": "07 04 01 05",
//         "inscrit": "49",
//         "province": "MBELATA"
//     },
//     {
//         "id": 2405,
//         "bureaux": "1",
//         "code": "07 04 01 06",
//         "inscrit": "154",
//         "province": "NDANGUI (VENEZ-VOIR)"
//     },
//     {
//         "id": 2406,
//         "bureaux": "1",
//         "code": "07 04 01 07",
//         "inscrit": "10",
//         "province": "BOUNDZOUMBA"
//     },
//     {
//         "id": 2407,
//         "bureaux": "1",
//         "code": "07 04 01 08",
//         "inscrit": "79",
//         "province": "NZONDE"
//     },
//     {
//         "id": 2408,
//         "bureaux": "1",
//         "code": "07 04 01 09",
//         "inscrit": "63",
//         "province": "BAPOSSO"
//     },
//     {
//         "id": 2409,
//         "bureaux": "1",
//         "code": "07 04 01 10",
//         "inscrit": "100",
//         "province": "NDAMBI"
//     },
//     {
//         "id": 2410,
//         "bureaux": "1",
//         "code": "07 04 01 11",
//         "inscrit": "54",
//         "province": "MAMIDI"
//     },
//     {
//         "id": 2411,
//         "bureaux": "1",
//         "code": "07 04 01 12",
//         "inscrit": "374",
//         "province": "BAMBIDIE C E B"
//     },
//     {
//         "id": 2412,
//         "bureaux": "1",
//         "code": "07 04 01 13",
//         "inscrit": "337",
//         "province": "MAMBELO LIYODIA"
//     },
//     {
//         "id": 2413,
//         "bureaux": "1",
//         "code": "07 04 01 14",
//         "inscrit": "64",
//         "province": "MILOLE (VILLAGE)"
//     },
//     {
//         "id": 2414,
//         "bureaux": "1",
//         "code": "07 04 01 15",
//         "inscrit": "142",
//         "province": "NDANGUI (POPA)"
//     },
//     {
//         "id": 2415,
//         "bureaux": "1",
//         "code": "07 04 01 16",
//         "inscrit": "104",
//         "province": "SETRAG"
//     },
//     {
//         "id": 2416,
//         "bureaux": "1",
//         "code": "07 04 01 17",
//         "inscrit": "103",
//         "province": "BAKOUSSOU ET MEKOUKA"
//     },
//     {
//         "id": 2417,
//         "bureaux": "1",
//         "code": "07 04 01 19",
//         "inscrit": "38",
//         "province": "LIKOKODIBA (LIBALADOUBA)"
//     },
//     {
//         "id": 2418,
//         "bureaux": "1",
//         "code": "07 04 01 20",
//         "inscrit": "34",
//         "province": "MIHANDZA"
//     },
//     {
//         "id": 2419,
//         "bureaux": "1",
//         "code": "07 04 01 21",
//         "inscrit": "214",
//         "province": "NDANGUI CENTRE"
//     },
//     {
//         "id": 2420,
//         "bureaux": "1",
//         "code": "07 04 01 22",
//         "inscrit": "43",
//         "province": "S E E F MILOLE"
//     },
//     {
//         "id": 2421,
//         "bureaux": "1",
//         "code": "07 04 01 24",
//         "inscrit": "24",
//         "province": "SEB OKONDJA"
//     },
//     {
//         "id": 2422,
//         "bureaux": "1",
//         "code": "07 04 01 25",
//         "inscrit": "45",
//         "province": "MEKOUKA"
//     },
//     {
//         "id": 2423,
//         "bureaux": "1",
//         "code": "07 04 02 01",
//         "inscrit": "58",
//         "province": "MANA-MANA"
//     },
//     {
//         "id": 2424,
//         "bureaux": "1",
//         "code": "07 04 02 02",
//         "inscrit": "225",
//         "province": "MOUKOUMBI"
//     },
//     {
//         "id": 2425,
//         "bureaux": "1",
//         "code": "07 04 02 03",
//         "inscrit": "116",
//         "province": "LIBONGUI"
//     },
//     {
//         "id": 2426,
//         "bureaux": "1",
//         "code": "07 04 02 04",
//         "inscrit": "40",
//         "province": "BAMBERA-BIYOKO"
//     },
//     {
//         "id": 2427,
//         "bureaux": "1",
//         "code": "07 04 02 05",
//         "inscrit": "163",
//         "province": "MALANGA-LIFOUTA"
//     },
//     {
//         "id": 2428,
//         "bureaux": "1",
//         "code": "07 04 02 06",
//         "inscrit": "79",
//         "province": "VOUVOU"
//     },
//     {
//         "id": 2429,
//         "bureaux": "1",
//         "code": "07 04 02 07",
//         "inscrit": "79",
//         "province": "IDIBA-BAMBERA"
//     },
//     {
//         "id": 2430,
//         "bureaux": "1",
//         "code": "07 04 02 08",
//         "inscrit": "400",
//         "province": "MATSATSA"
//     },
//     {
//         "id": 2431,
//         "bureaux": "1",
//         "code": "07 04 02 09",
//         "inscrit": "72",
//         "province": "TSOTANDZALA"
//     },
//     {
//         "id": 2432,
//         "bureaux": "1",
//         "code": "07 04 02 10",
//         "inscrit": "152",
//         "province": "MAPFOUNGUI"
//     },
//     {
//         "id": 2433,
//         "bureaux": "1",
//         "code": "07 04 02 11",
//         "inscrit": "69",
//         "province": "BAMANGA"
//     },
//     {
//         "id": 2434,
//         "bureaux": "1",
//         "code": "07 04 02 12",
//         "inscrit": "125",
//         "province": "MANDJAYE 1"
//     },
//     {
//         "id": 2435,
//         "bureaux": "1",
//         "code": "07 04 02 13",
//         "inscrit": "80",
//         "province": "LIKEKA"
//     },
//     {
//         "id": 2436,
//         "bureaux": "1",
//         "code": "07 04 02 14",
//         "inscrit": "56",
//         "province": "MILOBA"
//     },
//     {
//         "id": 2437,
//         "bureaux": "1",
//         "code": "07 04 02 15",
//         "inscrit": "53",
//         "province": "LEKAGNA"
//     },
//     {
//         "id": 2438,
//         "bureaux": "1",
//         "code": "07 04 02 16",
//         "inscrit": "48",
//         "province": "ANGONDO-ABENA"
//     },
//     {
//         "id": 2439,
//         "bureaux": "1",
//         "code": "07 04 02 17",
//         "inscrit": "97",
//         "province": "MOUPEYOU"
//     },
//     {
//         "id": 2440,
//         "bureaux": "1",
//         "code": "07 04 02 18",
//         "inscrit": "24",
//         "province": "BOUNDJOUKOU"
//     },
//     {
//         "id": 2441,
//         "bureaux": "1",
//         "code": "07 04 02 19",
//         "inscrit": "38",
//         "province": "YOULOU"
//     },
//     {
//         "id": 2442,
//         "bureaux": "1",
//         "code": "07 04 02 20",
//         "inscrit": "62",
//         "province": "NDZOKALOUNDZA"
//     },
//     {
//         "id": 2443,
//         "bureaux": "1",
//         "code": "07 04 02 21",
//         "inscrit": "37",
//         "province": "BOUKAMA"
//     },
//     {
//         "id": 2444,
//         "bureaux": "1",
//         "code": "07 04 03 01",
//         "inscrit": "82",
//         "province": "BASSEGHA"
//     },
//     {
//         "id": 2445,
//         "bureaux": "1",
//         "code": "07 04 03 02",
//         "inscrit": "43",
//         "province": "MIVENGUE"
//     },
//     {
//         "id": 2446,
//         "bureaux": "1",
//         "code": "07 04 03 03",
//         "inscrit": "119",
//         "province": "DOUME"
//     },
//     {
//         "id": 2447,
//         "bureaux": "1",
//         "code": "07 04 03 04",
//         "inscrit": "167",
//         "province": "NDZONGOUANI-BOUKOUSSOU"
//     },
//     {
//         "id": 2448,
//         "bureaux": "1",
//         "code": "07 04 03 05",
//         "inscrit": "38",
//         "province": "MBOMO-MAGNIMA"
//     },
//     {
//         "id": 2449,
//         "bureaux": "1",
//         "code": "07 04 04 01",
//         "inscrit": "106",
//         "province": "MADOUKOU-MAHOUYA"
//     },
//     {
//         "id": 2450,
//         "bureaux": "1",
//         "code": "07 04 04 02",
//         "inscrit": "44",
//         "province": "NDAMBO-BOUNDJI"
//     },
//     {
//         "id": 2451,
//         "bureaux": "1",
//         "code": "07 04 04 03",
//         "inscrit": "93",
//         "province": "CHANTIER SBL BASE"
//     },
//     {
//         "id": 2452,
//         "bureaux": "1",
//         "code": "07 04 04 04",
//         "inscrit": "50",
//         "province": "LOLO VILLAGE"
//     },
//     {
//         "id": 2453,
//         "bureaux": "1",
//         "code": "07 04 04 05",
//         "inscrit": "407",
//         "province": "MALENDE"
//     },
//     {
//         "id": 2454,
//         "bureaux": "1",
//         "code": "07 04 04 06",
//         "inscrit": "100",
//         "province": "LITSEGHE"
//     },
//     {
//         "id": 2455,
//         "bureaux": "1",
//         "code": "07 04 04 07",
//         "inscrit": "321",
//         "province": "NZELA"
//     },
//     {
//         "id": 2456,
//         "bureaux": "1",
//         "code": "07 04 04 08",
//         "inscrit": "86",
//         "province": "MIBAMBOU"
//     },
//     {
//         "id": 2457,
//         "bureaux": "1",
//         "code": "07 04 04 09",
//         "inscrit": "139",
//         "province": "ROUNGASSA"
//     },
//     {
//         "id": 2458,
//         "bureaux": "1",
//         "code": "07 04 05 01",
//         "inscrit": "144",
//         "province": "TSENGUE MOUPINDA"
//     },
//     {
//         "id": 2459,
//         "bureaux": "1",
//         "code": "07 04 05 02",
//         "inscrit": "83",
//         "province": "KESSI POUGHOU"
//     },
//     {
//         "id": 2460,
//         "bureaux": "1",
//         "code": "07 04 05 03",
//         "inscrit": "275",
//         "province": "BEMBICANI"
//     },
//     {
//         "id": 2461,
//         "bureaux": "1",
//         "code": "07 04 05 04",
//         "inscrit": "241",
//         "province": "TSATY-LIPAKA"
//     },
//     {
//         "id": 2462,
//         "bureaux": "1",
//         "code": "07 04 05 05",
//         "inscrit": "101",
//         "province": "E.G.G. TSATSARA"
//     },
//     {
//         "id": 2463,
//         "bureaux": "23",
//         "code": "07 04 01",
//         "inscrit": "2,550",
//         "province": "LASSIO-SEBE (DIST. DE NDANGUI)"
//     },
//     {
//         "id": 2464,
//         "bureaux": "21",
//         "code": "07 04 02",
//         "inscrit": "2,073",
//         "province": "LEYOU"
//     },
//     {
//         "id": 2465,
//         "bureaux": "5",
//         "code": "07 04 03",
//         "inscrit": "449",
//         "province": "OGOOUE-AMONT"
//     },
//     {
//         "id": 2466,
//         "bureaux": "9",
//         "code": "07 04 04",
//         "inscrit": "1,346",
//         "province": "OGOOUE-AVAL"
//     },
//     {
//         "id": 2467,
//         "bureaux": "5",
//         "code": "07 04 05",
//         "inscrit": "844",
//         "province": "POUNGUI"
//     },
//     {
//         "id": 2468,
//         "bureaux": "1",
//         "code": "07 05 00 01",
//         "inscrit": "260",
//         "province": "C.E.S PANA"
//     },
//     {
//         "id": 2469,
//         "bureaux": "1",
//         "code": "07 05 00 02",
//         "inscrit": "230",
//         "province": "ECOLE PRIV. CATH. NDJONGO"
//     },
//     {
//         "id": 2470,
//         "bureaux": "1",
//         "code": "07 05 00 03",
//         "inscrit": "343",
//         "province": "ECOLE PUBLIQUE PANA"
//     },
//     {
//         "id": 2471,
//         "bureaux": "3",
//         "code": "07 05 00",
//         "inscrit": "833",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 2472,
//         "bureaux": "1",
//         "code": "07 06 01 01",
//         "inscrit": "161",
//         "province": "ISSEME"
//     },
//     {
//         "id": 2473,
//         "bureaux": "1",
//         "code": "07 06 01 02",
//         "inscrit": "193",
//         "province": "SIONO"
//     },
//     {
//         "id": 2474,
//         "bureaux": "1",
//         "code": "07 06 01 03",
//         "inscrit": "99",
//         "province": "MARANDA I"
//     },
//     {
//         "id": 2475,
//         "bureaux": "1",
//         "code": "07 06 01 04",
//         "inscrit": "65",
//         "province": "MARANDA II"
//     },
//     {
//         "id": 2476,
//         "bureaux": "1",
//         "code": "07 06 01 05",
//         "inscrit": "41",
//         "province": "MOUGHOMBOFOUALA"
//     },
//     {
//         "id": 2477,
//         "bureaux": "1",
//         "code": "07 06 01 06",
//         "inscrit": "168",
//         "province": "GRAND VILLAGE"
//     },
//     {
//         "id": 2478,
//         "bureaux": "1",
//         "code": "07 06 01 07",
//         "inscrit": "439",
//         "province": "DISTRICT DE DIENGA"
//     },
//     {
//         "id": 2479,
//         "bureaux": "1",
//         "code": "07 06 01 08",
//         "inscrit": "342",
//         "province": "TSENGUENABIELA"
//     },
//     {
//         "id": 2480,
//         "bureaux": "1",
//         "code": "07 06 02 01",
//         "inscrit": "119",
//         "province": "MOUVENGUE"
//     },
//     {
//         "id": 2481,
//         "bureaux": "1",
//         "code": "07 06 02 02",
//         "inscrit": "143",
//         "province": "KOUMBI"
//     },
//     {
//         "id": 2482,
//         "bureaux": "1",
//         "code": "07 06 02 03",
//         "inscrit": "143",
//         "province": "IVELE"
//     },
//     {
//         "id": 2483,
//         "bureaux": "1",
//         "code": "07 06 02 04",
//         "inscrit": "209",
//         "province": "MENGUI"
//     },
//     {
//         "id": 2484,
//         "bureaux": "1",
//         "code": "07 06 02 05",
//         "inscrit": "145",
//         "province": "BOUYEBA"
//     },
//     {
//         "id": 2485,
//         "bureaux": "1",
//         "code": "07 06 02 06",
//         "inscrit": "412",
//         "province": "LEMENGUE"
//     },
//     {
//         "id": 2486,
//         "bureaux": "8",
//         "code": "07 06 01",
//         "inscrit": "1,508",
//         "province": "HAUTE BOUENGUIDI-DIST. DIENGA"
//     },
//     {
//         "id": 2487,
//         "bureaux": "6",
//         "code": "07 06 02",
//         "inscrit": "1,171",
//         "province": "HAUTE LOMBO"
//     },
//     {
//         "id": 2488,
//         "bureaux": "2",
//         "code": "07 07 00",
//         "inscrit": "743",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 2489,
//         "bureaux": "1",
//         "code": "07 08 01 01",
//         "inscrit": "14",
//         "province": "POUNGOU"
//     },
//     {
//         "id": 2490,
//         "bureaux": "1",
//         "code": "07 08 01 02",
//         "inscrit": "75",
//         "province": "IWATSI"
//     },
//     {
//         "id": 2491,
//         "bureaux": "1",
//         "code": "07 08 01 03",
//         "inscrit": "32",
//         "province": "DIANGUI"
//     },
//     {
//         "id": 2492,
//         "bureaux": "1",
//         "code": "07 08 01 04",
//         "inscrit": "46",
//         "province": "INDZAMBO"
//     },
//     {
//         "id": 2493,
//         "bureaux": "1",
//         "code": "07 08 01 06",
//         "inscrit": "69",
//         "province": "SOGHA"
//     },
//     {
//         "id": 2494,
//         "bureaux": "1",
//         "code": "07 08 01 07",
//         "inscrit": "127",
//         "province": "MANDJI"
//     },
//     {
//         "id": 2495,
//         "bureaux": "1",
//         "code": "07 08 01 08",
//         "inscrit": "51",
//         "province": "NDOUGHOU"
//     },
//     {
//         "id": 2496,
//         "bureaux": "1",
//         "code": "07 08 01 12",
//         "inscrit": "38",
//         "province": "BOUPOUNDZA"
//     },
//     {
//         "id": 2497,
//         "bureaux": "1",
//         "code": "07 08 01 13",
//         "inscrit": "37",
//         "province": "BOUSSIMBI"
//     },
//     {
//         "id": 2498,
//         "bureaux": "1",
//         "code": "07 08 02 01",
//         "inscrit": "107",
//         "province": "MOUGHOUNDA"
//     },
//     {
//         "id": 2499,
//         "bureaux": "1",
//         "code": "07 08 02 02",
//         "inscrit": "181",
//         "province": "IMENO-PLATEAU"
//     },
//     {
//         "id": 2500,
//         "bureaux": "1",
//         "code": "07 08 02 03",
//         "inscrit": "47",
//         "province": "MAVANGA"
//     },
//     {
//         "id": 2501,
//         "bureaux": "1",
//         "code": "07 08 02 04",
//         "inscrit": "82",
//         "province": "MALONGO"
//     },
//     {
//         "id": 2502,
//         "bureaux": "1",
//         "code": "07 08 02 05",
//         "inscrit": "67",
//         "province": "NGOUASSA"
//     },
//     {
//         "id": 2503,
//         "bureaux": "1",
//         "code": "07 08 02 06",
//         "inscrit": "82",
//         "province": "MOUDOUMA"
//     },
//     {
//         "id": 2504,
//         "bureaux": "1",
//         "code": "07 08 02 07",
//         "inscrit": "54",
//         "province": "MOUNGONGO"
//     },
//     {
//         "id": 2505,
//         "bureaux": "9",
//         "code": "07 08 01",
//         "inscrit": "489",
//         "province": "OFFOUE"
//     },
//     {
//         "id": 2506,
//         "bureaux": "7",
//         "code": "07 08 02",
//         "inscrit": "620",
//         "province": "ONOYE"
//     },
//     {
//         "id": 2507,
//         "bureaux": "18",
//         "code": "701",
//         "inscrit": "5,977",
//         "province": "KOULA-MOUTOU"
//     },
//     {
//         "id": 2508,
//         "bureaux": "47",
//         "code": "702",
//         "inscrit": "5,532",
//         "province": "LOLO-BOUENGUIDI (KOULA-MOUTOU)"
//     },
//     {
//         "id": 2509,
//         "bureaux": "13",
//         "code": "703",
//         "inscrit": "3,928",
//         "province": "LASTOURVILLE"
//     },
//     {
//         "id": 2510,
//         "bureaux": "63",
//         "code": "704",
//         "inscrit": "7,262",
//         "province": "MULUNDU (LASTOURVILLE)"
//     },
//     {
//         "id": 2511,
//         "bureaux": "3",
//         "code": "705",
//         "inscrit": "833",
//         "province": "PANA"
//     },
//     {
//         "id": 2512,
//         "bureaux": "14",
//         "code": "706",
//         "inscrit": "2,679",
//         "province": "LOMBO-BOUENGUIDI (PANA)"
//     },
//     {
//         "id": 2513,
//         "bureaux": "2",
//         "code": "707",
//         "inscrit": "743",
//         "province": "IBOUNDJI"
//     },
//     {
//         "id": 2514,
//         "bureaux": "16",
//         "code": "708",
//         "inscrit": "1,109",
//         "province": "OFFOUE-ONOYE (IBOUNDJI)"
//     },
//     {
//         "id": 2515,
//         "bureaux": "4",
//         "code": "08 01 01 01",
//         "inscrit": "1,930",
//         "province": "LYCEE J. AMBOUROUET AVARO"
//     },
//     {
//         "id": 2516,
//         "bureaux": "1",
//         "code": "08 01 01 02",
//         "inscrit": "399",
//         "province": "ECOLE DE LA CITE"
//     },
//     {
//         "id": 2517,
//         "bureaux": "9",
//         "code": "08 01 01 03",
//         "inscrit": "4,223",
//         "province": "ECOLE PUBLIQUE BALISE 2 NGADI"
//     },
//     {
//         "id": 2518,
//         "bureaux": "8",
//         "code": "08 01 01 04",
//         "inscrit": "3,545",
//         "province": "CENTRE DE FORMATION PROF."
//     },
//     {
//         "id": 2519,
//         "bureaux": "2",
//         "code": "08 01 02 01",
//         "inscrit": "508",
//         "province": "ECOLE PROTESTANTE (EPP)"
//     },
//     {
//         "id": 2520,
//         "bureaux": "2",
//         "code": "08 01 02 02",
//         "inscrit": "525",
//         "province": "ECOLE SAINTE THERESE (EPC)"
//     },
//     {
//         "id": 2521,
//         "bureaux": "2",
//         "code": "08 01 02 03",
//         "inscrit": "633",
//         "province": "ECOLE DU STADE BLANC (EP)"
//     },
//     {
//         "id": 2522,
//         "bureaux": "1",
//         "code": "08 01 02 04",
//         "inscrit": "203",
//         "province": "ECOLE HENRI CLEMENT (EPC)"
//     },
//     {
//         "id": 2523,
//         "bureaux": "14",
//         "code": "08 01 02 05",
//         "inscrit": "6,897",
//         "province": "CENTRE SOCIAL"
//     },
//     {
//         "id": 2524,
//         "bureaux": "2",
//         "code": "08 01 02 06",
//         "inscrit": "608",
//         "province": "ECOLE ANCIENNE BALISE (EP)"
//     },
//     {
//         "id": 2525,
//         "bureaux": "5",
//         "code": "08 01 02 07",
//         "inscrit": "2,394",
//         "province": "ECOLE ABBEE YOYA (EPC)"
//     },
//     {
//         "id": 2526,
//         "bureaux": "3",
//         "code": "08 01 02 08",
//         "inscrit": "1,135",
//         "province": "ECOLE AMBOURET AVARO (EP)"
//     },
//     {
//         "id": 2527,
//         "bureaux": "4",
//         "code": "08 01 03 01",
//         "inscrit": "1,608",
//         "province": "CHAMBRE DE COMMERCE"
//     },
//     {
//         "id": 2528,
//         "bureaux": "3",
//         "code": "08 01 03 02",
//         "inscrit": "1,162",
//         "province": "ECOLE PARC DE FETE (EPC)"
//     },
//     {
//         "id": 2529,
//         "bureaux": "9",
//         "code": "08 01 03 03",
//         "inscrit": "4,413",
//         "province": "ECOLE SAINT ANDRE (EPC)"
//     },
//     {
//         "id": 2530,
//         "bureaux": "6",
//         "code": "08 01 03 04",
//         "inscrit": "2,916",
//         "province": "ECOLE SAINT PAUL DES BOIS (EPC)"
//     },
//     {
//         "id": 2531,
//         "bureaux": "3",
//         "code": "08 01 03 05",
//         "inscrit": "1,437",
//         "province": "OCEAN II"
//     },
//     {
//         "id": 2532,
//         "bureaux": "2",
//         "code": "08 01 03 06",
//         "inscrit": "802",
//         "province": "SINDARA"
//     },
//     {
//         "id": 2533,
//         "bureaux": "5",
//         "code": "08 01 03 07",
//         "inscrit": "2,307",
//         "province": "STE BARBE"
//     },
//     {
//         "id": 2534,
//         "bureaux": "8",
//         "code": "08 01 04 01",
//         "inscrit": "3,844",
//         "province": "ECOLE ROGER BUTTIN (EP)"
//     },
//     {
//         "id": 2535,
//         "bureaux": "5",
//         "code": "08 01 04 02",
//         "inscrit": "2,397",
//         "province": "ECOLE MATITI 1 (EP)"
//     },
//     {
//         "id": 2536,
//         "bureaux": "3",
//         "code": "08 01 04 03",
//         "inscrit": "1,378",
//         "province": "ECOLE MATITI 2 (EP)"
//     },
//     {
//         "id": 2537,
//         "bureaux": "2",
//         "code": "08 01 04 04",
//         "inscrit": "896",
//         "province": "ECOLE IGUIRI (ECOLE PRIVEE)"
//     },
//     {
//         "id": 2538,
//         "bureaux": "5",
//         "code": "08 01 04 05",
//         "inscrit": "2,302",
//         "province": "COLLEGE D ENSEIGNEMENT SEC."
//     },
//     {
//         "id": 2539,
//         "bureaux": "22",
//         "code": "08 01 01",
//         "inscrit": "1    097",
//         "province": "1ER  ARRONDISSEMENT"
//     },
//     {
//         "id": 2540,
//         "bureaux": "31",
//         "code": "08 01 02",
//         "inscrit": "12,903",
//         "province": "2EME ARRONDISSEMENT"
//     },
//     {
//         "id": 2541,
//         "bureaux": "32",
//         "code": "08 01 03",
//         "inscrit": "14,645",
//         "province": "3EME ARRONDISSEMENT"
//     },
//     {
//         "id": 2542,
//         "bureaux": "23",
//         "code": "08 01 04",
//         "inscrit": "1    817",
//         "province": "4EME ARRONDISSEMENT"
//     },
//     {
//         "id": 2543,
//         "bureaux": "1",
//         "code": "08 02 01 01",
//         "inscrit": "174",
//         "province": "NGOUEVIRI"
//     },
//     {
//         "id": 2544,
//         "bureaux": "1",
//         "code": "08 02 01 02",
//         "inscrit": "293",
//         "province": "ISSINGA"
//     },
//     {
//         "id": 2545,
//         "bureaux": "1",
//         "code": "08 02 01 03",
//         "inscrit": "364",
//         "province": "TCHENGUEFALA"
//     },
//     {
//         "id": 2546,
//         "bureaux": "1",
//         "code": "08 02 01 04",
//         "inscrit": "224",
//         "province": "PAGUIELOU"
//     },
//     {
//         "id": 2547,
//         "bureaux": "1",
//         "code": "08 02 01 05",
//         "inscrit": "161",
//         "province": "FOULAMAYONG"
//     },
//     {
//         "id": 2548,
//         "bureaux": "1",
//         "code": "08 02 01 06",
//         "inscrit": "152",
//         "province": "CARREF. CENTRE BISSOMA"
//     },
//     {
//         "id": 2549,
//         "bureaux": "1",
//         "code": "08 02 01 07",
//         "inscrit": "14",
//         "province": "SIMANI"
//     },
//     {
//         "id": 2550,
//         "bureaux": "1",
//         "code": "08 02 01 08",
//         "inscrit": "65",
//         "province": "MISSOUNGONGOU"
//     },
//     {
//         "id": 2551,
//         "bureaux": "1",
//         "code": "08 02 01 09",
//         "inscrit": "158",
//         "province": "MANEGA-BISSOMA"
//     },
//     {
//         "id": 2552,
//         "bureaux": "1",
//         "code": "08 02 01 10",
//         "inscrit": "59",
//         "province": "ODIMBA"
//     },
//     {
//         "id": 2553,
//         "bureaux": "1",
//         "code": "08 02 01 11",
//         "inscrit": "25",
//         "province": "KOUTOU"
//     },
//     {
//         "id": 2554,
//         "bureaux": "1",
//         "code": "08 02 02 01",
//         "inscrit": "246",
//         "province": "NENGA BEMBE"
//     },
//     {
//         "id": 2555,
//         "bureaux": "3",
//         "code": "08 02 02 02",
//         "inscrit": "1,491",
//         "province": "NTCHENGUE"
//     },
//     {
//         "id": 2556,
//         "bureaux": "1",
//         "code": "08 02 02 03",
//         "inscrit": "75",
//         "province": "YOMBE RADE"
//     },
//     {
//         "id": 2557,
//         "bureaux": "1",
//         "code": "08 02 02 04",
//         "inscrit": "42",
//         "province": "AZAGOUE"
//     },
//     {
//         "id": 2558,
//         "bureaux": "1",
//         "code": "08 02 02 05",
//         "inscrit": "23",
//         "province": "MPEMBE"
//     },
//     {
//         "id": 2559,
//         "bureaux": "1",
//         "code": "08 02 02 06",
//         "inscrit": "47",
//         "province": "EMANAGOUGA - IGUENDJA"
//     },
//     {
//         "id": 2560,
//         "bureaux": "1",
//         "code": "08 02 02 07",
//         "inscrit": "90",
//         "province": "ODIMBA NKENDJE"
//     },
//     {
//         "id": 2561,
//         "bureaux": "1",
//         "code": "08 02 02 08",
//         "inscrit": "46",
//         "province": "MBILAPE"
//     },
//     {
//         "id": 2562,
//         "bureaux": "1",
//         "code": "08 02 02 09",
//         "inscrit": "31",
//         "province": "NGANDA-OZOURI"
//     },
//     {
//         "id": 2563,
//         "bureaux": "1",
//         "code": "08 02 02 10",
//         "inscrit": "42",
//         "province": "GONGOUE"
//     },
//     {
//         "id": 2564,
//         "bureaux": "1",
//         "code": "08 02 02 11",
//         "inscrit": "87",
//         "province": "MBEGA"
//     },
//     {
//         "id": 2565,
//         "bureaux": "1",
//         "code": "08 02 03 01",
//         "inscrit": "24",
//         "province": "NGOLA"
//     },
//     {
//         "id": 2566,
//         "bureaux": "1",
//         "code": "08 02 03 02",
//         "inscrit": "52",
//         "province": "NGUIABETA"
//     },
//     {
//         "id": 2567,
//         "bureaux": "1",
//         "code": "08 02 03 03",
//         "inscrit": "75",
//         "province": "AKIRI-AKOUMOUNO"
//     },
//     {
//         "id": 2568,
//         "bureaux": "1",
//         "code": "08 02 03 04",
//         "inscrit": "53",
//         "province": "ENYONGA"
//     },
//     {
//         "id": 2569,
//         "bureaux": "1",
//         "code": "08 02 03 05",
//         "inscrit": "10",
//         "province": "YOMBE 1"
//     },
//     {
//         "id": 2570,
//         "bureaux": "1",
//         "code": "08 02 03 06",
//         "inscrit": "222",
//         "province": "YOMBE 2"
//     },
//     {
//         "id": 2571,
//         "bureaux": "1",
//         "code": "08 02 03 07",
//         "inscrit": "52",
//         "province": "ABELOGO I"
//     },
//     {
//         "id": 2572,
//         "bureaux": "1",
//         "code": "08 02 03 08",
//         "inscrit": "19",
//         "province": "ENAMINO"
//     },
//     {
//         "id": 2573,
//         "bureaux": "1",
//         "code": "08 02 03 09",
//         "inscrit": "88",
//         "province": "ESSENDE 1"
//     },
//     {
//         "id": 2574,
//         "bureaux": "1",
//         "code": "08 02 03 10",
//         "inscrit": "33",
//         "province": "ALEGO (LAC IWANDET)"
//     },
//     {
//         "id": 2575,
//         "bureaux": "1",
//         "code": "08 02 03 11",
//         "inscrit": "132",
//         "province": "OKOUMI-IKASSA"
//     },
//     {
//         "id": 2576,
//         "bureaux": "1",
//         "code": "08 02 03 12",
//         "inscrit": "17",
//         "province": "APARI"
//     },
//     {
//         "id": 2577,
//         "bureaux": "1",
//         "code": "08 02 03 13",
//         "inscrit": "18",
//         "province": "NENDJA"
//     },
//     {
//         "id": 2578,
//         "bureaux": "2",
//         "code": "08 02 03 14",
//         "inscrit": "564",
//         "province": "M PAGA"
//     },
//     {
//         "id": 2579,
//         "bureaux": "1",
//         "code": "08 02 03 15",
//         "inscrit": "12",
//         "province": "OLOUMI-MANDJE"
//     },
//     {
//         "id": 2580,
//         "bureaux": "1",
//         "code": "08 02 03 16",
//         "inscrit": "53",
//         "province": "OSSAMOUEDEMBO"
//     },
//     {
//         "id": 2581,
//         "bureaux": "11",
//         "code": "08 02 01",
//         "inscrit": "1,689",
//         "province": "LAC ANENGUE"
//     },
//     {
//         "id": 2582,
//         "bureaux": "13",
//         "code": "08 02 02",
//         "inscrit": "2,220",
//         "province": "OCEAN"
//     },
//     {
//         "id": 2583,
//         "bureaux": "17",
//         "code": "08 02 03",
//         "inscrit": "1,424",
//         "province": "OGOOUE"
//     },
//     {
//         "id": 2584,
//         "bureaux": "2",
//         "code": "08 03 00 01",
//         "inscrit": "642",
//         "province": "C E S"
//     },
//     {
//         "id": 2585,
//         "bureaux": "1",
//         "code": "08 03 00 02",
//         "inscrit": "280",
//         "province": "ECOLE MATERNELLE"
//     },
//     {
//         "id": 2586,
//         "bureaux": "1",
//         "code": "08 03 00 03",
//         "inscrit": "238",
//         "province": "ECOLE PUBLIQUE"
//     },
//     {
//         "id": 2587,
//         "bureaux": "1",
//         "code": "08 03 00 04",
//         "inscrit": "91",
//         "province": "FONTAINE PUBLIQUE"
//     },
//     {
//         "id": 2588,
//         "bureaux": "1",
//         "code": "08 03 00 05",
//         "inscrit": "149",
//         "province": "CASE DE PASSAGE"
//     },
//     {
//         "id": 2589,
//         "bureaux": "1",
//         "code": "08 03 00 06",
//         "inscrit": "187",
//         "province": "ASSEMBLEE DEPARTEMENTALE"
//     },
//     {
//         "id": 2590,
//         "bureaux": "2",
//         "code": "08 03 00 07",
//         "inscrit": "712",
//         "province": "PLAINE 4"
//     },
//     {
//         "id": 2591,
//         "bureaux": "1",
//         "code": "08 03 00 08",
//         "inscrit": "208",
//         "province": "PLAINE 2"
//     },
//     {
//         "id": 2592,
//         "bureaux": "1",
//         "code": "08 03 00 09",
//         "inscrit": "416",
//         "province": "PLAINE 5"
//     },
//     {
//         "id": 2593,
//         "bureaux": "11",
//         "code": "08 03 00",
//         "inscrit": "2,923",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 2594,
//         "bureaux": "1",
//         "code": "08 04 01 01",
//         "inscrit": "139",
//         "province": "MASSO-MALA"
//     },
//     {
//         "id": 2595,
//         "bureaux": "1",
//         "code": "08 04 01 02",
//         "inscrit": "156",
//         "province": "MAYONAMI"
//     },
//     {
//         "id": 2596,
//         "bureaux": "1",
//         "code": "08 04 01 03",
//         "inscrit": "140",
//         "province": "MBISSI"
//     },
//     {
//         "id": 2597,
//         "bureaux": "1",
//         "code": "08 04 01 04",
//         "inscrit": "223",
//         "province": "IGOTCHI"
//     },
//     {
//         "id": 2598,
//         "bureaux": "1",
//         "code": "08 04 01 05",
//         "inscrit": "52",
//         "province": "KATCHIMBA"
//     },
//     {
//         "id": 2599,
//         "bureaux": "1",
//         "code": "08 04 01 06",
//         "inscrit": "125",
//         "province": "MBOUDA"
//     },
//     {
//         "id": 2600,
//         "bureaux": "1",
//         "code": "08 04 02 01",
//         "inscrit": "289",
//         "province": "SETTE-CAMA"
//     },
//     {
//         "id": 2601,
//         "bureaux": "1",
//         "code": "08 04 02 02",
//         "inscrit": "88",
//         "province": "PITONGA"
//     },
//     {
//         "id": 2602,
//         "bureaux": "1",
//         "code": "08 04 02 03",
//         "inscrit": "190",
//         "province": "MOUNGAMBI"
//     },
//     {
//         "id": 2603,
//         "bureaux": "1",
//         "code": "08 04 02 04",
//         "inscrit": "69",
//         "province": "NGOMAGUENA"
//     },
//     {
//         "id": 2604,
//         "bureaux": "1",
//         "code": "08 04 02 05",
//         "inscrit": "102",
//         "province": "IBOUKA"
//     },
//     {
//         "id": 2605,
//         "bureaux": "1",
//         "code": "08 04 02 06",
//         "inscrit": "7",
//         "province": "SOUNGA"
//     },
//     {
//         "id": 2606,
//         "bureaux": "6",
//         "code": "08 04 01",
//         "inscrit": "835",
//         "province": "BASSE-NYANGA"
//     },
//     {
//         "id": 2607,
//         "bureaux": "6",
//         "code": "08 04 02",
//         "inscrit": "745",
//         "province": "LAGUNE NDOUGOU"
//     },
//     {
//         "id": 2608,
//         "bureaux": "2",
//         "code": "08 04 03",
//         "inscrit": "394",
//         "province": "REMBO-BONGOU"
//     },
//     {
//         "id": 2609,
//         "bureaux": "1",
//         "code": "08 05 00 01",
//         "inscrit": "300",
//         "province": "MAISON DE LA CULTURE"
//     },
//     {
//         "id": 2610,
//         "bureaux": "1",
//         "code": "08 05 00 02",
//         "inscrit": "346",
//         "province": "ECOLE PUBLIQUE"
//     },
//     {
//         "id": 2611,
//         "bureaux": "2",
//         "code": "08 05 00 03",
//         "inscrit": "544",
//         "province": "C.E.S DOMBOUE"
//     },
//     {
//         "id": 2612,
//         "bureaux": "4",
//         "code": "08 05 00",
//         "inscrit": "1,190",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 2613,
//         "bureaux": "1",
//         "code": "08 06 01 01",
//         "inscrit": "88",
//         "province": "BATANGA"
//     },
//     {
//         "id": 2614,
//         "bureaux": "1",
//         "code": "08 06 01 02",
//         "inscrit": "32",
//         "province": "ONGUENDJO"
//     },
//     {
//         "id": 2615,
//         "bureaux": "1",
//         "code": "08 06 01 04",
//         "inscrit": "56",
//         "province": "KONGO 1"
//     },
//     {
//         "id": 2616,
//         "bureaux": "1",
//         "code": "08 06 01 05",
//         "inscrit": "21",
//         "province": "VILLAGE INDJOLE"
//     },
//     {
//         "id": 2617,
//         "bureaux": "1",
//         "code": "08 06 01 06",
//         "inscrit": "108",
//         "province": "ASSEWE 1"
//     },
//     {
//         "id": 2618,
//         "bureaux": "1",
//         "code": "08 06 01 07",
//         "inscrit": "45",
//         "province": "AVEGOMBOUIRI"
//     },
//     {
//         "id": 2619,
//         "bureaux": "1",
//         "code": "08 06 01 09",
//         "inscrit": "40",
//         "province": "ATONGOWANGA"
//     },
//     {
//         "id": 2620,
//         "bureaux": "1",
//         "code": "08 06 01 10",
//         "inscrit": "20",
//         "province": "NENGUE-SIKA"
//     },
//     {
//         "id": 2621,
//         "bureaux": "1",
//         "code": "08 06 01 11",
//         "inscrit": "72",
//         "province": "STE ANNE ODIMBA"
//     },
//     {
//         "id": 2622,
//         "bureaux": "1",
//         "code": "08 06 01 12",
//         "inscrit": "1",
//         "province": "MANDAGANGA"
//     },
//     {
//         "id": 2623,
//         "bureaux": "1",
//         "code": "08 06 01 13",
//         "inscrit": "29",
//         "province": "LASSONIE"
//     },
//     {
//         "id": 2624,
//         "bureaux": "1",
//         "code": "08 06 01 14",
//         "inscrit": "60",
//         "province": "TCHONGA VILLE"
//     },
//     {
//         "id": 2625,
//         "bureaux": "1",
//         "code": "08 06 01 15",
//         "inscrit": "24",
//         "province": "ESSOGOUE-AYILE"
//     },
//     {
//         "id": 2626,
//         "bureaux": "1",
//         "code": "08 06 02 01",
//         "inscrit": "141",
//         "province": "MPIVIE"
//     },
//     {
//         "id": 2627,
//         "bureaux": "1",
//         "code": "08 06 02 02",
//         "inscrit": "50",
//         "province": "IDJEMBO"
//     },
//     {
//         "id": 2628,
//         "bureaux": "1",
//         "code": "08 06 02 03",
//         "inscrit": "121",
//         "province": "NTCHONGOROVE"
//     },
//     {
//         "id": 2629,
//         "bureaux": "1",
//         "code": "08 06 02 04",
//         "inscrit": "1",
//         "province": "TCHONIMBANI"
//     },
//     {
//         "id": 2630,
//         "bureaux": "1",
//         "code": "08 06 02 05",
//         "inscrit": "41",
//         "province": "YOMBE-OBIRO"
//     },
//     {
//         "id": 2631,
//         "bureaux": "1",
//         "code": "08 06 03 01",
//         "inscrit": "128",
//         "province": "NDOUGOU CENTRE (ECOLE PUBLIQUE"
//     },
//     {
//         "id": 2632,
//         "bureaux": "1",
//         "code": "08 06 03 02",
//         "inscrit": "84",
//         "province": "SADOUGOUNGOU"
//     },
//     {
//         "id": 2633,
//         "bureaux": "1",
//         "code": "08 06 03 03",
//         "inscrit": "140",
//         "province": "MIGAMBA"
//     },
//     {
//         "id": 2634,
//         "bureaux": "1",
//         "code": "08 06 03 04",
//         "inscrit": "67",
//         "province": "MOUSSAMUKUGU"
//     },
//     {
//         "id": 2635,
//         "bureaux": "1",
//         "code": "08 06 03 05",
//         "inscrit": "37",
//         "province": "MPERE"
//     },
//     {
//         "id": 2636,
//         "bureaux": "1",
//         "code": "08 06 03 06",
//         "inscrit": "10",
//         "province": "SIMANI"
//     },
//     {
//         "id": 2637,
//         "bureaux": "1",
//         "code": "08 06 03 07",
//         "inscrit": "41",
//         "province": "IKASSA-MABOUNA"
//     },
//     {
//         "id": 2638,
//         "bureaux": "1",
//         "code": "08 06 03 09",
//         "inscrit": "41",
//         "province": "AZENDJE"
//     },
//     {
//         "id": 2639,
//         "bureaux": "1",
//         "code": "08 06 03 10",
//         "inscrit": "59",
//         "province": "VENDARENE"
//     },
//     {
//         "id": 2640,
//         "bureaux": "1",
//         "code": "08 06 03 11",
//         "inscrit": "40",
//         "province": "MISSOULA NGOLA"
//     },
//     {
//         "id": 2641,
//         "bureaux": "1",
//         "code": "08 06 03 12",
//         "inscrit": "58",
//         "province": "PLAINE WORA-NA-YENO"
//     },
//     {
//         "id": 2642,
//         "bureaux": "1",
//         "code": "08 06 03 13",
//         "inscrit": "44",
//         "province": "DOUARTSANDA"
//     },
//     {
//         "id": 2643,
//         "bureaux": "1",
//         "code": "08 06 03 14",
//         "inscrit": "74",
//         "province": "DIAMBOU A-KOUMOU"
//     },
//     {
//         "id": 2644,
//         "bureaux": "1",
//         "code": "08 06 03 15",
//         "inscrit": "128",
//         "province": "MIFOUMA"
//     },
//     {
//         "id": 2645,
//         "bureaux": "1",
//         "code": "08 06 03 16",
//         "inscrit": "66",
//         "province": "RABI VILLAGE"
//     },
//     {
//         "id": 2646,
//         "bureaux": "1",
//         "code": "08 06 03 17",
//         "inscrit": "11",
//         "province": "BOUNDOU"
//     },
//     {
//         "id": 2647,
//         "bureaux": "1",
//         "code": "08 06 03 18",
//         "inscrit": "46",
//         "province": "MOUKENDOU"
//     },
//     {
//         "id": 2648,
//         "bureaux": "1",
//         "code": "08 06 03 19",
//         "inscrit": "61",
//         "province": "GOUELIGA"
//     },
//     {
//         "id": 2649,
//         "bureaux": "1",
//         "code": "08 06 03 20",
//         "inscrit": "136",
//         "province": "RABI CHANTIER C B G"
//     },
//     {
//         "id": 2650,
//         "bureaux": "1",
//         "code": "08 06 03 21",
//         "inscrit": "30",
//         "province": "DIANONGO"
//     },
//     {
//         "id": 2651,
//         "bureaux": "13",
//         "code": "08 06 01",
//         "inscrit": "596",
//         "province": "LAGUNE NKOMI"
//     },
//     {
//         "id": 2652,
//         "bureaux": "5",
//         "code": "08 06 02",
//         "inscrit": "354",
//         "province": "LAGUNE NGOWE (IGUELA)"
//     },
//     {
//         "id": 2653,
//         "bureaux": "20",
//         "code": "08 06 03",
//         "inscrit": "1,301",
//         "province": "OREMBO-NKOMI"
//     },
//     {
//         "id": 2654,
//         "bureaux": "108",
//         "code": "801",
//         "inscrit": "48,462",
//         "province": "PORT-GENTIL"
//     },
//     {
//         "id": 2655,
//         "bureaux": "41",
//         "code": "802",
//         "inscrit": "5,333",
//         "province": "BENDJE (PORT-GENTIL)"
//     },
//     {
//         "id": 2656,
//         "bureaux": "11",
//         "code": "803",
//         "inscrit": "2,923",
//         "province": "GAMBA"
//     },
//     {
//         "id": 2657,
//         "bureaux": "14",
//         "code": "804",
//         "inscrit": "1,974",
//         "province": "NDOUGOU (GAMBA)"
//     },
//     {
//         "id": 2658,
//         "bureaux": "4",
//         "code": "805",
//         "inscrit": "1,190",
//         "province": "OMBOUE"
//     },
//     {
//         "id": 2659,
//         "bureaux": "38",
//         "code": "806",
//         "inscrit": "2,251",
//         "province": "ETIMBOUE  (OMBOUE)"
//     },
//     {
//         "id": 2660,
//         "bureaux": "4",
//         "code": "09 01 01 01",
//         "inscrit": "1,869",
//         "province": "E.P.C. ST ELOI AKOAKAM"
//     },
//     {
//         "id": 2661,
//         "bureaux": "2",
//         "code": "09 01 01 02",
//         "inscrit": "831",
//         "province": "T.P MINKA-NFOUA"
//     },
//     {
//         "id": 2662,
//         "bureaux": "2",
//         "code": "03 01 01 01",
//         "inscrit": "691",
//         "province": "E.P LALALA (CENTRE VILLE)"
//     },
//     {
//         "id": 2663,
//         "bureaux": "2",
//         "code": "03 01 01 02",
//         "inscrit": "841",
//         "province": "FOYER PROTESTANT"
//     },
//     {
//         "id": 2664,
//         "bureaux": "4",
//         "code": "03 01 01 03",
//         "inscrit": "1,598",
//         "province": "LYCEE CHARLES MEFANE"
//     },
//     {
//         "id": 2665,
//         "bureaux": "1",
//         "code": "03 01 01 04",
//         "inscrit": "389",
//         "province": "ABONGO"
//     },
//     {
//         "id": 2666,
//         "bureaux": "2",
//         "code": "03 01 01 05",
//         "inscrit": "948",
//         "province": "ATONGOWANGA (EC AVENIR B)"
//     },
//     {
//         "id": 2667,
//         "bureaux": "1",
//         "code": "03 01 01 06",
//         "inscrit": "480",
//         "province": "POINT V"
//     },
//     {
//         "id": 2668,
//         "bureaux": "2",
//         "code": "03 01 01 07",
//         "inscrit": "616",
//         "province": "EC ADOUMA"
//     },
//     {
//         "id": 2669,
//         "bureaux": "2",
//         "code": "03 01 01 08",
//         "inscrit": "643",
//         "province": "EC MOUSSAMOUKOUGOU"
//     },
//     {
//         "id": 2670,
//         "bureaux": "1",
//         "code": "03 01 01 09",
//         "inscrit": "492",
//         "province": "EC GRAND VILLAGE 1"
//     },
//     {
//         "id": 2671,
//         "bureaux": "1",
//         "code": "03 01 01 10",
//         "inscrit": "292",
//         "province": "EC GRAND VILLAGE 2"
//     },
//     {
//         "id": 2672,
//         "bureaux": "1",
//         "code": "03 01 01 11",
//         "inscrit": "426",
//         "province": "DAKAR (EC AVENIR)"
//     },
//     {
//         "id": 2673,
//         "bureaux": "1",
//         "code": "03 01 01 12",
//         "inscrit": "239",
//         "province": "VILLAGE LUMIERE (SCHWEITZER)"
//     },
//     {
//         "id": 2674,
//         "bureaux": "1",
//         "code": "03 01 01 13",
//         "inscrit": "263",
//         "province": "ADIWA ST FRANCOIS"
//     },
//     {
//         "id": 2675,
//         "bureaux": "4",
//         "code": "03 01 02 01",
//         "inscrit": "1,714",
//         "province": "PETIT PARIS 2 (AVIATION)"
//     },
//     {
//         "id": 2676,
//         "bureaux": "2",
//         "code": "03 01 02 02",
//         "inscrit": "957",
//         "province": "ECOLE ATSIE"
//     },
//     {
//         "id": 2677,
//         "bureaux": "1",
//         "code": "03 01 02 03",
//         "inscrit": "223",
//         "province": "ANIOUZOUMA (EC CATH ISAAC)"
//     },
//     {
//         "id": 2678,
//         "bureaux": "3",
//         "code": "03 01 02 04",
//         "inscrit": "1,137",
//         "province": "QUARTIER CARRIERE"
//     },
//     {
//         "id": 2679,
//         "bureaux": "1",
//         "code": "03 01 02 05",
//         "inscrit": "492",
//         "province": "ECOLE PUBL MAGNANG"
//     },
//     {
//         "id": 2680,
//         "bureaux": "4",
//         "code": "03 01 02 06",
//         "inscrit": "1,637",
//         "province": "EC-JACQUELINE-RAWIRI"
//     },
//     {
//         "id": 2681,
//         "bureaux": "1",
//         "code": "03 01 02 07",
//         "inscrit": "299",
//         "province": "MALEBE"
//     },
//     {
//         "id": 2682,
//         "bureaux": "1",
//         "code": "03 01 02 08",
//         "inscrit": "444",
//         "province": "PETIT PARIS"
//     },
//     {
//         "id": 2683,
//         "bureaux": "2",
//         "code": "03 01 02 09",
//         "inscrit": "680",
//         "province": "EC-ISSAC A"
//     },
//     {
//         "id": 2684,
//         "bureaux": "2",
//         "code": "03 01 02 10",
//         "inscrit": "536",
//         "province": "ECOLE-ISSAAC B"
//     },
//     {
//         "id": 2685,
//         "bureaux": "1",
//         "code": "03 01 02 11",
//         "inscrit": "73",
//         "province": "MBILANDZAMBI"
//     },
//     {
//         "id": 2686,
//         "bureaux": "21",
//         "code": "03 01 01",
//         "inscrit": "7,918",
//         "province": "1ER  ARRONDISSEMENT"
//     },
//     {
//         "id": 2687,
//         "bureaux": "22",
//         "code": "03 01 02",
//         "inscrit": "8,192",
//         "province": "2EME ARRONDISSEMENT"
//     },
//     {
//         "id": 2688,
//         "bureaux": "1",
//         "code": "03 02 01 01",
//         "inscrit": "87",
//         "province": "ADOLE-MANDJI"
//     },
//     {
//         "id": 2689,
//         "bureaux": "1",
//         "code": "03 02 01 02",
//         "inscrit": "19",
//         "province": "ELONG-EKO (AREVOMA II)"
//     },
//     {
//         "id": 2690,
//         "bureaux": "1",
//         "code": "03 02 01 03",
//         "inscrit": "21",
//         "province": "YANEBOUR"
//     },
//     {
//         "id": 2691,
//         "bureaux": "1",
//         "code": "03 02 01 04",
//         "inscrit": "121",
//         "province": "DAKAR-GOME"
//     },
//     {
//         "id": 2692,
//         "bureaux": "1",
//         "code": "03 02 01 05",
//         "inscrit": "19",
//         "province": "LOGUET"
//     },
//     {
//         "id": 2693,
//         "bureaux": "1",
//         "code": "03 02 02 01",
//         "inscrit": "75",
//         "province": "NOMBEDOUMA"
//     },
//     {
//         "id": 2694,
//         "bureaux": "1",
//         "code": "03 02 02 02",
//         "inscrit": "29",
//         "province": "NENGUENTOGOLO"
//     },
//     {
//         "id": 2695,
//         "bureaux": "1",
//         "code": "03 02 02 03",
//         "inscrit": "49",
//         "province": "OGUEWA-NZAMATA"
//     },
//     {
//         "id": 2696,
//         "bureaux": "1",
//         "code": "03 02 02 04",
//         "inscrit": "50",
//         "province": "ODIMBA"
//     },
//     {
//         "id": 2697,
//         "bureaux": "1",
//         "code": "03 02 02 05",
//         "inscrit": "8",
//         "province": "MWAM-NZA-MANE I"
//     },
//     {
//         "id": 2698,
//         "bureaux": "1",
//         "code": "03 02 02 06",
//         "inscrit": "33",
//         "province": "NTAMBE"
//     },
//     {
//         "id": 2699,
//         "bureaux": "1",
//         "code": "03 02 02 07",
//         "inscrit": "32",
//         "province": "NZAMAKESSILE"
//     },
//     {
//         "id": 2700,
//         "bureaux": "1",
//         "code": "03 02 02 08",
//         "inscrit": "23",
//         "province": "N LONG"
//     },
//     {
//         "id": 2701,
//         "bureaux": "1",
//         "code": "03 02 02 09",
//         "inscrit": "34",
//         "province": "NTCHOUA"
//     },
//     {
//         "id": 2702,
//         "bureaux": "1",
//         "code": "03 02 02 10",
//         "inscrit": "15",
//         "province": "NZOUGHE (NKANGUE II)"
//     },
//     {
//         "id": 2703,
//         "bureaux": "1",
//         "code": "03 02 02 11",
//         "inscrit": "42",
//         "province": "ALLONHA 1"
//     },
//     {
//         "id": 2704,
//         "bureaux": "1",
//         "code": "03 02 02 12",
//         "inscrit": "45",
//         "province": "NDAMA (LEBOUSSOU)"
//     },
//     {
//         "id": 2705,
//         "bureaux": "1",
//         "code": "03 02 02 13",
//         "inscrit": "1",
//         "province": "CHANTIER CHARBONNIER"
//     },
//     {
//         "id": 2706,
//         "bureaux": "1",
//         "code": "03 02 02 14",
//         "inscrit": "57",
//         "province": "AKOUM-LAM"
//     },
//     {
//         "id": 2707,
//         "bureaux": "1",
//         "code": "03 02 02 15",
//         "inscrit": "2",
//         "province": "SAINT-LOUIS"
//     },
//     {
//         "id": 2708,
//         "bureaux": "1",
//         "code": "03 02 02 17",
//         "inscrit": "27",
//         "province": "VILLAGE NGUIABETA"
//     },
//     {
//         "id": 2709,
//         "bureaux": "1",
//         "code": "03 02 02 18",
//         "inscrit": "11",
//         "province": "RENDOUGOU"
//     },
//     {
//         "id": 2710,
//         "bureaux": "1",
//         "code": "03 02 02 19",
//         "inscrit": "4",
//         "province": "POINTE NOIRE"
//     },
//     {
//         "id": 2711,
//         "bureaux": "1",
//         "code": "03 02 02 21",
//         "inscrit": "16",
//         "province": "ISSANGUI"
//     },
//     {
//         "id": 2712,
//         "bureaux": "1",
//         "code": "03 02 02 22",
//         "inscrit": "108",
//         "province": "ALLONHA 3"
//     },
//     {
//         "id": 2713,
//         "bureaux": "1",
//         "code": "03 02 02 23",
//         "inscrit": "17",
//         "province": "NZAMATA"
//     },
//     {
//         "id": 2714,
//         "bureaux": "1",
//         "code": "03 02 03 01",
//         "inscrit": "115",
//         "province": "MITONET (MIMONGO)"
//     },
//     {
//         "id": 2715,
//         "bureaux": "1",
//         "code": "03 02 03 02",
//         "inscrit": "164",
//         "province": "NZOGHE-BANG (ECOLE CATH.)"
//     },
//     {
//         "id": 2716,
//         "bureaux": "1",
//         "code": "03 02 03 03",
//         "inscrit": "68",
//         "province": "WELIGA II"
//     },
//     {
//         "id": 2717,
//         "bureaux": "1",
//         "code": "03 02 03 04",
//         "inscrit": "114",
//         "province": "KOUNGOULE"
//     },
//     {
//         "id": 2718,
//         "bureaux": "1",
//         "code": "03 02 03 05",
//         "inscrit": "49",
//         "province": "ADANHE EC PUBLIQUE"
//     },
//     {
//         "id": 2719,
//         "bureaux": "1",
//         "code": "03 02 03 06",
//         "inscrit": "48",
//         "province": "MEDANG-NKOGHE"
//     },
//     {
//         "id": 2720,
//         "bureaux": "1",
//         "code": "03 02 03 07",
//         "inscrit": "62",
//         "province": "NKOGHE-MBOUN"
//     },
//     {
//         "id": 2721,
//         "bureaux": "1",
//         "code": "03 02 03 08",
//         "inscrit": "108",
//         "province": "WELIGA I"
//     },
//     {
//         "id": 2722,
//         "bureaux": "1",
//         "code": "03 02 03 09",
//         "inscrit": "148",
//         "province": "E.P BENGUIE 1-2-3"
//     },
//     {
//         "id": 2723,
//         "bureaux": "1",
//         "code": "03 02 03 10",
//         "inscrit": "220",
//         "province": "E.P BENGUIE 4"
//     },
//     {
//         "id": 2724,
//         "bureaux": "1",
//         "code": "03 02 03 12",
//         "inscrit": "332",
//         "province": "E.P. PARIS-BIFOUN 1 ET 2"
//     },
//     {
//         "id": 2725,
//         "bureaux": "1",
//         "code": "03 02 03 13",
//         "inscrit": "46",
//         "province": "VILLAGE GRAVIER"
//     },
//     {
//         "id": 2726,
//         "bureaux": "1",
//         "code": "03 02 04 01",
//         "inscrit": "123",
//         "province": "JUNCKVILLE"
//     },
//     {
//         "id": 2727,
//         "bureaux": "1",
//         "code": "03 02 04 02",
//         "inscrit": "4",
//         "province": "MEDZIME-VINE"
//     },
//     {
//         "id": 2728,
//         "bureaux": "1",
//         "code": "03 02 04 03",
//         "inscrit": "168",
//         "province": "AGROGABON MAKOUKE A"
//     },
//     {
//         "id": 2729,
//         "bureaux": "1",
//         "code": "03 02 04 04",
//         "inscrit": "225",
//         "province": "AGROGABON MAKOUKE B"
//     },
//     {
//         "id": 2730,
//         "bureaux": "1",
//         "code": "03 02 04 05",
//         "inscrit": "201",
//         "province": "VILLAGE MAKOUKE"
//     },
//     {
//         "id": 2731,
//         "bureaux": "1",
//         "code": "03 02 04 06",
//         "inscrit": "136",
//         "province": "AMANENGONE"
//     },
//     {
//         "id": 2732,
//         "bureaux": "1",
//         "code": "03 02 04 07",
//         "inscrit": "85",
//         "province": "AGROGABON MAKOUKE C (HUILERIE)"
//     },
//     {
//         "id": 2733,
//         "bureaux": "1",
//         "code": "03 02 04 08",
//         "inscrit": "367",
//         "province": "BINDO VILLAGE I"
//     },
//     {
//         "id": 2734,
//         "bureaux": "1",
//         "code": "03 02 04 09",
//         "inscrit": "43",
//         "province": "BINDO CHANTIER"
//     },
//     {
//         "id": 2735,
//         "bureaux": "1",
//         "code": "03 02 04 10",
//         "inscrit": "31",
//         "province": "NDOUMANTANG"
//     },
//     {
//         "id": 2736,
//         "bureaux": "1",
//         "code": "03 02 04 11",
//         "inscrit": "16",
//         "province": "BORDEAUX"
//     },
//     {
//         "id": 2737,
//         "bureaux": "1",
//         "code": "03 02 04 12",
//         "inscrit": "5",
//         "province": "MEBANG-METORA"
//     },
//     {
//         "id": 2738,
//         "bureaux": "1",
//         "code": "03 02 04 13",
//         "inscrit": "34",
//         "province": "PLANTATION FOULA"
//     },
//     {
//         "id": 2739,
//         "bureaux": "1",
//         "code": "03 02 04 14",
//         "inscrit": "78",
//         "province": "NGOSSO"
//     },
//     {
//         "id": 2740,
//         "bureaux": "1",
//         "code": "03 02 04 15",
//         "inscrit": "41",
//         "province": "GARAGE"
//     },
//     {
//         "id": 2741,
//         "bureaux": "1",
//         "code": "03 02 05 01",
//         "inscrit": "50",
//         "province": "OMPOMONA"
//     },
//     {
//         "id": 2742,
//         "bureaux": "1",
//         "code": "03 02 05 02",
//         "inscrit": "114",
//         "province": "NTYATANGA I"
//     },
//     {
//         "id": 2743,
//         "bureaux": "1",
//         "code": "03 02 05 03",
//         "inscrit": "21",
//         "province": "MANOGONI (AMBYA)"
//     },
//     {
//         "id": 2744,
//         "bureaux": "1",
//         "code": "03 02 05 04",
//         "inscrit": "201",
//         "province": "NGOMO I ET II"
//     },
//     {
//         "id": 2745,
//         "bureaux": "1",
//         "code": "03 02 05 05",
//         "inscrit": "34",
//         "province": "IGUENDJA"
//     },
//     {
//         "id": 2746,
//         "bureaux": "1",
//         "code": "03 02 05 06",
//         "inscrit": "114",
//         "province": "ASCHOUKA"
//     },
//     {
//         "id": 2747,
//         "bureaux": "1",
//         "code": "03 02 05 08",
//         "inscrit": "15",
//         "province": "POINTE-ELYSE"
//     },
//     {
//         "id": 2748,
//         "bureaux": "1",
//         "code": "03 02 06 01",
//         "inscrit": "31",
//         "province": "LEZINDA"
//     },
//     {
//         "id": 2749,
//         "bureaux": "1",
//         "code": "03 02 06 02",
//         "inscrit": "32",
//         "province": "LESSOBELIA"
//     },
//     {
//         "id": 2750,
//         "bureaux": "1",
//         "code": "03 02 06 03",
//         "inscrit": "166",
//         "province": "BELLE-VUE I"
//     },
//     {
//         "id": 2751,
//         "bureaux": "1",
//         "code": "03 02 06 04",
//         "inscrit": "57",
//         "province": "MASSASSIKE"
//     },
//     {
//         "id": 2752,
//         "bureaux": "1",
//         "code": "03 02 06 05",
//         "inscrit": "54",
//         "province": "AGROGABON NGOUNIE (NZAMATA)"
//     },
//     {
//         "id": 2753,
//         "bureaux": "1",
//         "code": "03 02 06 06",
//         "inscrit": "20",
//         "province": "MBECK-MENU"
//     },
//     {
//         "id": 2754,
//         "bureaux": "1",
//         "code": "03 02 07 01",
//         "inscrit": "4",
//         "province": "MBILANDZAMBI"
//     },
//     {
//         "id": 2755,
//         "bureaux": "1",
//         "code": "03 02 07 02",
//         "inscrit": "77",
//         "province": "E.P.C. ISSALA"
//     },
//     {
//         "id": 2756,
//         "bureaux": "1",
//         "code": "03 02 07 03",
//         "inscrit": "48",
//         "province": "IKEMBELE"
//     },
//     {
//         "id": 2757,
//         "bureaux": "1",
//         "code": "03 02 07 04",
//         "inscrit": "73",
//         "province": "E.P. TSOUKA"
//     },
//     {
//         "id": 2758,
//         "bureaux": "1",
//         "code": "03 02 07 05",
//         "inscrit": "220",
//         "province": "ECOLE KERY"
//     },
//     {
//         "id": 2759,
//         "bureaux": "1",
//         "code": "03 02 07 06",
//         "inscrit": "186",
//         "province": "E.P MASSIKA I-II"
//     },
//     {
//         "id": 2760,
//         "bureaux": "1",
//         "code": "03 02 07 07",
//         "inscrit": "119",
//         "province": "E.P. NOMBAKELE"
//     },
//     {
//         "id": 2761,
//         "bureaux": "1",
//         "code": "03 02 07 08",
//         "inscrit": "93",
//         "province": "KOMI"
//     },
//     {
//         "id": 2762,
//         "bureaux": "1",
//         "code": "03 02 07 09",
//         "inscrit": "93",
//         "province": "E.P.P. LOBI"
//     },
//     {
//         "id": 2763,
//         "bureaux": "1",
//         "code": "03 02 07 10",
//         "inscrit": "165",
//         "province": "E.P TCHAD I-II"
//     },
//     {
//         "id": 2764,
//         "bureaux": "1",
//         "code": "03 02 07 11",
//         "inscrit": "205",
//         "province": "SAINT MARTIN (ZILE)"
//     },
//     {
//         "id": 2765,
//         "bureaux": "1",
//         "code": "03 02 07 12",
//         "inscrit": "87",
//         "province": "AGROGABON ZILE (PLANTAT ZILE)"
//     },
//     {
//         "id": 2766,
//         "bureaux": "1",
//         "code": "03 02 07 13",
//         "inscrit": "45",
//         "province": "ISSINGA"
//     },
//     {
//         "id": 2767,
//         "bureaux": "1",
//         "code": "03 02 07 14",
//         "inscrit": "100",
//         "province": "MIMONGO"
//     },
//     {
//         "id": 2768,
//         "bureaux": "1",
//         "code": "03 02 07 15",
//         "inscrit": "35",
//         "province": "PAGA"
//     },
//     {
//         "id": 2769,
//         "bureaux": "1",
//         "code": "03 02 07 16",
//         "inscrit": "38",
//         "province": "IMENOU I"
//     },
//     {
//         "id": 2770,
//         "bureaux": "1",
//         "code": "03 02 07 17",
//         "inscrit": "36",
//         "province": "IMENOU II"
//     },
//     {
//         "id": 2771,
//         "bureaux": "1",
//         "code": "03 02 07 18",
//         "inscrit": "57",
//         "province": "NGOUDOUFALA P.K 14"
//     },
//     {
//         "id": 2772,
//         "bureaux": "1",
//         "code": "03 02 07 19",
//         "inscrit": "39",
//         "province": "MAYENGUE"
//     },
//     {
//         "id": 2773,
//         "bureaux": "5",
//         "code": "03 02 01",
//         "inscrit": "267",
//         "province": "LACS DU NORD"
//     },
//     {
//         "id": 2774,
//         "bureaux": "21",
//         "code": "03 02 02",
//         "inscrit": "678",
//         "province": "LACS DU SUD"
//     },
//     {
//         "id": 2775,
//         "bureaux": "12",
//         "code": "03 02 03",
//         "inscrit": "1,474",
//         "province": "ROUTE MBINE"
//     },
//     {
//         "id": 2776,
//         "bureaux": "15",
//         "code": "03 02 04",
//         "inscrit": "1,557",
//         "province": "OGOOUE-AMONT"
//     },
//     {
//         "id": 2777,
//         "bureaux": "7",
//         "code": "03 02 05",
//         "inscrit": "549",
//         "province": "OGOOUE-AVAL"
//     },
//     {
//         "id": 2778,
//         "bureaux": "6",
//         "code": "03 02 06",
//         "inscrit": "360",
//         "province": "OGOOUE-NGOUNIE"
//     },
//     {
//         "id": 2779,
//         "bureaux": "19",
//         "code": "03 02 07",
//         "inscrit": "1,720",
//         "province": "BIWENI-DIALA (ROUTE FOUGAMOU)"
//     },
//     {
//         "id": 2780,
//         "bureaux": "1",
//         "code": "03 03 00 01",
//         "inscrit": "148",
//         "province": "BINGOMA-NORD"
//     },
//     {
//         "id": 2781,
//         "bureaux": "1",
//         "code": "03 03 00 02",
//         "inscrit": "317",
//         "province": "BINGOMA-SUD (BELLE VUE)"
//     },
//     {
//         "id": 2782,
//         "bureaux": "1",
//         "code": "03 03 00 03",
//         "inscrit": "256",
//         "province": "BINGOMA (CENTRE)"
//     },
//     {
//         "id": 2783,
//         "bureaux": "1",
//         "code": "03 03 00 04",
//         "inscrit": "193",
//         "province": "MISSANGA SAINT JEAN"
//     },
//     {
//         "id": 2784,
//         "bureaux": "1",
//         "code": "03 03 00 05",
//         "inscrit": "238",
//         "province": "MISSANGA NAZARETH"
//     },
//     {
//         "id": 2785,
//         "bureaux": "1",
//         "code": "03 03 00 06",
//         "inscrit": "271",
//         "province": "ANDOCK (MBILAVION)"
//     },
//     {
//         "id": 2786,
//         "bureaux": "1",
//         "code": "03 03 00 07",
//         "inscrit": "139",
//         "province": "NYANKOK-MBOUNE I-II"
//     },
//     {
//         "id": 2787,
//         "bureaux": "1",
//         "code": "03 03 00 08",
//         "inscrit": "175",
//         "province": "CENTRE VILLE"
//     },
//     {
//         "id": 2788,
//         "bureaux": "2",
//         "code": "03 03 00 09",
//         "inscrit": "560",
//         "province": "KM 1 (SORBONE)"
//     },
//     {
//         "id": 2789,
//         "bureaux": "10",
//         "code": "03 03 00",
//         "inscrit": "2,297",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 2790,
//         "bureaux": "2",
//         "code": "03 04 01 01",
//         "inscrit": "598",
//         "province": "E.P. BIFOUN- CENTRE"
//     },
//     {
//         "id": 2791,
//         "bureaux": "1",
//         "code": "03 04 01 02",
//         "inscrit": "189",
//         "province": "WELIGA 1 (CHEF REGROUP)"
//     },
//     {
//         "id": 2792,
//         "bureaux": "1",
//         "code": "03 04 01 03",
//         "inscrit": "22",
//         "province": "WELIGA 2 (CHEF VILLAGE)"
//     },
//     {
//         "id": 2793,
//         "bureaux": "1",
//         "code": "03 04 01 04",
//         "inscrit": "119",
//         "province": "BIFOUN III (CHEF VILLAGE)"
//     },
//     {
//         "id": 2794,
//         "bureaux": "1",
//         "code": "03 04 01 05",
//         "inscrit": "33",
//         "province": "YOKO QUAND-MEME (CHEF.V.)"
//     },
//     {
//         "id": 2795,
//         "bureaux": "0",
//         "code": "03 04 01 08",
//         "inscrit": "0",
//         "province": "ADOUMEVOUNG RIVE-DROITE"
//     },
//     {
//         "id": 2796,
//         "bureaux": "1",
//         "code": "03 04 01 11",
//         "inscrit": "55",
//         "province": "TOUM RIVE-DROITE"
//     },
//     {
//         "id": 2797,
//         "bureaux": "1",
//         "code": "03 04 02 01",
//         "inscrit": "106",
//         "province": "E.P. EKORODO"
//     },
//     {
//         "id": 2798,
//         "bureaux": "1",
//         "code": "03 04 02 02",
//         "inscrit": "246",
//         "province": "E.P.P. EBEL RIVE GAUCHE"
//     },
//     {
//         "id": 2799,
//         "bureaux": "1",
//         "code": "03 04 02 03",
//         "inscrit": "211",
//         "province": "E.P. EBEL RIVE DROITE"
//     },
//     {
//         "id": 2800,
//         "bureaux": "1",
//         "code": "03 04 02 04",
//         "inscrit": "43",
//         "province": "E.P. ABANGA II"
//     },
//     {
//         "id": 2801,
//         "bureaux": "1",
//         "code": "03 04 02 05",
//         "inscrit": "12",
//         "province": "MENGUEGNE (CHEF VILLAGE)"
//     },
//     {
//         "id": 2802,
//         "bureaux": "1",
//         "code": "03 04 03 01",
//         "inscrit": "255",
//         "province": "ESSONG-AUBAMAKALE"
//     },
//     {
//         "id": 2803,
//         "bureaux": "1",
//         "code": "03 04 03 02",
//         "inscrit": "229",
//         "province": "E.P. TRANSGABONAIS"
//     },
//     {
//         "id": 2804,
//         "bureaux": "1",
//         "code": "03 04 03 03",
//         "inscrit": "19",
//         "province": "ALEMBE (CHEF VILLAGE)"
//     },
//     {
//         "id": 2805,
//         "bureaux": "1",
//         "code": "03 04 03 04",
//         "inscrit": "115",
//         "province": "E.P. JUNCKVILLE"
//     },
//     {
//         "id": 2806,
//         "bureaux": "1",
//         "code": "03 04 03 05",
//         "inscrit": "28",
//         "province": "NZAMATA (CHEF VILLAGE)"
//     },
//     {
//         "id": 2807,
//         "bureaux": "1",
//         "code": "03 04 03 06",
//         "inscrit": "274",
//         "province": "OTOUMA B S G"
//     },
//     {
//         "id": 2808,
//         "bureaux": "1",
//         "code": "03 04 03 07",
//         "inscrit": "65",
//         "province": "E.P.C. MEDOUMANE"
//     },
//     {
//         "id": 2809,
//         "bureaux": "1",
//         "code": "03 04 03 08",
//         "inscrit": "122",
//         "province": "E.P.C. MINKOK-MESSENG"
//     },
//     {
//         "id": 2810,
//         "bureaux": "1",
//         "code": "03 04 03 09",
//         "inscrit": "120",
//         "province": "MEVANG METOUANG"
//     },
//     {
//         "id": 2811,
//         "bureaux": "1",
//         "code": "03 04 03 10",
//         "inscrit": "107",
//         "province": "ENGOUGOUME (CHEF REGROUP)"
//     },
//     {
//         "id": 2812,
//         "bureaux": "1",
//         "code": "03 04 03 11",
//         "inscrit": "91",
//         "province": "E.P. OTOUMBI"
//     },
//     {
//         "id": 2813,
//         "bureaux": "1",
//         "code": "03 04 03 12",
//         "inscrit": "161",
//         "province": "ECOLE BSO NDJOLE(MISSANGA)"
//     },
//     {
//         "id": 2814,
//         "bureaux": "1",
//         "code": "03 04 03 14",
//         "inscrit": "57",
//         "province": "BSO-LANO"
//     },
//     {
//         "id": 2815,
//         "bureaux": "1",
//         "code": "03 04 04 01",
//         "inscrit": "160",
//         "province": "E.P. MBILANTEN"
//     },
//     {
//         "id": 2816,
//         "bureaux": "1",
//         "code": "03 04 04 02",
//         "inscrit": "65",
//         "province": "NGOUABILAGHA (CHEF VILLAGE)"
//     },
//     {
//         "id": 2817,
//         "bureaux": "1",
//         "code": "03 04 04 03",
//         "inscrit": "95",
//         "province": "ECOLE PRIVEE PROTESTANTE SAIO"
//     },
//     {
//         "id": 2818,
//         "bureaux": "1",
//         "code": "03 04 04 04",
//         "inscrit": "45",
//         "province": "FERNAN-VAZ (CHEF VILLAGE)"
//     },
//     {
//         "id": 2819,
//         "bureaux": "1",
//         "code": "03 04 04 05",
//         "inscrit": "39",
//         "province": "MALEBA (CHEF VILLAGE)"
//     },
//     {
//         "id": 2820,
//         "bureaux": "1",
//         "code": "03 04 04 06",
//         "inscrit": "42",
//         "province": "EYAMEYONG-MAGUIELA"
//     },
//     {
//         "id": 2821,
//         "bureaux": "1",
//         "code": "03 04 04 07",
//         "inscrit": "62",
//         "province": "BIBOULMAN"
//     },
//     {
//         "id": 2822,
//         "bureaux": "1",
//         "code": "03 04 04 09",
//         "inscrit": "32",
//         "province": "MAGUIELA"
//     },
//     {
//         "id": 2823,
//         "bureaux": "7",
//         "code": "03 04 01",
//         "inscrit": "1,016",
//         "province": "BIFOUN-WELIGA"
//     },
//     {
//         "id": 2824,
//         "bureaux": "5",
//         "code": "03 04 02",
//         "inscrit": "618",
//         "province": "EBEL-ABANGA"
//     },
//     {
//         "id": 2825,
//         "bureaux": "13",
//         "code": "03 04 03",
//         "inscrit": "1,643",
//         "province": "EBEL-ALEMBE"
//     },
//     {
//         "id": 2826,
//         "bureaux": "8",
//         "code": "03 04 04",
//         "inscrit": "540",
//         "province": "SAMKITA"
//     },
//     {
//         "id": 2827,
//         "bureaux": "43",
//         "code": "301",
//         "inscrit": "16,110",
//         "province": "LAMBARENE"
//     },
//     {
//         "id": 2828,
//         "bureaux": "85",
//         "code": "302",
//         "inscrit": "6,605",
//         "province": "OGOOUE ET DES LACS (LAMBARENE)"
//     },
//     {
//         "id": 2829,
//         "bureaux": "10",
//         "code": "303",
//         "inscrit": "2,297",
//         "province": "NDJOLE"
//     },
//     {
//         "id": 2830,
//         "bureaux": "33",
//         "code": "304",
//         "inscrit": "3,817",
//         "province": "ABANGA-BIGNE (NDJOLE)"
//     },
//     {
//         "id": 2831,
//         "bureaux": "1",
//         "code": "04 01 01 01",
//         "inscrit": "277",
//         "province": "ECOLE A"
//     },
//     {
//         "id": 2832,
//         "bureaux": "2",
//         "code": "04 01 01 02",
//         "inscrit": "968",
//         "province": "ECOLE PUBLIQUE  -D-"
//     },
//     {
//         "id": 2833,
//         "bureaux": "3",
//         "code": "04 01 01 03",
//         "inscrit": "1,010",
//         "province": "NOTRE DAME"
//     },
//     {
//         "id": 2834,
//         "bureaux": "3",
//         "code": "04 01 01 04",
//         "inscrit": "1,242",
//         "province": "ST GABRIEL"
//     },
//     {
//         "id": 2835,
//         "bureaux": "4",
//         "code": "04 01 01 05",
//         "inscrit": "1,850",
//         "province": "LYCEE-EXCELLENCE"
//     },
//     {
//         "id": 2836,
//         "bureaux": "1",
//         "code": "04 01 01 06",
//         "inscrit": "490",
//         "province": "LYCEE PROFESSIONNEL"
//     },
//     {
//         "id": 2837,
//         "bureaux": "1",
//         "code": "04 01 01 07",
//         "inscrit": "202",
//         "province": "ECOLE SANTE (ENSAS)"
//     },
//     {
//         "id": 2838,
//         "bureaux": "3",
//         "code": "04 01 01 08",
//         "inscrit": "1,084",
//         "province": "NOUVEAU CES"
//     },
//     {
//         "id": 2839,
//         "bureaux": "3",
//         "code": "04 01 01 09",
//         "inscrit": "1,200",
//         "province": "ECOLE E"
//     },
//     {
//         "id": 2840,
//         "bureaux": "2",
//         "code": "04 01 01 10",
//         "inscrit": "883",
//         "province": "ECOLE COMMUNALE -B-"
//     },
//     {
//         "id": 2841,
//         "bureaux": "1",
//         "code": "04 01 01 11",
//         "inscrit": "241",
//         "province": "ECOLE PRIVE PROTESTANTE"
//     },
//     {
//         "id": 2842,
//         "bureaux": "4",
//         "code": "04 01 02 01",
//         "inscrit": "1,751",
//         "province": "ECOLE PUBLIQUE -C-"
//     },
//     {
//         "id": 2843,
//         "bureaux": "3",
//         "code": "04 01 02 02",
//         "inscrit": "1,022",
//         "province": "ST KISITO"
//     },
//     {
//         "id": 2844,
//         "bureaux": "3",
//         "code": "04 01 02 03",
//         "inscrit": "1,471",
//         "province": "ECOLE-PUBL-F"
//     },
//     {
//         "id": 2845,
//         "bureaux": "2",
//         "code": "04 01 02 04",
//         "inscrit": "612",
//         "province": "IMMEUBLE CNSS\/CNGS"
//     },
//     {
//         "id": 2846,
//         "bureaux": "1",
//         "code": "04 01 02 05",
//         "inscrit": "134",
//         "province": "CENTRE DE FORMATION-P"
//     },
//     {
//         "id": 2847,
//         "bureaux": "24",
//         "code": "04 01 01",
//         "inscrit": "9,447",
//         "province": "1ER  ARRONDISSEMENT"
//     },
//     {
//         "id": 2848,
//         "bureaux": "13",
//         "code": "04 01 02",
//         "inscrit": "4,990",
//         "province": "2EME ARRONDISSEMENT"
//     },
//     {
//         "id": 2849,
//         "bureaux": "2",
//         "code": "04 02 01 01",
//         "inscrit": "649",
//         "province": "MOUALO"
//     },
//     {
//         "id": 2850,
//         "bureaux": "1",
//         "code": "04 02 01 02",
//         "inscrit": "363",
//         "province": "SAINT-MARTIN"
//     },
//     {
//         "id": 2851,
//         "bureaux": "1",
//         "code": "04 02 01 03",
//         "inscrit": "94",
//         "province": "MIGABE"
//     },
//     {
//         "id": 2852,
//         "bureaux": "1",
//         "code": "04 02 02 01",
//         "inscrit": "353",
//         "province": "IGOUMA I"
//     },
//     {
//         "id": 2853,
//         "bureaux": "1",
//         "code": "04 02 02 02",
//         "inscrit": "181",
//         "province": "IGOUMA 2"
//     },
//     {
//         "id": 2854,
//         "bureaux": "1",
//         "code": "04 02 02 03",
//         "inscrit": "162",
//         "province": "DIKOKA"
//     },
//     {
//         "id": 2855,
//         "bureaux": "1",
//         "code": "04 02 02 04",
//         "inscrit": "244",
//         "province": "MOKABO"
//     },
//     {
//         "id": 2856,
//         "bureaux": "1",
//         "code": "04 02 02 05",
//         "inscrit": "164",
//         "province": "BANDI 1 ET 2"
//     },
//     {
//         "id": 2857,
//         "bureaux": "1",
//         "code": "04 02 03 01",
//         "inscrit": "177",
//         "province": "NOMBAKELE"
//     },
//     {
//         "id": 2858,
//         "bureaux": "1",
//         "code": "04 02 03 02",
//         "inscrit": "74",
//         "province": "IDOUMI"
//     },
//     {
//         "id": 2859,
//         "bureaux": "1",
//         "code": "04 02 03 03",
//         "inscrit": "351",
//         "province": "MOULANDOUFOUALA"
//     },
//     {
//         "id": 2860,
//         "bureaux": "1",
//         "code": "04 02 03 04",
//         "inscrit": "130",
//         "province": "MOUTASSOU"
//     },
//     {
//         "id": 2861,
//         "bureaux": "1",
//         "code": "04 02 03 05",
//         "inscrit": "57",
//         "province": "KOUMBANOU"
//     },
//     {
//         "id": 2862,
//         "bureaux": "1",
//         "code": "04 02 03 06",
//         "inscrit": "114",
//         "province": "IKOLO"
//     },
//     {
//         "id": 2863,
//         "bureaux": "1",
//         "code": "04 02 03 07",
//         "inscrit": "120",
//         "province": "MAKANDA"
//     },
//     {
//         "id": 2864,
//         "bureaux": "2",
//         "code": "04 02 03 08",
//         "inscrit": "537",
//         "province": "DOUYA"
//     },
//     {
//         "id": 2865,
//         "bureaux": "4",
//         "code": "04 02 01",
//         "inscrit": "1,106",
//         "province": "DIBADI"
//     },
//     {
//         "id": 2866,
//         "bureaux": "5",
//         "code": "04 02 02",
//         "inscrit": "1,104",
//         "province": "DIKOKA"
//     },
//     {
//         "id": 2867,
//         "bureaux": "9",
//         "code": "04 02 03",
//         "inscrit": "1,560",
//         "province": "NGOUNIE CENTRALE"
//     },
//     {
//         "id": 2868,
//         "bureaux": "1",
//         "code": "04 03 00 01",
//         "inscrit": "333",
//         "province": "CITE ADMINIST ECOLE PUB. CENTR"
//     },
//     {
//         "id": 2869,
//         "bureaux": "1",
//         "code": "04 03 00 02",
//         "inscrit": "329",
//         "province": "ECOLE PUBL. DE BASSALI"
//     },
//     {
//         "id": 2870,
//         "bureaux": "1",
//         "code": "04 03 00 03",
//         "inscrit": "316",
//         "province": "KERIDIAMBOU  CES"
//     },
//     {
//         "id": 2871,
//         "bureaux": "1",
//         "code": "04 03 00 04",
//         "inscrit": "371",
//         "province": "ECOLE PUBL. DE NGOUASSA"
//     },
//     {
//         "id": 2872,
//         "bureaux": "2",
//         "code": "04 03 00 05",
//         "inscrit": "518",
//         "province": "BELLE-VILLE ECOLE CATH. STE FA"
//     },
//     {
//         "id": 2873,
//         "bureaux": "2",
//         "code": "04 03 00 06",
//         "inscrit": "569",
//         "province": "ECOLE PUBL. DE DAKAR"
//     },
//     {
//         "id": 2874,
//         "bureaux": "1",
//         "code": "04 03 00 07",
//         "inscrit": "399",
//         "province": "DAKAR SONG ET DAKAR BAS FOND"
//     },
//     {
//         "id": 2875,
//         "bureaux": "1",
//         "code": "04 03 00 08",
//         "inscrit": "260",
//         "province": "NIANGOU-SA-WOME EC. PUBL. DAKA"
//     },
//     {
//         "id": 2876,
//         "bureaux": "1",
//         "code": "04 03 00 09",
//         "inscrit": "269",
//         "province": "BONGAVILLE ET MOUBOUNGOU E.P P"
//     },
//     {
//         "id": 2877,
//         "bureaux": "11",
//         "code": "04 03 00",
//         "inscrit": "3,364",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 2878,
//         "bureaux": "1",
//         "code": "04 04 01 01",
//         "inscrit": "190",
//         "province": "DISPENS. MOULANDOUFALA"
//     },
//     {
//         "id": 2879,
//         "bureaux": "1",
//         "code": "04 04 01 02",
//         "inscrit": "45",
//         "province": "EC. PROTEST. MOUDOUMA"
//     },
//     {
//         "id": 2880,
//         "bureaux": "1",
//         "code": "04 04 01 03",
//         "inscrit": "149",
//         "province": "EC. MOURIMATSIENGUI"
//     },
//     {
//         "id": 2881,
//         "bureaux": "1",
//         "code": "04 04 01 04",
//         "inscrit": "41",
//         "province": "YOMBI 2-CHEF DE VILLAGE"
//     },
//     {
//         "id": 2882,
//         "bureaux": "1",
//         "code": "04 04 01 05",
//         "inscrit": "262",
//         "province": "YOMBI 1 EC. PUBLIQUE"
//     },
//     {
//         "id": 2883,
//         "bureaux": "1",
//         "code": "04 04 01 06",
//         "inscrit": "298",
//         "province": "MANDILOU 2-CHEF DE VILLAGE"
//     },
//     {
//         "id": 2884,
//         "bureaux": "1",
//         "code": "04 04 01 07",
//         "inscrit": "91",
//         "province": "MANDILOU 1 -EC. PUBLIQUE"
//     },
//     {
//         "id": 2885,
//         "bureaux": "1",
//         "code": "04 04 01 08",
//         "inscrit": "75",
//         "province": "KESSI  2"
//     },
//     {
//         "id": 2886,
//         "bureaux": "1",
//         "code": "04 04 01 09",
//         "inscrit": "240",
//         "province": "EC. PUBL. OYENANO"
//     },
//     {
//         "id": 2887,
//         "bureaux": "1",
//         "code": "04 04 01 10",
//         "inscrit": "218",
//         "province": "KESSI 1"
//     },
//     {
//         "id": 2888,
//         "bureaux": "1",
//         "code": "04 04 01 11",
//         "inscrit": "94",
//         "province": "PETIT ODAVO -CHEFFERIE"
//     },
//     {
//         "id": 2889,
//         "bureaux": "1",
//         "code": "04 04 01 12",
//         "inscrit": "136",
//         "province": "ECOLE PUBL. NZEMBA"
//     },
//     {
//         "id": 2890,
//         "bureaux": "1",
//         "code": "04 04 01 13",
//         "inscrit": "235",
//         "province": "ECOLE MAMIENGUE"
//     },
//     {
//         "id": 2891,
//         "bureaux": "1",
//         "code": "04 04 01 14",
//         "inscrit": "59",
//         "province": "ECOLE EKANGA"
//     },
//     {
//         "id": 2892,
//         "bureaux": "1",
//         "code": "04 04 01 15",
//         "inscrit": "58",
//         "province": "ECOLE WAKA"
//     },
//     {
//         "id": 2893,
//         "bureaux": "1",
//         "code": "04 04 01 16",
//         "inscrit": "5",
//         "province": "NINGUI"
//     },
//     {
//         "id": 2894,
//         "bureaux": "1",
//         "code": "04 04 01 17",
//         "inscrit": "61",
//         "province": "GRAND ODAVO PONT"
//     },
//     {
//         "id": 2895,
//         "bureaux": "1",
//         "code": "04 04 02 03",
//         "inscrit": "171",
//         "province": "EGONO"
//     },
//     {
//         "id": 2896,
//         "bureaux": "1",
//         "code": "04 04 02 04",
//         "inscrit": "120",
//         "province": "MATADI 7 ECOLE CATHOLIQUE"
//     },
//     {
//         "id": 2897,
//         "bureaux": "1",
//         "code": "04 04 02 06",
//         "inscrit": "72",
//         "province": "GUEDIBA-DIVINDE"
//     },
//     {
//         "id": 2898,
//         "bureaux": "1",
//         "code": "04 04 02 07",
//         "inscrit": "31",
//         "province": "ECOLE NIMBIE"
//     },
//     {
//         "id": 2899,
//         "bureaux": "1",
//         "code": "04 04 03 01",
//         "inscrit": "83",
//         "province": "NIOYE 1"
//     },
//     {
//         "id": 2900,
//         "bureaux": "1",
//         "code": "04 04 03 02",
//         "inscrit": "9",
//         "province": "EGOUBA (OUMBA)"
//     },
//     {
//         "id": 2901,
//         "bureaux": "1",
//         "code": "04 04 03 03",
//         "inscrit": "67",
//         "province": "DIVINDE"
//     },
//     {
//         "id": 2902,
//         "bureaux": "1",
//         "code": "04 04 03 04",
//         "inscrit": "48",
//         "province": "NIOYE II DISPENSAIRE"
//     },
//     {
//         "id": 2903,
//         "bureaux": "1",
//         "code": "04 04 03 05",
//         "inscrit": "68",
//         "province": "EVOUTA"
//     },
//     {
//         "id": 2904,
//         "bureaux": "1",
//         "code": "04 04 03 06",
//         "inscrit": "4",
//         "province": "MIMONGO"
//     },
//     {
//         "id": 2905,
//         "bureaux": "1",
//         "code": "04 04 03 07",
//         "inscrit": "93",
//         "province": "IKOBEY CENTRE (KEBE)"
//     },
//     {
//         "id": 2906,
//         "bureaux": "1",
//         "code": "04 04 03 08",
//         "inscrit": "142",
//         "province": "MOLANDO"
//     },
//     {
//         "id": 2907,
//         "bureaux": "1",
//         "code": "04 04 04 01",
//         "inscrit": "199",
//         "province": "EC. PUBL. KOUAGNA"
//     },
//     {
//         "id": 2908,
//         "bureaux": "1",
//         "code": "04 04 04 02",
//         "inscrit": "66",
//         "province": "NDOUGOU-CHEFFERIE"
//     },
//     {
//         "id": 2909,
//         "bureaux": "1",
//         "code": "04 04 04 03",
//         "inscrit": "276",
//         "province": "ECOLE PUBL. SINDARA 1"
//     },
//     {
//         "id": 2910,
//         "bureaux": "1",
//         "code": "04 04 04 04",
//         "inscrit": "249",
//         "province": "ECOLE PUBL. SINDARA 2"
//     },
//     {
//         "id": 2911,
//         "bureaux": "1",
//         "code": "04 04 04 05",
//         "inscrit": "106",
//         "province": "SINDARA SONG"
//     },
//     {
//         "id": 2912,
//         "bureaux": "1",
//         "code": "04 04 04 06",
//         "inscrit": "62",
//         "province": "DOUANI"
//     },
//     {
//         "id": 2913,
//         "bureaux": "1",
//         "code": "04 04 05 01",
//         "inscrit": "87",
//         "province": "REGROUPEMENT GUIAMBA"
//     },
//     {
//         "id": 2914,
//         "bureaux": "1",
//         "code": "04 04 05 02",
//         "inscrit": "18",
//         "province": "MOUTAMBA-SA-NAFOUMOU"
//     },
//     {
//         "id": 2915,
//         "bureaux": "1",
//         "code": "04 04 05 03",
//         "inscrit": "105",
//         "province": "DOUBOU"
//     },
//     {
//         "id": 2916,
//         "bureaux": "1",
//         "code": "04 04 05 04",
//         "inscrit": "263",
//         "province": "ECOLE CATH. MBOUKOU"
//     },
//     {
//         "id": 2917,
//         "bureaux": "1",
//         "code": "04 04 05 05",
//         "inscrit": "50",
//         "province": "ECOLE PROTEST. REMBOUE"
//     },
//     {
//         "id": 2918,
//         "bureaux": "2",
//         "code": "04 04 05 06",
//         "inscrit": "604",
//         "province": "ECOLE PUBL. GUIDOUMA"
//     },
//     {
//         "id": 2919,
//         "bureaux": "17",
//         "code": "04 04 01",
//         "inscrit": "2,257",
//         "province": "BANDA"
//     },
//     {
//         "id": 2920,
//         "bureaux": "4",
//         "code": "04 04 02",
//         "inscrit": "394",
//         "province": "DIBWA (DISTRICT IKOBEY)"
//     },
//     {
//         "id": 2921,
//         "bureaux": "8",
//         "code": "04 04 03",
//         "inscrit": "514",
//         "province": "OUMBA"
//     },
//     {
//         "id": 2922,
//         "bureaux": "6",
//         "code": "04 04 04",
//         "inscrit": "958",
//         "province": "SINDARA"
//     },
//     {
//         "id": 2923,
//         "bureaux": "7",
//         "code": "04 04 05",
//         "inscrit": "1,127",
//         "province": "TANDOU"
//     },
//     {
//         "id": 2924,
//         "bureaux": "2",
//         "code": "04 05 00 01",
//         "inscrit": "692",
//         "province": "EC PUBL MBIGOU"
//     },
//     {
//         "id": 2925,
//         "bureaux": "2",
//         "code": "04 05 00 02",
//         "inscrit": "531",
//         "province": "HAUT-MBIGOU (EC PRIVEE PROT)"
//     },
//     {
//         "id": 2926,
//         "bureaux": "1",
//         "code": "04 05 00 03",
//         "inscrit": "440",
//         "province": "MOUNGUEMBE (CES)"
//     },
//     {
//         "id": 2927,
//         "bureaux": "1",
//         "code": "04 05 00 04",
//         "inscrit": "308",
//         "province": "LEDOUMA T.P MBIGOU"
//     },
//     {
//         "id": 2928,
//         "bureaux": "6",
//         "code": "04 05 00",
//         "inscrit": "1,971",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 2929,
//         "bureaux": "1",
//         "code": "04 06 01 01",
//         "inscrit": "170",
//         "province": "KOYA"
//     },
//     {
//         "id": 2930,
//         "bureaux": "1",
//         "code": "04 06 01 02",
//         "inscrit": "57",
//         "province": "LOBA"
//     },
//     {
//         "id": 2931,
//         "bureaux": "1",
//         "code": "04 06 01 03",
//         "inscrit": "89",
//         "province": "REBE"
//     },
//     {
//         "id": 2932,
//         "bureaux": "1",
//         "code": "04 06 02 01",
//         "inscrit": "293",
//         "province": "MACKONGONIO (EC PUBL )"
//     },
//     {
//         "id": 2933,
//         "bureaux": "1",
//         "code": "04 06 02 02",
//         "inscrit": "139",
//         "province": "NDOUBI"
//     },
//     {
//         "id": 2934,
//         "bureaux": "1",
//         "code": "04 06 02 03",
//         "inscrit": "87",
//         "province": "DIBWANGUI"
//     },
//     {
//         "id": 2935,
//         "bureaux": "1",
//         "code": "04 06 02 04",
//         "inscrit": "104",
//         "province": "NGOMO-BOUL ( EC-P-CATHOLIQUE)"
//     },
//     {
//         "id": 2936,
//         "bureaux": "1",
//         "code": "04 06 02 05",
//         "inscrit": "199",
//         "province": "MANDJI"
//     },
//     {
//         "id": 2937,
//         "bureaux": "1",
//         "code": "04 06 02 06",
//         "inscrit": "102",
//         "province": "POUNDI"
//     },
//     {
//         "id": 2938,
//         "bureaux": "1",
//         "code": "04 06 03 01",
//         "inscrit": "243",
//         "province": "NZENZELE I"
//     },
//     {
//         "id": 2939,
//         "bureaux": "1",
//         "code": "04 06 03 02",
//         "inscrit": "238",
//         "province": "NZENZELE II"
//     },
//     {
//         "id": 2940,
//         "bureaux": "1",
//         "code": "04 06 03 03",
//         "inscrit": "34",
//         "province": "MOUBOU-LELOLO"
//     },
//     {
//         "id": 2941,
//         "bureaux": "1",
//         "code": "04 06 03 04",
//         "inscrit": "173",
//         "province": "SOUANGUI"
//     },
//     {
//         "id": 2942,
//         "bureaux": "1",
//         "code": "04 06 03 05",
//         "inscrit": "94",
//         "province": "KAMAMONGO-LEPOYE"
//     },
//     {
//         "id": 2943,
//         "bureaux": "1",
//         "code": "04 06 03 06",
//         "inscrit": "125",
//         "province": "LEKINDOU"
//     },
//     {
//         "id": 2944,
//         "bureaux": "1",
//         "code": "04 06 03 07",
//         "inscrit": "23",
//         "province": "CHANTIER BOUTSALA"
//     },
//     {
//         "id": 2945,
//         "bureaux": "1",
//         "code": "04 06 04 01",
//         "inscrit": "152",
//         "province": "KAMBAMONGO"
//     },
//     {
//         "id": 2946,
//         "bureaux": "1",
//         "code": "04 06 04 02",
//         "inscrit": "33",
//         "province": "ITSIBA-KOUMOU-MALA"
//     },
//     {
//         "id": 2947,
//         "bureaux": "1",
//         "code": "04 06 04 03",
//         "inscrit": "47",
//         "province": "KOTTO"
//     },
//     {
//         "id": 2948,
//         "bureaux": "1",
//         "code": "04 06 04 04",
//         "inscrit": "21",
//         "province": "LEBAGNI"
//     },
//     {
//         "id": 2949,
//         "bureaux": "1",
//         "code": "04 06 04 05",
//         "inscrit": "27",
//         "province": "MOUDOUMA"
//     },
//     {
//         "id": 2950,
//         "bureaux": "1",
//         "code": "04 06 04 06",
//         "inscrit": "26",
//         "province": "NDENGA"
//     },
//     {
//         "id": 2951,
//         "bureaux": "1",
//         "code": "04 06 04 07",
//         "inscrit": "48",
//         "province": "MALOU-LOULOU"
//     },
//     {
//         "id": 2952,
//         "bureaux": "1",
//         "code": "04 06 04 08",
//         "inscrit": "98",
//         "province": "NGOUNGUI"
//     },
//     {
//         "id": 2953,
//         "bureaux": "1",
//         "code": "04 06 04 09",
//         "inscrit": "37",
//         "province": "MAREMBO"
//     },
//     {
//         "id": 2954,
//         "bureaux": "1",
//         "code": "04 06 04 10",
//         "inscrit": "72",
//         "province": "MIYANGA"
//     },
//     {
//         "id": 2955,
//         "bureaux": "1",
//         "code": "04 06 04 11",
//         "inscrit": "19",
//         "province": "MIKOUMA"
//     },
//     {
//         "id": 2956,
//         "bureaux": "1",
//         "code": "04 06 04 12",
//         "inscrit": "47",
//         "province": "INOUNOUSSIABOLA"
//     },
//     {
//         "id": 2957,
//         "bureaux": "1",
//         "code": "04 06 04 13",
//         "inscrit": "14",
//         "province": "LENGOYE"
//     },
//     {
//         "id": 2958,
//         "bureaux": "1",
//         "code": "04 06 04 14",
//         "inscrit": "15",
//         "province": "MBIMBA"
//     },
//     {
//         "id": 2959,
//         "bureaux": "1",
//         "code": "04 06 04 15",
//         "inscrit": "11",
//         "province": "MOUKOUALA"
//     },
//     {
//         "id": 2960,
//         "bureaux": "1",
//         "code": "04 06 05 01",
//         "inscrit": "46",
//         "province": "DIENGA"
//     },
//     {
//         "id": 2961,
//         "bureaux": "1",
//         "code": "04 06 05 02",
//         "inscrit": "98",
//         "province": "BOLAPESSA"
//     },
//     {
//         "id": 2962,
//         "bureaux": "1",
//         "code": "04 06 05 03",
//         "inscrit": "36",
//         "province": "ANDAMBA"
//     },
//     {
//         "id": 2963,
//         "bureaux": "1",
//         "code": "04 06 06 01",
//         "inscrit": "313",
//         "province": "REGROUPEMENT-ISSALA"
//     },
//     {
//         "id": 2964,
//         "bureaux": "1",
//         "code": "04 06 06 02",
//         "inscrit": "70",
//         "province": "KANDA"
//     },
//     {
//         "id": 2965,
//         "bureaux": "1",
//         "code": "04 06 06 03",
//         "inscrit": "173",
//         "province": "REGROUPEMENT-MAYANI"
//     },
//     {
//         "id": 2966,
//         "bureaux": "1",
//         "code": "04 06 06 04",
//         "inscrit": "70",
//         "province": "MANDJI-WANO"
//     },
//     {
//         "id": 2967,
//         "bureaux": "1",
//         "code": "04 06 06 05",
//         "inscrit": "139",
//         "province": "IMENO-MBILA"
//     },
//     {
//         "id": 2968,
//         "bureaux": "1",
//         "code": "04 06 06 06",
//         "inscrit": "181",
//         "province": "REGROUPEMENT-IMENO-NZINGA"
//     },
//     {
//         "id": 2969,
//         "bureaux": "3",
//         "code": "04 06 01",
//         "inscrit": "316",
//         "province": "BANGANDO-NGOUNIE"
//     },
//     {
//         "id": 2970,
//         "bureaux": "6",
//         "code": "04 06 02",
//         "inscrit": "924",
//         "province": "BASSE-LOUETSI"
//     },
//     {
//         "id": 2971,
//         "bureaux": "7",
//         "code": "04 06 03",
//         "inscrit": "930",
//         "province": "DOUAI"
//     },
//     {
//         "id": 2972,
//         "bureaux": "15",
//         "code": "04 06 04",
//         "inscrit": "667",
//         "province": "LOUETSI-BOUMI"
//     },
//     {
//         "id": 2973,
//         "bureaux": "3",
//         "code": "04 06 05",
//         "inscrit": "180",
//         "province": "NGOUNIE-LOUETSI"
//     },
//     {
//         "id": 2974,
//         "bureaux": "6",
//         "code": "04 06 06",
//         "inscrit": "946",
//         "province": "WANO-IVINDZI"
//     },
//     {
//         "id": 2975,
//         "bureaux": "2",
//         "code": "04 07 00 01",
//         "inscrit": "622",
//         "province": "ECOLE PUBLIQUE A 130"
//     },
//     {
//         "id": 2976,
//         "bureaux": "1",
//         "code": "04 07 00 02",
//         "inscrit": "423",
//         "province": "ECOLE CATHOLIQUE PRIVEE"
//     },
//     {
//         "id": 2977,
//         "bureaux": "1",
//         "code": "04 07 00 03",
//         "inscrit": "408",
//         "province": "ECOLE PUBLIQUE B"
//     },
//     {
//         "id": 2978,
//         "bureaux": "1",
//         "code": "04 07 00 04",
//         "inscrit": "319",
//         "province": "C E S"
//     },
//     {
//         "id": 2979,
//         "bureaux": "5",
//         "code": "04 07 00",
//         "inscrit": "1,772",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 2980,
//         "bureaux": "1",
//         "code": "04 08 01 01",
//         "inscrit": "468",
//         "province": "ETEKE 1 ET 2"
//     },
//     {
//         "id": 2981,
//         "bureaux": "1",
//         "code": "04 08 01 02",
//         "inscrit": "143",
//         "province": "OVALA - MOKONA"
//     },
//     {
//         "id": 2982,
//         "bureaux": "1",
//         "code": "04 08 01 03",
//         "inscrit": "117",
//         "province": "MEBE"
//     },
//     {
//         "id": 2983,
//         "bureaux": "1",
//         "code": "04 08 01 04",
//         "inscrit": "62",
//         "province": "MOUBIGOU"
//     },
//     {
//         "id": 2984,
//         "bureaux": "1",
//         "code": "04 08 01 05",
//         "inscrit": "406",
//         "province": "MASSIMA ET VIEUX MIMONGO"
//     },
//     {
//         "id": 2985,
//         "bureaux": "1",
//         "code": "04 08 01 07",
//         "inscrit": "14",
//         "province": "EBANDO"
//     },
//     {
//         "id": 2986,
//         "bureaux": "1",
//         "code": "04 08 02 01",
//         "inscrit": "50",
//         "province": "DIBAMBA"
//     },
//     {
//         "id": 2987,
//         "bureaux": "1",
//         "code": "04 08 02 02",
//         "inscrit": "141",
//         "province": "MOUKANDI"
//     },
//     {
//         "id": 2988,
//         "bureaux": "1",
//         "code": "04 08 02 03",
//         "inscrit": "151",
//         "province": "MOUNONGO"
//     },
//     {
//         "id": 2989,
//         "bureaux": "1",
//         "code": "04 08 02 04",
//         "inscrit": "53",
//         "province": "BOULEMBO"
//     },
//     {
//         "id": 2990,
//         "bureaux": "1",
//         "code": "04 08 03 01",
//         "inscrit": "197",
//         "province": "DIBASSA"
//     },
//     {
//         "id": 2991,
//         "bureaux": "1",
//         "code": "04 08 03 02",
//         "inscrit": "248",
//         "province": "MOUKABOU"
//     },
//     {
//         "id": 2992,
//         "bureaux": "1",
//         "code": "04 08 03 03",
//         "inscrit": "178",
//         "province": "POUNGUI"
//     },
//     {
//         "id": 2993,
//         "bureaux": "1",
//         "code": "04 08 03 04",
//         "inscrit": "229",
//         "province": "DIBANDI"
//     },
//     {
//         "id": 2994,
//         "bureaux": "1",
//         "code": "04 08 03 05",
//         "inscrit": "190",
//         "province": "DIYANGA"
//     },
//     {
//         "id": 2995,
//         "bureaux": "1",
//         "code": "04 08 04 01",
//         "inscrit": "110",
//         "province": "SEKA-SEKA"
//     },
//     {
//         "id": 2996,
//         "bureaux": "1",
//         "code": "04 08 04 02",
//         "inscrit": "261",
//         "province": "YENO (RG-RD)"
//     },
//     {
//         "id": 2997,
//         "bureaux": "1",
//         "code": "04 08 04 03",
//         "inscrit": "64",
//         "province": "MAMBA EVOVA"
//     },
//     {
//         "id": 2998,
//         "bureaux": "1",
//         "code": "04 08 04 04",
//         "inscrit": "62",
//         "province": "NOMBO"
//     },
//     {
//         "id": 2999,
//         "bureaux": "1",
//         "code": "04 08 04 05",
//         "inscrit": "15",
//         "province": "ETAVA"
//     },
//     {
//         "id": 3000,
//         "bureaux": "1",
//         "code": "04 08 04 06",
//         "inscrit": "32",
//         "province": "KANDA PIE"
//     },
//     {
//         "id": 3001,
//         "bureaux": "1",
//         "code": "04 08 04 07",
//         "inscrit": "93",
//         "province": "EGOUMBI BAC"
//     },
//     {
//         "id": 3002,
//         "bureaux": "1",
//         "code": "04 08 04 08",
//         "inscrit": "298",
//         "province": "EPAMBOA"
//     },
//     {
//         "id": 3003,
//         "bureaux": "1",
//         "code": "04 08 04 09",
//         "inscrit": "296",
//         "province": "BILENGUI"
//     },
//     {
//         "id": 3004,
//         "bureaux": "1",
//         "code": "04 08 04 10",
//         "inscrit": "87",
//         "province": "MOSSIGUE"
//     },
//     {
//         "id": 3005,
//         "bureaux": "1",
//         "code": "04 08 04 11",
//         "inscrit": "58",
//         "province": "MASSIKA"
//     },
//     {
//         "id": 3006,
//         "bureaux": "1",
//         "code": "04 08 04 12",
//         "inscrit": "92",
//         "province": "EKEMBELE"
//     },
//     {
//         "id": 3007,
//         "bureaux": "6",
//         "code": "04 08 01",
//         "inscrit": "1,210",
//         "province": "VIEUX MIMONGO (DISTRICT ETEKE)"
//     },
//     {
//         "id": 3008,
//         "bureaux": "4",
//         "code": "04 08 02",
//         "inscrit": "395",
//         "province": "HAUTE DIKOBI"
//     },
//     {
//         "id": 3009,
//         "bureaux": "5",
//         "code": "04 08 03",
//         "inscrit": "1,042",
//         "province": "HAUT-OGOULOU"
//     },
//     {
//         "id": 3010,
//         "bureaux": "12",
//         "code": "04 08 04",
//         "inscrit": "1,468",
//         "province": "OGOULOU-ONOYE"
//     },
//     {
//         "id": 3011,
//         "bureaux": "1",
//         "code": "04 09 00 01",
//         "inscrit": "98",
//         "province": "ASSEMBLEE DEPARTEMENTALE"
//     },
//     {
//         "id": 3012,
//         "bureaux": "1",
//         "code": "04 09 00 02",
//         "inscrit": "256",
//         "province": "ECOLE PUBLIQUE CENTRE"
//     },
//     {
//         "id": 3013,
//         "bureaux": "1",
//         "code": "04 09 00 03",
//         "inscrit": "39",
//         "province": "LYCEE D ETAT A"
//     },
//     {
//         "id": 3014,
//         "bureaux": "1",
//         "code": "04 09 00 04",
//         "inscrit": "23",
//         "province": "LYCEE D ETAT B"
//     },
//     {
//         "id": 3015,
//         "bureaux": "1",
//         "code": "04 09 00 05",
//         "inscrit": "469",
//         "province": "E.P. PROTEST. (MINDANDA & KAMBA)"
//     },
//     {
//         "id": 3016,
//         "bureaux": "1",
//         "code": "04 09 00 06",
//         "inscrit": "478",
//         "province": "VOLET VILLAGEOIS (MALABA)"
//     },
//     {
//         "id": 3017,
//         "bureaux": "2",
//         "code": "04 09 00 07",
//         "inscrit": "638",
//         "province": "NDENDE 1-2-3"
//     },
//     {
//         "id": 3018,
//         "bureaux": "1",
//         "code": "04 09 00 08",
//         "inscrit": "371",
//         "province": "CAMP T.P. (AVIATION)"
//     },
//     {
//         "id": 3019,
//         "bureaux": "1",
//         "code": "04 09 00 09",
//         "inscrit": "476",
//         "province": "ECOLE CATH. DOLA A"
//     },
//     {
//         "id": 3020,
//         "bureaux": "1",
//         "code": "04 09 00 10",
//         "inscrit": "397",
//         "province": "ECOLE CATH. DOLA B"
//     },
//     {
//         "id": 3021,
//         "bureaux": "1",
//         "code": "04 09 00 11",
//         "inscrit": "99",
//         "province": "YELO-DOLA (EC PUBLIQUE)"
//     },
//     {
//         "id": 3022,
//         "bureaux": "12",
//         "code": "04 09 00",
//         "inscrit": "3,344",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 3023,
//         "bureaux": "1",
//         "code": "04 10 01 01",
//         "inscrit": "67",
//         "province": "NANGA"
//     },
//     {
//         "id": 3024,
//         "bureaux": "1",
//         "code": "04 10 01 02",
//         "inscrit": "141",
//         "province": "MBENGUI"
//     },
//     {
//         "id": 3025,
//         "bureaux": "1",
//         "code": "04 10 01 03",
//         "inscrit": "141",
//         "province": "MBADI"
//     },
//     {
//         "id": 3026,
//         "bureaux": "1",
//         "code": "04 10 01 04",
//         "inscrit": "82",
//         "province": "MOUNIGOU"
//     },
//     {
//         "id": 3027,
//         "bureaux": "1",
//         "code": "04 10 01 05",
//         "inscrit": "62",
//         "province": "NYANGA-YOUNGOU"
//     },
//     {
//         "id": 3028,
//         "bureaux": "1",
//         "code": "04 10 01 07",
//         "inscrit": "57",
//         "province": "FERRA"
//     },
//     {
//         "id": 3029,
//         "bureaux": "1",
//         "code": "04 10 02 01",
//         "inscrit": "94",
//         "province": "NGOUSSOU-MINGANGA-TSANGUI"
//     },
//     {
//         "id": 3030,
//         "bureaux": "1",
//         "code": "04 10 02 02",
//         "inscrit": "287",
//         "province": "DILOLO"
//     },
//     {
//         "id": 3031,
//         "bureaux": "1",
//         "code": "04 10 02 03",
//         "inscrit": "42",
//         "province": "MOUDJOMBI"
//     },
//     {
//         "id": 3032,
//         "bureaux": "1",
//         "code": "04 10 02 04",
//         "inscrit": "104",
//         "province": "MOUKORO 1 ET 2"
//     },
//     {
//         "id": 3033,
//         "bureaux": "2",
//         "code": "04 10 02 05",
//         "inscrit": "994",
//         "province": "ECOLE CATH. DOUSSALA"
//     },
//     {
//         "id": 3034,
//         "bureaux": "1",
//         "code": "04 10 02 06",
//         "inscrit": "1",
//         "province": "ECOLE SOGADEL"
//     },
//     {
//         "id": 3035,
//         "bureaux": "1",
//         "code": "04 10 02 07",
//         "inscrit": "26",
//         "province": "MOUNGALI"
//     },
//     {
//         "id": 3036,
//         "bureaux": "1",
//         "code": "04 10 02 08",
//         "inscrit": "185",
//         "province": "MOUREMBOU (ISSINGA)"
//     },
//     {
//         "id": 3037,
//         "bureaux": "1",
//         "code": "04 10 02 09",
//         "inscrit": "127",
//         "province": "MOUSSAMBOU"
//     },
//     {
//         "id": 3038,
//         "bureaux": "6",
//         "code": "04 10 01",
//         "inscrit": "550",
//         "province": "NORD"
//     },
//     {
//         "id": 3039,
//         "bureaux": "10",
//         "code": "04 10 02",
//         "inscrit": "1,860",
//         "province": "SUD"
//     },
//     {
//         "id": 3040,
//         "bureaux": "1",
//         "code": "04 11 00 01",
//         "inscrit": "263",
//         "province": "C E S MANDJI"
//     },
//     {
//         "id": 3041,
//         "bureaux": "1",
//         "code": "04 11 00 02",
//         "inscrit": "211",
//         "province": "ECOLE PUBLIQUE DE MANDJI"
//     },
//     {
//         "id": 3042,
//         "bureaux": "1",
//         "code": "04 11 00 03",
//         "inscrit": "343",
//         "province": "ECOLE CATHOLIQUE"
//     },
//     {
//         "id": 3043,
//         "bureaux": "1",
//         "code": "04 11 00 04",
//         "inscrit": "121",
//         "province": "MAISON DU PEUPLE"
//     },
//     {
//         "id": 3044,
//         "bureaux": "1",
//         "code": "04 11 00 05",
//         "inscrit": "97",
//         "province": "CENTRE VILLE"
//     },
//     {
//         "id": 3045,
//         "bureaux": "1",
//         "code": "04 11 00 06",
//         "inscrit": "102",
//         "province": "CENTRE VILLE-ASSEMBLE-D"
//     },
//     {
//         "id": 3046,
//         "bureaux": "1",
//         "code": "04 11 00 07",
//         "inscrit": "289",
//         "province": "DIGWEMA"
//     },
//     {
//         "id": 3047,
//         "bureaux": "1",
//         "code": "04 11 00 08",
//         "inscrit": "263",
//         "province": "SIEVANOU"
//     },
//     {
//         "id": 3048,
//         "bureaux": "8",
//         "code": "04 11 00",
//         "inscrit": "1,689",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 3049,
//         "bureaux": "1",
//         "code": "04 12 01 01",
//         "inscrit": "64",
//         "province": "TSYKA"
//     },
//     {
//         "id": 3050,
//         "bureaux": "1",
//         "code": "04 12 01 02",
//         "inscrit": "48",
//         "province": "NZAMBINATSIENGUI"
//     },
//     {
//         "id": 3051,
//         "bureaux": "1",
//         "code": "04 12 01 03",
//         "inscrit": "288",
//         "province": "MASSANA-DOUBINANA"
//     },
//     {
//         "id": 3052,
//         "bureaux": "1",
//         "code": "04 12 01 04",
//         "inscrit": "31",
//         "province": "C F A GUIVANGA"
//     },
//     {
//         "id": 3053,
//         "bureaux": "1",
//         "code": "04 12 02 01",
//         "inscrit": "65",
//         "province": "YENO PETIT-VILLAGE"
//     },
//     {
//         "id": 3054,
//         "bureaux": "1",
//         "code": "04 12 02 02",
//         "inscrit": "109",
//         "province": "YENO"
//     },
//     {
//         "id": 3055,
//         "bureaux": "1",
//         "code": "04 12 02 03",
//         "inscrit": "107",
//         "province": "MOUKOUNA"
//     },
//     {
//         "id": 3056,
//         "bureaux": "1",
//         "code": "04 12 02 04",
//         "inscrit": "103",
//         "province": "MATSOUKA"
//     },
//     {
//         "id": 3057,
//         "bureaux": "1",
//         "code": "04 12 02 05",
//         "inscrit": "87",
//         "province": "OMENGO"
//     },
//     {
//         "id": 3058,
//         "bureaux": "1",
//         "code": "04 12 02 06",
//         "inscrit": "112",
//         "province": "FOUANOU"
//     },
//     {
//         "id": 3059,
//         "bureaux": "1",
//         "code": "04 12 03 01",
//         "inscrit": "212",
//         "province": "DIANGUI"
//     },
//     {
//         "id": 3060,
//         "bureaux": "1",
//         "code": "04 12 03 02",
//         "inscrit": "163",
//         "province": "KANANA"
//     },
//     {
//         "id": 3061,
//         "bureaux": "1",
//         "code": "04 12 03 03",
//         "inscrit": "331",
//         "province": "LAMBARENE-KILI"
//     },
//     {
//         "id": 3062,
//         "bureaux": "1",
//         "code": "04 12 03 04",
//         "inscrit": "105",
//         "province": "FANGUINDAKA"
//     },
//     {
//         "id": 3063,
//         "bureaux": "1",
//         "code": "04 12 03 05",
//         "inscrit": "157",
//         "province": "BOUNGOUNGA"
//     },
//     {
//         "id": 3064,
//         "bureaux": "1",
//         "code": "04 12 03 06",
//         "inscrit": "186",
//         "province": "BEMBOUDIE"
//     },
//     {
//         "id": 3065,
//         "bureaux": "4",
//         "code": "04 12 01",
//         "inscrit": "431",
//         "province": "DOUBANGA"
//     },
//     {
//         "id": 3066,
//         "bureaux": "6",
//         "code": "04 12 02",
//         "inscrit": "583",
//         "province": "DOUREMBOU"
//     },
//     {
//         "id": 3067,
//         "bureaux": "6",
//         "code": "04 12 03",
//         "inscrit": "1,154",
//         "province": "KOUMOU"
//     },
//     {
//         "id": 3068,
//         "bureaux": "2",
//         "code": "04 12 04",
//         "inscrit": "160",
//         "province": "PENY"
//     },
//     {
//         "id": 3069,
//         "bureaux": "2",
//         "code": "04 13 00 01",
//         "inscrit": "513",
//         "province": "MAKOMBO (ECOLE ALL.CHRET.)"
//     },
//     {
//         "id": 3070,
//         "bureaux": "1",
//         "code": "04 13 00 02",
//         "inscrit": "302",
//         "province": "ECOLE ALL.CHRET. BONGOLO"
//     },
//     {
//         "id": 3071,
//         "bureaux": "2",
//         "code": "04 13 00 03",
//         "inscrit": "502",
//         "province": "EC CATHOLIQUE LEBAMBA"
//     },
//     {
//         "id": 3072,
//         "bureaux": "1",
//         "code": "04 13 00 04",
//         "inscrit": "491",
//         "province": "EC PUBLIQUE LEBAMBA"
//     },
//     {
//         "id": 3073,
//         "bureaux": "1",
//         "code": "04 13 00 05",
//         "inscrit": "241",
//         "province": "ECOLE ALL CHRETIENNE"
//     },
//     {
//         "id": 3074,
//         "bureaux": "1",
//         "code": "04 13 00 06",
//         "inscrit": "296",
//         "province": "FOYER DES JEUNES (MALONGO-MAPA)"
//     },
//     {
//         "id": 3075,
//         "bureaux": "1",
//         "code": "04 13 00 07",
//         "inscrit": "192",
//         "province": "FOYER DES JEUNES (CTR VILLE)"
//     },
//     {
//         "id": 3076,
//         "bureaux": "1",
//         "code": "04 13 00 08",
//         "inscrit": "402",
//         "province": "COLLEGE BONGOLO"
//     },
//     {
//         "id": 3077,
//         "bureaux": "1",
//         "code": "04 13 00 09",
//         "inscrit": "248",
//         "province": "EC-CATH-LETOGO-MABENGO"
//     },
//     {
//         "id": 3078,
//         "bureaux": "1",
//         "code": "04 13 00 10",
//         "inscrit": "254",
//         "province": "POUNGOU-IMENO"
//     },
//     {
//         "id": 3079,
//         "bureaux": "12",
//         "code": "04 13 00",
//         "inscrit": "3,441",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 3080,
//         "bureaux": "1",
//         "code": "04 14 01 01",
//         "inscrit": "18",
//         "province": "MAYANGA"
//     },
//     {
//         "id": 3081,
//         "bureaux": "1",
//         "code": "04 14 01 02",
//         "inscrit": "102",
//         "province": "ECOLE PUBLIQUE ISSINGA"
//     },
//     {
//         "id": 3082,
//         "bureaux": "1",
//         "code": "04 14 01 03",
//         "inscrit": "206",
//         "province": "ECOLE MBELENALETEMBE (EC. ALL.)"
//     },
//     {
//         "id": 3083,
//         "bureaux": "1",
//         "code": "04 14 01 04",
//         "inscrit": "191",
//         "province": "EC PUBLIQUE NZINGUI"
//     },
//     {
//         "id": 3084,
//         "bureaux": "1",
//         "code": "04 14 01 05",
//         "inscrit": "93",
//         "province": "EC CATHOLIQUE DE MBINAMBI"
//     },
//     {
//         "id": 3085,
//         "bureaux": "1",
//         "code": "04 14 01 06",
//         "inscrit": "313",
//         "province": "EC CATHOLIQUE DE MABANGA"
//     },
//     {
//         "id": 3086,
//         "bureaux": "1",
//         "code": "04 14 01 07",
//         "inscrit": "83",
//         "province": "EC PROTEST NZOUNDOU"
//     },
//     {
//         "id": 3087,
//         "bureaux": "1",
//         "code": "04 14 02 01",
//         "inscrit": "122",
//         "province": "IDEMBE (ECOLE PROTEST.)"
//     },
//     {
//         "id": 3088,
//         "bureaux": "1",
//         "code": "04 14 02 02",
//         "inscrit": "240",
//         "province": "MOUKOUNDOU (ECOLE CATH.)"
//     },
//     {
//         "id": 3089,
//         "bureaux": "1",
//         "code": "04 14 02 03",
//         "inscrit": "319",
//         "province": "KANDA (ECOLE CATH.)"
//     },
//     {
//         "id": 3090,
//         "bureaux": "1",
//         "code": "04 14 02 04",
//         "inscrit": "78",
//         "province": "MOUYAMBA (ECOLE PUBLIQUE)"
//     },
//     {
//         "id": 3091,
//         "bureaux": "1",
//         "code": "04 14 02 05",
//         "inscrit": "268",
//         "province": "MEMBA (ECOLE PUBLIQUE)"
//     },
//     {
//         "id": 3092,
//         "bureaux": "7",
//         "code": "04 14 01",
//         "inscrit": "1,006",
//         "province": "LOUTSI-SOUNGOU"
//     },
//     {
//         "id": 3093,
//         "bureaux": "5",
//         "code": "04 14 02",
//         "inscrit": "1,027",
//         "province": "WANO-BIROUNDOU"
//     },
//     {
//         "id": 3094,
//         "bureaux": "1",
//         "code": "04 15 00 01",
//         "inscrit": "348",
//         "province": "ECOLE PUBLIQUE"
//     },
//     {
//         "id": 3095,
//         "bureaux": "1",
//         "code": "04 15 00 02",
//         "inscrit": "262",
//         "province": "EC PRIVEE CATH (MOUEKI)"
//     },
//     {
//         "id": 3096,
//         "bureaux": "1",
//         "code": "04 15 00 03",
//         "inscrit": "227",
//         "province": "EC PRIVEE PROT (BIBAMBA)"
//     },
//     {
//         "id": 3097,
//         "bureaux": "1",
//         "code": "04 15 00 04",
//         "inscrit": "76",
//         "province": "HANGAR (LONGO)"
//     },
//     {
//         "id": 3098,
//         "bureaux": "4",
//         "code": "04 15 00",
//         "inscrit": "913",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 3099,
//         "bureaux": "1",
//         "code": "04 16 01 01",
//         "inscrit": "215",
//         "province": "MOUKOUAGNA (ECOLE ALL. CHRET)"
//     },
//     {
//         "id": 3100,
//         "bureaux": "1",
//         "code": "04 16 01 02",
//         "inscrit": "204",
//         "province": "MBOMO - ECOLE CATHOLIQUE"
//     },
//     {
//         "id": 3101,
//         "bureaux": "1",
//         "code": "04 16 01 03",
//         "inscrit": "81",
//         "province": "MITSANDZA- ECOLE PUBLIQUE"
//     },
//     {
//         "id": 3102,
//         "bureaux": "1",
//         "code": "04 16 01 04",
//         "inscrit": "44",
//         "province": "LEYONGA (ECOLE ALL CHRET)"
//     },
//     {
//         "id": 3103,
//         "bureaux": "1",
//         "code": "04 16 01 05",
//         "inscrit": "102",
//         "province": "MBENGAMAMBA (ECOLE PUB.)"
//     },
//     {
//         "id": 3104,
//         "bureaux": "1",
//         "code": "04 16 01 06",
//         "inscrit": "242",
//         "province": "BAPOSSO (ECOLE PRIVEE CATH.)"
//     },
//     {
//         "id": 3105,
//         "bureaux": "1",
//         "code": "04 16 01 07",
//         "inscrit": "162",
//         "province": "LEVINDA (ECOLE PUB.)"
//     },
//     {
//         "id": 3106,
//         "bureaux": "1",
//         "code": "04 16 01 08",
//         "inscrit": "40",
//         "province": "MIKOVANDZA (CHEF DE VILLAGE)"
//     },
//     {
//         "id": 3107,
//         "bureaux": "1",
//         "code": "04 16 01 09",
//         "inscrit": "46",
//         "province": "MAYIGHA (HANGAR)"
//     },
//     {
//         "id": 3108,
//         "bureaux": "1",
//         "code": "04 16 01 10",
//         "inscrit": "151",
//         "province": "MAMBONGA (ECOLE PUB.)"
//     },
//     {
//         "id": 3109,
//         "bureaux": "1",
//         "code": "04 16 01 11",
//         "inscrit": "79",
//         "province": "MOUKIMBI (ECOLE CATH.)"
//     },
//     {
//         "id": 3110,
//         "bureaux": "1",
//         "code": "04 16 01 12",
//         "inscrit": "32",
//         "province": "NDZINDZI"
//     },
//     {
//         "id": 3111,
//         "bureaux": "1",
//         "code": "04 16 01 13",
//         "inscrit": "55",
//         "province": "MOMBI"
//     },
//     {
//         "id": 3112,
//         "bureaux": "1",
//         "code": "04 16 01 15",
//         "inscrit": "23",
//         "province": "LEVINDA 2"
//     },
//     {
//         "id": 3113,
//         "bureaux": "1",
//         "code": "04 16 01 16",
//         "inscrit": "35",
//         "province": "LEPEPE"
//     },
//     {
//         "id": 3114,
//         "bureaux": "1",
//         "code": "04 16 01 17",
//         "inscrit": "137",
//         "province": "MADIBA"
//     },
//     {
//         "id": 3115,
//         "bureaux": "16",
//         "code": "04 16 01",
//         "inscrit": "1,648",
//         "province": "HAUTE LOUETSI"
//     },
//     {
//         "id": 3116,
//         "bureaux": "1",
//         "code": "04 17 00 01",
//         "inscrit": "389",
//         "province": "ECOLE PUBLIQUE"
//     },
//     {
//         "id": 3117,
//         "bureaux": "1",
//         "code": "04 17 00 02",
//         "inscrit": "100",
//         "province": "E-P-MOUSSA"
//     },
//     {
//         "id": 3118,
//         "bureaux": "1",
//         "code": "04 17 00 03",
//         "inscrit": "56",
//         "province": "KOUMBANOU"
//     },
//     {
//         "id": 3119,
//         "bureaux": "3",
//         "code": "04 17 00",
//         "inscrit": "545",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 3120,
//         "bureaux": "1",
//         "code": "04 18 01 01",
//         "inscrit": "47",
//         "province": "NIEGUIANOU"
//     },
//     {
//         "id": 3121,
//         "bureaux": "1",
//         "code": "04 18 01 02",
//         "inscrit": "68",
//         "province": "DIBOTSA (EC PUBL)"
//     },
//     {
//         "id": 3122,
//         "bureaux": "1",
//         "code": "04 18 01 03",
//         "inscrit": "57",
//         "province": "NZAMBI"
//     },
//     {
//         "id": 3123,
//         "bureaux": "1",
//         "code": "04 18 01 04",
//         "inscrit": "31",
//         "province": "MINGOLA (EC PUBL)"
//     },
//     {
//         "id": 3124,
//         "bureaux": "1",
//         "code": "04 18 01 05",
//         "inscrit": "19",
//         "province": "GUIMANGA"
//     },
//     {
//         "id": 3125,
//         "bureaux": "1",
//         "code": "04 18 01 06",
//         "inscrit": "10",
//         "province": "NYANGA"
//     },
//     {
//         "id": 3126,
//         "bureaux": "1",
//         "code": "04 18 01 07",
//         "inscrit": "129",
//         "province": "ILENDO (EC PUBL)"
//     },
//     {
//         "id": 3127,
//         "bureaux": "1",
//         "code": "04 18 01 08",
//         "inscrit": "24",
//         "province": "MANDJI-DAKAR"
//     },
//     {
//         "id": 3128,
//         "bureaux": "1",
//         "code": "04 18 01 09",
//         "inscrit": "17",
//         "province": "MOUKIDI"
//     },
//     {
//         "id": 3129,
//         "bureaux": "1",
//         "code": "04 18 02 01",
//         "inscrit": "186",
//         "province": "OUKOUMBOU"
//     },
//     {
//         "id": 3130,
//         "bureaux": "1",
//         "code": "04 18 02 02",
//         "inscrit": "65",
//         "province": "GUISSA CARREFOUR"
//     },
//     {
//         "id": 3131,
//         "bureaux": "1",
//         "code": "04 18 02 03",
//         "inscrit": "229",
//         "province": "IDEMBA (EC PUBL)"
//     },
//     {
//         "id": 3132,
//         "bureaux": "9",
//         "code": "04 18 01",
//         "inscrit": "402",
//         "province": "BASSE-MOUGALABA"
//     },
//     {
//         "id": 3133,
//         "bureaux": "3",
//         "code": "04 18 02",
//         "inscrit": "480",
//         "province": "HAUTE-MOUGALABA"
//     },
//     {
//         "id": 3134,
//         "bureaux": "37",
//         "code": "401",
//         "inscrit": "14,437",
//         "province": "MOUILA"
//     },
//     {
//         "id": 3135,
//         "bureaux": "18",
//         "code": "402",
//         "inscrit": "3,770",
//         "province": "DOUYA-ONOYE (MOUILA)"
//     },
//     {
//         "id": 3136,
//         "bureaux": "11",
//         "code": "403",
//         "inscrit": "3,364",
//         "province": "FOUGAMOU"
//     },
//     {
//         "id": 3137,
//         "bureaux": "42",
//         "code": "404",
//         "inscrit": "5,250",
//         "province": "TSAMBA-MAGOTSI (FOUGAMOU)"
//     },
//     {
//         "id": 3138,
//         "bureaux": "6",
//         "code": "405",
//         "inscrit": "1,971",
//         "province": "MBIGOU"
//     },
//     {
//         "id": 3139,
//         "bureaux": "40",
//         "code": "406",
//         "inscrit": "3,963",
//         "province": "BOUMI-LOUETSI (MBIGOU)"
//     },
//     {
//         "id": 3140,
//         "bureaux": "5",
//         "code": "407",
//         "inscrit": "1,772",
//         "province": "MIMONGO"
//     },
//     {
//         "id": 3141,
//         "bureaux": "27",
//         "code": "408",
//         "inscrit": "4,115",
//         "province": "OGOULOU (MIMONGO)"
//     },
//     {
//         "id": 3142,
//         "bureaux": "12",
//         "code": "409",
//         "inscrit": "3,344",
//         "province": "NDENDE"
//     },
//     {
//         "id": 3143,
//         "bureaux": "16",
//         "code": "410",
//         "inscrit": "2,410",
//         "province": "DOLA (NDENDE)"
//     },
//     {
//         "id": 3144,
//         "bureaux": "8",
//         "code": "411",
//         "inscrit": "1,689",
//         "province": "MANDJI"
//     },
//     {
//         "id": 3145,
//         "bureaux": "18",
//         "code": "412",
//         "inscrit": "2,328",
//         "province": "NDOLOU (MANDJI)"
//     },
//     {
//         "id": 3146,
//         "bureaux": "12",
//         "code": "413",
//         "inscrit": "3,441",
//         "province": "LEBAMBA"
//     },
//     {
//         "id": 3147,
//         "bureaux": "12",
//         "code": "414",
//         "inscrit": "2,033",
//         "province": "LOUETSI-WANO (LEBAMBA)"
//     },
//     {
//         "id": 3148,
//         "bureaux": "4",
//         "code": "415",
//         "inscrit": "913",
//         "province": "MALINGA"
//     },
//     {
//         "id": 3149,
//         "bureaux": "16",
//         "code": "416",
//         "inscrit": "1,648",
//         "province": "LOUETSI-BIBAKA (MALINGA)"
//     },
//     {
//         "id": 3150,
//         "bureaux": "3",
//         "code": "417",
//         "inscrit": "545",
//         "province": "GUIETSOU"
//     },
//     {
//         "id": 3151,
//         "bureaux": "12",
//         "code": "418",
//         "inscrit": "882",
//         "province": "MOUGALABA (GUIETSOU)"
//     },
//     {
//         "id": 3152,
//         "bureaux": "2",
//         "code": "05 01 01 01",
//         "inscrit": "530",
//         "province": "POLA II (EC COMMUNALE -G)"
//     },
//     {
//         "id": 3153,
//         "bureaux": "2",
//         "code": "05 01 01 02",
//         "inscrit": "892",
//         "province": "EC COMMUNALE -C- (NDABILILA 2)"
//     },
//     {
//         "id": 3154,
//         "bureaux": "3",
//         "code": "05 01 01 03",
//         "inscrit": "1,361",
//         "province": "LYCEE NAZAIRE BOULINGUI"
//     },
//     {
//         "id": 3155,
//         "bureaux": "1",
//         "code": "05 01 01 04",
//         "inscrit": "169",
//         "province": "NOTRE DAME"
//     },
//     {
//         "id": 3156,
//         "bureaux": "2",
//         "code": "05 01 01 05",
//         "inscrit": "517",
//         "province": "ECOLE ST. JOSEPH"
//     },
//     {
//         "id": 3157,
//         "bureaux": "1",
//         "code": "05 01 01 06",
//         "inscrit": "188",
//         "province": "BIBORA (CES HORIZON BASE)"
//     },
//     {
//         "id": 3158,
//         "bureaux": "1",
//         "code": "05 01 01 07",
//         "inscrit": "471",
//         "province": "NDABILILA 1 (EDUCATION POPULAIRE)"
//     },
//     {
//         "id": 3159,
//         "bureaux": "2",
//         "code": "05 01 01 08",
//         "inscrit": "604",
//         "province": "MINZANZALA II (ANN.CES HORIZON)"
//     },
//     {
//         "id": 3160,
//         "bureaux": "1",
//         "code": "05 01 01 09",
//         "inscrit": "392",
//         "province": "CENTRE VILLE"
//     },
//     {
//         "id": 3161,
//         "bureaux": "2",
//         "code": "05 01 02 01",
//         "inscrit": "704",
//         "province": "BATSIENGUI 1 (EC COMMUNALE E)"
//     },
//     {
//         "id": 3162,
//         "bureaux": "1",
//         "code": "05 01 02 02",
//         "inscrit": "133",
//         "province": "BATSIENGUI 2 (EC COMMUNALE)"
//     },
//     {
//         "id": 3163,
//         "bureaux": "1",
//         "code": "05 01 02 03",
//         "inscrit": "353",
//         "province": "INGARA 2-3 (EC COMMUNALE H)"
//     },
//     {
//         "id": 3164,
//         "bureaux": "1",
//         "code": "05 01 02 04",
//         "inscrit": "340",
//         "province": "INGARA 1 (ECOLE COMMUNALE -A-)"
//     },
//     {
//         "id": 3165,
//         "bureaux": "2",
//         "code": "05 01 02 05",
//         "inscrit": "641",
//         "province": "MAVOUNDI (ECOLE COMMUNALE -F-)"
//     },
//     {
//         "id": 3166,
//         "bureaux": "1",
//         "code": "05 01 02 06",
//         "inscrit": "133",
//         "province": "ECOLE PROTESTANTE"
//     },
//     {
//         "id": 3167,
//         "bureaux": "1",
//         "code": "05 01 02 07",
//         "inscrit": "365",
//         "province": "MOUKENGA 2 (EC COMMUNALE B)"
//     },
//     {
//         "id": 3168,
//         "bureaux": "1",
//         "code": "05 01 02 08",
//         "inscrit": "278",
//         "province": "MOUKENGA 3 (EC COMMUNALE D)"
//     },
//     {
//         "id": 3169,
//         "bureaux": "1",
//         "code": "05 01 02 09",
//         "inscrit": "453",
//         "province": "LYCEE PROFESSIONEL"
//     },
//     {
//         "id": 3170,
//         "bureaux": "15",
//         "code": "05 01 01",
//         "inscrit": "5,124",
//         "province": "1ER  ARRONDISSEMENT"
//     },
//     {
//         "id": 3171,
//         "bureaux": "11",
//         "code": "05 01 02",
//         "inscrit": "3,400",
//         "province": "2EME ARRONDISSEMENT"
//     },
//     {
//         "id": 3172,
//         "bureaux": "1",
//         "code": "05 02 01 01",
//         "inscrit": "128",
//         "province": "BAGNARA"
//     },
//     {
//         "id": 3173,
//         "bureaux": "1",
//         "code": "05 02 01 02",
//         "inscrit": "23",
//         "province": "DOUGHENY"
//     },
//     {
//         "id": 3174,
//         "bureaux": "1",
//         "code": "05 02 01 03",
//         "inscrit": "47",
//         "province": "DIGOUNZI"
//     },
//     {
//         "id": 3175,
//         "bureaux": "1",
//         "code": "05 02 01 04",
//         "inscrit": "58",
//         "province": "DOUKOUMOU"
//     },
//     {
//         "id": 3176,
//         "bureaux": "1",
//         "code": "05 02 01 05",
//         "inscrit": "50",
//         "province": "NDENGA"
//     },
//     {
//         "id": 3177,
//         "bureaux": "1",
//         "code": "05 02 01 06",
//         "inscrit": "36",
//         "province": "MIGOMA"
//     },
//     {
//         "id": 3178,
//         "bureaux": "1",
//         "code": "05 02 01 07",
//         "inscrit": "105",
//         "province": "KERI-NZAMBI"
//     },
//     {
//         "id": 3179,
//         "bureaux": "1",
//         "code": "05 02 01 08",
//         "inscrit": "85",
//         "province": "MAKABANA"
//     },
//     {
//         "id": 3180,
//         "bureaux": "1",
//         "code": "05 02 01 09",
//         "inscrit": "148",
//         "province": "IDOUMA"
//     },
//     {
//         "id": 3181,
//         "bureaux": "1",
//         "code": "05 02 02 01",
//         "inscrit": "385",
//         "province": "ILALA"
//     },
//     {
//         "id": 3182,
//         "bureaux": "1",
//         "code": "05 02 02 02",
//         "inscrit": "118",
//         "province": "MOUGAMBOU-DIMBOU"
//     },
//     {
//         "id": 3183,
//         "bureaux": "1",
//         "code": "05 02 02 03",
//         "inscrit": "257",
//         "province": "MOUTSOUBIRI"
//     },
//     {
//         "id": 3184,
//         "bureaux": "1",
//         "code": "05 02 02 04",
//         "inscrit": "293",
//         "province": "DIGOUDOU"
//     },
//     {
//         "id": 3185,
//         "bureaux": "1",
//         "code": "05 02 02 05",
//         "inscrit": "122",
//         "province": "NZIENZILI"
//     },
//     {
//         "id": 3186,
//         "bureaux": "1",
//         "code": "05 02 02 06",
//         "inscrit": "161",
//         "province": "DOUGANDOU"
//     },
//     {
//         "id": 3187,
//         "bureaux": "1",
//         "code": "05 02 02 07",
//         "inscrit": "252",
//         "province": "LOUANGO"
//     },
//     {
//         "id": 3188,
//         "bureaux": "1",
//         "code": "05 02 02 08",
//         "inscrit": "121",
//         "province": "MOUNANGA"
//     },
//     {
//         "id": 3189,
//         "bureaux": "1",
//         "code": "05 02 02 09",
//         "inscrit": "96",
//         "province": "DOUSSEGOUSSOU"
//     },
//     {
//         "id": 3190,
//         "bureaux": "1",
//         "code": "05 02 02 10",
//         "inscrit": "101",
//         "province": "MILOLO"
//     },
//     {
//         "id": 3191,
//         "bureaux": "1",
//         "code": "05 02 02 11",
//         "inscrit": "268",
//         "province": "TONO"
//     },
//     {
//         "id": 3192,
//         "bureaux": "1",
//         "code": "05 02 02 12",
//         "inscrit": "62",
//         "province": "VIEUX-TONO"
//     },
//     {
//         "id": 3193,
//         "bureaux": "1",
//         "code": "05 02 02 13",
//         "inscrit": "41",
//         "province": "IMANGUE-PLANTEUR"
//     },
//     {
//         "id": 3194,
//         "bureaux": "1",
//         "code": "05 02 02 14",
//         "inscrit": "54",
//         "province": "MOUNIONZI"
//     },
//     {
//         "id": 3195,
//         "bureaux": "1",
//         "code": "05 02 03 01",
//         "inscrit": "137",
//         "province": "MABOURIGA"
//     },
//     {
//         "id": 3196,
//         "bureaux": "1",
//         "code": "05 02 03 02",
//         "inscrit": "369",
//         "province": "PENIOUNDOU"
//     },
//     {
//         "id": 3197,
//         "bureaux": "1",
//         "code": "05 02 03 03",
//         "inscrit": "88",
//         "province": "DIKOUTOU"
//     },
//     {
//         "id": 3198,
//         "bureaux": "1",
//         "code": "05 02 03 04",
//         "inscrit": "119",
//         "province": "MOUEDJI"
//     },
//     {
//         "id": 3199,
//         "bureaux": "1",
//         "code": "05 02 03 05",
//         "inscrit": "397",
//         "province": "NDENGUILILA"
//     },
//     {
//         "id": 3200,
//         "bureaux": "1",
//         "code": "05 02 03 06",
//         "inscrit": "143",
//         "province": "MANDILOU 2"
//     },
//     {
//         "id": 3201,
//         "bureaux": "9",
//         "code": "05 02 01",
//         "inscrit": "680",
//         "province": "DOUGHEGNY"
//     },
//     {
//         "id": 3202,
//         "bureaux": "14",
//         "code": "05 02 02",
//         "inscrit": "2,331",
//         "province": "DOUSSEGOUSSOU"
//     },
//     {
//         "id": 3203,
//         "bureaux": "6",
//         "code": "05 02 03",
//         "inscrit": "1,253",
//         "province": "MOUGALABA-DOUVOUNGOU"
//     },
//     {
//         "id": 3204,
//         "bureaux": "1",
//         "code": "05 03 00 01",
//         "inscrit": "462",
//         "province": "ECOLE PUBLIQUE KOUANGO"
//     },
//     {
//         "id": 3205,
//         "bureaux": "1",
//         "code": "05 03 00 02",
//         "inscrit": "141",
//         "province": "DISP TCHIOLE-NDEMBET"
//     },
//     {
//         "id": 3206,
//         "bureaux": "1",
//         "code": "05 03 00 03",
//         "inscrit": "454",
//         "province": "MABOUNDA (C E S )"
//     },
//     {
//         "id": 3207,
//         "bureaux": "1",
//         "code": "05 03 00 04",
//         "inscrit": "471",
//         "province": "ECOLE PUBLIQUE (FOUIKA)"
//     },
//     {
//         "id": 3208,
//         "bureaux": "1",
//         "code": "05 03 00 05",
//         "inscrit": "164",
//         "province": "PREFECTURE DOUANES"
//     },
//     {
//         "id": 3209,
//         "bureaux": "1",
//         "code": "05 03 00 06",
//         "inscrit": "391",
//         "province": "BANA AVIATION"
//     },
//     {
//         "id": 3210,
//         "bureaux": "6",
//         "code": "05 03 00",
//         "inscrit": "2,083",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 3211,
//         "bureaux": "1",
//         "code": "05 04 01 01",
//         "inscrit": "200",
//         "province": "SAINT ANTOINE"
//     },
//     {
//         "id": 3212,
//         "bureaux": "1",
//         "code": "05 04 01 02",
//         "inscrit": "116",
//         "province": "DOUMVOU"
//     },
//     {
//         "id": 3213,
//         "bureaux": "1",
//         "code": "05 04 01 03",
//         "inscrit": "25",
//         "province": "MALEMBET (MAMBI 2)"
//     },
//     {
//         "id": 3214,
//         "bureaux": "1",
//         "code": "05 04 01 04",
//         "inscrit": "140",
//         "province": "MAMBI I"
//     },
//     {
//         "id": 3215,
//         "bureaux": "1",
//         "code": "05 04 01 05",
//         "inscrit": "81",
//         "province": "PILAKOUMBI"
//     },
//     {
//         "id": 3216,
//         "bureaux": "1",
//         "code": "05 04 01 06",
//         "inscrit": "64",
//         "province": "BANA-AVIATION (MATCHITI)"
//     },
//     {
//         "id": 3217,
//         "bureaux": "1",
//         "code": "05 04 02 01",
//         "inscrit": "206",
//         "province": "MANGALI"
//     },
//     {
//         "id": 3218,
//         "bureaux": "1",
//         "code": "05 04 02 02",
//         "inscrit": "94",
//         "province": "LOUANDO"
//     },
//     {
//         "id": 3219,
//         "bureaux": "1",
//         "code": "05 04 02 03",
//         "inscrit": "176",
//         "province": "BILANGA"
//     },
//     {
//         "id": 3220,
//         "bureaux": "1",
//         "code": "05 04 02 04",
//         "inscrit": "117",
//         "province": "VEMO"
//     },
//     {
//         "id": 3221,
//         "bureaux": "1",
//         "code": "05 04 02 05",
//         "inscrit": "115",
//         "province": "DITOUBA"
//     },
//     {
//         "id": 3222,
//         "bureaux": "1",
//         "code": "05 04 02 06",
//         "inscrit": "143",
//         "province": "LOUBOMO"
//     },
//     {
//         "id": 3223,
//         "bureaux": "1",
//         "code": "05 04 02 07",
//         "inscrit": "80",
//         "province": "MIVEMBA"
//     },
//     {
//         "id": 3224,
//         "bureaux": "1",
//         "code": "05 04 02 08",
//         "inscrit": "28",
//         "province": "DOUIGNY"
//     },
//     {
//         "id": 3225,
//         "bureaux": "1",
//         "code": "05 04 02 09",
//         "inscrit": "185",
//         "province": "MALOUNGA I"
//     },
//     {
//         "id": 3226,
//         "bureaux": "1",
//         "code": "05 04 02 10",
//         "inscrit": "127",
//         "province": "PANGA"
//     },
//     {
//         "id": 3227,
//         "bureaux": "1",
//         "code": "05 04 02 11",
//         "inscrit": "49",
//         "province": "MALOUNGA II"
//     },
//     {
//         "id": 3228,
//         "bureaux": "1",
//         "code": "05 04 02 12",
//         "inscrit": "17",
//         "province": "MIRENDA"
//     },
//     {
//         "id": 3229,
//         "bureaux": "1",
//         "code": "05 04 03 01",
//         "inscrit": "60",
//         "province": "MOUENDA"
//     },
//     {
//         "id": 3230,
//         "bureaux": "1",
//         "code": "05 04 03 02",
//         "inscrit": "30",
//         "province": "MOULONDO"
//     },
//     {
//         "id": 3231,
//         "bureaux": "1",
//         "code": "05 04 03 03",
//         "inscrit": "24",
//         "province": "MOUGAGARA"
//     },
//     {
//         "id": 3232,
//         "bureaux": "6",
//         "code": "05 04 01",
//         "inscrit": "626",
//         "province": "LOUBETSI-DOUMVOU"
//     },
//     {
//         "id": 3233,
//         "bureaux": "12",
//         "code": "05 04 02",
//         "inscrit": "1,337",
//         "province": "MAYOMBE"
//     },
//     {
//         "id": 3234,
//         "bureaux": "3",
//         "code": "05 04 03",
//         "inscrit": "114",
//         "province": "MOUWAMBI"
//     },
//     {
//         "id": 3235,
//         "bureaux": "1",
//         "code": "05 05 00 01",
//         "inscrit": "292",
//         "province": "EC PUBL A (MOUTOUMBA-DJABA)"
//     },
//     {
//         "id": 3236,
//         "bureaux": "1",
//         "code": "05 05 00 02",
//         "inscrit": "136",
//         "province": "EC PUBL B (MISSAFOU)"
//     },
//     {
//         "id": 3237,
//         "bureaux": "1",
//         "code": "05 05 00 03",
//         "inscrit": "259",
//         "province": "MBAMBA"
//     },
//     {
//         "id": 3238,
//         "bureaux": "1",
//         "code": "05 05 00 04",
//         "inscrit": "246",
//         "province": "EC ST KISITO (MOUGOUNA)"
//     },
//     {
//         "id": 3239,
//         "bureaux": "1",
//         "code": "05 05 00 05",
//         "inscrit": "87",
//         "province": "CES (BILENGUI)"
//     },
//     {
//         "id": 3240,
//         "bureaux": "1",
//         "code": "05 05 00 06",
//         "inscrit": "376",
//         "province": "EC PROT (MOUDIBA PUTU-NENI)"
//     },
//     {
//         "id": 3241,
//         "bureaux": "1",
//         "code": "05 05 00 07",
//         "inscrit": "45",
//         "province": "CENTRE SOCIAL"
//     },
//     {
//         "id": 3242,
//         "bureaux": "1",
//         "code": "05 05 00 08",
//         "inscrit": "255",
//         "province": "BASE PEDAGOGIQUE MIAMBA"
//     },
//     {
//         "id": 3243,
//         "bureaux": "8",
//         "code": "05 05 00",
//         "inscrit": "1,696",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 3244,
//         "bureaux": "1",
//         "code": "05 06 01 01",
//         "inscrit": "89",
//         "province": "ECOLE NGUENDA"
//     },
//     {
//         "id": 3245,
//         "bureaux": "1",
//         "code": "05 06 01 02",
//         "inscrit": "46",
//         "province": "MABALA"
//     },
//     {
//         "id": 3246,
//         "bureaux": "1",
//         "code": "05 06 01 03",
//         "inscrit": "147",
//         "province": "ECOLE MANDILOU"
//     },
//     {
//         "id": 3247,
//         "bureaux": "1",
//         "code": "05 06 02 01",
//         "inscrit": "56",
//         "province": "NGAGALA"
//     },
//     {
//         "id": 3248,
//         "bureaux": "1",
//         "code": "05 06 02 02",
//         "inscrit": "153",
//         "province": "ECOLE DOUGASSOU"
//     },
//     {
//         "id": 3249,
//         "bureaux": "1",
//         "code": "05 06 02 03",
//         "inscrit": "221",
//         "province": "EC MOUKOKO-MBAKA"
//     },
//     {
//         "id": 3250,
//         "bureaux": "1",
//         "code": "05 06 02 04",
//         "inscrit": "77",
//         "province": "MBILA-NYAMBI"
//     },
//     {
//         "id": 3251,
//         "bureaux": "1",
//         "code": "05 06 03 01",
//         "inscrit": "255",
//         "province": "MOKABE"
//     },
//     {
//         "id": 3252,
//         "bureaux": "1",
//         "code": "05 06 03 02",
//         "inscrit": "430",
//         "province": "RINA-NZALA"
//     },
//     {
//         "id": 3253,
//         "bureaux": "1",
//         "code": "05 06 03 03",
//         "inscrit": "42",
//         "province": "BOUNOUNGA"
//     },
//     {
//         "id": 3254,
//         "bureaux": "1",
//         "code": "05 06 03 04",
//         "inscrit": "255",
//         "province": "MOURINDI"
//     },
//     {
//         "id": 3255,
//         "bureaux": "1",
//         "code": "05 06 03 05",
//         "inscrit": "142",
//         "province": "MOUKOUALOU"
//     },
//     {
//         "id": 3256,
//         "bureaux": "1",
//         "code": "05 06 03 06",
//         "inscrit": "32",
//         "province": "BOUTEMBI"
//     },
//     {
//         "id": 3257,
//         "bureaux": "1",
//         "code": "05 06 03 07",
//         "inscrit": "20",
//         "province": "BOUGOULOU"
//     },
//     {
//         "id": 3258,
//         "bureaux": "1",
//         "code": "05 06 03 08",
//         "inscrit": "9",
//         "province": "KONDZI"
//     },
//     {
//         "id": 3259,
//         "bureaux": "1",
//         "code": "05 06 03 09",
//         "inscrit": "52",
//         "province": "DOUSSALA"
//     },
//     {
//         "id": 3260,
//         "bureaux": "1",
//         "code": "05 06 03 10",
//         "inscrit": "41",
//         "province": "PAHOU-NZAMBI"
//     },
//     {
//         "id": 3261,
//         "bureaux": "1",
//         "code": "05 06 03 11",
//         "inscrit": "18",
//         "province": "MBOUNGOU"
//     },
//     {
//         "id": 3262,
//         "bureaux": "1",
//         "code": "05 06 03 12",
//         "inscrit": "59",
//         "province": "MIVEMBA-MBORTO"
//     },
//     {
//         "id": 3263,
//         "bureaux": "1",
//         "code": "05 06 03 13",
//         "inscrit": "56",
//         "province": "MALOLO"
//     },
//     {
//         "id": 3264,
//         "bureaux": "1",
//         "code": "05 06 03 14",
//         "inscrit": "47",
//         "province": "MOUSSAMOU-KOUGOU"
//     },
//     {
//         "id": 3265,
//         "bureaux": "3",
//         "code": "05 06 01",
//         "inscrit": "282",
//         "province": "DOUAMI-MUEMBI"
//     },
//     {
//         "id": 3266,
//         "bureaux": "4",
//         "code": "05 06 02",
//         "inscrit": "507",
//         "province": "DOUBANDJI"
//     },
//     {
//         "id": 3267,
//         "bureaux": "14",
//         "code": "05 06 03",
//         "inscrit": "1,458",
//         "province": "MIGAMBA-YARA"
//     },
//     {
//         "id": 3268,
//         "bureaux": "1",
//         "code": "05 07 00 01",
//         "inscrit": "186",
//         "province": "ILOUNGA"
//     },
//     {
//         "id": 3269,
//         "bureaux": "1",
//         "code": "05 07 00 02",
//         "inscrit": "114",
//         "province": "ECOLE PUB NGONGO"
//     },
//     {
//         "id": 3270,
//         "bureaux": "1",
//         "code": "05 07 00 03",
//         "inscrit": "108",
//         "province": "BAMBOMA"
//     },
//     {
//         "id": 3271,
//         "bureaux": "1",
//         "code": "05 07 00 04",
//         "inscrit": "173",
//         "province": "DONGO"
//     },
//     {
//         "id": 3272,
//         "bureaux": "1",
//         "code": "05 07 00 05",
//         "inscrit": "213",
//         "province": "DOUNDZANZA"
//     },
//     {
//         "id": 3273,
//         "bureaux": "1",
//         "code": "05 07 00 06",
//         "inscrit": "87",
//         "province": "BIKOKO"
//     },
//     {
//         "id": 3274,
//         "bureaux": "6",
//         "code": "05 07 00",
//         "inscrit": "881",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 3275,
//         "bureaux": "1",
//         "code": "05 08 02 01",
//         "inscrit": "104",
//         "province": "DOUANO I"
//     },
//     {
//         "id": 3276,
//         "bureaux": "1",
//         "code": "05 08 02 02",
//         "inscrit": "212",
//         "province": "NYALI"
//     },
//     {
//         "id": 3277,
//         "bureaux": "1",
//         "code": "05 08 02 03",
//         "inscrit": "72",
//         "province": "DOUVOULI"
//     },
//     {
//         "id": 3278,
//         "bureaux": "1",
//         "code": "05 08 02 04",
//         "inscrit": "261",
//         "province": "PANZA"
//     },
//     {
//         "id": 3279,
//         "bureaux": "1",
//         "code": "05 08 02 05",
//         "inscrit": "114",
//         "province": "DOUANO II"
//     },
//     {
//         "id": 3280,
//         "bureaux": "1",
//         "code": "05 08 03 01",
//         "inscrit": "14",
//         "province": "MBANGA"
//     },
//     {
//         "id": 3281,
//         "bureaux": "1",
//         "code": "05 08 03 02",
//         "inscrit": "19",
//         "province": "KOUMOU-DOUSSALA"
//     },
//     {
//         "id": 3282,
//         "bureaux": "1",
//         "code": "05 08 03 03",
//         "inscrit": "88",
//         "province": "NZINGA"
//     },
//     {
//         "id": 3283,
//         "bureaux": "1",
//         "code": "05 08 03 04",
//         "inscrit": "14",
//         "province": "MOUNGOUDI"
//     },
//     {
//         "id": 3284,
//         "bureaux": "1",
//         "code": "05 08 03 05",
//         "inscrit": "60",
//         "province": "BANDA-MAMBA"
//     },
//     {
//         "id": 3285,
//         "bureaux": "1",
//         "code": "05 08 03 06",
//         "inscrit": "27",
//         "province": "CHANTIER DOUVONO"
//     },
//     {
//         "id": 3286,
//         "bureaux": "1",
//         "code": "05 08 03 07",
//         "inscrit": "26",
//         "province": "KOTA"
//     },
//     {
//         "id": 3287,
//         "bureaux": "5",
//         "code": "05 08 02",
//         "inscrit": "763",
//         "province": "HAUTE DOLA"
//     },
//     {
//         "id": 3288,
//         "bureaux": "7",
//         "code": "05 08 03",
//         "inscrit": "248",
//         "province": "HAUTE NGONGO"
//     },
//     {
//         "id": 3289,
//         "bureaux": "1",
//         "code": "05 09 00 01",
//         "inscrit": "181",
//         "province": "ECOLE PUBLIQUE CTR-VILLE)"
//     },
//     {
//         "id": 3290,
//         "bureaux": "1",
//         "code": "05 09 00 02",
//         "inscrit": "39",
//         "province": "GNENZE MOGNO"
//     },
//     {
//         "id": 3291,
//         "bureaux": "1",
//         "code": "05 09 00 03",
//         "inscrit": "54",
//         "province": "MINKOUMI"
//     },
//     {
//         "id": 3292,
//         "bureaux": "1",
//         "code": "05 09 00 04",
//         "inscrit": "139",
//         "province": "TALA-NZAMBI"
//     },
//     {
//         "id": 3293,
//         "bureaux": "1",
//         "code": "05 10 03 01",
//         "inscrit": "31",
//         "province": "TCHIANZI"
//     },
//     {
//         "id": 3294,
//         "bureaux": "1",
//         "code": "05 10 03 02",
//         "inscrit": "55",
//         "province": "YOYO"
//     },
//     {
//         "id": 3295,
//         "bureaux": "1",
//         "code": "05 10 03 03",
//         "inscrit": "38",
//         "province": "TIYA"
//     },
//     {
//         "id": 3296,
//         "bureaux": "1",
//         "code": "05 10 03 04",
//         "inscrit": "35",
//         "province": "RINA NZALA"
//     },
//     {
//         "id": 3297,
//         "bureaux": "1",
//         "code": "05 10 03 05",
//         "inscrit": "53",
//         "province": "MALEMBE"
//     },
//     {
//         "id": 3298,
//         "bureaux": "2",
//         "code": "05 10 02",
//         "inscrit": "84",
//         "province": "LAGUNE"
//     },
//     {
//         "id": 3299,
//         "bureaux": "5",
//         "code": "05 10 03",
//         "inscrit": "212",
//         "province": "LOUZIBI"
//     },
//     {
//         "id": 3300,
//         "bureaux": "1",
//         "code": "05 11 00 01",
//         "inscrit": "219",
//         "province": "CENTRE VILLE"
//     },
//     {
//         "id": 3301,
//         "bureaux": "1",
//         "code": "05 11 00 02",
//         "inscrit": "132",
//         "province": "MAGONGA"
//     },
//     {
//         "id": 3302,
//         "bureaux": "1",
//         "code": "05 11 00 03",
//         "inscrit": "248",
//         "province": "DOUMANGA"
//     },
//     {
//         "id": 3303,
//         "bureaux": "3",
//         "code": "05 11 00",
//         "inscrit": "599",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 3304,
//         "bureaux": "1",
//         "code": "05 12 01 01",
//         "inscrit": "112",
//         "province": "DOUVOYE"
//     },
//     {
//         "id": 3305,
//         "bureaux": "1",
//         "code": "05 12 01 02",
//         "inscrit": "127",
//         "province": "BAYADI"
//     },
//     {
//         "id": 3306,
//         "bureaux": "1",
//         "code": "05 12 01 03",
//         "inscrit": "40",
//         "province": "IKOLI"
//     },
//     {
//         "id": 3307,
//         "bureaux": "1",
//         "code": "05 12 01 04",
//         "inscrit": "142",
//         "province": "MIASSA"
//     },
//     {
//         "id": 3308,
//         "bureaux": "1",
//         "code": "05 12 01 05",
//         "inscrit": "54",
//         "province": "BIGOUNDOU-GUIHA"
//     },
//     {
//         "id": 3309,
//         "bureaux": "1",
//         "code": "05 12 01 06",
//         "inscrit": "104",
//         "province": "MAHANDI-MONUMBUMBA"
//     },
//     {
//         "id": 3310,
//         "bureaux": "1",
//         "code": "05 12 01 07",
//         "inscrit": "111",
//         "province": "GNOUMBITSI"
//     },
//     {
//         "id": 3311,
//         "bureaux": "1",
//         "code": "05 12 01 08",
//         "inscrit": "28",
//         "province": "BIKAMBA"
//     },
//     {
//         "id": 3312,
//         "bureaux": "1",
//         "code": "05 12 01 09",
//         "inscrit": "68",
//         "province": "PC NYANGA-S-I-AT"
//     },
//     {
//         "id": 3313,
//         "bureaux": "1",
//         "code": "05 12 02 01",
//         "inscrit": "19",
//         "province": "MOULENGUI-BINDZA"
//     },
//     {
//         "id": 3314,
//         "bureaux": "1",
//         "code": "05 12 02 02",
//         "inscrit": "1",
//         "province": "VOUNGOU SO.GA.DEL"
//     },
//     {
//         "id": 3315,
//         "bureaux": "1",
//         "code": "05 12 02 03",
//         "inscrit": "117",
//         "province": "DILEMBA"
//     },
//     {
//         "id": 3316,
//         "bureaux": "1",
//         "code": "05 12 02 04",
//         "inscrit": "77",
//         "province": "RINA-NZALA"
//     },
//     {
//         "id": 3317,
//         "bureaux": "1",
//         "code": "05 12 02 05",
//         "inscrit": "137",
//         "province": "DIBOR-BIBORA"
//     },
//     {
//         "id": 3318,
//         "bureaux": "9",
//         "code": "05 12 01",
//         "inscrit": "786",
//         "province": "DOUKI"
//     },
//     {
//         "id": 3319,
//         "bureaux": "5",
//         "code": "05 12 02",
//         "inscrit": "351",
//         "province": "VOUNGOU"
//     },
//     {
//         "id": 3320,
//         "bureaux": "26",
//         "code": "501",
//         "inscrit": "8,524",
//         "province": "TCHIBANGA"
//     },
//     {
//         "id": 3321,
//         "bureaux": "29",
//         "code": "502",
//         "inscrit": "4,264",
//         "province": "MOUGOUTSI (TCHIBANGA)"
//     },
//     {
//         "id": 3322,
//         "bureaux": "6",
//         "code": "503",
//         "inscrit": "2,083",
//         "province": "MAYUMBA"
//     },
//     {
//         "id": 3323,
//         "bureaux": "21",
//         "code": "504",
//         "inscrit": "2,077",
//         "province": "BASSE-BANIO (MAYUMBA)"
//     },
//     {
//         "id": 3324,
//         "bureaux": "8",
//         "code": "505",
//         "inscrit": "1,696",
//         "province": "MOABI"
//     },
//     {
//         "id": 3325,
//         "bureaux": "21",
//         "code": "506",
//         "inscrit": "2,247",
//         "province": "DOUIGNY (MOABI)"
//     },
//     {
//         "id": 3326,
//         "bureaux": "6",
//         "code": "507",
//         "inscrit": "881",
//         "province": "MABANDA"
//     },
//     {
//         "id": 3327,
//         "bureaux": "12",
//         "code": "508",
//         "inscrit": "1,011",
//         "province": "DOUTSILA (MABANDA)"
//     },
//     {
//         "id": 3328,
//         "bureaux": "4",
//         "code": "509",
//         "inscrit": "413",
//         "province": "NDINDI"
//     },
//     {
//         "id": 3329,
//         "bureaux": "7",
//         "code": "510",
//         "inscrit": "296",
//         "province": "HAUTE-BANIO (NDINDI)"
//     },
//     {
//         "id": 3330,
//         "bureaux": "3",
//         "code": "511",
//         "inscrit": "599",
//         "province": "MOULENGUI-BINDZA"
//     },
//     {
//         "id": 3331,
//         "bureaux": "14",
//         "code": "512",
//         "inscrit": "1,137",
//         "province": "MONGO (MOULENGUI-BINDZA)"
//     },
//     {
//         "id": 3332,
//         "bureaux": "1",
//         "code": "06 01 01 01",
//         "inscrit": "260",
//         "province": "PALAIS DE JUSTICE"
//     },
//     {
//         "id": 3333,
//         "bureaux": "2",
//         "code": "06 01 01 02",
//         "inscrit": "824",
//         "province": "ECOLE COMMUNALE A"
//     },
//     {
//         "id": 3334,
//         "bureaux": "3",
//         "code": "06 01 01 03",
//         "inscrit": "1,318",
//         "province": "ECOLE PUBL. MBOLO 3"
//     },
//     {
//         "id": 3335,
//         "bureaux": "1",
//         "code": "06 01 01 04",
//         "inscrit": "79",
//         "province": "ASS DEPARTEMENTALE 1"
//     },
//     {
//         "id": 3336,
//         "bureaux": "1",
//         "code": "06 01 01 05",
//         "inscrit": "281",
//         "province": "ECOLE PUBL. EPASSENDJE I"
//     },
//     {
//         "id": 3337,
//         "bureaux": "1",
//         "code": "06 01 01 06",
//         "inscrit": "498",
//         "province": "ECOLE DE SANTE"
//     },
//     {
//         "id": 3338,
//         "bureaux": "2",
//         "code": "06 01 01 07",
//         "inscrit": "575",
//         "province": "ECOLE PUBL. EPASSENDJE II"
//     },
//     {
//         "id": 3339,
//         "bureaux": "1",
//         "code": "06 01 01 08",
//         "inscrit": "194",
//         "province": "IYOKO-NGOTA RESIDENCE (CHEF Q.)"
//     },
//     {
//         "id": 3340,
//         "bureaux": "3",
//         "code": "06 01 01 09",
//         "inscrit": "1,144",
//         "province": "ECOLE ZOATAB"
//     },
//     {
//         "id": 3341,
//         "bureaux": "1",
//         "code": "06 01 01 10",
//         "inscrit": "167",
//         "province": "MBOLO 2"
//     },
//     {
//         "id": 3342,
//         "bureaux": "2",
//         "code": "06 01 01 11",
//         "inscrit": "679",
//         "province": "EBANDANGOYE"
//     },
//     {
//         "id": 3343,
//         "bureaux": "1",
//         "code": "06 01 01 12",
//         "inscrit": "58",
//         "province": "MBEZA"
//     },
//     {
//         "id": 3344,
//         "bureaux": "1",
//         "code": "06 01 01 13",
//         "inscrit": "152",
//         "province": "EDOUNG AVION 1"
//     },
//     {
//         "id": 3345,
//         "bureaux": "2",
//         "code": "06 01 02 01",
//         "inscrit": "719",
//         "province": "COLLEGE ESSIA"
//     },
//     {
//         "id": 3346,
//         "bureaux": "4",
//         "code": "06 01 02 02",
//         "inscrit": "1,674",
//         "province": "ECOLE PUBL. MARIEN NGOUABI"
//     },
//     {
//         "id": 3347,
//         "bureaux": "1",
//         "code": "06 01 02 03",
//         "inscrit": "234",
//         "province": "RESID. (CHEF Q.) NZING-MEYONG"
//     },
//     {
//         "id": 3348,
//         "bureaux": "1",
//         "code": "06 01 02 04",
//         "inscrit": "96",
//         "province": "RESID. (CHEF Q.) ANDOCK"
//     },
//     {
//         "id": 3349,
//         "bureaux": "1",
//         "code": "06 01 02 05",
//         "inscrit": "141",
//         "province": "RESIDENCE (CHEF Q.) MAYIGA"
//     },
//     {
//         "id": 3350,
//         "bureaux": "1",
//         "code": "06 01 02 06",
//         "inscrit": "316",
//         "province": "EC. PUBL. D EKOWONG"
//     },
//     {
//         "id": 3351,
//         "bureaux": "1",
//         "code": "06 01 02 07",
//         "inscrit": "138",
//         "province": "RESID. CHEF QUART. LOALOA"
//     },
//     {
//         "id": 3352,
//         "bureaux": "1",
//         "code": "06 01 02 08",
//         "inscrit": "29",
//         "province": "EDOUNG AVION 2"
//     },
//     {
//         "id": 3353,
//         "bureaux": "20",
//         "code": "06 01 01",
//         "inscrit": "6,229",
//         "province": "1ER  ARRONDISSEMENT"
//     },
//     {
//         "id": 3354,
//         "bureaux": "12",
//         "code": "06 01 02",
//         "inscrit": "3,347",
//         "province": "2EME ARRONDISSEMENT"
//     },
//     {
//         "id": 3355,
//         "bureaux": "1",
//         "code": "06 02 01 01",
//         "inscrit": "133",
//         "province": "ETAKANYABE"
//     },
//     {
//         "id": 3356,
//         "bureaux": "1",
//         "code": "06 02 01 02",
//         "inscrit": "168",
//         "province": "MBOMO"
//     },
//     {
//         "id": 3357,
//         "bureaux": "1",
//         "code": "06 02 01 03",
//         "inscrit": "162",
//         "province": "NTSIETE"
//     },
//     {
//         "id": 3358,
//         "bureaux": "1",
//         "code": "06 02 01 04",
//         "inscrit": "215",
//         "province": "MBONDOU"
//     },
//     {
//         "id": 3359,
//         "bureaux": "1",
//         "code": "06 02 01 05",
//         "inscrit": "182",
//         "province": "EKOBAKOBA"
//     },
//     {
//         "id": 3360,
//         "bureaux": "1",
//         "code": "06 02 01 06",
//         "inscrit": "171",
//         "province": "INDOMBO"
//     },
//     {
//         "id": 3361,
//         "bureaux": "1",
//         "code": "06 02 02 01",
//         "inscrit": "112",
//         "province": "MAYELA"
//     },
//     {
//         "id": 3362,
//         "bureaux": "1",
//         "code": "06 02 02 02",
//         "inscrit": "107",
//         "province": "LATTA"
//     },
//     {
//         "id": 3363,
//         "bureaux": "1",
//         "code": "06 02 02 03",
//         "inscrit": "81",
//         "province": "BOMBENDA"
//     },
//     {
//         "id": 3364,
//         "bureaux": "1",
//         "code": "06 02 02 04",
//         "inscrit": "67",
//         "province": "LA SCIERIE"
//     },
//     {
//         "id": 3365,
//         "bureaux": "1",
//         "code": "06 02 02 05",
//         "inscrit": "52",
//         "province": "PONT-ZADIE"
//     },
//     {
//         "id": 3366,
//         "bureaux": "1",
//         "code": "06 02 03 01",
//         "inscrit": "366",
//         "province": "MOHOBA-MOZEHE"
//     },
//     {
//         "id": 3367,
//         "bureaux": "1",
//         "code": "06 02 03 02",
//         "inscrit": "132",
//         "province": "MBELA"
//     },
//     {
//         "id": 3368,
//         "bureaux": "1",
//         "code": "06 02 03 03",
//         "inscrit": "130",
//         "province": "HENDJE"
//     },
//     {
//         "id": 3369,
//         "bureaux": "1",
//         "code": "06 02 03 04",
//         "inscrit": "218",
//         "province": "ZOOLENDE"
//     },
//     {
//         "id": 3370,
//         "bureaux": "1",
//         "code": "06 02 03 05",
//         "inscrit": "144",
//         "province": "MELONDOMIOLE"
//     },
//     {
//         "id": 3371,
//         "bureaux": "1",
//         "code": "06 02 03 06",
//         "inscrit": "91",
//         "province": "TROUWAYA"
//     },
//     {
//         "id": 3372,
//         "bureaux": "1",
//         "code": "06 02 03 07",
//         "inscrit": "282",
//         "province": "MAKEBE"
//     },
//     {
//         "id": 3373,
//         "bureaux": "1",
//         "code": "06 02 03 08",
//         "inscrit": "210",
//         "province": "BAKWAKA"
//     },
//     {
//         "id": 3374,
//         "bureaux": "1",
//         "code": "06 02 03 09",
//         "inscrit": "13",
//         "province": "YOKO-MILIEU"
//     },
//     {
//         "id": 3375,
//         "bureaux": "1",
//         "code": "06 02 03 10",
//         "inscrit": "51",
//         "province": "COCOMOICALA"
//     },
//     {
//         "id": 3376,
//         "bureaux": "1",
//         "code": "06 02 04 01",
//         "inscrit": "116",
//         "province": "NTSIBELONG I"
//     },
//     {
//         "id": 3377,
//         "bureaux": "1",
//         "code": "06 02 04 02",
//         "inscrit": "164",
//         "province": "MBESS"
//     },
//     {
//         "id": 3378,
//         "bureaux": "1",
//         "code": "06 02 04 03",
//         "inscrit": "113",
//         "province": "MINKOUALA"
//     },
//     {
//         "id": 3379,
//         "bureaux": "1",
//         "code": "06 02 04 04",
//         "inscrit": "30",
//         "province": "ADOUE"
//     },
//     {
//         "id": 3380,
//         "bureaux": "1",
//         "code": "06 02 04 05",
//         "inscrit": "218",
//         "province": "NTSENGKELE"
//     },
//     {
//         "id": 3381,
//         "bureaux": "1",
//         "code": "06 02 04 06",
//         "inscrit": "80",
//         "province": "NTSIBELONG II"
//     },
//     {
//         "id": 3382,
//         "bureaux": "1",
//         "code": "06 02 05 01",
//         "inscrit": "203",
//         "province": "MASSAHA"
//     },
//     {
//         "id": 3383,
//         "bureaux": "1",
//         "code": "06 02 05 02",
//         "inscrit": "115",
//         "province": "ZOOLENDE"
//     },
//     {
//         "id": 3384,
//         "bureaux": "1",
//         "code": "06 02 05 03",
//         "inscrit": "262",
//         "province": "BATOUALA I"
//     },
//     {
//         "id": 3385,
//         "bureaux": "1",
//         "code": "06 02 05 04",
//         "inscrit": "189",
//         "province": "NZE"
//     },
//     {
//         "id": 3386,
//         "bureaux": "1",
//         "code": "06 02 05 05",
//         "inscrit": "138",
//         "province": "BATOUALA II"
//     },
//     {
//         "id": 3387,
//         "bureaux": "1",
//         "code": "06 02 05 06",
//         "inscrit": "42",
//         "province": "NGAZI"
//     },
//     {
//         "id": 3388,
//         "bureaux": "1",
//         "code": "06 02 06 01",
//         "inscrit": "121",
//         "province": "MESSEB"
//     },
//     {
//         "id": 3389,
//         "bureaux": "1",
//         "code": "06 02 06 02",
//         "inscrit": "71",
//         "province": "MANANGA"
//     },
//     {
//         "id": 3390,
//         "bureaux": "1",
//         "code": "06 02 06 03",
//         "inscrit": "83",
//         "province": "NDJENG"
//     },
//     {
//         "id": 3391,
//         "bureaux": "1",
//         "code": "06 02 06 04",
//         "inscrit": "97",
//         "province": "ABOR"
//     },
//     {
//         "id": 3392,
//         "bureaux": "1",
//         "code": "06 02 06 05",
//         "inscrit": "63",
//         "province": "MEKOB"
//     },
//     {
//         "id": 3393,
//         "bureaux": "1",
//         "code": "06 02 07 01",
//         "inscrit": "212",
//         "province": "MVADHY"
//     },
//     {
//         "id": 3394,
//         "bureaux": "1",
//         "code": "06 02 07 02",
//         "inscrit": "245",
//         "province": "MVADHY II"
//     },
//     {
//         "id": 3395,
//         "bureaux": "1",
//         "code": "06 02 07 03",
//         "inscrit": "184",
//         "province": "MAYIBOUTH I"
//     },
//     {
//         "id": 3396,
//         "bureaux": "1",
//         "code": "06 02 07 04",
//         "inscrit": "181",
//         "province": "MAYIBOUTH II"
//     },
//     {
//         "id": 3397,
//         "bureaux": "1",
//         "code": "06 02 07 05",
//         "inscrit": "36",
//         "province": "MBONDO"
//     },
//     {
//         "id": 3398,
//         "bureaux": "6",
//         "code": "06 02 01",
//         "inscrit": "1,031",
//         "province": "ABOYE"
//     },
//     {
//         "id": 3399,
//         "bureaux": "5",
//         "code": "06 02 02",
//         "inscrit": "419",
//         "province": "LIBOUMBA"
//     },
//     {
//         "id": 3400,
//         "bureaux": "10",
//         "code": "06 02 03",
//         "inscrit": "1,637",
//         "province": "MOUNIANDZI(DIST MAKEBE-BAKWAKA"
//     },
//     {
//         "id": 3401,
//         "bureaux": "6",
//         "code": "06 02 04",
//         "inscrit": "721",
//         "province": "NTANG LOULI"
//     },
//     {
//         "id": 3402,
//         "bureaux": "6",
//         "code": "06 02 05",
//         "inscrit": "949",
//         "province": "BONGA (DISTRICT DE BATOUALA"
//     },
//     {
//         "id": 3403,
//         "bureaux": "5",
//         "code": "06 02 06",
//         "inscrit": "435",
//         "province": "IVINDO (DISTRICT DE MVADHY)"
//     },
//     {
//         "id": 3404,
//         "bureaux": "5",
//         "code": "06 02 07",
//         "inscrit": "858",
//         "province": "IYEZE"
//     },
//     {
//         "id": 3405,
//         "bureaux": "1",
//         "code": "06 03 00 01",
//         "inscrit": "461",
//         "province": "C.E.S"
//     },
//     {
//         "id": 3406,
//         "bureaux": "1",
//         "code": "06 03 00 02",
//         "inscrit": "445",
//         "province": "ATSOMBIAL"
//     },
//     {
//         "id": 3407,
//         "bureaux": "1",
//         "code": "06 03 00 03",
//         "inscrit": "300",
//         "province": "LINZE"
//     },
//     {
//         "id": 3408,
//         "bureaux": "1",
//         "code": "06 03 00 04",
//         "inscrit": "259",
//         "province": "MASSOUKOU  ET  KEKELE"
//     },
//     {
//         "id": 3409,
//         "bureaux": "1",
//         "code": "06 03 00 05",
//         "inscrit": "330",
//         "province": "TRANSGABONAIS"
//     },
//     {
//         "id": 3410,
//         "bureaux": "1",
//         "code": "06 03 00 06",
//         "inscrit": "306",
//         "province": "CENTRE VILLE I"
//     },
//     {
//         "id": 3411,
//         "bureaux": "1",
//         "code": "06 03 00 07",
//         "inscrit": "194",
//         "province": "CENTRE VILLE II"
//     },
//     {
//         "id": 3412,
//         "bureaux": "7",
//         "code": "06 03 00",
//         "inscrit": "2,295",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 3413,
//         "bureaux": "1",
//         "code": "06 04 01 01",
//         "inscrit": "241",
//         "province": "DJIDJI 1 ET 2"
//     },
//     {
//         "id": 3414,
//         "bureaux": "1",
//         "code": "06 04 01 02",
//         "inscrit": "221",
//         "province": "LOLO 1 ET 2"
//     },
//     {
//         "id": 3415,
//         "bureaux": "1",
//         "code": "06 04 01 03",
//         "inscrit": "235",
//         "province": "LASSIO ET MATORA"
//     },
//     {
//         "id": 3416,
//         "bureaux": "1",
//         "code": "06 04 01 04",
//         "inscrit": "228",
//         "province": "YEN"
//     },
//     {
//         "id": 3417,
//         "bureaux": "1",
//         "code": "06 04 01 05",
//         "inscrit": "301",
//         "province": "LABOKA 1 ET 2"
//     },
//     {
//         "id": 3418,
//         "bureaux": "1",
//         "code": "06 04 01 06",
//         "inscrit": "455",
//         "province": "OUSSA ET MBOMAO"
//     },
//     {
//         "id": 3419,
//         "bureaux": "1",
//         "code": "06 04 02 01",
//         "inscrit": "38",
//         "province": "BALEM 1 ET 2"
//     },
//     {
//         "id": 3420,
//         "bureaux": "1",
//         "code": "06 04 02 02",
//         "inscrit": "55",
//         "province": "INZANZA"
//     },
//     {
//         "id": 3421,
//         "bureaux": "1",
//         "code": "06 04 02 03",
//         "inscrit": "161",
//         "province": "POTEAU-CIMENT & KANK (ABENELANG)"
//     },
//     {
//         "id": 3422,
//         "bureaux": "1",
//         "code": "06 04 02 04",
//         "inscrit": "188",
//         "province": "ROUGIER-IVINDO (MANGOUMBA)"
//     },
//     {
//         "id": 3423,
//         "bureaux": "1",
//         "code": "06 04 02 05",
//         "inscrit": "46",
//         "province": "MOUYABI"
//     },
//     {
//         "id": 3424,
//         "bureaux": "1",
//         "code": "06 04 02 06",
//         "inscrit": "37",
//         "province": "ASSALA- MIELE"
//     },
//     {
//         "id": 3425,
//         "bureaux": "1",
//         "code": "06 04 03 01",
//         "inscrit": "15",
//         "province": "KONGO-MBOUMBA"
//     },
//     {
//         "id": 3426,
//         "bureaux": "1",
//         "code": "06 04 03 02",
//         "inscrit": "333",
//         "province": "EC- PUB- LOPE-CENTRE"
//     },
//     {
//         "id": 3427,
//         "bureaux": "1",
//         "code": "06 04 03 03",
//         "inscrit": "71",
//         "province": "KAZAMABIKA"
//     },
//     {
//         "id": 3428,
//         "bureaux": "1",
//         "code": "06 04 03 04",
//         "inscrit": "61",
//         "province": "ASCHOUKA"
//     },
//     {
//         "id": 3429,
//         "bureaux": "1",
//         "code": "06 04 03 05",
//         "inscrit": "41",
//         "province": "AYEM-GARE"
//     },
//     {
//         "id": 3430,
//         "bureaux": "1",
//         "code": "06 04 04 01",
//         "inscrit": "111",
//         "province": "AKOBA-BISSOBILAM"
//     },
//     {
//         "id": 3431,
//         "bureaux": "1",
//         "code": "06 04 04 02",
//         "inscrit": "180",
//         "province": "MBADI (AKIGUELAM)"
//     },
//     {
//         "id": 3432,
//         "bureaux": "1",
//         "code": "06 04 04 03",
//         "inscrit": "83",
//         "province": "NZAFIENG"
//     },
//     {
//         "id": 3433,
//         "bureaux": "1",
//         "code": "06 04 04 04",
//         "inscrit": "38",
//         "province": "BALIMBA"
//     },
//     {
//         "id": 3434,
//         "bureaux": "1",
//         "code": "06 04 05 01",
//         "inscrit": "70",
//         "province": "MAKOGHE"
//     },
//     {
//         "id": 3435,
//         "bureaux": "1",
//         "code": "06 04 05 02",
//         "inscrit": "114",
//         "province": "MIKONGO I ET II"
//     },
//     {
//         "id": 3436,
//         "bureaux": "1",
//         "code": "06 04 05 04",
//         "inscrit": "54",
//         "province": "MASSENGUELANI"
//     },
//     {
//         "id": 3437,
//         "bureaux": "1",
//         "code": "06 04 05 05",
//         "inscrit": "9",
//         "province": "PK ZERO"
//     },
//     {
//         "id": 3438,
//         "bureaux": "6",
//         "code": "06 04 01",
//         "inscrit": "1,681",
//         "province": "FIENG OKANO"
//     },
//     {
//         "id": 3439,
//         "bureaux": "6",
//         "code": "06 04 02",
//         "inscrit": "525",
//         "province": "LEZINDA"
//     },
//     {
//         "id": 3440,
//         "bureaux": "5",
//         "code": "06 04 03",
//         "inscrit": "521",
//         "province": "LELEDI (DISTRICT MOKEKO)"
//     },
//     {
//         "id": 3441,
//         "bureaux": "4",
//         "code": "06 04 04",
//         "inscrit": "412",
//         "province": "NKE"
//     },
//     {
//         "id": 3442,
//         "bureaux": "4",
//         "code": "06 04 05",
//         "inscrit": "247",
//         "province": "OFFOUE AVAL"
//     },
//     {
//         "id": 3443,
//         "bureaux": "1",
//         "code": "06 05 00 01",
//         "inscrit": "157",
//         "province": "C.E.S"
//     },
//     {
//         "id": 3444,
//         "bureaux": "1",
//         "code": "06 05 00 02",
//         "inscrit": "203",
//         "province": "ECOLE  PUBLIQUE"
//     },
//     {
//         "id": 3445,
//         "bureaux": "1",
//         "code": "06 05 00 03",
//         "inscrit": "338",
//         "province": "MBELAKEMBE"
//     },
//     {
//         "id": 3446,
//         "bureaux": "1",
//         "code": "06 05 00 04",
//         "inscrit": "418",
//         "province": "BATOUALA"
//     },
//     {
//         "id": 3447,
//         "bureaux": "1",
//         "code": "06 05 00 05",
//         "inscrit": "305",
//         "province": "PARIS BOUYON"
//     },
//     {
//         "id": 3448,
//         "bureaux": "2",
//         "code": "06 05 00 06",
//         "inscrit": "529",
//         "province": "VIE-CHERE (NGOLAMAYONG)"
//     },
//     {
//         "id": 3449,
//         "bureaux": "1",
//         "code": "06 05 00 07",
//         "inscrit": "103",
//         "province": "DJIBO-MAYEKA"
//     },
//     {
//         "id": 3450,
//         "bureaux": "1",
//         "code": "06 05 00 08",
//         "inscrit": "203",
//         "province": "MBEMBEZALE"
//     },
//     {
//         "id": 3451,
//         "bureaux": "1",
//         "code": "06 05 00 09",
//         "inscrit": "217",
//         "province": "VIE-DURE"
//     },
//     {
//         "id": 3452,
//         "bureaux": "10",
//         "code": "06 05 00",
//         "inscrit": "2,473",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 3453,
//         "bureaux": "1",
//         "code": "06 06 01 01",
//         "inscrit": "164",
//         "province": "ETAKANGAYE"
//     },
//     {
//         "id": 3454,
//         "bureaux": "1",
//         "code": "06 06 01 02",
//         "inscrit": "230",
//         "province": "IMBONG"
//     },
//     {
//         "id": 3455,
//         "bureaux": "1",
//         "code": "06 06 01 03",
//         "inscrit": "240",
//         "province": "IBEA"
//     },
//     {
//         "id": 3456,
//         "bureaux": "1",
//         "code": "06 06 01 04",
//         "inscrit": "226",
//         "province": "ZOULA"
//     },
//     {
//         "id": 3457,
//         "bureaux": "1",
//         "code": "06 06 01 05",
//         "inscrit": "62",
//         "province": "TOUMBI II"
//     },
//     {
//         "id": 3458,
//         "bureaux": "1",
//         "code": "06 06 01 06",
//         "inscrit": "71",
//         "province": "EGO-POMA"
//     },
//     {
//         "id": 3459,
//         "bureaux": "1",
//         "code": "06 06 01 07",
//         "inscrit": "95",
//         "province": "MASSOMBO"
//     },
//     {
//         "id": 3460,
//         "bureaux": "1",
//         "code": "06 06 01 08",
//         "inscrit": "79",
//         "province": "MAZINGO"
//     },
//     {
//         "id": 3461,
//         "bureaux": "1",
//         "code": "06 06 02 01",
//         "inscrit": "135",
//         "province": "MBENZA"
//     },
//     {
//         "id": 3462,
//         "bureaux": "1",
//         "code": "06 06 02 02",
//         "inscrit": "101",
//         "province": "MALASSA"
//     },
//     {
//         "id": 3463,
//         "bureaux": "1",
//         "code": "06 06 02 03",
//         "inscrit": "130",
//         "province": "KOMAMBELA"
//     },
//     {
//         "id": 3464,
//         "bureaux": "1",
//         "code": "06 06 02 04",
//         "inscrit": "139",
//         "province": "ETSELA-ENDOUNGA"
//     },
//     {
//         "id": 3465,
//         "bureaux": "1",
//         "code": "06 06 02 05",
//         "inscrit": "68",
//         "province": "MALOUMA"
//     },
//     {
//         "id": 3466,
//         "bureaux": "1",
//         "code": "06 06 02 06",
//         "inscrit": "136",
//         "province": "MEKOUMA"
//     },
//     {
//         "id": 3467,
//         "bureaux": "1",
//         "code": "06 06 02 07",
//         "inscrit": "66",
//         "province": "MENDEMBA"
//     },
//     {
//         "id": 3468,
//         "bureaux": "1",
//         "code": "06 06 02 08",
//         "inscrit": "187",
//         "province": "ILAHOUNENE"
//     },
//     {
//         "id": 3469,
//         "bureaux": "1",
//         "code": "06 06 02 09",
//         "inscrit": "154",
//         "province": "EKATA"
//     },
//     {
//         "id": 3470,
//         "bureaux": "1",
//         "code": "06 06 02 10",
//         "inscrit": "138",
//         "province": "NTOLO"
//     },
//     {
//         "id": 3471,
//         "bureaux": "1",
//         "code": "06 06 03 01",
//         "inscrit": "126",
//         "province": "ZAMBAKANGAKA"
//     },
//     {
//         "id": 3472,
//         "bureaux": "1",
//         "code": "06 06 03 02",
//         "inscrit": "100",
//         "province": "IKEIBOCA-BOCA"
//     },
//     {
//         "id": 3473,
//         "bureaux": "1",
//         "code": "06 06 03 03",
//         "inscrit": "117",
//         "province": "HEANZO"
//     },
//     {
//         "id": 3474,
//         "bureaux": "1",
//         "code": "06 06 03 04",
//         "inscrit": "128",
//         "province": "INGOLANDJODJO"
//     },
//     {
//         "id": 3475,
//         "bureaux": "1",
//         "code": "06 06 03 05",
//         "inscrit": "85",
//         "province": "MBELA-BAYA"
//     },
//     {
//         "id": 3476,
//         "bureaux": "1",
//         "code": "06 06 04 01",
//         "inscrit": "189",
//         "province": "BONAMAZA"
//     },
//     {
//         "id": 3477,
//         "bureaux": "1",
//         "code": "06 06 04 02",
//         "inscrit": "162",
//         "province": "MANDOMBO II"
//     },
//     {
//         "id": 3478,
//         "bureaux": "1",
//         "code": "06 06 04 03",
//         "inscrit": "124",
//         "province": "ZADINDOUE"
//     },
//     {
//         "id": 3479,
//         "bureaux": "1",
//         "code": "06 06 04 04",
//         "inscrit": "107",
//         "province": "MATOTE"
//     },
//     {
//         "id": 3480,
//         "bureaux": "1",
//         "code": "06 06 04 05",
//         "inscrit": "64",
//         "province": "BANGADI"
//     },
//     {
//         "id": 3481,
//         "bureaux": "8",
//         "code": "06 06 01",
//         "inscrit": "1,167",
//         "province": "DJOUAH"
//     },
//     {
//         "id": 3482,
//         "bureaux": "10",
//         "code": "06 06 02",
//         "inscrit": "1,254",
//         "province": "LOUE"
//     },
//     {
//         "id": 3483,
//         "bureaux": "5",
//         "code": "06 06 03",
//         "inscrit": "556",
//         "province": "MBENGOUE"
//     },
//     {
//         "id": 3484,
//         "bureaux": "5",
//         "code": "06 06 04",
//         "inscrit": "646",
//         "province": "SASSAMONGO"
//     },
//     {
//         "id": 3485,
//         "bureaux": "1",
//         "code": "06 07 00 01",
//         "inscrit": "494",
//         "province": "ECOLE PUBLIQUE"
//     },
//     {
//         "id": 3486,
//         "bureaux": "1",
//         "code": "06 07 00 02",
//         "inscrit": "36",
//         "province": "BINGOMA"
//     },
//     {
//         "id": 3487,
//         "bureaux": "1",
//         "code": "06 07 00 03",
//         "inscrit": "70",
//         "province": "AYOL"
//     },
//     {
//         "id": 3488,
//         "bureaux": "1",
//         "code": "06 07 00 04",
//         "inscrit": "199",
//         "province": "ECOLE PROTESTANTE KOMBANI"
//     },
//     {
//         "id": 3489,
//         "bureaux": "1",
//         "code": "06 07 00 05",
//         "inscrit": "81",
//         "province": "ELATABAKOTA"
//     },
//     {
//         "id": 3490,
//         "bureaux": "1",
//         "code": "06 07 00 06",
//         "inscrit": "71",
//         "province": "EC. PROT. ALLAR"
//     },
//     {
//         "id": 3491,
//         "bureaux": "1",
//         "code": "06 07 00 07",
//         "inscrit": "283",
//         "province": "NKARITOM-NGOREKI CES"
//     },
//     {
//         "id": 3492,
//         "bureaux": "7",
//         "code": "06 07 00",
//         "inscrit": "1,234",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 3493,
//         "bureaux": "1",
//         "code": "06 08 01 01",
//         "inscrit": "78",
//         "province": "EBE-MESSE"
//     },
//     {
//         "id": 3494,
//         "bureaux": "1",
//         "code": "06 08 01 02",
//         "inscrit": "15",
//         "province": "MELANE"
//     },
//     {
//         "id": 3495,
//         "bureaux": "1",
//         "code": "06 08 01 03",
//         "inscrit": "132",
//         "province": "SOUGALAM-MFOUBENZOCK"
//     },
//     {
//         "id": 3496,
//         "bureaux": "1",
//         "code": "06 08 01 04",
//         "inscrit": "168",
//         "province": "EKARLONG"
//     },
//     {
//         "id": 3497,
//         "bureaux": "1",
//         "code": "06 08 01 05",
//         "inscrit": "191",
//         "province": "KOUMAMEYONG"
//     },
//     {
//         "id": 3498,
//         "bureaux": "1",
//         "code": "06 08 01 06",
//         "inscrit": "125",
//         "province": "CHANTIER S.H.M"
//     },
//     {
//         "id": 3499,
//         "bureaux": "1",
//         "code": "06 08 02 01",
//         "inscrit": "165",
//         "province": "MINTOUM"
//     },
//     {
//         "id": 3500,
//         "bureaux": "1",
//         "code": "06 08 02 02",
//         "inscrit": "190",
//         "province": "AGNANG"
//     },
//     {
//         "id": 3501,
//         "bureaux": "1",
//         "code": "06 08 02 03",
//         "inscrit": "140",
//         "province": "AKANA"
//     },
//     {
//         "id": 3502,
//         "bureaux": "1",
//         "code": "06 08 02 04",
//         "inscrit": "72",
//         "province": "AFOUMADZO"
//     },
//     {
//         "id": 3503,
//         "bureaux": "1",
//         "code": "06 08 02 05",
//         "inscrit": "32",
//         "province": "BISSOBILAM"
//     },
//     {
//         "id": 3504,
//         "bureaux": "6",
//         "code": "06 08 01",
//         "inscrit": "709",
//         "province": "BELEME"
//     },
//     {
//         "id": 3505,
//         "bureaux": "5",
//         "code": "06 08 02",
//         "inscrit": "599",
//         "province": "DZOUE"
//     },
//     {
//         "id": 3506,
//         "bureaux": "32",
//         "code": "601",
//         "inscrit": "9,576",
//         "province": "MAKOKOU"
//     },
//     {
//         "id": 3507,
//         "bureaux": "43",
//         "code": "602",
//         "inscrit": "6,050",
//         "province": "IVINDO (MAKOKOU)"
//     },
//     {
//         "id": 3508,
//         "bureaux": "7",
//         "code": "603",
//         "inscrit": "2,295",
//         "province": "BOOUE"
//     },
//     {
//         "id": 3509,
//         "bureaux": "25",
//         "code": "604",
//         "inscrit": "3,386",
//         "province": "LOPE (BOOUE)"
//     },
//     {
//         "id": 3510,
//         "bureaux": "10",
//         "code": "605",
//         "inscrit": "2,473",
//         "province": "MEKAMBO"
//     },
//     {
//         "id": 3511,
//         "bureaux": "28",
//         "code": "606",
//         "inscrit": "3,623",
//         "province": "ZADIE (MEKAMBO)"
//     },
//     {
//         "id": 3512,
//         "bureaux": "7",
//         "code": "607",
//         "inscrit": "1,234",
//         "province": "OVAN"
//     },
//     {
//         "id": 3513,
//         "bureaux": "11",
//         "code": "608",
//         "inscrit": "1,308",
//         "province": "MVOUNG (OVAN)"
//     },
//     {
//         "id": 3514,
//         "bureaux": "1",
//         "code": "07 01 01 01",
//         "inscrit": "444",
//         "province": "ECOLE PUBLIQUE DE BAKELE"
//     },
//     {
//         "id": 3515,
//         "bureaux": "2",
//         "code": "07 01 01 02",
//         "inscrit": "502",
//         "province": "MAYANG"
//     },
//     {
//         "id": 3516,
//         "bureaux": "2",
//         "code": "07 01 01 03",
//         "inscrit": "792",
//         "province": "KOUNGOU"
//     },
//     {
//         "id": 3517,
//         "bureaux": "1",
//         "code": "07 01 01 04",
//         "inscrit": "84",
//         "province": "LIBONGUI"
//     },
//     {
//         "id": 3518,
//         "bureaux": "1",
//         "code": "07 01 01 05",
//         "inscrit": "289",
//         "province": "MIKOUMOU"
//     },
//     {
//         "id": 3519,
//         "bureaux": "1",
//         "code": "07 01 01 06",
//         "inscrit": "56",
//         "province": "LYCEE J.S. MIGOLET"
//     },
//     {
//         "id": 3520,
//         "bureaux": "2",
//         "code": "07 01 02 01",
//         "inscrit": "846",
//         "province": "JARDIN-FOUR (EP SALLETTE F)"
//     },
//     {
//         "id": 3521,
//         "bureaux": "2",
//         "code": "07 01 02 02",
//         "inscrit": "792",
//         "province": "JARDIN-FOUR (EP SALLETTE G)"
//     },
//     {
//         "id": 3522,
//         "bureaux": "4",
//         "code": "07 01 02 03",
//         "inscrit": "1,568",
//         "province": "EC DU CHATEAU (MANDJI)"
//     },
//     {
//         "id": 3523,
//         "bureaux": "1",
//         "code": "07 01 02 04",
//         "inscrit": "122",
//         "province": "MABIMBI"
//     },
//     {
//         "id": 3524,
//         "bureaux": "1",
//         "code": "07 01 02 05",
//         "inscrit": "482",
//         "province": "MAKADIUM"
//     },
//     {
//         "id": 3525,
//         "bureaux": "8",
//         "code": "07 01 01",
//         "inscrit": "2,167",
//         "province": "1ER  ARRONDISSEMENT"
//     },
//     {
//         "id": 3526,
//         "bureaux": "10",
//         "code": "07 01 02",
//         "inscrit": "3,810",
//         "province": "2EME ARRONDISSEMENT"
//     },
//     {
//         "id": 3527,
//         "bureaux": "1",
//         "code": "07 02 01 01",
//         "inscrit": "270",
//         "province": "LEBAGNY"
//     },
//     {
//         "id": 3528,
//         "bureaux": "1",
//         "code": "07 02 01 02",
//         "inscrit": "149",
//         "province": "ROUNGASSA"
//     },
//     {
//         "id": 3529,
//         "bureaux": "1",
//         "code": "07 02 01 03",
//         "inscrit": "128",
//         "province": "LEYASSA"
//     },
//     {
//         "id": 3530,
//         "bureaux": "1",
//         "code": "07 02 01 04",
//         "inscrit": "124",
//         "province": "YOULOU"
//     },
//     {
//         "id": 3531,
//         "bureaux": "1",
//         "code": "07 02 01 05",
//         "inscrit": "90",
//         "province": "NDJOKONAMOYE"
//     },
//     {
//         "id": 3532,
//         "bureaux": "1",
//         "code": "07 02 01 06",
//         "inscrit": "105",
//         "province": "NDJOKALE"
//     },
//     {
//         "id": 3533,
//         "bureaux": "1",
//         "code": "07 02 02 01",
//         "inscrit": "137",
//         "province": "NZENDZELE"
//     },
//     {
//         "id": 3534,
//         "bureaux": "1",
//         "code": "07 02 02 02",
//         "inscrit": "221",
//         "province": "MBIGOU-MOUGHENE"
//     },
//     {
//         "id": 3535,
//         "bureaux": "1",
//         "code": "07 02 02 03",
//         "inscrit": "20",
//         "province": "MOUKOGHA"
//     },
//     {
//         "id": 3536,
//         "bureaux": "1",
//         "code": "07 02 02 04",
//         "inscrit": "49",
//         "province": "MAMBOUETE"
//     },
//     {
//         "id": 3537,
//         "bureaux": "1",
//         "code": "07 02 02 05",
//         "inscrit": "145",
//         "province": "LITAMBA"
//     },
//     {
//         "id": 3538,
//         "bureaux": "1",
//         "code": "07 02 02 06",
//         "inscrit": "83",
//         "province": "MIKOUAGNA"
//     },
//     {
//         "id": 3539,
//         "bureaux": "1",
//         "code": "07 02 02 07",
//         "inscrit": "180",
//         "province": "MAKOULA"
//     },
//     {
//         "id": 3540,
//         "bureaux": "1",
//         "code": "07 02 02 08",
//         "inscrit": "179",
//         "province": "BANGA"
//     },
//     {
//         "id": 3541,
//         "bureaux": "1",
//         "code": "07 02 02 09",
//         "inscrit": "140",
//         "province": "MIYANGA"
//     },
//     {
//         "id": 3542,
//         "bureaux": "1",
//         "code": "07 02 02 10",
//         "inscrit": "126",
//         "province": "PANGANI"
//     },
//     {
//         "id": 3543,
//         "bureaux": "1",
//         "code": "07 02 03 01",
//         "inscrit": "106",
//         "province": "BOUDIANGUILA"
//     },
//     {
//         "id": 3544,
//         "bureaux": "1",
//         "code": "07 02 03 02",
//         "inscrit": "29",
//         "province": "KONA"
//     },
//     {
//         "id": 3545,
//         "bureaux": "1",
//         "code": "07 02 03 03",
//         "inscrit": "73",
//         "province": "NDANDA"
//     },
//     {
//         "id": 3546,
//         "bureaux": "1",
//         "code": "07 02 03 04",
//         "inscrit": "124",
//         "province": "MOUKOUAGNO"
//     },
//     {
//         "id": 3547,
//         "bureaux": "1",
//         "code": "07 02 03 05",
//         "inscrit": "55",
//         "province": "DIVINDE"
//     },
//     {
//         "id": 3548,
//         "bureaux": "1",
//         "code": "07 02 03 06",
//         "inscrit": "172",
//         "province": "MOUILA-POUVI"
//     },
//     {
//         "id": 3549,
//         "bureaux": "1",
//         "code": "07 02 03 07",
//         "inscrit": "176",
//         "province": "DIBOUKA"
//     },
//     {
//         "id": 3550,
//         "bureaux": "1",
//         "code": "07 02 03 08",
//         "inscrit": "79",
//         "province": "KOUAGNA"
//     },
//     {
//         "id": 3551,
//         "bureaux": "1",
//         "code": "07 02 03 09",
//         "inscrit": "252",
//         "province": "NDJOLE"
//     },
//     {
//         "id": 3552,
//         "bureaux": "1",
//         "code": "07 02 03 11",
//         "inscrit": "108",
//         "province": "MOULOBI"
//     },
//     {
//         "id": 3553,
//         "bureaux": "1",
//         "code": "07 02 03 12",
//         "inscrit": "54",
//         "province": "NDOUMBA-KOUMBI"
//     },
//     {
//         "id": 3554,
//         "bureaux": "1",
//         "code": "07 02 03 13",
//         "inscrit": "116",
//         "province": "MANDJI-POUVI"
//     },
//     {
//         "id": 3555,
//         "bureaux": "1",
//         "code": "07 02 03 14",
//         "inscrit": "252",
//         "province": "BANIATI"
//     },
//     {
//         "id": 3556,
//         "bureaux": "1",
//         "code": "07 02 03 15",
//         "inscrit": "124",
//         "province": "MOUKOUMOU"
//     },
//     {
//         "id": 3557,
//         "bureaux": "1",
//         "code": "07 02 03 16",
//         "inscrit": "230",
//         "province": "PANGOLONGO"
//     },
//     {
//         "id": 3558,
//         "bureaux": "1",
//         "code": "07 02 03 17",
//         "inscrit": "127",
//         "province": "NGOUNGUI"
//     },
//     {
//         "id": 3559,
//         "bureaux": "1",
//         "code": "07 02 03 18",
//         "inscrit": "32",
//         "province": "WOUBOUE"
//     },
//     {
//         "id": 3560,
//         "bureaux": "1",
//         "code": "07 02 03 19",
//         "inscrit": "45",
//         "province": "MOUKOUAGNO II (RTE ECO)"
//     },
//     {
//         "id": 3561,
//         "bureaux": "1",
//         "code": "07 02 03 20",
//         "inscrit": "12",
//         "province": "WAGNA"
//     },
//     {
//         "id": 3562,
//         "bureaux": "1",
//         "code": "07 02 03 21",
//         "inscrit": "125",
//         "province": "MANDJI KIDA"
//     },
//     {
//         "id": 3563,
//         "bureaux": "1",
//         "code": "07 02 04 01",
//         "inscrit": "213",
//         "province": "MIDOUMA"
//     },
//     {
//         "id": 3564,
//         "bureaux": "1",
//         "code": "07 02 04 02",
//         "inscrit": "72",
//         "province": "NGOUNGOU II - NZAMBI II"
//     },
//     {
//         "id": 3565,
//         "bureaux": "1",
//         "code": "07 02 04 03",
//         "inscrit": "384",
//         "province": "POPA-LEBELLA"
//     },
//     {
//         "id": 3566,
//         "bureaux": "1",
//         "code": "07 02 04 04",
//         "inscrit": "49",
//         "province": "MISSIMBA"
//     },
//     {
//         "id": 3567,
//         "bureaux": "1",
//         "code": "07 02 04 05",
//         "inscrit": "42",
//         "province": "NZAMBI I"
//     },
//     {
//         "id": 3568,
//         "bureaux": "1",
//         "code": "07 02 04 06",
//         "inscrit": "27",
//         "province": "NGOUNGOU I"
//     },
//     {
//         "id": 3569,
//         "bureaux": "1",
//         "code": "07 02 04 07",
//         "inscrit": "95",
//         "province": "MOUPATA"
//     },
//     {
//         "id": 3570,
//         "bureaux": "1",
//         "code": "07 02 04 08",
//         "inscrit": "67",
//         "province": "LENDEME"
//     },
//     {
//         "id": 3571,
//         "bureaux": "1",
//         "code": "07 02 04 09",
//         "inscrit": "65",
//         "province": "MOUGHOKO"
//     },
//     {
//         "id": 3572,
//         "bureaux": "1",
//         "code": "07 02 04 10",
//         "inscrit": "39",
//         "province": "DIBA-DIBA"
//     },
//     {
//         "id": 3573,
//         "bureaux": "1",
//         "code": "07 02 04 11",
//         "inscrit": "42",
//         "province": "MOUKABA"
//     },
//     {
//         "id": 3574,
//         "bureaux": "6",
//         "code": "07 02 01",
//         "inscrit": "866",
//         "province": "BASSE LOMBO"
//     },
//     {
//         "id": 3575,
//         "bureaux": "10",
//         "code": "07 02 02",
//         "inscrit": "1,280",
//         "province": "BOUENGUIDI-MOUALO"
//     },
//     {
//         "id": 3576,
//         "bureaux": "20",
//         "code": "07 02 03",
//         "inscrit": "2,291",
//         "province": "LOLO-WAGNA"
//     },
//     {
//         "id": 3577,
//         "bureaux": "11",
//         "code": "07 02 04",
//         "inscrit": "1,095",
//         "province": "CANTON MOUALO-ONOYE"
//     },
//     {
//         "id": 3578,
//         "bureaux": "1",
//         "code": "07 03 00 01",
//         "inscrit": "319",
//         "province": "LINGOMA"
//     },
//     {
//         "id": 3579,
//         "bureaux": "2",
//         "code": "07 03 00 02",
//         "inscrit": "625",
//         "province": "CENTRE VILLE"
//     },
//     {
//         "id": 3580,
//         "bureaux": "1",
//         "code": "07 03 00 03",
//         "inscrit": "415",
//         "province": "EC PUBL CENTRE (MIKATSIA)"
//     },
//     {
//         "id": 3581,
//         "bureaux": "3",
//         "code": "07 03 00 04",
//         "inscrit": "1,028",
//         "province": "MOUANA-NDZOKOU"
//     },
//     {
//         "id": 3582,
//         "bureaux": "1",
//         "code": "07 03 00 05",
//         "inscrit": "242",
//         "province": "PAHON-PIRA"
//     },
//     {
//         "id": 3583,
//         "bureaux": "2",
//         "code": "07 03 00 06",
//         "inscrit": "548",
//         "province": "PAHON-YOUNGOU"
//     },
//     {
//         "id": 3584,
//         "bureaux": "1",
//         "code": "07 03 00 07",
//         "inscrit": "173",
//         "province": "LIMBENGA"
//     },
//     {
//         "id": 3585,
//         "bureaux": "1",
//         "code": "07 03 00 08",
//         "inscrit": "307",
//         "province": "NGOUAMBA"
//     },
//     {
//         "id": 3586,
//         "bureaux": "1",
//         "code": "07 03 00 09",
//         "inscrit": "271",
//         "province": "MISSION CATHOLIQUE"
//     },
//     {
//         "id": 3587,
//         "bureaux": "13",
//         "code": "07 03 00",
//         "inscrit": "3,928",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 3588,
//         "bureaux": "1",
//         "code": "07 04 01 01",
//         "inscrit": "163",
//         "province": "MOUBIDOU-MOUYABI"
//     },
//     {
//         "id": 3589,
//         "bureaux": "1",
//         "code": "07 04 01 02",
//         "inscrit": "129",
//         "province": "NDEKABALANDJI"
//     },
//     {
//         "id": 3590,
//         "bureaux": "1",
//         "code": "07 04 01 03",
//         "inscrit": "33",
//         "province": "KOKOMOUNGUELE"
//     },
//     {
//         "id": 3591,
//         "bureaux": "1",
//         "code": "07 04 01 04",
//         "inscrit": "194",
//         "province": "AKIENI"
//     },
//     {
//         "id": 3592,
//         "bureaux": "1",
//         "code": "07 04 01 05",
//         "inscrit": "49",
//         "province": "MBELATA"
//     },
//     {
//         "id": 3593,
//         "bureaux": "1",
//         "code": "07 04 01 06",
//         "inscrit": "154",
//         "province": "NDANGUI (VENEZ-VOIR)"
//     },
//     {
//         "id": 3594,
//         "bureaux": "1",
//         "code": "07 04 01 07",
//         "inscrit": "10",
//         "province": "BOUNDZOUMBA"
//     },
//     {
//         "id": 3595,
//         "bureaux": "1",
//         "code": "07 04 01 08",
//         "inscrit": "79",
//         "province": "NZONDE"
//     },
//     {
//         "id": 3596,
//         "bureaux": "1",
//         "code": "07 04 01 09",
//         "inscrit": "63",
//         "province": "BAPOSSO"
//     },
//     {
//         "id": 3597,
//         "bureaux": "1",
//         "code": "07 04 01 10",
//         "inscrit": "100",
//         "province": "NDAMBI"
//     },
//     {
//         "id": 3598,
//         "bureaux": "1",
//         "code": "07 04 01 11",
//         "inscrit": "54",
//         "province": "MAMIDI"
//     },
//     {
//         "id": 3599,
//         "bureaux": "1",
//         "code": "07 04 01 12",
//         "inscrit": "374",
//         "province": "BAMBIDIE C E B"
//     },
//     {
//         "id": 3600,
//         "bureaux": "1",
//         "code": "07 04 01 13",
//         "inscrit": "337",
//         "province": "MAMBELO LIYODIA"
//     },
//     {
//         "id": 3601,
//         "bureaux": "1",
//         "code": "07 04 01 14",
//         "inscrit": "64",
//         "province": "MILOLE (VILLAGE)"
//     },
//     {
//         "id": 3602,
//         "bureaux": "1",
//         "code": "07 04 01 15",
//         "inscrit": "142",
//         "province": "NDANGUI (POPA)"
//     },
//     {
//         "id": 3603,
//         "bureaux": "1",
//         "code": "07 04 01 16",
//         "inscrit": "104",
//         "province": "SETRAG"
//     },
//     {
//         "id": 3604,
//         "bureaux": "1",
//         "code": "07 04 01 17",
//         "inscrit": "103",
//         "province": "BAKOUSSOU ET MEKOUKA"
//     },
//     {
//         "id": 3605,
//         "bureaux": "1",
//         "code": "07 04 01 19",
//         "inscrit": "38",
//         "province": "LIKOKODIBA (LIBALADOUBA)"
//     },
//     {
//         "id": 3606,
//         "bureaux": "1",
//         "code": "07 04 01 20",
//         "inscrit": "34",
//         "province": "MIHANDZA"
//     },
//     {
//         "id": 3607,
//         "bureaux": "1",
//         "code": "07 04 01 21",
//         "inscrit": "214",
//         "province": "NDANGUI CENTRE"
//     },
//     {
//         "id": 3608,
//         "bureaux": "1",
//         "code": "07 04 01 22",
//         "inscrit": "43",
//         "province": "S E E F MILOLE"
//     },
//     {
//         "id": 3609,
//         "bureaux": "1",
//         "code": "07 04 01 24",
//         "inscrit": "24",
//         "province": "SEB OKONDJA"
//     },
//     {
//         "id": 3610,
//         "bureaux": "1",
//         "code": "07 04 01 25",
//         "inscrit": "45",
//         "province": "MEKOUKA"
//     },
//     {
//         "id": 3611,
//         "bureaux": "1",
//         "code": "07 04 02 01",
//         "inscrit": "58",
//         "province": "MANA-MANA"
//     },
//     {
//         "id": 3612,
//         "bureaux": "1",
//         "code": "07 04 02 02",
//         "inscrit": "225",
//         "province": "MOUKOUMBI"
//     },
//     {
//         "id": 3613,
//         "bureaux": "1",
//         "code": "07 04 02 03",
//         "inscrit": "116",
//         "province": "LIBONGUI"
//     },
//     {
//         "id": 3614,
//         "bureaux": "1",
//         "code": "07 04 02 04",
//         "inscrit": "40",
//         "province": "BAMBERA-BIYOKO"
//     },
//     {
//         "id": 3615,
//         "bureaux": "1",
//         "code": "07 04 02 05",
//         "inscrit": "163",
//         "province": "MALANGA-LIFOUTA"
//     },
//     {
//         "id": 3616,
//         "bureaux": "1",
//         "code": "07 04 02 06",
//         "inscrit": "79",
//         "province": "VOUVOU"
//     },
//     {
//         "id": 3617,
//         "bureaux": "1",
//         "code": "07 04 02 07",
//         "inscrit": "79",
//         "province": "IDIBA-BAMBERA"
//     },
//     {
//         "id": 3618,
//         "bureaux": "1",
//         "code": "07 04 02 08",
//         "inscrit": "400",
//         "province": "MATSATSA"
//     },
//     {
//         "id": 3619,
//         "bureaux": "1",
//         "code": "07 04 02 09",
//         "inscrit": "72",
//         "province": "TSOTANDZALA"
//     },
//     {
//         "id": 3620,
//         "bureaux": "1",
//         "code": "07 04 02 10",
//         "inscrit": "152",
//         "province": "MAPFOUNGUI"
//     },
//     {
//         "id": 3621,
//         "bureaux": "1",
//         "code": "07 04 02 11",
//         "inscrit": "69",
//         "province": "BAMANGA"
//     },
//     {
//         "id": 3622,
//         "bureaux": "1",
//         "code": "07 04 02 12",
//         "inscrit": "125",
//         "province": "MANDJAYE 1"
//     },
//     {
//         "id": 3623,
//         "bureaux": "1",
//         "code": "07 04 02 13",
//         "inscrit": "80",
//         "province": "LIKEKA"
//     },
//     {
//         "id": 3624,
//         "bureaux": "1",
//         "code": "07 04 02 14",
//         "inscrit": "56",
//         "province": "MILOBA"
//     },
//     {
//         "id": 3625,
//         "bureaux": "1",
//         "code": "07 04 02 15",
//         "inscrit": "53",
//         "province": "LEKAGNA"
//     },
//     {
//         "id": 3626,
//         "bureaux": "1",
//         "code": "07 04 02 16",
//         "inscrit": "48",
//         "province": "ANGONDO-ABENA"
//     },
//     {
//         "id": 3627,
//         "bureaux": "1",
//         "code": "07 04 02 17",
//         "inscrit": "97",
//         "province": "MOUPEYOU"
//     },
//     {
//         "id": 3628,
//         "bureaux": "1",
//         "code": "07 04 02 18",
//         "inscrit": "24",
//         "province": "BOUNDJOUKOU"
//     },
//     {
//         "id": 3629,
//         "bureaux": "1",
//         "code": "07 04 02 19",
//         "inscrit": "38",
//         "province": "YOULOU"
//     },
//     {
//         "id": 3630,
//         "bureaux": "1",
//         "code": "07 04 02 20",
//         "inscrit": "62",
//         "province": "NDZOKALOUNDZA"
//     },
//     {
//         "id": 3631,
//         "bureaux": "1",
//         "code": "07 04 02 21",
//         "inscrit": "37",
//         "province": "BOUKAMA"
//     },
//     {
//         "id": 3632,
//         "bureaux": "1",
//         "code": "07 04 03 01",
//         "inscrit": "82",
//         "province": "BASSEGHA"
//     },
//     {
//         "id": 3633,
//         "bureaux": "1",
//         "code": "07 04 03 02",
//         "inscrit": "43",
//         "province": "MIVENGUE"
//     },
//     {
//         "id": 3634,
//         "bureaux": "1",
//         "code": "07 04 03 03",
//         "inscrit": "119",
//         "province": "DOUME"
//     },
//     {
//         "id": 3635,
//         "bureaux": "1",
//         "code": "07 04 03 04",
//         "inscrit": "167",
//         "province": "NDZONGOUANI-BOUKOUSSOU"
//     },
//     {
//         "id": 3636,
//         "bureaux": "1",
//         "code": "07 04 03 05",
//         "inscrit": "38",
//         "province": "MBOMO-MAGNIMA"
//     },
//     {
//         "id": 3637,
//         "bureaux": "1",
//         "code": "07 04 04 01",
//         "inscrit": "106",
//         "province": "MADOUKOU-MAHOUYA"
//     },
//     {
//         "id": 3638,
//         "bureaux": "1",
//         "code": "07 04 04 02",
//         "inscrit": "44",
//         "province": "NDAMBO-BOUNDJI"
//     },
//     {
//         "id": 3639,
//         "bureaux": "1",
//         "code": "07 04 04 03",
//         "inscrit": "93",
//         "province": "CHANTIER SBL BASE"
//     },
//     {
//         "id": 3640,
//         "bureaux": "1",
//         "code": "07 04 04 04",
//         "inscrit": "50",
//         "province": "LOLO VILLAGE"
//     },
//     {
//         "id": 3641,
//         "bureaux": "1",
//         "code": "07 04 04 05",
//         "inscrit": "407",
//         "province": "MALENDE"
//     },
//     {
//         "id": 3642,
//         "bureaux": "1",
//         "code": "07 04 04 06",
//         "inscrit": "100",
//         "province": "LITSEGHE"
//     },
//     {
//         "id": 3643,
//         "bureaux": "1",
//         "code": "07 04 04 07",
//         "inscrit": "321",
//         "province": "NZELA"
//     },
//     {
//         "id": 3644,
//         "bureaux": "1",
//         "code": "07 04 04 08",
//         "inscrit": "86",
//         "province": "MIBAMBOU"
//     },
//     {
//         "id": 3645,
//         "bureaux": "1",
//         "code": "07 04 04 09",
//         "inscrit": "139",
//         "province": "ROUNGASSA"
//     },
//     {
//         "id": 3646,
//         "bureaux": "1",
//         "code": "07 04 05 01",
//         "inscrit": "144",
//         "province": "TSENGUE MOUPINDA"
//     },
//     {
//         "id": 3647,
//         "bureaux": "1",
//         "code": "07 04 05 02",
//         "inscrit": "83",
//         "province": "KESSI POUGHOU"
//     },
//     {
//         "id": 3648,
//         "bureaux": "1",
//         "code": "07 04 05 03",
//         "inscrit": "275",
//         "province": "BEMBICANI"
//     },
//     {
//         "id": 3649,
//         "bureaux": "1",
//         "code": "07 04 05 04",
//         "inscrit": "241",
//         "province": "TSATY-LIPAKA"
//     },
//     {
//         "id": 3650,
//         "bureaux": "1",
//         "code": "07 04 05 05",
//         "inscrit": "101",
//         "province": "E.G.G. TSATSARA"
//     },
//     {
//         "id": 3651,
//         "bureaux": "23",
//         "code": "07 04 01",
//         "inscrit": "2,550",
//         "province": "LASSIO-SEBE (DIST. DE NDANGUI)"
//     },
//     {
//         "id": 3652,
//         "bureaux": "21",
//         "code": "07 04 02",
//         "inscrit": "2,073",
//         "province": "LEYOU"
//     },
//     {
//         "id": 3653,
//         "bureaux": "5",
//         "code": "07 04 03",
//         "inscrit": "449",
//         "province": "OGOOUE-AMONT"
//     },
//     {
//         "id": 3654,
//         "bureaux": "9",
//         "code": "07 04 04",
//         "inscrit": "1,346",
//         "province": "OGOOUE-AVAL"
//     },
//     {
//         "id": 3655,
//         "bureaux": "5",
//         "code": "07 04 05",
//         "inscrit": "844",
//         "province": "POUNGUI"
//     },
//     {
//         "id": 3656,
//         "bureaux": "1",
//         "code": "07 05 00 01",
//         "inscrit": "260",
//         "province": "C.E.S PANA"
//     },
//     {
//         "id": 3657,
//         "bureaux": "1",
//         "code": "07 05 00 02",
//         "inscrit": "230",
//         "province": "ECOLE PRIV. CATH. NDJONGO"
//     },
//     {
//         "id": 3658,
//         "bureaux": "1",
//         "code": "07 05 00 03",
//         "inscrit": "343",
//         "province": "ECOLE PUBLIQUE PANA"
//     },
//     {
//         "id": 3659,
//         "bureaux": "3",
//         "code": "07 05 00",
//         "inscrit": "833",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 3660,
//         "bureaux": "1",
//         "code": "07 06 01 01",
//         "inscrit": "161",
//         "province": "ISSEME"
//     },
//     {
//         "id": 3661,
//         "bureaux": "1",
//         "code": "07 06 01 02",
//         "inscrit": "193",
//         "province": "SIONO"
//     },
//     {
//         "id": 3662,
//         "bureaux": "1",
//         "code": "07 06 01 03",
//         "inscrit": "99",
//         "province": "MARANDA I"
//     },
//     {
//         "id": 3663,
//         "bureaux": "1",
//         "code": "07 06 01 04",
//         "inscrit": "65",
//         "province": "MARANDA II"
//     },
//     {
//         "id": 3664,
//         "bureaux": "1",
//         "code": "07 06 01 05",
//         "inscrit": "41",
//         "province": "MOUGHOMBOFOUALA"
//     },
//     {
//         "id": 3665,
//         "bureaux": "1",
//         "code": "07 06 01 06",
//         "inscrit": "168",
//         "province": "GRAND VILLAGE"
//     },
//     {
//         "id": 3666,
//         "bureaux": "1",
//         "code": "07 06 01 07",
//         "inscrit": "439",
//         "province": "DISTRICT DE DIENGA"
//     },
//     {
//         "id": 3667,
//         "bureaux": "1",
//         "code": "07 06 01 08",
//         "inscrit": "342",
//         "province": "TSENGUENABIELA"
//     },
//     {
//         "id": 3668,
//         "bureaux": "1",
//         "code": "07 06 02 01",
//         "inscrit": "119",
//         "province": "MOUVENGUE"
//     },
//     {
//         "id": 3669,
//         "bureaux": "1",
//         "code": "07 06 02 02",
//         "inscrit": "143",
//         "province": "KOUMBI"
//     },
//     {
//         "id": 3670,
//         "bureaux": "1",
//         "code": "07 06 02 03",
//         "inscrit": "143",
//         "province": "IVELE"
//     },
//     {
//         "id": 3671,
//         "bureaux": "1",
//         "code": "07 06 02 04",
//         "inscrit": "209",
//         "province": "MENGUI"
//     },
//     {
//         "id": 3672,
//         "bureaux": "1",
//         "code": "07 06 02 05",
//         "inscrit": "145",
//         "province": "BOUYEBA"
//     },
//     {
//         "id": 3673,
//         "bureaux": "1",
//         "code": "07 06 02 06",
//         "inscrit": "412",
//         "province": "LEMENGUE"
//     },
//     {
//         "id": 3674,
//         "bureaux": "8",
//         "code": "07 06 01",
//         "inscrit": "1,508",
//         "province": "HAUTE BOUENGUIDI-DIST. DIENGA"
//     },
//     {
//         "id": 3675,
//         "bureaux": "6",
//         "code": "07 06 02",
//         "inscrit": "1,171",
//         "province": "HAUTE LOMBO"
//     },
//     {
//         "id": 3676,
//         "bureaux": "2",
//         "code": "07 07 00",
//         "inscrit": "743",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 3677,
//         "bureaux": "1",
//         "code": "07 08 01 01",
//         "inscrit": "14",
//         "province": "POUNGOU"
//     },
//     {
//         "id": 3678,
//         "bureaux": "1",
//         "code": "07 08 01 02",
//         "inscrit": "75",
//         "province": "IWATSI"
//     },
//     {
//         "id": 3679,
//         "bureaux": "1",
//         "code": "07 08 01 03",
//         "inscrit": "32",
//         "province": "DIANGUI"
//     },
//     {
//         "id": 3680,
//         "bureaux": "1",
//         "code": "07 08 01 04",
//         "inscrit": "46",
//         "province": "INDZAMBO"
//     },
//     {
//         "id": 3681,
//         "bureaux": "1",
//         "code": "07 08 01 06",
//         "inscrit": "69",
//         "province": "SOGHA"
//     },
//     {
//         "id": 3682,
//         "bureaux": "1",
//         "code": "07 08 01 07",
//         "inscrit": "127",
//         "province": "MANDJI"
//     },
//     {
//         "id": 3683,
//         "bureaux": "1",
//         "code": "07 08 01 08",
//         "inscrit": "51",
//         "province": "NDOUGHOU"
//     },
//     {
//         "id": 3684,
//         "bureaux": "1",
//         "code": "07 08 01 12",
//         "inscrit": "38",
//         "province": "BOUPOUNDZA"
//     },
//     {
//         "id": 3685,
//         "bureaux": "1",
//         "code": "07 08 01 13",
//         "inscrit": "37",
//         "province": "BOUSSIMBI"
//     },
//     {
//         "id": 3686,
//         "bureaux": "1",
//         "code": "07 08 02 01",
//         "inscrit": "107",
//         "province": "MOUGHOUNDA"
//     },
//     {
//         "id": 3687,
//         "bureaux": "1",
//         "code": "07 08 02 02",
//         "inscrit": "181",
//         "province": "IMENO-PLATEAU"
//     },
//     {
//         "id": 3688,
//         "bureaux": "1",
//         "code": "07 08 02 03",
//         "inscrit": "47",
//         "province": "MAVANGA"
//     },
//     {
//         "id": 3689,
//         "bureaux": "1",
//         "code": "07 08 02 04",
//         "inscrit": "82",
//         "province": "MALONGO"
//     },
//     {
//         "id": 3690,
//         "bureaux": "1",
//         "code": "07 08 02 05",
//         "inscrit": "67",
//         "province": "NGOUASSA"
//     },
//     {
//         "id": 3691,
//         "bureaux": "1",
//         "code": "07 08 02 06",
//         "inscrit": "82",
//         "province": "MOUDOUMA"
//     },
//     {
//         "id": 3692,
//         "bureaux": "1",
//         "code": "07 08 02 07",
//         "inscrit": "54",
//         "province": "MOUNGONGO"
//     },
//     {
//         "id": 3693,
//         "bureaux": "9",
//         "code": "07 08 01",
//         "inscrit": "489",
//         "province": "OFFOUE"
//     },
//     {
//         "id": 3694,
//         "bureaux": "7",
//         "code": "07 08 02",
//         "inscrit": "620",
//         "province": "ONOYE"
//     },
//     {
//         "id": 3695,
//         "bureaux": "18",
//         "code": "701",
//         "inscrit": "5,977",
//         "province": "KOULA-MOUTOU"
//     },
//     {
//         "id": 3696,
//         "bureaux": "47",
//         "code": "702",
//         "inscrit": "5,532",
//         "province": "LOLO-BOUENGUIDI (KOULA-MOUTOU)"
//     },
//     {
//         "id": 3697,
//         "bureaux": "13",
//         "code": "703",
//         "inscrit": "3,928",
//         "province": "LASTOURVILLE"
//     },
//     {
//         "id": 3698,
//         "bureaux": "63",
//         "code": "704",
//         "inscrit": "7,262",
//         "province": "MULUNDU (LASTOURVILLE)"
//     },
//     {
//         "id": 3699,
//         "bureaux": "3",
//         "code": "705",
//         "inscrit": "833",
//         "province": "PANA"
//     },
//     {
//         "id": 3700,
//         "bureaux": "14",
//         "code": "706",
//         "inscrit": "2,679",
//         "province": "LOMBO-BOUENGUIDI (PANA)"
//     },
//     {
//         "id": 3701,
//         "bureaux": "2",
//         "code": "707",
//         "inscrit": "743",
//         "province": "IBOUNDJI"
//     },
//     {
//         "id": 3702,
//         "bureaux": "16",
//         "code": "708",
//         "inscrit": "1,109",
//         "province": "OFFOUE-ONOYE (IBOUNDJI)"
//     },
//     {
//         "id": 3703,
//         "bureaux": "4",
//         "code": "08 01 01 01",
//         "inscrit": "1,930",
//         "province": "LYCEE J. AMBOUROUET AVARO"
//     },
//     {
//         "id": 3704,
//         "bureaux": "1",
//         "code": "08 01 01 02",
//         "inscrit": "399",
//         "province": "ECOLE DE LA CITE"
//     },
//     {
//         "id": 3705,
//         "bureaux": "9",
//         "code": "08 01 01 03",
//         "inscrit": "4,223",
//         "province": "ECOLE PUBLIQUE BALISE 2 NGADI"
//     },
//     {
//         "id": 3706,
//         "bureaux": "8",
//         "code": "08 01 01 04",
//         "inscrit": "3,545",
//         "province": "CENTRE DE FORMATION PROF."
//     },
//     {
//         "id": 3707,
//         "bureaux": "2",
//         "code": "08 01 02 01",
//         "inscrit": "508",
//         "province": "ECOLE PROTESTANTE (EPP)"
//     },
//     {
//         "id": 3708,
//         "bureaux": "2",
//         "code": "08 01 02 02",
//         "inscrit": "525",
//         "province": "ECOLE SAINTE THERESE (EPC)"
//     },
//     {
//         "id": 3709,
//         "bureaux": "2",
//         "code": "08 01 02 03",
//         "inscrit": "633",
//         "province": "ECOLE DU STADE BLANC (EP)"
//     },
//     {
//         "id": 3710,
//         "bureaux": "1",
//         "code": "08 01 02 04",
//         "inscrit": "203",
//         "province": "ECOLE HENRI CLEMENT (EPC)"
//     },
//     {
//         "id": 3711,
//         "bureaux": "14",
//         "code": "08 01 02 05",
//         "inscrit": "6,897",
//         "province": "CENTRE SOCIAL"
//     },
//     {
//         "id": 3712,
//         "bureaux": "2",
//         "code": "08 01 02 06",
//         "inscrit": "608",
//         "province": "ECOLE ANCIENNE BALISE (EP)"
//     },
//     {
//         "id": 3713,
//         "bureaux": "5",
//         "code": "08 01 02 07",
//         "inscrit": "2,394",
//         "province": "ECOLE ABBEE YOYA (EPC)"
//     },
//     {
//         "id": 3714,
//         "bureaux": "3",
//         "code": "08 01 02 08",
//         "inscrit": "1,135",
//         "province": "ECOLE AMBOURET AVARO (EP)"
//     },
//     {
//         "id": 3715,
//         "bureaux": "4",
//         "code": "08 01 03 01",
//         "inscrit": "1,608",
//         "province": "CHAMBRE DE COMMERCE"
//     },
//     {
//         "id": 3716,
//         "bureaux": "3",
//         "code": "08 01 03 02",
//         "inscrit": "1,162",
//         "province": "ECOLE PARC DE FETE (EPC)"
//     },
//     {
//         "id": 3717,
//         "bureaux": "9",
//         "code": "08 01 03 03",
//         "inscrit": "4,413",
//         "province": "ECOLE SAINT ANDRE (EPC)"
//     },
//     {
//         "id": 3718,
//         "bureaux": "6",
//         "code": "08 01 03 04",
//         "inscrit": "2,916",
//         "province": "ECOLE SAINT PAUL DES BOIS (EPC)"
//     },
//     {
//         "id": 3719,
//         "bureaux": "3",
//         "code": "08 01 03 05",
//         "inscrit": "1,437",
//         "province": "OCEAN II"
//     },
//     {
//         "id": 3720,
//         "bureaux": "2",
//         "code": "08 01 03 06",
//         "inscrit": "802",
//         "province": "SINDARA"
//     },
//     {
//         "id": 3721,
//         "bureaux": "5",
//         "code": "08 01 03 07",
//         "inscrit": "2,307",
//         "province": "STE BARBE"
//     },
//     {
//         "id": 3722,
//         "bureaux": "8",
//         "code": "08 01 04 01",
//         "inscrit": "3,844",
//         "province": "ECOLE ROGER BUTTIN (EP)"
//     },
//     {
//         "id": 3723,
//         "bureaux": "5",
//         "code": "08 01 04 02",
//         "inscrit": "2,397",
//         "province": "ECOLE MATITI 1 (EP)"
//     },
//     {
//         "id": 3724,
//         "bureaux": "3",
//         "code": "08 01 04 03",
//         "inscrit": "1,378",
//         "province": "ECOLE MATITI 2 (EP)"
//     },
//     {
//         "id": 3725,
//         "bureaux": "2",
//         "code": "08 01 04 04",
//         "inscrit": "896",
//         "province": "ECOLE IGUIRI (ECOLE PRIVEE)"
//     },
//     {
//         "id": 3726,
//         "bureaux": "5",
//         "code": "08 01 04 05",
//         "inscrit": "2,302",
//         "province": "COLLEGE D ENSEIGNEMENT SEC."
//     },
//     {
//         "id": 3727,
//         "bureaux": "22",
//         "code": "08 01 01",
//         "inscrit": "1    097",
//         "province": "1ER  ARRONDISSEMENT"
//     },
//     {
//         "id": 3728,
//         "bureaux": "31",
//         "code": "08 01 02",
//         "inscrit": "12,903",
//         "province": "2EME ARRONDISSEMENT"
//     },
//     {
//         "id": 3729,
//         "bureaux": "32",
//         "code": "08 01 03",
//         "inscrit": "14,645",
//         "province": "3EME ARRONDISSEMENT"
//     },
//     {
//         "id": 3730,
//         "bureaux": "23",
//         "code": "08 01 04",
//         "inscrit": "1    817",
//         "province": "4EME ARRONDISSEMENT"
//     },
//     {
//         "id": 3731,
//         "bureaux": "1",
//         "code": "08 02 01 01",
//         "inscrit": "174",
//         "province": "NGOUEVIRI"
//     },
//     {
//         "id": 3732,
//         "bureaux": "1",
//         "code": "08 02 01 02",
//         "inscrit": "293",
//         "province": "ISSINGA"
//     },
//     {
//         "id": 3733,
//         "bureaux": "1",
//         "code": "08 02 01 03",
//         "inscrit": "364",
//         "province": "TCHENGUEFALA"
//     },
//     {
//         "id": 3734,
//         "bureaux": "1",
//         "code": "08 02 01 04",
//         "inscrit": "224",
//         "province": "PAGUIELOU"
//     },
//     {
//         "id": 3735,
//         "bureaux": "1",
//         "code": "08 02 01 05",
//         "inscrit": "161",
//         "province": "FOULAMAYONG"
//     },
//     {
//         "id": 3736,
//         "bureaux": "1",
//         "code": "08 02 01 06",
//         "inscrit": "152",
//         "province": "CARREF. CENTRE BISSOMA"
//     },
//     {
//         "id": 3737,
//         "bureaux": "1",
//         "code": "08 02 01 07",
//         "inscrit": "14",
//         "province": "SIMANI"
//     },
//     {
//         "id": 3738,
//         "bureaux": "1",
//         "code": "08 02 01 08",
//         "inscrit": "65",
//         "province": "MISSOUNGONGOU"
//     },
//     {
//         "id": 3739,
//         "bureaux": "1",
//         "code": "08 02 01 09",
//         "inscrit": "158",
//         "province": "MANEGA-BISSOMA"
//     },
//     {
//         "id": 3740,
//         "bureaux": "1",
//         "code": "08 02 01 10",
//         "inscrit": "59",
//         "province": "ODIMBA"
//     },
//     {
//         "id": 3741,
//         "bureaux": "1",
//         "code": "08 02 01 11",
//         "inscrit": "25",
//         "province": "KOUTOU"
//     },
//     {
//         "id": 3742,
//         "bureaux": "1",
//         "code": "08 02 02 01",
//         "inscrit": "246",
//         "province": "NENGA BEMBE"
//     },
//     {
//         "id": 3743,
//         "bureaux": "3",
//         "code": "08 02 02 02",
//         "inscrit": "1,491",
//         "province": "NTCHENGUE"
//     },
//     {
//         "id": 3744,
//         "bureaux": "1",
//         "code": "08 02 02 03",
//         "inscrit": "75",
//         "province": "YOMBE RADE"
//     },
//     {
//         "id": 3745,
//         "bureaux": "1",
//         "code": "08 02 02 04",
//         "inscrit": "42",
//         "province": "AZAGOUE"
//     },
//     {
//         "id": 3746,
//         "bureaux": "1",
//         "code": "08 02 02 05",
//         "inscrit": "23",
//         "province": "MPEMBE"
//     },
//     {
//         "id": 3747,
//         "bureaux": "1",
//         "code": "08 02 02 06",
//         "inscrit": "47",
//         "province": "EMANAGOUGA - IGUENDJA"
//     },
//     {
//         "id": 3748,
//         "bureaux": "1",
//         "code": "08 02 02 07",
//         "inscrit": "90",
//         "province": "ODIMBA NKENDJE"
//     },
//     {
//         "id": 3749,
//         "bureaux": "1",
//         "code": "08 02 02 08",
//         "inscrit": "46",
//         "province": "MBILAPE"
//     },
//     {
//         "id": 3750,
//         "bureaux": "1",
//         "code": "08 02 02 09",
//         "inscrit": "31",
//         "province": "NGANDA-OZOURI"
//     },
//     {
//         "id": 3751,
//         "bureaux": "1",
//         "code": "08 02 02 10",
//         "inscrit": "42",
//         "province": "GONGOUE"
//     },
//     {
//         "id": 3752,
//         "bureaux": "1",
//         "code": "08 02 02 11",
//         "inscrit": "87",
//         "province": "MBEGA"
//     },
//     {
//         "id": 3753,
//         "bureaux": "1",
//         "code": "08 02 03 01",
//         "inscrit": "24",
//         "province": "NGOLA"
//     },
//     {
//         "id": 3754,
//         "bureaux": "1",
//         "code": "08 02 03 02",
//         "inscrit": "52",
//         "province": "NGUIABETA"
//     },
//     {
//         "id": 3755,
//         "bureaux": "1",
//         "code": "08 02 03 03",
//         "inscrit": "75",
//         "province": "AKIRI-AKOUMOUNO"
//     },
//     {
//         "id": 3756,
//         "bureaux": "1",
//         "code": "08 02 03 04",
//         "inscrit": "53",
//         "province": "ENYONGA"
//     },
//     {
//         "id": 3757,
//         "bureaux": "1",
//         "code": "08 02 03 05",
//         "inscrit": "10",
//         "province": "YOMBE 1"
//     },
//     {
//         "id": 3758,
//         "bureaux": "1",
//         "code": "08 02 03 06",
//         "inscrit": "222",
//         "province": "YOMBE 2"
//     },
//     {
//         "id": 3759,
//         "bureaux": "1",
//         "code": "08 02 03 07",
//         "inscrit": "52",
//         "province": "ABELOGO I"
//     },
//     {
//         "id": 3760,
//         "bureaux": "1",
//         "code": "08 02 03 08",
//         "inscrit": "19",
//         "province": "ENAMINO"
//     },
//     {
//         "id": 3761,
//         "bureaux": "1",
//         "code": "08 02 03 09",
//         "inscrit": "88",
//         "province": "ESSENDE 1"
//     },
//     {
//         "id": 3762,
//         "bureaux": "1",
//         "code": "08 02 03 10",
//         "inscrit": "33",
//         "province": "ALEGO (LAC IWANDET)"
//     },
//     {
//         "id": 3763,
//         "bureaux": "1",
//         "code": "08 02 03 11",
//         "inscrit": "132",
//         "province": "OKOUMI-IKASSA"
//     },
//     {
//         "id": 3764,
//         "bureaux": "1",
//         "code": "08 02 03 12",
//         "inscrit": "17",
//         "province": "APARI"
//     },
//     {
//         "id": 3765,
//         "bureaux": "1",
//         "code": "08 02 03 13",
//         "inscrit": "18",
//         "province": "NENDJA"
//     },
//     {
//         "id": 3766,
//         "bureaux": "2",
//         "code": "08 02 03 14",
//         "inscrit": "564",
//         "province": "M PAGA"
//     },
//     {
//         "id": 3767,
//         "bureaux": "1",
//         "code": "08 02 03 15",
//         "inscrit": "12",
//         "province": "OLOUMI-MANDJE"
//     },
//     {
//         "id": 3768,
//         "bureaux": "1",
//         "code": "08 02 03 16",
//         "inscrit": "53",
//         "province": "OSSAMOUEDEMBO"
//     },
//     {
//         "id": 3769,
//         "bureaux": "11",
//         "code": "08 02 01",
//         "inscrit": "1,689",
//         "province": "LAC ANENGUE"
//     },
//     {
//         "id": 3770,
//         "bureaux": "13",
//         "code": "08 02 02",
//         "inscrit": "2,220",
//         "province": "OCEAN"
//     },
//     {
//         "id": 3771,
//         "bureaux": "17",
//         "code": "08 02 03",
//         "inscrit": "1,424",
//         "province": "OGOOUE"
//     },
//     {
//         "id": 3772,
//         "bureaux": "2",
//         "code": "08 03 00 01",
//         "inscrit": "642",
//         "province": "C E S"
//     },
//     {
//         "id": 3773,
//         "bureaux": "1",
//         "code": "08 03 00 02",
//         "inscrit": "280",
//         "province": "ECOLE MATERNELLE"
//     },
//     {
//         "id": 3774,
//         "bureaux": "1",
//         "code": "08 03 00 03",
//         "inscrit": "238",
//         "province": "ECOLE PUBLIQUE"
//     },
//     {
//         "id": 3775,
//         "bureaux": "1",
//         "code": "08 03 00 04",
//         "inscrit": "91",
//         "province": "FONTAINE PUBLIQUE"
//     },
//     {
//         "id": 3776,
//         "bureaux": "1",
//         "code": "08 03 00 05",
//         "inscrit": "149",
//         "province": "CASE DE PASSAGE"
//     },
//     {
//         "id": 3777,
//         "bureaux": "1",
//         "code": "08 03 00 06",
//         "inscrit": "187",
//         "province": "ASSEMBLEE DEPARTEMENTALE"
//     },
//     {
//         "id": 3778,
//         "bureaux": "2",
//         "code": "08 03 00 07",
//         "inscrit": "712",
//         "province": "PLAINE 4"
//     },
//     {
//         "id": 3779,
//         "bureaux": "1",
//         "code": "08 03 00 08",
//         "inscrit": "208",
//         "province": "PLAINE 2"
//     },
//     {
//         "id": 3780,
//         "bureaux": "1",
//         "code": "08 03 00 09",
//         "inscrit": "416",
//         "province": "PLAINE 5"
//     },
//     {
//         "id": 3781,
//         "bureaux": "11",
//         "code": "08 03 00",
//         "inscrit": "2,923",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 3782,
//         "bureaux": "1",
//         "code": "08 04 01 01",
//         "inscrit": "139",
//         "province": "MASSO-MALA"
//     },
//     {
//         "id": 3783,
//         "bureaux": "1",
//         "code": "08 04 01 02",
//         "inscrit": "156",
//         "province": "MAYONAMI"
//     },
//     {
//         "id": 3784,
//         "bureaux": "1",
//         "code": "08 04 01 03",
//         "inscrit": "140",
//         "province": "MBISSI"
//     },
//     {
//         "id": 3785,
//         "bureaux": "1",
//         "code": "08 04 01 04",
//         "inscrit": "223",
//         "province": "IGOTCHI"
//     },
//     {
//         "id": 3786,
//         "bureaux": "1",
//         "code": "08 04 01 05",
//         "inscrit": "52",
//         "province": "KATCHIMBA"
//     },
//     {
//         "id": 3787,
//         "bureaux": "1",
//         "code": "08 04 01 06",
//         "inscrit": "125",
//         "province": "MBOUDA"
//     },
//     {
//         "id": 3788,
//         "bureaux": "1",
//         "code": "08 04 02 01",
//         "inscrit": "289",
//         "province": "SETTE-CAMA"
//     },
//     {
//         "id": 3789,
//         "bureaux": "1",
//         "code": "08 04 02 02",
//         "inscrit": "88",
//         "province": "PITONGA"
//     },
//     {
//         "id": 3790,
//         "bureaux": "1",
//         "code": "08 04 02 03",
//         "inscrit": "190",
//         "province": "MOUNGAMBI"
//     },
//     {
//         "id": 3791,
//         "bureaux": "1",
//         "code": "08 04 02 04",
//         "inscrit": "69",
//         "province": "NGOMAGUENA"
//     },
//     {
//         "id": 3792,
//         "bureaux": "1",
//         "code": "08 04 02 05",
//         "inscrit": "102",
//         "province": "IBOUKA"
//     },
//     {
//         "id": 3793,
//         "bureaux": "1",
//         "code": "08 04 02 06",
//         "inscrit": "7",
//         "province": "SOUNGA"
//     },
//     {
//         "id": 3794,
//         "bureaux": "6",
//         "code": "08 04 01",
//         "inscrit": "835",
//         "province": "BASSE-NYANGA"
//     },
//     {
//         "id": 3795,
//         "bureaux": "6",
//         "code": "08 04 02",
//         "inscrit": "745",
//         "province": "LAGUNE NDOUGOU"
//     },
//     {
//         "id": 3796,
//         "bureaux": "2",
//         "code": "08 04 03",
//         "inscrit": "394",
//         "province": "REMBO-BONGOU"
//     },
//     {
//         "id": 3797,
//         "bureaux": "1",
//         "code": "08 05 00 01",
//         "inscrit": "300",
//         "province": "MAISON DE LA CULTURE"
//     },
//     {
//         "id": 3798,
//         "bureaux": "1",
//         "code": "08 05 00 02",
//         "inscrit": "346",
//         "province": "ECOLE PUBLIQUE"
//     },
//     {
//         "id": 3799,
//         "bureaux": "2",
//         "code": "08 05 00 03",
//         "inscrit": "544",
//         "province": "C.E.S DOMBOUE"
//     },
//     {
//         "id": 3800,
//         "bureaux": "4",
//         "code": "08 05 00",
//         "inscrit": "1,190",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 3801,
//         "bureaux": "1",
//         "code": "08 06 01 01",
//         "inscrit": "88",
//         "province": "BATANGA"
//     },
//     {
//         "id": 3802,
//         "bureaux": "1",
//         "code": "08 06 01 02",
//         "inscrit": "32",
//         "province": "ONGUENDJO"
//     },
//     {
//         "id": 3803,
//         "bureaux": "1",
//         "code": "08 06 01 04",
//         "inscrit": "56",
//         "province": "KONGO 1"
//     },
//     {
//         "id": 3804,
//         "bureaux": "1",
//         "code": "08 06 01 05",
//         "inscrit": "21",
//         "province": "VILLAGE INDJOLE"
//     },
//     {
//         "id": 3805,
//         "bureaux": "1",
//         "code": "08 06 01 06",
//         "inscrit": "108",
//         "province": "ASSEWE 1"
//     },
//     {
//         "id": 3806,
//         "bureaux": "1",
//         "code": "08 06 01 07",
//         "inscrit": "45",
//         "province": "AVEGOMBOUIRI"
//     },
//     {
//         "id": 3807,
//         "bureaux": "1",
//         "code": "08 06 01 09",
//         "inscrit": "40",
//         "province": "ATONGOWANGA"
//     },
//     {
//         "id": 3808,
//         "bureaux": "1",
//         "code": "08 06 01 10",
//         "inscrit": "20",
//         "province": "NENGUE-SIKA"
//     },
//     {
//         "id": 3809,
//         "bureaux": "1",
//         "code": "08 06 01 11",
//         "inscrit": "72",
//         "province": "STE ANNE ODIMBA"
//     },
//     {
//         "id": 3810,
//         "bureaux": "1",
//         "code": "08 06 01 12",
//         "inscrit": "1",
//         "province": "MANDAGANGA"
//     },
//     {
//         "id": 3811,
//         "bureaux": "1",
//         "code": "08 06 01 13",
//         "inscrit": "29",
//         "province": "LASSONIE"
//     },
//     {
//         "id": 3812,
//         "bureaux": "1",
//         "code": "08 06 01 14",
//         "inscrit": "60",
//         "province": "TCHONGA VILLE"
//     },
//     {
//         "id": 3813,
//         "bureaux": "1",
//         "code": "08 06 01 15",
//         "inscrit": "24",
//         "province": "ESSOGOUE-AYILE"
//     },
//     {
//         "id": 3814,
//         "bureaux": "1",
//         "code": "08 06 02 01",
//         "inscrit": "141",
//         "province": "MPIVIE"
//     },
//     {
//         "id": 3815,
//         "bureaux": "1",
//         "code": "08 06 02 02",
//         "inscrit": "50",
//         "province": "IDJEMBO"
//     },
//     {
//         "id": 3816,
//         "bureaux": "1",
//         "code": "08 06 02 03",
//         "inscrit": "121",
//         "province": "NTCHONGOROVE"
//     },
//     {
//         "id": 3817,
//         "bureaux": "1",
//         "code": "08 06 02 04",
//         "inscrit": "1",
//         "province": "TCHONIMBANI"
//     },
//     {
//         "id": 3818,
//         "bureaux": "1",
//         "code": "08 06 02 05",
//         "inscrit": "41",
//         "province": "YOMBE-OBIRO"
//     },
//     {
//         "id": 3819,
//         "bureaux": "1",
//         "code": "08 06 03 01",
//         "inscrit": "128",
//         "province": "NDOUGOU CENTRE (ECOLE PUBLIQUE"
//     },
//     {
//         "id": 3820,
//         "bureaux": "1",
//         "code": "08 06 03 02",
//         "inscrit": "84",
//         "province": "SADOUGOUNGOU"
//     },
//     {
//         "id": 3821,
//         "bureaux": "1",
//         "code": "08 06 03 03",
//         "inscrit": "140",
//         "province": "MIGAMBA"
//     },
//     {
//         "id": 3822,
//         "bureaux": "1",
//         "code": "08 06 03 04",
//         "inscrit": "67",
//         "province": "MOUSSAMUKUGU"
//     },
//     {
//         "id": 3823,
//         "bureaux": "1",
//         "code": "08 06 03 05",
//         "inscrit": "37",
//         "province": "MPERE"
//     },
//     {
//         "id": 3824,
//         "bureaux": "1",
//         "code": "08 06 03 06",
//         "inscrit": "10",
//         "province": "SIMANI"
//     },
//     {
//         "id": 3825,
//         "bureaux": "1",
//         "code": "08 06 03 07",
//         "inscrit": "41",
//         "province": "IKASSA-MABOUNA"
//     },
//     {
//         "id": 3826,
//         "bureaux": "1",
//         "code": "08 06 03 09",
//         "inscrit": "41",
//         "province": "AZENDJE"
//     },
//     {
//         "id": 3827,
//         "bureaux": "1",
//         "code": "08 06 03 10",
//         "inscrit": "59",
//         "province": "VENDARENE"
//     },
//     {
//         "id": 3828,
//         "bureaux": "1",
//         "code": "08 06 03 11",
//         "inscrit": "40",
//         "province": "MISSOULA NGOLA"
//     },
//     {
//         "id": 3829,
//         "bureaux": "1",
//         "code": "08 06 03 12",
//         "inscrit": "58",
//         "province": "PLAINE WORA-NA-YENO"
//     },
//     {
//         "id": 3830,
//         "bureaux": "1",
//         "code": "08 06 03 13",
//         "inscrit": "44",
//         "province": "DOUARTSANDA"
//     },
//     {
//         "id": 3831,
//         "bureaux": "1",
//         "code": "08 06 03 14",
//         "inscrit": "74",
//         "province": "DIAMBOU A-KOUMOU"
//     },
//     {
//         "id": 3832,
//         "bureaux": "1",
//         "code": "08 06 03 15",
//         "inscrit": "128",
//         "province": "MIFOUMA"
//     },
//     {
//         "id": 3833,
//         "bureaux": "1",
//         "code": "08 06 03 16",
//         "inscrit": "66",
//         "province": "RABI VILLAGE"
//     },
//     {
//         "id": 3834,
//         "bureaux": "1",
//         "code": "08 06 03 17",
//         "inscrit": "11",
//         "province": "BOUNDOU"
//     },
//     {
//         "id": 3835,
//         "bureaux": "1",
//         "code": "08 06 03 18",
//         "inscrit": "46",
//         "province": "MOUKENDOU"
//     },
//     {
//         "id": 3836,
//         "bureaux": "1",
//         "code": "08 06 03 19",
//         "inscrit": "61",
//         "province": "GOUELIGA"
//     },
//     {
//         "id": 3837,
//         "bureaux": "1",
//         "code": "08 06 03 20",
//         "inscrit": "136",
//         "province": "RABI CHANTIER C B G"
//     },
//     {
//         "id": 3838,
//         "bureaux": "1",
//         "code": "08 06 03 21",
//         "inscrit": "30",
//         "province": "DIANONGO"
//     },
//     {
//         "id": 3839,
//         "bureaux": "13",
//         "code": "08 06 01",
//         "inscrit": "596",
//         "province": "LAGUNE NKOMI"
//     },
//     {
//         "id": 3840,
//         "bureaux": "5",
//         "code": "08 06 02",
//         "inscrit": "354",
//         "province": "LAGUNE NGOWE (IGUELA)"
//     },
//     {
//         "id": 3841,
//         "bureaux": "20",
//         "code": "08 06 03",
//         "inscrit": "1,301",
//         "province": "OREMBO-NKOMI"
//     },
//     {
//         "id": 3842,
//         "bureaux": "108",
//         "code": "801",
//         "inscrit": "48,462",
//         "province": "PORT-GENTIL"
//     },
//     {
//         "id": 3843,
//         "bureaux": "41",
//         "code": "802",
//         "inscrit": "5,333",
//         "province": "BENDJE (PORT-GENTIL)"
//     },
//     {
//         "id": 3844,
//         "bureaux": "11",
//         "code": "803",
//         "inscrit": "2,923",
//         "province": "GAMBA"
//     },
//     {
//         "id": 3845,
//         "bureaux": "14",
//         "code": "804",
//         "inscrit": "1,974",
//         "province": "NDOUGOU (GAMBA)"
//     },
//     {
//         "id": 3846,
//         "bureaux": "4",
//         "code": "805",
//         "inscrit": "1,190",
//         "province": "OMBOUE"
//     },
//     {
//         "id": 3847,
//         "bureaux": "38",
//         "code": "806",
//         "inscrit": "2,251",
//         "province": "ETIMBOUE  (OMBOUE)"
//     },
//     {
//         "id": 3848,
//         "bureaux": "4",
//         "code": "09 01 01 01",
//         "inscrit": "1,869",
//         "province": "E.P.C. ST ELOI AKOAKAM"
//     },
//     {
//         "id": 3849,
//         "bureaux": "2",
//         "code": "09 01 01 02",
//         "inscrit": "831",
//         "province": "T.P MINKA-NFOUA"
//     },
//     {
//         "id": 3850,
//         "bureaux": "1",
//         "code": "09 01 01 03",
//         "inscrit": "40",
//         "province": "INSPECTION JEUNESSE ET SPORT"
//     },
//     {
//         "id": 3851,
//         "bureaux": "1",
//         "code": "09 01 01 04",
//         "inscrit": "421",
//         "province": "LYCEE RICHARD NGUEMA BEKALE (MONACO)"
//     },
//     {
//         "id": 3852,
//         "bureaux": "1",
//         "code": "09 01 01 05",
//         "inscrit": "95",
//         "province": "I.D.A."
//     },
//     {
//         "id": 3853,
//         "bureaux": "2",
//         "code": "09 01 01 06",
//         "inscrit": "917",
//         "province": "E.P. BERNARD OBIANG (METHUI)"
//     },
//     {
//         "id": 3854,
//         "bureaux": "1",
//         "code": "09 01 01 07",
//         "inscrit": "29",
//         "province": "IMMEUBLE HEVEGAB-SOCAGAB"
//     },
//     {
//         "id": 3855,
//         "bureaux": "1",
//         "code": "09 01 01 08",
//         "inscrit": "109",
//         "province": "ENDOMO"
//     },
//     {
//         "id": 3856,
//         "bureaux": "1",
//         "code": "09 01 01 09",
//         "inscrit": "240",
//         "province": "E.P.C. NDZOMOSSI (AKOK BARRAGE)"
//     },
//     {
//         "id": 3857,
//         "bureaux": "1",
//         "code": "09 01 01 10",
//         "inscrit": "216",
//         "province": "E.P.C. ANGONE"
//     },
//     {
//         "id": 3858,
//         "bureaux": "1",
//         "code": "09 01 01 11",
//         "inscrit": "217",
//         "province": "E.P.C. ANDOME ODZIP"
//     },
//     {
//         "id": 3859,
//         "bureaux": "1",
//         "code": "09 01 01 12",
//         "inscrit": "439",
//         "province": "EC. DES CADRES -ENDR-"
//     },
//     {
//         "id": 3860,
//         "bureaux": "1",
//         "code": "09 01 01 13",
//         "inscrit": "166",
//         "province": "ELONE"
//     },
//     {
//         "id": 3861,
//         "bureaux": "2",
//         "code": "09 01 01 14",
//         "inscrit": "507",
//         "province": "ECOLE PUBLIQUE MEKOM-NKODJE"
//     },
//     {
//         "id": 3862,
//         "bureaux": "1",
//         "code": "09 01 01 15",
//         "inscrit": "241",
//         "province": "CETO"
//     },
//     {
//         "id": 3863,
//         "bureaux": "1",
//         "code": "09 01 01 16",
//         "inscrit": "143",
//         "province": "CES ANGONE"
//     },
//     {
//         "id": 3864,
//         "bureaux": "1",
//         "code": "09 01 01 17",
//         "inscrit": "31",
//         "province": "ASSEMBLEE DEPARTEMENTALE"
//     },
//     {
//         "id": 3865,
//         "bureaux": "1",
//         "code": "09 01 02 01",
//         "inscrit": "386",
//         "province": "E.P.C. SAINT BASILE ROND POINT"
//     },
//     {
//         "id": 3866,
//         "bureaux": "2",
//         "code": "09 01 02 02",
//         "inscrit": "822",
//         "province": "E.P.P. ANDRE MINTSA NKOMAYAT"
//     },
//     {
//         "id": 3867,
//         "bureaux": "2",
//         "code": "09 01 02 03",
//         "inscrit": "652",
//         "province": "E.P. MEKAGA"
//     },
//     {
//         "id": 3868,
//         "bureaux": "1",
//         "code": "09 01 02 04",
//         "inscrit": "159",
//         "province": "CAMP MILITAIRE"
//     },
//     {
//         "id": 3869,
//         "bureaux": "2",
//         "code": "09 01 02 05",
//         "inscrit": "553",
//         "province": "EYENASSI (KENG AKOK)"
//     },
//     {
//         "id": 3870,
//         "bureaux": "1",
//         "code": "09 01 02 06",
//         "inscrit": "335",
//         "province": "VALLEE SUD (ST CHARLES)"
//     },
//     {
//         "id": 3871,
//         "bureaux": "2",
//         "code": "09 01 02 07",
//         "inscrit": "975",
//         "province": "E.P. NGOUEMA"
//     },
//     {
//         "id": 3872,
//         "bureaux": "1",
//         "code": "09 01 02 08",
//         "inscrit": "449",
//         "province": "E.P.C. ST FRANCOIS"
//     },
//     {
//         "id": 3873,
//         "bureaux": "3",
//         "code": "09 01 02 09",
//         "inscrit": "1,040",
//         "province": "EC PUBL APPLIC.(ADJOUGOU-EPO)"
//     },
//     {
//         "id": 3874,
//         "bureaux": "1",
//         "code": "09 01 02 10",
//         "inscrit": "216",
//         "province": "ATELIER VANNERIE (CES MFOUL)"
//     },
//     {
//         "id": 3875,
//         "bureaux": "1",
//         "code": "09 01 02 11",
//         "inscrit": "238",
//         "province": "EWORMEKOK (CHEF VILLAGE)"
//     },
//     {
//         "id": 3876,
//         "bureaux": "2",
//         "code": "09 01 02 12",
//         "inscrit": "514",
//         "province": "ADZABILONE"
//     },
//     {
//         "id": 3877,
//         "bureaux": "1",
//         "code": "09 01 02 13",
//         "inscrit": "350",
//         "province": "MONT-MIYELE"
//     },
//     {
//         "id": 3878,
//         "bureaux": "2",
//         "code": "09 01 02 14",
//         "inscrit": "734",
//         "province": "ONDO ET FILS"
//     },
//     {
//         "id": 3879,
//         "bureaux": "1",
//         "code": "09 01 02 15",
//         "inscrit": "186",
//         "province": "ROND POINT MIMBANG"
//     },
//     {
//         "id": 3880,
//         "bureaux": "23",
//         "code": "09 01 01",
//         "inscrit": "6,511",
//         "province": "1ER  ARRONDISSEMENT"
//     },
//     {
//         "id": 3881,
//         "bureaux": "23",
//         "code": "09 01 02",
//         "inscrit": "7,609",
//         "province": "2EME ARRONDISSEMENT"
//     },
//     {
//         "id": 3882,
//         "bureaux": "1",
//         "code": "09 02 01 01",
//         "inscrit": "211",
//         "province": "ZANANGOUE"
//     },
//     {
//         "id": 3883,
//         "bureaux": "1",
//         "code": "09 02 01 02",
//         "inscrit": "169",
//         "province": "ALLOUME"
//     },
//     {
//         "id": 3884,
//         "bureaux": "1",
//         "code": "09 02 01 03",
//         "inscrit": "105",
//         "province": "BISSOCK III"
//     },
//     {
//         "id": 3885,
//         "bureaux": "1",
//         "code": "09 02 01 04",
//         "inscrit": "194",
//         "province": "ELLELEM I"
//     },
//     {
//         "id": 3886,
//         "bureaux": "1",
//         "code": "09 02 01 05",
//         "inscrit": "68",
//         "province": "ESSONG-ABAM II"
//     },
//     {
//         "id": 3887,
//         "bureaux": "1",
//         "code": "09 02 01 06",
//         "inscrit": "37",
//         "province": "MFOUL-ESSABANG"
//     },
//     {
//         "id": 3888,
//         "bureaux": "1",
//         "code": "09 02 01 07",
//         "inscrit": "231",
//         "province": "AKAM I"
//     },
//     {
//         "id": 3889,
//         "bureaux": "1",
//         "code": "09 02 01 08",
//         "inscrit": "117",
//         "province": "AKOMASSI"
//     },
//     {
//         "id": 3890,
//         "bureaux": "1",
//         "code": "09 02 01 09",
//         "inscrit": "150",
//         "province": "ABANG-VILLE"
//     },
//     {
//         "id": 3891,
//         "bureaux": "1",
//         "code": "09 02 01 10",
//         "inscrit": "200",
//         "province": "NDONGOLO I"
//     },
//     {
//         "id": 3892,
//         "bureaux": "1",
//         "code": "09 02 01 11",
//         "inscrit": "89",
//         "province": "UNION VILLE"
//     },
//     {
//         "id": 3893,
//         "bureaux": "1",
//         "code": "09 02 01 12",
//         "inscrit": "122",
//         "province": "ABELASSI"
//     },
//     {
//         "id": 3894,
//         "bureaux": "1",
//         "code": "09 02 01 13",
//         "inscrit": "37",
//         "province": "ANIANE I"
//     },
//     {
//         "id": 3895,
//         "bureaux": "1",
//         "code": "09 02 01 14",
//         "inscrit": "114",
//         "province": "EKOUMOLONG"
//     },
//     {
//         "id": 3896,
//         "bureaux": "1",
//         "code": "09 02 01 15",
//         "inscrit": "167",
//         "province": "MVANE-YEBIMVE"
//     },
//     {
//         "id": 3897,
//         "bureaux": "1",
//         "code": "09 02 01 16",
//         "inscrit": "111",
//         "province": "ANGONEFITE"
//     },
//     {
//         "id": 3898,
//         "bureaux": "1",
//         "code": "09 02 01 17",
//         "inscrit": "69",
//         "province": "ANIANE II"
//     },
//     {
//         "id": 3899,
//         "bureaux": "1",
//         "code": "09 02 02 01",
//         "inscrit": "181",
//         "province": "ELOP"
//     },
//     {
//         "id": 3900,
//         "bureaux": "1",
//         "code": "09 02 02 02",
//         "inscrit": "130",
//         "province": "BIBASSE"
//     },
//     {
//         "id": 3901,
//         "bureaux": "1",
//         "code": "09 02 02 03",
//         "inscrit": "119",
//         "province": "MBAM-ASSEGMA"
//     },
//     {
//         "id": 3902,
//         "bureaux": "1",
//         "code": "09 02 02 04",
//         "inscrit": "268",
//         "province": "NKOUT"
//     },
//     {
//         "id": 3903,
//         "bureaux": "1",
//         "code": "09 02 02 05",
//         "inscrit": "93",
//         "province": "MBOUNANEVILLE"
//     },
//     {
//         "id": 3904,
//         "bureaux": "1",
//         "code": "09 02 02 06",
//         "inscrit": "174",
//         "province": "NKOLABONA 1"
//     },
//     {
//         "id": 3905,
//         "bureaux": "1",
//         "code": "09 02 02 07",
//         "inscrit": "129",
//         "province": "ALENE-MEBOUM"
//     },
//     {
//         "id": 3906,
//         "bureaux": "1",
//         "code": "09 02 02 08",
//         "inscrit": "124",
//         "province": "NKOUGOU"
//     },
//     {
//         "id": 3907,
//         "bureaux": "1",
//         "code": "09 02 02 09",
//         "inscrit": "97",
//         "province": "ASSOCK-BEGUE"
//     },
//     {
//         "id": 3908,
//         "bureaux": "1",
//         "code": "09 02 02 10",
//         "inscrit": "110",
//         "province": "NKOLABONA 2"
//     },
//     {
//         "id": 3909,
//         "bureaux": "1",
//         "code": "09 02 02 11",
//         "inscrit": "100",
//         "province": "NDZEG-ENGONG"
//     },
//     {
//         "id": 3910,
//         "bureaux": "1",
//         "code": "09 02 02 12",
//         "inscrit": "62",
//         "province": "CHANTIER BORDAMUR"
//     },
//     {
//         "id": 3911,
//         "bureaux": "1",
//         "code": "09 02 03 01",
//         "inscrit": "112",
//         "province": "NKOLAYOP-NKODJE"
//     },
//     {
//         "id": 3912,
//         "bureaux": "1",
//         "code": "09 02 03 02",
//         "inscrit": "182",
//         "province": "ZOGONGONE"
//     },
//     {
//         "id": 3913,
//         "bureaux": "1",
//         "code": "09 02 03 03",
//         "inscrit": "243",
//         "province": "AFENANE"
//     },
//     {
//         "id": 3914,
//         "bureaux": "1",
//         "code": "09 02 03 04",
//         "inscrit": "259",
//         "province": "ENDAMA-ESSANGUI"
//     },
//     {
//         "id": 3915,
//         "bureaux": "1",
//         "code": "09 02 03 05",
//         "inscrit": "173",
//         "province": "ANGUIA"
//     },
//     {
//         "id": 3916,
//         "bureaux": "1",
//         "code": "09 02 03 06",
//         "inscrit": "149",
//         "province": "ABAM-EBA A"
//     },
//     {
//         "id": 3917,
//         "bureaux": "1",
//         "code": "09 02 03 07",
//         "inscrit": "256",
//         "province": "ASSOK-MEDZENG"
//     },
//     {
//         "id": 3918,
//         "bureaux": "1",
//         "code": "09 02 03 08",
//         "inscrit": "140",
//         "province": "ALENE-ESSONG"
//     },
//     {
//         "id": 3919,
//         "bureaux": "1",
//         "code": "09 02 03 09",
//         "inscrit": "142",
//         "province": "MENDOK"
//     },
//     {
//         "id": 3920,
//         "bureaux": "1",
//         "code": "09 02 03 10",
//         "inscrit": "251",
//         "province": "EBIANE-VILLE"
//     },
//     {
//         "id": 3921,
//         "bureaux": "1",
//         "code": "09 02 03 11",
//         "inscrit": "194",
//         "province": "TOULON-VILLE"
//     },
//     {
//         "id": 3922,
//         "bureaux": "1",
//         "code": "09 02 03 12",
//         "inscrit": "146",
//         "province": "MBOLEZOK"
//     },
//     {
//         "id": 3923,
//         "bureaux": "1",
//         "code": "09 02 03 13",
//         "inscrit": "185",
//         "province": "MELENE-MINKAGA"
//     },
//     {
//         "id": 3924,
//         "bureaux": "1",
//         "code": "09 02 04 01",
//         "inscrit": "158",
//         "province": "MIYELE"
//     },
//     {
//         "id": 3925,
//         "bureaux": "1",
//         "code": "09 02 04 02",
//         "inscrit": "80",
//         "province": "MEKAK-BILOSSI"
//     },
//     {
//         "id": 3926,
//         "bureaux": "1",
//         "code": "09 02 04 03",
//         "inscrit": "119",
//         "province": "ADZAP"
//     },
//     {
//         "id": 3927,
//         "bureaux": "1",
//         "code": "09 02 04 04",
//         "inscrit": "98",
//         "province": "MEKOMO (NKODJE)"
//     },
//     {
//         "id": 3928,
//         "bureaux": "1",
//         "code": "09 02 04 05",
//         "inscrit": "246",
//         "province": "AKAM (ESSATOUK)"
//     },
//     {
//         "id": 3929,
//         "bureaux": "1",
//         "code": "09 02 04 06",
//         "inscrit": "210",
//         "province": "MBOMO"
//     },
//     {
//         "id": 3930,
//         "bureaux": "1",
//         "code": "09 02 04 07",
//         "inscrit": "116",
//         "province": "MBAA-ESSANGUI"
//     },
//     {
//         "id": 3931,
//         "bureaux": "1",
//         "code": "09 02 04 08",
//         "inscrit": "72",
//         "province": "OBOUT-VILLE"
//     },
//     {
//         "id": 3932,
//         "bureaux": "1",
//         "code": "09 02 04 09",
//         "inscrit": "113",
//         "province": "THO-EFFACK"
//     },
//     {
//         "id": 3933,
//         "bureaux": "1",
//         "code": "09 02 04 10",
//         "inscrit": "185",
//         "province": "MFEIGNE-EFFACK"
//     },
//     {
//         "id": 3934,
//         "bureaux": "1",
//         "code": "09 02 04 11",
//         "inscrit": "48",
//         "province": "ESSOMO-YEFFA (ADZAP)"
//     },
//     {
//         "id": 3935,
//         "bureaux": "1",
//         "code": "09 02 04 12",
//         "inscrit": "106",
//         "province": "AKOK"
//     },
//     {
//         "id": 3936,
//         "bureaux": "1",
//         "code": "09 02 04 13",
//         "inscrit": "110",
//         "province": "ANGANG"
//     },
//     {
//         "id": 3937,
//         "bureaux": "1",
//         "code": "09 02 04 15",
//         "inscrit": "163",
//         "province": "NKOUME NKODJE"
//     },
//     {
//         "id": 3938,
//         "bureaux": "1",
//         "code": "09 02 04 16",
//         "inscrit": "23",
//         "province": "BIYENE"
//     },
//     {
//         "id": 3939,
//         "bureaux": "1",
//         "code": "09 02 04 17",
//         "inscrit": "45",
//         "province": "ADZAP YEFFA"
//     },
//     {
//         "id": 3940,
//         "bureaux": "1",
//         "code": "09 02 04 18",
//         "inscrit": "58",
//         "province": "OBOUT METOME"
//     },
//     {
//         "id": 3941,
//         "bureaux": "1",
//         "code": "09 02 04 19",
//         "inscrit": "32",
//         "province": "ASSOK NYE"
//     },
//     {
//         "id": 3942,
//         "bureaux": "1",
//         "code": "09 02 04 20",
//         "inscrit": "73",
//         "province": "EBENGONE"
//     },
//     {
//         "id": 3943,
//         "bureaux": "1",
//         "code": "09 02 04 21",
//         "inscrit": "68",
//         "province": "ADZAP NKODJE"
//     },
//     {
//         "id": 3944,
//         "bureaux": "1",
//         "code": "09 02 04 22",
//         "inscrit": "39",
//         "province": "BENGOYE"
//     },
//     {
//         "id": 3945,
//         "bureaux": "1",
//         "code": "09 02 04 23",
//         "inscrit": "23",
//         "province": "ANDOME MENDOUNG"
//     },
//     {
//         "id": 3946,
//         "bureaux": "1",
//         "code": "09 02 04 24",
//         "inscrit": "58",
//         "province": "DZOBETE MBELE"
//     },
//     {
//         "id": 3947,
//         "bureaux": "1",
//         "code": "09 02 04 25",
//         "inscrit": "73",
//         "province": "MBAA MIYEMAME"
//     },
//     {
//         "id": 3948,
//         "bureaux": "1",
//         "code": "09 02 04 26",
//         "inscrit": "71",
//         "province": "MVANE EFFACK"
//     },
//     {
//         "id": 3949,
//         "bureaux": "1",
//         "code": "09 02 04 27",
//         "inscrit": "19",
//         "province": "BILOSSI"
//     },
//     {
//         "id": 3950,
//         "bureaux": "1",
//         "code": "09 02 05 01",
//         "inscrit": "60",
//         "province": "MBENGA"
//     },
//     {
//         "id": 3951,
//         "bureaux": "1",
//         "code": "09 02 05 02",
//         "inscrit": "73",
//         "province": "NKANG"
//     },
//     {
//         "id": 3952,
//         "bureaux": "1",
//         "code": "09 02 05 03",
//         "inscrit": "97",
//         "province": "NKARZOK"
//     },
//     {
//         "id": 3953,
//         "bureaux": "1",
//         "code": "09 02 05 04",
//         "inscrit": "57",
//         "province": "NKOMELENE-ASSAS"
//     },
//     {
//         "id": 3954,
//         "bureaux": "1",
//         "code": "09 02 05 05",
//         "inscrit": "59",
//         "province": "AVAZOK"
//     },
//     {
//         "id": 3955,
//         "bureaux": "1",
//         "code": "09 02 05 06",
//         "inscrit": "53",
//         "province": "AKOK-MBONG-SEME"
//     },
//     {
//         "id": 3956,
//         "bureaux": "1",
//         "code": "09 02 05 07",
//         "inscrit": "117",
//         "province": "NKOUM-MBABO"
//     },
//     {
//         "id": 3957,
//         "bureaux": "1",
//         "code": "09 02 05 08",
//         "inscrit": "132",
//         "province": "KONOSSOVILLE"
//     },
//     {
//         "id": 3958,
//         "bureaux": "1",
//         "code": "09 02 05 09",
//         "inscrit": "182",
//         "province": "SOUGOUDZAP VILLE"
//     },
//     {
//         "id": 3959,
//         "bureaux": "1",
//         "code": "09 02 05 10",
//         "inscrit": "62",
//         "province": "ABANG-MEDOUMOU"
//     },
//     {
//         "id": 3960,
//         "bureaux": "1",
//         "code": "09 02 05 11",
//         "inscrit": "70",
//         "province": "KOUMASSI"
//     },
//     {
//         "id": 3961,
//         "bureaux": "1",
//         "code": "09 02 05 12",
//         "inscrit": "171",
//         "province": "HEVEA"
//     },
//     {
//         "id": 3962,
//         "bureaux": "1",
//         "code": "09 02 05 13",
//         "inscrit": "125",
//         "province": "ATONG-VILLE"
//     },
//     {
//         "id": 3963,
//         "bureaux": "1",
//         "code": "09 02 05 14",
//         "inscrit": "231",
//         "province": "MVOMAYOP III"
//     },
//     {
//         "id": 3964,
//         "bureaux": "1",
//         "code": "09 02 05 15",
//         "inscrit": "173",
//         "province": "ABENELANG"
//     },
//     {
//         "id": 3965,
//         "bureaux": "1",
//         "code": "09 02 05 16",
//         "inscrit": "42",
//         "province": "EBEIGNE HOPITAL"
//     },
//     {
//         "id": 3966,
//         "bureaux": "1",
//         "code": "09 02 05 17",
//         "inscrit": "46",
//         "province": "ESSONG-NEDZONE"
//     },
//     {
//         "id": 3967,
//         "bureaux": "1",
//         "code": "09 02 05 18",
//         "inscrit": "52",
//         "province": "NKOMELENE II-III"
//     },
//     {
//         "id": 3968,
//         "bureaux": "1",
//         "code": "09 02 05 19",
//         "inscrit": "43",
//         "province": "ABENELANG II"
//     },
//     {
//         "id": 3969,
//         "bureaux": "17",
//         "code": "09 02 01",
//         "inscrit": "2,191",
//         "province": "BISSOCK"
//     },
//     {
//         "id": 3970,
//         "bureaux": "12",
//         "code": "09 02 02",
//         "inscrit": "1,587",
//         "province": "ELLELEM"
//     },
//     {
//         "id": 3971,
//         "bureaux": "13",
//         "code": "09 02 03",
//         "inscrit": "2,432",
//         "province": "KYE"
//     },
//     {
//         "id": 3972,
//         "bureaux": "26",
//         "code": "09 02 04",
//         "inscrit": "2,406",
//         "province": "NYE"
//     },
//     {
//         "id": 3973,
//         "bureaux": "19",
//         "code": "09 02 05",
//         "inscrit": "1,845",
//         "province": "WOLEU"
//     },
//     {
//         "id": 3974,
//         "bureaux": "2",
//         "code": "09 03 00 01",
//         "inscrit": "604",
//         "province": "ECOLE PRIVEE PROTEST AYANANGA"
//     },
//     {
//         "id": 3975,
//         "bureaux": "1",
//         "code": "09 03 00 02",
//         "inscrit": "284",
//         "province": "ECOLE PUBLIQUE MISSELE"
//     },
//     {
//         "id": 3976,
//         "bureaux": "1",
//         "code": "09 03 00 03",
//         "inscrit": "311",
//         "province": "C.E.B."
//     },
//     {
//         "id": 3977,
//         "bureaux": "2",
//         "code": "09 03 00 04",
//         "inscrit": "773",
//         "province": "CERCLE CULTUREL"
//     },
//     {
//         "id": 3978,
//         "bureaux": "1",
//         "code": "09 03 00 05",
//         "inscrit": "455",
//         "province": "ECOLE FOYER PROTESTANT"
//     },
//     {
//         "id": 3979,
//         "bureaux": "2",
//         "code": "09 03 00 06",
//         "inscrit": "655",
//         "province": "LYCEE S. OYONO ABAA"
//     },
//     {
//         "id": 3980,
//         "bureaux": "2",
//         "code": "09 03 00 07",
//         "inscrit": "547",
//         "province": "EC.COMMUNALE MBAFANE"
//     },
//     {
//         "id": 3981,
//         "bureaux": "1",
//         "code": "09 03 00 08",
//         "inscrit": "500",
//         "province": "CENTRE SOCIAL"
//     },
//     {
//         "id": 3982,
//         "bureaux": "2",
//         "code": "09 03 00 09",
//         "inscrit": "515",
//         "province": "ECOLE PUBLIQUE AGNIZOK"
//     },
//     {
//         "id": 3983,
//         "bureaux": "1",
//         "code": "09 03 00 10",
//         "inscrit": "434",
//         "province": "EC. PRIVEE CATH. MIMBANG"
//     },
//     {
//         "id": 3984,
//         "bureaux": "1",
//         "code": "09 03 00 11",
//         "inscrit": "144",
//         "province": "ECOLE COMMUNALE CENTRE"
//     },
//     {
//         "id": 3985,
//         "bureaux": "2",
//         "code": "09 03 00 12",
//         "inscrit": "515",
//         "province": "PRE-SCOLAIRE PROTESTANT"
//     },
//     {
//         "id": 3986,
//         "bureaux": "1",
//         "code": "09 03 00 13",
//         "inscrit": "433",
//         "province": "MENGOMO-AYAT"
//     },
//     {
//         "id": 3987,
//         "bureaux": "1",
//         "code": "09 03 00 14",
//         "inscrit": "443",
//         "province": "ECOLE CORANIQUE"
//     },
//     {
//         "id": 3988,
//         "bureaux": "20",
//         "code": "09 03 00",
//         "inscrit": "6,613",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 3989,
//         "bureaux": "1",
//         "code": "09 04 01 01",
//         "inscrit": "322",
//         "province": "BINKONDOME"
//     },
//     {
//         "id": 3990,
//         "bureaux": "1",
//         "code": "09 04 01 02",
//         "inscrit": "88",
//         "province": "OFFOS"
//     },
//     {
//         "id": 3991,
//         "bureaux": "1",
//         "code": "09 04 01 03",
//         "inscrit": "114",
//         "province": "MEZALA"
//     },
//     {
//         "id": 3992,
//         "bureaux": "1",
//         "code": "09 04 01 04",
//         "inscrit": "48",
//         "province": "MEYO-ESSOBAME-ANAMA"
//     },
//     {
//         "id": 3993,
//         "bureaux": "1",
//         "code": "09 04 01 05",
//         "inscrit": "88",
//         "province": "MBIYOP-DOANE"
//     },
//     {
//         "id": 3994,
//         "bureaux": "1",
//         "code": "09 04 01 06",
//         "inscrit": "83",
//         "province": "WOUMOU"
//     },
//     {
//         "id": 3995,
//         "bureaux": "1",
//         "code": "09 04 01 07",
//         "inscrit": "100",
//         "province": "NKOK-EBE-EFFACK"
//     },
//     {
//         "id": 3996,
//         "bureaux": "1",
//         "code": "09 04 01 08",
//         "inscrit": "133",
//         "province": "MEYO-NKODJOE"
//     },
//     {
//         "id": 3997,
//         "bureaux": "1",
//         "code": "09 04 01 09",
//         "inscrit": "97",
//         "province": "MELO"
//     },
//     {
//         "id": 3998,
//         "bureaux": "1",
//         "code": "09 04 01 10",
//         "inscrit": "39",
//         "province": "GNAZANG"
//     },
//     {
//         "id": 3999,
//         "bureaux": "1",
//         "code": "09 04 01 11",
//         "inscrit": "115",
//         "province": "HEVEGAB 1"
//     },
//     {
//         "id": 4000,
//         "bureaux": "1",
//         "code": "09 04 01 12",
//         "inscrit": "54",
//         "province": "HEVEGAB 2"
//     },
//     {
//         "id": 4001,
//         "bureaux": "1",
//         "code": "09 04 01 13",
//         "inscrit": "350",
//         "province": "ZAMETSILI"
//     },
//     {
//         "id": 4002,
//         "bureaux": "1",
//         "code": "09 04 01 14",
//         "inscrit": "32",
//         "province": "EDOUM-YEMESSOMO"
//     },
//     {
//         "id": 4003,
//         "bureaux": "1",
//         "code": "09 04 01 15",
//         "inscrit": "73",
//         "province": "AKAM-EBANG"
//     },
//     {
//         "id": 4004,
//         "bureaux": "1",
//         "code": "09 04 01 16",
//         "inscrit": "61",
//         "province": "ANDOCK-BIBE"
//     },
//     {
//         "id": 4005,
//         "bureaux": "1",
//         "code": "09 04 01 17",
//         "inscrit": "51",
//         "province": "NKOK-EBE-EBA"
//     },
//     {
//         "id": 4006,
//         "bureaux": "1",
//         "code": "09 04 01 18",
//         "inscrit": "91",
//         "province": "ESSONE-NKODJOE"
//     },
//     {
//         "id": 4007,
//         "bureaux": "1",
//         "code": "09 04 01 19",
//         "inscrit": "104",
//         "province": "ABE-BIZANG"
//     },
//     {
//         "id": 4008,
//         "bureaux": "1",
//         "code": "09 04 02 01",
//         "inscrit": "1",
//         "province": "ABE BIZANG"
//     },
//     {
//         "id": 4009,
//         "bureaux": "1",
//         "code": "09 04 02 02",
//         "inscrit": "149",
//         "province": "MEYO-KYE"
//     },
//     {
//         "id": 4010,
//         "bureaux": "1",
//         "code": "09 04 02 03",
//         "inscrit": "104",
//         "province": "AKAM-SI"
//     },
//     {
//         "id": 4011,
//         "bureaux": "1",
//         "code": "09 04 02 04",
//         "inscrit": "48",
//         "province": "ADZAP-ESSATOP"
//     },
//     {
//         "id": 4012,
//         "bureaux": "1",
//         "code": "09 04 02 05",
//         "inscrit": "78",
//         "province": "ALOUM EFFACK"
//     },
//     {
//         "id": 4013,
//         "bureaux": "1",
//         "code": "09 04 02 06",
//         "inscrit": "117",
//         "province": "EFFACK-BIBE"
//     },
//     {
//         "id": 4014,
//         "bureaux": "1",
//         "code": "09 04 02 07",
//         "inscrit": "91",
//         "province": "NSIMI ESSENG"
//     },
//     {
//         "id": 4015,
//         "bureaux": "1",
//         "code": "09 04 02 08",
//         "inscrit": "82",
//         "province": "OVENG ESSANDONE"
//     },
//     {
//         "id": 4016,
//         "bureaux": "1",
//         "code": "09 04 02 09",
//         "inscrit": "102",
//         "province": "MEKOMO ESSANDONE-EBANG ESSAND"
//     },
//     {
//         "id": 4017,
//         "bureaux": "1",
//         "code": "09 04 02 10",
//         "inscrit": "125",
//         "province": "EBORO NTEM"
//     },
//     {
//         "id": 4018,
//         "bureaux": "1",
//         "code": "09 04 02 11",
//         "inscrit": "88",
//         "province": "NKOUM EDOUM"
//     },
//     {
//         "id": 4019,
//         "bureaux": "1",
//         "code": "09 04 02 12",
//         "inscrit": "72",
//         "province": "MENDOUMA ESSAGUI"
//     },
//     {
//         "id": 4020,
//         "bureaux": "1",
//         "code": "09 04 02 13",
//         "inscrit": "50",
//         "province": "MEDOUNOU ESSENG"
//     },
//     {
//         "id": 4021,
//         "bureaux": "1",
//         "code": "09 04 02 14",
//         "inscrit": "65",
//         "province": "ALENE EFOULANE"
//     },
//     {
//         "id": 4022,
//         "bureaux": "1",
//         "code": "09 04 02 15",
//         "inscrit": "59",
//         "province": "GNABOME-BIKAS"
//     },
//     {
//         "id": 4023,
//         "bureaux": "1",
//         "code": "09 04 02 16",
//         "inscrit": "114",
//         "province": "MEKOMO-ESSENG"
//     },
//     {
//         "id": 4024,
//         "bureaux": "1",
//         "code": "09 04 02 17",
//         "inscrit": "169",
//         "province": "MAAMENI"
//     },
//     {
//         "id": 4025,
//         "bureaux": "1",
//         "code": "09 04 02 18",
//         "inscrit": "66",
//         "province": "MIMBANG EFFACK"
//     },
//     {
//         "id": 4026,
//         "bureaux": "1",
//         "code": "09 04 02 19",
//         "inscrit": "135",
//         "province": "ADZAP EFFACK"
//     },
//     {
//         "id": 4027,
//         "bureaux": "1",
//         "code": "09 04 02 20",
//         "inscrit": "127",
//         "province": "NKOLMENGOUA"
//     },
//     {
//         "id": 4028,
//         "bureaux": "1",
//         "code": "09 04 02 21",
//         "inscrit": "84",
//         "province": "MELEP"
//     },
//     {
//         "id": 4029,
//         "bureaux": "1",
//         "code": "09 04 02 22",
//         "inscrit": "75",
//         "province": "MENDOUMA EFFACK"
//     },
//     {
//         "id": 4030,
//         "bureaux": "1",
//         "code": "09 04 02 23",
//         "inscrit": "98",
//         "province": "EWONG"
//     },
//     {
//         "id": 4031,
//         "bureaux": "1",
//         "code": "09 04 02 24",
//         "inscrit": "53",
//         "province": "NKOK-LOA"
//     },
//     {
//         "id": 4032,
//         "bureaux": "1",
//         "code": "09 04 02 25",
//         "inscrit": "45",
//         "province": "AKOME-ESSAKORANE"
//     },
//     {
//         "id": 4033,
//         "bureaux": "1",
//         "code": "09 04 02 26",
//         "inscrit": "84",
//         "province": "MBONG ETE"
//     },
//     {
//         "id": 4034,
//         "bureaux": "1",
//         "code": "09 04 02 27",
//         "inscrit": "53",
//         "province": "EBANG-ESSANDONE"
//     },
//     {
//         "id": 4035,
//         "bureaux": "1",
//         "code": "09 04 02 28",
//         "inscrit": "50",
//         "province": "MEBAZA"
//     },
//     {
//         "id": 4036,
//         "bureaux": "1",
//         "code": "09 04 02 29",
//         "inscrit": "111",
//         "province": "MFOUMOU-EFFACK"
//     },
//     {
//         "id": 4037,
//         "bureaux": "1",
//         "code": "09 04 03 01",
//         "inscrit": "116",
//         "province": "BINDOUMESSANG"
//     },
//     {
//         "id": 4038,
//         "bureaux": "1",
//         "code": "09 04 03 02",
//         "inscrit": "5",
//         "province": "MEDOUMOU EBEING"
//     },
//     {
//         "id": 4039,
//         "bureaux": "1",
//         "code": "09 04 03 03",
//         "inscrit": "111",
//         "province": "AWEGANE"
//     },
//     {
//         "id": 4040,
//         "bureaux": "1",
//         "code": "09 04 03 04",
//         "inscrit": "128",
//         "province": "TCHIMAZOCK"
//     },
//     {
//         "id": 4041,
//         "bureaux": "1",
//         "code": "09 04 03 05",
//         "inscrit": "116",
//         "province": "ENDAMA-EFFACK"
//     },
//     {
//         "id": 4042,
//         "bureaux": "1",
//         "code": "09 04 03 06",
//         "inscrit": "81",
//         "province": "NKOL MESSAS"
//     },
//     {
//         "id": 4043,
//         "bureaux": "1",
//         "code": "09 04 03 07",
//         "inscrit": "111",
//         "province": "AKAM EFFACK"
//     },
//     {
//         "id": 4044,
//         "bureaux": "1",
//         "code": "09 04 03 08",
//         "inscrit": "114",
//         "province": "NKOLAYOP ESSATOUK"
//     },
//     {
//         "id": 4045,
//         "bureaux": "1",
//         "code": "09 04 03 09",
//         "inscrit": "331",
//         "province": "AWOUA"
//     },
//     {
//         "id": 4046,
//         "bureaux": "1",
//         "code": "09 04 03 10",
//         "inscrit": "201",
//         "province": "KONOVILLE"
//     },
//     {
//         "id": 4047,
//         "bureaux": "1",
//         "code": "09 04 03 11",
//         "inscrit": "1",
//         "province": "TOCK-ESSANDONE"
//     },
//     {
//         "id": 4048,
//         "bureaux": "1",
//         "code": "09 04 03 12",
//         "inscrit": "3",
//         "province": "ALEN ESSENG"
//     },
//     {
//         "id": 4049,
//         "bureaux": "1",
//         "code": "09 04 03 13",
//         "inscrit": "6",
//         "province": "NGOZOCK"
//     },
//     {
//         "id": 4050,
//         "bureaux": "1",
//         "code": "09 04 03 14",
//         "inscrit": "2",
//         "province": "FONG-ESSANDONE"
//     },
//     {
//         "id": 4051,
//         "bureaux": "1",
//         "code": "09 04 03 16",
//         "inscrit": "51",
//         "province": "ABANG-SI"
//     },
//     {
//         "id": 4052,
//         "bureaux": "1",
//         "code": "09 04 03 17",
//         "inscrit": "76",
//         "province": "MESSANG"
//     },
//     {
//         "id": 4053,
//         "bureaux": "1",
//         "code": "09 04 03 18",
//         "inscrit": "100",
//         "province": "ASSOK-SEND"
//     },
//     {
//         "id": 4054,
//         "bureaux": "1",
//         "code": "09 04 03 19",
//         "inscrit": "74",
//         "province": "AKOME-MENGOS"
//     },
//     {
//         "id": 4055,
//         "bureaux": "1",
//         "code": "09 04 04 01",
//         "inscrit": "89",
//         "province": "MEKAK EFFACK"
//     },
//     {
//         "id": 4056,
//         "bureaux": "1",
//         "code": "09 04 04 02",
//         "inscrit": "117",
//         "province": "BILEOSSI EBA"
//     },
//     {
//         "id": 4057,
//         "bureaux": "1",
//         "code": "09 04 04 03",
//         "inscrit": "81",
//         "province": "YANEMVE"
//     },
//     {
//         "id": 4058,
//         "bureaux": "1",
//         "code": "09 04 04 04",
//         "inscrit": "90",
//         "province": "MENDOUNG EBA"
//     },
//     {
//         "id": 4059,
//         "bureaux": "1",
//         "code": "09 04 04 05",
//         "inscrit": "313",
//         "province": "OKOK"
//     },
//     {
//         "id": 4060,
//         "bureaux": "1",
//         "code": "09 04 04 06",
//         "inscrit": "88",
//         "province": "BIBE EBA"
//     },
//     {
//         "id": 4061,
//         "bureaux": "1",
//         "code": "09 04 04 07",
//         "inscrit": "64",
//         "province": "NEB"
//     },
//     {
//         "id": 4062,
//         "bureaux": "1",
//         "code": "09 04 04 08",
//         "inscrit": "59",
//         "province": "MEKOMO EBA NKOUM"
//     },
//     {
//         "id": 4063,
//         "bureaux": "1",
//         "code": "09 04 04 09",
//         "inscrit": "105",
//         "province": "BIKOUGOU"
//     },
//     {
//         "id": 4064,
//         "bureaux": "1",
//         "code": "09 04 04 10",
//         "inscrit": "106",
//         "province": "MELENE BIKANG"
//     },
//     {
//         "id": 4065,
//         "bureaux": "1",
//         "code": "09 04 04 11",
//         "inscrit": "25",
//         "province": "TOULOUSE"
//     },
//     {
//         "id": 4066,
//         "bureaux": "1",
//         "code": "09 04 04 12",
//         "inscrit": "8",
//         "province": "BISSONG VILLE"
//     },
//     {
//         "id": 4067,
//         "bureaux": "1",
//         "code": "09 04 04 13",
//         "inscrit": "84",
//         "province": "MELENE EFFACK"
//     },
//     {
//         "id": 4068,
//         "bureaux": "1",
//         "code": "09 04 05 01",
//         "inscrit": "128",
//         "province": "TOCK ESSANDONE"
//     },
//     {
//         "id": 4069,
//         "bureaux": "1",
//         "code": "09 04 05 02",
//         "inscrit": "110",
//         "province": "ALEN ESSENG"
//     },
//     {
//         "id": 4070,
//         "bureaux": "1",
//         "code": "09 04 05 03",
//         "inscrit": "88",
//         "province": "MEDOUMOU CENTRE"
//     },
//     {
//         "id": 4071,
//         "bureaux": "1",
//         "code": "09 04 05 04",
//         "inscrit": "121",
//         "province": "NGOZOCK"
//     },
//     {
//         "id": 4072,
//         "bureaux": "1",
//         "code": "09 04 05 05",
//         "inscrit": "82",
//         "province": "OYEM ESSABEGNE OBILI VILLE"
//     },
//     {
//         "id": 4073,
//         "bureaux": "1",
//         "code": "09 04 05 06",
//         "inscrit": "40",
//         "province": "FONG ESSANDONE"
//     },
//     {
//         "id": 4074,
//         "bureaux": "1",
//         "code": "09 04 05 07",
//         "inscrit": "42",
//         "province": "MBO ESSANDONE"
//     },
//     {
//         "id": 4075,
//         "bureaux": "1",
//         "code": "09 04 05 08",
//         "inscrit": "55",
//         "province": "MVANE"
//     },
//     {
//         "id": 4076,
//         "bureaux": "1",
//         "code": "09 04 05 09",
//         "inscrit": "100",
//         "province": "MEDOUMOU EBEIGNE"
//     },
//     {
//         "id": 4077,
//         "bureaux": "1",
//         "code": "09 04 05 10",
//         "inscrit": "30",
//         "province": "MENDOMO"
//     },
//     {
//         "id": 4078,
//         "bureaux": "19",
//         "code": "09 04 01",
//         "inscrit": "2,043",
//         "province": "EKORETE (DISTRIC BIKONDOME)"
//     },
//     {
//         "id": 4079,
//         "bureaux": "29",
//         "code": "09 04 02",
//         "inscrit": "2,495",
//         "province": "NTEM I (DISTRICT MEYO-KYE)"
//     },
//     {
//         "id": 4080,
//         "bureaux": "18",
//         "code": "09 04 03",
//         "inscrit": "1,627",
//         "province": "KOUM"
//     },
//     {
//         "id": 4081,
//         "bureaux": "13",
//         "code": "09 04 04",
//         "inscrit": "1,229",
//         "province": "KESS"
//     },
//     {
//         "id": 4082,
//         "bureaux": "10",
//         "code": "09 04 05",
//         "inscrit": "796",
//         "province": "MBOAA SUD"
//     },
//     {
//         "id": 4083,
//         "bureaux": "1",
//         "code": "09 05 00 01",
//         "inscrit": "272",
//         "province": "CES CATH. MINVOUL"
//     },
//     {
//         "id": 4084,
//         "bureaux": "1",
//         "code": "09 05 00 02",
//         "inscrit": "294",
//         "province": "ECOLE PUBL. MINVOUL CENTRE"
//     },
//     {
//         "id": 4085,
//         "bureaux": "1",
//         "code": "09 05 00 03",
//         "inscrit": "282",
//         "province": "ECOLE PUBL.NGONE"
//     },
//     {
//         "id": 4086,
//         "bureaux": "1",
//         "code": "09 05 00 04",
//         "inscrit": "224",
//         "province": "ELARMINTANG"
//     },
//     {
//         "id": 4087,
//         "bureaux": "1",
//         "code": "09 05 00 05",
//         "inscrit": "381",
//         "province": "AKONTANG"
//     },
//     {
//         "id": 4088,
//         "bureaux": "5",
//         "code": "09 05 00",
//         "inscrit": "1,453",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 4089,
//         "bureaux": "1",
//         "code": "09 06 01 01",
//         "inscrit": "86",
//         "province": "MEDZONG"
//     },
//     {
//         "id": 4090,
//         "bureaux": "1",
//         "code": "09 06 01 02",
//         "inscrit": "99",
//         "province": "MIMBANG"
//     },
//     {
//         "id": 4091,
//         "bureaux": "1",
//         "code": "09 06 01 03",
//         "inscrit": "108",
//         "province": "BIBAGA"
//     },
//     {
//         "id": 4092,
//         "bureaux": "1",
//         "code": "09 06 01 04",
//         "inscrit": "95",
//         "province": "AVEBE"
//     },
//     {
//         "id": 4093,
//         "bureaux": "1",
//         "code": "09 06 01 05",
//         "inscrit": "97",
//         "province": "BILO"
//     },
//     {
//         "id": 4094,
//         "bureaux": "1",
//         "code": "09 06 01 06",
//         "inscrit": "12",
//         "province": "METOU"
//     },
//     {
//         "id": 4095,
//         "bureaux": "1",
//         "code": "09 06 01 07",
//         "inscrit": "112",
//         "province": "MINDOUMOU"
//     },
//     {
//         "id": 4096,
//         "bureaux": "1",
//         "code": "09 06 02 01",
//         "inscrit": "48",
//         "province": "MBOME"
//     },
//     {
//         "id": 4097,
//         "bureaux": "1",
//         "code": "09 06 02 02",
//         "inscrit": "259",
//         "province": "MBOUNANEVILLE"
//     },
//     {
//         "id": 4098,
//         "bureaux": "1",
//         "code": "09 06 02 03",
//         "inscrit": "214",
//         "province": "BENGUIAGA"
//     },
//     {
//         "id": 4099,
//         "bureaux": "1",
//         "code": "09 06 02 04",
//         "inscrit": "315",
//         "province": "EBOMANE I"
//     },
//     {
//         "id": 4100,
//         "bureaux": "1",
//         "code": "09 06 02 05",
//         "inscrit": "89",
//         "province": "MEYOS"
//     },
//     {
//         "id": 4101,
//         "bureaux": "1",
//         "code": "09 06 02 06",
//         "inscrit": "56",
//         "province": "AKOULOUZOCK"
//     },
//     {
//         "id": 4102,
//         "bureaux": "1",
//         "code": "09 06 02 07",
//         "inscrit": "90",
//         "province": "ASSOK"
//     },
//     {
//         "id": 4103,
//         "bureaux": "1",
//         "code": "09 06 02 08",
//         "inscrit": "71",
//         "province": "ZOGOLOUMOU"
//     },
//     {
//         "id": 4104,
//         "bureaux": "1",
//         "code": "09 06 02 09",
//         "inscrit": "193",
//         "province": "EBOMANE II"
//     },
//     {
//         "id": 4105,
//         "bureaux": "1",
//         "code": "09 06 02 10",
//         "inscrit": "82",
//         "province": "MVOLO"
//     },
//     {
//         "id": 4106,
//         "bureaux": "1",
//         "code": "09 06 03 01",
//         "inscrit": "33",
//         "province": "MELEME"
//     },
//     {
//         "id": 4107,
//         "bureaux": "1",
//         "code": "09 06 03 02",
//         "inscrit": "271",
//         "province": "BOLOSSOVILLE"
//     },
//     {
//         "id": 4108,
//         "bureaux": "1",
//         "code": "09 06 03 03",
//         "inscrit": "46",
//         "province": "BELFORT"
//     },
//     {
//         "id": 4109,
//         "bureaux": "1",
//         "code": "09 06 03 04",
//         "inscrit": "34",
//         "province": "AKOH"
//     },
//     {
//         "id": 4110,
//         "bureaux": "1",
//         "code": "09 06 03 05",
//         "inscrit": "40",
//         "province": "BOUT-ENGASS"
//     },
//     {
//         "id": 4111,
//         "bureaux": "1",
//         "code": "09 06 03 06",
//         "inscrit": "81",
//         "province": "MOMO"
//     },
//     {
//         "id": 4112,
//         "bureaux": "1",
//         "code": "09 06 03 07",
//         "inscrit": "137",
//         "province": "CENTRE-VILLE"
//     },
//     {
//         "id": 4113,
//         "bureaux": "1",
//         "code": "09 06 03 08",
//         "inscrit": "87",
//         "province": "ESSONE-BEKOUE"
//     },
//     {
//         "id": 4114,
//         "bureaux": "1",
//         "code": "09 06 03 09",
//         "inscrit": "81",
//         "province": "AYENGUENING"
//     },
//     {
//         "id": 4115,
//         "bureaux": "1",
//         "code": "09 06 03 10",
//         "inscrit": "93",
//         "province": "MEBOLO"
//     },
//     {
//         "id": 4116,
//         "bureaux": "1",
//         "code": "09 06 03 11",
//         "inscrit": "23",
//         "province": "MEYOH"
//     },
//     {
//         "id": 4117,
//         "bureaux": "1",
//         "code": "09 06 03 12",
//         "inscrit": "170",
//         "province": "AKOK"
//     },
//     {
//         "id": 4118,
//         "bureaux": "1",
//         "code": "09 06 03 13",
//         "inscrit": "62",
//         "province": "ANDOME NKOTO"
//     },
//     {
//         "id": 4119,
//         "bureaux": "1",
//         "code": "09 06 03 14",
//         "inscrit": "35",
//         "province": "BIBE-MELENE"
//     },
//     {
//         "id": 4120,
//         "bureaux": "1",
//         "code": "09 06 03 15",
//         "inscrit": "15",
//         "province": "MEMVEME"
//     },
//     {
//         "id": 4121,
//         "bureaux": "1",
//         "code": "09 06 03 16",
//         "inscrit": "23",
//         "province": "OVENG"
//     },
//     {
//         "id": 4122,
//         "bureaux": "7",
//         "code": "09 06 01",
//         "inscrit": "609",
//         "province": "NORD"
//     },
//     {
//         "id": 4123,
//         "bureaux": "10",
//         "code": "09 06 02",
//         "inscrit": "1,417",
//         "province": "SOSSOLO-NTEM"
//     },
//     {
//         "id": 4124,
//         "bureaux": "16",
//         "code": "09 06 03",
//         "inscrit": "1,231",
//         "province": "SUD (DISTRICT DE BOLOSSOVILLE"
//     },
//     {
//         "id": 4125,
//         "bureaux": "2",
//         "code": "09 07 00 01",
//         "inscrit": "615",
//         "province": "ECOLE PUBLIQUE MITZIC"
//     },
//     {
//         "id": 4126,
//         "bureaux": "2",
//         "code": "09 07 00 02",
//         "inscrit": "640",
//         "province": "ECOLE PROTESTANTE"
//     },
//     {
//         "id": 4127,
//         "bureaux": "2",
//         "code": "09 07 00 03",
//         "inscrit": "757",
//         "province": "HOPITAL"
//     },
//     {
//         "id": 4128,
//         "bureaux": "1",
//         "code": "09 07 00 04",
//         "inscrit": "481",
//         "province": "ECOLE CATHOLIQUE"
//     },
//     {
//         "id": 4129,
//         "bureaux": "1",
//         "code": "09 07 00 05",
//         "inscrit": "168",
//         "province": "METHUI"
//     },
//     {
//         "id": 4130,
//         "bureaux": "1",
//         "code": "09 07 00 06",
//         "inscrit": "180",
//         "province": "CES CATHOLIQUE"
//     },
//     {
//         "id": 4131,
//         "bureaux": "1",
//         "code": "09 07 00 07",
//         "inscrit": "266",
//         "province": "ECOLE PUBL. FEUCK SOLE"
//     },
//     {
//         "id": 4132,
//         "bureaux": "1",
//         "code": "09 07 00 08",
//         "inscrit": "109",
//         "province": "ATOUR"
//     },
//     {
//         "id": 4133,
//         "bureaux": "1",
//         "code": "09 07 00 09",
//         "inscrit": "364",
//         "province": "JARDIN DENFANT"
//     },
//     {
//         "id": 4134,
//         "bureaux": "12",
//         "code": "09 07 00",
//         "inscrit": "3,580",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 4135,
//         "bureaux": "1",
//         "code": "09 08 01 01",
//         "inscrit": "81",
//         "province": "EDOUNG-ALANG"
//     },
//     {
//         "id": 4136,
//         "bureaux": "1",
//         "code": "09 08 01 02",
//         "inscrit": "262",
//         "province": "ESSONG-VILLE"
//     },
//     {
//         "id": 4137,
//         "bureaux": "1",
//         "code": "09 08 01 03",
//         "inscrit": "83",
//         "province": "EKOUK-VILLE"
//     },
//     {
//         "id": 4138,
//         "bureaux": "1",
//         "code": "09 08 01 04",
//         "inscrit": "104",
//         "province": "EGNENG-MELENE"
//     },
//     {
//         "id": 4139,
//         "bureaux": "1",
//         "code": "09 08 01 05",
//         "inscrit": "52",
//         "province": "HEVEGAB V1 DOUM"
//     },
//     {
//         "id": 4140,
//         "bureaux": "1",
//         "code": "09 08 01 06",
//         "inscrit": "34",
//         "province": "HEVEGAB V2 BIKOUME"
//     },
//     {
//         "id": 4141,
//         "bureaux": "1",
//         "code": "09 08 02 01",
//         "inscrit": "60",
//         "province": "NKOL-AYO"
//     },
//     {
//         "id": 4142,
//         "bureaux": "1",
//         "code": "09 08 02 02",
//         "inscrit": "85",
//         "province": "MBELALENE"
//     },
//     {
//         "id": 4143,
//         "bureaux": "1",
//         "code": "09 08 02 03",
//         "inscrit": "70",
//         "province": "AKONEBE"
//     },
//     {
//         "id": 4144,
//         "bureaux": "1",
//         "code": "09 08 02 04",
//         "inscrit": "148",
//         "province": "MELENE"
//     },
//     {
//         "id": 4145,
//         "bureaux": "1",
//         "code": "09 08 02 05",
//         "inscrit": "343",
//         "province": "SAM-CENTRE"
//     },
//     {
//         "id": 4146,
//         "bureaux": "1",
//         "code": "09 08 02 06",
//         "inscrit": "79",
//         "province": "BELLE-VILLE"
//     },
//     {
//         "id": 4147,
//         "bureaux": "1",
//         "code": "09 08 02 07",
//         "inscrit": "62",
//         "province": "DOUMANDZOU"
//     },
//     {
//         "id": 4148,
//         "bureaux": "1",
//         "code": "09 08 02 08",
//         "inscrit": "251",
//         "province": "DOUALA"
//     },
//     {
//         "id": 4149,
//         "bureaux": "1",
//         "code": "09 08 02 09",
//         "inscrit": "64",
//         "province": "MEBOLE"
//     },
//     {
//         "id": 4150,
//         "bureaux": "1",
//         "code": "09 08 02 10",
//         "inscrit": "107",
//         "province": "ANGOUMA"
//     },
//     {
//         "id": 4151,
//         "bureaux": "1",
//         "code": "09 08 02 11",
//         "inscrit": "89",
//         "province": "OBOUI"
//     },
//     {
//         "id": 4152,
//         "bureaux": "1",
//         "code": "09 08 02 12",
//         "inscrit": "93",
//         "province": "LA HOLLANDE"
//     },
//     {
//         "id": 4153,
//         "bureaux": "1",
//         "code": "09 08 03 01",
//         "inscrit": "155",
//         "province": "SAKE-VILLE"
//     },
//     {
//         "id": 4154,
//         "bureaux": "1",
//         "code": "09 08 03 02",
//         "inscrit": "202",
//         "province": "MINDZI"
//     },
//     {
//         "id": 4155,
//         "bureaux": "1",
//         "code": "09 08 03 04",
//         "inscrit": "52",
//         "province": "LALARA"
//     },
//     {
//         "id": 4156,
//         "bureaux": "1",
//         "code": "09 08 03 05",
//         "inscrit": "214",
//         "province": "VIAFE"
//     },
//     {
//         "id": 4157,
//         "bureaux": "1",
//         "code": "09 08 03 06",
//         "inscrit": "31",
//         "province": "BENGUI-CHANTIER"
//     },
//     {
//         "id": 4158,
//         "bureaux": "1",
//         "code": "09 08 03 07",
//         "inscrit": "39",
//         "province": "MIANG"
//     },
//     {
//         "id": 4159,
//         "bureaux": "1",
//         "code": "09 08 03 08",
//         "inscrit": "208",
//         "province": "BABYLONE"
//     },
//     {
//         "id": 4160,
//         "bureaux": "1",
//         "code": "09 08 04 01",
//         "inscrit": "123",
//         "province": "AYANE NKAR II"
//     },
//     {
//         "id": 4161,
//         "bureaux": "1",
//         "code": "09 08 04 02",
//         "inscrit": "133",
//         "province": "ABONG-MIANG"
//     },
//     {
//         "id": 4162,
//         "bureaux": "1",
//         "code": "09 08 04 03",
//         "inscrit": "119",
//         "province": "EYINANE"
//     },
//     {
//         "id": 4163,
//         "bureaux": "1",
//         "code": "09 08 04 04",
//         "inscrit": "134",
//         "province": "MINKO-MI-BE"
//     },
//     {
//         "id": 4164,
//         "bureaux": "1",
//         "code": "09 08 04 05",
//         "inscrit": "91",
//         "province": "NSANG-ENGONG"
//     },
//     {
//         "id": 4165,
//         "bureaux": "1",
//         "code": "09 08 04 06",
//         "inscrit": "159",
//         "province": "NGOMESSI"
//     },
//     {
//         "id": 4166,
//         "bureaux": "1",
//         "code": "09 08 04 07",
//         "inscrit": "114",
//         "province": "OKALA"
//     },
//     {
//         "id": 4167,
//         "bureaux": "1",
//         "code": "09 08 04 08",
//         "inscrit": "52",
//         "province": "HEVEGAB  V 3 MIMPKWELE"
//     },
//     {
//         "id": 4168,
//         "bureaux": "1",
//         "code": "09 08 04 09",
//         "inscrit": "98",
//         "province": "HEVEGAB  V 4 AKINETOM"
//     },
//     {
//         "id": 4169,
//         "bureaux": "6",
//         "code": "09 08 01",
//         "inscrit": "616",
//         "province": "DOUM"
//     },
//     {
//         "id": 4170,
//         "bureaux": "12",
//         "code": "09 08 02",
//         "inscrit": "1,451",
//         "province": "DOUMANDZOU (DISTRICT DE SAM)"
//     },
//     {
//         "id": 4171,
//         "bureaux": "7",
//         "code": "09 08 03",
//         "inscrit": "901",
//         "province": "LALARA"
//     },
//     {
//         "id": 4172,
//         "bureaux": "9",
//         "code": "09 08 04",
//         "inscrit": "1,023",
//         "province": "OKALA"
//     },
//     {
//         "id": 4173,
//         "bureaux": "2",
//         "code": "09 09 00 01",
//         "inscrit": "518",
//         "province": "ECOLE PUBLIQUE"
//     },
//     {
//         "id": 4174,
//         "bureaux": "1",
//         "code": "09 09 00 02",
//         "inscrit": "73",
//         "province": "E.P.P. ENIENG-MELEN"
//     },
//     {
//         "id": 4175,
//         "bureaux": "1",
//         "code": "09 09 00 03",
//         "inscrit": "324",
//         "province": "E.P.C. ABAMASSI"
//     },
//     {
//         "id": 4176,
//         "bureaux": "1",
//         "code": "09 09 00 04",
//         "inscrit": "42",
//         "province": "MONT-BENIT (CHEF VILLAGE)"
//     },
//     {
//         "id": 4177,
//         "bureaux": "1",
//         "code": "09 09 00 05",
//         "inscrit": "108",
//         "province": "ATOUT (CHEF VILLAGE)"
//     },
//     {
//         "id": 4178,
//         "bureaux": "1",
//         "code": "09 09 00 06",
//         "inscrit": "144",
//         "province": "E.P.P EFOULANE"
//     },
//     {
//         "id": 4179,
//         "bureaux": "1",
//         "code": "09 09 00 07",
//         "inscrit": "87",
//         "province": "MONT-BENIT-A"
//     },
//     {
//         "id": 4180,
//         "bureaux": "1",
//         "code": "09 09 00 08",
//         "inscrit": "236",
//         "province": "NKOUALA"
//     },
//     {
//         "id": 4181,
//         "bureaux": "9",
//         "code": "09 09 00",
//         "inscrit": "1,532",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 4182,
//         "bureaux": "1",
//         "code": "09 10 01 01",
//         "inscrit": "97",
//         "province": "EFAUT"
//     },
//     {
//         "id": 4183,
//         "bureaux": "1",
//         "code": "09 10 01 02",
//         "inscrit": "84",
//         "province": "ETSAMEYONG"
//     },
//     {
//         "id": 4184,
//         "bureaux": "1",
//         "code": "09 10 01 03",
//         "inscrit": "176",
//         "province": "NKOME-MBE"
//     },
//     {
//         "id": 4185,
//         "bureaux": "1",
//         "code": "09 10 01 04",
//         "inscrit": "80",
//         "province": "EFAUT-B"
//     },
//     {
//         "id": 4186,
//         "bureaux": "1",
//         "code": "09 10 02 01",
//         "inscrit": "185",
//         "province": "EDOUM"
//     },
//     {
//         "id": 4187,
//         "bureaux": "1",
//         "code": "09 10 02 02",
//         "inscrit": "25",
//         "province": "SONG"
//     },
//     {
//         "id": 4188,
//         "bureaux": "1",
//         "code": "09 10 02 03",
//         "inscrit": "78",
//         "province": "NZOGBOUR"
//     },
//     {
//         "id": 4189,
//         "bureaux": "1",
//         "code": "09 10 02 04",
//         "inscrit": "97",
//         "province": "ASSOK"
//     },
//     {
//         "id": 4190,
//         "bureaux": "1",
//         "code": "09 10 02 05",
//         "inscrit": "67",
//         "province": "ETSAME 1"
//     },
//     {
//         "id": 4191,
//         "bureaux": "1",
//         "code": "09 10 02 06",
//         "inscrit": "187",
//         "province": "NKINENN A"
//     },
//     {
//         "id": 4192,
//         "bureaux": "1",
//         "code": "09 10 02 07",
//         "inscrit": "123",
//         "province": "NKINENN B"
//     },
//     {
//         "id": 4193,
//         "bureaux": "1",
//         "code": "09 10 02 08",
//         "inscrit": "73",
//         "province": "AVANG"
//     },
//     {
//         "id": 4194,
//         "bureaux": "1",
//         "code": "09 10 02 09",
//         "inscrit": "59",
//         "province": "MBEAKELAYONG"
//     },
//     {
//         "id": 4195,
//         "bureaux": "1",
//         "code": "09 10 02 10",
//         "inscrit": "101",
//         "province": "AKOGA"
//     },
//     {
//         "id": 4196,
//         "bureaux": "1",
//         "code": "09 10 02 11",
//         "inscrit": "33",
//         "province": "NZORENGONE"
//     },
//     {
//         "id": 4197,
//         "bureaux": "4",
//         "code": "09 10 01",
//         "inscrit": "437",
//         "province": "MVO-ABANGA"
//     },
//     {
//         "id": 4198,
//         "bureaux": "11",
//         "code": "09 10 02",
//         "inscrit": "1,028",
//         "province": "MBEI"
//     },
//     {
//         "id": 4199,
//         "bureaux": "46",
//         "code": "901",
//         "inscrit": "14,120",
//         "province": "OYEM"
//     },
//     {
//         "id": 4200,
//         "bureaux": "87",
//         "code": "902",
//         "inscrit": "1    461",
//         "province": "WOLEU (OYEM)"
//     },
//     {
//         "id": 4201,
//         "bureaux": "20",
//         "code": "903",
//         "inscrit": "6,613",
//         "province": "BITAM"
//     },
//     {
//         "id": 4202,
//         "bureaux": "89",
//         "code": "904",
//         "inscrit": "8,190",
//         "province": "NTEM (BITAM)"
//     },
//     {
//         "id": 4203,
//         "bureaux": "5",
//         "code": "905",
//         "inscrit": "1,453",
//         "province": "MINVOUL"
//     },
//     {
//         "id": 4204,
//         "bureaux": "33",
//         "code": "906",
//         "inscrit": "3,257",
//         "province": "HAUT-NTEM (MINVOUL)"
//     },
//     {
//         "id": 4205,
//         "bureaux": "12",
//         "code": "907",
//         "inscrit": "3,580",
//         "province": "MITZIC"
//     },
//     {
//         "id": 4206,
//         "bureaux": "34",
//         "code": "908",
//         "inscrit": "3,991",
//         "province": "OKANO (MITZIC)"
//     },
//     {
//         "id": 4207,
//         "bureaux": "9",
//         "code": "909",
//         "inscrit": "1,532",
//         "province": "MEDOUNEU"
//     },
//     {
//         "id": 4208,
//         "bureaux": "15",
//         "code": "910",
//         "inscrit": "1,465",
//         "province": "HAUT COMO (MEDOUNEU)"
//     },
//     {
//         "id": 4209,
//         "bureaux": "1",
//         "code": "11 01 01 01",
//         "inscrit": "149",
//         "province": "JOHANNESBURG"
//     },
//     {
//         "id": 4210,
//         "bureaux": "1",
//         "code": "11 01 02 01",
//         "inscrit": "125",
//         "province": "PRETORIA"
//     },
//     {
//         "id": 4211,
//         "bureaux": "1",
//         "code": "11 01 03 01",
//         "inscrit": "116",
//         "province": "CAP-TOWN"
//     },
//     {
//         "id": 4212,
//         "bureaux": "1",
//         "code": "11 01 04 01",
//         "inscrit": "11",
//         "province": "DURBAN"
//     },
//     {
//         "id": 4213,
//         "bureaux": "1",
//         "code": "11 01 05 01",
//         "inscrit": "47",
//         "province": "VAAL"
//     },
//     {
//         "id": 4214,
//         "bureaux": "1",
//         "code": "11 01 01",
//         "inscrit": "149",
//         "province": "JOHANNESBURG"
//     },
//     {
//         "id": 4215,
//         "bureaux": "1",
//         "code": "11 01 02",
//         "inscrit": "125",
//         "province": "PRETORIA"
//     },
//     {
//         "id": 4216,
//         "bureaux": "1",
//         "code": "11 01 03",
//         "inscrit": "116",
//         "province": "CAP-TOWN"
//     },
//     {
//         "id": 4217,
//         "bureaux": "1",
//         "code": "11 01 04",
//         "inscrit": "11",
//         "province": "DURBAN"
//     },
//     {
//         "id": 4218,
//         "bureaux": "1",
//         "code": "11 01 05",
//         "inscrit": "47",
//         "province": "VAAL"
//     },
//     {
//         "id": 4219,
//         "bureaux": "1",
//         "code": "11 02 01 01",
//         "inscrit": "11",
//         "province": "ALGER - AMBASSADE DU GABON"
//     },
//     {
//         "id": 4220,
//         "bureaux": "1",
//         "code": "11 02 01",
//         "inscrit": "11",
//         "province": "ALGER"
//     },
//     {
//         "id": 4221,
//         "bureaux": "1",
//         "code": "11 04 01 01",
//         "inscrit": "172",
//         "province": "COTONOU"
//     },
//     {
//         "id": 4222,
//         "bureaux": "1",
//         "code": "11 04 01",
//         "inscrit": "172",
//         "province": "COTONOU"
//     },
//     {
//         "id": 4223,
//         "bureaux": "1",
//         "code": "11 05 01 01",
//         "inscrit": "73",
//         "province": "OUAGADOUGOU-AMBASSADE DU GABON"
//     },
//     {
//         "id": 4224,
//         "bureaux": "1",
//         "code": "11 05 01",
//         "inscrit": "73",
//         "province": "OUAGADOUGOU"
//     },
//     {
//         "id": 4225,
//         "bureaux": "1",
//         "code": "11 06 01 01",
//         "inscrit": "110",
//         "province": "ABIDJAN - AMBASSADE DU GABON"
//     },
//     {
//         "id": 4226,
//         "bureaux": "1",
//         "code": "11 06 01",
//         "inscrit": "110",
//         "province": "ABIDJAN"
//     },
//     {
//         "id": 4227,
//         "bureaux": "1",
//         "code": "11 07 01 01",
//         "inscrit": "218",
//         "province": "YAOUNDE-AMBASSADE DU GABON"
//     },
//     {
//         "id": 4228,
//         "bureaux": "1",
//         "code": "11 07 02 01",
//         "inscrit": "58",
//         "province": "DOUALA"
//     },
//     {
//         "id": 4229,
//         "bureaux": "1",
//         "code": "11 07 01",
//         "inscrit": "218",
//         "province": "YAOUNDE"
//     },
//     {
//         "id": 4230,
//         "bureaux": "1",
//         "code": "11 07 02",
//         "inscrit": "58",
//         "province": "DOUALA"
//     },
//     {
//         "id": 4231,
//         "bureaux": "1",
//         "code": "11 08 01 01",
//         "inscrit": "74",
//         "province": "BRAZZAVILLE-AMBASSADE DU GABON"
//     },
//     {
//         "id": 4232,
//         "bureaux": "1",
//         "code": "11 08 02 01",
//         "inscrit": "12",
//         "province": "POINTE-NOIRE"
//     },
//     {
//         "id": 4233,
//         "bureaux": "1",
//         "code": "11 08 01",
//         "inscrit": "74",
//         "province": "BRAZZAVILLE"
//     },
//     {
//         "id": 4234,
//         "bureaux": "1",
//         "code": "11 08 02",
//         "inscrit": "12",
//         "province": "POINTE-NOIRE"
//     },
//     {
//         "id": 4235,
//         "bureaux": "1",
//         "code": "11 09 01 01",
//         "inscrit": "410",
//         "province": "ACCRA AMBASSADE DU GABON"
//     },
//     {
//         "id": 4236,
//         "bureaux": "1",
//         "code": "11 09 01",
//         "inscrit": "410",
//         "province": "ACCRA"
//     },
//     {
//         "id": 4237,
//         "bureaux": "1",
//         "code": "11 10 01 01",
//         "inscrit": "25",
//         "province": "LE CAIRE - AMBASSADE DU GABON"
//     },
//     {
//         "id": 4238,
//         "bureaux": "1",
//         "code": "11 10 01",
//         "inscrit": "25",
//         "province": "CAIRE"
//     },
//     {
//         "id": 4239,
//         "bureaux": "1",
//         "code": "11 11 01 01",
//         "inscrit": "25",
//         "province": "AMBASSADE DU GABON"
//     },
//     {
//         "id": 4240,
//         "bureaux": "1",
//         "code": "11 11 01",
//         "inscrit": "25",
//         "province": "ADDIS-ABEBA"
//     },
//     {
//         "id": 4241,
//         "bureaux": "1",
//         "code": "11 12 01 01",
//         "inscrit": "95",
//         "province": "BAMAKO - AMBASSADE DU GABON"
//     },
//     {
//         "id": 4242,
//         "bureaux": "1",
//         "code": "11 12 01",
//         "inscrit": "95",
//         "province": "BAMAKO"
//     },
//     {
//         "id": 4243,
//         "bureaux": "1",
//         "code": "11 13 01 01",
//         "inscrit": "196",
//         "province": "LOME -  AMBASSADE DU GABON"
//     },
//     {
//         "id": 4244,
//         "bureaux": "1",
//         "code": "11 13 01",
//         "inscrit": "196",
//         "province": "LOME"
//     },
//     {
//         "id": 4245,
//         "bureaux": "1",
//         "code": "11 14 01 01",
//         "inscrit": "11",
//         "province": "NIAMEY - AMBASSADE DU GABON"
//     },
//     {
//         "id": 4246,
//         "bureaux": "1",
//         "code": "11 14 01",
//         "inscrit": "11",
//         "province": "NYAMEY"
//     },
//     {
//         "id": 4247,
//         "bureaux": "1",
//         "code": "11 15 01 01",
//         "inscrit": "69",
//         "province": "MALABO-AMBASSADE DU GABON"
//     },
//     {
//         "id": 4248,
//         "bureaux": "1",
//         "code": "11 15 02 01",
//         "inscrit": "149",
//         "province": "BATA"
//     },
//     {
//         "id": 4249,
//         "bureaux": "1",
//         "code": "11 15 01",
//         "inscrit": "69",
//         "province": "MALABO"
//     },
//     {
//         "id": 4250,
//         "bureaux": "1",
//         "code": "11 15 02",
//         "inscrit": "149",
//         "province": "BATA"
//     },
//     {
//         "id": 4251,
//         "bureaux": "1",
//         "code": "11 16 01 01",
//         "inscrit": "86",
//         "province": "TUNIS-AMBASSADE DU GABON"
//     },
//     {
//         "id": 4252,
//         "bureaux": "1",
//         "code": "11 16 01",
//         "inscrit": "86",
//         "province": "TUNIS"
//     },
//     {
//         "id": 4253,
//         "bureaux": "1",
//         "code": "11 17 01 01",
//         "inscrit": "238",
//         "province": "RABAT"
//     },
//     {
//         "id": 4254,
//         "bureaux": "1",
//         "code": "11 17 05 01",
//         "inscrit": "17",
//         "province": "AGADIR"
//     },
//     {
//         "id": 4255,
//         "bureaux": "1",
//         "code": "11 17 06 01",
//         "inscrit": "18",
//         "province": "TANGER"
//     },
//     {
//         "id": 4256,
//         "bureaux": "1",
//         "code": "11 17 07 01",
//         "inscrit": "24",
//         "province": "FES(FEZ)"
//     },
//     {
//         "id": 4257,
//         "bureaux": "1",
//         "code": "11 17 01",
//         "inscrit": "238",
//         "province": "RABAT"
//     },
//     {
//         "id": 4258,
//         "bureaux": "1",
//         "code": "11 17 02",
//         "inscrit": "314",
//         "province": "CASABLANCA"
//     },
//     {
//         "id": 4259,
//         "bureaux": "1",
//         "code": "11 17 03",
//         "inscrit": "23",
//         "province": "CASABLANCA"
//     },
//     {
//         "id": 4260,
//         "bureaux": "1",
//         "code": "11 17 05",
//         "inscrit": "17",
//         "province": "AGADIR"
//     },
//     {
//         "id": 4261,
//         "bureaux": "1",
//         "code": "11 17 06",
//         "inscrit": "18",
//         "province": "TANGER"
//     },
//     {
//         "id": 4262,
//         "bureaux": "1",
//         "code": "11 17 07",
//         "inscrit": "24",
//         "province": "FES(FEZ)"
//     },
//     {
//         "id": 4263,
//         "bureaux": "1",
//         "code": "11 20 01 01",
//         "inscrit": "24",
//         "province": "LUANDA - AMBASSADE DU GABON"
//     },
//     {
//         "id": 4264,
//         "bureaux": "1",
//         "code": "11 20 01",
//         "inscrit": "24",
//         "province": "LUANDA"
//     },
//     {
//         "id": 4265,
//         "bureaux": "1",
//         "code": "11 22 01 01",
//         "inscrit": "14",
//         "province": "SAO TOME - AMBASSADE DU GABON"
//     },
//     {
//         "id": 4266,
//         "bureaux": "1",
//         "code": "11 22 01",
//         "inscrit": "14",
//         "province": "SAO TOME"
//     },
//     {
//         "id": 4267,
//         "bureaux": "2",
//         "code": "11 23 01 01",
//         "inscrit": "960",
//         "province": "DAKAR - AMBASSADE DU GABON"
//     },
//     {
//         "id": 4268,
//         "bureaux": "2",
//         "code": "11 23 01",
//         "inscrit": "960",
//         "province": "DAKAR"
//     },
//     {
//         "id": 4269,
//         "bureaux": "1",
//         "code": "11 24 01 01",
//         "inscrit": "22",
//         "province": "ABUDJA"
//     },
//     {
//         "id": 4270,
//         "bureaux": "1",
//         "code": "11 24 01",
//         "inscrit": "22",
//         "province": "ABUDJA"
//     },
//     {
//         "id": 4271,
//         "bureaux": "1",
//         "code": "11 27 01 01",
//         "inscrit": "63",
//         "province": "KINSHASA - AMBASSADE DU GABON"
//     },
//     {
//         "id": 4272,
//         "bureaux": "1",
//         "code": "11 27 01",
//         "inscrit": "63",
//         "province": "KINSHASA"
//     },
//     {
//         "id": 4273,
//         "bureaux": "1",
//         "code": "11 30 01 01",
//         "inscrit": "34",
//         "province": "AMBASSADE DU GABON"
//     },
//     {
//         "id": 4274,
//         "bureaux": "1",
//         "code": "11 30 01",
//         "inscrit": "34",
//         "province": "CONAKRY"
//     },
//     {
//         "id": 4275,
//         "bureaux": "1",
//         "code": "11 33 01 01",
//         "inscrit": "7",
//         "province": "ANTANANARIVO - AMBASSADE DU GABON"
//     },
//     {
//         "id": 4276,
//         "bureaux": "1",
//         "code": "11 33 01",
//         "inscrit": "7",
//         "province": "ANTANANARIVO"
//     },
//     {
//         "id": 4277,
//         "bureaux": "5",
//         "code": "1,101",
//         "inscrit": "448",
//         "province": "AFRIQUE DU SUD"
//     },
//     {
//         "id": 4278,
//         "bureaux": "1",
//         "code": "1,102",
//         "inscrit": "11",
//         "province": "ALGERIE"
//     },
//     {
//         "id": 4279,
//         "bureaux": "1",
//         "code": "1,104",
//         "inscrit": "172",
//         "province": "BENIN"
//     },
//     {
//         "id": 4280,
//         "bureaux": "1",
//         "code": "1,105",
//         "inscrit": "73",
//         "province": "BOURKINA FASO"
//     },
//     {
//         "id": 4281,
//         "bureaux": "1",
//         "code": "1,106",
//         "inscrit": "110",
//         "province": "COTE-DIVOIRE"
//     },
//     {
//         "id": 4282,
//         "bureaux": "2",
//         "code": "1,107",
//         "inscrit": "276",
//         "province": "CAMEROUN"
//     },
//     {
//         "id": 4283,
//         "bureaux": "2",
//         "code": "1,108",
//         "inscrit": "86",
//         "province": "CONGO-BRAZZAVILLE"
//     },
//     {
//         "id": 4284,
//         "bureaux": "1",
//         "code": "1,109",
//         "inscrit": "410",
//         "province": "GHANA"
//     },
//     {
//         "id": 4285,
//         "bureaux": "1",
//         "code": "1,110",
//         "inscrit": "25",
//         "province": "EGYPTE"
//     },
//     {
//         "id": 4286,
//         "bureaux": "1",
//         "code": "1,111",
//         "inscrit": "25",
//         "province": "ETHIOPIE"
//     },
//     {
//         "id": 4287,
//         "bureaux": "1",
//         "code": "1,112",
//         "inscrit": "95",
//         "province": "MALI"
//     },
//     {
//         "id": 4288,
//         "bureaux": "1",
//         "code": "1,113",
//         "inscrit": "196",
//         "province": "TOGO"
//     },
//     {
//         "id": 4289,
//         "bureaux": "1",
//         "code": "1,114",
//         "inscrit": "11",
//         "province": "NIGER"
//     },
//     {
//         "id": 4290,
//         "bureaux": "2",
//         "code": "1,115",
//         "inscrit": "218",
//         "province": "GUINEE EQUATORIALE"
//     },
//     {
//         "id": 4291,
//         "bureaux": "1",
//         "code": "1,116",
//         "inscrit": "86",
//         "province": "TUNISIE"
//     },
//     {
//         "id": 4292,
//         "bureaux": "6",
//         "code": "1,117",
//         "inscrit": "634",
//         "province": "MAROC"
//     },
//     {
//         "id": 4293,
//         "bureaux": "1",
//         "code": "1,120",
//         "inscrit": "24",
//         "province": "ANGOLA"
//     },
//     {
//         "id": 4294,
//         "bureaux": "1",
//         "code": "1,122",
//         "inscrit": "14",
//         "province": "SAO TOME ET PRINCIPE"
//     },
//     {
//         "id": 4295,
//         "bureaux": "2",
//         "code": "1,123",
//         "inscrit": "960",
//         "province": "SENEGAL"
//     },
//     {
//         "id": 4296,
//         "bureaux": "1",
//         "code": "1,124",
//         "inscrit": "22",
//         "province": "NIGERIA"
//     },
//     {
//         "id": 4297,
//         "bureaux": "1",
//         "code": "1,127",
//         "inscrit": "63",
//         "province": "CONGO-KINSHASA"
//     },
//     {
//         "id": 4298,
//         "bureaux": "1",
//         "code": "1,130",
//         "inscrit": "34",
//         "province": "GUINEE CONAKRY"
//     },
//     {
//         "id": 4299,
//         "bureaux": "23",
//         "code": "09 01 01",
//         "inscrit": "6,511",
//         "province": "1ER  ARRONDISSEMENT"
//     },
//     {
//         "id": 4300,
//         "bureaux": "23",
//         "code": "09 01 02",
//         "inscrit": "7,609",
//         "province": "2EME ARRONDISSEMENT"
//     },
//     {
//         "id": 4301,
//         "bureaux": "1",
//         "code": "09 02 01 01",
//         "inscrit": "211",
//         "province": "ZANANGOUE"
//     },
//     {
//         "id": 4302,
//         "bureaux": "1",
//         "code": "09 02 01 02",
//         "inscrit": "169",
//         "province": "ALLOUME"
//     },
//     {
//         "id": 4303,
//         "bureaux": "1",
//         "code": "09 02 01 03",
//         "inscrit": "105",
//         "province": "BISSOCK III"
//     },
//     {
//         "id": 4304,
//         "bureaux": "1",
//         "code": "09 02 01 04",
//         "inscrit": "194",
//         "province": "ELLELEM I"
//     },
//     {
//         "id": 4305,
//         "bureaux": "1",
//         "code": "09 02 01 05",
//         "inscrit": "68",
//         "province": "ESSONG-ABAM II"
//     },
//     {
//         "id": 4306,
//         "bureaux": "1",
//         "code": "09 02 01 06",
//         "inscrit": "37",
//         "province": "MFOUL-ESSABANG"
//     },
//     {
//         "id": 4307,
//         "bureaux": "1",
//         "code": "09 02 01 07",
//         "inscrit": "231",
//         "province": "AKAM I"
//     },
//     {
//         "id": 4308,
//         "bureaux": "1",
//         "code": "09 02 01 08",
//         "inscrit": "117",
//         "province": "AKOMASSI"
//     },
//     {
//         "id": 4309,
//         "bureaux": "1",
//         "code": "09 02 01 09",
//         "inscrit": "150",
//         "province": "ABANG-VILLE"
//     },
//     {
//         "id": 4310,
//         "bureaux": "1",
//         "code": "09 02 01 10",
//         "inscrit": "200",
//         "province": "NDONGOLO I"
//     },
//     {
//         "id": 4311,
//         "bureaux": "1",
//         "code": "09 02 01 11",
//         "inscrit": "89",
//         "province": "UNION VILLE"
//     },
//     {
//         "id": 4312,
//         "bureaux": "1",
//         "code": "09 02 01 12",
//         "inscrit": "122",
//         "province": "ABELASSI"
//     },
//     {
//         "id": 4313,
//         "bureaux": "1",
//         "code": "09 02 01 13",
//         "inscrit": "37",
//         "province": "ANIANE I"
//     },
//     {
//         "id": 4314,
//         "bureaux": "1",
//         "code": "09 02 01 14",
//         "inscrit": "114",
//         "province": "EKOUMOLONG"
//     },
//     {
//         "id": 4315,
//         "bureaux": "1",
//         "code": "09 02 01 15",
//         "inscrit": "167",
//         "province": "MVANE-YEBIMVE"
//     },
//     {
//         "id": 4316,
//         "bureaux": "1",
//         "code": "09 02 01 16",
//         "inscrit": "111",
//         "province": "ANGONEFITE"
//     },
//     {
//         "id": 4317,
//         "bureaux": "1",
//         "code": "09 02 01 17",
//         "inscrit": "69",
//         "province": "ANIANE II"
//     },
//     {
//         "id": 4318,
//         "bureaux": "1",
//         "code": "09 02 02 01",
//         "inscrit": "181",
//         "province": "ELOP"
//     },
//     {
//         "id": 4319,
//         "bureaux": "1",
//         "code": "09 02 02 02",
//         "inscrit": "130",
//         "province": "BIBASSE"
//     },
//     {
//         "id": 4320,
//         "bureaux": "1",
//         "code": "09 02 02 03",
//         "inscrit": "119",
//         "province": "MBAM-ASSEGMA"
//     },
//     {
//         "id": 4321,
//         "bureaux": "1",
//         "code": "09 02 02 04",
//         "inscrit": "268",
//         "province": "NKOUT"
//     },
//     {
//         "id": 4322,
//         "bureaux": "1",
//         "code": "09 02 02 05",
//         "inscrit": "93",
//         "province": "MBOUNANEVILLE"
//     },
//     {
//         "id": 4323,
//         "bureaux": "1",
//         "code": "09 02 02 06",
//         "inscrit": "174",
//         "province": "NKOLABONA 1"
//     },
//     {
//         "id": 4324,
//         "bureaux": "1",
//         "code": "09 02 02 07",
//         "inscrit": "129",
//         "province": "ALENE-MEBOUM"
//     },
//     {
//         "id": 4325,
//         "bureaux": "1",
//         "code": "09 02 02 08",
//         "inscrit": "124",
//         "province": "NKOUGOU"
//     },
//     {
//         "id": 4326,
//         "bureaux": "1",
//         "code": "09 02 02 09",
//         "inscrit": "97",
//         "province": "ASSOCK-BEGUE"
//     },
//     {
//         "id": 4327,
//         "bureaux": "1",
//         "code": "09 02 02 10",
//         "inscrit": "110",
//         "province": "NKOLABONA 2"
//     },
//     {
//         "id": 4328,
//         "bureaux": "1",
//         "code": "09 02 02 11",
//         "inscrit": "100",
//         "province": "NDZEG-ENGONG"
//     },
//     {
//         "id": 4329,
//         "bureaux": "1",
//         "code": "09 02 02 12",
//         "inscrit": "62",
//         "province": "CHANTIER BORDAMUR"
//     },
//     {
//         "id": 4330,
//         "bureaux": "1",
//         "code": "09 02 03 01",
//         "inscrit": "112",
//         "province": "NKOLAYOP-NKODJE"
//     },
//     {
//         "id": 4331,
//         "bureaux": "1",
//         "code": "09 02 03 02",
//         "inscrit": "182",
//         "province": "ZOGONGONE"
//     },
//     {
//         "id": 4332,
//         "bureaux": "1",
//         "code": "09 02 03 03",
//         "inscrit": "243",
//         "province": "AFENANE"
//     },
//     {
//         "id": 4333,
//         "bureaux": "1",
//         "code": "09 02 03 04",
//         "inscrit": "259",
//         "province": "ENDAMA-ESSANGUI"
//     },
//     {
//         "id": 4334,
//         "bureaux": "1",
//         "code": "09 02 03 05",
//         "inscrit": "173",
//         "province": "ANGUIA"
//     },
//     {
//         "id": 4335,
//         "bureaux": "1",
//         "code": "09 02 03 06",
//         "inscrit": "149",
//         "province": "ABAM-EBA A"
//     },
//     {
//         "id": 4336,
//         "bureaux": "1",
//         "code": "09 02 03 07",
//         "inscrit": "256",
//         "province": "ASSOK-MEDZENG"
//     },
//     {
//         "id": 4337,
//         "bureaux": "1",
//         "code": "09 02 03 08",
//         "inscrit": "140",
//         "province": "ALENE-ESSONG"
//     },
//     {
//         "id": 4338,
//         "bureaux": "1",
//         "code": "09 02 03 09",
//         "inscrit": "142",
//         "province": "MENDOK"
//     },
//     {
//         "id": 4339,
//         "bureaux": "1",
//         "code": "09 02 03 10",
//         "inscrit": "251",
//         "province": "EBIANE-VILLE"
//     },
//     {
//         "id": 4340,
//         "bureaux": "1",
//         "code": "09 02 03 11",
//         "inscrit": "194",
//         "province": "TOULON-VILLE"
//     },
//     {
//         "id": 4341,
//         "bureaux": "1",
//         "code": "09 02 03 12",
//         "inscrit": "146",
//         "province": "MBOLEZOK"
//     },
//     {
//         "id": 4342,
//         "bureaux": "1",
//         "code": "09 02 03 13",
//         "inscrit": "185",
//         "province": "MELENE-MINKAGA"
//     },
//     {
//         "id": 4343,
//         "bureaux": "1",
//         "code": "09 02 04 01",
//         "inscrit": "158",
//         "province": "MIYELE"
//     },
//     {
//         "id": 4344,
//         "bureaux": "1",
//         "code": "09 02 04 02",
//         "inscrit": "80",
//         "province": "MEKAK-BILOSSI"
//     },
//     {
//         "id": 4345,
//         "bureaux": "1",
//         "code": "09 02 04 03",
//         "inscrit": "119",
//         "province": "ADZAP"
//     },
//     {
//         "id": 4346,
//         "bureaux": "1",
//         "code": "09 02 04 04",
//         "inscrit": "98",
//         "province": "MEKOMO (NKODJE)"
//     },
//     {
//         "id": 4347,
//         "bureaux": "1",
//         "code": "09 02 04 05",
//         "inscrit": "246",
//         "province": "AKAM (ESSATOUK)"
//     },
//     {
//         "id": 4348,
//         "bureaux": "1",
//         "code": "09 02 04 06",
//         "inscrit": "210",
//         "province": "MBOMO"
//     },
//     {
//         "id": 4349,
//         "bureaux": "1",
//         "code": "09 02 04 07",
//         "inscrit": "116",
//         "province": "MBAA-ESSANGUI"
//     },
//     {
//         "id": 4350,
//         "bureaux": "1",
//         "code": "09 02 04 08",
//         "inscrit": "72",
//         "province": "OBOUT-VILLE"
//     },
//     {
//         "id": 4351,
//         "bureaux": "1",
//         "code": "09 02 04 09",
//         "inscrit": "113",
//         "province": "THO-EFFACK"
//     },
//     {
//         "id": 4352,
//         "bureaux": "1",
//         "code": "09 02 04 10",
//         "inscrit": "185",
//         "province": "MFEIGNE-EFFACK"
//     },
//     {
//         "id": 4353,
//         "bureaux": "1",
//         "code": "09 02 04 11",
//         "inscrit": "48",
//         "province": "ESSOMO-YEFFA (ADZAP)"
//     },
//     {
//         "id": 4354,
//         "bureaux": "1",
//         "code": "09 02 04 12",
//         "inscrit": "106",
//         "province": "AKOK"
//     },
//     {
//         "id": 4355,
//         "bureaux": "1",
//         "code": "09 02 04 13",
//         "inscrit": "110",
//         "province": "ANGANG"
//     },
//     {
//         "id": 4356,
//         "bureaux": "1",
//         "code": "09 02 04 15",
//         "inscrit": "163",
//         "province": "NKOUME NKODJE"
//     },
//     {
//         "id": 4357,
//         "bureaux": "1",
//         "code": "09 02 04 16",
//         "inscrit": "23",
//         "province": "BIYENE"
//     },
//     {
//         "id": 4358,
//         "bureaux": "1",
//         "code": "09 02 04 17",
//         "inscrit": "45",
//         "province": "ADZAP YEFFA"
//     },
//     {
//         "id": 4359,
//         "bureaux": "1",
//         "code": "09 02 04 18",
//         "inscrit": "58",
//         "province": "OBOUT METOME"
//     },
//     {
//         "id": 4360,
//         "bureaux": "1",
//         "code": "09 02 04 19",
//         "inscrit": "32",
//         "province": "ASSOK NYE"
//     },
//     {
//         "id": 4361,
//         "bureaux": "1",
//         "code": "09 02 04 20",
//         "inscrit": "73",
//         "province": "EBENGONE"
//     },
//     {
//         "id": 4362,
//         "bureaux": "1",
//         "code": "09 02 04 21",
//         "inscrit": "68",
//         "province": "ADZAP NKODJE"
//     },
//     {
//         "id": 4363,
//         "bureaux": "1",
//         "code": "09 02 04 22",
//         "inscrit": "39",
//         "province": "BENGOYE"
//     },
//     {
//         "id": 4364,
//         "bureaux": "1",
//         "code": "09 02 04 23",
//         "inscrit": "23",
//         "province": "ANDOME MENDOUNG"
//     },
//     {
//         "id": 4365,
//         "bureaux": "1",
//         "code": "09 02 04 24",
//         "inscrit": "58",
//         "province": "DZOBETE MBELE"
//     },
//     {
//         "id": 4366,
//         "bureaux": "1",
//         "code": "09 02 04 25",
//         "inscrit": "73",
//         "province": "MBAA MIYEMAME"
//     },
//     {
//         "id": 4367,
//         "bureaux": "1",
//         "code": "09 02 04 26",
//         "inscrit": "71",
//         "province": "MVANE EFFACK"
//     },
//     {
//         "id": 4368,
//         "bureaux": "1",
//         "code": "09 02 04 27",
//         "inscrit": "19",
//         "province": "BILOSSI"
//     },
//     {
//         "id": 4369,
//         "bureaux": "1",
//         "code": "09 02 05 01",
//         "inscrit": "60",
//         "province": "MBENGA"
//     },
//     {
//         "id": 4370,
//         "bureaux": "1",
//         "code": "09 02 05 02",
//         "inscrit": "73",
//         "province": "NKANG"
//     },
//     {
//         "id": 4371,
//         "bureaux": "1",
//         "code": "09 02 05 03",
//         "inscrit": "97",
//         "province": "NKARZOK"
//     },
//     {
//         "id": 4372,
//         "bureaux": "1",
//         "code": "09 02 05 04",
//         "inscrit": "57",
//         "province": "NKOMELENE-ASSAS"
//     },
//     {
//         "id": 4373,
//         "bureaux": "1",
//         "code": "09 02 05 05",
//         "inscrit": "59",
//         "province": "AVAZOK"
//     },
//     {
//         "id": 4374,
//         "bureaux": "1",
//         "code": "09 02 05 06",
//         "inscrit": "53",
//         "province": "AKOK-MBONG-SEME"
//     },
//     {
//         "id": 4375,
//         "bureaux": "1",
//         "code": "09 02 05 07",
//         "inscrit": "117",
//         "province": "NKOUM-MBABO"
//     },
//     {
//         "id": 4376,
//         "bureaux": "1",
//         "code": "09 02 05 08",
//         "inscrit": "132",
//         "province": "KONOSSOVILLE"
//     },
//     {
//         "id": 4377,
//         "bureaux": "1",
//         "code": "09 02 05 09",
//         "inscrit": "182",
//         "province": "SOUGOUDZAP VILLE"
//     },
//     {
//         "id": 4378,
//         "bureaux": "1",
//         "code": "09 02 05 10",
//         "inscrit": "62",
//         "province": "ABANG-MEDOUMOU"
//     },
//     {
//         "id": 4379,
//         "bureaux": "1",
//         "code": "09 02 05 11",
//         "inscrit": "70",
//         "province": "KOUMASSI"
//     },
//     {
//         "id": 4380,
//         "bureaux": "1",
//         "code": "09 02 05 12",
//         "inscrit": "171",
//         "province": "HEVEA"
//     },
//     {
//         "id": 4381,
//         "bureaux": "1",
//         "code": "09 02 05 13",
//         "inscrit": "125",
//         "province": "ATONG-VILLE"
//     },
//     {
//         "id": 4382,
//         "bureaux": "1",
//         "code": "09 02 05 14",
//         "inscrit": "231",
//         "province": "MVOMAYOP III"
//     },
//     {
//         "id": 4383,
//         "bureaux": "1",
//         "code": "09 02 05 15",
//         "inscrit": "173",
//         "province": "ABENELANG"
//     },
//     {
//         "id": 4384,
//         "bureaux": "1",
//         "code": "09 02 05 16",
//         "inscrit": "42",
//         "province": "EBEIGNE HOPITAL"
//     },
//     {
//         "id": 4385,
//         "bureaux": "1",
//         "code": "09 02 05 17",
//         "inscrit": "46",
//         "province": "ESSONG-NEDZONE"
//     },
//     {
//         "id": 4386,
//         "bureaux": "1",
//         "code": "09 02 05 18",
//         "inscrit": "52",
//         "province": "NKOMELENE II-III"
//     },
//     {
//         "id": 4387,
//         "bureaux": "1",
//         "code": "09 02 05 19",
//         "inscrit": "43",
//         "province": "ABENELANG II"
//     },
//     {
//         "id": 4388,
//         "bureaux": "17",
//         "code": "09 02 01",
//         "inscrit": "2,191",
//         "province": "BISSOCK"
//     },
//     {
//         "id": 4389,
//         "bureaux": "12",
//         "code": "09 02 02",
//         "inscrit": "1,587",
//         "province": "ELLELEM"
//     },
//     {
//         "id": 4390,
//         "bureaux": "13",
//         "code": "09 02 03",
//         "inscrit": "2,432",
//         "province": "KYE"
//     },
//     {
//         "id": 4391,
//         "bureaux": "26",
//         "code": "09 02 04",
//         "inscrit": "2,406",
//         "province": "NYE"
//     },
//     {
//         "id": 4392,
//         "bureaux": "19",
//         "code": "09 02 05",
//         "inscrit": "1,845",
//         "province": "WOLEU"
//     },
//     {
//         "id": 4393,
//         "bureaux": "2",
//         "code": "09 03 00 01",
//         "inscrit": "604",
//         "province": "ECOLE PRIVEE PROTEST AYANANGA"
//     },
//     {
//         "id": 4394,
//         "bureaux": "1",
//         "code": "09 03 00 02",
//         "inscrit": "284",
//         "province": "ECOLE PUBLIQUE MISSELE"
//     },
//     {
//         "id": 4395,
//         "bureaux": "1",
//         "code": "09 03 00 03",
//         "inscrit": "311",
//         "province": "C.E.B."
//     },
//     {
//         "id": 4396,
//         "bureaux": "2",
//         "code": "09 03 00 04",
//         "inscrit": "773",
//         "province": "CERCLE CULTUREL"
//     },
//     {
//         "id": 4397,
//         "bureaux": "1",
//         "code": "09 03 00 05",
//         "inscrit": "455",
//         "province": "ECOLE FOYER PROTESTANT"
//     },
//     {
//         "id": 4398,
//         "bureaux": "2",
//         "code": "09 03 00 06",
//         "inscrit": "655",
//         "province": "LYCEE S. OYONO ABAA"
//     },
//     {
//         "id": 4399,
//         "bureaux": "2",
//         "code": "09 03 00 07",
//         "inscrit": "547",
//         "province": "EC.COMMUNALE MBAFANE"
//     },
//     {
//         "id": 4400,
//         "bureaux": "1",
//         "code": "09 03 00 08",
//         "inscrit": "500",
//         "province": "CENTRE SOCIAL"
//     },
//     {
//         "id": 4401,
//         "bureaux": "2",
//         "code": "09 03 00 09",
//         "inscrit": "515",
//         "province": "ECOLE PUBLIQUE AGNIZOK"
//     },
//     {
//         "id": 4402,
//         "bureaux": "1",
//         "code": "09 03 00 10",
//         "inscrit": "434",
//         "province": "EC. PRIVEE CATH. MIMBANG"
//     },
//     {
//         "id": 4403,
//         "bureaux": "1",
//         "code": "09 03 00 11",
//         "inscrit": "144",
//         "province": "ECOLE COMMUNALE CENTRE"
//     },
//     {
//         "id": 4404,
//         "bureaux": "2",
//         "code": "09 03 00 12",
//         "inscrit": "515",
//         "province": "PRE-SCOLAIRE PROTESTANT"
//     },
//     {
//         "id": 4405,
//         "bureaux": "1",
//         "code": "09 03 00 13",
//         "inscrit": "433",
//         "province": "MENGOMO-AYAT"
//     },
//     {
//         "id": 4406,
//         "bureaux": "1",
//         "code": "09 03 00 14",
//         "inscrit": "443",
//         "province": "ECOLE CORANIQUE"
//     },
//     {
//         "id": 4407,
//         "bureaux": "20",
//         "code": "09 03 00",
//         "inscrit": "6,613",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 4408,
//         "bureaux": "1",
//         "code": "09 04 01 01",
//         "inscrit": "322",
//         "province": "BINKONDOME"
//     },
//     {
//         "id": 4409,
//         "bureaux": "1",
//         "code": "09 04 01 02",
//         "inscrit": "88",
//         "province": "OFFOS"
//     },
//     {
//         "id": 4410,
//         "bureaux": "1",
//         "code": "09 04 01 03",
//         "inscrit": "114",
//         "province": "MEZALA"
//     },
//     {
//         "id": 4411,
//         "bureaux": "1",
//         "code": "09 04 01 04",
//         "inscrit": "48",
//         "province": "MEYO-ESSOBAME-ANAMA"
//     },
//     {
//         "id": 4412,
//         "bureaux": "1",
//         "code": "09 04 01 05",
//         "inscrit": "88",
//         "province": "MBIYOP-DOANE"
//     },
//     {
//         "id": 4413,
//         "bureaux": "1",
//         "code": "09 04 01 06",
//         "inscrit": "83",
//         "province": "WOUMOU"
//     },
//     {
//         "id": 4414,
//         "bureaux": "1",
//         "code": "09 04 01 07",
//         "inscrit": "100",
//         "province": "NKOK-EBE-EFFACK"
//     },
//     {
//         "id": 4415,
//         "bureaux": "1",
//         "code": "09 04 01 08",
//         "inscrit": "133",
//         "province": "MEYO-NKODJOE"
//     },
//     {
//         "id": 4416,
//         "bureaux": "1",
//         "code": "09 04 01 09",
//         "inscrit": "97",
//         "province": "MELO"
//     },
//     {
//         "id": 4417,
//         "bureaux": "1",
//         "code": "09 04 01 10",
//         "inscrit": "39",
//         "province": "GNAZANG"
//     },
//     {
//         "id": 4418,
//         "bureaux": "1",
//         "code": "09 04 01 11",
//         "inscrit": "115",
//         "province": "HEVEGAB 1"
//     },
//     {
//         "id": 4419,
//         "bureaux": "1",
//         "code": "09 04 01 12",
//         "inscrit": "54",
//         "province": "HEVEGAB 2"
//     },
//     {
//         "id": 4420,
//         "bureaux": "1",
//         "code": "09 04 01 13",
//         "inscrit": "350",
//         "province": "ZAMETSILI"
//     },
//     {
//         "id": 4421,
//         "bureaux": "1",
//         "code": "09 04 01 14",
//         "inscrit": "32",
//         "province": "EDOUM-YEMESSOMO"
//     },
//     {
//         "id": 4422,
//         "bureaux": "1",
//         "code": "09 04 01 15",
//         "inscrit": "73",
//         "province": "AKAM-EBANG"
//     },
//     {
//         "id": 4423,
//         "bureaux": "1",
//         "code": "09 04 01 16",
//         "inscrit": "61",
//         "province": "ANDOCK-BIBE"
//     },
//     {
//         "id": 4424,
//         "bureaux": "1",
//         "code": "09 04 01 17",
//         "inscrit": "51",
//         "province": "NKOK-EBE-EBA"
//     },
//     {
//         "id": 4425,
//         "bureaux": "1",
//         "code": "09 04 01 18",
//         "inscrit": "91",
//         "province": "ESSONE-NKODJOE"
//     },
//     {
//         "id": 4426,
//         "bureaux": "1",
//         "code": "09 04 01 19",
//         "inscrit": "104",
//         "province": "ABE-BIZANG"
//     },
//     {
//         "id": 4427,
//         "bureaux": "1",
//         "code": "09 04 02 01",
//         "inscrit": "1",
//         "province": "ABE BIZANG"
//     },
//     {
//         "id": 4428,
//         "bureaux": "1",
//         "code": "09 04 02 02",
//         "inscrit": "149",
//         "province": "MEYO-KYE"
//     },
//     {
//         "id": 4429,
//         "bureaux": "1",
//         "code": "09 04 02 03",
//         "inscrit": "104",
//         "province": "AKAM-SI"
//     },
//     {
//         "id": 4430,
//         "bureaux": "1",
//         "code": "09 04 02 04",
//         "inscrit": "48",
//         "province": "ADZAP-ESSATOP"
//     },
//     {
//         "id": 4431,
//         "bureaux": "1",
//         "code": "09 04 02 05",
//         "inscrit": "78",
//         "province": "ALOUM EFFACK"
//     },
//     {
//         "id": 4432,
//         "bureaux": "1",
//         "code": "09 04 02 06",
//         "inscrit": "117",
//         "province": "EFFACK-BIBE"
//     },
//     {
//         "id": 4433,
//         "bureaux": "1",
//         "code": "09 04 02 07",
//         "inscrit": "91",
//         "province": "NSIMI ESSENG"
//     },
//     {
//         "id": 4434,
//         "bureaux": "1",
//         "code": "09 04 02 08",
//         "inscrit": "82",
//         "province": "OVENG ESSANDONE"
//     },
//     {
//         "id": 4435,
//         "bureaux": "1",
//         "code": "09 04 02 09",
//         "inscrit": "102",
//         "province": "MEKOMO ESSANDONE-EBANG ESSAND"
//     },
//     {
//         "id": 4436,
//         "bureaux": "1",
//         "code": "09 04 02 10",
//         "inscrit": "125",
//         "province": "EBORO NTEM"
//     },
//     {
//         "id": 4437,
//         "bureaux": "1",
//         "code": "09 04 02 11",
//         "inscrit": "88",
//         "province": "NKOUM EDOUM"
//     },
//     {
//         "id": 4438,
//         "bureaux": "1",
//         "code": "09 04 02 12",
//         "inscrit": "72",
//         "province": "MENDOUMA ESSAGUI"
//     },
//     {
//         "id": 4439,
//         "bureaux": "1",
//         "code": "09 04 02 13",
//         "inscrit": "50",
//         "province": "MEDOUNOU ESSENG"
//     },
//     {
//         "id": 4440,
//         "bureaux": "1",
//         "code": "09 04 02 14",
//         "inscrit": "65",
//         "province": "ALENE EFOULANE"
//     },
//     {
//         "id": 4441,
//         "bureaux": "1",
//         "code": "09 04 02 15",
//         "inscrit": "59",
//         "province": "GNABOME-BIKAS"
//     },
//     {
//         "id": 4442,
//         "bureaux": "1",
//         "code": "09 04 02 16",
//         "inscrit": "114",
//         "province": "MEKOMO-ESSENG"
//     },
//     {
//         "id": 4443,
//         "bureaux": "1",
//         "code": "09 04 02 17",
//         "inscrit": "169",
//         "province": "MAAMENI"
//     },
//     {
//         "id": 4444,
//         "bureaux": "1",
//         "code": "09 04 02 18",
//         "inscrit": "66",
//         "province": "MIMBANG EFFACK"
//     },
//     {
//         "id": 4445,
//         "bureaux": "1",
//         "code": "09 04 02 19",
//         "inscrit": "135",
//         "province": "ADZAP EFFACK"
//     },
//     {
//         "id": 4446,
//         "bureaux": "1",
//         "code": "09 04 02 20",
//         "inscrit": "127",
//         "province": "NKOLMENGOUA"
//     },
//     {
//         "id": 4447,
//         "bureaux": "1",
//         "code": "09 04 02 21",
//         "inscrit": "84",
//         "province": "MELEP"
//     },
//     {
//         "id": 4448,
//         "bureaux": "1",
//         "code": "09 04 02 22",
//         "inscrit": "75",
//         "province": "MENDOUMA EFFACK"
//     },
//     {
//         "id": 4449,
//         "bureaux": "1",
//         "code": "09 04 02 23",
//         "inscrit": "98",
//         "province": "EWONG"
//     },
//     {
//         "id": 4450,
//         "bureaux": "1",
//         "code": "09 04 02 24",
//         "inscrit": "53",
//         "province": "NKOK-LOA"
//     },
//     {
//         "id": 4451,
//         "bureaux": "1",
//         "code": "09 04 02 25",
//         "inscrit": "45",
//         "province": "AKOME-ESSAKORANE"
//     },
//     {
//         "id": 4452,
//         "bureaux": "1",
//         "code": "09 04 02 26",
//         "inscrit": "84",
//         "province": "MBONG ETE"
//     },
//     {
//         "id": 4453,
//         "bureaux": "1",
//         "code": "09 04 02 27",
//         "inscrit": "53",
//         "province": "EBANG-ESSANDONE"
//     },
//     {
//         "id": 4454,
//         "bureaux": "1",
//         "code": "09 04 02 28",
//         "inscrit": "50",
//         "province": "MEBAZA"
//     },
//     {
//         "id": 4455,
//         "bureaux": "1",
//         "code": "09 04 02 29",
//         "inscrit": "111",
//         "province": "MFOUMOU-EFFACK"
//     },
//     {
//         "id": 4456,
//         "bureaux": "1",
//         "code": "09 04 03 01",
//         "inscrit": "116",
//         "province": "BINDOUMESSANG"
//     },
//     {
//         "id": 4457,
//         "bureaux": "1",
//         "code": "09 04 03 02",
//         "inscrit": "5",
//         "province": "MEDOUMOU EBEING"
//     },
//     {
//         "id": 4458,
//         "bureaux": "1",
//         "code": "09 04 03 03",
//         "inscrit": "111",
//         "province": "AWEGANE"
//     },
//     {
//         "id": 4459,
//         "bureaux": "1",
//         "code": "09 04 03 04",
//         "inscrit": "128",
//         "province": "TCHIMAZOCK"
//     },
//     {
//         "id": 4460,
//         "bureaux": "1",
//         "code": "09 04 03 05",
//         "inscrit": "116",
//         "province": "ENDAMA-EFFACK"
//     },
//     {
//         "id": 4461,
//         "bureaux": "1",
//         "code": "09 04 03 06",
//         "inscrit": "81",
//         "province": "NKOL MESSAS"
//     },
//     {
//         "id": 4462,
//         "bureaux": "1",
//         "code": "09 04 03 07",
//         "inscrit": "111",
//         "province": "AKAM EFFACK"
//     },
//     {
//         "id": 4463,
//         "bureaux": "1",
//         "code": "09 04 03 08",
//         "inscrit": "114",
//         "province": "NKOLAYOP ESSATOUK"
//     },
//     {
//         "id": 4464,
//         "bureaux": "1",
//         "code": "09 04 03 09",
//         "inscrit": "331",
//         "province": "AWOUA"
//     },
//     {
//         "id": 4465,
//         "bureaux": "1",
//         "code": "09 04 03 10",
//         "inscrit": "201",
//         "province": "KONOVILLE"
//     },
//     {
//         "id": 4466,
//         "bureaux": "1",
//         "code": "09 04 03 11",
//         "inscrit": "1",
//         "province": "TOCK-ESSANDONE"
//     },
//     {
//         "id": 4467,
//         "bureaux": "1",
//         "code": "09 04 03 12",
//         "inscrit": "3",
//         "province": "ALEN ESSENG"
//     },
//     {
//         "id": 4468,
//         "bureaux": "1",
//         "code": "09 04 03 13",
//         "inscrit": "6",
//         "province": "NGOZOCK"
//     },
//     {
//         "id": 4469,
//         "bureaux": "1",
//         "code": "09 04 03 14",
//         "inscrit": "2",
//         "province": "FONG-ESSANDONE"
//     },
//     {
//         "id": 4470,
//         "bureaux": "1",
//         "code": "09 04 03 16",
//         "inscrit": "51",
//         "province": "ABANG-SI"
//     },
//     {
//         "id": 4471,
//         "bureaux": "1",
//         "code": "09 04 03 17",
//         "inscrit": "76",
//         "province": "MESSANG"
//     },
//     {
//         "id": 4472,
//         "bureaux": "1",
//         "code": "09 04 03 18",
//         "inscrit": "100",
//         "province": "ASSOK-SEND"
//     },
//     {
//         "id": 4473,
//         "bureaux": "1",
//         "code": "09 04 03 19",
//         "inscrit": "74",
//         "province": "AKOME-MENGOS"
//     },
//     {
//         "id": 4474,
//         "bureaux": "1",
//         "code": "09 04 04 01",
//         "inscrit": "89",
//         "province": "MEKAK EFFACK"
//     },
//     {
//         "id": 4475,
//         "bureaux": "1",
//         "code": "09 04 04 02",
//         "inscrit": "117",
//         "province": "BILEOSSI EBA"
//     },
//     {
//         "id": 4476,
//         "bureaux": "1",
//         "code": "09 04 04 03",
//         "inscrit": "81",
//         "province": "YANEMVE"
//     },
//     {
//         "id": 4477,
//         "bureaux": "1",
//         "code": "09 04 04 04",
//         "inscrit": "90",
//         "province": "MENDOUNG EBA"
//     },
//     {
//         "id": 4478,
//         "bureaux": "1",
//         "code": "09 04 04 05",
//         "inscrit": "313",
//         "province": "OKOK"
//     },
//     {
//         "id": 4479,
//         "bureaux": "1",
//         "code": "09 04 04 06",
//         "inscrit": "88",
//         "province": "BIBE EBA"
//     },
//     {
//         "id": 4480,
//         "bureaux": "1",
//         "code": "09 04 04 07",
//         "inscrit": "64",
//         "province": "NEB"
//     },
//     {
//         "id": 4481,
//         "bureaux": "1",
//         "code": "09 04 04 08",
//         "inscrit": "59",
//         "province": "MEKOMO EBA NKOUM"
//     },
//     {
//         "id": 4482,
//         "bureaux": "1",
//         "code": "09 04 04 09",
//         "inscrit": "105",
//         "province": "BIKOUGOU"
//     },
//     {
//         "id": 4483,
//         "bureaux": "1",
//         "code": "09 04 04 10",
//         "inscrit": "106",
//         "province": "MELENE BIKANG"
//     },
//     {
//         "id": 4484,
//         "bureaux": "1",
//         "code": "09 04 04 11",
//         "inscrit": "25",
//         "province": "TOULOUSE"
//     },
//     {
//         "id": 4485,
//         "bureaux": "1",
//         "code": "09 04 04 12",
//         "inscrit": "8",
//         "province": "BISSONG VILLE"
//     },
//     {
//         "id": 4486,
//         "bureaux": "1",
//         "code": "09 04 04 13",
//         "inscrit": "84",
//         "province": "MELENE EFFACK"
//     },
//     {
//         "id": 4487,
//         "bureaux": "1",
//         "code": "09 04 05 01",
//         "inscrit": "128",
//         "province": "TOCK ESSANDONE"
//     },
//     {
//         "id": 4488,
//         "bureaux": "1",
//         "code": "09 04 05 02",
//         "inscrit": "110",
//         "province": "ALEN ESSENG"
//     },
//     {
//         "id": 4489,
//         "bureaux": "1",
//         "code": "09 04 05 03",
//         "inscrit": "88",
//         "province": "MEDOUMOU CENTRE"
//     },
//     {
//         "id": 4490,
//         "bureaux": "1",
//         "code": "09 04 05 04",
//         "inscrit": "121",
//         "province": "NGOZOCK"
//     },
//     {
//         "id": 4491,
//         "bureaux": "1",
//         "code": "09 04 05 05",
//         "inscrit": "82",
//         "province": "OYEM ESSABEGNE OBILI VILLE"
//     },
//     {
//         "id": 4492,
//         "bureaux": "1",
//         "code": "09 04 05 06",
//         "inscrit": "40",
//         "province": "FONG ESSANDONE"
//     },
//     {
//         "id": 4493,
//         "bureaux": "1",
//         "code": "09 04 05 07",
//         "inscrit": "42",
//         "province": "MBO ESSANDONE"
//     },
//     {
//         "id": 4494,
//         "bureaux": "1",
//         "code": "09 04 05 08",
//         "inscrit": "55",
//         "province": "MVANE"
//     },
//     {
//         "id": 4495,
//         "bureaux": "1",
//         "code": "09 04 05 09",
//         "inscrit": "100",
//         "province": "MEDOUMOU EBEIGNE"
//     },
//     {
//         "id": 4496,
//         "bureaux": "1",
//         "code": "09 04 05 10",
//         "inscrit": "30",
//         "province": "MENDOMO"
//     },
//     {
//         "id": 4497,
//         "bureaux": "19",
//         "code": "09 04 01",
//         "inscrit": "2,043",
//         "province": "EKORETE (DISTRIC BIKONDOME)"
//     },
//     {
//         "id": 4498,
//         "bureaux": "29",
//         "code": "09 04 02",
//         "inscrit": "2,495",
//         "province": "NTEM I (DISTRICT MEYO-KYE)"
//     },
//     {
//         "id": 4499,
//         "bureaux": "18",
//         "code": "09 04 03",
//         "inscrit": "1,627",
//         "province": "KOUM"
//     },
//     {
//         "id": 4500,
//         "bureaux": "13",
//         "code": "09 04 04",
//         "inscrit": "1,229",
//         "province": "KESS"
//     },
//     {
//         "id": 4501,
//         "bureaux": "10",
//         "code": "09 04 05",
//         "inscrit": "796",
//         "province": "MBOAA SUD"
//     },
//     {
//         "id": 4502,
//         "bureaux": "1",
//         "code": "09 05 00 01",
//         "inscrit": "272",
//         "province": "CES CATH. MINVOUL"
//     },
//     {
//         "id": 4503,
//         "bureaux": "1",
//         "code": "09 05 00 02",
//         "inscrit": "294",
//         "province": "ECOLE PUBL. MINVOUL CENTRE"
//     },
//     {
//         "id": 4504,
//         "bureaux": "1",
//         "code": "09 05 00 03",
//         "inscrit": "282",
//         "province": "ECOLE PUBL.NGONE"
//     },
//     {
//         "id": 4505,
//         "bureaux": "1",
//         "code": "09 05 00 04",
//         "inscrit": "224",
//         "province": "ELARMINTANG"
//     },
//     {
//         "id": 4506,
//         "bureaux": "1",
//         "code": "09 05 00 05",
//         "inscrit": "381",
//         "province": "AKONTANG"
//     },
//     {
//         "id": 4507,
//         "bureaux": "5",
//         "code": "09 05 00",
//         "inscrit": "1,453",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 4508,
//         "bureaux": "1",
//         "code": "09 06 01 01",
//         "inscrit": "86",
//         "province": "MEDZONG"
//     },
//     {
//         "id": 4509,
//         "bureaux": "1",
//         "code": "09 06 01 02",
//         "inscrit": "99",
//         "province": "MIMBANG"
//     },
//     {
//         "id": 4510,
//         "bureaux": "1",
//         "code": "09 06 01 03",
//         "inscrit": "108",
//         "province": "BIBAGA"
//     },
//     {
//         "id": 4511,
//         "bureaux": "1",
//         "code": "09 06 01 04",
//         "inscrit": "95",
//         "province": "AVEBE"
//     },
//     {
//         "id": 4512,
//         "bureaux": "1",
//         "code": "09 06 01 05",
//         "inscrit": "97",
//         "province": "BILO"
//     },
//     {
//         "id": 4513,
//         "bureaux": "1",
//         "code": "09 06 01 06",
//         "inscrit": "12",
//         "province": "METOU"
//     },
//     {
//         "id": 4514,
//         "bureaux": "1",
//         "code": "09 06 01 07",
//         "inscrit": "112",
//         "province": "MINDOUMOU"
//     },
//     {
//         "id": 4515,
//         "bureaux": "1",
//         "code": "09 06 02 01",
//         "inscrit": "48",
//         "province": "MBOME"
//     },
//     {
//         "id": 4516,
//         "bureaux": "1",
//         "code": "09 06 02 02",
//         "inscrit": "259",
//         "province": "MBOUNANEVILLE"
//     },
//     {
//         "id": 4517,
//         "bureaux": "1",
//         "code": "09 06 02 03",
//         "inscrit": "214",
//         "province": "BENGUIAGA"
//     },
//     {
//         "id": 4518,
//         "bureaux": "1",
//         "code": "09 06 02 04",
//         "inscrit": "315",
//         "province": "EBOMANE I"
//     },
//     {
//         "id": 4519,
//         "bureaux": "1",
//         "code": "09 06 02 05",
//         "inscrit": "89",
//         "province": "MEYOS"
//     },
//     {
//         "id": 4520,
//         "bureaux": "1",
//         "code": "09 06 02 06",
//         "inscrit": "56",
//         "province": "AKOULOUZOCK"
//     },
//     {
//         "id": 4521,
//         "bureaux": "1",
//         "code": "09 06 02 07",
//         "inscrit": "90",
//         "province": "ASSOK"
//     },
//     {
//         "id": 4522,
//         "bureaux": "1",
//         "code": "09 06 02 08",
//         "inscrit": "71",
//         "province": "ZOGOLOUMOU"
//     },
//     {
//         "id": 4523,
//         "bureaux": "1",
//         "code": "09 06 02 09",
//         "inscrit": "193",
//         "province": "EBOMANE II"
//     },
//     {
//         "id": 4524,
//         "bureaux": "1",
//         "code": "09 06 02 10",
//         "inscrit": "82",
//         "province": "MVOLO"
//     },
//     {
//         "id": 4525,
//         "bureaux": "1",
//         "code": "09 06 03 01",
//         "inscrit": "33",
//         "province": "MELEME"
//     },
//     {
//         "id": 4526,
//         "bureaux": "1",
//         "code": "09 06 03 02",
//         "inscrit": "271",
//         "province": "BOLOSSOVILLE"
//     },
//     {
//         "id": 4527,
//         "bureaux": "1",
//         "code": "09 06 03 03",
//         "inscrit": "46",
//         "province": "BELFORT"
//     },
//     {
//         "id": 4528,
//         "bureaux": "1",
//         "code": "09 06 03 04",
//         "inscrit": "34",
//         "province": "AKOH"
//     },
//     {
//         "id": 4529,
//         "bureaux": "1",
//         "code": "09 06 03 05",
//         "inscrit": "40",
//         "province": "BOUT-ENGASS"
//     },
//     {
//         "id": 4530,
//         "bureaux": "1",
//         "code": "09 06 03 06",
//         "inscrit": "81",
//         "province": "MOMO"
//     },
//     {
//         "id": 4531,
//         "bureaux": "1",
//         "code": "09 06 03 07",
//         "inscrit": "137",
//         "province": "CENTRE-VILLE"
//     },
//     {
//         "id": 4532,
//         "bureaux": "1",
//         "code": "09 06 03 08",
//         "inscrit": "87",
//         "province": "ESSONE-BEKOUE"
//     },
//     {
//         "id": 4533,
//         "bureaux": "1",
//         "code": "09 06 03 09",
//         "inscrit": "81",
//         "province": "AYENGUENING"
//     },
//     {
//         "id": 4534,
//         "bureaux": "1",
//         "code": "09 06 03 10",
//         "inscrit": "93",
//         "province": "MEBOLO"
//     },
//     {
//         "id": 4535,
//         "bureaux": "1",
//         "code": "09 06 03 11",
//         "inscrit": "23",
//         "province": "MEYOH"
//     },
//     {
//         "id": 4536,
//         "bureaux": "1",
//         "code": "09 06 03 12",
//         "inscrit": "170",
//         "province": "AKOK"
//     },
//     {
//         "id": 4537,
//         "bureaux": "1",
//         "code": "09 06 03 13",
//         "inscrit": "62",
//         "province": "ANDOME NKOTO"
//     },
//     {
//         "id": 4538,
//         "bureaux": "1",
//         "code": "09 06 03 14",
//         "inscrit": "35",
//         "province": "BIBE-MELENE"
//     },
//     {
//         "id": 4539,
//         "bureaux": "1",
//         "code": "09 06 03 15",
//         "inscrit": "15",
//         "province": "MEMVEME"
//     },
//     {
//         "id": 4540,
//         "bureaux": "1",
//         "code": "09 06 03 16",
//         "inscrit": "23",
//         "province": "OVENG"
//     },
//     {
//         "id": 4541,
//         "bureaux": "7",
//         "code": "09 06 01",
//         "inscrit": "609",
//         "province": "NORD"
//     },
//     {
//         "id": 4542,
//         "bureaux": "10",
//         "code": "09 06 02",
//         "inscrit": "1,417",
//         "province": "SOSSOLO-NTEM"
//     },
//     {
//         "id": 4543,
//         "bureaux": "16",
//         "code": "09 06 03",
//         "inscrit": "1,231",
//         "province": "SUD (DISTRICT DE BOLOSSOVILLE"
//     },
//     {
//         "id": 4544,
//         "bureaux": "2",
//         "code": "09 07 00 01",
//         "inscrit": "615",
//         "province": "ECOLE PUBLIQUE MITZIC"
//     },
//     {
//         "id": 4545,
//         "bureaux": "2",
//         "code": "09 07 00 02",
//         "inscrit": "640",
//         "province": "ECOLE PROTESTANTE"
//     },
//     {
//         "id": 4546,
//         "bureaux": "2",
//         "code": "09 07 00 03",
//         "inscrit": "757",
//         "province": "HOPITAL"
//     },
//     {
//         "id": 4547,
//         "bureaux": "1",
//         "code": "09 07 00 04",
//         "inscrit": "481",
//         "province": "ECOLE CATHOLIQUE"
//     },
//     {
//         "id": 4548,
//         "bureaux": "1",
//         "code": "09 07 00 05",
//         "inscrit": "168",
//         "province": "METHUI"
//     },
//     {
//         "id": 4549,
//         "bureaux": "1",
//         "code": "09 07 00 06",
//         "inscrit": "180",
//         "province": "CES CATHOLIQUE"
//     },
//     {
//         "id": 4550,
//         "bureaux": "1",
//         "code": "09 07 00 07",
//         "inscrit": "266",
//         "province": "ECOLE PUBL. FEUCK SOLE"
//     },
//     {
//         "id": 4551,
//         "bureaux": "1",
//         "code": "09 07 00 08",
//         "inscrit": "109",
//         "province": "ATOUR"
//     },
//     {
//         "id": 4552,
//         "bureaux": "1",
//         "code": "09 07 00 09",
//         "inscrit": "364",
//         "province": "JARDIN DENFANT"
//     },
//     {
//         "id": 4553,
//         "bureaux": "12",
//         "code": "09 07 00",
//         "inscrit": "3,580",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 4554,
//         "bureaux": "1",
//         "code": "09 08 01 01",
//         "inscrit": "81",
//         "province": "EDOUNG-ALANG"
//     },
//     {
//         "id": 4555,
//         "bureaux": "1",
//         "code": "09 08 01 02",
//         "inscrit": "262",
//         "province": "ESSONG-VILLE"
//     },
//     {
//         "id": 4556,
//         "bureaux": "1",
//         "code": "09 08 01 03",
//         "inscrit": "83",
//         "province": "EKOUK-VILLE"
//     },
//     {
//         "id": 4557,
//         "bureaux": "1",
//         "code": "09 08 01 04",
//         "inscrit": "104",
//         "province": "EGNENG-MELENE"
//     },
//     {
//         "id": 4558,
//         "bureaux": "1",
//         "code": "09 08 01 05",
//         "inscrit": "52",
//         "province": "HEVEGAB V1 DOUM"
//     },
//     {
//         "id": 4559,
//         "bureaux": "1",
//         "code": "09 08 01 06",
//         "inscrit": "34",
//         "province": "HEVEGAB V2 BIKOUME"
//     },
//     {
//         "id": 4560,
//         "bureaux": "1",
//         "code": "09 08 02 01",
//         "inscrit": "60",
//         "province": "NKOL-AYO"
//     },
//     {
//         "id": 4561,
//         "bureaux": "1",
//         "code": "09 08 02 02",
//         "inscrit": "85",
//         "province": "MBELALENE"
//     },
//     {
//         "id": 4562,
//         "bureaux": "1",
//         "code": "09 08 02 03",
//         "inscrit": "70",
//         "province": "AKONEBE"
//     },
//     {
//         "id": 4563,
//         "bureaux": "1",
//         "code": "09 08 02 04",
//         "inscrit": "148",
//         "province": "MELENE"
//     },
//     {
//         "id": 4564,
//         "bureaux": "1",
//         "code": "09 08 02 05",
//         "inscrit": "343",
//         "province": "SAM-CENTRE"
//     },
//     {
//         "id": 4565,
//         "bureaux": "1",
//         "code": "09 08 02 06",
//         "inscrit": "79",
//         "province": "BELLE-VILLE"
//     },
//     {
//         "id": 4566,
//         "bureaux": "1",
//         "code": "09 08 02 07",
//         "inscrit": "62",
//         "province": "DOUMANDZOU"
//     },
//     {
//         "id": 4567,
//         "bureaux": "1",
//         "code": "09 08 02 08",
//         "inscrit": "251",
//         "province": "DOUALA"
//     },
//     {
//         "id": 4568,
//         "bureaux": "1",
//         "code": "09 08 02 09",
//         "inscrit": "64",
//         "province": "MEBOLE"
//     },
//     {
//         "id": 4569,
//         "bureaux": "1",
//         "code": "09 08 02 10",
//         "inscrit": "107",
//         "province": "ANGOUMA"
//     },
//     {
//         "id": 4570,
//         "bureaux": "1",
//         "code": "09 08 02 11",
//         "inscrit": "89",
//         "province": "OBOUI"
//     },
//     {
//         "id": 4571,
//         "bureaux": "1",
//         "code": "09 08 02 12",
//         "inscrit": "93",
//         "province": "LA HOLLANDE"
//     },
//     {
//         "id": 4572,
//         "bureaux": "1",
//         "code": "09 08 03 01",
//         "inscrit": "155",
//         "province": "SAKE-VILLE"
//     },
//     {
//         "id": 4573,
//         "bureaux": "1",
//         "code": "09 08 03 02",
//         "inscrit": "202",
//         "province": "MINDZI"
//     },
//     {
//         "id": 4574,
//         "bureaux": "1",
//         "code": "09 08 03 04",
//         "inscrit": "52",
//         "province": "LALARA"
//     },
//     {
//         "id": 4575,
//         "bureaux": "1",
//         "code": "09 08 03 05",
//         "inscrit": "214",
//         "province": "VIAFE"
//     },
//     {
//         "id": 4576,
//         "bureaux": "1",
//         "code": "09 08 03 06",
//         "inscrit": "31",
//         "province": "BENGUI-CHANTIER"
//     },
//     {
//         "id": 4577,
//         "bureaux": "1",
//         "code": "09 08 03 07",
//         "inscrit": "39",
//         "province": "MIANG"
//     },
//     {
//         "id": 4578,
//         "bureaux": "1",
//         "code": "09 08 03 08",
//         "inscrit": "208",
//         "province": "BABYLONE"
//     },
//     {
//         "id": 4579,
//         "bureaux": "1",
//         "code": "09 08 04 01",
//         "inscrit": "123",
//         "province": "AYANE NKAR II"
//     },
//     {
//         "id": 4580,
//         "bureaux": "1",
//         "code": "09 08 04 02",
//         "inscrit": "133",
//         "province": "ABONG-MIANG"
//     },
//     {
//         "id": 4581,
//         "bureaux": "1",
//         "code": "09 08 04 03",
//         "inscrit": "119",
//         "province": "EYINANE"
//     },
//     {
//         "id": 4582,
//         "bureaux": "1",
//         "code": "09 08 04 04",
//         "inscrit": "134",
//         "province": "MINKO-MI-BE"
//     },
//     {
//         "id": 4583,
//         "bureaux": "1",
//         "code": "09 08 04 05",
//         "inscrit": "91",
//         "province": "NSANG-ENGONG"
//     },
//     {
//         "id": 4584,
//         "bureaux": "1",
//         "code": "09 08 04 06",
//         "inscrit": "159",
//         "province": "NGOMESSI"
//     },
//     {
//         "id": 4585,
//         "bureaux": "1",
//         "code": "09 08 04 07",
//         "inscrit": "114",
//         "province": "OKALA"
//     },
//     {
//         "id": 4586,
//         "bureaux": "1",
//         "code": "09 08 04 08",
//         "inscrit": "52",
//         "province": "HEVEGAB  V 3 MIMPKWELE"
//     },
//     {
//         "id": 4587,
//         "bureaux": "1",
//         "code": "09 08 04 09",
//         "inscrit": "98",
//         "province": "HEVEGAB  V 4 AKINETOM"
//     },
//     {
//         "id": 4588,
//         "bureaux": "6",
//         "code": "09 08 01",
//         "inscrit": "616",
//         "province": "DOUM"
//     },
//     {
//         "id": 4589,
//         "bureaux": "12",
//         "code": "09 08 02",
//         "inscrit": "1,451",
//         "province": "DOUMANDZOU (DISTRICT DE SAM)"
//     },
//     {
//         "id": 4590,
//         "bureaux": "7",
//         "code": "09 08 03",
//         "inscrit": "901",
//         "province": "LALARA"
//     },
//     {
//         "id": 4591,
//         "bureaux": "9",
//         "code": "09 08 04",
//         "inscrit": "1,023",
//         "province": "OKALA"
//     },
//     {
//         "id": 4592,
//         "bureaux": "2",
//         "code": "09 09 00 01",
//         "inscrit": "518",
//         "province": "ECOLE PUBLIQUE"
//     },
//     {
//         "id": 4593,
//         "bureaux": "1",
//         "code": "09 09 00 02",
//         "inscrit": "73",
//         "province": "E.P.P. ENIENG-MELEN"
//     },
//     {
//         "id": 4594,
//         "bureaux": "1",
//         "code": "09 09 00 03",
//         "inscrit": "324",
//         "province": "E.P.C. ABAMASSI"
//     },
//     {
//         "id": 4595,
//         "bureaux": "1",
//         "code": "09 09 00 04",
//         "inscrit": "42",
//         "province": "MONT-BENIT (CHEF VILLAGE)"
//     },
//     {
//         "id": 4596,
//         "bureaux": "1",
//         "code": "09 09 00 05",
//         "inscrit": "108",
//         "province": "ATOUT (CHEF VILLAGE)"
//     },
//     {
//         "id": 4597,
//         "bureaux": "1",
//         "code": "09 09 00 06",
//         "inscrit": "144",
//         "province": "E.P.P EFOULANE"
//     },
//     {
//         "id": 4598,
//         "bureaux": "1",
//         "code": "09 09 00 07",
//         "inscrit": "87",
//         "province": "MONT-BENIT-A"
//     },
//     {
//         "id": 4599,
//         "bureaux": "1",
//         "code": "09 09 00 08",
//         "inscrit": "236",
//         "province": "NKOUALA"
//     },
//     {
//         "id": 4600,
//         "bureaux": "9",
//         "code": "09 09 00",
//         "inscrit": "1,532",
//         "province": "COMMUNE"
//     },
//     {
//         "id": 4601,
//         "bureaux": "1",
//         "code": "09 10 01 01",
//         "inscrit": "97",
//         "province": "EFAUT"
//     },
//     {
//         "id": 4602,
//         "bureaux": "1",
//         "code": "09 10 01 02",
//         "inscrit": "84",
//         "province": "ETSAMEYONG"
//     },
//     {
//         "id": 4603,
//         "bureaux": "1",
//         "code": "09 10 01 03",
//         "inscrit": "176",
//         "province": "NKOME-MBE"
//     },
//     {
//         "id": 4604,
//         "bureaux": "1",
//         "code": "09 10 01 04",
//         "inscrit": "80",
//         "province": "EFAUT-B"
//     },
//     {
//         "id": 4605,
//         "bureaux": "1",
//         "code": "09 10 02 01",
//         "inscrit": "185",
//         "province": "EDOUM"
//     },
//     {
//         "id": 4606,
//         "bureaux": "1",
//         "code": "09 10 02 02",
//         "inscrit": "25",
//         "province": "SONG"
//     },
//     {
//         "id": 4607,
//         "bureaux": "1",
//         "code": "09 10 02 03",
//         "inscrit": "78",
//         "province": "NZOGBOUR"
//     },
//     {
//         "id": 4608,
//         "bureaux": "1",
//         "code": "09 10 02 04",
//         "inscrit": "97",
//         "province": "ASSOK"
//     },
//     {
//         "id": 4609,
//         "bureaux": "1",
//         "code": "09 10 02 05",
//         "inscrit": "67",
//         "province": "ETSAME 1"
//     },
//     {
//         "id": 4610,
//         "bureaux": "1",
//         "code": "09 10 02 06",
//         "inscrit": "187",
//         "province": "NKINENN A"
//     },
//     {
//         "id": 4611,
//         "bureaux": "1",
//         "code": "09 10 02 07",
//         "inscrit": "123",
//         "province": "NKINENN B"
//     },
//     {
//         "id": 4612,
//         "bureaux": "1",
//         "code": "09 10 02 08",
//         "inscrit": "73",
//         "province": "AVANG"
//     },
//     {
//         "id": 4613,
//         "bureaux": "1",
//         "code": "09 10 02 09",
//         "inscrit": "59",
//         "province": "MBEAKELAYONG"
//     },
//     {
//         "id": 4614,
//         "bureaux": "1",
//         "code": "09 10 02 10",
//         "inscrit": "101",
//         "province": "AKOGA"
//     },
//     {
//         "id": 4615,
//         "bureaux": "1",
//         "code": "09 10 02 11",
//         "inscrit": "33",
//         "province": "NZORENGONE"
//     },
//     {
//         "id": 4616,
//         "bureaux": "4",
//         "code": "09 10 01",
//         "inscrit": "437",
//         "province": "MVO-ABANGA"
//     },
//     {
//         "id": 4617,
//         "bureaux": "11",
//         "code": "09 10 02",
//         "inscrit": "1,028",
//         "province": "MBEI"
//     },
//     {
//         "id": 4618,
//         "bureaux": "46",
//         "code": "901",
//         "inscrit": "14,120",
//         "province": "OYEM"
//     },
//     {
//         "id": 4619,
//         "bureaux": "87",
//         "code": "902",
//         "inscrit": "1    461",
//         "province": "WOLEU (OYEM)"
//     },
//     {
//         "id": 4620,
//         "bureaux": "20",
//         "code": "903",
//         "inscrit": "6,613",
//         "province": "BITAM"
//     },
//     {
//         "id": 4621,
//         "bureaux": "89",
//         "code": "904",
//         "inscrit": "8,190",
//         "province": "NTEM (BITAM)"
//     },
//     {
//         "id": 4622,
//         "bureaux": "5",
//         "code": "905",
//         "inscrit": "1,453",
//         "province": "MINVOUL"
//     },
//     {
//         "id": 4623,
//         "bureaux": "33",
//         "code": "906",
//         "inscrit": "3,257",
//         "province": "HAUT-NTEM (MINVOUL)"
//     },
//     {
//         "id": 4624,
//         "bureaux": "12",
//         "code": "907",
//         "inscrit": "3,580",
//         "province": "MITZIC"
//     },
//     {
//         "id": 4625,
//         "bureaux": "34",
//         "code": "908",
//         "inscrit": "3,991",
//         "province": "OKANO (MITZIC)"
//     },
//     {
//         "id": 4626,
//         "bureaux": "9",
//         "code": "909",
//         "inscrit": "1,532",
//         "province": "MEDOUNEU"
//     },
//     {
//         "id": 4627,
//         "bureaux": "15",
//         "code": "910",
//         "inscrit": "1,465",
//         "province": "HAUT COMO (MEDOUNEU)"
//     },
//     {
//         "id": 4628,
//         "bureaux": "1",
//         "code": "11 01 01 01",
//         "inscrit": "149",
//         "province": "JOHANNESBURG"
//     },
//     {
//         "id": 4629,
//         "bureaux": "1",
//         "code": "11 01 02 01",
//         "inscrit": "125",
//         "province": "PRETORIA"
//     },
//     {
//         "id": 4630,
//         "bureaux": "1",
//         "code": "11 01 03 01",
//         "inscrit": "116",
//         "province": "CAP-TOWN"
//     },
//     {
//         "id": 4631,
//         "bureaux": "1",
//         "code": "11 01 04 01",
//         "inscrit": "11",
//         "province": "DURBAN"
//     },
//     {
//         "id": 4632,
//         "bureaux": "1",
//         "code": "11 01 05 01",
//         "inscrit": "47",
//         "province": "VAAL"
//     },
//     {
//         "id": 4633,
//         "bureaux": "1",
//         "code": "11 01 01",
//         "inscrit": "149",
//         "province": "JOHANNESBURG"
//     },
//     {
//         "id": 4634,
//         "bureaux": "1",
//         "code": "11 01 02",
//         "inscrit": "125",
//         "province": "PRETORIA"
//     },
//     {
//         "id": 4635,
//         "bureaux": "1",
//         "code": "11 01 03",
//         "inscrit": "116",
//         "province": "CAP-TOWN"
//     },
//     {
//         "id": 4636,
//         "bureaux": "1",
//         "code": "11 01 04",
//         "inscrit": "11",
//         "province": "DURBAN"
//     },
//     {
//         "id": 4637,
//         "bureaux": "1",
//         "code": "11 01 05",
//         "inscrit": "47",
//         "province": "VAAL"
//     },
//     {
//         "id": 4638,
//         "bureaux": "1",
//         "code": "11 02 01 01",
//         "inscrit": "11",
//         "province": "ALGER - AMBASSADE DU GABON"
//     },
//     {
//         "id": 4639,
//         "bureaux": "1",
//         "code": "11 02 01",
//         "inscrit": "11",
//         "province": "ALGER"
//     },
//     {
//         "id": 4640,
//         "bureaux": "1",
//         "code": "11 04 01 01",
//         "inscrit": "172",
//         "province": "COTONOU"
//     },
//     {
//         "id": 4641,
//         "bureaux": "1",
//         "code": "11 04 01",
//         "inscrit": "172",
//         "province": "COTONOU"
//     },
//     {
//         "id": 4642,
//         "bureaux": "1",
//         "code": "11 05 01 01",
//         "inscrit": "73",
//         "province": "OUAGADOUGOU-AMBASSADE DU GABON"
//     },
//     {
//         "id": 4643,
//         "bureaux": "1",
//         "code": "11 05 01",
//         "inscrit": "73",
//         "province": "OUAGADOUGOU"
//     },
//     {
//         "id": 4644,
//         "bureaux": "1",
//         "code": "11 06 01 01",
//         "inscrit": "110",
//         "province": "ABIDJAN - AMBASSADE DU GABON"
//     },
//     {
//         "id": 4645,
//         "bureaux": "1",
//         "code": "11 06 01",
//         "inscrit": "110",
//         "province": "ABIDJAN"
//     },
//     {
//         "id": 4646,
//         "bureaux": "1",
//         "code": "11 07 01 01",
//         "inscrit": "218",
//         "province": "YAOUNDE-AMBASSADE DU GABON"
//     },
//     {
//         "id": 4647,
//         "bureaux": "1",
//         "code": "11 07 02 01",
//         "inscrit": "58",
//         "province": "DOUALA"
//     },
//     {
//         "id": 4648,
//         "bureaux": "1",
//         "code": "11 07 01",
//         "inscrit": "218",
//         "province": "YAOUNDE"
//     },
//     {
//         "id": 4649,
//         "bureaux": "1",
//         "code": "11 07 02",
//         "inscrit": "58",
//         "province": "DOUALA"
//     },
//     {
//         "id": 4650,
//         "bureaux": "1",
//         "code": "11 08 01 01",
//         "inscrit": "74",
//         "province": "BRAZZAVILLE-AMBASSADE DU GABON"
//     },
//     {
//         "id": 4651,
//         "bureaux": "1",
//         "code": "11 08 02 01",
//         "inscrit": "12",
//         "province": "POINTE-NOIRE"
//     },
//     {
//         "id": 4652,
//         "bureaux": "1",
//         "code": "11 08 01",
//         "inscrit": "74",
//         "province": "BRAZZAVILLE"
//     },
//     {
//         "id": 4653,
//         "bureaux": "1",
//         "code": "11 08 02",
//         "inscrit": "12",
//         "province": "POINTE-NOIRE"
//     },
//     {
//         "id": 4654,
//         "bureaux": "1",
//         "code": "11 09 01 01",
//         "inscrit": "410",
//         "province": "ACCRA AMBASSADE DU GABON"
//     },
//     {
//         "id": 4655,
//         "bureaux": "1",
//         "code": "11 09 01",
//         "inscrit": "410",
//         "province": "ACCRA"
//     },
//     {
//         "id": 4656,
//         "bureaux": "1",
//         "code": "11 10 01 01",
//         "inscrit": "25",
//         "province": "LE CAIRE - AMBASSADE DU GABON"
//     },
//     {
//         "id": 4657,
//         "bureaux": "1",
//         "code": "11 10 01",
//         "inscrit": "25",
//         "province": "CAIRE"
//     },
//     {
//         "id": 4658,
//         "bureaux": "1",
//         "code": "11 11 01 01",
//         "inscrit": "25",
//         "province": "AMBASSADE DU GABON"
//     },
//     {
//         "id": 4659,
//         "bureaux": "1",
//         "code": "11 11 01",
//         "inscrit": "25",
//         "province": "ADDIS-ABEBA"
//     },
//     {
//         "id": 4660,
//         "bureaux": "1",
//         "code": "11 12 01 01",
//         "inscrit": "95",
//         "province": "BAMAKO - AMBASSADE DU GABON"
//     },
//     {
//         "id": 4661,
//         "bureaux": "1",
//         "code": "11 12 01",
//         "inscrit": "95",
//         "province": "BAMAKO"
//     },
//     {
//         "id": 4662,
//         "bureaux": "1",
//         "code": "11 13 01 01",
//         "inscrit": "196",
//         "province": "LOME -  AMBASSADE DU GABON"
//     },
//     {
//         "id": 4663,
//         "bureaux": "1",
//         "code": "11 13 01",
//         "inscrit": "196",
//         "province": "LOME"
//     },
//     {
//         "id": 4664,
//         "bureaux": "1",
//         "code": "11 14 01 01",
//         "inscrit": "11",
//         "province": "NIAMEY - AMBASSADE DU GABON"
//     },
//     {
//         "id": 4665,
//         "bureaux": "1",
//         "code": "11 14 01",
//         "inscrit": "11",
//         "province": "NYAMEY"
//     },
//     {
//         "id": 4666,
//         "bureaux": "1",
//         "code": "11 15 01 01",
//         "inscrit": "69",
//         "province": "MALABO-AMBASSADE DU GABON"
//     },
//     {
//         "id": 4667,
//         "bureaux": "1",
//         "code": "11 15 02 01",
//         "inscrit": "149",
//         "province": "BATA"
//     },
//     {
//         "id": 4668,
//         "bureaux": "1",
//         "code": "11 15 01",
//         "inscrit": "69",
//         "province": "MALABO"
//     },
//     {
//         "id": 4669,
//         "bureaux": "1",
//         "code": "11 15 02",
//         "inscrit": "149",
//         "province": "BATA"
//     },
//     {
//         "id": 4670,
//         "bureaux": "1",
//         "code": "11 16 01 01",
//         "inscrit": "86",
//         "province": "TUNIS-AMBASSADE DU GABON"
//     },
//     {
//         "id": 4671,
//         "bureaux": "1",
//         "code": "11 16 01",
//         "inscrit": "86",
//         "province": "TUNIS"
//     },
//     {
//         "id": 4672,
//         "bureaux": "1",
//         "code": "11 17 01 01",
//         "inscrit": "238",
//         "province": "RABAT"
//     },
//     {
//         "id": 4673,
//         "bureaux": "1",
//         "code": "11 17 05 01",
//         "inscrit": "17",
//         "province": "AGADIR"
//     },
//     {
//         "id": 4674,
//         "bureaux": "1",
//         "code": "11 17 06 01",
//         "inscrit": "18",
//         "province": "TANGER"
//     },
//     {
//         "id": 4675,
//         "bureaux": "1",
//         "code": "11 17 07 01",
//         "inscrit": "24",
//         "province": "FES(FEZ)"
//     },
//     {
//         "id": 4676,
//         "bureaux": "1",
//         "code": "11 17 01",
//         "inscrit": "238",
//         "province": "RABAT"
//     },
//     {
//         "id": 4677,
//         "bureaux": "1",
//         "code": "11 17 02",
//         "inscrit": "314",
//         "province": "CASABLANCA"
//     },
//     {
//         "id": 4678,
//         "bureaux": "1",
//         "code": "11 17 03",
//         "inscrit": "23",
//         "province": "CASABLANCA"
//     },
//     {
//         "id": 4679,
//         "bureaux": "1",
//         "code": "11 17 05",
//         "inscrit": "17",
//         "province": "AGADIR"
//     },
//     {
//         "id": 4680,
//         "bureaux": "1",
//         "code": "11 17 06",
//         "inscrit": "18",
//         "province": "TANGER"
//     },
//     {
//         "id": 4681,
//         "bureaux": "1",
//         "code": "11 17 07",
//         "inscrit": "24",
//         "province": "FES(FEZ)"
//     },
//     {
//         "id": 4682,
//         "bureaux": "1",
//         "code": "11 20 01 01",
//         "inscrit": "24",
//         "province": "LUANDA - AMBASSADE DU GABON"
//     },
//     {
//         "id": 4683,
//         "bureaux": "1",
//         "code": "11 20 01",
//         "inscrit": "24",
//         "province": "LUANDA"
//     },
//     {
//         "id": 4684,
//         "bureaux": "1",
//         "code": "11 22 01 01",
//         "inscrit": "14",
//         "province": "SAO TOME - AMBASSADE DU GABON"
//     },
//     {
//         "id": 4685,
//         "bureaux": "1",
//         "code": "11 22 01",
//         "inscrit": "14",
//         "province": "SAO TOME"
//     },
//     {
//         "id": 4686,
//         "bureaux": "2",
//         "code": "11 23 01 01",
//         "inscrit": "960",
//         "province": "DAKAR - AMBASSADE DU GABON"
//     },
//     {
//         "id": 4687,
//         "bureaux": "2",
//         "code": "11 23 01",
//         "inscrit": "960",
//         "province": "DAKAR"
//     },
//     {
//         "id": 4688,
//         "bureaux": "1",
//         "code": "11 24 01 01",
//         "inscrit": "22",
//         "province": "ABUDJA"
//     },
//     {
//         "id": 4689,
//         "bureaux": "1",
//         "code": "11 24 01",
//         "inscrit": "22",
//         "province": "ABUDJA"
//     },
//     {
//         "id": 4690,
//         "bureaux": "1",
//         "code": "11 27 01 01",
//         "inscrit": "63",
//         "province": "KINSHASA - AMBASSADE DU GABON"
//     },
//     {
//         "id": 4691,
//         "bureaux": "1",
//         "code": "11 27 01",
//         "inscrit": "63",
//         "province": "KINSHASA"
//     },
//     {
//         "id": 4692,
//         "bureaux": "1",
//         "code": "11 30 01 01",
//         "inscrit": "34",
//         "province": "AMBASSADE DU GABON"
//     },
//     {
//         "id": 4693,
//         "bureaux": "1",
//         "code": "11 30 01",
//         "inscrit": "34",
//         "province": "CONAKRY"
//     },
//     {
//         "id": 4694,
//         "bureaux": "1",
//         "code": "11 33 01 01",
//         "inscrit": "7",
//         "province": "ANTANANARIVO - AMBASSADE DU GABON"
//     },
//     {
//         "id": 4695,
//         "bureaux": "1",
//         "code": "11 33 01",
//         "inscrit": "7",
//         "province": "ANTANANARIVO"
//     },
//     {
//         "id": 4696,
//         "bureaux": "5",
//         "code": "1,101",
//         "inscrit": "448",
//         "province": "AFRIQUE DU SUD"
//     },
//     {
//         "id": 4697,
//         "bureaux": "1",
//         "code": "1,102",
//         "inscrit": "11",
//         "province": "ALGERIE"
//     },
//     {
//         "id": 4698,
//         "bureaux": "1",
//         "code": "1,104",
//         "inscrit": "172",
//         "province": "BENIN"
//     },
//     {
//         "id": 4699,
//         "bureaux": "1",
//         "code": "1,105",
//         "inscrit": "73",
//         "province": "BOURKINA FASO"
//     },
//     {
//         "id": 4700,
//         "bureaux": "1",
//         "code": "1,106",
//         "inscrit": "110",
//         "province": "COTE-DIVOIRE"
//     },
//     {
//         "id": 4701,
//         "bureaux": "2",
//         "code": "1,107",
//         "inscrit": "276",
//         "province": "CAMEROUN"
//     },
//     {
//         "id": 4702,
//         "bureaux": "2",
//         "code": "1,108",
//         "inscrit": "86",
//         "province": "CONGO-BRAZZAVILLE"
//     },
//     {
//         "id": 4703,
//         "bureaux": "1",
//         "code": "1,109",
//         "inscrit": "410",
//         "province": "GHANA"
//     },
//     {
//         "id": 4704,
//         "bureaux": "1",
//         "code": "1,110",
//         "inscrit": "25",
//         "province": "EGYPTE"
//     },
//     {
//         "id": 4705,
//         "bureaux": "1",
//         "code": "1,111",
//         "inscrit": "25",
//         "province": "ETHIOPIE"
//     },
//     {
//         "id": 4706,
//         "bureaux": "1",
//         "code": "1,112",
//         "inscrit": "95",
//         "province": "MALI"
//     },
//     {
//         "id": 4707,
//         "bureaux": "1",
//         "code": "1,113",
//         "inscrit": "196",
//         "province": "TOGO"
//     },
//     {
//         "id": 4708,
//         "bureaux": "1",
//         "code": "1,114",
//         "inscrit": "11",
//         "province": "NIGER"
//     },
//     {
//         "id": 4709,
//         "bureaux": "2",
//         "code": "1,115",
//         "inscrit": "218",
//         "province": "GUINEE EQUATORIALE"
//     },
//     {
//         "id": 4710,
//         "bureaux": "1",
//         "code": "1,116",
//         "inscrit": "86",
//         "province": "TUNISIE"
//     },
//     {
//         "id": 4711,
//         "bureaux": "6",
//         "code": "1,117",
//         "inscrit": "634",
//         "province": "MAROC"
//     },
//     {
//         "id": 4712,
//         "bureaux": "1",
//         "code": "1,120",
//         "inscrit": "24",
//         "province": "ANGOLA"
//     },
//     {
//         "id": 4713,
//         "bureaux": "1",
//         "code": "1,122",
//         "inscrit": "14",
//         "province": "SAO TOME ET PRINCIPE"
//     },
//     {
//         "id": 4714,
//         "bureaux": "2",
//         "code": "1,123",
//         "inscrit": "960",
//         "province": "SENEGAL"
//     },
//     {
//         "id": 4715,
//         "bureaux": "1",
//         "code": "1,124",
//         "inscrit": "22",
//         "province": "NIGERIA"
//     },
//     {
//         "id": 4716,
//         "bureaux": "1",
//         "code": "1,127",
//         "inscrit": "63",
//         "province": "CONGO-KINSHASA"
//     },
//     {
//         "id": 4717,
//         "bureaux": "1",
//         "code": "1,130",
//         "inscrit": "34",
//         "province": "GUINEE CONAKRY"
//     },
//     {
//         "id": 4718,
//         "bureaux": "1",
//         "code": "1,133",
//         "inscrit": "7",
//         "province": "MADAGASCAR"
//     },
//     {
//         "id": 4719,
//         "bureaux": "1",
//         "code": "12 01 01 01",
//         "inscrit": "22",
//         "province": "AMBASSADE DU GABON"
//     },
//     {
//         "id": 4720,
//         "bureaux": "1",
//         "code": "12 01 01",
//         "inscrit": "22",
//         "province": "BRASILIA"
//     },
//     {
//         "id": 4721,
//         "bureaux": "1",
//         "code": "12 02 01 01",
//         "inscrit": "87",
//         "province": "NEW-YORK"
//     },
//     {
//         "id": 4722,
//         "bureaux": "1",
//         "code": "12 02 02 01",
//         "inscrit": "50",
//         "province": "TEXAS"
//     },
//     {
//         "id": 4723,
//         "bureaux": "1",
//         "code": "12 02 03 01",
//         "inscrit": "111",
//         "province": "WASHINGTON DC"
//     },
//     {
//         "id": 4724,
//         "bureaux": "1",
//         "code": "12 02 04 01",
//         "inscrit": "60",
//         "province": "NEW YORK-NEW JERSAY-C"
//     },
//     {
//         "id": 4725,
//         "bureaux": "1",
//         "code": "12 02 05 01",
//         "inscrit": "15",
//         "province": "LOS ANGELES"
//     },
//     {
//         "id": 4726,
//         "bureaux": "1",
//         "code": "12 02 01",
//         "inscrit": "87",
//         "province": "NEW-YORK"
//     },
//     {
//         "id": 4727,
//         "bureaux": "1",
//         "code": "12 02 02",
//         "inscrit": "50",
//         "province": "TEXAS"
//     },
//     {
//         "id": 4728,
//         "bureaux": "1",
//         "code": "12 02 03",
//         "inscrit": "111",
//         "province": "WASHINGTON DC"
//     },
//     {
//         "id": 4729,
//         "bureaux": "1",
//         "code": "12 02 04",
//         "inscrit": "60",
//         "province": "NEW-YORK -NEW JERSEY-C"
//     },
//     {
//         "id": 4730,
//         "bureaux": "1",
//         "code": "12 02 05",
//         "inscrit": "15",
//         "province": "LOS ANGELES"
//     },
//     {
//         "id": 4731,
//         "bureaux": "1",
//         "code": "12 03 01 01",
//         "inscrit": "126",
//         "province": "MONTREAL"
//     },
//     {
//         "id": 4732,
//         "bureaux": "1",
//         "code": "12 03 02 01",
//         "inscrit": "41",
//         "province": "QUEBEC"
//     },
//     {
//         "id": 4733,
//         "bureaux": "1",
//         "code": "12 03 04 01",
//         "inscrit": "43",
//         "province": "OTTAWA"
//     },
//     {
//         "id": 4734,
//         "bureaux": "1",
//         "code": "12 03 01",
//         "inscrit": "126",
//         "province": "MONTREAL"
//     },
//     {
//         "id": 4735,
//         "bureaux": "1",
//         "code": "12 03 02",
//         "inscrit": "41",
//         "province": "QUEBEC"
//     },
//     {
//         "id": 4736,
//         "bureaux": "1",
//         "code": "12 03 04",
//         "inscrit": "43",
//         "province": "OTTAWA"
//     },
//     {
//         "id": 4737,
//         "bureaux": "1",
//         "code": "12 04 01 01",
//         "inscrit": "10",
//         "province": "LA HAVANE"
//     },
//     {
//         "id": 4738,
//         "bureaux": "1",
//         "code": "12 04 01",
//         "inscrit": "10",
//         "province": "La HAVANE"
//     },
//     {
//         "id": 4739,
//         "bureaux": "1",
//         "code": "1,201",
//         "inscrit": "22",
//         "province": "BRESIL"
//     },
//     {
//         "id": 4740,
//         "bureaux": "5",
//         "code": "1,202",
//         "inscrit": "323",
//         "province": "ETATS UNIS DAMERIQUE"
//     },
//     {
//         "id": 4741,
//         "bureaux": "3",
//         "code": "1,203",
//         "inscrit": "210",
//         "province": "CANADA"
//     },
//     {
//         "id": 4742,
//         "bureaux": "1",
//         "code": "1,204",
//         "inscrit": "10",
//         "province": "CUBA"
//     },
//     {
//         "id": 4743,
//         "bureaux": "1",
//         "code": "13 01 01 01",
//         "inscrit": "206",
//         "province": "AMBASSADE DU GABON"
//     },
//     {
//         "id": 4744,
//         "bureaux": "1",
//         "code": "13 01 01",
//         "inscrit": "206",
//         "province": "BEYROUTH"
//     },
//     {
//         "id": 4745,
//         "bureaux": "1",
//         "code": "13 02 01 01",
//         "inscrit": "32",
//         "province": "AMBASSADE DU GABON"
//     },
//     {
//         "id": 4746,
//         "bureaux": "1",
//         "code": "13 02 01",
//         "inscrit": "32",
//         "province": "SEOUL"
//     },
//     {
//         "id": 4747,
//         "bureaux": "1",
//         "code": "13 03 01 01",
//         "inscrit": "38",
//         "province": "RIYAD AMBASSADE DU GABON"
//     },
//     {
//         "id": 4748,
//         "bureaux": "1",
//         "code": "13 03 01",
//         "inscrit": "38",
//         "province": "RIYAD"
//     },
//     {
//         "id": 4749,
//         "bureaux": "1",
//         "code": "13 04 01 01",
//         "inscrit": "58",
//         "province": "PEKIN - AMBASSADE DU GABON"
//     },
//     {
//         "id": 4750,
//         "bureaux": "1",
//         "code": "13 04 02 02",
//         "inscrit": "18",
//         "province": "SHANGHAI"
//     },
//     {
//         "id": 4751,
//         "bureaux": "1",
//         "code": "13 04 03 03",
//         "inscrit": "29",
//         "province": "HU HAN"
//     },
//     {
//         "id": 4752,
//         "bureaux": "1",
//         "code": "13 04 01",
//         "inscrit": "58",
//         "province": "PEKIN"
//     },
//     {
//         "id": 4753,
//         "bureaux": "1",
//         "code": "13 04 02",
//         "inscrit": "18",
//         "province": "SHANGHAI"
//     },
//     {
//         "id": 4754,
//         "bureaux": "1",
//         "code": "13 04 03",
//         "inscrit": "29",
//         "province": "HU HAN"
//     },
//     {
//         "id": 4755,
//         "bureaux": "1",
//         "code": "13 06 01 01",
//         "inscrit": "20",
//         "province": "NEW DELHI - AMBASSADE DU GABON"
//     },
//     {
//         "id": 4756,
//         "bureaux": "1",
//         "code": "13 06 01",
//         "inscrit": "20",
//         "province": "NEW DELHI"
//     },
//     {
//         "id": 4757,
//         "bureaux": "1",
//         "code": "13 08 01 01",
//         "inscrit": "12",
//         "province": "TOKYO - AMBASSADE DU GABON"
//     },
//     {
//         "id": 4758,
//         "bureaux": "1",
//         "code": "13 08 01",
//         "inscrit": "12",
//         "province": "TOKYO"
//     },
//     {
//         "id": 4759,
//         "bureaux": "1",
//         "code": "1,301",
//         "inscrit": "206",
//         "province": "LIBAN"
//     },
//     {
//         "id": 4760,
//         "bureaux": "1",
//         "code": "1,302",
//         "inscrit": "32",
//         "province": "COREE DU SUD"
//     },
//     {
//         "id": 4761,
//         "bureaux": "1",
//         "code": "1,303",
//         "inscrit": "38",
//         "province": "ARABIE SAOUDITE"
//     },
//     {
//         "id": 4762,
//         "bureaux": "3",
//         "code": "1,304",
//         "inscrit": "105",
//         "province": "CHINE"
//     },
//     {
//         "id": 4763,
//         "bureaux": "1",
//         "code": "1,306",
//         "inscrit": "20",
//         "province": "INDE"
//     },
//     {
//         "id": 4764,
//         "bureaux": "1",
//         "code": "1,308",
//         "inscrit": "12",
//         "province": "JAPON"
//     },
//     {
//         "id": 4765,
//         "bureaux": "1",
//         "code": "14 01 01 01",
//         "inscrit": "50",
//         "province": "AMBASSADE DU GABON"
//     },
//     {
//         "id": 4766,
//         "bureaux": "1",
//         "code": "14 01 02 01",
//         "inscrit": "25",
//         "province": "BONN"
//     },
//     {
//         "id": 4767,
//         "bureaux": "1",
//         "code": "14 01 01",
//         "inscrit": "50",
//         "province": "BERLIN"
//     },
//     {
//         "id": 4768,
//         "bureaux": "1",
//         "code": "14 01 02",
//         "inscrit": "25",
//         "province": "BONN"
//     },
//     {
//         "id": 4769,
//         "bureaux": "1",
//         "code": "14 02 01 01",
//         "inscrit": "192",
//         "province": "AMBASSADE DU GABON"
//     },
//     {
//         "id": 4770,
//         "bureaux": "1",
//         "code": "14 02 01",
//         "inscrit": "192",
//         "province": "BRUXELLES"
//     },
//     {
//         "id": 4771,
//         "bureaux": "1",
//         "code": "14 03 01 01",
//         "inscrit": "71",
//         "province": "AMBASSADE DU GABON"
//     },
//     {
//         "id": 4772,
//         "bureaux": "1",
//         "code": "14 03 02 01",
//         "inscrit": "2",
//         "province": "BARCELONE"
//     },
//     {
//         "id": 4773,
//         "bureaux": "1",
//         "code": "14 03 01",
//         "inscrit": "71",
//         "province": "MADRID"
//     },
//     {
//         "id": 4774,
//         "bureaux": "1",
//         "code": "14 03 02",
//         "inscrit": "2",
//         "province": "BARCELONE"
//     },
//     {
//         "id": 4775,
//         "bureaux": "1",
//         "code": "14 04 01 01",
//         "inscrit": "114",
//         "province": "ROME"
//     },
//     {
//         "id": 4776,
//         "bureaux": "1",
//         "code": "14 04 01",
//         "inscrit": "114",
//         "province": "ROME"
//     },
//     {
//         "id": 4777,
//         "bureaux": "1",
//         "code": "14 05 01 01",
//         "inscrit": "64",
//         "province": "AMBASSADE DU GABON"
//     },
//     {
//         "id": 4778,
//         "bureaux": "1",
//         "code": "14 05 01",
//         "inscrit": "64",
//         "province": "LONDRES"
//     },
//     {
//         "id": 4779,
//         "bureaux": "4",
//         "code": "14 06 01 01",
//         "inscrit": "1,806",
//         "province": "PARIS"
//     },
//     {
//         "id": 4780,
//         "bureaux": "1",
//         "code": "14 06 02 01",
//         "inscrit": "160",
//         "province": "BORDEAUX"
//     },
//     {
//         "id": 4781,
//         "bureaux": "1",
//         "code": "14 06 03 01",
//         "inscrit": "158",
//         "province": "LILLE"
//     },
//     {
//         "id": 4782,
//         "bureaux": "1",
//         "code": "14 06 04 01",
//         "inscrit": "146",
//         "province": "LYON"
//     },
//     {
//         "id": 4783,
//         "bureaux": "1",
//         "code": "14 06 05 01",
//         "inscrit": "149",
//         "province": "MARSEILLE"
//     },
//     {
//         "id": 4784,
//         "bureaux": "1",
//         "code": "14 06 07 01",
//         "inscrit": "152",
//         "province": "RENNES"
//     },
//     {
//         "id": 4785,
//         "bureaux": "1",
//         "code": "14 06 08 01",
//         "inscrit": "67",
//         "province": "STRASBOURG"
//     },
//     {
//         "id": 4786,
//         "bureaux": "1",
//         "code": "14 06 09 01",
//         "inscrit": "12",
//         "province": "NANTES"
//     },
//     {
//         "id": 4787,
//         "bureaux": "1",
//         "code": "14 06 10 01",
//         "inscrit": "214",
//         "province": "TOULOUSE"
//     },
//     {
//         "id": 4788,
//         "bureaux": "4",
//         "code": "14 06 01",
//         "inscrit": "1,806",
//         "province": "PARIS"
//     },
//     {
//         "id": 4789,
//         "bureaux": "1",
//         "code": "14 06 02",
//         "inscrit": "160",
//         "province": "BORDEAUX"
//     },
//     {
//         "id": 4790,
//         "bureaux": "1",
//         "code": "14 06 03",
//         "inscrit": "158",
//         "province": "LILLE"
//     },
//     {
//         "id": 4791,
//         "bureaux": "1",
//         "code": "14 06 04",
//         "inscrit": "146",
//         "province": "LYON"
//     },
//     {
//         "id": 4792,
//         "bureaux": "1",
//         "code": "14 06 05",
//         "inscrit": "149",
//         "province": "MARSEILLE"
//     },
//     {
//         "id": 4793,
//         "bureaux": "1",
//         "code": "14 06 07",
//         "inscrit": "152",
//         "province": "RENNES"
//     },
//     {
//         "id": 4794,
//         "bureaux": "1",
//         "code": "14 06 08",
//         "inscrit": "67",
//         "province": "STRASBOURG"
//     },
//     {
//         "id": 4795,
//         "bureaux": "1",
//         "code": "14 06 09",
//         "inscrit": "12",
//         "province": "NANTES"
//     },
//     {
//         "id": 4796,
//         "bureaux": "1",
//         "code": "14 06 10",
//         "inscrit": "214",
//         "province": "TOULOUSE"
//     },
//     {
//         "id": 4797,
//         "bureaux": "1",
//         "code": "14 08 01 01",
//         "inscrit": "3",
//         "province": "AMBASSADE DU GABON"
//     },
//     {
//         "id": 4798,
//         "bureaux": "1",
//         "code": "14 08 01",
//         "inscrit": "3",
//         "province": "VIENNE"
//     },
//     {
//         "id": 4799,
//         "bureaux": "1",
//         "code": "14 21 01 01",
//         "inscrit": "22",
//         "province": "MOSCOU - AMBASSADE DU GABON"
//     },
//     {
//         "id": 4800,
//         "bureaux": "1",
//         "code": "14 21 01",
//         "inscrit": "22",
//         "province": "MOSCOU"
//     },
//     {
//         "id": 4801,
//         "bureaux": "1",
//         "code": "14 23 01 01",
//         "inscrit": "48",
//         "province": "AMBASSADE DU GABON"
//     },
//     {
//         "id": 4802,
//         "bureaux": "1",
//         "code": "14 23 01",
//         "inscrit": "48",
//         "province": "GENEVE"
//     },
//     {
//         "id": 4803,
//         "bureaux": "1",
//         "code": "14 24 01 01",
//         "inscrit": "13",
//         "province": "ISTANBUL - AMBASSADE DU GABON"
//     },
//     {
//         "id": 4804,
//         "bureaux": "1",
//         "code": "14 24 02 01",
//         "inscrit": "21",
//         "province": "ANKARA"
//     },
//     {
//         "id": 4805,
//         "bureaux": "1",
//         "code": "14 24 01",
//         "inscrit": "13",
//         "province": "ISTANBUL"
//     },
//     {
//         "id": 4806,
//         "bureaux": "1",
//         "code": "14 24 02",
//         "inscrit": "21",
//         "province": "ANKARA"
//     },
//     {
//         "id": 4807,
//         "bureaux": "2",
//         "code": "1,401",
//         "inscrit": "75",
//         "province": "ALLEMAGNE"
//     },
//     {
//         "id": 4808,
//         "bureaux": "1",
//         "code": "1,402",
//         "inscrit": "192",
//         "province": "BELGIQUE"
//     },
//     {
//         "id": 4809,
//         "bureaux": "2",
//         "code": "1,403",
//         "inscrit": "73",
//         "province": "ESPAGNE"
//     },
//     {
//         "id": 4810,
//         "bureaux": "1",
//         "code": "1,404",
//         "inscrit": "114",
//         "province": "ITALIE"
//     },
//     {
//         "id": 4811,
//         "bureaux": "1",
//         "code": "1,405",
//         "inscrit": "64",
//         "province": "GRANDE BRETAGNE"
//     },
//     {
//         "id": 4812,
//         "bureaux": "12",
//         "code": "1,406",
//         "inscrit": "2,864",
//         "province": "FRANCE"
//     },
//     {
//         "id": 4813,
//         "bureaux": "1",
//         "code": "1,408",
//         "inscrit": "3",
//         "province": "AUTRICHE"
//     },
//     {
//         "id": 4814,
//         "bureaux": "1",
//         "code": "1,421",
//         "inscrit": "22",
//         "province": "RUSSIE"
//     },
//     {
//         "id": 4815,
//         "bureaux": "1",
//         "code": "1,423",
//         "inscrit": "48",
//         "province": "SUISSE"
//     },
//     {
//         "id": 4816,
//         "bureaux": "2",
//         "code": "1,424",
//         "inscrit": "34",
//         "province": "TURQUIE"
//     },
//     {
//         "id": 4817,
//         "bureaux": "672",
//         "code": "01",
//         "inscrit": "261,841",
//         "province": "ESTUAIRE"
//     },
//     {
//         "id": 4818,
//         "bureaux": "297",
//         "code": "02",
//         "inscrit": "71,123",
//         "province": "HAUT-OGOOUE"
//     },
//     {
//         "id": 4819,
//         "bureaux": "171",
//         "code": "03",
//         "inscrit": "28,829",
//         "province": "MOYEN-OGOOUE"
//     },
//     {
//         "id": 4820,
//         "bureaux": "299",
//         "code": "04",
//         "inscrit": "57,875",
//         "province": "NGOUNIE"
//     },
//     {
//         "id": 4821,
//         "bureaux": "157",
//         "code": "05",
//         "inscrit": "25,228",
//         "province": "NYANGA"
//     },
//     {
//         "id": 4822,
//         "bureaux": "163",
//         "code": "06",
//         "inscrit": "29,945",
//         "province": "OGOOUE-IVINDO"
//     },
//     {
//         "id": 4823,
//         "bureaux": "176",
//         "code": "07",
//         "inscrit": "28,063",
//         "province": "OGOOUE-LOLO"
//     },
//     {
//         "id": 4824,
//         "bureaux": "216",
//         "code": "08",
//         "inscrit": "62,133",
//         "province": "OGOOUE-MARITIME"
//     },
//     {
//         "id": 4825,
//         "bureaux": "350",
//         "code": "09",
//         "inscrit": "54,662",
//         "province": "WOLEU-NTEM"
//     },
//     {
//         "id": 4826,
//         "bureaux": "36",
//         "code": "11",
//         "inscrit": "4,000",
//         "province": "AFRIQUE"
//     },
//     {
//         "id": 4827,
//         "bureaux": "10",
//         "code": "12",
//         "inscrit": "565",
//         "province": "AMERIQUE"
//     },
//     {
//         "id": 4828,
//         "bureaux": "8",
//         "code": "13",
//         "inscrit": "413",
//         "province": "ASIE"
//     },
//     {
//         "id": 4829,
//         "bureaux": "24",
//         "code": "14",
//         "inscrit": "3,489",
//         "province": "EUROPE"
//     }
// ]

export const tableData = {
    columns,
};
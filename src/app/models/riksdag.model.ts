export interface Riksdag {
    personlista: Personlista;
}

export interface Personlista {
    "@systemdatum": string;
    "@hits":        string;
    person:         PersonDTO[];
}

export interface PersonDTO {
    hangar_guid:    string;
    sourceid:       string;
    intressent_id:  string;
    hangar_id:      string;
    fodd_ar:        string;
    kon:            Kon;
    efternamn:      string;
    tilltalsnamn:   string;
    sorteringsnamn: string;
    iort:           Iort;
    parti:          Parti;
    valkrets:       string;
    status:         PersonStatus;
    person_url_xml: string;
    bild_url_80:    string;
    bild_url_192:   string;
    bild_url_max:   string;
    personuppdrag:  Personuppdrag;
    personuppgift:  Personuppgift[];
}

export enum Iort {
    Empty = "",
    Linghem = "Linghem",
    Luleå = "Luleå",
    Norrhult = "Norrhult",
    Skellefteå = "Skellefteå",
}

export enum Kon {
    Kvinna = "kvinna",
    Man = "man",
}
export enum Parti {
    A = "A",
    Au = "AU",
    BoU = "BoU",
    Bspc = "BSPC",
    C = "C",
    CKrU = "CKrU",
    Cpar = "CPAR",
    Cu = "CU",
    DN = "DN",
    Dem = "DEM",
    Empa = "EMPA",
    Empty = "-",
    Ep = "EP",
    Er = "ER",
    Eun = "EUN",
    Europol = "Europol",
    FP = "FP",
    Fi = "Fi",
    FiU = "FiU",
    Fö = "Fö",
    FöU = "FöU",
    Ipu = "IPU",
    Ju = "Ju",
    JuSoU = "JuSoU",
    JuU = "JuU",
    Kam = "kam",
    Kd = "KD",
    KrU = "KrU",
    Ku = "KU",
    Kuu = "KUU",
    L = "L",
    Lr = "LR",
    Lu = "LU",
    M = "M",
    MTOM31DEC2014 = "M t.o.m. 31 dec 2014",
    Mju = "MJU",
    Mp = "MP",
    N = "N",
    Nato = "NATO",
    Nr = "NR",
    Nu = "NU",
    Osse = "OSSE",
    PAUfM = "PA-UfM",
    Ran = "RAN",
    Rb = "RB",
    Rj = "RJ",
    Rrpr = "RRPR",
    Rrr = "RRR",
    Rrs = "RRS",
    Rs = "RS",
    S = "S",
    SD = "SD",
    Sb = "SB",
    SfU = "SfU",
    SkU = "SkU",
    SoU = "SoU",
    Systembolaget = "Systembolaget",
    Tu = "TU",
    UFöU = "UFöU",
    USoU = "USoU",
    UTOM1Jan07 = "U t.o.m. 1 jan-07",
    UbU = "UbU",
    Umju = "UMJU",
    Un = "UN",
    Uu = "UU",
    V = "V",
    VB = "VB",
    VPN = "VPN",
    Ön = "ÖN",
}
export enum OrganKod {
    A = "A",
    Au = "AU",
    BoU = "BoU",
    Bspc = "BSPC",
    C = "C",
    CKrU = "CKrU",
    Cpar = "CPAR",
    Cu = "CU",
    DN = "DN",
    Dem = "DEM",
    Empa = "EMPA",
    Empty = "-",
    Ep = "EP",
    Er = "ER",
    Eun = "EUN",
    Europol = "Europol",
    FP = "FP",
    Fi = "Fi",
    FiU = "FiU",
    Fö = "Fö",
    FöU = "FöU",
    Ipu = "IPU",
    Ju = "Ju",
    JuSoU = "JuSoU",
    JuU = "JuU",
    Kam = "kam",
    Kd = "KD",
    KrU = "KrU",
    Ku = "KU",
    Kuu = "KUU",
    L = "L",
    Lr = "LR",
    Lu = "LU",
    M = "M",
    MTOM31DEC2014 = "M t.o.m. 31 dec 2014",
    Mju = "MJU",
    Mp = "MP",
    N = "N",
    Nato = "NATO",
    Nr = "NR",
    Nu = "NU",
    Osse = "OSSE",
    PAUfM = "PA-UfM",
    Ran = "RAN",
    Rb = "RB",
    Rj = "RJ",
    Rrpr = "RRPR",
    Rrr = "RRR",
    Rrs = "RRS",
    Rs = "RS",
    S = "S",
    SD = "SD",
    Sb = "SB",
    SfU = "SfU",
    SkU = "SkU",
    SoU = "SoU",
    Systembolaget = "Systembolaget",
    Tu = "TU",
    UFöU = "UFöU",
    USoU = "USoU",
    UTOM1Jan07 = "U t.o.m. 1 jan-07",
    UbU = "UbU",
    Umju = "UMJU",
    Un = "UN",
    Uu = "UU",
    V = "V",
    VB = "VB",
    VPN = "VPN",
    Ön = "ÖN",
}

export interface Personuppdrag {
    uppdrag: Uppdrag[];
}

export interface Uppdrag {
    organ_kod:               OrganKod;
    roll_kod:                RollKod;
    ordningsnummer:          string;
    status:                  UppdragStatus;
    typ:                     UppdragTyp;
    from:                    string;
    tom:                     string;
    uppgift:                 Array<string>;
    intressent_id:           string;
    hangar_id:               string;
    sortering:               string;
    organ_sortering:         string;
    uppdrag_rollsortering:   string;
    uppdrag_statussortering: string;
}

export enum RollKod {
    AndreViceOrdförande = "Andre vice ordförande",
    AndreViceTalman = "Andre vice talman",
    Arbetsmarknadsminister = "Arbetsmarknadsminister",
    Deputerad = "Deputerad",
    Ersättare = "Ersättare",
    ExtraSuppleant = "Extra suppleant",
    FörsteViceOrdförande = "Förste vice ordförande",
    FörsteViceTalman = "Förste vice talman",
    Försvarsminister = "Försvarsminister",
    Gruppledare = "Gruppledare",
    Kvittningsperson = "Kvittningsperson",
    Ledamot = "Ledamot",
    MigrationsOchArbetsmarknadsminister = "Migrations- och arbetsmarknadsminister",
    MiljöOchKlimatminister = "Miljö- och klimatminister",
    Miljöminister = "Miljöminister",
    Näringsminister = "Näringsminister",
    Ordförande = "Ordförande",
    Partiledare = "Partiledare",
    Partisekreterare = "Partisekreterare",
    PersonligErsättare = "Personlig ersättare",
    PersonligSuppleant = "Personlig suppleant",
    Revisor = "Revisor",
    Revisorssuppleant = "Revisorssuppleant",
    Riksdagsledamot = "Riksdagsledamot",
    Språkrör = "Språkrör",
    Statsråd = "Statsråd",
    Statsrådsersättare = "Statsrådsersättare",
    Suppleant = "Suppleant",
    Talmansersättare = "Talmansersättare",
    TredjeViceOrdförande = "Tredje vice ordförande",
    TredjeViceTalman = "Tredje vice talman",
    ViceGruppledare = "Vice gruppledare",
    ViceOrdförande = "Vice ordförande",
}

export enum UppdragStatus {
    Empty = "",
    Ersättare = "Ersättare",
    Ledig = "Ledig",
    LedigErsättare = "Ledig Ersättare",
    Tjänstgörande = "Tjänstgörande",
}

export enum UppdragTyp {
    Departement = "Departement",
    Europaparlamentet = "Europaparlamentet",
    Kammaruppdrag = "kammaruppdrag",
    Partiuppdrag = "partiuppdrag",
    Riksdagsorgan = "Riksdagsorgan",
    Talmansuppdrag = "talmansuppdrag",
    Uppdrag = "uppdrag",
}

export interface Personuppgift {
    kod:           Kod;
    uppgift:       Array<string>;
    typ:           UppgiftTyp;
    intressent_id: string;
    hangar_id:     string;
}

export enum Kod {
    Anställningar = "Anställningar",
    Bostadsort = "Bostadsort",
    En = "en",
    Föräldrar = "Föräldrar",
    KandiderarINastaVal = "KandiderarINastaVal",
    KommunalaUppdrag = "Kommunala uppdrag",
    Litteratur = "Litteratur",
    OfficiellEPostadress = "Officiell e-postadress",
    Sv = "sv",
    Tjänstetelefon = "Tjänstetelefon",
    UppdragInomFöreningsOchNäringsliv = "Uppdrag inom förenings- och näringsliv",
    UppdragInomRiksdagOchRegering = "Uppdrag inom riksdag och regering",
    UppdragInomStatligaMyndigheterMM = "Uppdrag inom statliga myndigheter m.m.",
    Utbildning = "Utbildning",
    Webbsida = "Webbsida",
    ÖvrigaWebbsidor = "Övriga webbsidor",
}

export enum UppgiftTyp {
    Biografi = "biografi",
    Eadress = "eadress",
    Telefonnummer = "telefonnummer",
    Titlar = "titlar",
    Val = "val",
}

export enum PersonStatus {
    AndreViceTalmanTjänstgörandeRiksdagsledamot = "Andre vice talman (tjänstgörande riksdagsledamot)",
    FörsteViceTalmanTjänstgörandeRiksdagsledamot = "Förste vice talman (tjänstgörande riksdagsledamot)",
    TillgängligErsättare = "Tillgänglig ersättare",
    TjänstgörandeErsättare = "Tjänstgörande ersättare",
    TjänstgörandeRiksdagsledamot = "Tjänstgörande riksdagsledamot",
    TjänstgörandeStatsrådsersättare = "Tjänstgörande statsrådsersättare",
    TjänstgörandeTalmansersättare = "Tjänstgörande talmansersättare",
    TredjeViceTalmanTjänstgörandeRiksdagsledamot = "Tredje vice talman (tjänstgörande riksdagsledamot)",
}
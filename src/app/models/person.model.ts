import { PersonDTO, RollKod, Uppdrag } from "./riksdag.model";

export type PersonDTOExtension = {displayName:string,currentUppdrag:Array<Uppdrag>,partinamn:string,currentRollKods:Set<Lowercase<RollKod>>};
export type Person = PersonDTO & PersonDTOExtension
export type PersonFilter = Record<PersonFilterProps,string>;
export type PersonFilterProps = Extract<keyof Person,'tilltalsnamn' |'partinamn' | 'efternamn' | 'currentUppdrag'>;
export type PersonOrderByProps = Extract<keyof Person,'tilltalsnamn' |'partinamn' | 'efternamn' | 'fodd_ar'>;
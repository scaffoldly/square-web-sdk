interface RootObject {
  n: string;
  m: M;
  s: string;
  v: string;
  ent: Ent3[];
  enu: Enu[];
  nav: Nav;
  p: P5[];
}
interface P5 {
  t: string;
  s: string;
  c: string;
  sub?: string;
  sum: string;
  fEnt: string;
  fMet?: string;
  fEx: FEx;
}
interface FEx {
  c: string;
  l: string;
  n: string;
}
interface Nav {
  i: I[];
}
interface I {
  r: string;
  t: string;
  te?: string;
  s?: string;
  sI?: SI[];
}
interface SI {
  r: string;
  t: string;
  te: string;
  s: string;
}
interface Enu {
  n: string;
  s?: string;
  d?: string;
  v: V[];
}
interface V {
  n: string;
  v: string;
  s?: string;
  d?: string;
}
interface Ent3 {
  n: string;
  ex?: Ex[];
  s?: string;
  d?: string;
  k: string;
  p?: P2[];
  m?: M3[];
}
interface M3 {
  n: string;
  ex?: Ex[];
  s: string;
  rT: RT[];
  rD: string | string | undefined | undefined;
  p?: P4[];
  er?: Er[];
  d?: string;
}
interface Er {
  d: string;
  e?: string;
}
interface P4 {
  n: string;
  t: T16[];
  d?: string;
  o?: boolean;
}
interface T16 {
  pT: string;
  pV?: string;
  m?: M2;
  ent?: Ent;
  cT?: T4[];
}
interface M2 {
  n: string;
  rT: RT2[];
  rD: undefined;
  p: P3[];
}
interface P3 {
  n: string;
  t: T4[];
}
interface RT2 {
  pT: string;
  ent: Ent | string;
  cT?: T4[];
}
interface RT {
  pT: string;
  ent?: Ent | Ent | string | string;
  cT?: T12[];
}
interface P2 {
  n: string;
  t: (T | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14 | T15)[];
  o?: boolean;
  s?: string;
  d?: string;
  ex?: Ex[];
}
interface T15 {
  pT: string;
  pV?: string;
  cT?: T4[];
  ent?: string;
}
interface T14 {
  pT: string;
  ent?: Ent;
}
interface T13 {
  pT: string;
  cT?: T4[];
}
interface T12 {
  pT: string;
  ent?: string;
}
interface T11 {
  pT: string;
  pV: string;
}
interface T10 {
  pT: string;
  ent?: string;
  pV?: string;
}
interface T9 {
  pT: string;
  cT?: T4[];
  ent?: string;
}
interface T8 {
  pT: string;
  ent?: string;
  enu?: string;
}
interface T7 {
  pT: string;
  ent: Ent;
  cT: CT2[];
}
interface CT2 {
  pT: string;
  ent: Ent2;
}
interface Ent2 {
  n: string;
  k: string;
  p: P[];
}
interface P {
  n: string;
  t: T3[];
  o: boolean;
  s?: string;
}
interface T6 {
  pT: string;
  cT?: T3[];
}
interface T5 {
  pT: string;
  enu: string;
}
interface T4 {
  pT: string;
  ent: string;
}
interface T3 {
  pT: string;
}
interface T2 {
  pT: string;
  pV?: string;
}
interface T {
  pT: string;
  ent?: string;
  cT?: CT[];
  enu?: string;
}
interface CT {
  pT: string;
  ent: Ent | string;
}
interface Ent {
  n: string;
  ext: boolean;
  k: string;
}
interface Ex {
  c: string;
  l: string;
}
interface M {}

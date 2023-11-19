interface Location {
  key: number;
  label: string;
}

export interface Address {
  provinceTh: Location;
  amphoeTh: Location;
  tambonTh: Location;
  zipcodeTh: Location;
  provinceEn: Location;
  amphoeEn: Location;
  tambonEn: Location;
  zipcodeEn: Location;
}

export type AddressDatabase = Province[]

interface Province extends AddressBase {
  1: Amphoe[]
}

interface Amphoe extends AddressBase {
  1: Tambon[]
}

interface Tambon extends AddressBase {
  1: ZipCode[]
}

type ZipCode = string

interface AddressBase {
  0: string
}
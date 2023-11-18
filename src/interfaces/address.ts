export interface Address {
  province: { key: number; label: string }
  amphoe: { key: number; label: string }
  tambon: { key: number; label: string }
  zipcode: { key: number; label: string }
  provinceEn: { key: number; label: string }
  amphoeEn: { key: number; label: string }
  tambonEn: { key: number; label: string }
  zipcodeEn: { key: number; label: string }
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
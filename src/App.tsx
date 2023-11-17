import { Fragment, useState } from 'react'
import { Box, Card, Container, Typography } from '@mui/material'
import AppAppBar from './views/AppAppBar'
import { thaiAddressTree } from './database/raw_database/thai-address-tree'
import { thaiAddressEnTreesEnTree } from './database/raw_database/thai-address-en-tree'
import EnglishAddressCard from './components/EnglishAddressCard'
import ThaiAddressCard from './components/ThaiAddressCard'

type AddressDatabase = Province[]

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

const initValue = {
  key: 0,
  label: '',
}

const thaiAddress: AddressDatabase = thaiAddressTree as unknown as AddressDatabase
const thaiAddressEN: AddressDatabase = thaiAddressEnTreesEnTree as unknown as AddressDatabase

function App() {
  const [province, setProvince] = useState(initValue)
  const [amphoe, setAmphoe] = useState(initValue)
  const [tambon, setTambon] = useState(initValue)
  const [zipcode, setZipcode] = useState(initValue)
  const [provinceEn, setProvinceEn] = useState(initValue)
  const [amphoeEn, setAmphoeEn] = useState(initValue)
  const [tambonEn, setTambonEn] = useState(initValue)
  const [zipcodeEn, setZipcodeEn] = useState(initValue)

  const handleOnChangeProvince = (event: any, value: any) => {
    event.preventDefault()
    setProvince(value)
  }

  const handleOnChangeProvinceEn = (event: any, value: any) => {
    event.preventDefault()
    setProvinceEn(value)
  }

  const handleOnChangeAmphoe = (event: any, value: any) => {
    event.preventDefault()
    if (province?.key === 0 && province?.label === '') {
      setAmphoe(initValue)
      return
    }
    setAmphoe(value)
  }

  const handleOnChangeAmphoeEn = (event: any, value: any) => {
    event.preventDefault()
    if (provinceEn?.key === 0 && provinceEn?.label === '') {
      setAmphoeEn(initValue)
      return
    }
    setAmphoeEn(value)
  }

  const handleOnChangeTambon = (event: any, value: any) => {
    event.preventDefault()
    if (amphoe?.key === 0 && amphoe?.label === '') {
      setTambon(initValue)
      return
    }
    setTambon(value)
  }

  const handleOnChangeTambonEn = (event: any, value: any) => {
    event.preventDefault()
    if (amphoeEn?.key === 0 && amphoeEn?.label === '') {
      setTambonEn(initValue)
      return
    }
    setTambonEn(value)
  }

  const handleOnChangeZipcode = (event: any, value: any) => {
    event?.preventDefault()
    if (tambon?.key === 0 && tambon?.label === '') {
      setZipcode(initValue)
      return
    }
    setZipcode(value)
  }

  const handleOnChangeZipcodeEn = (event: any, value: any) => {
    event?.preventDefault()
    if (tambonEn?.key === 0 && tambonEn?.label === '') {
      setZipcodeEn(initValue)
      return
    }
    setZipcodeEn(value)
  }

  const handleOnSelectProvince = (event: any, value: any) => {
    event?.preventDefault()
    if (value === '') {
      setProvince(initValue)
      setAmphoe(initValue)
      setTambon(initValue)
      setZipcode(initValue)
      return
    }
    setProvince(value)
  }

  const handleOnSelectProvinceEn = (event: any, value: any) => {
    event?.preventDefault()
    if (value === '') {
      setProvinceEn(initValue)
      setAmphoeEn(initValue)
      setTambonEn(initValue)
      setZipcodeEn(initValue)
      return
    }
    setProvinceEn(value)
  }

  const handleOnSelectAmphoe = (event: any, value: any) => {
    event?.preventDefault()
    if (value === '') {
      setAmphoe(initValue)
      setTambon(initValue)
      setZipcode(initValue)
      return
    }
    setAmphoe(value)
  }

  const handleOnSelectAmphoeEn = (event: any, value: any) => {
    event?.preventDefault()
    if (value === '') {
      setAmphoeEn(initValue)
      setTambonEn(initValue)
      setZipcodeEn(initValue)
      return
    }
    setAmphoeEn(value)
  }

  const handleOnSelectTambon = (event: any, value: any) => {
    event?.preventDefault()
    if (value === '') {
      setTambon(initValue)
      setZipcode(initValue)
      return
    }
    setTambon(value)
  }

  const handleOnSelectTambonEn = (event: any, value: any) => {
    event?.preventDefault()
    if (value === '') {
      setTambonEn(initValue)
      setZipcodeEn(initValue)
      return
    }
    setTambonEn(value)
  }

  const handleOnSelectZipcode = (event: any, value: any) => {
    event?.preventDefault()
    if (value === '') {
      setZipcode(initValue)
      return
    }
    setZipcode(value)
  }

  const handleOnSelectZipcodeEn = (event: any, value: any) => {
    event?.preventDefault()
    if (value === '') {
      setZipcodeEn(initValue)
      return
    }
    setZipcodeEn(value)
  }

  return (
    <Fragment>
      <AppAppBar />
      <Container maxWidth='md'>
        <Box sx={{ my: 4, alignItems: 'center' }}>
          <Typography variant='h5' component='h1' gutterBottom>
            Material UI Thailand Address autocomplete
          </Typography>
        </Box>
        <Card variant='elevation' sx={{ mb: 3 }}>
          <ThaiAddressCard
            thaiAddress={thaiAddress}
            province={province}
            amphoe={amphoe}
            tambon={tambon}
            zipcode={zipcode}
            onChangeProvince={handleOnChangeProvince}
            onSelectProvince={handleOnSelectProvince}
            onChangeAmphoe={handleOnChangeAmphoe}
            onSelectAmphoe={handleOnSelectAmphoe}
            onChangeTambon={handleOnChangeTambon}
            onSelectTambon={handleOnSelectTambon}
            onChangeZipcode={handleOnChangeZipcode}
            onSelectZipcode={handleOnSelectZipcode}
          />
        </Card>
        <Card variant='elevation'>
          <EnglishAddressCard
            thaiAddressEN={thaiAddressEN}
            provinceEn={provinceEn}
            amphoeEn={amphoeEn}
            tambonEn={tambonEn}
            zipcodeEn={zipcodeEn}
            onChangeProvince={handleOnChangeProvinceEn}
            onSelectProvince={handleOnSelectProvinceEn}
            onChangeAmphoe={handleOnChangeAmphoeEn}
            onSelectAmphoe={handleOnSelectAmphoeEn}
            onChangeTambon={handleOnChangeTambonEn}
            onSelectTambon={handleOnSelectTambonEn}
            onChangeZipcode={handleOnChangeZipcodeEn}
            onSelectZipcode={handleOnSelectZipcodeEn}
          />
        </Card>
      </Container>
    </Fragment>
  )
}

export default App

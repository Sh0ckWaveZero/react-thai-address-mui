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

  const handleOnChange = (type: string, event: any, value: any) => {
    event.preventDefault()

    switch (type) {
      case 'Province':
        setProvince(value)
        break
      case 'ProvinceEn':
        setProvinceEn(value)
        break
      case 'Amphoe':
        if (province?.key === 0 && province?.label === '') {
          setAmphoe(initValue)
          return
        }
        setAmphoe(value)
        break
      case 'AmphoeEn':
        if (provinceEn?.key === 0 && provinceEn?.label === '') {
          setAmphoeEn(initValue)
          return
        }
        setAmphoeEn(value)
        break
      case 'Tambon':
        if (amphoe?.key === 0 && amphoe?.label === '') {
          setTambon(initValue)
          return
        }
        setTambon(value)
        break
      case 'TambonEn':
        if (amphoeEn?.key === 0 && amphoeEn?.label === '') {
          setTambonEn(initValue)
          return
        }
        setTambonEn(value)
        break
      case 'Zipcode':
        if (tambon?.key === 0 && tambon?.label === '') {
          setZipcode(initValue)
          return
        }
        setZipcode(value)
        break
      case 'ZipcodeEn':
        if (tambonEn?.key === 0 && tambonEn?.label === '') {
          setZipcodeEn(initValue)
          return
        }
        setZipcodeEn(value)
        break
    }
  }

  const handleOnSelect = (type: string, event: any, value: any) => {
    switch (type) {
      case 'Province':
        if (value === '') {
          setProvince(initValue)
          setAmphoe(initValue)
          setTambon(initValue)
          setZipcode(initValue)
        }
        setProvince(value)
        break
      case 'ProvinceEn':
        if (value === '') {
          setProvinceEn(initValue)
          setAmphoeEn(initValue)
          setTambonEn(initValue)
          setZipcodeEn(initValue)
        }
        setProvinceEn(value)
        break
      case 'Amphoe':
        if (value === '') {
          setAmphoe(initValue)
          setTambon(initValue)
          setZipcode(initValue)
        }
        setAmphoe(value)
        break
      case 'AmphoeEn':
        if (value === '') {
          setAmphoeEn(initValue)
          setTambonEn(initValue)
          setZipcodeEn(initValue)
        }
        setAmphoeEn(value)
        break
      case 'Tambon':
        if (value === '') {
          setTambon(initValue)
          setZipcode(initValue)
        }
        setTambon(value)
        break
      case 'TambonEn':
        if (value === '') {
          setTambonEn(initValue)
          setZipcodeEn(initValue)
        }
        setTambonEn(value)
        break
      case 'Zipcode':
        if (value === '') {
          setZipcode(initValue)
        }
        setZipcode(value)
        break
      case 'ZipcodeEn':
        if (value === '') {
          setZipcodeEn(initValue)
        }
        setZipcodeEn(value)
        break
    }
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
            onChange={handleOnChange}
            onSelect={handleOnSelect}
          />
        </Card>
        <Card variant='elevation'>
          <EnglishAddressCard
            thaiAddressEN={thaiAddressEN}
            provinceEn={provinceEn}
            amphoeEn={amphoeEn}
            tambonEn={tambonEn}
            zipcodeEn={zipcodeEn}
            onChange={handleOnChange}
            onSelect={handleOnSelect}
          />
        </Card>
      </Container>
    </Fragment>
  )
}

export default App

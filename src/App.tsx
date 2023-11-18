import { Address, AddressDatabase } from './interfaces/address'
import { Box, Card, Container, Typography } from '@mui/material'
import { Fragment, useState } from 'react'

import AppAppBar from './views/AppAppBar'
import EnglishAddressCard from './components/EnglishAddressCard'
import ThaiAddressCard from './components/ThaiAddressCard'
import { thaiAddressEnTreesEnTree } from './database/raw_database/thai-address-en-tree'
import { thaiAddressTree } from './database/raw_database/thai-address-tree'

const thaiAddress: AddressDatabase = thaiAddressTree as unknown as AddressDatabase
const thaiAddressEN: AddressDatabase = thaiAddressEnTreesEnTree as unknown as AddressDatabase

const initValue = {
  key: 0,
  label: '',
}

function App() {
  const [address, setAddress] = useState<Address>({
    province: initValue,
    amphoe: initValue,
    tambon: initValue,
    zipcode: initValue,
    provinceEn: initValue,
    amphoeEn: initValue,
    tambonEn: initValue,
    zipcodeEn: initValue,
  })

  const handleOnChange = (type: string, event: any, value: any) => {
    event.preventDefault()

    switch (type) {
      case 'Province':
        setAddress((prevState) => ({
          ...prevState,
          province: value,
        }))
        break
      case 'ProvinceEn':
        setAddress((prevState) => ({
          ...prevState,
          provinceEn: value,
        }))
        break
      case 'Amphoe':
        if (address.province?.key === 0 && address.province?.label === '') {
          setAddress((prevState) => ({
            ...prevState,
            province: value,
          }))
          return
        }
        setAddress((prevState) => ({
          ...prevState,
          amphoe: value,
        }))
        break
      case 'AmphoeEn':
        if (address.provinceEn?.key === 0 && address.provinceEn?.label === '') {
          setAddress((prevState) => ({ ...prevState, amphoeEn: initValue }))
          return
        }
        setAddress((prevState) => ({ ...prevState, amphoeEn: value }))
        break
      case 'Tambon':
        if (address.amphoe?.key === 0 && address.amphoe?.label === '') {
          setAddress((prevState) => ({ ...prevState, tambon: initValue }))
          return
        }
        setAddress((prevState) => ({ ...prevState, tambon: value }))
        break
      case 'TambonEn':
        if (address.amphoeEn?.key === 0 && address.amphoeEn?.label === '') {
          setAddress((prevState) => ({ ...prevState, tambonEn: initValue }))
          return
        }
        setAddress((prevState) => ({ ...prevState, tambonEn: value }))
        break
      case 'Zipcode':
        if (address.tambon?.key === 0 && address.tambon?.label === '') {
          setAddress((prevState) => ({ ...prevState, zipcode: initValue }))
          return
        }
        setAddress((prevState) => ({ ...prevState, zipcode: value }))
        break
      case 'ZipcodeEn':
        if (address.tambonEn?.key === 0 && address.tambonEn?.label === '') {
          setAddress((prevState) => ({ ...prevState, zipcodeEn: initValue }))
          return
        }
        setAddress((prevState) => ({ ...prevState, zipcodeEn: value }))
        break
    }
  }

  const handleOnSelect = (type: string, value: any) => {
    switch (type) {
      case 'Province':
        if (value === '') {
          setAddress((prevState) => ({
            ...prevState,
            province: initValue,
            amphoe: initValue,
            tambon: initValue,
            zipcode: initValue,
          }))
        } else {
          setAddress((prevState) => ({ ...prevState, province: value }))
        }
        break
      case 'ProvinceEn':
        if (value === '') {
          setAddress((prevState) => ({
            ...prevState,
            provinceEn: initValue,
            amphoeEn: initValue,
            tambonEn: initValue,
            zipcodeEn: initValue,
          }))
        } else {
          setAddress((prevState) => ({ ...prevState, provinceEn: value }))
        }
        break
      case 'Amphoe':
        if (value === '') {
          setAddress((prevState) => ({
            ...prevState,
            amphoe: initValue,
            tambon: initValue,
            zipcode: initValue,
          }))
        } else {
          setAddress((prevState) => ({ ...prevState, amphoe: value }))
        }
        break
      case 'AmphoeEn':
        if (value === '') {
          setAddress((prevState) => ({
            ...prevState,
            amphoeEn: initValue,
            tambonEn: initValue,
            zipcodeEn: initValue,
          }))
        } else {
          setAddress((prevState) => ({ ...prevState, amphoeEn: value }))
        }
        break
      case 'Tambon':
        if (value === '') {
          setAddress((prevState) => ({
            ...prevState,
            tambon: initValue,
            zipcode: initValue,
          }))
        } else {
          setAddress((prevState) => ({ ...prevState, tambon: value }))
        }
        break
      case 'TambonEn':
        if (value === '') {
          setAddress((prevState) => ({
            ...prevState,
            tambonEn: initValue,
            zipcodeEn: initValue,
          }))
        } else {
          setAddress((prevState) => ({ ...prevState, tambonEn: value }))
        }
        break
      case 'Zipcode':
        if (value === '') {
          setAddress((prevState) => ({ ...prevState, zipcode: initValue }))
        } else {
          setAddress((prevState) => ({ ...prevState, zipcode: value }))
        }
        break
      case 'ZipcodeEn':
        if (value === '') {
          setAddress((prevState) => ({ ...prevState, zipcodeEn: initValue }))
        } else {
          setAddress((prevState) => ({ ...prevState, zipcodeEn: value }))
        }
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
          <ThaiAddressCard data={thaiAddress} state={address} onChange={handleOnChange} onSelect={handleOnSelect} />
        </Card>
        <Card variant='elevation'>
          <EnglishAddressCard data={thaiAddressEN} state={address} onChange={handleOnChange} onSelect={handleOnSelect} />
        </Card>
      </Container>
    </Fragment>
  )
}

export default App

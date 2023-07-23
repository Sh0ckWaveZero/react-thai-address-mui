import { Fragment, useState } from 'react'
import { Autocomplete, Box, Card, CardContent, CardHeader, Container, Grid, TextField, Typography } from '@mui/material'
import AppAppBar from './views/AppAppBar'
import { thaiAddressTree } from './database/raw_database/thai-address-tree'
import { thaiAddressEnTreesEnTree } from './database/raw_database/thai-address-en-tree'

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

  const card = (
    <Fragment>
      <CardHeader
        title={
          <Typography variant='h6' component='h2' gutterBottom>
            ที่อยู่ภาษาไทย
          </Typography>
        }
      />
      <CardContent>
        <Grid container spacing={2} direction='row' justifyContent='center' alignItems='baseline'>
          <Grid item xs={12} sm={6}>
            <Typography variant='body1' color='text.main'>
              <label style={{ color: 'red' }}>* </label>Address autocomplete:
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <Grid container spacing={2} direction='row' justifyContent='center' alignItems='baseline'>
              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  id='combo-box-province'
                  size='small'
                  fullWidth
                  options={thaiAddress.map((province: any, index: number) => {
                    return { key: index, label: province[0] }
                  })}
                  isOptionEqualToValue={(option, value) => option.key === value.key && option.label === value.label}
                  onChange={handleOnChangeProvince}
                  renderInput={(params) => <TextField {...params} label='จังหวัด' />}
                  onInputChange={handleOnSelectProvince}
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  id='combo-box-amphoe'
                  size='small'
                  fullWidth
                  disabled={province?.key === 0 && province?.label === '' ? true : false}
                  value={amphoe}
                  options={
                    province && thaiAddress[province?.key]
                      ? (thaiAddress[province?.key][1] as any[]).map((amphoe: any, index: number) => {
                          return { key: index, label: amphoe[0] }
                        })
                      : []
                  }
                  isOptionEqualToValue={(option, value) => option.key === value.key && option.label === value.label}
                  onChange={handleOnChangeAmphoe}
                  renderInput={(params) => <TextField {...params} label='อำเภอ' />}
                  onInputChange={handleOnSelectAmphoe}
                />
              </Grid>

              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  id='combo-box-tambon'
                  size='small'
                  fullWidth
                  disabled={amphoe?.key === 0 && amphoe?.label === '' ? true : false}
                  value={tambon}
                  options={
                    amphoe && thaiAddress[province?.key] && thaiAddress[province.key][1][amphoe.key]
                      ? (thaiAddress[province.key][1][amphoe.key][1] as any[]).map((tambon: any, index: number) => {
                          return { key: index, label: tambon[0] }
                        })
                      : []
                  }
                  isOptionEqualToValue={(option, value) => option.key === value.key && option.label === value.label}
                  onChange={handleOnChangeTambon}
                  renderInput={(params) => <TextField {...params} label='ตำบล' />}
                  onInputChange={handleOnSelectTambon}
                />
              </Grid>

              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  id='combo-box-zipcode'
                  size='small'
                  fullWidth
                  disabled={tambon?.key === 0 && tambon?.label === '' ? true : false}
                  value={zipcode}
                  options={
                    tambon && thaiAddress[province?.key] && thaiAddress[province.key][1][amphoe?.key]
                      ? (thaiAddress[province.key][1][amphoe.key][1][tambon.key][1] as any[]).map((zipcode: any, index: number) => ({
                          key: index,
                          label: zipcode.toString(),
                        }))
                      : []
                  }
                  isOptionEqualToValue={(option, value) => option.key === value.key && option.label === value.label}
                  onChange={handleOnChangeZipcode}
                  renderInput={(params) => <TextField {...params} label='รหัสไปรษณีย์' />}
                  onInputChange={handleOnSelectZipcode}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Fragment>
  )

  const cardThaiAddressEn = (
    <Fragment>
      <CardHeader
        title={
          <Typography variant='h6' component='h2' gutterBottom>
            ที่อยู่ภาษาอังกฤษ
          </Typography>
        }
      />
      <CardContent>
        <Grid container spacing={2} direction='row' justifyContent='center' alignItems='baseline'>
          <Grid item xs={12} sm={6}>
            <Typography variant='body1' color='text.main'>
              <label style={{ color: 'red' }}>* </label>Address autocomplete:
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <Grid container spacing={2} direction='row' justifyContent='center' alignItems='baseline'>
              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  id='combo-box-province-en'
                  size='small'
                  fullWidth
                  options={thaiAddressEN.map((province: any, index: number) => {
                    return { key: index, label: province[0] }
                  })}
                  isOptionEqualToValue={(option, value) => option.key === value.key && option.label === value.label}
                  onChange={handleOnChangeProvinceEn}
                  renderInput={(params) => <TextField {...params} label='จังหวัด' />}
                  onInputChange={handleOnSelectProvinceEn}
                />
              </Grid>

              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  id='combo-box-amphoe-en'
                  size='small'
                  fullWidth
                  disabled={provinceEn?.key === 0 && provinceEn?.label === '' ? true : false}
                  value={amphoeEn}
                  options={
                    amphoeEn && thaiAddressEN[provinceEn?.key] && thaiAddressEN[provinceEn.key][1][amphoeEn.key]
                      ? (thaiAddressEN[provinceEn.key][1] as any[]).map((amphoe: any, index: number) => {
                          return { key: index, label: amphoe[0] }
                        })
                      : []
                  }
                  isOptionEqualToValue={(option, value) => option.key === value.key && option.label === value.label}
                  onChange={handleOnChangeAmphoeEn}
                  renderInput={(params) => <TextField {...params} label='อำเภอ' />}
                  onInputChange={handleOnSelectAmphoeEn}
                />
              </Grid>

              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  id='combo-box-tambon-en'
                  size='small'
                  fullWidth
                  disabled={amphoeEn?.key === 0 && amphoeEn?.label === '' ? true : false}
                  value={tambonEn}
                  options={
                    amphoeEn && thaiAddressEN[provinceEn?.key] && thaiAddressEN[provinceEn.key][1][amphoeEn.key]
                      ? (thaiAddressEN[provinceEn.key][1][amphoeEn.key][1] as any[]).map((tambon: any, index: number) => {
                          return { key: index, label: tambon[0] }
                        })
                      : []
                  }
                  isOptionEqualToValue={(option, value) => option.key === value.key && option.label === value.label}
                  onChange={handleOnChangeTambonEn}
                  renderInput={(params) => <TextField {...params} label='ตำบล' />}
                  onInputChange={handleOnSelectTambonEn}
                />
              </Grid>

              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  id='combo-box-zipcode-en'
                  size='small'
                  fullWidth
                  disabled={tambonEn?.key === 0 && tambonEn?.label === '' ? true : false}
                  value={zipcodeEn}
                  options={
                    tambonEn && thaiAddressEN[provinceEn?.key] && thaiAddressEN[provinceEn.key][1][amphoeEn?.key]
                      ? (thaiAddressEN[provinceEn.key][1][amphoeEn.key][1][tambonEn.key][1] as any[]).map(
                          (zipcode: any, index: number) => ({
                            key: index,
                            label: zipcode.toString(),
                          })
                        )
                      : []
                  }
                  isOptionEqualToValue={(option, value) => option.key === value.key && option.label === value.label}
                  onChange={handleOnChangeZipcodeEn}
                  renderInput={(params) => <TextField {...params} label='รหัสไปรษณีย์' />}
                  onInputChange={handleOnSelectZipcodeEn}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Fragment>
  )

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
          {card}
        </Card>
        <Card variant='elevation'>{cardThaiAddressEn}</Card>
      </Container>
    </Fragment>
  )
}

export default App

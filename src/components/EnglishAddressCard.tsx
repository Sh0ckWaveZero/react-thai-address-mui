import React, { Fragment } from 'react'
import { Autocomplete, CardHeader, CardContent, Grid, Typography, TextField } from '@mui/material'

type AddressType = 'ProvinceEn' | 'AmphoeEn' | 'TambonEn' | 'ZipcodeEn'

interface EnglishAddressCardProps {
  data: any[]
  state: any
  onChange: (type: AddressType, event: any, newValue: any) => void
  onSelect: (type: AddressType, newValue: any) => void
}

const EnglishAddressCard: React.FC<EnglishAddressCardProps> = ({ data, state, onChange, onSelect }) => {
  return (
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
                  options={data.map((province: any, index: number) => {
                    return { key: index, label: province[0] }
                  })}
                  isOptionEqualToValue={(option, value) => option.key === value.key && option.label === value.label}
                  onChange={(event: any, value: any) => onChange('ProvinceEn', event, value)}
                  renderInput={(params) => <TextField {...params} label='จังหวัด' />}
                  onInputChange={(_, value: any) => onSelect('ProvinceEn', value)}
                />
              </Grid>

              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  id='combo-box-amphoe-en'
                  size='small'
                  fullWidth
                  disabled={state.provinceEn?.key === 0 && state.provinceEn?.label === '' ? true : false}
                  value={state.amphoeEn}
                  options={
                    state.amphoeEn && data[state.provinceEn?.key] && data[state.provinceEn.key][1][state.amphoeEn.key]
                      ? (data[state.provinceEn.key][1] as any[]).map((amphoe: any, index: number) => {
                          return { key: index, label: amphoe[0] }
                        })
                      : []
                  }
                  isOptionEqualToValue={(option, value) => option.key === value.key && option.label === value.label}
                  onChange={(event: any, value: any) => onChange('AmphoeEn', event, value)}
                  renderInput={(params) => <TextField {...params} label='อำเภอ' />}
                  onInputChange={(_, value: any) => onSelect('AmphoeEn', value)}
                />
              </Grid>

              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  id='combo-box-tambon-en'
                  size='small'
                  fullWidth
                  disabled={state.amphoeEn?.key === 0 && state.amphoeEn?.label === '' ? true : false}
                  value={state.tambonEn}
                  options={
                    state.amphoeEn && data[state.provinceEn?.key] && data[state.provinceEn.key][1][state.amphoeEn.key]
                      ? (data[state.provinceEn.key][1][state.amphoeEn.key][1] as any[]).map((tambon: any, index: number) => {
                          return { key: index, label: tambon[0] }
                        })
                      : []
                  }
                  isOptionEqualToValue={(option, value) => option.key === value.key && option.label === value.label}
                  onChange={(event: any, value: any) => onChange('TambonEn', event, value)}
                  renderInput={(params) => <TextField {...params} label='ตำบล' />}
                  onInputChange={(_, value: any) => onSelect('TambonEn', value)}
                />
              </Grid>

              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  id='combo-box-zipcode-en'
                  size='small'
                  fullWidth
                  disabled={state.tambonEn?.key === 0 && state.tambonEn?.label === '' ? true : false}
                  value={state.zipcodeEn}
                  options={
                    state.tambonEn &&
                    data[state.provinceEn?.key] &&
                    data[state.provinceEn.key][1][state.amphoeEn?.key] &&
                    data[state.provinceEn.key][1][state.amphoeEn.key][1][state.tambonEn.key]
                      ? (data[state.provinceEn.key][1][state.amphoeEn.key][1][state.tambonEn.key][1] as any[]).map(
                          (zipcode: any, index: number) => ({
                            key: index,
                            label: zipcode.toString(),
                          })
                        )
                      : []
                  }
                  isOptionEqualToValue={(option, value) => option.key === value.key && option.label === value.label}
                  onChange={(event: any, value: any) => onChange('ZipcodeEn', event, value)}
                  renderInput={(params) => <TextField {...params} label='รหัสไปรษณีย์' />}
                  onInputChange={(_, value: any) => onSelect('ZipcodeEn', value)}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Fragment>
  )
}

export default EnglishAddressCard

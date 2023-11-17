import React, { Fragment } from 'react'
import { CardHeader, CardContent, Grid, Typography, TextField } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'

interface ThaiAddressCardProps {
  thaiAddress: any[]
  province: any
  amphoe: any
  tambon: any
  zipcode: any
  onChangeProvince: (event: any, newValue: any) => void
  onSelectProvince: (event: any, newValue: any) => void
  onChangeAmphoe: (event: any, newValue: any) => void
  onSelectAmphoe: (event: any, newValue: any) => void
  onChangeTambon: (event: any, newValue: any) => void
  onSelectTambon: (event: any, newValue: any) => void
  onChangeZipcode: (event: any, newValue: any) => void
  onSelectZipcode: (event: any, newValue: any) => void
}

const ThaiAddressCard: React.FC<ThaiAddressCardProps> = ({
  thaiAddress,
  province,
  amphoe,
  tambon,
  zipcode,
  onChangeProvince,
  onSelectProvince,
  onChangeAmphoe,
  onSelectAmphoe,
  onChangeTambon,
  onSelectTambon,
  onChangeZipcode,
  onSelectZipcode,
}) => {
  return (
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
                  onChange={onChangeProvince}
                  renderInput={(params) => <TextField {...params} label='จังหวัด' />}
                  onInputChange={onSelectProvince}
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
                  onChange={onChangeAmphoe}
                  renderInput={(params) => <TextField {...params} label='อำเภอ' />}
                  onInputChange={onSelectAmphoe}
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
                  onChange={onChangeTambon}
                  renderInput={(params) => <TextField {...params} label='ตำบล' />}
                  onInputChange={onSelectTambon}
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
                  onChange={onChangeZipcode}
                  renderInput={(params) => <TextField {...params} label='รหัสไปรษณีย์' />}
                  onInputChange={onSelectZipcode}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Fragment>
  )
}

export default ThaiAddressCard

import React, { Fragment } from 'react'
import { CardHeader, CardContent, Grid, Typography, TextField } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'

type AddressType = 'Province' | 'Amphoe' | 'Tambon' | 'Zipcode'
interface ThaiAddressCardProps {
  data: any[]
  state: any
  onChange: (type: AddressType, event: any, newValue: any) => void
  onSelect: (type: AddressType, newValue: any) => void
}

const ThaiAddressCard: React.FC<ThaiAddressCardProps> = ({ data, state, onChange, onSelect }) => {
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
                  options={data.map((province: any, index: number) => {
                    return { key: index, label: province[0] }
                  })}
                  isOptionEqualToValue={(option, value) => option.key === value.key && option.label === value.label}
                  onChange={(event: any, value: any) => onChange('Province', event, value)}
                  renderInput={(params) => <TextField {...params} label='จังหวัด' />}
                  onInputChange={(_, value: any) => onSelect('Province', value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  id='combo-box-amphoe'
                  size='small'
                  fullWidth
                  disabled={state.province?.key === 0 && state.province?.label === '' ? true : false}
                  value={state.amphoe}
                  options={
                    state.province && data[state.province?.key]
                      ? (data[state.province?.key][1] as any[]).map((amphoe: any, index: number) => {
                          return { key: index, label: amphoe[0] }
                        })
                      : []
                  }
                  isOptionEqualToValue={(option, value) => option.key === value.key && option.label === value.label}
                  onChange={(event: any, value: any) => onChange('Amphoe', event, value)}
                  renderInput={(params) => <TextField {...params} label='อำเภอ' />}
                  onInputChange={(_, value: any) => onSelect('Amphoe', value)}
                />
              </Grid>

              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  id='combo-box-tambon'
                  size='small'
                  fullWidth
                  disabled={state.amphoe?.key === 0 && state.amphoe?.label === '' ? true : false}
                  value={state.tambon}
                  options={
                    state.amphoe && data[state.province?.key] && data[state.province.key][1][state.amphoe.key]
                      ? (data[state.province.key][1][state.amphoe.key][1] as any[]).map((tambon: any, index: number) => {
                          return { key: index, label: tambon[0] }
                        })
                      : []
                  }
                  isOptionEqualToValue={(option, value) => option.key === value.key && option.label === value.label}
                  onChange={(event: any, value: any) => onChange('Tambon', event, value)}
                  renderInput={(params) => <TextField {...params} label='ตำบล' />}
                  onInputChange={(_, value: any) => onSelect('Tambon', value)}
                />
              </Grid>

              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  id='combo-box-zipcode'
                  size='small'
                  fullWidth
                  disabled={state.tambon?.key === 0 && state.tambon?.label === '' ? true : false}
                  value={state.zipcode}
                  options={
                    state.tambon &&
                    data[state.province?.key] &&
                    data[state.province.key][1][state.amphoe?.key] &&
                    data[state.province.key][1][state.amphoe.key][1][state.tambon.key]
                      ? (data[state.province.key][1][state.amphoe.key][1][state.tambon.key][1] as any[]).map(
                          (zipcode: any, index: number) => ({
                            key: index,
                            label: zipcode.toString(),
                          })
                        )
                      : []
                  }
                  isOptionEqualToValue={(option, value) => option.key === value.key && option.label === value.label}
                  onChange={(event: any, value: any) => onChange('Zipcode', event, value)}
                  renderInput={(params) => <TextField {...params} label='รหัสไปรษณีย์' />}
                  onInputChange={(_, value: any) => onSelect('Zipcode', value)}
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

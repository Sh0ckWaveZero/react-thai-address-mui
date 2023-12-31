import React, { Fragment } from 'react'
import { CardHeader, CardContent, Grid, Typography, TextField } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'

type AddressType = 'provinceTh' | 'amphoeTh' | 'tambonTh' | 'zipCodeTh'
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
                  onChange={(event: any, value: any) => onChange('provinceTh', event, value)}
                  renderInput={(params) => <TextField {...params} label='จังหวัด' />}
                  onInputChange={(_, value: any) => onSelect('provinceTh', value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  id='combo-box-amphoe'
                  size='small'
                  fullWidth
                  disabled={state.provinceTh?.key === 0 && state.provinceTh?.label === '' ? true : false}
                  value={state.amphoeTh}
                  options={
                    state.provinceTh && data[state.provinceTh?.key]
                      ? (data[state.provinceTh?.key][1] as any[]).map((amphoe: any, index: number) => {
                          return { key: index, label: amphoe[0] }
                        })
                      : []
                  }
                  isOptionEqualToValue={(option, value) => option.key === value.key && option.label === value.label}
                  onChange={(event: any, value: any) => onChange('amphoeTh', event, value)}
                  renderInput={(params) => <TextField {...params} label='อำเภอ' />}
                  onInputChange={(_, value: any) => onSelect('amphoeTh', value)}
                />
              </Grid>

              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  id='combo-box-tambon'
                  size='small'
                  fullWidth
                  disabled={state.amphoeTh?.key === 0 && state.amphoeTh?.label === '' ? true : false}
                  value={state.tambonTh}
                  options={
                    state.amphoeTh && data[state.provinceTh?.key] && data[state.provinceTh.key][1][state.amphoeTh.key]
                      ? (data[state.provinceTh.key][1][state.amphoeTh.key][1] as any[]).map((tambon: any, index: number) => {
                          return { key: index, label: tambon[0] }
                        })
                      : []
                  }
                  isOptionEqualToValue={(option, value) => option.key === value.key && option.label === value.label}
                  onChange={(event: any, value: any) => onChange('tambonTh', event, value)}
                  renderInput={(params) => <TextField {...params} label='ตำบล' />}
                  onInputChange={(_, value: any) => onSelect('tambonTh', value)}
                />
              </Grid>

              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  id='combo-box-zipcode'
                  size='small'
                  fullWidth
                  disabled={state.tambonTh?.key === 0 && state.tambonTh?.label === '' ? true : false}
                  value={state.zipcodeTh}
                  options={
                    state.tambonTh &&
                    data[state.provinceTh?.key] &&
                    data[state.provinceTh.key][1][state.amphoeTh?.key] &&
                    data[state.provinceTh.key][1][state.amphoeTh.key][1][state.tambonTh.key]
                      ? (data[state.provinceTh.key][1][state.amphoeTh.key][1][state.tambonTh.key][1] as any[]).map(
                          (zipcode: any, index: number) => ({
                            key: index,
                            label: zipcode.toString(),
                          })
                        )
                      : []
                  }
                  isOptionEqualToValue={(option, value) => option.key === value.key && option.label === value.label}
                  onChange={(event: any, value: any) => onChange('zipCodeTh', event, value)}
                  renderInput={(params) => <TextField {...params} label='รหัสไปรษณีย์' />}
                  onInputChange={(_, value: any) => onSelect('zipCodeTh', value)}
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

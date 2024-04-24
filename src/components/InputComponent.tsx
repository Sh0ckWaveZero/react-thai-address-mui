import { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'

const InputComponent = () => {
  const [value, setValue] = useState('คนไข้แปลงร่างในนิทานเก่า มีพื้นผิวอย่างไร')

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <TextField
        fullWidth
        multiline
        variant='outlined'
        label='คำอธิบาย'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        sx={{
          bgcolor: 'common.white',
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
          '& .MuiOutlinedInput-root': {
            bgcolor: 'common.white',
            py: 5,
            borderRadius: 4,
            '&.Mui-focused': {
              bgcolor: 'common.white',
            },
          },
        }}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          bottom: 10,
          right: 20,
        }}
      >
        <IconButton size='small' color='success'>
          <CheckIcon />
        </IconButton>
        <IconButton size='small' color='error'>
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default InputComponent

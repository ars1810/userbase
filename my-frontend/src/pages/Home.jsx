// src/pages/Home.jsx
import { Container, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Userbase
      </Typography>
      <div style={{ textAlign: 'center' }}>
        <Button component={Link} to="/register" variant="contained" sx={{ mr: 2 }}>
          Register
        </Button>
        <Button component={Link} to="/login" variant="outlined">
          Login
        </Button>
      </div>
    </Container>
  )
}

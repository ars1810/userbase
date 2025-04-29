// src/pages/Home.jsx
import { Container, Typography, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Container sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h2" gutterBottom>
        Welcome to UserBase
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        A modern authentication system built with Go & React
      </Typography>
      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button component={Link} to="/register" variant="contained">
          Get Started
        </Button>
        <Button component={Link} to="/login" variant="outlined">
          Login
        </Button>
      </Box>
    </Container>
  )
}

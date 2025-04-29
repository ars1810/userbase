// src/pages/Home.jsx
import { Button, Container, Typography, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <Container sx={{ mt: 5, textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>
        Welcome to UserBase
      </Typography>
      <Typography variant="h6" paragraph>
        A simple and secure platform to manage your data.
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ mr: 2 }}
          onClick={() => navigate('/login')}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => navigate('/register')}
        >
          Register
        </Button>
      </Box>
    </Container>
  )
}

import { Container, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Dashboard
      </Typography>
      <Typography align="center">
        Selamat datang di aplikasi!
      </Typography>
      <Button variant="contained" sx={{ mt: 4 }} onClick={() => navigate('/profile')}>
        Go to Profile
      </Button>
    </Container>
  )
}

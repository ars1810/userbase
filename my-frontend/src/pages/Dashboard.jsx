// src/pages/Dashboard.jsx
import {
  Container, Typography, Card, CardContent, CardActions, Button, Grid
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h5">Profile</Typography>
              <Typography color="text.secondary">
                View and edit your profile
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => navigate('/profile')} size="small">
                Go
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* add more cards as needed */}
      </Grid>
    </Container>
  )
}

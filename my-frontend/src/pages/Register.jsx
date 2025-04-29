// src/pages/Register.jsx
import { useState } from 'react'
import { TextField, Button, Container, Typography, Alert } from '@mui/material'
import API from '../api/api'
import { toast } from 'react-toastify'

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await API.post('/register', form)
      toast.success('Login sukses!')
    } catch (err) {
      toast.error('Login gagal!')
    }
  }

  return (
    <Container>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Register
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Register
        </Button>
      </form>
    </Container>
  )
}

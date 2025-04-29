import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Typography, Button, TextField, Box, Alert } from '@mui/material'
import API from '../api/api'
import { useRef } from 'react'

export default function Profile() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [form, setForm] = useState({ name: '', email: '' })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const fileInput = useRef(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login')
    } else {
      API.get('/me', {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => {
          setUser(res.data)
          setForm({ name: res.data.name, email: res.data.email })
        })
        .catch(() => {
          localStorage.removeItem('token')
          navigate('/login')
        })
    }
  }, [navigate])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem('token')
      await API.put('/update-profile', form, {
        headers: { Authorization: `Bearer ${token}` }
      })
      setSuccess('Profile updated successfully!')
      setError('')
    } catch (err) {
      setError(err.response?.data?.error || 'Update gagal!')
      setSuccess('')
    }
  }

  const handleUpload = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('photo', file)
  
    try {
      const token = localStorage.getItem('token')
      await API.post('/upload-photo', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      })
      alert('Foto berhasil diupload!')
    } catch (err) {
      console.error(err)
    }
  }
   

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <Container sx={{ mt: 5 }}>
      {user ? (
        <>
          <Typography variant="h4" gutterBottom>Profile</Typography>
  
          {/* Alert Success/Error */}
          {success && <Alert severity="success">{success}</Alert>}
          {error && <Alert severity="error">{error}</Alert>}
  
          {/* Update Profile Form */}
          <Box component="form" onSubmit={handleUpdate} sx={{ mt: 3 }}>
            <TextField
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Save Changes
            </Button>
          </Box>
  
          {/* Upload Photo Section */}
          <Box sx={{ mt: 4 }}>
            <input
              type="file"
              ref={fileInput}
              style={{ display: 'none' }}
              onChange={handleUpload}
            />
            <Button
              variant="outlined"
              onClick={() => fileInput.current.click()}
              fullWidth
            >
              Upload Photo
            </Button>
          </Box>
  
          {/* Logout Section */}
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="error"
              fullWidth
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Box>
        </>
      ) : (
        <Typography>Loading...</Typography>
      )}
    </Container>
  )
}  
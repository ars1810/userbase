package config

import (
    "gorm.io/gorm"
    "gorm.io/driver/postgres" // Import driver PostgreSQL
    "log"
)

var DB *gorm.DB

func ConnectDatabase() {
    var err error

    dsn := fmt.Sprintf(
  "host=%s user=%s password=%s dbname=%s port=%s sslmode=disable",
  os.Getenv("DB_HOST"),
  os.Getenv("DB_USER"),
  os.Getenv("DB_PASSWORD"),
  os.Getenv("DB_NAME"),
  os.Getenv("DB_PORT"),
)

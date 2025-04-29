package config

import (
	"fmt"
	"log"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDatabase() {
	// Ambil variable environment untuk koneksi database
	dsn := fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s port=%s sslmode=disable",
		os.Getenv("DB_HOST"), // Ambil host dari environment
		os.Getenv("DB_USER"), // Ambil user dari environment
		os.Getenv("DB_PASSWORD"), // Ambil password dari environment
		os.Getenv("DB_NAME"), // Ambil nama database dari environment
		os.Getenv("DB_PORT"), // Ambil port dari environment
	)

	var err error
	// Inisialisasi koneksi ke database
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Failed to connect to database: %v", err)  // Menangani error saat gagal konek
	} else {
		log.Println("Database connected!")
	}
}

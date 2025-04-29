package config

import (
    "gorm.io/gorm"
    "gorm.io/driver/postgres" // Import driver PostgreSQL
    "log"
)

var DB *gorm.DB

func ConnectDatabase() {
    var err error

    // Ganti dengan connection string PostgreSQL
    dsn := "host=localhost user=postgres password=1810 dbname=expense_db port=5432 sslmode=disable"
    DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
    if err != nil {
        log.Fatal("Failed to connect to database:", err)
    }

    log.Println("Database connected!")
}

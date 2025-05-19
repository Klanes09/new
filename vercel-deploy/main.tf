terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 1.0"
    }
  }
}

provider "vercel" {
  api_token = var.vercel_token
}

variable "vercel_token" {
  description = "Vercel API Token"
  type        = string
}

resource "vercel_project" "my_site" {
  name      = "kland-site"

  git_repository = {
    type   = "github"
    repo   = "Klanes09/new"
  }

  build_command = "" # no build command needed for static sites
  output_directory = "website" # root folder
}
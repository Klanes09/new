WEBSITE: https://kland-site.vercel.app/
___________________________________________________________________________________________________________________________________________________________

Frontend: HTML, CSS, JAVASCRIPT
Backend: Firebase Database

The Website if hosted/deployed on Vercel using Terraform

Used HTML for the structure of the site, CSS for the design and JS for the functionality of the website.
The backend is Firebase Database. When something commented on the site the site send the data to firebase and displayed on the site.

Regarding the deletion of the comment I can easily delete the comment in the firebase database.

The database is connected in the script.js file where the api key, and project name is in it. :)

____________________________________________________________________________________________________________________________________________________________

After finishing the site I uploaded it using Terraform and hosted in Vercel.

Using this script/command- main.tf

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



File Structure:
    
    vercel-deployment──────────────│ 
    │   ├── .terraform.lock.hcl    │ 
    │   ├── main.tf                │ 
    │   ├── terraform.tfstate      │ 
    │   ├── variable.tf            │ 
    website--                      │ 
    │   ├──images                  │ 
    │   │   ├── Klands.jfif        │ 
    │   │                          │ 
    │   ├── design.css             │ 
    │   ├── index.html             │ 
    │   ├── index.js               │ 
    │   ├── script.js              │ 
    │   ├──────────────────────────│ 

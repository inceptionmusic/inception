job "api" {
  datacenters = ["dc1"]
  type = "service"

  group "web" {
    network {
      port "http" {
        to = 80
      }
    }

    service {
      name = "api"
      port = "http"

      check {
        type = "http"
        path = "/"
        interval = "10s"
        timeout = "2s"
      }

      tags = [
        "traefik.enable=true",
        "traefik.http.routers.api.rule=Host(`api.inceptionmusic.com`)",
        "traefik.http.routers.api.entrypoints=websecure",
        "traefik.http.routers.api.tls.certresolver=lets-encrypt"
      ]
    }

    task "nginx" {
      driver = "docker"

      config {
        image = "" //TODO: update to proper image
        ports = ["http"]
      }
    }
  }
}

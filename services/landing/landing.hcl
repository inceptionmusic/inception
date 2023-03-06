job "landing" {
  datacenters = ["dc1"]
  type = "service"

  group "web" {
    network {
      port "http" {
        to = 80
      }
    }

    service {
      name = "landing"
      port = "http"

      check {
        type = "http"
        path = "/"
        interval = "10s"
        timeout = "2s"
      }

      tags = [
        "traefik.enable=true",
        "traefik.http.routers.landing.rule=Host(`inceptionmusic.com`)",
        "traefik.http.routers.landing.entrypoints=websecure",
        "traefik.http.routers.landing.tls.certresolver=lets-encrypt"
      ]
    }

    task "nginx" {
      driver = "docker"

      config {
        image = "ghcr.io/inceptionmusic/inception-landing"
        ports = ["http"]
      }
    }
  }
}

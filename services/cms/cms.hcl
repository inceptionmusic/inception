job "cms" {
  datacenters = ["dc1"]
  type = "service"

  group "web" {
    network {
      port "http" {
        to = 80
      }
    }

    service {
      name = "cms"
      port = "http"

      check {
        type = "http"
        path = "/"
        interval = "10s"
        timeout = "2s"
      }

      tags = [
        "traefik.enable=true",
        "traefik.http.routers.cms.rule=Host(`cms.inceptionmusic.com`)",
        "traefik.http.routers.cms.entrypoints=websecure",
        "traefik.http.routers.cms.tls.certresolver=lets-encrypt"
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
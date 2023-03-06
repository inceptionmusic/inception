job "client" {
  datacenters = ["dc1"]
  type = "service"

  group "web" {
    network {
      port "http" {
        to = 80
      }
    }

    service {
      name = "client"
      port = "http"

      check {
        type = "http"
        path = "/"
        interval = "10s"
        timeout = "2s"
      }

      tags = [
        "traefik.enable=true",
        "traefik.http.routers.client.rule=Host(`client.inceptionmusic.com`)",
        "traefik.http.routers.client.entrypoints=websecure",
        "traefik.http.routers.client.tls.certresolver=lets-encrypt"
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

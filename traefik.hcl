job "traefik" {
  datacenters = ["dc1"]
  type        = "service"

  group "traefik" {
    network {
      port "http"{
        static = 80
      }
      port "https" {
        static = 443
      }
      port "admin"{
        static = 8081
      }
    }

    service {
      name = "traefik-http"
      port = "https"
    }

    task "traefik" {
      driver = "docker"
      config {
        image = "traefik"
        network_mode = "host"

        volumes = [
          "local/traefik.toml:/etc/traefik/traefik.toml",
          "local/traefik_dynamic.toml:/etc/traefik/traefik_dynamic.toml"
        ]
      }

      template {
        data = <<EOF
[entryPoints]
  [entryPoints.web]
  address = ":80"
  [entryPoints.web.http.redirections.entryPoint]
    to = "websecure"
    scheme = "https"

  [entryPoints.websecure]
  address = ":443"

  [entryPoints.traefik]
  address = ":8081"

[api]
  dashboard = true
  insecure  = true
  debug = true

[providers.consulCatalog]
  prefix = "traefik"
  exposedByDefault = false
  [providers.consulCatalog.endpoint]
    address = "127.0.0.1:8500"
    scheme  = "http"

[providers.nomad]
  prefix = "traefik"
  [providers.nomad.endpoint]
    address = "http://127.0.0.1:4646"

[certificatesResolvers.lets-encrypt.acme]
  email = "jamesthackett1@gmail.com"
  storage = "local/acme.json"
  [certificatesResolvers.lets-encrypt.acme.tlsChallenge]

[providers.file]
  filename = "local/traefik_dynamic.toml"
EOF
        destination = "local/traefik.toml"
      }

      template {
        data = <<EOH
#[http.routers.custom_proxy]
#  rule = "Host(`custom_domain`)"
#  entryPoints = ["websecure"]
#  service = "custom_proxy"
#  [http.routers.custom_proxy.tls]
#    certResolver = "lets-encrypt"
#
#[[http.services.custom_proxy.loadBalancer.servers]]
#  url = "http://192.168.1.5:5007/"
EOH
        destination = "local/traefik_dynamic.toml"
      }
    }
  }
}
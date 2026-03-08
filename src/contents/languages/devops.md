---
id: devops
name: DevOps
icon: /icons/devops.svg
level: expert
order: 7
modules:
    - name: Docker
      icon: /icons/docker/docker-original.svg
    - name: Kubernetes
      icon: /vendor-icons/kubernetes.svg
    - name: Helm
      icon: /icons/helm.svg
    - name: ArgoCD
      icon: /icons/argocd/argocd-original.svg
---

I started my DevOps career at the dormitory by managing web servers scattered around shared hosting and VMs. This was a cumbersome and insecure way, so naturally we searched for solutions and found containerization.

I turned dozens of services into minimal Alpine-based Docker images: WordPress, Laravel, OpenLDAP, Bind DNS, and replicated MariaDB. In a few years we turned our infrastructure from undocumented VMs to mostly containerized single-node workloads.

As the number of services increased, they started to outgrow the specialized Docker VMs, and we put together a self-hosted Kubernetes cluster. We manage the networking (MetalLB, Traefik), storage (Ceph) and monitoring (Prometheus), while everything is deployed with Helm charts, and automatically rolled out by ArgoCD.

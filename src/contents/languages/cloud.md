---
id: cloud
name: Cloud
icon: /icons/cloud.svg
level: capable
order: 6
modules:
    - name: AWS
      icon: /icons/aws.svg
    - name: ArgoCD
      icon: /icons/argocd/argocd-original.svg
    - name: Terraform
      icon: /vendor-icons/terraform.svg
---

I always preferred self-hosting to the cloud. However when I was first exposed to the global cybersecurity scanning in Tenable.ASM at DONE., I realized that some things are not possible without the power of the cloud. I was tasked with the cleaning up and management of a service building up from more than 50 microservices, including EKS, Elastic Beanstalk and terabytes of ElasticSearch data.

My job was figuring out ways to make our deployments more reproducible. I migrated our scanning infrastructure into EKS, deploying it automatically with ArgoCD. I Terraformed many parts of our cloud operations, including EKS clusters, ElasticSearch domains, IAM permissions and VPCs. The work of our team improved ease-of-use, monitoring and compliance of the whole operation.

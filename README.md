# Node Hostname Application

A simple Node.js application that displays host information, deployed on Kubernetes using Minikube.

## Prerequisites

- **Docker:** [Installation Guide](https://docs.docker.com/get-docker/)
- **Minikube:** [Installation Guide](https://minikube.sigs.k8s.io/docs/start/)
- **Helm:** [Installation Guide](https://helm.sh/docs/intro/install/)

## Installation & Deployment

1. **Download from GitHub**

   Either clone the repository:

   ```bash
   git clone https://github.com/FredrikCarllssn/node-hostname.git
   cd node-hostname
   ```

   Or download directly from GitHub:

   1. Go to https://github.com/FredrikCarllssn/node-hostname
   2. Click the green "Code" button
   3. Select "Download ZIP"
   4. Extract the ZIP file and navigate to the directory:
      ```bash
      cd node-hostname
      ```

2. **Start Minikube**

   ```bash
   minikube start
   ```

3. **Enable NGINX Ingress**

   ```bash
   minikube addons enable ingress
   ```

4. **Deploy with Helm**

   ```bash
   helm install node-hostname ./helm-chart
   ```

5. **Configure Local DNS**

   ```bash
   echo "$(minikube ip) node-hostname.test" | sudo tee -a /etc/hosts
   ```

The application will be accessible at `https://node-hostname.test`

## Usage

The application exposes the following endpoints:

- `GET /`: Returns the hostname, version, and timestamp
- `GET /users`: Placeholder for user resources
- `GET /crash`: Simulates a server crash for testing purposes

### Example Response

```json
{
  "hostname": "your-machine-name",
  "version": "0.0.1",
  "timestamp": "2023-10-05T14:48:00.000Z"
}
```

## TODO

- [ ] Check performance specs
- [ ] Make a build workflow for helm
- [ ] Write tests
- [ ] Add environment-specific values
- [ ] Add monitoring
- [ ] Make environment run on more than one cluster

## License

This project is licensed under the MIT License.

run it using 

```bash 
docker build -t scapi:latest -f Dockerfile.ex .
docker run -dp 3000:3000 --name scapi_container scapi
```

stop it using 

```bash 
docker stop scapi_container
```
#!/usr/bin/env bash
docker-compose stop
yes | docker-compose rm

docker ps -a --format '{{.Names}} {{.Status}}' | grep 'Exited' | awk '{print $1}' | xargs docker rm

docker-compose build
docker-compose up -d
docker-compose ps

aws dynamodb create-table \
    --table-name application \
    --attribute-definitions '[{
        "AttributeName": "key",
        "AttributeType": "S"
    }]' \
    --provisioned-throughput '{
        "ReadCapacityUnits": 5,
        "WriteCapacityUnits": 5
    }' \
    --key-schema '[{
        "KeyType": "HASH",
        "AttributeName": "key"
    }]' \
    --endpoint-url http://0.0.0.0:8000

aws dynamodb create-table \
    --table-name account \
    --attribute-definitions '[{
        "AttributeName": "email",
        "AttributeType": "S"
    }]' \
    --key-schema '[{
        "KeyType": "HASH",
        "AttributeName": "email"
    }]' \
    --provisioned-throughput '{
        "ReadCapacityUnits": 5,
        "WriteCapacityUnits": 5
    }' \
    --endpoint-url http://docker.devel:8000

# node mock.js

